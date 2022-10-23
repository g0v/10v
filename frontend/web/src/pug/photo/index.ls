cfg =
  batch-count: 100
  delay: 5000

view = new ldview do
  init-render: false
  root: document.body
  ctx: {}
  handler:
    wall: ({node, ctx}) ->
      name = +node.getAttribute(\data-name)
      node.classList.toggle \active, name == ctx.last
      if ctx.cell[name].img => node.style.backgroundImage = "url(#{ctx.cell[name].img})"

ctx = idx: 0, last: 1, cell: {"0": {}, "1": {}}, photos: [], page: 0
view.setCtx ctx

window.jsonFlickrApi = (json) ->
  if json and json.{}photos.photo and Array.isArray(json.photos.photo) =>
    ctx.photos ++= json.photos.photo
    console.log "#{json.photos.photo.length} images fetched. (current total: #{ctx.photos.length})"
    if json.photos.photo.length < cfg.batch-count => ctx.end = true
    handler!
  else
    console.log "fetch terminated."
    ctx.end = true

fetch = ->
  query =
    page: ctx.page = ctx.page + 1
    per_page: cfg.batch-count
    user_id: \129321464@N04
    method: "flickr.photos.search"
    api_key: "dcd316de73a13e64aab96966bdc48ab8"
    format: "json"
  qs = [[k,v] for k,v of query].map(([k,v]) -> "#k=#v").join("&")
  script = document.createElement \script
  script.setAttribute(
    \src,
    "https://api.flickr.com/services/rest?#qs"
  )
  document.body.appendChild script

handler = ->
  if (photo = ctx.photos[ctx.idx]) =>
    console.log "load #{ctx.idx} ..."
    {server, id, secret} = photo
    ctx.last = 1 - ctx.last
    ctx.cell[ctx.last].img = url = "https://live.staticflickr.com/#server/#{id}_#{secret}_b.jpg"
    img = new Image!
    img.onload = ->
      ctx.idx++
      view.render!
      setTimeout handler, cfg.delay
    img.src = url
  else if !ctx.end => fetch!
  else
    ctx.idx = 0
    setTimeout handler, cfg.delay

handler!
# lightbox url example
# https://flickr.com/photos/tkirby/52127164952/in/photostream/lightbox/


