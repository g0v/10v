# Change Logs

## v0.5.1

 - fix bug: `suuid` command failed due to incorrect path in cli.ls


## v0.5.0

 - use `buble` to prevent uglifying failure
 - further minimize generated js file with mangling and compression
 - rename `suuid.js`, `suuid.min.js` etc to `index.js` and `index.min.js` etc
 - update `main` and add `browser` field in `package.json`.
 - remove unused code in `build`
 - rebuild after uglifyjs upgrade
 - upgrade modules
 - release with compact directory structure


## v0.4.0

 - tweak build and code structure to prevent from accessing window object directly.


## v0.3.2


 - add command line tool for generating suuid quickly


## v0.3.1

 - add and upgrade `uuid` dependency
 - add `buble` to transpile `uuid` ES5 syntax.
 - update demo site with interactive generation demo


## v0.3.0

 - add `encode` function for encode any `base16` id.
 - tweak suuid option and document its usage.


## v0.2.1

 - update charmap in README.md to reflect the correct charmap used in code.


## v0.2.0

 - use unreserved characters `_` and `.` to replace `+` ( reserved character ) and `-` ( delimiter for uuid ). 


###v v0.1.0

 - upgrade packages.
 - fix bug: integer overflow may lead to incorrect decode result.
 - add timestamp as the first bytes.
 - tweak charmap.
 - add timestamp decode function.
 - update README for more information.
 - update build script with npx syntax.
