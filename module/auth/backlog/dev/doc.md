auth

 - get-ui: interactive widget for accessing user credential.
 - set-ui(ui)
   - get(opt)
 - ensure: return global object after user is authed.
   - options are the same with `get`, except `only-authed` is forced true.
 - get: return global object. don't actively do fetching, unless from authpanel. options:
   - only-authed: true if `get` triggers auth process if not signed in.
   - tab, info, force-email: information for authpanel
 - fetch: fetch global object from server or cookie. must be called at least once. options:
   - renew: force fetch from server if set to true. default true.
