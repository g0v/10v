require! <[express-rate-limit express-slow-down ./aux]>

key =
  ip: (req) -> "#{base.ip(req)}:#{req.baseUrl}#{req.path}"
  user: (req) -> "#{(if req.user => req.user.key else 0)}:#{req.baseUrl}#{req.path}"

msg = '{"id": 1024, name: "lderror"}'

module.exports =
  rate:
    signup: express-rate-limit do
      windowMs: 60 * 60 * 1000
      max: 30
      message: msg
      statusCode: 490
      headers: true
      keyGenerator: key.ip
    login: express-rate-limit do
      windowMs: 60 * 1000
      max: 30
      message: msg
      statusCode: 490
      headers: true
      keyGenerator: key.ip
    generic: express-rate-limit do
      windowMs: 60 * 1000
      max: 30
      message: msg
      statusCode: 490
      headers: true
      keyGenerator: key.user
  slow:
    signup: express-slow-down do
      windowMs: 120 * 60 * 10
      delayAfter: 15
      delayMs: 1000
      maxDelayMs: 20 * 1000
      headers: true
      keyGenerator: key.ip
    login: express-slow-down do
      windowMs: 1 * 60 * 10
      delayAfter: 5
      delayMs: 1000
      maxDelayMs: 20 * 1000
      headers: true
      keyGenerator: key.ip
    generic: express-slow-down do
      windowMs: 60 * 1000
      delayAfter: 15
      delayMs: 1000
      maxDelayMs: 15 * 1000
      headers: true
      keyGenerator: key.user
  key: key
