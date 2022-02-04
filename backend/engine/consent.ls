require! <[request lderror ./aux ./throttle/kit]>

(backend) <-(->module.exports = it) _

db = backend.db

backend.route.api.post \/consent/, kit.generic, (req, res, next) ->
  {consent_id, check} = req.body or {}
  user = (req.user or {}).key
  if !(user and consent_id) => return res.send false
  if check =>
    db.query "select * from consent where id = $1 and owner = $1", [consent_id, user]
      .then (r={}) -> res.send if r.[]rows.length => true else false
  else
    db.query(
      "insert into consent (consent_id, owner, ip, time) values ($1, $2, $3, now())",
      [consent_id, user, aux.ip(req)]
    )
      .then -> res.send!
