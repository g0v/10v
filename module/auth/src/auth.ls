lc = {}

# get global object.
# - Sometimes we may access global data before it's available.
#   wrap it with proxise so all callers can wait for init fetch event to finish.
# - put it here so it can't be resolved by user from dev console.
#   user can still modify auth object so we actually can't prevent users from altering this module.
get-global = proxise -> if lc.global => return Promise.resolve lc.global

auth = (opt={}) ->
  @timeout = {loader: 1000, failed: 10000}
  @evt-handler = {}
  @social = {}

  @ui = do
    loader: {on: ->, off: ->, on-later: ->, cancel: ->}
    authpanel: -> new Promise (res, rej) -> # do nothing
    timeout: -> new Promise (res, rej) -> # do nothing
    
  [k for k of @ui].map (k) ~> if opt.{}ui[k] => @ui[k] = opt.ui[k]
  if !lc.api-root =>
    lc.api-root = opt.api or "/api/auth"
    if lc.api-root[* - 1] != \/ => lc.api-root += \/
  @

auth.prototype = Object.create(Object.prototype) <<< do
  on: (n, cb) -> @evt-handler.[][n].push cb
  fire: (n, ...v) -> for cb in (@evt-handler[n] or []) => cb.apply @, v
  inject: -> {}
  api-root: ->
    return lc.api-root
  set-ui: -> @ui <<< (it or {})
  logout: ->
    @ui.loader.on!
    ld$.fetch "#{@api-root!}/logout", {method: \post}, {}
      .then ~> @fetch {renew: true}
      .then ~> @fire \logout
      .then ~> @ui.loader.off!
      .catch ~> @fire \error

  # ensure user is authed. shorthand and for readbility for auth.get({authed:true})
  ensure: (opt = {}) -> @get(opt <<< {authed-only: true})

  # for retrieving global object in local.
  get: (opt = {authed-only: false}) ->
    get-global opt .then (g = {}) ~>
      if !opt.authed-only => return g
      p = (if !g.{}user.key => @ui.authpanel(true, opt) else Promise.resolve(g))
      p.then (g = {}) ->
        if opt.authed-only and !g.{}user.key => return Promise.reject(new ldError(1000))
        return g

  # for retrieving global object from server ( or cookie ). this won't trigger sign up ui.
  fetch: (opt = {renew: true}) ->
    # if d/global response later then 1000ms, popup a loader
    @ui.loader.on-later @timeout.loader
    # if it took too long to respond, just hint user about possibly server issue
    @watchdog = debounce(@timeout.failed, ~>
      @ui.loader.off!
      @ui.timeout!
        .then ~> @ui.loader.on!
        .then -> debounce 10000
        .then ~> @fetch!
    )!

    # if we don't force renew and there is a cache in cookie
    # otherwise we fetch data from server
    ret = if !opt.renew and /global=/.exec(document.cookie) =>
      document.cookie
        .split \;
        .map -> /^global=(.+)/.exec(it.trim!)
        .filter -> it
        .0
    else null

    promise = if ret => Promise.resolve JSON.parse(decodeURIComponent(ret.1))
    else ld$.fetch "#{@api-root!}info", {}, {type: \json}
    promise
      .finally (g) ~>
        @watchdog.cancel!
        @ui.loader.cancel!
        @ui.loader.off!
      .then (g) ~>
        ld$.fetch.{}headers['X-CSRF-Token'] = g.csrfToken
        g.ext = @inject(g) or {}
        get-global.resolve JSON.parse(JSON.stringify(lc.global = g))
        try
          @fire \change, lc.global
        catch e
          # error after data fetched. prompt, but still return global
          @fire \error, e; console.log e
        return lc.global

      .catch (e) ~>
        @fire \server-down, e; console.log e
        # since server is down and we have handled it here,
        # we simply return a promise that won't be resolved
        # to stop further progress of current code.
        new Promise (res, rej) ->

  prompt: (v, opt) ->
    @ui.authpanel(true, opt)
  social: ({name}) ->
    div = null
    @get!
      .then (g = {}) ~>
        if g.{}user.key => return g
        # before social login
        @social.window = window.open '', 'social-login', 'height=640,width=560'
        @social.form = form = ld$.create name: \div
        form.innerHTML = """
        <form target="social-login" action="#{@api-root!}auth/#name/" method="post">
          <input type="hidden" name="_csrf" value="#{g.csrf-token}"/>
        </form>"""
        document.body.appendChild form
        window.social-login = login = proxise(-> ld$.find(div, 'form', 0).submit!)
        login!
      .then (g = {}) -> if !g.{}user.key => Promise.reject new ldError(1000)
      .finally ~> @social.form.parentNode.removeChild @social.form
      .then ~> # after social login
      .then ~> @fire \change
      .catch -> @fire \error, e; return Promise.reject(e)

if window? => window.auth = auth
