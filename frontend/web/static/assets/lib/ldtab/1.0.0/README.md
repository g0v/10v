# ldtab

simple tab widget.

    div(ldtab-group="main",type="tab")
      div(ldtab="tab1",default) tab1
      div(ldtab="tab2") tab2
    div(ldtab-group="main", type="panel")
      div(ldtab="tab1",default) panel1
      div(ldtab="tab2") panel2


## Usage

include required js and css file, then:

    fd = new ldtab({ ... });

Available options:

 - `root`: root element. ldtab will only handles events / elements under this element.
 - `autoInit`: automatically adding all `ldtab` elements. default true.
   - you will have to add manually when you set `autoInit` to false.
 - `tab`, `panel`: animation options for `tab` and `panel`, both includes following configs:
   - className: default class name. default `ldtab` for tab, `ldtab-panel` for panel.
   - classIn: class name for transition in. default `ldtab-in` for tab, `ldtab-panel-in` for panel.
   - classOut: class name for transition out. default `ldtab-out` for tab, `ldtab-panel-out` for panel.
   - delay: delay ( in ms ) before deactivating tab / panel. default 350
   - deactivate({node}): function called when tab / panel is deactivated. default null.
   - activate({node}): function called when tab / panel is activated. default null.

## Activate / Deactivate Events

With `activate` and `deactivate` callback, you can customize how panel / tab behave when their state changes. However, this means that the default dynamics ( involving `classIn` and `classOut` ) will not work anymore.

Additionally, you need to always toggle `active` class of panel / tab element to provide hints about the state of these elements to ldtab:

    new ldtab
      tab:
        activate: ({node}) -> node.classList.add \active, \d-block
        deactivate: ({node}) -> node.classList.remove \active, \d-block



## License

MIT
