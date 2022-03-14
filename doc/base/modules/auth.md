# Authentication Subsystem

Authentication Subsystem involes following parts:

 - db - defines data schema for authentication
 - backend - access endpoint between client and server ( via server API )
 - frontend - how website interact with users via widgets and client API
 - config

User information is stored in an object called `global`, passed by an API by requested, which contains:

 - `key`
 - ...


## Frontend 

Frontend related codes are defined under `module/auth`. It includes two parts:

 - `authpanel` block defined in `@plotdb/block` spec.
 - auth API, as wrapper to `authpanel` block.


### Auth API

include `auth/index.js` and construct a new `auth` object:

    new auth(opt)

with following options:

 - `ui` - predefined UI components, with following fields:
   - `authpanel`: should be an `authpanel` block if provided.
   - `loader`: should be a `ldloader` object if provided.
   - `timeout`: should be a function that triggers timeout related event / ui if provided
 - `api` - root of auth related api for accessing backend API. default `/api/auth`


The constructed object provides following API: ( TODO: review and rename / refactor if necessary )

 - `logout()`: logout a user.
   - fire `logout` event if success, otherwise fire `error` event.
 - `get(opt)`: return a Promise that resolves the `global` object.
   - by default, this doesn't involve `fetch` from server ( or cookie ) - it's expected to simply request a `global` object which already fetched earlier - so it will block until `fetch` called. However, `fetch` may still be called if a sign in process is triggered.
     - TODO: perhaps we can trigger fetch ( e.g., in proxise.once ) if global is not yet fetched?
   - options:
     - `authed-only`: should we only get authed `global` object.
       - true if we require users to be authed ( logged in ).
       - default false, which still resolves to an user global object as a guest user ( no user info ).
 - `fetch(opt)`: fetch the `global` object from either cookie or server.
   - options:
     - `renew`: true to fetch from server. false to fetch from cookie first. default true.
 - `prompt(opt)`: shorthand for `ui.authpanel(true, opt)`
 - `social(opt)`: trigger social login. options:
   - `name`: social login name. e.g., `facebook`, `google` or `line`.
 - `ensure()`: make sure an user is logged in. prompt a auth panel if not
   - return a Promise that resolves the `global` object.
   - reject `lderror(1000)` if anyway we fail to ensure the user is logged in.
 - `set-ui`: change ui widget configured in constructor option `ui`.
 - `on(name, cb)`: listen to specific event `name` with callback function `cb`
 - `fire(name, ...args)`: fire event `name` with `args`.
 - `api-root()`: return `api-root`
 - `inject`: TBD


### Authpanel

We use `@plotdb/block` to simplify and offload authpanel from main pages. It's possible to customize authpanel appearence by extending `auth` block. Following are the `ldview` interface + minimal markup for authpanel script to work:

    +scope("authpanel")
      input(ld="username",name="username",autocomplete="username")
      input(ld="displayname",name="displayname",autocomplete="displayname")
      input(ld="password",name="password",type="password",autocomplete="password")
      a(ld="forgot-password") Forget Password
      button(ld="switch",data-name="login") Login
      button(ld="switch",data-name="signup") Sign Up
      button(ld="submit") Submit
      button(ld="social",data-name="facebook") Facebook
      button(ld="social",data-name="google") Google
      div(ld="info", data-name="default")
      div(ld="info", data-name="login-exceeded")
      div(ld="info", data-name="login-failed")
      div(ld="info", data-name="signup-failed")
      div(ld="info", data-name="token")

Authpanel script works with bootstrap and still have some class names hardcoded, which should be abstracted in the future to make its UI fully customizable.


### Authpanel Construction

Pass `auth` object when constructing authpanel block:

    @auth = new auth!
    manager.from(
      {name: "auth"},
      {root: document.body, data: {auth: @auth}
    )
      .then ->  ...


## backend


engine/auth.ls. API endpoints:

 - sign in related
   - GET  / `@api/auth/info` - server and user information
   - POST / `@api/auth/signup` - signup. params:
     - username
     - displayname
     - password
     - config
   - POST / `@api/auth/login` - login. params:
     - username
     - password
   - POST / `@api/auth/logout` - logout. no params.
   - POST  / `@api/auth/reset` - logout, clear cookie
   - GET  / `@api/auth/<social>/callback`
 - password reset
   - POST / `@api/auth/passwd`
   - POST / `@api/auth/passwd/:token`
   - GET  / `@app/auth/passwd/:token`
 - email verification
   - POST / `@api/auth/mail/verify`
   - GET  / `@app/auth/mail/verify/:token`


## config

 - session cookie age
 - username pattern ( email? )
 - password pattern

