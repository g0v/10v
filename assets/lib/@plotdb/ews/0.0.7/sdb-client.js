(function(){
  ews.sdbClient = function(opt){
    var this$ = this;
    opt == null && (opt = {});
    import$(this, {
      _evthdr: {},
      _connection: null,
      _ws: opt.ws
    });
    this._ws.addEventListener('close', function(){
      this$._connection = null;
      this$._sws = null;
      return this$.fire('close');
    });
    return this;
  };
  ews.sdbClient.prototype = import$(Object.create(Object.prototype), {
    on: function(n, cb){
      var this$ = this;
      return (Array.isArray(n)
        ? n
        : [n]).map(function(n){
        var ref$;
        return ((ref$ = this$._evthdr)[n] || (ref$[n] = [])).push(cb);
      });
    },
    fire: function(n){
      var v, res$, i$, to$, ref$, len$, cb, results$ = [];
      res$ = [];
      for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      v = res$;
      for (i$ = 0, len$ = (ref$ = this._evthdr[n] || []).length; i$ < len$; ++i$) {
        cb = ref$[i$];
        results$.push(cb.apply(this, v));
      }
      return results$;
    },
    getSnapshot: function(arg$){
      var id, version, collection, this$ = this;
      id = arg$.id, version = arg$.version, collection = arg$.collection;
      return new Promise(function(res, rej){
        return this$._connection.fetchSnapshot(collection != null ? collection : 'doc', id, version != null ? version : null, function(e, s){
          if (e) {
            return rej(e);
          } else {
            return res(s);
          }
        });
      });
    },
    get: function(arg$){
      var id, watch, create, collection, this$ = this;
      id = arg$.id, watch = arg$.watch, create = arg$.create, collection = arg$.collection;
      return (!this._connection
        ? this.connect()
        : Promise.resolve()).then(function(){
        return new Promise(function(res, rej){
          var doc;
          doc = this$._connection.get(collection != null ? collection : 'doc', id);
          return doc.fetch(function(e){
            if (e) {
              return rej(e);
            }
            doc.subscribe(function(ops, source){
              return res(doc);
            });
            doc.on('error', function(err){
              return this$.fire('error', {
                doc: doc,
                err: err
              });
            });
            if (watch != null) {
              doc.on('op', function(ops, source){
                return watch(ops, source);
              });
            }
            if (!doc.type) {
              return doc.create((create ? create() : null) || {});
            }
          });
        });
      });
    },
    connect: function(){
      var p, this$ = this;
      if (this._connection) {
        return Promise.resolve();
      }
      p = this._ws.status() !== 2 ? this._ws.connect() : void 8;
      p = false
        ? void 8
        : Promise.resolve();
      return p.then(function(){
        this$._sws = new ews({
          ws: this$._ws,
          scope: 'sharedb'
        });
        return this$._connection = new sharedb.Connection(this$._sws);
      });
    },
    disconnect: function(){
      return this._ws.disconnect();
    },
    cancel: function(){
      return this._ws.cancel();
    },
    status: function(){
      return this._ws.status();
    },
    ensure: function(){
      return this._ws.ensure();
    }
  });
  if (typeof module != 'undefined' && module !== null) {
    module.exports = ews.sdbClient;
  } else if (typeof window != 'undefined' && window !== null) {
    window.ews.sdbClient = ews.sdbClient;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
