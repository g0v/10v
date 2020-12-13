#type = \login or \signup
#ld$.fetch "#{@api-root!}auth/#type", {method: \POST}, {json: data, type: \text}
#  .then ->

authpanel = (opt={}) ->
  @opt = opt
  @root = if typeof(opt.root) == \string => document.querySelector(opt.root) else opt.root
  @init!
  @

authpanel.prototype = Object.create(Object.prototype) <<< do
  init: ->
    @view = new ldView do
      root: @root

    # typical auth check flow
    lc.form = form = new ldForm do
      names: -> <[email passwd displayname]>
      after-check: (s, f) ->
        if s.email != 1 and !/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.[a-z]{2,}|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.exec(f.email.value) => s.email = 2
        if s.passwd != 1 =>
          #if auth.act != \login and "#{f.passwd.value}".length < 8 => s.passwd = 2
          #else s.passwd = if !f.passwd.value => 1 else 0
          s.passwd = if !f.passwd.value => 1 else if "#{f.passwd.value}".length < 8 => 2 else 0
        if auth.act == \login => s.displayname = 0
        else s.displayname = if !f.displayname.value => 1 else if !!f.displayname.value => 0 else 2
      root: @root

new authpanel root: '.authpanel'
