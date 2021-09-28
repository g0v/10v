require! <[redis-clustr redis util]>

redis-node = (opt = {}) ->
  @opt = opt
  @evt-handler = {}
  @redis = redis.createClient opt
  #@redis = new redis-clustr { servers: [{ ... }]}
  @redis.on \error, (err) ~> @fire \error, err
  @get = util.promisify(@redis.get).bind(@redis)
  @set = util.promisify(@redis.set).bind(@redis)
  @

redis-node.prototype = Object.create(Object.prototype) <<< do
  on: (n, cb) -> @evt-handler.[][n].push cb
  fire: (n, ...v) -> for cb in (@evt-handler[n] or []) => cb.apply @, v

module.exports = redis-node
