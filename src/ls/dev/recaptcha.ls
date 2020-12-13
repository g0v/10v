
recaptcha = do
  lc: ready: false, queue: [], tag: null, sitekey: null, global: null, enabled: true, inited: false
  init: ->
    if @lc.inited => return Promise.resolve!
    auth.get!
      .then (g) ~> @lc <<< {global: g, sitekey: g.{}recaptcha.sitekey, enabled: g.{}recaptcha.enabled}
      .then ~>
        if !(@lc.enabled and @lc.sitekey) or @lc.tag => return
        @lc.tag = tag = document.createElement("script")
        tag.onload = ~>
          <~ grecaptcha.ready _
          @lc.ready = true
          @lc.queue.map -> it.res!
          @lc.queue.splice 0
        tag.setAttribute \type, "text/javascript"
        tag.setAttribute \src, "https://www.google.com/recaptcha/api.js?render=#{@lc.sitekey}"
        document.body.appendChild tag
      .then ~> @lc.inited = true
  get: (action = \generic) ->
    @init!
      .then ~>
        if !(@lc.sitekey and @lc.enabled) => return Promise.resolve('')
        p = if @lc.ready => Promise.resolve! else new Promise (res, rej) ~> @lc.queue.push {res, rej}
        p
          .then ~>
            grecaptcha.execute @lc.sitekey, {action}
          .then (token) -> return token

