
captcha = do
  _methods: {}
  register: (name, obj = {}) ->
    obj.factory = (o = {}) ->
      @ <<< o
      @root = if typeof(o.root) == \string => document.querySelector(o.root) else o.root
      @
    obj.factory.prototype = Object.create(obj.interface) <<< {}
    @_methods[name] = obj
  cfg: {}
  get: (name, o = {}) ->
    if !(m = @_methods[name]) => return Promise.resolve!
    m.init!then ~> new m.factory({} <<< (@cfg[name] or {}) <<< o)
  guard: (cb) ->
    @init!
      .then ~>
        _ = (idx = 0) ~>
          if !(o = @defs[idx]) => return lderror.reject 1010
          p = if !o.ldcv =>
            o.obj.verify!
          else
            ret = o.ldcv.get!
            o.obj.verify!then -> o.ldcv.set it
            ret
          p
            .then -> cb it
            .catch -> _(idx + 1)
        _!

  init: ->
    if @defs => return Promise.resolve!
    code = """<div class="ldcv"><div class="base"><div class="inenr"></div></div></div>"""
    make = (name) ~>
      div = document.createElement \div
      div.innerHTML = code
      document.body.appendChild div
      ldcv = new ldcover root: div.querySelector('.ldcv')
      @get(name, {root: div.querySelector('.inner')}).then (obj) -> {ldcv, obj}
    Promise.all [
      @get(\recaptcha_v3, {}).then (obj) -> {obj}
      make(\recaptcha_v2_checkbox)
      make(\hcaptcha)
    ]
      .then ~> @defs = it


captcha.register \hcaptcha, do
  init: proxise.once (cfg = {}) ->
    (res, rej) <~ new Promise _
    @_script = s = document.createElement \script
    s.onerror = ~> rej it
    s.onload = ~> res!
    s.setAttribute \type, \text/javascript
    s.setAttribute \src, "https://js.hcaptcha.com/1/api.js"
    document.body.appendChild s
  interface: Object.create(Object.prototype) <<<
    render: ->
      if !@_tag => @root.appendChild(@_tag = document.createElement \div)
      if !@id => @id = hcaptcha.render @_tag, @cfg{theme, size, sitekey}
      else hcaptcha.reset @id
    verify: ->
      if !(@sitekey and @enabled) => return lderror.reject 998
      hcaptcha.execute @id, async: true
        .then ({response, key}) ~> {token: response}
    reset: -> if @id => hcaptcha.reset @id

captcha.register \recaptcha_v3, do
  init: proxise.once ->
    (res, rej) <~ new Promise _
    @_script = s = document.createElement("script")
    s.onerror = ~> rej it
    s.onload = ~> grecaptcha.ready ~> res!
    s.setAttribute \type, \text/javascript
    s.setAttribute \src, "https://www.google.com/recaptcha/api.js?render=#{@sitekey}"
    document.body.appendChild s
  verify: ->
    @init!
      .then ~>
        if !(@sitekey and @enabled) => return lderror.reject 998
        grecaptcha.execute @sitekey, {action: @action or 'generic'}
      .then (token) -> return {token}

captcha.register \recaptcha_v2_checkbox, do
  init: proxise.once ->
    (res, rej) <~ new Promise _
    @_script = s = document.createElement("script")
    s.onerror = ~> rej it
    s.onload = ~> grecaptcha.ready ~> res!
    s.setAttribute \type, \text/javascript
    s.setAttribute \src, \https://www.google.com/recaptcha/api.js
    document.body.appendChild s
  render: ->
    if !@_tag => @root.appendChild(@_tag = document.createElement \div)
    @id = grecaptcha.render @_tag, @{theme, size, sitekey}
  verify: ->
    @init!
      .then ~>
        if !(@sitekey and @enabled) => return lderror.reject 998
        @id = grecaptcha.render @_tag, @{theme, size, sitekey}
        # TODO wait until some action to happen
      .then ~> token: grecaptcha.getResponse @id

