module.exports =
  pkg:
    name: "auth", version: "0.0.1"
    i18n: i18n-resource
    dependencies: [
      {name: "ldview", version: "main"}
      {name: "ldnotify", version: "main"}
      {name: "ldform", version: "main"}
      {name: "ldbutton", version: "main", type: \css}
      {name: "@loadingio/loading.css", version: "main", path: "lite.min.css"}
      {name: "ldnotify", version: "main", type: \css, global: true}
      {name: "curegex", version: "main", path: "curegex.min.js"}
    ]
  init: ({ctx, root, data, t}) ->
    {ldview, ldnotify, curegex, ldform} = ctx
    <-(~>it.apply @mod = @mod(ctx)) _
    @ldcv = ldcv = {}
    @_auth = data.auth
    iroot = ld$.find(root, '.ldcv[data-name=authpanel]', 0)
    ldcv.authpanel = new ldcover root: iroot, base-z: 100
    ldcv.authpanel.on \toggle.on, ->
      # dont know why we need 100ms delay to make this work. 
      # but indeed modal may still change style due to transition, after toggle.on.
      setTimeout (-> view.get('username').focus! ), 100
    @ <<< {_tab: 'login', _info: \default}
    @view = view = new ldview do
      root: iroot
      action:
        keyup: input: ({node, evt}) ~> if evt.keyCode == 13 => @submit!
        click:
          submit: ({node}) ~> @submit!
          switch: ({node}) ~>
            @tab node.getAttribute \data-name
      init:
        submit: ({node}) ~>
          @ldld = new ldloader root: node

      handler:
        submit: ({node}) ~>
          node.classList.toggle \disabled, !(@ready)
        "submit-text": ({node}) ~>
          node.innerText = t(if @_tab == \login => \Login else 'Sign Up')
        displayname: ({node}) ~> node.classList.toggle \d-none, @_tab == \login
        info: ({node}) ~>
          hide = (node.getAttribute(\data-name) != @_info)
          if node.classList.contains(\d-none) or hide => return node.classList.toggle \d-none, hide
          node.classList.toggle \d-none, true
          setTimeout (-> node.classList.toggle \d-none, hide), 0
        switch: ({node}) ~>
          name = node.getAttribute \data-name
          node.classList.toggle \btn-text, (@_tab != name)
          node.classList.toggle \btn-primary, (@_tab == name)
    @form = form = new ldform do
      names: -> <[username password displayname]>
      after-check: (s, f) ~>
        if s.username != 1 and !@is-valid.username(f.username.value) => s.username = 2
        if s.password != 1 =>
          s.password = if !f.password.value => 1 else if !@is-valid.password(f.password.value) => 2 else 0
        if @_tab == \login => s.displayname = 0
        else s.displayname = if !f.displayname.value => 1 else if !!f.displayname.value => 0 else 2
      root: iroot
    @form.on \readystatechange, ~> @ready = it; @view.render \submit

  interface: -> (toggle = true, opt = {}) ~>
    if opt.tab => @mod.tab opt.tab
    if opt.lock => @mod.ldcv.authpanel.lock!
    if toggle => @mod.ldcv.authpanel.get!
    else @mod.auth.fetch!then (g) -> @mod.ldcv.authpanel.set g

  mod: (ctx) ->
    {ldview, ldnotify, curegex} = ctx
    tab: (tab) ->
      if /failed/.exec(@_info) => @_info = \default
      @_tab = tab
      @view.render!
    is-valid:
      username: (u) -> curegex.get('email').exec(u)
      password: (p) -> p and p.length >= 8

    info: ->
      @_info = it
      @view.render \info

    submit: ->
      if !@form.ready! => return
      val = @form.values!
      body = {} <<< val{username, password, displayname}
      @ldld.on!
        .then -> debounce 1000
        .then ~>
          data = {}
          ld$.fetch "#{@_auth.api-root!}#{@_tab}", {method: \POST}, {json: body}
        .catch (e) ~>
          if lderror.id(e) != 1005 => return Promise.reject e
          # 1005 csrftoken mismatch - try recoverying directly by reset session
          ld$.fetch "#{@_auth.api-root!}reset", {method: \POST}
            .then ~>
              # now we have our session cleared. fetch global data again.
              @_auth.fetch {renew: true}
            .then ~>
              # try logging in again. if it still fails, fallback to normal error handling process
              ld$.fetch "#{@_auth.api-root!}#{@_tab}", {method: \POST}, {json: body}
        .then ~> @_auth.fetch!
        .finally ~> @ldld.off!
        .then (g) ~>
          @info \default
          @form.reset!
          @ldcv.authpanel.set g
          ldnotify.send "success", "login successfully"
          return g
        .catch (e) ~>
          console.log e
          if lderror.id(e) == 1004 => return @info "login-exceeded"
          @info "#{@_tab}-failed"
          @form.fields.password.value = null
          @form.check {n: \password, now: true}

