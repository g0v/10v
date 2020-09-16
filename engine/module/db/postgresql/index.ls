require! <[pg crypto bcrypt colors lderror]>

pg.defaults.poolSize = 30

ret = (backend) ->
  @config = config = backend.config
  @log = log = backend.log.child {module: 'DB'}
  {user, password, host, database} = config.db.postgresql
  @uri = "postgres://#{user}:#{password}@#{host}/#{database}"

  @pool = new pg.Pool do
    connectionString: @uri
    max: config.db.postgresql.poolSize or 20
    idleTimeoutMillis: 30000
    connectionTimeoutMillis: 2000

  @pool.on \error, (err, client) -> log.error "db pool error".red

  @authio = authio = do
    user: do
      # store whole object ( no serialization )
      serialize: (user={}) -> Promise.resolve( user or {} )
      deserialize: (v) ~> Promise.resolve( v or {})

      # store only key
      #serialize: (user={}) -> Promise.resolve( user.key or 0 )
      #deserialize: (v) ~>
      #  @query "select * from users where key = $1", [v]
      #    .then (r={}) -> r.[]rows.0

      hashing: (password, doMD5 = true, doBcrypt = true) -> new Promise (res, rej) ->
        ret = if doMD5 => crypto.createHash(\md5).update(password).digest(\hex) else password
        if doBcrypt => bcrypt.genSalt 12, (e, salt) -> bcrypt.hash ret, salt, (e, hash) -> res hash
        else res ret

      compare: (password='', hash) -> new Promise (res, rej) ->
        md5 = crypto.createHash(\md5).update(password).digest(\hex)
        bcrypt.compare md5, hash, (e, ret) -> if ret => res! else rej new Error!

      get: (username, password, usepasswd, detail, doCreate = false) ~>
        username-lower = username.toLowerCase!
        if !/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.[a-z]{2,}|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.exec(username) =>
          return Promise.reject lderror(1015)
        user = {}

        # We query both for case sensitive and insensitive username, because
        # - if it's not a typo - some old users may already get used to it.
        # - it it's a typo - we can at least find the correct user object for new user
        @query "select * from users where username = $1 or username = $2", [username, username-lower]
          .then (users = {}) ~>
            # case sensitive user ( only for old user )
            user := users.rows.filter(-> it.username == username).0
            # case insensitive ( both for old and new user )
            if !user => user := users.rows.filter(->it.username == username-lower).0
            if !user and !doCreate => return Promise.reject new lderror(1012)
            if !user and doCreate => return @authio.user.create username-lower, password, usepasswd, detail
            else if user and !(usepasswd or user.usepasswd) =>
              delete user.password
              return user
            @authio.user.compare password, user.password
          .then ~>
            if it => user := (if user => user else {}) <<< it
            if !user.{}config.{}consent.cookie =>
              user.{}config.{}consent.cookie = new Date!getTime!
              @query "update users set config = $2 where key = $1", [user.key, user.config]
          .then ->
            delete user.password
            return user

      create: (username, password, usepasswd, detail = {}, config = {}) ~>
        user = {}
        username = username.toLowerCase!
        if !/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.[a-z]{2,}|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.exec(username) =>
          return Promise.reject new lderror(1015)
        @authio.user.hashing password, usepasswd, usepasswd
          .then (pw-hashed) ~>
            displayname = if detail => detail.displayname or detail.username
            if !displayname => displayname = username.replace(/@.+$/, "")
            config.{}consent.cookie = new Date!getTime!
            user <<< {username, password: pw-hashed, usepasswd, displayname, detail, config, createdtime: new Date!}
            @query [
              "insert into users"
              "(username,password,usepasswd,displayname,createdtime,detail,config) values"
              "($1,$2,$3,$4,$5,$6,$7) returning key"
            ].join(" "), [
              user.username, user.password, user.usepasswd,
              user.displayname, new Date!toUTCString!, user.detail, user.config
            ]
          .then (r) ~>
            key = r.[]rows.0.key
            return user <<< {key}

    session: do
      get: (sid, cb) !~>
        @query "select * from sessions where key=$1", [sid]
          .then -> cb null, (it.[]rows.0 or {}).detail
          .catch (err) -> [log.error({err}, "get session failed"), cb(err)]
      set: (sid, session, cb) !~>
        @query([
          "insert into sessions (key,detail) values"
          "($1, $2) on conflict (key) do update set detail=$2"].join(" "), [sid, session])
          .then -> cb!
          .catch (err) -> [log.error({err},"set session failed"), cb!]
      destroy: (sid, cb) !~>
        @query "delete from sessions where key = $1", [sid]
          .then -> cb!
          .catch (err) -> [log.error({err}, "destroy session failed"),cb!]
  @

ret.prototype = do
  query: (q, p) ->
    @pool.connect!
      .then (client) -> 
        (ret) <- client.query q, p .then _
        client.release!
        return ret
      .catch ->
        Promise.reject new lderror {err: it, id: 0, query: q, message: "database query error"}

module.exports = ret

