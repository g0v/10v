require! <[fs fs-extra path pug @plotdb/srcbuild]>
pugext = require "@plotdb/srcbuild/dist/ext/pug"
reload = require("require-reload")(require)
fsp = fs.promises

pug-view-engine = (options) ->
  extapi = (new pugext {logger: options.logger, i18n: options.i18n}).get-extapi!
  logger = options.logger
  # pugcache[file] = cache information for `file`. each info contains
  #  - `js` - module ( in js ) loaded from precompiled js files. null if precompiled js is not available.
  #  - `buf` - source from pug file. will only be filled if precompiled js is not found in the first rendering.
  #  - `mtime` - modifiedtime for this info ( depends on source of `js` or `buf` )
  pugcache = {}
  log = (f, opt, t, type, cache) ->
    logger.debug "#{f.replace(opt.basedir,'')} served in #{t}ms (#type#{if cache =>' cached' else ''})"

  return (f, opt, cb) ->
    lc = {is-cached: false}
    if opt.settings.env == \development => lc.dev = true
    # force cache to true since we do invalidate cache. still keep opt.settings for reference.
    lc.use-cache = true or opt.settings['view cache']
    intl = if opt.i18n => path.join("intl", opt._locals.language) else ''
    {viewdir, basedir} = opt
    pc = path.join(viewdir, intl, f.replace(basedir, '').replace(/\.pug$/, '.js'))
    start-time = Date.now!
    # try if precompiled pug js file available
    try
      # ( `+` converts mtime to timestamp )
      mtime = +fs.stat-sync(pc).mtime
      # true if js is not reloaded, instead loaded directly from pugcache
      # reload pug from file to cache if:
      #  - cache is explicitly disabled ( !lc.use-cache )
      #  - not cached yet before ( !pugcache[pc] )
      #  - cache is older than file ( mtime - pugcache[pc].mtime )
      if !lc.use-cache or !pugcache[pc] or (mtime - pugcache[pc].mtime) > 0 =>
        ret = pugcache[pc] = {js: reload(pc), mtime}
      else 
        lc.is-cached = true
        ret = pugcache[pc]
      # js not available: no precompiled js. we have to render directly from source pug file.
      # cache with js - it's from pug cache. just escape to catch block
      if !ret.js => throw new Error('')
      ret = ret.js(opt)
      if lc.dev => log f, opt, (Date.now! - start-time), \precompiled, lc.is-cached
      cb null, ret
    # precompiled pug js not available. compile from pug directly instead.
    catch e
      Promise.resolve!
        .then ->
          lc.mtime = +fs.stat-sync(f).mtime
          # see comment above for explanation
          if !lc.use-cache or !pugcache[f] or (lc.mtime - pugcache[f].mtime > 0) =>
            fsp.read-file f .then (buf) -> pugcache[f] = {buf}
          else Promise.resolve pugcache[f]
        .then (obj) ->
          # only if mtime is set ( not fresh ) and we explicitly ask for want cache, will cache be true.
          if !(lc.is-cached = (obj.mtime? and lc.use-cache)) => obj.mtime = lc.mtime
          ret = pug.compileClient(obj.buf, {} <<< opt <<< {filename: f, basedir} <<< extapi)
          ret = """ (function() { #ret; module.exports = template; })() """
          fs-extra.ensure-dir path.dirname(pc)
            .then -> fsp.write-file pc, ret
        .then -> pugcache{}[pc] <<< {js: reload(pc), mtime: lc.mtime}
        .then ->
          ret = pugcache[pc].js(opt)
          if lc.dev => log f, opt, (Date.now! - start-time), 'from pug', lc.is-cached
          cb null, ret
        .catch (err) ->
          logger.error {err}, "#{f.replace(opt.basedir, '')} view rendering failed."
          cb err, null

module.exports = pug-view-engine
