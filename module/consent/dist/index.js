(function(){
  var _id, consent;
  _id = function(o){
    return o.name + "@" + (o.version || '') + ":" + (o.path || '');
  };
  consent = function(o){
    var ref$;
    o == null && (o = {});
    this.mgr = o.manager;
    this.store = window.localStorage;
    this._apiRoot = o.api || "/api/consent";
    this.global = {
      user: (o.global || {}).user
    };
    this.userkey = ((ref$ = this.global).user || (ref$.user = {})).key || 0;
    this._apiRoot = this._apiRoot.replace(/\/$/, '');
    return this;
  };
  consent.prototype = import$(Object.create(Object.prototype), {
    _keep: function(o, remote){
      var id, ref$;
      remote == null && (remote = true);
      id = "module/consent/" + this.userkey + "/" + _id(o);
      this.store.setItem(id, JSON.stringify({
        time: Date.now(),
        user: ((ref$ = this.global).user || (ref$.user = {})).key || 0
      }));
      if (remote) {
        return ld$.fetch(this._apiRoot + "", {
          method: 'POST'
        }, {
          body: {
            consent_id: id
          }
        });
      }
    },
    prompt: function(o){
      var args, res$, i$, to$, this$ = this;
      res$ = [];
      for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      return this.mgr.get(o).then(function(bc){
        return bc.create();
      }).then(function(bi){
        return bi.attach({
          root: document.body
        }).then(function(){
          return bi['interface']();
        });
      }).then(function(itf){
        return itf.get.apply(itf, args);
      }).then(function(ret){
        if (!ret) {
          return Promise.reject(lderror(1018));
        } else {
          return this$._keep(o);
        }
      });
    },
    ensure: function(o){
      var args, res$, i$, to$, id, ret, e, this$ = this;
      res$ = [];
      for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      id = "module/consent/" + this.userkey + "/" + _id(o);
      ret = this.store.getItem(id);
      if (ret) {
        try {
          ret = JSON.parse(ret);
          return Promise.resolve(true);
        } catch (e$) {
          e = e$;
        }
      }
      return ld$.fetch(this._apiRoot + "", {
        method: 'POST'
      }, {
        body: {
          consent_id: id,
          check: true
        },
        type: 'json'
      }).then(function(it){
        if (!it) {
          return lderror.reject(1018);
        }
        this$._keep(o, false);
        return true;
      })['catch'](function(){
        return this$.prompt.apply(this$, [o].concat(args));
      });
    }
  });
  if (typeof module != 'undefined' && module !== null) {
    module.exports = consent;
  } else {
    window.consent = consent;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
