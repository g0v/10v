require! <[request lderror ./aux]>

(backend) <-(->module.exports = it) _

config = backend.config.{}captcha

main = 
  verifier:
    hcaptcha: (req, res, config, captcha) ->
      (resolve,reject) <- new Promise _
      (e,r,b) <- request {
        url: \https://hcaptcha.com/siteverify
        method: \POST
        form:
          secret: config.secret
          response: captcha
          remoteip: aux.ip req # not required by hcaptcha. keep it for simplicity
      }, _
      if e => reject(lderror 1010)
      try
        data = JSON.parse(b)
      catch e
        return reject(lderror.reject 1010)
      if data.success == false => return reject(lderror 1009)
      resolve {score: data.score, verified: true}

    recaptcha_v2_checkbox: (req, res, config, captcha) ->
      (resolve,reject) <- new Promise _
      (e,r,b) <- request {
        url: \https://www.google.com/recaptcha/api/siteverify
        method: \POST
        form:
          secret: config.secret
          response: captcha.token
          remoteip: aux.ip req
      }, _
      if e => return reject(lderror 1010)
      try
        data = JSON.parse(b)
      catch e
        return reject(lderror 1010)
      if data.success == false => return reject(lderror 1009)
      resolve {score: data.score, verified: true}

    recaptcha_v3: (req, res, config, captcha) ->
      (resolve,reject) <- new Promise _
      (e,r,b) <- request {
        url: \https://www.google.com/recaptcha/api/siteverify
        method: \POST
        form:
          secret: config.secret
          response: captcha.token
          remoteip: aux.ip req
      }, _
      if e => return reject(lderror 1010)
      try
        data = JSON.parse(b)
      catch e
        return reject(lderror 1010)
      if data.success == false => return reject(lderror 1009)
      resolve {score: data.score, verified: true}

  verify: (req, res, next) ->
    captcha = if req.body and req.body.captcha => req.body.captcha else if req.fields => req.fields.captcha else null
    if !(captcha and captcha.token)=> return Promise.resolve {score: 0, verified: false}
    if !(captcha.name in <[hcaptcha recaptcha_v3 recaptcha_v2_checkbox]>) => return lderror.reject 1020
    if !config[captcha.name] => return lderror.reject 1020
    main.verifier[captcha.name](req, res, config[captcha.name], captcha)

  middleware: ->
    if !(config and (!(config.enabled?) or config.enabled)) => return (req, res, next) -> next!
    (req, res, next) ~>
      @verify req, res, next
        .then (cap) ->
          if !cap.score or cap.score < 0.5 => return next(lderror 1009)
          next!
        .catch (e) -> next e
