require! <[fs chokidar i18next i18next-fs-backend i18next-http-middleware js-yaml]>

ret = (opt) ->
  if !opt or (opt.enabled? and !opt.enabled) => return Promise.resolve!

  options = {
    lng: <[zh-TW]>, fallbackLng: \zh-TW, preload: <[zh-TW]>
    ns: 'default', defaultNS: \default, fallbackNS: \default
    initImmediate: false
    backend: loadPath: 'locales/{{lng}}/{{ns}}.yaml'
  } <<< (opt or {})

  return i18next
    .use i18next-fs-backend
    .use i18next-http-middleware.LanguageDetector
    .init options
    .then ~>
      _load = ({file, type}) ~>
        if type != \unlink =>
          try
            ret = js-yaml.load fs.read-file-sync file, \utf8
            i18next.reloadResources(options.lng)
            @log-i18n.info "#file #{if type == \add => '' else \re}loaded."
          catch err
            @log-i18n.error {err}, "locale file #file parse error: #{err.message or 'no message provided'}".red
      watcher = chokidar.watch <[locales]>, do
        persistent: true
        ignored: (f) ~> /\/\./.exec(f)
      watcher
        .on \add, -> _load {file: it, type: \add}
        .on \change, -> _load {file: it, type: \change}
        .on \unlink, -> _load {file: it, type: \unlink}
      return i18next

module.exports = ret

