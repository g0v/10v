({core}) <- ldc.register \navtop, <[core]>, _
<- core.init!then _
<-(->it.apply {}) _

auth = core.auth
@ <<< core{user, global}

if !(navtop = ld$.find('[ld-scope=navtop]',0)) => return

@update = (g) ~>
  p = if g => Promise.resolve(g) else auth.get!
  p.then (g) ~>
    @ <<< {global: g, user: g.user or {}}
    view.render!

view = new ldview do
  root: navtop
  action:
    click:
      signup: ~> auth.prompt {tab: \signup} .then ~> @update!
      login: ~> auth.prompt {tab: \login} .then ~> @update!
      logout: ~> auth.logout!then ~> @update!
      "set-lng": ({node, views}) ~>
        core.i18n.changeLanguage node.getAttribute \data-name
        views.0.render \lng
  text:
    displayname: ~> @user.displayname or 'User'
    username: ~> @user.username or 'n/a'
    lng: ->
      lng = core.i18n.language
      view.getAll(\set-lng)
        .filter (n) -> lng == n.getAttribute(\data-name)
        .map (n) -> n.getAttribute(\data-alias) or n.innerText.trim!
        .0 or lng
  handler:
    admin: ({node}) ~> node.classList.toggle \d-none, !@user.staff
    unauthed: ({node}) ~> node.classList.toggle \d-none, !!@user.key
    authed: ({node}) ~> node.classList.toggle \d-none, !@user.key
    avatar: ({node}) ~> node.style.backgroundImage = "url(/assets/avatar/#{@user.key})"

bar = view.get \root
dotst = (bar.getAttribute(\data-classes) or "").split(';').map(->it.split(' ').filter(->it))
tst-tgt = ld$.find document, bar.getAttribute(\data-pivot), 0
if !(dotst.length and tst-tgt) => return
(new IntersectionObserver (->
  if !(n = it.0) => return
  dotst.0.map (c) -> bar.classList.toggle c, n.isIntersecting
  if dotst.1 => dotst.1.map (c) -> bar.classList.toggle c, !n.isIntersecting
), {threshold: 0.1}).observe tst-tgt

return {}
