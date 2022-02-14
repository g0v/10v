require! <[request lderror ./aux]>

captcha = (opt = {}) ->
  @cfg = opt or {}
  @middleware = @_middleware!
  @

captcha.prototype = Object.create(Object.prototype) <<<
  verify: (req, res, next) ->
    obj = if req.body and req.body.captcha => req.body.captcha else if req.fields => req.fields.captcha else null
    if !(obj and obj.token)=> return Promise.resolve {score: 0, verified: false}
    if !(obj.name in <[hcaptcha recaptcha_v3 recaptcha_v2_checkbox]>) => return lderror.reject 1020
    if !(cfg = @cfg[obj.name]) => return lderror.reject 1020
    if !(!(cfg.enabled?) or cfg.enabled) => return lderror.reject 1020
    captcha.verifier[obj.name](req, res, cfg, obj)

  _middleware: ->
    if !(@cfg and (!(@cfg.enabled?) or @cfg.enabled)) => return (req, res, next) -> next!
    (req, res, next) ~>
      @verify req, res, next
        .then (cap) ->
          if !cap.score or cap.score < 0.5 => return next(lderror 1009)
          next!
        .catch (e) -> next e

captcha.verifier =
  hcaptcha: (req, res, config, capobj) ->
    (resolve,reject) <- new Promise _
    (e,r,b) <- request {
      url: \https://hcaptcha.com/siteverify
      method: \POST
      form:
        secret: config.secret
        response: capobj.token
        remoteip: aux.ip req # not required by hcaptcha. keep it for simplicity
    }, _
    if e => reject(lderror 1010)
    try
      data = JSON.parse(b)
    catch e
      return reject(lderror.reject 1010)
    resolve {score: if data.success => 1 else if data.score => that else 0, verified: true}

  recaptcha_v2_checkbox: (req, res, config, capobj) ->
    (resolve,reject) <- new Promise _
    (e,r,b) <- request {
      url: \https://www.google.com/recaptcha/api/siteverify
      method: \POST
      form:
        secret: config.secret
        response: capobj.token
        remoteip: aux.ip req
    }, _
    if e => return reject(lderror 1010)
    try
      data = JSON.parse(b)
    catch e
      return reject(lderror 1010)
    if data.success == false => return reject(lderror 1009)
    resolve {score: if data.success => 1 else if data.score => that else 0, verified: true}

  recaptcha_v3: (req, res, config, capobj) ->
    (resolve,reject) <- new Promise _
    (e,r,b) <- request {
      url: \https://www.google.com/recaptcha/api/siteverify
      method: \POST
      form:
        secret: config.secret
        response: capobj.token
        remoteip: aux.ip req
    }, _
    if e => return reject(lderror 1010)
    try
      data = JSON.parse(b)
    catch e
      return reject(lderror 1010)
    if data.success == false => return reject(lderror 1009)
    resolve {score: data.score, verified: true}

module.exports = captcha
