ldc.register \core, <[]>, ->
  init: proxise.once ->
    @ <<<
      global: {}
      user: {}
    @ <<<
      zmgr: new zmgr init: 1000
      manager: new block.manager do
        registry: ({name, version, path, type}) ->
          "/assets/lib/#{name}/#{version or 'main'}/#{path or if type == \block => 'index.html' else 'index.min.js'}"
    @ <<<
      auth: new auth manager: @manager
      loader: new ldloader class-name: "ldld full", zmgr: @zmgr
      captcha: new captcha manager: @manager
      ldcvmgr: new ldcvmgr manager: @manager

    ldc.action \ldcvmgr, @ldcvmgr

    err = new lderror.handler handler: ~> @ldcvmgr.get "error/#it"
    @error = (e) -> err e
    @update = (g) -> @ <<< {global: g, user: (g.user or {})}
    @auth.on \server-down, @error

    @manager.init!
      .then ->
        # to optimize, we may delay or completely ignore i18n
        # since not every service need i18n
        i18next.init supportedLng: <[en zh-TW]>, fallbackLng: \zh-TW
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
