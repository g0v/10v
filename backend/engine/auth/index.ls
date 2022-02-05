require! <[express-session passport passport-local]>
require! <[passport-facebook]>
require! <[passport-google-oauth20]>
require! <[passport-line-auth]>
require! <[lderror jsonwebtoken]>
require! <[../aux ./reset ./verify]>

(backend) <- ((f) -> module.exports = auth-module = -> f it) _
{db,app,config,route} = backend

captcha = Object.fromEntries [[k,v] for k,v of config.captcha].map -> [it.0, it.1{sitekey, enabled}]

get-user = ({username, password, method, detail, create, cb, req}) ->
  db.user-store.get {username, password, method, detail, create}
    .then (user) !->
      db.query "select count(ip) from session where owner = $1 group by ip", [user.key]
        .then (r={}) ->
          # by default disabled - session amount limitation
          if false and ((r.[]rows.0 or {}).count or 1) > 1 => cb lderror(1004), null, {message: ''}
          else cb null, (user <<< {ip: aux.ip(req)})
    .catch !-> cb lderror(1012), null, {message: ''}

strategy = do
  local: (opt) ->
    passport.use new passport-local.Strategy {
      usernameField: \username, passwordField: \password
      passReqToCallback: true
    }, (req, username,password,cb) ~>
      get-user {username, password, method: \local, detail: null, create: false, cb, req}

  google: (opt) ->
    passport.use new passport-google-oauth20.Strategy(
      do
        clientID: opt.clientID
        clientSecret: opt.clientSecret
        callbackURL: "/api/auth/google/callback"
        passReqToCallback: true
        userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
        profileFields: ['id', 'displayName', 'link', 'emails']
      , (req, access-token, refresh-token, profile, cb) !->
        if !profile.emails => cb null, false, {}
        else get-user {
          username: profile.emails.0.value, password: null
          method: \google, detail: profile, create: true, cb, req
        }
    )

  facebook: (opt) ->
    passport.use new passport-facebook.Strategy(
      do
        clientID: opt.clientID
        clientSecret: opt.clientSecret
        passReqToCallback: true
        callbackURL: "/api/auth/facebook/callback"
        profileFields: ['id', 'displayName', 'link', 'emails']
      , (req, access-token, refresh-token, profile, cb) !->
        if !profile.emails => cb null, false, {}
        else get-user {
          username: profile.emails.0.value, password: null
          method: \facebook, detail: profile, create: true, cb, req
        }
    )

  line: (opt) ->
    passport.use new passport-line-auth.Strategy(
      do
        channelID: opt.channelID
        channelSecret: opt.channelSecret
        callbackURL: "/api/auth/line/callback"
        scope: <[profile openid email]>
        botPrompt: \normal
        passReqToCallback: true
        prompt: 'consent'
        uiLocales: \zh-TW
      , (req, access-token, refresh-token, params, profile, cb) !->
        try
          ret = jsonwebtoken.verify params.id_token, opt.channelSecret
          if !(ret and ret.email) => throw new Error('')
          get-user {
            username: ret.email, password: null
            method: \line, detail: profile, create: true, cb, req
          }
        catch e
          console.log e
          cb null, false, {}
    )

# =============== USER DATA, VIA AJAX
# Note: jsonp might lead to exploit since jsonp is not protected by CORS.
# * this cant be protected by CSRF, since it provides CSRF token.
# * this must be protected by CORS Policy, otherwise 3rd website can get user info easily.
# * this is passed via cookie too, but cookie won't be set if user doesn't get files served from express.
#   so, for the first time user we still have to do ajax.
#   cookie will be checked in frontend to see if ajax is needed.
# * user could stil alter cookie's content, so it's necessary to force ajax call for important action
#   there is no way to prevent user from altering client side content,
#   so if we want to prevent user from editing our code, we have to go backend for the generation.
route.auth.get \/info, (req, res) ~>
  res.setHeader \content-type, \application/json
  payload = JSON.stringify({
    csrfToken: req.csrfToken!
    production: backend.production
    ip: aux.ip(req)
    user: if req.user => req.user{key, config, displayname, verified, username} else {}
    captcha: captcha
  })
  res.cookie 'global', payload, { path: '/', secure: true }
  res.send payload

<[local google facebook line]>.map (name) ->
  if config{}auth[name] => strategy[name](config.auth[name])
  route.auth
    ..post "/#name", passport.authenticate name, {scope: <[profile openid email]>}
    ..get "/#name/callback", passport.authenticate name, do
      successRedirect: \/auth/done/
      failureRedirect: \/auth/failed/social.html

passport.serializeUser (u,done) !->
  db.user-store.serialize u .then (v) !-> done null, v
passport.deserializeUser (v,done) !->
  db.user-store.deserialize v .then (u = {}) !-> done null, u

app.use backend.session = session = express-session do
  secret: config.session.secret
  resave: true
  saveUninitialized: true
  store: db.session-store
  proxy: true
  cookie: do
    path: \/
    httpOnly: true
    maxAge: config.session.max-age
app.use passport.initialize!
app.use passport.session!

route.auth
  ..post \/signup, (req, res, next) ->
    {username,displayname,password,config} = req.body{username,displayname,password,config}
    if !username or !displayname or password.length < 8 => return next(new lderror 400)
    db.user-store.create {username, password} <<< {
      method: \local, detail: {displayname}, config: (config or {})
    }
      .then (user) !-> req.logIn user, !-> res.send!
      .catch !-> next(new lderror 403)
  ..post \/login, (req, res, next) ->
    ((err,user,info) <- passport.authenticate \local, _
    if err or !user => return next(err or new lderror(1000))
    req.logIn user, (err) !-> if err => next(err) else res.send!
    )(req, res, next)
  ..post \/logout, (req, res) -> req.logout!; res.send!
  ..post \/reset, (req, res) ->
    aux.clear-cookie res
    req.logout!
    res.send!

reset backend
verify backend
