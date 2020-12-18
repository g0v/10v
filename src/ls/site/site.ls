lc = {}

ldc.register 'ldcvmgr', <[]>, ->
  return (lc.ldcvmgr or lc.ldcvmgr = new ldcvmgr!)

ldc.register 'loader', <[]>, ->
  return (lc.ldld or lc.ldld = new ldLoader className: 'ldld full', auto-z: true, atomic: false)

ldc.register \notify, <[]>, -> return (lc.notify or lc.notify = new ldnotify!)
