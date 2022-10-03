require! <[fs fs-extra path crypto request]>
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
    ref: branch or 'gh-pages'
    depth: 1
    singleBranch: true
    # pull = fetch + merge, and ask for author name.
    # author: { name: "grantdash" }
    # fastForwardOnly: true
    onAuth: -> {username, password}
  }
  isogit.clone opt

reporoot = path.join(process.cwd!, 'frontend/web/repo')
backend.route.extapi.post \/deploy, (req, res) ->
  url = req.{}body.{}repository.html_url
  branch = (/^refs\/heads\/(.+)$/.exec(req.body.ref or '') or []).1
  res.send {}
  if !(url and branch) => return
  config.{}webhook.[]list.map (d) ->
    if !hmac-digest(req.headers['x-hub-signature'], req.raw-body, d.secret) => return
    if !d.path => return
    root = path.resolve(path.join(reporoot, path.resolve(path.join('/', d.path))))
    console.log "[deploy] #url: fetch to #root ..."
    deploy({root} <<< d{url, branch, username, password})
      .then -> console.log "[deploy] #url: done." 

cache = {}
api.get \/agenda, (req, res, next) ->
  if cache.data and cache.timestamp and cache.timestamp >= Date.now! - (10 * 60 * 60 * 1000) =>
    return res.send cache.data
  key = backend.config.gcs.apikey
  url = "https://content-sheets.googleapis.com/v4/spreadsheets/1pqre8p5MwXv690aV9ML71XigY2XegA4QH0Qko9HsH7c?key=#key&includeGridData=true&ranges=#{encodeURIComponent('主舞台-短講&表演!A1:K100')}&ranges=#{encodeURIComponent('R107&108-工作坊!A1:K100')}"
  Promise.resolve!
    .then ->
      new Promise (response, rej) ->
        (e, r, b) <- request url, {method: "GET"}, _
        if e => return rej e
        data = JSON.parse(b)
        #return response(data.sheets.map -> it.data.0.rowData)
        data = data.sheets.map -> it{data, properties}
        data.map ->
          it.data = it.data.0.rowData.map (r) -> r.values.map(-> it.formattedValue).map(->if it? => it else '')
        cache.data = data
        cache.timestamp = Date.now!
        return response data
    .then -> res.send it
