require! <[fs path lderror ../module/aux]>
(backend) <- (->module.exports = it)  _
{db,config,route:{api,app}} = backend

app.get \/, aux.autocatch (req, res, next) ->
  db.query "select count(key) as count from users"
    .then (r={}) ->
      count = (r.[]rows.0 or {count: 0}).count
      res.render \index.pug, {count}

api.get \/x, (req, res, next) ->
  req.log.info \hi
  return next new lderror(1005)

app.get \/x, (req, res, next) ->
  return next new Error!

app.get \/i18n, (req, res, next) ->
  console.log req.get("I18n-Locale")
  return res.send('ok')


