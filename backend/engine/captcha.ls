require! <[request lderror ./aux]>

(backend) <-(->module.exports = it) _

config = backend.config.{}captcha.{}recaptcha

hcaptcha: (req, res, next) ->
  (e,r,b) <- request {
    url: \https://hcaptcha.com/siteverify
    method: \POST
    form:
      secret: config.secret
      response: captcha
      remoteip: aux.ip req # not required by hcaptcha. keep it for simplicity
  }, _


verify: (req, res, next) ->
  captcha = if req.body and req.body.captcha => req.body.captcha else if req.fields => req.fields.captcha
  if !captcha => return Promise.resolve {score: 0, verified: false}
  (e,r,b) <- request {
    url: \https://www.google.com/recaptcha/api/siteverify
    method: \POST
    form:
      secret: config.secret
      response: captcha
      remoteip: aux.ip req
  }, _
  if e => return lderror.reject 1010
  try
    data = JSON.parse(b)
  catch e
    return lderror.reject 1010
  if data.success == false => return lderror.reject 1009
  Promise.resolve {score: data.score, verified: true}

middleware: (req, res, next) ->
  if !(config and config.enabled) => return (req, res, next) -> next!
  @verify req, res, next
    .then (cap) -> if !cap.score or cap.score < 0.5 => return next(lderror 1009)
    .catch (e) -> next e
