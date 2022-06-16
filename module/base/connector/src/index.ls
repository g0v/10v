connector = (opt = {}) ->
  @ <<< _ws: null, _running: false, _tag: "[@servebase/connector]"
  @_init = opt.init
  @_ldcv = opt.ldcv or (->)
  @_reconnect = opt.reconnect
  @_path = opt.path or \/ws
  @

connector.prototype = Object.create(Object.prototype) <<<
  open: ->
    console.log "#{@_tag} ws reconnect ..."
    @_ws.connect!
      .then ~> console.log "#{@_tag} object reconnect ..."
      .then ~> if @_reconnect => @_reconnect!
      .then ~> console.log "#{@_tag} connected."
  reopen: ->
    if @_running => return
    @_running = true
    if @_ldcv.toggle => @_ldcv.toggle(true) else @_ldcv(true)
    debounce 1000
      .then ~> @open!
      .then -> debounce 350
      .then ~> if @_ldcv.toggle => @_ldcv.toggle(false) else @_ldcv(false)
      .then ~> @_running = false
  init: ->
    @_ws = new ews {path: @_path}
    @_ws.on \close, ~> @reopen!
    if @_init => @_init!
    @open!


if module? => module.connector = connector
else if window? => window.connector = connector
