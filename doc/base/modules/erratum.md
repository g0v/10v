# @servebase/erratum

Global error / rejection handler. Also wrap `lderror` event handler to provide better lderror event handling.


## Usage

    new erratum({ handler: (err) -> ... })


## Note

`window.onerror` is not triggered when the console directly generates an error.

It can be triggered via wrapping test code with setTimeout - however `evt.error` will be null.

Alternative to listener:

    window.onerror = (msg,fn,lineno,colno,error) -> ...


## Handler Suggestion

Expired session removal may cause an active session expire, which leads to csrftoken mismatch (1005). We should prompt and ask user to re-auth if necessary:

    if lderror.id(e) == 1005 => auth.fetch {renew: true} # or any other reload / reauth actions
