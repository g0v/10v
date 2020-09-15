require! <[express colors path pino lderror pino-http redis util]>
require! <[./route]>

backend = (opt = {}) ->
  @opt = opt
  @ <<< do
    config: opt.config # backend configuration
    server: null # http.Server object, either created by express or from other lib
    app: null    # express application
    log: null    # obj for logging, in pino / winston interface 
    route: {}    # all default routes
  @

backend <<< do
  create: (opt = {}) -> 
    b = new backend opt
    b.start!then -> return b

backend.prototype = Object.create(Object.prototype) <<< do
  listen: -> new Promise (res, rej) ~>
    if !@server => @server = @app.listen @config.port, ~> res @server
    else server.listen @config.port, -> res @server

  start: ->
    Promise.resolve!
      .then ~>
        @log = log = pino!
        process.on \uncaughtException, (err, origin) ->
          log.error {err}, "uncaught exception ocurred, outside express routes".red
          log.error "terminate process to reset server status".red
          process.exit -1

        @app = @route.app = app = express!
        app.use pino-http { logger: log, auto-logging: false}
        app.use \/api, (@route.api = api = express.Router {mergeParams: true})

        route @

        app.use @middleware.error-handler

        app.use \/, express.static(path.join(__dirname, '.'))
        @listen!
      .then ~>
        @log.info "[SERVER] listening on port #{@server.address!port}".cyan
      .catch (err) ~>
        @log.error {err}, "[SERVER] failed to start server. ".red
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
      req.log.error {err}, "unhandled exception occurred".red
      res.status 500 .send!


backend.create {config: {port: 8901}}
