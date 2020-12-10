auth

 - get-ui: interactive widget for accessing user credential.
 - set-ui(ui)
   - get(opt)
 - ensure: return global object after user is authed.
 - get: return global object. don't actively do fetching, unless from authpanel.
 - fetch: fetch global object from server or cookie. must be called at least once.


    /*
    auth
      ensure(opt): get(opt <<< {only-authed: ture})
      get(opt):
        only-authed: 
        tab:
        info:
        force-email:
      fetch(opt) ->
        renew
    */
