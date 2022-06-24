ldc.register \core, <[]>, ->
  init: proxise.once ->
    @ <<<
      global: {}
      user: {}
    @ <<<
      zmgr: new zmgr!
      manager: new block.manager do
        registry: ({ns, name, version, path, type}) ->
          path = path or if type == \block => \index.html
          else if type => "index.min.#type" else 'index.min.js'
          if ns == \local =>
            if name in <[error cover]> => return "/modules/#name/#{path or 'index.html'}"
            return "/modules/block/#name/#{path or 'index.html'}"
          "/assets/lib/#{name}/#{version or 'main'}/#{path}"
    @ <<<
      loader: new ldloader class-name: "ldld full", auto-z: true, base-z: null, zmgr: @zmgr.scope zmgr.splash
      captcha: new captcha manager: @manager, zmgr: @zmgr.scope zmgr.splash
      ldcvmgr: new ldcvmgr manager: @manager, error-cover: {ns: \local, name: "error", path: "0.html"}
      i18n: i18next

    @ <<<
      auth: new auth manager: @manager, zmgr: @zmgr, loader: @loader

    ldc.action \ldcvmgr, @ldcvmgr

    err = new lderror.handler handler: (n, e) ~> @ldcvmgr.get {ns: \local, name: \error, path: "#n.html"}, e

    @error = (e) -> err e
    @update = (g) -> @ <<< {global: g, user: (g.user or {})}
    @auth.on \server-down, @error
    @auth.on \logout, -> window.location.replace '/'

    @manager.init!
      # to optimize, we may delay or completely ignore i18n
      # since not every service need i18n
      .then ->
        if !i18next? => return
        Promise.resolve!
          .then -> i18next.init supportedLng: <[en zh-TW]>, fallbackLng: \zh-TW, fallbackNS: '', defaultNS: ''
          .then -> if i18nextBrowserLanguageDetector? => i18next.use i18nextBrowserLanguageDetector
          .then ->
            lng = (
              (if httputil? => (httputil.qs(\lng) or httputil.cookie(\lng)) else null) or
              navigator.language or navigator.userLanguage
            )
            console.log "use language: ", lng
            i18next.changeLanguage lng
          .then -> block.i18n.use i18next
      .then ~>
        # PERF TODO block.i18n.use and manager.init are quite fast.
        # we may provide an anonymous initialization
        # to prevent fetching at loading time to speed up FCP.
        @auth.get!
      .then (g) ~>
        @global = g
        @user = g.user
        @captcha.init g.captcha
      .then ~>
        @auth.on \change, (g) ~> @update g 
        # prepare authpanel. involving @plotdb/block creation.
        # should delay until we really have to trigger ui
        @

servebase =
  corectx: (cb) ->
    new Promise (res, rej) ->
      ret = ldc.register <[core]>, (o) ->
        o.core.init!
          .then -> cb.apply o.core, [o]
          .then res
          .catch rej
      ldc.init ret

if module? => module.exports = servebase
else if window? => window.servebase = servebase
