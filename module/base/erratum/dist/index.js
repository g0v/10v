(function(){
  var erratum, ref$;
  erratum = function(o){
    var this$ = this;
    o == null && (o = {});
    if (typeof window == 'undefined' || window === null) {
      console.warn("[@servebase/erratum] no window to listen to error/rejection");
    }
    window.addEventListener('error', function(evt){
      return this$.errorHandler(evt);
    });
    window.addEventListener('unhandledrejection', function(evt){
      return this$.rejectionHandler(evt);
    });
    if (o.handler) {
      this.handler = o.handler;
    }
    return this;
  };
  erratum.prototype = (ref$ = Object.create(Object.prototype), ref$.handler = function(e){}, ref$.errorHandler = function(evt){
    if (!lderror.eventHandler.error(evt)) {
      return this.handler(evt.error);
    }
  }, ref$.rejectionHandler = function(evt){
    if (!lderror.eventHandler.rejection(evt)) {
      return this.handler(evt.reason);
    }
  }, ref$.test = function(o){
    o == null && (o = {});
    if (o.bare) {
      return this._test(o);
    } else {
      return function(o){
        var this$ = this;
        return setTimeout(function(){
          return this$._test(o);
        }, 0);
      }(o);
    }
  }, ref$._test = function(o){
    if (o.promise) {
      return lderror.reject(1023);
    } else {
      throw lderror(1023);
    }
  }, ref$);
  if (typeof module != 'undefined' && module !== null) {
    module.exports = erratum;
  } else {
    window.erratum = erratum;
  }
}).call(this);
