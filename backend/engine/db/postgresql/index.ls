require! <[pg crypto bcrypt colors lderror re2 curegex]>

re-email = curegex.tw.get('email', re2)
is-email = -> return re-email.exec(it)

pg.defaults.poolSize = 30

ret = (backend) ->
  @config = config = backend.config
  @log = log = backend.log.child {module: 'DB'}
  {user, password, host, database, port} = config.db.postgresql
  @uri = "postgres://#{user}:#{password}@#{host}#{if port => ':' + port else ''}/#{database}"

  @pool = new pg.Pool do
    connectionString: @uri
    max: config.db.postgresql.poolSize or 20
    idleTimeoutMillis: 30000
    connectionTimeoutMillis: 2000

  @pool.on \error, (err, client) -> log.error "db pool error".red

  @auth = auth = do
    user: do
      # store whole object ( no serialization )
      serialize: (u = {}) -> Promise.resolve u
      deserialize: (v = {}) -> Promise.resolve v
      hashing: (password, doMD5 = true, doBcrypt = true) -> new Promise (res, rej) ->
        ret = if doMD5 => crypto.createHash(\md5).update(password).digest(\hex) else password
        if doBcrypt => bcrypt.genSalt 12, (e, salt) -> bcrypt.hash ret, salt, (e, hash) -> res hash
        else res ret

      compare: (password='', hash) -> new Promise (res, rej) ->
        md5 = crypto.createHash(\md5).update(password).digest(\hex)
        bcrypt.compare md5, hash, (e, ret) -> if ret => res! else rej new lderror(1012)

      get: ({username, password, method, detail, create}) ~>
        username = username.toLowerCase!
        if !(is-email username) => return Promise.reject new lderror(1015)
        @query "select * from users where username = $1", [username]
          .then (ret = {}) ~>
            if !(user = ret.[]rows.0) and !create => return Promise.reject(new lderror(1012))
            if !user => return @auth.user.create {username, password, method, detail}
            if !(method == \local or user.method == \local) =>
              delete user.password
              return user
            @auth.user.compare password, user.password .then ~> user
          .then (user) ~>
            if user.{}config.{}consent.cookie => return user
            user.config.consent.cookie = new Date!getTime!
            @query "update users set config = $2 where key = $1", [user.key, user.config] .then -> user
          .then (user) ->
            delete user.password
            return user

      create: ({username, password, method, detail, config}) ~>
        username = username.toLowerCase!
        if !config => config = {}
        if !is-email(username) => return Promise.reject new lderror(1015)
        Promise.resolve!
          .then ~> if method == \local => @auth.user.hashing(password) else password
          .then (password) ~>
            displayname = if detail => detail.displayname or detail.username
            if !displayname => displayname = username.replace(/@.+$/, "")
            config.{}consent.cookie = new Date!getTime!
            user = { username, password, method, displayname, detail, config, createdtime: new Date! }
            @query """
            insert into users (username,password,method,displayname,createdtime,detail,config)
            values ($1,$2,$3,$4,$5,$6,$7)
            returning key
            """, [
              username, password, method, displayname,
              new Date!toUTCString!, detail, config
            ]
              .then (r={}) ->
                if !(r = r.[]rows.0) => return Promise.reject 500
                return user <<< r{key}

    session: do
      get: (sid, cb) !~>
        @query "select * from session where key=$1", [sid]
          .then -> cb null, (it.[]rows.0 or {}).detail
          .catch (err) -> [log.error({err}, "get session failed"), cb(err)]
      set: (sid, session, cb) !~>
        owner = if session.passport => if that.user => that.key else null
        @query([
          "insert into session (key,detail,owner) values"
          "($1, $2, $3) on conflict (key) do update set (detail,owner)=($2,$3)"].join(" "), [sid, session, owner])
          .then -> cb!
          .catch (err) -> [log.error({err},"set session failed"), cb!]
      destroy: (sid, cb) !~>
        @query "delete from session where key = $1", [sid]
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

