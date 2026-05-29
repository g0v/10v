(function(){
  var re, parse, fit;
  re = /(\D*)([^-]+)-?([.0-9a-zA-Z]*)(\+?[.0-9a-zA-Z]*)/;
  parse = function(v){
    var ret, ref$, vs, range;
    if (!(ret = re.exec(v))) {
      ref$ = [[], '', []], vs = ref$[0], range = ref$[1], ret = ref$[2];
    } else {
      ref$ = [ret[2].split('.'), ret[1] || ''], vs = ref$[0], range = ref$[1];
    }
    return [+(vs[0] || 0), +(vs[1] || 0), +(vs[2] || 0), ret[3] || '', ret[4] || '', range];
  };
  fit = function(v, r){
    var ref$, j, i$, i;
    ref$ = [
      Array.isArray(v)
        ? v
        : parse(v || ''), Array.isArray(r)
        ? r
        : parse(r || '')
    ], v = ref$[0], r = ref$[1];
    j = (function(){
      switch (r[5]) {
      case '^':
        return 0;
      case '~':
        return 1;
      case '>':
      case '>=':
        return -1;
      default:
        return 2;
      }
    }());
    for (i$ = 0; i$ < 3; ++i$) {
      i = i$;
      if (i <= j) {
        if (v[i] !== r[i]) {
          return false;
        }
      }
      if (v[i] < r[i]) {
        return false;
      }
    }
    return true;
  };
  if (typeof module != 'undefined' && module !== null) {
    module.exports = {
      parse: parse,
      fit: fit
    };
  } else if (typeof window != 'undefined' && window !== null) {
    window.semver = {
      parse: parse,
      fit: fit
    };
  }
}).call(this);
