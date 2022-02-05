# window.onerror is not triggered when the console directly generates an error.
# It can be triggered via wrapping test code with setTimeout - however `evt.error` will be null
# alternative to listener: window.onerror = (msg,fn,lineno,colno,error) -> ...
if window? =>
  window.addEventListener \error, (evt) -> evt.error # the error object
  window.addEventListener \unhandledrejection, (evt) -> evt.reason # the error object

erratum =
  handler: (e) -> console.log e
  test: (promise = false) -> if promise => lderror.reject(1023) else throw lderror 1023

if module? => module.exports = erratum
else window.erratum = erratum
