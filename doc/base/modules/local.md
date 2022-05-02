# @local 

following local (block) modules are preserved:

 - `@local/error`: point to `modules/cover/error/#{path}` by error handler of core. When a lderror with `id` received, core will try to open a ldcover via ldcvmgr with following blockdef (version information is ignored here):

    {name: "@local/error", path: "<id>.html"}

