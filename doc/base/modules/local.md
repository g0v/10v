# local namespace with @servebase/core

When using `@servebase/core`, a special namespace `local` is used and thus should be preserved. By default, block manager of `@servebase/core` transform block defs with `local` namespace to local paths so you can use `local` namespace to access blocks locally inside website. Based on `@servebase/core`, local blocks is directed to this directory:

    frontend/<base>/static/modules/block

with these two exceptions: `cover` and `error` blocks have their own places:

    frontend/<base>/static/modules/cover
    frontend/<base>/static/modules/error

Version information is simply discarded.

For example, to access a block `{ns: 'local', name: 'error', path: '1012.html'}`, it should be:

    frontend/<base>/static/modules/error/1012.html

It's still possible to re-configure block.manager to have other paths for local namespace - however you should be aware of local namespace and the `cover` / `error` special blocks.


## local usage in @servebase/core

### `error`

when a lderror with `id` received, `@servebase/core` will try to open a ldcover via ldcvmgr with following blockdef (version information is ignored here):

    {ns: "local", name: "error", path: "<id>.html"}
