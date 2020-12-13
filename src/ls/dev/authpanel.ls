type = \login or \signup
ld$.fetch "#{@api-root!}auth/#type", {method: \POST}, {json: data, type: \text}
  .then ->

authpanel = (opt={}) ->
  @opt = opt
  @

authpanel.prototype = Object.create(Object.prototype) <<< do
  init: ->
    @view = new ldView do
      root: @root
