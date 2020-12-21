base = do
  ip: (req) ->
    return (
      req.headers['cf-connecting-ip'] or req.headers['x-forwarded-for'] or
      req.headers['X-Real-IP'] or req.headers['x-real-ip'] or req.connection.remoteAddress
    )
  autocatch: (handler) -> (req, res, next) -> handler req, res, next .catch -> next it

module.exports = base

