ldc.register \corecfg, <[]>, ->
  manager: new block.manager registry: ({ns, name, version, path, type}) ->
    # only customized core will show following registry detail
    console.log ns, name, version, path, type
    path = path or if type == \block => \index.html
    else if type => "index.min.#type" else 'index.min.js'
    if ns == \local =>
      if name in <[error cover]> => return "/modules/#name/#{path or 'index.html'}"
      return "/modules/block/#name/#{path or 'index.html'}"
    "/assets/lib/#{name}/#{version or 'main'}/#{path}"
