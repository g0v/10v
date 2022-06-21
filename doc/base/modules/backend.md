# backend

`backend` is the base object when constructing a backend server. Backend object is passed to route functions when initializing routes, and provides following members:

 - `mode`: value in `NODE_ENV`, e.g., `production`
 - `production`: true if in production mode, otherwise false.
 - `middleware`: middleware objects, including
   - csrf
 - `config`: backend configuration
 - `base`: base name. default `base`. updated based on `config` related field.
 - `feroot`: default frontend base directory. e.g., `frontend/base`. auto generated based on `base` field
 - `root`: repo root directory
 - `server`: http.Server object 
 - `app`: express application
 - `log`: logger object, in pino interface
 - `log-server`: child log of `log` for server information
 - `log-build`: child log of `log` for build information
 - `log-mail`: child log of `log` for mail sender
 - `mail-queue`: mail sender
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


### Access backend features via server program

construct a backend object for accessing libraries that require backend to work. Following is an example with database interface:

    require! <[backend backend/db/postgresql]>
    opt = require "../config/private/secret"
    db = new postgresql(new backend {config: opt})
    db.query "select count(key) from session" .then ->


## mail-queue API

mail-queue API:

 - `add`: add mail into mail queue
 - `send(payload, opt)`: send mail.
   - payload field:
     - from: sender. e.g., '"Servebase Dev" <contact@yourserver.address>'
     - to: recipient. e.g., "some@mail.address"
     - bcc: bcc recipient. e.g., "some@mail.address"
     - subject: mail title
     - text: mail text content
     - html: mail html content
     - content: used in `send-from-md` as mardkwon content. translated to text and html
   - opt field:
     - now: true if send immediately. the same as `send-directly`.
 - `send-directly(payload)`: send mail, bypassing queue
 - `send-from-md(payload, map, opt)`: send with markdown content
 - `by-template(name, email, map, config)`: send using template content.
   - templates are stored under "config/mail/${name}.yaml"
