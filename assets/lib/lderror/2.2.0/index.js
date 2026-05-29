(function(){
  var idmap, lderror;
  idmap = {
    0: "unknown lderror",
    998: "skipped",
    999: "canceled",
    1000: "user not login",
    1001: "suspicious user",
    1002: "unknown error",
    1003: "image process failed",
    1004: "quota exceeded",
    1005: "csrftoken mismatch",
    1006: "timeout",
    1007: "server down",
    1008: "unable to parse user data",
    1009: "bot",
    1010: "captcha error",
    1011: "resource conflict",
    1012: "permission denied",
    1013: "expire",
    1014: "apply for a resource that already exists",
    1015: "bad parameter",
    1016: "feature not yet available",
    1017: "resource corrupted",
    1018: "no consent",
    1019: "wrong domain",
    1020: "not supported",
    1021: "email not verified",
    1022: "missing dependency",
    1023: "lderror testing",
    1024: "limited by throttling",
    1025: "runtime error",
    1026: "not applicable",
    1027: "missing config"
  };
  lderror = function(opt, id){
    var _id, that;
    opt == null && (opt = "");
    id == null && (id = 0);
    if (!(this instanceof lderror)) {
      return new lderror(opt, id);
    }
    _id = (!isNaN(+id) ? +id : 0) || opt.id || 0;
    if (typeof opt === 'string') {
      this.message = opt;
      this.id = _id;
    } else if (opt instanceof Error) {
      (this.stack = opt.stack, this.message = opt.message, this).id = _id;
    } else if (typeof opt === 'object') {
      delete opt.__proto__;
      delete opt.constructor;
      import$(this, opt).id = _id;
    } else if (typeof opt === 'number') {
      this.id = opt;
      if (typeof id === 'string') {
        this.message = id;
      }
      if (!this.message) {
        this.message = (that = idmap[this.id || 0])
          ? that
          : this.id >= 100 && this.id < 600
            ? "http code: " + this.id
            : idmap[0] + " (id: " + (this.id || 0) + ")";
      }
    }
    this.stack = new Error().stack;
    this.name = lderror.prototype.name;
    return this;
  };
  lderror.prototype = import$(Object.create(Error.prototype), {
    name: 'lderror',
    toString: function(opt){
      var obj;
      opt == null && (opt = {});
      obj = this.toObject();
      if (opt.stack != null && !opt.stack) {
        delete obj.stack;
      }
      return JSON.stringify(obj);
    },
    toObject: function(){
      var ref$;
      return ref$ = {
        name: this.name
      }, ref$.id = this.id, ref$.message = this.message, ref$.stack = this.stack, ref$;
    }
  });
  lderror.id = function(opt){
    if (typeof opt === 'object' && opt.name === 'lderror' && opt.id) {
      return opt.id;
    }
    return 0;
  };
  lderror.message = function(o){
    if (typeof o === 'number') {
      return idmap[o] || idmap[0];
    } else if (typeof o === 'object') {
      return idmap[o.id] || idmap[0];
    }
    return idmap[0];
  };
  lderror.reject = function(opt, id){
    return Promise.reject(new lderror(opt, id));
  };
  lderror.handler = function(o){
    var h, this$ = this;
    o == null && (o = {});
    this.i = (o.ignore || []).concat([999]);
    this.h = o.handler;
    this.r = o.rule || function(it){
      return it;
    };
    this.s = {};
    h = function(e){
      var i;
      if (in$(i = lderror.id(e), this$.i)) {
        return;
      }
      this$.s[i] = 1;
      this$.h(this$.r(i), e).then(function(){
        return this$.s[i] = 0;
      });
      if (!i) {
        return console.log(e);
      }
    };
    h.isOn = function(){
      var k, v;
      return !!(function(){
        var ref$, results$ = [];
        for (k in ref$ = this.s) {
          v = ref$[k];
          results$.push(v);
        }
        return results$;
      }.call(this$)).filter(function(v){
        return v;
      }).length;
    };
    return h;
  };
  if (typeof module != 'undefined' && module !== null) {
    module.exports = lderror;
  } else if (typeof window != 'undefined' && window !== null) {
    window.lderror = lderror;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
  function in$(x, xs){
    var i = -1, l = xs.length >>> 0;
    while (++i < l) if (x === xs[i]) return true;
    return false;
  }
}).call(this);
