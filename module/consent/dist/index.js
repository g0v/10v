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
    this._apiRoot = opt.api || "/api/consent";
    if ((ref$ = this._apiRoot)[ref$.length - 1] !== '/') {
      this._apiRoot += '/';
    }
    return this;
  };
  consent.prototype = import$(Object.create(Object.prototype), {
    prompt: function(o){
      return mgr.get(o).then(function(bc){
        return bc.create();
      }).then(function(bi){
        return bi.attach({
          root: document.body
        }).then(function(){
          return bi['interface']();
        });
      }).then(function(itf){
        return itf.get();
      });
    },
    ensure: function(o){
      var id, ret, e, this$ = this;
      id = "consent/" + _id(o);
      ret = this.store.getItem(id);
      if (ret) {
        try {
          ret = JSON.parse(ret);
          return Promise.resolve(true);
        } catch (e$) {
          e = e$;
        }
      }
      return ld$.fetch(this._apiRoot + "/query", {
        method: 'POST'
      }, {
        body: {
          consent_id: id
        },
        type: 'json'
      }).then(function(it){
        if (!it) {
          return lderror.reject(1018);
        }
        return true;
      })['catch'](function(){
        return this$.prompt(o).then(function(it){
          if (!it) {
            return lderror.reject(1018);
          }
          return true;
        });
      })['catch'](function(e){
        return e.id === 1018
          ? false
          : Promise.reject(e);
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
