 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Array, JSON, b64img, blockLoader, c, cssLoader, decache, defer, escape, libLoader, meta, parentName, prefix, scriptLoader, staffs, url, version) {
      pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
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

pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

};
pug_mixins["css"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
    }
  }
}).call(this);

};
pug_html = pug_html + "\u003Chtml\u003E";
if (!(libLoader || scriptLoader)) {
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
if(!decache) { decache = (version? "?v=" + version : ""); }
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
scriptLoader.config = (config ? config : {});
if (!scriptLoader.url[url]) {
scriptLoader.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
if(!cssLoader) { cssLoader = {url: {}}; }
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
cssLoader.config = (config ? config : {});
if (!cssLoader.url[url]) {
cssLoader.url[url] = true;
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }







}
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
function ellipsis(str, len) {
  return ((str || '').substring(0, len || 200) + (((str || '').length > (len || 200)) ? '...' : ''));
}

pug_mixins["nbr"] = pug_interp = function(count){
var block = (this && this.block), attributes = (this && this.attributes) || {};
for (var i = 0; i < count; i++)
{
pug_html = pug_html + "\u003Cbr\u003E";
}
};






var b64img = {};
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAIA"
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};













prefix = function(n) { return (!n?[]:(Array.isArray(n)?n:[n])).map(function(it){ return `${prefix.currentName}$${it}`; }).join(' ');}
pug_mixins["scope"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var prentName = prefix.currentName;
prefix.currentName = name;
if (attributes.class && /naked-scope/.exec(attributes.class)) {
block && block();
}
else {
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"ld-scope": pug_escape(name || '')},attributes]), true)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
prefix.currentName = parentName;
};






pug_html = pug_html + "\u003Chead\u003E\u003Cmeta charset=\"utf-8\"\u003E";
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
pug_html = pug_html + "\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0\"\u003E\u003Cmeta" + (" property=\"og:url\""+pug_attr("content", meta.url, true, true)) + "\u003E\u003Cmeta" + (" name=\"description\""+pug_attr("content", meta.description, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:title\""+pug_attr("content", meta.title, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:description\""+pug_attr("content", meta.description, true, true)) + "\u003E\u003Cmeta property=\"og:locale\" content=\"zh_TW\"\u003E\u003Cmeta" + (" property=\"og:image\""+pug_attr("content", meta.thumbnail, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:image:type\""+pug_attr("content", meta.thumb.type || "image/jpeg", true, true)) + "\u003E\u003Cmeta" + (" property=\"og:image:width\""+pug_attr("content", meta.thumb.width || "1200", true, true)) + "\u003E\u003Cmeta" + (" property=\"og:image:height\""+pug_attr("content", meta.thumb.height || "630", true, true)) + "\u003E\u003Cmeta" + (" property=\"og:type\""+pug_attr("content", meta.ogtype || "website", true, true)) + "\u003E\u003Cmeta" + (" name=\"twitter:card\""+pug_attr("content", meta.twtcardtype || "summary", true, true)) + "\u003E\u003Cmeta name=\"twitter:site\" content=\"@g0v.tw\"\u003E\u003Cmeta" + (" name=\"twitter:title\""+pug_attr("content", meta.title, true, true)) + "\u003E\u003Cmeta" + (" name=\"twitter:description\""+pug_attr("content", meta.description, true, true)) + "\u003E\u003Cmeta name=\"twitter:creator\" content=\"@g0v.tw\"\u003E\u003Cmeta" + (" name=\"twitter:image\""+pug_attr("content", meta.thumbnail, true, true)) + "\u003E\u003Clink rel=\"icon\" type=\"image\u002Fpng\" href=\"\u002Ffavicon.png\"\u003E";
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
pug_html = pug_html + "\u003Clink rel=\"preconnect\" href=\"https:\u002F\u002Ffonts.googleapis.com\"\u003E\u003Clink" + (" rel=\"preconnect\" href=\"https:\u002F\u002Ffonts.gstatic.com\""+pug_attr("crossorigin", true, true, true)) + "\u003E\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Noto+Sans+TC:wght@300;700&amp;family=Roboto&amp;display=swap\" rel=\"stylesheet\"\u003E\u003Cstyle type=\"text\u002Fcss\"\u003Ehtml,body{width:100%;margin:0;padding:0;font-family:'Noto Sans TC','Roboto',sans-serif;font-size:22px}\u003C\u002Fstyle\u003E\u003Cstyle type=\"text\u002Fcss\"\u003Ebody{background:url(\"\u002Fassets\u002Fimg\u002Fstar.svg\") right bottom fixed no-repeat;background-size:350px}.sect{margin-bottom:4em}p{font-weight:200}.emoji{cursor:pointer;border:1px solid #dddedf;border-radius:.5em;box-shadow:0 1px 3px rgba(0,0,0,0.1);transition:background .15s ease-in-out}.emoji:hover{background:#edeeef}.emoji .icon{padding:.25em 1em}.emoji .icon div{width:40px;height:40px;background-position:center center;background-repeat:no-repeat;background-size:100% 100%}.emoji .count{flex:1 0 auto;justify-content:end;border-right:1px solid #dddedf;padding:.25em 1em;font-weight:700;font-size:1.66em;display:flex;align-items:center}.links .entry{display:flex;align-items:center}.links i{margin-right:.5em;color:#06b;font-size:.75em}.links .i-unlink{color:#b60}.btn-hero{color:#000;background:#fff;border-color:#000}.hero{height:100vh;font-size:16px;background-size:contain;background-color:#202123;background-image:url(\"\u002Fassets\u002Fimg\u002Fvisual-animated.svg\");background-repeat:no-repeat;background-position:left center}.hero .btn{font-size:1em}.hero-inner{width:50%;margin-left:43%;background:rgba(32,33,35,0.5);padding:10px;border-radius:1em}.hero-inner h1{transform:rotate(-4deg) translate(0,-16px);display:inline-block}.hero-inner .btns{transform:rotate(4deg) translate(0,16px)}.hero-inner .btn-join{transform:rotate(4deg) translate(0,4px)}.footer{background:rgba(255,255,255,0.7)}@media(max-width:1024px){.hero{background-size:cover}.hero-inner{text-align:center;background:rgba(32,33,35,0.85);padding:1.5em;box-shadow:0 5px 10px rgba(0,0,0,0.3);left:0;right:0;width:90%;margin:auto}.hero-inner h1{transform:none;display:block}.hero-inner .btns{transform:none}.hero-inner .btn-join{transform:none}}.btn-list{display:flex;flex-wrap:wrap;gap:.75em}.vivid{color:#fff;background:#40e0d0;background-image:linear-gradient(90deg,#3b7,#16d,#3b7);background-size:300px 100px;animation:vivid 1s linear infinite;text-shadow:0 0 3px rgba(255,255,0,0.8)}.vivid:hover{color:#fff}@-moz-keyframes vivid{0%{background-position:0 0}100%{background-position:300px 0}}@-webkit-keyframes vivid{0%{background-position:0 0}100%{background-position:300px 0}}@-o-keyframes vivid{0%{background-position:0 0}100%{background-position:300px 0}}@keyframes vivid{0%{background-position:0 0}100%{background-position:300px 0}}\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E";
pug_mixins["scope"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv class=\"navbar navbar-expand-lg navbar-light fixed-top\" ld=\"root\"\u003E\u003Cdiv class=\"collapse navbar-collapse\"\u003E\u003Cdiv class=\"ml-auto\"\u003E\u003Cul class=\"navbar-nav ml-4\"\u003E\u003Cli class=\"nav-item dropdown mr-2 d-flex align-items-center\"\u003E\u003Cdiv class=\"btn-group\" data-toggle=\"dropdown\"\u003E\u003Cdiv class=\"btn btn-sm btn-outline-secondary dropdown-toggle\"\u003E\u003Ci class=\"i-globe\" style=\"line-height:1em\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-menu dropdown-menu-right shadow-sm no-select\" style=\"min-width:0\"\u003E\u003Ca class=\"dropdown-item\" href=\"\u002Fintl\u002Fen\u002F\" ld=\"set-lng\" data-name=\"en\"\u003EEN\u003C\u002Fa\u003E\u003Ca class=\"dropdown-item\" href=\"\u002F\" ld=\"set-lng\" data-name=\"zh-TW\"\u003E中\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-item d-none\" ld=\"unauthed login\"\u003E\u003Ca class=\"nav-link\"\u003E登入\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-item d-none\" ld=\"unauthed signup\"\u003E\u003Ca class=\"nav-link\"\u003E註冊\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-item dropdown d-none\" ld=\"authed profile\"\u003E\u003Cdiv class=\"btn btn-sm btn-outline-dark bg-white dropdown-toggle d-flex align-items-center\" data-toggle=\"dropdown\"\u003E\u003Cdiv class=\"avatar\" ld=\"avatar\"\u003E\u003C\u002Fdiv\u003E\u003Cspan class=\"ml-1\" ld=\"displayname\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-menu dropdown-menu-right shadow-sm\"\u003E\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002Fsettings\u002F\"\u003E\u003Cdiv class=\"align-middle text-capitalize text-ellipsis\" ld=\"displayname\"\u003E您好！\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm align-middle text-ellipsis\" ld=\"username\"\u003E...\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-header\"\u003E個人功能\u003C\u002Fdiv\u003E\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002Fsettings\u002F\"\u003E個人設定\u003C\u002Fa\u003E\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-header\"\u003E進階功能\u003C\u002Fdiv\u003E\u003Ca class=\"dropdown-item\" href=\"\u002Fadmin\u002F\"\u003E管理頁面\u003C\u002Fa\u003E\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-item text-danger\" ld=\"logout\"\u003E登出\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}, "navtop");
pug_html = pug_html + "\u003Cdiv class=\"hero position-relative w-100 d-flex align-items-center justify-content-left\"\u003E\u003Cdiv class=\"hero-inner z-float text-white\"\u003E\u003Cdiv\u003E\u003Ch1\u003EThe Explosion of the g0verse!\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E\u003Cp class=\"pr-4\"\u003EOn October 23rd 2022 of the Earth Calendar, g0v is hosting its 10th birthday party. The 0-time travelers from across the metaverse are meeting at the terrestrial location with longitude and latitude of 25.03, 121.54 to celebrate the explosion of the g0verse and witness the transition from ∅ (zero) to ∞ (infinite)!\u003C\u002Fp\u003E";
pug_mixins["exbtn"] = pug_interp = function(link){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ca" + (pug_attrs(pug_merge([{"class": "btn","href": pug_escape(link),"target": "_blank","rel": "noopener noreferrer"},attributes]), true)) + "\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fa\u003E";
};
pug_html = pug_html + "\u003Cdiv\u003E\u003Cdiv class=\"btn-join d-inline-block\"\u003E\u003Cdiv class=\"mb-1\"\u003ESign up here:\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn-list mb-2\"\u003E";
pug_mixins["exbtn"].call({
block: function(){
pug_html = pug_html + "KKTIX Event Sign Up Page";
},
attributes: {"class": "vivid"}
}, "https://g0v-jothon.kktix.cc/events/g0v-hackath52n");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"w-1024 rwd mx-auto\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col d-flex justify-content-center\"\u003E\u003Cdiv\u003E";
pug_mixins["nbr"](2);
pug_html = pug_html + "\u003Cdiv class=\"text-center\"\u003E\u003Cimg style=\"width:128px;\" src=\"\u002Fassets\u002Fimg\u002Flogo\u002Fdraft.gif\"\u003E\u003Ch1 style=\"margin:-32px 0 1em\"\u003EThe Explosion of the g0verse!\u003C\u002Fh1\u003E\u003Cdiv class=\"text-center d-flex g-2 justify-content-center\"\u003E\u003Ca class=\"btn btn-outline-secondary shadow-sm\" href=\"https:\u002F\u002F10th.g0v.tw\u002Fg0v-timeline\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Eg0v timeline\u003C\u002Fa\u003E\u003Ca class=\"btn btn-outline-secondary shadow-sm\" href=\"https:\u002F\u002Fg0v.github.io\u002F10v-points\u002F\" target=\"_blank\" rel=\"noopener noreferrer\"\u003E10v points\u003C\u002Fa\u003E\u003Ca class=\"btn btn-outline-secondary shadow-sm\" href=\"https:\u002F\u002Fwww.youtube.com\u002Fc\u002Fg0vTW\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Elive streaming\u003C\u002Fa\u003E\u003Ca class=\"btn btn-outline-secondary shadow-sm\" href=\"\u002Fagenda\" target=\"_blank\" rel=\"noopener noreferrer\"\u003EAgenda\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Chr\u003E\u003Cdiv class=\"sect\"\u003E\u003Cp\u003EAccording to the rhythm of the earth, g0v has gone from 0 to 10 and has lived through 10 rotations of the earth around the sun. According to the rhythm of the universe, the 0-time travelers have transformed from netizens to “nobodies”, have gone through 53 hackathons, 4 summits, over 100 small hackathons and events, and infinite instances of online collaboration. These nobodies have popped up all across the multiverse to help monitor elections, participate in protests, help prepare for natural disasters, protect the environment, revitalize minority languages, promote education reform, dispel and report rumors and collaborate during the pandemic. On October 23rd 2022 of the Earth Calendar, g0v is hosting its 10th birthday party. The 0-time travelers from across the metaverse are meeting at the terrestrial location with longitude and latitude of 25.03, 121.54 to celebrate the explosion of the zero-verse and witness the transition from ∅ (zero) to ∞ (infinite)!\u003C\u002Fp\u003E\u003Cp\u003E“The explosion of the g0verse” is styled like a birthday party for the g0v community, and it will be hosted in Taipei’s Social Innovation Lab. Through lightning talks, performances, open workshops, games and endless cake and food, we invite all “nobodies” to reflect on the first 10 years of g0v and to think about the 2nd, 3rd, and nth 10 years of the community!\u003C\u002Fp\u003E\u003Cul\u003E\u003Cli\u003EHost: The g0verse Crew\u003C\u002Fli\u003E\u003Cli\u003ECo-organizers: Social Innovation Lab, g0v jothon\u003C\u002Fli\u003E\u003Cli\u003ETime: 2022\u002F10\u002F12, 11am-5pm\u003C\u002Fli\u003E\u003Cli\u003ELocation: Social Innovation Lab (No. 99, Sec. 3, Ren’ai Rd., Da’an Dist., Taipei City)\u003C\u002Fli\u003E\u003Cli\u003E\u003Cdiv\u003EAgenda:\u003C\u002Fdiv\u003E\u003Cul\u003E\u003Cli\u003Etalks \u002F shows \u002F foods \u002F chit-chating \u002F g0verse\u003C\u002Fli\u003E\u003Cli\u003Efrom past to future about g0v\u003C\u002Fli\u003E\u003Cli\u003Em0ltiverse of unconference\u003C\u002Fli\u003E\u003Cli\u003Ekindergarten of our future supernova\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Cdiv\u003ESign up here: https:\u002F\u002Fg0v-jothon.kktix.cc\u002Fevents\u002Fg0v-hackath52n\u003C\u002Fdiv\u003E\u003Cdiv\u003EThis event is free. Sign up before tickets run out!\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-center\"\u003E\u003Ca class=\"btn btn-lg vivid\" href=\"https:\u002F\u002Fg0v-jothon.kktix.cc\u002Fevents\u002Fg0v-hackath52n\" target=\"_blank\" rel=\"noopener noreferrer\"\u003EKKTIX Event Sign Up Page\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
pug_mixins["nbr"](3);
pug_html = pug_html + "\u003Cdiv class=\"sect\"\u003E\u003Ch3\u003ETransportation and Map\u003C\u002Fh3\u003E\u003Cp\u003ETwo entrances of Social Innovation Lab\u003C\u002Fp\u003E\u003Cul\u003E\u003Cli\u003ELane 248, Section 3, Zhongxiao E Rd, Da’an District, Taipei, Taiwan (6 mins from MRT Zhongxiao Fuxing Station)\u003C\u002Fli\u003E\u003Cli\u003ENo. 99, Section 3, Ren'ai Rd, Da’an District, Taipei, Taiwan (10 mins from MRT Daan Station\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Ciframe src=\"https:\u002F\u002Fwww.google.com\u002Fmaps\u002Fembed?pb=!1m18!1m12!1m3!1d3614.8656609465384!2d121.53875451444651!3d25.03863268397022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a983817f600d%3A0xa055f2f16c67c77d!2z56S-5pyD5Ym15paw5a-m6amX5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1662263775538!5m2!1szh-TW!2stw\" width=\"100%\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\u003E\u003C\u002Fiframe\u003E\u003Cimg class=\"w-100 rwd\" src=\"\u002Fassets\u002Fimg\u002Fmap.png\"\u003E\u003Cbr\u003E\u003Ch4\u003EEvent Venue\u003C\u002Fh4\u003E\u003Ca href=\"\u002Fassets\u002Fimg\u002Fspace-lg.png\"\u003E\u003Cimg class=\"w-100\" src=\"\u002Fassets\u002Fimg\u002Fspace.png\"\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"sect\"\u003E\u003Ch2\u003EWhat is g0v\u003C\u002Fh2\u003E\u003Chr\u003E\u003Cp\u003ESince 2012, the civic hacker movement has risen up. Calling for transparency and public participation, the g0v community hosted its first hackathon in late 2012, which was called “hackathon 0: mobilize to riot”. Using “write code to change society” as its catchphrase, the civic hacking spark was set off back then and it continues burning bright now.\u003C\u002Fp\u003E\u003Cp\u003EWithin eight years, with the contribution of over 1000 participants, through hackathons, the community has set up many platforms aimed at creating more open data or promoting open government; worked to reduce the digital divide; and worked to reduce the barrier to public participation to make public oversight a reality. The community has also promoted the value of rational public dialogue. In this movement for open data and open government, the g0v community has established a new model for civil society collaboration with the government.\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"sect\"\u003E\u003Ch2\u003EWork with Us\u003C\u002Fh2\u003E\u003Chr\u003E\u003Cp\u003Ejoin us in g0v slack: \u003Ca href=\"https:\u002F\u002Fjoin.g0v.tw\u002F\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Ehttps:\u002F\u002Fjoin.g0v.tw\u002F\u003C\u002Fa\u003E\u003C\u002Fp\u003E\u003Cp\u003Eand find us in #10th-anniversary channel!\u003C\u002Fp\u003E\u003Cbr\u003E\u003Ch5\u003EStaffs\u003C\u002Fh5\u003E\u003Cbr\u003E\u003Cdiv class=\"d-flex flex-wrap g-2\"\u003E";
var staffs = [
  {name: "Chai-yun Lee", url: "chai-yun-lee"},
  {name: "chihao", url: "chihao"},
  {name: "ddio", url: "ddio"},
  {name: "hkazami", url: "hkazami"},
  {name: "grass", url: "grass"},
  {name: "mglee", url: "mglee"},
  {name: "Oliver", url: "oliver"},
  {name: "Peter", url: "peter"},
  {name: "Sam", url: "sam"},
  {name: "Sandra", url: "sandra"},
  {name: "SeanGau", url: "seangau"},
  {name: "Stella", url: "stella"},
  {name: "Stimim", url: "stimim"},
  {name: "Yanyiyi", url: "yanyiyi"},
  {name: "Terry", url: "terry"},
  {name: "tkirby", url: "tkirby"},
  {name: "Yutin", url: "yutin"}
];
pug_html = pug_html + "\u003Cdiv class=\"g-2 d-flex flex-wrap align-items-center justify-content-start\"\u003E";
// iterate staffs
;(function(){
  var $$obj = staffs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var staff = $$obj[pug_index2];
pug_html = pug_html + "\u003Cdiv class=\"mb-2 text-center\" style=\"width:5em;flex:0 0 auto\"\u003E\u003Cimg" + (" class=\"rounded\""+" style=\"box-shadow:0 0 2px rgba(0,0,0,.2);width:3.5em\""+pug_attr("src", `/assets/img/avatar/${staff.url}.jpg`, true, true)) + "\u003E\u003Cdiv class=\"text-sm\"\u003E" + (pug_escape(null == (pug_interp = staff.name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var staff = $$obj[pug_index2];
pug_html = pug_html + "\u003Cdiv class=\"mb-2 text-center\" style=\"width:5em;flex:0 0 auto\"\u003E\u003Cimg" + (" class=\"rounded\""+" style=\"box-shadow:0 0 2px rgba(0,0,0,.2);width:3.5em\""+pug_attr("src", `/assets/img/avatar/${staff.url}.jpg`, true, true)) + "\u003E\u003Cdiv class=\"text-sm\"\u003E" + (pug_escape(null == (pug_interp = staff.name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"w-100 p-4 footer\"\u003E\u003Cdiv class=\"w-1024 rwd mx-auto\"\u003E\u003Chr\u003E\u003Cdiv class=\"d-flex g-4 align-items-end justify-content-center flex-wrap\"\u003E\u003Cdiv class=\"font-weight-bold\"\u003EThe Explosion of the g0verse!\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm\"\u003EOrganizer: g0v g0verse Fleet\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm\"\u003ECo-organizer: Social Innovation Lab, g0v-jothon\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex justify-content-center text-sm flex-wrap\"\u003E\u003Cdiv class=\"m-2 entry\"\u003E\u003Ci class=\"i-link\"\u003E\u003C\u002Fi\u003E\u003Ca href=\"https:\u002F\u002Fg0v.hackmd.io\u002F@eaKkAb8HRjOKJ4erd2STnA\u002F10Anni-Party\u002Fhttps%3A%2F%2Fg0v.hackmd.io%2FMpTtG8xSTwqS6TlCM-b6VA\"\u003EHackMD\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"m-2 entry\"\u003E\u003Ci class=\"i-link mr-1\"\u003E\u003C\u002Fi\u003E\u003Ca href=\"\u002Fphoto\u002F\"\u003EGallery\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"m-2 entry\"\u003E\u003Ci class=\"i-link mr-1\"\u003E\u003C\u002Fi\u003E\u003Ca href=\"https:\u002F\u002Fg0v-jothon.kktix.cc\u002Fevents\u002Fg0v-hackath52n\" target=\"_blank\" rel=\"noopener noreferrer\"\u003ESign Up\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
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
pug_html = pug_html + "\u003Cscript type=\"module\"\u003E(function(n){return n.apply({})})(function(){var n,a,t=this;n=function(){return t.view.render()};a=new connector({init:function(){return this.hub=new sharehub({ews:this.ws,initConnect:false,watch:n,create:function(){return{}}})},reconnect:function(){return this.hub.connect({id:\"landing\"})},ldcv:function(n){return ldcvmgr.toggle({ns:\"local\",name:\"offline-retry\"},n,{ws:this.ws})}});return a.init().then(function(){var n,u;n=[{name:\"10\",key:\"10\"},{name:\"food\",key:\"food\"},{name:\"g0v\",key:\"g0v\"},{name:\"jothon\",key:\"jothon\"},{name:\"love\",key:\"love\"},{name:\"party\",key:\"party\"}];return t.view=u=new ldview({root:document.body,handler:{emoji:{list:function(){return n},key:function(n){return n.key},view:{action:{click:{\"@\":function(n){var t,e,r,o,i;t=n.ctx;e=JSON.parse(JSON.stringify(r=a.hub.get()));((o=e.data||(e.data={}))[i=t.key]||(o[i]={})).count=(((o=e.data||(e.data={}))[i=t.key]||(o[i]={})).count||0)+1;a.hub.opsOut(json0.diff(r,e));return u.render()}}},text:{count:function(n){var t;t=n.ctx;return(((a.hub.get()||{}).data||{})[t.key]||{}).count||0}},handler:{icon:function(n){var t,e;t=n.node,e=n.ctx;return t.style.backgroundImage=\"url(\u002Fassets\u002Fimg\u002Femoji\u002F\"+e.key+\".gif)\"}}}},\"tip-root\":function(n){var t;t=n.node;return t.classList.toggle(\"tip-on\",true)}}})})});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
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
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "staffs" in locals_for_with ?
        locals_for_with.staffs :
        typeof staffs !== 'undefined' ? staffs : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 