# window.onerror is not triggered when the console directly generates an error.
# It can be triggered via wrapping test code with setTimeout - however `evt.error` will be null
# alternative to listener: window.onerror = (msg,fn,lineno,colno,error) -> ...
if window? =>
  window.addEventListener \error, (evt) -> handler(evt.error) # the error object
  window.addEventListener \unhandledrejection, (evt) -> handler(evt.reason) # the error object
  handler = (e) ->
    # expired session removal may cause an active session expire, which leads to csrftoken mismatch (1005)
    # we should prompt and ask user to re-auth if necessary.
    # if lderror.id(e) == 1005 => auth.fetch {renew: true} # or any other reload / reauth actions

erratum =
  handler: (e) -> console.log e
  test: (promise = false) -> if promise => lderror.reject(1023) else throw lderror 1023

if module? => module.exports = erratum
else window.erratum = erratum
