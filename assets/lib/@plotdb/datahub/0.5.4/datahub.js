(function(){
  var _json0, datahub, hub, srchub, deshub, memhub, usrhub, hif, ref$, as;
  _json0 = (typeof module != 'undefined' && module !== null) && (typeof require != 'undefined' && require !== null) ? require("@plotdb/json0") : json0;
  datahub = hub = function(opt){
    var this$ = this;
    opt == null && (opt = {});
    this.opt = opt;
    this._id = (datahub._id++) + "/" + Math.random().toString(36).substring(2);
    this._ = {
      evthdr: {},
      src: null,
      scope: opt.scope || [],
      subscriber: []
    };
    if (opt.src) {
      opt.src.pipe(this);
    }
    (opt.subscriber || []).map(function(h){
      return this$.pipe(h);
    });
    this._.state = 'closed';
    this.on('open', function(){
      this$._.subscriber.map(function(h){
        if (h.fire) {
          return h.fire('open');
        }
      });
      return this$._.state = 'opened';
    });
    this.on('close', function(){
      this$._.subscriber.map(function(h){
        if (h.fire) {
          return h.fire('close');
        }
      });
      return this$._.state = 'closed';
    });
    return this;
  };
  datahub.prototype = import$(Object.create(Object.prototype), {
    on: function(n, cb){
      var this$ = this;
      return (Array.isArray(n)
        ? n
        : [n]).map(function(n){
        var ref$;
        return ((ref$ = this$._.evthdr)[n] || (ref$[n] = [])).push(cb);
      });
    },
    fire: function(n){
      var v, res$, i$, to$, ref$, len$, cb, results$ = [];
      res$ = [];
      for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      v = res$;
      for (i$ = 0, len$ = (ref$ = this._.evthdr[n] || []).length; i$ < len$; ++i$) {
        cb = ref$[i$];
        results$.push(cb.apply(this, v));
      }
      return results$;
    },
    state: function(s){
      var os;
      if (!(s != null)) {
        return this._.state;
      }
      os = this._.state;
      this._.state = s;
      if (os !== s) {
        return this.fire(s === 'opened' ? 'open' : 'close');
      }
    },
    asSrc: function(o){
      var this$ = this;
      return this._.src = {
        get: o.get || function(){},
        opsOut: function(ops){
          return o.opsOut(this$.addon(ops)) || function(){}(this$.addon(ops));
        }
      };
    },
    asDes: function(o){
      return this._.subscriber = [{
        opsIn: o.opsIn || function(){}
      }];
    },
    pipe: function(h){
      if (h._.src) {
        console.warn("a hub is connected with multiple source. cut the previous source anyway.");
        h._.src.cut(h);
      }
      this._.subscriber.push(h);
      h._.src = this;
      if (this._.state === 'opened') {
        h.fire('open');
      }
      return h;
    },
    cut: function(h){
      var idx;
      if (!~(idx = this._.subscriber.indexOf(h))) {
        return;
      }
      this._.subscriber.splice(idx, 1);
      return h.src = null;
    },
    opsIn: function(ops){
      var _id, localize, this$ = this;
      if (ops._id === this._id) {
        return;
      }
      _id = ops._id;
      localize = function(p, s){
        var i$, to$, i;
        for (i$ = 0, to$ = s.length; i$ < to$; ++i$) {
          i = i$;
          if (p[i] !== s[i]) {
            return;
          }
        }
        return p.slice(i + 1);
      };
      if (this._.scope) {
        ops = ops.map(function(it){
          var ref$;
          return ref$ = import$({}, it), ref$.p = localize(it.p, this$._.scope), ref$;
        });
      }
      ops = ops.filter(function(it){
        return it.p != null && it.p.length;
      });
      ops._id = _id;
      if (ops.length) {
        return this._.subscriber.map(function(it){
          return it.opsIn(ops);
        });
      }
    },
    opsOut: function(ops){
      var this$ = this;
      if (!ops._id) {
        ops._id = this._id;
      }
      if (this._.scope) {
        ops.map(function(it){
          return it.p = this$._.scope.concat(it.p);
        });
      }
      return this._.src.opsOut(ops);
    },
    addon: function(ops){
      var _id, opsAddon, data;
      _id = ops._id;
      opsAddon = [];
      data = this.get();
      ops.map(function(op){
        var d, p, i$, to$, i, results$ = [];
        d = data;
        p = [];
        for (i$ = 0, to$ = op.p.length - 1; i$ < to$; ++i$) {
          i = i$;
          p.push(op.p[i]);
          if (!(d[op.p[i]] != null)) {
            opsAddon.push(import$({
              p: JSON.parse(JSON.stringify(p))
            }, i === op.p.length - 1 && op.si
              ? {
                si: ""
              }
              : {
                oi: {}
              }));
          }
          results$.push(d = d[op.p[i]] || {});
        }
        return results$;
      });
      ops = opsAddon.concat(ops);
      ops._id = _id;
      return ops;
    },
    get: function(){
      var d, i$, ref$, len$, n;
      if (!this._.src) {
        return null;
      }
      d = this._.src.get();
      for (i$ = 0, len$ = (ref$ = this._.scope).length; i$ < len$; ++i$) {
        n = ref$[i$];
        if (!d) {
          return null;
        }
        d = d[n];
      }
      return d;
    }
  });
  srchub = function(opt){
    opt == null && (opt = {});
    datahub.call(this, opt);
    this.asSrc({
      opsOut: opt.opsOut || function(){},
      get: opt.get || function(){}
    });
    return this;
  };
  srchub.prototype = import$({}, datahub.prototype);
  deshub = function(opt){
    opt == null && (opt = {});
    datahub.call(this, opt);
    this.asDes({
      opsIn: opt.opsIn
    }) || function(){};
    return this;
  };
  deshub.prototype = import$(Object.create(Object.prototype), datahub.prototype);
  memhub = function(opt){
    var this$ = this;
    opt == null && (opt = {});
    this._data = {};
    srchub.call(this, import$(import$({}, opt), {
      opsOut: function(ops){
        this$._data = _json0.type.apply(this$._data, ops);
        return this$.opsIn(ops);
      },
      get: function(){
        return this$._data;
      }
    }));
    this._.state = 'opened';
    return this;
  };
  memhub.prototype = import$({}, srchub.prototype);
  usrhub = function(opt){
    var this$ = this;
    opt == null && (opt = {});
    deshub.call(this, import$(import$({}, opt), {
      opsIn: function(ops){
        this$._data = this$.get() || {};
        return opt.render(ops);
      }
    }));
    return this;
  };
  usrhub.prototype = import$({}, deshub.prototype);
  hif = function(o){
    var hub, this$ = this;
    o == null && (o = {});
    this._evthdr = {};
    this.data = {};
    this.hub = hub = new datahub.des({
      scope: o.scope || [],
      opsIn: function(ops){
        _json0.type.apply(this$.data, ops);
        return this$.opsIn(ops);
      }
    });
    hub.on('open', function(){
      return this$.fire('open');
    });
    hub.on('close', function(){
      return this$.fire('close');
    });
    this.opsOut = function(ops){
      return hub.opsOut(ops);
    };
    this.get = function(){
      return this$.hub.get() || {};
    };
    this.on('open', function(){
      return this$.data = this$.get();
    });
    return this;
  };
  hif.prototype = (ref$ = Object.create(Object.prototype), ref$.state = function(){
    return this.hub.state();
  }, ref$.opsIn = function(ops){}, ref$.on = function(n, cb){
    var this$ = this;
    return (Array.isArray(n)
      ? n
      : [n]).map(function(n){
      var ref$;
      return ((ref$ = this$._evthdr)[n] || (ref$[n] = [])).push(cb);
    });
  }, ref$.fire = function(n){
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
  }, ref$);
  as = function(func){
    var ret;
    func.prototype = Object.create(Object.prototype);
    ret = function(){
      var args, res$, i$, to$, obj;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      obj = Reflect.construct(hif, args, ret);
      func.apply(obj, args);
      return obj;
    };
    Object.setPrototypeOf(ret.prototype, hif.prototype);
    return ret;
  };
  hub.src = srchub;
  hub.des = deshub;
  hub.mem = memhub;
  hub.usr = usrhub;
  hub.as = as;
  hub._id = 0;
  if (typeof module != 'undefined' && module !== null) {
    module.exports = hub;
  } else if (typeof window != 'undefined' && window !== null) {
    window.datahub = hub;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
