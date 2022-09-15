 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (Array, JSON, b64img, blockLoader, c, cssLoader, decache, defer, escape, libLoader, meta, parentName, prefix, scriptLoader, url, version) {
      ;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}

;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if(!Array.isArray(os)) { os = [os]; }
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (!libLoader.js.url[url]) {
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
libLoader.js.url[url] = true;
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (!libLoader.js.url[url]) {
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
libLoader.js.url[url] = true;
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

};
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_mixins["css"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if(!Array.isArray(os)) { os = [os]; }
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var o = $$obj[pug_index1];
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (!libLoader.css.url[url]) {
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
libLoader.css.url[url] = true;
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var o = $$obj[pug_index1];
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (!libLoader.css.url[url]) {
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
libLoader.css.url[url] = true;
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
    }
  }
}).call(this);

};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if (!(libLoader || scriptLoader)) {
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
cssLoader.url[url] = true;
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";










}
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
function ellipsis(str, len) {
  return ((str || '').substring(0, len || 200) + (((str || '').length > (len || 200)) ? '...' : ''));
}

;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_mixins["nbr"] = pug_interp = function(count){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
for (var i = 0; i < count; i++)
{
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
}
};
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";








;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var b64img = {};
;pug_debug_line = 50;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAIA"
;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 58;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";







;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";













;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002Fldview\u002Findex.pug";
prefix = function(n) { return (!n?[]:(Array.isArray(n)?n:[n])).map(function(it){ return `${prefix.currentName}$${it}`; }).join(' ');}
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002Fldview\u002Findex.pug";
pug_mixins["scope"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002Fldview\u002Findex.pug";
var prentName = prefix.currentName;
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002Fldview\u002Findex.pug";
prefix.currentName = name;
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002Fldview\u002Findex.pug";
if (attributes.class && /naked-scope/.exec(attributes.class)) {
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002Fldview\u002Findex.pug";
block && block();
}
else {
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002Fldview\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"ld-scope": pug_escape(name || '')},attributes]), true)) + "\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002Fldview\u002Findex.pug";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002Fldview\u002Findex.pug";
prefix.currentName = parentName;
};
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fcommon.pug";




















;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta charset=\"utf-8\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 3;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
var meta = {
  url: "https://10th.g0v.tw",
  title: "零宇宙大爆炸 - 零時政府 g0v 十週年生日派對於台北的社會創新實驗中心",
  description: "零時政府十週年了！「零宇宙大爆炸」將以生日派對的形式，舉辦在台北的社會創新實驗中心，透過短講、表演、開放工作坊、闖關遊戲、和源力不絕的生日蛋糕與美食，我們邀請「沒有人」化身為「零時空旅人」一同來回顧 g0v 的第一個十年，並且想像第二個、第三個、第 n 個十年！",
  thumbnail: "https://10th.g0v.tw/assets/img/thumb.png",
  thumb: {
    type: "image/png",
    width: "1200",
    height: "630"
  }
};
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:url\""+pug_attr("content", meta.url, true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" name=\"description\""+pug_attr("content", meta.description, true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:title\""+pug_attr("content", meta.title, true, true)) + "\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:description\""+pug_attr("content", meta.description, true, true)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:locale\" content=\"zh_TW\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image\""+pug_attr("content", meta.thumbnail, true, true)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image:type\""+pug_attr("content", meta.thumb.type || "image/jpeg", true, true)) + "\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image:width\""+pug_attr("content", meta.thumb.width || "1200", true, true)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image:height\""+pug_attr("content", meta.thumb.height || "630", true, true)) + "\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:type\""+pug_attr("content", meta.ogtype || "website", true, true)) + "\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" name=\"twitter:card\""+pug_attr("content", meta.twtcardtype || "summary", true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta name=\"twitter:site\" content=\"@g0v.tw\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" name=\"twitter:title\""+pug_attr("content", meta.title, true, true)) + "\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" name=\"twitter:description\""+pug_attr("content", meta.description, true, true)) + "\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta name=\"twitter:creator\" content=\"@g0v.tw\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" name=\"twitter:image\""+pug_attr("content", meta.thumbnail, true, true)) + "\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Clink rel=\"icon\" type=\"image\u002Fpng\" href=\"\u002Ffavicon.png\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]([
      {name: "bootstrap", path: "dist/css/bootstrap.min.css"},
      {name: "@loadingio/bootstrap.ext"},
      {name: "@loadingio/loading.css", path: "lite.min.css"},
      {name: "ldiconfont"},
      {name: "ldloader"},
      {name: "ldcover"},
      {name: "ldbutton"},
      {url: "/css/index.css"}
    ]);
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Clink rel=\"preconnect\" href=\"https:\u002F\u002Ffonts.googleapis.com\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"preconnect\" href=\"https:\u002F\u002Ffonts.gstatic.com\""+pug_attr("crossorigin", true, true, true)) + "\u003E";
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Noto+Sans+TC:wght@300;700&amp;family=Roboto&amp;display=swap\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "html,body{width:100%;margin:0;padding:0;font-family:'Noto Sans TC','Roboto',sans-serif;font-size:22px}\u003C\u002Fstyle\u003E";
;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 16;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "body{background:url(\"\u002Fassets\u002Fimg\u002Fstar.svg\") right bottom fixed no-repeat;background-size:350px}.sect{margin-bottom:4em}p{font-weight:200}.emoji{cursor:pointer;border:1px solid #dddedf;border-radius:.5em;box-shadow:0 1px 3px rgba(0,0,0,0.1);transition:background .15s ease-in-out}.emoji:hover{background:#edeeef}.emoji .icon{padding:.25em 1em}.emoji .icon div{width:40px;height:40px;background-position:center center;background-repeat:no-repeat;background-size:100% 100%}.emoji .count{flex:1 0 auto;justify-content:end;border-right:1px solid #dddedf;padding:.25em 1em;font-weight:700;font-size:1.66em;display:flex;align-items:center}.links .entry{display:flex;align-items:center}.links i{margin-right:.5em;color:#06b;font-size:.75em}.links .i-unlink{color:#b60}.btn-hero{color:#000;background:#fff;border-color:#000}.hero{height:100vh;font-size:16px;background-size:contain;background-color:#202123;background-image:url(\"\u002Fassets\u002Fimg\u002Fvisual-animated.svg\");background-repeat:no-repeat;background-position:left center}.hero .btn{font-size:1em}.hero-inner{width:50%;margin-left:43%;background:rgba(32,33,35,0.5);padding:10px;border-radius:1em}.hero-inner h1{transform:rotate(-4deg);display:inline-block}.hero-inner .btns{transform:rotate(4deg) translate(0,16px)}.hero-inner .btn-join{transform:rotate(8deg) translate(0,16px)}.footer{background:rgba(255,255,255,0.7)}@media(max-width:1024px){.hero{background-size:cover}.hero-inner{text-align:center;background:rgba(32,33,35,0.85);padding:1.5em;box-shadow:0 5px 10px rgba(0,0,0,0.3);left:0;right:0;width:90%;margin:auto}.hero-inner h1{transform:none;display:block}.hero-inner .btns{transform:none}.hero-inner .btn-join{transform:none}}.btn-list{display:flex;flex-wrap:wrap;gap:.75em}.vivid{color:#fff;background:#40e0d0;background-image:linear-gradient(90deg,#3b7,#16d,#3b7);background-size:300px 100px;animation:vivid 1s linear infinite;text-shadow:0 0 3px rgba(255,255,0,0.8)}.vivid:hover{color:#fff}@-moz-keyframes vivid{0%{background-position:0 0}100%{background-position:300px 0}}@-webkit-keyframes vivid{0%{background-position:0 0}100%{background-position:300px 0}}@-o-keyframes vivid{0%{background-position:0 0}100%{background-position:300px 0}}@keyframes vivid{0%{background-position:0 0}100%{background-position:300px 0}}\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_mixins["scope"].call({
block: function(){
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"navbar navbar-expand-lg navbar-light fixed-top\" ld=\"root\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"collapse navbar-collapse\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"ml-auto\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cul class=\"navbar-nav ml-4\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item dropdown mr-2 d-flex align-items-center\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn-group\" data-toggle=\"dropdown\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-sm btn-outline-secondary\" ld=\"lng\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "EN\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-sm btn-outline-secondary dropdown-toggle\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ci class=\"i-globe\" style=\"line-height:1em\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu dropdown-menu-right shadow-sm no-select\" style=\"min-width:0\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-item\" ld=\"set-lng\" data-name=\"en\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "EN\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-item\" ld=\"set-lng\" data-name=\"zh-TW\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "中\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item d-none\" ld=\"unauthed login\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "登入\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item d-none\" ld=\"unauthed signup\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "註冊\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item dropdown d-none\" ld=\"authed profile\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-sm btn-outline-dark bg-white dropdown-toggle d-flex align-items-center\" data-toggle=\"dropdown\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"avatar\" ld=\"avatar\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cspan class=\"ml-1\" ld=\"displayname\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-menu dropdown-menu-right shadow-sm\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002Fsettings\u002F\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"align-middle text-capitalize text-ellipsis\" ld=\"displayname\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "您好！\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm align-middle text-ellipsis\" ld=\"username\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "...\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-header\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "個人功能\u003C\u002Fdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002Fsettings\u002F\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "個人設定\u003C\u002Fa\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-header\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "進階功能\u003C\u002Fdiv\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" href=\"\u002Fadmin\u002F\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "管理頁面\u003C\u002Fa\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-item text-danger\" ld=\"logout\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "登出\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}, "navtop");
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 131;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"hero position-relative w-100 d-flex align-items-center justify-content-left\"\u003E";
;pug_debug_line = 132;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"hero-inner z-float text-white\"\u003E";
;pug_debug_line = 133;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 133;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 133;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "零宇宙大爆炸\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 134;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"pr-4\"\u003E";
;pug_debug_line = 134;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "地球曆 2022 年 10 月 23 日，g0v 零時政府準備度過十歲生日。散佈在各星系宇宙填坑打怪的零時空旅人們，將藉由「零宇宙大爆炸」穿越前往地球坐標 25.03, 121.54，在交會的時空中，見證從 ∅ (無) 的過去到 ∞ (無限大) 的未來！\u003C\u002Fp\u003E";
;pug_debug_line = 135;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_mixins["exbtn"] = pug_interp = function(link){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 136;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca" + (pug_attrs(pug_merge([{"class": "btn","href": pug_escape(link),"target": "_blank","rel": "noopener noreferrer"},attributes]), true)) + "\u003E";
;pug_debug_line = 137;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
block && block();
pug_html = pug_html + "\u003C\u002Fa\u003E";
};
;pug_debug_line = 139;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 140;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btns d-inline-block\"\u003E";
;pug_debug_line = 141;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mb-1\"\u003E";
;pug_debug_line = 141;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "想參與嗎？現在就提案：\u003C\u002Fdiv\u003E";
;pug_debug_line = 142;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn-list mb-2\"\u003E";
;pug_debug_line = 143;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_mixins["exbtn"].call({
block: function(){
;pug_debug_line = 143;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "短講";
},
attributes: {"class": "btn-hero"}
}, "https://forms.gle/bRSmmUAqSmd2ZbQK9");
;pug_debug_line = 144;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_mixins["exbtn"].call({
block: function(){
;pug_debug_line = 144;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "表演";
},
attributes: {"class": "btn-hero"}
}, "https://forms.gle/LCxF9BepH1mwxrYD6");
;pug_debug_line = 145;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_mixins["exbtn"].call({
block: function(){
;pug_debug_line = 145;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "開放工作坊";
},
attributes: {"class": "btn-hero"}
}, "https://forms.gle/RPyvNxtFSgE7Z8TD8");
;pug_debug_line = 146;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_mixins["exbtn"].call({
block: function(){
;pug_debug_line = 146;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "闖關小遊戲";
},
attributes: {"class": "btn-hero"}
}, "https://forms.gle/DVAVk4cAoDZbL8e7A");
;pug_debug_line = 147;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_mixins["exbtn"].call({
block: function(){
;pug_debug_line = 147;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "看闖關遊戲範例";
},
attributes: {"class": "vivid"}
}, "https://g0v.github.io/10v-points/");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 149;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 150;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn-join d-inline-block\"\u003E";
;pug_debug_line = 151;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mb-1\"\u003E";
;pug_debug_line = 151;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "想參與嗎？活動免費，現在就報名！：\u003C\u002Fdiv\u003E";
;pug_debug_line = 152;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn-list mb-2\"\u003E";
;pug_debug_line = 153;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_mixins["exbtn"].call({
block: function(){
;pug_debug_line = 153;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "前往活動報名頁面 KKTIX";
},
attributes: {"class": "vivid"}
}, "https://g0v-jothon.kktix.cc/events/g0v-hackath52n");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 155;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-1024 rwd mx-auto\"\u003E";
;pug_debug_line = 155;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 156;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col d-flex justify-content-center\"\u003E";
;pug_debug_line = 156;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 158;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_mixins["nbr"](2);
;pug_debug_line = 159;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-center\"\u003E";
;pug_debug_line = 160;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cimg style=\"width:128px;\" src=\"\u002Fassets\u002Fimg\u002Flogo\u002Fdraft.gif\"\u003E";
;pug_debug_line = 161;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch1 style=\"margin:-32px 0 1em\"\u003E";
;pug_debug_line = 161;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "零宇宙大爆炸\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 162;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 163;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sect\"\u003E";
;pug_debug_line = 164;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 164;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "地球曆上，g0v 零時政府從 0 走到 10，度過了十個公轉週期。宇宙曆上，零時空旅人從鄉民變身為沒有人，經歷了 53 次黑客松、4 次高峰會、100+ 小松與餐聚、∞ 次線上協作。並且穿梭在選舉監督、街頭抗爭、救災演習、環境保護、語言復振、教育翻轉、闢謠舉報、疫情協作的多重宇宙空間。地球曆 2022 年 10 月 23 日，g0v 零時政府準備度過十歲生日。散佈在各星系宇宙填坑打怪的零時空旅人們，將藉由「零宇宙大爆炸」穿越前往地球坐標 25.03, 121.54，在交會的時空中，見證從 ∅ (無) 的過去到 ∞ (無限大) 的未來！\u003C\u002Fp\u003E";
;pug_debug_line = 166;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 166;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "「零宇宙大爆炸」將以生日派對的形式，舉辦在台北的社會創新實驗中心，透過短講、表演、開放工作坊、闖關遊戲、和源力不絕的生日蛋糕與美食，我們邀請「沒有人」化身為「零時空旅人」一同來回顧 g0v 的第一個十年，並且想像第二個、第三個、第 n 個十年！\u003C\u002Fp\u003E";
;pug_debug_line = 168;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 169;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 169;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "主辦單位：零時政府零宇宙艦隊\u003C\u002Fli\u003E";
;pug_debug_line = 170;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 170;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "協辦單位：社會創新實驗中心、g0v 零時政府揪松團\u003C\u002Fli\u003E";
;pug_debug_line = 171;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 171;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "活動時間：2022\u002F10\u002F23，早上 11 點到下午 5 點\u003C\u002Fli\u003E";
;pug_debug_line = 172;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 172;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "活動地點：社會創新實驗中心 (台北市大安區仁愛路三段99號)\u003C\u002Fli\u003E";
;pug_debug_line = 173;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 174;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 174;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "活動內容：\u003C\u002Fdiv\u003E";
;pug_debug_line = 175;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 177;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 177;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "聽短講／看表演／吃美食／聊社群的 #零宇宙\u003C\u002Fli\u003E";
;pug_debug_line = 178;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 178;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "穿梭過去、現在、未來的零時政府互動展 #∅時空穿梭\u003C\u002Fli\u003E";
;pug_debug_line = 179;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 179;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "每一個 Unconf 都是一個宇宙的 #∅時多重宇宙\u003C\u002Fli\u003E";
;pug_debug_line = 180;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 180;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "親子同樂，孕育未來的沒有人的 #超新星遊樂園\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 181;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 182;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 182;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "報名連結： ";
;pug_debug_line = 182;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fg0v-jothon.kktix.cc\u002Fevents\u002Fg0v-hackath52n\"\u003E";
;pug_debug_line = 182;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "https:\u002F\u002Fg0v-jothon.kktix.cc\u002Fevents\u002Fg0v-hackath52n\u003C\u002Fa\u003E";
;pug_debug_line = 182;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 183;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 183;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "本活動為";
;pug_debug_line = 183;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"text-danger\"\u003E";
;pug_debug_line = 183;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "免費參加\u003C\u002Fspan\u003E";
;pug_debug_line = 183;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "，名額有限別錯過囉！\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 184;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-center\"\u003E";
;pug_debug_line = 185;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"btn btn-lg vivid\" href=\"https:\u002F\u002Fg0v-jothon.kktix.cc\u002Fevents\u002Fg0v-hackath52n\" target=\"_blank\" rel=\"noopener noreferrer\"\u003E";
;pug_debug_line = 186;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "點我前往 KKTIX 活動報名頁面\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 188;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_mixins["nbr"](3);
;pug_debug_line = 191;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sect\"\u003E";
;pug_debug_line = 192;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 192;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "交通資訊\u003C\u002Fh3\u003E";
;pug_debug_line = 193;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 193;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "社會創新實驗中心 有兩處入口：\u003C\u002Fp\u003E";
;pug_debug_line = 194;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 195;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 195;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "台北市大安區忠孝東路三段248巷 (捷運忠孝復興站走路6分鐘)\u003C\u002Fli\u003E";
;pug_debug_line = 196;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 196;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "台北市大安區仁愛路三段99號 (捷運大安站走路10分鐘)\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 197;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ciframe src=\"https:\u002F\u002Fwww.google.com\u002Fmaps\u002Fembed?pb=!1m18!1m12!1m3!1d3614.8656609465384!2d121.53875451444651!3d25.03863268397022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a983817f600d%3A0xa055f2f16c67c77d!2z56S-5pyD5Ym15paw5a-m6amX5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1662263775538!5m2!1szh-TW!2stw\" width=\"100%\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\u003E\u003C\u002Fiframe\u003E";
;pug_debug_line = 198;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cimg class=\"w-100 rwd\" src=\"\u002Fassets\u002Fimg\u002Fmap.png\"\u003E";
;pug_debug_line = 199;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 200;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 200;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "活動場地圖 ( 點擊看大圖 )\u003C\u002Fh4\u003E";
;pug_debug_line = 201;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Fassets\u002Fimg\u002Fspace-lg.png\"\u003E";
;pug_debug_line = 201;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cimg class=\"w-100\" src=\"\u002Fassets\u002Fimg\u002Fspace.png\"\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 202;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sect\"\u003E";
;pug_debug_line = 203;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 203;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "沒有人一起來辦生日趴\u003C\u002Fh2\u003E";
;pug_debug_line = 204;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 205;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 205;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "#零宇宙大爆炸短講、表演、開放工作坊、闖關小遊戲熱情徵件中！即日起至 9\u002F19 截止！\u003C\u002Fp\u003E";
;pug_debug_line = 207;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex g-2 mb-2\"\u003E";
;pug_debug_line = 208;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"btn btn-primary\" href=\"https:\u002F\u002Fforms.gle\u002FbRSmmUAqSmd2ZbQK9\" target=\"_blank\" rel=\"noopener noreferrer\"\u003E";
;pug_debug_line = 208;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "提案「短講」\u003C\u002Fa\u003E";
;pug_debug_line = 209;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"btn btn-primary\" href=\"https:\u002F\u002Fforms.gle\u002FLCxF9BepH1mwxrYD6\" target=\"_blank\" rel=\"noopener noreferrer\"\u003E";
;pug_debug_line = 209;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "提案「表演」\u003C\u002Fa\u003E";
;pug_debug_line = 210;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"btn btn-primary\" href=\"https:\u002F\u002Fforms.gle\u002FRPyvNxtFSgE7Z8TD8\" target=\"_blank\" rel=\"noopener noreferrer\"\u003E";
;pug_debug_line = 210;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "提案「開放工作坊」\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 211;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex g-2 mb-2\"\u003E";
;pug_debug_line = 212;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"btn btn-primary\" href=\"https:\u002F\u002Fforms.gle\u002FDVAVk4cAoDZbL8e7A\" target=\"_blank\" rel=\"noopener noreferrer\"\u003E";
;pug_debug_line = 212;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "提案「闖關小遊戲」\u003C\u002Fa\u003E";
;pug_debug_line = 213;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"btn vivid\" href=\"https:\u002F\u002Fg0v.github.io\u002F10v-points\u002F\" target=\"_blank\" rel=\"noopener noreferrer\"\u003E";
;pug_debug_line = 213;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "看闖關小遊戲範例\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 217;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sect\"\u003E";
;pug_debug_line = 218;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 218;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "什麼是 g0v 零時政府\u003C\u002Fh2\u003E";
;pug_debug_line = 219;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 220;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 220;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "2012 年以來，公民黑客運動風起雲湧。以開放透明、公民參與為號召的 g0v 台灣零時政府社群在 2012 年底號召了第一場活動「第零次動員戡亂黑客松」，以「寫程式改造社會」為口號，從此公民黑客之火開始延燒，至今未歇。\u003C\u002Fp\u003E";
;pug_debug_line = 221;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 221;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "八年間，在上千位參與者集體的貢獻下，透過一場場黑客松，打造出多項以開放資料、開放政府為精神的資訊平台，以縮短數位落差為初衷，降低公民參與門檻，使得議題審議可立基在具體事實，也提升理性討論公共事務的意識。\u003C\u002Fp\u003E";
;pug_debug_line = 222;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 222;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "在這場開放資料、開放政府的運動中，g0v 社群也開創出台灣公民社會與政府互動的新模式。\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 224;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sect\"\u003E";
;pug_debug_line = 225;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 225;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "我也想一起來辦趴\u003C\u002Fh2\u003E";
;pug_debug_line = 226;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 227;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 227;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "加入 g0v： ";
;pug_debug_line = 227;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fg0v-tw.slack.com\u002Fintl\u002Fzh-tw\u002Fjoin\u002Fshared_invite\u002Fzt-1dvm0vok1-Mbxl2F5n_186QXmppslfjQ#\u002Fshared-invite\u002Femail\" target=\"_blank\" rel=\"noopener noreferrer\"\u003E";
;pug_debug_line = 227;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "https:\u002F\u002Fg0v-tw.slack.com\u002Fintl\u002Fzh-tw\u002Fjoin\u002Fshared_invite\u002Fzt-1dvm0vok1-Mbxl2F5n_186QXmppslfjQ#\u002Fshared-invite\u002Femail\u003C\u002Fa\u003E";
;pug_debug_line = 227;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fp\u003E";
;pug_debug_line = 228;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 228;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "在 ";
;pug_debug_line = 228;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ccode\u003E";
;pug_debug_line = 228;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "#10th-anniversary\u003C\u002Fcode\u003E";
;pug_debug_line = 228;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + " 頻道就可以找到我們。\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 237;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 p-4 footer\"\u003E";
;pug_debug_line = 238;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-1024 rwd mx-auto\"\u003E";
;pug_debug_line = 239;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 240;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex g-4 align-items-end justify-content-center flex-wrap\"\u003E";
;pug_debug_line = 241;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"font-weight-bold\"\u003E";
;pug_debug_line = 241;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "零宇宙大爆炸\u003C\u002Fdiv\u003E";
;pug_debug_line = 242;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm\"\u003E";
;pug_debug_line = 242;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "主辦 \u002F 零時政府零宇宙艦隊\u003C\u002Fdiv\u003E";
;pug_debug_line = 243;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm\"\u003E";
;pug_debug_line = 243;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "協辦 \u002F 社會創新實驗中心、g0v零時政府揪松團\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 244;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-center text-sm flex-wrap\"\u003E";
;pug_debug_line = 245;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"m-2 entry\"\u003E";
;pug_debug_line = 245;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 245;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-link\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 245;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 245;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fg0v.hackmd.io\u002F@eaKkAb8HRjOKJ4erd2STnA\u002F10Anni-Party\u002Fhttps%3A%2F%2Fg0v.hackmd.io%2FMpTtG8xSTwqS6TlCM-b6VA\"\u003E";
;pug_debug_line = 245;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "生日趴總表\u003C\u002Fa\u003E";
;pug_debug_line = 245;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 246;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"m-2 entry\"\u003E";
;pug_debug_line = 246;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 246;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-link mr-1\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 246;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 246;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Fphoto\u002F\"\u003E";
;pug_debug_line = 246;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "照片牆\u003C\u002Fa\u003E";
;pug_debug_line = 246;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 247;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"m-2 entry\"\u003E";
;pug_debug_line = 247;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 247;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-unlink mr-1\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 247;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 247;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 247;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "活動報名\u003C\u002Fa\u003E";
;pug_debug_line = 247;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 248;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"m-2 entry\"\u003E";
;pug_debug_line = 248;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 248;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-unlink mr-1\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 248;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 248;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 248;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Call for Projects\u003C\u002Fa\u003E";
;pug_debug_line = 248;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 249;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"m-2 entry\"\u003E";
;pug_debug_line = 249;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 249;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-unlink mr-1\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 249;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 249;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 249;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "線上參與\u003C\u002Fa\u003E";
;pug_debug_line = 249;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 250;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"m-2 entry\"\u003E";
;pug_debug_line = 250;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 250;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-unlink mr-1\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 250;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 250;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 250;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "時間軸\u003C\u002Fa\u003E";
;pug_debug_line = 250;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 251;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"m-2 entry\"\u003E";
;pug_debug_line = 251;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 251;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-unlink mr-1\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 251;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 251;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 251;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "購買 NFT\u003C\u002Fa\u003E";
;pug_debug_line = 251;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]([
      {name: "i18next", path: "dist/umd/i18next.min.js"},
      {name: "i18next-browser-languagedetector", path: "dist/umd/i18nextBrowserLanguageDetector.min.js"},
      {name: "bootstrap.native", path: "dist/bootstrap-native-v4.min.js"},
      {name: "proxise"},
      {name: "@loadingio/ldquery"},
      {name: "@loadingio/debounce.js"},
      {name: "@loadingio/ldc"},
      {name: "zmgr"},
      {name: "ldview"},
      {name: "ldcover"},
      {name: "ldcvmgr"},
      {name: "lderror"},
      {name: "ldloader"},
      {name: "@plotdb/semver"},
      {name: "@plotdb/rescope"},
      {name: "@plotdb/csscope"},
      {name: "@plotdb/block"},
      {name: "@servebase/auth"},
      {name: "@servebase/consent"},
      {name: "@servebase/captcha"},
      {name: "@servebase/core"},
      {name: "@servebase/navtop"},
      {name: "@servebase/connector"},
      {name: "@plotdb/suuid", path: "index.bundle.min.js"},
      {name: "@plotdb/json0", path: "json0.min.js"},
      {name: "@plotdb/ews", path: "sharedb.min.js"},
      {name: "@plotdb/ews"},
      {name: "@plotdb/ews", path: "sdb-client.min.js"},
      {name: "@plotdb/datahub", path: "datahub.min.js"},
      {name: "@plotdb/datahub", path: "sharehub.min.js"},
      {url: "/js/site.min.js"}
    ]);
;pug_debug_line = 85;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 255;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"module\"\u003E";
;pug_debug_line = 255;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "(function(n){return n.apply({})})(function(){var n,a,t=this;n=function(){return t.view.render()};a=new connector({init:function(){return this.hub=new sharehub({ews:this.ws,initConnect:false,watch:n,create:function(){return{}}})},reconnect:function(){return this.hub.connect({id:\"landing\"})},ldcv:function(n){return ldcvmgr.toggle({ns:\"local\",name:\"offline-retry\"},n,{ws:this.ws})}});return a.init().then(function(){var n,u;n=[{name:\"10\",key:\"10\"},{name:\"food\",key:\"food\"},{name:\"g0v\",key:\"g0v\"},{name:\"jothon\",key:\"jothon\"},{name:\"love\",key:\"love\"},{name:\"party\",key:\"party\"}];return t.view=u=new ldview({root:document.body,handler:{emoji:{list:function(){return n},key:function(n){return n.key},view:{action:{click:{\"@\":function(n){var t,e,r,o,i;t=n.ctx;e=JSON.parse(JSON.stringify(r=a.hub.get()));((o=e.data||(e.data={}))[i=t.key]||(o[i]={})).count=(((o=e.data||(e.data={}))[i=t.key]||(o[i]={})).count||0)+1;a.hub.opsOut(json0.diff(r,e));return u.render()}}},text:{count:function(n){var t;t=n.ctx;return(((a.hub.get()||{}).data||{})[t.key]||{}).count||0}},handler:{icon:function(n){var t,e;t=n.node,e=n.ctx;return t.style.backgroundImage=\"url(\u002Fassets\u002Fimg\u002Femoji\u002F\"+e.key+\".gif)\"}}}},\"tip-root\":function(n){var t;t=n.node;return t.classList.toggle(\"tip-on\",true)}}})})});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "b64img" in locals_for_with ?
        locals_for_with.b64img :
        typeof b64img !== 'undefined' ? b64img : undefined, "blockLoader" in locals_for_with ?
        locals_for_with.blockLoader :
        typeof blockLoader !== 'undefined' ? blockLoader : undefined, "c" in locals_for_with ?
        locals_for_with.c :
        typeof c !== 'undefined' ? c : undefined, "cssLoader" in locals_for_with ?
        locals_for_with.cssLoader :
        typeof cssLoader !== 'undefined' ? cssLoader : undefined, "decache" in locals_for_with ?
        locals_for_with.decache :
        typeof decache !== 'undefined' ? decache : undefined, "defer" in locals_for_with ?
        locals_for_with.defer :
        typeof defer !== 'undefined' ? defer : undefined, "escape" in locals_for_with ?
        locals_for_with.escape :
        typeof escape !== 'undefined' ? escape : undefined, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "meta" in locals_for_with ?
        locals_for_with.meta :
        typeof meta !== 'undefined' ? meta : undefined, "parentName" in locals_for_with ?
        locals_for_with.parentName :
        typeof parentName !== 'undefined' ? parentName : undefined, "prefix" in locals_for_with ?
        locals_for_with.prefix :
        typeof prefix !== 'undefined' ? prefix : undefined, "scriptLoader" in locals_for_with ?
        locals_for_with.scriptLoader :
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 