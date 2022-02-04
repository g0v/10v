_id = (o) -> "#{o.name}@#{o.version or ''}:#{o.path or ''}"
consent = (o = {}) ->
  @mgr = o.manager
  @store = window.localStorage
  @_api-root = o.api or "/api/consent"
  @global = (o.global or {}){user}
  @userkey = (@global.{}user.key or 0)
  @_api-root = @_api-root.replace /\/$/,''
  @

consent.prototype = Object.create(Object.prototype) <<< do
  _keep: (o, remote = true) ->
    id = "module/consent/#{@userkey}/#{_id o}"
    @store.set-item id, JSON.stringify({time:Date.now!, user: @global.{}user.key or 0})
    if remote => ld$.fetch "#{@_api-root}", {method: \POST}, {body: {consent_id: id}}
  prompt: (o, ...args) ->
    @mgr.get o
      .then (bc) -> bc.create!
      .then (bi) -> bi.attach {root: document.body} .then -> bi.interface!
      .then (itf) -> itf.get.apply itf, args
      .then (ret) ~> if !ret => return Promise.reject lderror(1018) else @_keep o
  ensure: (o, ...args) ->
    id = "module/consent/#{@userkey}/#{_id o}"
    ret = @store.get-item id
    if ret =>
      try
        ret = JSON.parse(ret)
        return Promise.resolve true
      catch e
    ld$.fetch "#{@_api-root}", {method: \POST}, {body: {consent_id: id, check: true}, type: \json}
      .then ~>
        if !it => return lderror.reject 1018
        @_keep o, false
        return true
      .catch ~> @prompt.apply @, ([o] ++ args)

if module? => module.exports = consent
else window.consent = consent
