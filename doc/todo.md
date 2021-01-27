# TODO List

## pending
 - bundle not rebuild even if some files listed inside are updated ( through symlink )
 ? alternative src-static tree
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
