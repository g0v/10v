base = do
  ip: (req) ->
    return (
      req.headers['cf-connecting-ip'] or req.headers['x-forwarded-for'] or
      req.headers['X-Real-IP'] or req.headers['x-real-ip'] or req.connection.remoteAddress
    )
  autocatch: (handler) -> (req, res, next) ->
    ret = handler req, res, next
    if !(ret instanceof Promise) => next new Error('autocatch is used yet return value of callback is not a Promise.')
    else ret.catch -> next it

  authed-view: (req, res, next) ->
    if req.user and req.user.key > 0 => return next!
    return res.status(403).redirect "/auth/?nexturl=/#{req.originalUrl}"

  reject: (code=403,msg="") ->
    Promise.reject new Error(if typeof(msg) == typeof({}) => JSON.stringify(msg) else msg) <<< {code, name: 'lderror'}

module.exports = base

