<-(->it.apply root) _

@admin = {}
@view.admin = new ldview do
  root: @view.panel.get('admin')
  handler:
    nouser: ({node}) ~> node.classList.toggle \d-none, (@admin.users or []).length
    user:
      list: ~> @admin.users or []
      view:
        text:
          username: ({ctx}) -> ctx.username
          displayname: ({ctx}) -> ctx.displayname
        handler: dropdown: ({node}) -> new BSN.Dropdown node
        action: click:
          "force-logout": ({ctx}) ->
            ld$.fetch "/api/admin/user/#{ctx.key}/logout", {method: \POST}
              .then -> alert \done.
          su: ({ctx}) ->
            ld$.fetch "/api/admin/su/#{ctx.key}", {method: \PUT}
              .then -> alert \done.
          "change-email": ({ctx}) ->
            email = prompt!
            ld$.fetch "/api/admin/user/#{ctx.key}/email", {method: \POST}, {json: {email}}
              .then -> alert "email changed to #email"
          "change-password": ({ctx}) ->
            password = prompt!
            ld$.fetch "/api/admin/user/#{ctx.key}/password", {method: \POST}, {json: {password}}
              .then -> alert "password changed to #password"
          "random-password": ({ctx}) ->
            password = Math.random!toString(36).substring(2)
            ld$.fetch "/api/admin/user/#{ctx.key}/password", {method: \POST}, {json: {password}}
              .then -> alert "password changed to #password"
          "delete-user": ({ctx}) ->
            ld$.fetch "/api/admin/user/#{ctx.key}", {method: \DELETE}
              .then -> alert \delete.

  action: click:
    "throttle-reset": ~> ld$.fetch "/api/admin/throttle/reset/", {method: \GET} .then -> alert 'throttle reset.'
    adduser: ~>
      username = @view.admin.get('adduser.username').value
      displayname = @view.admin.get('adduser.displayname').value
      password = @view.admin.get('adduser.password').value
      if !(username and displayname) => return
      if !password => password = Math.random!toString(36).substring(2)
      ld$.fetch "/api/admin/user/", {method: \POST}, {type: \json, json: {username, displayname, password}}
        .then -> alert "user created ( key: #{it.key} )"
        .then ~>
          <[username displayname password]>.map ~> @view.admin.get("adduser.#{it}").value = ''

    search: ({node}) ~>
      keyword = @view.admin.get('keyword').value or ''
      if !keyword => return
      ld$.fetch "/api/admin/users", {method: "POST"}, {type: \json, json: {keyword}}
        .then ~>
          @admin.users = it
          @view.admin.render!

