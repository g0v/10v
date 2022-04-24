ldc.register \core, <[]>, ->
  init: proxise.once ->
    @ <<<
      global: {}
      user: {}
    @ <<<
      zmgr: new zmgr!
      manager: new block.manager do
        registry: ({name, version, path, type}) ->
          path = path or if type == \block => \index.html
          else if type => "index.min.#type" else 'index.min.js'
          "/assets/lib/#{name}/#{version or 'main'}/#{path}"
    @ <<<
      auth: new auth manager: @manager, zmgr: @zmgr
      loader: new ldloader class-name: "ldld full", zmgr: @zmgr.scope zmgr.splash
      captcha: new captcha manager: @manager
      ldcvmgr: new ldcvmgr manager: @manager

    ldc.action \ldcvmgr, @ldcvmgr

    err = new lderror.handler handler: ~> @ldcvmgr.get "error/#it"
    @error = (e) -> err e
    @update = (g) -> @ <<< {global: g, user: (g.user or {})}
    @auth.on \server-down, @error
    @auth.on \logout, -> window.location.replace '/'

    @manager.init!
      # to optimize, we may delay or completely ignore i18n
      # since not every service need i18n
      .then -> i18next.init supportedLng: <[en zh-TW]>, fallbackLng: \zh-TW, fallbackNS: '', defaultNS: ''
      .then -> if i18nextBrowserLanguageDetector? => i18next.use i18nextBrowserLanguageDetector
      .then ->
        console.log "use language: ", navigator.language or navigator.userLanguage
        i18next.changeLanguage navigator.language or navigator.userLanguage
      .then -> block.i18n.use i18next
      .then ~>
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
