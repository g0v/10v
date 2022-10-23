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

ctx = idx: 0, last: 1, cell: {"0": {}, "1": {}}, photos: [], page: 10, photo-size: {}
view.setCtx ctx

window.jsonFlickrApi = (json) ->
  console.log \here, json
  if json.sizes =>
    json.sizes.size.sort (a,b) -> Math.abs(a.width - 1600) - Math.abs(b.width - 1600)
    if size = json.sizes.size.0 =>
      ret = /\/([^_/]+?)_/.exec(size.source)
      if ret and (id = ret.1) =>
        ctx.photo-size[id] = json.sizes
        if ctx.{}script.size =>
          ctx.script.size.parentNode.removeChild ctx.{}script.size
          ctx.script.size = null
        handler {id}
  else
    if json and json.{}photos.photo and Array.isArray(json.photos.photo) =>
      ctx.photos ++= json.photos.photo
      console.log "#{json.photos.photo.length} images fetched. (current total: #{ctx.photos.length})"
      if json.photos.photo.length < cfg.batch-count => ctx.end = true
      handler!
    else
      console.log "fetch terminated."
      ctx.end = true

altsize = ({id}) ->
  # https://www.flickr.com/services/api/misc.urls.html
  #  - h: 1600, k: 2048
  query =
    method: "flickr.photos.getSizes"
    api_key: "48529335b781d54b580fce46e75e126a"
    photo_id: id
    format: "json"
  qs = [[k,v] for k,v of query].map(([k,v]) -> "#k=#v").join("&")
  url = "https://api.flickr.com/services/rest?#qs"
  script = document.createElement \script
  ctx.{}script.size = script
  script.setAttribute(
    \src, url
  )
  document.body.appendChild script

fetch = ->
  query =
    page: ctx.page = ctx.page + 1
    per_page: cfg.batch-count
    method: "flickr.photos.search"
    #user_id: \129321464@N04
    #api_key: "dcd316de73a13e64aab96966bdc48ab8"
    user_id: \129321464@N04
    api_key: "48529335b781d54b580fce46e75e126a"
    format: "json"
  qs = [[k,v] for k,v of query].map(([k,v]) -> "#k=#v").join("&")
  script = document.createElement \script
  script.setAttribute(
    \src,
    "https://api.flickr.com/services/rest?#qs"
  )
  document.body.appendChild script

handler = (o = {}) ->
  if (photo = ctx.photos[ctx.idx]) =>
    {server, id, secret} = photo
    console.log "load #{ctx.idx} / #id ...", (if o.id => "(size updated)" else '')
    if !o.id and !ctx.photo-size[id] =>
      altsize {id}
    else if o.id and (sizes = ctx.photo-size[o.id]) =>
      ctx.last = 1 - ctx.last
      ctx.cell[ctx.last].img = url = sizes.size.0.source
      img = new Image!
      img.onload = ->
        ctx.idx++
        view.render!
        setTimeout handler, cfg.delay
      img.src = url
    else
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


