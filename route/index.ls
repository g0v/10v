require! <[lderror]>

(backend) <- (->module.exports = it)  _
{api,app} = backend.route

api.get \/x, (req, res, next) ->
  return next new lderror(1005)
app.get \/x, (req, res, next) ->
  return next new Error!
  return next new lderror(1006)


