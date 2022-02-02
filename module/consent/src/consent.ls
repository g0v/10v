_id = (o) -> "#{o.name}@#{o.version or ''}:#{o.path or ''}"
consent = (o = {}) ->
  @mgr = o.manager
  @store = window.localStorage
  @_api-root = opt.api or "/api/consent"
  if @_api-root[* - 1] != \/ => @_api-root += \/
  @

consent.prototype = Object.create(Object.prototype) <<< do
  prompt: (o) ->
    mgr.get o
      .then (bc) -> bc.create!
      .then (bi) -> bi.attach {root: document.body} .then -> bi.interface!
      .then (itf) -> itf.get!
  ensure: (o) ->
    id = "consent/#{_id o}"
    ret = @store.get-item id
    if ret =>
      try
        ret = JSON.parse(ret)
        return Promise.resolve true
      catch e
    ld$.fetch "#{@_api-root}/query", {method: \POST}, {body: {consent_id: id}, type: \json}
      .then ->
        if !it => return lderror.reject 1018
        return true
      .catch ~>
        @prompt o
          .then ->
            if !it => return lderror.reject 1018
            return true
      .catch (e) ->
        return if e.id == 1018 => false else Promise.reject e

if module? => module.exports = consent
else window.consent = consent
