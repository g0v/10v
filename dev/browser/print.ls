
api.post \/print, throttle.count.user, grecaptcha, (req, res) ->
  lc = {}
  printer.print {html: req.body.html}
    .then -> res.send it
    .catch aux.error-handler res

