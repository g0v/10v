(backend) <- (->module.exports = it)  _
{db,config,route:{api,app}} = backend
if config.base != \base => return

require! <[fs path lderror express @servebase/backend/aux]>

demo-api = aux.routecatch express.Router {mergeParams: true}
demo-app = aux.routecatch express.Router {mergeParams: true}
api.use \/demo, demo-api
app.use \/demo, demo-app

fs.readdir-sync __dirname
  .filter -> !/^index\./.exec(it)
  .filter -> !/^\./.exec(it)
  .map -> path.join(__dirname, it)
  .filter -> /\.(ls|js)$/.exec(it) or fs.stat-sync(it).is-directory!
  .map -> require(it) backend, {api: demo-api, app: demo-app}
