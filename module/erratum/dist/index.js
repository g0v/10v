(function(){
  var handler, erratum;
  if (typeof window != 'undefined' && window !== null) {
    window.addEventListener('error', function(evt){
      return handler(evt.error);
    });
    window.addEventListener('unhandledrejection', function(evt){
      return handler(evt.reason);
    });
    handler = function(e){};
  }
  erratum = {
    handler: function(e){
      return console.log(e);
    },
    test: function(promise){
      promise == null && (promise = false);
      if (promise) {
        return lderror.reject(1023);
      } else {
        throw lderror(1023);
      }
    }
  };
  if (typeof module != 'undefined' && module !== null) {
    module.exports = erratum;
  } else {
    window.erratum = erratum;
  }
}).call(this);
