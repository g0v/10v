# window.onerror is not triggered when the console directly generates an error.
# It can be triggered via wrapping test code with setTimeout - however `evt.error` will be null
# alternative to listener: window.onerror = (msg,fn,lineno,colno,error) -> ...
erratum = (o = {}) ->
  if !window? => console.warn "[@servebase/erratum] no window to listen to error/rejection"
  window.addEventListener \error, (evt) ~> @error-handler(evt)
  window.addEventListener \unhandledrejection, (evt) ~> @rejection-handler(evt)
  if o.handler => @handler = o.handler
  @

erratum.prototype = Object.create(Object.prototype) <<<
  handler: (e) ->
  error-handler: (evt) ->
    if !(lderror.event-handler.error evt) => @handler evt.error
  rejection-handler: (evt) -> 
    if !(lderror.event-handler.rejection evt) => @handler evt.reason
  test: (o = {}) ->
    if o.bare => @_test o
    else ((o) -> setTimeout (~>@_test o), 0) o
  _test: (o) ->
    if o.promise => lderror.reject(1023) else throw lderror 1023

if module? => module.exports = erratum
else window.erratum = erratum
