require! <[redis util]>

redis-node = (opt = {}) ->
  @opt = opt
  @evt-handler = {}
  @redis = redis.createClient opt
  @redis.on \error, (err) ~> @fire \error, err
  @

redis-node.prototype = Object.create(Object.prototype) <<< do
  init: -> @redis.connect!
  on: (n, cb) -> @evt-handler.[][n].push cb
  fire: (n, ...v) -> for cb in (@evt-handler[n] or []) => cb.apply @, v
  set: -> @redis.set.apply @redis, arguments
  get: -> @redis.get.apply @redis, arguments

module.exports = redis-node
