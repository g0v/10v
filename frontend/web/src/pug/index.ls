<-(->it.apply {}) _

watch = ~> @view.render!
connect = new connector do
  init: ->
    @hub = new sharehub do
      ews: @ws, init-connect: false
      watch: watch
      create: -> {}
  reconnect: ->
    @hub.connect {id: \landing}
  ldcv: (v) -> ldcvmgr.toggle {ns: \local, name: \offline-retry}, v, {ws: @ws}

<~ connect.init!then _
emojis = [
  {name: "10", key: "10"},
  {name: "food", key: "food"},
  {name: "g0v", key: "g0v"},
  {name: "jothon", key: "jothon"},
  {name: "love", key: "love"},
  {name: "party", key: "party"}
]

@view = view = new ldview do
  root: document.body
  handler:
    emoji:
      list: -> emojis
      key: -> it.key
      view:
        action: click: "@": ({ctx}) ->
          des = JSON.parse(JSON.stringify(src = connect.hub.get!))
          des.{}data{}[ctx.key].count = (des.{}data{}[ctx.key].count or 0) + 1
          connect.hub.ops-out json0.diff(src, des)
          view.render!
        text: count: ({ctx}) -> (((connect.hub.get! or {}).data or {})[ctx.key] or {}).count or 0
        handler: icon: ({node, ctx}) -> node.style.backgroundImage = "url(/assets/img/emoji/#{ctx.key}.gif)"
    "tip-root": ({node}) -> node.classList.toggle \tip-on, true
