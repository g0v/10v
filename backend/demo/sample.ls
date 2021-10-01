require! <[fs path lderror backend/aux]>
(backend) <- (->module.exports = it)  _
{db,config,route:{api,app}} = backend

app.get \/demo/, (req, res, next) ->
  db.query "select count(key) as count from users"
    .then (r={}) ->
      count = (r.[]rows.0 or {count: 0}).count
      res.render \/demo/index.pug, {count}

app.get \/demo/i18n, (req, res, next) -> return res.send({locale: req.get("I18n-Locale")})

# plain Error. unrecgonized, thus trigger exception dump. won't crash. send 500 to client
api.get \/demo/error, (req, res, next) -> throw new Error!
app.get \/demo/error, (req, res, next) -> throw new Error!

# plain Error, in next. unrecgonized, thus trigger exception dump. won't crash. send 500 to client
api.get \/demo/error/next, (req, res, next) -> next new Error!
app.get \/demo/error/next, (req, res, next) -> next new Error!

# lderror. processed by error-handler. send 490 with censored lderror content to client. won't crash
api.get \/demo/lderror, (req, res, next) -> next lderror(1023)
app.get \/demo/lderror, (req, res, next) -> next lderror(1023)

# plain Error + lderror, in rejection. catched by route.app wrapped by routecatch. won't crash
app.get \/demo/error/reject,  (req, res, next) -> Promise.reject(new Error!)
app.get \/demo/lderror/reject,  (req, res, next) -> Promise.reject(lderror 1023)
