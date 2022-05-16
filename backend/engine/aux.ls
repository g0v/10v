base = do
  hostname: (req) -> req.hostname
  ip: (req) ->
    # `req.headers` is kinda case-sensitive. use `req.header()` to get rid of this problem.
    return (
      # set by cloudflare thus we have to use it first if we are behind cloudflare
      # https://support.cloudflare.com/hc/en-us/articles/200170986-How-does-Cloudflare-handle-HTTP-Request-headers-
      # cloudflare suggests you to use this since it's normalized to have only one ip, not like x-fowarded-for
      req.header('cf-connecting-ip') or

      # x-real-ip: set by nginx (configured by us). Earliest usage seems to from nginx, but not de-facto.
      # we probably will want to use this since if it exists, it means that we set it manually
      req.header('x-real-ip') or

      # req.ip: set by express, actually derived from x-fowarded-for when trust-proxy is not false.
      # http://expressjs.com/en/api.html#req.ip
      req.ip or

      # de-facto standard for proxy and load balancer
      # https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
      (req.header('x-forwarded-for') or '').split(',').pop!.trim! or

      # should use req.socket after v13:
      # https://nodejs.org/api/net.html#socketremoteaddress
      req.socket.remoteAddress or

      # req.connection is deprecated after node v13:
      # https://nodejs.org/dist/latest/docs/api/http.html#http_request_connection
      req.connection.remoteAddress or

      # last resort. should we use something that looks like an IP?
      'unknown-ip'
    )

  # autocatch / routecatch
  #  - serve for automatically catching rejections to prevent server crashed.
  #  - deprecate when express 5 releases.
  # autocatch: for wrapping functions
  # try using routecatch instead of autocatch for easier migration to express 5 in the future.
  #  - todo: will it be better to keep consistency by removing silence param?
  autocatch: (handler, silence = false) -> (req, res, next) ->
    ret = handler req, res, next
    if !(ret instanceof Promise) =>
      if silence => return
      next new Error('autocatch is used yet return value of callback is not a Promise.')
    else ret.catch -> next it
  # routecatch: for wrapping routers.
  routecatch: (route) ->
    <[get post put delete]>.map (n) ->
      route["_#n"] = route[n]
      route[n] = (...args) ->
        args = args.map (d,i) -> if d instanceof Function and (i == args.length - 1) => base.autocatch(d,true) else d
        @["_#n"].apply @, args
    return route

  signedin: (req, res, next) ->
    if req.user and req.user.key and req.user.username => return next!
    next(new Error! <<< {name: 'lderror', id: 1000, redirect: "/auth/?nexturl=#{req.originalUrl}"})

  # deprecated. use lderror.reject instead.
  reject: (code=403,msg="") ->
    Promise.reject new Error(if typeof(msg) == typeof({}) => JSON.stringify(msg) else msg) <<< {code, name: 'lderror'}

  is-admin: (req, res, next) ->
    return if req.user and req.user.staff == 1 => next!
    else next(new Error! <<< {name: 'lderror', id: 404})

  validate-key: (req, res, next) ->
    if ((val = req.params.key) and !isNaN(val) and val > 0) => return next!
    next new lderror(400)

  clear-cookie: (res) ->
    res.clearCookie \connect.sid, {path:'/'}
    res.clearCookie \global, {path:'/'}

module.exports = base
