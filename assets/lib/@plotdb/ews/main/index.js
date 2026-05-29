(function(){
  var err, ews, ref$;
  err = function(e){
    var ref$;
    return ref$ = new Error(), ref$.name = 'lderror', ref$.id = e, ref$;
  };
  ews = function(o){
    var r;
    o == null && (o = {});
    this._src = o.src;
    this._scheme = o.scheme;
    this._domain = o.domain;
    this._path = o.path;
    if (o.url && !o.ws) {
      this._url = o.url;
      if (r = /^(\S+):\/\/([^\s\/]+)\/(.+)$/.exec(this._url)) {
        this._scheme = r[0];
        this._domain = r[1];
        this._path = r[2];
      }
    }
    this._scheme = this._scheme
      ? this._scheme
      : (typeof window != 'undefined' && window !== null) && window.location.protocol ? window.location.protocol.replace(':', '') : 'wss';
    if (this._scheme.startsWith('https')) {
      this._scheme = 'wss';
    } else if (this._scheme.startsWith('http')) {
      this._scheme = 'ws';
    }
    this._domain = this._domain || (typeof window != 'undefined' && window !== null ? window.location.host : null);
    this._path = !this._path
      ? '/'
      : this._path[0] !== '/'
        ? "/" + this._path
        : this._path;
    if (o.ws) {
      this._ws = o.ws instanceof ews
        ? o.ws.ws()
        : o.ws;
    }
    if (!(this._ws || this._url)) {
      this._url = this._scheme + "://" + this._domain + this._path;
    }
    if (!this._ws && this._url) {
      this._origin = true;
    }
    this._scope = o.scope || '';
    this._evthdr = {};
    this._hdr = new WeakMap();
    this._ctrl = {
      count: 0,
      pending: [],
      hdr: null,
      canceller: null,
      disconnector: null
    };
    this._s = 0;
    return this;
  };
  ews.prototype = (ref$ = Object.create(Object.prototype), ref$.addEventListener = function(t, cb, o, fromon){
    var ref$;
    if (!(t === 'message' || t === 'open' || t === 'close' || t === 'error')) {
      return;
    }
    ((ref$ = this._evthdr)[t] || (ref$[t] = [])).push({
      cb: cb,
      o: o,
      fromon: fromon
    });
    return this._installEventListener(t, cb, o, fromon);
  }, ref$._installEventListener = function(t, cb, o, fromon){
    var this$ = this;
    if (!this._ws) {
      return;
    }
    if (t !== 'message') {
      return this._ws.addEventListener(t, cb, o || {});
    }
    return function(scope, fromon){
      var hdr;
      this$._ws.addEventListener(t, hdr = function(e){
        var data, evt;
        if (!e.data.startsWith(this$._scope + "|")) {
          return;
        }
        data = e.data.substring(this$._scope.length + 1);
        if (fromon) {
          return cb(data);
        }
        evt = new MessageEvent('message', {
          data: data,
          origin: e.origin,
          ports: e.ports,
          source: e.source
        });
        return cb(evt);
      }, o || {});
      return this$._hdr.set(cb, hdr);
    }(this._scope, fromon);
  }, ref$._installEventListeners = function(){
    var t, ref$, list, lresult$, i$, len$, ref1$, cb, o, fromon, results$ = [];
    for (t in ref$ = this._evthdr) {
      list = ref$[t];
      lresult$ = [];
      for (i$ = 0, len$ = list.length; i$ < len$; ++i$) {
        ref1$ = list[i$], cb = ref1$.cb, o = ref1$.o, fromon = ref1$.fromon;
        lresult$.push(this._installEventListener(t, cb, o, fromon));
      }
      results$.push(lresult$);
    }
    return results$;
  }, ref$.dispatchEvent = function(evt){
    return this._ws.dispatchEvent(evt);
  }, ref$.removeEventListener = function(t, cb, o){
    var ref$;
        (ref$ = this._evthdr)[t] || (ref$[t] = []);
    ref$[t] = this._evthdr[t].filter(function(it){
      return it.h !== cb;
    });
    if (!this._ws) {
      return;
    }
    if (t !== 'message') {
      return this._ws.removeEventListener(t, cb, o);
    }
    return this._ws.removeEventListener(t, this._hdr.get(cb), o);
  }, ref$.close = function(c, r){
    return this._ws.close(c, r);
  }, ref$.send = function(d){
    return this._ws.send(this._scope + "|" + d);
  }, ref$);
  Object.defineProperties(ews.prototype, {
    bufferedAmount: {
      get: function(){
        if (!this._ws) {
          return 0;
        } else {
          return this._ws.bufferedAmount;
        }
      }
    },
    binaryType: {
      get: function(){
        if (!this._ws) {
          return 'blob';
        } else {
          return this._ws.binaryType;
        }
      }
    },
    protocol: {
      get: function(){
        if (!this._ws) {
          return this._scheme;
        } else {
          return this._ws.protocol;
        }
      }
    },
    readyState: {
      get: function(){
        if (!this._ws) {
          return 3;
        } else {
          return this._ws.readyState;
        }
      }
    },
    url: {
      get: function(){
        if (!this._ws) {
          return this._url;
        } else {
          return this._ws.url;
        }
      }
    },
    onmessage: {
      set: function(cb){
        return this.addEventListener('message', function(evt){
          return cb(evt);
        });
      }
    },
    onopen: {
      set: function(cb){
        return this.addEventListener('open', cb);
      }
    },
    onerror: {
      set: function(cb){
        return this.addEventListener('error', cb);
      }
    },
    onclose: {
      set: function(cb){
        return this.addEventListener('close', cb);
      }
    }
  });
  ref$ = ews.prototype;
  ref$.on = function(n, cb){
    var this$ = this;
    if (n === 'message' || n === 'open' || n === 'error' || n === 'close') {
      return this.addEventListener(n, cb, null, true);
    }
    return (Array.isArray(n)
      ? n
      : [n]).map(function(n){
      var ref$;
      return ((ref$ = this$._evthdr)[n] || (ref$[n] = [])).push(cb);
    });
  };
  ref$.fire = function(n){
    var v, res$, i$, to$, ref$, len$, cb, results$ = [];
    res$ = [];
    for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
      res$.push(arguments[i$]);
    }
    v = res$;
    if (n === 'message' || n === 'open' || n === 'close' || n === 'error') {
      throw new Error("fire should not be used to fire native events");
    }
    for (i$ = 0, len$ = (ref$ = this._evthdr[n] || []).length; i$ < len$; ++i$) {
      cb = ref$[i$];
      results$.push(cb.apply(this, v));
    }
    return results$;
  };
  ref$.ws = function(){
    return this._ws;
  };
  ref$.pipe = function(s){
    s == null && (s = '');
    return new ews({
      ws: this._ws,
      scope: this._scope + "/" + s,
      src: this
    });
  };
  ref$._connect = function(opt){
    var this$ = this;
    opt == null && (opt = {});
    return new Promise(function(res, rej){
      if (this$._ws) {
        return rej(err(1011));
      }
      if (!this$._url) {
        return rej(err(1026));
      }
      this$._ws = new WebSocket(this$._url);
      this$._ws.addEventListener('close', function(){
        this$._ws = null;
        if (this$._s !== 2) {
          return rej(err(0));
        }
        this$._status(0);
        if (this$._ctrl.disconnector) {
          return this$._ctrl.disconnector.res();
        }
      });
      this$._ws.addEventListener('open', function(){
        if (!this$._ctrl.canceller) {
          return res();
        }
        this$._ctrl.canceller.res();
        return rej(err(0));
      });
      return this$._installEventListeners();
    });
  };
  ref$.connect = function(opt){
    var cc, this$ = this;
    opt == null && (opt = {});
    cc = this._ctrl;
    if (this._s === 2) {
      return Promise.reject(err(1011));
    }
    return new Promise(function(res, rej){
      var retry, _;
      cc.pending.push({
        res: res,
        rej: rej
      });
      if (this$._s === 1) {
        return;
      }
      this$._status(1);
      retry = !(opt.retry != null) || !opt.retry;
      cc.count = 0;
      _ = function(){
        var delay;
        delay = Math.round(Math.pow(cc.count++, 1.4) * 500) + (opt.delay || 0);
        return cc.hdr = setTimeout(function(){
          cc.hdr = null;
          console.log("reconnect ( " + delay + " ms )");
          return this$._connect().then(function(){
            this$._status(2);
            return (cc.pending || (cc.pending = [])).splice(0).map(function(it){
              return it.res();
            });
          })['catch'](function(it){
            if (it && it.id && it.id === 1011) {
              return;
            }
            if (retry && !cc.canceller) {
              return _();
            }
            cc.canceller = null;
            return (cc.pending || (cc.pending = [])).splice(0).map(function(it){
              return it.rej();
            });
          });
        }, delay);
      };
      return _();
    });
  };
  ref$.disconnect = function(){
    var ret, this$ = this;
    if (this._s === 0) {
      return Promise.resolve();
    }
    if (this._s === 1) {
      return this.cancel();
    }
    ret = new Promise(function(res, rej){
      return this$._ctrl.disconnector = {
        res: res,
        rej: rej
      };
    });
    this._ws.close();
    return ret;
  };
  ref$.cancel = function(){
    var cc;
    cc = this._ctrl;
    if (this._s !== 1) {
      return Promise.reject(err(1026));
    }
    if (cc.hdr) {
      clearTimeout(cc.hdr);
      cc.hdr = null;
      this._status(0);
      return Promise.resolve();
    }
    return new Promise(function(res, rej){
      return cc.canceller = {
        res: res,
        rej: rej
      };
    });
  };
  ref$._status = function(s){
    var os;
    os = this._s;
    this._s = s;
    if (s !== os) {
      return this.fire('status', s);
    }
  };
  ref$.status = function(){
    return this._s;
  };
  ref$.ensure = function(){
    if (this._s === 2) {
      return Promise.resolve();
    } else {
      return this.connect();
    }
  };
  if (typeof module != 'undefined' && module !== null) {
    module.exports = ews;
  } else if (typeof window != 'undefined' && window !== null) {
    window.ews = ews;
  }
}).call(this);
