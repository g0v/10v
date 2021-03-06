// Generated by LiveScript 1.6.0
(function(){
  var expressSession, passport, passportLocal, passportFacebook, passportGoogleOauth20, passportLineAuth, lderror, jsonwebtoken, aux;
  expressSession = require('express-session');
  passport = require('passport');
  passportLocal = require('passport-local');
  passportFacebook = require('passport-facebook');
  passportGoogleOauth20 = require('passport-google-oauth20');
  passportLineAuth = require('passport-line-auth');
  lderror = require('lderror');
  jsonwebtoken = require('jsonwebtoken');
  aux = require('../../module/aux');
  (function(f){
    var authModule;
    return module.exports = authModule = function(it){
      return f(it);
    };
  })(function(backend){
    var db, app, config, route, getUser, strategy, sessionStore, session, x$;
    db = backend.db, app = backend.app, config = backend.config, route = backend.route;
    getUser = function(arg$){
      var username, password, method, detail, create, cb;
      username = arg$.username, password = arg$.password, method = arg$.method, detail = arg$.detail, create = arg$.create, cb = arg$.cb;
      return db.auth.user.get({
        username: username,
        password: password,
        method: method,
        detail: detail,
        create: create
      }).then(function(user){
        cb(null, user);
      })['catch'](function(){
        cb(new lderror(1012), null, {
          message: ''
        });
      });
    };
    strategy = {
      local: function(opt){
        return passport.use(new passportLocal.Strategy({
          usernameField: 'username',
          passwordField: 'password'
        }, function(username, password, cb){
          return getUser({
            username: username,
            password: password,
            method: 'local',
            detail: null,
            create: false,
            cb: cb
          });
        }));
      },
      google: function(opt){
        return passport.use(new passportGoogleOauth20.Strategy({
          clientID: opt.clientID,
          clientSecret: opt.clientSecret,
          callbackURL: "/api/auth/google/callback",
          passReqToCallback: true,
          userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
          profileFields: ['id', 'displayName', 'link', 'emails']
        }, function(request, accessToken, refreshToken, profile, cb){
          if (!profile.emails) {
            cb(null, false, {});
          } else {
            getUser({
              username: profile.emails[0].value,
              password: null,
              method: 'google',
              detail: profile,
              create: true,
              cb: cb
            });
          }
        }));
      },
      facebook: function(opt){
        return passport.use(new passportFacebook.Strategy({
          clientID: opt.clientID,
          clientSecret: opt.clientSecret,
          callbackURL: "/api/auth/facebook/callback",
          profileFields: ['id', 'displayName', 'link', 'emails']
        }, function(accessToken, refreshToken, profile, cb){
          if (!profile.emails) {
            cb(null, false, {});
          } else {
            getUser({
              username: profile.emails[0].value,
              password: null,
              method: 'facebook',
              detail: profile,
              create: true,
              cb: cb
            });
          }
        }));
      },
      line: function(opt){
        return passport.use(new passportLineAuth.Strategy({
          channelID: opt.channelID,
          channelSecret: opt.channelSecret,
          callbackURL: "/api/auth/line/callback",
          scope: ['profile', 'openid', 'email'],
          botPrompt: 'normal',
          prompt: 'consent',
          uiLocales: 'zh-TW'
        }, function(accessToken, refreshToken, params, profile, cb){
          var ret, e;
          try {
            ret = jsonwebtoken.verify(params.id_token, opt.channelSecret);
            if (!(ret && ret.email)) {
              throw new Error('');
            }
            getUser({
              username: ret.email,
              password: null,
              method: 'line',
              detail: profile,
              create: true,
              cb: cb
            });
          } catch (e$) {
            e = e$;
            console.log(e);
            cb(null, false, {});
          }
        }));
      }
    };
    route.auth.get('/info', function(req, res){
      var ref$, payload, ref1$;
      res.setHeader('content-type', 'application/json');
      payload = JSON.stringify({
        csrfToken: req.csrfToken(),
        production: backend.production,
        ip: aux.ip(req),
        user: req.user
          ? {
            key: (ref1$ = req.user).key,
            config: ref1$.config,
            displayname: ref1$.displayname,
            verified: ref1$.verified,
            username: ref1$.username
          }
          : {},
        recaptcha: {
          sitekey: (ref$ = config.grecaptcha || (config.grecaptcha = {})).sitekey,
          enabled: ref$.enabled
        }
      });
      res.cookie('global', payload, {
        path: '/',
        secure: true
      });
      return res.send(payload);
    });
    ['local', 'google', 'facebook', 'line'].map(function(name){
      var x$;
      if ((config.auth || (config.auth = {}))[name]) {
        strategy[name](config.auth[name]);
      }
      x$ = route.auth;
      x$.post("/" + name, passport.authenticate(name, {
        scope: ['profile', 'openid', 'email']
      }));
      x$.get("/" + name + "/callback", passport.authenticate(name, {
        successRedirect: '/auth/done/',
        failureRedirect: '/auth/failed/social.html'
      }));
      return x$;
    });
    passport.serializeUser(function(u, done){
      db.auth.user.serialize(u).then(function(v){
        done(null, v);
      });
    });
    passport.deserializeUser(function(v, done){
      db.auth.user.deserialize(v).then(function(u){
        u == null && (u = {});
        done(null, u);
      });
    });
    sessionStore = function(){
      return import$(this, db.auth.session);
    };
    sessionStore.prototype = expressSession.Store.prototype;
    app.use(session = expressSession({
      secret: config.session.secret,
      resave: true,
      saveUninitialized: true,
      store: new sessionStore(),
      proxy: true,
      cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 86400000 * 30 * 12
      }
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    x$ = route.auth;
    x$.post('/signup', function(req, res, next){
      var ref$, username, displayname, password, config;
      ref$ = {
        username: (ref$ = req.body).username,
        displayname: ref$.displayname,
        password: ref$.password,
        config: ref$.config
      }, username = ref$.username, displayname = ref$.displayname, password = ref$.password, config = ref$.config;
      if (!username || !displayname || password.length < 8) {
        return next(new lderror(400));
      }
      return db.auth.user.create({
        username: username,
        password: password,
        method: 'local',
        detail: {
          displayname: displayname
        },
        config: config || {}
      }).then(function(user){
        req.logIn(user, function(){
          res.send();
        });
      })['catch'](function(){
        next(new lderror(403));
      });
    });
    x$.post('/login', function(req, res, next){
      return passport.authenticate('local', function(err, user, info){
        if (err || !user) {
          return next(err || new lderror(1000));
        }
        return req.logIn(user, function(err){
          if (err) {
            next(err);
          } else {
            res.send();
          }
        });
      })(req, res, next);
    });
    x$.post('/logout', function(req, res){
      req.logout();
      return res.send();
    });
    return x$;
  });
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
