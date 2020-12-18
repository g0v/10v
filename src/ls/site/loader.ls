lc = {}
ldc.register 'loader', <[]>, ->
  return lc.ldld or lc.ldld = new ldLoader className: 'ldld full', auto-z: true, atomic: false
