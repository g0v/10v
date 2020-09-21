require! <[express-list-endpoints]>
require! <[../secret]>
backend = require "../engine/index"
secret.log.level = \silent

console.log "create backend server ... "
backend.create {config: secret}
  .then (bk) ->
    console.log "list all endpoints ... "
    ret = express-list-endpoints bk.app
  .then -> console.log "end points: ",  it
  .catch -> console.log "failed: ", it
