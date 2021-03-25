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

module.exports = base

