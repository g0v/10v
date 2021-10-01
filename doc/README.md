# Servebase

Base web server design reference.



## Code Maintain and Modularization

Keep common part in a base repo ( servebase ) but carefully design how to customize it.


## Error Handling

Server side errors are processed by `error-handler.ls`. Before migrating to express 5, we use `routecatch` to catch uncaught rejections for routes under `backend.route` ( `app`, `api`, `extapi`, etc ). Basically:

 - All Errors that are not `lderror` will be dumped, generate 500 error.
   - `EBADCSRFTOKEN` error and `URIError` will be handled separatedly, since these are errors from engine.
 - All lderror won't be dumped, but generate 490 error and sent to client.

For custom routes, you should wrap them in `routecatch` manually in case of uncaught rejections:

    backend.route.custom = aux.routecatch express.Router {mergeParams: true}

It's encouraged to use lderror to provide error information. ( `lderror(id, msg)` )
 - with `id`, there is already messages. but to provide custom message `msg`, 
   - encode error in following format: `name: message`, where
     - name:
       - for scoped message: `module-name/error-name`
       - for general error: `error-name`
     - message: string. no explicit limitation 
   - all names should be simple, short, and matches `[a-b][a-b0-9-_]*`


## Code Check

 - ls-lint: https://github.com/eheitherd/ls-lint


## Route Sanity Check

 - authed
 - staff
 - recaptcha - should provide fallback for failure


## Backend

 - module redesign
 - redis + sharedb, cross instance communication
 - zero down-time strategy
   - https://yu-jack.github.io/2020/03/09/nodejs-zero-downtime/


## Security

 - recaptcha - should provide fallback for failure

# Reference

 - https://github.com/mikesparr/typescript-postgres-auth-example
