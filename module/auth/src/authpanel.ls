module.exports =
  pkg:
    name: "auth", version: "0.0.1"
    i18n:
      "zh-TW":
        "email": "電子郵件"
        "your email address, as account name": "您的電子郵件地址做為帳戶名"
        "invalid email address": "無效的電子郵件"
        "display name": "顯示名稱"
        "such as 'Paris Hillton'": "例如: 王小明"
        "requried field": "不能留白"
        "password too short": "密碼不能太短"
        "password incorrect": "密碼不正確"
        "how shuold we call you": "您希望我們如何稱呼您?"
        "password": "密碼"
        "at least 8 characters": "至少八個字元"
        "by sign-in, you agree to our": "登入即代表您同意我們的"
        "and": "和"
        "or login with": "或使用下列登入"
        "Terms": "使用條款"
        "Privacy Policy": "隱私權政策"
        "Login": "登入"
        "Signup": "註冊"
        "Sign Up": "註冊"
        "Forget Password": "忘記密碼"
        "code we sent you for using this service": "由我們另外發給您的邀請碼"
        "invitation code": "邀請碼"
        "invalid invitation code": "無效的邀請碼"
        "Switch to Password Login": "切換回帳號登入 / 註冊"
        "by Invitation": "使用邀請碼"
  init: ({root, data}) ->
    <-(~>it.apply @mod) _
    @ldcv = ldcv = {}
    @frontend = data.frontend
    iroot = ld$.find(root, '.ldcv[data-name=authpanel]', 0)
    ldcv.authpanel = new ldcover root: iroot, base-z: 100
    ldcv.authpanel.on \toggle.on, ->
      # dont know why we need 100ms delay to make this work. 
      # but indeed modal may still change style due to transition, after toggle.on.
      setTimeout (-> view.get('username').focus! ), 100
    @ldld = new ldloader class-name: "ldld full z-fixed"
    @ <<< {_tab: 'login', _info: \default}
    @view = view = new ldview do
      root: iroot
      action: click:
        submit: ({node}) ~> @submit!
        switch: ({node}) ~>
          @tab node.getAttribute \data-name
      handler:
        submit: ({node}) ~> node.classList.toggle \disabled, !(@ready)
        displayname: ({node}) ~> node.classList.toggle \d-none, @_tab == \login
        info: ({node}) ~> node.classList.toggle \d-none, (node.getAttribute(\data-name) != @_info)
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
    if toggle => @mod.ldcv.authpanel.get!
    else @mod.frontend.auth.fetch!then (g) -> @mod.ldcv.authpanel.set g

  mod:
    tab: (tab) ->
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
          ld$.fetch "#{@frontend.auth.api-root!}#{@_tab}", {method: \POST}, {json: body}
        .then ~> @frontend.auth.fetch!
        .finally ~> @ldld.off!
        .then (g) ~>
          @info \default
          @form.reset!
          @ldcv.authpanel.set g
          return g
        .catch (e) ~>
          console.log e
          if lderror.id(e) == 1004 => return @info "login-exceeded"
          @info "#{@_tab}-failed"
          @form.fields.password.value = null
          @form.check {n: \password, now: true}

