server

## Repo Structure ( TBD Tentative ) 

 - src
   - ls, styl, pug
 - static
   - assets and other
 - locales
   - i18n 
 - engine
   - watch
   - route
   - module
     - db
     - util? # 額外的工具模組
   - other files
     - index.ls
 - doc
 - test
 - tool
 - script
 - .view, .engine - prebuilt files
 - user
   - 考慮到幾種情境:
     - 用戶上傳檔案 ( 至特定物件下 ) - /<type>/f/<uu/id>.type
     - 指示下載檔案 - /<type>/d/<uu/id>/
     - 子結構 - /<type>/s/<type>/...
 - config # 需要考慮到支援不同網域. ( 參考 config-structure.md )
   - build, nginx, key, mail, site
 - other files
   - start
   - package.json, package-lock.json, .gitignore, .git, node_modules, server.log
   - secret ( 公開與非公開? )

## Error Handling

 - all errors should be handled in a common handler.
 - promise-based route can be wrapped with a util function, such as `autocatch`
 - use lderror to provide error information.
   - id
   - meta data
     - encode error in following format:
       - <module-name>/<error-name>
       - <error-name> ( general error )
     - <error-name> should be simple, short, and matches [a-b0-9][a-b0-9-]*

## Code Check
 - ls-lint: https://github.com/eheitherd/ls-lint

## Route Sanity Check

 - authed
 - staff
 - recaptcha - should provide fallback for failure

## Backend

 - module redesign
 - redis + sharedb, cross instance communication
 - zero down-time strategy
   - https://yu-jack.github.io/2020/03/09/nodejs-zero-downtime/


## Security

 - recaptcha - should provide fallback for failure
