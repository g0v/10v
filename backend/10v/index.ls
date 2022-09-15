require! <[fs path]>
isogit = require "isomorphic-git"
http = require "isomorphic-git/http/node"
(backend) <- (->module.exports = it)  _
{db,config,route:{api,app}} = backend

hmac-digest = (sig, content, key) ->
  try
    v1 = Buffer.from(sig)
    v2 = Buffer.from(
      "sha1=" + crypto.createHmac('sha1', key)
        .update(content)
        .digest('hex')
    )
    if crypto.timingSafeEqual(v1, v2) => return true
  catch e
    return false
  return false

deploy = ({root, url, branch, username, password}) ->
  fs-extra.remove-sync root
  opt = {
    fs, http,
    dir: root
    url: url
    ref: branch or 'master'
    depth: 1
    singleBranch: true
    # pull = fetch + merge, and ask for author name.
    # author: { name: "grantdash" }
    # fastForwardOnly: true
    onAuth: -> {username, password}
  }
  isogit.clone opt

webroot = path.join(process.cwd!, 'frontend/web/static')
backend.route.extapi.post \/deploy, (req, res) ->
  url = req.{}body.{}repository.html_url
  branch = (/^refs\/heads\/(.+)$/.exec(req.body.ref or '') or []).1
  res.send {}
  if !(url and branch) => return
  config.{}webhook.[]list.map (d) ->
    if !hmac-digest(req.headers['x-hub-signature'], req.raw-body, d.secret) => return
    if !d.path => return
    root = path.resolve(path.join(webroot, path.resolve(path.join('/', d.path))))
    console.log "deploy #url to #root ..."
    deploy({root} <<< d{url, branch, username, password})

