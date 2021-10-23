require! <[crypto]>
require! <[../../util/throttle ../../util/grecaptcha]>

(backend) <- ((f) -> module.exports = -> f it) _
{db,config,route:{api,app}} = backend

api.post \/me/passwd/reset/:token, throttle.count.ip-md, grecaptcha, (req, res) ->
  token = req.params.token
  password = {plain: req.body.password}
  db.auth.user.hashing password.plain, true, true
    .then (ret) ->
      password.hashed = ret
      db.query(["select users.key from users,pwresettoken"
      "where pwresettoken.token=$1 and users.key=pwresettoken.owner"].join(" "),[token])
    .then (r={}) ->
      if !r.[]rows.length => return lderror.reject 403
      user = r.rows.0
      user.password = password.hashed
      db.query "update users set (password,usepasswd) = ($2,$3) where key = $1", [user.key, user.password, true]
    .then -> db.query "delete from pwresettoken where pwresettoken.token=$1", [token]
    .then ->
      res.redirect \/dash/auth/reset/done
      return null

app.get \/me/passwd/reset/:token, throttle.count.ip-md, (req, res) ->
  token = req.params.token
  if !token => return lderror.reject 400
  db.query "select owner,time from pwresettoken where token = $1", [token]
    .then (r={})->
      if !r.[]rows.length => return lderror.reject 403
      obj = r.rows.0
      if new Date!getTime! - new Date(obj.time).getTime! > 1000 * 600 =>
        res.redirect \/auth/reset/expire/
        return null
      # use this to pass by param
      #res.redirect "/auth/reset/change/?token=#token"
      # use this to pass by cookie
      res.cookie "password-reset-token", token
      res.redirect "/dash/auth/reset/change/"
      return null

api.post \/me/passwd/reset, throttle.count.action.mail, (req, res) ->
  email = "#{req.body.email}".trim!
  if !email => return lderror.reject 400
  obj = {}
  db.query "select key from users where username = $1", [email]
    .then (r={}) ->
      if r.[]rows.length == 0 => return lderror.reject 404
      time = new Date!
      obj <<< {key: r.rows.0.key, hex: "#{r.rows.0.key}" + (crypto.randomBytes(30).toString \hex), time: time }
      db.query "delete from pwresettoken where owner=$1", [obj.key]
    .then -> db.query "insert into pwresettoken (owner,token,time) values ($1,$2,$3)", [obj.key, obj.hex, obj.time]
    .then ->
      mail.by-template(
        \reset-password
        email
        {token: obj.hex}
        {now: true}
      )
    .then -> res.send ''
