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
    signup: ~> @auth.prompt {tab: \signup} .then -> update!
    login: ~> @auth.prompt {tab: \login} .then -> update!
    logout: ~> @auth.logout!then -> update!
    reauth: ~> @auth.logout!then ~> update! .then ~> @auth.prompt true, {tab: \login} .then -> update!
    notify: ~> ldnotify.send <[success warning danger dark light]>[Math.floor(Math.random! * 5)], "some test text"
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
    #grecaptcha.ready -> grecaptcha.render \blah, {sitekey: g.captcha.sitekey}
    #cap.get {sitekey: '262e7cc7-7384-48c4-97de-8c91b5bfb9bf', enabled: true}
    #  .then -> console.log \ok

update!
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
    @captcha = cap
    @auth.get!
      .then (g) -> cap.init g.captcha
      .then ~>
        cap.guard cb: (data) ->
          console.log "token obj: ", data
          ld$.fetch "/api/demo/post", {method: \POST}, {json: captcha: data}
            .then -> console.log "api response: ", it
            # if we want to test all captcha verifier...
            #.then -> lderror.reject 1010

  .then ~>
    console.log "load consent ..."
    cs = new consent {manager, global: @global}
    #cs.ensure {name: "consent", path: "block/tos/0.0.1/index.html"}, {link: "/assets/pdf/bitcoin.pdf"}
    cs.ensure {name: "consent", path: "block/cookie/0.0.1/index.html"}
  .then ->
    console.log "done."

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
