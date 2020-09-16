require! <[lderror]>

(backend) <- (->module.exports = it)  _
db = backend.db
{api, app} = backend.route

autocatch = (handler) -> (req, res, next) -> handler req, res, next .catch -> next it

app.get \/, autocatch (req, res, next) ->
  db.query "select count(key) as count from prj"
    .then (r={}) ->
      count = (r.[]rows.0 or {count: 0}).count
      res.render \index.pug, {count}

api.get \/x, (req, res, next) ->
  req.log.info \hi
  return next new lderror(1005)
app.get \/x, (req, res, next) ->
  return next new Error!


