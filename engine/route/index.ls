require! <[fs path lderror ../module/aux]>
(backend) <- (->module.exports = it)  _
{db,config,route:{api,app}} = backend

fs.readdir-sync __dirname
  .filter -> !/index\./.exec(it)
  .map -> path.join(__dirname, it)
  .map -> require(it) backend
