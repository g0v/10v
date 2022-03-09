require! <[fs fs-extra crypto lderror]>
require! <[backend/aux backend/session backend/throttle @servebase/captcha]>

(backend) <- ((f) -> module.exports = -> f it) _
{db,config,route} = backend

verify-email = ({req, io, user}) ->
  obj = {}
  Promise.resolve!
    .then ->
      time = new Date!
      obj <<< {key: user.key, hex: "#{user.key}-" + (crypto.randomBytes(30).toString \hex), time: time }
      db.query "delete from mailverifytoken where owner=$1", [obj.key]
    .then -> db.query "insert into mailverifytoken (owner,token,time) values ($1,$2,$3)", [obj.key, obj.hex, obj.time]
    .then ->
      backend.mail-queue.by-template(
        \mail-verify
        user.username
        {token: obj.hex}
        {now: true}
      )

route.auth.post \/mail/verify, aux.signedin, (req, res) ->
  db.query "select key from users where key = $1 and deleted is not true", [req.user.key]
    .then (r={}) ->
      if !(r.[]rows.length) => return lderror.reject 404
      verify-email {req, user: req.user, db}
    .then -> res.send!

route.app.get \/auth/mail/verify/:token, (req, res) ->
  lc = {}
  if !(token = req.params.token) => return lderror.reject 400
  db.query "select owner,time from mailverifytoken where token = $1", [token]
    .then (r={})->
      if !r.[]rows.length => return lderror.reject 403
      lc.obj = r.rows.0
      db.query "delete from mailverifytoken where owner = $1", [lc.obj.owner]
    .then ->
      if new Date!getTime! - new Date(lc.obj.time).getTime! > 1000 * 600 => return lderror.reject 1013
      lc.verified = verified = {date: Date.now!}
      db.query "update users set verified = $2 where key = $1", [lc.obj.owner, JSON.stringify(verified)]
      if req.user and req.user.key == lc.obj.owner => session.login {db, key: req.user.key, req}
    .then ->
      db.query "select * from users where key = $1", [lc.obj.owner]
        .then (r={}) ->
          if !(u = r.[]rows.0) => return
          u.verified = lc.verified
          db.query """
          update sessions set detail = jsonb_set(detail, '{passport,user}', ($1)::jsonb)
          where (detail->'passport'->'user'->>'key')::int = $2
          """, [JSON.stringify(u), lc.obj.owner]
    .then ->
      res.redirect \/auth/mail/verified/
    .catch (e) ->
      if lderror.id(e) != 1013 => Promise.reject e
      else res.redirect \/auth/mail/expire/

