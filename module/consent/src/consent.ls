main = ->
  @

main.prototype = Object.create(Object.prototype) <<< {}



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


  consent-time: {}
  consent: (opt = {}) ->
    type = opt.type or \tos
    cfg = ldsite.{}consent[type]
    cover = if cfg => cfg.cover or \consent else ''
    Promise.resolve!
      .then ->
        if !cfg => return
        auth.fetch!
          .then (g) ->
            if !opt.force and opt.timing and !(opt.timing in cfg.timing) => return
            time = g.user.{}config.{}consent[type] or auth.consent-time[type] or 0
            # > 10000 => sometimes we might have signin(consent) -> action(consent again) flow
            # so we expect two consent to be shown if they are not too close to each other.
            # additionally, we use auth.consent-time because
            # g.user.config.consent might be undefined due to the account is just created
            p = if !opt.bypass and
            ((opt.force and (Date.now! - time) > 10000) or !time or time < (cfg.time or 0)) =>
              if cfg.prompt => cfg.prompt!
              else
                ldcvmgr.getdom cover
                  .then (dom) ->
                    # TODO we should also make this configurable
                    if cfg.type == \link =>
                      iframe = ld$.find(dom, 'iframe', 0)
                      iframe.classList.remove \d-none
                      iframe.setAttribute \src, cfg.url
                    else
                      object = ld$.find(dom, 'object', 0)
                      object.classList.remove \d-none
                      if object => that.setAttribute(\data, cfg.url)
                      if ld$.find(dom, 'embed', 0) => that.setAttribute(\src, cfg.url)

                    ldcvmgr.get cover
            else Promise.resolve true

            p = p.then -> if !it => return Promise.reject new ldError(1018)
            # if user exists and consent time is empty, we should update the consent time
            # TODO: if consent is prompted before user sign in/up ?
            if g.user.key and !g.user.{}config.{}consent[type] =>
              p
                .then ->
                  auth.consent-time[type] = Date.now!
                  json = type: \consent, name: [type]
                  ld$.fetch("#{auth.api}/me/config", {method: \POST}, {json, type: \json})
                    .catch(->console.log ">", it) # user account not available yet. silent fail
                .then (ret = {}) ~> g.user.{}config <<< ret
            else p


window.consent = main
