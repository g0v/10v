(->
  ldui.Folder = (opt) ->
    root = opt.root
    @root = root = if typeof(root) == \string => document.querySelector(root) else if root => root else null
    console.log root
    toggler = root.querySelector '.folder-toggle'
    @menu = root.querySelector '.folder-menu'
    toggler.addEventListener \click, ~> @toggle!
    return @
  ldui.Folder.prototype = Object.create(Object.prototype) <<< do
    fit: ->
      @toggle @root.classList.contains(\show), true

    toggle: (v, force) ->
      ison = @root.classList.contains \show
      if (v = if v? => v else !ison) == ison and !force => return
      # `ch` - current height
      ch = getComputedStyle(@menu).height or 0
      # 'sh' - get fit-content-height ( scrollHeight) by clear height
      @menu.style.height = ""
      @menu.offsetHeight # force relayout
      sh = @menu.scrollHeight
      # restore height to current height
      @menu.style.height = ch
      @menu.offsetHeight # force relayout
      # ... and transition to destination value.
      @menu.style.height = "#{if !v => 0 else sh}px"
      @root.classList.toggle \show, v
      return v
)!
