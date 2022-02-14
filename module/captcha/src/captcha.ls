captcha = (opt = {}) ->
  @_cfg = opt.cfg
  @mgr = opt.manager
  @init = proxise.once (cfg = {}) ~> @_init cfg
  @

captcha.prototype = Object.create(Object.prototype) <<< do
  _init: (cfg) ->
    if cfg => @_cfg = cfg
    Promise.resolve!
      .then ~> @mgr.get {name: 'captcha'}
      .then (bc) -> bc.create!
      .then (bi) -> bi.attach {root: document.body} .then -> bi.interface!
      .then (cap) ~> @captcha = cap
      .then ~> @captcha.init @_cfg
  guard: ({cb}) -> @captcha.guard {cb}

if module? => module.exports = captcha
else window.captcha = captcha
