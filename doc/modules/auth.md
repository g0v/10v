# authentication subsystem

db(schema) - backend(api) - frontend( visual appearence )
           - config


## backend

engine/auth.ls. API endpoints:

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
 - GET  / `@api/auth/<social>/callback`


## config
 - session cookie age
 - username pattern ( email? )
 - password pattern


## frontend

    +scope("authpanel")
      input(ld="username",name="username",autocomplete="username")
      input(ld="displayname",name="displayname",autocomplete="displayname")
      input(ld="password",name="password",type="password",autocomplete="password")
      a(ld="forgot-password") 忘記密碼
      button(ld="submit") 送出
      button(ld="social",data-name="facebook") Facebook
      button(ld="social",data-name="google") Google

