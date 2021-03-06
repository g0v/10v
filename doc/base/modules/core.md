# @servebase/core

service core module that initializes, constructs and provides following members:

 - `global`: server basic information
 - `user`: user object
 - `auth`: authentication
 - `ldcvmgr`: popup module handler
 - `manager`: block manager
 - `loader`: full screen loading indicator
 - `captcha`: captcha provider
 - `zmgr`: z-index manager
 - `error`: error handler

with additional APIs stored in `servebase` global variable:

 - `corectx(cb)`: run `cb` a ldc app with core inited as dependency.
   - example: `servebase.corectx(({core}) -> @auth == core.auth);`
   - return a Promise, resolved the return value of `cb` ( `cb` can also return Promise )
