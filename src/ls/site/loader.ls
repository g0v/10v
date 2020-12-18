ldc.register 'loader', <[]>, ->
  ldld = new ldLoader className: 'ldld full', auto-z: true, atomic: false
  return ldld
