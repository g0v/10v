root = {}
<-(->it.apply root) _
@zmgr = new zmgr init: 1000
@auth = new auth!
manager = new block.manager registry: ({name,version,path,type}) ->
  if type == \block => return "/assets/lib/#name/#{version or \main}/#{path or \index.html}"
  return "/assets/lib/#name/#version/#{path or \index.min.js}"

ldld = new ldloader class-name: "ldld full", zmgr: @zmgr
frontend = do
  auth: @auth
  i18next: i18next
  block-manager: manager
  zmgr: @zmgr

@user = {}
@view = {}

@view.panel = new ldview do
  root: document.body
  action: click: do
    # we need an approch to control authpanel. should be done via auth.
    signup: ~> @auth.prompt true, {tab: \signup} .then -> update!
    login: ~> @auth.prompt true, {tab: \login} .then -> update!
    logout: ~> @auth.logout!then -> update!
    reauth: ~> @auth.logout!then ~> update! .then ~> @auth.prompt true, {tab: \login} .then -> update!
    notify: ~> ldnotify.send <[success warning danger dark light]>[Math.floor(Math.random! * 5)], "some test text"
    "hcaptcha-done": ~>
      console.log "done..."
      #@capobj.get!then -> console.log ">", it
    captcha: ~>
      @auth.get!
        .then (g) -> captcha.init g.captcha
        .then ->
          captcha.guard do
            cb: ->
              console.log it
              lderror.reject 1010

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
    #grecaptcha.ready -> grecaptcha.render \blah, {sitekey: g.captcha.sitekey}
    #cap.get {sitekey: '262e7cc7-7384-48c4-97de-8c91b5bfb9bf', enabled: true}
    #  .then -> console.log \ok

update!
  .then -> console.log \here
  .then -> i18next.init supportedLng: <[en zh-TW]>, fallbackLng: \zh-TW
  .then -> block.i18n.use i18next
  .then -> manager.init!
  .then -> manager.get {name: 'auth'}
  .then (bc) -> bc.create!
  .then (bi) -> bi.attach {root: document.body, data: {frontend}} .then -> bi.interface!
  .then ~>
    @auth.set-ui {authpanel: it, loader: new ldloader class-name: "ldld full"}
    debounce 1000
  #.then ~> @auth.ensure!
  .then -> console.log \ok
  #.then -> ldnotify.send \success, "you have successfully logged in."
  .then -> manager.get {name: 'captcha'}
  .then (bc) -> bc.create!
  .then (bi) -> bi.attach {root: document.body} .then -> bi.interface!
  .then (cap) ~>
    @auth.get!
      .then (g) ->
        cap.init g.captcha
      .then ~>
        cap.examine!

        /*
        capobj = cap.get \recaptcha_v2_checkbox .create {root: @view.panel.get('hcaptcha')}
        @capobj = capobj
        capobj.init!
          .then ->
            capobj.render!
            console.log "capobj inited"
        */

        /*
        capobj = cap.get \hcaptcha .create {root: @view.panel.get('hcaptcha')}
        @capobj = capobj
        capobj.init!
          .then ->
            capobj.render!
            console.log "capobj inited"
        */
      .then ->
        return
        cap.guard cb: ->
          console.log it, \done
          lderror.reject 1010
