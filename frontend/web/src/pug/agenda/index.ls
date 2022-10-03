ldld = new ldloader className: 'ldld full'
ldld.on!
ld$.fetch "/api/agenda", {method: \GET}, {type: \json}
  .then ->
    seg = (list) ->
      ret = []
      part = {list: []}
      for item in list =>
        if !(item.1 or item.2) =>
          part = {name: item.0, list: [], id: "id-" + Math.random!toString(36).substring(2)}
          ret.push part
        else part.list.push item
      return ret
    main = it.0.data
    room = it.1.data
    main = main.filter -> it.filter(->it).length
    room = room.filter -> it.filter(->it).length
    main = seg main
    room = seg room
    list = {main, room}
    view = new ldview do
      root: document.body
      handler:
        index:
          list: ({node}) -> list[node.getAttribute \data-name]
          handler: ({node, data}) ->
            node.innerText = data.name
            node.setAttribute \href, "\##{data.id}"
        session:
          list: ({node}) -> list[node.getAttribute \data-name]
          view:
            handler:
              name: ({node, ctx}) ->
                node.setAttribute \id, ctx.id
                node.innerText = ctx.name
              topic:
                list: ({ctx}) -> ctx.list
                view:
                  text:
                    time: ({ctx}) -> ctx.0
                    type: ({ctx}) -> ctx.1
                    speaker: ({ctx}) -> ctx.2 or '-'
                    title: ({ctx}) -> ctx.3 or '　'
                    desc: ({ctx}) ->
                    slide: ({ctx}) ->
    ldld.off!
