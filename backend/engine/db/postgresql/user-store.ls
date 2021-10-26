require! <[crypto bcrypt lderror re2 curegex]>

re-email = curegex.tw.get('email', re2)
is-email = -> return re-email.exec(it)

user-store = (opt = {}) ->
  @db = opt.db
  @

user-store.prototype = Object.create(Object.prototype) <<< do
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

  get: ({username, password, method, detail, create}) ->
    username = username.toLowerCase!
    if !(is-email username) => return Promise.reject new lderror(1015)
    @db.query "select * from users where username = $1", [username]
      .then (ret = {}) ~>
        if !(user = ret.[]rows.0) and !create => return Promise.reject(new lderror(1012))
        if !user => return @create {username, password, method, detail}
        if !(method == \local or user.method == \local) =>
          delete user.password
          return user
        @compare password, user.password .then ~> user
      .then (user) ~>
        if user.{}config.{}consent.cookie => return user
        user.config.consent.cookie = new Date!getTime!
        @db.query "update users set config = $2 where key = $1", [user.key, user.config] .then -> user
      .then (user) ->
        delete user.password
        return user

  create: ({username, password, method, detail, config}) ->
    username = username.toLowerCase!
    if !config => config = {}
    if !is-email(username) => return Promise.reject new lderror(1015)
    Promise.resolve!
      .then ~> if method == \local => @hashing(password) else password
      .then (password) ~>
        displayname = if detail => detail.displayname or detail.username
        if !displayname => displayname = username.replace(/@.+$/, "")
        config.{}consent.cookie = new Date!getTime!
        user = { username, password, method, displayname, detail, config, createdtime: new Date! }
        @db.query """
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

module.exports = user-store
