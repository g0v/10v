require! <[express colors pino path lderror pino-http express-routes-catalogue redis util]>
console.log express-routes-catalogue

app = express!

# consider how things like password should be removed
logger = pino-http { logger: log = pino!, auto-logging: false}
app.use logger

_redis-client = redis.createClient!
_redis-client.on \error, (err) -> log.error err
redis-client =
  get: util.promisify(_redis-client.get).bind(_redis-client)
  set: util.promisify(_redis-client.set).bind(_redis-client)

redis-client.set \x, 123

app.use \/api, (api = express.Router {mergeParams: true})

api.get \/x, (req, res, next) ->
  return next new lderror(1005)

app.get \/x, (req, res, next) ->
  redis-client.get \x .then -> 
    #req.log.info it
    #req.log.info 'access /x'
    #a = null
    #a.blah = 2
    return next new lderror(1006)

# 1. custom error by various package - handle by case and wrapped in ldError
# 2. custom error from this codebase ( wrapped in ldError ) - pass to frontend with ldError
# 3. trivial, unskippable error - ignore
# 4. log all unexpected error.
app.use (err, req, res, next) ->
  if !err => return next!
  # delegate csrf token mismatch to lderror handling
  if err.code == \EBADCSRFTOKEN => err = new lderror(1005)
  if lderror.id(err) =>
    # customized error - pass to frontend for them to handle
    delete err.stack
    # serve a friendly error page if it's not an API
    if !/^\/api/.exec(req.url) => res.set {"Content-Type": "text/html", "X-Accel-Redirect": "/err/490"}
    # cookie domain: webmasters.stackexchange.com/questions/55790
    #  - no domain: request-host will be used
    #  - with domain: start with a dot. similar to *.some.site
    res.cookie "lderror", JSON.stringify(err), {maxAge: 60000, httpOnly: false, secure: true, sameSite: 'Strict'}
    return res.status 490 .send err
  else if (err instanceof URIError) and "#{err.stack}".startsWith('URIError: Failed to decode param') =>
    # errors to be ignored, due to un-skippable error like body json parsing issue
    return res.status 400 .send!
  else
    # unhandled exceptions - we should log all of them
    res.status 500 .send!

app.use \/, express.static(path.join(__dirname, '.'))
server = app.listen 8901, ->
  log.info "[SERVER] listening on port #{server.address!port}".cyan
  /*
  app._router.stack.map (r) ->
    if r.route => console.log r.route.path
    if r.handle.stack => 
      r.handle.stack.map ->
        console.log r.regexp.toString!, it.route.path
  */
  express-routes-catalogue.default.terminal(app)




