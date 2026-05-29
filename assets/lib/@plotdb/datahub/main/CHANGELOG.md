# Change Logs

## v0.5.4

 - sharehub
   - fix bug: when get, we should return original data instead of a copied one


## v0.5.3

 - sharehub
   - reuse internal sdb-client object so we dont have to re-create the entire object
   - always disconnect if sdb-client closed.
   - use `config` to update `id` and `collection` so we can re-config it anytime
   - accept `config` instead of only `id` in connect, and make it optional to make reconnect easier
   - support `force` option in connect to provide "only reconnect if not availabel mechanism"
     - but by default, `force` is always enabled.
   - provide `close` and `open` event so user can know when to get the whole data again
   - auto init or ensure socket connection in `connect` to make it fool-proof


## v0.5.2

 - add `connect` and `disconnect` API in `sharehub` for hub reusin for reconnection
 - add `init-connect` option in `sharehub`
 - tweak doc / comment about data cloning - we now dont suggest clone data internally by default


## v0.5.1

 - fix bug: memhub and usrhub should not clone data to prevent data inconsistency


## v0.5.0

 - support `watch` option in `sharehub`
 - dont clone data in hub. Let user be responsible to keep it untouched.


## v0.4.0

 - use @plotdb/ews in sharehub
 - remove browserify js since we don't really need it
 - fix bug: `_id` is gone when pipe back from source.


## v0.3.0

 - upgrade modules
 - add `state` for tracking data source status
 - track local ops to prevent from duplicated update
 - add `state` api and `open` and `close` events to reflect source hub status.
 - always clone ops in `ops-in` to prevent path interference between hubs
 - rewrite `datahub.as` to limit exposed interface and to simply usage
 - fix bug:
   - incorrect `subscriber` option handling
   - `get` failed if `src` is not yet set.


## v0.2.2

 - add `--no-bf` option in buliding to prevent browserify from using `browser` field in package.json
   - seems `browser-pack-flat` doesnt work well with browserified file
 - upgrade `@plotdb/json0`


## v0.2.1

 - release with compact directory structure


## v0.2.0

 - upgrade modules
 - patch test code to make it work with upgraded modules
 - add `main` and `browser` field in `package.json`.
 - remove livescript header in generated js


## v0.1.2

 - remove dependency to `ot-json0`.
 - use `terser` to support es code minification


## v0.1.1

 - remove `serialize` and `deserialize` function in `datahub.as`.


## v0.1.0

 - upgrade modules
 - add `datahub.as` interface wrapper


## v0.0.6

 - remove postinstall script to prevent npm install failure


## v0.0.5

 - suppor doc creation base object in sharehub
 - add warning when something been piped twice. remove `adopt` since we should keep track of source.
 - bug fix: append obj creation op only if object doesn't exists (instead of check if value is true )
 - bug fix: localize should clone ops. also fix localize logic.
 - bug fix: we should apply changes to sharehub data when receiving incoming ops, but only if it's not source.


## v0.0.4

 - build bundle js for datahub and sharehub
 - support both bare mode and bundle mode.


## v0.0.3

 - build all source without -bare option.
 - scope local variable and export `datahub`, `sharehub` only .

## v0.0.2

 - change npm package namespace from @loadingio to @plotdb
