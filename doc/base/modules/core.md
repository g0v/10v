# @servebase/core

service core module that initializes, constructs and provides following members:

 - `global`: server basic information
 - `user`: user object
 - `auth`: authentication
 - `ldcvmgr`: popup module handler
 - `manager`: block manager
 - `loader`: full screen loading indicator
 - `captcha`: captcha provider
 - `zmgr`: z-index manager
 - `error`: error handler
 - `i18n`: i18n object. use this instead accessing `i18next` directly for module abstraction.

with additional APIs stored in `servebase` global variable:

 - `corectx(cb)`: run `cb` a ldc app with core inited as dependency.
   - example: `servebase.corectx(({core}) -> @auth == core.auth);`
   - return a Promise, resolved the return value of `cb` ( `cb` can also return Promise )
 - `config(opt)`: config core module. should be called before core is initialized.
   - see `Customization` section below for more detail.


## Usage

To use a `@servebase/core` module, use `ldc` to load it:

    ldc.register <[core]>, ({core}) -> ...


Alternatively, use `servebase.corectx`:

    <- servebase.corectx _
    # now `this` is the core object:
    @manager.from ...


## Dependencies

 - zmgr
 - ldloader
 - ldcvmgr
 - lderror
 - @servebase/captcha
 - @servebase/auth
 - @loadingio/ldc
 - @plotdb/semver
 - @plotdb/block
 - @plotdb/rescope
 - @plotdb/csscope
 - @plotdb/httputil
 - i18next ( optional )
 - i18nextBrowserLanguageDetector ( optional )


## Customization

`@servebase/core` is provided as a convenient basic toolkit for controlling a website, so you can still build your own core module.

However, building a similar module from scratch may be kinda a redundant work. Thus, following methods are provided for core module customization:

 - with `corecfg` ldc module, which is the dependency of `core` ldc module.
 - config with `servebase.config`.

Both the option in `servebase.config` or the `corecfg` ldc module are something with the same definition as below:

 - an object. In this case, it should be an object with following fields:
   - `manager`: a `@plotdb/block` block manager. Optional, it will replace the default manager if provided.
 - a function. In this case, it will be called with `core` context and should return an object defined above.

`servebase.config` should always be called only once and before any possible core initialization to prevent inconsistent behavior.
