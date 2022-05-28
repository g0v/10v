## Versioning

use `pre-commit` git hook ( tool/git-hooks ) to update version before commiting to `.version` file.

Version acquisition:

 - through `/auth/api/info`: version update on file change in `backend/auth` and serve along with user info.
   - (TBD / TODO) move this logic into `module/version`?
 - a `version.pug` file available by `include @/@servebase/version/index.pug`

Version application:
 - Libraries inclusion in Pug can be decached via `libLoader.version(...)`
 - Decache files fetched through `@plotdb/block` by simply update `registry` with version information.
 - Static built html files have to be rebuilt for acquiring version info.
   - Consider using bunlder and script loader to minimize versioning impact here.
     - bundler: to minimize file amounts we have to decache
     - script loader: to load bunlded files with decache, this has be to done by js.


## log

 - colors
   - cyan: info ( state change, etc )
   - green: success
   - red: error
 - tag / cat - use log.child, instead of manually adding `[...]`.

## database

### init

You need to run some commands manually to create database. Start a psql session based on your config (username, password and port, which defaults to `pg`, `pg` and `15432`):

    psql -h localhost -p 15432 -U pg


then, execute following commands:

    create database yourdbname;
    create user youruser with encrypted password 'yourpassword';
    \c yourdbname
    grant all privileges on all tables in schema public to youruser;


based on the configuration, run command as follow:

    psql -h localhost -p 15432 -U pg < config/db/init.sql


DB files are default written to /var/folders/postgresql/data/pgdata (see config/base/docker/compose.yaml). Backup those files for a persistent database across containers.


## redirecting ( TBD )

use cookie to redirect. alternatively, lderror with `redirect` parameter instructs error handlers to pass the redirect parameter to `X-Accel-Redirect`, which provides in place redirection ( different content without touch URL )
