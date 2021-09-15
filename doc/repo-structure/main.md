## Repo Structure ( TBD Tentative ) 

 - frontend: frontend related code.
   - In order to support multi-site tree, you should put all codes in separated subfolder. 
     - e.g., `frontend/demo` is the demo site for servebase.
     - you should add the folder name in the `base` field of your secret config ( `config/private/secret` )
     - you can manage frontend as a submodule or workspace with npm, to separate backend and frontend dependency.
   - subfolder under `frontend/xxx`:
     - `.view`: prebuilt pug js files.
     - `src`
       - ls, styl, pug
       - pug 可以[使用這招來引入 module pug](https://github.com/pugjs/pug/issues/3125). sample code:
        p = resolve: (fn,src,opt) -> if /^@\//.exec(fn) => path.resolve(fn.replace(/^@\//, 'module')) else fn
        pug.render code, {plugins: [p]}
     - `static`
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

