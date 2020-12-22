lc = {}

ldc.register 'auth', <[ldcvmgr]>, ({ldcvmgr}) ->
  if lc.auth => return that
  lc.auth = new auth do
    ui:
      timeout: -> ldcvmgr.toggle('timeout')
      authpanel: -> ldcvmgr.get('authpanel')
  lc.auth.on \error, -> ldcvmgr.toggle('error')
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
