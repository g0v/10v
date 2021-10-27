require! <[pg crypto bcrypt colors lderror re2 curegex ./session-store ./user-store]>

pg.defaults.poolSize = 30

database = (backend) ->
  @config = config = backend.config
  @log = log = backend.log.child {module: 'db'}
  {user, password, host, database, port} = config.db.postgresql
  @uri = "postgres://#{user}:#{password}@#{host}#{if port => ':' + port else ''}/#{database}"

  @pool = new pg.Pool do
    connectionString: @uri
    max: config.db.postgresql.poolSize or 20
    idleTimeoutMillis: 30000
    connectionTimeoutMillis: 2000

  @pool.on \error, (err, client) -> log.error "db pool error".red

  @session-store = new session-store {db: @, session: backend.config.session.max-age, logger: log}
  @user-store = new user-store {db: @, logger: log}

  @

database.prototype = Object.create(Object.prototype) <<< do
  query: (q, p) ->
    @pool.connect!
      .then (client) -> 
        (ret) <- client.query q, p .then _
        client.release!
        return ret
      .catch ->
        Promise.reject new lderror {err: it, id: 0, query: q, message: "database query error"}

module.exports = database

