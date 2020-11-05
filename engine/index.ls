require! <[express colors path pino lderror pino-http redis util body-parser csurf]>
require! <[i18next-http-middleware]>
require! <[./auth ./route ./watch ./redis-node]>
require! <[./module/i18n ./module/aux ./module/view/pug ./module/db/postgresql]>
require! <[../secret]>

default-config = do
  limit: '10mb'
  port: 3000

backend = (opt = {}) ->
  @opt = opt
  @ <<< do
    mode: process.env.NODE_ENV # 'production' or other
    production: process.env.NODE_ENVT == \production
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

  # middlewares that don't need dynamic backend object.
  middleware: do
    error-handler: (err, req, res, next) ->
      # 1. custom error by various package - handle by case and wrapped in ldError
      # 2. custom error from this codebase ( wrapped in ldError ) - pass to frontend with ldError
      # 3. trivial, unskippable error - ignore
      # 4. log all unexpected error.
      try
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
        # all handled exception should be returned before this line.
      catch e
        req.log.error {err: e}, "exception occurred while handling other exceptions".red
        req.log.error "original exception follows:".red
      req.log.error {err}, "unhandled exception occurred #{if err.message => ': ' + err.message else ''}".red
      res.status 500 .send!


backend.prototype = Object.create(Object.prototype) <<< do
  listen: -> new Promise (res, rej) ~>
    if !@server => @server = @app.listen @config.port, ~> res @server
    else server.listen @config.port, -> res @server

  watch: -> if @config.build and @config.build.enabled => watch(@).init @config{build, i18n}

  start: ->
    Promise.resolve!
      .then ~>
        log-level = @config.{}log.level or (if @production => \info else \debug)
        if !(log-level in <[silent trace debug info warn error fatal]>) =>
          return Promise.reject new Error("pino log level incorrect. please fix secret.ls: log.level")
        @log = log = pino level: log-level
        @log-server = log.child {module: \server}

        process.on \uncaughtException, (err, origin) ~>
          @log-server.error {err}, "uncaught exception ocurred, outside express routes".red
          @log-server.error "terminate process to reset server status".red
          process.exit -1
        process.on \unhandledRejection, (err) ~>
          @log-server.error {err}, "unhandled rejection ocurred".red
          @log-server.error "terminate process to reset server status".red
          process.exit -1

        i18n(@config.i18n or {})
      .then (i18n) ~>

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
          # github webhook use `x-hub-signature` for hmac digest
          verify: (req, res, buf, encoding) ->
            if req.headers["x-hub-signature"] => req.raw-body = buf.toString!
        app.use body-parser.urlencoded extended: true, limit: @config.limit

        # make pug cache compiled function so we don't have to compile pug file each time
        # should be enabled by default for production server.
        # TODO invalidate cache after view updated
        if app.get(\env) != \development => app.enable 'view cache'

        app.use i18next-http-middleware.handle i18n, {ignoreRoutes: <[]>}

        pug.opt({i18n})
        # also, we precompile all view pug into .view folder, which can be used by our custom pug view engine.
        app.engine 'pug', pug(@)
        app.set 'view engine', 'pug'
        app.set 'views', path.join(__dirname, '../src/pug/')
        app.locals.viewdir = path.join(__dirname, '../.view/')
        app.locals.basedir = app.get \views

        @route.api = api = express.Router {mergeParams: true}
        @route.auth = express.Router {mergeParams: true}

        # =============== USER DATA, VIA AJAX
        # Note: jsonp might lead to exploit since jsonp is not protected by CORS.
        # * this cant be protected by CSRF, since it provides CSRF toke.
        # * this must be protected by CORS Policy, otherwise 3rd website can get user info easily.
        # * this is passed via cookie too, but cookie won't be set if user doesn't get files served from express.
        #   so, for the first time user we still have to do ajax.
        #   cookie will be checked in frontend to see if ajax is needed.
        # * user could stil alter cookie's content, so it's necessary to force ajax call for important action
        #   there is no way to prevent user from altering client side content,
        #   so if we want to prevent user from editing our code, we have to go backend for the generation.
        api.get \/auth/info, (req, res) ~>
          res.setHeader \content-type, \application/json
          payload = JSON.stringify({
            csrfToken: req.csrfToken!
            production: @production
            ip: aux.ip(req)
            user: if req.user => req.user{key, config, displayname, verified, username} else {}
            recaptcha: @config.{}grecaptcha{sitekey, enabled}
          })
          res.cookie 'global', payload, { path: '/', secure: true }
          res.send payload

        # Authentication
        auth @  # Authenticate. must before any router ( e.g., /api )

        # CSRF Protection. must after session
        app.use @middleware.csrf = csurf!

        app.use \/api, @route.api
        app.use \/api/auth, @route.auth

        route @ # APIs

        app.use \/, express.static(path.join(__dirname, '.')) # static file fallback
        app.use (req, res, next) ~> next new lderror(404)     # nothing match - 404
        app.use backend.middleware.error-handler                     # error handler

        @listen!
      .then ~>
        @log-server.info "listening on port #{@server.address!port}".cyan
        @watch!
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
