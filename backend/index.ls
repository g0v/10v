require! <[express colors path pino lderror pino-http redis util body-parser csurf]>
require! <[i18next-http-middleware]>
require! <[@plotdb/srcbuild]>
require! <[@plotdb/srcbuild/dist/view/pug]>
require! <[./error-handler ./route ./redis-node]>
require! <[./module/auth ./module/i18n ./module/aux ./module/db/postgresql]>
require! <[../config/private/secret]>

default-config = do
  limit: '10mb'
  port: 3000

backend = (opt = {}) ->
  @opt = opt
  @ <<< do
    mode: process.env.NODE_ENV # 'production' or other
    production: process.env.NODE_ENV == \production
    middleware: {} # middleware that are dynamically created with certain config, such as csurf, etc
    config: ({} <<< default-config <<< opt.config) # backend configuration
    server: null # http.Server object, either created by express or from other lib
    app: null    # express application
    log: null    # obj for logging, in pino / winston interface 
    route: {}    # all default routes
    store: {}    # redis like data store, with get / set function
  @

backend <<< do
  create: (opt = {}) -> 
    b = new backend opt
    b.start!then -> return b

backend.prototype = Object.create(Object.prototype) <<< do
  listen: -> new Promise (res, rej) ~>
    if !@server => @server = @app.listen @config.port, ((e) ~> if e => rej e else res @server)
    else server.listen @config.port, ((e) -> if e => rej e else res @server)

  watch: ({logger, i18n}) ->
    if !(@config.build and @config.build.enabled) => return
    srcbuild.lsp (@config.build or {}) <<< {
      logger, i18n, base: 'frontend', bundle: {configFile: 'config/bundle.json'}
    }

  start: ->
    Promise.resolve!
      .then ~>
        log-level = @config.{}log.level or (if @production => \info else \debug)
        if !(log-level in <[silent trace debug info warn error fatal]>) =>
          return Promise.reject new Error("pino log level incorrect. please fix secret.ls: log.level")
        @log = log = pino level: log-level
        @log-server = log.child {module: \server}
        @log-build = log.child {module: \build}

        process.on \uncaughtException, (err, origin) ~>
          @log-server.error {err}, "uncaught exception ocurred, outside express routes".red
          @log-server.error "terminate process to reset server status".red
          process.exit -1
        process.on \unhandledRejection, (err) ~>
          @log-server.error {err}, "unhandled rejection ocurred".red
          @log-server.error "terminate process to reset server status".red
          process.exit -1

        i18n(@config.i18n or {})
      .then ~> @i18n = it
      .then ~>
        @db = new postgresql @

        @app = @route.app = app = express!
        @store = new redis-node!
        @log-server.info "initializing backend in #{app.get \env} mode".cyan

        app.disable \x-powered-by # Dont show server detail
        app.set 'trust proxy', '127.0.0.1' # So we can trust sth like ip from X-Forwarded-*

        # CSP  - default in nginx but can be overwritten in api server.
        # CORS - only needed if we need this

        app.use pino-http do
          useLevel: (if @production => \info else \debug)
          logger: @log.child({module: \route})
          auto-logging: (!@production)

        app.use body-parser.json do
          limit: @config.limit
          # sometimes service such as github webhook access to `req.body` and expect it to be in raw format.
          # these services usually provide additional headers, like `x-hub-signature` for hmac digest in github.
          # following below pattern to add additional case ( e.g., x-line-signature ) as needed.
          verify: (req, res, buf, encoding) ->
            if req.headers["x-hub-signature"] => req.raw-body = buf.toString!
        app.use body-parser.urlencoded extended: true, limit: @config.limit

        # make pug cache compiled function so we don't have to compile pug file each time
        # should be enabled by default for production server.
        # TODO invalidate cache after view updated
        if app.get(\env) != \development => app.enable 'view cache'

        app.use i18next-http-middleware.handle @i18n, {ignoreRoutes: <[]>}

        # also, we precompile all view pug into .view folder, which can be used by our custom pug view engine.
        app.engine 'pug', pug({
          logger: @log.child({module: \view})
          i18n: @i18n
          viewdir: '.view'
          srcdir: 'src/pug'
          desdir: 'static'
          base: 'frontend'
        })
        app.engine 'pug', pug({logger: @log.child({module: \view}), i18n: @i18n, viewdir: 'frontend/.view', srcdir: 'frontend/src/pug'})
        app.set 'view engine', 'pug'
        app.set 'views', path.join(__dirname, '../frontend/src/pug/')
        app.locals.basedir = app.get \views

        @route.extapi = aux.routecatch express.Router {mergeParams: true}
        @route.api = api = aux.routecatch express.Router {mergeParams: true}
        @route.auth = aux.routecatch express.Router {mergeParams: true}

        # Authentication
        auth @  # Authenticate. must before any router ( e.g., /api )

        app.use \/extapi/, @route.extapi

        # CSRF Protection. must after session
        app.use @middleware.csrf = csurf!

        app.use \/api, @route.api
        app.use \/api/auth, @route.auth

        route @ # APIs

        app.use \/, express.static(path.join(__dirname, '../frontend/static')) # static file fallback
        app.use (req, res, next) ~> next new lderror(404) # nothing match - 404
        app.use error-handler # error handler

        @listen!
      .then ~>
        @log-server.info "listening on port #{@server.address!port}".cyan
        @watch {logger: @log-build, i18n: @i18n}
      .catch (err) ~>
        try
          @log-server.error {err}, "failed to start server. ".red
        catch e
          console.log "log failed: ".red, e
          console.log "original error - failed to start server: ".red, err
        process.exit -1

if require.main == module =>
  backend.create {config: secret}

module.exports = backend
