require! <[path express lderror]>
app = express!

signed = (req, res, next) -> if !(req.user and req.user.key) => next new lderror(999)
staff  = -> 
numid  = -> 

app.get \/, (req, res) -> res.send!
app.get \/auth, signed, (req, res) -> res.send!
app.get \/404, signed, (req, res) -> res.status 404 .send!
app.get \/err, (req, res, next) -> next new lderror(999)
app.get \/api/test, (req, res, next) ->
  next {code: \EBADCSRFTOKEN}
  #next new lderror(999)

app.get \/app/test, (req, res, next) ->
  return next {code: \EBADCSRFTOKEN}
  a = null
  a.b = 2
  Promise.resolve!
    .then -> lderror.reject 999
    .catch next

app.get \/badcsrf, (req, res, next) ->
  next {code: \EBADCSRFTOKEN}

#app.use \/, express.static(path.join(__dirname, 'static'))
app.use (req, res, next) -> res.status 404 .send!

app.use (err, req, res, next) ->
  if !err => return next!
  if lderror.id(err) =>
    return res.status (err.code or 500) .send (new lderror(err)).toString({stack: false})
  if err.code == \EBADCSRFTOKEN =>
    res.status 498 .send (new lderror(1005)).toString({stack: false})
  # unexpected errors. log
  # TODO how to proper log?
  console.log err
  res.status 500 .send!


app.listen 3456, -> console.log "listening port 3456 ... "


# 1. 除非自己有需要, 否則 error 一律經由 next(err) 傳遞至 middleware 處理.
# 2. Promise 只要寫 .catch next 即可.
# 3. 回傳 ldError 的情況下, 預設都是提供給 client 的訊息, server 不需顯示細節.
#    - 若有例外, 可以再詳加描述.
# 4. ldError code 必須要是 undefined / null, 或 http code, 方便 error handler 提供 http status
#
# http ( ldError )
# - http code: 視 router ( view or api ), 決定是否要由 nginx 攔截.
#   - nginx 依 http code 給特定 html ( 如, 498 當成 reauth required )
#   - lderror 傳給 client, 由 js 依代碼處理. 
