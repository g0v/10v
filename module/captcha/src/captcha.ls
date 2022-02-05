captcha = (opt = {}) ->
  @_g = opt.global
  @mgr = opt.manager
  @init = proxise.once ~> @_init!
  @

captcha.prototype = Object.create(Object.prototype) <<< do
  _init: ->
    Promise.resolve!
      .then ~> @mgr.get {name: 'captcha'}
      .then (bc) -> bc.create!
      .then (bi) -> bi.attach {root: document.body} .then -> bi.interface!
      .then (cap) ~> @captcha = cap
      .then ~> @captcha.init @_g.captcha
  guard: ({cb}) -> @captcha.guard {cb}

if module? => module.exports = captcha
else window.captcha = captcha
