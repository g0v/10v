require! <[lderror]>

(backend) <- (->module.exports = it)  _
{api, app, db} = backend.route

app.get \/, (req, res, next) ->
  res.render \index.pug

api.get \/x, (req, res, next) ->
  return next new lderror(1005)
app.get \/x, (req, res, next) ->
  return next new Error!
  return next new lderror(1006)


