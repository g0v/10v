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
    
    (function (Array, JSON, b64img, blockLoader, c, cssLoader, decache, defer, escape, libLoader, parentName, prefix, scriptLoader, url, version) {
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









;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";








;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var b64img = {};
;pug_debug_line = 50;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAIA"
;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var loremtext = {
  zh: "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
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
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
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
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 3;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "html,body{width:100%;height:100%;margin:0;padding:0}.emoji{cursor:pointer;border:1px solid #dddedf;border-radius:.5em;box-shadow:0 1px 3px rgba(0,0,0,0.1);transition:background .15s ease-in-out}.emoji:hover{background:#edeeef}.emoji .icon{padding:.25em 1em}.emoji .icon div{width:40px;height:40px;background-position:center center;background-repeat:no-repeat;background-size:100% 100%}.emoji .count{flex:1 0 auto;justify-content:end;border-right:1px solid #dddedf;padding:.25em 1em;font-weight:700;font-size:1.66em;display:flex;align-items:center}.links .entry{display:flex;align-items:center}.links i{margin-right:.5em;color:#06b;font-size:.75em}.links .i-unlink{color:#b60}\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
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
pug_html = pug_html + "???\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item d-none\" ld=\"unauthed login\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "??????\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item d-none\" ld=\"unauthed signup\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "??????\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
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
pug_html = pug_html + "?????????\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-sm align-middle text-ellipsis\" ld=\"username\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "...\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-header\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "????????????\u003C\u002Fdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002Fsettings\u002F\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "????????????\u003C\u002Fa\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-header\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "????????????\u003C\u002Fdiv\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Ca class=\"dropdown-item\" href=\"\u002Fadmin\u002F\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "????????????\u003C\u002Fa\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv class=\"dropdown-item text-danger\" ld=\"logout\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "??????\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}, "navtop");
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 45;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-1024 rwd mx-auto h-100 d-flex align-items-center justify-content-center\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex w-100\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1 w-50 d-flex justify-content-center\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 49;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cimg style=\"margin-top:-32px;width:128px;\" src=\"\u002Fassets\u002Fimg\u002Flogo\u002Fdraft.gif\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 50;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-lg links\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mb-1 entry\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-link\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 53;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fg0v.hackmd.io\u002F@eaKkAb8HRjOKJ4erd2STnA\u002F10Anni-Party\u002Fhttps%3A%2F%2Fg0v.hackmd.io%2FMpTtG8xSTwqS6TlCM-b6VA\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???????????????\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 54;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-muted text-sm mt-4\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Csmall\u003E";
;pug_debug_line = 54;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Coming Soon\u003C\u002Fsmall\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 55;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 56;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mb-1 entry\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 56;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-unlink\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 56;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 56;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "????????????\u003C\u002Fa\u003E";
;pug_debug_line = 56;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 57;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mb-1 entry\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 57;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-unlink\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 57;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 57;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "Call for Porjects\u003C\u002Fa\u003E";
;pug_debug_line = 57;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 58;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mb-1 entry\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 58;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-unlink\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 58;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 58;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "????????????\u003C\u002Fa\u003E";
;pug_debug_line = 58;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 59;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mb-1 entry\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 59;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-unlink\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 59;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 59;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "?????????\u003C\u002Fa\u003E";
;pug_debug_line = 59;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 60;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mb-1 entry\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 60;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"i-unlink\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 60;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 60;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "?????? NFT\u003C\u002Fa\u003E";
;pug_debug_line = 60;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 61;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1 d-flex align-items-center justify-content-center w-50\"\u003E";
;pug_debug_line = 62;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"has-tips manual\" ld=\"tip-root\"\u003E";
;pug_debug_line = 63;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"hover-tip top mb-3\"\u003E";
;pug_debug_line = 63;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "?????????\u003C\u002Fdiv\u003E";
;pug_debug_line = 65;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"emoji d-flex align-items-center mb-3\" ld-each=\"emoji\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"count\" ld=\"count\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ld ld-spin ld-spinner\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 67;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"icon\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv ld=\"icon\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
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
;pug_debug_line = 56;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fg0v\u002F10v\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 71;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"module\"\u003E";
;pug_debug_line = 71;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
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
        typeof libLoader !== 'undefined' ? libLoader : undefined, "parentName" in locals_for_with ?
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