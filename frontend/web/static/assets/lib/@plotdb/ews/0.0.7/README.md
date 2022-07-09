# @plotdb/ews

elastic websocket.


## Usage

Constructor options:

 - `ws`: websocket object to use. auto-greated if omitted and `url` is derivable.
 - `scheme`: scheme of the URL to use. ignored if `url` or `ws` is provided. default `ws` if omitted
 - `domain`: domain of the URL to use. ignored if `url` or `ws` is provided. `window.location.host` is used if omitted
 - `path`: path of the URL to use. ignored if `url` or `ws` is provided. default `` if omitted.
 - `url`: url for websocket connection.
   - ignored if `ws` is provided.
   - derived from `scheme`, `domain` and `path` above if both `ws` and `url` are omitted
 - `scope`: scope of this socket. default ``


API (ews):

 - `pipe(scope)`: return a scoped `ews` object piped from this ews object.
 - `ws()`: return the real websocket object used.
 - `ensure()`: ensure connection. return Promise, resolves when connected
 - `disconnect()`: disconnect websocket from server.
   - return Promise when disconnected.
 - `connect(opt)`: reconnect websocket if disconnected. return a Promise which is resolved when connected.
   - options:
     - `retry`: automatically retry if set to true. default true.
     - `delay`: delay ( in millisecond) before first connection attmpt. default 0
 - `cancel()`: cancel connection. return Promise, resolves when connection canceled.
   - reject lderror 1026 if no connection to cancel.
 - `status()`: get connection status. return a integer with following possible values:
   - `0`: not connected
   - `1`: connecting
   - `2`: connected


API (from original WebSocket):

 - `send`
 - `close`
 - `addEventListener`
 - `dispatchEvent`
 - `removeEventListener`
 - `on`: (TBD) used by websocket-json-stream


## Sharedb

Sharedb is bundled in this repo, in following files:

 - `dist/sharedb.min.js`: standalone sharedb bundle, expose `sharedb` object.
 - `dist/sdb-client.min.js`: client side sharedb wrapper
 - `dist/sdb-server.min.js`: server side sharedb wrapper


### sdb-client

prepare a `ews` object:

      ws = new ews({url: ...});

create a sdb-client everytime the ews object (re)connected:

      ws.on("open", function() {
        sdb = new ews.sdb-client({ws: ws});
        sdb.connect().then( ... );
      });

Additionally, following events are available in sdb-client:

 - `close`: socket is closed.
 - `error`: fired when receiving `error` events from sharedb `Doc`


### sdb-server

use `http` and `ws` module to create a WebSocket server ( use `express` as example ):

    sdbServer = require("@plotdb/ews/sdb-server")
    app = express();
    server = http.createServer(express());
    wss = new ws.Server({ server: server });
    ret = sdb-server({io: {postgres configuration ...} , wss})
    wss.on("connection", function(ws, req) {
      /* you can still use the created ws object */
      var myws = new ews({ws});
      ...
    });


## License

MIT
