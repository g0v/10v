ldc.register \error, <[ldcvmgr]>, ({ldcvmgr}) ->
  ret = (opt = {}) -> (e) ->
    code = if e => +(code or e.id or e.code) else null
    if code and !isNaN(code) =>
      if (code in (opt.ignore or [999])) => return
      if (opt.custom and opt.custom[code]) => return opt.custom[code] e
      if ret.default[code] => return ret.default[code] e
    ldcvmgr.toggle('error'); console.log e
  return ret
