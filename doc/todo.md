# TODO List

## pending

 - srctree 生成 ( 已完成 )
   - 將 src build 模組化, 運用在 module 的 intl ( i18n ) 生成
     - 在這之後, 再看有沒有需要把 pugext ./cli.js 做完?
     ? alternative src-static tree
   - on demand build ( build on access ) ( assets/ 下的 intl 怎辦? )
 - i18n - 各模組自己的 locales 要管理一定不方便. 有什麼辦法?
   - 各模組自定義, 但外部可 override? 用 namespace 切, 再用程式整理所有 locale 檔? 同時實現 locale 的 extend?
     - 可能會需要去改 i18next
 - 思考, 甚至嘗試使用 @plotdb/block 做為前端套件模組控制器的可能
   - @plotdb/block server bundler
   - @plotdb/block i18n 怎麼做?
 - bundle not rebuild even if some files listed inside are updated ( through symlink )
 - dependency issue
   - frontend modules might use different packages. how could we better manage all of them?
     - e.g., authpanel.ls use `curegex`, and authpanel is itself in local module `auth`.
   - use `@plotdb/block`

## working

 - `ldcvmgr` config for i18n
 - `auth` as standalone module
 - `error` custom behavior

## done

 * ldsite modualized and re-add ( auth, ldcvmgr, error, loader, notify, httputil )
