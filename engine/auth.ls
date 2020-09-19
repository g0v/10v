require! <[express-session passport passport-local passport-facebook passport-google-oauth20 lderror]>

ret = (backend) ->
  {db,app,config,route} = backend

  get-user = ({username, password, method, detail, create, done}) ->
    db.auth.user.get {username, password, method, detail, create}
      .then (user) !-> done null, user
      .catch !-> done new lderror(1012), null, {message: ''}

  passport.use new passport-local.Strategy {
    usernameField: \email, passwordField: \password
  }, (username,password,done) ~>
    get-user {username, password, method: \local, detail: null, create: false, done}

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
/*

passport.use new passport-google-oauth20.Strategy(
  do
    clientID: config.google.clientID
    clientSecret: config.google.clientSecret
    callbackURL: "/dash/api/u/auth/google/callback"
    passReqToCallback: true
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
    profileFields: ['id', 'displayName', 'link', 'emails']
  , (request, access-token, refresh-token, profile, done) ~>
    if !profile.emails =>
      done null, false, do
        message: "We can't get email address from your Google account. Please try signing up with email."
      return null
    get-user profile.emails.0.value, null, false, profile, true, done
)

passport.use new passport-facebook.Strategy(
  do
    clientID: config.facebook.clientID
    clientSecret: config.facebook.clientSecret
    callbackURL: "/dash/api/u/auth/facebook/callback"
    profileFields: ['id', 'displayName', 'link', 'emails']
  , (access-token, refresh-token, profile, done) ~>
    if !profile.emails =>
      done null, false, do
        message: "We can't get email address from your Facebook account. Please try signing up with email."
      return null
    get-user profile.emails.0.value, null, false, profile, true, done
)
*/
