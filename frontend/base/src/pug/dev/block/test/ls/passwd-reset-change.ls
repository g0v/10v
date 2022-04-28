module.exports =
  pkg:
    dependencies: []
  init: ({root}) ->
    ldc.register <[core]>, ({core}) ->
      <~ core.init!then _
      {auth, loader, ldcvmgr, captcha, error} = core
      ldcvmgr.init!
      view = new ldview do
        root: root
        action: click: submit: ~>
          if !pw-reset.ready! => return
          loader.on!
          captcha
            .guard cb: (captcha) ~>
              payload = {}
              payload = pw-reset.values!
              payload <<< {captcha}
              ld$.fetch "/api/auth/passwd/reset/#{@token}", {method: \POST}, {json: payload}
            .finally -> loader.off!
            .then -> ldcvmgr.get \done
            .then (v) ->
              if v != \login => return
              auth.ensure {lock: true} .then -> window.location.href = "/"
            .catch (e) ->
              console.log e
              error e

      pw-reset = new ldform do
        names: -> <[password confirm]>
        root: root
        submit: "input[ld='submit']"
        after-check: (s, f) ->
          [p1,p2] = [@fields.password.value, @fields.confirm.value]
          if s.password != 1 and p1.length < 8 => s <<< password: 2, confirm: 1
          if p1 != p2 and (s.confirm != 1 or p2 and s.password == 0) => s.confirm = 2
      Promise.resolve!
        .then ~>
          token = (document.cookie or '').split(\;).filter(->/password-reset-token/.exec(it)).0
          @token = token = (token or '').split('=').1
          if !token => return ldcvmgr.get \invalid
          document.cookie = "password-reset-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";


    ldc.init!
