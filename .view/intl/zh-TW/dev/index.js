 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(n,e,t,r){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||r))throw n.message+=" on line "+t,n;try{r=r||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,t)}var a=3,i=r.split("\n"),o=Math.max(t-a,0),h=Math.min(i.length,t+a),a=i.slice(o,h).map(function(n,e){var r=e+o+1;return(r==t?"  > ":"    ")+r+"| "+n}).join("\n");n.path=e;try{n.message=(e||"Pug")+":"+t+"\n"+a+"\n\n"+n.message}catch(n){}throw n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (Array, JSON, b64img, blockLoader, cssLoader, decache, escape, parentName, prefix, scriptLoader, version) {
      ;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
cssLoader.url[url] = true;
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";










;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";









;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var b64img = {};
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAQAICRAEAOw=="
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";







;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";













;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fldview\u002Fmain\u002Fldview.pug";
prefix = function(n) { return (!n?[]:(Array.isArray(n)?n:[n])).map(function(it){ return `${prefix.currentName}$${it}`; }).join(' ');}
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fldview\u002Fmain\u002Fldview.pug";
pug_mixins["scope"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fldview\u002Fmain\u002Fldview.pug";
var prentName = prefix.currentName;
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fldview\u002Fmain\u002Fldview.pug";
prefix.currentName = name;
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fldview\u002Fmain\u002Fldview.pug";
if (attributes.class && /naked-scope/.exec(attributes.class)) {
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fldview\u002Fmain\u002Fldview.pug";
block && block();
}
else {
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fldview\u002Fmain\u002Fldview.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"ld-scope": pug_escape(name || '')},attributes]), true)) + "\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fldview\u002Fmain\u002Fldview.pug";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fldview\u002Fmain\u002Fldview.pug";
prefix.currentName = parentName;
};
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("/css/pack/vendor.min.css");
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("/css/index.css");
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_mixins["css"]("/assets/lib/auth/main/authpanel.css");
pug_html = pug_html + "\u003C\u002Fhead\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldcv ldcvmgr\" data-name=\"authpanel\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"base\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner\" style=\"background:none\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-640 mx-auto rwd\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"iner card p-0 border-0 authpanel signup\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body p-0\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + " ";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"closebtn\" data-ldcv-set=\"\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"vertical-center p-4 info position-absolute h-100 w-50 text-light\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-absolute w-100 h-100 bg-semi-dark\" style=\"top:0;left:0\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-left position-relative z-float text-shadow\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv ld=\"info\" data-name=\"default\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ch3 class=\"mb-3 font-weight-bold\" style=\"line-height:1em\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "登入系統\u003C\u002Fh3\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "電子郵件\u003C\u002Fb\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "即為您的帳號。若您代表您的團隊註冊，建議您使用一個";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "團隊可共用\u003C\u002Fb\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "的電子郵件。\u003C\u002Fp\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "登入之後即可進行提案、系統管理或評選工作。\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-none\" ld=\"info\" data-name=\"signup-failed\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ch2 class=\"mb-4 font-weight-bold\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "註冊失敗。\u003C\u002Fh2\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "您可能先前已經註冊過了，或者您所填的資訊有問題。您可以試著：\u003C\u002Fp\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "切換至登入模式後再試一次\u003C\u002Fli\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "試著使用更複雜的密碼\u003C\u002Fli\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "嘗試使用社群帳號登入\u003C\u002Fli\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ca href=\"#\" onclick=\"lda.ldcvmgr.toggle('contact');\" style=\"color:#0ff\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "與我們聯絡\u003C\u002Fa\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-none\" ld=\"info\" data-name=\"login-failed\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ch2 class=\"mb-4 font-weight-bold\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "登入失敗。\u003C\u002Fh2\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "您之前可能用的是別組帳號或密碼、使用不同的登入方式、甚至尚未註冊過。您可以試著：\u003C\u002Fp\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "換一組帳號、密碼或登入方式\u003C\u002Fli\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "確認您的 email 或密碼沒有打錯\u003C\u002Fli\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "切換至註冊模式後再試一次\u003C\u002Fli\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Fdash\u002Fauth\u002Freset\u002F\" style=\"color:#0ff\" target=\"_blank\" rel=\"noopener noreferrer\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "重設密碼\u003C\u002Fa\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003C\u002Fli\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ca href=\"#\" onclick=\"lda.ldcvmgr.toggle('contact');\" style=\"color:#0ff\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "與我們聯絡\u003C\u002Fa\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-none\" ld=\"info\" data-name=\"token\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ch2 class=\"mb-4 font-weight-bold\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "歡迎您！\u003C\u002Fh2\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "您受邀成為我們的一員。不過，在繼續之前您需要先登入系統。\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"position-absolute text-sm\" style=\"bottom:20px;right:20px\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "Powered by Grant Dash\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cform class=\"form d-flex flex-column\" ld=\"form\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cul class=\"nav nav-tabs pt-2 bg-light\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item ml-2\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" ld=\"tab\" data-name=\"signup\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "註冊\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ca class=\"nav-link\" ld=\"tab\" data-name=\"login\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "登入\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"px-3 pb-4 pt-3 text-left d-flex flex-column h-100\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"vertical-center\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "電子郵件\u003C\u002Flabel\u003E";
;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control form-control-sm\" name=\"username\" placeholder=\"電子郵件即您的帳號名稱\" autocomplete=\"username\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"invalid-feedback\" style=\"margin-bottom:-.75em\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "無效的電子郵件\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\" ld=\"show\" data-tab=\"signup\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "顯示名稱\u003C\u002Flabel\u003E";
;pug_debug_line = 50;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control form-control-sm\" name=\"displayname\" placeholder=\"例如：王小明\" autocomplete=\"displayname\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"invalid-feedback\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "不能留白\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 53;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 54;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "密碼\u003C\u002Flabel\u003E";
;pug_debug_line = 55;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control form-control-sm\" name=\"password\" placeholder=\"密碼，至少八個字元\" type=\"password\" autocomplete=\"password\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"invalid-feedback\" style=\"margin-bottom:-.75em\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "不合格的密碼\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 58;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-center form-text text-muted small\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "登入即表示您同意我們的 ";
;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Fsys\u002Ftos\u002F\" target=\"_blank\" rel=\"noopener noreferrer\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "用戶條款\u003C\u002Fa\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + " 與 ";
;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ca href=\"\u002Fsys\u002Fprivacy\u002F\" target=\"_blank\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "隱私權政策\u003C\u002Fa\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 61;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-success btn-block disabled ld-ext-right\" ld=\"submit\"\u003E";
;pug_debug_line = 62;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-none\" ld=\"show\" data-tab=\"login\"\u003E";
;pug_debug_line = 62;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "登入\u003C\u002Fdiv\u003E";
;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv ld=\"show\" data-tab=\"signup\"\u003E";
;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "註冊\u003C\u002Fdiv\u003E";
;pug_debug_line = 64;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"ld ldld bare em-1\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 65;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-between mt-1\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"small\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 67;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"small\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ca ld=\"forgot-password\" href=\"#\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "忘記密碼？»\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 69;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 70;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"sep sep-text my-4\"\u003E";
;pug_debug_line = 70;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cspan class=\"text-sm\"\u003E";
;pug_debug_line = 70;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "或者用下列登入\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 71;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 72;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\"\u003E";
;pug_debug_line = 72;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary btn-block btn-sm\" onclick=\"lda.auth.fb()\"\u003E";
;pug_debug_line = 72;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "";
;pug_debug_line = 72;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ci class=\"i-fb\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 72;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + " Facebook\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 73;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"col\"\u003E";
;pug_debug_line = 73;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-dark btn-block btn-sm\" onclick=\"lda.auth.google()\"\u003E";
;pug_debug_line = 73;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "";
;pug_debug_line = 73;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + "\u003Ci class=\"i-google\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 73;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fstatic\u002Fassets\u002Flib\u002Fauth\u002Fmain\u002Fauthpanel.pug";
pug_html = pug_html + " Google\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 py-2 px-4 bg-dark text-light d-flex\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"clickable\" ld=\"login\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "Login\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-1024 rwd mx-auto my-4\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "Authentication\u003C\u002Fh4\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "Current Status\u003C\u002Fb\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cp ld=\"status\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "Not login\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "User Name\u003C\u002Fb\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cp ld=\"username\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "n\u002Fa\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "User Id\u003C\u002Fb\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cp ld=\"userid\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "n\u002Fa\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary mr-2\" ld=\"signup not-signed\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "Sign Up\u003C\u002Fdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary mr-2\" ld=\"login not-signed\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "Login\u003C\u002Fdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary mr-2\" ld=\"logout signed\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "Logout\u003C\u002Fdiv\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary\" ld=\"reauth\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "Re-auth\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_mixins["scope"].call({
block: function(){
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"base\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner p-4\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cform method=\"POST\" action=\"\u002Fapi\u002Fauth\u002Fsignup\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "email\u003C\u002Flabel\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control\" ld=\"username\" type=\"text\" name=\"username\" autocomplete=\"username\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "displayname\u003C\u002Flabel\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control\" ld=\"displayname\" type=\"text\" name=\"displayname\" autocomplete=\"displayname\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "password\u003C\u002Flabel\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control\" ld=\"password\" type=\"password\" name=\"password\" autocomplete=\"new-password\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cinput type=\"hidden\" name=\"_csrf\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"btn btn-primary mr-2\" type=\"submit\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary\" ld=\"inline-submit\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "Submit ( no reload )\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
},
attributes: {"class": "ldcv"}
}, "signup");
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_mixins["scope"].call({
block: function(){
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"base\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner p-4\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cform method=\"POST\" action=\"\u002Fapi\u002Fauth\u002Flogin\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "email\u003C\u002Flabel\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control\" ld=\"username\" type=\"text\" name=\"username\" autocomplete=\"username\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"form-group\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "password\u003C\u002Flabel\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control\" ld=\"password\" type=\"password\" name=\"password\" autocomplete=\"new-password\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cinput type=\"hidden\" name=\"_csrf\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"btn btn-primary mr-2\" type=\"submit\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary\" ld=\"inline-submit\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "Submit ( no reload )\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
},
attributes: {"class": "ldcv"}
}, "login");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/js/pack/vendor.min.js");
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/js/index.min.js");
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_mixins["script"]("/assets/lib/auth/main/auth.min.js");
;pug_debug_line = 56;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_mixins["script"]("/assets/lib/auth/main/authpanel.min.js");
;pug_debug_line = 57;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_mixins["script"]("/js/index.js");
;pug_debug_line = 58;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fpug\u002Fdev\u002Findex.pug";
pug_html = pug_html + "\u002F\u002F Generated by LiveScript 1.3.1\nldc.register(['ldcvmgr', 'auth'], function(arg$){\n  var ldcvmgr, auth, lc, ldcv, view;\n  ldcvmgr = arg$.ldcvmgr, auth = arg$.auth;\n  lc = {};\n  ldcv = {};\n  view = {};\n  ldcv.logout = new ldCover({\n    root: ld$.find('.ldcv[data-name=logout]', 0)\n  });\n  view.panel = new ldView({\n    root: document.body,\n    action: {\n      click: {\n        signup: function(){\n          return auth.local();\n        },\n        login: function(){\n          return auth.local();\n        },\n        logout: function(){\n          return auth.logout();\n        },\n        reauth: function(){}\n      }\n    },\n    text: {\n      username: function(){\n        return (lc.user || (lc.user = {})).username || 'n\u002Fa';\n      },\n      userid: function(){\n        return (lc.user || (lc.user = {})).key || 'n\u002Fa';\n      }\n    },\n    handler: {\n      signed: function(arg$){\n        var node;\n        node = arg$.node;\n        return node.classList.toggle('d-none', !(lc.user || (lc.user = {})).username);\n      },\n      \"not-signed\": function(arg$){\n        var node;\n        node = arg$.node;\n        return node.classList.toggle('d-none', !!(lc.user || (lc.user = {})).username);\n      },\n      status: function(arg$){\n        var node;\n        node = arg$.node;\n        node.innerText = (lc.user || (lc.user = {})).username ? 'Signed in' : 'Not login';\n        return node.classList.toggle('text-danger', !(lc.user || (lc.user = {})).username);\n      }\n    }\n  });\n  console.log(auth);\n  return auth.fetch().then(function(g){\n    lc.global = g;\n    lc.user = g.user;\n    return view.panel.render();\n  });\n});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "b64img" in locals_for_with ?
        locals_for_with.b64img :
        typeof b64img !== 'undefined' ? b64img : undefined, "blockLoader" in locals_for_with ?
        locals_for_with.blockLoader :
        typeof blockLoader !== 'undefined' ? blockLoader : undefined, "cssLoader" in locals_for_with ?
        locals_for_with.cssLoader :
        typeof cssLoader !== 'undefined' ? cssLoader : undefined, "decache" in locals_for_with ?
        locals_for_with.decache :
        typeof decache !== 'undefined' ? decache : undefined, "escape" in locals_for_with ?
        locals_for_with.escape :
        typeof escape !== 'undefined' ? escape : undefined, "parentName" in locals_for_with ?
        locals_for_with.parentName :
        typeof parentName !== 'undefined' ? parentName : undefined, "prefix" in locals_for_with ?
        locals_for_with.prefix :
        typeof prefix !== 'undefined' ? prefix : undefined, "scriptLoader" in locals_for_with ?
        locals_for_with.scriptLoader :
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 