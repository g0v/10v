module.exports =
  pkg:
    name: "auth", version: "0.0.1", path: "index.html"
    extend: {name: "@servebase/auth", path: "base.html", dom: \overwrite}
  init: ->
