require! <[lderror @plotdb/suuid ./aux]>

(backend) <- (->module.exports = it)  _
{config} = backend

handler = (err, req, res, next) ->
  # 1. custom error by various package - handle by case and wrapped in lderror
  # 2. custom error from this codebase ( wrapped in lderror ) - pass to frontend with lderror
  # 3. trivial, unskippable error - ignore
  # 4. log all unexpected error.
  try
    if !err => return next!
    # SESSION corrupted, usually caused by a duplicated session id
    if err.code == \SESSIONCORRUPTED =>
      aux.clear-cookie req, res
      err = lderror 1029
      # SESSIONCORRUPTED is a rare and strange error.
      # we should log it until we have confidence that this is solved correctly.
      err.log = true
    # delegate csrf token mismatch to lderror handling
    if err.code == \EBADCSRFTOKEN => err = lderror 1005
    err.uuid = suuid!
    if backend.config.log.all-error =>
      backend.log-error.debug(
        {err: err <<< {_detail: user: (req.user or {}).key or 0, ip: aux.ip(req), url: req.originalUrl}}
        "error logged in error handler (lderror id #{lderror.id(err)})"
      )
    if lderror.id(err) =>
      # customized error - pass to frontend for them to handle
      # to log customized error, set `log` to true
      if err.log =>
        req.log.error {err}, """
        exception logged [URL: #{req.originalUrl}] #{if err.message => ': ' + err.message else ''} #{err.uuid}
        """.red
      delete err.stack
      # serve a friendly error page if it's not an API and prevent looping error
      if !/^\/api/.exec(req.originalUrl) and !/^\/err\/490/.exec(req.originalUrl) =>
        # cookie domain: webmasters.stackexchange.com/questions/55790
        #  - no domain: request-host will be used
        #  - with domain: start with a dot. similar to *.some.site
        ## with http header - rely on browsers to redirect. cookie ignored.
        # if err.redirect => return res.redirect 302, err.redirect
        ## with reversed proxy - will need a reversed proxy to take affect
        res.set {"Content-Type": "text/html", "X-Accel-Redirect": err.redirect or \/err/490}
      else delete err.redirect
      res.cookie \lderror, JSON.stringify(err), {maxAge: 60000, httpOnly: false, secure: true, sameSite: \Strict}
      return res.status 490 .send err
    else if (err instanceof URIError) and "#{err.stack}".startsWith('URIError: Failed to decode param') =>
      # errors to be ignored, due to un-skippable error like body json parsing issue
      return res.status 400 .send err
    # all handled exception should be returned before this line.
  catch e
    req.log.error {err: e}, "exception occurred while handling other exceptions".red
    req.log.error "original exception follows:".red
  req.log.error {err}, "unhandled exception occurred [URL: #{req.originalUrl}] #{if err.message => ': ' + err.message else ''} #{err.uuid}".red
  res.status 500 .send err{id, name, uuid}

return handler
