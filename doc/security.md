
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
     - alternatively, let us do the upload for them.
       - don't provide the privileges to the admin even if it's customizable.
       - ask for user's consent that this might be a possibly backdoor if user don't keep their account safe.
   - in above case, if admin got hacked and used to implant malicious code, at least it only affects that server.

# Headers

 - Helmet ( https://helmetjs.github.io/ )
   - `Helmet helps you secure your Express apps by setting various HTTP headers`
   - we should set headers manually but is worth a look.

# Supply Chain Attack

 - https://tech-blog.cymetrics.io/posts/huli/front-end-supply-chain-attack-cdnjs/
