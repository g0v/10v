
# cookie consent
cookie-consent = do
  dom: ld$.find document, '[ld-scope=cookie-consent]', 0
  val: util.cookie(\consent.cookie)
  clear: -> if @dom => ld$.remove(@dom); @dom = null
  check: ->
    ({user}) <~ auth.get!then _
    if user.{}config.{}consent.cookie and @dom => return @clear!
    if !(@val = util.cookie(\consent.cookie)) => return
    if ((user.{}config.{}consent.cookie) or !user.key) => return
    ld$.fetch("#{auth.api}/me/config", {method: \POST}, {json: {type: \consent, name: <[cookie]>}})
      .then (ret = {}) ~>
        user.{}config <<< ret
        util.cookie(
          \consent.cookie
          (ret.{}config.{}consent.cookie or Date.now!)
          new Date(Date.now() + 86400000 * 365 * 100).toGMTString()
        )
      .catch(->)
  init: ->
    if !@val and @dom => @dom.classList.remove \d-none else return
    <~ ld$.find(@dom, '[ld=ok]', 0).addEventListener \click, _
    @clear!
    @check!
cookie-consent.init!

