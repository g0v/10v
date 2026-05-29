(function(){
  var uuidGen, sep, base64, base16, convert, enc, dec, obj;
  uuidGen = require("uuid").v4;
  sep = '';
  base64 = {
    map: "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0_.",
    offset: 6,
    padding: "000000"
  };
  base16 = {
    map: "0123456789abcdef",
    offset: 4,
    padding: "0000"
  };
  convert = function(s, src, des){
    var bits, ref$, len, count, r, i$, i, idx;
    if (typeof s === 'string') {
      bits = s.split('').map(function(c){
        return (src.padding + src.map.indexOf(c).toString(2)).slice(-src.offset);
      }).reduce(function(a, b){
        return a + '/' + b;
      }, '');
    } else {
      bits = s.toString(2);
    }
    bits = bits.replace(/\//g, '');
    ref$ = [bits.length, Math.ceil(bits.length / des.offset), ""], len = ref$[0], count = ref$[1], r = ref$[2];
    for (i$ = 0; i$ < count; ++i$) {
      i = i$;
      idx = parseInt(bits.substring(len - (i + 1) * des.offset, len - i * des.offset), 2);
      r = des.map[idx] + r;
    }
    return r;
  };
  enc = function(s){
    return convert(s, base16, base64);
  };
  dec = function(s){
    return convert(s, base64, base16);
  };
  obj = function(u){
    var ref$, opt, ret;
    if (typeof u === 'object') {
      ref$ = [u.id, u], u = ref$[0], opt = ref$[1];
    } else {
      opt = {};
    }
    if (!(opt.timestamp != null)) {
      opt.timestamp = true;
    }
    if (!u) {
      u = uuidGen().toLowerCase();
    }
    ret = u.split('-').map(function(d, i){
      return enc(d);
    }).join(sep);
    ret = (opt.timestamp ? enc(Date.now()) : '') + sep + ret;
    return ret;
  };
  obj.timestamp = function(u){
    return parseInt(dec(u.substring(0, u.length - 23)).replace(/^0+/, ''), "16");
  };
  obj.encode = enc;
  module.exports = obj;
}).call(this);
