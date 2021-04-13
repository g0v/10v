require! <[lderror]>

handler = (err, req, res, next) ->
  # 1. custom error by various package - handle by case and wrapped in lderror
  # 2. custom error from this codebase ( wrapped in lderror ) - pass to frontend with lderror
  # 3. trivial, unskippable error - ignore
  # 4. log all unexpected error.
  try
    if !err => return next!
    # delegate csrf token mismatch to lderror handling
    if err.code == \EBADCSRFTOKEN => err = new lderror(1005)
    if lderror.id(err) =>
      # customized error - pass to frontend for them to handle
      delete err.stack
      # serve a friendly error page if it's not an API
      if !/^\/api/.exec(req.url) =>
        res.set {"Content-Type": "text/html", "X-Accel-Redirect": err.redirect or "/err/490"}
      else delete err.redirect
      # cookie domain: webmasters.stackexchange.com/questions/55790
      #  - no domain: request-host will be used
      #  - with domain: start with a dot. similar to *.some.site
      res.cookie "lderror", JSON.stringify(err), {maxAge: 60000, httpOnly: false, secure: true, sameSite: 'Strict'}
      return res.status 490 .send err
    else if (err instanceof URIError) and "#{err.stack}".startsWith('URIError: Failed to decode param') =>
      # errors to be ignored, due to un-skippable error like body json parsing issue
      return res.status 400 .send!
    # all handled exception should be returned before this line.
  catch e
    req.log.error {err: e}, "exception occurred while handling other exceptions".red
    req.log.error "original exception follows:".red
  req.log.error {err}, "unhandled exception occurred #{if err.message => ': ' + err.message else ''}".red
  res.status 500 .send!

module.exports = handler
