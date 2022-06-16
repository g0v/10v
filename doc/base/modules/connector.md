# Connector Utility Class

`@servebase/connector` is a tiny helper for reconnecting websocket connection. Usage:

    conn = new connector({ ... });
    conn.init!then -> ...

with following constructor options:

 - `init()`: customized initialization function. optional.
 - `reconnect()`: customized function called when (re)connected. optional.
 - `ldcv`: either a ldcover object or a function for controlling loading message. when it's a function:
   - accepting a single parameter which is either `true` or `false` ( for loading status. `true` = loading)
 - `path`: websocket server path. default `/ws`.

And following API:

 - `init()`: create a websocket and connect to server through it.
   - return a Promise, which is resolved when connected.
   - customized init will be called before connecting. 
 - `open`: open a socket connection. auto called after `init()` is called.
 - `reopen`: reopen a socket connection. auto called when previous socket was closed.
   - unlike `open`, this triggers given `ldcv` for loading indicator.

Available members for customized functions:

 - `ws`: websocket object.
 - `hub`: empty object for storing customized object.
