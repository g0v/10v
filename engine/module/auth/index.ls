require! <[express-session passport passport-local passport-facebook passport-google-oauth20 lderror]>
require! <[../../module/aux]>

get-user = ({username, password, method, detail, create, done}) ->
  db.auth.user.get {username, password, method, detail, create}
    .then (user) !-> done null, user
    .catch !-> done new lderror(1012), null, {message: ''}

strategy = do
  local: (opt) ->
    passport.use new passport-local.Strategy {
      usernameField: \username, passwordField: \password
    }, (username,password,done) ~>
      get-user {username, password, method: \local, detail: null, create: false, done}

  google: (opt) ->
    passport.use new passport-google-oauth20.Strategy(
      do
        clientID: opt.clientID
        clientSecret: opt.clientSecret
        callbackURL: "/api/auth/google/callback"
        passReqToCallback: true
        userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
        profileFields: ['id', 'displayName', 'link', 'emails']
      , (request, access-token, refresh-token, profile, done) !->
        if !profile.emails => done null, false, {}
        else get-user profile.emails.0.value, null, false, profile, true, done
    )

  facebook: (opt) ->
    passport.use new passport-facebook.Strategy(
      do
        clientID: opt.clientID
        clientSecret: opt.clientSecret
        callbackURL: "/api/auth/facebook/callback"
        profileFields: ['id', 'displayName', 'link', 'emails']
      , (access-token, refresh-token, profile, done) !->
        if !profile.emails => done null, false, {}
        else get-user profile.emails.0.value, null, false, profile, true, done
    )

ret = (backend) ->
  {db,app,config,route} = backend

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
      recaptcha: config.{}grecaptcha{sitekey, enabled}
    })
    res.cookie 'global', payload, { path: '/', secure: true }
    res.send payload

  <[local google facebook]>.map ->
    if config[it] => strategy[it](config[it])
    route.auth
      ..post "/#name", passport.authenticate name, {scope: ['email']}
      ..get "/#name/callback", passport.authenticate name, do
        successRedirect: \/auth/done/
        failureRedirect: \/auth/failed/social.html

  passport.serializeUser (u,done) !->
    db.auth.user.serialize u .then (v) !-> done null, v
  passport.deserializeUser (v,done) !->
    db.auth.user.deserialize v .then (u = {}) !-> done null, u

  session-store = -> @ <<< db.auth.session
  session-store.prototype = express-session.Store.prototype
  app.use session = express-session do
    secret: config.session.secret
    resave: true
    saveUninitialized: true
    store: new session-store!
    proxy: true
    cookie: do
      path: \/
      httpOnly: true
      maxAge: 86400000 * 30 * 12 #  1 year
  app.use passport.initialize!
  app.use passport.session!

  route.auth
    ..post \/signup, (req, res, next) ->
      {username,displayname,password,config} = req.body{username,displayname,password,config}
      if !username or !displayname or password.length < 8 => return next(new lderror 400)
      db.auth.user.create {username, password} <<< {
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

module.exports = ret
