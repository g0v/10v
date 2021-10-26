require! <[fs path express lderror backend/aux backend/session re2 curegex backend/throttle]>

(backend) <- (->module.exports = it)  _
{db,config,route:{api,app}} = backend

route = aux.routecatch express.Router {mergeParams: true}
api.use \/admin, route
route.use aux.is-admin

route.get \/throttle/reset, (req, res, next) ->
  throttle.core.reset!
  res.send!

route.post \/users/, (req, res, next) ->
  if !(keyword = req.body.keyword) => return lderror.reject 400
  db.query """
  select u.*
  from users as u
  where (u.username = $1 or u.key = $2) and u.deleted is not true
  order by u.createdtime desc
  """, [keyword, if isNaN(+keyword) => null else +keyword]
    .then (r={}) ->
      rows = r.[]rows
      rows.map -> delete it.password
      res.send rows

re-email = curegex.tw.get('email', re2)
is-email = -> return re-email.exec(it)

route.post \/user/, (req, res) ->
  if <[username displayname password]>.filter(->!req.body[it]).length => return lderror.reject 400
  {username,displayname,password} = req.body
  if !is-email(username) => return lderror.reject 400
  if password.length < 8 => return lderror.reject 400
  # TODO verify password based on customized rules, if needed.
  detail = {username, displayname}
  config = {}
  method = \local
  db.auth.user.create {username, password, method, detail, config}
    .then ->
      delete it.password
      res.send it

route.post \/user/:key/password, aux.validate-key, (req, res) ->
  key = +req.params.key
  if !(password = req.body.password) or password.length < 8 => return lderror.reject 400
  # TODO verify password based on customized rules, if needed.
  db.query "select password from users where key = $1", [key]
    .then ({rows}) -> if !rows or !rows.0 => return lderror.reject 404
    .then -> db.auth.user.hashing password, true, true
    .then (pw-hashed) ->
      db.query "update users set (method,password) = ('local',$1) where key = $2", [pw-hashed, key]
    .then -> session.delete {db, key}
    .then -> res.send!

route.post \/user/:key/email, aux.validate-key, (req, res) ->
  key = +req.params.key
  if !((email = req.body.email) and is-email(email))  => return lderror.reject 400
  db.query "select key from users where username = $1", [email]
    .then (r={}) ->
      if r.[]rows.length => return lderror.reject 1011
      db.query "update users set username = $1 where key = $2", [email, key]
    .then -> session.delete {db, key}
    .then -> res.send!

route.post \/user/:key/logout, aux.validate-key, (req, res) ->
  session.delete {db, key: +req.params.key}
    .then -> res.send!

route.delete \/user/:key, aux.validate-key, (req, res, next) ->
  key = +req.params.key
  db.query "delete from users where key = $1", [key]
    .catch ->
      # delete user failed. there might be some additional rows in other table owned by this user.
      # just remove the username, displayname and mark the account as deleted.
      db.query """
      update users
      set (username,displayname,deleted)
      = (('deleted-' || key),('user ' || key),true)
      where key = $1
      """, [key]
    .then -> res.send!

route.put \/su/:key, aux.validate-key, (req, res) ->
  key = +req.params.key
  session.login {db, key, req} .then -> res.send!
