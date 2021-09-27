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
      "or": "或"
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
init: ({root}) ->
  ldcv = {}
  ldcv.authpanel = new ldcover root: ld$.find(root, '.ldcv[data-name=authpanel]', 0), base-z: 1
  ldcv.authpanel.toggle \true
  console.log \inited.
  @ldld = new ldloader class-name: "ldld full z-fixed"
  lc = {switch: 'login'}
  view = new ldview do
    root: root
    action: click:
      action: ({node}) ~>
        list = <[default signup-failed login-failed token]>
        name = list[Math.floor(Math.random! * list.length)]
        @ldld.on!
          .then -> debounce 1000
          .then ->
            name = "login-failed"
            view.getAll('info').map (n) ->
              n.classList.toggle \d-none, (n.getAttribute(\data-name) != name)
          .finally ~> @ldld.off!
      switch: ({node}) ->
        lc.switch = node.getAttribute \data-name
        view.render!
    handler:
      displayname: ({node}) -> node.classList.toggle \d-none, lc.switch == \login
      switch: ({node}) ->
        name = node.getAttribute \data-name
        node.classList.toggle \btn-text, lc.switch != name
        node.classList.toggle \btn-primary, lc.switch == name

  @form = form = new ldform do
    names: -> <[username password displayname]>
    after-check: (s, f) ~>
      if s.username != 1 and !@is-valid.username(f.username.value) => s.username = 2
      if s.password != 1 =>
        s.password = if !f.password.value => 1 else if !@is-valid.password(f.password.value) => 2 else 0
      if @action == \login => s.displayname = 0
      else s.displayname = if !f.displayname.value => 1 else if !!f.displayname.value => 0 else 2
    root: root

is-valid:
  username: (u) -> curegex.get('email').exec(u)
  password: (p) -> p and p.length >= 8


