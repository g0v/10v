## Repo Structure ( TBD Tentative ) 

 - frontend
   - .view: precompiled pug js
   - src
     - ls, styl, pug
     - pug 可以[使用這招來引入 module pug](https://github.com/pugjs/pug/issues/3125). sample code:
      p = resolve: (fn,src,opt) -> if /^@\//.exec(fn) => path.resolve(fn.replace(/^@\//, 'module')) else fn
      pug.render code, {plugins: [p]}
   - static
     - assets and other
 - .backend: prebuilt backend js
 - backend
   - route
   - module
     - db, auth, etc
     - other util # 額外的工具模組
   - other files
     - index.ls, error-handler.ls, ...
 - locales - for i18n
   - intl
     - zh-TW, en , ... etc 

 - doc
 - test
 - tool
 - script
 - user
 - config # 需要考慮到支援不同網域. ( 參考 repo-structure/config.md )
   - build, nginx, key, mail, site
 - other files
   - start
   - package.json, package-lock.json, .gitignore, .git, node_modules, server.log
   - secret ( 公開與非公開? )

