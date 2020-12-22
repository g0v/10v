lc = {}

lc.z = new zmgr init: 1000
ldCover.set-zmgr lc.z
ldLoader.set-zmgr lc.z

ldc.register 'authpanel', <[auth]>, ({auth}) ->
  if lc.authpanel => return that
  lc.authpanel = ap = new authpanel do
    root: '.authpanel'
    auth: auth
  cover = ld$.parent lc.authpanel.root, '.ldcv'
  if cover => ldcv = new ldCover root: cover
  auth.set-ui do
    authpanel: (v,opt) ->
      ap.switch opt.tab
      if ldcv? => ldcv.get v
  lc.auth.on \change, -> ldcv.set!
  return ap

ldc.register 'auth', <[ldcvmgr]>, ({ldcvmgr}) ->
  if lc.auth => return that
  lc.auth = new auth do
    ui: timeout: -> ldcvmgr.toggle('timeout')
  lc.auth.on \error, -> ldcvmgr.toggle('error')
  lc.auth.on \logout, -> ldcvmgr.toggle('logout')
  lc.auth.fetch!
  return lc.auth

ldc.register 'ldcvmgr', <[]>, ->
  return (lc.ldcvmgr or lc.ldcvmgr = new ldcvmgr!)

ldc.register 'loader', <[]>, ->
  return (lc.ldld or lc.ldld = new ldLoader className: 'ldld full', auto-z: true, atomic: false)

ldc.register \notify, <[]>, -> return (lc.notify or lc.notify = new ldnotify!)

ldc.register \error, <[ldcvmgr]>, ({ldcvmgr})->
  ret = (opt = {}) -> (e) ->
    console.log e
    code = if e => +(code or e.id or e.code) else null
    if code and !isNaN(code) =>
      if (code in (opt.ignore or [999])) => return
      if (opt.custom and opt.custom[code]) => return opt.custom[code] e
      if ret.{}default[code] => return ret.default[code] e
    ldcvmgr.toggle('error'); console.log e
  return ret
