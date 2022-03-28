require! <[express-session events]>

session-store = (opt = {}) ->
  events.EventEmitter.call @
  @db = opt.db
  @log = opt.logger
  @lifespan = opt.lifespan or (1 * 60 * 24 * 365)
  # this may have to be externalized for server scaling
  @cleaner-interval = (opt.cleaner-interval or (86400 * 1000) >? 10 * 60 * 1000)
  if !opt.query-only =>
    @handler = setInterval (~>@trim!), @cleaner-interval
    @handler.unref!
    # run first trim later after database initialized
    setTimeout (~> @trim!), 3000
  @

session-store.prototype = {} <<< express-session.Store.prototype <<< do
  trim: !->
    @log.info "removing expired sessions ..."
    @db.query "delete from session where ttl < now()"
      .then ~> @log.info "removing expired sessions done."
      .catch (e) ~> @log.warn {err: e}, "failed to remove expired sessions."
  get: (sid, cb) !->
    @db.query "select * from session where key=$1", [sid]
      .then -> cb null, (it.[]rows.0 or {}).detail
      .catch (err) ~> [@log.error({err}, "get session failed"), cb(err)]
  set: (sid, session, cb) !->
    owner = if session.passport => if that.user => that.key else null
    ip = if session.passport => if that.user => that.ip else null
    @db.query("""insert into session
    (key, detail, owner, ip, ttl) values ($1, $2, $3, $4, now() + $5 * interval '1 second')
    on conflict (key) do
      update set (detail, owner, ip, ttl) = ($2, $3, $4, now() + $5 * interval '1 second')
    """, [sid, session, owner, ip, @lifespan])
      .then -> cb!
      .catch (err) ~> [@log.error({err},"set session failed"), cb!]
  destroy: (sid, cb) !->
    @db.query "delete from session where key = $1", [sid]
      .then -> cb!
      .catch (err) ~> [@log.error({err}, "destroy session failed"), cb!]
  touch: (sid, cb) !->
    @db.query "update session set ttl = now() + $2 * interval '1 second' where key = $1", [sid, @lifespan]
      .then -> cb!
      .catch (err) ~> [@log.error({err}, "touch session failed"), cb!]

session-store.prototype.__proto__ = express-session.Store.prototype.__proto__

module.exports = session-store
