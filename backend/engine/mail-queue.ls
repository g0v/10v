require! <[fs @plotdb/colors js-yaml lderror]>
require! <[nodemailer nodemailer-mailgun-transport]>
require! <[./utils/md]>

# # sample code for sending mail
# backend.mail-queue.add {
#   from: '"Servebase Dev" <contact@yourserver.address>'
#   to: "some@mail.address"
#   subject: "Your Title"
#   text: """  .... ( your text ) .... """
#   html: """  .... ( your html ) .... """
# }
#   .then -> ...

mail-queue = (opt={}) ->
  @api = if !opt.mailgun =>
    sendMail: ~>
      @log.error "sendMail called while mail gateway is not available"
      return lderror.reject 500, "mail service not available"
  else nodemailer.createTransport(nodemailer-mailgun-transport(opt.mailgun))
  @log = opt.logger
  @list = []
  @

mail-queue.prototype = Object.create(Object.prototype) <<< do
  add: (obj) ->
    @list.push obj
    @handler!
  handle: null
  handler: ->
    if @handle => return
    @log.info "new job incoming, handling...".cyan
    @handle = setInterval (~>
      @log.info "#{@list.length} jobs remain...".cyan
      obj = @list.splice(0, 1).0
      if !obj =>
        @log.info "all job done, take a rest.".green
        clearInterval @handle
        @handle = null
        return
      @send-directly obj.payload
        .then obj.res
        .catch obj.rej
    ), 5000

  # queued send
  send: (payload, opt = {}) ->
    if opt.now => return @send-directly payload
    new Promise (res, rej) ~> @add {payload, res, rej}

  # directly send
  send-directly: (payload) -> new Promise (res, rej) ~>
    @log.info "sending [from:#{payload.from}] [to:#{payload.to}] [subject:#{payload.subject}]".cyan
    (e,i) <~ @api.sendMail payload, _
    if !e => return res!
    @log.error "send mail failed: ".red, e
    return rej lderror 500

  # content -> text / html
  send-from-md: (payload, map = {}, opt={}) -> new Promise (res, rej) ~>
    content = (payload.content or '')
    for k,v of map =>
      re = new RegExp("\#{#k}", "g")
      content = content.replace(re, v)
      payload.from = payload.from.replace(re, v)
      payload.subject = payload.subject.replace(re, v)
    payload.text = md.to-text(content)
    payload.html = md.to-html(content)
    delete payload.content
    @send(payload,opt).then -> res!

  by-template: (name, email, map = {}, config = {}) -> new Promise (res, rej) ~>
    path = if config.path => that else '.'
    (e, content) <~ fs.read-file "#path/config/mail/#name.yaml", _
    if e =>
      @log.error "send mail failed: ", e
      return rej lderror 500
    try
      payload = js-yaml.safe-load content
    catch e
      @log.error "send mail failed: ", e
      return rej lderror 500
    option = from: payload.from, to: email, subject: payload.subject, content: payload.content
    if config.bcc => option.bcc = config.bcc
    @send-from-md(option, map,{now: config.now})
      .then -> res!
      .catch (e) -> rej e

module.exports = mail-queue
