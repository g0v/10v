module.exports =
  pkg:
    dependencies: [
      {name: "ldform"}
      {name: "curegex", path: "curegex.min.js"}
    ]
  init: ({root}) ->
    ldc.register <[core]>, ({core}) ->
      <~ core.init!then _
      @ldcv = {}
      {loader, error, captcha} = core
      view = new ldview do
        root: ld$.find(root, '[ld-scope=password-reset]', 0)
        init:
          "sent": ({node}) ~> @ldcv.sent = new ldcover root: node, lock: true
          "not-found": ({node}) ~> @ldcv.not-found = new ldcover root: node
          "email": ({node}) ~> node.focus!
        action: click: do
          submit: ({node}) ~>
            if !pw-reset-mail.ready! => return
            loader.on!
            captcha.guard cb: (captcha) ~>
              ld$.fetch '/api/auth/passwd/reset', {method: \POST}, {json: {email: view.get(\email).value, captcha}}
                .then ~>
                  @ldcv.sent.get!
                .catch (e) ~>
                  loader.off!
                  if lderror.id(e) == 404 => @ldcv.not-found.toggle!
                  else error e
      pw-reset-mail = new ldform do
        names: -> <[email]>
        submit: '.btn[ld=submit]'
        root: view.root
        after-check: (s, f) ->
          if s.email != 1 and !curegex.get('email').exec(f.email.value) => s.email = 2

    ldc.init!
