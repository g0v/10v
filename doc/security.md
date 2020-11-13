
list all api endpoint:
 - https://github.com/expressjs/express/issues/3308
 - https://github.com/vijay4495/express-routes-catalogue
 - https://github.com/AlbertoFdzM/express-list-endpoints
 - https://github.com/ErisDS/middleware-stack-printer

# Policy

 - dont let users adding code that can be run in server side, such as, pug template.
   - however, if we have to, we should:
     - setup a standalone server to do this
     - use different credentials for the standalone server
   - in above case, if admin got hacked and used to implant malicious code, at least it only affects that server.
