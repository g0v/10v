# @plotdb/datahub

Access scoped data via piped operational transformation.


## Installation

    npm install @plotdb/datahub


## Usage

after including `datahub.bundle.min.js`:

    # this is our data source.
    src = new datahub.src do
      ops-out: (ops) -> # update data src by incoming ops
      get: -> # return complete data. raw data is returned, users should make their own copy if to use.

    # this is our view controller
    des = new datahub.des do
      ops-in (ops): -> # update ui / widget

    # data through pipe, scoped under "my-view"
    view-hub = new datahub {scope: ["my-view"]}
    # ... from srchub / through view-hub / to deshub
    src.pipe view-hub .pipe des

    # notify all users (deshub) about data changed
    src.ops-in [... /* ops */ ...]

    # update data source (srchub)
    des.ops-out [... /* ops */ ...]


## Memhub, Userhub

Datahub also provides auxiliary hubs for quick testing and evaluation.

 - `memhub` - data source hub. store data in memory.
 - `usrhub` - simple destination hub. constructor options:
   - render(ops): called when there are updates from data source.

A sample usage of `memhub` and `usrhub` as follows:

    mhub = new datahub.mem!
    uhub = new datahub.usr {render: -> console.log('ok'); }
    mhub.pipe uhub
    document.querySelector('textarea').addEventListener \input, ->
      uhub.ops-out [
        { p: ['str',0], si: @value[@value.length - 1] }
      ]


## Wrap constructor

Instead of `userhub`, you can use `datahub.as` to wrap your constructor to support hub mechanism directly with your own class:

    someClass = datahub.as (opt = {}) -> @
    someClass.prototype <<< { ... }


You can pipe source hub to the constructed hub object:

    hub = new myHub();
    src.pipe(hub);

Wrapped hub only provides following methods:

 - `state()`
 - `on(name, cb)`
 - `fire(name, ...args)`
 - `ops-out(ops)`
 - `get()`

And following member variables to use:

 - `hub`: the actual hub object used to accept source data.
 - `data`: data object from source.

As a wrapped hub user, you should do the following:

 - implement `ops-in` function to render / update your application. note:
   - ops has been applied to `data` member before your `ops-in` is called.
   - however any data kept locally should still be updated based on ops.
 - watch `open` / `close` event or use `state` method to track data stream status.

Following is a sample wrapped hub:

    form = datahub.as (o = {}) ->
      # udate based on a input element change
      o.node.addEventListener \input, (evt = {}) ~> @update evt.target.value 
      # keep a local _data to diff original data for ops
      @on \open, ~> @_data = JSON.parse(JSON.stringify(@data)); @render!
      @ <<< o{name}
    form.prototype <<<
      # re-render on every ops-in
      ops-in: (ops) ->
        json0.type.apply @_data, ops
        @render!
      render: -> console.log @_data
      update: (v) ->
        if @state! == \closed => return
        @_data[@name] = v
        @ops-out json0.diff(@data, @_data)

For a live, working example, please check `web/src/pug/as.pug`.


## Sharehub

Sharehub provides a simple interface and implementation reference for adopting ShareDB with data hub to keep edited data in database:

    uhub = new datahub.usr!
    shub = new sharehub({
      id: 'my-sharedb-doc-id'
      create: -> {} # init obj if doc not found.
    })
    shub.init!
      .then -> shub.pipe uhub

Sharehub is in a standalone JS file. include `sharehub.js` / `sharehub.min.js` / `sharehub.bundle.min.js` if you want to use it.

Constructor options:

 - `id`: id of the sharedb doc to connect.  optional
 - `collection`: collection of the sharedb collection to connect.  optional, default `doc` if omitted.
 - `initConnect`: default true. if true, auto connect to sharedb if `id` is given.
 - `create()`: empty object creator function. should return an object for initial value.
   - when omitted, a creator function returing an empty object is used.
 - `watch(ops, src)`: watcher function. optional
 - `ews`: `@plotdb/ews` instance to use. required.


APIs:

 - `connect(opt)`: connect to sharedb. return Promise, resolved when connected.
   - `opt` is either:
     - omitted (undefined): `connect()` will use stored `id` and `collection` to (re)connect.
     - a string for id of the sharedb doc to connect. In this case, `collection` will be set to `doc`.
     - an object with fields:
       - `id`: sharedb id. use stored `id` if omitted. this id will be stored for future use. (e.g., auto-reconnect)
       - `collection`: `doc` if omitted.
       - `force`: default true. when true, force to reconnect even if `id` / `collection` is the same.
          - when `opt` is a string or omitted, `force` will also be true.
   - if `id` / `collection` are provided in `opt`, they will be stored internal for future use.
 - `disconnect()`: disconnect current doc from sharedb. return Promise, resolved when disconnected.
   - this will be automatically called when internal `sdb-client` is closed.
 - `config(opt)`: update configuration. opt has following fields:
   - `id`: sharedb id.
   - `collection`: `doc` if omitted.

Additionally, `sharehub` fire following events

 - `open`: fired when a connect is successfully done.
 - `close`: fired when `disconnect` is called.
 - `error`: fired when internal sdb-client object fires error events.


## Scoping

Passing `scope` option ( an array of strings / numbers ) into datahub constructor to filter incoming op and data based on the specified scope. For example, assume our data source keeps data in `datasrc` variable, then following hub:

    new hub({scope: ["users", "deleted"]})

will only pass ops that affect object in `datasrc.users.deleted`. Furthermore, data get from this hub will only be the subtree in `datasrc.users.deleted`.

You can pipe data source to a hub that is scoped, and pipe this scoped hub to the destination hubs that use the same subtree.


## Object API

 - `ops-in(ops)`: send ops from this hub to subscribers. ( inward / down to client )
 - `ops-out(ops)`: send ops from this hub to src. ( outward / up to server ) 
 - `as-src(o)`: set this hub as a source hub (provide data and handle outward request).
   - fields of `o`:
     - `get()`: a function returning a full snapshot of data.
     - `ops-out(ops)`: a function to handle outward ops.
   - a source hub is responsible to call `ops-in(ops)` when there are data changes from source (inward ops)
 - `as-des(o)`: set this hub as destination hub ( handle inward events by such as rendering )
   - fields of `o`:
     - `ops-in(ops)`: a function to handle inward ops.
   - a destination hub is responsible to call `ops-out(ops)`  when there are data changes to source (outward ops)
 - `get()`: return a snapshot of source data
 - `pipe(hub)`: pipe down events to `hub`.
 - `addon(ops)`: prepend `ops` to create node for ops accessing non-existed path
 - `cut(hub)`: remove `hub` from current object's subscriber list.
 - `state(s)`: change state. s can be either `opened` or `closed`.
   - state propagates automatically. Should only be used by source hub.
   - des hub should always call `get` to retrieve a new object and reinitialize if needed after each `open` event.


## Class API

 - `as(constructor)`: wrap `constructor` as a hub that can be piped.
   - constructor options depends on how `constructor` is implemented, with following additional fields:
     - `scope`: the `scope` used by hub, as defined above.


## License

MIT
