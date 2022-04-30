# Error Handling

We need to handle errors in both backend and frontend. All errors should be wrapped with `lderror` if possible, and handled by dedicated error handler.


## Frontend

Frontend error module is a module that does following:

 - intercept `window.onerror` event and handle errors automatically
 - expose an error handling API for modules to call.


## Backend

Server side errors are processed by `error-handler.ls`. Before migrating to express 5, we use `routecatch` to catch uncaught rejections for routes under `backend.route` ( `app`, `api`, `extapi`, etc ). Basically:

 - All Errors that are not `lderror` will be dumped, generate 500 error.
   - `EBADCSRFTOKEN` error and `URIError` will be handled separatedly, since these are errors from engine.
 - All lderror won't be dumped, but generate 490 error and sent to client.

For custom routes, you should wrap them in `routecatch` manually in case of uncaught rejections:

    backend.route.custom = aux.routecatch express.Router {mergeParams: true}

It's encouraged to use lderror to provide error information. ( `lderror(id, msg)` )
 - `id` itself is a message ( can be retrieved by lderror.message(id) ); but to provide custom message `msg`, 
   - encode error in following format: `name: message`, where
     - name:
       - for scoped message: `module-name/error-name`
       - for general error: `error-name`
     - message: string. no explicit limitation 
   - all names should be simple, short, and matches `[a-b][a-b0-9-_]*`
 - by default `lderror` object is sent to frontend directly without logging in server. To force logging, set `log` to true when constructing `lderror` object:

    throw lderror({
      id: 1011
      message: "resource not found, may be an internal error"
      log: true
    })


### Error reporting

`err/490.pug` will be used for reporting view rendering error, along with a cookie `lderror` storing corresponding `lderror` object for error information. Check `frontend/base/src/pug/err/490.pug` for how error handles as a reference.
