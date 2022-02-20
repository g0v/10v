({core}) <- ldc.register <[core]>, _
<- core.init!then _
<-(->it.apply core) _

@view = {}
@view.panel = new ldview do
  root: document.body
  action: click: do
    # we need an approch to control authpanel. should be done via auth.
    signup: ~> @auth.prompt {tab: \signup} .then -> update!
    login: ~> @auth.prompt {tab: \login} .then -> update!
    logout: ~> @auth.logout!then -> update!
    reauth: ~> @auth.logout!then ~> update! .then ~> @auth.prompt true, {tab: \login} .then -> update!
    notify: ~> ldnotify.send <[success warning danger dark light]>[Math.floor(Math.random! * 5)], "some test text"
    "password-reset": ~>
      if !(email = @view.panel.get('password-reset-email').value) => return
      ldld.on!
      Promise.resolve!
        .then ~>
          @captcha.guard cb: (captcha) ~>
            ld$.fetch "/api/auth/passwd/reset", {method: \POST}, {json: {email, captcha}}
        .finally -> ldld.off!
        .catch ->
          console.log it
          return lderror.reject it

    "hcaptcha-done": ~>
      console.log "done..."
      #@capobj.get!then -> console.log ">", it
    captcha: ~>
      @auth.get!
        .then (g) ~> @captcha.init g.captcha
        .then ~>
          @captcha.guard do
            cb: (data) ->
              # if we just somehow test captcha.guard:
              # lderror.reject 1010
              ld$.fetch "/api/demo/post", {method: \POST}, {json: captcha: data}
                .then -> console.log "accessing /api/demo/post successfully"
                .catch ->
                  console.error "accessing /api/demo/post with captcha failed: ", it
                  Promise.reject it
  text: do
    username: ~> @user.username or 'n/a'
    userid: ~> @user.key or 'n/a'
  handler: do
    signed: ({node}) ~> node.classList.toggle \d-none, !@user.username
    "not-signed": ({node}) ~> node.classList.toggle \d-none, !!@user.username
    status: ({node}) ~>
      node.innerText = if @user.username => 'Signed in' else 'Not login'
      node.classList.toggle \text-danger, !@user.username

update = ~>
  @auth.get!then (g) ~>
    @global = g
    @user = g.user
    @view.panel.render!

@auth.on \change, update
console.log "test captcha.guard /api/demo/post ..."
@captcha.guard cb: (data) ->
  console.log "token obj: ", data
  ld$.fetch "/api/demo/post", {method: \POST}, {json: captcha: data}
    .then -> console.log "api response: ", it
    # if we want to test all captcha verifier...
    #.then -> lderror.reject 1010

  #.then -> ldnotify.send \success, "you have successfully logged in."
