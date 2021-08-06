 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (JSON, b64img, blockLoader, cssLoader, decache, escape, scriptLoader, version) {
      ;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Ffrontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcommon.pug";
if ((!blockLoader || !blockLoader["common"])) {
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fnode_modules\u002Fbootstrap.ldui\u002Fdist\u002Findex.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fnode_modules\u002Fbootstrap.ldui\u002Fdist\u002Findex.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fnode_modules\u002Fbootstrap.ldui\u002Fdist\u002Findex.pug";



















;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fnode_modules\u002Fbootstrap.ldui\u002Fdist\u002Findex.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fnode_modules\u002Fbootstrap.ldui\u002Fdist\u002Findex.pug";












;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fnode_modules\u002Fbootstrap.ldui\u002Fdist\u002Findex.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fnode_modules\u002Fbootstrap.ldui\u002Fdist\u002Findex.pug";










;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fnode_modules\u002Fbootstrap.ldui\u002Fdist\u002Findex.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fnode_modules\u002Fbootstrap.ldui\u002Fdist\u002Findex.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fnode_modules\u002Fbootstrap.ldui\u002Fdist\u002Findex.pug";









;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fnode_modules\u002Fbootstrap.ldui\u002Fdist\u002Findex.pug";
var b64img = {};
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fnode_modules\u002Fbootstrap.ldui\u002Fdist\u002Findex.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAQAICRAEAOw=="
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fnode_modules\u002Fbootstrap.ldui\u002Fdist\u002Findex.pug";
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fnode_modules\u002Fbootstrap.ldui\u002Fdist\u002Findex.pug";







;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Fnode_modules\u002Fbootstrap.ldui\u002Fdist\u002Findex.pug";













;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fservebase\u002Ffrontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcommon.pug";






















}
;pug_debug_line = 2;pug_debug_filename = "frontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Flogout.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldcv ldcvmgr ldcv-scale\" data-lock=\"true\" data-name=\"logout\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "frontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Flogout.pug";
pug_html = pug_html + "\u003Cdiv class=\"base w-640 rwd\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "frontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Flogout.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner card\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "frontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Flogout.pug";
pug_html = pug_html + "\u003Cdiv class=\"card-body text-center\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "frontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Flogout.pug";
pug_html = pug_html + "\u003Cdiv class=\"p-4\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "frontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Flogout.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 3;pug_debug_filename = "frontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Flogout.pug";
pug_html = pug_html + "您已登出\u003C\u002Fh1\u003E";
;pug_debug_line = 4;pug_debug_filename = "frontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Flogout.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 4;pug_debug_filename = "frontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Flogout.pug";
pug_html = pug_html + "請重新載入頁面以更新網頁至最新狀態。\u003C\u002Fp\u003E";
;pug_debug_line = 5;pug_debug_filename = "frontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Flogout.pug";
pug_html = pug_html + "\u003Cbr\u002F\u003E";
;pug_debug_line = 6;pug_debug_filename = "frontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Flogout.pug";
pug_html = pug_html + "\u003Cdiv class=\"m-auto text-left text-muted\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "frontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Flogout.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 7;pug_debug_filename = "frontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Flogout.pug";
pug_html = pug_html + "網站中有些功能只有登入的使用者才能使用。若您繼續使用這些功能，網站將會彈出登入或者權限不足的提示。\u003C\u002Fp\u003E";
;pug_debug_line = 8;pug_debug_filename = "frontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Flogout.pug";
pug_html = pug_html + "\u003Cbr\u002F\u003E";
;pug_debug_line = 9;pug_debug_filename = "frontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Flogout.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-primary btn-block btn-lg mr-2\" onclick=\"window.location.reload()\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "frontend\u002Fdemo\u002Fsrc\u002Fpug\u002Fmodules\u002Fcover\u002Flogout.pug";
pug_html = pug_html + "重新整理\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "JSON" in locals_for_with ?
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
        typeof escape !== 'undefined' ? escape : undefined, "scriptLoader" in locals_for_with ?
        locals_for_with.scriptLoader :
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 