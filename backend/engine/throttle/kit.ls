throttle = require "./core"
require! <[../aux]>

key =
  ip: (req) -> "#{aux.ip req}:#{req.baseUrl}#{req.path}"
  user: (req) -> "#{if req.user => req.user.key else 0}:#{req.baseUrl}#{req.path}"
  ip-user: (req) -> "#{aux.ip req}:#{if req.user => req.user.key else 0}:#{req.baseUrl}#{req.path}"

module.exports = 
  signup:  throttle span: 10 * 60 * 1000, max-count: 10, delay-count:  5, delay: 400, key: key.ip
  login:   throttle span:  1 * 60 * 1000, max-count: 20, delay-count:  5, delay: 200, key: key.ip
  generic: throttle span:  1 * 60 * 1000, max-count: 30, delay-count: 15, delay: 200, key: key.user
  key: key
