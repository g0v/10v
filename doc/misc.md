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
