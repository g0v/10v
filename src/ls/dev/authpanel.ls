#type = \login or \signup
#ld$.fetch "#{@api-root!}auth/#type", {method: \POST}, {json: data, type: \text}
#  .then ->

authpanel = (opt={}) ->
  @opt = opt
  @root = if typeof(opt.root) == \string => document.querySelector(opt.root) else opt.root
  if opt.is-valid => @is-valid = opt.is-valid
  @action = \signup
  @auth = opt.auth
  @init!
  @

authpanel.prototype = Object.create(Object.prototype) <<< do
  set-action: (a) -> @action = a
  init: ->
    @view = new ldView do
      root: @root
      handler: submit: (->)
      action:
        keyup: password: ({evt}) ~> if evt.keyCode == 13 => @form.check {now: true} .then ~> @submit!
        click: submit: ~> @submit!

    @ldld = new ldLoader root: @view.get('submit')

    @form = form = new ldForm do
      names: -> <[username password displayname]>
      after-check: (s, f) ~>
        if s.username != 1 and !@is-valid.username(f.username.value) => s.username = 2
        if s.password != 1 =>
          s.password = if !f.password.value => 1 else if !@is-valid.password(f.password.value) => 2 else 0
        if auth.act == \login => s.displayname = 0
        else s.displayname = if !f.displayname.value => 1 else if !!f.displayname.value => 0 else 2
      root: @root

    @form.on \readystatechange, ~> @view.get('submit').classList.toggle \disabled, !it

  submit: ->
    if !@form.ready! => return
    @ldld.on!
    val = @form.values!
    body = {} <<< val{username, password, displayname}
    Promise.resolve!
      .then ~>
        data = {}
        ld$.fetch "#{@auth.api-root!}#{@action}", {method: \POST}, {json: body}
      .then ~> @auth.fetch!
      .then (g) ~>
        @set-info \default
        if g.user => lda.auth.hide \ok
        @form.reset!
        @ldld.off!
      .catch ~>
        @set-info (if @action == \signup => \signup-failed else \failed)
        @form.fields.password.value = null
        @form.check {n: \password, now: true}
        @ldld.off!

  is-valid: 
    username: (u) -> curegex.get('email').exec(u)
    password: (p) -> p and p.length >= 8

new authpanel do
  root: '.authpanel'
  auth: new auth!
