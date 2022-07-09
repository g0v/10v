# Change Logs

## v0.0.9

 - check window for existency before adding lfolder object
 - rename `ldfolder.js`, `ldfolder.min.js` to `index.js` and `index.min.js`
 - rename `ldfolder.css`, `ldfolder.min.css` to `index.css` and `index.min.css`
 - upgrade modules
 - release with compact directory structure
 - add `style` in `package.json`
 - add `main` and `browser` field in `package.json`.
 - further minimize generated js file with mangling and compression
 - patch test code to make it work with upgraded modules


## v0.0.8

 - fix bug: incorrect height calculation for multiple children menu.
   - batch update parent height by storing delta with WeakMap and Set


## v0.0.7

 - fix bug: incorrect exclusive behavior when applying 0.0.6 fix


## v0.0.6

 - correct nested folder height


## v0.0.5

 - add `exclusive` option for keeping only one folder opened.
 - fix bug: nested hidden menu height is incorrectly set to auto due to selector typo.
 - tweak exporting code
 - rename `main` to `ldfolder` for better debugging experience
 - keep both `ldfolder` and `index` files for future filename update


## v0.0.4

 - remove default style for `.highlight` and `.active`.


## v0.0.3

 - fix style bug: unnecessary `:after` pseudo element and wrong text color in active menu.


## v0.0.2

 - remove ldQuery dependency.

