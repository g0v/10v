<-(->it.apply {}) _
@zmgr = new zmgr init: 1000
@auth = new auth!
manager = new block.manager registry: ({name,version,path,type}) ->
  if type == \block => return "/block/#name/index.html"
  return "/assets/lib/#name/#version/#path"

ldld = new ldloader class-name: "ldld full", zmgr: @zmgr
frontend = do
  auth: @auth
  i18next: i18next
  block-manager: manager
  zmgr: @zmgr

@user = {}

view = {}
view.panel = new ldView do
  root: document.body
  action: click: do
    # we need an approch to control authpanel. should be done via auth.
    signup: ~> @auth.prompt true, {tab: \signup} .then -> update!
    login: ~> @auth.prompt true, {tab: \login} .then -> update!
    logout: ~> @auth.logout!then -> update!
    reauth: ~> @auth.logout!then ~> update! .then ~> @auth.prompt true, {tab: \login} .then -> update!
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
    view.panel.render!

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
  .then ~> @auth.ensure!
  .then -> console.log \ok
