# backend

`backend` is the base object when constructing a backend server. Backend object is passed to route functions when initializing routes, and provides following members:

 - `mode`: value in `NODE_ENV`, e.g., `production`
 - `production`: true if in production mode, otherwise false.
 - `middleware`: middleware objects, including
   - csrf
 - `config`: backend configuration
 - `base`: frontend base dir. by default `frontend`. updated based on `config` related field.
 - `server`: http.Server object 
 - `app`: express application
 - `log`: logger object, in pino interface
 - `log-server`: child log of `log` for server information
 - `log-build`: child log of `log` for build information
 - `route`: all default routes. including:
   - `app`: routes for view
   - `api`: routes for api
   - `extapi`: routes for api from cross domain access
   - `auth`: routes for authorization 
 - `store`: redis like data store, with following function:
   - `get(...)`
 - `db`: db interface, postgresql object.
 - `i18n`: i18n object, in `i18next` spec.

## API

Following are apis available in `backend` object. Most of them are only for server use.

 - `start`: init a backend server.
 - `listen({logger, i18n})`: start the inited backend server. ( TODO: merge back into `start`? )
 - `watch`: start a source code building daemon.

And a constructor API:

 - `create(opt)`: create a backend server and start this server.
