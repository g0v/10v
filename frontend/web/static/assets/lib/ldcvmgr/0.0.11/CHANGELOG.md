# Change Logs

## v0.0.11

 - bug fix: parameter no passed in `lock`


## v0.0.10

 - support `error-cover` for customization of default error cover.
 - pass parameter to error handler as the third parameter for providing more detail error message


## v0.0.9

 - parameter passed to ldcv in `get` and `toggle` function
 - `get` right after `on` event is fired in case of unexpected promise in event handler


## v0.0.8

 - bug fix: attribute selector need quote to prevent selector parsing error


## v0.0.7

 - bug fix: get cover by blockdef doesn't work


## v0.0.6

 - optimize initialization by
   - limit init scope for dom initialization
   - track ldcvmgr toggling by listening to click event at document.body
   - auto-init default off


## v0.0.5

 - support `@plotdb/block` as ldcover


## v0.0.4

 - update window object only if module is not defined
 - rename `ldcvmgr.js`, `ldcvmgr.min.js` to `index.js` and `index.min.js`
 - upgrade modules
 - release with compact directory structure
 - add `main` and `browser` field in `package.json`.
 - further minimize generated js file with mangling and compression
 - remove assets files from git
 - patch test code to make it work with upgraded modules


## v0.0.3

 - upgrade module versions and tweak package.json dependency rules.


## v0.0.2

 - support `path` as function for a more customizable behavior.
 - require a newer version of `ldloader` ( 1.1.1 )
 - prevent internal error handler to cause a blinking loader effect.
 - correctly reject proxise if error occurs.
 - remove seemd useless debounce to reduce dependency.
