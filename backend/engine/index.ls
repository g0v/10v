require! <[fs yargs express @plotdb/colors path pino lderror pino-http redis util body-parser csurf]>
require! <[i18next-http-middleware]>
require! <[@plotdb/srcbuild]>
require! <[@plotdb/srcbuild/dist/view/pug]>
require! <[./error-handler ./redis-node ./mail-queue ./captcha]>
require! <[backend/auth backend/consent backend/i18n backend/aux backend/db/postgresql]>

libdir = path.dirname fs.realpathSync(__filename.replace(/\(js\)$/,''))
routes = fs.readdir-sync path.join(libdir, '..')
  .filter -> it != \engine 
  .map -> path.join(libdir, '..', it)
  .map -> require it

argv = yargs
  .option \config-name, do
    alias: \c
    description: "config file name. `secret` if omitted. for accessing `private/config/[config].ls`"
    type: \string
  .help \help
  .alias \help, \h
  .check (argv, options) -> return true
  .argv
cfg-name = argv.c
try
  secret = require "../../config/private/#{cfg-name or 'secret'}"
catch e
  console.log "failed to load config file `config/private/#{cfg-name or 'secret'}`.".red
  console.log "if this file doesn't exist, you should add one. check config/private/demo.ls for reference"
  process.exit -1

with-default = (cfg = {}, defcfg = {}) ->
  defcfg = JSON.parse JSON.stringify defcfg
  _ = (cfg, defcfg) ->
    for k,v of defcfg =>
      if !(cfg[k]?) => cfg[k] = v
      else if typeof(cfg[k]) == \object and typeof(v) == \object => with-default(cfg[k], defcfg[k])
    return cfg
  return _ cfg, defcfg

default-config = do
  limit: '10mb'
  port: 3000
  session: max-age: 365 * 86400 * 1000

backend = (opt = {}) ->
  @opt = opt
  @ <<< do
    mode: process.env.NODE_ENV # 'production' or other
    production: process.env.NODE_ENV == \production
    middleware: {} # middleware that are dynamically created with certain config, such as csurf, etc
    config: with-default(opt.config, default-config) # backend configuration
    base: opt.config.base or 'frontend/web'
    server: null     # http.Server object, either created by express or from other lib
    app: null        # express application
    log: null        # obj for logging, in pino / winston interface
    mail-queue: null # mail queue for sending email
    route: {}        # all default routes
    store: {}        # redis like data store, with get / set function
    session: {}      # express-session object
  log-level = @config.{}log.level or (if @production => \info else \debug)
  if !(log-level in <[silent trace debug info warn error fatal]>) =>
    throw new Error("pino log level incorrect. please fix secret.ls: log.level")
  @log = pino level: log-level
  @

backend <<< do
  create: (opt = {}) -> 
    b = new backend opt
    b.start!then -> return b

backend.prototype = Object.create(Object.prototype) <<< do
  listen: -> new Promise (res, rej) ~>
    if !@server => @server = @app.listen @config.port, ((e) ~> if e => rej e else res @server)
    else @server.listen @config.port, ((e) -> if e => rej e else res @server)

  watch: ({logger, i18n}) ->
    if !(@config.build and @config.build.enabled) => return
    srcbuild.lsp (@config.build or {}) <<< {
      logger, i18n, base: @base, bundle: {configFile: path.join(@base, 'bundle.json'), relative-path: true}
    }

  start: ->
    Promise.resolve!
      .then ~>
        @log-server = @log.child {module: \server}
        @log-build = @log.child {module: \build}
        @log-mail = @log.child {module: \mail}
        if @config.mail => @mail-queue = new mail-queue {logger: @log-mail} <<< (@config.mail or {})

        process.on \uncaughtException, (err, origin) ~>
          @log-server.error {err}, "uncaught exception ocurred, outside express routes".red
          @log-server.error "terminate process to reset server status".red
          process.exit -1
        process.on \unhandledRejection, (err) ~>
          @log-server.error {err}, "unhandled rejection ocurred".red
          @log-server.error "terminate process to reset server status".red
          process.exit -1

        i18n-enabled = @config.i18n and (@config.i18n.enabled or !(@config.i18n.enabled?))
        @config.{}i18n.enabled = i18n-enabled
        i18n @config.i18n
      .then ~> @i18n = it
      .then ~>
        @db = new postgresql @

        @app = app = express!
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

        if @config.i18n.enabled => app.use i18next-http-middleware.handle @i18n, {ignoreRoutes: <[]>}
        @middleware.captcha = new captcha(@config.captcha).middleware

        # also, we precompile all view pug into .view folder, which can be used by our custom pug view engine.
        app.engine 'pug', pug({
          logger: @log.child({module: \view})
          i18n: @i18n
          viewdir: '.view'
          srcdir: 'src/pug'
          desdir: 'static'
          base: @base
        })
        app.set 'view engine', 'pug'
        app.set 'views', path.join(__dirname, '../..', @base, 'src/pug')
        app.locals.basedir = app.get \views

        @route.app = aux.routecatch app
        @route.extapi = aux.routecatch express.Router {mergeParams: true}
        @route.api = api = aux.routecatch express.Router {mergeParams: true}
        @route.auth = aux.routecatch express.Router {mergeParams: true}
        @route.consent = aux.routecatch express.Router {mergeParams: true}

        # Authentication
        auth @  # Authenticate. must before any router ( e.g., /api )

        app.use \/extapi/, @route.extapi

        # CSRF Protection. must after session
        app.use @middleware.csrf = csurf!

        app.use \/api, @route.api
        app.use \/api/auth, @route.auth
        app.use \/api/consent, @route.consent

        consent @

        routes.map ~> it @ # APIs

        app.use \/, express.static(path.join __dirname, '../..', @base, 'static') # static file fallback
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
