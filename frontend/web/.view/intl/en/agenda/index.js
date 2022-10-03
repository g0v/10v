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
    
    (function (Array, JSON, b64img, blockLoader, c, cssLoader, decache, defer, escape, libLoader, meta, parentName, prefix, scriptLoader, url, version) {
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
pug_html = pug_html + "\u003Chead\u003E\u003Cmeta charset=\"utf-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0\"\u003E\u003Cmeta" + (" property=\"og:url\""+pug_attr("content", meta.url, true, true)) + "\u003E\u003Cmeta" + (" name=\"description\""+pug_attr("content", meta.description, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:title\""+pug_attr("content", meta.title, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:description\""+pug_attr("content", meta.description, true, true)) + "\u003E\u003Cmeta property=\"og:locale\" content=\"zh_TW\"\u003E\u003Cmeta" + (" property=\"og:image\""+pug_attr("content", meta.thumbnail, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:image:type\""+pug_attr("content", meta.thumb.type || "image/jpeg", true, true)) + "\u003E\u003Cmeta" + (" property=\"og:image:width\""+pug_attr("content", meta.thumb.width || "1200", true, true)) + "\u003E\u003Cmeta" + (" property=\"og:image:height\""+pug_attr("content", meta.thumb.height || "630", true, true)) + "\u003E\u003Cmeta" + (" property=\"og:type\""+pug_attr("content", meta.ogtype || "website", true, true)) + "\u003E\u003Cmeta" + (" name=\"twitter:card\""+pug_attr("content", meta.twtcardtype || "summary", true, true)) + "\u003E\u003Cmeta name=\"twitter:site\" content=\"@g0v.tw\"\u003E\u003Cmeta" + (" name=\"twitter:title\""+pug_attr("content", meta.title, true, true)) + "\u003E\u003Cmeta" + (" name=\"twitter:description\""+pug_attr("content", meta.description, true, true)) + "\u003E\u003Cmeta name=\"twitter:creator\" content=\"@g0v.tw\"\u003E\u003Cmeta" + (" name=\"twitter:image\""+pug_attr("content", meta.thumbnail, true, true)) + "\u003E\u003Clink rel=\"icon\" type=\"image\u002Fpng\" href=\"\u002Ffavicon.png\"\u003E";
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
pug_html = pug_html + "\u003Clink rel=\"preconnect\" href=\"https:\u002F\u002Ffonts.googleapis.com\"\u003E\u003Clink" + (" rel=\"preconnect\" href=\"https:\u002F\u002Ffonts.gstatic.com\""+pug_attr("crossorigin", true, true, true)) + "\u003E\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Noto+Sans+TC:wght@300;700&amp;family=Roboto&amp;display=swap\" rel=\"stylesheet\"\u003E\u003Cstyle type=\"text\u002Fcss\"\u003Ehtml,body{width:100%;margin:0;padding:0;font-family:'Noto Sans TC','Roboto',sans-serif;font-size:22px}\u003C\u002Fstyle\u003E\u003Cstyle type=\"text\u002Fcss\"\u003Ehtml,body{scroll-behavior:smooth}.session{margin-bottom:4em}.topic{border:3px solid #000;border-bottom:0}.topic .inner{display:grid;grid-template:fit-content(2.5em) fit-content(2.5em)\u002F7em 1fr 5em}.topic .inner div{align-items:center}.topic:last-child{border-bottom:3px solid #000}.topic .topic-type{background:linear-gradient(80deg,rgba(0,0,0,0) 1em,#f00 1.01em,#f00 1.3em,#000 1.31em);color:#fff}.sticky a{color:#000}\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E";
pug_mixins["scope"].call({
block: function(){
pug_html = pug_html + "\u003Cdiv class=\"navbar navbar-expand-lg navbar-light fixed-top\" ld=\"root\"\u003E\u003Cdiv class=\"collapse navbar-collapse\"\u003E\u003Cdiv class=\"ml-auto\"\u003E\u003Cul class=\"navbar-nav ml-4\"\u003E\u003Cli class=\"nav-item dropdown mr-2 d-flex align-items-center\"\u003E\u003Cdiv class=\"btn-group\" data-toggle=\"dropdown\"\u003E\u003Cdiv class=\"btn btn-sm btn-outline-secondary dropdown-toggle\"\u003E\u003Ci class=\"i-globe\" style=\"line-height:1em\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-menu dropdown-menu-right shadow-sm no-select\" style=\"min-width:0\"\u003E\u003Ca class=\"dropdown-item\" href=\"\u002Fintl\u002Fen\u002F\" ld=\"set-lng\" data-name=\"en\"\u003EEN\u003C\u002Fa\u003E\u003Ca class=\"dropdown-item\" href=\"\u002F\" ld=\"set-lng\" data-name=\"zh-TW\"\u003E中\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-item d-none\" ld=\"unauthed login\"\u003E\u003Ca class=\"nav-link\"\u003E登入\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-item d-none\" ld=\"unauthed signup\"\u003E\u003Ca class=\"nav-link\"\u003E註冊\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"nav-item dropdown d-none\" ld=\"authed profile\"\u003E\u003Cdiv class=\"btn btn-sm btn-outline-dark bg-white dropdown-toggle d-flex align-items-center\" data-toggle=\"dropdown\"\u003E\u003Cdiv class=\"avatar\" ld=\"avatar\"\u003E\u003C\u002Fdiv\u003E\u003Cspan class=\"ml-1\" ld=\"displayname\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-menu dropdown-menu-right shadow-sm\"\u003E\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002Fsettings\u002F\"\u003E\u003Cdiv class=\"align-middle text-capitalize text-ellipsis\" ld=\"displayname\"\u003E您好！\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm align-middle text-ellipsis\" ld=\"username\"\u003E...\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-header\"\u003E個人功能\u003C\u002Fdiv\u003E\u003Ca class=\"dropdown-item\" href=\"\u002Fme\u002Fsettings\u002F\"\u003E個人設定\u003C\u002Fa\u003E\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-header\"\u003E進階功能\u003C\u002Fdiv\u003E\u003Ca class=\"dropdown-item\" href=\"\u002Fadmin\u002F\"\u003E管理頁面\u003C\u002Fa\u003E\u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-item text-danger\" ld=\"logout\"\u003E登出\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
}, "navtop");
pug_mixins["session"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (" class=\"session\""+" ld-each=\"session\""+pug_attr("data-name", name, true, true)) + "\u003E\u003Ch5 ld=\"name\"\u003E\u003C\u002Fh5\u003E\u003Cdiv class=\"topic\" ld-each=\"topic\"\u003E\u003Cdiv class=\"inner\"\u003E\u003Cdiv class=\"p-2 border-right align-items-center justify-content-center\" style=\"grid-area: 1 \u002F 1 \u002F span 2 \u002F 1;display:flex;\"\u003E\u003Cspan ld=\"time\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"p-2 border-bottom\" ld=\"speaker\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"p-2 text-right border-bottom topic-type\" ld=\"type\" style=\"grid-area: 1 \u002F 3 \u002F 1 \u002F span 1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"p-2\" ld=\"title\" style=\"grid-area: 2 \u002F 2 \u002F 2 \u002F span 2\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C!--div(ld=\"desc\")--\u003E\u003C!--div(ld=\"slide\")--\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + "\u003Cdiv class=\"w-1024 rwd mx-auto my-4\"\u003E\u003Cbr\u003E\u003Cdiv class=\"text-muted mb-2\"\u003E\u003Ca href=\"\u002F\"\u003E零宇宙大爆炸\u003C\u002Fa\u003E \u002F \u003Cbr\u003E零時政府 g0v 十週年生日派對\u003C\u002Fdiv\u003E\u003Ch1\u003E議程表\u003C\u002Fh1\u003E\u003Chr\u003E";
pug_mixins["nbr"](2);
pug_html = pug_html + "\u003Cdiv class=\"d-flex\"\u003E\u003Cdiv class=\"flex-grow-1\"\u003E\u003Ch3 id=\"main\"\u003E主舞台\u003C\u002Fh3\u003E\u003Cbr\u003E\u003Cdiv class=\"mb-4\"\u003E";
pug_mixins["session"]("main");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cbr\u003E\u003Ch3 id=\"workshop\"\u003ER106 \u002F 107 工作坊\u003C\u002Fh3\u003E\u003Cbr\u003E\u003Cdiv\u003E";
pug_mixins["session"]("room");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"pl-2 d-none d-md-block\"\u003E";
pug_mixins["nbr"](3);
pug_html = pug_html + "\u003Cdiv class=\"sticky\" style=\"font-size:1em;top:1em\"\u003E\u003Cdiv class=\"font-weight-bold\"\u003E索引表\u003C\u002Fdiv\u003E\u003Cdiv class=\"list-group shadowm-sm\" style=\"border:3px solid #000\"\u003E\u003Ca class=\"list-group-item text-white\" style=\"background:#000;border-radius:0\" href=\"#main\"\u003E主舞台\u003C\u002Fa\u003E\u003Cdiv\u003E\u003Ca class=\"list-group-item text-sm text-nowrap\" ld-each=\"index\" data-name=\"main\"\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Ca class=\"list-group-item text-white\" style=\"background:#000\" href=\"#workshop\"\u003E工作坊\u003C\u002Fa\u003E\u003Cdiv\u003E\u003Ca class=\"list-group-item text-sm text-nowrap\" ld-each=\"index\" data-name=\"room\"\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"w-100 p-4 footer\"\u003E\u003Cdiv class=\"w-1024 rwd mx-auto\"\u003E\u003Chr\u003E\u003Cdiv class=\"d-flex g-4 align-items-end justify-content-center flex-wrap\"\u003E\u003Cdiv class=\"font-weight-bold\"\u003EThe Explosion of the g0verse!\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm\"\u003EOrganizer: g0v g0verse Fleet\u003C\u002Fdiv\u003E\u003Cdiv class=\"text-sm\"\u003ECo-organizer: Social Innovation Lab, g0v-jothon\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex justify-content-center text-sm flex-wrap\"\u003E\u003Cdiv class=\"m-2 entry\"\u003E\u003Ci class=\"i-link\"\u003E\u003C\u002Fi\u003E\u003Ca href=\"https:\u002F\u002Fg0v.hackmd.io\u002F@eaKkAb8HRjOKJ4erd2STnA\u002F10Anni-Party\u002Fhttps%3A%2F%2Fg0v.hackmd.io%2FMpTtG8xSTwqS6TlCM-b6VA\"\u003EHackMD\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"m-2 entry\"\u003E\u003Ci class=\"i-link mr-1\"\u003E\u003C\u002Fi\u003E\u003Ca href=\"\u002Fphoto\u002F\"\u003EGallery\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"m-2 entry\"\u003E\u003Ci class=\"i-link mr-1\"\u003E\u003C\u002Fi\u003E\u003Ca href=\"https:\u002F\u002Fg0v-jothon.kktix.cc\u002Fevents\u002Fg0v-hackath52n\" target=\"_blank\" rel=\"noopener noreferrer\"\u003ESign Up\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
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
pug_html = pug_html + "\u003Cscript type=\"module\"\u003Evar ldld;ldld=new ldloader({className:\"ldld full\"});ldld.on();ld$.fetch(\"\u002Fapi\u002Fagenda\",{method:\"GET\"},{type:\"json\"}).then(function(t){var n,e,r,i,a;n=function(t){var n,e,r,i,a;n=[];e={list:[]};for(r=0,i=t.length;r\u003Ci;++r){a=t[r];if(!(a[1]||a[2])){e={name:a[0],list:[],id:\"id-\"+Math.random().toString(36).substring(2)};n.push(e)}else{e.list.push(a)}}return n};e=t[0].data;r=t[1].data;e=e.filter(function(t){return t.filter(function(t){return t}).length});r=r.filter(function(t){return t.filter(function(t){return t}).length});e=n(e);r=n(r);i={main:e,room:r};a=new ldview({root:document.body,handler:{index:{list:function(t){var n;n=t.node;return i[n.getAttribute(\"data-name\")]},handler:function(t){var n,e;n=t.node,e=t.data;n.innerText=e.name;return n.setAttribute(\"href\",\"#\"+e.id)}},session:{list:function(t){var n;n=t.node;return i[n.getAttribute(\"data-name\")]},view:{handler:{name:function(t){var n,e;n=t.node,e=t.ctx;n.setAttribute(\"id\",e.id);return n.innerText=e.name},topic:{list:function(t){var n;n=t.ctx;return n.list},view:{text:{time:function(t){var n;n=t.ctx;return n[0]},type:function(t){var n;n=t.ctx;return n[1]},speaker:function(t){var n;n=t.ctx;return n[2]||\"-\"},title:function(t){var n;n=t.ctx;return n[3]||\"　\"},desc:function(t){var n;n=t.ctx},slide:function(t){var n;n=t.ctx}}}}}}}}});return ldld.off()});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
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
    ;;return pug_html;}; module.exports = template; })() 