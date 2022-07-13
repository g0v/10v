ldc.register \corecfg, <[]>, -> ->
  # corecfg function will be run in `core` context.
  manager: new block.manager registry: ({ns, name, version, path, type}) ~>
    # access @global.version in core context
    console.log @global.version
    # only customized core will show following registry detail
    console.log ns, name, version, path, type
    path = path or if type == \block => \index.html
    else if type => "index.min.#type" else 'index.min.js'
    path = "#{path}?dec=#{@global.version or ''}"
    if ns == \local =>
      if name in <[error cover]> => return "/modules/#name/#path"
      return "/modules/block/#name/#path"
    "/assets/lib/#{name}/#{version or 'main'}/#path"
