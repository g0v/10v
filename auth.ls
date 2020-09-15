require! <[express-session passport passport-local passport-facebook passport-google-oauth20]>

setup = ({app, config, io}) ->

  get-user = -> authio.user.get u, p, usep, detail, doCreate

    authio.user.get u, p, usep, detail, doCreate
      .then ->
        done null, it
        return null
      .catch ->
        msg = if usep => "incorrect email or password" else "did you login with social account?"
        done null, false, {message: msg}
        return null



  passport.use new passport-local.Strategy {
    usernameField: \email
    passwordField: \passwd
  },(u,p,done) ~> get-user u, p, true, null, false, done

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

  session-store = -> @ <<< authio.session
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
