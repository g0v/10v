## log

 - colors
   - cyan: info ( state change, etc )
   - green: success
   - red: error
 - tag / cat - use log.child, instead of manually adding `[...]`.

## init db

based on the configuration, run command as follow:

    psql -h localhost -p 15432 -U pg < config/db/init.sql
