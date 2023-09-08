/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*!
  * Bootstrap v4.6.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap={},t.jQuery)}(this,(function(t,e){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=n(e);function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a.apply(this,arguments)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}var l="transitionend";var u={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i.default(t).css("transition-duration"),n=i.default(t).css("transition-delay"),o=parseFloat(e),r=parseFloat(n);return o||r?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i.default(t).trigger(l)},supportsTransitionEnd:function(){return Boolean(l)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],a=r&&u.isElement(r)?"element":null===(s=r)||"undefined"==typeof s?""+s:{}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(a))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+a+'" but expected type "'+o+'".')}var s},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?u.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if("undefined"==typeof i.default)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=i.default.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};u.jQueryDetection(),i.default.fn.emulateTransitionEnd=function(t){var e=this,n=!1;return i.default(this).one(u.TRANSITION_END,(function(){n=!0})),setTimeout((function(){n||u.triggerTransitionEnd(e)}),t),this},i.default.event.special[u.TRANSITION_END]={bindType:l,delegateType:l,handle:function(t){if(i.default(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var f="bs.alert",d=i.default.fn.alert,c=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){i.default.removeData(this._element,f),this._element=null},e._getRootElement=function(t){var e=u.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=i.default(t).closest(".alert")[0]),n},e._triggerCloseEvent=function(t){var e=i.default.Event("close.bs.alert");return i.default(t).trigger(e),e},e._removeElement=function(t){var e=this;if(i.default(t).removeClass("show"),i.default(t).hasClass("fade")){var n=u.getTransitionDurationFromElement(t);i.default(t).one(u.TRANSITION_END,(function(n){return e._destroyElement(t,n)})).emulateTransitionEnd(n)}else this._destroyElement(t)},e._destroyElement=function(t){i.default(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data(f);o||(o=new t(this),n.data(f,o)),"close"===e&&o[e](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},r(t,null,[{key:"VERSION",get:function(){return"4.6.1"}}]),t}();i.default(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',c._handleDismiss(new c)),i.default.fn.alert=c._jQueryInterface,i.default.fn.alert.Constructor=c,i.default.fn.alert.noConflict=function(){return i.default.fn.alert=d,c._jQueryInterface};var h="bs.button",p=i.default.fn.button,m="active",g='[data-toggle^="button"]',_='input:not([type="hidden"])',v=".btn",b=function(){function t(t){this._element=t,this.shouldAvoidTriggerChange=!1}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=i.default(this._element).closest('[data-toggle="buttons"]')[0];if(n){var o=this._element.querySelector(_);if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains(m))t=!1;else{var r=n.querySelector(".active");r&&i.default(r).removeClass(m)}t&&("checkbox"!==o.type&&"radio"!==o.type||(o.checked=!this._element.classList.contains(m)),this.shouldAvoidTriggerChange||i.default(o).trigger("change")),o.focus(),e=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(m)),t&&i.default(this._element).toggleClass(m))},e.dispose=function(){i.default.removeData(this._element,h),this._element=null},t._jQueryInterface=function(e,n){return this.each((function(){var o=i.default(this),r=o.data(h);r||(r=new t(this),o.data(h,r)),r.shouldAvoidTriggerChange=n,"toggle"===e&&r[e]()}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.1"}}]),t}();i.default(document).on("click.bs.button.data-api",g,(function(t){var e=t.target,n=e;if(i.default(e).hasClass("btn")||(e=i.default(e).closest(v)[0]),!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();else{var o=e.querySelector(_);if(o&&(o.hasAttribute("disabled")||o.classList.contains("disabled")))return void t.preventDefault();"INPUT"!==n.tagName&&"LABEL"===e.tagName||b._jQueryInterface.call(i.default(e),"toggle","INPUT"===n.tagName)}})).on("focus.bs.button.data-api blur.bs.button.data-api",g,(function(t){var e=i.default(t.target).closest(v)[0];i.default(e).toggleClass("focus",/^focus(in)?$/.test(t.type))})),i.default(window).on("load.bs.button.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(_);o.checked||o.hasAttribute("checked")?i.classList.add(m):i.classList.remove(m)}for(var r=0,a=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;r<a;r++){var s=t[r];"true"===s.getAttribute("aria-pressed")?s.classList.add(m):s.classList.remove(m)}})),i.default.fn.button=b._jQueryInterface,i.default.fn.button.Constructor=b,i.default.fn.button.noConflict=function(){return i.default.fn.button=p,b._jQueryInterface};var y="carousel",E="bs.carousel",w=i.default.fn[y],T="active",C="next",S="prev",N="slid.bs.carousel",D=".active.carousel-item",A={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},k={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},I={TOUCH:"touch",PEN:"pen"},O=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var e=t.prototype;return e.next=function(){this._isSliding||this._slide(C)},e.nextWhenVisible=function(){var t=i.default(this._element);!document.hidden&&t.is(":visible")&&"hidden"!==t.css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide(S)},e.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(u.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(t){var e=this;this._activeElement=this._element.querySelector(D);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)i.default(this._element).one(N,(function(){return e.to(t)}));else{if(n===t)return this.pause(),void this.cycle();var o=t>n?C:S;this._slide(o,this._items[t])}},e.dispose=function(){i.default(this._element).off(".bs.carousel"),i.default.removeData(this._element,E),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(t){return t=a({},A,t),u.typeCheckConfig(y,t,k),t},e._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},e._addEventListeners=function(){var t=this;this._config.keyboard&&i.default(this._element).on("keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&i.default(this._element).on("mouseenter.bs.carousel",(function(e){return t.pause(e)})).on("mouseleave.bs.carousel",(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},e._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var e=function(e){t._pointerEvent&&I[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},n=function(e){t._pointerEvent&&I[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};i.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(t){return t.preventDefault()})),this._pointerEvent?(i.default(this._element).on("pointerdown.bs.carousel",(function(t){return e(t)})),i.default(this._element).on("pointerup.bs.carousel",(function(t){return n(t)})),this._element.classList.add("pointer-event")):(i.default(this._element).on("touchstart.bs.carousel",(function(t){return e(t)})),i.default(this._element).on("touchmove.bs.carousel",(function(e){return function(e){t.touchDeltaX=e.originalEvent.touches&&e.originalEvent.touches.length>1?0:e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),i.default(this._element).on("touchend.bs.carousel",(function(t){return n(t)})))}},e._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},e._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},e._getItemByDirection=function(t,e){var n=t===C,i=t===S,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var a=(o+(t===S?-1:1))%this._items.length;return-1===a?this._items[this._items.length-1]:this._items[a]},e._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(D)),r=i.default.Event("slide.bs.carousel",{relatedTarget:t,direction:e,from:o,to:n});return i.default(this._element).trigger(r),r},e._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));i.default(e).removeClass(T);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&i.default(n).addClass(T)}},e._updateInterval=function(){var t=this._activeElement||this._element.querySelector(D);if(t){var e=parseInt(t.getAttribute("data-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}},e._slide=function(t,e){var n,o,r,a=this,s=this._element.querySelector(D),l=this._getItemIndex(s),f=e||s&&this._getItemByDirection(t,s),d=this._getItemIndex(f),c=Boolean(this._interval);if(t===C?(n="carousel-item-left",o="carousel-item-next",r="left"):(n="carousel-item-right",o="carousel-item-prev",r="right"),f&&i.default(f).hasClass(T))this._isSliding=!1;else if(!this._triggerSlideEvent(f,r).isDefaultPrevented()&&s&&f){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(f),this._activeElement=f;var h=i.default.Event(N,{relatedTarget:f,direction:r,from:l,to:d});if(i.default(this._element).hasClass("slide")){i.default(f).addClass(o),u.reflow(f),i.default(s).addClass(n),i.default(f).addClass(n);var p=u.getTransitionDurationFromElement(s);i.default(s).one(u.TRANSITION_END,(function(){i.default(f).removeClass(n+" "+o).addClass(T),i.default(s).removeClass("active "+o+" "+n),a._isSliding=!1,setTimeout((function(){return i.default(a._element).trigger(h)}),0)})).emulateTransitionEnd(p)}else i.default(s).removeClass(T),i.default(f).addClass(T),this._isSliding=!1,i.default(this._element).trigger(h);c&&this.cycle()}},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this).data(E),o=a({},A,i.default(this).data());"object"==typeof e&&(o=a({},o,e));var r="string"==typeof e?e:o.slide;if(n||(n=new t(this,o),i.default(this).data(E,n)),"number"==typeof e)n.to(e);else if("string"==typeof r){if("undefined"==typeof n[r])throw new TypeError('No method named "'+r+'"');n[r]()}else o.interval&&o.ride&&(n.pause(),n.cycle())}))},t._dataApiClickHandler=function(e){var n=u.getSelectorFromElement(this);if(n){var o=i.default(n)[0];if(o&&i.default(o).hasClass("carousel")){var r=a({},i.default(o).data(),i.default(this).data()),s=this.getAttribute("data-slide-to");s&&(r.interval=!1),t._jQueryInterface.call(i.default(o),r),s&&i.default(o).data(E).to(s),e.preventDefault()}}},r(t,null,[{key:"VERSION",get:function(){return"4.6.1"}},{key:"Default",get:function(){return A}}]),t}();i.default(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",O._dataApiClickHandler),i.default(window).on("load.bs.carousel.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),e=0,n=t.length;e<n;e++){var o=i.default(t[e]);O._jQueryInterface.call(o,o.data())}})),i.default.fn[y]=O._jQueryInterface,i.default.fn[y].Constructor=O,i.default.fn[y].noConflict=function(){return i.default.fn[y]=w,O._jQueryInterface};var x="collapse",j="bs.collapse",L=i.default.fn[x],P="show",F="collapse",R="collapsing",H="collapsed",M="width",q='[data-toggle="collapse"]',B={toggle:!0,parent:""},Q={toggle:"boolean",parent:"(string|element)"},W=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(q)),i=0,o=n.length;i<o;i++){var r=n[i],a=u.getSelectorFromElement(r),s=[].slice.call(document.querySelectorAll(a)).filter((function(e){return e===t}));null!==a&&s.length>0&&(this._selector=a,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=t.prototype;return e.toggle=function(){i.default(this._element).hasClass(P)?this.hide():this.show()},e.show=function(){var e,n,o=this;if(!(this._isTransitioning||i.default(this._element).hasClass(P)||(this._parent&&0===(e=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains(F)}))).length&&(e=null),e&&(n=i.default(e).not(this._selector).data(j))&&n._isTransitioning))){var r=i.default.Event("show.bs.collapse");if(i.default(this._element).trigger(r),!r.isDefaultPrevented()){e&&(t._jQueryInterface.call(i.default(e).not(this._selector),"hide"),n||i.default(e).data(j,null));var a=this._getDimension();i.default(this._element).removeClass(F).addClass(R),this._element.style[a]=0,this._triggerArray.length&&i.default(this._triggerArray).removeClass(H).attr("aria-expanded",!0),this.setTransitioning(!0);var s="scroll"+(a[0].toUpperCase()+a.slice(1)),l=u.getTransitionDurationFromElement(this._element);i.default(this._element).one(u.TRANSITION_END,(function(){i.default(o._element).removeClass(R).addClass("collapse show"),o._element.style[a]="",o.setTransitioning(!1),i.default(o._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(l),this._element.style[a]=this._element[s]+"px"}}},e.hide=function(){var t=this;if(!this._isTransitioning&&i.default(this._element).hasClass(P)){var e=i.default.Event("hide.bs.collapse");if(i.default(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",u.reflow(this._element),i.default(this._element).addClass(R).removeClass("collapse show");var o=this._triggerArray.length;if(o>0)for(var r=0;r<o;r++){var a=this._triggerArray[r],s=u.getSelectorFromElement(a);null!==s&&(i.default([].slice.call(document.querySelectorAll(s))).hasClass(P)||i.default(a).addClass(H).attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[n]="";var l=u.getTransitionDurationFromElement(this._element);i.default(this._element).one(u.TRANSITION_END,(function(){t.setTransitioning(!1),i.default(t._element).removeClass(R).addClass(F).trigger("hidden.bs.collapse")})).emulateTransitionEnd(l)}}},e.setTransitioning=function(t){this._isTransitioning=t},e.dispose=function(){i.default.removeData(this._element,j),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(t){return(t=a({},B,t)).toggle=Boolean(t.toggle),u.typeCheckConfig(x,t,Q),t},e._getDimension=function(){return i.default(this._element).hasClass(M)?M:"height"},e._getParent=function(){var e,n=this;u.isElement(this._config.parent)?(e=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',r=[].slice.call(e.querySelectorAll(o));return i.default(r).each((function(e,i){n._addAriaAndCollapsedClass(t._getTargetFromElement(i),[i])})),e},e._addAriaAndCollapsedClass=function(t,e){var n=i.default(t).hasClass(P);e.length&&i.default(e).toggleClass(H,!n).attr("aria-expanded",n)},t._getTargetFromElement=function(t){var e=u.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data(j),r=a({},B,n.data(),"object"==typeof e&&e?e:{});if(!o&&r.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(r.toggle=!1),o||(o=new t(this,r),n.data(j,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.1"}},{key:"Default",get:function(){return B}}]),t}();i.default(document).on("click.bs.collapse.data-api",q,(function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var e=i.default(this),n=u.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(n));i.default(o).each((function(){var t=i.default(this),n=t.data(j)?"toggle":e.data();W._jQueryInterface.call(t,n)}))})),i.default.fn[x]=W._jQueryInterface,i.default.fn[x].Constructor=W,i.default.fn[x].noConflict=function(){return i.default.fn[x]=L,W._jQueryInterface};var U="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,V=function(){for(var t=["Edge","Trident","Firefox"],e=0;e<t.length;e+=1)if(U&&navigator.userAgent.indexOf(t[e])>=0)return 1;return 0}(),Y=U&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then((function(){e=!1,t()})))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout((function(){e=!1,t()}),V))}};function z(t){return t&&"[object Function]"==={}.toString.call(t)}function K(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?n[e]:n}function X(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function G(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=K(t),n=e.overflow,i=e.overflowX,o=e.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?t:G(X(t))}function $(t){return t&&t.referenceNode?t.referenceNode:t}var J=U&&!(!window.MSInputMethodContext||!document.documentMode),Z=U&&/MSIE 10/.test(navigator.userAgent);function tt(t){return 11===t?J:10===t?Z:J||Z}function et(t){if(!t)return document.documentElement;for(var e=tt(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===K(n,"position")?et(n):n:t?t.ownerDocument.documentElement:document.documentElement}function nt(t){return null!==t.parentNode?nt(t.parentNode):t}function it(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,o=n?e:t,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var a,s,l=r.commonAncestorContainer;if(t!==l&&e!==l||i.contains(o))return"BODY"===(s=(a=l).nodeName)||"HTML"!==s&&et(a.firstElementChild)!==a?et(l):l;var u=nt(t);return u.host?it(u.host,e):it(t,nt(e).host)}function ot(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===e?"scrollTop":"scrollLeft",i=t.nodeName;if("BODY"===i||"HTML"===i){var o=t.ownerDocument.documentElement,r=t.ownerDocument.scrollingElement||o;return r[n]}return t[n]}function rt(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=ot(e,"top"),o=ot(e,"left"),r=n?-1:1;return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}function at(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"])+parseFloat(t["border"+i+"Width"])}function st(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],tt(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function lt(t){var e=t.body,n=t.documentElement,i=tt(10)&&getComputedStyle(n);return{height:st("Height",e,n,i),width:st("Width",e,n,i)}}var ut=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},ft=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),dt=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},ct=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function ht(t){return ct({},t,{right:t.left+t.width,bottom:t.top+t.height})}function pt(t){var e={};try{if(tt(10)){e=t.getBoundingClientRect();var n=ot(t,"top"),i=ot(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r="HTML"===t.nodeName?lt(t.ownerDocument):{},a=r.width||t.clientWidth||o.width,s=r.height||t.clientHeight||o.height,l=t.offsetWidth-a,u=t.offsetHeight-s;if(l||u){var f=K(t);l-=at(f,"x"),u-=at(f,"y"),o.width-=l,o.height-=u}return ht(o)}function mt(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=tt(10),o="HTML"===e.nodeName,r=pt(t),a=pt(e),s=G(t),l=K(e),u=parseFloat(l.borderTopWidth),f=parseFloat(l.borderLeftWidth);n&&o&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var d=ht({top:r.top-a.top-u,left:r.left-a.left-f,width:r.width,height:r.height});if(d.marginTop=0,d.marginLeft=0,!i&&o){var c=parseFloat(l.marginTop),h=parseFloat(l.marginLeft);d.top-=u-c,d.bottom-=u-c,d.left-=f-h,d.right-=f-h,d.marginTop=c,d.marginLeft=h}return(i&&!n?e.contains(s):e===s&&"BODY"!==s.nodeName)&&(d=rt(d,e)),d}function gt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=mt(t,n),o=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),a=e?0:ot(n),s=e?0:ot(n,"left"),l={top:a-i.top+i.marginTop,left:s-i.left+i.marginLeft,width:o,height:r};return ht(l)}function _t(t){var e=t.nodeName;if("BODY"===e||"HTML"===e)return!1;if("fixed"===K(t,"position"))return!0;var n=X(t);return!!n&&_t(n)}function vt(t){if(!t||!t.parentElement||tt())return document.documentElement;for(var e=t.parentElement;e&&"none"===K(e,"transform");)e=e.parentElement;return e||document.documentElement}function bt(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},a=o?vt(t):it(t,$(e));if("viewport"===i)r=gt(a,o);else{var s=void 0;"scrollParent"===i?"BODY"===(s=G(X(e))).nodeName&&(s=t.ownerDocument.documentElement):s="window"===i?t.ownerDocument.documentElement:i;var l=mt(s,a,o);if("HTML"!==s.nodeName||_t(a))r=l;else{var u=lt(t.ownerDocument),f=u.height,d=u.width;r.top+=l.top-l.marginTop,r.bottom=f+l.top,r.left+=l.left-l.marginLeft,r.right=d+l.left}}var c="number"==typeof(n=n||0);return r.left+=c?n:n.left||0,r.top+=c?n:n.top||0,r.right-=c?n:n.right||0,r.bottom-=c?n:n.bottom||0,r}function yt(t){return t.width*t.height}function Et(t,e,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var a=bt(n,i,r,o),s={top:{width:a.width,height:e.top-a.top},right:{width:a.right-e.right,height:a.height},bottom:{width:a.width,height:a.bottom-e.bottom},left:{width:e.left-a.left,height:a.height}},l=Object.keys(s).map((function(t){return ct({key:t},s[t],{area:yt(s[t])})})).sort((function(t,e){return e.area-t.area})),u=l.filter((function(t){var e=t.width,i=t.height;return e>=n.clientWidth&&i>=n.clientHeight})),f=u.length>0?u[0].key:l[0].key,d=t.split("-")[1];return f+(d?"-"+d:"")}function wt(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=i?vt(e):it(e,$(n));return mt(n,o,i)}function Tt(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),i=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function Ct(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,(function(t){return e[t]}))}function St(t,e,n){n=n.split("-")[0];var i=Tt(t),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),a=r?"top":"left",s=r?"left":"top",l=r?"height":"width",u=r?"width":"height";return o[a]=e[a]+e[l]/2-i[l]/2,o[s]=n===s?e[s]-i[u]:e[Ct(s)],o}function Nt(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function Dt(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex((function(t){return t.name===n}));var i=Nt(t,(function(t){return t.name===n}));return t.indexOf(i)}(t,0,n))).forEach((function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&z(n)&&(e.offsets.popper=ht(e.offsets.popper),e.offsets.reference=ht(e.offsets.reference),e=n(e,t))})),e}function At(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=wt(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=Et(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=St(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=Dt(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function kt(t,e){return t.some((function(t){var n=t.name;return t.enabled&&n===e}))}function It(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var o=e[i],r=o?""+o+n:t;if("undefined"!=typeof document.body.style[r])return r}return null}function Ot(){return this.state.isDestroyed=!0,kt(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[It("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function xt(t){var e=t.ownerDocument;return e?e.defaultView:window}function jt(t,e,n,i){var o="BODY"===t.nodeName,r=o?t.ownerDocument.defaultView:t;r.addEventListener(e,n,{passive:!0}),o||jt(G(r.parentNode),e,n,i),i.push(r)}function Lt(t,e,n,i){n.updateBound=i,xt(t).addEventListener("resize",n.updateBound,{passive:!0});var o=G(t);return jt(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function Pt(){this.state.eventsEnabled||(this.state=Lt(this.reference,this.options,this.state,this.scheduleUpdate))}function Ft(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,xt(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function Rt(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function Ht(t,e){Object.keys(e).forEach((function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&Rt(e[n])&&(i="px"),t.style[n]=e[n]+i}))}var Mt=U&&/Firefox/i.test(navigator.userAgent);function qt(t,e,n){var i=Nt(t,(function(t){return t.name===e})),o=!!i&&t.some((function(t){return t.name===n&&t.enabled&&t.order<i.order}));if(!o){var r="`"+e+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var Bt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Qt=Bt.slice(3);function Wt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Qt.indexOf(t),i=Qt.slice(n+1).concat(Qt.slice(0,n));return e?i.reverse():i}var Ut={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var o=t.offsets,r=o.reference,a=o.popper,s=-1!==["bottom","top"].indexOf(n),l=s?"left":"top",u=s?"width":"height",f={start:dt({},l,r[l]),end:dt({},l,r[l]+r[u]-a[u])};t.offsets.popper=ct({},a,f[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n,i=e.offset,o=t.placement,r=t.offsets,a=r.popper,s=r.reference,l=o.split("-")[0];return n=Rt(+i)?[+i,0]:function(t,e,n,i){var o=[0,0],r=-1!==["right","left"].indexOf(i),a=t.split(/(\+|\-)/).map((function(t){return t.trim()})),s=a.indexOf(Nt(a,(function(t){return-1!==t.search(/,|\s/)})));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,u=-1!==s?[a.slice(0,s).concat([a[s].split(l)[0]]),[a[s].split(l)[1]].concat(a.slice(s+1))]:[a];return u=u.map((function(t,i){var o=(1===i?!r:r)?"height":"width",a=!1;return t.reduce((function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,a=!0,t):a?(t[t.length-1]+=e,a=!1,t):t.concat(e)}),[]).map((function(t){return function(t,e,n,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],a=o[2];return r?0===a.indexOf("%")?ht("%p"===a?n:i)[e]/100*r:"vh"===a||"vw"===a?("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r:r:t}(t,o,e,n)}))})),u.forEach((function(t,e){t.forEach((function(n,i){Rt(n)&&(o[e]+=n*("-"===t[i-1]?-1:1))}))})),o}(i,a,s,l),"left"===l?(a.top+=n[0],a.left-=n[1]):"right"===l?(a.top+=n[0],a.left+=n[1]):"top"===l?(a.left+=n[0],a.top-=n[1]):"bottom"===l&&(a.left+=n[0],a.top+=n[1]),t.popper=a,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||et(t.instance.popper);t.instance.reference===n&&(n=et(n));var i=It("transform"),o=t.instance.popper.style,r=o.top,a=o.left,s=o[i];o.top="",o.left="",o[i]="";var l=bt(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed);o.top=r,o.left=a,o[i]=s,e.boundaries=l;var u=e.priority,f=t.offsets.popper,d={primary:function(t){var n=f[t];return f[t]<l[t]&&!e.escapeWithReference&&(n=Math.max(f[t],l[t])),dt({},t,n)},secondary:function(t){var n="right"===t?"left":"top",i=f[n];return f[t]>l[t]&&!e.escapeWithReference&&(i=Math.min(f[n],l[t]-("right"===t?f.width:f.height))),dt({},n,i)}};return u.forEach((function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";f=ct({},f,d[e](t))})),t.offsets.popper=f,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,o=t.placement.split("-")[0],r=Math.floor,a=-1!==["top","bottom"].indexOf(o),s=a?"right":"bottom",l=a?"left":"top",u=a?"width":"height";return n[s]<r(i[l])&&(t.offsets.popper[l]=r(i[l])-n[u]),n[l]>r(i[s])&&(t.offsets.popper[l]=r(i[s])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!qt(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var o=t.placement.split("-")[0],r=t.offsets,a=r.popper,s=r.reference,l=-1!==["left","right"].indexOf(o),u=l?"height":"width",f=l?"Top":"Left",d=f.toLowerCase(),c=l?"left":"top",h=l?"bottom":"right",p=Tt(i)[u];s[h]-p<a[d]&&(t.offsets.popper[d]-=a[d]-(s[h]-p)),s[d]+p>a[h]&&(t.offsets.popper[d]+=s[d]+p-a[h]),t.offsets.popper=ht(t.offsets.popper);var m=s[d]+s[u]/2-p/2,g=K(t.instance.popper),_=parseFloat(g["margin"+f]),v=parseFloat(g["border"+f+"Width"]),b=m-t.offsets.popper[d]-_-v;return b=Math.max(Math.min(a[u]-p,b),0),t.arrowElement=i,t.offsets.arrow=(dt(n={},d,Math.round(b)),dt(n,c,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(kt(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=bt(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split("-")[0],o=Ct(i),r=t.placement.split("-")[1]||"",a=[];switch(e.behavior){case"flip":a=[i,o];break;case"clockwise":a=Wt(i);break;case"counterclockwise":a=Wt(i,!0);break;default:a=e.behavior}return a.forEach((function(s,l){if(i!==s||a.length===l+1)return t;i=t.placement.split("-")[0],o=Ct(i);var u=t.offsets.popper,f=t.offsets.reference,d=Math.floor,c="left"===i&&d(u.right)>d(f.left)||"right"===i&&d(u.left)<d(f.right)||"top"===i&&d(u.bottom)>d(f.top)||"bottom"===i&&d(u.top)<d(f.bottom),h=d(u.left)<d(n.left),p=d(u.right)>d(n.right),m=d(u.top)<d(n.top),g=d(u.bottom)>d(n.bottom),_="left"===i&&h||"right"===i&&p||"top"===i&&m||"bottom"===i&&g,v=-1!==["top","bottom"].indexOf(i),b=!!e.flipVariations&&(v&&"start"===r&&h||v&&"end"===r&&p||!v&&"start"===r&&m||!v&&"end"===r&&g),y=!!e.flipVariationsByContent&&(v&&"start"===r&&p||v&&"end"===r&&h||!v&&"start"===r&&g||!v&&"end"===r&&m),E=b||y;(c||_||E)&&(t.flipped=!0,(c||_)&&(i=a[l+1]),E&&(r=function(t){return"end"===t?"start":"start"===t?"end":t}(r)),t.placement=i+(r?"-"+r:""),t.offsets.popper=ct({},t.offsets.popper,St(t.instance.popper,t.offsets.reference,t.placement)),t=Dt(t.instance.modifiers,t,"flip"))})),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,o=i.popper,r=i.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return o[a?"left":"top"]=r[n]-(s?o[a?"width":"height"]:0),t.placement=Ct(e),t.offsets.popper=ht(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!qt(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=Nt(t.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,o=t.offsets.popper,r=Nt(t.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a,s,l=void 0!==r?r:e.gpuAcceleration,u=et(t.instance.popper),f=pt(u),d={position:o.position},c=function(t,e){var n=t.offsets,i=n.popper,o=n.reference,r=Math.round,a=Math.floor,s=function(t){return t},l=r(o.width),u=r(i.width),f=-1!==["left","right"].indexOf(t.placement),d=-1!==t.placement.indexOf("-"),c=e?f||d||l%2==u%2?r:a:s,h=e?r:s;return{left:c(l%2==1&&u%2==1&&!d&&e?i.left-1:i.left),top:h(i.top),bottom:h(i.bottom),right:c(i.right)}}(t,window.devicePixelRatio<2||!Mt),h="bottom"===n?"top":"bottom",p="right"===i?"left":"right",m=It("transform");if(s="bottom"===h?"HTML"===u.nodeName?-u.clientHeight+c.bottom:-f.height+c.bottom:c.top,a="right"===p?"HTML"===u.nodeName?-u.clientWidth+c.right:-f.width+c.right:c.left,l&&m)d[m]="translate3d("+a+"px, "+s+"px, 0)",d[h]=0,d[p]=0,d.willChange="transform";else{var g="bottom"===h?-1:1,_="right"===p?-1:1;d[h]=s*g,d[p]=a*_,d.willChange=h+", "+p}var v={"x-placement":t.placement};return t.attributes=ct({},v,t.attributes),t.styles=ct({},d,t.styles),t.arrowStyles=ct({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return Ht(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach((function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)})),t.arrowElement&&Object.keys(t.arrowStyles).length&&Ht(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,o){var r=wt(o,e,t,n.positionFixed),a=Et(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",a),Ht(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},Vt=function(){function t(e,n){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};ut(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=Y(this.update.bind(this)),this.options=ct({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(ct({},t.Defaults.modifiers,o.modifiers)).forEach((function(e){i.options.modifiers[e]=ct({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(t){return ct({name:t},i.options.modifiers[t])})).sort((function(t,e){return t.order-e.order})),this.modifiers.forEach((function(t){t.enabled&&z(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)})),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return ft(t,[{key:"update",value:function(){return At.call(this)}},{key:"destroy",value:function(){return Ot.call(this)}},{key:"enableEventListeners",value:function(){return Pt.call(this)}},{key:"disableEventListeners",value:function(){return Ft.call(this)}}]),t}();Vt.Utils=("undefined"!=typeof window?window:global).PopperUtils,Vt.placements=Bt,Vt.Defaults=Ut;var Yt=Vt,zt="dropdown",Kt="bs.dropdown",Xt=i.default.fn[zt],Gt=new RegExp("38|40|27"),$t="disabled",Jt="show",Zt="dropdown-menu-right",te="hide.bs.dropdown",ee="hidden.bs.dropdown",ne="click.bs.dropdown.data-api",ie="keydown.bs.dropdown.data-api",oe='[data-toggle="dropdown"]',re=".dropdown-menu",ae={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},se={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},le=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=t.prototype;return e.toggle=function(){if(!this._element.disabled&&!i.default(this._element).hasClass($t)){var e=i.default(this._menu).hasClass(Jt);t._clearMenus(),e||this.show(!0)}},e.show=function(e){if(void 0===e&&(e=!1),!(this._element.disabled||i.default(this._element).hasClass($t)||i.default(this._menu).hasClass(Jt))){var n={relatedTarget:this._element},o=i.default.Event("show.bs.dropdown",n),r=t._getParentFromElement(this._element);if(i.default(r).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar&&e){if("undefined"==typeof Yt)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var a=this._element;"parent"===this._config.reference?a=r:u.isElement(this._config.reference)&&(a=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&i.default(r).addClass("position-static"),this._popper=new Yt(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===i.default(r).closest(".navbar-nav").length&&i.default(document.body).children().on("mouseover",null,i.default.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),i.default(this._menu).toggleClass(Jt),i.default(r).toggleClass(Jt).trigger(i.default.Event("shown.bs.dropdown",n))}}},e.hide=function(){if(!this._element.disabled&&!i.default(this._element).hasClass($t)&&i.default(this._menu).hasClass(Jt)){var e={relatedTarget:this._element},n=i.default.Event(te,e),o=t._getParentFromElement(this._element);i.default(o).trigger(n),n.isDefaultPrevented()||(this._popper&&this._popper.destroy(),i.default(this._menu).toggleClass(Jt),i.default(o).toggleClass(Jt).trigger(i.default.Event(ee,e)))}},e.dispose=function(){i.default.removeData(this._element,Kt),i.default(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;i.default(this._element).on("click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},e._getConfig=function(t){return t=a({},this.constructor.Default,i.default(this._element).data(),t),u.typeCheckConfig(zt,t,this.constructor.DefaultType),t},e._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(re))}return this._menu},e._getPlacement=function(){var t=i.default(this._element.parentNode),e="bottom-start";return t.hasClass("dropup")?e=i.default(this._menu).hasClass(Zt)?"top-end":"top-start":t.hasClass("dropright")?e="right-start":t.hasClass("dropleft")?e="left-start":i.default(this._menu).hasClass(Zt)&&(e="bottom-end"),e},e._detectNavbar=function(){return i.default(this._element).closest(".navbar").length>0},e._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=a({},e.offsets,t._config.offset(e.offsets,t._element)),e}:e.offset=this._config.offset,e},e._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),a({},t,this._config.popperConfig)},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this).data(Kt);if(n||(n=new t(this,"object"==typeof e?e:null),i.default(this).data(Kt,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}}))},t._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=[].slice.call(document.querySelectorAll(oe)),o=0,r=n.length;o<r;o++){var a=t._getParentFromElement(n[o]),s=i.default(n[o]).data(Kt),l={relatedTarget:n[o]};if(e&&"click"===e.type&&(l.clickEvent=e),s){var u=s._menu;if(i.default(a).hasClass(Jt)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&i.default.contains(a,e.target))){var f=i.default.Event(te,l);i.default(a).trigger(f),f.isDefaultPrevented()||("ontouchstart"in document.documentElement&&i.default(document.body).children().off("mouseover",null,i.default.noop),n[o].setAttribute("aria-expanded","false"),s._popper&&s._popper.destroy(),i.default(u).removeClass(Jt),i.default(a).removeClass(Jt).trigger(i.default.Event(ee,l)))}}}},t._getParentFromElement=function(t){var e,n=u.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(e){if(!(/input|textarea/i.test(e.target.tagName)?32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||i.default(e.target).closest(re).length):!Gt.test(e.which))&&!this.disabled&&!i.default(this).hasClass($t)){var n=t._getParentFromElement(this),o=i.default(n).hasClass(Jt);if(o||27!==e.which){if(e.preventDefault(),e.stopPropagation(),!o||27===e.which||32===e.which)return 27===e.which&&i.default(n.querySelector(oe)).trigger("focus"),void i.default(this).trigger("click");var r=[].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t){return i.default(t).is(":visible")}));if(0!==r.length){var a=r.indexOf(e.target);38===e.which&&a>0&&a--,40===e.which&&a<r.length-1&&a++,a<0&&(a=0),r[a].focus()}}}},r(t,null,[{key:"VERSION",get:function(){return"4.6.1"}},{key:"Default",get:function(){return ae}},{key:"DefaultType",get:function(){return se}}]),t}();i.default(document).on(ie,oe,le._dataApiKeydownHandler).on(ie,re,le._dataApiKeydownHandler).on(ne+" keyup.bs.dropdown.data-api",le._clearMenus).on(ne,oe,(function(t){t.preventDefault(),t.stopPropagation(),le._jQueryInterface.call(i.default(this),"toggle")})).on(ne,".dropdown form",(function(t){t.stopPropagation()})),i.default.fn[zt]=le._jQueryInterface,i.default.fn[zt].Constructor=le,i.default.fn[zt].noConflict=function(){return i.default.fn[zt]=Xt,le._jQueryInterface};var ue="bs.modal",fe=i.default.fn.modal,de="modal-open",ce="fade",he="show",pe="modal-static",me="hidden.bs.modal",ge="show.bs.modal",_e="focusin.bs.modal",ve="resize.bs.modal",be="click.dismiss.bs.modal",ye="keydown.dismiss.bs.modal",Ee="mousedown.dismiss.bs.modal",we=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Te={backdrop:!0,keyboard:!0,focus:!0,show:!0},Ce={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Se=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var e=t.prototype;return e.toggle=function(t){return this._isShown?this.hide():this.show(t)},e.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){var n=i.default.Event(ge,{relatedTarget:t});i.default(this._element).trigger(n),n.isDefaultPrevented()||(this._isShown=!0,i.default(this._element).hasClass(ce)&&(this._isTransitioning=!0),this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),i.default(this._element).on(be,'[data-dismiss="modal"]',(function(t){return e.hide(t)})),i.default(this._dialog).on(Ee,(function(){i.default(e._element).one("mouseup.dismiss.bs.modal",(function(t){i.default(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return e._showElement(t)})))}},e.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=i.default.Event("hide.bs.modal");if(i.default(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var o=i.default(this._element).hasClass(ce);if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),i.default(document).off(_e),i.default(this._element).removeClass(he),i.default(this._element).off(be),i.default(this._dialog).off(Ee),o){var r=u.getTransitionDurationFromElement(this._element);i.default(this._element).one(u.TRANSITION_END,(function(t){return e._hideModal(t)})).emulateTransitionEnd(r)}else this._hideModal()}}},e.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return i.default(t).off(".bs.modal")})),i.default(document).off(_e),i.default.removeData(this._element,ue),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(t){return t=a({},Te,t),u.typeCheckConfig("modal",t,Ce),t},e._triggerBackdropTransition=function(){var t=this,e=i.default.Event("hidePrevented.bs.modal");if(i.default(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._element.scrollHeight>document.documentElement.clientHeight;n||(this._element.style.overflowY="hidden"),this._element.classList.add(pe);var o=u.getTransitionDurationFromElement(this._dialog);i.default(this._element).off(u.TRANSITION_END),i.default(this._element).one(u.TRANSITION_END,(function(){t._element.classList.remove(pe),n||i.default(t._element).one(u.TRANSITION_END,(function(){t._element.style.overflowY=""})).emulateTransitionEnd(t._element,o)})).emulateTransitionEnd(o),this._element.focus()}},e._showElement=function(t){var e=this,n=i.default(this._element).hasClass(ce),o=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),i.default(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,n&&u.reflow(this._element),i.default(this._element).addClass(he),this._config.focus&&this._enforceFocus();var r=i.default.Event("shown.bs.modal",{relatedTarget:t}),a=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,i.default(e._element).trigger(r)};if(n){var s=u.getTransitionDurationFromElement(this._dialog);i.default(this._dialog).one(u.TRANSITION_END,a).emulateTransitionEnd(s)}else a()},e._enforceFocus=function(){var t=this;i.default(document).off(_e).on(_e,(function(e){document!==e.target&&t._element!==e.target&&0===i.default(t._element).has(e.target).length&&t._element.focus()}))},e._setEscapeEvent=function(){var t=this;this._isShown?i.default(this._element).on(ye,(function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()})):this._isShown||i.default(this._element).off(ye)},e._setResizeEvent=function(){var t=this;this._isShown?i.default(window).on(ve,(function(e){return t.handleUpdate(e)})):i.default(window).off(ve)},e._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop((function(){i.default(document.body).removeClass(de),t._resetAdjustments(),t._resetScrollbar(),i.default(t._element).trigger(me)}))},e._removeBackdrop=function(){this._backdrop&&(i.default(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(t){var e=this,n=i.default(this._element).hasClass(ce)?ce:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",n&&this._backdrop.classList.add(n),i.default(this._backdrop).appendTo(document.body),i.default(this._element).on(be,(function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._triggerBackdropTransition():e.hide())})),n&&u.reflow(this._backdrop),i.default(this._backdrop).addClass(he),!t)return;if(!n)return void t();var o=u.getTransitionDurationFromElement(this._backdrop);i.default(this._backdrop).one(u.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){i.default(this._backdrop).removeClass(he);var r=function(){e._removeBackdrop(),t&&t()};if(i.default(this._element).hasClass(ce)){var a=u.getTransitionDurationFromElement(this._backdrop);i.default(this._backdrop).one(u.TRANSITION_END,r).emulateTransitionEnd(a)}else r()}else t&&t()},e._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(we)),n=[].slice.call(document.querySelectorAll(".sticky-top"));i.default(e).each((function(e,n){var o=n.style.paddingRight,r=i.default(n).css("padding-right");i.default(n).data("padding-right",o).css("padding-right",parseFloat(r)+t._scrollbarWidth+"px")})),i.default(n).each((function(e,n){var o=n.style.marginRight,r=i.default(n).css("margin-right");i.default(n).data("margin-right",o).css("margin-right",parseFloat(r)-t._scrollbarWidth+"px")}));var o=document.body.style.paddingRight,r=i.default(document.body).css("padding-right");i.default(document.body).data("padding-right",o).css("padding-right",parseFloat(r)+this._scrollbarWidth+"px")}i.default(document.body).addClass(de)},e._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(we));i.default(t).each((function(t,e){var n=i.default(e).data("padding-right");i.default(e).removeData("padding-right"),e.style.paddingRight=n||""}));var e=[].slice.call(document.querySelectorAll(".sticky-top"));i.default(e).each((function(t,e){var n=i.default(e).data("margin-right");"undefined"!=typeof n&&i.default(e).css("margin-right",n).removeData("margin-right")}));var n=i.default(document.body).data("padding-right");i.default(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},e._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(e,n){return this.each((function(){var o=i.default(this).data(ue),r=a({},Te,i.default(this).data(),"object"==typeof e&&e?e:{});if(o||(o=new t(this,r),i.default(this).data(ue,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e](n)}else r.show&&o.show(n)}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.1"}},{key:"Default",get:function(){return Te}}]),t}();i.default(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var e,n=this,o=u.getSelectorFromElement(this);o&&(e=document.querySelector(o));var r=i.default(e).data(ue)?"toggle":a({},i.default(e).data(),i.default(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var s=i.default(e).one(ge,(function(t){t.isDefaultPrevented()||s.one(me,(function(){i.default(n).is(":visible")&&n.focus()}))}));Se._jQueryInterface.call(i.default(e),r,this)})),i.default.fn.modal=Se._jQueryInterface,i.default.fn.modal.Constructor=Se,i.default.fn.modal.noConflict=function(){return i.default.fn.modal=fe,Se._jQueryInterface};var Ne=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],De=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Ae=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function ke(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),r=[].slice.call(i.body.querySelectorAll("*")),a=function(t,n){var i=r[t],a=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var s=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[a]||[]);s.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===Ne.indexOf(n)||Boolean(De.test(t.nodeValue)||Ae.test(t.nodeValue));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,r=i.length;o<r;o++)if(i[o].test(n))return!0;return!1})(t,l)||i.removeAttribute(t.nodeName)}))},s=0,l=r.length;s<l;s++)a(s);return i.body.innerHTML}var Ie="tooltip",Oe="bs.tooltip",xe=i.default.fn.tooltip,je=new RegExp("(^|\\s)bs-tooltip\\S+","g"),Le=["sanitize","whiteList","sanitizeFn"],Pe="fade",Fe="show",Re="show",He="out",Me="hover",qe="focus",Be={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Qe={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},We={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Ue={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},Ve=function(){function t(t,e){if("undefined"==typeof Yt)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var e=t.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=i.default(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),i.default(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(i.default(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),i.default.removeData(this.element,this.constructor.DATA_KEY),i.default(this.element).off(this.constructor.EVENT_KEY),i.default(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&i.default(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var t=this;if("none"===i.default(this.element).css("display"))throw new Error("Please use show on visible elements");var e=i.default.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){i.default(this.element).trigger(e);var n=u.findShadowRoot(this.element),o=i.default.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(e.isDefaultPrevented()||!o)return;var r=this.getTipElement(),a=u.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&i.default(r).addClass(Pe);var s="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,l=this._getAttachment(s);this.addAttachmentClass(l);var f=this._getContainer();i.default(r).data(this.constructor.DATA_KEY,this),i.default.contains(this.element.ownerDocument.documentElement,this.tip)||i.default(r).appendTo(f),i.default(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Yt(this.element,r,this._getPopperConfig(l)),i.default(r).addClass(Fe),i.default(r).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&i.default(document.body).children().on("mouseover",null,i.default.noop);var d=function(){t.config.animation&&t._fixTransition();var e=t._hoverState;t._hoverState=null,i.default(t.element).trigger(t.constructor.Event.SHOWN),e===He&&t._leave(null,t)};if(i.default(this.tip).hasClass(Pe)){var c=u.getTransitionDurationFromElement(this.tip);i.default(this.tip).one(u.TRANSITION_END,d).emulateTransitionEnd(c)}else d()}},e.hide=function(t){var e=this,n=this.getTipElement(),o=i.default.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==Re&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),i.default(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(i.default(this.element).trigger(o),!o.isDefaultPrevented()){if(i.default(n).removeClass(Fe),"ontouchstart"in document.documentElement&&i.default(document.body).children().off("mouseover",null,i.default.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,i.default(this.tip).hasClass(Pe)){var a=u.getTransitionDurationFromElement(n);i.default(n).one(u.TRANSITION_END,r).emulateTransitionEnd(a)}else r();this._hoverState=""}},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(t){i.default(this.getTipElement()).addClass("bs-tooltip-"+t)},e.getTipElement=function(){return this.tip=this.tip||i.default(this.config.template)[0],this.tip},e.setContent=function(){var t=this.getTipElement();this.setElementContent(i.default(t.querySelectorAll(".tooltip-inner")),this.getTitle()),i.default(t).removeClass("fade show")},e.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=ke(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?i.default(e).parent().is(t)||t.empty().append(e):t.text(i.default(e).text())},e.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},e._getPopperConfig=function(t){var e=this;return a({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},this.config.popperConfig)},e._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=a({},e.offsets,t.config.offset(e.offsets,t.element)),e}:e.offset=this.config.offset,e},e._getContainer=function(){return!1===this.config.container?document.body:u.isElement(this.config.container)?i.default(this.config.container):i.default(document).find(this.config.container)},e._getAttachment=function(t){return Be[t.toUpperCase()]},e._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(e){if("click"===e)i.default(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==e){var n=e===Me?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o=e===Me?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;i.default(t.element).on(n,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},i.default(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=a({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||i.default(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),i.default(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?qe:Me]=!0),i.default(e.getTipElement()).hasClass(Fe)||e._hoverState===Re?e._hoverState=Re:(clearTimeout(e._timeout),e._hoverState=Re,e.config.delay&&e.config.delay.show?e._timeout=setTimeout((function(){e._hoverState===Re&&e.show()}),e.config.delay.show):e.show())},e._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||i.default(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),i.default(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?qe:Me]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout((function(){e._hoverState===He&&e.hide()}),e.config.delay.hide):e.hide())},e._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},e._getConfig=function(t){var e=i.default(this.element).data();return Object.keys(e).forEach((function(t){-1!==Le.indexOf(t)&&delete e[t]})),"number"==typeof(t=a({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),u.typeCheckConfig(Ie,t,this.constructor.DefaultType),t.sanitize&&(t.template=ke(t.template,t.whiteList,t.sanitizeFn)),t},e._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},e._cleanTipClass=function(){var t=i.default(this.getTipElement()),e=t.attr("class").match(je);null!==e&&e.length&&t.removeClass(e.join(""))},e._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},e._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(i.default(t).removeClass(Pe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data(Oe),r="object"==typeof e&&e;if((o||!/dispose|hide/.test(e))&&(o||(o=new t(this,r),n.data(Oe,o)),"string"==typeof e)){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.1"}},{key:"Default",get:function(){return Qe}},{key:"NAME",get:function(){return Ie}},{key:"DATA_KEY",get:function(){return Oe}},{key:"Event",get:function(){return Ue}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return We}}]),t}();i.default.fn.tooltip=Ve._jQueryInterface,i.default.fn.tooltip.Constructor=Ve,i.default.fn.tooltip.noConflict=function(){return i.default.fn.tooltip=xe,Ve._jQueryInterface};var Ye="bs.popover",ze=i.default.fn.popover,Ke=new RegExp("(^|\\s)bs-popover\\S+","g"),Xe=a({},Ve.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ge=a({},Ve.DefaultType,{content:"(string|element|function)"}),$e={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},Je=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,s(e,n);var a=o.prototype;return a.isWithContent=function(){return this.getTitle()||this._getContent()},a.addAttachmentClass=function(t){i.default(this.getTipElement()).addClass("bs-popover-"+t)},a.getTipElement=function(){return this.tip=this.tip||i.default(this.config.template)[0],this.tip},a.setContent=function(){var t=i.default(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(".popover-body"),e),t.removeClass("fade show")},a._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},a._cleanTipClass=function(){var t=i.default(this.getTipElement()),e=t.attr("class").match(Ke);null!==e&&e.length>0&&t.removeClass(e.join(""))},o._jQueryInterface=function(t){return this.each((function(){var e=i.default(this).data(Ye),n="object"==typeof t?t:null;if((e||!/dispose|hide/.test(t))&&(e||(e=new o(this,n),i.default(this).data(Ye,e)),"string"==typeof t)){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}}))},r(o,null,[{key:"VERSION",get:function(){return"4.6.1"}},{key:"Default",get:function(){return Xe}},{key:"NAME",get:function(){return"popover"}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return $e}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return Ge}}]),o}(Ve);i.default.fn.popover=Je._jQueryInterface,i.default.fn.popover.Constructor=Je,i.default.fn.popover.noConflict=function(){return i.default.fn.popover=ze,Je._jQueryInterface};var Ze="scrollspy",tn="bs.scrollspy",en=i.default.fn[Ze],nn="active",on="position",rn=".nav, .list-group",an={offset:10,method:"auto",target:""},sn={offset:"number",method:"string",target:"(string|element)"},ln=function(){function t(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,i.default(this._scrollElement).on("scroll.bs.scrollspy",(function(t){return n._process(t)})),this.refresh(),this._process()}var e=t.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?"offset":on,n="auto"===this._config.method?e:this._config.method,o=n===on?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var e,r=u.getSelectorFromElement(t);if(r&&(e=document.querySelector(r)),e){var a=e.getBoundingClientRect();if(a.width||a.height)return[i.default(e)[n]().top+o,r]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},e.dispose=function(){i.default.removeData(this._element,tn),i.default(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(t){if("string"!=typeof(t=a({},an,"object"==typeof t&&t?t:{})).target&&u.isElement(t.target)){var e=i.default(t.target).attr("id");e||(e=u.getUID(Ze),i.default(t.target).attr("id",e)),t.target="#"+e}return u.typeCheckConfig(Ze,t,sn),t},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;)this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),n=i.default([].slice.call(document.querySelectorAll(e.join(","))));n.hasClass("dropdown-item")?(n.closest(".dropdown").find(".dropdown-toggle").addClass(nn),n.addClass(nn)):(n.addClass(nn),n.parents(rn).prev(".nav-link, .list-group-item").addClass(nn),n.parents(rn).prev(".nav-item").children(".nav-link").addClass(nn)),i.default(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},e._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains(nn)})).forEach((function(t){return t.classList.remove(nn)}))},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this).data(tn);if(n||(n=new t(this,"object"==typeof e&&e),i.default(this).data(tn,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.1"}},{key:"Default",get:function(){return an}}]),t}();i.default(window).on("load.bs.scrollspy.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),e=t.length;e--;){var n=i.default(t[e]);ln._jQueryInterface.call(n,n.data())}})),i.default.fn[Ze]=ln._jQueryInterface,i.default.fn[Ze].Constructor=ln,i.default.fn[Ze].noConflict=function(){return i.default.fn[Ze]=en,ln._jQueryInterface};var un="bs.tab",fn=i.default.fn.tab,dn="active",cn="fade",hn="show",pn=".active",mn="> li > .active",gn=function(){function t(t){this._element=t}var e=t.prototype;return e.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&i.default(this._element).hasClass(dn)||i.default(this._element).hasClass("disabled"))){var e,n,o=i.default(this._element).closest(".nav, .list-group")[0],r=u.getSelectorFromElement(this._element);if(o){var a="UL"===o.nodeName||"OL"===o.nodeName?mn:pn;n=(n=i.default.makeArray(i.default(o).find(a)))[n.length-1]}var s=i.default.Event("hide.bs.tab",{relatedTarget:this._element}),l=i.default.Event("show.bs.tab",{relatedTarget:n});if(n&&i.default(n).trigger(s),i.default(this._element).trigger(l),!l.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(e=document.querySelector(r)),this._activate(this._element,o);var f=function(){var e=i.default.Event("hidden.bs.tab",{relatedTarget:t._element}),o=i.default.Event("shown.bs.tab",{relatedTarget:n});i.default(n).trigger(e),i.default(t._element).trigger(o)};e?this._activate(e,e.parentNode,f):f()}}},e.dispose=function(){i.default.removeData(this._element,un),this._element=null},e._activate=function(t,e,n){var o=this,r=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?i.default(e).children(pn):i.default(e).find(mn))[0],a=n&&r&&i.default(r).hasClass(cn),s=function(){return o._transitionComplete(t,r,n)};if(r&&a){var l=u.getTransitionDurationFromElement(r);i.default(r).removeClass(hn).one(u.TRANSITION_END,s).emulateTransitionEnd(l)}else s()},e._transitionComplete=function(t,e,n){if(e){i.default(e).removeClass(dn);var o=i.default(e.parentNode).find("> .dropdown-menu .active")[0];o&&i.default(o).removeClass(dn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}i.default(t).addClass(dn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),u.reflow(t),t.classList.contains(cn)&&t.classList.add(hn);var r=t.parentNode;if(r&&"LI"===r.nodeName&&(r=r.parentNode),r&&i.default(r).hasClass("dropdown-menu")){var a=i.default(t).closest(".dropdown")[0];if(a){var s=[].slice.call(a.querySelectorAll(".dropdown-toggle"));i.default(s).addClass(dn)}t.setAttribute("aria-expanded",!0)}n&&n()},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data(un);if(o||(o=new t(this),n.data(un,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.1"}}]),t}();i.default(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),gn._jQueryInterface.call(i.default(this),"show")})),i.default.fn.tab=gn._jQueryInterface,i.default.fn.tab.Constructor=gn,i.default.fn.tab.noConflict=function(){return i.default.fn.tab=fn,gn._jQueryInterface};var _n="bs.toast",vn=i.default.fn.toast,bn="hide",yn="show",En="showing",wn="click.dismiss.bs.toast",Tn={animation:!0,autohide:!0,delay:500},Cn={animation:"boolean",autohide:"boolean",delay:"number"},Sn=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var e=t.prototype;return e.show=function(){var t=this,e=i.default.Event("show.bs.toast");if(i.default(this._element).trigger(e),!e.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");var n=function(){t._element.classList.remove(En),t._element.classList.add(yn),i.default(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove(bn),u.reflow(this._element),this._element.classList.add(En),this._config.animation){var o=u.getTransitionDurationFromElement(this._element);i.default(this._element).one(u.TRANSITION_END,n).emulateTransitionEnd(o)}else n()}},e.hide=function(){if(this._element.classList.contains(yn)){var t=i.default.Event("hide.bs.toast");i.default(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},e.dispose=function(){this._clearTimeout(),this._element.classList.contains(yn)&&this._element.classList.remove(yn),i.default(this._element).off(wn),i.default.removeData(this._element,_n),this._element=null,this._config=null},e._getConfig=function(t){return t=a({},Tn,i.default(this._element).data(),"object"==typeof t&&t?t:{}),u.typeCheckConfig("toast",t,this.constructor.DefaultType),t},e._setListeners=function(){var t=this;i.default(this._element).on(wn,'[data-dismiss="toast"]',(function(){return t.hide()}))},e._close=function(){var t=this,e=function(){t._element.classList.add(bn),i.default(t._element).trigger("hidden.bs.toast")};if(this._element.classList.remove(yn),this._config.animation){var n=u.getTransitionDurationFromElement(this._element);i.default(this._element).one(u.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},e._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data(_n);if(o||(o=new t(this,"object"==typeof e&&e),n.data(_n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e](this)}}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.1"}},{key:"DefaultType",get:function(){return Cn}},{key:"Default",get:function(){return Tn}}]),t}();i.default.fn.toast=Sn._jQueryInterface,i.default.fn.toast.Constructor=Sn,i.default.fn.toast.noConflict=function(){return i.default.fn.toast=vn,Sn._jQueryInterface},t.Alert=c,t.Button=b,t.Carousel=O,t.Collapse=W,t.Dropdown=le,t.Modal=Se,t.Popover=Je,t.Scrollspy=ln,t.Tab=gn,t.Toast=Sn,t.Tooltip=Ve,t.Util=u,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
/*!
 * Chart.js v2.9.4
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(function(){try{return require("moment")}catch(t){}}()):"function"==typeof define&&define.amd?define(["require"],(function(t){return e(function(){try{return t("moment")}catch(t){}}())})):(t=t||self).Chart=e(t.moment)}(this,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},n=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){var n={};for(var i in e)e.hasOwnProperty(i)&&(n[e[i]]=i);var a=t.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var r in a)if(a.hasOwnProperty(r)){if(!("channels"in a[r]))throw new Error("missing channels property: "+r);if(!("labels"in a[r]))throw new Error("missing channel labels property: "+r);if(a[r].labels.length!==a[r].channels)throw new Error("channel and label counts mismatch: "+r);var o=a[r].channels,s=a[r].labels;delete a[r].channels,delete a[r].labels,Object.defineProperty(a[r],"channels",{value:o}),Object.defineProperty(a[r],"labels",{value:s})}a.rgb.hsl=function(t){var e,n,i=t[0]/255,a=t[1]/255,r=t[2]/255,o=Math.min(i,a,r),s=Math.max(i,a,r),l=s-o;return s===o?e=0:i===s?e=(a-r)/l:a===s?e=2+(r-i)/l:r===s&&(e=4+(i-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),n=(o+s)/2,[e,100*(s===o?0:n<=.5?l/(s+o):l/(2-s-o)),100*n]},a.rgb.hsv=function(t){var e,n,i,a,r,o=t[0]/255,s=t[1]/255,l=t[2]/255,u=Math.max(o,s,l),d=u-Math.min(o,s,l),h=function(t){return(u-t)/6/d+.5};return 0===d?a=r=0:(r=d/u,e=h(o),n=h(s),i=h(l),o===u?a=i-n:s===u?a=1/3+e-i:l===u&&(a=2/3+n-e),a<0?a+=1:a>1&&(a-=1)),[360*a,100*r,100*u]},a.rgb.hwb=function(t){var e=t[0],n=t[1],i=t[2];return[a.rgb.hsl(t)[0],100*(1/255*Math.min(e,Math.min(n,i))),100*(i=1-1/255*Math.max(e,Math.max(n,i)))]},a.rgb.cmyk=function(t){var e,n=t[0]/255,i=t[1]/255,a=t[2]/255;return[100*((1-n-(e=Math.min(1-n,1-i,1-a)))/(1-e)||0),100*((1-i-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]},a.rgb.keyword=function(t){var i=n[t];if(i)return i;var a,r,o,s=1/0;for(var l in e)if(e.hasOwnProperty(l)){var u=e[l],d=(r=t,o=u,Math.pow(r[0]-o[0],2)+Math.pow(r[1]-o[1],2)+Math.pow(r[2]-o[2],2));d<s&&(s=d,a=l)}return a},a.keyword.rgb=function(t){return e[t]},a.rgb.xyz=function(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92)),100*(.2126*e+.7152*n+.0722*i),100*(.0193*e+.1192*n+.9505*i)]},a.rgb.lab=function(t){var e=a.rgb.xyz(t),n=e[0],i=e[1],r=e[2];return i/=100,r/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116)-16,500*(n-i),200*(i-(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116))]},a.hsl.rgb=function(t){var e,n,i,a,r,o=t[0]/360,s=t[1]/100,l=t[2]/100;if(0===s)return[r=255*l,r,r];e=2*l-(n=l<.5?l*(1+s):l+s-l*s),a=[0,0,0];for(var u=0;u<3;u++)(i=o+1/3*-(u-1))<0&&i++,i>1&&i--,r=6*i<1?e+6*(n-e)*i:2*i<1?n:3*i<2?e+(n-e)*(2/3-i)*6:e,a[u]=255*r;return a},a.hsl.hsv=function(t){var e=t[0],n=t[1]/100,i=t[2]/100,a=n,r=Math.max(i,.01);return n*=(i*=2)<=1?i:2-i,a*=r<=1?r:2-r,[e,100*(0===i?2*a/(r+a):2*n/(i+n)),100*((i+n)/2)]},a.hsv.rgb=function(t){var e=t[0]/60,n=t[1]/100,i=t[2]/100,a=Math.floor(e)%6,r=e-Math.floor(e),o=255*i*(1-n),s=255*i*(1-n*r),l=255*i*(1-n*(1-r));switch(i*=255,a){case 0:return[i,l,o];case 1:return[s,i,o];case 2:return[o,i,l];case 3:return[o,s,i];case 4:return[l,o,i];case 5:return[i,o,s]}},a.hsv.hsl=function(t){var e,n,i,a=t[0],r=t[1]/100,o=t[2]/100,s=Math.max(o,.01);return i=(2-r)*o,n=r*s,[a,100*(n=(n/=(e=(2-r)*s)<=1?e:2-e)||0),100*(i/=2)]},a.hwb.rgb=function(t){var e,n,i,a,r,o,s,l=t[0]/360,u=t[1]/100,d=t[2]/100,h=u+d;switch(h>1&&(u/=h,d/=h),i=6*l-(e=Math.floor(6*l)),0!=(1&e)&&(i=1-i),a=u+i*((n=1-d)-u),e){default:case 6:case 0:r=n,o=a,s=u;break;case 1:r=a,o=n,s=u;break;case 2:r=u,o=n,s=a;break;case 3:r=u,o=a,s=n;break;case 4:r=a,o=u,s=n;break;case 5:r=n,o=u,s=a}return[255*r,255*o,255*s]},a.cmyk.rgb=function(t){var e=t[0]/100,n=t[1]/100,i=t[2]/100,a=t[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a)),255*(1-Math.min(1,i*(1-a)+a))]},a.xyz.rgb=function(t){var e,n,i,a=t[0]/100,r=t[1]/100,o=t[2]/100;return n=-.9689*a+1.8758*r+.0415*o,i=.0557*a+-.204*r+1.057*o,e=(e=3.2406*a+-1.5372*r+-.4986*o)>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:12.92*i,[255*(e=Math.min(Math.max(0,e),1)),255*(n=Math.min(Math.max(0,n),1)),255*(i=Math.min(Math.max(0,i),1))]},a.xyz.lab=function(t){var e=t[0],n=t[1],i=t[2];return n/=100,i/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(e-n),200*(n-(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116))]},a.lab.xyz=function(t){var e,n,i,a=t[0];e=t[1]/500+(n=(a+16)/116),i=n-t[2]/200;var r=Math.pow(n,3),o=Math.pow(e,3),s=Math.pow(i,3);return n=r>.008856?r:(n-16/116)/7.787,e=o>.008856?o:(e-16/116)/7.787,i=s>.008856?s:(i-16/116)/7.787,[e*=95.047,n*=100,i*=108.883]},a.lab.lch=function(t){var e,n=t[0],i=t[1],a=t[2];return(e=360*Math.atan2(a,i)/2/Math.PI)<0&&(e+=360),[n,Math.sqrt(i*i+a*a),e]},a.lch.lab=function(t){var e,n=t[0],i=t[1];return e=t[2]/360*2*Math.PI,[n,i*Math.cos(e),i*Math.sin(e)]},a.rgb.ansi16=function(t){var e=t[0],n=t[1],i=t[2],r=1 in arguments?arguments[1]:a.rgb.hsv(t)[2];if(0===(r=Math.round(r/50)))return 30;var o=30+(Math.round(i/255)<<2|Math.round(n/255)<<1|Math.round(e/255));return 2===r&&(o+=60),o},a.hsv.ansi16=function(t){return a.rgb.ansi16(a.hsv.rgb(t),t[2])},a.rgb.ansi256=function(t){var e=t[0],n=t[1],i=t[2];return e===n&&n===i?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(i/255*5)},a.ansi16.rgb=function(t){var e=t%10;if(0===e||7===e)return t>50&&(e+=3.5),[e=e/10.5*255,e,e];var n=.5*(1+~~(t>50));return[(1&e)*n*255,(e>>1&1)*n*255,(e>>2&1)*n*255]},a.ansi256.rgb=function(t){if(t>=232){var e=10*(t-232)+8;return[e,e,e]}var n;return t-=16,[Math.floor(t/36)/5*255,Math.floor((n=t%36)/6)/5*255,n%6/5*255]},a.rgb.hex=function(t){var e=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},a.hex.rgb=function(t){var e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];var n=e[0];3===e[0].length&&(n=n.split("").map((function(t){return t+t})).join(""));var i=parseInt(n,16);return[i>>16&255,i>>8&255,255&i]},a.rgb.hcg=function(t){var e,n=t[0]/255,i=t[1]/255,a=t[2]/255,r=Math.max(Math.max(n,i),a),o=Math.min(Math.min(n,i),a),s=r-o;return e=s<=0?0:r===n?(i-a)/s%6:r===i?2+(a-n)/s:4+(n-i)/s+4,e/=6,[360*(e%=1),100*s,100*(s<1?o/(1-s):0)]},a.hsl.hcg=function(t){var e=t[1]/100,n=t[2]/100,i=1,a=0;return(i=n<.5?2*e*n:2*e*(1-n))<1&&(a=(n-.5*i)/(1-i)),[t[0],100*i,100*a]},a.hsv.hcg=function(t){var e=t[1]/100,n=t[2]/100,i=e*n,a=0;return i<1&&(a=(n-i)/(1-i)),[t[0],100*i,100*a]},a.hcg.rgb=function(t){var e=t[0]/360,n=t[1]/100,i=t[2]/100;if(0===n)return[255*i,255*i,255*i];var a,r=[0,0,0],o=e%1*6,s=o%1,l=1-s;switch(Math.floor(o)){case 0:r[0]=1,r[1]=s,r[2]=0;break;case 1:r[0]=l,r[1]=1,r[2]=0;break;case 2:r[0]=0,r[1]=1,r[2]=s;break;case 3:r[0]=0,r[1]=l,r[2]=1;break;case 4:r[0]=s,r[1]=0,r[2]=1;break;default:r[0]=1,r[1]=0,r[2]=l}return a=(1-n)*i,[255*(n*r[0]+a),255*(n*r[1]+a),255*(n*r[2]+a)]},a.hcg.hsv=function(t){var e=t[1]/100,n=e+t[2]/100*(1-e),i=0;return n>0&&(i=e/n),[t[0],100*i,100*n]},a.hcg.hsl=function(t){var e=t[1]/100,n=t[2]/100*(1-e)+.5*e,i=0;return n>0&&n<.5?i=e/(2*n):n>=.5&&n<1&&(i=e/(2*(1-n))),[t[0],100*i,100*n]},a.hcg.hwb=function(t){var e=t[1]/100,n=e+t[2]/100*(1-e);return[t[0],100*(n-e),100*(1-n)]},a.hwb.hcg=function(t){var e=t[1]/100,n=1-t[2]/100,i=n-e,a=0;return i<1&&(a=(n-i)/(1-i)),[t[0],100*i,100*a]},a.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},a.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},a.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},a.gray.hsl=a.gray.hsv=function(t){return[0,0,t[0]]},a.gray.hwb=function(t){return[0,100,t[0]]},a.gray.cmyk=function(t){return[0,0,0,t[0]]},a.gray.lab=function(t){return[t[0],0,0]},a.gray.hex=function(t){var e=255&Math.round(t[0]/100*255),n=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(n.length)+n},a.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]}}));n.rgb,n.hsl,n.hsv,n.hwb,n.cmyk,n.xyz,n.lab,n.lch,n.hex,n.keyword,n.ansi16,n.ansi256,n.hcg,n.apple,n.gray;function i(t){var e=function(){for(var t={},e=Object.keys(n),i=e.length,a=0;a<i;a++)t[e[a]]={distance:-1,parent:null};return t}(),i=[t];for(e[t].distance=0;i.length;)for(var a=i.pop(),r=Object.keys(n[a]),o=r.length,s=0;s<o;s++){var l=r[s],u=e[l];-1===u.distance&&(u.distance=e[a].distance+1,u.parent=a,i.unshift(l))}return e}function a(t,e){return function(n){return e(t(n))}}function r(t,e){for(var i=[e[t].parent,t],r=n[e[t].parent][t],o=e[t].parent;e[o].parent;)i.unshift(e[o].parent),r=a(n[e[o].parent][o],r),o=e[o].parent;return r.conversion=i,r}var o={};Object.keys(n).forEach((function(t){o[t]={},Object.defineProperty(o[t],"channels",{value:n[t].channels}),Object.defineProperty(o[t],"labels",{value:n[t].labels});var e=function(t){for(var e=i(t),n={},a=Object.keys(e),o=a.length,s=0;s<o;s++){var l=a[s];null!==e[l].parent&&(n[l]=r(l,e))}return n}(t);Object.keys(e).forEach((function(n){var i=e[n];o[t][n]=function(t){var e=function(e){if(null==e)return e;arguments.length>1&&(e=Array.prototype.slice.call(arguments));var n=t(e);if("object"==typeof n)for(var i=n.length,a=0;a<i;a++)n[a]=Math.round(n[a]);return n};return"conversion"in t&&(e.conversion=t.conversion),e}(i),o[t][n].raw=function(t){var e=function(e){return null==e?e:(arguments.length>1&&(e=Array.prototype.slice.call(arguments)),t(e))};return"conversion"in t&&(e.conversion=t.conversion),e}(i)}))}));var s=o,l={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},u={getRgba:d,getHsla:h,getRgb:function(t){var e=d(t);return e&&e.slice(0,3)},getHsl:function(t){var e=h(t);return e&&e.slice(0,3)},getHwb:c,getAlpha:function(t){var e=d(t);if(e)return e[3];if(e=h(t))return e[3];if(e=c(t))return e[3]},hexString:function(t,e){e=void 0!==e&&3===t.length?e:t[3];return"#"+v(t[0])+v(t[1])+v(t[2])+(e>=0&&e<1?v(Math.round(255*e)):"")},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return f(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:f,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return g(t,e);var n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+n+"%, "+i+"%, "+a+"%)"},percentaString:g,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return p(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:p,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return b[t.slice(0,3)]}};function d(t){if(t){var e=[0,0,0],n=1,i=t.match(/^#([a-fA-F0-9]{3,4})$/i),a="";if(i){a=(i=i[1])[3];for(var r=0;r<e.length;r++)e[r]=parseInt(i[r]+i[r],16);a&&(n=Math.round(parseInt(a+a,16)/255*100)/100)}else if(i=t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)){a=i[2],i=i[1];for(r=0;r<e.length;r++)e[r]=parseInt(i.slice(2*r,2*r+2),16);a&&(n=Math.round(parseInt(a,16)/255*100)/100)}else if(i=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(r=0;r<e.length;r++)e[r]=parseInt(i[r+1]);n=parseFloat(i[4])}else if(i=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(r=0;r<e.length;r++)e[r]=Math.round(2.55*parseFloat(i[r+1]));n=parseFloat(i[4])}else if(i=t.match(/(\w+)/)){if("transparent"==i[1])return[0,0,0,0];if(!(e=l[i[1]]))return}for(r=0;r<e.length;r++)e[r]=m(e[r],0,255);return n=n||0==n?m(n,0,1):1,e[3]=n,e}}function h(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var n=parseFloat(e[4]);return[m(parseInt(e[1]),0,360),m(parseFloat(e[2]),0,100),m(parseFloat(e[3]),0,100),m(isNaN(n)?1:n,0,1)]}}}function c(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var n=parseFloat(e[4]);return[m(parseInt(e[1]),0,360),m(parseFloat(e[2]),0,100),m(parseFloat(e[3]),0,100),m(isNaN(n)?1:n,0,1)]}}}function f(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function g(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function m(t,e,n){return Math.min(Math.max(e,t),n)}function v(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var b={};for(var x in l)b[l[x]]=x;var y=function(t){return t instanceof y?t:this instanceof y?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof t?(e=u.getRgba(t))?this.setValues("rgb",e):(e=u.getHsla(t))?this.setValues("hsl",e):(e=u.getHwb(t))&&this.setValues("hwb",e):"object"==typeof t&&(void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e)))):new y(t);var e};y.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return u.hexString(this.values.rgb)},rgbString:function(){return u.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return u.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return u.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return u.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return u.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return u.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return u.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],n=0;n<t.length;n++){var i=t[n]/255;e[n]=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,n=(e[0]+t)%360;return e[0]=n<0?360+n:n,this.setValues("hsl",e),this},mix:function(t,e){var n=t,i=void 0===e?.5:e,a=2*i-1,r=this.alpha()-n.alpha(),o=((a*r==-1?a:(a+r)/(1+a*r))+1)/2,s=1-o;return this.rgb(o*this.red()+s*n.red(),o*this.green()+s*n.green(),o*this.blue()+s*n.blue()).alpha(this.alpha()*i+n.alpha()*(1-i))},toJSON:function(){return this.rgb()},clone:function(){var t,e,n=new y,i=this.values,a=n.values;for(var r in i)i.hasOwnProperty(r)&&(t=i[r],"[object Array]"===(e={}.toString.call(t))?a[r]=t.slice(0):"[object Number]"===e?a[r]=t:console.error("unexpected color value:",t));return n}},y.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},y.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},y.prototype.getValues=function(t){for(var e=this.values,n={},i=0;i<t.length;i++)n[t.charAt(i)]=e[t][i];return 1!==e.alpha&&(n.a=e.alpha),n},y.prototype.setValues=function(t,e){var n,i,a=this.values,r=this.spaces,o=this.maxes,l=1;if(this.valid=!0,"alpha"===t)l=e;else if(e.length)a[t]=e.slice(0,t.length),l=e[t.length];else if(void 0!==e[t.charAt(0)]){for(n=0;n<t.length;n++)a[t][n]=e[t.charAt(n)];l=e.a}else if(void 0!==e[r[t][0]]){var u=r[t];for(n=0;n<t.length;n++)a[t][n]=e[u[n]];l=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===l?a.alpha:l)),"alpha"===t)return!1;for(n=0;n<t.length;n++)i=Math.max(0,Math.min(o[t][n],a[t][n])),a[t][n]=Math.round(i);for(var d in r)d!==t&&(a[d]=s[t][d](a[t]));return!0},y.prototype.setSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n),this)},y.prototype.setChannel=function(t,e,n){var i=this.values[t];return void 0===n?i[e]:n===i[e]?this:(i[e]=n,this.setValues(t,i),this)},"undefined"!=typeof window&&(window.Color=y);var _=y;function k(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}var w,M={noop:function(){},uid:(w=0,function(){return w++}),isNullOrUndef:function(t){return null==t},isArray:function(t){if(Array.isArray&&Array.isArray(t))return!0;var e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},isFinite:function(t){return("number"==typeof t||t instanceof Number)&&isFinite(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,n){return M.valueOrDefault(M.isArray(t)?t[e]:t,n)},callback:function(t,e,n){if(t&&"function"==typeof t.call)return t.apply(n,e)},each:function(t,e,n,i){var a,r,o;if(M.isArray(t))if(r=t.length,i)for(a=r-1;a>=0;a--)e.call(n,t[a],a);else for(a=0;a<r;a++)e.call(n,t[a],a);else if(M.isObject(t))for(r=(o=Object.keys(t)).length,a=0;a<r;a++)e.call(n,t[o[a]],o[a])},arrayEquals:function(t,e){var n,i,a,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(a=t[n],r=e[n],a instanceof Array&&r instanceof Array){if(!M.arrayEquals(a,r))return!1}else if(a!==r)return!1;return!0},clone:function(t){if(M.isArray(t))return t.map(M.clone);if(M.isObject(t)){for(var e=Object.create(t),n=Object.keys(t),i=n.length,a=0;a<i;++a)e[n[a]]=M.clone(t[n[a]]);return e}return t},_merger:function(t,e,n,i){if(k(t)){var a=e[t],r=n[t];M.isObject(a)&&M.isObject(r)?M.merge(a,r,i):e[t]=M.clone(r)}},_mergerIf:function(t,e,n){if(k(t)){var i=e[t],a=n[t];M.isObject(i)&&M.isObject(a)?M.mergeIf(i,a):e.hasOwnProperty(t)||(e[t]=M.clone(a))}},merge:function(t,e,n){var i,a,r,o,s,l=M.isArray(e)?e:[e],u=l.length;if(!M.isObject(t))return t;for(i=(n=n||{}).merger||M._merger,a=0;a<u;++a)if(e=l[a],M.isObject(e))for(s=0,o=(r=Object.keys(e)).length;s<o;++s)i(r[s],t,e,n);return t},mergeIf:function(t,e){return M.merge(t,e,{merger:M._mergerIf})},extend:Object.assign||function(t){return M.merge(t,[].slice.call(arguments,1),{merger:function(t,e,n){e[t]=n[t]}})},inherits:function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},i=function(){this.constructor=n};return i.prototype=e.prototype,n.prototype=new i,n.extend=M.inherits,t&&M.extend(n.prototype,t),n.__super__=e.prototype,n},_deprecated:function(t,e,n,i){void 0!==e&&console.warn(t+': "'+n+'" is deprecated. Please use "'+i+'" instead')}},S=M;M.callCallback=M.callback,M.indexOf=function(t,e,n){return Array.prototype.indexOf.call(t,e,n)},M.getValueOrDefault=M.valueOrDefault,M.getValueAtIndexOrDefault=M.valueAtIndexOrDefault;var C={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===t?1:(n||(n=.3),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),-i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n))},easeOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===t?1:(n||(n=.3),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:2==(t/=.5)?1:(n||(n=.45),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),t<1?i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*-.5:i*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-C.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*C.easeInBounce(2*t):.5*C.easeOutBounce(2*t-1)+.5}},P={effects:C};S.easingEffects=C;var A=Math.PI,D=A/180,T=2*A,I=A/2,F=A/4,O=2*A/3,L={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,n,i,a,r){if(r){var o=Math.min(r,a/2,i/2),s=e+o,l=n+o,u=e+i-o,d=n+a-o;t.moveTo(e,l),s<u&&l<d?(t.arc(s,l,o,-A,-I),t.arc(u,l,o,-I,0),t.arc(u,d,o,0,I),t.arc(s,d,o,I,A)):s<u?(t.moveTo(s,n),t.arc(u,l,o,-I,I),t.arc(s,l,o,I,A+I)):l<d?(t.arc(s,l,o,-A,0),t.arc(s,d,o,0,A)):t.arc(s,l,o,-A,A),t.closePath(),t.moveTo(e,n)}else t.rect(e,n,i,a)},drawPoint:function(t,e,n,i,a,r){var o,s,l,u,d,h=(r||0)*D;if(e&&"object"==typeof e&&("[object HTMLImageElement]"===(o=e.toString())||"[object HTMLCanvasElement]"===o))return t.save(),t.translate(i,a),t.rotate(h),t.drawImage(e,-e.width/2,-e.height/2,e.width,e.height),void t.restore();if(!(isNaN(n)||n<=0)){switch(t.beginPath(),e){default:t.arc(i,a,n,0,T),t.closePath();break;case"triangle":t.moveTo(i+Math.sin(h)*n,a-Math.cos(h)*n),h+=O,t.lineTo(i+Math.sin(h)*n,a-Math.cos(h)*n),h+=O,t.lineTo(i+Math.sin(h)*n,a-Math.cos(h)*n),t.closePath();break;case"rectRounded":u=n-(d=.516*n),s=Math.cos(h+F)*u,l=Math.sin(h+F)*u,t.arc(i-s,a-l,d,h-A,h-I),t.arc(i+l,a-s,d,h-I,h),t.arc(i+s,a+l,d,h,h+I),t.arc(i-l,a+s,d,h+I,h+A),t.closePath();break;case"rect":if(!r){u=Math.SQRT1_2*n,t.rect(i-u,a-u,2*u,2*u);break}h+=F;case"rectRot":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+l,a-s),t.lineTo(i+s,a+l),t.lineTo(i-l,a+s),t.closePath();break;case"crossRot":h+=F;case"cross":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i+l,a-s),t.lineTo(i-l,a+s);break;case"star":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i+l,a-s),t.lineTo(i-l,a+s),h+=F,s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l),t.moveTo(i+l,a-s),t.lineTo(i-l,a+s);break;case"line":s=Math.cos(h)*n,l=Math.sin(h)*n,t.moveTo(i-s,a-l),t.lineTo(i+s,a+l);break;case"dash":t.moveTo(i,a),t.lineTo(i+Math.cos(h)*n,a+Math.sin(h)*n)}t.fill(),t.stroke()}},_isPointInArea:function(t,e){return t.x>e.left-1e-6&&t.x<e.right+1e-6&&t.y>e.top-1e-6&&t.y<e.bottom+1e-6},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,n,i){var a=n.steppedLine;if(a){if("middle"===a){var r=(e.x+n.x)/2;t.lineTo(r,i?n.y:e.y),t.lineTo(r,i?e.y:n.y)}else"after"===a&&!i||"after"!==a&&i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}else n.tension?t.bezierCurveTo(i?e.controlPointPreviousX:e.controlPointNextX,i?e.controlPointPreviousY:e.controlPointNextY,i?n.controlPointNextX:n.controlPointPreviousX,i?n.controlPointNextY:n.controlPointPreviousY,n.x,n.y):t.lineTo(n.x,n.y)}},R=L;S.clear=L.clear,S.drawRoundedRectangle=function(t){t.beginPath(),L.roundedRect.apply(L,arguments)};var z={_set:function(t,e){return S.merge(this[t]||(this[t]={}),e)}};z._set("global",{defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",defaultLineHeight:1.2,showLines:!0});var N=z,B=S.valueOrDefault;var E={toLineHeight:function(t,e){var n=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100}return e*t},toPadding:function(t){var e,n,i,a;return S.isObject(t)?(e=+t.top||0,n=+t.right||0,i=+t.bottom||0,a=+t.left||0):e=n=i=a=+t||0,{top:e,right:n,bottom:i,left:a,height:e+i,width:a+n}},_parseFont:function(t){var e=N.global,n=B(t.fontSize,e.defaultFontSize),i={family:B(t.fontFamily,e.defaultFontFamily),lineHeight:S.options.toLineHeight(B(t.lineHeight,e.defaultLineHeight),n),size:n,style:B(t.fontStyle,e.defaultFontStyle),weight:null,string:""};return i.string=function(t){return!t||S.isNullOrUndef(t.size)||S.isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(i),i},resolve:function(t,e,n,i){var a,r,o,s=!0;for(a=0,r=t.length;a<r;++a)if(void 0!==(o=t[a])&&(void 0!==e&&"function"==typeof o&&(o=o(e),s=!1),void 0!==n&&S.isArray(o)&&(o=o[n],s=!1),void 0!==o))return i&&!s&&(i.cacheable=!1),o}},W={_factorize:function(t){var e,n=[],i=Math.sqrt(t);for(e=1;e<i;e++)t%e==0&&(n.push(e),n.push(t/e));return i===(0|i)&&n.push(i),n.sort((function(t,e){return t-e})).pop(),n},log10:Math.log10||function(t){var e=Math.log(t)*Math.LOG10E,n=Math.round(e);return t===Math.pow(10,n)?n:e}},V=W;S.log10=W.log10;var H=S,j=P,q=R,U=E,Y=V,G={getRtlAdapter:function(t,e,n){return t?function(t,e){return{x:function(n){return t+t+e-n},setWidth:function(t){e=t},textAlign:function(t){return"center"===t?t:"right"===t?"left":"right"},xPlus:function(t,e){return t-e},leftForLtr:function(t,e){return t-e}}}(e,n):{x:function(t){return t},setWidth:function(t){},textAlign:function(t){return t},xPlus:function(t,e){return t+e},leftForLtr:function(t,e){return t}}},overrideTextDirection:function(t,e){var n,i;"ltr"!==e&&"rtl"!==e||(i=[(n=t.canvas.style).getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)},restoreTextDirection:function(t){var e=t.prevTextDirection;void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}};H.easing=j,H.canvas=q,H.options=U,H.math=Y,H.rtl=G;var X=function(t){H.extend(this,t),this.initialize.apply(this,arguments)};H.extend(X.prototype,{_type:void 0,initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=H.extend({},t._model)),t._start={},t},transition:function(t){var e=this,n=e._model,i=e._start,a=e._view;return n&&1!==t?(a||(a=e._view={}),i||(i=e._start={}),function(t,e,n,i){var a,r,o,s,l,u,d,h,c,f=Object.keys(n);for(a=0,r=f.length;a<r;++a)if(u=n[o=f[a]],e.hasOwnProperty(o)||(e[o]=u),(s=e[o])!==u&&"_"!==o[0]){if(t.hasOwnProperty(o)||(t[o]=s),(d=typeof u)===typeof(l=t[o]))if("string"===d){if((h=_(l)).valid&&(c=_(u)).valid){e[o]=c.mix(h,i).rgbString();continue}}else if(H.isFinite(l)&&H.isFinite(u)){e[o]=l+(u-l)*i;continue}e[o]=u}}(i,a,n,t),e):(e._view=H.extend({},n),e._start=null,e)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return H.isNumber(this._model.x)&&H.isNumber(this._model.y)}}),X.extend=H.inherits;var K=X,Z=K.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),$=Z;Object.defineProperty(Z.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(Z.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}}),N._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:H.noop,onComplete:H.noop}});var J={animations:[],request:null,addAnimation:function(t,e,n,i){var a,r,o=this.animations;for(e.chart=t,e.startTime=Date.now(),e.duration=n,i||(t.animating=!0),a=0,r=o.length;a<r;++a)if(o[a].chart===t)return void(o[a]=e);o.push(e),1===o.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var e=H.findIndex(this.animations,(function(e){return e.chart===t}));-1!==e&&(this.animations.splice(e,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=H.requestAnimFrame.call(window,(function(){t.request=null,t.startDigest()})))},startDigest:function(){this.advance(),this.animations.length>0&&this.requestAnimationFrame()},advance:function(){for(var t,e,n,i,a=this.animations,r=0;r<a.length;)e=(t=a[r]).chart,n=t.numSteps,i=Math.floor((Date.now()-t.startTime)/t.duration*n)+1,t.currentStep=Math.min(i,n),H.callback(t.render,[e,t],e),H.callback(t.onAnimationProgress,[t],e),t.currentStep>=n?(H.callback(t.onAnimationComplete,[t],e),e.animating=!1,a.splice(r,1)):++r}},Q=H.options.resolve,tt=["push","pop","shift","splice","unshift"];function et(t,e){var n=t._chartjs;if(n){var i=n.listeners,a=i.indexOf(e);-1!==a&&i.splice(a,1),i.length>0||(tt.forEach((function(e){delete t[e]})),delete t._chartjs)}}var nt=function(t,e){this.initialize(t,e)};H.extend(nt.prototype,{datasetElementType:null,dataElementType:null,_datasetElementOptions:["backgroundColor","borderCapStyle","borderColor","borderDash","borderDashOffset","borderJoinStyle","borderWidth"],_dataElementOptions:["backgroundColor","borderColor","borderWidth","pointStyle"],initialize:function(t,e){var n=this;n.chart=t,n.index=e,n.linkScales(),n.addElements(),n._type=n.getMeta().type},updateIndex:function(t){this.index=t},linkScales:function(){var t=this.getMeta(),e=this.chart,n=e.scales,i=this.getDataset(),a=e.options.scales;null!==t.xAxisID&&t.xAxisID in n&&!i.xAxisID||(t.xAxisID=i.xAxisID||a.xAxes[0].id),null!==t.yAxisID&&t.yAxisID in n&&!i.yAxisID||(t.yAxisID=i.yAxisID||a.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},_getValueScaleId:function(){return this.getMeta().yAxisID},_getIndexScaleId:function(){return this.getMeta().xAxisID},_getValueScale:function(){return this.getScaleForId(this._getValueScaleId())},_getIndexScale:function(){return this.getScaleForId(this._getIndexScaleId())},reset:function(){this._update(!0)},destroy:function(){this._data&&et(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,n=this.getMeta(),i=this.getDataset().data||[],a=n.data;for(t=0,e=i.length;t<e;++t)a[t]=a[t]||this.createMetaData(t);n.dataset=n.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t,e,n=this,i=n.getDataset(),a=i.data||(i.data=[]);n._data!==a&&(n._data&&et(n._data,n),a&&Object.isExtensible(a)&&(e=n,(t=a)._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),tt.forEach((function(e){var n="onData"+e.charAt(0).toUpperCase()+e.slice(1),i=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),a=i.apply(this,e);return H.each(t._chartjs.listeners,(function(t){"function"==typeof t[n]&&t[n].apply(t,e)})),a}})})))),n._data=a),n.resyncElements()},_configure:function(){this._config=H.merge(Object.create(null),[this.chart.options.datasets[this._type],this.getDataset()],{merger:function(t,e,n){"_meta"!==t&&"data"!==t&&H._merger(t,e,n)}})},_update:function(t){this._configure(),this._cachedDataOpts=null,this.update(t)},update:H.noop,transition:function(t){for(var e=this.getMeta(),n=e.data||[],i=n.length,a=0;a<i;++a)n[a].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],n=e.length,i=0;for(t.dataset&&t.dataset.draw();i<n;++i)e[i].draw()},getStyle:function(t){var e,n=this.getMeta(),i=n.dataset;return this._configure(),i&&void 0===t?e=this._resolveDatasetElementOptions(i||{}):(t=t||0,e=this._resolveDataElementOptions(n.data[t]||{},t)),!1!==e.fill&&null!==e.fill||(e.backgroundColor=e.borderColor),e},_resolveDatasetElementOptions:function(t,e){var n,i,a,r,o=this,s=o.chart,l=o._config,u=t.custom||{},d=s.options.elements[o.datasetElementType.prototype._type]||{},h=o._datasetElementOptions,c={},f={chart:s,dataset:o.getDataset(),datasetIndex:o.index,hover:e};for(n=0,i=h.length;n<i;++n)a=h[n],r=e?"hover"+a.charAt(0).toUpperCase()+a.slice(1):a,c[a]=Q([u[r],l[r],d[r]],f);return c},_resolveDataElementOptions:function(t,e){var n=this,i=t&&t.custom,a=n._cachedDataOpts;if(a&&!i)return a;var r,o,s,l,u=n.chart,d=n._config,h=u.options.elements[n.dataElementType.prototype._type]||{},c=n._dataElementOptions,f={},g={chart:u,dataIndex:e,dataset:n.getDataset(),datasetIndex:n.index},p={cacheable:!i};if(i=i||{},H.isArray(c))for(o=0,s=c.length;o<s;++o)f[l=c[o]]=Q([i[l],d[l],h[l]],g,e,p);else for(o=0,s=(r=Object.keys(c)).length;o<s;++o)f[l=r[o]]=Q([i[l],d[c[l]],d[l],h[l]],g,e,p);return p.cacheable&&(n._cachedDataOpts=Object.freeze(f)),f},removeHoverStyle:function(t){H.merge(t._model,t.$previousStyle||{}),delete t.$previousStyle},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,i=t.custom||{},a=t._model,r=H.getHoverColor;t.$previousStyle={backgroundColor:a.backgroundColor,borderColor:a.borderColor,borderWidth:a.borderWidth},a.backgroundColor=Q([i.hoverBackgroundColor,e.hoverBackgroundColor,r(a.backgroundColor)],void 0,n),a.borderColor=Q([i.hoverBorderColor,e.hoverBorderColor,r(a.borderColor)],void 0,n),a.borderWidth=Q([i.hoverBorderWidth,e.hoverBorderWidth,a.borderWidth],void 0,n)},_removeDatasetHoverStyle:function(){var t=this.getMeta().dataset;t&&this.removeHoverStyle(t)},_setDatasetHoverStyle:function(){var t,e,n,i,a,r,o=this.getMeta().dataset,s={};if(o){for(r=o._model,a=this._resolveDatasetElementOptions(o,!0),t=0,e=(i=Object.keys(a)).length;t<e;++t)s[n=i[t]]=r[n],r[n]=a[n];o.$previousStyle=s}},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,n=t.data.length,i=e.length;i<n?t.data.splice(i,n-i):i>n&&this.insertElements(n,i-n)},insertElements:function(t,e){for(var n=0;n<e;++n)this.addElementAndReset(t+n)},onDataPush:function(){var t=arguments.length;this.insertElements(this.getDataset().data.length-t,t)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),nt.extend=H.inherits;var it=nt,at=2*Math.PI;function rt(t,e){var n=e.startAngle,i=e.endAngle,a=e.pixelMargin,r=a/e.outerRadius,o=e.x,s=e.y;t.beginPath(),t.arc(o,s,e.outerRadius,n-r,i+r),e.innerRadius>a?(r=a/e.innerRadius,t.arc(o,s,e.innerRadius-a,i+r,n-r,!0)):t.arc(o,s,a,i+Math.PI/2,n-Math.PI/2),t.closePath(),t.clip()}function ot(t,e,n){var i="inner"===e.borderAlign;i?(t.lineWidth=2*e.borderWidth,t.lineJoin="round"):(t.lineWidth=e.borderWidth,t.lineJoin="bevel"),n.fullCircles&&function(t,e,n,i){var a,r=n.endAngle;for(i&&(n.endAngle=n.startAngle+at,rt(t,n),n.endAngle=r,n.endAngle===n.startAngle&&n.fullCircles&&(n.endAngle+=at,n.fullCircles--)),t.beginPath(),t.arc(n.x,n.y,n.innerRadius,n.startAngle+at,n.startAngle,!0),a=0;a<n.fullCircles;++a)t.stroke();for(t.beginPath(),t.arc(n.x,n.y,e.outerRadius,n.startAngle,n.startAngle+at),a=0;a<n.fullCircles;++a)t.stroke()}(t,e,n,i),i&&rt(t,n),t.beginPath(),t.arc(n.x,n.y,e.outerRadius,n.startAngle,n.endAngle),t.arc(n.x,n.y,n.innerRadius,n.endAngle,n.startAngle,!0),t.closePath(),t.stroke()}N._set("global",{elements:{arc:{backgroundColor:N.global.defaultColor,borderColor:"#fff",borderWidth:2,borderAlign:"center"}}});var st=K.extend({_type:"arc",inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var n=this._view;if(n){for(var i=H.getAngleFromPoint(n,{x:t,y:e}),a=i.angle,r=i.distance,o=n.startAngle,s=n.endAngle;s<o;)s+=at;for(;a>s;)a-=at;for(;a<o;)a+=at;var l=a>=o&&a<=s,u=r>=n.innerRadius&&r<=n.outerRadius;return l&&u}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,n=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,n=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},draw:function(){var t,e=this._chart.ctx,n=this._view,i="inner"===n.borderAlign?.33:0,a={x:n.x,y:n.y,innerRadius:n.innerRadius,outerRadius:Math.max(n.outerRadius-i,0),pixelMargin:i,startAngle:n.startAngle,endAngle:n.endAngle,fullCircles:Math.floor(n.circumference/at)};if(e.save(),e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,a.fullCircles){for(a.endAngle=a.startAngle+at,e.beginPath(),e.arc(a.x,a.y,a.outerRadius,a.startAngle,a.endAngle),e.arc(a.x,a.y,a.innerRadius,a.endAngle,a.startAngle,!0),e.closePath(),t=0;t<a.fullCircles;++t)e.fill();a.endAngle=a.startAngle+n.circumference%at}e.beginPath(),e.arc(a.x,a.y,a.outerRadius,a.startAngle,a.endAngle),e.arc(a.x,a.y,a.innerRadius,a.endAngle,a.startAngle,!0),e.closePath(),e.fill(),n.borderWidth&&ot(e,n,a),e.restore()}}),lt=H.valueOrDefault,ut=N.global.defaultColor;N._set("global",{elements:{line:{tension:.4,backgroundColor:ut,borderWidth:3,borderColor:ut,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}});var dt=K.extend({_type:"line",draw:function(){var t,e,n,i=this,a=i._view,r=i._chart.ctx,o=a.spanGaps,s=i._children.slice(),l=N.global,u=l.elements.line,d=-1,h=i._loop;if(s.length){if(i._loop){for(t=0;t<s.length;++t)if(e=H.previousItem(s,t),!s[t]._view.skip&&e._view.skip){s=s.slice(t).concat(s.slice(0,t)),h=o;break}h&&s.push(s[0])}for(r.save(),r.lineCap=a.borderCapStyle||u.borderCapStyle,r.setLineDash&&r.setLineDash(a.borderDash||u.borderDash),r.lineDashOffset=lt(a.borderDashOffset,u.borderDashOffset),r.lineJoin=a.borderJoinStyle||u.borderJoinStyle,r.lineWidth=lt(a.borderWidth,u.borderWidth),r.strokeStyle=a.borderColor||l.defaultColor,r.beginPath(),(n=s[0]._view).skip||(r.moveTo(n.x,n.y),d=0),t=1;t<s.length;++t)n=s[t]._view,e=-1===d?H.previousItem(s,t):s[d],n.skip||(d!==t-1&&!o||-1===d?r.moveTo(n.x,n.y):H.canvas.lineTo(r,e._view,n),d=t);h&&r.closePath(),r.stroke(),r.restore()}}}),ht=H.valueOrDefault,ct=N.global.defaultColor;function ft(t){var e=this._view;return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}N._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:ct,borderColor:ct,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}});var gt=K.extend({_type:"point",inRange:function(t,e){var n=this._view;return!!n&&Math.pow(t-n.x,2)+Math.pow(e-n.y,2)<Math.pow(n.hitRadius+n.radius,2)},inLabelRange:ft,inXRange:ft,inYRange:function(t){var e=this._view;return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,n=this._chart.ctx,i=e.pointStyle,a=e.rotation,r=e.radius,o=e.x,s=e.y,l=N.global,u=l.defaultColor;e.skip||(void 0===t||H.canvas._isPointInArea(e,t))&&(n.strokeStyle=e.borderColor||u,n.lineWidth=ht(e.borderWidth,l.elements.point.borderWidth),n.fillStyle=e.backgroundColor||u,H.canvas.drawPoint(n,i,r,o,s,a))}}),pt=N.global.defaultColor;function mt(t){return t&&void 0!==t.width}function vt(t){var e,n,i,a,r;return mt(t)?(r=t.width/2,e=t.x-r,n=t.x+r,i=Math.min(t.y,t.base),a=Math.max(t.y,t.base)):(r=t.height/2,e=Math.min(t.x,t.base),n=Math.max(t.x,t.base),i=t.y-r,a=t.y+r),{left:e,top:i,right:n,bottom:a}}function bt(t,e,n){return t===e?n:t===n?e:t}function xt(t,e,n){var i,a,r,o,s=t.borderWidth,l=function(t){var e=t.borderSkipped,n={};return e?(t.horizontal?t.base>t.x&&(e=bt(e,"left","right")):t.base<t.y&&(e=bt(e,"bottom","top")),n[e]=!0,n):n}(t);return H.isObject(s)?(i=+s.top||0,a=+s.right||0,r=+s.bottom||0,o=+s.left||0):i=a=r=o=+s||0,{t:l.top||i<0?0:i>n?n:i,r:l.right||a<0?0:a>e?e:a,b:l.bottom||r<0?0:r>n?n:r,l:l.left||o<0?0:o>e?e:o}}function yt(t,e,n){var i=null===e,a=null===n,r=!(!t||i&&a)&&vt(t);return r&&(i||e>=r.left&&e<=r.right)&&(a||n>=r.top&&n<=r.bottom)}N._set("global",{elements:{rectangle:{backgroundColor:pt,borderColor:pt,borderSkipped:"bottom",borderWidth:0}}});var _t=K.extend({_type:"rectangle",draw:function(){var t=this._chart.ctx,e=this._view,n=function(t){var e=vt(t),n=e.right-e.left,i=e.bottom-e.top,a=xt(t,n/2,i/2);return{outer:{x:e.left,y:e.top,w:n,h:i},inner:{x:e.left+a.l,y:e.top+a.t,w:n-a.l-a.r,h:i-a.t-a.b}}}(e),i=n.outer,a=n.inner;t.fillStyle=e.backgroundColor,t.fillRect(i.x,i.y,i.w,i.h),i.w===a.w&&i.h===a.h||(t.save(),t.beginPath(),t.rect(i.x,i.y,i.w,i.h),t.clip(),t.fillStyle=e.borderColor,t.rect(a.x,a.y,a.w,a.h),t.fill("evenodd"),t.restore())},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){return yt(this._view,t,e)},inLabelRange:function(t,e){var n=this._view;return mt(n)?yt(n,t,null):yt(n,null,e)},inXRange:function(t){return yt(this._view,t,null)},inYRange:function(t){return yt(this._view,null,t)},getCenterPoint:function(){var t,e,n=this._view;return mt(n)?(t=n.x,e=(n.y+n.base)/2):(t=(n.x+n.base)/2,e=n.y),{x:t,y:e}},getArea:function(){var t=this._view;return mt(t)?t.width*Math.abs(t.y-t.base):t.height*Math.abs(t.x-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}}),kt={},wt=st,Mt=dt,St=gt,Ct=_t;kt.Arc=wt,kt.Line=Mt,kt.Point=St,kt.Rectangle=Ct;var Pt=H._deprecated,At=H.valueOrDefault;function Dt(t,e,n){var i,a,r=n.barThickness,o=e.stackCount,s=e.pixels[t],l=H.isNullOrUndef(r)?function(t,e){var n,i,a,r,o=t._length;for(a=1,r=e.length;a<r;++a)o=Math.min(o,Math.abs(e[a]-e[a-1]));for(a=0,r=t.getTicks().length;a<r;++a)i=t.getPixelForTick(a),o=a>0?Math.min(o,Math.abs(i-n)):o,n=i;return o}(e.scale,e.pixels):-1;return H.isNullOrUndef(r)?(i=l*n.categoryPercentage,a=n.barPercentage):(i=r*o,a=1),{chunk:i/o,ratio:a,start:s-i/2}}N._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),N._set("global",{datasets:{bar:{categoryPercentage:.8,barPercentage:.9}}});var Tt=it.extend({dataElementType:kt.Rectangle,_dataElementOptions:["backgroundColor","borderColor","borderSkipped","borderWidth","barPercentage","barThickness","categoryPercentage","maxBarThickness","minBarLength"],initialize:function(){var t,e,n=this;it.prototype.initialize.apply(n,arguments),(t=n.getMeta()).stack=n.getDataset().stack,t.bar=!0,e=n._getIndexScale().options,Pt("bar chart",e.barPercentage,"scales.[x/y]Axes.barPercentage","dataset.barPercentage"),Pt("bar chart",e.barThickness,"scales.[x/y]Axes.barThickness","dataset.barThickness"),Pt("bar chart",e.categoryPercentage,"scales.[x/y]Axes.categoryPercentage","dataset.categoryPercentage"),Pt("bar chart",n._getValueScale().options.minBarLength,"scales.[x/y]Axes.minBarLength","dataset.minBarLength"),Pt("bar chart",e.maxBarThickness,"scales.[x/y]Axes.maxBarThickness","dataset.maxBarThickness")},update:function(t){var e,n,i=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,n=i.length;e<n;++e)this.updateElement(i[e],e,t)},updateElement:function(t,e,n){var i=this,a=i.getMeta(),r=i.getDataset(),o=i._resolveDataElementOptions(t,e);t._xScale=i.getScaleForId(a.xAxisID),t._yScale=i.getScaleForId(a.yAxisID),t._datasetIndex=i.index,t._index=e,t._model={backgroundColor:o.backgroundColor,borderColor:o.borderColor,borderSkipped:o.borderSkipped,borderWidth:o.borderWidth,datasetLabel:r.label,label:i.chart.data.labels[e]},H.isArray(r.data[e])&&(t._model.borderSkipped=null),i._updateElementGeometry(t,e,n,o),t.pivot()},_updateElementGeometry:function(t,e,n,i){var a=this,r=t._model,o=a._getValueScale(),s=o.getBasePixel(),l=o.isHorizontal(),u=a._ruler||a.getRuler(),d=a.calculateBarValuePixels(a.index,e,i),h=a.calculateBarIndexPixels(a.index,e,u,i);r.horizontal=l,r.base=n?s:d.base,r.x=l?n?s:d.head:h.center,r.y=l?h.center:n?s:d.head,r.height=l?h.size:void 0,r.width=l?void 0:h.size},_getStacks:function(t){var e,n,i=this._getIndexScale(),a=i._getMatchingVisibleMetas(this._type),r=i.options.stacked,o=a.length,s=[];for(e=0;e<o&&(n=a[e],(!1===r||-1===s.indexOf(n.stack)||void 0===r&&void 0===n.stack)&&s.push(n.stack),n.index!==t);++e);return s},getStackCount:function(){return this._getStacks().length},getStackIndex:function(t,e){var n=this._getStacks(t),i=void 0!==e?n.indexOf(e):-1;return-1===i?n.length-1:i},getRuler:function(){var t,e,n=this._getIndexScale(),i=[];for(t=0,e=this.getMeta().data.length;t<e;++t)i.push(n.getPixelForValue(null,t,this.index));return{pixels:i,start:n._startPixel,end:n._endPixel,stackCount:this.getStackCount(),scale:n}},calculateBarValuePixels:function(t,e,n){var i,a,r,o,s,l,u,d=this.chart,h=this._getValueScale(),c=h.isHorizontal(),f=d.data.datasets,g=h._getMatchingVisibleMetas(this._type),p=h._parseValue(f[t].data[e]),m=n.minBarLength,v=h.options.stacked,b=this.getMeta().stack,x=void 0===p.start?0:p.max>=0&&p.min>=0?p.min:p.max,y=void 0===p.start?p.end:p.max>=0&&p.min>=0?p.max-p.min:p.min-p.max,_=g.length;if(v||void 0===v&&void 0!==b)for(i=0;i<_&&(a=g[i]).index!==t;++i)a.stack===b&&(r=void 0===(u=h._parseValue(f[a.index].data[e])).start?u.end:u.min>=0&&u.max>=0?u.max:u.min,(p.min<0&&r<0||p.max>=0&&r>0)&&(x+=r));return o=h.getPixelForValue(x),l=(s=h.getPixelForValue(x+y))-o,void 0!==m&&Math.abs(l)<m&&(l=m,s=y>=0&&!c||y<0&&c?o-m:o+m),{size:l,base:o,head:s,center:s+l/2}},calculateBarIndexPixels:function(t,e,n,i){var a="flex"===i.barThickness?function(t,e,n){var i,a=e.pixels,r=a[t],o=t>0?a[t-1]:null,s=t<a.length-1?a[t+1]:null,l=n.categoryPercentage;return null===o&&(o=r-(null===s?e.end-e.start:s-r)),null===s&&(s=r+r-o),i=r-(r-Math.min(o,s))/2*l,{chunk:Math.abs(s-o)/2*l/e.stackCount,ratio:n.barPercentage,start:i}}(e,n,i):Dt(e,n,i),r=this.getStackIndex(t,this.getMeta().stack),o=a.start+a.chunk*r+a.chunk/2,s=Math.min(At(i.maxBarThickness,1/0),a.chunk*a.ratio);return{base:o-s/2,head:o+s/2,center:o,size:s}},draw:function(){var t=this.chart,e=this._getValueScale(),n=this.getMeta().data,i=this.getDataset(),a=n.length,r=0;for(H.canvas.clipArea(t.ctx,t.chartArea);r<a;++r){var o=e._parseValue(i.data[r]);isNaN(o.min)||isNaN(o.max)||n[r].draw()}H.canvas.unclipArea(t.ctx)},_resolveDataElementOptions:function(){var t=this,e=H.extend({},it.prototype._resolveDataElementOptions.apply(t,arguments)),n=t._getIndexScale().options,i=t._getValueScale().options;return e.barPercentage=At(n.barPercentage,e.barPercentage),e.barThickness=At(n.barThickness,e.barThickness),e.categoryPercentage=At(n.categoryPercentage,e.categoryPercentage),e.maxBarThickness=At(n.maxBarThickness,e.maxBarThickness),e.minBarLength=At(i.minBarLength,e.minBarLength),e}}),It=H.valueOrDefault,Ft=H.options.resolve;N._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"",i=e.datasets[t.datasetIndex].data[t.index];return n+": ("+t.xLabel+", "+t.yLabel+", "+i.r+")"}}}});var Ot=it.extend({dataElementType:kt.Point,_dataElementOptions:["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle","rotation"],update:function(t){var e=this,n=e.getMeta().data;H.each(n,(function(n,i){e.updateElement(n,i,t)}))},updateElement:function(t,e,n){var i=this,a=i.getMeta(),r=t.custom||{},o=i.getScaleForId(a.xAxisID),s=i.getScaleForId(a.yAxisID),l=i._resolveDataElementOptions(t,e),u=i.getDataset().data[e],d=i.index,h=n?o.getPixelForDecimal(.5):o.getPixelForValue("object"==typeof u?u:NaN,e,d),c=n?s.getBasePixel():s.getPixelForValue(u,e,d);t._xScale=o,t._yScale=s,t._options=l,t._datasetIndex=d,t._index=e,t._model={backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,hitRadius:l.hitRadius,pointStyle:l.pointStyle,rotation:l.rotation,radius:n?0:l.radius,skip:r.skip||isNaN(h)||isNaN(c),x:h,y:c},t.pivot()},setHoverStyle:function(t){var e=t._model,n=t._options,i=H.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=It(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=It(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=It(n.hoverBorderWidth,n.borderWidth),e.radius=n.radius+n.hoverRadius},_resolveDataElementOptions:function(t,e){var n=this,i=n.chart,a=n.getDataset(),r=t.custom||{},o=a.data[e]||{},s=it.prototype._resolveDataElementOptions.apply(n,arguments),l={chart:i,dataIndex:e,dataset:a,datasetIndex:n.index};return n._cachedDataOpts===s&&(s=H.extend({},s)),s.radius=Ft([r.radius,o.r,n._config.radius,i.options.elements.point.radius],l,e),s}}),Lt=H.valueOrDefault,Rt=Math.PI,zt=2*Rt,Nt=Rt/2;N._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e,n,i,a=document.createElement("ul"),r=t.data,o=r.datasets,s=r.labels;if(a.setAttribute("class",t.id+"-legend"),o.length)for(e=0,n=o[0].data.length;e<n;++e)(i=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=o[0].backgroundColor[e],s[e]&&i.appendChild(document.createTextNode(s[e]));return a.outerHTML},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((function(n,i){var a=t.getDatasetMeta(0),r=a.controller.getStyle(i);return{text:n,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,lineWidth:r.borderWidth,hidden:isNaN(e.datasets[0].data[i])||a.data[i].hidden,index:i}})):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart;for(n=0,i=(o.data.datasets||[]).length;n<i;++n)(a=o.getDatasetMeta(n)).data[r]&&(a.data[r].hidden=!a.data[r].hidden);o.update()}},cutoutPercentage:50,rotation:-Nt,circumference:zt,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.labels[t.index],i=": "+e.datasets[t.datasetIndex].data[t.index];return H.isArray(n)?(n=n.slice())[0]+=i:n+=i,n}}}});var Bt=it.extend({dataElementType:kt.Arc,linkScales:H.noop,_dataElementOptions:["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"],getRingIndex:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&++e;return e},update:function(t){var e,n,i,a,r=this,o=r.chart,s=o.chartArea,l=o.options,u=1,d=1,h=0,c=0,f=r.getMeta(),g=f.data,p=l.cutoutPercentage/100||0,m=l.circumference,v=r._getRingWeight(r.index);if(m<zt){var b=l.rotation%zt,x=(b+=b>=Rt?-zt:b<-Rt?zt:0)+m,y=Math.cos(b),_=Math.sin(b),k=Math.cos(x),w=Math.sin(x),M=b<=0&&x>=0||x>=zt,S=b<=Nt&&x>=Nt||x>=zt+Nt,C=b<=-Nt&&x>=-Nt||x>=Rt+Nt,P=b===-Rt||x>=Rt?-1:Math.min(y,y*p,k,k*p),A=C?-1:Math.min(_,_*p,w,w*p),D=M?1:Math.max(y,y*p,k,k*p),T=S?1:Math.max(_,_*p,w,w*p);u=(D-P)/2,d=(T-A)/2,h=-(D+P)/2,c=-(T+A)/2}for(i=0,a=g.length;i<a;++i)g[i]._options=r._resolveDataElementOptions(g[i],i);for(o.borderWidth=r.getMaxBorderWidth(),e=(s.right-s.left-o.borderWidth)/u,n=(s.bottom-s.top-o.borderWidth)/d,o.outerRadius=Math.max(Math.min(e,n)/2,0),o.innerRadius=Math.max(o.outerRadius*p,0),o.radiusLength=(o.outerRadius-o.innerRadius)/(r._getVisibleDatasetWeightTotal()||1),o.offsetX=h*o.outerRadius,o.offsetY=c*o.outerRadius,f.total=r.calculateTotal(),r.outerRadius=o.outerRadius-o.radiusLength*r._getRingWeightOffset(r.index),r.innerRadius=Math.max(r.outerRadius-o.radiusLength*v,0),i=0,a=g.length;i<a;++i)r.updateElement(g[i],i,t)},updateElement:function(t,e,n){var i=this,a=i.chart,r=a.chartArea,o=a.options,s=o.animation,l=(r.left+r.right)/2,u=(r.top+r.bottom)/2,d=o.rotation,h=o.rotation,c=i.getDataset(),f=n&&s.animateRotate?0:t.hidden?0:i.calculateCircumference(c.data[e])*(o.circumference/zt),g=n&&s.animateScale?0:i.innerRadius,p=n&&s.animateScale?0:i.outerRadius,m=t._options||{};H.extend(t,{_datasetIndex:i.index,_index:e,_model:{backgroundColor:m.backgroundColor,borderColor:m.borderColor,borderWidth:m.borderWidth,borderAlign:m.borderAlign,x:l+a.offsetX,y:u+a.offsetY,startAngle:d,endAngle:h,circumference:f,outerRadius:p,innerRadius:g,label:H.valueAtIndexOrDefault(c.label,e,a.data.labels[e])}});var v=t._model;n&&s.animateRotate||(v.startAngle=0===e?o.rotation:i.getMeta().data[e-1]._model.endAngle,v.endAngle=v.startAngle+v.circumference),t.pivot()},calculateTotal:function(){var t,e=this.getDataset(),n=this.getMeta(),i=0;return H.each(n.data,(function(n,a){t=e.data[a],isNaN(t)||n.hidden||(i+=Math.abs(t))})),i},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?zt*(Math.abs(t)/e):0},getMaxBorderWidth:function(t){var e,n,i,a,r,o,s,l,u=0,d=this.chart;if(!t)for(e=0,n=d.data.datasets.length;e<n;++e)if(d.isDatasetVisible(e)){t=(i=d.getDatasetMeta(e)).data,e!==this.index&&(r=i.controller);break}if(!t)return 0;for(e=0,n=t.length;e<n;++e)a=t[e],r?(r._configure(),o=r._resolveDataElementOptions(a,e)):o=a._options,"inner"!==o.borderAlign&&(s=o.borderWidth,u=(l=o.hoverBorderWidth)>(u=s>u?s:u)?l:u);return u},setHoverStyle:function(t){var e=t._model,n=t._options,i=H.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=Lt(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Lt(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Lt(n.hoverBorderWidth,n.borderWidth)},_getRingWeightOffset:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&(e+=this._getRingWeight(n));return e},_getRingWeight:function(t){return Math.max(Lt(this.chart.data.datasets[t].weight,1),0)},_getVisibleDatasetWeightTotal:function(){return this._getRingWeightOffset(this.chart.data.datasets.length)}});N._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{type:"category",position:"left",offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{mode:"index",axis:"y"}}),N._set("global",{datasets:{horizontalBar:{categoryPercentage:.8,barPercentage:.9}}});var Et=Tt.extend({_getValueScaleId:function(){return this.getMeta().xAxisID},_getIndexScaleId:function(){return this.getMeta().yAxisID}}),Wt=H.valueOrDefault,Vt=H.options.resolve,Ht=H.canvas._isPointInArea;function jt(t,e){var n=t&&t.options.ticks||{},i=n.reverse,a=void 0===n.min?e:0,r=void 0===n.max?e:0;return{start:i?r:a,end:i?a:r}}function qt(t,e,n){var i=n/2,a=jt(t,i),r=jt(e,i);return{top:r.end,right:a.end,bottom:r.start,left:a.start}}function Ut(t){var e,n,i,a;return H.isObject(t)?(e=t.top,n=t.right,i=t.bottom,a=t.left):e=n=i=a=t,{top:e,right:n,bottom:i,left:a}}N._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}});var Yt=it.extend({datasetElementType:kt.Line,dataElementType:kt.Point,_datasetElementOptions:["backgroundColor","borderCapStyle","borderColor","borderDash","borderDashOffset","borderJoinStyle","borderWidth","cubicInterpolationMode","fill"],_dataElementOptions:{backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},update:function(t){var e,n,i=this,a=i.getMeta(),r=a.dataset,o=a.data||[],s=i.chart.options,l=i._config,u=i._showLine=Wt(l.showLine,s.showLines);for(i._xScale=i.getScaleForId(a.xAxisID),i._yScale=i.getScaleForId(a.yAxisID),u&&(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),r._scale=i._yScale,r._datasetIndex=i.index,r._children=o,r._model=i._resolveDatasetElementOptions(r),r.pivot()),e=0,n=o.length;e<n;++e)i.updateElement(o[e],e,t);for(u&&0!==r._model.tension&&i.updateBezierControlPoints(),e=0,n=o.length;e<n;++e)o[e].pivot()},updateElement:function(t,e,n){var i,a,r=this,o=r.getMeta(),s=t.custom||{},l=r.getDataset(),u=r.index,d=l.data[e],h=r._xScale,c=r._yScale,f=o.dataset._model,g=r._resolveDataElementOptions(t,e);i=h.getPixelForValue("object"==typeof d?d:NaN,e,u),a=n?c.getBasePixel():r.calculatePointY(d,e,u),t._xScale=h,t._yScale=c,t._options=g,t._datasetIndex=u,t._index=e,t._model={x:i,y:a,skip:s.skip||isNaN(i)||isNaN(a),radius:g.radius,pointStyle:g.pointStyle,rotation:g.rotation,backgroundColor:g.backgroundColor,borderColor:g.borderColor,borderWidth:g.borderWidth,tension:Wt(s.tension,f?f.tension:0),steppedLine:!!f&&f.steppedLine,hitRadius:g.hitRadius}},_resolveDatasetElementOptions:function(t){var e=this,n=e._config,i=t.custom||{},a=e.chart.options,r=a.elements.line,o=it.prototype._resolveDatasetElementOptions.apply(e,arguments);return o.spanGaps=Wt(n.spanGaps,a.spanGaps),o.tension=Wt(n.lineTension,r.tension),o.steppedLine=Vt([i.steppedLine,n.steppedLine,r.stepped]),o.clip=Ut(Wt(n.clip,qt(e._xScale,e._yScale,o.borderWidth))),o},calculatePointY:function(t,e,n){var i,a,r,o,s,l,u,d=this.chart,h=this._yScale,c=0,f=0;if(h.options.stacked){for(s=+h.getRightValue(t),u=(l=d._getSortedVisibleDatasetMetas()).length,i=0;i<u&&(r=l[i]).index!==n;++i)a=d.data.datasets[r.index],"line"===r.type&&r.yAxisID===h.id&&((o=+h.getRightValue(a.data[e]))<0?f+=o||0:c+=o||0);return s<0?h.getPixelForValue(f+s):h.getPixelForValue(c+s)}return h.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,n,i,a=this.chart,r=this.getMeta(),o=r.dataset._model,s=a.chartArea,l=r.data||[];function u(t,e,n){return Math.max(Math.min(t,n),e)}if(o.spanGaps&&(l=l.filter((function(t){return!t._model.skip}))),"monotone"===o.cubicInterpolationMode)H.splineCurveMonotone(l);else for(t=0,e=l.length;t<e;++t)n=l[t]._model,i=H.splineCurve(H.previousItem(l,t)._model,n,H.nextItem(l,t)._model,o.tension),n.controlPointPreviousX=i.previous.x,n.controlPointPreviousY=i.previous.y,n.controlPointNextX=i.next.x,n.controlPointNextY=i.next.y;if(a.options.elements.line.capBezierPoints)for(t=0,e=l.length;t<e;++t)n=l[t]._model,Ht(n,s)&&(t>0&&Ht(l[t-1]._model,s)&&(n.controlPointPreviousX=u(n.controlPointPreviousX,s.left,s.right),n.controlPointPreviousY=u(n.controlPointPreviousY,s.top,s.bottom)),t<l.length-1&&Ht(l[t+1]._model,s)&&(n.controlPointNextX=u(n.controlPointNextX,s.left,s.right),n.controlPointNextY=u(n.controlPointNextY,s.top,s.bottom)))},draw:function(){var t,e=this.chart,n=this.getMeta(),i=n.data||[],a=e.chartArea,r=e.canvas,o=0,s=i.length;for(this._showLine&&(t=n.dataset._model.clip,H.canvas.clipArea(e.ctx,{left:!1===t.left?0:a.left-t.left,right:!1===t.right?r.width:a.right+t.right,top:!1===t.top?0:a.top-t.top,bottom:!1===t.bottom?r.height:a.bottom+t.bottom}),n.dataset.draw(),H.canvas.unclipArea(e.ctx));o<s;++o)i[o].draw(a)},setHoverStyle:function(t){var e=t._model,n=t._options,i=H.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=Wt(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Wt(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Wt(n.hoverBorderWidth,n.borderWidth),e.radius=Wt(n.hoverRadius,n.radius)}}),Gt=H.options.resolve;N._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e,n,i,a=document.createElement("ul"),r=t.data,o=r.datasets,s=r.labels;if(a.setAttribute("class",t.id+"-legend"),o.length)for(e=0,n=o[0].data.length;e<n;++e)(i=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=o[0].backgroundColor[e],s[e]&&i.appendChild(document.createTextNode(s[e]));return a.outerHTML},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((function(n,i){var a=t.getDatasetMeta(0),r=a.controller.getStyle(i);return{text:n,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,lineWidth:r.borderWidth,hidden:isNaN(e.datasets[0].data[i])||a.data[i].hidden,index:i}})):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart;for(n=0,i=(o.data.datasets||[]).length;n<i;++n)(a=o.getDatasetMeta(n)).data[r].hidden=!a.data[r].hidden;o.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}});var Xt=it.extend({dataElementType:kt.Arc,linkScales:H.noop,_dataElementOptions:["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"],_getIndexScaleId:function(){return this.chart.scale.id},_getValueScaleId:function(){return this.chart.scale.id},update:function(t){var e,n,i,a=this,r=a.getDataset(),o=a.getMeta(),s=a.chart.options.startAngle||0,l=a._starts=[],u=a._angles=[],d=o.data;for(a._updateRadius(),o.count=a.countVisibleElements(),e=0,n=r.data.length;e<n;e++)l[e]=s,i=a._computeAngle(e),u[e]=i,s+=i;for(e=0,n=d.length;e<n;++e)d[e]._options=a._resolveDataElementOptions(d[e],e),a.updateElement(d[e],e,t)},_updateRadius:function(){var t=this,e=t.chart,n=e.chartArea,i=e.options,a=Math.min(n.right-n.left,n.bottom-n.top);e.outerRadius=Math.max(a/2,0),e.innerRadius=Math.max(i.cutoutPercentage?e.outerRadius/100*i.cutoutPercentage:1,0),e.radiusLength=(e.outerRadius-e.innerRadius)/e.getVisibleDatasetCount(),t.outerRadius=e.outerRadius-e.radiusLength*t.index,t.innerRadius=t.outerRadius-e.radiusLength},updateElement:function(t,e,n){var i=this,a=i.chart,r=i.getDataset(),o=a.options,s=o.animation,l=a.scale,u=a.data.labels,d=l.xCenter,h=l.yCenter,c=o.startAngle,f=t.hidden?0:l.getDistanceFromCenterForValue(r.data[e]),g=i._starts[e],p=g+(t.hidden?0:i._angles[e]),m=s.animateScale?0:l.getDistanceFromCenterForValue(r.data[e]),v=t._options||{};H.extend(t,{_datasetIndex:i.index,_index:e,_scale:l,_model:{backgroundColor:v.backgroundColor,borderColor:v.borderColor,borderWidth:v.borderWidth,borderAlign:v.borderAlign,x:d,y:h,innerRadius:0,outerRadius:n?m:f,startAngle:n&&s.animateRotate?c:g,endAngle:n&&s.animateRotate?c:p,label:H.valueAtIndexOrDefault(u,e,u[e])}}),t.pivot()},countVisibleElements:function(){var t=this.getDataset(),e=this.getMeta(),n=0;return H.each(e.data,(function(e,i){isNaN(t.data[i])||e.hidden||n++})),n},setHoverStyle:function(t){var e=t._model,n=t._options,i=H.getHoverColor,a=H.valueOrDefault;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=a(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=a(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=a(n.hoverBorderWidth,n.borderWidth)},_computeAngle:function(t){var e=this,n=this.getMeta().count,i=e.getDataset(),a=e.getMeta();if(isNaN(i.data[t])||a.data[t].hidden)return 0;var r={chart:e.chart,dataIndex:t,dataset:i,datasetIndex:e.index};return Gt([e.chart.options.elements.arc.angle,2*Math.PI/n],r,t)}});N._set("pie",H.clone(N.doughnut)),N._set("pie",{cutoutPercentage:0});var Kt=Bt,Zt=H.valueOrDefault;N._set("radar",{spanGaps:!1,scale:{type:"radialLinear"},elements:{line:{fill:"start",tension:0}}});var $t=it.extend({datasetElementType:kt.Line,dataElementType:kt.Point,linkScales:H.noop,_datasetElementOptions:["backgroundColor","borderWidth","borderColor","borderCapStyle","borderDash","borderDashOffset","borderJoinStyle","fill"],_dataElementOptions:{backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},_getIndexScaleId:function(){return this.chart.scale.id},_getValueScaleId:function(){return this.chart.scale.id},update:function(t){var e,n,i=this,a=i.getMeta(),r=a.dataset,o=a.data||[],s=i.chart.scale,l=i._config;for(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),r._scale=s,r._datasetIndex=i.index,r._children=o,r._loop=!0,r._model=i._resolveDatasetElementOptions(r),r.pivot(),e=0,n=o.length;e<n;++e)i.updateElement(o[e],e,t);for(i.updateBezierControlPoints(),e=0,n=o.length;e<n;++e)o[e].pivot()},updateElement:function(t,e,n){var i=this,a=t.custom||{},r=i.getDataset(),o=i.chart.scale,s=o.getPointPositionForValue(e,r.data[e]),l=i._resolveDataElementOptions(t,e),u=i.getMeta().dataset._model,d=n?o.xCenter:s.x,h=n?o.yCenter:s.y;t._scale=o,t._options=l,t._datasetIndex=i.index,t._index=e,t._model={x:d,y:h,skip:a.skip||isNaN(d)||isNaN(h),radius:l.radius,pointStyle:l.pointStyle,rotation:l.rotation,backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,tension:Zt(a.tension,u?u.tension:0),hitRadius:l.hitRadius}},_resolveDatasetElementOptions:function(){var t=this,e=t._config,n=t.chart.options,i=it.prototype._resolveDatasetElementOptions.apply(t,arguments);return i.spanGaps=Zt(e.spanGaps,n.spanGaps),i.tension=Zt(e.lineTension,n.elements.line.tension),i},updateBezierControlPoints:function(){var t,e,n,i,a=this.getMeta(),r=this.chart.chartArea,o=a.data||[];function s(t,e,n){return Math.max(Math.min(t,n),e)}for(a.dataset._model.spanGaps&&(o=o.filter((function(t){return!t._model.skip}))),t=0,e=o.length;t<e;++t)n=o[t]._model,i=H.splineCurve(H.previousItem(o,t,!0)._model,n,H.nextItem(o,t,!0)._model,n.tension),n.controlPointPreviousX=s(i.previous.x,r.left,r.right),n.controlPointPreviousY=s(i.previous.y,r.top,r.bottom),n.controlPointNextX=s(i.next.x,r.left,r.right),n.controlPointNextY=s(i.next.y,r.top,r.bottom)},setHoverStyle:function(t){var e=t._model,n=t._options,i=H.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=Zt(n.hoverBackgroundColor,i(n.backgroundColor)),e.borderColor=Zt(n.hoverBorderColor,i(n.borderColor)),e.borderWidth=Zt(n.hoverBorderWidth,n.borderWidth),e.radius=Zt(n.hoverRadius,n.radius)}});N._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),N._set("global",{datasets:{scatter:{showLine:!1}}});var Jt={bar:Tt,bubble:Ot,doughnut:Bt,horizontalBar:Et,line:Yt,polarArea:Xt,pie:Kt,radar:$t,scatter:Yt};function Qt(t,e){return t.native?{x:t.x,y:t.y}:H.getRelativePosition(t,e)}function te(t,e){var n,i,a,r,o,s,l=t._getSortedVisibleDatasetMetas();for(i=0,r=l.length;i<r;++i)for(a=0,o=(n=l[i].data).length;a<o;++a)(s=n[a])._view.skip||e(s)}function ee(t,e){var n=[];return te(t,(function(t){t.inRange(e.x,e.y)&&n.push(t)})),n}function ne(t,e,n,i){var a=Number.POSITIVE_INFINITY,r=[];return te(t,(function(t){if(!n||t.inRange(e.x,e.y)){var o=t.getCenterPoint(),s=i(e,o);s<a?(r=[t],a=s):s===a&&r.push(t)}})),r}function ie(t){var e=-1!==t.indexOf("x"),n=-1!==t.indexOf("y");return function(t,i){var a=e?Math.abs(t.x-i.x):0,r=n?Math.abs(t.y-i.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}}function ae(t,e,n){var i=Qt(e,t);n.axis=n.axis||"x";var a=ie(n.axis),r=n.intersect?ee(t,i):ne(t,i,!1,a),o=[];return r.length?(t._getSortedVisibleDatasetMetas().forEach((function(t){var e=t.data[r[0]._index];e&&!e._view.skip&&o.push(e)})),o):[]}var re={modes:{single:function(t,e){var n=Qt(e,t),i=[];return te(t,(function(t){if(t.inRange(n.x,n.y))return i.push(t),i})),i.slice(0,1)},label:ae,index:ae,dataset:function(t,e,n){var i=Qt(e,t);n.axis=n.axis||"xy";var a=ie(n.axis),r=n.intersect?ee(t,i):ne(t,i,!1,a);return r.length>0&&(r=t.getDatasetMeta(r[0]._datasetIndex).data),r},"x-axis":function(t,e){return ae(t,e,{intersect:!1})},point:function(t,e){return ee(t,Qt(e,t))},nearest:function(t,e,n){var i=Qt(e,t);n.axis=n.axis||"xy";var a=ie(n.axis);return ne(t,i,n.intersect,a)},x:function(t,e,n){var i=Qt(e,t),a=[],r=!1;return te(t,(function(t){t.inXRange(i.x)&&a.push(t),t.inRange(i.x,i.y)&&(r=!0)})),n.intersect&&!r&&(a=[]),a},y:function(t,e,n){var i=Qt(e,t),a=[],r=!1;return te(t,(function(t){t.inYRange(i.y)&&a.push(t),t.inRange(i.x,i.y)&&(r=!0)})),n.intersect&&!r&&(a=[]),a}}},oe=H.extend;function se(t,e){return H.where(t,(function(t){return t.pos===e}))}function le(t,e){return t.sort((function(t,n){var i=e?n:t,a=e?t:n;return i.weight===a.weight?i.index-a.index:i.weight-a.weight}))}function ue(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function de(t,e,n){var i,a,r=n.box,o=t.maxPadding;if(n.size&&(t[n.pos]-=n.size),n.size=n.horizontal?r.height:r.width,t[n.pos]+=n.size,r.getPadding){var s=r.getPadding();o.top=Math.max(o.top,s.top),o.left=Math.max(o.left,s.left),o.bottom=Math.max(o.bottom,s.bottom),o.right=Math.max(o.right,s.right)}if(i=e.outerWidth-ue(o,t,"left","right"),a=e.outerHeight-ue(o,t,"top","bottom"),i!==t.w||a!==t.h){t.w=i,t.h=a;var l=n.horizontal?[i,t.w]:[a,t.h];return!(l[0]===l[1]||isNaN(l[0])&&isNaN(l[1]))}}function he(t,e){var n=e.maxPadding;function i(t){var i={left:0,top:0,right:0,bottom:0};return t.forEach((function(t){i[t]=Math.max(e[t],n[t])})),i}return i(t?["left","right"]:["top","bottom"])}function ce(t,e,n){var i,a,r,o,s,l,u=[];for(i=0,a=t.length;i<a;++i)(o=(r=t[i]).box).update(r.width||e.w,r.height||e.h,he(r.horizontal,e)),de(e,n,r)&&(l=!0,u.length&&(s=!0)),o.fullWidth||u.push(r);return s&&ce(u,e,n)||l}function fe(t,e,n){var i,a,r,o,s=n.padding,l=e.x,u=e.y;for(i=0,a=t.length;i<a;++i)o=(r=t[i]).box,r.horizontal?(o.left=o.fullWidth?s.left:e.left,o.right=o.fullWidth?n.outerWidth-s.right:e.left+e.w,o.top=u,o.bottom=u+o.height,o.width=o.right-o.left,u=o.bottom):(o.left=l,o.right=l+o.width,o.top=e.top,o.bottom=e.top+e.h,o.height=o.bottom-o.top,l=o.right);e.x=l,e.y=u}N._set("global",{layout:{padding:{top:0,right:0,bottom:0,left:0}}});var ge,pe={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw:function(){e.draw.apply(e,arguments)}}]},t.boxes.push(e)},removeBox:function(t,e){var n=t.boxes?t.boxes.indexOf(e):-1;-1!==n&&t.boxes.splice(n,1)},configure:function(t,e,n){for(var i,a=["fullWidth","position","weight"],r=a.length,o=0;o<r;++o)i=a[o],n.hasOwnProperty(i)&&(e[i]=n[i])},update:function(t,e,n){if(t){var i=t.options.layout||{},a=H.options.toPadding(i.padding),r=e-a.width,o=n-a.height,s=function(t){var e=function(t){var e,n,i,a=[];for(e=0,n=(t||[]).length;e<n;++e)i=t[e],a.push({index:e,box:i,pos:i.position,horizontal:i.isHorizontal(),weight:i.weight});return a}(t),n=le(se(e,"left"),!0),i=le(se(e,"right")),a=le(se(e,"top"),!0),r=le(se(e,"bottom"));return{leftAndTop:n.concat(a),rightAndBottom:i.concat(r),chartArea:se(e,"chartArea"),vertical:n.concat(i),horizontal:a.concat(r)}}(t.boxes),l=s.vertical,u=s.horizontal,d=Object.freeze({outerWidth:e,outerHeight:n,padding:a,availableWidth:r,vBoxMaxWidth:r/2/l.length,hBoxMaxHeight:o/2}),h=oe({maxPadding:oe({},a),w:r,h:o,x:a.left,y:a.top},a);!function(t,e){var n,i,a;for(n=0,i=t.length;n<i;++n)(a=t[n]).width=a.horizontal?a.box.fullWidth&&e.availableWidth:e.vBoxMaxWidth,a.height=a.horizontal&&e.hBoxMaxHeight}(l.concat(u),d),ce(l,h,d),ce(u,h,d)&&ce(l,h,d),function(t){var e=t.maxPadding;function n(n){var i=Math.max(e[n]-t[n],0);return t[n]+=i,i}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}(h),fe(s.leftAndTop,h,d),h.x+=h.w,h.y+=h.h,fe(s.rightAndBottom,h,d),t.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h},H.each(s.chartArea,(function(e){var n=e.box;oe(n,t.chartArea),n.update(h.w,h.h)}))}}},me=(ge=Object.freeze({__proto__:null,default:"@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"}))&&ge.default||ge,ve="$chartjs",be="chartjs-size-monitor",xe="chartjs-render-monitor",ye="chartjs-render-animation",_e=["animationstart","webkitAnimationStart"],ke={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function we(t,e){var n=H.getStyle(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?Number(i[1]):void 0}var Me=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0};function Se(t,e,n){t.addEventListener(e,n,Me)}function Ce(t,e,n){t.removeEventListener(e,n,Me)}function Pe(t,e,n,i,a){return{type:t,chart:e,native:a||null,x:void 0!==n?n:null,y:void 0!==i?i:null}}function Ae(t){var e=document.createElement("div");return e.className=t||"",e}function De(t,e,n){var i,a,r,o,s=t[ve]||(t[ve]={}),l=s.resizer=function(t){var e=Ae(be),n=Ae(be+"-expand"),i=Ae(be+"-shrink");n.appendChild(Ae()),i.appendChild(Ae()),e.appendChild(n),e.appendChild(i),e._reset=function(){n.scrollLeft=1e6,n.scrollTop=1e6,i.scrollLeft=1e6,i.scrollTop=1e6};var a=function(){e._reset(),t()};return Se(n,"scroll",a.bind(n,"expand")),Se(i,"scroll",a.bind(i,"shrink")),e}((i=function(){if(s.resizer){var i=n.options.maintainAspectRatio&&t.parentNode,a=i?i.clientWidth:0;e(Pe("resize",n)),i&&i.clientWidth<a&&n.canvas&&e(Pe("resize",n))}},r=!1,o=[],function(){o=Array.prototype.slice.call(arguments),a=a||this,r||(r=!0,H.requestAnimFrame.call(window,(function(){r=!1,i.apply(a,o)})))}));!function(t,e){var n=t[ve]||(t[ve]={}),i=n.renderProxy=function(t){t.animationName===ye&&e()};H.each(_e,(function(e){Se(t,e,i)})),n.reflow=!!t.offsetParent,t.classList.add(xe)}(t,(function(){if(s.resizer){var e=t.parentNode;e&&e!==l.parentNode&&e.insertBefore(l,e.firstChild),l._reset()}}))}function Te(t){var e=t[ve]||{},n=e.resizer;delete e.resizer,function(t){var e=t[ve]||{},n=e.renderProxy;n&&(H.each(_e,(function(e){Ce(t,e,n)})),delete e.renderProxy),t.classList.remove(xe)}(t),n&&n.parentNode&&n.parentNode.removeChild(n)}var Ie={disableCSSInjection:!1,_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,_ensureLoaded:function(t){if(!this.disableCSSInjection){var e=t.getRootNode?t.getRootNode():document;!function(t,e){var n=t[ve]||(t[ve]={});if(!n.containsStyles){n.containsStyles=!0,e="/* Chart.js */\n"+e;var i=document.createElement("style");i.setAttribute("type","text/css"),i.appendChild(document.createTextNode(e)),t.appendChild(i)}}(e.host?e:document.head,me)}},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(this._ensureLoaded(t),function(t,e){var n=t.style,i=t.getAttribute("height"),a=t.getAttribute("width");if(t[ve]={initial:{height:i,width:a,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",null===a||""===a){var r=we(t,"width");void 0!==r&&(t.width=r)}if(null===i||""===i)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var o=we(t,"height");void 0!==r&&(t.height=o)}}(t,e),n):null},releaseContext:function(t){var e=t.canvas;if(e[ve]){var n=e[ve].initial;["height","width"].forEach((function(t){var i=n[t];H.isNullOrUndef(i)?e.removeAttribute(t):e.setAttribute(t,i)})),H.each(n.style||{},(function(t,n){e.style[n]=t})),e.width=e.width,delete e[ve]}},addEventListener:function(t,e,n){var i=t.canvas;if("resize"!==e){var a=n[ve]||(n[ve]={});Se(i,e,(a.proxies||(a.proxies={}))[t.id+"_"+e]=function(e){n(function(t,e){var n=ke[t.type]||t.type,i=H.getRelativePosition(t,e);return Pe(n,e,i.x,i.y,t)}(e,t))})}else De(i,n,t)},removeEventListener:function(t,e,n){var i=t.canvas;if("resize"!==e){var a=((n[ve]||{}).proxies||{})[t.id+"_"+e];a&&Ce(i,e,a)}else Te(i)}};H.addEvent=Se,H.removeEvent=Ce;var Fe=Ie._enabled?Ie:{acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}},Oe=H.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},Fe);N._set("global",{plugins:{}});var Le={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach((function(t){-1===e.indexOf(t)&&e.push(t)})),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach((function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)})),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,n){var i,a,r,o,s,l=this.descriptors(t),u=l.length;for(i=0;i<u;++i)if("function"==typeof(s=(r=(a=l[i]).plugin)[e])&&((o=[t].concat(n||[])).push(a.options),!1===s.apply(r,o)))return!1;return!0},descriptors:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var n=[],i=[],a=t&&t.config||{},r=a.options&&a.options.plugins||{};return this._plugins.concat(a.plugins||[]).forEach((function(t){if(-1===n.indexOf(t)){var e=t.id,a=r[e];!1!==a&&(!0===a&&(a=H.clone(N.global.plugins[e])),n.push(t),i.push({plugin:t,options:a||{}}))}})),e.descriptors=i,e.id=this._cacheId,i},_invalidate:function(t){delete t.$plugins}},Re={constructors:{},defaults:{},registerScaleType:function(t,e,n){this.constructors[t]=e,this.defaults[t]=H.clone(n)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?H.merge(Object.create(null),[N.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){this.defaults.hasOwnProperty(t)&&(this.defaults[t]=H.extend(this.defaults[t],e))},addScalesToLayout:function(t){H.each(t.scales,(function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,pe.addBox(t,e)}))}},ze=H.valueOrDefault,Ne=H.rtl.getRtlAdapter;N._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:H.noop,title:function(t,e){var n="",i=e.labels,a=i?i.length:0;if(t.length>0){var r=t[0];r.label?n=r.label:r.xLabel?n=r.xLabel:a>0&&r.index<a&&(n=i[r.index])}return n},afterTitle:H.noop,beforeBody:H.noop,beforeLabel:H.noop,label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n&&(n+=": "),H.isNullOrUndef(t.value)?n+=t.yLabel:n+=t.value,n},labelColor:function(t,e){var n=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:n.borderColor,backgroundColor:n.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:H.noop,afterBody:H.noop,beforeFooter:H.noop,footer:H.noop,afterFooter:H.noop}}});var Be={average:function(t){if(!t.length)return!1;var e,n,i=0,a=0,r=0;for(e=0,n=t.length;e<n;++e){var o=t[e];if(o&&o.hasValue()){var s=o.tooltipPosition();i+=s.x,a+=s.y,++r}}return{x:i/r,y:a/r}},nearest:function(t,e){var n,i,a,r=e.x,o=e.y,s=Number.POSITIVE_INFINITY;for(n=0,i=t.length;n<i;++n){var l=t[n];if(l&&l.hasValue()){var u=l.getCenterPoint(),d=H.distanceBetweenPoints(e,u);d<s&&(s=d,a=l)}}if(a){var h=a.tooltipPosition();r=h.x,o=h.y}return{x:r,y:o}}};function Ee(t,e){return e&&(H.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function We(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function Ve(t){var e=N.global;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,rtl:t.rtl,textDirection:t.textDirection,bodyFontColor:t.bodyFontColor,_bodyFontFamily:ze(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:ze(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:ze(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:ze(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:ze(t.titleFontStyle,e.defaultFontStyle),titleFontSize:ze(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:ze(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:ze(t.footerFontStyle,e.defaultFontStyle),footerFontSize:ze(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}function He(t,e){return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-t.xPadding:t.x+t.xPadding}function je(t){return Ee([],We(t))}var qe=K.extend({initialize:function(){this._model=Ve(this._options),this._lastActive=[]},getTitle:function(){var t=this,e=t._options,n=e.callbacks,i=n.beforeTitle.apply(t,arguments),a=n.title.apply(t,arguments),r=n.afterTitle.apply(t,arguments),o=[];return o=Ee(o,We(i)),o=Ee(o,We(a)),o=Ee(o,We(r))},getBeforeBody:function(){return je(this._options.callbacks.beforeBody.apply(this,arguments))},getBody:function(t,e){var n=this,i=n._options.callbacks,a=[];return H.each(t,(function(t){var r={before:[],lines:[],after:[]};Ee(r.before,We(i.beforeLabel.call(n,t,e))),Ee(r.lines,i.label.call(n,t,e)),Ee(r.after,We(i.afterLabel.call(n,t,e))),a.push(r)})),a},getAfterBody:function(){return je(this._options.callbacks.afterBody.apply(this,arguments))},getFooter:function(){var t=this,e=t._options.callbacks,n=e.beforeFooter.apply(t,arguments),i=e.footer.apply(t,arguments),a=e.afterFooter.apply(t,arguments),r=[];return r=Ee(r,We(n)),r=Ee(r,We(i)),r=Ee(r,We(a))},update:function(t){var e,n,i,a,r,o,s,l,u,d,h=this,c=h._options,f=h._model,g=h._model=Ve(c),p=h._active,m=h._data,v={xAlign:f.xAlign,yAlign:f.yAlign},b={x:f.x,y:f.y},x={width:f.width,height:f.height},y={x:f.caretX,y:f.caretY};if(p.length){g.opacity=1;var _=[],k=[];y=Be[c.position].call(h,p,h._eventPosition);var w=[];for(e=0,n=p.length;e<n;++e)w.push((i=p[e],a=void 0,r=void 0,o=void 0,s=void 0,l=void 0,u=void 0,d=void 0,a=i._xScale,r=i._yScale||i._scale,o=i._index,s=i._datasetIndex,l=i._chart.getDatasetMeta(s).controller,u=l._getIndexScale(),d=l._getValueScale(),{xLabel:a?a.getLabelForIndex(o,s):"",yLabel:r?r.getLabelForIndex(o,s):"",label:u?""+u.getLabelForIndex(o,s):"",value:d?""+d.getLabelForIndex(o,s):"",index:o,datasetIndex:s,x:i._model.x,y:i._model.y}));c.filter&&(w=w.filter((function(t){return c.filter(t,m)}))),c.itemSort&&(w=w.sort((function(t,e){return c.itemSort(t,e,m)}))),H.each(w,(function(t){_.push(c.callbacks.labelColor.call(h,t,h._chart)),k.push(c.callbacks.labelTextColor.call(h,t,h._chart))})),g.title=h.getTitle(w,m),g.beforeBody=h.getBeforeBody(w,m),g.body=h.getBody(w,m),g.afterBody=h.getAfterBody(w,m),g.footer=h.getFooter(w,m),g.x=y.x,g.y=y.y,g.caretPadding=c.caretPadding,g.labelColors=_,g.labelTextColors=k,g.dataPoints=w,x=function(t,e){var n=t._chart.ctx,i=2*e.yPadding,a=0,r=e.body,o=r.reduce((function(t,e){return t+e.before.length+e.lines.length+e.after.length}),0);o+=e.beforeBody.length+e.afterBody.length;var s=e.title.length,l=e.footer.length,u=e.titleFontSize,d=e.bodyFontSize,h=e.footerFontSize;i+=s*u,i+=s?(s-1)*e.titleSpacing:0,i+=s?e.titleMarginBottom:0,i+=o*d,i+=o?(o-1)*e.bodySpacing:0,i+=l?e.footerMarginTop:0,i+=l*h,i+=l?(l-1)*e.footerSpacing:0;var c=0,f=function(t){a=Math.max(a,n.measureText(t).width+c)};return n.font=H.fontString(u,e._titleFontStyle,e._titleFontFamily),H.each(e.title,f),n.font=H.fontString(d,e._bodyFontStyle,e._bodyFontFamily),H.each(e.beforeBody.concat(e.afterBody),f),c=e.displayColors?d+2:0,H.each(r,(function(t){H.each(t.before,f),H.each(t.lines,f),H.each(t.after,f)})),c=0,n.font=H.fontString(h,e._footerFontStyle,e._footerFontFamily),H.each(e.footer,f),{width:a+=2*e.xPadding,height:i}}(this,g),b=function(t,e,n,i){var a=t.x,r=t.y,o=t.caretSize,s=t.caretPadding,l=t.cornerRadius,u=n.xAlign,d=n.yAlign,h=o+s,c=l+s;return"right"===u?a-=e.width:"center"===u&&((a-=e.width/2)+e.width>i.width&&(a=i.width-e.width),a<0&&(a=0)),"top"===d?r+=h:r-="bottom"===d?e.height+h:e.height/2,"center"===d?"left"===u?a+=h:"right"===u&&(a-=h):"left"===u?a-=c:"right"===u&&(a+=c),{x:a,y:r}}(g,x,v=function(t,e){var n,i,a,r,o,s=t._model,l=t._chart,u=t._chart.chartArea,d="center",h="center";s.y<e.height?h="top":s.y>l.height-e.height&&(h="bottom");var c=(u.left+u.right)/2,f=(u.top+u.bottom)/2;"center"===h?(n=function(t){return t<=c},i=function(t){return t>c}):(n=function(t){return t<=e.width/2},i=function(t){return t>=l.width-e.width/2}),a=function(t){return t+e.width+s.caretSize+s.caretPadding>l.width},r=function(t){return t-e.width-s.caretSize-s.caretPadding<0},o=function(t){return t<=f?"top":"bottom"},n(s.x)?(d="left",a(s.x)&&(d="center",h=o(s.y))):i(s.x)&&(d="right",r(s.x)&&(d="center",h=o(s.y)));var g=t._options;return{xAlign:g.xAlign?g.xAlign:d,yAlign:g.yAlign?g.yAlign:h}}(this,x),h._chart)}else g.opacity=0;return g.xAlign=v.xAlign,g.yAlign=v.yAlign,g.x=b.x,g.y=b.y,g.width=x.width,g.height=x.height,g.caretX=y.x,g.caretY=y.y,h._model=g,t&&c.custom&&c.custom.call(h,g),h},drawCaret:function(t,e){var n=this._chart.ctx,i=this._view,a=this.getCaretPosition(t,e,i);n.lineTo(a.x1,a.y1),n.lineTo(a.x2,a.y2),n.lineTo(a.x3,a.y3)},getCaretPosition:function(t,e,n){var i,a,r,o,s,l,u=n.caretSize,d=n.cornerRadius,h=n.xAlign,c=n.yAlign,f=t.x,g=t.y,p=e.width,m=e.height;if("center"===c)s=g+m/2,"left"===h?(a=(i=f)-u,r=i,o=s+u,l=s-u):(a=(i=f+p)+u,r=i,o=s-u,l=s+u);else if("left"===h?(i=(a=f+d+u)-u,r=a+u):"right"===h?(i=(a=f+p-d-u)-u,r=a+u):(i=(a=n.caretX)-u,r=a+u),"top"===c)s=(o=g)-u,l=o;else{s=(o=g+m)+u,l=o;var v=r;r=i,i=v}return{x1:i,x2:a,x3:r,y1:o,y2:s,y3:l}},drawTitle:function(t,e,n){var i,a,r,o=e.title,s=o.length;if(s){var l=Ne(e.rtl,e.x,e.width);for(t.x=He(e,e._titleAlign),n.textAlign=l.textAlign(e._titleAlign),n.textBaseline="middle",i=e.titleFontSize,a=e.titleSpacing,n.fillStyle=e.titleFontColor,n.font=H.fontString(i,e._titleFontStyle,e._titleFontFamily),r=0;r<s;++r)n.fillText(o[r],l.x(t.x),t.y+i/2),t.y+=i+a,r+1===s&&(t.y+=e.titleMarginBottom-a)}},drawBody:function(t,e,n){var i,a,r,o,s,l,u,d,h=e.bodyFontSize,c=e.bodySpacing,f=e._bodyAlign,g=e.body,p=e.displayColors,m=0,v=p?He(e,"left"):0,b=Ne(e.rtl,e.x,e.width),x=function(e){n.fillText(e,b.x(t.x+m),t.y+h/2),t.y+=h+c},y=b.textAlign(f);for(n.textAlign=f,n.textBaseline="middle",n.font=H.fontString(h,e._bodyFontStyle,e._bodyFontFamily),t.x=He(e,y),n.fillStyle=e.bodyFontColor,H.each(e.beforeBody,x),m=p&&"right"!==y?"center"===f?h/2+1:h+2:0,s=0,u=g.length;s<u;++s){for(i=g[s],a=e.labelTextColors[s],r=e.labelColors[s],n.fillStyle=a,H.each(i.before,x),l=0,d=(o=i.lines).length;l<d;++l){if(p){var _=b.x(v);n.fillStyle=e.legendColorBackground,n.fillRect(b.leftForLtr(_,h),t.y,h,h),n.lineWidth=1,n.strokeStyle=r.borderColor,n.strokeRect(b.leftForLtr(_,h),t.y,h,h),n.fillStyle=r.backgroundColor,n.fillRect(b.leftForLtr(b.xPlus(_,1),h-2),t.y+1,h-2,h-2),n.fillStyle=a}x(o[l])}H.each(i.after,x)}m=0,H.each(e.afterBody,x),t.y-=c},drawFooter:function(t,e,n){var i,a,r=e.footer,o=r.length;if(o){var s=Ne(e.rtl,e.x,e.width);for(t.x=He(e,e._footerAlign),t.y+=e.footerMarginTop,n.textAlign=s.textAlign(e._footerAlign),n.textBaseline="middle",i=e.footerFontSize,n.fillStyle=e.footerFontColor,n.font=H.fontString(i,e._footerFontStyle,e._footerFontFamily),a=0;a<o;++a)n.fillText(r[a],s.x(t.x),t.y+i/2),t.y+=i+e.footerSpacing}},drawBackground:function(t,e,n,i){n.fillStyle=e.backgroundColor,n.strokeStyle=e.borderColor,n.lineWidth=e.borderWidth;var a=e.xAlign,r=e.yAlign,o=t.x,s=t.y,l=i.width,u=i.height,d=e.cornerRadius;n.beginPath(),n.moveTo(o+d,s),"top"===r&&this.drawCaret(t,i),n.lineTo(o+l-d,s),n.quadraticCurveTo(o+l,s,o+l,s+d),"center"===r&&"right"===a&&this.drawCaret(t,i),n.lineTo(o+l,s+u-d),n.quadraticCurveTo(o+l,s+u,o+l-d,s+u),"bottom"===r&&this.drawCaret(t,i),n.lineTo(o+d,s+u),n.quadraticCurveTo(o,s+u,o,s+u-d),"center"===r&&"left"===a&&this.drawCaret(t,i),n.lineTo(o,s+d),n.quadraticCurveTo(o,s,o+d,s),n.closePath(),n.fill(),e.borderWidth>0&&n.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var n={width:e.width,height:e.height},i={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity,r=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&r&&(t.save(),t.globalAlpha=a,this.drawBackground(i,e,t,n),i.y+=e.yPadding,H.rtl.overrideTextDirection(t,e.textDirection),this.drawTitle(i,e,t),this.drawBody(i,e,t),this.drawFooter(i,e,t),H.rtl.restoreTextDirection(t,e.textDirection),t.restore())}},handleEvent:function(t){var e,n=this,i=n._options;return n._lastActive=n._lastActive||[],"mouseout"===t.type?n._active=[]:(n._active=n._chart.getElementsAtEventForMode(t,i.mode,i),i.reverse&&n._active.reverse()),(e=!H.arrayEquals(n._active,n._lastActive))&&(n._lastActive=n._active,(i.enabled||i.custom)&&(n._eventPosition={x:t.x,y:t.y},n.update(!0),n.pivot())),e}}),Ue=Be,Ye=qe;Ye.positioners=Ue;var Ge=H.valueOrDefault;function Xe(){return H.merge(Object.create(null),[].slice.call(arguments),{merger:function(t,e,n,i){if("xAxes"===t||"yAxes"===t){var a,r,o,s=n[t].length;for(e[t]||(e[t]=[]),a=0;a<s;++a)o=n[t][a],r=Ge(o.type,"xAxes"===t?"category":"linear"),a>=e[t].length&&e[t].push({}),!e[t][a].type||o.type&&o.type!==e[t][a].type?H.merge(e[t][a],[Re.getScaleDefaults(r),o]):H.merge(e[t][a],o)}else H._merger(t,e,n,i)}})}function Ke(){return H.merge(Object.create(null),[].slice.call(arguments),{merger:function(t,e,n,i){var a=e[t]||Object.create(null),r=n[t];"scales"===t?e[t]=Xe(a,r):"scale"===t?e[t]=H.merge(a,[Re.getScaleDefaults(r.type),r]):H._merger(t,e,n,i)}})}function Ze(t){var e=t.options;H.each(t.scales,(function(e){pe.removeBox(t,e)})),e=Ke(N.global,N[t.config.type],e),t.options=t.config.options=e,t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.tooltip._options=e.tooltips,t.tooltip.initialize()}function $e(t,e,n){var i,a=function(t){return t.id===i};do{i=e+n++}while(H.findIndex(t,a)>=0);return i}function Je(t){return"top"===t||"bottom"===t}function Qe(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}N._set("global",{elements:{},events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,maintainAspectRatio:!0,responsive:!0,responsiveAnimationDuration:0});var tn=function(t,e){return this.construct(t,e),this};H.extend(tn.prototype,{construct:function(t,e){var n=this;e=function(t){var e=(t=t||Object.create(null)).data=t.data||{};return e.datasets=e.datasets||[],e.labels=e.labels||[],t.options=Ke(N.global,N[t.type],t.options||{}),t}(e);var i=Oe.acquireContext(t,e),a=i&&i.canvas,r=a&&a.height,o=a&&a.width;n.id=H.uid(),n.ctx=i,n.canvas=a,n.config=e,n.width=o,n.height=r,n.aspectRatio=r?o/r:null,n.options=e.options,n._bufferedRender=!1,n._layers=[],n.chart=n,n.controller=n,tn.instances[n.id]=n,Object.defineProperty(n,"data",{get:function(){return n.config.data},set:function(t){n.config.data=t}}),i&&a?(n.initialize(),n.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return Le.notify(t,"beforeInit"),H.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.initToolTip(),Le.notify(t,"afterInit"),t},clear:function(){return H.canvas.clear(this),this},stop:function(){return J.cancelAnimation(this),this},resize:function(t){var e=this,n=e.options,i=e.canvas,a=n.maintainAspectRatio&&e.aspectRatio||null,r=Math.max(0,Math.floor(H.getMaximumWidth(i))),o=Math.max(0,Math.floor(a?r/a:H.getMaximumHeight(i)));if((e.width!==r||e.height!==o)&&(i.width=e.width=r,i.height=e.height=o,i.style.width=r+"px",i.style.height=o+"px",H.retinaScale(e,n.devicePixelRatio),!t)){var s={width:r,height:o};Le.notify(e,"resize",[s]),n.onResize&&n.onResize(e,s),e.stop(),e.update({duration:n.responsiveAnimationDuration})}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},n=t.scale;H.each(e.xAxes,(function(t,n){t.id||(t.id=$e(e.xAxes,"x-axis-",n))})),H.each(e.yAxes,(function(t,n){t.id||(t.id=$e(e.yAxes,"y-axis-",n))})),n&&(n.id=n.id||"scale")},buildOrUpdateScales:function(){var t=this,e=t.options,n=t.scales||{},i=[],a=Object.keys(n).reduce((function(t,e){return t[e]=!1,t}),{});e.scales&&(i=i.concat((e.scales.xAxes||[]).map((function(t){return{options:t,dtype:"category",dposition:"bottom"}})),(e.scales.yAxes||[]).map((function(t){return{options:t,dtype:"linear",dposition:"left"}})))),e.scale&&i.push({options:e.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),H.each(i,(function(e){var i=e.options,r=i.id,o=Ge(i.type,e.dtype);Je(i.position)!==Je(e.dposition)&&(i.position=e.dposition),a[r]=!0;var s=null;if(r in n&&n[r].type===o)(s=n[r]).options=i,s.ctx=t.ctx,s.chart=t;else{var l=Re.getScaleConstructor(o);if(!l)return;s=new l({id:r,type:o,options:i,ctx:t.ctx,chart:t}),n[s.id]=s}s.mergeTicksOptions(),e.isDefault&&(t.scale=s)})),H.each(a,(function(t,e){t||delete n[e]})),t.scales=n,Re.addScalesToLayout(this)},buildOrUpdateControllers:function(){var t,e,n=this,i=[],a=n.data.datasets;for(t=0,e=a.length;t<e;t++){var r=a[t],o=n.getDatasetMeta(t),s=r.type||n.config.type;if(o.type&&o.type!==s&&(n.destroyDatasetMeta(t),o=n.getDatasetMeta(t)),o.type=s,o.order=r.order||0,o.index=t,o.controller)o.controller.updateIndex(t),o.controller.linkScales();else{var l=Jt[o.type];if(void 0===l)throw new Error('"'+o.type+'" is not a chart type.');o.controller=new l(n,t),i.push(o.controller)}}return i},resetElements:function(){var t=this;H.each(t.data.datasets,(function(e,n){t.getDatasetMeta(n).controller.reset()}),t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t){var e,n,i=this;if(t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]}),Ze(i),Le._invalidate(i),!1!==Le.notify(i,"beforeUpdate")){i.tooltip._data=i.data;var a=i.buildOrUpdateControllers();for(e=0,n=i.data.datasets.length;e<n;e++)i.getDatasetMeta(e).controller.buildOrUpdateElements();i.updateLayout(),i.options.animation&&i.options.animation.duration&&H.each(a,(function(t){t.reset()})),i.updateDatasets(),i.tooltip.initialize(),i.lastActive=[],Le.notify(i,"afterUpdate"),i._layers.sort(Qe("z","_idx")),i._bufferedRender?i._bufferedRequest={duration:t.duration,easing:t.easing,lazy:t.lazy}:i.render(t)}},updateLayout:function(){var t=this;!1!==Le.notify(t,"beforeLayout")&&(pe.update(this,this.width,this.height),t._layers=[],H.each(t.boxes,(function(e){e._configure&&e._configure(),t._layers.push.apply(t._layers,e._layers())}),t),t._layers.forEach((function(t,e){t._idx=e})),Le.notify(t,"afterScaleUpdate"),Le.notify(t,"afterLayout"))},updateDatasets:function(){if(!1!==Le.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);Le.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),n={meta:e,index:t};!1!==Le.notify(this,"beforeDatasetUpdate",[n])&&(e.controller._update(),Le.notify(this,"afterDatasetUpdate",[n]))},render:function(t){var e=this;t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]});var n=e.options.animation,i=Ge(t.duration,n&&n.duration),a=t.lazy;if(!1!==Le.notify(e,"beforeRender")){var r=function(t){Le.notify(e,"afterRender"),H.callback(n&&n.onComplete,[t],e)};if(n&&i){var o=new $({numSteps:i/16.66,easing:t.easing||n.easing,render:function(t,e){var n=H.easing.effects[e.easing],i=e.currentStep,a=i/e.numSteps;t.draw(n(a),a,i)},onAnimationProgress:n.onProgress,onAnimationComplete:r});J.addAnimation(e,o,i,a)}else e.draw(),r(new $({numSteps:0,chart:e}));return e}},draw:function(t){var e,n,i=this;if(i.clear(),H.isNullOrUndef(t)&&(t=1),i.transition(t),!(i.width<=0||i.height<=0)&&!1!==Le.notify(i,"beforeDraw",[t])){for(n=i._layers,e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(i.chartArea);for(i.drawDatasets(t);e<n.length;++e)n[e].draw(i.chartArea);i._drawTooltip(t),Le.notify(i,"afterDraw",[t])}},transition:function(t){for(var e=0,n=(this.data.datasets||[]).length;e<n;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},_getSortedDatasetMetas:function(t){var e,n,i=[];for(e=0,n=(this.data.datasets||[]).length;e<n;++e)t&&!this.isDatasetVisible(e)||i.push(this.getDatasetMeta(e));return i.sort(Qe("order","index")),i},_getSortedVisibleDatasetMetas:function(){return this._getSortedDatasetMetas(!0)},drawDatasets:function(t){var e,n;if(!1!==Le.notify(this,"beforeDatasetsDraw",[t])){for(n=(e=this._getSortedVisibleDatasetMetas()).length-1;n>=0;--n)this.drawDataset(e[n],t);Le.notify(this,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var n={meta:t,index:t.index,easingValue:e};!1!==Le.notify(this,"beforeDatasetDraw",[n])&&(t.controller.draw(e),Le.notify(this,"afterDatasetDraw",[n]))},_drawTooltip:function(t){var e=this.tooltip,n={tooltip:e,easingValue:t};!1!==Le.notify(this,"beforeTooltipDraw",[n])&&(e.draw(),Le.notify(this,"afterTooltipDraw",[n]))},getElementAtEvent:function(t){return re.modes.single(this,t)},getElementsAtEvent:function(t){return re.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return re.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,n){var i=re.modes[e];return"function"==typeof i?i(this,t,n):[]},getDatasetAtEvent:function(t){return re.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var n=e._meta[this.id];return n||(n=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e.order||0,index:t}),n},getVisibleDatasetCount:function(){for(var t=0,e=0,n=this.data.datasets.length;e<n;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,n=this.data.datasets[t],i=n._meta&&n._meta[e];i&&(i.controller.destroy(),delete n._meta[e])},destroy:function(){var t,e,n=this,i=n.canvas;for(n.stop(),t=0,e=n.data.datasets.length;t<e;++t)n.destroyDatasetMeta(t);i&&(n.unbindEvents(),H.canvas.clear(n),Oe.releaseContext(n.ctx),n.canvas=null,n.ctx=null),Le.notify(n,"destroy"),delete tn.instances[n.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var t=this;t.tooltip=new Ye({_chart:t,_chartInstance:t,_data:t.data,_options:t.options.tooltips},t)},bindEvents:function(){var t=this,e=t._listeners={},n=function(){t.eventHandler.apply(t,arguments)};H.each(t.options.events,(function(i){Oe.addEventListener(t,i,n),e[i]=n})),t.options.responsive&&(n=function(){t.resize()},Oe.addEventListener(t,"resize",n),e.resize=n)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,H.each(e,(function(e,n){Oe.removeEventListener(t,n,e)})))},updateHoverStyle:function(t,e,n){var i,a,r,o=n?"set":"remove";for(a=0,r=t.length;a<r;++a)(i=t[a])&&this.getDatasetMeta(i._datasetIndex).controller[o+"HoverStyle"](i);"dataset"===e&&this.getDatasetMeta(t[0]._datasetIndex).controller["_"+o+"DatasetHoverStyle"]()},eventHandler:function(t){var e=this,n=e.tooltip;if(!1!==Le.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null;var i=e.handleEvent(t);n&&(i=n._start?n.handleEvent(t):i|n.handleEvent(t)),Le.notify(e,"afterEvent",[t]);var a=e._bufferedRequest;return a?e.render(a):i&&!e.animating&&(e.stop(),e.render({duration:e.options.hover.animationDuration,lazy:!0})),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e,n=this,i=n.options||{},a=i.hover;return n.lastActive=n.lastActive||[],"mouseout"===t.type?n.active=[]:n.active=n.getElementsAtEventForMode(t,a.mode,a),H.callback(i.onHover||i.hover.onHover,[t.native,n.active],n),"mouseup"!==t.type&&"click"!==t.type||i.onClick&&i.onClick.call(n,t.native,n.active),n.lastActive.length&&n.updateHoverStyle(n.lastActive,a.mode,!1),n.active.length&&a.mode&&n.updateHoverStyle(n.active,a.mode,!0),e=!H.arrayEquals(n.active,n.lastActive),n.lastActive=n.active,e}}),tn.instances={};var en=tn;tn.Controller=tn,tn.types={},H.configMerge=Ke,H.scaleMerge=Xe;function nn(){throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")}function an(t){this.options=t||{}}H.extend(an.prototype,{formats:nn,parse:nn,format:nn,add:nn,diff:nn,startOf:nn,endOf:nn,_create:function(t){return t}}),an.override=function(t){H.extend(an.prototype,t)};var rn={_date:an},on={formatters:{values:function(t){return H.isArray(t)?t:""+t},linear:function(t,e,n){var i=n.length>3?n[2]-n[1]:n[1]-n[0];Math.abs(i)>1&&t!==Math.floor(t)&&(i=t-Math.floor(t));var a=H.log10(Math.abs(i)),r="";if(0!==t)if(Math.max(Math.abs(n[0]),Math.abs(n[n.length-1]))<1e-4){var o=H.log10(Math.abs(t)),s=Math.floor(o)-Math.floor(a);s=Math.max(Math.min(s,20),0),r=t.toExponential(s)}else{var l=-1*Math.floor(a);l=Math.max(Math.min(l,20),0),r=t.toFixed(l)}else r="0";return r},logarithmic:function(t,e,n){var i=t/Math.pow(10,Math.floor(H.log10(t)));return 0===t?"0":1===i||2===i||5===i||0===e||e===n.length-1?t.toExponential():""}}},sn=H.isArray,ln=H.isNullOrUndef,un=H.valueOrDefault,dn=H.valueAtIndexOrDefault;function hn(t,e,n){var i,a=t.getTicks().length,r=Math.min(e,a-1),o=t.getPixelForTick(r),s=t._startPixel,l=t._endPixel;if(!(n&&(i=1===a?Math.max(o-s,l-o):0===e?(t.getPixelForTick(1)-o)/2:(o-t.getPixelForTick(r-1))/2,(o+=r<e?i:-i)<s-1e-6||o>l+1e-6)))return o}function cn(t,e,n,i){var a,r,o,s,l,u,d,h,c,f,g,p,m,v=n.length,b=[],x=[],y=[],_=0,k=0;for(a=0;a<v;++a){if(s=n[a].label,l=n[a].major?e.major:e.minor,t.font=u=l.string,d=i[u]=i[u]||{data:{},gc:[]},h=l.lineHeight,c=f=0,ln(s)||sn(s)){if(sn(s))for(r=0,o=s.length;r<o;++r)g=s[r],ln(g)||sn(g)||(c=H.measureText(t,d.data,d.gc,c,g),f+=h)}else c=H.measureText(t,d.data,d.gc,c,s),f=h;b.push(c),x.push(f),y.push(h/2),_=Math.max(c,_),k=Math.max(f,k)}function w(t){return{width:b[t]||0,height:x[t]||0,offset:y[t]||0}}return function(t,e){H.each(t,(function(t){var n,i=t.gc,a=i.length/2;if(a>e){for(n=0;n<a;++n)delete t.data[i[n]];i.splice(0,a)}}))}(i,v),p=b.indexOf(_),m=x.indexOf(k),{first:w(0),last:w(v-1),widest:w(p),highest:w(m)}}function fn(t){return t.drawTicks?t.tickMarkLength:0}function gn(t){var e,n;return t.display?(e=H.options._parseFont(t),n=H.options.toPadding(t.padding),e.lineHeight+n.height):0}function pn(t,e){return H.extend(H.options._parseFont({fontFamily:un(e.fontFamily,t.fontFamily),fontSize:un(e.fontSize,t.fontSize),fontStyle:un(e.fontStyle,t.fontStyle),lineHeight:un(e.lineHeight,t.lineHeight)}),{color:H.options.resolve([e.fontColor,t.fontColor,N.global.defaultFontColor])})}function mn(t){var e=pn(t,t.minor);return{minor:e,major:t.major.enabled?pn(t,t.major):e}}function vn(t){var e,n,i,a=[];for(n=0,i=t.length;n<i;++n)void 0!==(e=t[n])._index&&a.push(e);return a}function bn(t,e,n,i){var a,r,o,s,l=un(n,0),u=Math.min(un(i,t.length),t.length),d=0;for(e=Math.ceil(e),i&&(e=(a=i-n)/Math.floor(a/e)),s=l;s<0;)d++,s=Math.round(l+d*e);for(r=Math.max(l,0);r<u;r++)o=t[r],r===s?(o._index=r,d++,s=Math.round(l+d*e)):delete o.label}N._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0,0,0,0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:on.formatters.values,minor:{},major:{}}});var xn=K.extend({zeroLineIndex:0,getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},_getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]},mergeTicksOptions:function(){},beforeUpdate:function(){H.callback(this.options.beforeUpdate,[this])},update:function(t,e,n){var i,a,r,o,s,l=this,u=l.options.ticks,d=u.sampleSize;if(l.beforeUpdate(),l.maxWidth=t,l.maxHeight=e,l.margins=H.extend({left:0,right:0,top:0,bottom:0},n),l._ticks=null,l.ticks=null,l._labelSizes=null,l._maxLabelLines=0,l.longestLabelWidth=0,l.longestTextCache=l.longestTextCache||{},l._gridLineItems=null,l._labelItems=null,l.beforeSetDimensions(),l.setDimensions(),l.afterSetDimensions(),l.beforeDataLimits(),l.determineDataLimits(),l.afterDataLimits(),l.beforeBuildTicks(),o=l.buildTicks()||[],(!(o=l.afterBuildTicks(o)||o)||!o.length)&&l.ticks)for(o=[],i=0,a=l.ticks.length;i<a;++i)o.push({value:l.ticks[i],major:!1});return l._ticks=o,s=d<o.length,r=l._convertTicksToLabels(s?function(t,e){for(var n=[],i=t.length/e,a=0,r=t.length;a<r;a+=i)n.push(t[Math.floor(a)]);return n}(o,d):o),l._configure(),l.beforeCalculateTickRotation(),l.calculateTickRotation(),l.afterCalculateTickRotation(),l.beforeFit(),l.fit(),l.afterFit(),l._ticksToDraw=u.display&&(u.autoSkip||"auto"===u.source)?l._autoSkip(o):o,s&&(r=l._convertTicksToLabels(l._ticksToDraw)),l.ticks=r,l.afterUpdate(),l.minSize},_configure:function(){var t,e,n=this,i=n.options.ticks.reverse;n.isHorizontal()?(t=n.left,e=n.right):(t=n.top,e=n.bottom,i=!i),n._startPixel=t,n._endPixel=e,n._reversePixels=i,n._length=e-t},afterUpdate:function(){H.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){H.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){H.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){H.callback(this.options.beforeDataLimits,[this])},determineDataLimits:H.noop,afterDataLimits:function(){H.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){H.callback(this.options.beforeBuildTicks,[this])},buildTicks:H.noop,afterBuildTicks:function(t){var e=this;return sn(t)&&t.length?H.callback(e.options.afterBuildTicks,[e,t]):(e.ticks=H.callback(e.options.afterBuildTicks,[e,e.ticks])||e.ticks,t)},beforeTickToLabelConversion:function(){H.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){H.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){H.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t,e,n,i,a,r,o,s=this,l=s.options,u=l.ticks,d=s.getTicks().length,h=u.minRotation||0,c=u.maxRotation,f=h;!s._isVisible()||!u.display||h>=c||d<=1||!s.isHorizontal()?s.labelRotation=h:(e=(t=s._getLabelSizes()).widest.width,n=t.highest.height-t.highest.offset,i=Math.min(s.maxWidth,s.chart.width-e),e+6>(a=l.offset?s.maxWidth/d:i/(d-1))&&(a=i/(d-(l.offset?.5:1)),r=s.maxHeight-fn(l.gridLines)-u.padding-gn(l.scaleLabel),o=Math.sqrt(e*e+n*n),f=H.toDegrees(Math.min(Math.asin(Math.min((t.highest.height+6)/a,1)),Math.asin(Math.min(r/o,1))-Math.asin(n/o))),f=Math.max(h,Math.min(c,f))),s.labelRotation=f)},afterCalculateTickRotation:function(){H.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){H.callback(this.options.beforeFit,[this])},fit:function(){var t=this,e=t.minSize={width:0,height:0},n=t.chart,i=t.options,a=i.ticks,r=i.scaleLabel,o=i.gridLines,s=t._isVisible(),l="bottom"===i.position,u=t.isHorizontal();if(u?e.width=t.maxWidth:s&&(e.width=fn(o)+gn(r)),u?s&&(e.height=fn(o)+gn(r)):e.height=t.maxHeight,a.display&&s){var d=mn(a),h=t._getLabelSizes(),c=h.first,f=h.last,g=h.widest,p=h.highest,m=.4*d.minor.lineHeight,v=a.padding;if(u){var b=0!==t.labelRotation,x=H.toRadians(t.labelRotation),y=Math.cos(x),_=Math.sin(x),k=_*g.width+y*(p.height-(b?p.offset:0))+(b?0:m);e.height=Math.min(t.maxHeight,e.height+k+v);var w,M,S=t.getPixelForTick(0)-t.left,C=t.right-t.getPixelForTick(t.getTicks().length-1);b?(w=l?y*c.width+_*c.offset:_*(c.height-c.offset),M=l?_*(f.height-f.offset):y*f.width+_*f.offset):(w=c.width/2,M=f.width/2),t.paddingLeft=Math.max((w-S)*t.width/(t.width-S),0)+3,t.paddingRight=Math.max((M-C)*t.width/(t.width-C),0)+3}else{var P=a.mirror?0:g.width+v+m;e.width=Math.min(t.maxWidth,e.width+P),t.paddingTop=c.height/2,t.paddingBottom=f.height/2}}t.handleMargins(),u?(t.width=t._length=n.width-t.margins.left-t.margins.right,t.height=e.height):(t.width=e.width,t.height=t._length=n.height-t.margins.top-t.margins.bottom)},handleMargins:function(){var t=this;t.margins&&(t.margins.left=Math.max(t.paddingLeft,t.margins.left),t.margins.top=Math.max(t.paddingTop,t.margins.top),t.margins.right=Math.max(t.paddingRight,t.margins.right),t.margins.bottom=Math.max(t.paddingBottom,t.margins.bottom))},afterFit:function(){H.callback(this.options.afterFit,[this])},isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(ln(t))return NaN;if(("number"==typeof t||t instanceof Number)&&!isFinite(t))return NaN;if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);return t},_convertTicksToLabels:function(t){var e,n,i,a=this;for(a.ticks=t.map((function(t){return t.value})),a.beforeTickToLabelConversion(),e=a.convertTicksToLabels(t)||a.ticks,a.afterTickToLabelConversion(),n=0,i=t.length;n<i;++n)t[n].label=e[n];return e},_getLabelSizes:function(){var t=this,e=t._labelSizes;return e||(t._labelSizes=e=cn(t.ctx,mn(t.options.ticks),t.getTicks(),t.longestTextCache),t.longestLabelWidth=e.widest.width),e},_parseValue:function(t){var e,n,i,a;return sn(t)?(e=+this.getRightValue(t[0]),n=+this.getRightValue(t[1]),i=Math.min(e,n),a=Math.max(e,n)):(e=void 0,n=t=+this.getRightValue(t),i=t,a=t),{min:i,max:a,start:e,end:n}},_getScaleLabel:function(t){var e=this._parseValue(t);return void 0!==e.start?"["+e.start+", "+e.end+"]":+this.getRightValue(t)},getLabelForIndex:H.noop,getPixelForValue:H.noop,getValueForPixel:H.noop,getPixelForTick:function(t){var e=this.options.offset,n=this._ticks.length,i=1/Math.max(n-(e?0:1),1);return t<0||t>n-1?null:this.getPixelForDecimal(t*i+(e?i/2:0))},getPixelForDecimal:function(t){return this._reversePixels&&(t=1-t),this._startPixel+t*this._length},getDecimalForPixel:function(t){var e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0},_autoSkip:function(t){var e,n,i,a,r=this.options.ticks,o=this._length,s=r.maxTicksLimit||o/this._tickSize()+1,l=r.major.enabled?function(t){var e,n,i=[];for(e=0,n=t.length;e<n;e++)t[e].major&&i.push(e);return i}(t):[],u=l.length,d=l[0],h=l[u-1];if(u>s)return function(t,e,n){var i,a,r=0,o=e[0];for(n=Math.ceil(n),i=0;i<t.length;i++)a=t[i],i===o?(a._index=i,o=e[++r*n]):delete a.label}(t,l,u/s),vn(t);if(i=function(t,e,n,i){var a,r,o,s,l=function(t){var e,n,i=t.length;if(i<2)return!1;for(n=t[0],e=1;e<i;++e)if(t[e]-t[e-1]!==n)return!1;return n}(t),u=(e.length-1)/i;if(!l)return Math.max(u,1);for(o=0,s=(a=H.math._factorize(l)).length-1;o<s;o++)if((r=a[o])>u)return r;return Math.max(u,1)}(l,t,0,s),u>0){for(e=0,n=u-1;e<n;e++)bn(t,i,l[e],l[e+1]);return a=u>1?(h-d)/(u-1):null,bn(t,i,H.isNullOrUndef(a)?0:d-a,d),bn(t,i,h,H.isNullOrUndef(a)?t.length:h+a),vn(t)}return bn(t,i),vn(t)},_tickSize:function(){var t=this.options.ticks,e=H.toRadians(this.labelRotation),n=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),a=this._getLabelSizes(),r=t.autoSkipPadding||0,o=a?a.widest.width+r:0,s=a?a.highest.height+r:0;return this.isHorizontal()?s*n>o*i?o/n:s/i:s*i<o*n?s/n:o/i},_isVisible:function(){var t,e,n,i=this.chart,a=this.options.display;if("auto"!==a)return!!a;for(t=0,e=i.data.datasets.length;t<e;++t)if(i.isDatasetVisible(t)&&((n=i.getDatasetMeta(t)).xAxisID===this.id||n.yAxisID===this.id))return!0;return!1},_computeGridLineItems:function(t){var e,n,i,a,r,o,s,l,u,d,h,c,f,g,p,m,v,b=this,x=b.chart,y=b.options,_=y.gridLines,k=y.position,w=_.offsetGridLines,M=b.isHorizontal(),S=b._ticksToDraw,C=S.length+(w?1:0),P=fn(_),A=[],D=_.drawBorder?dn(_.lineWidth,0,0):0,T=D/2,I=H._alignPixel,F=function(t){return I(x,t,D)};for("top"===k?(e=F(b.bottom),s=b.bottom-P,u=e-T,h=F(t.top)+T,f=t.bottom):"bottom"===k?(e=F(b.top),h=t.top,f=F(t.bottom)-T,s=e+T,u=b.top+P):"left"===k?(e=F(b.right),o=b.right-P,l=e-T,d=F(t.left)+T,c=t.right):(e=F(b.left),d=t.left,c=F(t.right)-T,o=e+T,l=b.left+P),n=0;n<C;++n)i=S[n]||{},ln(i.label)&&n<S.length||(n===b.zeroLineIndex&&y.offset===w?(g=_.zeroLineWidth,p=_.zeroLineColor,m=_.zeroLineBorderDash||[],v=_.zeroLineBorderDashOffset||0):(g=dn(_.lineWidth,n,1),p=dn(_.color,n,"rgba(0,0,0,0.1)"),m=_.borderDash||[],v=_.borderDashOffset||0),void 0!==(a=hn(b,i._index||n,w))&&(r=I(x,a,g),M?o=l=d=c=r:s=u=h=f=r,A.push({tx1:o,ty1:s,tx2:l,ty2:u,x1:d,y1:h,x2:c,y2:f,width:g,color:p,borderDash:m,borderDashOffset:v})));return A.ticksLength=C,A.borderValue=e,A},_computeLabelItems:function(){var t,e,n,i,a,r,o,s,l,u,d,h,c=this,f=c.options,g=f.ticks,p=f.position,m=g.mirror,v=c.isHorizontal(),b=c._ticksToDraw,x=mn(g),y=g.padding,_=fn(f.gridLines),k=-H.toRadians(c.labelRotation),w=[];for("top"===p?(r=c.bottom-_-y,o=k?"left":"center"):"bottom"===p?(r=c.top+_+y,o=k?"right":"center"):"left"===p?(a=c.right-(m?0:_)-y,o=m?"left":"right"):(a=c.left+(m?0:_)+y,o=m?"right":"left"),t=0,e=b.length;t<e;++t)i=(n=b[t]).label,ln(i)||(s=c.getPixelForTick(n._index||t)+g.labelOffset,u=(l=n.major?x.major:x.minor).lineHeight,d=sn(i)?i.length:1,v?(a=s,h="top"===p?((k?1:.5)-d)*u:(k?0:.5)*u):(r=s,h=(1-d)*u/2),w.push({x:a,y:r,rotation:k,label:i,font:l,textOffset:h,textAlign:o}));return w},_drawGrid:function(t){var e=this,n=e.options.gridLines;if(n.display){var i,a,r,o,s,l=e.ctx,u=e.chart,d=H._alignPixel,h=n.drawBorder?dn(n.lineWidth,0,0):0,c=e._gridLineItems||(e._gridLineItems=e._computeGridLineItems(t));for(r=0,o=c.length;r<o;++r)i=(s=c[r]).width,a=s.color,i&&a&&(l.save(),l.lineWidth=i,l.strokeStyle=a,l.setLineDash&&(l.setLineDash(s.borderDash),l.lineDashOffset=s.borderDashOffset),l.beginPath(),n.drawTicks&&(l.moveTo(s.tx1,s.ty1),l.lineTo(s.tx2,s.ty2)),n.drawOnChartArea&&(l.moveTo(s.x1,s.y1),l.lineTo(s.x2,s.y2)),l.stroke(),l.restore());if(h){var f,g,p,m,v=h,b=dn(n.lineWidth,c.ticksLength-1,1),x=c.borderValue;e.isHorizontal()?(f=d(u,e.left,v)-v/2,g=d(u,e.right,b)+b/2,p=m=x):(p=d(u,e.top,v)-v/2,m=d(u,e.bottom,b)+b/2,f=g=x),l.lineWidth=h,l.strokeStyle=dn(n.color,0),l.beginPath(),l.moveTo(f,p),l.lineTo(g,m),l.stroke()}}},_drawLabels:function(){var t=this;if(t.options.ticks.display){var e,n,i,a,r,o,s,l,u=t.ctx,d=t._labelItems||(t._labelItems=t._computeLabelItems());for(e=0,i=d.length;e<i;++e){if(o=(r=d[e]).font,u.save(),u.translate(r.x,r.y),u.rotate(r.rotation),u.font=o.string,u.fillStyle=o.color,u.textBaseline="middle",u.textAlign=r.textAlign,s=r.label,l=r.textOffset,sn(s))for(n=0,a=s.length;n<a;++n)u.fillText(""+s[n],0,l),l+=o.lineHeight;else u.fillText(s,0,l);u.restore()}}},_drawTitle:function(){var t=this,e=t.ctx,n=t.options,i=n.scaleLabel;if(i.display){var a,r,o=un(i.fontColor,N.global.defaultFontColor),s=H.options._parseFont(i),l=H.options.toPadding(i.padding),u=s.lineHeight/2,d=n.position,h=0;if(t.isHorizontal())a=t.left+t.width/2,r="bottom"===d?t.bottom-u-l.bottom:t.top+u+l.top;else{var c="left"===d;a=c?t.left+u+l.top:t.right-u-l.top,r=t.top+t.height/2,h=c?-.5*Math.PI:.5*Math.PI}e.save(),e.translate(a,r),e.rotate(h),e.textAlign="center",e.textBaseline="middle",e.fillStyle=o,e.font=s.string,e.fillText(i.labelString,0,0),e.restore()}},draw:function(t){this._isVisible()&&(this._drawGrid(t),this._drawTitle(),this._drawLabels())},_layers:function(){var t=this,e=t.options,n=e.ticks&&e.ticks.z||0,i=e.gridLines&&e.gridLines.z||0;return t._isVisible()&&n!==i&&t.draw===t._draw?[{z:i,draw:function(){t._drawGrid.apply(t,arguments),t._drawTitle.apply(t,arguments)}},{z:n,draw:function(){t._drawLabels.apply(t,arguments)}}]:[{z:n,draw:function(){t.draw.apply(t,arguments)}}]},_getMatchingVisibleMetas:function(t){var e=this,n=e.isHorizontal();return e.chart._getSortedVisibleDatasetMetas().filter((function(i){return(!t||i.type===t)&&(n?i.xAxisID===e.id:i.yAxisID===e.id)}))}});xn.prototype._draw=xn.prototype.draw;var yn=xn,_n=H.isNullOrUndef,kn=yn.extend({determineDataLimits:function(){var t,e=this,n=e._getLabels(),i=e.options.ticks,a=i.min,r=i.max,o=0,s=n.length-1;void 0!==a&&(t=n.indexOf(a))>=0&&(o=t),void 0!==r&&(t=n.indexOf(r))>=0&&(s=t),e.minIndex=o,e.maxIndex=s,e.min=n[o],e.max=n[s]},buildTicks:function(){var t=this._getLabels(),e=this.minIndex,n=this.maxIndex;this.ticks=0===e&&n===t.length-1?t:t.slice(e,n+1)},getLabelForIndex:function(t,e){var n=this.chart;return n.getDatasetMeta(e).controller._getValueScaleId()===this.id?this.getRightValue(n.data.datasets[e].data[t]):this._getLabels()[t]},_configure:function(){var t=this,e=t.options.offset,n=t.ticks;yn.prototype._configure.call(t),t.isHorizontal()||(t._reversePixels=!t._reversePixels),n&&(t._startValue=t.minIndex-(e?.5:0),t._valueRange=Math.max(n.length-(e?0:1),1))},getPixelForValue:function(t,e,n){var i,a,r,o=this;return _n(e)||_n(n)||(t=o.chart.data.datasets[n].data[e]),_n(t)||(i=o.isHorizontal()?t.x:t.y),(void 0!==i||void 0!==t&&isNaN(e))&&(a=o._getLabels(),t=H.valueOrDefault(i,t),e=-1!==(r=a.indexOf(t))?r:e,isNaN(e)&&(e=t)),o.getPixelForDecimal((e-o._startValue)/o._valueRange)},getPixelForTick:function(t){var e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t],t+this.minIndex)},getValueForPixel:function(t){var e=Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange);return Math.min(Math.max(e,0),this.ticks.length-1)},getBasePixel:function(){return this.bottom}}),wn={position:"bottom"};kn._defaults=wn;var Mn=H.noop,Sn=H.isNullOrUndef;var Cn=yn.extend({getRightValue:function(t){return"string"==typeof t?+t:yn.prototype.getRightValue.call(this,t)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;if(e.beginAtZero){var n=H.sign(t.min),i=H.sign(t.max);n<0&&i<0?t.max=0:n>0&&i>0&&(t.min=0)}var a=void 0!==e.min||void 0!==e.suggestedMin,r=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),a!==r&&t.min>=t.max&&(a?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:function(){var t,e=this.options.ticks,n=e.stepSize,i=e.maxTicksLimit;return n?t=Math.ceil(this.max/n)-Math.floor(this.min/n)+1:(t=this._computeTickLimit(),i=i||11),i&&(t=Math.min(i,t)),t},_computeTickLimit:function(){return Number.POSITIVE_INFINITY},handleDirectionalChanges:Mn,buildTicks:function(){var t=this,e=t.options.ticks,n=t.getTickLimit(),i={maxTicks:n=Math.max(2,n),min:e.min,max:e.max,precision:e.precision,stepSize:H.valueOrDefault(e.fixedStepSize,e.stepSize)},a=t.ticks=function(t,e){var n,i,a,r,o=[],s=t.stepSize,l=s||1,u=t.maxTicks-1,d=t.min,h=t.max,c=t.precision,f=e.min,g=e.max,p=H.niceNum((g-f)/u/l)*l;if(p<1e-14&&Sn(d)&&Sn(h))return[f,g];(r=Math.ceil(g/p)-Math.floor(f/p))>u&&(p=H.niceNum(r*p/u/l)*l),s||Sn(c)?n=Math.pow(10,H._decimalPlaces(p)):(n=Math.pow(10,c),p=Math.ceil(p*n)/n),i=Math.floor(f/p)*p,a=Math.ceil(g/p)*p,s&&(!Sn(d)&&H.almostWhole(d/p,p/1e3)&&(i=d),!Sn(h)&&H.almostWhole(h/p,p/1e3)&&(a=h)),r=(a-i)/p,r=H.almostEquals(r,Math.round(r),p/1e3)?Math.round(r):Math.ceil(r),i=Math.round(i*n)/n,a=Math.round(a*n)/n,o.push(Sn(d)?i:d);for(var m=1;m<r;++m)o.push(Math.round((i+m*p)*n)/n);return o.push(Sn(h)?a:h),o}(i,t);t.handleDirectionalChanges(),t.max=H.max(a),t.min=H.min(a),e.reverse?(a.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var t=this;t.ticksAsNumbers=t.ticks.slice(),t.zeroLineIndex=t.ticks.indexOf(0),yn.prototype.convertTicksToLabels.call(t)},_configure:function(){var t,e=this,n=e.getTicks(),i=e.min,a=e.max;yn.prototype._configure.call(e),e.options.offset&&n.length&&(i-=t=(a-i)/Math.max(n.length-1,1)/2,a+=t),e._startValue=i,e._endValue=a,e._valueRange=a-i}}),Pn={position:"left",ticks:{callback:on.formatters.linear}};function An(t,e,n,i){var a,r,o=t.options,s=function(t,e,n){var i=[n.type,void 0===e&&void 0===n.stack?n.index:"",n.stack].join(".");return void 0===t[i]&&(t[i]={pos:[],neg:[]}),t[i]}(e,o.stacked,n),l=s.pos,u=s.neg,d=i.length;for(a=0;a<d;++a)r=t._parseValue(i[a]),isNaN(r.min)||isNaN(r.max)||n.data[a].hidden||(l[a]=l[a]||0,u[a]=u[a]||0,o.relativePoints?l[a]=100:r.min<0||r.max<0?u[a]+=r.min:l[a]+=r.max)}function Dn(t,e,n){var i,a,r=n.length;for(i=0;i<r;++i)a=t._parseValue(n[i]),isNaN(a.min)||isNaN(a.max)||e.data[i].hidden||(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}var Tn=Cn.extend({determineDataLimits:function(){var t,e,n,i,a=this,r=a.options,o=a.chart.data.datasets,s=a._getMatchingVisibleMetas(),l=r.stacked,u={},d=s.length;if(a.min=Number.POSITIVE_INFINITY,a.max=Number.NEGATIVE_INFINITY,void 0===l)for(t=0;!l&&t<d;++t)l=void 0!==(e=s[t]).stack;for(t=0;t<d;++t)n=o[(e=s[t]).index].data,l?An(a,u,e,n):Dn(a,e,n);H.each(u,(function(t){i=t.pos.concat(t.neg),a.min=Math.min(a.min,H.min(i)),a.max=Math.max(a.max,H.max(i))})),a.min=H.isFinite(a.min)&&!isNaN(a.min)?a.min:0,a.max=H.isFinite(a.max)&&!isNaN(a.max)?a.max:1,a.handleTickRangeOptions()},_computeTickLimit:function(){var t;return this.isHorizontal()?Math.ceil(this.width/40):(t=H.options._parseFont(this.options.ticks),Math.ceil(this.height/t.lineHeight))},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return this._getScaleLabel(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){return this.getPixelForDecimal((+this.getRightValue(t)-this._startValue)/this._valueRange)},getValueForPixel:function(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange},getPixelForTick:function(t){var e=this.ticksAsNumbers;return t<0||t>e.length-1?null:this.getPixelForValue(e[t])}}),In=Pn;Tn._defaults=In;var Fn=H.valueOrDefault,On=H.math.log10;var Ln={position:"left",ticks:{callback:on.formatters.logarithmic}};function Rn(t,e){return H.isFinite(t)&&t>=0?t:e}var zn=yn.extend({determineDataLimits:function(){var t,e,n,i,a,r,o=this,s=o.options,l=o.chart,u=l.data.datasets,d=o.isHorizontal();function h(t){return d?t.xAxisID===o.id:t.yAxisID===o.id}o.min=Number.POSITIVE_INFINITY,o.max=Number.NEGATIVE_INFINITY,o.minNotZero=Number.POSITIVE_INFINITY;var c=s.stacked;if(void 0===c)for(t=0;t<u.length;t++)if(e=l.getDatasetMeta(t),l.isDatasetVisible(t)&&h(e)&&void 0!==e.stack){c=!0;break}if(s.stacked||c){var f={};for(t=0;t<u.length;t++){var g=[(e=l.getDatasetMeta(t)).type,void 0===s.stacked&&void 0===e.stack?t:"",e.stack].join(".");if(l.isDatasetVisible(t)&&h(e))for(void 0===f[g]&&(f[g]=[]),a=0,r=(i=u[t].data).length;a<r;a++){var p=f[g];n=o._parseValue(i[a]),isNaN(n.min)||isNaN(n.max)||e.data[a].hidden||n.min<0||n.max<0||(p[a]=p[a]||0,p[a]+=n.max)}}H.each(f,(function(t){if(t.length>0){var e=H.min(t),n=H.max(t);o.min=Math.min(o.min,e),o.max=Math.max(o.max,n)}}))}else for(t=0;t<u.length;t++)if(e=l.getDatasetMeta(t),l.isDatasetVisible(t)&&h(e))for(a=0,r=(i=u[t].data).length;a<r;a++)n=o._parseValue(i[a]),isNaN(n.min)||isNaN(n.max)||e.data[a].hidden||n.min<0||n.max<0||(o.min=Math.min(n.min,o.min),o.max=Math.max(n.max,o.max),0!==n.min&&(o.minNotZero=Math.min(n.min,o.minNotZero)));o.min=H.isFinite(o.min)?o.min:null,o.max=H.isFinite(o.max)?o.max:null,o.minNotZero=H.isFinite(o.minNotZero)?o.minNotZero:null,this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;t.min=Rn(e.min,t.min),t.max=Rn(e.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(On(t.min))-1),t.max=Math.pow(10,Math.floor(On(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(On(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(On(t.min))+1):10),null===t.minNotZero&&(t.min>0?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(On(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options.ticks,n=!t.isHorizontal(),i={min:Rn(e.min),max:Rn(e.max)},a=t.ticks=function(t,e){var n,i,a=[],r=Fn(t.min,Math.pow(10,Math.floor(On(e.min)))),o=Math.floor(On(e.max)),s=Math.ceil(e.max/Math.pow(10,o));0===r?(n=Math.floor(On(e.minNotZero)),i=Math.floor(e.minNotZero/Math.pow(10,n)),a.push(r),r=i*Math.pow(10,n)):(n=Math.floor(On(r)),i=Math.floor(r/Math.pow(10,n)));var l=n<0?Math.pow(10,Math.abs(n)):1;do{a.push(r),10===++i&&(i=1,l=++n>=0?1:l),r=Math.round(i*Math.pow(10,n)*l)/l}while(n<o||n===o&&i<s);var u=Fn(t.max,r);return a.push(u),a}(i,t);t.max=H.max(a),t.min=H.min(a),e.reverse?(n=!n,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),n&&a.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),yn.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return this._getScaleLabel(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){var e=this.tickValues;return t<0||t>e.length-1?null:this.getPixelForValue(e[t])},_getFirstTickValue:function(t){var e=Math.floor(On(t));return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},_configure:function(){var t=this,e=t.min,n=0;yn.prototype._configure.call(t),0===e&&(e=t._getFirstTickValue(t.minNotZero),n=Fn(t.options.ticks.fontSize,N.global.defaultFontSize)/t._length),t._startValue=On(e),t._valueOffset=n,t._valueRange=(On(t.max)-On(e))/(1-n)},getPixelForValue:function(t){var e=this,n=0;return(t=+e.getRightValue(t))>e.min&&t>0&&(n=(On(t)-e._startValue)/e._valueRange+e._valueOffset),e.getPixelForDecimal(n)},getValueForPixel:function(t){var e=this,n=e.getDecimalForPixel(t);return 0===n&&0===e.min?0:Math.pow(10,e._startValue+(n-e._valueOffset)*e._valueRange)}}),Nn=Ln;zn._defaults=Nn;var Bn=H.valueOrDefault,En=H.valueAtIndexOrDefault,Wn=H.options.resolve,Vn={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0,0,0,0.1)",lineWidth:1,borderDash:[],borderDashOffset:0},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:on.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function Hn(t){var e=t.ticks;return e.display&&t.display?Bn(e.fontSize,N.global.defaultFontSize)+2*e.backdropPaddingY:0}function jn(t,e,n,i,a){return t===i||t===a?{start:e-n/2,end:e+n/2}:t<i||t>a?{start:e-n,end:e}:{start:e,end:e+n}}function qn(t){return 0===t||180===t?"center":t<180?"left":"right"}function Un(t,e,n,i){var a,r,o=n.y+i/2;if(H.isArray(e))for(a=0,r=e.length;a<r;++a)t.fillText(e[a],n.x,o),o+=i;else t.fillText(e,n.x,o)}function Yn(t,e,n){90===t||270===t?n.y-=e.h/2:(t>270||t<90)&&(n.y-=e.h)}function Gn(t){return H.isNumber(t)?t:0}var Xn=Cn.extend({setDimensions:function(){var t=this;t.width=t.maxWidth,t.height=t.maxHeight,t.paddingTop=Hn(t.options)/2,t.xCenter=Math.floor(t.width/2),t.yCenter=Math.floor((t.height-t.paddingTop)/2),t.drawingArea=Math.min(t.height-t.paddingTop,t.width)/2},determineDataLimits:function(){var t=this,e=t.chart,n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;H.each(e.data.datasets,(function(a,r){if(e.isDatasetVisible(r)){var o=e.getDatasetMeta(r);H.each(a.data,(function(e,a){var r=+t.getRightValue(e);isNaN(r)||o.data[a].hidden||(n=Math.min(r,n),i=Math.max(r,i))}))}})),t.min=n===Number.POSITIVE_INFINITY?0:n,t.max=i===Number.NEGATIVE_INFINITY?0:i,t.handleTickRangeOptions()},_computeTickLimit:function(){return Math.ceil(this.drawingArea/Hn(this.options))},convertTicksToLabels:function(){var t=this;Cn.prototype.convertTicksToLabels.call(t),t.pointLabels=t.chart.data.labels.map((function(){var e=H.callback(t.options.pointLabels.callback,arguments,t);return e||0===e?e:""}))},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t=this.options;t.display&&t.pointLabels.display?function(t){var e,n,i,a=H.options._parseFont(t.options.pointLabels),r={l:0,r:t.width,t:0,b:t.height-t.paddingTop},o={};t.ctx.font=a.string,t._pointLabelSizes=[];var s,l,u,d=t.chart.data.labels.length;for(e=0;e<d;e++){i=t.getPointPosition(e,t.drawingArea+5),s=t.ctx,l=a.lineHeight,u=t.pointLabels[e],n=H.isArray(u)?{w:H.longestText(s,s.font,u),h:u.length*l}:{w:s.measureText(u).width,h:l},t._pointLabelSizes[e]=n;var h=t.getIndexAngle(e),c=H.toDegrees(h)%360,f=jn(c,i.x,n.w,0,180),g=jn(c,i.y,n.h,90,270);f.start<r.l&&(r.l=f.start,o.l=h),f.end>r.r&&(r.r=f.end,o.r=h),g.start<r.t&&(r.t=g.start,o.t=h),g.end>r.b&&(r.b=g.end,o.b=h)}t.setReductions(t.drawingArea,r,o)}(this):this.setCenterPoint(0,0,0,0)},setReductions:function(t,e,n){var i=this,a=e.l/Math.sin(n.l),r=Math.max(e.r-i.width,0)/Math.sin(n.r),o=-e.t/Math.cos(n.t),s=-Math.max(e.b-(i.height-i.paddingTop),0)/Math.cos(n.b);a=Gn(a),r=Gn(r),o=Gn(o),s=Gn(s),i.drawingArea=Math.min(Math.floor(t-(a+r)/2),Math.floor(t-(o+s)/2)),i.setCenterPoint(a,r,o,s)},setCenterPoint:function(t,e,n,i){var a=this,r=a.width-e-a.drawingArea,o=t+a.drawingArea,s=n+a.drawingArea,l=a.height-a.paddingTop-i-a.drawingArea;a.xCenter=Math.floor((o+r)/2+a.left),a.yCenter=Math.floor((s+l)/2+a.top+a.paddingTop)},getIndexAngle:function(t){var e=this.chart,n=(t*(360/e.data.labels.length)+((e.options||{}).startAngle||0))%360;return(n<0?n+360:n)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this;if(H.isNullOrUndef(t))return NaN;var n=e.drawingArea/(e.max-e.min);return e.options.ticks.reverse?(e.max-t)*n:(t-e.min)*n},getPointPosition:function(t,e){var n=this.getIndexAngle(t)-Math.PI/2;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(t){var e=this.min,n=this.max;return this.getPointPositionForValue(t||0,this.beginAtZero?0:e<0&&n<0?n:e>0&&n>0?e:0)},_drawGrid:function(){var t,e,n,i=this,a=i.ctx,r=i.options,o=r.gridLines,s=r.angleLines,l=Bn(s.lineWidth,o.lineWidth),u=Bn(s.color,o.color);if(r.pointLabels.display&&function(t){var e=t.ctx,n=t.options,i=n.pointLabels,a=Hn(n),r=t.getDistanceFromCenterForValue(n.ticks.reverse?t.min:t.max),o=H.options._parseFont(i);e.save(),e.font=o.string,e.textBaseline="middle";for(var s=t.chart.data.labels.length-1;s>=0;s--){var l=0===s?a/2:0,u=t.getPointPosition(s,r+l+5),d=En(i.fontColor,s,N.global.defaultFontColor);e.fillStyle=d;var h=t.getIndexAngle(s),c=H.toDegrees(h);e.textAlign=qn(c),Yn(c,t._pointLabelSizes[s],u),Un(e,t.pointLabels[s],u,o.lineHeight)}e.restore()}(i),o.display&&H.each(i.ticks,(function(t,n){0!==n&&(e=i.getDistanceFromCenterForValue(i.ticksAsNumbers[n]),function(t,e,n,i){var a,r=t.ctx,o=e.circular,s=t.chart.data.labels.length,l=En(e.color,i-1),u=En(e.lineWidth,i-1);if((o||s)&&l&&u){if(r.save(),r.strokeStyle=l,r.lineWidth=u,r.setLineDash&&(r.setLineDash(e.borderDash||[]),r.lineDashOffset=e.borderDashOffset||0),r.beginPath(),o)r.arc(t.xCenter,t.yCenter,n,0,2*Math.PI);else{a=t.getPointPosition(0,n),r.moveTo(a.x,a.y);for(var d=1;d<s;d++)a=t.getPointPosition(d,n),r.lineTo(a.x,a.y)}r.closePath(),r.stroke(),r.restore()}}(i,o,e,n))})),s.display&&l&&u){for(a.save(),a.lineWidth=l,a.strokeStyle=u,a.setLineDash&&(a.setLineDash(Wn([s.borderDash,o.borderDash,[]])),a.lineDashOffset=Wn([s.borderDashOffset,o.borderDashOffset,0])),t=i.chart.data.labels.length-1;t>=0;t--)e=i.getDistanceFromCenterForValue(r.ticks.reverse?i.min:i.max),n=i.getPointPosition(t,e),a.beginPath(),a.moveTo(i.xCenter,i.yCenter),a.lineTo(n.x,n.y),a.stroke();a.restore()}},_drawLabels:function(){var t=this,e=t.ctx,n=t.options.ticks;if(n.display){var i,a,r=t.getIndexAngle(0),o=H.options._parseFont(n),s=Bn(n.fontColor,N.global.defaultFontColor);e.save(),e.font=o.string,e.translate(t.xCenter,t.yCenter),e.rotate(r),e.textAlign="center",e.textBaseline="middle",H.each(t.ticks,(function(r,l){(0!==l||n.reverse)&&(i=t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),n.showLabelBackdrop&&(a=e.measureText(r).width,e.fillStyle=n.backdropColor,e.fillRect(-a/2-n.backdropPaddingX,-i-o.size/2-n.backdropPaddingY,a+2*n.backdropPaddingX,o.size+2*n.backdropPaddingY)),e.fillStyle=s,e.fillText(r,0,-i))})),e.restore()}},_drawTitle:H.noop}),Kn=Vn;Xn._defaults=Kn;var Zn=H._deprecated,$n=H.options.resolve,Jn=H.valueOrDefault,Qn=Number.MIN_SAFE_INTEGER||-9007199254740991,ti=Number.MAX_SAFE_INTEGER||9007199254740991,ei={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},ni=Object.keys(ei);function ii(t,e){return t-e}function ai(t){return H.valueOrDefault(t.time.min,t.ticks.min)}function ri(t){return H.valueOrDefault(t.time.max,t.ticks.max)}function oi(t,e,n,i){var a=function(t,e,n){for(var i,a,r,o=0,s=t.length-1;o>=0&&o<=s;){if(a=t[(i=o+s>>1)-1]||null,r=t[i],!a)return{lo:null,hi:r};if(r[e]<n)o=i+1;else{if(!(a[e]>n))return{lo:a,hi:r};s=i-1}}return{lo:r,hi:null}}(t,e,n),r=a.lo?a.hi?a.lo:t[t.length-2]:t[0],o=a.lo?a.hi?a.hi:t[t.length-1]:t[1],s=o[e]-r[e],l=s?(n-r[e])/s:0,u=(o[i]-r[i])*l;return r[i]+u}function si(t,e){var n=t._adapter,i=t.options.time,a=i.parser,r=a||i.format,o=e;return"function"==typeof a&&(o=a(o)),H.isFinite(o)||(o="string"==typeof r?n.parse(o,r):n.parse(o)),null!==o?+o:(a||"function"!=typeof r||(o=r(e),H.isFinite(o)||(o=n.parse(o))),o)}function li(t,e){if(H.isNullOrUndef(e))return null;var n=t.options.time,i=si(t,t.getRightValue(e));return null===i?i:(n.round&&(i=+t._adapter.startOf(i,n.round)),i)}function ui(t,e,n,i){var a,r,o,s=ni.length;for(a=ni.indexOf(t);a<s-1;++a)if(o=(r=ei[ni[a]]).steps?r.steps:ti,r.common&&Math.ceil((n-e)/(o*r.size))<=i)return ni[a];return ni[s-1]}function di(t,e,n){var i,a,r=[],o={},s=e.length;for(i=0;i<s;++i)o[a=e[i]]=i,r.push({value:a,major:!1});return 0!==s&&n?function(t,e,n,i){var a,r,o=t._adapter,s=+o.startOf(e[0].value,i),l=e[e.length-1].value;for(a=s;a<=l;a=+o.add(a,1,i))(r=n[a])>=0&&(e[r].major=!0);return e}(t,r,o,n):r}var hi=yn.extend({initialize:function(){this.mergeTicksOptions(),yn.prototype.initialize.call(this)},update:function(){var t=this,e=t.options,n=e.time||(e.time={}),i=t._adapter=new rn._date(e.adapters.date);return Zn("time scale",n.format,"time.format","time.parser"),Zn("time scale",n.min,"time.min","ticks.min"),Zn("time scale",n.max,"time.max","ticks.max"),H.mergeIf(n.displayFormats,i.formats()),yn.prototype.update.apply(t,arguments)},getRightValue:function(t){return t&&void 0!==t.t&&(t=t.t),yn.prototype.getRightValue.call(this,t)},determineDataLimits:function(){var t,e,n,i,a,r,o,s=this,l=s.chart,u=s._adapter,d=s.options,h=d.time.unit||"day",c=ti,f=Qn,g=[],p=[],m=[],v=s._getLabels();for(t=0,n=v.length;t<n;++t)m.push(li(s,v[t]));for(t=0,n=(l.data.datasets||[]).length;t<n;++t)if(l.isDatasetVisible(t))if(a=l.data.datasets[t].data,H.isObject(a[0]))for(p[t]=[],e=0,i=a.length;e<i;++e)r=li(s,a[e]),g.push(r),p[t][e]=r;else p[t]=m.slice(0),o||(g=g.concat(m),o=!0);else p[t]=[];m.length&&(c=Math.min(c,m[0]),f=Math.max(f,m[m.length-1])),g.length&&(g=n>1?function(t){var e,n,i,a={},r=[];for(e=0,n=t.length;e<n;++e)a[i=t[e]]||(a[i]=!0,r.push(i));return r}(g).sort(ii):g.sort(ii),c=Math.min(c,g[0]),f=Math.max(f,g[g.length-1])),c=li(s,ai(d))||c,f=li(s,ri(d))||f,c=c===ti?+u.startOf(Date.now(),h):c,f=f===Qn?+u.endOf(Date.now(),h)+1:f,s.min=Math.min(c,f),s.max=Math.max(c+1,f),s._table=[],s._timestamps={data:g,datasets:p,labels:m}},buildTicks:function(){var t,e,n,i=this,a=i.min,r=i.max,o=i.options,s=o.ticks,l=o.time,u=i._timestamps,d=[],h=i.getLabelCapacity(a),c=s.source,f=o.distribution;for(u="data"===c||"auto"===c&&"series"===f?u.data:"labels"===c?u.labels:function(t,e,n,i){var a,r=t._adapter,o=t.options,s=o.time,l=s.unit||ui(s.minUnit,e,n,i),u=$n([s.stepSize,s.unitStepSize,1]),d="week"===l&&s.isoWeekday,h=e,c=[];if(d&&(h=+r.startOf(h,"isoWeek",d)),h=+r.startOf(h,d?"day":l),r.diff(n,e,l)>1e5*u)throw e+" and "+n+" are too far apart with stepSize of "+u+" "+l;for(a=h;a<n;a=+r.add(a,u,l))c.push(a);return a!==n&&"ticks"!==o.bounds||c.push(a),c}(i,a,r,h),"ticks"===o.bounds&&u.length&&(a=u[0],r=u[u.length-1]),a=li(i,ai(o))||a,r=li(i,ri(o))||r,t=0,e=u.length;t<e;++t)(n=u[t])>=a&&n<=r&&d.push(n);return i.min=a,i.max=r,i._unit=l.unit||(s.autoSkip?ui(l.minUnit,i.min,i.max,h):function(t,e,n,i,a){var r,o;for(r=ni.length-1;r>=ni.indexOf(n);r--)if(o=ni[r],ei[o].common&&t._adapter.diff(a,i,o)>=e-1)return o;return ni[n?ni.indexOf(n):0]}(i,d.length,l.minUnit,i.min,i.max)),i._majorUnit=s.major.enabled&&"year"!==i._unit?function(t){for(var e=ni.indexOf(t)+1,n=ni.length;e<n;++e)if(ei[ni[e]].common)return ni[e]}(i._unit):void 0,i._table=function(t,e,n,i){if("linear"===i||!t.length)return[{time:e,pos:0},{time:n,pos:1}];var a,r,o,s,l,u=[],d=[e];for(a=0,r=t.length;a<r;++a)(s=t[a])>e&&s<n&&d.push(s);for(d.push(n),a=0,r=d.length;a<r;++a)l=d[a+1],o=d[a-1],s=d[a],void 0!==o&&void 0!==l&&Math.round((l+o)/2)===s||u.push({time:s,pos:a/(r-1)});return u}(i._timestamps.data,a,r,f),i._offsets=function(t,e,n,i,a){var r,o,s=0,l=0;return a.offset&&e.length&&(r=oi(t,"time",e[0],"pos"),s=1===e.length?1-r:(oi(t,"time",e[1],"pos")-r)/2,o=oi(t,"time",e[e.length-1],"pos"),l=1===e.length?o:(o-oi(t,"time",e[e.length-2],"pos"))/2),{start:s,end:l,factor:1/(s+1+l)}}(i._table,d,0,0,o),s.reverse&&d.reverse(),di(i,d,i._majorUnit)},getLabelForIndex:function(t,e){var n=this,i=n._adapter,a=n.chart.data,r=n.options.time,o=a.labels&&t<a.labels.length?a.labels[t]:"",s=a.datasets[e].data[t];return H.isObject(s)&&(o=n.getRightValue(s)),r.tooltipFormat?i.format(si(n,o),r.tooltipFormat):"string"==typeof o?o:i.format(si(n,o),r.displayFormats.datetime)},tickFormatFunction:function(t,e,n,i){var a=this._adapter,r=this.options,o=r.time.displayFormats,s=o[this._unit],l=this._majorUnit,u=o[l],d=n[e],h=r.ticks,c=l&&u&&d&&d.major,f=a.format(t,i||(c?u:s)),g=c?h.major:h.minor,p=$n([g.callback,g.userCallback,h.callback,h.userCallback]);return p?p(f,e,n):f},convertTicksToLabels:function(t){var e,n,i=[];for(e=0,n=t.length;e<n;++e)i.push(this.tickFormatFunction(t[e].value,e,t));return i},getPixelForOffset:function(t){var e=this._offsets,n=oi(this._table,"time",t,"pos");return this.getPixelForDecimal((e.start+n)*e.factor)},getPixelForValue:function(t,e,n){var i=null;if(void 0!==e&&void 0!==n&&(i=this._timestamps.datasets[n][e]),null===i&&(i=li(this,t)),null!==i)return this.getPixelForOffset(i)},getPixelForTick:function(t){var e=this.getTicks();return t>=0&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end,i=oi(this._table,"pos",n,"time");return this._adapter._create(i)},_getLabelSize:function(t){var e=this.options.ticks,n=this.ctx.measureText(t).width,i=H.toRadians(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(i),r=Math.sin(i),o=Jn(e.fontSize,N.global.defaultFontSize);return{w:n*a+o*r,h:n*r+o*a}},getLabelWidth:function(t){return this._getLabelSize(t).w},getLabelCapacity:function(t){var e=this,n=e.options.time,i=n.displayFormats,a=i[n.unit]||i.millisecond,r=e.tickFormatFunction(t,0,di(e,[t],e._majorUnit),a),o=e._getLabelSize(r),s=Math.floor(e.isHorizontal()?e.width/o.w:e.height/o.h);return e.options.offset&&s--,s>0?s:1}}),ci={position:"bottom",distribution:"linear",bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}};hi._defaults=ci;var fi={category:kn,linear:Tn,logarithmic:zn,radialLinear:Xn,time:hi},gi={datetime:"MMM D, YYYY, h:mm:ss a",millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"};rn._date.override("function"==typeof t?{_id:"moment",formats:function(){return gi},parse:function(e,n){return"string"==typeof e&&"string"==typeof n?e=t(e,n):e instanceof t||(e=t(e)),e.isValid()?e.valueOf():null},format:function(e,n){return t(e).format(n)},add:function(e,n,i){return t(e).add(n,i).valueOf()},diff:function(e,n,i){return t(e).diff(t(n),i)},startOf:function(e,n,i){return e=t(e),"isoWeek"===n?e.isoWeekday(i).valueOf():e.startOf(n).valueOf()},endOf:function(e,n){return t(e).endOf(n).valueOf()},_create:function(e){return t(e)}}:{}),N._set("global",{plugins:{filler:{propagate:!0}}});var pi={dataset:function(t){var e=t.fill,n=t.chart,i=n.getDatasetMeta(e),a=i&&n.isDatasetVisible(e)&&i.dataset._children||[],r=a.length||0;return r?function(t,e){return e<r&&a[e]._view||null}:null},boundary:function(t){var e=t.boundary,n=e?e.x:null,i=e?e.y:null;return H.isArray(e)?function(t,n){return e[n]}:function(t){return{x:null===n?t.x:n,y:null===i?t.y:i}}}};function mi(t,e,n){var i,a=t._model||{},r=a.fill;if(void 0===r&&(r=!!a.backgroundColor),!1===r||null===r)return!1;if(!0===r)return"origin";if(i=parseFloat(r,10),isFinite(i)&&Math.floor(i)===i)return"-"!==r[0]&&"+"!==r[0]||(i=e+i),!(i===e||i<0||i>=n)&&i;switch(r){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return r;default:return!1}}function vi(t){return(t.el._scale||{}).getPointPositionForValue?function(t){var e,n,i,a,r,o=t.el._scale,s=o.options,l=o.chart.data.labels.length,u=t.fill,d=[];if(!l)return null;for(e=s.ticks.reverse?o.max:o.min,n=s.ticks.reverse?o.min:o.max,i=o.getPointPositionForValue(0,e),a=0;a<l;++a)r="start"===u||"end"===u?o.getPointPositionForValue(a,"start"===u?e:n):o.getBasePosition(a),s.gridLines.circular&&(r.cx=i.x,r.cy=i.y,r.angle=o.getIndexAngle(a)-Math.PI/2),d.push(r);return d}(t):function(t){var e,n=t.el._model||{},i=t.el._scale||{},a=t.fill,r=null;if(isFinite(a))return null;if("start"===a?r=void 0===n.scaleBottom?i.bottom:n.scaleBottom:"end"===a?r=void 0===n.scaleTop?i.top:n.scaleTop:void 0!==n.scaleZero?r=n.scaleZero:i.getBasePixel&&(r=i.getBasePixel()),null!=r){if(void 0!==r.x&&void 0!==r.y)return r;if(H.isFinite(r))return{x:(e=i.isHorizontal())?r:null,y:e?null:r}}return null}(t)}function bi(t,e,n){var i,a=t[e].fill,r=[e];if(!n)return a;for(;!1!==a&&-1===r.indexOf(a);){if(!isFinite(a))return a;if(!(i=t[a]))return!1;if(i.visible)return a;r.push(a),a=i.fill}return!1}function xi(t){var e=t.fill,n="dataset";return!1===e?null:(isFinite(e)||(n="boundary"),pi[n](t))}function yi(t){return t&&!t.skip}function _i(t,e,n,i,a){var r,o,s,l;if(i&&a){for(t.moveTo(e[0].x,e[0].y),r=1;r<i;++r)H.canvas.lineTo(t,e[r-1],e[r]);if(void 0===n[0].angle)for(t.lineTo(n[a-1].x,n[a-1].y),r=a-1;r>0;--r)H.canvas.lineTo(t,n[r],n[r-1],!0);else for(o=n[0].cx,s=n[0].cy,l=Math.sqrt(Math.pow(n[0].x-o,2)+Math.pow(n[0].y-s,2)),r=a-1;r>0;--r)t.arc(o,s,l,n[r].angle,n[r-1].angle,!0)}}function ki(t,e,n,i,a,r){var o,s,l,u,d,h,c,f,g=e.length,p=i.spanGaps,m=[],v=[],b=0,x=0;for(t.beginPath(),o=0,s=g;o<s;++o)d=n(u=e[l=o%g]._view,l,i),h=yi(u),c=yi(d),r&&void 0===f&&h&&(s=g+(f=o+1)),h&&c?(b=m.push(u),x=v.push(d)):b&&x&&(p?(h&&m.push(u),c&&v.push(d)):(_i(t,m,v,b,x),b=x=0,m=[],v=[]));_i(t,m,v,b,x),t.closePath(),t.fillStyle=a,t.fill()}var wi={id:"filler",afterDatasetsUpdate:function(t,e){var n,i,a,r,o=(t.data.datasets||[]).length,s=e.propagate,l=[];for(i=0;i<o;++i)r=null,(a=(n=t.getDatasetMeta(i)).dataset)&&a._model&&a instanceof kt.Line&&(r={visible:t.isDatasetVisible(i),fill:mi(a,i,o),chart:t,el:a}),n.$filler=r,l.push(r);for(i=0;i<o;++i)(r=l[i])&&(r.fill=bi(l,i,s),r.boundary=vi(r),r.mapper=xi(r))},beforeDatasetsDraw:function(t){var e,n,i,a,r,o,s,l=t._getSortedVisibleDatasetMetas(),u=t.ctx;for(n=l.length-1;n>=0;--n)(e=l[n].$filler)&&e.visible&&(a=(i=e.el)._view,r=i._children||[],o=e.mapper,s=a.backgroundColor||N.global.defaultColor,o&&s&&r.length&&(H.canvas.clipArea(u,t.chartArea),ki(u,r,o,a,s,i._loop),H.canvas.unclipArea(u)))}},Mi=H.rtl.getRtlAdapter,Si=H.noop,Ci=H.valueOrDefault;function Pi(t,e){return t.usePointStyle&&t.boxWidth>e?e:t.boxWidth}N._set("global",{legend:{display:!0,position:"top",align:"center",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var n=e.datasetIndex,i=this.chart,a=i.getDatasetMeta(n);a.hidden=null===a.hidden?!i.data.datasets[n].hidden:null,i.update()},onHover:null,onLeave:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data.datasets,n=t.options.legend||{},i=n.labels&&n.labels.usePointStyle;return t._getSortedDatasetMetas().map((function(n){var a=n.controller.getStyle(i?0:void 0);return{text:e[n.index].label,fillStyle:a.backgroundColor,hidden:!t.isDatasetVisible(n.index),lineCap:a.borderCapStyle,lineDash:a.borderDash,lineDashOffset:a.borderDashOffset,lineJoin:a.borderJoinStyle,lineWidth:a.borderWidth,strokeStyle:a.borderColor,pointStyle:a.pointStyle,rotation:a.rotation,datasetIndex:n.index}}),this)}}},legendCallback:function(t){var e,n,i,a=document.createElement("ul"),r=t.data.datasets;for(a.setAttribute("class",t.id+"-legend"),e=0,n=r.length;e<n;e++)(i=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=r[e].backgroundColor,r[e].label&&i.appendChild(document.createTextNode(r[e].label));return a.outerHTML}});var Ai=K.extend({initialize:function(t){H.extend(this,t),this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1},beforeUpdate:Si,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:Si,beforeSetDimensions:Si,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:Si,beforeBuildLabels:Si,buildLabels:function(){var t=this,e=t.options.labels||{},n=H.callback(e.generateLabels,[t.chart],t)||[];e.filter&&(n=n.filter((function(n){return e.filter(n,t.chart.data)}))),t.options.reverse&&n.reverse(),t.legendItems=n},afterBuildLabels:Si,beforeFit:Si,fit:function(){var t=this,e=t.options,n=e.labels,i=e.display,a=t.ctx,r=H.options._parseFont(n),o=r.size,s=t.legendHitBoxes=[],l=t.minSize,u=t.isHorizontal();if(u?(l.width=t.maxWidth,l.height=i?10:0):(l.width=i?10:0,l.height=t.maxHeight),i){if(a.font=r.string,u){var d=t.lineWidths=[0],h=0;a.textAlign="left",a.textBaseline="middle",H.each(t.legendItems,(function(t,e){var i=Pi(n,o)+o/2+a.measureText(t.text).width;(0===e||d[d.length-1]+i+2*n.padding>l.width)&&(h+=o+n.padding,d[d.length-(e>0?0:1)]=0),s[e]={left:0,top:0,width:i,height:o},d[d.length-1]+=i+n.padding})),l.height+=h}else{var c=n.padding,f=t.columnWidths=[],g=t.columnHeights=[],p=n.padding,m=0,v=0;H.each(t.legendItems,(function(t,e){var i=Pi(n,o)+o/2+a.measureText(t.text).width;e>0&&v+o+2*c>l.height&&(p+=m+n.padding,f.push(m),g.push(v),m=0,v=0),m=Math.max(m,i),v+=o+c,s[e]={left:0,top:0,width:i,height:o}})),p+=m,f.push(m),g.push(v),l.width+=p}t.width=l.width,t.height=l.height}else t.width=l.width=t.height=l.height=0},afterFit:Si,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var t=this,e=t.options,n=e.labels,i=N.global,a=i.defaultColor,r=i.elements.line,o=t.height,s=t.columnHeights,l=t.width,u=t.lineWidths;if(e.display){var d,h=Mi(e.rtl,t.left,t.minSize.width),c=t.ctx,f=Ci(n.fontColor,i.defaultFontColor),g=H.options._parseFont(n),p=g.size;c.textAlign=h.textAlign("left"),c.textBaseline="middle",c.lineWidth=.5,c.strokeStyle=f,c.fillStyle=f,c.font=g.string;var m=Pi(n,p),v=t.legendHitBoxes,b=function(t,i){switch(e.align){case"start":return n.padding;case"end":return t-i;default:return(t-i+n.padding)/2}},x=t.isHorizontal();d=x?{x:t.left+b(l,u[0]),y:t.top+n.padding,line:0}:{x:t.left+n.padding,y:t.top+b(o,s[0]),line:0},H.rtl.overrideTextDirection(t.ctx,e.textDirection);var y=p+n.padding;H.each(t.legendItems,(function(e,i){var f=c.measureText(e.text).width,g=m+p/2+f,_=d.x,k=d.y;h.setWidth(t.minSize.width),x?i>0&&_+g+n.padding>t.left+t.minSize.width&&(k=d.y+=y,d.line++,_=d.x=t.left+b(l,u[d.line])):i>0&&k+y>t.top+t.minSize.height&&(_=d.x=_+t.columnWidths[d.line]+n.padding,d.line++,k=d.y=t.top+b(o,s[d.line]));var w=h.x(_);!function(t,e,i){if(!(isNaN(m)||m<=0)){c.save();var o=Ci(i.lineWidth,r.borderWidth);if(c.fillStyle=Ci(i.fillStyle,a),c.lineCap=Ci(i.lineCap,r.borderCapStyle),c.lineDashOffset=Ci(i.lineDashOffset,r.borderDashOffset),c.lineJoin=Ci(i.lineJoin,r.borderJoinStyle),c.lineWidth=o,c.strokeStyle=Ci(i.strokeStyle,a),c.setLineDash&&c.setLineDash(Ci(i.lineDash,r.borderDash)),n&&n.usePointStyle){var s=m*Math.SQRT2/2,l=h.xPlus(t,m/2),u=e+p/2;H.canvas.drawPoint(c,i.pointStyle,s,l,u,i.rotation)}else c.fillRect(h.leftForLtr(t,m),e,m,p),0!==o&&c.strokeRect(h.leftForLtr(t,m),e,m,p);c.restore()}}(w,k,e),v[i].left=h.leftForLtr(w,v[i].width),v[i].top=k,function(t,e,n,i){var a=p/2,r=h.xPlus(t,m+a),o=e+a;c.fillText(n.text,r,o),n.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(r,o),c.lineTo(h.xPlus(r,i),o),c.stroke())}(w,k,e,f),x?d.x+=g+n.padding:d.y+=y})),H.rtl.restoreTextDirection(t.ctx,e.textDirection)}},_getLegendItemAt:function(t,e){var n,i,a,r=this;if(t>=r.left&&t<=r.right&&e>=r.top&&e<=r.bottom)for(a=r.legendHitBoxes,n=0;n<a.length;++n)if(t>=(i=a[n]).left&&t<=i.left+i.width&&e>=i.top&&e<=i.top+i.height)return r.legendItems[n];return null},handleEvent:function(t){var e,n=this,i=n.options,a="mouseup"===t.type?"click":t.type;if("mousemove"===a){if(!i.onHover&&!i.onLeave)return}else{if("click"!==a)return;if(!i.onClick)return}e=n._getLegendItemAt(t.x,t.y),"click"===a?e&&i.onClick&&i.onClick.call(n,t.native,e):(i.onLeave&&e!==n._hoveredItem&&(n._hoveredItem&&i.onLeave.call(n,t.native,n._hoveredItem),n._hoveredItem=e),i.onHover&&e&&i.onHover.call(n,t.native,e))}});function Di(t,e){var n=new Ai({ctx:t.ctx,options:e,chart:t});pe.configure(t,n,e),pe.addBox(t,n),t.legend=n}var Ti={id:"legend",_element:Ai,beforeInit:function(t){var e=t.options.legend;e&&Di(t,e)},beforeUpdate:function(t){var e=t.options.legend,n=t.legend;e?(H.mergeIf(e,N.global.legend),n?(pe.configure(t,n,e),n.options=e):Di(t,e)):n&&(pe.removeBox(t,n),delete t.legend)},afterEvent:function(t,e){var n=t.legend;n&&n.handleEvent(e)}},Ii=H.noop;N._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,padding:10,position:"top",text:"",weight:2e3}});var Fi=K.extend({initialize:function(t){H.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:Ii,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:Ii,beforeSetDimensions:Ii,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:Ii,beforeBuildLabels:Ii,buildLabels:Ii,afterBuildLabels:Ii,beforeFit:Ii,fit:function(){var t,e=this,n=e.options,i=e.minSize={},a=e.isHorizontal();n.display?(t=(H.isArray(n.text)?n.text.length:1)*H.options._parseFont(n).lineHeight+2*n.padding,e.width=i.width=a?e.maxWidth:t,e.height=i.height=a?t:e.maxHeight):e.width=i.width=e.height=i.height=0},afterFit:Ii,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var t=this,e=t.ctx,n=t.options;if(n.display){var i,a,r,o=H.options._parseFont(n),s=o.lineHeight,l=s/2+n.padding,u=0,d=t.top,h=t.left,c=t.bottom,f=t.right;e.fillStyle=H.valueOrDefault(n.fontColor,N.global.defaultFontColor),e.font=o.string,t.isHorizontal()?(a=h+(f-h)/2,r=d+l,i=f-h):(a="left"===n.position?h+l:f-l,r=d+(c-d)/2,i=c-d,u=Math.PI*("left"===n.position?-.5:.5)),e.save(),e.translate(a,r),e.rotate(u),e.textAlign="center",e.textBaseline="middle";var g=n.text;if(H.isArray(g))for(var p=0,m=0;m<g.length;++m)e.fillText(g[m],0,p,i),p+=s;else e.fillText(g,0,0,i);e.restore()}}});function Oi(t,e){var n=new Fi({ctx:t.ctx,options:e,chart:t});pe.configure(t,n,e),pe.addBox(t,n),t.titleBlock=n}var Li={},Ri=wi,zi=Ti,Ni={id:"title",_element:Fi,beforeInit:function(t){var e=t.options.title;e&&Oi(t,e)},beforeUpdate:function(t){var e=t.options.title,n=t.titleBlock;e?(H.mergeIf(e,N.global.title),n?(pe.configure(t,n,e),n.options=e):Oi(t,e)):n&&(pe.removeBox(t,n),delete t.titleBlock)}};for(var Bi in Li.filler=Ri,Li.legend=zi,Li.title=Ni,en.helpers=H,function(){function t(t,e,n){var i;return"string"==typeof t?(i=parseInt(t,10),-1!==t.indexOf("%")&&(i=i/100*e.parentNode[n])):i=t,i}function e(t){return null!=t&&"none"!==t}function n(n,i,a){var r=document.defaultView,o=H._getParentNode(n),s=r.getComputedStyle(n)[i],l=r.getComputedStyle(o)[i],u=e(s),d=e(l),h=Number.POSITIVE_INFINITY;return u||d?Math.min(u?t(s,n,a):h,d?t(l,o,a):h):"none"}H.where=function(t,e){if(H.isArray(t)&&Array.prototype.filter)return t.filter(e);var n=[];return H.each(t,(function(t){e(t)&&n.push(t)})),n},H.findIndex=Array.prototype.findIndex?function(t,e,n){return t.findIndex(e,n)}:function(t,e,n){n=void 0===n?t:n;for(var i=0,a=t.length;i<a;++i)if(e.call(n,t[i],i,t))return i;return-1},H.findNextWhere=function(t,e,n){H.isNullOrUndef(n)&&(n=-1);for(var i=n+1;i<t.length;i++){var a=t[i];if(e(a))return a}},H.findPreviousWhere=function(t,e,n){H.isNullOrUndef(n)&&(n=t.length);for(var i=n-1;i>=0;i--){var a=t[i];if(e(a))return a}},H.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},H.almostEquals=function(t,e,n){return Math.abs(t-e)<n},H.almostWhole=function(t,e){var n=Math.round(t);return n-e<=t&&n+e>=t},H.max=function(t){return t.reduce((function(t,e){return isNaN(e)?t:Math.max(t,e)}),Number.NEGATIVE_INFINITY)},H.min=function(t){return t.reduce((function(t,e){return isNaN(e)?t:Math.min(t,e)}),Number.POSITIVE_INFINITY)},H.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0===(t=+t)||isNaN(t)?t:t>0?1:-1},H.toRadians=function(t){return t*(Math.PI/180)},H.toDegrees=function(t){return t*(180/Math.PI)},H._decimalPlaces=function(t){if(H.isFinite(t)){for(var e=1,n=0;Math.round(t*e)/e!==t;)e*=10,n++;return n}},H.getAngleFromPoint=function(t,e){var n=e.x-t.x,i=e.y-t.y,a=Math.sqrt(n*n+i*i),r=Math.atan2(i,n);return r<-.5*Math.PI&&(r+=2*Math.PI),{angle:r,distance:a}},H.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},H.aliasPixel=function(t){return t%2==0?0:.5},H._alignPixel=function(t,e,n){var i=t.currentDevicePixelRatio,a=n/2;return Math.round((e-a)*i)/i+a},H.splineCurve=function(t,e,n,i){var a=t.skip?e:t,r=e,o=n.skip?e:n,s=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),l=Math.sqrt(Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2)),u=s/(s+l),d=l/(s+l),h=i*(u=isNaN(u)?0:u),c=i*(d=isNaN(d)?0:d);return{previous:{x:r.x-h*(o.x-a.x),y:r.y-h*(o.y-a.y)},next:{x:r.x+c*(o.x-a.x),y:r.y+c*(o.y-a.y)}}},H.EPSILON=Number.EPSILON||1e-14,H.splineCurveMonotone=function(t){var e,n,i,a,r,o,s,l,u,d=(t||[]).map((function(t){return{model:t._model,deltaK:0,mK:0}})),h=d.length;for(e=0;e<h;++e)if(!(i=d[e]).model.skip){if(n=e>0?d[e-1]:null,(a=e<h-1?d[e+1]:null)&&!a.model.skip){var c=a.model.x-i.model.x;i.deltaK=0!==c?(a.model.y-i.model.y)/c:0}!n||n.model.skip?i.mK=i.deltaK:!a||a.model.skip?i.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(i.deltaK)?i.mK=0:i.mK=(n.deltaK+i.deltaK)/2}for(e=0;e<h-1;++e)i=d[e],a=d[e+1],i.model.skip||a.model.skip||(H.almostEquals(i.deltaK,0,this.EPSILON)?i.mK=a.mK=0:(r=i.mK/i.deltaK,o=a.mK/i.deltaK,(l=Math.pow(r,2)+Math.pow(o,2))<=9||(s=3/Math.sqrt(l),i.mK=r*s*i.deltaK,a.mK=o*s*i.deltaK)));for(e=0;e<h;++e)(i=d[e]).model.skip||(n=e>0?d[e-1]:null,a=e<h-1?d[e+1]:null,n&&!n.model.skip&&(u=(i.model.x-n.model.x)/3,i.model.controlPointPreviousX=i.model.x-u,i.model.controlPointPreviousY=i.model.y-u*i.mK),a&&!a.model.skip&&(u=(a.model.x-i.model.x)/3,i.model.controlPointNextX=i.model.x+u,i.model.controlPointNextY=i.model.y+u*i.mK))},H.nextItem=function(t,e,n){return n?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},H.previousItem=function(t,e,n){return n?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},H.niceNum=function(t,e){var n=Math.floor(H.log10(t)),i=t/Math.pow(10,n);return(e?i<1.5?1:i<3?2:i<7?5:10:i<=1?1:i<=2?2:i<=5?5:10)*Math.pow(10,n)},H.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},H.getRelativePosition=function(t,e){var n,i,a=t.originalEvent||t,r=t.target||t.srcElement,o=r.getBoundingClientRect(),s=a.touches;s&&s.length>0?(n=s[0].clientX,i=s[0].clientY):(n=a.clientX,i=a.clientY);var l=parseFloat(H.getStyle(r,"padding-left")),u=parseFloat(H.getStyle(r,"padding-top")),d=parseFloat(H.getStyle(r,"padding-right")),h=parseFloat(H.getStyle(r,"padding-bottom")),c=o.right-o.left-l-d,f=o.bottom-o.top-u-h;return{x:n=Math.round((n-o.left-l)/c*r.width/e.currentDevicePixelRatio),y:i=Math.round((i-o.top-u)/f*r.height/e.currentDevicePixelRatio)}},H.getConstraintWidth=function(t){return n(t,"max-width","clientWidth")},H.getConstraintHeight=function(t){return n(t,"max-height","clientHeight")},H._calculatePadding=function(t,e,n){return(e=H.getStyle(t,e)).indexOf("%")>-1?n*parseInt(e,10)/100:parseInt(e,10)},H._getParentNode=function(t){var e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e},H.getMaximumWidth=function(t){var e=H._getParentNode(t);if(!e)return t.clientWidth;var n=e.clientWidth,i=n-H._calculatePadding(e,"padding-left",n)-H._calculatePadding(e,"padding-right",n),a=H.getConstraintWidth(t);return isNaN(a)?i:Math.min(i,a)},H.getMaximumHeight=function(t){var e=H._getParentNode(t);if(!e)return t.clientHeight;var n=e.clientHeight,i=n-H._calculatePadding(e,"padding-top",n)-H._calculatePadding(e,"padding-bottom",n),a=H.getConstraintHeight(t);return isNaN(a)?i:Math.min(i,a)},H.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},H.retinaScale=function(t,e){var n=t.currentDevicePixelRatio=e||"undefined"!=typeof window&&window.devicePixelRatio||1;if(1!==n){var i=t.canvas,a=t.height,r=t.width;i.height=a*n,i.width=r*n,t.ctx.scale(n,n),i.style.height||i.style.width||(i.style.height=a+"px",i.style.width=r+"px")}},H.fontString=function(t,e,n){return e+" "+t+"px "+n},H.longestText=function(t,e,n,i){var a=(i=i||{}).data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(a=i.data={},r=i.garbageCollect=[],i.font=e),t.font=e;var o,s,l,u,d,h=0,c=n.length;for(o=0;o<c;o++)if(null!=(u=n[o])&&!0!==H.isArray(u))h=H.measureText(t,a,r,h,u);else if(H.isArray(u))for(s=0,l=u.length;s<l;s++)null==(d=u[s])||H.isArray(d)||(h=H.measureText(t,a,r,h,d));var f=r.length/2;if(f>n.length){for(o=0;o<f;o++)delete a[r[o]];r.splice(0,f)}return h},H.measureText=function(t,e,n,i,a){var r=e[a];return r||(r=e[a]=t.measureText(a).width,n.push(a)),r>i&&(i=r),i},H.numberOfLabelLines=function(t){var e=1;return H.each(t,(function(t){H.isArray(t)&&t.length>e&&(e=t.length)})),e},H.color=_?function(t){return t instanceof CanvasGradient&&(t=N.global.defaultColor),_(t)}:function(t){return console.error("Color.js not found!"),t},H.getHoverColor=function(t){return t instanceof CanvasPattern||t instanceof CanvasGradient?t:H.color(t).saturate(.5).darken(.1).rgbString()}}(),en._adapters=rn,en.Animation=$,en.animationService=J,en.controllers=Jt,en.DatasetController=it,en.defaults=N,en.Element=K,en.elements=kt,en.Interaction=re,en.layouts=pe,en.platform=Oe,en.plugins=Le,en.Scale=yn,en.scaleService=Re,en.Ticks=on,en.Tooltip=Ye,en.helpers.each(fi,(function(t,e){en.scaleService.registerScaleType(e,t,t._defaults)})),Li)Li.hasOwnProperty(Bi)&&en.plugins.register(Li[Bi]);en.platform.initialize();var Ei=en;return"undefined"!=typeof window&&(window.Chart=en),en.Chart=en,en.Legend=Li.legend._element,en.Title=Li.title._element,en.pluginService=en.plugins,en.PluginBase=en.Element.extend({}),en.canvasHelpers=en.helpers.canvas,en.layoutService=en.layouts,en.LinearScaleBase=Cn,en.helpers.each(["Bar","Bubble","Doughnut","Line","PolarArea","Radar","Scatter"],(function(t){en[t]=function(e,n){return new en(e,en.helpers.merge(n||{},{type:t.charAt(0).toLowerCase()+t.slice(1)}))}})),Ei}));

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.Sparkline = factory();
  }
}(window, function () {
  function extend(specific, general) {
    var obj = {};
    for (var key in general) {
      obj[key] = key in specific ? specific[key] : general[key];
    }
    return obj;
  }

  function Sparkline(element, options) {
    this.element = element;
    this.options = extend(options || {}, Sparkline.options);

    init: {
      this.element.innerHTML = "<canvas></canvas>";
      this.canvas = this.element.firstChild;
      this.context = this.canvas.getContext("2d");
      this.ratio = window.devicePixelRatio || 1;

      if (this.options.tooltip) {
        this.canvas.style.position = "relative";
        this.canvas.onmousemove = showTooltip.bind(this);
      }
    }
  }

  Sparkline.options = {
    width: 100,
    height: null,
    lineColor: "black",
    lineWidth: 1.5,
    startColor: "transparent",
    endColor: "black",
    maxColor: "transparent",
    minColor: "transparent",
    minValue: null,
    maxValue: null,
    minMaxValue: null,
    maxMinValue: null,
    dotRadius: 2.5,
    tooltip: null,
    fillBelow: true,
    fillLighten: 0.5,
    startLine: false,
    endLine: false,
    minLine: false,
    maxLine: false,
    bottomLine: false,
    topLine: false,
    averageLine: false
  };

  Sparkline.init = function (element, options) {
    return new Sparkline(element, options);
  };

  Sparkline.draw = function (element, points, options) {
    var sparkline = new Sparkline(element, options);
    sparkline.draw(points);
    return sparkline;
  }

  function getY(minValue, maxValue, offsetY, height, index) {
    var range = maxValue - minValue;
    if (range == 0) {
      return offsetY + height / 2;
    } else {
      return (offsetY + height) - ((this[index] - minValue) / range) * height;
    }
  }

  function drawDot(radius, x1, x2, color, line, x, y) {
    this.context.beginPath();
    this.context.fillStyle = color;
    this.context.arc(x, y, radius, 0, Math.PI * 2, false);
    this.context.fill();
    drawLine.call(this, x1, x2, line, x, y);
  }

  function drawLine(x1, x2, style, x, y){
    if(!style) return;

    this.context.save();
    this.context.strokeStyle = style.color || 'black';
    this.context.lineWidth = (style.width || 1) * this.ratio;
    this.context.globalAlpha = style.alpha || 1;
    this.context.beginPath();
    this.context.moveTo(style.direction != 'right' ? x1 : x, y);
    this.context.lineTo(style.direction != 'left' ? x2 : x, y);
    this.context.stroke();
    this.context.restore();
  }

  function showTooltip(e) {
    var x = e.offsetX || e.layerX || 0;
    var delta = ((this.options.width - this.options.dotRadius * 2) / (this.points.length - 1));
    var index = minmax(0, Math.round((x - this.options.dotRadius) / delta), this.points.length - 1);

    this.canvas.title = this.options.tooltip(this.points[index], index, this.points);
  }

  Sparkline.prototype.draw = function (points) {

    points = points || [];
    this.points = points;

    this.canvas.width = this.options.width * this.ratio;
    this.canvas.style.width = this.options.width + 'px';

    var pxHeight = this.options.height || this.element.offsetHeight;
    this.canvas.height = pxHeight * this.ratio;
    this.canvas.style.height = pxHeight + 'px';

    var lineWidth = this.options.lineWidth * this.ratio;
    var offsetX = Math.max(this.options.dotRadius * this.ratio, lineWidth/2);
    var offsetY = Math.max(this.options.dotRadius * this.ratio, lineWidth/2);
    var width = this.canvas.width - offsetX * 2;
    var height = this.canvas.height - offsetY * 2;

    var minValue = Math.min.apply(Math, points);
    var maxValue = Math.max.apply(Math, points);
    var bottomValue = this.options.minValue != undefined ? this.options.minValue : Math.min(minValue, this.options.maxMinValue != undefined ? this.options.maxMinValue : minValue);
    var topValue = this.options.maxValue != undefined ? this.options.maxValue : Math.max(maxValue, this.options.minMaxValue != undefined ? this.options.minMaxValue : maxValue);
    var minX = offsetX;
    var maxX = offsetX;

    var x = offsetX;
    var y = getY.bind(points, bottomValue, topValue, offsetY, height);
    var delta = width / (points.length - 1);

    var dot = drawDot.bind(this, this.options.dotRadius * this.ratio, offsetX, width + offsetX);
    var line = drawLine.bind(this, offsetX, width + offsetX);

    this.context.save();

    this.context.strokeStyle = this.options.lineColor;
    this.context.fillStyle = this.options.lineColor;
    this.context.lineWidth = lineWidth;
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';

    if(this.options.fillBelow && points.length > 1){
      this.context.save();
      this.context.beginPath();
      this.context.moveTo(x, y(0));
      for (var i = 1; i < points.length; i++) {
        x += delta;

        minX = points[i] == minValue ? x : minX;
        maxX = points[i] == maxValue ? x : maxX;

        this.context.lineTo(x, y(i));
      }
      this.context.lineTo(width+offsetX, height + offsetY + lineWidth/2);
      this.context.lineTo(offsetX, height + offsetY + lineWidth/2);
      this.context.fill();
      if(this.options.fillLighten > 0){
        this.context.fillStyle = 'white';
        this.context.globalAlpha = this.options.fillLighten;
        this.context.fill();
        this.context.globalAlpha = 1;
      }else if(this.options.fillLighten < 0){
        this.context.fillStyle = 'black';
        this.context.globalAlpha = -this.options.fillLighten;
        this.context.fill();
      }
      this.context.restore();
    }

    x = offsetX;
    this.context.beginPath();
    this.context.moveTo(x, y(0));
    for (var i = 1; i < points.length; i++) {
      x += delta;
      this.context.lineTo(x, y(i));
    }
    this.context.stroke();

    this.context.restore();

    line(this.options.bottomLine, 0, offsetY);
    line(this.options.topLine, 0, height + offsetY+lineWidth/2);

    dot(this.options.startColor, this.options.startLine, offsetX + (points.length == 1 ? width / 2 : 0), y(0));
    dot(this.options.endColor, this.options.endLine, offsetX + (points.length == 1 ? width / 2 : width), y(points.length-1));
    dot(this.options.minColor, this.options.minLine, minX + (points.length == 1 ? width / 2 : 0), y(points.indexOf(minValue)));
    dot(this.options.maxColor, this.options.maxLine, maxX + (points.length == 1 ? width / 2 : 0), y(points.indexOf(maxValue)));

    //line(this.options.averageLine, )
  }

  function minmax(a, b, c) {
    return Math.max(a, Math.min(b, c));
  }

  return Sparkline;
}));

/*!
 * JQVMap: jQuery Vector Map Library
 * @author JQVMap <me@peterschmalfeldt.com>
 * @version 1.5.1
 * @link http://jqvmap.com
 * @license https://github.com/manifestinteractive/jqvmap/blob/master/LICENSE
 * @builddate 2016/06/02
 */

var VectorCanvas=function(a,b,c){if(this.mode=window.SVGAngle?"svg":"vml",this.params=c,"svg"===this.mode)this.createSvgNode=function(a){return document.createElementNS(this.svgns,a)};else{try{document.namespaces.rvml||document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),this.createVmlNode=function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(d){this.createVmlNode=function(a){return document.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)")}"svg"===this.mode?this.canvas=this.createSvgNode("svg"):(this.canvas=this.createVmlNode("group"),this.canvas.style.position="absolute"),this.setSize(a,b)};VectorCanvas.prototype={svgns:"http://www.w3.org/2000/svg",mode:"svg",width:0,height:0,canvas:null};var ColorScale=function(a,b,c,d){a&&this.setColors(a),b&&this.setNormalizeFunction(b),c&&this.setMin(c),c&&this.setMax(d)};ColorScale.prototype={colors:[]};var JQVMap=function(a){a=a||{};var b,c=this,d=JQVMap.maps[a.map];if(!d)throw new Error('Invalid "'+a.map+'" map parameter. Please make sure you have loaded this map file in your HTML.');this.selectedRegions=[],this.multiSelectRegion=a.multiSelectRegion,this.container=a.container,this.defaultWidth=d.width,this.defaultHeight=d.height,this.color=a.color,this.selectedColor=a.selectedColor,this.hoverColor=a.hoverColor,this.hoverColors=a.hoverColors,this.hoverOpacity=a.hoverOpacity,this.setBackgroundColor(a.backgroundColor),this.width=a.container.width(),this.height=a.container.height(),this.resize(),jQuery(window).resize(function(){var d=a.container.width(),e=a.container.height();if(d&&e){c.width=d,c.height=e,c.resize(),c.canvas.setSize(c.width,c.height),c.applyTransform();var f=jQuery.Event("resize.jqvmap");jQuery(a.container).trigger(f,[d,e]),b&&(jQuery(".jqvmap-pin").remove(),c.pinHandlers=!1,c.placePins(b.pins,b.mode))}}),this.canvas=new VectorCanvas(this.width,this.height,a),a.container.append(this.canvas.canvas),this.makeDraggable(),this.rootGroup=this.canvas.createGroup(!0),this.index=JQVMap.mapIndex,this.label=jQuery("<div/>").addClass("jqvmap-label").appendTo(jQuery("body")).hide(),a.enableZoom&&(jQuery("<div/>").addClass("jqvmap-zoomin").text("+").appendTo(a.container),jQuery("<div/>").addClass("jqvmap-zoomout").html("&#x2212;").appendTo(a.container)),c.countries=[];for(var e in d.paths){var f=this.canvas.createPath({path:d.paths[e].path});f.setFill(this.color),f.id=c.getCountryId(e),c.countries[e]=f,"svg"===this.canvas.mode?f.setAttribute("class","jqvmap-region"):jQuery(f).addClass("jqvmap-region"),jQuery(this.rootGroup).append(f)}if(jQuery(a.container).delegate("svg"===this.canvas.mode?"path":"shape","mouseover mouseout",function(b){var e=b.target,f=b.target.id.split("_").pop(),g=jQuery.Event("labelShow.jqvmap"),h=jQuery.Event("regionMouseOver.jqvmap");f=f.toLowerCase(),"mouseover"===b.type?(jQuery(a.container).trigger(h,[f,d.paths[f].name]),h.isDefaultPrevented()||c.highlight(f,e),a.showTooltip&&(c.label.text(d.paths[f].name),jQuery(a.container).trigger(g,[c.label,f]),g.isDefaultPrevented()||(c.label.show(),c.labelWidth=c.label.width(),c.labelHeight=c.label.height()))):(c.unhighlight(f,e),c.label.hide(),jQuery(a.container).trigger("regionMouseOut.jqvmap",[f,d.paths[f].name]))}),jQuery(a.container).delegate("svg"===this.canvas.mode?"path":"shape","click",function(b){var e=b.target,f=b.target.id.split("_").pop(),g=jQuery.Event("regionClick.jqvmap");if(f=f.toLowerCase(),jQuery(a.container).trigger(g,[f,d.paths[f].name]),!a.multiSelectRegion&&!g.isDefaultPrevented())for(var h in d.paths)c.countries[h].currentFillColor=c.countries[h].getOriginalFill(),c.countries[h].setFill(c.countries[h].getOriginalFill());g.isDefaultPrevented()||(c.isSelected(f)?c.deselect(f,e):c.select(f,e))}),a.showTooltip&&a.container.mousemove(function(a){if(c.label.is(":visible")){var b=a.pageX-15-c.labelWidth,d=a.pageY-15-c.labelHeight;0>b&&(b=a.pageX+15),0>d&&(d=a.pageY+15),c.label.css({left:b,top:d})}}),this.setColors(a.colors),this.canvas.canvas.appendChild(this.rootGroup),this.applyTransform(),this.colorScale=new ColorScale(a.scaleColors,a.normalizeFunction,a.valueMin,a.valueMax),a.values&&(this.values=a.values,this.setValues(a.values)),a.selectedRegions)if(a.selectedRegions instanceof Array)for(var g in a.selectedRegions)this.select(a.selectedRegions[g].toLowerCase());else this.select(a.selectedRegions.toLowerCase());if(this.bindZoomButtons(),a.pins&&(b={pins:a.pins,mode:a.pinMode},this.pinHandlers=!1,this.placePins(a.pins,a.pinMode)),a.showLabels){this.pinHandlers=!1;var h={};for(e in c.countries)"function"!=typeof c.countries[e]&&(a.pins&&a.pins[e]||(h[e]=e.toUpperCase()));b={pins:h,mode:"content"},this.placePins(h,"content")}JQVMap.mapIndex++};JQVMap.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,countries:{},countriesColors:{},countriesData:{},zoomStep:1.4,zoomMaxStep:4,zoomCurStep:1},JQVMap.xlink="http://www.w3.org/1999/xlink",JQVMap.mapIndex=1,JQVMap.maps={},function(){var a={colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,enableZoom:1,showTooltip:1,borderColor:1,borderWidth:1,borderOpacity:1,selectedRegions:1,multiSelectRegion:1},b={onLabelShow:"labelShow",onLoad:"load",onRegionOver:"regionMouseOver",onRegionOut:"regionMouseOut",onRegionClick:"regionClick",onRegionSelect:"regionSelect",onRegionDeselect:"regionDeselect",onResize:"resize"};jQuery.fn.vectorMap=function(c){var d={map:"world_en",backgroundColor:"#a5bfdd",color:"#f4f3f0",hoverColor:"#c9dfaf",hoverColors:{},selectedColor:"#c9dfaf",scaleColors:["#b6d6ff","#005ace"],normalizeFunction:"linear",enableZoom:!0,showTooltip:!0,borderColor:"#818181",borderWidth:1,borderOpacity:.25,selectedRegions:null,multiSelectRegion:!1},e=this.data("mapObject");if("addMap"===c)JQVMap.maps[arguments[1]]=arguments[2];else{if("set"!==c||!a[arguments[1]]){if("string"==typeof c&&"function"==typeof e[c])return e[c].apply(e,Array.prototype.slice.call(arguments,1));jQuery.extend(d,c),d.container=this,this.css({position:"relative",overflow:"hidden"}),e=new JQVMap(d),this.data("mapObject",e),this.unbind(".jqvmap");for(var f in b)d[f]&&this.bind(b[f]+".jqvmap",d[f]);var g=jQuery.Event("load.jqvmap");return jQuery(d.container).trigger(g,e),e}e["set"+arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1)].apply(e,Array.prototype.slice.call(arguments,2))}}}(jQuery),ColorScale.arrayToRgb=function(a){for(var b,c="#",d=0;d<a.length;d++)b=a[d].toString(16),c+=1===b.length?"0"+b:b;return c},ColorScale.prototype.getColor=function(a){"function"==typeof this.normalize&&(a=this.normalize(a));for(var b,c=[],d=0,e=0;e<this.colors.length-1;e++)b=this.vectorLength(this.vectorSubtract(this.colors[e+1],this.colors[e])),c.push(b),d+=b;var f=(this.maxValue-this.minValue)/d;for(e=0;e<c.length;e++)c[e]*=f;for(e=0,a-=this.minValue;a-c[e]>=0;)a-=c[e],e++;var g;for(g=e===this.colors.length-1?this.vectorToNum(this.colors[e]).toString(16):this.vectorToNum(this.vectorAdd(this.colors[e],this.vectorMult(this.vectorSubtract(this.colors[e+1],this.colors[e]),a/c[e]))).toString(16);g.length<6;)g="0"+g;return"#"+g},ColorScale.rgbToArray=function(a){return a=a.substr(1),[parseInt(a.substr(0,2),16),parseInt(a.substr(2,2),16),parseInt(a.substr(4,2),16)]},ColorScale.prototype.setColors=function(a){for(var b=0;b<a.length;b++)a[b]=ColorScale.rgbToArray(a[b]);this.colors=a},ColorScale.prototype.setMax=function(a){this.clearMaxValue=a,"function"==typeof this.normalize?this.maxValue=this.normalize(a):this.maxValue=a},ColorScale.prototype.setMin=function(a){this.clearMinValue=a,"function"==typeof this.normalize?this.minValue=this.normalize(a):this.minValue=a},ColorScale.prototype.setNormalizeFunction=function(a){"polynomial"===a?this.normalize=function(a){return Math.pow(a,.2)}:"linear"===a?delete this.normalize:this.normalize=a,this.setMin(this.clearMinValue),this.setMax(this.clearMaxValue)},ColorScale.prototype.vectorAdd=function(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=a[d]+b[d];return c},ColorScale.prototype.vectorLength=function(a){for(var b=0,c=0;c<a.length;c++)b+=a[c]*a[c];return Math.sqrt(b)},ColorScale.prototype.vectorMult=function(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=a[d]*b;return c},ColorScale.prototype.vectorSubtract=function(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=a[d]-b[d];return c},ColorScale.prototype.vectorToNum=function(a){for(var b=0,c=0;c<a.length;c++)b+=Math.round(a[c])*Math.pow(256,a.length-c-1);return b},JQVMap.prototype.applyTransform=function(){var a,b,c,d;this.defaultWidth*this.scale<=this.width?(a=(this.width-this.defaultWidth*this.scale)/(2*this.scale),c=(this.width-this.defaultWidth*this.scale)/(2*this.scale)):(a=0,c=(this.width-this.defaultWidth*this.scale)/this.scale),this.defaultHeight*this.scale<=this.height?(b=(this.height-this.defaultHeight*this.scale)/(2*this.scale),d=(this.height-this.defaultHeight*this.scale)/(2*this.scale)):(b=0,d=(this.height-this.defaultHeight*this.scale)/this.scale),this.transY>b?this.transY=b:this.transY<d&&(this.transY=d),this.transX>a?this.transX=a:this.transX<c&&(this.transX=c),this.canvas.applyTransformParams(this.scale,this.transX,this.transY)},JQVMap.prototype.bindZoomButtons=function(){var a=this;this.container.find(".jqvmap-zoomin").click(function(){a.zoomIn()}),this.container.find(".jqvmap-zoomout").click(function(){a.zoomOut()})},JQVMap.prototype.deselect=function(a,b){if(a=a.toLowerCase(),b=b||jQuery("#"+this.getCountryId(a))[0],this.isSelected(a))this.selectedRegions.splice(this.selectIndex(a),1),jQuery(this.container).trigger("regionDeselect.jqvmap",[a]),b.currentFillColor=b.getOriginalFill(),b.setFill(b.getOriginalFill());else for(var c in this.countries)this.selectedRegions.splice(this.selectedRegions.indexOf(c),1),this.countries[c].currentFillColor=this.color,this.countries[c].setFill(this.color)},JQVMap.prototype.getCountryId=function(a){return"jqvmap"+this.index+"_"+a},JQVMap.prototype.getPin=function(a){var b=jQuery("#"+this.getPinId(a));return b.html()},JQVMap.prototype.getPinId=function(a){return this.getCountryId(a)+"_pin"},JQVMap.prototype.getPins=function(){var a=this.container.find(".jqvmap-pin"),b={};return jQuery.each(a,function(a,c){c=jQuery(c);var d=c.attr("for").toLowerCase(),e=c.html();b[d]=e}),JSON.stringify(b)},JQVMap.prototype.highlight=function(a,b){b=b||jQuery("#"+this.getCountryId(a))[0],this.hoverOpacity?b.setOpacity(this.hoverOpacity):this.hoverColors&&a in this.hoverColors?(b.currentFillColor=b.getFill()+"",b.setFill(this.hoverColors[a])):this.hoverColor&&(b.currentFillColor=b.getFill()+"",b.setFill(this.hoverColor))},JQVMap.prototype.isSelected=function(a){return this.selectIndex(a)>=0},JQVMap.prototype.makeDraggable=function(){var a,b,c=!1,d=this;d.isMoving=!1,d.isMovingTimeout=!1;var e,f,g,h,i,j,k;this.container.mousemove(function(e){return c&&(d.transX-=(a-e.pageX)/d.scale,d.transY-=(b-e.pageY)/d.scale,d.applyTransform(),a=e.pageX,b=e.pageY,d.isMoving=!0,d.isMovingTimeout&&clearTimeout(d.isMovingTimeout),d.container.trigger("drag")),!1}).mousedown(function(d){return c=!0,a=d.pageX,b=d.pageY,!1}).mouseup(function(){return c=!1,clearTimeout(d.isMovingTimeout),d.isMovingTimeout=setTimeout(function(){d.isMoving=!1},100),!1}).mouseout(function(){return c&&d.isMoving?(clearTimeout(d.isMovingTimeout),d.isMovingTimeout=setTimeout(function(){c=!1,d.isMoving=!1},100),!1):void 0}),jQuery(this.container).bind("touchmove",function(a){var b,c,l,m,n=a.originalEvent.touches;if(1===n.length){if(1===e){if(j===n[0].pageX&&k===n[0].pageY)return;l=d.transX,m=d.transY,d.transX-=(j-n[0].pageX)/d.scale,d.transY-=(k-n[0].pageY)/d.scale,d.applyTransform(),(l!==d.transX||m!==d.transY)&&a.preventDefault(),d.isMoving=!0,d.isMovingTimeout&&clearTimeout(d.isMovingTimeout)}j=n[0].pageX,k=n[0].pageY}else 2===n.length&&(2===e?(c=Math.sqrt(Math.pow(n[0].pageX-n[1].pageX,2)+Math.pow(n[0].pageY-n[1].pageY,2))/h,d.setScale(i*c,f,g),a.preventDefault()):(b=jQuery(d.container).offset(),f=n[0].pageX>n[1].pageX?n[1].pageX+(n[0].pageX-n[1].pageX)/2:n[0].pageX+(n[1].pageX-n[0].pageX)/2,g=n[0].pageY>n[1].pageY?n[1].pageY+(n[0].pageY-n[1].pageY)/2:n[0].pageY+(n[1].pageY-n[0].pageY)/2,f-=b.left,g-=b.top,i=d.scale,h=Math.sqrt(Math.pow(n[0].pageX-n[1].pageX,2)+Math.pow(n[0].pageY-n[1].pageY,2))));e=n.length}),jQuery(this.container).bind("touchstart",function(){e=0}),jQuery(this.container).bind("touchend",function(){e=0})},JQVMap.prototype.placePins=function(a,b){var c=this;if((!b||"content"!==b&&"id"!==b)&&(b="content"),"content"===b?jQuery.each(a,function(a,b){if(0!==jQuery("#"+c.getCountryId(a)).length){var d=c.getPinId(a),e=jQuery("#"+d);e.length>0&&e.remove(),c.container.append('<div id="'+d+'" for="'+a+'" class="jqvmap-pin" style="position:absolute">'+b+"</div>")}}):jQuery.each(a,function(a,b){if(0!==jQuery("#"+c.getCountryId(a)).length){var d=c.getPinId(a),e=jQuery("#"+d);e.length>0&&e.remove(),c.container.append('<div id="'+d+'" for="'+a+'" class="jqvmap-pin" style="position:absolute"></div>'),e.append(jQuery("#"+b))}}),this.positionPins(),!this.pinHandlers){this.pinHandlers=!0;var d=function(){c.positionPins()};this.container.bind("zoomIn",d).bind("zoomOut",d).bind("drag",d)}},JQVMap.prototype.positionPins=function(){var a=this,b=this.container.find(".jqvmap-pin");jQuery.each(b,function(b,c){c=jQuery(c);var d=a.getCountryId(c.attr("for").toLowerCase()),e=jQuery("#"+d),f=e[0].getBBox(),g=a.scale,h=a.canvas.rootGroup.getBoundingClientRect(),i=a.container[0].getBoundingClientRect(),j={left:h.left-i.left,top:h.top-i.top},k=f.x*g+f.width*g/2,l=f.y*g+f.height*g/2;c.css({left:j.left+k-c.width()/2,top:j.top+l-c.height()/2})})},JQVMap.prototype.removePin=function(a){a=a.toLowerCase(),jQuery("#"+this.getPinId(a)).remove()},JQVMap.prototype.removePins=function(){this.container.find(".jqvmap-pin").remove()},JQVMap.prototype.reset=function(){for(var a in this.countries)this.countries[a].setFill(this.color);this.scale=this.baseScale,this.transX=this.baseTransX,this.transY=this.baseTransY,this.applyTransform()},JQVMap.prototype.resize=function(){var a=this.baseScale;this.width/this.height>this.defaultWidth/this.defaultHeight?(this.baseScale=this.height/this.defaultHeight,this.baseTransX=Math.abs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)):(this.baseScale=this.width/this.defaultWidth,this.baseTransY=Math.abs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)),this.scale*=this.baseScale/a,this.transX*=this.baseScale/a,this.transY*=this.baseScale/a},JQVMap.prototype.select=function(a,b){a=a.toLowerCase(),b=b||jQuery("#"+this.getCountryId(a))[0],this.isSelected(a)||(this.multiSelectRegion?this.selectedRegions.push(a):this.selectedRegions=[a],jQuery(this.container).trigger("regionSelect.jqvmap",[a]),this.selectedColor&&b&&(b.currentFillColor=this.selectedColor,b.setFill(this.selectedColor)))},JQVMap.prototype.selectIndex=function(a){a=a.toLowerCase();for(var b=0;b<this.selectedRegions.length;b++)if(a===this.selectedRegions[b])return b;return-1},JQVMap.prototype.setBackgroundColor=function(a){this.container.css("background-color",a)},JQVMap.prototype.setColors=function(a,b){if("string"==typeof a)this.countries[a].setFill(b),this.countries[a].setAttribute("original",b);else{var c=a;for(var d in c)this.countries[d]&&(this.countries[d].setFill(c[d]),this.countries[d].setAttribute("original",c[d]))}},JQVMap.prototype.setNormalizeFunction=function(a){this.colorScale.setNormalizeFunction(a),this.values&&this.setValues(this.values)},JQVMap.prototype.setScale=function(a){this.scale=a,this.applyTransform()},JQVMap.prototype.setScaleColors=function(a){this.colorScale.setColors(a),this.values&&this.setValues(this.values)},JQVMap.prototype.setValues=function(a){var b,c=0,d=Number.MAX_VALUE;for(var e in a)e=e.toLowerCase(),b=parseFloat(a[e]),isNaN(b)||(b>c&&(c=a[e]),d>b&&(d=b));d===c&&c++,this.colorScale.setMin(d),this.colorScale.setMax(c);var f={};for(e in a)e=e.toLowerCase(),b=parseFloat(a[e]),f[e]=isNaN(b)?this.color:this.colorScale.getColor(b);this.setColors(f),this.values=a},JQVMap.prototype.unhighlight=function(a,b){a=a.toLowerCase(),b=b||jQuery("#"+this.getCountryId(a))[0],b.setOpacity(1),b.currentFillColor&&b.setFill(b.currentFillColor)},JQVMap.prototype.zoomIn=function(){var a=this,b=(jQuery("#zoom").innerHeight()-12-30-6-7-6)/(this.zoomMaxStep-this.zoomCurStep);if(a.zoomCurStep<a.zoomMaxStep){a.transX-=(a.width/a.scale-a.width/(a.scale*a.zoomStep))/2,a.transY-=(a.height/a.scale-a.height/(a.scale*a.zoomStep))/2,a.setScale(a.scale*a.zoomStep),a.zoomCurStep++;var c=jQuery("#zoomSlider");c.css("top",parseInt(c.css("top"),10)-b),a.container.trigger("zoomIn")}},JQVMap.prototype.zoomOut=function(){var a=this,b=(jQuery("#zoom").innerHeight()-12-30-6-7-6)/(this.zoomMaxStep-this.zoomCurStep);if(a.zoomCurStep>1){a.transX+=(a.width/(a.scale/a.zoomStep)-a.width/a.scale)/2,a.transY+=(a.height/(a.scale/a.zoomStep)-a.height/a.scale)/2,a.setScale(a.scale/a.zoomStep),a.zoomCurStep--;var c=jQuery("#zoomSlider");c.css("top",parseInt(c.css("top"),10)+b),a.container.trigger("zoomOut")}},VectorCanvas.prototype.applyTransformParams=function(a,b,c){"svg"===this.mode?this.rootGroup.setAttribute("transform","scale("+a+") translate("+b+", "+c+")"):(this.rootGroup.coordorigin=this.width-b+","+(this.height-c),this.rootGroup.coordsize=this.width/a+","+this.height/a)},VectorCanvas.prototype.createGroup=function(a){var b;return"svg"===this.mode?b=this.createSvgNode("g"):(b=this.createVmlNode("group"),b.style.width=this.width+"px",b.style.height=this.height+"px",b.style.left="0px",b.style.top="0px",b.coordorigin="0 0",b.coordsize=this.width+" "+this.height),a&&(this.rootGroup=b),b},VectorCanvas.prototype.createPath=function(a){var b;if("svg"===this.mode)b=this.createSvgNode("path"),b.setAttribute("d",a.path),null!==this.params.borderColor&&b.setAttribute("stroke",this.params.borderColor),this.params.borderWidth>0&&(b.setAttribute("stroke-width",this.params.borderWidth),b.setAttribute("stroke-linecap","round"),b.setAttribute("stroke-linejoin","round")),this.params.borderOpacity>0&&b.setAttribute("stroke-opacity",this.params.borderOpacity),b.setFill=function(a){this.setAttribute("fill",a),null===this.getAttribute("original")&&this.setAttribute("original",a)},b.getFill=function(){return this.getAttribute("fill")},b.getOriginalFill=function(){return this.getAttribute("original")},b.setOpacity=function(a){this.setAttribute("fill-opacity",a)};else{b=this.createVmlNode("shape"),b.coordorigin="0 0",b.coordsize=this.width+" "+this.height,b.style.width=this.width+"px",b.style.height=this.height+"px",b.fillcolor=JQVMap.defaultFillColor,b.stroked=!1,b.path=VectorCanvas.pathSvgToVml(a.path);var c=this.createVmlNode("skew");c.on=!0,c.matrix="0.01,0,0,0.01,0,0",c.offset="0,0",b.appendChild(c);var d=this.createVmlNode("fill");b.appendChild(d),b.setFill=function(a){this.getElementsByTagName("fill")[0].color=a,null===this.getAttribute("original")&&this.setAttribute("original",a)},b.getFill=function(){return this.getElementsByTagName("fill")[0].color},b.getOriginalFill=function(){return this.getAttribute("original")},b.setOpacity=function(a){this.getElementsByTagName("fill")[0].opacity=parseInt(100*a,10)+"%"}}return b},VectorCanvas.prototype.pathSvgToVml=function(a){var b,c,d="",e=0,f=0;return a.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g,function(a,g,h){h=h.replace(/(\d)-/g,"$1,-").replace(/\s+/g,",").split(","),h[0]||h.shift();for(var i=0,j=h.length;j>i;i++)h[i]=Math.round(100*h[i]);switch(g){case"m":e+=h[0],f+=h[1],d="t"+h.join(",");break;case"M":e=h[0],f=h[1],d="m"+h.join(",");break;case"l":e+=h[0],f+=h[1],d="r"+h.join(",");break;case"L":e=h[0],f=h[1],d="l"+h.join(",");break;case"h":e+=h[0],d="r"+h[0]+",0";break;case"H":e=h[0],d="l"+e+","+f;break;case"v":f+=h[0],d="r0,"+h[0];break;case"V":f=h[0],d="l"+e+","+f;break;case"c":b=e+h[h.length-4],c=f+h[h.length-3],e+=h[h.length-2],f+=h[h.length-1],d="v"+h.join(",");break;case"C":b=h[h.length-4],c=h[h.length-3],e=h[h.length-2],f=h[h.length-1],d="c"+h.join(",");break;case"s":h.unshift(f-c),h.unshift(e-b),b=e+h[h.length-4],c=f+h[h.length-3],e+=h[h.length-2],f+=h[h.length-1],d="v"+h.join(",");break;case"S":h.unshift(f+f-c),h.unshift(e+e-b),b=h[h.length-4],c=h[h.length-3],e=h[h.length-2],f=h[h.length-1],d="c"+h.join(",")}return d}).replace(/z/g,"")},VectorCanvas.prototype.setSize=function(a,b){if("svg"===this.mode)this.canvas.setAttribute("width",a),this.canvas.setAttribute("height",b);else if(this.canvas.style.width=a+"px",this.canvas.style.height=b+"px",this.canvas.coordsize=a+" "+b,this.canvas.coordorigin="0 0",this.rootGroup){for(var c=this.rootGroup.getElementsByTagName("shape"),d=0,e=c.length;e>d;d++)c[d].coordsize=a+" "+b,c[d].style.width=a+"px",c[d].style.height=b+"px";this.rootGroup.coordsize=a+" "+b,this.rootGroup.style.width=a+"px",this.rootGroup.style.height=b+"px"}this.width=a,this.height=b};
/** Add USA Map Data Points */
jQuery.fn.vectorMap('addMap', 'usa_en', {"width":959,"height":593,"paths":{"hi":{"path":"m244.66,512.25c-2.48,3.8 2.23,4.04 4.74,5.38 3.06,0.16 3.51,-4.28 2.66,-6.56 -2.72,-0.77 -5.01,-0.19 -7.41,1.19z m-9.31,3.97c-4.02,5.11 3.64,0.48 0.63,-0.09l-0.5,0.07 -0.14,0.02z m39.69,7.97c-0.62,2.09 1.91,6.73 4.39,6.2 2.41,-1.46 3.73,1.73 6.48,0.56 1.23,-1.48 -3.77,-3.2 -3.7,-6.08 -0.95,-3.8 -3.28,-3.2 -5.96,-1.28 -0.41,0.2 -0.81,0.4 -1.22,0.6z m19.94,10.03c3.58,0.95 7.91,2.99 11.25,0.47 -1.05,-1.63 -5.06,-0.59 -7.1,-0.86 -1.44,0.01 -3.54,-1.63 -4.15,0.39z m12.13,4.38c2.33,2.45 3.64,6.83 7.24,7.4 2.36,-0.69 6.84,-0.66 7.32,-3.43 -2.09,-2.51 -5.77,-3.35 -8.88,-4.29 -2.53,-1.2 -4.11,-3.25 -5.68,0.33z m-7.06,1c-0.29,3.69 5.55,3.98 3.67,0.55 -0.27,-1.25 -3.83,-1.74 -3.67,-0.55z m23.66,14.69c0.27,2.45 3.18,3.93 0.47,6.15 -0.65,2.42 -5.54,2.87 -2.52,5.53 2.36,1.46 2.01,4.85 2.92,7.14 -0.72,2.69 -1.43,6.78 1.72,8.06 2.8,2.95 4.5,-1.93 6.19,-3.68 1.27,-1.69 3.85,-4.1 5.94,-2.59 3.04,-0.81 6.3,-2.42 7.78,-5.22 -2.79,-1.31 -4.88,-3.19 -5.57,-6.29 -2.4,-5.33 -8.95,-6.26 -13.58,-8.98 -1.29,-0.52 -2.26,-1.62 -3.34,-0.11z","name":"Hawaii"},"ak":{"path":"m107.84,436.56c-2.27,0.55 -4.87,0.32 -6.84,-0.34 -2.41,1.22 -5.63,4.03 -8.25,1.88 -3.1,0.93 -3.51,3.84 -5.22,5.97 -1.82,2.52 -4.21,3.65 -7.31,3.14 -2.5,-0.94 -5.49,-1.15 -7.5,0.98 2.03,4.34 6.39,8.13 5.82,13.23 -1.85,2.94 6.31,2.99 2.68,5.02 0.15,2.8 3.07,5.68 2.91,7.88 -2.35,2.21 -5.24,-0.38 -7.71,-1.06 -3.24,-0.64 -2.73,-3.35 -0.82,-5.22 -1.57,-1.51 -7.35,-1.81 -6.51,1.12 -2.01,0.04 -3.81,-1.66 -6.27,-0.77 -3.72,-0.44 -5.97,0.65 -2.94,4.05 3.68,1.45 1.06,4.72 1.17,7.57 0.76,2.63 3.66,4.89 6.67,4.17 3.2,-0.06 5.87,3.59 9.21,1.65 2.16,-1.3 5.33,-0.99 4.79,1.89 -2.53,2.07 -1.36,6.13 -2.78,8.75 -1.96,1.88 -4.53,1.59 -6.59,0.16 -1.52,1.37 -4.7,3.68 -6.28,2.22 0.72,-3.71 -4.77,-3.63 -5.51,-0.61 -1.21,3.97 -6.27,4.46 -8.31,7.63 -0.7,2.42 -1.55,6.7 1.74,6.3 1.26,1.11 -1.2,4.8 -2.77,5.52 1.62,2.19 2.65,4.59 2.72,7.34 1.71,1.55 6.35,1.98 7.5,-0.16 2.45,-0.95 1.79,4.1 2.08,5.97 2.47,2.95 -4.02,1.28 -1.61,4.56 -0.85,2.93 -1.76,5.02 2,2.72 2.76,-0.47 5.11,-0.69 5.66,2.09 2.59,-3.91 2.26,2.78 3.25,4.66 0.59,-0.75 1.3,-5.69 3.94,-3.06 -0.17,4.52 5.33,-0.45 5.78,-0.04 0.54,2.92 -1.63,4.24 -2.86,6.41 -1.51,2.24 -2.07,5.63 -4.21,7.17 -3.87,-0.42 -3.37,4.1 -5.5,5.02 -2.65,-0.72 -5.73,0.71 -8.44,1.41 -1.35,2.41 -3.61,4.2 -5.78,1.81 -2.56,0.05 -5.63,0.68 -7.63,2.33 -2.48,2.43 -6.32,3.11 -9.66,2.29 -2.78,-1.91 -7.11,3.41 -3.11,2.31 2.5,-1.91 4.66,0.64 7.25,0.63 2.21,-1.15 4.17,-2.75 6.84,-2.06 2.32,-3.35 5.1,-0.32 7.92,-1.16 2.31,-0.39 7.01,-3.91 5.26,0.66 0.09,-2.91 3.42,-2.73 5.54,-2.04 4.21,0.96 0.29,-3.16 2.08,-3.43 3.47,-2.05 7.52,-2.41 11.2,-3.72 5.48,-3.19 11.62,-5.7 16.21,-10.1 4.27,-2.97 -2.78,-3.48 -1.21,-6.32 1.68,-2.43 4.58,-3.81 7.47,-4.5 1.5,-3.07 3.53,-6.11 5.88,-8.52 2.49,-1.32 4.83,-3.39 7.83,-2.32 2.67,0.71 3.74,5.32 -0.52,3.66 -1.27,-1.88 -5.56,-0.09 -5.25,2.41 -0.21,2.44 -2.56,4.22 -3.06,6.66 4.79,0.85 0.24,3.54 -1.38,3.8 1.67,1.91 5.66,0.6 7.57,-1.14 1.25,-1.85 3.43,-3.8 5.41,-4.22 1.81,2.8 5.1,-1.16 5.74,2.72 0.71,2.78 6.02,-4.86 3.34,-3.1 -3.03,3.11 -3.78,2.86 -1.94,-1.24 1.43,-4.85 -1.76,6.17 -1.45,0.81 -0.81,-3.19 -0.93,-6.03 3.05,-6.4 2.7,-0.86 5.37,-0.87 5.79,2.52 0.42,3.48 3.8,2.84 5.95,4.76 2.41,2.2 4.76,1.95 7.8,1.78 4.34,-0.47 8.01,4.04 12.28,3.17 2.49,-0.42 5.1,-5.2 4.29,-0.23 -2.26,2.83 -0.02,4.12 2.5,5.41 3.13,1.35 5.87,3.14 7.94,5.85 1.31,3.02 6.05,0.28 6.18,2.43 -3.83,1.25 -1.23,3.54 0.21,5.47 1.81,1.95 0.33,5.72 3.64,5.82 1.14,1.28 3.49,7.44 4.01,5.38 -0.35,-2.32 -0.7,-7.86 1.61,-3.76 0.37,1.42 1.04,8.7 2.07,4.74 1.07,-4.88 3.18,0.18 2.22,2.93 3.33,1.69 -1.23,3.33 0.69,4.88 0.69,-3.24 1.31,-0.36 2.16,1.56 1.05,1 1.54,3.94 3.13,3.72 -1.68,-1.72 -2.94,-6.23 0.4,-3 2.42,2.79 4.05,2.12 2.74,-1.66 -2.65,-2.66 0.28,-4.96 2.58,-2.29 3.12,-0.05 2.84,5.21 5.28,4.53 3.31,-3.17 1.5,-7.87 0.69,-11.7 -3.3,-1.55 -7.04,-2.54 -10.22,-4.06 -1.5,-5.33 -6.29,-8.69 -8.4,-13.77 -0.44,-3.33 -4.71,-2.62 -5.75,-5.23 -2.32,-1.72 -2.7,-4.4 -4.56,-6.35 -1.65,-1.53 -5.22,0.95 -5.51,2.94 0.59,3.09 -3.23,3.04 -5.06,4.72 0.05,-4.27 -4.3,-6.15 -6.7,-9.1 -1.33,-1.99 -1.32,-5.36 -4.45,-2.34 -2.37,0.24 -6.38,-0.31 -5.34,-3.62 0.1,-27.7 0.2,-55.4 0.31,-83.09 -2.75,-1.88 -5.88,-4.17 -9.15,-4.4 -2.52,1.72 -5.07,1.09 -7.39,-0.62 -2.72,0.23 -5.12,-0.65 -7.7,-2.89 -3.08,-2.74 -8.58,0.17 -10.98,-3.65 1.13,-3.56 -3.22,-4.83 -5,-2.09 -2.09,0.26 -0.65,-4.31 -3.64,-4.93 -2.57,-2.85 -4.01,-1.28 -5.86,1.21z M36.38,480.63c-0.67,3.11 4.27,1.31 4.72,4.66 0.24,3.82 5.37,3.9 2.34,-0.08 -0.1,-3.22 -3.92,-1.83 -5.06,-4.43 -0.76,-2.02 -0.9,-1.86 -2,-0.16z m-17.16,23.16c2.57,4.06 1.45,1.37 0.13,-1.28 -0.36,0.01 0,1 -0.13,1.28z m21.84,14.81c1.27,1.79 4.99,5.58 6.22,2.03 2.26,-3.3 -3.27,-2.89 -5.23,-3.68 -1.83,-0.9 -0.88,0.54 -0.99,1.65z m91.72,18.78c0.06,3.21 2.81,-1.98 0,0z m-31.47,14.69c-3.2,2.91 -7.24,4.67 -10.56,7.38 0.22,2.75 0.99,7.64 4.67,5.15 2.5,-1.44 4.98,-2.9 7.45,-4.37 -1.84,-3.31 -0.81,-3.15 -4.55,-3.48 -4.15,0.09 1.06,-3.73 2.64,-1.62 3.74,-1.04 3.95,-2.36 1.5,-3.66 0.7,-1.08 -1,0.61 -1.16,0.59z M55.75,570.75c1.42,2.83 3.53,-1.99 0,0z m-35.78,0.34c0.53,2.46 -4.04,4.84 1.05,3.59 4.2,0.47 3.46,-4.35 0.01,-3.84 -0.35,0.08 -0.7,0.16 -1.06,0.24z m62.19,0.69c1.57,2.91 1.31,-2.03 0,0z M58.63,573.13c3.23,0.49 0.99,-3.05 0,0z m-49,0.09c-4.84,2.56 -0.44,1.81 2.29,0.58 2.89,0.16 5.05,-0.48 0.84,-1.46 -1.04,0.29 -2.08,0.58 -3.13,0.88z m7.25,1.38c1.28,0.21 -2.23,-0.59 0,0z","name":"Alaska"},"fl":{"path":"m748.38,439.94c1.69,2.92 1.5,6.12 1.16,9.34 -4.12,0.54 -2.15,-4.69 -5.56,-3.99 -6.18,-0.07 -12.34,1.13 -18.54,1.19 -10.09,0.29 -20.37,2.14 -30.33,0.64 -2.57,-1.57 -2.84,-6.15 -6.5,-5.33 -9.12,-0.12 -18.18,1.79 -27.26,2.55 -5.82,0.63 -11.62,1.37 -17.43,2.12 -1.42,3.25 2.6,4.37 4.06,6.34 0.8,2.28 -1.56,8.42 2.19,7.1 4.11,-1.2 8.08,-2.93 12.48,-2.72 3.34,-0.82 6.63,-0.73 9.89,0.45 4.09,0.8 7.77,3.09 11.41,4.98 1.77,1.94 5.5,1.87 5.97,5 -0.14,3.27 4.32,-0.94 6.5,0.53 3.19,-0.8 5.24,-3.68 7.69,-5.5 4.86,1.69 0.62,-2.9 3.27,-3.97 3.13,-0.83 6.62,-1.39 9.35,0.79 3.04,0.57 5.43,2 6.57,4.99 3.68,0.02 2.88,4.13 5.48,5.3 2.96,0.49 2.98,4.52 6.3,4.3 2.91,0.36 5.45,1.15 5.84,4.45 2.05,2.11 3.92,4.26 3.09,7.41 0.18,3.68 0.12,7.33 -1.44,10.75 0.39,3.68 1.37,7.94 3.28,10.78 2.25,-3.46 0.17,-3.87 -1.74,-6.03 2.19,-1.76 4.86,-0.22 7.3,0.16 0.82,3.15 -2.16,5.6 -3.48,8.19 -3.3,2.21 1.65,4.09 2.73,6.3 3.11,3.34 4.35,7.94 7.53,11.26 0.78,2.29 2.51,7.47 4.63,3.09 2.54,-0.24 3.88,3.44 5.28,5.41 -0.02,2.26 1.93,7.04 3.59,6.44 2.88,-0.8 6.04,0.65 8.28,2.59 2.56,3.3 4.58,6.98 4.56,11.27 1.37,2.73 4.55,0.44 5.81,-1.14 3.74,0.45 7.26,-1.25 9.22,-4.47 -1.01,-2.36 -0.57,-4.83 -0.32,-7.17 -0.04,-2.18 4.33,-3.19 2.25,-6.51 -0.98,-6.33 -0.19,-12.96 -1.87,-19.25 -2.46,-6.93 -7.54,-12.74 -10.4,-19.56 -1.51,-2.41 -4.24,-3.92 -4.62,-7.04 -0.94,-2.28 -2.67,-4.95 -0.07,-6.71 -0.39,-3.56 -4.86,-5.42 -6.84,-8.41 -5.38,-5.57 -8.29,-12.94 -12.35,-19.44 -2.15,-5.53 -4.29,-11.07 -5.91,-16.78 -3.43,0.07 -7.3,-1.03 -10.46,-0.35l-0.34,0.37 -0.26,0.29z m52.91,109.22c-1.9,4.58 0.72,0.38 0.66,-1.91 -0.22,0.64 -0.44,1.27 -0.66,1.91z m-4.69,9.91c2.56,-1.97 3.68,-6.84 1.04,-1.68 -0.35,0.56 -0.69,1.12 -1.04,1.68z m-2.25,2.22c1.46,-1.22 2.04,-2.07 0.18,-0.18l-0.18,0.18z m-5.72,4.16c-5.23,3.69 4.03,-2.14 0.33,-0.19l-0.33,0.19z m-10.72,3.22c-3.41,3.16 5.71,-0.32 4.1,-0.81 -1.8,-0.56 -2.56,-0.71 -4.1,0.81z m-4.59,3.16c0.08,0.16 0.4,-0.3 0,0z","name":"Florida"},"nh":{"path":"m862.56,94c-1.4,-0.41 -3.87,-0.72 -3.05,3 0.22,3.63 -0.73,7.84 2.23,10.59 0.33,2.78 0.08,5.36 -2.17,7.29 -0.19,2.83 -5.98,2.58 -3.35,5.32 1.16,7.35 -0.56,15.03 -0.62,22.51 1.2,1.95 0.98,4.39 0.76,6.75 -1.07,3.79 4.84,-0.05 6.89,0.06 3.93,-1.29 8.46,-1.74 12.04,-3.54 0.77,-3.1 4.37,-2.75 5.94,-4.96 2.59,-3.52 -3.01,-2.73 -2,-6.59 -3.83,0.01 -4.27,-2.46 -4.66,-5.62 -3.84,-11.98 -7.32,-24.45 -11.49,-36.1 -0.18,0.43 -0.35,0.85 -0.53,1.28z","name":"New Hampshire"},"mi":{"path":"M697.86,177.24L694.63,168.99L692.36,159.94L689.94,156.71L687.35,154.93L685.74,156.06L681.86,157.84L679.92,162.85L677.17,166.57L676.04,167.21L674.58,166.57C674.58,166.57 671.99,165.11 672.16,164.47C672.32,163.82 672.64,159.45 672.64,159.45L676.04,158.16L676.84,154.77L677.49,152.18L679.92,150.56L679.59,140.54L677.98,138.28L676.68,137.47L675.87,135.37L676.68,134.56L678.3,134.88L678.46,133.27L676.04,131L674.74,128.42L672.16,128.42L667.63,126.96L662.13,123.57L659.38,123.57L658.74,124.21L657.77,123.73L654.7,121.46L651.79,123.24L648.88,125.51L649.2,129.06L650.17,129.39L652.27,129.87L652.76,130.68L650.17,131.49L647.58,131.81L646.13,133.59L645.81,135.69L646.13,137.31L646.45,142.8L642.9,144.9L642.25,144.74L642.25,140.54L643.54,138.12L644.19,135.69L643.38,134.88L641.44,135.69L640.47,139.89L637.72,141.02L635.94,142.96L635.78,143.93L636.43,144.74L635.78,147.33L633.52,147.81L633.52,148.95L634.33,151.37L633.2,157.51L631.58,161.56L632.23,166.24L632.71,167.38L631.9,169.8L631.58,170.61L631.26,173.36L634.81,179.34L637.72,185.8L639.18,190.65L638.37,195.34L637.4,201.32L634.97,206.5L634.65,209.25L631.39,212.33L635.8,212.17L657.22,209.91L664.5,208.92L664.59,210.58L671.45,209.37L681.74,207.87L685.6,207.41L685.74,206.82L685.9,205.37L688,201.65L690,199.91L689.78,194.86L691.37,193.26L692.46,192.92L692.69,189.36L694.22,186.33L695.27,186.94L695.44,187.58L696.24,187.74L698.18,186.77L697.86,177.24z M581.62,82.06L583.45,80L585.62,79.2L590.99,75.31L593.28,74.74L593.74,75.2L588.59,80.34L585.28,82.29L583.22,83.2L581.62,82.06z M667.79,114.19L668.44,116.69L671.67,116.85L672.97,115.64C672.97,115.64 672.89,114.19 672.56,114.03C672.24,113.86 670.95,112.17 670.95,112.17L668.76,112.41L667.15,112.57L666.82,113.7L667.79,114.19z M567.49,111.21L568.21,110.63L570.96,109.82L574.51,107.56L574.51,106.59L575.16,105.94L581.14,104.97L583.57,103.03L587.93,100.93L588.09,99.64L590.03,96.73L591.81,95.92L593.1,94.14L595.37,91.88L599.73,89.46L604.42,88.97L605.55,90.1L605.23,91.07L601.51,92.04L600.06,95.11L597.79,95.92L597.31,98.35L594.88,101.58L594.56,104.17L595.37,104.65L596.34,103.52L599.89,100.61L601.19,101.9L603.45,101.9L606.68,102.87L608.14,104L609.59,107.08L612.34,109.82L616.22,109.66L617.68,108.69L619.29,109.99L620.91,110.47L622.2,109.66L623.33,109.66L624.95,108.69L628.99,105.14L632.39,104L639.02,103.68L643.54,101.74L646.13,100.45L647.58,100.61L647.58,106.27L648.07,106.59L650.98,107.4L652.92,106.91L659.06,105.3L660.19,104.17L661.65,104.65L661.65,111.6L664.88,114.67L666.17,115.32L667.47,116.29L666.17,116.61L665.37,116.29L661.65,115.81L659.55,116.45L657.28,116.29L654.05,117.75L652.27,117.75L646.45,116.45L641.28,116.61L639.34,119.2L632.39,119.85L629.96,120.66L628.83,123.73L627.54,124.86L627.05,124.7L625.6,123.08L621.07,125.51L620.42,125.51L619.29,123.89L618.48,124.05L616.54,128.42L615.57,132.46L612.39,139.46L611.22,138.42L609.85,137.39L607.9,127.1L604.36,125.73L602.31,123.45L590.19,120.7L587.33,119.67L579.1,117.5L571.21,116.36L567.49,111.21z","name":"Michigan"},"vt":{"path":"m833.16,106.59c0.19,6 4.65,11.21 3.72,17.28 -2.48,4.23 4.52,7.29 2.22,11.58 0.9,1.59 4.66,1.96 4.06,5.25 1.08,4.21 2.86,8.34 1.84,12.76 3.35,-0.51 7.06,-1.17 10.13,-1.97 -0.21,-2.13 1.51,-5.75 -0.53,-7.81 0.2,-7.64 1.01,-15.26 1.13,-22.91 -3.25,-2.41 0.32,-3.79 2.12,-5.18 1.96,-2.28 3.9,-5.07 2.6,-8.1 -2.62,-1.63 -1.02,-5.94 -2.39,-7.22 -8.3,2.1 -16.59,4.21 -24.89,6.31z","name":"Vermont"},"me":{"path":"m889.88,40.22c-2.16,1.31 -3.69,2.74 -4.84,4.69 -2.29,0.6 -4.99,-1.37 -4.88,-3.94 -2.97,-0.82 -3.33,3.68 -4.37,5.71 -1.09,4.29 -3.27,8.39 -3.97,12.69 -0.06,3.04 1,6.63 -1.35,9.09 0.08,2.92 -0.75,6.18 2,8.16 -1.37,5.7 -6.23,10.36 -5.41,16.56 -4.27,-2.21 -1.74,2.47 -1.09,4.73 3.51,11.08 7.19,22.16 10.25,33.35 0.21,3.01 5.81,1.35 4.53,5.7 2.9,2 2.06,-3.92 2.66,-5.87 -1.01,-3.29 2.7,-4.63 0.66,-7.62 0.94,-1.05 2.92,-5.9 4.61,-3.46 2.03,1.03 5.28,-1.89 6.74,-3.19 -0.98,-4.02 4.21,-1.75 4.73,-5.32 -1.11,-2.61 0.74,-5.45 -0.57,-7.44 -2.42,-1.59 3.53,-4.63 3.31,-0.78 2.27,0.48 2.15,2.8 3.66,3.93 1.94,-2.82 -2.15,-3.81 0.35,-6.03 2.43,-0.81 3.1,-3.96 6,-3.31 -0.17,1.46 1.03,3.34 2.26,1.38 2.94,-2.9 5.24,-7.08 9.37,-8.34 1.17,-2.61 3.34,-5.74 0.71,-8.24 -0.55,-1.64 -3.68,-4.84 -4.15,-2.58 -0.75,2.6 -4.66,-0.65 -4.92,-2.22 0.1,-2.8 0.29,-7.17 -3.8,-5.81 -3.96,1.36 -3.64,-3.04 -4.69,-5.61C905.22,58.3 902.75,50.15 900.28,42c-2.86,-1.25 -5.71,-2.92 -8.81,-3.38 -0.53,0.53 -1.06,1.06 -1.59,1.59z m20.47,61c-2.81,1.7 1.87,5.16 1.13,1.22 1.48,-0.9 0.13,-2.4 -1.13,-1.22z m-7.81,7.81c3.16,6.67 2.63,-3.59 0,0z","name":"Maine"},"ri":{"path":"m871,164.28c1.15,4.66 2.29,9.31 3.44,13.97 2.56,-0.49 4.66,-2.29 5.84,-4.56 4.17,0.76 4,-2.64 1.51,-4.97 -1.79,-1.94 -3.16,-5.31 -5.74,-5.92 -1.68,0.49 -3.37,0.99 -5.05,1.48z","name":"Rhode Island"},"ny":{"path":"m825.56,108.66c-2.7,1.12 -5.45,1.68 -8.33,1.43 -5.07,0.72 -10.17,2.73 -12.92,7.31 -2.84,3.43 -4.89,7.49 -7.18,11.2 -1.65,2.36 -5.82,3.73 -5.55,6.84 -0.17,3.56 5.77,0.73 4.43,4.38 -2.69,2.3 0.8,4.23 0.56,6.59 0.5,3.47 -4.26,1.99 -5.36,4 -1.62,2.71 -3.35,6.62 -7.22,6.05 -3.04,-0.43 -5.35,2.05 -7.98,2.63 -2.5,-0.75 -4.7,-2.05 -7.59,-1.31 -5.31,0.21 -10.62,1.98 -15.23,4.53 -0.29,1.77 0.61,6.25 3.17,6.14 1.55,2.48 2.09,4.96 -0.63,6.72 -1.51,1.76 -1.8,4.25 -4.16,5.3 -1.93,1.14 -2.68,3.51 -4.8,4.54 0.33,3.07 -0.22,7.29 4.08,5.12 22.14,-4.26 44.26,-8.68 66.23,-13.74 0.98,3.85 5.67,1.32 6.44,4 0.64,2.93 1.36,7.4 5.33,6.88 3.14,1.9 6.9,3.68 10.69,4.22 2.71,0.47 7.18,1.43 6.44,5.06 -0.33,1.97 -1.62,7.56 1.97,5.93 5.3,-1.65 10.96,-2.84 15.06,-6.85 3.23,-2.49 6.76,-4.64 9.35,-7.86 -2.99,-2.44 -4.65,0.46 -6.81,2.42 -2.91,1.56 -6.01,3.51 -9.16,4.32 -2.6,-0.63 -4.83,-0.86 -6.18,2.07 -1.03,2.04 -4.86,2.98 -3.98,-0.15 4.26,-1.87 -2.17,-3.97 -0.33,-6.21 1.19,-3.13 0.56,-6.87 0.42,-10.21 -1.43,-7.38 -3.69,-14.76 -2.54,-22.36 -0.08,-4.46 1.55,-8.97 -0.51,-13.21 -1.22,-2.56 -0.47,-6.83 -4.05,-7.34 -2.99,-0.66 0.75,-4.31 -1.57,-6.2 -1.7,-2.43 -3.17,-4.91 -1.54,-7.81 0.38,-5.77 -3.83,-10.57 -3.55,-16.35 -2.32,0.65 -4.65,1.29 -6.97,1.94z","name":"New York"},"pa":{"path":"m798.88,181.63c-17.5,3.38 -34.87,7.42 -52.47,10.28 -0.61,-2 0.48,-8.42 -2.41,-4.31 -2.18,2.73 -5.48,3.74 -8.09,5.97 1.52,9.75 2.63,19.57 5.44,29.05 1.14,6.09 2.27,12.17 3.41,18.26 8.85,-1.42 17.79,-2.25 26.51,-4.41 16.39,-3.45 33.03,-6.46 49.33,-9.87 2.48,-3.07 8.03,-1.69 8.97,-6.19 0.64,-2.36 4.86,-3.99 4.33,-5.9 -2.3,-1.89 -5.94,-2.77 -6.39,-6.13 -3.14,1.09 -4.42,-3.94 -3.12,-5.32 3.86,-1.1 -0.49,-3.68 0.55,-5.96 2.52,-1.88 1.12,-5.15 2.81,-7.07 3.87,-2.7 -2.98,-1.1 -3.72,-3.99 -1.35,-2.18 -0.28,-7.24 -4.16,-5.92 -2.34,-1.13 -3.87,-3.75 -7.09,-1.7 -4.64,1.07 -9.28,2.15 -13.92,3.22z","name":"Pennsylvania"},"nj":{"path":"m827.84,191.34c1.03,2.99 -1.82,4.8 -2.06,7.47 2.86,1.63 0.49,4.87 -0.92,5.73 -0.41,3.86 4.01,1.68 4.16,5.14 1.37,2.19 4.72,3.02 6.26,4.94 -0.15,2.61 -3.85,3.5 -4.69,6.06 -0.26,3.07 -4.09,3.19 -4.18,5.96 -0.99,2.38 -0.74,5.09 1.7,6.47 2.85,2.76 6.86,3.99 10.73,4.38 0.48,1.55 -1.84,7.18 1.1,3.59 1.5,-2.42 0.59,-5.95 3.11,-8.01 2.5,-4.08 5.03,-8.84 4.88,-13.61 -1.35,-4.07 0.8,-9.01 -1.81,-12.82 -1.1,1.32 -6.17,1.23 -4.13,-0.8 2.39,-1.39 3.37,-3.62 2.39,-6.31 0.21,-2.31 1.58,-5.42 -1.69,-6.19 -4.35,-1.15 -8.82,-2.13 -12.88,-4.26 -0.66,0.75 -1.31,1.5 -1.97,2.25z","name":"New Jersey"},"de":{"path":"m824.88,225.34c-3.72,0.25 -3.47,3.52 -1.91,6.13 3.35,6.89 3.86,14.58 6.03,21.81 3.45,0.11 6.81,-0.49 10.16,-1.25 -1.2,-2.17 -0.68,-6.38 -3.32,-6.38 -2.9,-1.2 -4.17,-3.69 -4.9,-6.58 -0.91,-3.11 -3.62,-4.96 -5.48,-7.35 -1.85,-1.82 0.94,-5.5 -0.26,-6.47l-0.33,0.09z","name":"Delaware"},"md":{"path":"m813.59,229.19c-17.31,3.18 -34.53,6.83 -51.78,10.28 0.74,3.02 1.31,6.08 1.78,9.16 2.14,-1.9 3.29,-5.35 6.59,-5.34 2.14,-1.85 2.67,-5.25 5.77,-3.55 3.46,0.18 5.43,-5.35 9.01,-3.85 2.63,1.63 5.66,2.79 7.34,5.59 4.19,0.11 3.68,3.73 5.74,4.96 2.73,1.11 5.02,1.18 6.38,-0.53 4.29,1.38 2.24,3.74 1.44,6.9 0.09,2.97 -3.7,4.92 -1.66,7.97 3.1,1.31 6.4,1.2 9.63,1.4 2.17,1.58 6.83,1.03 3.79,-2.1 0.41,-2.74 -3.08,-3.35 -3.32,-6.04 -1.7,-2.67 -1.42,-5.47 -0.36,-8.32 1.68,-2.42 -2.83,-3.82 -0.4,-5.41 1.25,-1.53 0.43,-4.16 2.98,-4.7 1.62,-3.02 5.1,-1.45 2.35,1.02 -2.54,2.98 -0.81,4.5 0.57,6.3 1.41,3.55 -0.68,5.07 -1.53,7.31 -0.22,-0.81 3.62,-1.01 3.22,1.79 -3.15,1.64 -1.45,6.12 1.09,7.31 2.98,0.99 5.58,-1.8 6.98,2.14 1.5,3.75 4.92,0.81 7.41,-0.02 2.74,-1.21 3.47,-4.93 2.78,-7.7 -1.13,-1.58 -4.82,0.92 -7.13,0.4 -3.86,1.26 -4.9,-1.25 -5.28,-4.64 -1.68,-5.97 -2.14,-12.33 -5.16,-17.9 -0.04,-4.32 -2.71,-4.2 -6.07,-2.91 -0.73,0.16 -1.45,0.31 -2.18,0.47z m10.94,32.59c1.32,0.99 0.59,4.97 2.06,4.63 -0.48,-1.31 -0.36,-4.99 -2.06,-4.63z","name":"Maryland"},"va":{"path":"m792.88,242.88c-0.16,1.46 0.24,5.89 -2.4,4.29 -2.58,-0.67 -6.42,-3.2 -8.23,-2.73 0.7,3.72 -1.46,6.77 -2.99,9.94 -3.05,1.14 -2.29,5.83 -5.84,5.58 -1.62,1.74 -1.47,5.31 -2.45,7.73 -3.09,1.14 -5.37,-0.48 -7.28,-1.75 0.11,6.5 -3.72,11.95 -5.91,17.84 -1.69,1.73 1.19,3.8 -0.74,5.77 -1.35,3.56 -3.79,2.72 -6.19,4.19 -2.72,1.1 -4.9,0.5 -5.4,4.61 -2.07,1.14 -4.83,2.63 -6.91,0.47 -2.38,1.51 -5.02,3.21 -7.81,1.6 -2.69,-0.01 -3.9,-6.55 -6.07,-2.94 -3.27,4.09 -7.89,7.48 -10.21,12.09 0.43,3.25 -4.46,3.32 -6.42,5.15 -4.27,1.95 3.62,-0.11 5.16,-0.07 5.56,-0.79 11.14,-1.37 16.76,-1.36 1.95,-2.65 4.98,-1.81 7.77,-1.65 7.86,-0.32 15.65,-2.12 23.48,-2.99 12.85,-1.4 25.44,-4.27 38.04,-7.05 11.65,-2.52 23.3,-5.03 34.96,-7.55 -1.64,-2.66 -2.75,-6.67 -6.42,-4.14 -1.99,2.03 -6.61,-1.82 -2.7,-2.48 2.65,-1.62 -1.75,-4.07 -1.8,-5.97 -2.73,-0.62 -2.88,-5.12 0.54,-3.6 -0.17,-1.37 -1.24,-3.62 -1.62,-5.68 1.47,-3.51 -0.84,-4.97 -3.72,-5.16 0.31,-3.42 -2.9,-2.93 -5.22,-3.97 -3.33,0.21 -7.06,-0.25 -9.91,-1.66 -1.22,-2.41 -0.91,-5.12 1.25,-6.88 1.39,-2.83 -0.28,-5.7 -3.3,-6.27 -2.65,-0.83 -6.97,-0.29 -5.73,-4.3 -0.83,-0.3 -2.05,-1.06 -2.69,-1.06z m39.16,21.59c0.44,4.71 -3.15,8.7 -2.62,13.48 -0.34,4.11 2.64,5.72 3.48,0.92 1.71,-3.04 -0.23,-6.47 0.8,-9.73 0.4,-2.53 3.66,-3.88 3.52,-6.73 -1.73,0.69 -3.46,1.38 -5.19,2.06z","name":"Virginia"},"wv":{"path":"m739.75,223.25c-1.6,2.23 1.3,5.02 0.25,7.75 -0.18,4.04 -0.63,8.11 -0.84,12.13 -1.94,3.58 -4.43,7.35 -8.16,9.13 -3.15,-1.33 -3.92,3.25 -5.76,4.98 -1.56,2.28 2.64,4.93 -0.3,6.69 -2.57,3.58 -2.6,-4.8 -4.46,-0.71 -1.32,2.59 0.02,6.02 -1.35,8.33 -1.82,1.54 -0.53,5.19 -4.16,4.81 -2.23,0.13 -1.45,6.19 1,6.81 2.24,1.47 2.49,4.74 5.5,5.92 1.92,1.96 2.28,5.18 5.39,6.05 1.64,2.19 3.07,4.96 6.25,4.88 2.63,0.5 4.77,-3.86 7.22,-1.35 1.49,0.81 3.93,-0.57 4.58,-1.83 0.43,-4.57 3.42,-2.71 6.03,-4.39 2.39,-0.94 4.82,-0.98 5.62,-4.44 -1.26,-2.59 0.3,-5 1.56,-7.64 2.23,-4.81 4.72,-9.61 4.67,-15.05 2.65,-2.31 3.72,3.56 7.05,1.41 1.64,-1.77 1.12,-5.67 2.6,-7.59 3.47,0.39 2.97,-3.96 5.76,-5.21 2.29,-3.11 3.52,-6.8 3.06,-10.7 1.06,-1.29 5.1,1.62 7.23,2.15 3.3,3.35 4.34,-1.98 2.85,-4.05 -2,-2.28 -5.12,-3.7 -7.62,-4.75 -3.31,0.98 -5.44,5.47 -9.38,3.97 -1.86,-0.23 -2.38,3.98 -4.86,3.88 -2.89,0.71 -3.79,4.38 -6.03,6.22 -1.1,-0.06 -0.99,-4.82 -1.62,-6.64 -0.01,-3.93 -1.77,-5.3 -5.48,-3.82 -4.21,0.6 -8.41,1.23 -12.61,1.91 -1.17,-6.45 -2.29,-12.92 -3.44,-19.38l-0.35,0.35 -0.18,0.18z","name":"West Virginia"},"oh":{"path":"m729.5,197.78c-4.85,2.06 -7.38,6.9 -11.47,9.97 -4.08,0.86 -8.09,1.75 -11.72,3.88 -3.41,1.61 -4.39,-4.09 -7.67,-2.63 -3.13,1.35 -5.49,-1.1 -8.11,-2.41 -8.6,1.15 -17.15,2.64 -25.66,4.38 1.45,17.83 4.12,35.53 5.87,53.33 -0.69,3.82 4.06,2.26 6.23,1.48 2.74,0.41 4.83,2.16 5.48,4.94 1.26,2.48 5.82,-0.87 6.96,2.54 2.19,1.53 4.46,-2.33 7.03,-0.58 2.52,0.04 5.62,1.51 6.84,-1.56 1.49,-0.55 5.37,-3.85 5.41,-0.71 0.38,2.53 3.82,3.57 5.77,4.7 3.53,0.63 2.32,-3.91 4.21,-5.51 -0.11,-2.74 0.21,-5.73 1.39,-8.13 2.53,-2.81 3.8,4.53 4.98,0.39 -2.02,-2.27 -0.99,-5.41 0.93,-7.41 1.07,-4.06 4.05,-2.41 6.5,-4.39 2.93,-3.16 6.59,-6.57 5.97,-11.27 0.44,-4.71 1.18,-9.75 -0.53,-14.23 1.47,-2.48 2.58,-4.29 0.96,-7.33 -2.04,-7.53 -2.56,-15.37 -3.93,-23.04 -1.81,1.2 -3.63,2.4 -5.44,3.59z","name":"Ohio"},"in":{"path":"m658.66,210.31c-9.12,0.93 -18.35,1.98 -27.41,2.68 -2.6,0.39 -4.21,5.08 -6.89,2.98 -3.83,-2.84 -2.64,1.83 -2.41,4.45 1.1,14.81 2.73,29.61 3.44,44.42 -0.76,3.69 -1.39,7.89 1.36,10.91 0.1,2.99 1.4,6.28 -1.14,8.65 -1.83,2.73 -2.55,6.09 -5.02,8.42 0.09,2.08 -2.02,8.2 1.63,5.16 3.49,-0.6 7.25,-1.53 10.69,-1.34 2.36,4.08 2.67,-0.62 5.26,-1.29 2.03,-2.62 4.78,2.05 5.34,1.04 -1.26,-3.41 3.05,-3.77 5.1,-5.22 1.09,0.63 6.05,3.38 5.3,-0.64 -0.46,-2.47 2.02,-4.71 3.65,-6.34 3.11,-1.39 4.33,-3.9 4.16,-7.23 1.83,-1 4.93,-1.01 6.97,-2.47 4.23,-1.03 0.26,-3.48 1.22,-5.92 -0.83,-12.56 -2.8,-25.13 -4.08,-37.69 -0.85,-6.99 -1.44,-14.01 -2.14,-21.02 -1.68,0.16 -3.35,0.31 -5.03,0.47z","name":"Indiana"},"il":{"path":"m569.75,200.44c-0.29,2.58 4.2,1.83 3.73,5.07 2.07,2.09 5.71,4.21 4.38,7.77 -0.31,3.04 -2.61,5.44 -3.08,8.4 -2.38,2.71 -6.06,2.98 -9.31,3.94 -1.61,2.47 -1.05,4.91 1.28,6.47 0.63,3.25 -1.08,5.07 -2.74,7.38 1.41,3.63 -2.39,2.86 -3.56,5.02 1.08,3.12 -2.11,3.8 -2.53,6.64 0.19,3.95 1.33,8.21 3.28,11.58 3.68,3.96 7.38,7.9 12.21,10.47 -0.61,2.88 -0.64,6.7 3.43,5.71 2.05,0 6.18,0.38 6.26,2.68 -0.19,4.39 -3.6,8.24 -3.28,12.53 1.6,3.83 5.33,6.26 8.59,8.42 3.37,-0.29 5.36,1.27 5.9,4.6 1.01,2.64 3.84,4.73 1.73,7.67 0.55,1.74 2.58,7.7 4.31,4.05 1.21,-2.98 5.41,-4.78 8.07,-2.46 3.1,2.46 5.94,0.47 3.13,-2.8 -0.98,-3.39 2.61,-4.96 5.37,-5.33 1.01,-1.55 -1.6,-4.46 1.4,-5.97 1.8,-3.97 -0.56,-9.39 3.32,-12.49 1.43,-2.97 3.23,-5.97 4.4,-8.97 0.13,-3 -0.7,-5.7 -2.34,-8.16 -0.45,-4.59 1.31,-9.09 0.02,-13.65 -1.16,-15 -2.22,-30.05 -3.67,-45.01 -1.02,-3.1 -1.61,-6.46 -4.04,-8.77 -2.27,-1.83 -0.51,-5.93 -1.97,-7.32 -14.76,0.83 -29.52,1.67 -44.28,2.5z","name":"Illinois"},"ct":{"path":"m865.78,165.41c-6.91,1.54 -13.81,3.08 -20.72,4.63 2.17,6.2 2.74,12.83 2.44,19.34 -2.62,4.3 2.61,2.38 3.97,-0.21 2.09,-1.89 4.19,-3.71 5.99,-5.88 2.06,1.35 4.78,-1.86 7.44,-1.46 2.98,-0.68 5.69,-2.24 8.56,-3.26 -1.15,-4.67 -2.29,-9.33 -3.44,-14 -1.42,0.28 -2.83,0.56 -4.25,0.84z","name":"Connecticut"},"wi":{"path":"m559.53,104.97c-4.06,2.75 -8.71,4.92 -13.53,5.84 -2.88,-1.08 -5.54,-1.12 -5.57,2.68 -0.48,3.34 0.51,7.03 -0.47,10.17 -2.02,3.26 -6.91,4.03 -7.36,8.38 -2.63,2.78 2.21,3.06 2.23,5.53 1.79,2.9 -2.13,4.74 -1.33,7.65 0.29,2.93 -0.4,6.49 1.14,8.93 1.33,3.48 5.88,0.21 6.64,3.93 1.56,2.26 5.47,1.03 6.19,4.78 2.15,5.1 9.7,4.85 11.21,10.39 0.68,3.38 0.35,7.34 1.94,10.32 3.26,1.05 1.94,4.34 0.25,6.21 -0.79,3.96 2.53,8.34 6.75,8.25 2.28,1.6 4.86,1.65 7.83,1.19 13.03,-0.77 26.07,-1.53 39.1,-2.3 -0.02,-4.45 -1.98,-8.61 -1.86,-13.13 -1.7,-2.04 -0.86,-4.17 -0.04,-6.39 0.32,-2.84 3.07,-4.93 1.51,-7.87 -1.05,-2.94 -0.88,-6.21 1.73,-8.27 -0.2,-2.83 -0.5,-5.03 -0.16,-7.93 -1.14,-4.2 2.64,-7.5 3.69,-11.36 0.92,-1.13 3.15,-8.34 0.73,-4.93 -2.65,3.81 -4.99,8.01 -8.18,11.29 -0.86,2.06 -3.21,4.55 -5.21,4.5 -2.57,-1.26 0.28,-4.49 0.9,-6.41 0.47,-2.94 3.2,-4.25 4.09,-6.85 -3.31,-1.29 -2.77,-5.03 -3.54,-7.92 0.02,-3.09 -1.23,-5.08 -4.29,-5.57 -2.14,-3.67 -7.04,-2.78 -10.59,-4.12 -7.13,-1.87 -14.21,-4.39 -21.67,-4.99 -2.48,-0.54 -2.84,-5.51 -5.51,-4.73 -1.71,-1.54 -3.85,-0.7 -5.82,0.13 -2.8,-1.32 0.68,-4.59 1.5,-6.38 2.18,-1.34 -1.53,-2.14 -2.31,-1z","name":"Wisconsin"},"nc":{"path":"m830.06,295.97c-18.3,3.8 -36.53,8 -54.86,11.65 -12.74,1.51 -25.38,4.07 -38.18,4.94 -3.32,-0.82 -1.17,3.72 -2.5,5.53 -2.62,1.34 -3.49,4.59 -5.03,6.38 -3.24,-1.36 -5.07,1.46 -6.34,3.97 -1.09,-0.57 -2.96,0.03 -3.41,-1.41 -2.02,1.96 -4.37,3.73 -4.31,6.81 -3.66,1.1 -6.31,3.82 -9.28,5.96 -2.64,0.94 -5.76,2.16 -7.4,4.35 0.73,4.06 -2.98,3.3 -5.1,5.29 -1.98,4.69 2.74,2.66 5.58,2.5 6.41,-1.19 13.32,-0.49 19.18,-3.73 5.04,-1.9 9.41,-5.9 15.06,-5.67 6.5,-0.64 13.15,-0.6 19.62,-0.69 2.99,0.53 3.36,4.79 5.58,5.01 5.37,-0.81 10.87,-1.67 16.25,-1.79 5.38,1.36 9.61,5.45 14.52,7.93 3.59,2.64 6.93,5.66 10.43,8.44 3.15,-0.86 6.32,-1.58 9.59,-1.72 1.06,-4.55 2.04,-9.29 5.39,-12.78 4.2,-4.27 9.23,-8.29 15.33,-9.29 2.91,1.95 3.69,-2.9 5.27,-4.53 2.72,-5 -2.44,3.91 -2.46,-1.22 -3.87,0.7 -5.43,-0.26 -3.29,-4 2.77,-4.25 -2.73,-2.51 -2.12,-6.02 -1.42,-3.76 2.84,2.19 5.06,0.81 2.81,0.12 5.1,-1.87 5.59,-4.6 0.45,-2.9 4.59,-2.7 3.28,-6.48 -4.02,-2.43 4.25,-0.66 0.4,-3.93 -3.52,-3.44 -5.24,-8.33 -7.23,-12.76 -1.54,0.35 -3.08,0.71 -4.63,1.06z m17.13,23.72c1.55,2.61 -4.64,4.26 -0.52,2.69 1.38,-1.92 0.21,-5.22 0.24,-7.62 -0.74,-2.05 0.37,4.57 0.28,4.94z","name":"North Carolina"},"dc":{"path":"m803.44,248.16c2.67,3.43 3.85,-1.02 0.55,-0.75l-0.29,0.4 -0.25,0.35z","name":"District of Columbia"},"ma":{"path":"m877.59,144.41c-1.04,3.1 -4.01,3.5 -6.79,4.13 -8.62,2.32 -17.17,4.6 -25.96,6.12 -0.11,4.77 -1.17,9.59 -0.03,14.31 10.66,-2.6 21.54,-4.29 32,-7.44 3.57,2.81 6.01,6.73 8.28,10.59 2.13,-0.78 0.01,-5.15 3.77,-5.38 2.93,-3.28 1.83,4.78 3.17,2.62 2.13,-3.09 6.1,-3.9 9.41,-5.21 -0.11,-3.41 -2.21,-8.55 -6.38,-7.53 1.64,-0.1 4.89,0.87 4.91,3.82 0.85,2.24 -2.55,3.71 -4.35,4.24 -3.37,0.51 -4.99,-1.76 -6.32,-4.47 -1.38,-2.05 -3.58,-6.56 -6.3,-3.6 -1.89,-1.72 -3.13,-4.04 -1.33,-6.3 2.3,-2.34 1.23,-6.2 -1.28,-7.16 -0.93,0.41 -1.86,0.82 -2.79,1.24z M902.25,172.69c-1.6,2.76 3.05,-2.44 0.08,-0.32l-0.08,0.32z m-11.28,1.28c1.59,0.78 6.09,-2.26 1.78,-2.03 -0.59,0.68 -1.19,1.35 -1.78,2.03z","name":"Massachusetts"},"tn":{"path":"m730.41,314.34c-8.87,-0.11 -17.76,1.5 -26.57,2.73c-10.24,2.86 -20.99,2.66 -31.48,4.02c-16.34,1.45 -32.65,3.29 -48.96,4.95c-4.57,-1.71 -0.43,5.74 -5.06,4.14c-6.97,0.06 -13.87,1.23 -20.84,0.71c-0.95,4.26 -1.37,9.04 -3.6,12.76c1.03276,2.6246 -1.94104,7.30425 -2.59092,9.90471c-2.52529,1.78965 -2.61104,1.92035 -0.46104,4.90035c3.07759,1.94598 -1.38459,5.12506 1.90081,3.86506c33.91,-3.26 65.53115,-6.30012 99.44115,-9.56012c-0.23,-2.54 0.72,-5.31 3.53,-5.69c3.11,-0.4 0.99,-5.41 4.88,-5.81c2.77,-2.02 6.49,-2.19 8.62,-5.18c1.76,-2.26 6.31,-1.64 5.78,-5.38c1.19,-1.77 3.1,-3.84 5.03,-4.85c1.04,-0.39 0.28,1.78 1.72,1.19c2.38,0.56 2.2,-4.36 5.22,-3.86c3.3,1.27 2.68,-2.92 4.96,-4.18c2.05,-0.94 3.81,-6.68 0.92,-6.59c-0.81,0.64 -1.63,1.27 -2.44,1.91l0,0.02z","name":"Tennessee"},"ar":{"path":"m509.47,335.31c1.73,4.9 1.5,10.02 1.53,15.12c2.15,12.21 1.13,24.64 1.47,36.97c0.02,3.71 0.04,7.42 0.06,11.13c2.06,3.2 5.05,-1.45 7.69,1.47c1.53,1.76 -0.88,7.54 2.97,6.49c17.61,-0.36 35.23,-0.72 52.84,-1.08c1.97,-2.6 0.41,-5.9 -1.28,-8.22c3.3,-1.61 -1.59,-3.96 0.84,-6.53c0.75,-2.77 0.62,-6.34 3.78,-7.69c-1.88,-3.07 2.08,-5.24 3.19,-7.88c3.77,-0.38 1.58,-3.3 2.64,-5.42c1.12,-2.67 2.56,-5.28 4.85,-6.58c1.2,-4.12 0.21,-2.67 -1.53,-5.61c-2.76,-3.32 1.95,-3.50023 2.36,-6.84c0.17988,-0.90552 3.08012,-6.46012 1.22,-6.75c-2.65,0.85 -5.34,-0.18 -8.02,-0.33c-0.09,-3.38 4.4,-3.88 4.22,-7.3c0.58,-3.87 -3.58,-3.68 -6.34,-3.26c-24.17,0.77 -48.34,1.54 -72.5,2.31l0.01,0z","name":"Arkansas"},"mo":{"path":"m490.44,245.63c-2.39,-0.46 -0.19,4.05 0.07,5.6 2.45,3.32 4.51,7.86 8.55,9.22 2.81,-0.24 3.61,2.67 2.79,4.84 -3.22,1.64 -1.72,5.03 0.19,7.07 0.9,2.55 4.61,3.05 4.89,5.61 2.1,12.97 1.12,26.14 1.51,39.22 0,5.72 0.08,11.44 0.72,17.13 24.99,-0.94 49.98,-1.8 74.97,-2.51 3.02,-1.12 4.35,1.72 5.31,3.98 0.52,3.48 -2.86,4.46 -4.14,6.86 2.37,0.64 5.57,0.65 8.21,-0.08 1.46,-3.59 1.87,-7.45 2.38,-11.22 0.84,-2.83 5.27,-2.89 4.61,-6.03 1.37,-2.94 0.14,-4.6 -2.22,-4.28 -2.15,-1.81 -2.84,-5.03 -2.86,-7.6 1.45,-2.84 -2.08,-5.07 -2.44,-7.89 -0.66,-3.24 -5.34,-0.87 -6.89,-3.66 -2.64,-2.34 -6.24,-3.94 -6.91,-7.76 -0.94,-3.21 1.52,-6.47 2.17,-9.64 2.2,-3.53 -1.34,-4.7 -4.33,-4.5 -2.66,0.39 -5.34,-1.15 -4.81,-4.1 0.86,-4.07 -4.71,-4.05 -6.43,-6.93 -2.7,-3.4 -6.72,-6.05 -7.25,-10.67 -1.1,-3.16 -2.12,-6.86 -0.62,-10.06 -2.3,-1.34 -2.28,-5.77 -5.37,-4.89 -20.69,0.77 -41.38,1.53 -62.06,2.3z","name":"Missouri"},"ga":{"path":"m672.78,356c-0.74,7.06 4.28,12.69 5.29,19.4 1.36,6.57 3.44,12.96 5.03,19.44 0.94,4.88 2.17,9.95 5.53,13.75 -0.85,3.5 3.37,3.17 2.59,6.44 -1.89,4.45 -3.57,9.65 -0.84,14.13 0.05,2.63 0.94,5.4 -0.38,7.88 2.95,0.94 1.45,4.01 3.07,6.01 1.35,2.67 3.68,4.75 6.83,4 12.35,-0.01 24.69,-1.31 37.03,-1.92 3.32,-0.58 6.67,-0.74 10.04,-0.59 -0.78,4.24 3.04,4.15 2.09,-0.09 -0.9,-2.14 -2.94,-6.23 0.59,-6.62 3.2,0.5 6.42,0.91 9.66,1.02 -0.84,-3.8 -0.8,-7.57 0.5,-11.27 0.2,-3.54 2.62,-6.73 2.21,-10.21 -0.72,-2.93 3.26,-5.26 2.85,-8.05 -2.19,1.37 -5.29,-0.71 -5.34,-3.19 -0.56,-3.12 -2.71,-5.83 -6.03,-6.06 -1.33,-3.9 -2.62,-8.17 -4.99,-11.43 -3.12,-1.07 -6.13,-2.99 -7.17,-6.29 -2.06,-2.33 -5.23,-3.21 -6.66,-6.16 -2.08,-2.2 -5.24,-2.83 -7.66,-4.19 -0.76,-2.53 -3.21,-4.09 -3.94,-6.67 -1.36,-2.63 -2.97,-4.65 -6.15,-3.77 -2.33,-1.57 -7.15,-3.38 -5.31,-6.97 2.02,-2.01 3.76,-4.11 -0.8,-3.11 -12.68,1.51 -25.37,3.01 -38.05,4.52z","name":"Georgia"},"sc":{"path":"m737.03,343.19c-4.26,0.4 -8.64,0.43 -12.24,3.07 -3.2,1.75 -6.48,3.19 -9.88,4.49 2.21,3.31 -4.28,2.74 -2.34,6.44 2.27,2.24 5.2,4.13 8.5,3.28 2.53,3.15 3.83,6.94 6.53,9.88 0.91,2.76 5.13,2.06 6.85,4.46 2.18,1.38 2.96,4.25 5.62,5.01 2.99,1.95 3.36,6.38 7.26,7.24 3.61,0.62 3.77,4.77 5.34,7.38 0.38,3.35 2.02,4.84 4.79,5.96 3.36,1.79 1.76,7.23 5.67,8.16 3.63,-1.38 5.8,-4.63 8.38,-7.34 -2.35,-3.93 0.29,-3.32 3.01,-4.44 1.95,-2.4 5.02,-3.3 6.25,-6.28 2.17,-2 3.86,-4.52 5.4,-6.9 2.81,-0.17 3.42,-3.58 4.92,-5.03 -0.28,-4.13 1.3,-7.89 3.12,-11.47 1.03,-2.11 7.03,-4.5 3.47,-6.34 -5.97,-5.35 -12.78,-9.5 -19.71,-13.47 -4.45,-2.68 -9.74,-0.07 -14.57,-0.06 -2.57,-0.23 -6.63,2.48 -7.32,-1.28 -1.66,-4.5 -6.93,-2.82 -10.63,-2.96 -2.8,0.07 -5.61,0.14 -8.41,0.21z","name":"South Carolina"},"ky":{"path":"m675,267.5c-2.76,-0.77 -6,1.11 -3.38,3.78 1.52,3.15 -3.12,4.12 -5.19,5.27 -2.94,0.53 -4.71,1.29 -4.3,4.82 -1.15,2.66 -5.3,3.24 -6.32,6.32 -2.16,1.4 0.74,6.22 -2.84,5.92 -3.06,0.61 -4.36,-2.79 -7.09,0.11 -2.26,0.51 -1.1,6.98 -3.85,3.1 -2.27,-2.54 -5.57,0.14 -6.16,2.81 -1.91,1.07 -3.4,-3.73 -6.02,-1.91 -3.32,0.61 -7.48,0.47 -9.92,2.91 0.08,2.65 -3.39,3.78 -1.7,6.05 2.34,2.66 -2.23,2.68 -3.86,3.3 -3.57,1.35 -0.68,4.35 -0.76,6.72 0.33,3.45 -3.76,1.44 -5.49,0.72 -2.5,-2.29 -6.26,-0.38 -7.13,2.53 2.86,2.28 -0.04,4.76 0.41,7.66 -3.47,2.04 -3.19,2.73 0.94,2.35 5.84,0.01 11.64,-0.95 17.5,-0.76 -0.7,-3.74 0.98,-4.99 4.56,-4.19 24.33,-3.01 48.82,-4.7 73.16,-7.43 4.3,-0.7 8.2,-2.38 11.75,-4.88 3.3,-0.8 4.04,-2.71 5.12,-5.35 3.46,-4.09 7.13,-8.06 10.79,-12 -3.27,-1.24 -3.03,-5.51 -6.21,-6.95 -2.6,-1.25 -2.07,-4.66 -5.16,-5.36 -2.38,-2.64 0.8,-7.28 -3.02,-8.87 -3.02,-0.01 -2.37,-4.65 -4.57,-3.51 -2.95,0.61 -3.67,4.78 -7.02,3.29 -2.69,-0.23 -5.51,-1.19 -7.82,0.71 -3,0.83 -3.99,-3.61 -7.44,-2.06 -3.51,0.82 -2.17,-5.19 -5.65,-5.26C677.17,266.43 676.21,267.17 675,267.5z","name":"Kentucky"},"al":{"path":"m628.53,359.63c-0.2,14.37 0.12,28.75 -0.54,43.12 -0.04,9.01 -0.88,18.1 -0.07,27.07 1.55,10 2.94,20.01 3.85,30.09 3.07,1.09 3.69,-1.92 4.4,-4.18 -0.3,-3.89 4.27,-3.02 4.89,-0.04 0.72,2.06 4.08,5.27 0.77,6.65 -0.15,0.92 6.17,-0.9 5.88,-2.89 -0.44,-3.01 0.64,-6.86 -2.87,-8.19 -2.29,-0.88 -3.03,-5.59 -0.32,-5.67 14.08,-1.86 28.21,-3.59 42.35,-4.8 2.7,1.07 6.76,-0.25 2.97,-2.5 -1.8,-2 0.95,-5.03 -0.27,-7.65 -0.31,-3.1 -2.63,-5.9 -1.31,-9.15 0.01,-2.92 2.49,-5.36 1.93,-8.3 -3.52,-0.45 -1.34,-5.11 -4.26,-6.7 -3.48,-5.82 -3.36,-13.04 -5.96,-19.21 -2.02,-8.09 -3.34,-16.41 -7.25,-23.88 -0.51,-2.39 -1.08,-4.85 -0.72,-7.31 -14.49,1.18 -28.98,2.35 -43.47,3.53z","name":"Alabama"},"la":{"path":"m521.09,407.28c0.1,7.53 -0.24,15.32 1.67,22.61 2.08,2.49 2.82,5.51 3.15,8.67 1.87,2.78 5.27,4.95 4.59,8.72 1.61,2.18 -0.21,5.69 0.08,8.38 0.42,2.64 -4.36,4.89 -2.01,7.12 1.07,2.26 -0.92,5.31 -0.53,7.95 0.38,3.22 -2.37,5.7 -1.55,8.93 5.18,-2.4 10.98,-0.86 16.47,-1.09 5.72,1.7 11.56,4.87 17.56,4.26 2.93,-2.25 5.94,0.36 8.98,0.93 1.08,-3.4 -4.22,-0.81 -5.8,-2.2 -1.91,-0.36 -2.89,-2.3 -1.17,-3.4 2.08,-1.1 4.08,-1.09 5.66,0.04 2.15,-1.39 5.6,-0.24 6.26,2.38 -0.33,3.62 3.42,1.7 5.28,3.15 3.83,1.5 -1.41,4.07 0.83,5.37 2.88,0.97 5.73,2.94 8.62,3.29 3.51,-0.05 2.81,-4.53 6.47,-4.17 1.83,-2.9 4.44,-0.25 4.39,2.31 1.53,1.64 4,-3.68 1.98,-3.66 0.22,-3.37 2.17,-3.21 4.31,-5.41 1.59,0.95 0.91,2.82 1.41,4.16 3.33,0.39 7.44,1.09 9.34,4.06 2.79,0.08 5.17,1.1 5.56,-2.56 -2.68,-0.27 -4.15,-3.88 -7.35,-3.19 -2.31,0.06 -6.3,-1.62 -6.15,-3.77 1.62,-3.62 2.23,-1.74 2.03,-4.38 2.88,1.09 5.69,-2.27 3.22,-4.47 0.46,-4.62 -3.73,-0.15 -3.34,2.19 -1.36,1.21 -6.35,-0.96 -4.6,-3.27 1.71,-1.84 4.2,-4.5 2.19,-6.95 -0.13,-3.26 -2.69,-5.21 -4.47,-7.38 0.52,-2.7 2.26,-7.35 -2.36,-5.46 -10.43,1.28 -20.97,0.69 -31.45,1.12 -1.61,-3.72 -0.02,-7.76 0.16,-11.59 2.66,-4.86 5.46,-9.65 8.25,-14.44 -2.04,-2.82 3.52,-4.45 -0.74,-6.48 -0.53,-2.15 -1.29,-4.65 -2.32,-6.83 -0.08,-3.1 0.9,-7.3 -3.62,-5.79 -17,0.28 -34,0.57 -51,0.85z","name":"Louisiana"},"ms":{"path":"m591.03,363.5c-1.45,1.74 -4.03,3.15 -4.63,6.03 -1.4,2.22 1.43,5.74 -2.69,6.07 -1.48,1.97 -4.77,4.42 -3.4,7.17 -1.36,1.83 -3.59,3.95 -3.48,7.01 -2.16,2.66 1.55,5.28 -0.27,7.12 -0.45,1.84 2.25,4.42 1.35,7.03 -1.92,2.71 -1.63,6.55 -0.61,9.53 1.6,2.4 0.78,5.54 3.73,6.94 -0.95,2.53 -1.41,3.75 -1.87,6.31 -2.55,4.96 -6.07,9.62 -7.89,14.84 0.01,2.98 -1.44,6.14 -0.14,8.97 11.4,-0.36 22.87,0.25 34.19,-1.5 2.75,2.21 -2.19,6.39 1.33,8.15 2.82,1.62 2.28,5.18 3.89,7.63 2.07,-1.86 2.51,-6.19 5.82,-4.07 3.21,-0.67 6.85,-3.02 9.89,-0.64 3.62,0.73 6.01,-0.27 4.42,-4.26 -0.81,-10.1 -2.99,-20.07 -3.84,-30.15 0.14,-21.99 1.48,-43.98 0.64,-65.97 -12.15,1.26 -24.29,2.52 -36.44,3.78z","name":"Mississippi"},"ia":{"path":"m476.25,181.16c-3.42,-0.05 -2.16,5.68 0.72,6.29 0.54,2.07 -0.75,5.06 -1.41,7.35 -2.13,2.82 -0.93,5.45 1.04,7.92 1.22,4.34 2.24,8.85 4.05,13.06 0.6,3.22 1.29,6.38 3.41,9 0.02,3.49 1.27,6.69 2.3,9.91 -0.04,3.54 0.03,7.05 2.08,10.09 22.2,-1.02 44.44,-1.75 66.66,-2.63 0.77,1.43 3.25,7.11 4.37,4.25 -0.96,-2.5 1.19,-4.52 3.57,-4.72 -0.88,-2.62 1.19,-4.59 2.5,-6.28 1.27,-2.92 -1.39,-4.02 -2.41,-6.31 0.69,-2.9 1.79,-5.3 5.13,-5.46 2.88,-0.83 6.57,-1.81 6.65,-5.41 1.76,-3.04 3.73,-8.01 -0.26,-10.18 -2.74,-1.06 -1.75,-5.27 -5.21,-5.14 -0.64,-1.97 -0.85,-4.76 -4.19,-4.21 -2.75,-0.8 -4.55,-3.47 -5.37,-6 -1.36,-2.89 2.01,-4.72 1.65,-7.28 -3.82,-0.4 -1.19,-6.5 -5.03,-5.47 -26.75,0.41 -53.5,0.81 -80.25,1.22z","name":"Iowa"},"mn":{"path":"m497.03,53.84c-0.69,2.52 0.93,7.42 -1.31,8.34 -9.65,-0.01 -19.29,-0.02 -28.94,-0.03 1.16,2.87 2.18,5.76 0.97,8.81 0.05,5.74 -0.79,11.86 2.51,16.95 2.04,3.78 0.64,8.47 1.5,12.6 0.82,6.84 1.76,13.67 3.55,20.32 0.05,3.83 0.88,7.8 0.03,11.53 -1.57,1.74 -4.91,3.29 -2.22,5.78 1.89,1.83 5.05,2.94 4.58,6.1 0.28,11.9 0.25,23.83 0.42,35.75 26.72,-0.38 53.44,-0.75 80.16,-1.13 -0.15,-3.62 -0.46,-7.93 -4.36,-9.47 -3.02,-1.66 -6.24,-3.1 -7.63,-6.5 -0.72,-3.61 -5.32,-1.16 -6.05,-4.61 -1.56,-2.09 -5.29,-0.37 -6.57,-3.78 -1.66,-2.1 -0.52,-5.5 -1.1,-8.1 -1.34,-2.93 1.65,-4.99 1.47,-7.54 -0.2,-3.22 -5.36,-3.85 -2.24,-7.43 0.41,-4.47 5.39,-5.33 7.61,-8.59 0.24,-3.87 -0.73,-8.14 0.52,-11.77 1.76,-3.14 5.17,-5.1 8.28,-6.26 1.92,-2.08 3.66,-4.57 6.13,-5.81 2.54,-4.97 6.04,-9.99 11.81,-11.4 4.55,-1.98 9.12,-3.92 13.6,-6.04 0.73,-3.15 -3.7,-0.18 -5.06,0.03 -0.82,-3.87 -4.2,-3.09 -7.28,-2.87 -2.25,-0.87 -5.34,2.83 -6,-0.66 -1.13,-3.5 -4.51,0.72 -5.88,2.13 -2.33,1.63 -6.22,1.16 -8.06,-0.56 0.94,-3.05 -4.61,-0.39 -4.53,-3.96 -0.16,-2.3 -3.48,1.3 -5.77,-1.2 -3.04,-0.91 -5.5,-3.22 -8.29,-4.38 -2.49,0.4 -5.86,-2.38 -6.7,1.5 -1.17,0.79 -7.15,1.83 -5.93,-1.54 -2.99,0.03 -6.03,-0.05 -7.53,-1.75 -2.6,0.59 -5.72,-0.41 -5.9,-3.43 -0.88,-3.28 -1.44,-6.61 -1.88,-9.98 -1.23,-0.6 -2.54,-1.02 -3.91,-1.06z","name":"Minnesota"},"ok":{"path":"m363.31,330.03c17.51,1.12 35.04,1.73 52.56,2.47 -1.37,13.62 -2.89,27.23 -2.83,40.93 -0.92,3.93 3.48,5.78 6.14,7.66 0.56,-5.56 2.96,1.46 4.25,-1.31 0.93,-1.5 5.57,1.68 3.39,4.42 1.59,0.66 4.76,0.51 6.73,1.82 2.79,-0.99 5.16,3.32 7.03,1.26 1.82,-1.93 5.59,-0.31 6.5,2.02 2.44,0.79 1.71,5.84 4.76,3.05 1.39,-1.65 6.25,-1.17 6.69,1.21 1.28,1.5 5.69,3.72 7.39,1.92 0.33,-2.75 3.38,-5.95 4.59,-1.83 3.59,0.38 6.96,2 10.46,3 2.28,-1.86 2.44,-4.68 6.53,-3.41 2.53,1.92 3.8,-1.41 6.31,-1.16 0.85,2.42 5.2,2.41 6.19,-0.5 3.2,-0.2 3.66,3.71 6.55,4.35 1.86,0.4 6.31,3.63 5.36,0.18 -0.32,-12.27 0.1,-24.59 -0.7,-36.82 -1.15,-6.03 -1.01,-12.18 -1.43,-18.25 -1.32,-5.29 -2.05,-10.73 -2.07,-16.18 -20.01,0.66 -40.04,-0.04 -60.06,-0.22 -27.85,-1.32 -55.73,-2.3 -83.53,-4.56 -0.27,3.31 -0.54,6.63 -0.81,9.94z","name":"Oklahoma"},"tx":{"path":"m359.47,330.97c2.34,-0.11 -0.86,-1.81 0,0z m0.72,18.31c-1.64,20.84 -2.52,41.75 -4.68,62.55 -0.51,4.33 -0.99,8.66 -1.51,12.98 -17.84,-0.87 -35.67,-1.93 -53.42,-3.89 -4.16,-0.41 -8.32,-0.76 -12.48,-1.11 -0.67,3.74 2.27,3.68 4.04,6.12 2.26,1.83 1.13,6.03 4.65,6.5 3.52,0.48 2.9,4.6 5.45,6.34 3.38,3.15 5.5,7.91 10.27,9.06 1.91,1.27 4,3.22 4.53,5.46 0.69,3.96 4.53,7.02 3.47,11.33 -0.88,5.15 2.22,9.63 5.93,12.88 2.18,2.95 5.14,4.76 8.63,5.78 1.88,1.95 3.01,3.88 5.72,4.88 2.59,0.18 5.38,4.34 7.35,1.18 2.59,-3.14 5.48,-6.41 6.05,-10.55 1.26,-2.82 3.58,-4.32 6.5,-5.06 2.72,-1.59 5.32,-2.13 7.47,0.62 4.91,0.57 10.2,0.53 14.79,2.22 2.83,1.43 2.56,4.53 5.17,6.33 1.73,2.05 4.83,3.37 5.81,5.82 1.37,2.07 2.66,4.26 2.69,7.03 1.62,4.34 4.17,8.51 5.31,12.94 -0.24,2.77 4.65,2.49 4.95,5.51 2.24,4.08 4.37,9.17 9.21,10.49 3.28,2 0.03,5.04 0.91,7.5 3.28,0.87 -0.01,4.68 0.94,6.67 2.53,1.36 4.37,3.2 4.22,6.44 0.39,3.34 2.13,6.83 5.69,7.54 3.01,1.93 6.69,2.13 9.87,3.4 2.28,1.79 5.15,4.09 8.16,2.83 3.46,0.46 6.77,1.29 9.37,3.75 1.43,2.54 6.51,-0.91 4.31,-2.89 -2.04,-3.39 -1.3,-7.79 -2.83,-11.46 -0.63,-3.07 -2.39,-5.95 -0.99,-9.1 1.17,-4.9 2.87,-9.76 4.04,-14.71 -3.37,-1.01 -2.07,-5.47 1.21,-4.71 3.99,0.42 3.65,-6.43 7.81,-6.05 5.25,-1.56 9.07,-6 14.16,-8.05 6.91,-2.81 13.62,-6.46 18.72,-12.05 2.58,-2.98 7.09,-3.95 8.69,-7.75 5,-2.22 9.8,-4.93 15.22,-6 -0.97,-2.64 0.52,-4.86 1.32,-7.22 0.39,-2.99 0.19,-6.07 1.18,-8.94 -3.15,-2.27 0.38,-4.91 1.38,-7.41 -0.2,-2.8 1.42,-6.25 0.09,-8.66 0.3,-2.93 -1.49,-5.14 -3.35,-7.29 -2.46,-2.64 -1.11,-6.91 -3.87,-9.52 -2.53,-4.57 -1.59,-10.19 -2.25,-15.22 0.02,-5 0.19,-10 -0.5,-14.97 -2.63,-2.31 -5.52,2.33 -7.52,-1.37 -3.1,-2.07 -7.66,-2.1 -9.73,-5.68 -2.31,-2.48 -3.82,2.84 -7.18,0.96 -1.91,-2.73 -3.59,0.03 -5.98,0.18 -2.27,-1.15 -6.07,-1.48 -6.09,1.76 -2.76,2.37 -5.95,-0.93 -8.94,-1.28 -3,1.38 -5.23,-3.83 -6.3,-1.87 -0.15,2.66 -2.52,5.1 -5.13,3.34 -3.23,-0.15 -4.91,-2.49 -6.57,-3.89 -2.95,-1.74 -4.3,2.32 -6.94,0.88 -1.48,-1.39 -1.87,-3.6 -3.92,-5.65 -3.06,-2.83 -5.03,3.17 -7.13,0.23 -2.05,-2.11 -5.57,-0.83 -7.94,-2.69 -3.56,0.59 -5.54,-0.24 -4.13,-4.11 -1.89,-1.85 -2.28,1.21 -4.77,-0.14 -0.59,-0.41 -3.45,1.78 -5,-1.11 -1.9,-1.9 -5.13,-3.22 -4.18,-6.45 0.03,-10.58 0.25,-21.15 1.66,-31.65 0.3,-2.99 0.6,-5.98 0.89,-8.98 -17.65,-0.63 -35.3,-1.27 -52.94,-2.22 -0.52,6.07 -1.04,12.15 -1.56,18.22z M466.53,518.63c-5.2,7.17 2.93,-3.27 0,0z","name":"Texas"},"nm":{"path":"m242.72,428.78c4.82,0.63 9.65,1.25 14.47,1.88 0.43,-3.33 0.85,-6.67 1.28,-10 9.7,0.89 19.4,1.86 29.09,2.78 -0.9,-3.14 -1.39,-5.98 2.84,-4.5 18.29,1.28 36.48,3.79 54.81,4.49 2.45,-0.6 7.66,2.13 7.99,-1.01 3.06,-22.93 3.75,-46.09 5.59,-69.14 0.54,-7.79 1.39,-15.56 2.02,-23.34 3.21,0.65 1.17,-4.81 2.07,-6.86 1.79,-4.38 -2.87,-3.37 -5.73,-3.85 -32.35,-3.3 -64.71,-6.59 -97.06,-9.89 -5.79,39.81 -11.58,79.63 -17.38,119.44z","name":"New Mexico"},"ks":{"path":"m380.53,320.34c25.06,1.17 50.11,2.71 75.19,3.35 17.22,0.07 34.44,0.63 51.66,0.18 -0.25,-12.69 0.23,-25.42 -0.47,-38.08 -0.61,-2.83 -0.17,-6.27 -1.38,-8.74 -3.04,-2.03 -6.02,-5.19 -6.68,-8.77 -0.43,-2.51 4.3,-4.59 1.29,-6.64 -3.02,0.54 -4.05,-3.34 -7.17,-2.43 -36.21,-0.82 -72.43,-1.33 -108.63,-2.5 -1.27,21.21 -2.54,42.42 -3.81,63.63z","name":"Kansas"},"ne":{"path":"m353.38,230.59c10.76,0.96 21.27,2.72 32.03,3.66 -0.37,7.11 -0.71,14.23 -1.06,21.34 36.49,1.29 73,1.84 109.5,2.56 -0.31,-1.17 -3.13,-4.05 -4.03,-6.15 -1.99,-2.11 -0.36,-5.13 -2.45,-7.34 -2.42,-3.19 -1.66,-7.14 -2.2,-10.79 -1.66,-2.86 -1.45,-6.25 -2.29,-9.26 -2.94,-2.85 -2.34,-7.01 -3.95,-10.49 -1.13,-3.1 -2.18,-6.19 -2.62,-9.47 -3.51,1.32 -2.89,-3.07 -4.85,-4.29 -2.4,-1.68 -5.57,-1.85 -7.72,-3.93 -3.79,0.07 -7.65,1.04 -11.13,1.94 -2.52,-2.2 -6.03,-3.13 -7.91,-6.06 -13.61,0.96 -27.23,-0.49 -40.83,-1.11 -15.5,-1.05 -31.02,-1.79 -46.51,-2.86 -1.67,14.08 -2.83,28.17 -4,42.25z","name":"Nebraska"},"sd":{"path":"m357.44,187.41c25.68,1.58 51.37,3.15 77.06,4.26 3.58,-0.01 7.34,-0.51 10.81,-0.23 1.8,2.9 5.24,3.85 7.69,6 3.55,-1.45 7.52,-1.89 11.25,-1.91 2.45,2.67 7.26,2.29 9.15,5.33 1.32,4.76 3.27,1.86 0.18,-1.15 -1.53,-2.17 1.46,-4.6 1.56,-6.99 1.2,-2.87 1.38,-5.28 -1.58,-6.75 -0.5,-2.04 -0.73,-6.65 2.41,-5.84 2.62,-0.28 0.39,-5.28 1.06,-7.5 -0.32,-9.7 0.19,-19.47 -0.64,-29.13 -0.24,-3.58 -6.26,-4.19 -5.42,-8.4 1.09,-1.22 5.81,-4.38 2.75,-5.4 -27.23,-0.89 -54.5,-1.01 -81.67,-3.15 -9.79,-0.62 -19.57,-1.24 -29.36,-1.86 -1.75,20.91 -3.5,41.81 -5.25,62.72z","name":"South Dakota"},"nd":{"path":"m362.88,123.72c26.46,1.49 52.89,3.7 79.4,3.91 10.84,0.26 21.67,0.52 32.51,0.78 0.01,-5.53 -1.38,-10.82 -2.5,-16.17 -1.27,-7.42 -2.05,-14.89 -2.13,-22.42 -2.61,-4.16 -4.11,-9 -3.48,-13.94 -0.44,-3.25 0.67,-6.57 0.3,-9.7 -0.15,-4.01 -2.83,-4.61 -6.31,-4.12 -25.15,-0.47 -50.33,-1.05 -75.41,-3.06 -5.17,-0.49 -10.33,-0.98 -15.5,-1.47 -2.29,22.06 -4.58,44.13 -6.88,66.19z","name":"North Dakota"},"wy":{"path":"m240.16,217.84c37.4,4.49 74.29,8.23 111.69,12.72 2.5,-29.2 5.5,-57.65 8,-86.84 -35.26,-4.45 -70.52,-8.9 -105.78,-13.34 -4.64,29.16 -9.27,58.31 -13.91,87.47z","name":"Wyoming"},"mt":{"path":"m192.59,52.19c0.84,2.76 3.25,5.4 3.2,8.23 -1.5,2.79 -1,5.49 0.52,8.15 3.4,0.39 4.18,3.44 5.26,6.16 1.43,3.34 2.55,6.88 5.37,9.34 0.88,2.21 5.27,1.18 4.34,4.72 -2.23,6.21 -5.45,12.23 -7.06,18.56 0.02,3.34 3.4,5.25 5.73,2.22 1.61,-2.43 5.63,-3.04 4.69,0.97 -0.5,5.3 1.81,10.35 2.59,15.53 1.9,2 5.27,3.44 5.68,6.31 -0.71,1.91 -0.39,8.78 2.32,5.14 1.85,-1.89 4.93,-0.29 6.85,0.86 3.28,-1.63 7.26,-1.21 10.34,0.69 3.69,0.41 1.52,-5 5.95,-4.08 2.71,-0.42 2.01,6.69 3.21,4.1 0.56,-3.26 1.09,-6.54 1.68,-9.8 35.57,4.49 71.15,8.96 106.72,13.44 2.9,-28.44 5.79,-56.88 8.69,-85.31 -28.84,-2.29 -57.55,-5.91 -86.19,-9.99 -26.71,-4.12 -53.36,-8.71 -79.73,-14.68 -3.05,-0.61 -6.99,-2.59 -6.53,2.19 -1.21,5.75 -2.42,11.51 -3.62,17.26z","name":"Montana"},"co":{"path":"m260.17,308.53c39.89,4.09 79.51,8.26 119.39,11.91 1.61,-28.46 3.23,-56.92 4.84,-85.38 -37.47,-4.17 -74.94,-8.33 -112.41,-12.5 -4.03,28.98 -7.8,56.99 -11.83,85.97z","name":"Colorado"},"id":{"path":"m169.84,91.72c0.52,3.07 2.27,5.25 4.94,6.78 0.4,3.02 -0.61,5.46 -3.03,7.31 -2.3,2.7 -4.38,5.97 -6.09,8.83 0.39,2.93 -2.57,3.54 -4.23,4.8 -1.77,2.31 -4.28,4.3 -3.93,7.5 -0.64,2.43 4.69,0.57 4.09,4.34 -5.19,11.17 -6.78,23.51 -10.13,35.32 -0.79,3.16 -1.22,4.91 -2.01,8.08 56.92,12.84 62.26,13.45 93.58,19.41 2.75,-17.6 5.5,-35.21 8.25,-52.81 -2.66,-0.84 -0.58,-6.52 -4.23,-4.97 -1.24,1.7 -1.62,4.95 -5.17,3.47 -3.11,-1.99 -6.81,-1.34 -10.13,-0.56 -2.53,-1.76 -5.91,-2.01 -7.69,0.88 -1.75,-0.05 -3.29,-3.39 -2.79,-5.36 1.91,-3.98 -2.85,-5.89 -5.05,-8.27 -0.98,-5.88 -3.48,-11.64 -2.5,-17.69 -1.86,-0.01 -4.25,2.69 -6.47,3.63 -2.21,0.18 -4.52,-3.09 -4.1,-5.31 1.19,-5.37 4.07,-10.37 5.88,-15.6 1.95,-2.64 1.12,-5.57 -2.41,-5.62 -1.55,-3.37 -4.92,-5.66 -5.61,-9.53 -1.31,-2.63 -1.42,-6.47 -5.06,-6.76 -0.99,-1.85 -3.18,-4.47 -1.91,-6.73 2.09,-2.98 -0.34,-5.7 -1.53,-8.5 -2.13,-3.05 0.55,-6.68 0.67,-10.01 0.9,-4.35 1.8,-8.69 2.69,-13.04 -4.18,-0.78 -8.35,-1.56 -12.53,-2.34 -4.5,20.92 -9,41.83 -13.5,62.75z","name":"Idaho"},"ut":{"path":"m176.34,297.78c27.57,3.92 55.15,7.83 82.72,11.75 4.04,-29.08 8.08,-58.17 12.13,-87.25 -10.83,-1.14 -21.65,-2.33 -32.47,-3.59 1.43,-7.93 2.82,-15.85 3.84,-23.84 -15.27,-2.85 -30.54,-5.71 -45.81,-8.56 -6.8,37.17 -13.6,74.33 -20.41,111.5z","name":"Utah"},"az":{"path":"m173.19,314.66c-2.49,-0.06 -3.05,4.43 -6.38,2.94 -0.74,-2.87 -3.59,-2.82 -5.59,-4.22 -3.74,0.74 -2.37,4.58 -2.68,7.41 -0.52,5.04 -0.42,10.21 -0.89,15.22 -2.19,2.33 -2.44,5.78 -0.24,8.19 2.32,2.62 0.58,7.52 4.09,9.09 0.98,3.59 -2.89,4.83 -5.41,6.09 -3.29,2.46 -3.28,6.86 -3.88,10.47 -1.25,2.44 -4.81,2.39 -4.92,4.97 0.47,2.18 6.18,0.38 3.42,4.54 -0.65,2.75 -3.14,3.45 -5.62,3.78 -3.6,1.45 -2.69,4.7 0.77,5.44 14.69,7.84 28.52,17.13 43.01,25.32 5.79,3.19 11.27,7.21 17.27,9.88 11.71,2.83 23.75,3.45 35.68,4.87 5.71,-39.38 11.42,-78.75 17.13,-118.13 -27.58,-3.93 -55.17,-7.85 -82.75,-11.78 -1,5.31 -2,10.63 -3,15.94z","name":"Arizona"},"nv":{"path":"m84.84,232.41c22.96,34.61 45.92,69.23 68.88,103.84 3.66,2.65 3.19,-3.47 3.27,-5.71 0.37,-5.43 0.36,-11.24 1.08,-16.44 2.05,-2.03 4.26,-2 6.08,-0.39 2.62,-0.16 3.86,5.9 6.03,1.27 2.74,-0.82 2.66,-3.64 3.13,-6.41 7.5,-40.87 15,-81.75 22.51,-122.62 -30.72,-6.81 -61.44,-13.63 -92.16,-20.44 -6.27,22.3 -12.54,44.6 -18.81,66.91z","name":"Nevada"},"or":{"path":"M67.16,62.81C64.24,70.42 62.73,78.57 58.5,85.63c-2.86,8.53 -5.96,16.93 -10.17,24.89 -3.06,6.61 -8,12.31 -11.32,18.7 -1.03,6.5 -0.64,13.05 -0.36,19.6 37.23,8.7 74.46,16.69 111.69,25.39 3.45,-13.15 6.51,-25.75 10.19,-38.81 1.2,-2.48 3.15,-6.06 -1.1,-5.42 -2.58,-1.78 -0.23,-4.45 -0.38,-6.91 2.3,-2.82 4.36,-5.82 7.47,-7.75 1.75,-5.08 5.43,-9.19 9.03,-13.06 1.66,-3.48 -2.46,-3.92 -3.39,-6.47 -0.25,-3.79 -3.56,-4.26 -6.62,-4.99 -7.63,-2.2 -15.38,-4.2 -23.21,-5.54 -4.9,0.03 -9.79,0.06 -14.69,0.09 -0.95,-2.84 -4.67,1.86 -7.11,0.5 -2.61,0.82 -4.42,-2.63 -6.57,-1.28 -2.61,-0.06 -5.23,0.11 -7.15,-1.87 -3.09,-1.53 -6.33,-1.81 -9.5,-3.1 -1.87,3.03 -5.69,1.22 -8.53,1.31 -1.65,-1.64 -5.79,-3.02 -6.03,-4.81 1.1,-2.44 0.78,-5.93 0.53,-8.59 -0.42,-3.92 -4.72,-2.63 -6.25,-4.49C74.59,58.67 69.45,62.45 67.16,62.81z","name":"Oregon"},"wa":{"path":"m101.38,8.72c0.05,2.75 2.93,5.39 3.25,8.16 -1.92,2.33 -1.78,5.19 -1.32,7.71 -1.81,2.64 1.63,4.82 0.67,7.42 -3.6,1.52 -2.43,-3.7 -4.86,-4.99 -3.34,-2.24 1.47,-3.87 1.17,-5.42 -2.5,-1.11 -2.24,3.88 -3.69,4.17C92.33,26.39 88.86,23.04 84.76,22.57 79.82,20.66 75.28,17.69 72.25,13.25c-3.13,-0.98 -1.96,4.97 -3.25,6.95 -0.63,2.8 2.59,5.06 1.41,8.21 0.52,3.86 -1.29,7.55 0.18,11.29 -1.06,2.88 4.75,5.54 2.94,6.39 -3.45,-1.05 -6.2,3.2 -2.25,4.34 1.57,0.97 -0.61,6.32 -3.3,5.43 -1.83,2.15 1.28,6.86 4.14,4.17 3.77,-1.55 2.75,3.51 5.83,3.13 2.81,-0.24 4.26,3.31 4.54,5.61 0.04,2.48 -0.15,6.02 -0.26,7.78 2.63,1.76 5.01,4.26 8.46,3.62 3.2,0.66 4.7,-3.26 7.97,-0.5 3.01,0.48 6.37,1.55 8.79,3.66 3.03,0.92 6.02,-1.78 8.19,1.05 3.44,1.3 6.67,0.03 9.84,-1.4 0.99,1.78 4.42,1.32 7,1.3 5.35,-0.19 10.68,-0.16 15.82,1.55 6.99,1.44 13.78,3.45 20.65,5.4 4.47,-20.85 8.94,-41.71 13.41,-62.56 -19.81,-3.93 -39.37,-9.21 -58.73,-14.66 -7.27,-1.53 -14.4,-3.52 -21.46,-5.87L101.75,8.45 101.38,8.72z M95.5,15.16C94.05,13.72 92.15,14.26 94.72,17.63 94.39,13.84 99.19,18.11 98.98,14.18 98.24,12.75 96.05,14.08 95.5,15.16z m2.31,1.91c-3.13,3.04 1.36,2.18 0.16,-0.25l-0.16,0.25z","name":"Washington"},"ca":{"path":"m35.06,153.94c-0.1,4.04 0.4,8.21 -1.99,11.75 -1.86,3.68 -2.55,8.24 -6.48,10.38 -1.19,2.11 -3.49,3.38 -3.59,6.45 -1.94,3.49 2.49,5.65 2.91,8.98 1.54,3.39 2.34,6.94 1.63,10.65 0,2.92 -2.79,5.01 -2.24,8.14 0.05,2.97 -2.24,5.87 0.04,8.54 2.58,5 6.38,9.93 6.71,15.69 -0.54,2.77 -0.99,5.37 1.81,7.17 1.6,1.95 4.49,3.66 2.79,6.46 -1.73,3.87 -1.14,8.04 -1.09,12.16 1.68,2.67 2.83,6.76 6.66,6.53 1.48,2.33 0.97,4.84 -0.22,7.13 -2.5,1.53 -4.36,2.73 -3.66,6.08 0.27,3.49 4.27,5.34 4.36,9.01 1.46,6.2 4.13,11.92 7.59,17.25 0.71,2.57 2.16,4.34 2.9,6.41 -0.24,3.33 -1.93,6.49 -2.41,9.87 -1.66,2.61 1.19,5.52 3.99,5.12 4.03,0.15 7.27,3.31 11.01,4.04 3,-0.55 4.74,2.9 6.07,5.11 1.54,2.71 2.37,6 5.76,6.88 2.51,1.14 6.19,0.05 7.17,3.45 2.41,2.72 -2.39,5.05 1.41,5.17 2.73,1.87 5.56,-1.74 7.56,-0.74 2.13,2.06 4.05,4.2 4.93,7.05 4.3,4.9 1.44,11.77 2.79,17.52 14.73,1.94 29.44,4.72 44.27,5.38 2.78,1.19 6.19,-4.43 2.84,-4.65 -3.13,0.64 -2.83,-4.02 -1.36,-4.66 3.15,-0.88 4.92,-3.83 4.65,-7.04 0.47,-3.98 3.27,-7.43 7.22,-8.4 3.43,-2.04 -0.33,-3.58 -0.79,-5.79 -0.23,-3.65 -1.95,-6.81 -3.62,-9.89 2.02,-3.66 -2.22,-3.32 -3.16,-6.24 -22.6,-34.1 -45.2,-68.19 -67.81,-102.29 6.27,-22.44 12.54,-44.88 18.81,-67.31 -22.04,-5.16 -44.08,-10.31 -66.13,-15.47 -0.45,1.38 -0.9,2.75 -1.34,4.13z m24.13,184.72c-0.27,3.05 7.99,3.06 4.7,2.07 -1.63,-0.35 -3.17,-2.46 -4.7,-2.07z m-5.16,0.38c0.33,3.71 5.81,0.51 1.31,-0.04 -0.44,0.01 -0.88,0.02 -1.31,0.04z M79.69,357.5c-0.2,1.58 4.42,6 3.16,2.37C82.22,358.91 80.8,357.6 79.69,357.5z M77.75,369.13c-0.14,1.55 3.2,3.89 1.32,1.26C78.6,369.72 77.39,366.55 77.75,369.13z","name":"California"}}});

(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var t={},n=Math.max,r=Math.min;t.c={};t.c.d=e(document);t.c.t=function(e){return e.originalEvent.touches.length-1};t.o=function(){var n=this;this.o=null;this.$=null;this.i=null;this.g=null;this.v=null;this.cv=null;this.x=0;this.y=0;this.w=0;this.h=0;this.$c=null;this.c=null;this.t=0;this.isInit=false;this.fgColor=null;this.pColor=null;this.dH=null;this.cH=null;this.eH=null;this.rH=null;this.scale=1;this.relative=false;this.relativeWidth=false;this.relativeHeight=false;this.$div=null;this.run=function(){var t=function(e,t){var r;for(r in t){n.o[r]=t[r]}n._carve().init();n._configure()._draw()};if(this.$.data("kontroled"))return;this.$.data("kontroled",true);this.extend();this.o=e.extend({min:this.$.data("min")!==undefined?this.$.data("min"):0,max:this.$.data("max")!==undefined?this.$.data("max"):100,stopper:true,readOnly:this.$.data("readonly")||this.$.attr("readonly")==="readonly",cursor:this.$.data("cursor")===true&&30||this.$.data("cursor")||0,thickness:this.$.data("thickness")&&Math.max(Math.min(this.$.data("thickness"),1),.01)||.35,lineCap:this.$.data("linecap")||"butt",width:this.$.data("width")||200,height:this.$.data("height")||200,displayInput:this.$.data("displayinput")==null||this.$.data("displayinput"),displayPrevious:this.$.data("displayprevious"),fgColor:this.$.data("fgcolor")||"#87CEEB",inputColor:this.$.data("inputcolor"),font:this.$.data("font")||"Arial",fontWeight:this.$.data("font-weight")||"bold",inline:false,step:this.$.data("step")||1,rotation:this.$.data("rotation"),draw:null,change:null,cancel:null,release:null,format:function(e){return e},parse:function(e){return parseFloat(e)}},this.o);this.o.flip=this.o.rotation==="anticlockwise"||this.o.rotation==="acw";if(!this.o.inputColor){this.o.inputColor=this.o.fgColor}if(this.$.is("fieldset")){this.v={};this.i=this.$.find("input");this.i.each(function(t){var r=e(this);n.i[t]=r;n.v[t]=n.o.parse(r.val());r.bind("change blur",function(){var e={};e[t]=r.val();n.val(n._validate(e))})});this.$.find("legend").remove()}else{this.i=this.$;this.v=this.o.parse(this.$.val());this.v===""&&(this.v=this.o.min);this.$.bind("change blur",function(){n.val(n._validate(n.o.parse(n.$.val())))})}!this.o.displayInput&&this.$.hide();this.$c=e(document.createElement("canvas")).attr({width:this.o.width,height:this.o.height});this.$div=e('<div style="'+(this.o.inline?"display:inline;":"")+"width:"+this.o.width+"px;height:"+this.o.height+"px;"+'"></div>');this.$.wrap(this.$div).before(this.$c);this.$div=this.$.parent();if(typeof G_vmlCanvasManager!=="undefined"){G_vmlCanvasManager.initElement(this.$c[0])}this.c=this.$c[0].getContext?this.$c[0].getContext("2d"):null;if(!this.c){throw{name:"CanvasNotSupportedException",message:"Canvas not supported. Please use excanvas on IE8.0.",toString:function(){return this.name+": "+this.message}}}this.scale=(window.devicePixelRatio||1)/(this.c.webkitBackingStorePixelRatio||this.c.mozBackingStorePixelRatio||this.c.msBackingStorePixelRatio||this.c.oBackingStorePixelRatio||this.c.backingStorePixelRatio||1);this.relativeWidth=this.o.width%1!==0&&this.o.width.indexOf("%");this.relativeHeight=this.o.height%1!==0&&this.o.height.indexOf("%");this.relative=this.relativeWidth||this.relativeHeight;this._carve();if(this.v instanceof Object){this.cv={};this.copy(this.v,this.cv)}else{this.cv=this.v}this.$.bind("configure",t).parent().bind("configure",t);this._listen()._configure()._xy().init();this.isInit=true;this.$.val(this.o.format(this.v));this._draw();return this};this._carve=function(){if(this.relative){var e=this.relativeWidth?this.$div.parent().width()*parseInt(this.o.width)/100:this.$div.parent().width(),t=this.relativeHeight?this.$div.parent().height()*parseInt(this.o.height)/100:this.$div.parent().height();this.w=this.h=Math.min(e,t)}else{this.w=this.o.width;this.h=this.o.height}this.$div.css({width:this.w+"px",height:this.h+"px"});this.$c.attr({width:this.w,height:this.h});if(this.scale!==1){this.$c[0].width=this.$c[0].width*this.scale;this.$c[0].height=this.$c[0].height*this.scale;this.$c.width(this.w);this.$c.height(this.h)}return this};this._draw=function(){var e=true;n.g=n.c;n.clear();n.dH&&(e=n.dH());e!==false&&n.draw()};this._touch=function(e){var r=function(e){var t=n.xy2val(e.originalEvent.touches[n.t].pageX,e.originalEvent.touches[n.t].pageY);if(t==n.cv)return;if(n.cH&&n.cH(t)===false)return;n.change(n._validate(t));n._draw()};this.t=t.c.t(e);r(e);t.c.d.bind("touchmove.k",r).bind("touchend.k",function(){t.c.d.unbind("touchmove.k touchend.k");n.val(n.cv)});return this};this._mouse=function(e){var r=function(e){var t=n.xy2val(e.pageX,e.pageY);if(t==n.cv)return;if(n.cH&&n.cH(t)===false)return;n.change(n._validate(t));n._draw()};r(e);t.c.d.bind("mousemove.k",r).bind("keyup.k",function(e){if(e.keyCode===27){t.c.d.unbind("mouseup.k mousemove.k keyup.k");if(n.eH&&n.eH()===false)return;n.cancel()}}).bind("mouseup.k",function(e){t.c.d.unbind("mousemove.k mouseup.k keyup.k");n.val(n.cv)});return this};this._xy=function(){var e=this.$c.offset();this.x=e.left;this.y=e.top;return this};this._listen=function(){if(!this.o.readOnly){this.$c.bind("mousedown",function(e){e.preventDefault();n._xy()._mouse(e)}).bind("touchstart",function(e){e.preventDefault();n._xy()._touch(e)});this.listen()}else{this.$.attr("readonly","readonly")}if(this.relative){e(window).resize(function(){n._carve().init();n._draw()})}return this};this._configure=function(){if(this.o.draw)this.dH=this.o.draw;if(this.o.change)this.cH=this.o.change;if(this.o.cancel)this.eH=this.o.cancel;if(this.o.release)this.rH=this.o.release;if(this.o.displayPrevious){this.pColor=this.h2rgba(this.o.fgColor,"0.4");this.fgColor=this.h2rgba(this.o.fgColor,"0.6")}else{this.fgColor=this.o.fgColor}return this};this._clear=function(){this.$c[0].width=this.$c[0].width};this._validate=function(e){var t=~~((e<0?-.5:.5)+e/this.o.step)*this.o.step;return Math.round(t*100)/100};this.listen=function(){};this.extend=function(){};this.init=function(){};this.change=function(e){};this.val=function(e){};this.xy2val=function(e,t){};this.draw=function(){};this.clear=function(){this._clear()};this.h2rgba=function(e,t){var n;e=e.substring(1,7);n=[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16)];return"rgba("+n[0]+","+n[1]+","+n[2]+","+t+")"};this.copy=function(e,t){for(var n in e){t[n]=e[n]}}};t.Dial=function(){t.o.call(this);this.startAngle=null;this.xy=null;this.radius=null;this.lineWidth=null;this.cursorExt=null;this.w2=null;this.PI2=2*Math.PI;this.extend=function(){this.o=e.extend({bgColor:this.$.data("bgcolor")||"#EEEEEE",angleOffset:this.$.data("angleoffset")||0,angleArc:this.$.data("anglearc")||360,inline:true},this.o)};this.val=function(e,t){if(null!=e){e=this.o.parse(e);if(t!==false&&e!=this.v&&this.rH&&this.rH(e)===false){return}this.cv=this.o.stopper?n(r(e,this.o.max),this.o.min):e;this.v=this.cv;this.$.val(this.o.format(this.v));this._draw()}else{return this.v}};this.xy2val=function(e,t){var i,s;i=Math.atan2(e-(this.x+this.w2),-(t-this.y-this.w2))-this.angleOffset;if(this.o.flip){i=this.angleArc-i-this.PI2}if(this.angleArc!=this.PI2&&i<0&&i>-.5){i=0}else if(i<0){i+=this.PI2}s=i*(this.o.max-this.o.min)/this.angleArc+this.o.min;this.o.stopper&&(s=n(r(s,this.o.max),this.o.min));return s};this.listen=function(){var t=this,i,s,o=function(e){e.preventDefault();var o=e.originalEvent,u=o.detail||o.wheelDeltaX,a=o.detail||o.wheelDeltaY,f=t._validate(t.o.parse(t.$.val()))+(u>0||a>0?t.o.step:u<0||a<0?-t.o.step:0);f=n(r(f,t.o.max),t.o.min);t.val(f,false);if(t.rH){clearTimeout(i);i=setTimeout(function(){t.rH(f);i=null},100);if(!s){s=setTimeout(function(){if(i)t.rH(f);s=null},200)}}},u,a,f=1,l={37:-t.o.step,38:t.o.step,39:t.o.step,40:-t.o.step};this.$.bind("keydown",function(i){var s=i.keyCode;if(s>=96&&s<=105){s=i.keyCode=s-48}u=parseInt(String.fromCharCode(s));if(isNaN(u)){s!==13&&s!==8&&s!==9&&s!==189&&(s!==190||t.$.val().match(/\./))&&i.preventDefault();if(e.inArray(s,[37,38,39,40])>-1){i.preventDefault();var o=t.o.parse(t.$.val())+l[s]*f;t.o.stopper&&(o=n(r(o,t.o.max),t.o.min));t.change(t._validate(o));t._draw();a=window.setTimeout(function(){f*=2},30)}}}).bind("keyup",function(e){if(isNaN(u)){if(a){window.clearTimeout(a);a=null;f=1;t.val(t.$.val())}}else{t.$.val()>t.o.max&&t.$.val(t.o.max)||t.$.val()<t.o.min&&t.$.val(t.o.min)}});this.$c.bind("mousewheel DOMMouseScroll",o);this.$.bind("mousewheel DOMMouseScroll",o)};this.init=function(){if(this.v<this.o.min||this.v>this.o.max){this.v=this.o.min}this.$.val(this.v);this.w2=this.w/2;this.cursorExt=this.o.cursor/100;this.xy=this.w2*this.scale;this.lineWidth=this.xy*this.o.thickness;this.lineCap=this.o.lineCap;this.radius=this.xy-this.lineWidth/2;this.o.angleOffset&&(this.o.angleOffset=isNaN(this.o.angleOffset)?0:this.o.angleOffset);this.o.angleArc&&(this.o.angleArc=isNaN(this.o.angleArc)?this.PI2:this.o.angleArc);this.angleOffset=this.o.angleOffset*Math.PI/180;this.angleArc=this.o.angleArc*Math.PI/180;this.startAngle=1.5*Math.PI+this.angleOffset;this.endAngle=1.5*Math.PI+this.angleOffset+this.angleArc;var e=n(String(Math.abs(this.o.max)).length,String(Math.abs(this.o.min)).length,2)+2;this.o.displayInput&&this.i.css({width:(this.w/2+4>>0)+"px",height:(this.w/3>>0)+"px",position:"absolute","vertical-align":"middle","margin-top":(this.w/3>>0)+"px","margin-left":"-"+(this.w*3/4+2>>0)+"px",border:0,background:"none",font:this.o.fontWeight+" "+(this.w/e>>0)+"px "+this.o.font,"text-align":"center",color:this.o.inputColor||this.o.fgColor,padding:"0px","-webkit-appearance":"none"})||this.i.css({width:"0px",visibility:"hidden"})};this.change=function(e){this.cv=e;this.$.val(this.o.format(e))};this.angle=function(e){return(e-this.o.min)*this.angleArc/(this.o.max-this.o.min)};this.arc=function(e){var t,n;e=this.angle(e);if(this.o.flip){t=this.endAngle+1e-5;n=t-e-1e-5}else{t=this.startAngle-1e-5;n=t+e+1e-5}this.o.cursor&&(t=n-this.cursorExt)&&(n=n+this.cursorExt);return{s:t,e:n,d:this.o.flip&&!this.o.cursor}};this.draw=function(){var e=this.g,t=this.arc(this.cv),n,r=1;e.lineWidth=this.lineWidth;e.lineCap=this.lineCap;if(this.o.bgColor!=="none"){e.beginPath();e.strokeStyle=this.o.bgColor;e.arc(this.xy,this.xy,this.radius,this.endAngle-1e-5,this.startAngle+1e-5,true);e.stroke()}if(this.o.displayPrevious){n=this.arc(this.v);e.beginPath();e.strokeStyle=this.pColor;e.arc(this.xy,this.xy,this.radius,n.s,n.e,n.d);e.stroke();r=this.cv==this.v}e.beginPath();e.strokeStyle=r?this.o.fgColor:this.fgColor;e.arc(this.xy,this.xy,this.radius,t.s,t.e,t.d);e.stroke()};this.cancel=function(){this.val(this.v)}};e.fn.dial=e.fn.knob=function(n){return this.each(function(){var r=new t.Dial;r.o=n;r.$=e(this);r.run()}).parent()}})
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,i;function f(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function l(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;for(var t in e)if(m(e,t))return;return 1}function r(e){return void 0===e}function h(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function a(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function d(e,t){for(var n=[],s=0;s<e.length;++s)n.push(t(e[s],s));return n}function c(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function _(e,t,n,s){return xt(e,t,n,s,!0).utc()}function y(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function g(e){if(null==e._isValid){var t=y(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function w(e){var t=_(NaN);return null!=e?c(y(t),e):y(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var p=f.momentProperties=[],t=!1;function v(e,t){var n,s,i;if(r(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),r(t._i)||(e._i=t._i),r(t._f)||(e._f=t._f),r(t._l)||(e._l=t._l),r(t._strict)||(e._strict=t._strict),r(t._tzm)||(e._tzm=t._tzm),r(t._isUTC)||(e._isUTC=t._isUTC),r(t._offset)||(e._offset=t._offset),r(t._pf)||(e._pf=y(t)),r(t._locale)||(e._locale=t._locale),0<p.length)for(n=0;n<p.length;n++)r(i=t[s=p[n]])||(e[s]=i);return e}function k(e){v(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,f.updateOffset(this),t=!1)}function M(e){return e instanceof k||null!=e&&null!=e._isAMomentObject}function D(e){!1===f.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return c(function(){if(null!=f.deprecationHandler&&f.deprecationHandler(null,i),a){for(var e,t,n=[],s=0;s<arguments.length;s++){if(e="","object"==typeof arguments[s]){for(t in e+="\n["+s+"] ",arguments[0])m(arguments[0],t)&&(e+=t+": "+arguments[0][t]+", ");e=e.slice(0,-2)}else e=arguments[s];n.push(e)}D(i+"\nArguments: "+Array.prototype.slice.call(n).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,S={};function Y(e,t){null!=f.deprecationHandler&&f.deprecationHandler(e,t),S[e]||(D(t),S[e]=!0)}function O(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function b(e,t){var n,s=c({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},c(s[n],e[n]),c(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=c({},s[n]));return s}function x(e){null!=e&&this.set(e)}f.suppressDeprecationWarnings=!1,f.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};function T(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,P=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,R={},W={};function C(e,t,n,s){var i="string"==typeof s?function(){return this[s]()}:s;e&&(W[e]=i),t&&(W[t[0]]=function(){return T(i.apply(this,arguments),t[1],t[2])}),n&&(W[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function U(e,t){return e.isValid()?(t=H(t,e.localeData()),R[t]=R[t]||function(s){for(var e,i=s.match(N),t=0,r=i.length;t<r;t++)W[i[t]]?i[t]=W[i[t]]:i[t]=(e=i[t]).match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"");return function(e){for(var t="",n=0;n<r;n++)t+=O(i[n])?i[n].call(e,s):i[n];return t}}(t),R[t](e)):e.localeData().invalidDate()}function H(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(P.lastIndex=0;0<=n&&P.test(e);)e=e.replace(P,s),P.lastIndex=0,--n;return e}var F={};function L(e,t){var n=e.toLowerCase();F[n]=F[n+"s"]=F[t]=e}function V(e){return"string"==typeof e?F[e]||F[e.toLowerCase()]:void 0}function G(e){var t,n,s={};for(n in e)m(e,n)&&(t=V(n))&&(s[t]=e[n]);return s}var E={};function A(e,t){E[e]=t}function j(e){return e%4==0&&e%100!=0||e%400==0}function I(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function Z(e){var t=+e,n=0;return 0!=t&&isFinite(t)&&(n=I(t)),n}function z(t,n){return function(e){return null!=e?(q(this,t,e),f.updateOffset(this,n),this):$(this,t)}}function $(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function q(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&j(e.year())&&1===e.month()&&29===e.date()?(n=Z(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),xe(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}var B,J=/\d/,Q=/\d\d/,X=/\d{3}/,K=/\d{4}/,ee=/[+-]?\d{6}/,te=/\d\d?/,ne=/\d\d\d\d?/,se=/\d\d\d\d\d\d?/,ie=/\d{1,3}/,re=/\d{1,4}/,ae=/[+-]?\d{1,6}/,oe=/\d+/,ue=/[+-]?\d+/,le=/Z|[+-]\d\d:?\d\d/gi,he=/Z|[+-]\d\d(?::?\d\d)?/gi,de=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function ce(e,n,s){B[e]=O(n)?n:function(e,t){return e&&s?s:n}}function fe(e,t){return m(B,e)?B[e](t._strict,t._locale):new RegExp(me(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function me(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}B={};var _e={};function ye(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),h(n)&&(s=function(e,t){t[n]=Z(e)}),t=0;t<e.length;t++)_e[e[t]]=s}function ge(e,i){ye(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var we,pe=0,ve=1,ke=2,Me=3,De=4,Se=5,Ye=6,Oe=7,be=8;function xe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1==s?j(e)?29:28:31-s%7%2}we=Array.prototype.indexOf?Array.prototype.indexOf:function(e){for(var t=0;t<this.length;++t)if(this[t]===e)return t;return-1},C("M",["MM",2],"Mo",function(){return this.month()+1}),C("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),C("MMMM",0,0,function(e){return this.localeData().months(this,e)}),L("month","M"),A("month",8),ce("M",te),ce("MM",te,Q),ce("MMM",function(e,t){return t.monthsShortRegex(e)}),ce("MMMM",function(e,t){return t.monthsRegex(e)}),ye(["M","MM"],function(e,t){t[ve]=Z(e)-1}),ye(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[ve]=i:y(n).invalidMonth=e});var Te="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Ne="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Pe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Re=de,We=de;function Ce(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=Z(t);else if(!h(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),xe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Ue(e){return null!=e?(Ce(this,e),f.updateOffset(this,!0),this):$(this,"Month")}function He(){function e(e,t){return t.length-e.length}for(var t,n=[],s=[],i=[],r=0;r<12;r++)t=_([2e3,r]),n.push(this.monthsShort(t,"")),s.push(this.months(t,"")),i.push(this.months(t,"")),i.push(this.monthsShort(t,""));for(n.sort(e),s.sort(e),i.sort(e),r=0;r<12;r++)n[r]=me(n[r]),s[r]=me(s[r]);for(r=0;r<24;r++)i[r]=me(i[r]);this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Fe(e){return j(e)?366:365}C("Y",0,0,function(){var e=this.year();return e<=9999?T(e,4):"+"+e}),C(0,["YY",2],0,function(){return this.year()%100}),C(0,["YYYY",4],0,"year"),C(0,["YYYYY",5],0,"year"),C(0,["YYYYYY",6,!0],0,"year"),L("year","y"),A("year",1),ce("Y",ue),ce("YY",te,Q),ce("YYYY",re,K),ce("YYYYY",ae,ee),ce("YYYYYY",ae,ee),ye(["YYYYY","YYYYYY"],pe),ye("YYYY",function(e,t){t[pe]=2===e.length?f.parseTwoDigitYear(e):Z(e)}),ye("YY",function(e,t){t[pe]=f.parseTwoDigitYear(e)}),ye("Y",function(e,t){t[pe]=parseInt(e,10)}),f.parseTwoDigitYear=function(e){return Z(e)+(68<Z(e)?1900:2e3)};var Le=z("FullYear",!0);function Ve(e){var t,n;return e<100&&0<=e?((n=Array.prototype.slice.call(arguments))[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ge(e,t,n){var s=7+t-n;return s-(7+Ve(e,0,s).getUTCDay()-t)%7-1}function Ee(e,t,n,s,i){var r,a=1+7*(t-1)+(7+n-s)%7+Ge(e,s,i),o=a<=0?Fe(r=e-1)+a:a>Fe(e)?(r=e+1,a-Fe(e)):(r=e,a);return{year:r,dayOfYear:o}}function Ae(e,t,n){var s,i,r=Ge(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+je(i=e.year()-1,t,n):a>je(e.year(),t,n)?(s=a-je(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function je(e,t,n){var s=Ge(e,t,n),i=Ge(e+1,t,n);return(Fe(e)-s+i)/7}C("w",["ww",2],"wo","week"),C("W",["WW",2],"Wo","isoWeek"),L("week","w"),L("isoWeek","W"),A("week",5),A("isoWeek",5),ce("w",te),ce("ww",te,Q),ce("W",te),ce("WW",te,Q),ge(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=Z(e)});function Ie(e,t){return e.slice(t,7).concat(e.slice(0,t))}C("d",0,"do","day"),C("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),C("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),C("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),C("e",0,0,"weekday"),C("E",0,0,"isoWeekday"),L("day","d"),L("weekday","e"),L("isoWeekday","E"),A("day",11),A("weekday",11),A("isoWeekday",11),ce("d",te),ce("e",te),ce("E",te),ce("dd",function(e,t){return t.weekdaysMinRegex(e)}),ce("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ce("dddd",function(e,t){return t.weekdaysRegex(e)}),ge(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:y(n).invalidWeekday=e}),ge(["d","e","E"],function(e,t,n,s){t[s]=Z(e)});var Ze="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),$e="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),qe=de,Be=de,Je=de;function Qe(){function e(e,t){return t.length-e.length}for(var t,n,s,i,r=[],a=[],o=[],u=[],l=0;l<7;l++)t=_([2e3,1]).day(l),n=me(this.weekdaysMin(t,"")),s=me(this.weekdaysShort(t,"")),i=me(this.weekdays(t,"")),r.push(n),a.push(s),o.push(i),u.push(n),u.push(s),u.push(i);r.sort(e),a.sort(e),o.sort(e),u.sort(e),this._weekdaysRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Xe(){return this.hours()%12||12}function Ke(e,t){C(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function et(e,t){return t._meridiemParse}C("H",["HH",2],0,"hour"),C("h",["hh",2],0,Xe),C("k",["kk",2],0,function(){return this.hours()||24}),C("hmm",0,0,function(){return""+Xe.apply(this)+T(this.minutes(),2)}),C("hmmss",0,0,function(){return""+Xe.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),C("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),C("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),Ke("a",!0),Ke("A",!1),L("hour","h"),A("hour",13),ce("a",et),ce("A",et),ce("H",te),ce("h",te),ce("k",te),ce("HH",te,Q),ce("hh",te,Q),ce("kk",te,Q),ce("hmm",ne),ce("hmmss",se),ce("Hmm",ne),ce("Hmmss",se),ye(["H","HH"],Me),ye(["k","kk"],function(e,t,n){var s=Z(e);t[Me]=24===s?0:s}),ye(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ye(["h","hh"],function(e,t,n){t[Me]=Z(e),y(n).bigHour=!0}),ye("hmm",function(e,t,n){var s=e.length-2;t[Me]=Z(e.substr(0,s)),t[De]=Z(e.substr(s)),y(n).bigHour=!0}),ye("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[Me]=Z(e.substr(0,s)),t[De]=Z(e.substr(s,2)),t[Se]=Z(e.substr(i)),y(n).bigHour=!0}),ye("Hmm",function(e,t,n){var s=e.length-2;t[Me]=Z(e.substr(0,s)),t[De]=Z(e.substr(s))}),ye("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[Me]=Z(e.substr(0,s)),t[De]=Z(e.substr(s,2)),t[Se]=Z(e.substr(i))});var tt=z("Hours",!0);var nt,st={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Te,monthsShort:Ne,week:{dow:0,doy:6},weekdays:Ze,weekdaysMin:$e,weekdaysShort:ze,meridiemParse:/[ap]\.?m?\.?/i},it={},rt={};function at(e){return e?e.toLowerCase().replace("_","-"):e}function ot(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=at(e[r]).split("-")).length,n=(n=at(e[r+1]))?n.split("-"):null;0<t;){if(s=ut(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&function(e,t){for(var n=Math.min(e.length,t.length),s=0;s<n;s+=1)if(e[s]!==t[s])return s;return n}(i,n)>=t-1)break;t--}r++}return nt}function ut(t){var e;if(void 0===it[t]&&"undefined"!=typeof module&&module&&module.exports)try{e=nt._abbr,require("./locale/"+t),lt(e)}catch(e){it[t]=null}return it[t]}function lt(e,t){var n;return e&&((n=r(t)?dt(e):ht(e,t))?nt=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),nt._abbr}function ht(e,t){if(null===t)return delete it[e],null;var n,s=st;if(t.abbr=e,null!=it[e])Y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=it[e]._config;else if(null!=t.parentLocale)if(null!=it[t.parentLocale])s=it[t.parentLocale]._config;else{if(null==(n=ut(t.parentLocale)))return rt[t.parentLocale]||(rt[t.parentLocale]=[]),rt[t.parentLocale].push({name:e,config:t}),null;s=n._config}return it[e]=new x(b(s,t)),rt[e]&&rt[e].forEach(function(e){ht(e.name,e.config)}),lt(e),it[e]}function dt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return nt;if(!o(e)){if(t=ut(e))return t;e=[e]}return ot(e)}function ct(e){var t,n=e._a;return n&&-2===y(e).overflow&&(t=n[ve]<0||11<n[ve]?ve:n[ke]<1||n[ke]>xe(n[pe],n[ve])?ke:n[Me]<0||24<n[Me]||24===n[Me]&&(0!==n[De]||0!==n[Se]||0!==n[Ye])?Me:n[De]<0||59<n[De]?De:n[Se]<0||59<n[Se]?Se:n[Ye]<0||999<n[Ye]?Ye:-1,y(e)._overflowDayOfYear&&(t<pe||ke<t)&&(t=ke),y(e)._overflowWeeks&&-1===t&&(t=Oe),y(e)._overflowWeekday&&-1===t&&(t=be),y(e).overflow=t),e}var ft=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,mt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/Z|[+-]\d\d(?::?\d\d)?/,yt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],gt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],wt=/^\/?Date\((-?\d+)/i,pt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,vt={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function kt(e){var t,n,s,i,r,a,o=e._i,u=ft.exec(o)||mt.exec(o);if(u){for(y(e).iso=!0,t=0,n=yt.length;t<n;t++)if(yt[t][1].exec(u[1])){i=yt[t][0],s=!1!==yt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[3])){r=(u[2]||" ")+gt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!_t.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),Ot(e)}else e._isValid=!1}function Mt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),Ne.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}function Dt(e){var t,n,s,i,r=pt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(r){if(t=Mt(r[4],r[3],r[2],r[5],r[6],r[7]),n=r[1],s=t,i=e,n&&ze.indexOf(n)!==new Date(s[0],s[1],s[2]).getDay()&&(y(i).weekdayMismatch=!0,!void(i._isValid=!1)))return;e._a=t,e._tzm=function(e,t,n){if(e)return vt[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return 60*((s-i)/100)+i}(r[8],r[9],r[10]),e._d=Ve.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),y(e).rfc2822=!0}else e._isValid=!1}function St(e,t,n){return null!=e?e:null!=t?t:n}function Yt(e){var t,n,s,i,r,a,o,u=[];if(!e._d){for(a=e,o=new Date(f.now()),s=a._useUTC?[o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()]:[o.getFullYear(),o.getMonth(),o.getDate()],e._w&&null==e._a[ke]&&null==e._a[ve]&&function(e){var t,n,s,i,r,a,o,u,l;null!=(t=e._w).GG||null!=t.W||null!=t.E?(r=1,a=4,n=St(t.GG,e._a[pe],Ae(Tt(),1,4).year),s=St(t.W,1),((i=St(t.E,1))<1||7<i)&&(u=!0)):(r=e._locale._week.dow,a=e._locale._week.doy,l=Ae(Tt(),r,a),n=St(t.gg,e._a[pe],l.year),s=St(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r);s<1||s>je(n,r,a)?y(e)._overflowWeeks=!0:null!=u?y(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[pe]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=St(e._a[pe],s[pe]),(e._dayOfYear>Fe(r)||0===e._dayOfYear)&&(y(e)._overflowDayOfYear=!0),n=Ve(r,0,e._dayOfYear),e._a[ve]=n.getUTCMonth(),e._a[ke]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=u[t]=s[t];for(;t<7;t++)e._a[t]=u[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[Me]&&0===e._a[De]&&0===e._a[Se]&&0===e._a[Ye]&&(e._nextDay=!0,e._a[Me]=0),e._d=(e._useUTC?Ve:function(e,t,n,s,i,r,a){var o;return e<100&&0<=e?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}).apply(null,u),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Me]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(y(e).weekdayMismatch=!0)}}function Ot(e){if(e._f!==f.ISO_8601)if(e._f!==f.RFC_2822){e._a=[],y(e).empty=!0;for(var t,n,s,i,r,a,o,u=""+e._i,l=u.length,h=0,d=H(e._f,e._locale).match(N)||[],c=0;c<d.length;c++)n=d[c],(t=(u.match(fe(n,e))||[])[0])&&(0<(s=u.substr(0,u.indexOf(t))).length&&y(e).unusedInput.push(s),u=u.slice(u.indexOf(t)+t.length),h+=t.length),W[n]?(t?y(e).empty=!1:y(e).unusedTokens.push(n),r=n,o=e,null!=(a=t)&&m(_e,r)&&_e[r](a,o._a,o,r)):e._strict&&!t&&y(e).unusedTokens.push(n);y(e).charsLeftOver=l-h,0<u.length&&y(e).unusedInput.push(u),e._a[Me]<=12&&!0===y(e).bigHour&&0<e._a[Me]&&(y(e).bigHour=void 0),y(e).parsedDateParts=e._a.slice(0),y(e).meridiem=e._meridiem,e._a[Me]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[Me],e._meridiem),null!==(i=y(e).era)&&(e._a[pe]=e._locale.erasConvertYear(i,e._a[pe])),Yt(e),ct(e)}else Dt(e);else kt(e)}function bt(e){var t,n,s=e._i,i=e._f;return e._locale=e._locale||dt(e._l),null===s||void 0===i&&""===s?w({nullInput:!0}):("string"==typeof s&&(e._i=s=e._locale.preparse(s)),M(s)?new k(ct(s)):(a(s)?e._d=s:o(i)?function(e){var t,n,s,i,r,a,o=!1;if(0===e._f.length)return y(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,a=!1,t=v({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Ot(t),g(t)&&(a=!0),r+=y(t).charsLeftOver,r+=10*y(t).unusedTokens.length,y(t).score=r,o?r<s&&(s=r,n=t):(null==s||r<s||a)&&(s=r,n=t,a&&(o=!0));c(e,n||t)}(e):i?Ot(e):r(n=(t=e)._i)?t._d=new Date(f.now()):a(n)?t._d=new Date(n.valueOf()):"string"==typeof n?function(e){var t=wt.exec(e._i);null===t?(kt(e),!1===e._isValid&&(delete e._isValid,Dt(e),!1===e._isValid&&(delete e._isValid,e._strict?e._isValid=!1:f.createFromInputFallback(e)))):e._d=new Date(+t[1])}(t):o(n)?(t._a=d(n.slice(0),function(e){return parseInt(e,10)}),Yt(t)):u(n)?function(e){var t,n;e._d||(n=void 0===(t=G(e._i)).day?t.date:t.day,e._a=d([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),Yt(e))}(t):h(n)?t._d=new Date(n):f.createFromInputFallback(t),g(e)||(e._d=null),e))}function xt(e,t,n,s,i){var r,a={};return!0!==t&&!1!==t||(s=t,t=void 0),!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&l(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new k(ct(bt(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Tt(e,t,n,s){return xt(e,t,n,s,!1)}f.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),f.ISO_8601=function(){},f.RFC_2822=function(){};var Nt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:w()}),Pt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:w()});function Rt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return Tt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ct(e){var t=G(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||t.isoWeek||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,h=t.millisecond||0;this._isValid=function(e){var t,n,s=!1;for(t in e)if(m(e,t)&&(-1===we.call(Wt,t)||null!=e[t]&&isNaN(e[t])))return!1;for(n=0;n<Wt.length;++n)if(e[Wt[n]]){if(s)return!1;parseFloat(e[Wt[n]])!==Z(e[Wt[n]])&&(s=!0)}return!0}(t),this._milliseconds=+h+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=dt(),this._bubble()}function Ut(e){return e instanceof Ct}function Ht(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){C(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+T(~~(e/60),2)+n+T(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ce("Z",he),ce("ZZ",he),ye(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Vt(he,e)});var Lt=/([\+\-]|\d\d)/gi;function Vt(e,t){var n,s,i=(t||"").match(e);return null===i?null:0===(s=60*(n=((i[i.length-1]||[])+"").match(Lt)||["-",0,0])[1]+Z(n[2]))?0:"+"===n[0]?s:-s}function Gt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(M(e)||a(e)?e.valueOf():Tt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),f.updateOffset(n,!1),n):Tt(e).local()}function Et(e){return-Math.round(e._d.getTimezoneOffset())}function At(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}f.updateOffset=function(){};var jt=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,It=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Zt(e,t){var n,s,i,r=e,a=null;return Ut(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:h(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(a=jt.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:Z(a[ke])*n,h:Z(a[Me])*n,m:Z(a[De])*n,s:Z(a[Se])*n,ms:Z(Ht(1e3*a[Ye]))*n}):(a=It.exec(e))?(n="-"===a[1]?-1:1,r={y:zt(a[2],n),M:zt(a[3],n),w:zt(a[4],n),d:zt(a[5],n),h:zt(a[6],n),m:zt(a[7],n),s:zt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Gt(t,e),e.isBefore(t)?n=$t(e,t):((n=$t(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(Tt(r.from),Tt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ct(r),Ut(e)&&m(e,"_locale")&&(s._locale=e._locale),Ut(e)&&m(e,"_isValid")&&(s._isValid=e._isValid),s}function zt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function $t(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=t-e.clone().add(n.months,"M"),n}function qt(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(Y(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),Bt(this,Zt(e,t),s),this}}function Bt(e,t,n,s){var i=t._milliseconds,r=Ht(t._days),a=Ht(t._months);e.isValid()&&(s=null==s||s,a&&Ce(e,$(e,"Month")+a*n),r&&q(e,"Date",$(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&f.updateOffset(e,r||a))}Zt.fn=Ct.prototype,Zt.invalid=function(){return Zt(NaN)};var Jt=qt(1,"add"),Qt=qt(-1,"subtract");function Xt(e){return"string"==typeof e||e instanceof String}function Kt(e){return M(e)||a(e)||Xt(e)||h(e)||function(t){var e=o(t),n=!1;e&&(n=0===t.filter(function(e){return!h(e)&&Xt(t)}).length);return e&&n}(e)||function(e){var t,n,s=u(e)&&!l(e),i=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"];for(t=0;t<r.length;t+=1)n=r[t],i=i||m(e,n);return s&&i}(e)||null==e}function en(e,t){if(e.date()<t.date())return-en(t,e);var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months"),i=t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(1+n,"months")-s);return-(n+i)||0}function tn(e){var t;return void 0===e?this._locale._abbr:(null!=(t=dt(e))&&(this._locale=t),this)}f.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",f.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var nn=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function sn(){return this._locale}var rn=126227808e5;function an(e,t){return(e%t+t)%t}function on(e,t,n){return e<100&&0<=e?new Date(e+400,t,n)-rn:new Date(e,t,n).valueOf()}function un(e,t,n){return e<100&&0<=e?Date.UTC(e+400,t,n)-rn:Date.UTC(e,t,n)}function ln(e,t){return t.erasAbbrRegex(e)}function hn(){for(var e=[],t=[],n=[],s=[],i=this.eras(),r=0,a=i.length;r<a;++r)t.push(me(i[r].name)),e.push(me(i[r].abbr)),n.push(me(i[r].narrow)),s.push(me(i[r].name)),s.push(me(i[r].abbr)),s.push(me(i[r].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}function dn(e,t){C(0,[e,e.length],0,t)}function cn(e,t,n,s,i){var r;return null==e?Ae(this,s,i).year:((r=je(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ve(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}C("N",0,0,"eraAbbr"),C("NN",0,0,"eraAbbr"),C("NNN",0,0,"eraAbbr"),C("NNNN",0,0,"eraName"),C("NNNNN",0,0,"eraNarrow"),C("y",["y",1],"yo","eraYear"),C("y",["yy",2],0,"eraYear"),C("y",["yyy",3],0,"eraYear"),C("y",["yyyy",4],0,"eraYear"),ce("N",ln),ce("NN",ln),ce("NNN",ln),ce("NNNN",function(e,t){return t.erasNameRegex(e)}),ce("NNNNN",function(e,t){return t.erasNarrowRegex(e)}),ye(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,s){var i=n._locale.erasParse(e,s,n._strict);i?y(n).era=i:y(n).invalidEra=e}),ce("y",oe),ce("yy",oe),ce("yyy",oe),ce("yyyy",oe),ce("yo",function(e,t){return t._eraYearOrdinalRegex||oe}),ye(["y","yy","yyy","yyyy"],pe),ye(["yo"],function(e,t,n,s){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[pe]=n._locale.eraYearOrdinalParse(e,i):t[pe]=parseInt(e,10)}),C(0,["gg",2],0,function(){return this.weekYear()%100}),C(0,["GG",2],0,function(){return this.isoWeekYear()%100}),dn("gggg","weekYear"),dn("ggggg","weekYear"),dn("GGGG","isoWeekYear"),dn("GGGGG","isoWeekYear"),L("weekYear","gg"),L("isoWeekYear","GG"),A("weekYear",1),A("isoWeekYear",1),ce("G",ue),ce("g",ue),ce("GG",te,Q),ce("gg",te,Q),ce("GGGG",re,K),ce("gggg",re,K),ce("GGGGG",ae,ee),ce("ggggg",ae,ee),ge(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=Z(e)}),ge(["gg","GG"],function(e,t,n,s){t[s]=f.parseTwoDigitYear(e)}),C("Q",0,"Qo","quarter"),L("quarter","Q"),A("quarter",7),ce("Q",J),ye("Q",function(e,t){t[ve]=3*(Z(e)-1)}),C("D",["DD",2],"Do","date"),L("date","D"),A("date",9),ce("D",te),ce("DD",te,Q),ce("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ye(["D","DD"],ke),ye("Do",function(e,t){t[ke]=Z(e.match(te)[0])});var fn=z("Date",!0);C("DDD",["DDDD",3],"DDDo","dayOfYear"),L("dayOfYear","DDD"),A("dayOfYear",4),ce("DDD",ie),ce("DDDD",X),ye(["DDD","DDDD"],function(e,t,n){n._dayOfYear=Z(e)}),C("m",["mm",2],0,"minute"),L("minute","m"),A("minute",14),ce("m",te),ce("mm",te,Q),ye(["m","mm"],De);var mn=z("Minutes",!1);C("s",["ss",2],0,"second"),L("second","s"),A("second",15),ce("s",te),ce("ss",te,Q),ye(["s","ss"],Se);var _n,yn,gn=z("Seconds",!1);for(C("S",0,0,function(){return~~(this.millisecond()/100)}),C(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),C(0,["SSS",3],0,"millisecond"),C(0,["SSSS",4],0,function(){return 10*this.millisecond()}),C(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),C(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),C(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),C(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),C(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),L("millisecond","ms"),A("millisecond",16),ce("S",ie,J),ce("SS",ie,Q),ce("SSS",ie,X),_n="SSSS";_n.length<=9;_n+="S")ce(_n,oe);function wn(e,t){t[Ye]=Z(1e3*("0."+e))}for(_n="S";_n.length<=9;_n+="S")ye(_n,wn);yn=z("Milliseconds",!1),C("z",0,0,"zoneAbbr"),C("zz",0,0,"zoneName");var pn=k.prototype;function vn(e){return e}pn.add=Jt,pn.calendar=function(e,t){1===arguments.length&&(arguments[0]?Kt(arguments[0])?(e=arguments[0],t=void 0):function(e){for(var t=u(e)&&!l(e),n=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i=0;i<s.length;i+=1)n=n||m(e,s[i]);return t&&n}(arguments[0])&&(t=arguments[0],e=void 0):t=e=void 0);var n=e||Tt(),s=Gt(n,this).startOf("day"),i=f.calendarFormat(this,s)||"sameElse",r=t&&(O(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,Tt(n)))},pn.clone=function(){return new k(this)},pn.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Gt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=V(t)){case"year":r=en(this,s)/12;break;case"month":r=en(this,s);break;case"quarter":r=en(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:I(r)},pn.endOf=function(e){var t,n;if(void 0===(e=V(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?un:on,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=36e5-an(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":t=this._d.valueOf(),t+=6e4-an(t,6e4)-1;break;case"second":t=this._d.valueOf(),t+=1e3-an(t,1e3)-1;break}return this._d.setTime(t),f.updateOffset(this,!0),this},pn.format=function(e){e=e||(this.isUtc()?f.defaultFormatUtc:f.defaultFormat);var t=U(this,e);return this.localeData().postformat(t)},pn.from=function(e,t){return this.isValid()&&(M(e)&&e.isValid()||Tt(e).isValid())?Zt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},pn.fromNow=function(e){return this.from(Tt(),e)},pn.to=function(e,t){return this.isValid()&&(M(e)&&e.isValid()||Tt(e).isValid())?Zt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},pn.toNow=function(e){return this.to(Tt(),e)},pn.get=function(e){return O(this[e=V(e)])?this[e]():this},pn.invalidAt=function(){return y(this).overflow},pn.isAfter=function(e,t){var n=M(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=V(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},pn.isBefore=function(e,t){var n=M(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=V(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},pn.isBetween=function(e,t,n,s){var i=M(e)?e:Tt(e),r=M(t)?t:Tt(t);return!!(this.isValid()&&i.isValid()&&r.isValid())&&(("("===(s=s||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===s[1]?this.isBefore(r,n):!this.isAfter(r,n)))},pn.isSame=function(e,t){var n,s=M(e)?e:Tt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=V(t)||"millisecond")?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},pn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},pn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},pn.isValid=function(){return g(this)},pn.lang=nn,pn.locale=tn,pn.localeData=sn,pn.max=Pt,pn.min=Nt,pn.parsingFlags=function(){return c({},y(this))},pn.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t,n=[];for(t in e)m(e,t)&&n.push({unit:t,priority:E[t]});return n.sort(function(e,t){return e.priority-t.priority}),n}(e=G(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(O(this[e=V(e)]))return this[e](t);return this},pn.startOf=function(e){var t,n;if(void 0===(e=V(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?un:on,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=an(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":t=this._d.valueOf(),t-=an(t,6e4);break;case"second":t=this._d.valueOf(),t-=an(t,1e3);break}return this._d.setTime(t),f.updateOffset(this,!0),this},pn.subtract=Qt,pn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},pn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},pn.toDate=function(){return new Date(this.valueOf())},pn.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?U(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):O(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",U(n,"Z")):U(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},pn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,t,n,s="moment",i="";return this.isLocal()||(s=0===this.utcOffset()?"moment.utc":"moment.parseZone",i="Z"),e="["+s+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n=i+'[")]',this.format(e+t+"-MM-DD[T]HH:mm:ss.SSS"+n)},"undefined"!=typeof Symbol&&null!=Symbol.for&&(pn[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),pn.toJSON=function(){return this.isValid()?this.toISOString():null},pn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},pn.unix=function(){return Math.floor(this.valueOf()/1e3)},pn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},pn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},pn.eraName=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].name;if(t[n].until<=e&&e<=t[n].since)return t[n].name}return""},pn.eraNarrow=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].narrow;if(t[n].until<=e&&e<=t[n].since)return t[n].narrow}return""},pn.eraAbbr=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].abbr;if(t[n].until<=e&&e<=t[n].since)return t[n].abbr}return""},pn.eraYear=function(){for(var e,t,n=this.localeData().eras(),s=0,i=n.length;s<i;++s)if(e=n[s].since<=n[s].until?1:-1,t=this.clone().startOf("day").valueOf(),n[s].since<=t&&t<=n[s].until||n[s].until<=t&&t<=n[s].since)return(this.year()-f(n[s].since).year())*e+n[s].offset;return this.year()},pn.year=Le,pn.isLeapYear=function(){return j(this.year())},pn.weekYear=function(e){return cn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},pn.isoWeekYear=function(e){return cn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},pn.quarter=pn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},pn.month=Ue,pn.daysInMonth=function(){return xe(this.year(),this.month())},pn.week=pn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},pn.isoWeek=pn.isoWeeks=function(e){var t=Ae(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},pn.weeksInYear=function(){var e=this.localeData()._week;return je(this.year(),e.dow,e.doy)},pn.weeksInWeekYear=function(){var e=this.localeData()._week;return je(this.weekYear(),e.dow,e.doy)},pn.isoWeeksInYear=function(){return je(this.year(),1,4)},pn.isoWeeksInISOWeekYear=function(){return je(this.isoWeekYear(),1,4)},pn.date=fn,pn.day=pn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},pn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},pn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null==e)return this.day()||7;var t,n,s=(t=e,n=this.localeData(),"string"==typeof t?n.weekdaysParse(t)%7||7:isNaN(t)?null:t);return this.day(this.day()%7?s:s-7)},pn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},pn.hour=pn.hours=tt,pn.minute=pn.minutes=mn,pn.second=pn.seconds=gn,pn.millisecond=pn.milliseconds=yn,pn.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?i:Et(this);if("string"==typeof e){if(null===(e=Vt(he,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Et(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?Bt(this,Zt(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,f.updateOffset(this,!0),this._changeInProgress=null)),this},pn.utc=function(e){return this.utcOffset(0,e)},pn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Et(this),"m")),this},pn.parseZone=function(){var e;return null!=this._tzm?this.utcOffset(this._tzm,!1,!0):"string"==typeof this._i&&(null!=(e=Vt(le,this._i))?this.utcOffset(e):this.utcOffset(0,!0)),this},pn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Tt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},pn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},pn.isLocal=function(){return!!this.isValid()&&!this._isUTC},pn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},pn.isUtc=At,pn.isUTC=At,pn.zoneAbbr=function(){return this._isUTC?"UTC":""},pn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},pn.dates=n("dates accessor is deprecated. Use date instead.",fn),pn.months=n("months accessor is deprecated. Use month instead",Ue),pn.years=n("years accessor is deprecated. Use year instead",Le),pn.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),pn.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!r(this._isDSTShifted))return this._isDSTShifted;var e,t={};return v(t,this),(t=bt(t))._a?(e=(t._isUTC?_:Tt)(t._a),this._isDSTShifted=this.isValid()&&0<function(e,t,n){for(var s=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),r=0,a=0;a<s;a++)(n&&e[a]!==t[a]||!n&&Z(e[a])!==Z(t[a]))&&r++;return r+i}(t._a,e.toArray())):this._isDSTShifted=!1,this._isDSTShifted});var kn=x.prototype;function Mn(e,t,n,s){var i=dt(),r=_().set(s,t);return i[n](r,e)}function Dn(e,t,n){if(h(e)&&(t=e,e=void 0),e=e||"",null!=t)return Mn(e,t,n,"month");for(var s=[],i=0;i<12;i++)s[i]=Mn(e,i,n,"month");return s}function Sn(e,t,n,s){t=("boolean"==typeof e?h(t)&&(n=t,t=void 0):(t=e,e=!1,h(n=t)&&(n=t,t=void 0)),t||"");var i,r=dt(),a=e?r._week.dow:0,o=[];if(null!=n)return Mn(t,(n+a)%7,s,"day");for(i=0;i<7;i++)o[i]=Mn(t,(i+a)%7,s,"day");return o}kn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return O(s)?s.call(t,n):s},kn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(N).map(function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e}).join(""),this._longDateFormat[e])},kn.invalidDate=function(){return this._invalidDate},kn.ordinal=function(e){return this._ordinal.replace("%d",e)},kn.preparse=vn,kn.postformat=vn,kn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return O(i)?i(e,t,n,s):i.replace(/%d/i,e)},kn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return O(n)?n(t):n.replace(/%s/i,t)},kn.set=function(e){var t,n;for(n in e)m(e,n)&&(O(t=e[n])?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},kn.eras=function(e,t){for(var n,s=this._eras||dt("en")._eras,i=0,r=s.length;i<r;++i){switch(typeof s[i].since){case"string":n=f(s[i].since).startOf("day"),s[i].since=n.valueOf();break}switch(typeof s[i].until){case"undefined":s[i].until=1/0;break;case"string":n=f(s[i].until).startOf("day").valueOf(),s[i].until=n.valueOf();break}}return s},kn.erasParse=function(e,t,n){var s,i,r,a,o,u=this.eras();for(e=e.toUpperCase(),s=0,i=u.length;s<i;++s)if(r=u[s].name.toUpperCase(),a=u[s].abbr.toUpperCase(),o=u[s].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(a===e)return u[s];break;case"NNNN":if(r===e)return u[s];break;case"NNNNN":if(o===e)return u[s];break}else if(0<=[r,a,o].indexOf(e))return u[s]},kn.erasConvertYear=function(e,t){var n=e.since<=e.until?1:-1;return void 0===t?f(e.since).year():f(e.since).year()+(t-e.offset)*n},kn.erasAbbrRegex=function(e){return m(this,"_erasAbbrRegex")||hn.call(this),e?this._erasAbbrRegex:this._erasRegex},kn.erasNameRegex=function(e){return m(this,"_erasNameRegex")||hn.call(this),e?this._erasNameRegex:this._erasRegex},kn.erasNarrowRegex=function(e){return m(this,"_erasNarrowRegex")||hn.call(this),e?this._erasNarrowRegex:this._erasRegex},kn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Pe).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},kn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Pe.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},kn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=_([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=we.call(this._shortMonthsParse,a))?i:null:-1!==(i=we.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=we.call(this._shortMonthsParse,a))||-1!==(i=we.call(this._longMonthsParse,a))?i:null:-1!==(i=we.call(this._longMonthsParse,a))||-1!==(i=we.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=_([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},kn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||He.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=We),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},kn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||He.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Re),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},kn.week=function(e){return Ae(e,this._week.dow,this._week.doy).week},kn.firstDayOfYear=function(){return this._week.doy},kn.firstDayOfWeek=function(){return this._week.dow},kn.weekdays=function(e,t){var n=o(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?Ie(n,this._week.dow):e?n[e.day()]:n},kn.weekdaysMin=function(e){return!0===e?Ie(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},kn.weekdaysShort=function(e){return!0===e?Ie(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},kn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=_([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=we.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=we.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=we.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=we.call(this._weekdaysParse,a))||-1!==(i=we.call(this._shortWeekdaysParse,a))||-1!==(i=we.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=we.call(this._shortWeekdaysParse,a))||-1!==(i=we.call(this._weekdaysParse,a))||-1!==(i=we.call(this._minWeekdaysParse,a))?i:null:-1!==(i=we.call(this._minWeekdaysParse,a))||-1!==(i=we.call(this._weekdaysParse,a))||-1!==(i=we.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=_([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},kn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=qe),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},kn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Be),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},kn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Je),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},kn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},kn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},lt("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===Z(e%100/10)?"th":1==t?"st":2==t?"nd":3==t?"rd":"th")}}),f.lang=n("moment.lang is deprecated. Use moment.locale instead.",lt),f.langData=n("moment.langData is deprecated. Use moment.localeData instead.",dt);var Yn=Math.abs;function On(e,t,n,s){var i=Zt(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function bn(e){return e<0?Math.floor(e):Math.ceil(e)}function xn(e){return 4800*e/146097}function Tn(e){return 146097*e/4800}function Nn(e){return function(){return this.as(e)}}var Pn=Nn("ms"),Rn=Nn("s"),Wn=Nn("m"),Cn=Nn("h"),Un=Nn("d"),Hn=Nn("w"),Fn=Nn("M"),Ln=Nn("Q"),Vn=Nn("y");function Gn(e){return function(){return this.isValid()?this._data[e]:NaN}}var En=Gn("milliseconds"),An=Gn("seconds"),jn=Gn("minutes"),In=Gn("hours"),Zn=Gn("days"),zn=Gn("months"),$n=Gn("years");var qn=Math.round,Bn={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Jn(e,t,n,s){var i=Zt(e).abs(),r=qn(i.as("s")),a=qn(i.as("m")),o=qn(i.as("h")),u=qn(i.as("d")),l=qn(i.as("M")),h=qn(i.as("w")),d=qn(i.as("y")),c=(r<=n.ss?["s",r]:r<n.s&&["ss",r])||a<=1&&["m"]||a<n.m&&["mm",a]||o<=1&&["h"]||o<n.h&&["hh",o]||u<=1&&["d"]||u<n.d&&["dd",u];return null!=n.w&&(c=c||h<=1&&["w"]||h<n.w&&["ww",h]),(c=c||l<=1&&["M"]||l<n.M&&["MM",l]||d<=1&&["y"]||["yy",d])[2]=t,c[3]=0<+e,c[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,c)}var Qn=Math.abs;function Xn(e){return(0<e)-(e<0)||+e}function Kn(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,s,i,r,a,o,u=Qn(this._milliseconds)/1e3,l=Qn(this._days),h=Qn(this._months),d=this.asSeconds();return d?(e=I(u/60),t=I(e/60),u%=60,e%=60,n=I(h/12),h%=12,s=u?u.toFixed(3).replace(/\.?0+$/,""):"",i=d<0?"-":"",r=Xn(this._months)!==Xn(d)?"-":"",a=Xn(this._days)!==Xn(d)?"-":"",o=Xn(this._milliseconds)!==Xn(d)?"-":"",i+"P"+(n?r+n+"Y":"")+(h?r+h+"M":"")+(l?a+l+"D":"")+(t||e||u?"T":"")+(t?o+t+"H":"")+(e?o+e+"M":"")+(u?o+s+"S":"")):"P0D"}var es=Ct.prototype;return es.isValid=function(){return this._isValid},es.abs=function(){var e=this._data;return this._milliseconds=Yn(this._milliseconds),this._days=Yn(this._days),this._months=Yn(this._months),e.milliseconds=Yn(e.milliseconds),e.seconds=Yn(e.seconds),e.minutes=Yn(e.minutes),e.hours=Yn(e.hours),e.months=Yn(e.months),e.years=Yn(e.years),this},es.add=function(e,t){return On(this,e,t,1)},es.subtract=function(e,t){return On(this,e,t,-1)},es.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=V(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,n=this._months+xn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Tn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},es.asMilliseconds=Pn,es.asSeconds=Rn,es.asMinutes=Wn,es.asHours=Cn,es.asDays=Un,es.asWeeks=Hn,es.asMonths=Fn,es.asQuarters=Ln,es.asYears=Vn,es.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*Z(this._months/12):NaN},es._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*bn(Tn(o)+a),o=a=0),u.milliseconds=r%1e3,e=I(r/1e3),u.seconds=e%60,t=I(e/60),u.minutes=t%60,n=I(t/60),u.hours=n%24,a+=I(n/24),o+=i=I(xn(a)),a-=bn(Tn(i)),s=I(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},es.clone=function(){return Zt(this)},es.get=function(e){return e=V(e),this.isValid()?this[e+"s"]():NaN},es.milliseconds=En,es.seconds=An,es.minutes=jn,es.hours=In,es.days=Zn,es.weeks=function(){return I(this.days()/7)},es.months=zn,es.years=$n,es.humanize=function(e,t){if(!this.isValid())return this.localeData().invalidDate();var n,s,i=!1,r=Bn;return"object"==typeof e&&(t=e,e=!1),"boolean"==typeof e&&(i=e),"object"==typeof t&&(r=Object.assign({},Bn,t),null!=t.s&&null==t.ss&&(r.ss=t.s-1)),n=this.localeData(),s=Jn(this,!i,r,n),i&&(s=n.pastFuture(+this,s)),n.postformat(s)},es.toISOString=Kn,es.toString=Kn,es.toJSON=Kn,es.locale=tn,es.localeData=sn,es.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Kn),es.lang=nn,C("X",0,0,"unix"),C("x",0,0,"valueOf"),ce("x",ue),ce("X",/[+-]?\d+(\.\d{1,3})?/),ye("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e))}),ye("x",function(e,t,n){n._d=new Date(Z(e))}),f.version="2.29.1",e=Tt,f.fn=pn,f.min=function(){return Rt("isBefore",[].slice.call(arguments,0))},f.max=function(){return Rt("isAfter",[].slice.call(arguments,0))},f.now=function(){return Date.now?Date.now():+new Date},f.utc=_,f.unix=function(e){return Tt(1e3*e)},f.months=function(e,t){return Dn(e,t,"months")},f.isDate=a,f.locale=lt,f.invalid=w,f.duration=Zt,f.isMoment=M,f.weekdays=function(e,t,n){return Sn(e,t,n,"weekdays")},f.parseZone=function(){return Tt.apply(null,arguments).parseZone()},f.localeData=dt,f.isDuration=Ut,f.monthsShort=function(e,t){return Dn(e,t,"monthsShort")},f.weekdaysMin=function(e,t,n){return Sn(e,t,n,"weekdaysMin")},f.defineLocale=ht,f.updateLocale=function(e,t){var n,s,i;return null!=t?(i=st,null!=it[e]&&null!=it[e].parentLocale?it[e].set(b(it[e]._config,t)):(null!=(s=ut(e))&&(i=s._config),t=b(i,t),null==s&&(t.abbr=e),(n=new x(t)).parentLocale=it[e],it[e]=n),lt(e)):null!=it[e]&&(null!=it[e].parentLocale?(it[e]=it[e].parentLocale,e===lt()&&lt(e)):null!=it[e]&&delete it[e]),it[e]},f.locales=function(){return s(it)},f.weekdaysShort=function(e,t,n){return Sn(e,t,n,"weekdaysShort")},f.normalizeUnits=V,f.relativeTimeRounding=function(e){return void 0===e?qn:"function"==typeof e&&(qn=e,!0)},f.relativeTimeThreshold=function(e,t){return void 0!==Bn[e]&&(void 0===t?Bn[e]:(Bn[e]=t,"s"===e&&(Bn.ss=t-1),!0))},f.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},f.prototype=pn,f.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},f});
//# sourceMappingURL=moment.min.js.map
/**
* @version: 3.1
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2019 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: http://www.daterangepicker.com/
*/
// Following the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Make globaly available as well
        define(['moment', 'jquery'], function (moment, jquery) {
            if (!jquery.fn) jquery.fn = {}; // webpack server rendering
            if (typeof moment !== 'function' && moment.hasOwnProperty('default')) moment = moment['default']
            return factory(moment, jquery);
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node / Browserify
        //isomorphic issue
        var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined;
        if (!jQuery) {
            jQuery = require('jquery');
            if (!jQuery.fn) jQuery.fn = {};
        }
        var moment = (typeof window != 'undefined' && typeof window.moment != 'undefined') ? window.moment : require('moment');
        module.exports = factory(moment, jQuery);
    } else {
        // Browser globals
        root.daterangepicker = factory(root.moment, root.jQuery);
    }
}(this, function(moment, $) {
    var DateRangePicker = function(element, options, cb) {

        //default settings for options
        this.parentEl = 'body';
        this.element = $(element);
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.maxSpan = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.minYear = moment().subtract(100, 'year').format('YYYY');
        this.maxYear = moment().add(100, 'year').format('YYYY');
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.showCustomRangeLabel = true;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};

        this.opens = 'right';
        if (this.element.hasClass('pull-right'))
            this.opens = 'left';

        this.drops = 'down';
        if (this.element.hasClass('dropup'))
            this.drops = 'up';

        this.buttonClasses = 'btn btn-sm';
        this.applyButtonClasses = 'btn-primary';
        this.cancelButtonClasses = 'btn-default';

        this.locale = {
            direction: 'ltr',
            format: moment.localeData().longDateFormat('L'),
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };

        this.callback = function() { };

        //some state information
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};

        //custom options from user
        if (typeof options !== 'object' || options === null)
            options = {};

        //allow setting options with data attributes
        //data-api options will be overwritten with custom javascript options
        options = $.extend(this.element.data(), options);

        //html template for the picker UI
        if (typeof options.template !== 'string' && !(options.template instanceof $))
            options.template =
            '<div class="daterangepicker">' +
                '<div class="ranges"></div>' +
                '<div class="drp-calendar left">' +
                    '<div class="calendar-table"></div>' +
                    '<div class="calendar-time"></div>' +
                '</div>' +
                '<div class="drp-calendar right">' +
                    '<div class="calendar-table"></div>' +
                    '<div class="calendar-time"></div>' +
                '</div>' +
                '<div class="drp-buttons">' +
                    '<span class="drp-selected"></span>' +
                    '<button class="cancelBtn" type="button"></button>' +
                    '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
                '</div>' +
            '</div>';

        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);

        //
        // handle all the possible options overriding defaults
        //

        if (typeof options.locale === 'object') {

            if (typeof options.locale.direction === 'string')
                this.locale.direction = options.locale.direction;

            if (typeof options.locale.format === 'string')
                this.locale.format = options.locale.format;

            if (typeof options.locale.separator === 'string')
                this.locale.separator = options.locale.separator;

            if (typeof options.locale.daysOfWeek === 'object')
                this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

            if (typeof options.locale.monthNames === 'object')
              this.locale.monthNames = options.locale.monthNames.slice();

            if (typeof options.locale.firstDay === 'number')
              this.locale.firstDay = options.locale.firstDay;

            if (typeof options.locale.applyLabel === 'string')
              this.locale.applyLabel = options.locale.applyLabel;

            if (typeof options.locale.cancelLabel === 'string')
              this.locale.cancelLabel = options.locale.cancelLabel;

            if (typeof options.locale.weekLabel === 'string')
              this.locale.weekLabel = options.locale.weekLabel;

            if (typeof options.locale.customRangeLabel === 'string'){
                //Support unicode chars in the custom range name.
                var elem = document.createElement('textarea');
                elem.innerHTML = options.locale.customRangeLabel;
                var rangeHtml = elem.value;
                this.locale.customRangeLabel = rangeHtml;
            }
        }
        this.container.addClass(this.locale.direction);

        if (typeof options.startDate === 'string')
            this.startDate = moment(options.startDate, this.locale.format);

        if (typeof options.endDate === 'string')
            this.endDate = moment(options.endDate, this.locale.format);

        if (typeof options.minDate === 'string')
            this.minDate = moment(options.minDate, this.locale.format);

        if (typeof options.maxDate === 'string')
            this.maxDate = moment(options.maxDate, this.locale.format);

        if (typeof options.startDate === 'object')
            this.startDate = moment(options.startDate);

        if (typeof options.endDate === 'object')
            this.endDate = moment(options.endDate);

        if (typeof options.minDate === 'object')
            this.minDate = moment(options.minDate);

        if (typeof options.maxDate === 'object')
            this.maxDate = moment(options.maxDate);

        // sanity check for bad options
        if (this.minDate && this.startDate.isBefore(this.minDate))
            this.startDate = this.minDate.clone();

        // sanity check for bad options
        if (this.maxDate && this.endDate.isAfter(this.maxDate))
            this.endDate = this.maxDate.clone();

        if (typeof options.applyButtonClasses === 'string')
            this.applyButtonClasses = options.applyButtonClasses;

        if (typeof options.applyClass === 'string') //backwards compat
            this.applyButtonClasses = options.applyClass;

        if (typeof options.cancelButtonClasses === 'string')
            this.cancelButtonClasses = options.cancelButtonClasses;

        if (typeof options.cancelClass === 'string') //backwards compat
            this.cancelButtonClasses = options.cancelClass;

        if (typeof options.maxSpan === 'object')
            this.maxSpan = options.maxSpan;

        if (typeof options.dateLimit === 'object') //backwards compat
            this.maxSpan = options.dateLimit;

        if (typeof options.opens === 'string')
            this.opens = options.opens;

        if (typeof options.drops === 'string')
            this.drops = options.drops;

        if (typeof options.showWeekNumbers === 'boolean')
            this.showWeekNumbers = options.showWeekNumbers;

        if (typeof options.showISOWeekNumbers === 'boolean')
            this.showISOWeekNumbers = options.showISOWeekNumbers;

        if (typeof options.buttonClasses === 'string')
            this.buttonClasses = options.buttonClasses;

        if (typeof options.buttonClasses === 'object')
            this.buttonClasses = options.buttonClasses.join(' ');

        if (typeof options.showDropdowns === 'boolean')
            this.showDropdowns = options.showDropdowns;

        if (typeof options.minYear === 'number')
            this.minYear = options.minYear;

        if (typeof options.maxYear === 'number')
            this.maxYear = options.maxYear;

        if (typeof options.showCustomRangeLabel === 'boolean')
            this.showCustomRangeLabel = options.showCustomRangeLabel;

        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker)
                this.endDate = this.startDate.clone();
        }

        if (typeof options.timePicker === 'boolean')
            this.timePicker = options.timePicker;

        if (typeof options.timePickerSeconds === 'boolean')
            this.timePickerSeconds = options.timePickerSeconds;

        if (typeof options.timePickerIncrement === 'number')
            this.timePickerIncrement = options.timePickerIncrement;

        if (typeof options.timePicker24Hour === 'boolean')
            this.timePicker24Hour = options.timePicker24Hour;

        if (typeof options.autoApply === 'boolean')
            this.autoApply = options.autoApply;

        if (typeof options.autoUpdateInput === 'boolean')
            this.autoUpdateInput = options.autoUpdateInput;

        if (typeof options.linkedCalendars === 'boolean')
            this.linkedCalendars = options.linkedCalendars;

        if (typeof options.isInvalidDate === 'function')
            this.isInvalidDate = options.isInvalidDate;

        if (typeof options.isCustomDate === 'function')
            this.isCustomDate = options.isCustomDate;

        if (typeof options.alwaysShowCalendars === 'boolean')
            this.alwaysShowCalendars = options.alwaysShowCalendars;

        // update day names order to firstDay
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }

        var start, end, range;

        //if no start/end dates set, check if an input element contains initial values
        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
            if ($(this.element).is(':text')) {
                var val = $(this.element).val(),
                    split = val.split(this.locale.separator);

                start = end = null;

                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }

        if (typeof options.ranges === 'object') {
            for (range in options.ranges) {

                if (typeof options.ranges[range][0] === 'string')
                    start = moment(options.ranges[range][0], this.locale.format);
                else
                    start = moment(options.ranges[range][0]);

                if (typeof options.ranges[range][1] === 'string')
                    end = moment(options.ranges[range][1], this.locale.format);
                else
                    end = moment(options.ranges[range][1]);

                // If the start or end date exceed those allowed by the minDate or maxSpan
                // options, shorten the range to the allowable period.
                if (this.minDate && start.isBefore(this.minDate))
                    start = this.minDate.clone();

                var maxDate = this.maxDate;
                if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate))
                    maxDate = start.clone().add(this.maxSpan);
                if (maxDate && end.isAfter(maxDate))
                    end = maxDate.clone();

                // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.
                if ((this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute' : 'day'))
                  || (maxDate && start.isAfter(maxDate, this.timepicker ? 'minute' : 'day')))
                    continue;

                //Support unicode chars in the range names.
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;

                this.ranges[rangeHtml] = [start, end];
            }

            var list = '<ul>';
            for (range in this.ranges) {
                list += '<li data-range-key="' + range + '">' + range + '</li>';
            }
            if (this.showCustomRangeLabel) {
                list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + '</li>';
            }
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }

        if (typeof cb === 'function') {
            this.callback = cb;
        }

        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.endOf('day');
            this.container.find('.calendar-time').hide();
        }

        //can't be used together for now
        if (this.timePicker && this.autoApply)
            this.autoApply = false;

        if (this.autoApply) {
            this.container.addClass('auto-apply');
        }

        if (typeof options.ranges === 'object')
            this.container.addClass('show-ranges');

        if (this.singleDatePicker) {
            this.container.addClass('single');
            this.container.find('.drp-calendar.left').addClass('single');
            this.container.find('.drp-calendar.left').show();
            this.container.find('.drp-calendar.right').hide();
            if (!this.timePicker && this.autoApply) {
                this.container.addClass('auto-apply');
            }
        }

        if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) {
            this.container.addClass('show-calendar');
        }

        this.container.addClass('opens' + this.opens);

        //apply CSS classes and labels to buttons
        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
        if (this.applyButtonClasses.length)
            this.container.find('.applyBtn').addClass(this.applyButtonClasses);
        if (this.cancelButtonClasses.length)
            this.container.find('.cancelBtn').addClass(this.cancelButtonClasses);
        this.container.find('.applyBtn').html(this.locale.applyLabel);
        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

        //
        // event listeners
        //

        this.container.find('.drp-calendar')
            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
            .on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this));

        this.container.find('.ranges')
            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this));

        this.container.find('.drp-buttons')
            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this));

        if (this.element.is('input') || this.element.is('button')) {
            this.element.on({
                'click.daterangepicker': $.proxy(this.show, this),
                'focus.daterangepicker': $.proxy(this.show, this),
                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
                'keydown.daterangepicker': $.proxy(this.keydown, this) //IE 11 compatibility
            });
        } else {
            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
            this.element.on('keydown.daterangepicker', $.proxy(this.toggle, this));
        }

        //
        // if attached to a text input, set the initial value
        //

        this.updateElement();

    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        setStartDate: function(startDate) {
            if (typeof startDate === 'string')
                this.startDate = moment(startDate, this.locale.format);

            if (typeof startDate === 'object')
                this.startDate = moment(startDate);

            if (!this.timePicker)
                this.startDate = this.startDate.startOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.minDate && this.startDate.isBefore(this.minDate)) {
                this.startDate = this.minDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
                this.startDate = this.maxDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        setEndDate: function(endDate) {
            if (typeof endDate === 'string')
                this.endDate = moment(endDate, this.locale.format);

            if (typeof endDate === 'object')
                this.endDate = moment(endDate);

            if (!this.timePicker)
                this.endDate = this.endDate.endOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.endDate.isBefore(this.startDate))
                this.endDate = this.startDate.clone();

            if (this.maxDate && this.endDate.isAfter(this.maxDate))
                this.endDate = this.maxDate.clone();

            if (this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate))
                this.endDate = this.startDate.clone().add(this.maxSpan);

            this.previousRightTime = this.endDate.clone();

            this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        isInvalidDate: function() {
            return false;
        },

        isCustomDate: function() {
            return false;
        },

        updateView: function() {
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
                if (!this.endDate) {
                    this.container.find('.right .calendar-time select').prop('disabled', true).addClass('disabled');
                } else {
                    this.container.find('.right .calendar-time select').prop('disabled', false).removeClass('disabled');
                }
            }
            if (this.endDate)
                this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },

        updateMonthsInView: function() {
            if (this.endDate) {

                //if both dates are visible already, do nothing
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
                    (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    &&
                    (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    ) {
                    return;
                }

                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }

            } else {
                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
            if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
              this.rightCalendar.month = this.maxDate.clone().date(2);
              this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
            }
        },

        updateCalendars: function() {

            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    if (isNaN(minute)) {
                        minute = parseInt(this.container.find('.left .minuteselect option:last').val(), 10);
                    }
                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    if (isNaN(minute)) {
                        minute = parseInt(this.container.find('.right .minuteselect option:last').val(), 10);
                    }
                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }

            this.renderCalendar('left');
            this.renderCalendar('right');

            //highlight any predefined range matching the current start and end dates
            this.container.find('.ranges li').removeClass('active');
            if (this.endDate == null) return;

            this.calculateChosenLabel();
        },

        renderCalendar: function(side) {

            //
            // Build the matrix of dates that will populate the calendar
            //

            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;

            if (dayOfWeek == this.locale.firstDay)
                startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);

                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
                    calendar[row][col] = this.minDate.clone();
                }

                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
                    calendar[row][col] = this.maxDate.clone();
                }

            }

            //make the calendar object available to hoverDate/clickDate
            if (side == 'left') {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }

            //
            // Display the calendar
            //

            var minDate = side == 'left' ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == 'left' ? this.startDate : this.endDate;
            var arrow = this.locale.direction == 'ltr' ? {left: 'chevron-left', right: 'chevron-right'} : {left: 'chevron-right', right: 'chevron-left'};

            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th></th>';

            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
                html += '<th class="prev available"><span></span></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = (maxDate && maxDate.year()) || (this.maxYear);
                var minYear = (minDate && minDate.year()) || (this.minYear);
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;

                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || (minDate && m >= minDate.month())) && (!inMaxYear || (maxDate && m <= maxDate.month()))) {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";

                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' +
                        (y === currentYear ? ' selected="selected"' : '') +
                        '>' + y + '</option>';
                }
                yearHtml += '</select>';

                dateHtml = monthHtml + yearHtml;
            }

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
                html += '<th class="next available"><span></span></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            //adjust maxDate to reflect the maxSpan setting in order to
            //grey out end dates beyond the maxSpan
            if (this.endDate == null && this.maxSpan) {
                var maxLimit = this.startDate.clone().add(this.maxSpan).endOf('day');
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].week() + '</td>';
                else if (this.showISOWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

                for (var col = 0; col < 7; col++) {

                    var classes = [];

                    //highlight today's date
                    if (calendar[row][col].isSame(new Date(), "day"))
                        classes.push('today');

                    //highlight weekends
                    if (calendar[row][col].isoWeekday() > 5)
                        classes.push('weekend');

                    //grey out the dates in other months displayed at beginning and end of this calendar
                    if (calendar[row][col].month() != calendar[1][1].month())
                        classes.push('off', 'ends');

                    //don't allow selection of dates before the minimum date
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of dates after the maximum date
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of date if a custom function decides it's invalid
                    if (this.isInvalidDate(calendar[row][col]))
                        classes.push('off', 'disabled');

                    //highlight the currently selected start date
                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
                        classes.push('active', 'start-date');

                    //highlight the currently selected end date
                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
                        classes.push('active', 'end-date');

                    //highlight dates in-between the selected dates
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
                        classes.push('in-range');

                    //apply custom classes for this date
                    var isCustom = this.isCustomDate(calendar[row][col]);
                    if (isCustom !== false) {
                        if (typeof isCustom === 'string')
                            classes.push(isCustom);
                        else
                            Array.prototype.push.apply(classes, isCustom);
                    }

                    var cname = '', disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled')
                            disabled = true;
                    }
                    if (!disabled)
                        cname += 'available';

                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';

            this.container.find('.drp-calendar.' + side + ' .calendar-table').html(html);

        },

        renderTimePicker: function(side) {

            // Don't bother updating the time picker if it's currently disabled
            // because an end date hasn't been clicked yet
            if (side == 'right' && !this.endDate) return;

            var html, selected, minDate, maxDate = this.maxDate;

            if (this.maxSpan && (!this.maxDate || this.startDate.clone().add(this.maxSpan).isBefore(this.maxDate)))
                maxDate = this.startDate.clone().add(this.maxSpan);

            if (side == 'left') {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == 'right') {
                selected = this.endDate.clone();
                minDate = this.startDate;

                //Preserve the time already selected
                var timeSelector = this.container.find('.drp-calendar.right .calendar-time');
                if (timeSelector.html() != '') {

                    selected.hour(!isNaN(selected.hour()) ? selected.hour() : timeSelector.find('.hourselect option:selected').val());
                    selected.minute(!isNaN(selected.minute()) ? selected.minute() : timeSelector.find('.minuteselect option:selected').val());
                    selected.second(!isNaN(selected.second()) ? selected.second() : timeSelector.find('.secondselect option:selected').val());

                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find('.ampmselect option:selected').val();
                        if (ampm === 'PM' && selected.hour() < 12)
                            selected.hour(selected.hour() + 12);
                        if (ampm === 'AM' && selected.hour() === 12)
                            selected.hour(0);
                    }

                }

                if (selected.isBefore(this.startDate))
                    selected = this.startDate.clone();

                if (maxDate && selected.isAfter(maxDate))
                    selected = maxDate.clone();

            }

            //
            // hours
            //

            html = '<select class="hourselect">';

            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;

            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour)
                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate))
                    disabled = true;

                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
                } else {
                    html += '<option value="' + i + '">' + i + '</option>';
                }
            }

            html += '</select> ';

            //
            // minutes
            //

            html += ': <select class="minuteselect">';

            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().minute(i);

                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate))
                    disabled = true;

                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                } else {
                    html += '<option value="' + i + '">' + padded + '</option>';
                }
            }

            html += '</select> ';

            //
            // seconds
            //

            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';

                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? '0' + i : i;
                    var time = selected.clone().second(i);

                    var disabled = false;
                    if (minDate && time.isBefore(minDate))
                        disabled = true;
                    if (maxDate && time.isAfter(maxDate))
                        disabled = true;

                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + padded + '</option>';
                    }
                }

                html += '</select> ';
            }

            //
            // AM/PM
            //

            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';

                var am_html = '';
                var pm_html = '';

                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
                    am_html = ' disabled="disabled" class="disabled"';

                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
                    pm_html = ' disabled="disabled" class="disabled"';

                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
                }

                html += '</select>';
            }

            this.container.find('.drp-calendar.' + side + ' .calendar-time').html(html);

        },

        updateFormInputs: function() {

            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
                this.container.find('button.applyBtn').prop('disabled', false);
            } else {
                this.container.find('button.applyBtn').prop('disabled', true);
            }

        },

        move: function() {
            var parentOffset = { top: 0, left: 0 },
                containerTop,
                drops = this.drops;

            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }

            switch (drops) {
            case 'auto':
                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
                if (containerTop + this.container.outerHeight() >= this.parentEl[0].scrollHeight) {
                    containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
                    drops = 'up';
                }
                break;
            case 'up':
                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
                break;
            default:
                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
                break;
            }

            // Force the container to it's actual width
            this.container.css({
              top: 0,
              left: 0,
              right: 'auto'
            });
            var containerWidth = this.container.outerWidth();

            this.container.toggleClass('drop-up', drops == 'up');

            if (this.opens == 'left') {
                var containerRight = parentRightEdge - this.element.offset().left - this.element.outerWidth();
                if (containerWidth + containerRight > $(window).width()) {
                    this.container.css({
                        top: containerTop,
                        right: 'auto',
                        left: 9
                    });
                } else {
                    this.container.css({
                        top: containerTop,
                        right: containerRight,
                        left: 'auto'
                    });
                }
            } else if (this.opens == 'center') {
                var containerLeft = this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2
                                        - containerWidth / 2;
                if (containerLeft < 0) {
                    this.container.css({
                        top: containerTop,
                        right: 'auto',
                        left: 9
                    });
                } else if (containerLeft + containerWidth > $(window).width()) {
                    this.container.css({
                        top: containerTop,
                        left: 'auto',
                        right: 0
                    });
                } else {
                    this.container.css({
                        top: containerTop,
                        left: containerLeft,
                        right: 'auto'
                    });
                }
            } else {
                var containerLeft = this.element.offset().left - parentOffset.left;
                if (containerLeft + containerWidth > $(window).width()) {
                    this.container.css({
                        top: containerTop,
                        left: 'auto',
                        right: 0
                    });
                } else {
                    this.container.css({
                        top: containerTop,
                        left: containerLeft,
                        right: 'auto'
                    });
                }
            }
        },

        show: function(e) {
            if (this.isShowing) return;

            // Create a click proxy that is private to this instance of datepicker, for unbinding
            this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);

            // Bind global datepicker mousedown for hiding and
            $(document)
              .on('mousedown.daterangepicker', this._outsideClickProxy)
              // also support mobile devices
              .on('touchend.daterangepicker', this._outsideClickProxy)
              // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
              .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
              // and also close when focus changes to outside the picker (eg. tabbing between controls)
              .on('focusin.daterangepicker', this._outsideClickProxy);

            // Reposition the picker if the window is resized while it's open
            $(window).on('resize.daterangepicker', $.proxy(function(e) { this.move(e); }, this));

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();

            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger('show.daterangepicker', this);
            this.isShowing = true;
        },

        hide: function(e) {
            if (!this.isShowing) return;

            //incomplete date selection, revert to last values
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }

            //if a new date range was selected, invoke the user callback function
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel);

            //if picker is attached to a text input, update it
            this.updateElement();

            $(document).off('.daterangepicker');
            $(window).off('.daterangepicker');
            this.container.hide();
            this.element.trigger('hide.daterangepicker', this);
            this.isShowing = false;
        },

        toggle: function(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },

        outsideClick: function(e) {
            var target = $(e.target);
            // if the page is clicked anywhere except within the daterangerpicker/button
            // itself then call this.hide()
            if (
                // ie modal dialog fix
                e.type == "focusin" ||
                target.closest(this.element).length ||
                target.closest(this.container).length ||
                target.closest('.calendar-table').length
                ) return;
            this.hide();
            this.element.trigger('outsideClick.daterangepicker', this);
        },

        showCalendars: function() {
            this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this);
        },

        hideCalendars: function() {
            this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this);
        },

        clickRange: function(e) {
            var label = e.target.getAttribute('data-range-key');
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.endOf('day');
                }

                if (!this.alwaysShowCalendars)
                    this.hideCalendars();
                this.clickApply();
            }
        },

        clickPrev: function(e) {
            var cal = $(e.target).parents('.drp-calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
                if (this.linkedCalendars)
                    this.rightCalendar.month.subtract(1, 'month');
            } else {
                this.rightCalendar.month.subtract(1, 'month');
            }
            this.updateCalendars();
        },

        clickNext: function(e) {
            var cal = $(e.target).parents('.drp-calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add(1, 'month');
            } else {
                this.rightCalendar.month.add(1, 'month');
                if (this.linkedCalendars)
                    this.leftCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },

        hoverDate: function(e) {

            //ignore dates that can't be selected
            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.drp-calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //highlight the dates between the start date and the date being hovered as a potential end date
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find('.drp-calendar tbody td').each(function(index, el) {

                    //skip week numbers, only look at dates
                    if ($(el).hasClass('week')) return;

                    var title = $(el).attr('data-title');
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents('.drp-calendar');
                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

                    if ((dt.isAfter(startDate) && dt.isBefore(date)) || dt.isSame(date, 'day')) {
                        $(el).addClass('in-range');
                    } else {
                        $(el).removeClass('in-range');
                    }

                });
            }

        },

        clickDate: function(e) {

            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.drp-calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //
            // this function needs to do a few things:
            // * alternate between selecting a start and end date for the range,
            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
            // * if autoapply is enabled, and an end date was chosen, apply the selection
            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
            // * if one of the inputs above the calendars was focused, cancel that manual input
            //

            if (this.endDate || date.isBefore(this.startDate, 'day')) { //picking start
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    if (isNaN(minute)) {
                        minute = parseInt(this.container.find('.left .minuteselect option:last').val(), 10);
                    }
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                //special case: clicking the same date for start/end,
                //but the time of the end date is before the start date
                this.setEndDate(this.startDate.clone());
            } else { // picking end
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    if (isNaN(minute)) {
                        minute = parseInt(this.container.find('.right .minuteselect option:last').val(), 10);
                    }
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                  this.calculateChosenLabel();
                  this.clickApply();
                }
            }

            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker && this.autoApply)
                    this.clickApply();
            }

            this.updateView();

            //This is to cancel the blur event handler if the mouse was in one of the inputs
            e.stopPropagation();

        },

        calculateChosenLabel: function () {
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
              if (this.timePicker) {
                    var format = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm";
                    //ignore times when comparing dates if time picker seconds is not enabled
                    if (this.startDate.format(format) == this.ranges[range][0].format(format) && this.endDate.format(format) == this.ranges[range][1].format(format)) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key');
                        break;
                    }
                } else {
                    //ignore times when comparing dates if time picker is not enabled
                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key');
                        break;
                    }
                }
                i++;
            }
            if (customRange) {
                if (this.showCustomRangeLabel) {
                    this.chosenLabel = this.container.find('.ranges li:last').addClass('active').attr('data-range-key');
                } else {
                    this.chosenLabel = null;
                }
                this.showCalendars();
            }
        },

        clickApply: function(e) {
            this.hide();
            this.element.trigger('apply.daterangepicker', this);
        },

        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger('cancel.daterangepicker', this);
        },

        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest('.drp-calendar').hasClass('left'),
                leftOrRight = isLeft ? 'left' : 'right',
                cal = this.container.find('.drp-calendar.'+leftOrRight);

            // Month must be Number for new moment versions
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();

            if (!isLeft) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }

            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }

            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }

            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
            this.updateCalendars();
        },

        timeChanged: function(e) {

            var cal = $(e.target).closest('.drp-calendar'),
                isLeft = cal.hasClass('left');

            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            if (isNaN(minute)) {
                minute = parseInt(cal.find('.minuteselect option:last').val(), 10);
            }
            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

            if (!this.timePicker24Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12)
                    hour += 12;
                if (ampm === 'AM' && hour === 12)
                    hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }

            //update the calendars so all clickable dates reflect the new time component
            this.updateCalendars();

            //update the form inputs above the calendars with the new time
            this.updateFormInputs();

            //re-render the time pickers because changing one selection can affect what's enabled in another
            this.renderTimePicker('left');
            this.renderTimePicker('right');

        },

        elementChanged: function() {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;

            var dateString = this.element.val().split(this.locale.separator),
                start = null,
                end = null;

            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }

            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }

            if (!start.isValid() || !end.isValid()) return;

            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },

        keydown: function(e) {
            //hide on tab or enter
            if ((e.keyCode === 9) || (e.keyCode === 13)) {
                this.hide();
            }

            //hide on esc and prevent propagation
            if (e.keyCode === 27) {
                e.preventDefault();
                e.stopPropagation();

                this.hide();
            }
        },

        updateElement: function() {
            if (this.element.is('input') && this.autoUpdateInput) {
                var newValue = this.startDate.format(this.locale.format);
                if (!this.singleDatePicker) {
                    newValue += this.locale.separator + this.endDate.format(this.locale.format);
                }
                if (newValue !== this.element.val()) {
                    this.element.val(newValue).trigger('change');
                }
            }
        },

        remove: function() {
            this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData();
        }

    };

    $.fn.daterangepicker = function(options, callback) {
        var implementOptions = $.extend(true, {}, $.fn.daterangepicker.defaultOptions, options);
        this.each(function() {
            var el = $(this);
            if (el.data('daterangepicker'))
                el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, implementOptions, callback));
        });
        return this;
    };

    return DateRangePicker;

}));

/*!@preserve
 * Tempus Dominus Bootstrap4 v5.39.0 (https://tempusdominus.github.io/bootstrap-4/)
 * Copyright 2016-2020 Jonathan Peterson and contributors
 * Licensed under MIT (https://github.com/tempusdominus/bootstrap-3/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Tempus Dominus Bootstrap4's requires jQuery. jQuery must be included before Tempus Dominus Bootstrap4's JavaScript.");if(!function(){var t=jQuery.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Tempus Dominus Bootstrap4's requires at least jQuery v3.0.0 but less than v4.0.0")}(),"undefined"==typeof moment)throw new Error("Tempus Dominus Bootstrap4's requires moment.js. Moment.js must be included before Tempus Dominus Bootstrap4's JavaScript.");var version=moment.version.split(".");if(version[0]<=2&&version[1]<17||3<=version[0])throw new Error("Tempus Dominus Bootstrap4's requires at least moment.js v2.17.0 but less than v3.0.0");!function(){function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var a,n,o,r,d,h,l,c,u,_,f,m,w,g,i,b,v,M=(a=jQuery,n=moment,l={DATA_TOGGLE:'[data-toggle="'+(r=o="datetimepicker")+'"]'},c={INPUT:o+"-input"},u={CHANGE:"change"+(d="."+r),BLUR:"blur"+d,KEYUP:"keyup"+d,KEYDOWN:"keydown"+d,FOCUS:"focus"+d,CLICK_DATA_API:"click"+d+(h=".data-api"),UPDATE:"update"+d,ERROR:"error"+d,HIDE:"hide"+d,SHOW:"show"+d},_=[{CLASS_NAME:"days",NAV_FUNCTION:"M",NAV_STEP:1},{CLASS_NAME:"months",NAV_FUNCTION:"y",NAV_STEP:1},{CLASS_NAME:"years",NAV_FUNCTION:"y",NAV_STEP:10},{CLASS_NAME:"decades",NAV_FUNCTION:"y",NAV_STEP:100}],f={up:38,38:"up",down:40,40:"down",left:37,37:"left",right:39,39:"right",tab:9,9:"tab",escape:27,27:"escape",enter:13,13:"enter",pageUp:33,33:"pageUp",pageDown:34,34:"pageDown",shift:16,16:"shift",control:17,17:"control",space:32,32:"space",t:84,84:"t",delete:46,46:"delete"},m=["times","days","months","years","decades"],v={timeZone:"",format:!(b={time:"clock",date:"calendar",up:"arrow-up",down:"arrow-down",previous:"arrow-left",next:"arrow-right",today:"arrow-down-circle",clear:"trash-2",close:"x"}),dayViewHeaderFormat:"MMMM YYYY",extraFormats:!(i={timeZone:-39,format:-38,dayViewHeaderFormat:-37,extraFormats:-36,stepping:-35,minDate:-34,maxDate:-33,useCurrent:-32,collapse:-31,locale:-30,defaultDate:-29,disabledDates:-28,enabledDates:-27,icons:-26,tooltips:-25,useStrict:-24,sideBySide:-23,daysOfWeekDisabled:-22,calendarWeeks:-21,viewMode:-20,toolbarPlacement:-19,buttons:-18,widgetPositioning:-17,widgetParent:-16,ignoreReadonly:-15,keepOpen:-14,focusOnShow:-13,inline:-12,keepInvalid:-11,keyBinds:-10,debug:-9,allowInputToggle:-8,disabledTimeIntervals:-7,disabledHours:-6,enabledHours:-5,viewDate:-4,allowMultidate:-3,multidateSeparator:-2,updateOnlyThroughDateOption:-1,date:1}),stepping:1,minDate:!(g={}),maxDate:!(w={}),useCurrent:!0,collapse:!0,locale:n.locale(),defaultDate:!1,disabledDates:!1,enabledDates:!1,icons:{type:"class",time:"fa fa-clock-o",date:"fa fa-calendar",up:"fa fa-arrow-up",down:"fa fa-arrow-down",previous:"fa fa-chevron-left",next:"fa fa-chevron-right",today:"fa fa-calendar-check-o",clear:"fa fa-trash",close:"fa fa-times"},tooltips:{today:"Go to today",clear:"Clear selection",close:"Close the picker",selectMonth:"Select Month",prevMonth:"Previous Month",nextMonth:"Next Month",selectYear:"Select Year",prevYear:"Previous Year",nextYear:"Next Year",selectDecade:"Select Decade",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevCentury:"Previous Century",nextCentury:"Next Century",pickHour:"Pick Hour",incrementHour:"Increment Hour",decrementHour:"Decrement Hour",pickMinute:"Pick Minute",incrementMinute:"Increment Minute",decrementMinute:"Decrement Minute",pickSecond:"Pick Second",incrementSecond:"Increment Second",decrementSecond:"Decrement Second",togglePeriod:"Toggle Period",selectTime:"Select Time",selectDate:"Select Date"},useStrict:!1,sideBySide:!1,daysOfWeekDisabled:!1,calendarWeeks:!1,viewMode:"days",toolbarPlacement:"default",buttons:{showToday:!1,showClear:!1,showClose:!1},widgetPositioning:{horizontal:"auto",vertical:"auto"},widgetParent:null,readonly:!1,ignoreReadonly:!1,keepOpen:!1,focusOnShow:!0,inline:!1,keepInvalid:!1,keyBinds:{up:function(){if(!this.widget)return!1;var t=this._dates[0]||this.getMoment();return this.widget.find(".datepicker").is(":visible")?this.date(t.clone().subtract(7,"d")):this.date(t.clone().add(this.stepping(),"m")),!0},down:function(){if(!this.widget)return this.show(),!1;var t=this._dates[0]||this.getMoment();return this.widget.find(".datepicker").is(":visible")?this.date(t.clone().add(7,"d")):this.date(t.clone().subtract(this.stepping(),"m")),!0},"control up":function(){if(!this.widget)return!1;var t=this._dates[0]||this.getMoment();return this.widget.find(".datepicker").is(":visible")?this.date(t.clone().subtract(1,"y")):this.date(t.clone().add(1,"h")),!0},"control down":function(){if(!this.widget)return!1;var t=this._dates[0]||this.getMoment();return this.widget.find(".datepicker").is(":visible")?this.date(t.clone().add(1,"y")):this.date(t.clone().subtract(1,"h")),!0},left:function(){if(!this.widget)return!1;var t=this._dates[0]||this.getMoment();return this.widget.find(".datepicker").is(":visible")&&this.date(t.clone().subtract(1,"d")),!0},right:function(){if(!this.widget)return!1;var t=this._dates[0]||this.getMoment();return this.widget.find(".datepicker").is(":visible")&&this.date(t.clone().add(1,"d")),!0},pageUp:function(){if(!this.widget)return!1;var t=this._dates[0]||this.getMoment();return this.widget.find(".datepicker").is(":visible")&&this.date(t.clone().subtract(1,"M")),!0},pageDown:function(){if(!this.widget)return!1;var t=this._dates[0]||this.getMoment();return this.widget.find(".datepicker").is(":visible")&&this.date(t.clone().add(1,"M")),!0},enter:function(){return!!this.widget&&(this.hide(),!0)},escape:function(){return!!this.widget&&(this.hide(),!0)},"control space":function(){return!!this.widget&&(this.widget.find(".timepicker").is(":visible")&&this.widget.find('.btn[data-action="togglePeriod"]').click(),!0)},t:function(){return!!this.widget&&(this.date(this.getMoment()),!0)},delete:function(){return!!this.widget&&(this.clear(),!0)}},debug:!1,allowInputToggle:!1,disabledTimeIntervals:!1,disabledHours:!1,enabledHours:!1,viewDate:!1,allowMultidate:!1,multidateSeparator:", ",updateOnlyThroughDateOption:!1,promptTimeOnDateChange:!1,promptTimeOnDateChangeTransitionDelay:200},function(){function p(t,e){this._options=this._getOptions(e),this._element=t,this._dates=[],this._datesFormatted=[],this._viewDate=null,this.unset=!0,this.component=!1,this.widget=!1,this.use24Hours=null,this.actualFormat=null,this.parseFormats=null,this.currentViewMode=null,this.MinViewModeNumber=0,this.isInitFormatting=!1,this.isInit=!1,this.isDateUpdateThroughDateOptionFromClientCode=!1,this.hasInitDate=!1,this.initDate=void 0,this._notifyChangeEventContext=void 0,this._currentPromptTimeTimeout=null,this._int()}var t,e,i=p.prototype;return i._int=function(){this.isInit=!0;var t=this._element.data("target-input");this._element.is("input")?this.input=this._element:void 0!==t&&(this.input="nearest"===t?this._element.find("input"):a(t)),this._dates=[],this._dates[0]=this.getMoment(),this._viewDate=this.getMoment().clone(),a.extend(!0,this._options,this._dataToOptions()),this.hasInitDate=!1,this.initDate=void 0,this.options(this._options),this.isInitFormatting=!0,this._initFormatting(),this.isInitFormatting=!1,void 0!==this.input&&this.input.is("input")&&0!==this.input.val().trim().length?this._setValue(this._parseInputDate(this.input.val().trim()),0):this._options.defaultDate&&void 0!==this.input&&void 0===this.input.attr("placeholder")&&this._setValue(this._options.defaultDate,0),this.hasInitDate&&this.date(this.initDate),this._options.inline&&this.show(),this.isInit=!1},i._update=function(){this.widget&&(this._fillDate(),this._fillTime())},i._setValue=function(t,e){var i=void 0===e,s=!t&&i,a=this.isDateUpdateThroughDateOptionFromClientCode,n=!this.isInit&&this._options.updateOnlyThroughDateOption&&!a,o="",r=!1,d=this.unset?null:this._dates[e];if(!d&&!this.unset&&i&&s&&(d=this._dates[this._dates.length-1]),!t)return n?void this._notifyEvent({type:p.Event.CHANGE,date:t,oldDate:d,isClear:s,isInvalid:r,isDateUpdateThroughDateOptionFromClientCode:a,isInit:this.isInit}):(!this._options.allowMultidate||1===this._dates.length||s?(this.unset=!0,this._dates=[],this._datesFormatted=[]):(o=""+this._element.data("date")+this._options.multidateSeparator,o=d&&o.replace(""+d.format(this.actualFormat)+this._options.multidateSeparator,"").replace(""+this._options.multidateSeparator+this._options.multidateSeparator,"").replace(new RegExp(this._options.multidateSeparator.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")+"\\s*$"),"")||"",this._dates.splice(e,1),this._datesFormatted.splice(e,1)),o=D(o),void 0!==this.input&&(this.input.val(o),this.input.trigger("input")),this._element.data("date",o),this._notifyEvent({type:p.Event.CHANGE,date:!1,oldDate:d,isClear:s,isInvalid:r,isDateUpdateThroughDateOptionFromClientCode:a,isInit:this.isInit}),void this._update());if(t=t.clone().locale(this._options.locale),this._hasTimeZone()&&t.tz(this._options.timeZone),1!==this._options.stepping&&t.minutes(Math.round(t.minutes()/this._options.stepping)*this._options.stepping).seconds(0),this._isValid(t)){if(n)return void this._notifyEvent({type:p.Event.CHANGE,date:t.clone(),oldDate:d,isClear:s,isInvalid:r,isDateUpdateThroughDateOptionFromClientCode:a,isInit:this.isInit});if(this._dates[e]=t,this._datesFormatted[e]=t.format("YYYY-MM-DD"),this._viewDate=t.clone(),this._options.allowMultidate&&1<this._dates.length){for(var h=0;h<this._dates.length;h++)o+=""+this._dates[h].format(this.actualFormat)+this._options.multidateSeparator;o=o.replace(new RegExp(this._options.multidateSeparator+"\\s*$"),"")}else o=this._dates[e].format(this.actualFormat);o=D(o),void 0!==this.input&&(this.input.val(o),this.input.trigger("input")),this._element.data("date",o),this.unset=!1,this._update(),this._notifyEvent({type:p.Event.CHANGE,date:this._dates[e].clone(),oldDate:d,isClear:s,isInvalid:r,isDateUpdateThroughDateOptionFromClientCode:a,isInit:this.isInit})}else r=!0,this._options.keepInvalid?this._notifyEvent({type:p.Event.CHANGE,date:t,oldDate:d,isClear:s,isInvalid:r,isDateUpdateThroughDateOptionFromClientCode:a,isInit:this.isInit}):void 0!==this.input&&(this.input.val(""+(this.unset?"":this._dates[e].format(this.actualFormat))),this.input.trigger("input")),this._notifyEvent({type:p.Event.ERROR,date:t,oldDate:d})},i._change=function(t){var e=a(t.target).val().trim(),i=e?this._parseInputDate(e):null;return this._setValue(i,0),t.stopImmediatePropagation(),!1},i._getOptions=function(t){return t=a.extend(!0,{},v,t&&t.icons&&"feather"===t.icons.type?{icons:b}:{},t)},i._hasTimeZone=function(){return void 0!==n.tz&&void 0!==this._options.timeZone&&null!==this._options.timeZone&&""!==this._options.timeZone},i._isEnabled=function(t){if("string"!=typeof t||1<t.length)throw new TypeError("isEnabled expects a single character string parameter");switch(t){case"y":return-1!==this.actualFormat.indexOf("Y");case"M":return-1!==this.actualFormat.indexOf("M");case"d":return-1!==this.actualFormat.toLowerCase().indexOf("d");case"h":case"H":return-1!==this.actualFormat.toLowerCase().indexOf("h");case"m":return-1!==this.actualFormat.indexOf("m");case"s":return-1!==this.actualFormat.indexOf("s");case"a":case"A":return-1!==this.actualFormat.toLowerCase().indexOf("a");default:return!1}},i._hasTime=function(){return this._isEnabled("h")||this._isEnabled("m")||this._isEnabled("s")},i._hasDate=function(){return this._isEnabled("y")||this._isEnabled("M")||this._isEnabled("d")},i._dataToOptions=function(){var i=this._element.data(),s={};return i.dateOptions&&i.dateOptions instanceof Object&&(s=a.extend(!0,s,i.dateOptions)),a.each(this._options,function(t){var e="date"+t.charAt(0).toUpperCase()+t.slice(1);void 0!==i[e]?s[t]=i[e]:delete s[t]}),s},i._format=function(){return this._options.format||"YYYY-MM-DD HH:mm"},i._areSameDates=function(t,e){var i=this._format();return t&&e&&(t.isSame(e)||n(t.format(i),i).isSame(n(e.format(i),i)))},i._notifyEvent=function(t){if(t.type===p.Event.CHANGE){if(this._notifyChangeEventContext=this._notifyChangeEventContext||0,this._notifyChangeEventContext++,t.date&&this._areSameDates(t.date,t.oldDate)||!t.isClear&&!t.date&&!t.oldDate||1<this._notifyChangeEventContext)return void(this._notifyChangeEventContext=void 0);this._handlePromptTimeIfNeeded(t)}this._element.trigger(t),this._notifyChangeEventContext=void 0},i._handlePromptTimeIfNeeded=function(t){if(this._options.promptTimeOnDateChange){if(!t.oldDate&&this._options.useCurrent)return;if(t.oldDate&&t.date&&(t.oldDate.format("YYYY-MM-DD")===t.date.format("YYYY-MM-DD")||t.oldDate.format("YYYY-MM-DD")!==t.date.format("YYYY-MM-DD")&&t.oldDate.format("HH:mm:ss")!==t.date.format("HH:mm:ss")))return;var e=this;clearTimeout(this._currentPromptTimeTimeout),this._currentPromptTimeTimeout=setTimeout(function(){e.widget&&e.widget.find('[data-action="togglePicker"]').click()},this._options.promptTimeOnDateChangeTransitionDelay)}},i._viewUpdate=function(t){"y"===t&&(t="YYYY"),this._notifyEvent({type:p.Event.UPDATE,change:t,viewDate:this._viewDate.clone()})},i._showMode=function(t){this.widget&&(t&&(this.currentViewMode=Math.max(this.MinViewModeNumber,Math.min(3,this.currentViewMode+t))),this.widget.find(".datepicker > div").hide().filter(".datepicker-"+_[this.currentViewMode].CLASS_NAME).show())},i._isInDisabledDates=function(t){return!0===this._options.disabledDates[t.format("YYYY-MM-DD")]},i._isInEnabledDates=function(t){return!0===this._options.enabledDates[t.format("YYYY-MM-DD")]},i._isInDisabledHours=function(t){return!0===this._options.disabledHours[t.format("H")]},i._isInEnabledHours=function(t){return!0===this._options.enabledHours[t.format("H")]},i._isValid=function(t,e){if(!t||!t.isValid())return!1;if(this._options.disabledDates&&"d"===e&&this._isInDisabledDates(t))return!1;if(this._options.enabledDates&&"d"===e&&!this._isInEnabledDates(t))return!1;if(this._options.minDate&&t.isBefore(this._options.minDate,e))return!1;if(this._options.maxDate&&t.isAfter(this._options.maxDate,e))return!1;if(this._options.daysOfWeekDisabled&&"d"===e&&-1!==this._options.daysOfWeekDisabled.indexOf(t.day()))return!1;if(this._options.disabledHours&&("h"===e||"m"===e||"s"===e)&&this._isInDisabledHours(t))return!1;if(this._options.enabledHours&&("h"===e||"m"===e||"s"===e)&&!this._isInEnabledHours(t))return!1;if(this._options.disabledTimeIntervals&&("h"===e||"m"===e||"s"===e)){var i=!1;if(a.each(this._options.disabledTimeIntervals,function(){if(t.isBetween(this[0],this[1]))return!(i=!0)}),i)return!1}return!0},i._parseInputDate=function(t,e){var i=(void 0===e?{}:e).isPickerShow,s=void 0!==i&&i;return void 0===this._options.parseInputDate||s?n.isMoment(t)||(t=this.getMoment(t)):t=this._options.parseInputDate(t),t},i._keydown=function(t){var e,i,s,a,n=null,o=[],r={},d=t.which;for(e in w[d]="p",w)w.hasOwnProperty(e)&&"p"===w[e]&&(o.push(e),parseInt(e,10)!==d&&(r[e]=!0));for(e in this._options.keyBinds)if(this._options.keyBinds.hasOwnProperty(e)&&"function"==typeof this._options.keyBinds[e]&&(s=e.split(" ")).length===o.length&&f[d]===s[s.length-1]){for(a=!0,i=s.length-2;0<=i;i--)if(!(f[s[i]]in r)){a=!1;break}if(a){n=this._options.keyBinds[e];break}}n&&n.call(this)&&(t.stopPropagation(),t.preventDefault())},i._keyup=function(t){w[t.which]="r",g[t.which]&&(g[t.which]=!1,t.stopPropagation(),t.preventDefault())},i._indexGivenDates=function(t){var e={},i=this;return a.each(t,function(){var t=i._parseInputDate(this);t.isValid()&&(e[t.format("YYYY-MM-DD")]=!0)}),!!Object.keys(e).length&&e},i._indexGivenHours=function(t){var e={};return a.each(t,function(){e[this]=!0}),!!Object.keys(e).length&&e},i._initFormatting=function(){var t=this._options.format||"L LT",e=this;this.actualFormat=t.replace(/(\[[^\[]*])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(t){return(e.isInitFormatting&&null===e._options.date?e.getMoment():e._dates[0]).localeData().longDateFormat(t)||t}),this.parseFormats=this._options.extraFormats?this._options.extraFormats.slice():[],this.parseFormats.indexOf(t)<0&&this.parseFormats.indexOf(this.actualFormat)<0&&this.parseFormats.push(this.actualFormat),this.use24Hours=this.actualFormat.toLowerCase().indexOf("a")<1&&this.actualFormat.replace(/\[.*?]/g,"").indexOf("h")<1,this._isEnabled("y")&&(this.MinViewModeNumber=2),this._isEnabled("M")&&(this.MinViewModeNumber=1),this._isEnabled("d")&&(this.MinViewModeNumber=0),this.currentViewMode=Math.max(this.MinViewModeNumber,this.currentViewMode),this.unset||this._setValue(this._dates[0],0)},i._getLastPickedDate=function(){var t=this._dates[this._getLastPickedDateIndex()];return!t&&this._options.allowMultidate&&(t=n(new Date)),t},i._getLastPickedDateIndex=function(){return this._dates.length-1},i.getMoment=function(t){var e=null==t?n().clone().locale(this._options.locale):this._hasTimeZone()?n.tz(t,this.parseFormats,this._options.locale,this._options.useStrict,this._options.timeZone):n(t,this.parseFormats,this._options.locale,this._options.useStrict);return this._hasTimeZone()&&e.tz(this._options.timeZone),e},i.toggle=function(){return this.widget?this.hide():this.show()},i.readonly=function(t){if(0===arguments.length)return this._options.readonly;if("boolean"!=typeof t)throw new TypeError("readonly() expects a boolean parameter");this._options.readonly=t,void 0!==this.input&&this.input.prop("readonly",this._options.readonly),this.widget&&(this.hide(),this.show())},i.ignoreReadonly=function(t){if(0===arguments.length)return this._options.ignoreReadonly;if("boolean"!=typeof t)throw new TypeError("ignoreReadonly() expects a boolean parameter");this._options.ignoreReadonly=t},i.options=function(t){if(0===arguments.length)return a.extend(!0,{},this._options);if(!(t instanceof Object))throw new TypeError("options() this.options parameter should be an object");a.extend(!0,this._options,t);var s=this,e=Object.keys(this._options).sort(k);a.each(e,function(t,e){var i=s._options[e];if(void 0!==s[e]){if(s.isInit&&"date"===e)return s.hasInitDate=!0,void(s.initDate=i);s[e](i)}})},i.date=function(t,e){if(e=e||0,0===arguments.length)return this.unset?null:this._options.allowMultidate?this._dates.join(this._options.multidateSeparator):this._dates[e].clone();if(!(null===t||"string"==typeof t||n.isMoment(t)||t instanceof Date))throw new TypeError("date() parameter must be one of [null, string, moment or Date]");"string"==typeof t&&y(t)&&(t=new Date(t)),this._setValue(null===t?null:this._parseInputDate(t),e)},i.updateOnlyThroughDateOption=function(t){if("boolean"!=typeof t)throw new TypeError("updateOnlyThroughDateOption() expects a boolean parameter");this._options.updateOnlyThroughDateOption=t},i.format=function(t){if(0===arguments.length)return this._options.format;if("string"!=typeof t&&("boolean"!=typeof t||!1!==t))throw new TypeError("format() expects a string or boolean:false parameter "+t);this._options.format=t,this.actualFormat&&this._initFormatting()},i.timeZone=function(t){if(0===arguments.length)return this._options.timeZone;if("string"!=typeof t)throw new TypeError("newZone() expects a string parameter");this._options.timeZone=t},i.dayViewHeaderFormat=function(t){if(0===arguments.length)return this._options.dayViewHeaderFormat;if("string"!=typeof t)throw new TypeError("dayViewHeaderFormat() expects a string parameter");this._options.dayViewHeaderFormat=t},i.extraFormats=function(t){if(0===arguments.length)return this._options.extraFormats;if(!1!==t&&!(t instanceof Array))throw new TypeError("extraFormats() expects an array or false parameter");this._options.extraFormats=t,this.parseFormats&&this._initFormatting()},i.disabledDates=function(t){if(0===arguments.length)return this._options.disabledDates?a.extend({},this._options.disabledDates):this._options.disabledDates;if(!t)return this._options.disabledDates=!1,this._update(),!0;if(!(t instanceof Array))throw new TypeError("disabledDates() expects an array parameter");this._options.disabledDates=this._indexGivenDates(t),this._options.enabledDates=!1,this._update()},i.enabledDates=function(t){if(0===arguments.length)return this._options.enabledDates?a.extend({},this._options.enabledDates):this._options.enabledDates;if(!t)return this._options.enabledDates=!1,this._update(),!0;if(!(t instanceof Array))throw new TypeError("enabledDates() expects an array parameter");this._options.enabledDates=this._indexGivenDates(t),this._options.disabledDates=!1,this._update()},i.daysOfWeekDisabled=function(t){if(0===arguments.length)return this._options.daysOfWeekDisabled.splice(0);if("boolean"==typeof t&&!t)return this._options.daysOfWeekDisabled=!1,this._update(),!0;if(!(t instanceof Array))throw new TypeError("daysOfWeekDisabled() expects an array parameter");if(this._options.daysOfWeekDisabled=t.reduce(function(t,e){return 6<(e=parseInt(e,10))||e<0||isNaN(e)||-1===t.indexOf(e)&&t.push(e),t},[]).sort(),this._options.useCurrent&&!this._options.keepInvalid)for(var e=0;e<this._dates.length;e++){for(var i=0;!this._isValid(this._dates[e],"d");){if(this._dates[e].add(1,"d"),31===i)throw"Tried 31 times to find a valid date";i++}this._setValue(this._dates[e],e)}this._update()},i.maxDate=function(t){if(0===arguments.length)return this._options.maxDate?this._options.maxDate.clone():this._options.maxDate;if("boolean"==typeof t&&!1===t)return this._options.maxDate=!1,this._update(),!0;"string"==typeof t&&("now"!==t&&"moment"!==t||(t=this.getMoment()));var e=this._parseInputDate(t);if(!e.isValid())throw new TypeError("maxDate() Could not parse date parameter: "+t);if(this._options.minDate&&e.isBefore(this._options.minDate))throw new TypeError("maxDate() date parameter is before this.options.minDate: "+e.format(this.actualFormat));this._options.maxDate=e;for(var i=0;i<this._dates.length;i++)this._options.useCurrent&&!this._options.keepInvalid&&this._dates[i].isAfter(t)&&this._setValue(this._options.maxDate,i);this._viewDate.isAfter(e)&&(this._viewDate=e.clone().subtract(this._options.stepping,"m")),this._update()},i.minDate=function(t){if(0===arguments.length)return this._options.minDate?this._options.minDate.clone():this._options.minDate;if("boolean"==typeof t&&!1===t)return this._options.minDate=!1,this._update(),!0;"string"==typeof t&&("now"!==t&&"moment"!==t||(t=this.getMoment()));var e=this._parseInputDate(t);if(!e.isValid())throw new TypeError("minDate() Could not parse date parameter: "+t);if(this._options.maxDate&&e.isAfter(this._options.maxDate))throw new TypeError("minDate() date parameter is after this.options.maxDate: "+e.format(this.actualFormat));this._options.minDate=e;for(var i=0;i<this._dates.length;i++)this._options.useCurrent&&!this._options.keepInvalid&&this._dates[i].isBefore(t)&&this._setValue(this._options.minDate,i);this._viewDate.isBefore(e)&&(this._viewDate=e.clone().add(this._options.stepping,"m")),this._update()},i.defaultDate=function(t){if(0===arguments.length)return this._options.defaultDate?this._options.defaultDate.clone():this._options.defaultDate;if(!t)return!(this._options.defaultDate=!1);"string"==typeof t&&(t="now"===t||"moment"===t?this.getMoment():this.getMoment(t));var e=this._parseInputDate(t);if(!e.isValid())throw new TypeError("defaultDate() Could not parse date parameter: "+t);if(!this._isValid(e))throw new TypeError("defaultDate() date passed is invalid according to component setup validations");this._options.defaultDate=e,(this._options.defaultDate&&this._options.inline||void 0!==this.input&&""===this.input.val().trim())&&this._setValue(this._options.defaultDate,0)},i.locale=function(t){if(0===arguments.length)return this._options.locale;if(!n.localeData(t))throw new TypeError("locale() locale "+t+" is not loaded from moment locales!");this._options.locale=t;for(var e=0;e<this._dates.length;e++)this._dates[e].locale(this._options.locale);this._viewDate.locale(this._options.locale),this.actualFormat&&this._initFormatting(),this.widget&&(this.hide(),this.show())},i.stepping=function(t){if(0===arguments.length)return this._options.stepping;t=parseInt(t,10),(isNaN(t)||t<1)&&(t=1),this._options.stepping=t},i.useCurrent=function(t){var e=["year","month","day","hour","minute"];if(0===arguments.length)return this._options.useCurrent;if("boolean"!=typeof t&&"string"!=typeof t)throw new TypeError("useCurrent() expects a boolean or string parameter");if("string"==typeof t&&-1===e.indexOf(t.toLowerCase()))throw new TypeError("useCurrent() expects a string parameter of "+e.join(", "));this._options.useCurrent=t},i.collapse=function(t){if(0===arguments.length)return this._options.collapse;if("boolean"!=typeof t)throw new TypeError("collapse() expects a boolean parameter");if(this._options.collapse===t)return!0;this._options.collapse=t,this.widget&&(this.hide(),this.show())},i.icons=function(t){if(0===arguments.length)return a.extend({},this._options.icons);if(!(t instanceof Object))throw new TypeError("icons() expects parameter to be an Object");a.extend(this._options.icons,t),this.widget&&(this.hide(),this.show())},i.tooltips=function(t){if(0===arguments.length)return a.extend({},this._options.tooltips);if(!(t instanceof Object))throw new TypeError("tooltips() expects parameter to be an Object");a.extend(this._options.tooltips,t),this.widget&&(this.hide(),this.show())},i.useStrict=function(t){if(0===arguments.length)return this._options.useStrict;if("boolean"!=typeof t)throw new TypeError("useStrict() expects a boolean parameter");this._options.useStrict=t},i.sideBySide=function(t){if(0===arguments.length)return this._options.sideBySide;if("boolean"!=typeof t)throw new TypeError("sideBySide() expects a boolean parameter");this._options.sideBySide=t,this.widget&&(this.hide(),this.show())},i.viewMode=function(t){if(0===arguments.length)return this._options.viewMode;if("string"!=typeof t)throw new TypeError("viewMode() expects a string parameter");if(-1===p.ViewModes.indexOf(t))throw new TypeError("viewMode() parameter must be one of ("+p.ViewModes.join(", ")+") value");this._options.viewMode=t,this.currentViewMode=Math.max(p.ViewModes.indexOf(t)-1,this.MinViewModeNumber),this._showMode()},i.calendarWeeks=function(t){if(0===arguments.length)return this._options.calendarWeeks;if("boolean"!=typeof t)throw new TypeError("calendarWeeks() expects parameter to be a boolean value");this._options.calendarWeeks=t,this._update()},i.buttons=function(t){if(0===arguments.length)return a.extend({},this._options.buttons);if(!(t instanceof Object))throw new TypeError("buttons() expects parameter to be an Object");if(a.extend(this._options.buttons,t),"boolean"!=typeof this._options.buttons.showToday)throw new TypeError("buttons.showToday expects a boolean parameter");if("boolean"!=typeof this._options.buttons.showClear)throw new TypeError("buttons.showClear expects a boolean parameter");if("boolean"!=typeof this._options.buttons.showClose)throw new TypeError("buttons.showClose expects a boolean parameter");this.widget&&(this.hide(),this.show())},i.keepOpen=function(t){if(0===arguments.length)return this._options.keepOpen;if("boolean"!=typeof t)throw new TypeError("keepOpen() expects a boolean parameter");this._options.keepOpen=t},i.focusOnShow=function(t){if(0===arguments.length)return this._options.focusOnShow;if("boolean"!=typeof t)throw new TypeError("focusOnShow() expects a boolean parameter");this._options.focusOnShow=t},i.inline=function(t){if(0===arguments.length)return this._options.inline;if("boolean"!=typeof t)throw new TypeError("inline() expects a boolean parameter");this._options.inline=t},i.clear=function(){this._setValue(null)},i.keyBinds=function(t){if(0===arguments.length)return this._options.keyBinds;this._options.keyBinds=t},i.debug=function(t){if("boolean"!=typeof t)throw new TypeError("debug() expects a boolean parameter");this._options.debug=t},i.allowInputToggle=function(t){if(0===arguments.length)return this._options.allowInputToggle;if("boolean"!=typeof t)throw new TypeError("allowInputToggle() expects a boolean parameter");this._options.allowInputToggle=t},i.keepInvalid=function(t){if(0===arguments.length)return this._options.keepInvalid;if("boolean"!=typeof t)throw new TypeError("keepInvalid() expects a boolean parameter");this._options.keepInvalid=t},i.datepickerInput=function(t){if(0===arguments.length)return this._options.datepickerInput;if("string"!=typeof t)throw new TypeError("datepickerInput() expects a string parameter");this._options.datepickerInput=t},i.parseInputDate=function(t){if(0===arguments.length)return this._options.parseInputDate;if("function"!=typeof t)throw new TypeError("parseInputDate() should be as function");this._options.parseInputDate=t},i.disabledTimeIntervals=function(t){if(0===arguments.length)return this._options.disabledTimeIntervals?a.extend({},this._options.disabledTimeIntervals):this._options.disabledTimeIntervals;if(!t)return this._options.disabledTimeIntervals=!1,this._update(),!0;if(!(t instanceof Array))throw new TypeError("disabledTimeIntervals() expects an array parameter");this._options.disabledTimeIntervals=t,this._update()},i.disabledHours=function(t){if(0===arguments.length)return this._options.disabledHours?a.extend({},this._options.disabledHours):this._options.disabledHours;if(!t)return this._options.disabledHours=!1,this._update(),!0;if(!(t instanceof Array))throw new TypeError("disabledHours() expects an array parameter");if(this._options.disabledHours=this._indexGivenHours(t),this._options.enabledHours=!1,this._options.useCurrent&&!this._options.keepInvalid)for(var e=0;e<this._dates.length;e++){for(var i=0;!this._isValid(this._dates[e],"h");){if(this._dates[e].add(1,"h"),24===i)throw"Tried 24 times to find a valid date";i++}this._setValue(this._dates[e],e)}this._update()},i.enabledHours=function(t){if(0===arguments.length)return this._options.enabledHours?a.extend({},this._options.enabledHours):this._options.enabledHours;if(!t)return this._options.enabledHours=!1,this._update(),!0;if(!(t instanceof Array))throw new TypeError("enabledHours() expects an array parameter");if(this._options.enabledHours=this._indexGivenHours(t),this._options.disabledHours=!1,this._options.useCurrent&&!this._options.keepInvalid)for(var e=0;e<this._dates.length;e++){for(var i=0;!this._isValid(this._dates[e],"h");){if(this._dates[e].add(1,"h"),24===i)throw"Tried 24 times to find a valid date";i++}this._setValue(this._dates[e],e)}this._update()},i.viewDate=function(t){if(0===arguments.length)return this._viewDate.clone();if(!t)return this._viewDate=(this._dates[0]||this.getMoment()).clone(),!0;if(!("string"==typeof t||n.isMoment(t)||t instanceof Date))throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");this._viewDate=this._parseInputDate(t),this._update(),this._viewUpdate(_[this.currentViewMode]&&_[this.currentViewMode].NAV_FUNCTION)},i._fillDate=function(){},i._useFeatherIcons=function(){return"feather"===this._options.icons.type},i.allowMultidate=function(t){if("boolean"!=typeof t)throw new TypeError("allowMultidate() expects a boolean parameter");this._options.allowMultidate=t},i.multidateSeparator=function(t){if(0===arguments.length)return this._options.multidateSeparator;if("string"!=typeof t)throw new TypeError("multidateSeparator expects a string parameter");this._options.multidateSeparator=t},t=p,(e=[{key:"NAME",get:function(){return o}},{key:"DATA_KEY",get:function(){return r}},{key:"EVENT_KEY",get:function(){return d}},{key:"DATA_API_KEY",get:function(){return h}},{key:"DatePickerModes",get:function(){return _}},{key:"ViewModes",get:function(){return m}},{key:"Event",get:function(){return u}},{key:"Selector",get:function(){return l}},{key:"Default",get:function(){return v},set:function(t){v=t}},{key:"ClassName",get:function(){return c}}])&&s(t,e),p}());function y(t){return e=new Date(t),"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime());var e}function D(t){return t.replace(/(^\s+)|(\s+$)/g,"")}function k(t,e){return i[t]&&i[e]?i[t]<0&&i[e]<0?Math.abs(i[e])-Math.abs(i[t]):i[t]<0?-1:i[e]<0?1:i[t]-i[e]:i[t]?i[t]:i[e]?i[e]:0}var E,t,p,C,T,x;E=jQuery,t=E.fn[M.NAME],p=["top","bottom","auto"],C=["left","right","auto"],T=["default","top","bottom"],x=function(d){var t,e;function n(t,e){var i=d.call(this,t,e)||this;return i._init(),i}e=d,(t=n).prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e;var i=n.prototype;return i._init=function(){var t;this._element.hasClass("input-group")&&(0===(t=this._element.find(".datepickerbutton")).length?this.component=this._element.find('[data-toggle="datetimepicker"]'):this.component=t)},i._iconTag=function(t){return"undefined"!=typeof feather&&this._useFeatherIcons()&&feather.icons[t]?E("<span>").html(feather.icons[t].toSvg()):E("<span>").addClass(t)},i._getDatePickerTemplate=function(){var t=E("<thead>").append(E("<tr>").append(E("<th>").addClass("prev").attr("data-action","previous").append(this._iconTag(this._options.icons.previous))).append(E("<th>").addClass("picker-switch").attr("data-action","pickerSwitch").attr("colspan",this._options.calendarWeeks?"6":"5")).append(E("<th>").addClass("next").attr("data-action","next").append(this._iconTag(this._options.icons.next)))),e=E("<tbody>").append(E("<tr>").append(E("<td>").attr("colspan",this._options.calendarWeeks?"8":"7")));return[E("<div>").addClass("datepicker-days").append(E("<table>").addClass("table table-sm").append(t).append(E("<tbody>"))),E("<div>").addClass("datepicker-months").append(E("<table>").addClass("table-condensed").append(t.clone()).append(e.clone())),E("<div>").addClass("datepicker-years").append(E("<table>").addClass("table-condensed").append(t.clone()).append(e.clone())),E("<div>").addClass("datepicker-decades").append(E("<table>").addClass("table-condensed").append(t.clone()).append(e.clone()))]},i._getTimePickerMainTemplate=function(){var t=E("<tr>"),e=E("<tr>"),i=E("<tr>");return this._isEnabled("h")&&(t.append(E("<td>").append(E("<a>").attr({href:"#",tabindex:"-1",title:this._options.tooltips.incrementHour}).addClass("btn").attr("data-action","incrementHours").append(this._iconTag(this._options.icons.up)))),e.append(E("<td>").append(E("<span>").addClass("timepicker-hour").attr({"data-time-component":"hours",title:this._options.tooltips.pickHour}).attr("data-action","showHours"))),i.append(E("<td>").append(E("<a>").attr({href:"#",tabindex:"-1",title:this._options.tooltips.decrementHour}).addClass("btn").attr("data-action","decrementHours").append(this._iconTag(this._options.icons.down))))),this._isEnabled("m")&&(this._isEnabled("h")&&(t.append(E("<td>").addClass("separator")),e.append(E("<td>").addClass("separator").html(":")),i.append(E("<td>").addClass("separator"))),t.append(E("<td>").append(E("<a>").attr({href:"#",tabindex:"-1",title:this._options.tooltips.incrementMinute}).addClass("btn").attr("data-action","incrementMinutes").append(this._iconTag(this._options.icons.up)))),e.append(E("<td>").append(E("<span>").addClass("timepicker-minute").attr({"data-time-component":"minutes",title:this._options.tooltips.pickMinute}).attr("data-action","showMinutes"))),i.append(E("<td>").append(E("<a>").attr({href:"#",tabindex:"-1",title:this._options.tooltips.decrementMinute}).addClass("btn").attr("data-action","decrementMinutes").append(this._iconTag(this._options.icons.down))))),this._isEnabled("s")&&(this._isEnabled("m")&&(t.append(E("<td>").addClass("separator")),e.append(E("<td>").addClass("separator").html(":")),i.append(E("<td>").addClass("separator"))),t.append(E("<td>").append(E("<a>").attr({href:"#",tabindex:"-1",title:this._options.tooltips.incrementSecond}).addClass("btn").attr("data-action","incrementSeconds").append(this._iconTag(this._options.icons.up)))),e.append(E("<td>").append(E("<span>").addClass("timepicker-second").attr({"data-time-component":"seconds",title:this._options.tooltips.pickSecond}).attr("data-action","showSeconds"))),i.append(E("<td>").append(E("<a>").attr({href:"#",tabindex:"-1",title:this._options.tooltips.decrementSecond}).addClass("btn").attr("data-action","decrementSeconds").append(this._iconTag(this._options.icons.down))))),this.use24Hours||(t.append(E("<td>").addClass("separator")),e.append(E("<td>").append(E("<button>").addClass("btn btn-primary").attr({"data-action":"togglePeriod",tabindex:"-1",title:this._options.tooltips.togglePeriod}))),i.append(E("<td>").addClass("separator"))),E("<div>").addClass("timepicker-picker").append(E("<table>").addClass("table-condensed").append([t,e,i]))},i._getTimePickerTemplate=function(){var t=E("<div>").addClass("timepicker-hours").append(E("<table>").addClass("table-condensed")),e=E("<div>").addClass("timepicker-minutes").append(E("<table>").addClass("table-condensed")),i=E("<div>").addClass("timepicker-seconds").append(E("<table>").addClass("table-condensed")),s=[this._getTimePickerMainTemplate()];return this._isEnabled("h")&&s.push(t),this._isEnabled("m")&&s.push(e),this._isEnabled("s")&&s.push(i),s},i._getToolbar=function(){var t,e,i=[];return this._options.buttons.showToday&&i.push(E("<td>").append(E("<a>").attr({href:"#",tabindex:"-1","data-action":"today",title:this._options.tooltips.today}).append(this._iconTag(this._options.icons.today)))),!this._options.sideBySide&&this._options.collapse&&this._hasDate()&&this._hasTime()&&(e="times"===this._options.viewMode?(t=this._options.tooltips.selectDate,this._options.icons.date):(t=this._options.tooltips.selectTime,this._options.icons.time),i.push(E("<td>").append(E("<a>").attr({href:"#",tabindex:"-1","data-action":"togglePicker",title:t}).append(this._iconTag(e))))),this._options.buttons.showClear&&i.push(E("<td>").append(E("<a>").attr({href:"#",tabindex:"-1","data-action":"clear",title:this._options.tooltips.clear}).append(this._iconTag(this._options.icons.clear)))),this._options.buttons.showClose&&i.push(E("<td>").append(E("<a>").attr({href:"#",tabindex:"-1","data-action":"close",title:this._options.tooltips.close}).append(this._iconTag(this._options.icons.close)))),0===i.length?"":E("<table>").addClass("table-condensed").append(E("<tbody>").append(E("<tr>").append(i)))},i._getTemplate=function(){var t=E("<div>").addClass(("bootstrap-datetimepicker-widget dropdown-menu "+(this._options.calendarWeeks?"tempusdominus-bootstrap-datetimepicker-widget-with-calendar-weeks":"")+" "+(this._useFeatherIcons()?"tempusdominus-bootstrap-datetimepicker-widget-with-feather-icons":"")+" ").trim()),e=E("<div>").addClass("datepicker").append(this._getDatePickerTemplate()),i=E("<div>").addClass("timepicker").append(this._getTimePickerTemplate()),s=E("<ul>").addClass("list-unstyled"),a=E("<li>").addClass(("picker-switch"+(this._options.collapse?" accordion-toggle":"")+" "+(this._useFeatherIcons()?"picker-switch-with-feathers-icons":"")).trim()).append(this._getToolbar());return this._options.inline&&t.removeClass("dropdown-menu"),this.use24Hours&&t.addClass("usetwentyfour"),(void 0!==this.input&&this.input.prop("readonly")||this._options.readonly)&&t.addClass("bootstrap-datetimepicker-widget-readonly"),this._isEnabled("s")&&!this.use24Hours&&t.addClass("wider"),this._options.sideBySide&&this._hasDate()&&this._hasTime()?(t.addClass("timepicker-sbs"),"top"===this._options.toolbarPlacement&&t.append(a),t.append(E("<div>").addClass("row").append(e.addClass("col-md-6")).append(i.addClass("col-md-6"))),"bottom"!==this._options.toolbarPlacement&&"default"!==this._options.toolbarPlacement||t.append(a),t):("top"===this._options.toolbarPlacement&&s.append(a),this._hasDate()&&s.append(E("<li>").addClass(this._options.collapse&&this._hasTime()?"collapse":"").addClass(this._options.collapse&&this._hasTime()&&"times"===this._options.viewMode?"":"show").append(e)),"default"===this._options.toolbarPlacement&&s.append(a),this._hasTime()&&s.append(E("<li>").addClass(this._options.collapse&&this._hasDate()?"collapse":"").addClass(this._options.collapse&&this._hasDate()&&"times"===this._options.viewMode?"show":"").append(i)),"bottom"===this._options.toolbarPlacement&&s.append(a),t.append(s))},i._place=function(t){var e,i=t&&t.data&&t.data.picker||this,s=i._options.widgetPositioning.vertical,a=i._options.widgetPositioning.horizontal,n=(i.component&&i.component.length?i.component:i._element).position(),o=(i.component&&i.component.length?i.component:i._element).offset();if(i._options.widgetParent)e=i._options.widgetParent.append(i.widget);else if(i._element.is("input"))e=i._element.after(i.widget).parent();else{if(i._options.inline)return void(e=i._element.append(i.widget));e=i._element,i._element.children().first().after(i.widget)}if("auto"===s&&(s=o.top+1.5*i.widget.height()>=E(window).height()+E(window).scrollTop()&&i.widget.height()+i._element.outerHeight()<o.top?"top":"bottom"),"auto"===a&&(a=e.width()<o.left+i.widget.outerWidth()/2&&o.left+i.widget.outerWidth()>E(window).width()?"right":"left"),"top"===s?i.widget.addClass("top").removeClass("bottom"):i.widget.addClass("bottom").removeClass("top"),"right"===a?i.widget.addClass("float-right"):i.widget.removeClass("float-right"),"relative"!==e.css("position")&&(e=e.parents().filter(function(){return"relative"===E(this).css("position")}).first()),0===e.length)throw new Error("datetimepicker component should be placed within a relative positioned container");i.widget.css({top:"top"===s?"auto":n.top+i._element.outerHeight()+"px",bottom:"top"===s?e.outerHeight()-(e===i._element?0:n.top)+"px":"auto",left:"left"===a?(e===i._element?0:n.left)+"px":"auto",right:"left"===a?"auto":e.outerWidth()-i._element.outerWidth()-(e===i._element?0:n.left)+"px"})},i._fillDow=function(){var t=E("<tr>"),e=this._viewDate.clone().startOf("w").startOf("d");for(!0===this._options.calendarWeeks&&t.append(E("<th>").addClass("cw").text("#"));e.isBefore(this._viewDate.clone().endOf("w"));)t.append(E("<th>").addClass("dow").text(e.format("dd"))),e.add(1,"d");this.widget.find(".datepicker-days thead").append(t)},i._fillMonths=function(){for(var t=[],e=this._viewDate.clone().startOf("y").startOf("d");e.isSame(this._viewDate,"y");)t.push(E("<span>").attr("data-action","selectMonth").addClass("month").text(e.format("MMM"))),e.add(1,"M");this.widget.find(".datepicker-months td").empty().append(t)},i._updateMonths=function(){var t=this.widget.find(".datepicker-months"),e=t.find("th"),i=t.find("tbody").find("span"),s=this,a=this._getLastPickedDate();e.eq(0).find("span").attr("title",this._options.tooltips.prevYear),e.eq(1).attr("title",this._options.tooltips.selectYear),e.eq(2).find("span").attr("title",this._options.tooltips.nextYear),t.find(".disabled").removeClass("disabled"),this._isValid(this._viewDate.clone().subtract(1,"y"),"y")||e.eq(0).addClass("disabled"),e.eq(1).text(this._viewDate.year()),this._isValid(this._viewDate.clone().add(1,"y"),"y")||e.eq(2).addClass("disabled"),i.removeClass("active"),a&&a.isSame(this._viewDate,"y")&&!this.unset&&i.eq(a.month()).addClass("active"),i.each(function(t){s._isValid(s._viewDate.clone().month(t),"M")||E(this).addClass("disabled")})},i._getStartEndYear=function(t,e){var i=t/10,s=Math.floor(e/t)*t;return[s,s+9*i,Math.floor(e/i)*i]},i._updateYears=function(){var t=this.widget.find(".datepicker-years"),e=t.find("th"),i=this._getStartEndYear(10,this._viewDate.year()),s=this._viewDate.clone().year(i[0]),a=this._viewDate.clone().year(i[1]),n="";for(e.eq(0).find("span").attr("title",this._options.tooltips.prevDecade),e.eq(1).attr("title",this._options.tooltips.selectDecade),e.eq(2).find("span").attr("title",this._options.tooltips.nextDecade),t.find(".disabled").removeClass("disabled"),this._options.minDate&&this._options.minDate.isAfter(s,"y")&&e.eq(0).addClass("disabled"),e.eq(1).text(s.year()+"-"+a.year()),this._options.maxDate&&this._options.maxDate.isBefore(a,"y")&&e.eq(2).addClass("disabled"),n+='<span data-action="selectYear" class="year old'+(this._isValid(s,"y")?"":" disabled")+'">'+(s.year()-1)+"</span>";!s.isAfter(a,"y");)n+='<span data-action="selectYear" class="year'+(s.isSame(this._getLastPickedDate(),"y")&&!this.unset?" active":"")+(this._isValid(s,"y")?"":" disabled")+'">'+s.year()+"</span>",s.add(1,"y");n+='<span data-action="selectYear" class="year old'+(this._isValid(s,"y")?"":" disabled")+'">'+s.year()+"</span>",t.find("td").html(n)},i._updateDecades=function(){var t,e=this.widget.find(".datepicker-decades"),i=e.find("th"),s=this._getStartEndYear(100,this._viewDate.year()),a=this._viewDate.clone().year(s[0]),n=this._viewDate.clone().year(s[1]),o=this._getLastPickedDate(),r=!1,d=!1,h="";for(i.eq(0).find("span").attr("title",this._options.tooltips.prevCentury),i.eq(2).find("span").attr("title",this._options.tooltips.nextCentury),e.find(".disabled").removeClass("disabled"),(0===a.year()||this._options.minDate&&this._options.minDate.isAfter(a,"y"))&&i.eq(0).addClass("disabled"),i.eq(1).text(a.year()+"-"+n.year()),this._options.maxDate&&this._options.maxDate.isBefore(n,"y")&&i.eq(2).addClass("disabled"),a.year()-10<0?h+="<span>&nbsp;</span>":h+='<span data-action="selectDecade" class="decade old" data-selection="'+(a.year()+6)+'">'+(a.year()-10)+"</span>";!a.isAfter(n,"y");)t=a.year()+11,r=this._options.minDate&&this._options.minDate.isAfter(a,"y")&&this._options.minDate.year()<=t,d=this._options.maxDate&&this._options.maxDate.isAfter(a,"y")&&this._options.maxDate.year()<=t,h+='<span data-action="selectDecade" class="decade'+(o&&o.isAfter(a)&&o.year()<=t?" active":"")+(this._isValid(a,"y")||r||d?"":" disabled")+'" data-selection="'+(a.year()+6)+'">'+a.year()+"</span>",a.add(10,"y");h+='<span data-action="selectDecade" class="decade old" data-selection="'+(a.year()+6)+'">'+a.year()+"</span>",e.find("td").html(h)},i._fillDate=function(){d.prototype._fillDate.call(this);var t,e,i,s,a,n=this.widget.find(".datepicker-days"),o=n.find("th"),r=[];if(this._hasDate()){for(o.eq(0).find("span").attr("title",this._options.tooltips.prevMonth),o.eq(1).attr("title",this._options.tooltips.selectMonth),o.eq(2).find("span").attr("title",this._options.tooltips.nextMonth),n.find(".disabled").removeClass("disabled"),o.eq(1).text(this._viewDate.format(this._options.dayViewHeaderFormat)),this._isValid(this._viewDate.clone().subtract(1,"M"),"M")||o.eq(0).addClass("disabled"),this._isValid(this._viewDate.clone().add(1,"M"),"M")||o.eq(2).addClass("disabled"),t=this._viewDate.clone().startOf("M").startOf("w").startOf("d"),s=0;s<42;s++){0===t.weekday()&&(e=E("<tr>"),this._options.calendarWeeks&&e.append('<td class="cw">'+t.week()+"</td>"),r.push(e)),i="",t.isBefore(this._viewDate,"M")&&(i+=" old"),t.isAfter(this._viewDate,"M")&&(i+=" new"),this._options.allowMultidate?-1!==(a=this._datesFormatted.indexOf(t.format("YYYY-MM-DD")))&&t.isSame(this._datesFormatted[a],"d")&&!this.unset&&(i+=" active"):t.isSame(this._getLastPickedDate(),"d")&&!this.unset&&(i+=" active"),this._isValid(t,"d")||(i+=" disabled"),t.isSame(this.getMoment(),"d")&&(i+=" today"),0!==t.day()&&6!==t.day()||(i+=" weekend"),e.append('<td data-action="selectDay" data-day="'+t.format("L")+'" class="day'+i+'">'+t.date()+"</td>"),t.add(1,"d")}E("body").addClass("tempusdominus-bootstrap-datetimepicker-widget-day-click"),E("body").append('<div class="tempusdominus-bootstrap-datetimepicker-widget-day-click-glass-panel"></div>'),n.find("tbody").empty().append(r),E("body").find(".tempusdominus-bootstrap-datetimepicker-widget-day-click-glass-panel").remove(),E("body").removeClass("tempusdominus-bootstrap-datetimepicker-widget-day-click"),this._updateMonths(),this._updateYears(),this._updateDecades()}},i._fillHours=function(){var t=this.widget.find(".timepicker-hours table"),e=this._viewDate.clone().startOf("d"),i=[],s=E("<tr>");for(11<this._viewDate.hour()&&!this.use24Hours&&e.hour(12);e.isSame(this._viewDate,"d")&&(this.use24Hours||this._viewDate.hour()<12&&e.hour()<12||11<this._viewDate.hour());)e.hour()%4==0&&(s=E("<tr>"),i.push(s)),s.append('<td data-action="selectHour" class="hour'+(this._isValid(e,"h")?"":" disabled")+'">'+e.format(this.use24Hours?"HH":"hh")+"</td>"),e.add(1,"h");t.empty().append(i)},i._fillMinutes=function(){for(var t=this.widget.find(".timepicker-minutes table"),e=this._viewDate.clone().startOf("h"),i=[],s=1===this._options.stepping?5:this._options.stepping,a=E("<tr>");this._viewDate.isSame(e,"h");)e.minute()%(4*s)==0&&(a=E("<tr>"),i.push(a)),a.append('<td data-action="selectMinute" class="minute'+(this._isValid(e,"m")?"":" disabled")+'">'+e.format("mm")+"</td>"),e.add(s,"m");t.empty().append(i)},i._fillSeconds=function(){for(var t=this.widget.find(".timepicker-seconds table"),e=this._viewDate.clone().startOf("m"),i=[],s=E("<tr>");this._viewDate.isSame(e,"m");)e.second()%20==0&&(s=E("<tr>"),i.push(s)),s.append('<td data-action="selectSecond" class="second'+(this._isValid(e,"s")?"":" disabled")+'">'+e.format("ss")+"</td>"),e.add(5,"s");t.empty().append(i)},i._fillTime=function(){var t,e,i=this.widget.find(".timepicker span[data-time-component]"),s=this._getLastPickedDate();this.use24Hours||(t=this.widget.find(".timepicker [data-action=togglePeriod]"),e=s?s.clone().add(12<=s.hours()?-12:12,"h"):void 0,s&&t.text(s.format("A")),this._isValid(e,"h")?t.removeClass("disabled"):t.addClass("disabled")),s&&i.filter("[data-time-component=hours]").text(s.format(this.use24Hours?"HH":"hh")),s&&i.filter("[data-time-component=minutes]").text(s.format("mm")),s&&i.filter("[data-time-component=seconds]").text(s.format("ss")),this._fillHours(),this._fillMinutes(),this._fillSeconds()},i._doAction=function(t,e){var i=this._getLastPickedDate();if(E(t.currentTarget).is(".disabled"))return!1;switch(e=e||E(t.currentTarget).data("action")){case"next":var s=M.DatePickerModes[this.currentViewMode].NAV_FUNCTION;this._viewDate.add(M.DatePickerModes[this.currentViewMode].NAV_STEP,s),this._fillDate(),this._viewUpdate(s);break;case"previous":var a=M.DatePickerModes[this.currentViewMode].NAV_FUNCTION;this._viewDate.subtract(M.DatePickerModes[this.currentViewMode].NAV_STEP,a),this._fillDate(),this._viewUpdate(a);break;case"pickerSwitch":this._showMode(1);break;case"selectMonth":var n=E(t.target).closest("tbody").find("span").index(E(t.target));this._viewDate.month(n),this.currentViewMode===this.MinViewModeNumber?(this._setValue(i.clone().year(this._viewDate.year()).month(this._viewDate.month()),this._getLastPickedDateIndex()),this._options.inline||this.hide()):(this._showMode(-1),this._fillDate()),this._viewUpdate("M");break;case"selectYear":var o=parseInt(E(t.target).text(),10)||0;this._viewDate.year(o),this.currentViewMode===this.MinViewModeNumber?(this._setValue(i.clone().year(this._viewDate.year()),this._getLastPickedDateIndex()),this._options.inline||this.hide()):(this._showMode(-1),this._fillDate()),this._viewUpdate("YYYY");break;case"selectDecade":var r=parseInt(E(t.target).data("selection"),10)||0;this._viewDate.year(r),this.currentViewMode===this.MinViewModeNumber?(this._setValue(i.clone().year(this._viewDate.year()),this._getLastPickedDateIndex()),this._options.inline||this.hide()):(this._showMode(-1),this._fillDate()),this._viewUpdate("YYYY");break;case"selectDay":var d=this._viewDate.clone();E(t.target).is(".old")&&d.subtract(1,"M"),E(t.target).is(".new")&&d.add(1,"M");var h=d.date(parseInt(E(t.target).text(),10)),p=0;this._options.allowMultidate?-1!==(p=this._datesFormatted.indexOf(h.format("YYYY-MM-DD")))?this._setValue(null,p):this._setValue(h,this._getLastPickedDateIndex()+1):this._setValue(h,this._getLastPickedDateIndex()),this._hasTime()||this._options.keepOpen||this._options.inline||this._options.allowMultidate||this.hide();break;case"incrementHours":if(!i)break;var l=i.clone().add(1,"h");this._isValid(l,"h")&&(this._getLastPickedDateIndex()<0&&this.date(l),this._setValue(l,this._getLastPickedDateIndex()));break;case"incrementMinutes":if(!i)break;var c=i.clone().add(this._options.stepping,"m");this._isValid(c,"m")&&(this._getLastPickedDateIndex()<0&&this.date(c),this._setValue(c,this._getLastPickedDateIndex()));break;case"incrementSeconds":if(!i)break;var u=i.clone().add(1,"s");this._isValid(u,"s")&&(this._getLastPickedDateIndex()<0&&this.date(u),this._setValue(u,this._getLastPickedDateIndex()));break;case"decrementHours":if(!i)break;var _=i.clone().subtract(1,"h");this._isValid(_,"h")&&(this._getLastPickedDateIndex()<0&&this.date(_),this._setValue(_,this._getLastPickedDateIndex()));break;case"decrementMinutes":if(!i)break;var f=i.clone().subtract(this._options.stepping,"m");this._isValid(f,"m")&&(this._getLastPickedDateIndex()<0&&this.date(f),this._setValue(f,this._getLastPickedDateIndex()));break;case"decrementSeconds":if(!i)break;var m=i.clone().subtract(1,"s");this._isValid(m,"s")&&(this._getLastPickedDateIndex()<0&&this.date(m),this._setValue(m,this._getLastPickedDateIndex()));break;case"togglePeriod":this._setValue(i.clone().add(12<=i.hours()?-12:12,"h"),this._getLastPickedDateIndex());break;case"togglePicker":var w,g,b=E(t.target),v=b.closest("a"),y=b.closest("ul"),D=y.find(".show"),k=y.find(".collapse:not(.show)"),C=b.is("span")?b:b.find("span");if(D&&D.length){if((w=D.data("collapse"))&&w.transitioning)return!0;D.collapse?(D.collapse("hide"),k.collapse("show")):(D.removeClass("show"),k.addClass("show")),this._useFeatherIcons()?(v.toggleClass(this._options.icons.time+" "+this._options.icons.date),g=v.hasClass(this._options.icons.time)?this._options.icons.date:this._options.icons.time,v.html(this._iconTag(g))):C.toggleClass(this._options.icons.time+" "+this._options.icons.date),(this._useFeatherIcons()?v.hasClass(this._options.icons.date):C.hasClass(this._options.icons.date))?v.attr("title",this._options.tooltips.selectDate):v.attr("title",this._options.tooltips.selectTime)}break;case"showPicker":this.widget.find(".timepicker > div:not(.timepicker-picker)").hide(),this.widget.find(".timepicker .timepicker-picker").show();break;case"showHours":this.widget.find(".timepicker .timepicker-picker").hide(),this.widget.find(".timepicker .timepicker-hours").show();break;case"showMinutes":this.widget.find(".timepicker .timepicker-picker").hide(),this.widget.find(".timepicker .timepicker-minutes").show();break;case"showSeconds":this.widget.find(".timepicker .timepicker-picker").hide(),this.widget.find(".timepicker .timepicker-seconds").show();break;case"selectHour":var T=parseInt(E(t.target).text(),10);this.use24Hours||(12<=i.hours()?12!==T&&(T+=12):12===T&&(T=0)),this._setValue(i.clone().hours(T),this._getLastPickedDateIndex()),this._isEnabled("a")||this._isEnabled("m")||this._options.keepOpen||this._options.inline?this._doAction(t,"showPicker"):this.hide();break;case"selectMinute":this._setValue(i.clone().minutes(parseInt(E(t.target).text(),10)),this._getLastPickedDateIndex()),this._isEnabled("a")||this._isEnabled("s")||this._options.keepOpen||this._options.inline?this._doAction(t,"showPicker"):this.hide();break;case"selectSecond":this._setValue(i.clone().seconds(parseInt(E(t.target).text(),10)),this._getLastPickedDateIndex()),this._isEnabled("a")||this._options.keepOpen||this._options.inline?this._doAction(t,"showPicker"):this.hide();break;case"clear":this.clear();break;case"close":this.hide();break;case"today":var x=this.getMoment();this._isValid(x,"d")&&this._setValue(x,this._getLastPickedDateIndex());break}return!1},i.hide=function(){var t,e=!1;this.widget&&(this.widget.find(".collapse").each(function(){var t=E(this).data("collapse");return!t||!t.transitioning||!(e=!0)}),e||(this.component&&this.component.hasClass("btn")&&this.component.toggleClass("active"),this.widget.hide(),E(window).off("resize",this._place),this.widget.off("click","[data-action]"),this.widget.off("mousedown",!1),this.widget.remove(),this.widget=!1,void 0!==this.input&&void 0!==this.input.val()&&0!==this.input.val().trim().length&&this._setValue(this._parseInputDate(this.input.val().trim(),{isPickerShow:!1}),0),t=this._getLastPickedDate(),this._notifyEvent({type:M.Event.HIDE,date:this.unset?null:t?t.clone():void 0}),void 0!==this.input&&this.input.blur(),this._viewDate=t?t.clone():this.getMoment()))},i.show=function(){var t,e=!1;if(void 0!==this.input){if(this.input.prop("disabled")||!this._options.ignoreReadonly&&this.input.prop("readonly")||this.widget)return;void 0!==this.input.val()&&0!==this.input.val().trim().length?this._setValue(this._parseInputDate(this.input.val().trim(),{isPickerShow:!0}),0):e=!0}else e=!0;e&&this.unset&&this._options.useCurrent&&(t=this.getMoment(),"string"==typeof this._options.useCurrent&&(t={year:function(t){return t.month(0).date(1).hours(0).seconds(0).minutes(0)},month:function(t){return t.date(1).hours(0).seconds(0).minutes(0)},day:function(t){return t.hours(0).seconds(0).minutes(0)},hour:function(t){return t.seconds(0).minutes(0)},minute:function(t){return t.seconds(0)}}[this._options.useCurrent](t)),this._setValue(t,0)),this.widget=this._getTemplate(),this._fillDow(),this._fillMonths(),this.widget.find(".timepicker-hours").hide(),this.widget.find(".timepicker-minutes").hide(),this.widget.find(".timepicker-seconds").hide(),this._update(),this._showMode(),E(window).on("resize",{picker:this},this._place),this.widget.on("click","[data-action]",E.proxy(this._doAction,this)),this.widget.on("mousedown",!1),this.component&&this.component.hasClass("btn")&&this.component.toggleClass("active"),this._place(),this.widget.show(),void 0!==this.input&&this._options.focusOnShow&&!this.input.is(":focus")&&this.input.focus(),this._notifyEvent({type:M.Event.SHOW})},i.destroy=function(){this.hide(),this._element.removeData(M.DATA_KEY),this._element.removeData("date")},i.disable=function(){this.hide(),this.component&&this.component.hasClass("btn")&&this.component.addClass("disabled"),void 0!==this.input&&this.input.prop("disabled",!0)},i.enable=function(){this.component&&this.component.hasClass("btn")&&this.component.removeClass("disabled"),void 0!==this.input&&this.input.prop("disabled",!1)},i.toolbarPlacement=function(t){if(0===arguments.length)return this._options.toolbarPlacement;if("string"!=typeof t)throw new TypeError("toolbarPlacement() expects a string parameter");if(-1===T.indexOf(t))throw new TypeError("toolbarPlacement() parameter must be one of ("+T.join(", ")+") value");this._options.toolbarPlacement=t,this.widget&&(this.hide(),this.show())},i.widgetPositioning=function(t){if(0===arguments.length)return E.extend({},this._options.widgetPositioning);if("[object Object]"!=={}.toString.call(t))throw new TypeError("widgetPositioning() expects an object variable");if(t.horizontal){if("string"!=typeof t.horizontal)throw new TypeError("widgetPositioning() horizontal variable must be a string");if(t.horizontal=t.horizontal.toLowerCase(),-1===C.indexOf(t.horizontal))throw new TypeError("widgetPositioning() expects horizontal parameter to be one of ("+C.join(", ")+")");this._options.widgetPositioning.horizontal=t.horizontal}if(t.vertical){if("string"!=typeof t.vertical)throw new TypeError("widgetPositioning() vertical variable must be a string");if(t.vertical=t.vertical.toLowerCase(),-1===p.indexOf(t.vertical))throw new TypeError("widgetPositioning() expects vertical parameter to be one of ("+p.join(", ")+")");this._options.widgetPositioning.vertical=t.vertical}this._update()},i.widgetParent=function(t){if(0===arguments.length)return this._options.widgetParent;if("string"==typeof t&&(t=E(t)),null!==t&&"string"!=typeof t&&!(t instanceof E))throw new TypeError("widgetParent() expects a string or a jQuery object parameter");this._options.widgetParent=t,this.widget&&(this.hide(),this.show())},i.setMultiDate=function(t){var e=this._options.format;this.clear();for(var i=0;i<t.length;i++){var s=moment(t[i],e);this._setValue(s,i)}},n._jQueryHandleThis=function(t,e,i){var s=E(t).data(M.DATA_KEY);if("object"==typeof e&&E.extend({},M.Default,e),s||(s=new n(E(t),e),E(t).data(M.DATA_KEY,s)),"string"==typeof e){if(void 0===s[e])throw new Error('No method named "'+e+'"');if(void 0===i)return s[e]();"date"===e&&(s.isDateUpdateThroughDateOptionFromClientCode=!0);var a=s[e](i);return s.isDateUpdateThroughDateOptionFromClientCode=!1,a}},n._jQueryInterface=function(t,e){return 1===this.length?n._jQueryHandleThis(this[0],t,e):this.each(function(){n._jQueryHandleThis(this,t,e)})},n}(M),E(document).on(M.Event.CLICK_DATA_API,M.Selector.DATA_TOGGLE,function(){var t=E(this),e=I(t),i=e.data(M.DATA_KEY);0!==e.length&&(i._options.allowInputToggle&&t.is('input[data-toggle="datetimepicker"]')||x._jQueryInterface.call(e,"toggle"))}).on(M.Event.CHANGE,"."+M.ClassName.INPUT,function(t){var e=I(E(this));0===e.length||t.isInit||x._jQueryInterface.call(e,"_change",t)}).on(M.Event.BLUR,"."+M.ClassName.INPUT,function(t){var e=I(E(this)),i=e.data(M.DATA_KEY);0!==e.length&&(i._options.debug||window.debug||x._jQueryInterface.call(e,"hide",t))}).on(M.Event.KEYDOWN,"."+M.ClassName.INPUT,function(t){var e=I(E(this));0!==e.length&&x._jQueryInterface.call(e,"_keydown",t)}).on(M.Event.KEYUP,"."+M.ClassName.INPUT,function(t){var e=I(E(this));0!==e.length&&x._jQueryInterface.call(e,"_keyup",t)}).on(M.Event.FOCUS,"."+M.ClassName.INPUT,function(t){var e=I(E(this)),i=e.data(M.DATA_KEY);0!==e.length&&i._options.allowInputToggle&&x._jQueryInterface.call(e,"show",t)}),E.fn[M.NAME]=x._jQueryInterface,E.fn[M.NAME].Constructor=x,E.fn[M.NAME].noConflict=function(){return E.fn[M.NAME]=t,x._jQueryInterface};function I(t){var e,i=t.data("target");return i||(i=t.attr("href")||"",i=/^#[a-z]/i.test(i)?i:null),0===(e=E(i)).length?t:(e.data(M.DATA_KEY)||E.extend({},e.data(),E(this).data()),e)}}();
/*! Summernote v0.8.20 | (c) 2013- Alan Hong and contributors | MIT license */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("jQuery"));else if("function"==typeof define&&define.amd)define(["jQuery"],e);else{var n="object"==typeof exports?e(require("jQuery")):e(t.jQuery);for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(self,(function(t){return(()=>{"use strict";var e={9770:(t,e,n)=>{var o=n(1145),i=n.n(o);i().summernote=i().summernote||{lang:{}},i().extend(i().summernote.lang,{"en-US":{font:{bold:"Bold",italic:"Italic",underline:"Underline",clear:"Remove Font Style",height:"Line Height",name:"Font Family",strikethrough:"Strikethrough",subscript:"Subscript",superscript:"Superscript",size:"Font Size",sizeunit:"Font Size Unit"},image:{image:"Picture",insert:"Insert Image",resizeFull:"Resize full",resizeHalf:"Resize half",resizeQuarter:"Resize quarter",resizeNone:"Original size",floatLeft:"Float Left",floatRight:"Float Right",floatNone:"Remove float",shapeRounded:"Shape: Rounded",shapeCircle:"Shape: Circle",shapeThumbnail:"Shape: Thumbnail",shapeNone:"Shape: None",dragImageHere:"Drag image or text here",dropImage:"Drop image or Text",selectFromFiles:"Select from files",maximumFileSize:"Maximum file size",maximumFileSizeError:"Maximum file size exceeded.",url:"Image URL",remove:"Remove Image",original:"Original"},video:{video:"Video",videoLink:"Video Link",insert:"Insert Video",url:"Video URL",providers:"(YouTube, Google Drive, Vimeo, Vine, Instagram, DailyMotion, Youku, Peertube)"},link:{link:"Link",insert:"Insert Link",unlink:"Unlink",edit:"Edit",textToDisplay:"Text to display",url:"To what URL should this link go?",openInNewWindow:"Open in new window",useProtocol:"Use default protocol"},table:{table:"Table",addRowAbove:"Add row above",addRowBelow:"Add row below",addColLeft:"Add column left",addColRight:"Add column right",delRow:"Delete row",delCol:"Delete column",delTable:"Delete table"},hr:{insert:"Insert Horizontal Rule"},style:{style:"Style",p:"Normal",blockquote:"Quote",pre:"Code",h1:"Header 1",h2:"Header 2",h3:"Header 3",h4:"Header 4",h5:"Header 5",h6:"Header 6"},lists:{unordered:"Unordered list",ordered:"Ordered list"},options:{help:"Help",fullscreen:"Full Screen",codeview:"Code View"},paragraph:{paragraph:"Paragraph",outdent:"Outdent",indent:"Indent",left:"Align left",center:"Align center",right:"Align right",justify:"Justify full"},color:{recent:"Recent Color",more:"More Color",background:"Background Color",foreground:"Text Color",transparent:"Transparent",setTransparent:"Set transparent",reset:"Reset",resetToDefault:"Reset to default",cpSelect:"Select"},shortcut:{shortcuts:"Keyboard shortcuts",close:"Close",textFormatting:"Text formatting",action:"Action",paragraphFormatting:"Paragraph formatting",documentStyle:"Document Style",extraKeys:"Extra keys"},help:{escape:"Escape",insertParagraph:"Insert Paragraph",undo:"Undo the last command",redo:"Redo the last command",tab:"Tab",untab:"Untab",bold:"Set a bold style",italic:"Set a italic style",underline:"Set a underline style",strikethrough:"Set a strikethrough style",removeFormat:"Clean a style",justifyLeft:"Set left align",justifyCenter:"Set center align",justifyRight:"Set right align",justifyFull:"Set full align",insertUnorderedList:"Toggle unordered list",insertOrderedList:"Toggle ordered list",outdent:"Outdent on current paragraph",indent:"Indent on current paragraph",formatPara:"Change current block's format as a paragraph(P tag)",formatH1:"Change current block's format as H1",formatH2:"Change current block's format as H2",formatH3:"Change current block's format as H3",formatH4:"Change current block's format as H4",formatH5:"Change current block's format as H5",formatH6:"Change current block's format as H6",insertHorizontalRule:"Insert horizontal rule","linkDialog.show":"Show Link Dialog"},history:{undo:"Undo",redo:"Redo"},specialChar:{specialChar:"SPECIAL CHARACTERS",select:"Select Special characters"},output:{noSelection:"No Selection Made!"}}})},1145:e=>{e.exports=t}},n={};function o(t){var i=n[t];if(void 0!==i)return i.exports;var r=n[t]={exports:{}};return e[t](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return(()=>{o.r(i);var t=o(1145),e=o.n(t),n=(o(9770),["sans-serif","serif","monospace","cursive","fantasy"]);function r(t){return-1===e().inArray(t.toLowerCase(),n)?"'".concat(t,"'"):t}var a,s=navigator.userAgent,l=/MSIE|Trident/i.test(s);if(l){var c=/MSIE (\d+[.]\d+)/.exec(s);c&&(a=parseFloat(c[1])),(c=/Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(s))&&(a=parseFloat(c[1]))}var u=/Edge\/\d+/.test(s),d="ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0,h=l?"DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted":"input";const f={isMac:navigator.appVersion.indexOf("Mac")>-1,isMSIE:l,isEdge:u,isFF:!u&&/firefox/i.test(s),isPhantom:/PhantomJS/i.test(s),isWebkit:!u&&/webkit/i.test(s),isChrome:!u&&/chrome/i.test(s),isSafari:!u&&/safari/i.test(s)&&!/chrome/i.test(s),browserVersion:a,isSupportTouch:d,isFontInstalled:function(t){var e="Comic Sans MS"===t?"Courier New":"Comic Sans MS",n="mmmmmmmmmmwwwww",o=document.createElement("canvas").getContext("2d");o.font="200px '"+e+"'";var i=o.measureText(n).width;return o.font="200px "+r(t)+', "'+e+'"',i!==o.measureText(n).width},isW3CRangeSupport:!!document.createRange,inputEventName:h,genericFontFamilies:n,validFontName:r};var p=0;const m={eq:function(t){return function(e){return t===e}},eq2:function(t,e){return t===e},peq2:function(t){return function(e,n){return e[t]===n[t]}},ok:function(){return!0},fail:function(){return!1},self:function(t){return t},not:function(t){return function(){return!t.apply(t,arguments)}},and:function(t,e){return function(n){return t(n)&&e(n)}},invoke:function(t,e){return function(){return t[e].apply(t,arguments)}},resetUniqueId:function(){p=0},uniqueId:function(t){var e=++p+"";return t?t+e:e},rect2bnd:function(t){var n=e()(document);return{top:t.top+n.scrollTop(),left:t.left+n.scrollLeft(),width:t.right-t.left,height:t.bottom-t.top}},invertObject:function(t){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[t[n]]=n);return e},namespaceToCamel:function(t,e){return(e=e||"")+t.split(".").map((function(t){return t.substring(0,1).toUpperCase()+t.substring(1)})).join("")},debounce:function(t,e,n){var o;return function(){var i=this,r=arguments,a=function(){o=null,n||t.apply(i,r)},s=n&&!o;clearTimeout(o),o=setTimeout(a,e),s&&t.apply(i,r)}},isValidUrl:function(t){return/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(t)}};function v(t){return t[0]}function g(t){return t[t.length-1]}function b(t){return t.slice(1)}function y(t,e){if(t&&t.length&&e){if(t.indexOf)return-1!==t.indexOf(e);if(t.contains)return t.contains(e)}return!1}const k={head:v,last:g,initial:function(t){return t.slice(0,t.length-1)},tail:b,prev:function(t,e){if(t&&t.length&&e){var n=t.indexOf(e);return-1===n?null:t[n-1]}return null},next:function(t,e){if(t&&t.length&&e){var n=t.indexOf(e);return-1===n?null:t[n+1]}return null},find:function(t,e){for(var n=0,o=t.length;n<o;n++){var i=t[n];if(e(i))return i}},contains:y,all:function(t,e){for(var n=0,o=t.length;n<o;n++)if(!e(t[n]))return!1;return!0},sum:function(t,e){return e=e||m.self,t.reduce((function(t,n){return t+e(n)}),0)},from:function(t){for(var e=[],n=t.length,o=-1;++o<n;)e[o]=t[o];return e},isEmpty:function(t){return!t||!t.length},clusterBy:function(t,e){return t.length?b(t).reduce((function(t,n){var o=g(t);return e(g(o),n)?o[o.length]=n:t[t.length]=[n],t}),[[v(t)]]):[]},compact:function(t){for(var e=[],n=0,o=t.length;n<o;n++)t[n]&&e.push(t[n]);return e},unique:function(t){for(var e=[],n=0,o=t.length;n<o;n++)y(e,t[n])||e.push(t[n]);return e}};var w=String.fromCharCode(160);function C(t){return t&&e()(t).hasClass("note-editable")}function x(t){return t=t.toUpperCase(),function(e){return e&&e.nodeName.toUpperCase()===t}}function S(t){return t&&3===t.nodeType}function T(t){return t&&/^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^AUDIO|^VIDEO|^EMBED/.test(t.nodeName.toUpperCase())}function E(t){return!C(t)&&(t&&/^DIV|^P|^LI|^H[1-7]/.test(t.nodeName.toUpperCase()))}var I=x("PRE"),$=x("LI");var N=x("TABLE"),P=x("DATA");function R(t){return!(H(t)||L(t)||A(t)||E(t)||N(t)||D(t)||P(t))}function L(t){return t&&/^UL|^OL/.test(t.nodeName.toUpperCase())}var A=x("HR");function F(t){return t&&/^TD|^TH/.test(t.nodeName.toUpperCase())}var D=x("BLOCKQUOTE");function H(t){return F(t)||D(t)||C(t)}var z=x("A");var B=x("BODY");var M=f.isMSIE&&f.browserVersion<11?"&nbsp;":"<br>";function O(t){return S(t)?t.nodeValue.length:t?t.childNodes.length:0}function U(t){var e=O(t);return 0===e||(!S(t)&&1===e&&t.innerHTML===M||!(!k.all(t.childNodes,S)||""!==t.innerHTML))}function j(t){T(t)||O(t)||(t.innerHTML=M)}function W(t,e){for(;t;){if(e(t))return t;if(C(t))break;t=t.parentNode}return null}function K(t,e){e=e||m.fail;var n=[];return W(t,(function(t){return C(t)||n.push(t),e(t)})),n}function V(t,e){e=e||m.fail;for(var n=[];t&&!e(t);)n.push(t),t=t.nextSibling;return n}function q(t,e){var n=e.nextSibling,o=e.parentNode;return n?o.insertBefore(t,n):o.appendChild(t),t}function _(t,n){return e().each(n,(function(e,n){t.appendChild(n)})),t}function G(t){return 0===t.offset}function Y(t){return t.offset===O(t.node)}function Z(t){return G(t)||Y(t)}function Q(t,e){for(;t&&t!==e;){if(0!==J(t))return!1;t=t.parentNode}return!0}function X(t,e){if(!e)return!1;for(;t&&t!==e;){if(J(t)!==O(t.parentNode)-1)return!1;t=t.parentNode}return!0}function J(t){for(var e=0;t=t.previousSibling;)e+=1;return e}function tt(t){return!!(t&&t.childNodes&&t.childNodes.length)}function et(t,e){var n,o;if(0===t.offset){if(C(t.node))return null;n=t.node.parentNode,o=J(t.node)}else tt(t.node)?o=O(n=t.node.childNodes[t.offset-1]):(n=t.node,o=e?0:t.offset-1);return{node:n,offset:o}}function nt(t,e){var n,o;if(O(t.node)===t.offset){if(C(t.node))return null;var i=it(t.node);i?(n=i,o=0):(n=t.node.parentNode,o=J(t.node)+1)}else tt(t.node)?(n=t.node.childNodes[t.offset],o=0):(n=t.node,o=e?O(t.node):t.offset+1);return{node:n,offset:o}}function ot(t,e){var n,o=0;if(U(t.node))return null===t.node?null:{node:n=t.node.nextSibling,offset:o=0};if(O(t.node)===t.offset){if(C(t.node))return null;n=t.node.parentNode,o=J(t.node)+1,C(n)&&(n=t.node.nextSibling,o=0)}else if(tt(t.node)){if(o=0,U(n=t.node.childNodes[t.offset]))return U(t.node.nextSibling)?null:{node:t.node.nextSibling,offset:o}}else if(n=t.node,o=e?O(t.node):t.offset+1,U(n))return null;return{node:n,offset:o}}function it(t){if(t.nextSibling&&t.parent===t.nextSibling.parent)return S(t.nextSibling)?t.nextSibling:it(t.nextSibling)}function rt(t,e){return t.node===e.node&&t.offset===e.offset}function at(t,e){var n=e&&e.isSkipPaddingBlankHTML,o=e&&e.isNotSplitEdgePoint,i=e&&e.isDiscardEmptySplits;if(i&&(n=!0),Z(t)&&(S(t.node)||o)){if(G(t))return t.node;if(Y(t))return t.node.nextSibling}if(S(t.node))return t.node.splitText(t.offset);var r=t.node.childNodes[t.offset],a=q(t.node.cloneNode(!1),t.node);return _(a,V(r)),n||(j(t.node),j(a)),i&&(U(t.node)&&ct(t.node),U(a))?(ct(a),t.node.nextSibling):a}function st(t,e,n){var o=K(e.node,m.eq(t));return o.length?1===o.length?at(e,n):o.reduce((function(t,o){return t===e.node&&(t=at(e,n)),at({node:o,offset:t?J(t):O(o)},n)})):null}function lt(t){return document.createElement(t)}function ct(t,e){if(t&&t.parentNode){if(t.removeNode)return t.removeNode(e);var n=t.parentNode;if(!e){for(var o=[],i=0,r=t.childNodes.length;i<r;i++)o.push(t.childNodes[i]);for(var a=0,s=o.length;a<s;a++)n.insertBefore(o[a],t)}n.removeChild(t)}}var ut=x("TEXTAREA");function dt(t,e){var n=ut(t[0])?t.val():t.html();return e?n.replace(/[\n\r]/g,""):n}const ht={NBSP_CHAR:w,ZERO_WIDTH_NBSP_CHAR:"\ufeff",blank:M,emptyPara:"<p>".concat(M,"</p>"),makePredByNodeName:x,isEditable:C,isControlSizing:function(t){return t&&e()(t).hasClass("note-control-sizing")},isText:S,isElement:function(t){return t&&1===t.nodeType},isVoid:T,isPara:E,isPurePara:function(t){return E(t)&&!$(t)},isHeading:function(t){return t&&/^H[1-7]/.test(t.nodeName.toUpperCase())},isInline:R,isBlock:m.not(R),isBodyInline:function(t){return R(t)&&!W(t,E)},isBody:B,isParaInline:function(t){return R(t)&&!!W(t,E)},isPre:I,isList:L,isTable:N,isData:P,isCell:F,isBlockquote:D,isBodyContainer:H,isAnchor:z,isDiv:x("DIV"),isLi:$,isBR:x("BR"),isSpan:x("SPAN"),isB:x("B"),isU:x("U"),isS:x("S"),isI:x("I"),isImg:x("IMG"),isTextarea:ut,deepestChildIsEmpty:function(t){do{if(null===t.firstElementChild||""===t.firstElementChild.innerHTML)break}while(t=t.firstElementChild);return U(t)},isEmpty:U,isEmptyAnchor:m.and(z,U),isClosestSibling:function(t,e){return t.nextSibling===e||t.previousSibling===e},withClosestSiblings:function(t,e){e=e||m.ok;var n=[];return t.previousSibling&&e(t.previousSibling)&&n.push(t.previousSibling),n.push(t),t.nextSibling&&e(t.nextSibling)&&n.push(t.nextSibling),n},nodeLength:O,isLeftEdgePoint:G,isRightEdgePoint:Y,isEdgePoint:Z,isLeftEdgeOf:Q,isRightEdgeOf:X,isLeftEdgePointOf:function(t,e){return G(t)&&Q(t.node,e)},isRightEdgePointOf:function(t,e){return Y(t)&&X(t.node,e)},prevPoint:et,nextPoint:nt,nextPointWithEmptyNode:ot,isSamePoint:rt,isVisiblePoint:function(t){if(S(t.node)||!tt(t.node)||U(t.node))return!0;var e=t.node.childNodes[t.offset-1],n=t.node.childNodes[t.offset];return!((e&&!T(e)||n&&!T(n))&&!N(n))},prevPointUntil:function(t,e){for(;t;){if(e(t))return t;t=et(t)}return null},nextPointUntil:function(t,e){for(;t;){if(e(t))return t;t=nt(t)}return null},isCharPoint:function(t){if(!S(t.node))return!1;var e=t.node.nodeValue.charAt(t.offset-1);return e&&" "!==e&&e!==w},isSpacePoint:function(t){if(!S(t.node))return!1;var e=t.node.nodeValue.charAt(t.offset-1);return" "===e||e===w},walkPoint:function(t,e,n,o){for(var i=t;i&&(n(i),!rt(i,e));){i=ot(i,o&&t.node!==i.node&&e.node!==i.node)}},ancestor:W,singleChildAncestor:function(t,e){for(t=t.parentNode;t&&1===O(t);){if(e(t))return t;if(C(t))break;t=t.parentNode}return null},listAncestor:K,lastAncestor:function(t,e){var n=K(t);return k.last(n.filter(e))},listNext:V,listPrev:function(t,e){e=e||m.fail;for(var n=[];t&&!e(t);)n.push(t),t=t.previousSibling;return n},listDescendant:function(t,e){var n=[];return e=e||m.ok,function o(i){t!==i&&e(i)&&n.push(i);for(var r=0,a=i.childNodes.length;r<a;r++)o(i.childNodes[r])}(t),n},commonAncestor:function(t,e){for(var n=K(t),o=e;o;o=o.parentNode)if(n.indexOf(o)>-1)return o;return null},wrap:function(t,n){var o=t.parentNode,i=e()("<"+n+">")[0];return o.insertBefore(i,t),i.appendChild(t),i},insertAfter:q,appendChildNodes:_,position:J,hasChildren:tt,makeOffsetPath:function(t,e){return K(e,m.eq(t)).map(J).reverse()},fromOffsetPath:function(t,e){for(var n=t,o=0,i=e.length;o<i;o++)n=n.childNodes.length<=e[o]?n.childNodes[n.childNodes.length-1]:n.childNodes[e[o]];return n},splitTree:st,splitPoint:function(t,e){var n,o,i=e?E:H,r=K(t.node,i),a=k.last(r)||t.node;i(a)?(n=r[r.length-2],o=a):o=(n=a).parentNode;var s=n&&st(n,t,{isSkipPaddingBlankHTML:e,isNotSplitEdgePoint:e});return s||o!==t.node||(s=t.node.childNodes[t.offset]),{rightNode:s,container:o}},create:lt,createText:function(t){return document.createTextNode(t)},remove:ct,removeWhile:function(t,e){for(;t&&!C(t)&&e(t);){var n=t.parentNode;ct(t),t=n}},replace:function(t,e){if(t.nodeName.toUpperCase()===e.toUpperCase())return t;var n=lt(e);return t.style.cssText&&(n.style.cssText=t.style.cssText),_(n,k.from(t.childNodes)),q(n,t),ct(t),n},html:function(t,e){var n=dt(t);if(e){n=(n=n.replace(/<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g,(function(t,e,n){n=n.toUpperCase();var o=/^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(n)&&!!e,i=/^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(n);return t+(o||i?"\n":"")}))).trim()}return n},value:dt,posFromPlaceholder:function(t){var n=e()(t),o=n.offset(),i=n.outerHeight(!0);return{left:o.left,top:o.top+i}},attachEvents:function(t,e){Object.keys(e).forEach((function(n){t.on(n,e[n])}))},detachEvents:function(t,e){Object.keys(e).forEach((function(n){t.off(n,e[n])}))},isCustomStyleTag:function(t){return t&&!S(t)&&k.contains(t.classList,"note-styletag")}};function ft(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var pt=function(){function t(n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$note=n,this.memos={},this.modules={},this.layoutInfo={},this.options=e().extend(!0,{},o),e().summernote.ui=e().summernote.ui_template(this.options),this.ui=e().summernote.ui,this.initialize()}var n,o,i;return n=t,o=[{key:"initialize",value:function(){return this.layoutInfo=this.ui.createLayout(this.$note),this._initialize(),this.$note.hide(),this}},{key:"destroy",value:function(){this._destroy(),this.$note.removeData("summernote"),this.ui.removeLayout(this.$note,this.layoutInfo)}},{key:"reset",value:function(){var t=this.isDisabled();this.code(ht.emptyPara),this._destroy(),this._initialize(),t&&this.disable()}},{key:"_initialize",value:function(){var t=this;this.options.id=m.uniqueId(e().now()),this.options.container=this.options.container||this.layoutInfo.editor;var n=e().extend({},this.options.buttons);Object.keys(n).forEach((function(e){t.memo("button."+e,n[e])}));var o=e().extend({},this.options.modules,e().summernote.plugins||{});Object.keys(o).forEach((function(e){t.module(e,o[e],!0)})),Object.keys(this.modules).forEach((function(e){t.initializeModule(e)}))}},{key:"_destroy",value:function(){var t=this;Object.keys(this.modules).reverse().forEach((function(e){t.removeModule(e)})),Object.keys(this.memos).forEach((function(e){t.removeMemo(e)})),this.triggerEvent("destroy",this)}},{key:"code",value:function(t){var e=this.invoke("codeview.isActivated");if(void 0===t)return this.invoke("codeview.sync"),e?this.layoutInfo.codable.val():this.layoutInfo.editable.html();e?this.invoke("codeview.sync",t):this.layoutInfo.editable.html(t),this.$note.val(t),this.triggerEvent("change",t,this.layoutInfo.editable)}},{key:"isDisabled",value:function(){return"false"===this.layoutInfo.editable.attr("contenteditable")}},{key:"enable",value:function(){this.layoutInfo.editable.attr("contenteditable",!0),this.invoke("toolbar.activate",!0),this.triggerEvent("disable",!1),this.options.editing=!0}},{key:"disable",value:function(){this.invoke("codeview.isActivated")&&this.invoke("codeview.deactivate"),this.layoutInfo.editable.attr("contenteditable",!1),this.options.editing=!1,this.invoke("toolbar.deactivate",!0),this.triggerEvent("disable",!0)}},{key:"triggerEvent",value:function(){var t=k.head(arguments),e=k.tail(k.from(arguments)),n=this.options.callbacks[m.namespaceToCamel(t,"on")];n&&n.apply(this.$note[0],e),this.$note.trigger("summernote."+t,e)}},{key:"initializeModule",value:function(t){var e=this.modules[t];e.shouldInitialize=e.shouldInitialize||m.ok,e.shouldInitialize()&&(e.initialize&&e.initialize(),e.events&&ht.attachEvents(this.$note,e.events))}},{key:"module",value:function(t,e,n){if(1===arguments.length)return this.modules[t];this.modules[t]=new e(this),n||this.initializeModule(t)}},{key:"removeModule",value:function(t){var e=this.modules[t];e.shouldInitialize()&&(e.events&&ht.detachEvents(this.$note,e.events),e.destroy&&e.destroy()),delete this.modules[t]}},{key:"memo",value:function(t,e){if(1===arguments.length)return this.memos[t];this.memos[t]=e}},{key:"removeMemo",value:function(t){this.memos[t]&&this.memos[t].destroy&&this.memos[t].destroy(),delete this.memos[t]}},{key:"createInvokeHandlerAndUpdateState",value:function(t,e){var n=this;return function(o){n.createInvokeHandler(t,e)(o),n.invoke("buttons.updateCurrentStyle")}}},{key:"createInvokeHandler",value:function(t,n){var o=this;return function(i){i.preventDefault();var r=e()(i.target);o.invoke(t,n||r.closest("[data-value]").data("value"),r)}}},{key:"invoke",value:function(){var t=k.head(arguments),e=k.tail(k.from(arguments)),n=t.split("."),o=n.length>1,i=o&&k.head(n),r=o?k.last(n):k.head(n),a=this.modules[i||"editor"];return!i&&this[r]?this[r].apply(this,e):a&&a[r]&&a.shouldInitialize()?a[r].apply(a,e):void 0}}],o&&ft(n.prototype,o),i&&ft(n,i),t}();function mt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function vt(t,e){var n,o,i=t.parentElement(),r=document.body.createTextRange(),a=k.from(i.childNodes);for(n=0;n<a.length;n++)if(!ht.isText(a[n])){if(r.moveToElementText(a[n]),r.compareEndPoints("StartToStart",t)>=0)break;o=a[n]}if(0!==n&&ht.isText(a[n-1])){var s=document.body.createTextRange(),l=null;s.moveToElementText(o||i),s.collapse(!o),l=o?o.nextSibling:i.firstChild;var c=t.duplicate();c.setEndPoint("StartToStart",s);for(var u=c.text.replace(/[\r\n]/g,"").length;u>l.nodeValue.length&&l.nextSibling;)u-=l.nodeValue.length,l=l.nextSibling;l.nodeValue;e&&l.nextSibling&&ht.isText(l.nextSibling)&&u===l.nodeValue.length&&(u-=l.nodeValue.length,l=l.nextSibling),i=l,n=u}return{cont:i,offset:n}}function gt(t){var e=document.body.createTextRange(),n=function t(e,n){var o,i;if(ht.isText(e)){var r=ht.listPrev(e,m.not(ht.isText)),a=k.last(r).previousSibling;o=a||e.parentNode,n+=k.sum(k.tail(r),ht.nodeLength),i=!a}else{if(o=e.childNodes[n]||e,ht.isText(o))return t(o,0);n=0,i=!1}return{node:o,collapseToStart:i,offset:n}}(t.node,t.offset);return e.moveToElementText(n.node),e.collapse(n.collapseToStart),e.moveStart("character",n.offset),e}e().fn.extend({summernote:function(){var t=e().type(k.head(arguments)),n="string"===t,o="object"===t,i=e().extend({},e().summernote.options,o?k.head(arguments):{});i.langInfo=e().extend(!0,{},e().summernote.lang["en-US"],e().summernote.lang[i.lang]),i.icons=e().extend(!0,{},e().summernote.options.icons,i.icons),i.tooltip="auto"===i.tooltip?!f.isSupportTouch:i.tooltip,this.each((function(t,n){var o=e()(n);if(!o.data("summernote")){var r=new pt(o,i);o.data("summernote",r),o.data("summernote").triggerEvent("init",r.layoutInfo)}}));var r=this.first();if(r.length){var a=r.data("summernote");if(n)return a.invoke.apply(a,k.from(arguments));i.focus&&a.invoke("editor.focus")}return this}});var bt=function(){function t(e,n,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sc=e,this.so=n,this.ec=o,this.eo=i,this.isOnEditable=this.makeIsOn(ht.isEditable),this.isOnList=this.makeIsOn(ht.isList),this.isOnAnchor=this.makeIsOn(ht.isAnchor),this.isOnCell=this.makeIsOn(ht.isCell),this.isOnData=this.makeIsOn(ht.isData)}var n,o,i;return n=t,o=[{key:"nativeRange",value:function(){if(f.isW3CRangeSupport){var t=document.createRange();return t.setStart(this.sc,this.so),t.setEnd(this.ec,this.eo),t}var e=gt({node:this.sc,offset:this.so});return e.setEndPoint("EndToEnd",gt({node:this.ec,offset:this.eo})),e}},{key:"getPoints",value:function(){return{sc:this.sc,so:this.so,ec:this.ec,eo:this.eo}}},{key:"getStartPoint",value:function(){return{node:this.sc,offset:this.so}}},{key:"getEndPoint",value:function(){return{node:this.ec,offset:this.eo}}},{key:"select",value:function(){var t=this.nativeRange();if(f.isW3CRangeSupport){var e=document.getSelection();e.rangeCount>0&&e.removeAllRanges(),e.addRange(t)}else t.select();return this}},{key:"scrollIntoView",value:function(t){var n=e()(t).height();return t.scrollTop+n<this.sc.offsetTop&&(t.scrollTop+=Math.abs(t.scrollTop+n-this.sc.offsetTop)),this}},{key:"normalize",value:function(){var e=function(t,e){if(!t)return t;if(ht.isVisiblePoint(t)&&(!ht.isEdgePoint(t)||ht.isRightEdgePoint(t)&&!e||ht.isLeftEdgePoint(t)&&e||ht.isRightEdgePoint(t)&&e&&ht.isVoid(t.node.nextSibling)||ht.isLeftEdgePoint(t)&&!e&&ht.isVoid(t.node.previousSibling)||ht.isBlock(t.node)&&ht.isEmpty(t.node)))return t;var n=ht.ancestor(t.node,ht.isBlock),o=!1;if(!o){var i=ht.prevPoint(t)||{node:null};o=(ht.isLeftEdgePointOf(t,n)||ht.isVoid(i.node))&&!e}var r=!1;if(!r){var a=ht.nextPoint(t)||{node:null};r=(ht.isRightEdgePointOf(t,n)||ht.isVoid(a.node))&&e}if(o||r){if(ht.isVisiblePoint(t))return t;e=!e}return(e?ht.nextPointUntil(ht.nextPoint(t),ht.isVisiblePoint):ht.prevPointUntil(ht.prevPoint(t),ht.isVisiblePoint))||t},n=e(this.getEndPoint(),!1),o=this.isCollapsed()?n:e(this.getStartPoint(),!0);return new t(o.node,o.offset,n.node,n.offset)}},{key:"nodes",value:function(t,e){t=t||m.ok;var n=e&&e.includeAncestor,o=e&&e.fullyContains,i=this.getStartPoint(),r=this.getEndPoint(),a=[],s=[];return ht.walkPoint(i,r,(function(e){var i;ht.isEditable(e.node)||(o?(ht.isLeftEdgePoint(e)&&s.push(e.node),ht.isRightEdgePoint(e)&&k.contains(s,e.node)&&(i=e.node)):i=n?ht.ancestor(e.node,t):e.node,i&&t(i)&&a.push(i))}),!0),k.unique(a)}},{key:"commonAncestor",value:function(){return ht.commonAncestor(this.sc,this.ec)}},{key:"expand",value:function(e){var n=ht.ancestor(this.sc,e),o=ht.ancestor(this.ec,e);if(!n&&!o)return new t(this.sc,this.so,this.ec,this.eo);var i=this.getPoints();return n&&(i.sc=n,i.so=0),o&&(i.ec=o,i.eo=ht.nodeLength(o)),new t(i.sc,i.so,i.ec,i.eo)}},{key:"collapse",value:function(e){return e?new t(this.sc,this.so,this.sc,this.so):new t(this.ec,this.eo,this.ec,this.eo)}},{key:"splitText",value:function(){var e=this.sc===this.ec,n=this.getPoints();return ht.isText(this.ec)&&!ht.isEdgePoint(this.getEndPoint())&&this.ec.splitText(this.eo),ht.isText(this.sc)&&!ht.isEdgePoint(this.getStartPoint())&&(n.sc=this.sc.splitText(this.so),n.so=0,e&&(n.ec=n.sc,n.eo=this.eo-this.so)),new t(n.sc,n.so,n.ec,n.eo)}},{key:"deleteContents",value:function(){if(this.isCollapsed())return this;var n=this.splitText(),o=n.nodes(null,{fullyContains:!0}),i=ht.prevPointUntil(n.getStartPoint(),(function(t){return!k.contains(o,t.node)})),r=[];return e().each(o,(function(t,e){var n=e.parentNode;i.node!==n&&1===ht.nodeLength(n)&&r.push(n),ht.remove(e,!1)})),e().each(r,(function(t,e){ht.remove(e,!1)})),new t(i.node,i.offset,i.node,i.offset).normalize()}},{key:"makeIsOn",value:function(t){return function(){var e=ht.ancestor(this.sc,t);return!!e&&e===ht.ancestor(this.ec,t)}}},{key:"isLeftEdgeOf",value:function(t){if(!ht.isLeftEdgePoint(this.getStartPoint()))return!1;var e=ht.ancestor(this.sc,t);return e&&ht.isLeftEdgeOf(this.sc,e)}},{key:"isCollapsed",value:function(){return this.sc===this.ec&&this.so===this.eo}},{key:"wrapBodyInlineWithPara",value:function(){if(ht.isBodyContainer(this.sc)&&ht.isEmpty(this.sc))return this.sc.innerHTML=ht.emptyPara,new t(this.sc.firstChild,0,this.sc.firstChild,0);var e,n=this.normalize();if(ht.isParaInline(this.sc)||ht.isPara(this.sc))return n;if(ht.isInline(n.sc)){var o=ht.listAncestor(n.sc,m.not(ht.isInline));e=k.last(o),ht.isInline(e)||(e=o[o.length-2]||n.sc.childNodes[n.so])}else e=n.sc.childNodes[n.so>0?n.so-1:0];if(e){var i=ht.listPrev(e,ht.isParaInline).reverse();if((i=i.concat(ht.listNext(e.nextSibling,ht.isParaInline))).length){var r=ht.wrap(k.head(i),"p");ht.appendChildNodes(r,k.tail(i))}}return this.normalize()}},{key:"insertNode",value:function(t){var e=this;(ht.isText(t)||ht.isInline(t))&&(e=this.wrapBodyInlineWithPara().deleteContents());var n=ht.splitPoint(e.getStartPoint(),ht.isInline(t));return n.rightNode?(n.rightNode.parentNode.insertBefore(t,n.rightNode),ht.isEmpty(n.rightNode)&&ht.isPara(t)&&n.rightNode.parentNode.removeChild(n.rightNode)):n.container.appendChild(t),t}},{key:"pasteHTML",value:function(t){t=e().trim(t);var n=e()("<div></div>").html(t)[0],o=k.from(n.childNodes),i=this,r=!1;return i.so>=0&&(o=o.reverse(),r=!0),o=o.map((function(t){return i.insertNode(t)})),r&&(o=o.reverse()),o}},{key:"toString",value:function(){var t=this.nativeRange();return f.isW3CRangeSupport?t.toString():t.text}},{key:"getWordRange",value:function(e){var n=this.getEndPoint();if(!ht.isCharPoint(n))return this;var o=ht.prevPointUntil(n,(function(t){return!ht.isCharPoint(t)}));return e&&(n=ht.nextPointUntil(n,(function(t){return!ht.isCharPoint(t)}))),new t(o.node,o.offset,n.node,n.offset)}},{key:"getWordsRange",value:function(e){var n=this.getEndPoint(),o=function(t){return!ht.isCharPoint(t)&&!ht.isSpacePoint(t)};if(o(n))return this;var i=ht.prevPointUntil(n,o);return e&&(n=ht.nextPointUntil(n,o)),new t(i.node,i.offset,n.node,n.offset)}},{key:"getWordsMatchRange",value:function(e){var n=this.getEndPoint(),o=ht.prevPointUntil(n,(function(o){if(!ht.isCharPoint(o)&&!ht.isSpacePoint(o))return!0;var i=new t(o.node,o.offset,n.node,n.offset),r=e.exec(i.toString());return r&&0===r.index})),i=new t(o.node,o.offset,n.node,n.offset),r=i.toString(),a=e.exec(r);return a&&a[0].length===r.length?i:null}},{key:"bookmark",value:function(t){return{s:{path:ht.makeOffsetPath(t,this.sc),offset:this.so},e:{path:ht.makeOffsetPath(t,this.ec),offset:this.eo}}}},{key:"paraBookmark",value:function(t){return{s:{path:k.tail(ht.makeOffsetPath(k.head(t),this.sc)),offset:this.so},e:{path:k.tail(ht.makeOffsetPath(k.last(t),this.ec)),offset:this.eo}}}},{key:"getClientRects",value:function(){return this.nativeRange().getClientRects()}}],o&&mt(n.prototype,o),i&&mt(n,i),t}();const yt={create:function(t,e,n,o){if(4===arguments.length)return new bt(t,e,n,o);if(2===arguments.length)return new bt(t,e,n=t,o=e);var i=this.createFromSelection();if(!i&&1===arguments.length){var r=arguments[0];return ht.isEditable(r)&&(r=r.lastChild),this.createFromBodyElement(r,ht.emptyPara===arguments[0].innerHTML)}return i},createFromBodyElement:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.createFromNode(t);return n.collapse(e)},createFromSelection:function(){var t,e,n,o;if(f.isW3CRangeSupport){var i=document.getSelection();if(!i||0===i.rangeCount)return null;if(ht.isBody(i.anchorNode))return null;var r=i.getRangeAt(0);t=r.startContainer,e=r.startOffset,n=r.endContainer,o=r.endOffset}else{var a=document.selection.createRange(),s=a.duplicate();s.collapse(!1);var l=a;l.collapse(!0);var c=vt(l,!0),u=vt(s,!1);ht.isText(c.node)&&ht.isLeftEdgePoint(c)&&ht.isTextNode(u.node)&&ht.isRightEdgePoint(u)&&u.node.nextSibling===c.node&&(c=u),t=c.cont,e=c.offset,n=u.cont,o=u.offset}return new bt(t,e,n,o)},createFromNode:function(t){var e=t,n=0,o=t,i=ht.nodeLength(o);return ht.isVoid(e)&&(n=ht.listPrev(e).length-1,e=e.parentNode),ht.isBR(o)?(i=ht.listPrev(o).length-1,o=o.parentNode):ht.isVoid(o)&&(i=ht.listPrev(o).length,o=o.parentNode),this.create(e,n,o,i)},createFromNodeBefore:function(t){return this.createFromNode(t).collapse(!0)},createFromNodeAfter:function(t){return this.createFromNode(t).collapse()},createFromBookmark:function(t,e){var n=ht.fromOffsetPath(t,e.s.path),o=e.s.offset,i=ht.fromOffsetPath(t,e.e.path),r=e.e.offset;return new bt(n,o,i,r)},createFromParaBookmark:function(t,e){var n=t.s.offset,o=t.e.offset,i=ht.fromOffsetPath(k.head(e),t.s.path),r=ht.fromOffsetPath(k.last(e),t.e.path);return new bt(i,n,r,o)}};var kt={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,SPACE:32,DELETE:46,LEFT:37,UP:38,RIGHT:39,DOWN:40,NUM0:48,NUM1:49,NUM2:50,NUM3:51,NUM4:52,NUM5:53,NUM6:54,NUM7:55,NUM8:56,B:66,E:69,I:73,J:74,K:75,L:76,R:82,S:83,U:85,V:86,Y:89,Z:90,SLASH:191,LEFTBRACKET:219,BACKSLASH:220,RIGHTBRACKET:221,HOME:36,END:35,PAGEUP:33,PAGEDOWN:34};const wt={isEdit:function(t){return k.contains([kt.BACKSPACE,kt.TAB,kt.ENTER,kt.SPACE,kt.DELETE],t)},isMove:function(t){return k.contains([kt.LEFT,kt.UP,kt.RIGHT,kt.DOWN],t)},isNavigation:function(t){return k.contains([kt.HOME,kt.END,kt.PAGEUP,kt.PAGEDOWN],t)},nameFromCode:m.invertObject(kt),code:kt};function Ct(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var xt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.stack=[],this.stackOffset=-1,this.context=e,this.$editable=e.layoutInfo.editable,this.editable=this.$editable[0]}var e,n,o;return e=t,(n=[{key:"makeSnapshot",value:function(){var t=yt.create(this.editable);return{contents:this.$editable.html(),bookmark:t&&t.isOnEditable()?t.bookmark(this.editable):{s:{path:[],offset:0},e:{path:[],offset:0}}}}},{key:"applySnapshot",value:function(t){null!==t.contents&&this.$editable.html(t.contents),null!==t.bookmark&&yt.createFromBookmark(this.editable,t.bookmark).select()}},{key:"rewind",value:function(){this.$editable.html()!==this.stack[this.stackOffset].contents&&this.recordUndo(),this.stackOffset=0,this.applySnapshot(this.stack[this.stackOffset])}},{key:"commit",value:function(){this.stack=[],this.stackOffset=-1,this.recordUndo()}},{key:"reset",value:function(){this.stack=[],this.stackOffset=-1,this.$editable.html(""),this.recordUndo()}},{key:"undo",value:function(){this.$editable.html()!==this.stack[this.stackOffset].contents&&this.recordUndo(),this.stackOffset>0&&(this.stackOffset--,this.applySnapshot(this.stack[this.stackOffset]))}},{key:"redo",value:function(){this.stack.length-1>this.stackOffset&&(this.stackOffset++,this.applySnapshot(this.stack[this.stackOffset]))}},{key:"recordUndo",value:function(){this.stackOffset++,this.stack.length>this.stackOffset&&(this.stack=this.stack.slice(0,this.stackOffset)),this.stack.push(this.makeSnapshot()),this.stack.length>this.context.options.historyLimit&&(this.stack.shift(),this.stackOffset-=1)}}])&&Ct(e.prototype,n),o&&Ct(e,o),t}();function St(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var Tt=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,o,i;return n=t,o=[{key:"jQueryCSS",value:function(t,n){var o={};return e().each(n,(function(e,n){o[n]=t.css(n)})),o}},{key:"fromNode",value:function(t){var e=this.jQueryCSS(t,["font-family","font-size","text-align","list-style-type","line-height"])||{},n=t[0].style.fontSize||e["font-size"];return e["font-size"]=parseInt(n,10),e["font-size-unit"]=n.match(/[a-z%]+$/),e}},{key:"stylePara",value:function(t,n){e().each(t.nodes(ht.isPara,{includeAncestor:!0}),(function(t,o){e()(o).css(n)}))}},{key:"styleNodes",value:function(t,n){t=t.splitText();var o=n&&n.nodeName||"SPAN",i=!(!n||!n.expandClosestSibling),r=!(!n||!n.onlyPartialContains);if(t.isCollapsed())return[t.insertNode(ht.create(o))];var a=ht.makePredByNodeName(o),s=t.nodes(ht.isText,{fullyContains:!0}).map((function(t){return ht.singleChildAncestor(t,a)||ht.wrap(t,o)}));if(i){if(r){var l=t.nodes();a=m.and(a,(function(t){return k.contains(l,t)}))}return s.map((function(t){var n=ht.withClosestSiblings(t,a),o=k.head(n),i=k.tail(n);return e().each(i,(function(t,e){ht.appendChildNodes(o,e.childNodes),ht.remove(e)})),k.head(n)}))}return s}},{key:"current",value:function(t){var n=e()(ht.isElement(t.sc)?t.sc:t.sc.parentNode),o=this.fromNode(n);try{o=e().extend(o,{"font-bold":document.queryCommandState("bold")?"bold":"normal","font-italic":document.queryCommandState("italic")?"italic":"normal","font-underline":document.queryCommandState("underline")?"underline":"normal","font-subscript":document.queryCommandState("subscript")?"subscript":"normal","font-superscript":document.queryCommandState("superscript")?"superscript":"normal","font-strikethrough":document.queryCommandState("strikethrough")?"strikethrough":"normal","font-family":document.queryCommandValue("fontname")||o["font-family"]})}catch(t){}if(t.isOnList()){var i=["circle","disc","disc-leading-zero","square"].indexOf(o["list-style-type"])>-1;o["list-style"]=i?"unordered":"ordered"}else o["list-style"]="none";var r=ht.ancestor(t.sc,ht.isPara);if(r&&r.style["line-height"])o["line-height"]=r.style.lineHeight;else{var a=parseInt(o["line-height"],10)/parseInt(o["font-size"],10);o["line-height"]=a.toFixed(1)}return o.anchor=t.isOnAnchor()&&ht.ancestor(t.sc,ht.isAnchor),o.ancestors=ht.listAncestor(t.sc,ht.isEditable),o.range=t,o}}],o&&St(n.prototype,o),i&&St(n,i),t}();function Et(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var It=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,o,i;return n=t,o=[{key:"insertOrderedList",value:function(t){this.toggleList("OL",t)}},{key:"insertUnorderedList",value:function(t){this.toggleList("UL",t)}},{key:"indent",value:function(t){var n=this,o=yt.create(t).wrapBodyInlineWithPara(),i=o.nodes(ht.isPara,{includeAncestor:!0}),r=k.clusterBy(i,m.peq2("parentNode"));e().each(r,(function(t,o){var i=k.head(o);if(ht.isLi(i)){var r=n.findList(i.previousSibling);r?o.map((function(t){return r.appendChild(t)})):(n.wrapList(o,i.parentNode.nodeName),o.map((function(t){return t.parentNode})).map((function(t){return n.appendToPrevious(t)})))}else e().each(o,(function(t,n){e()(n).css("marginLeft",(function(t,e){return(parseInt(e,10)||0)+25}))}))})),o.select()}},{key:"outdent",value:function(t){var n=this,o=yt.create(t).wrapBodyInlineWithPara(),i=o.nodes(ht.isPara,{includeAncestor:!0}),r=k.clusterBy(i,m.peq2("parentNode"));e().each(r,(function(t,o){var i=k.head(o);ht.isLi(i)?n.releaseList([o]):e().each(o,(function(t,n){e()(n).css("marginLeft",(function(t,e){return(e=parseInt(e,10)||0)>25?e-25:""}))}))})),o.select()}},{key:"toggleList",value:function(t,n){var o=this,i=yt.create(n).wrapBodyInlineWithPara(),r=i.nodes(ht.isPara,{includeAncestor:!0}),a=i.paraBookmark(r),s=k.clusterBy(r,m.peq2("parentNode"));if(k.find(r,ht.isPurePara)){var l=[];e().each(s,(function(e,n){l=l.concat(o.wrapList(n,t))})),r=l}else{var c=i.nodes(ht.isList,{includeAncestor:!0}).filter((function(n){return!e().nodeName(n,t)}));c.length?e().each(c,(function(e,n){ht.replace(n,t)})):r=this.releaseList(s,!0)}yt.createFromParaBookmark(a,r).select()}},{key:"wrapList",value:function(t,e){var n=k.head(t),o=k.last(t),i=ht.isList(n.previousSibling)&&n.previousSibling,r=ht.isList(o.nextSibling)&&o.nextSibling,a=i||ht.insertAfter(ht.create(e||"UL"),o);return t=t.map((function(t){return ht.isPurePara(t)?ht.replace(t,"LI"):t})),ht.appendChildNodes(a,t),r&&(ht.appendChildNodes(a,k.from(r.childNodes)),ht.remove(r)),t}},{key:"releaseList",value:function(t,n){var o=this,i=[];return e().each(t,(function(t,r){var a=k.head(r),s=k.last(r),l=n?ht.lastAncestor(a,ht.isList):a.parentNode,c=l.parentNode;if("LI"===l.parentNode.nodeName)r.map((function(t){var e=o.findNextSiblings(t);c.nextSibling?c.parentNode.insertBefore(t,c.nextSibling):c.parentNode.appendChild(t),e.length&&(o.wrapList(e,l.nodeName),t.appendChild(e[0].parentNode))})),0===l.children.length&&c.removeChild(l),0===c.childNodes.length&&c.parentNode.removeChild(c);else{var u=l.childNodes.length>1?ht.splitTree(l,{node:s.parentNode,offset:ht.position(s)+1},{isSkipPaddingBlankHTML:!0}):null,d=ht.splitTree(l,{node:a.parentNode,offset:ht.position(a)},{isSkipPaddingBlankHTML:!0});r=n?ht.listDescendant(d,ht.isLi):k.from(d.childNodes).filter(ht.isLi),!n&&ht.isList(l.parentNode)||(r=r.map((function(t){return ht.replace(t,"P")}))),e().each(k.from(r).reverse(),(function(t,e){ht.insertAfter(e,l)}));var h=k.compact([l,d,u]);e().each(h,(function(t,n){var o=[n].concat(ht.listDescendant(n,ht.isList));e().each(o.reverse(),(function(t,e){ht.nodeLength(e)||ht.remove(e,!0)}))}))}i=i.concat(r)})),i}},{key:"appendToPrevious",value:function(t){return t.previousSibling?ht.appendChildNodes(t.previousSibling,[t]):this.wrapList([t],"LI")}},{key:"findList",value:function(t){return t?k.find(t.children,(function(t){return["OL","UL"].indexOf(t.nodeName)>-1})):null}},{key:"findNextSiblings",value:function(t){for(var e=[];t.nextSibling;)e.push(t.nextSibling),t=t.nextSibling;return e}}],o&&Et(n.prototype,o),i&&Et(n,i),t}();function $t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var Nt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.bullet=new It,this.options=e.options}var n,o,i;return n=t,o=[{key:"insertTab",value:function(t,e){var n=ht.createText(new Array(e+1).join(ht.NBSP_CHAR));(t=t.deleteContents()).insertNode(n,!0),(t=yt.create(n,e)).select()}},{key:"insertParagraph",value:function(t,n){n=(n=(n=n||yt.create(t)).deleteContents()).wrapBodyInlineWithPara();var o,i=ht.ancestor(n.sc,ht.isPara);if(i){if(ht.isLi(i)&&(ht.isEmpty(i)||ht.deepestChildIsEmpty(i)))return void this.bullet.toggleList(i.parentNode.nodeName);var r=null;if(1===this.options.blockquoteBreakingLevel?r=ht.ancestor(i,ht.isBlockquote):2===this.options.blockquoteBreakingLevel&&(r=ht.lastAncestor(i,ht.isBlockquote)),r){o=e()(ht.emptyPara)[0],ht.isRightEdgePoint(n.getStartPoint())&&ht.isBR(n.sc.nextSibling)&&e()(n.sc.nextSibling).remove();var a=ht.splitTree(r,n.getStartPoint(),{isDiscardEmptySplits:!0});a?a.parentNode.insertBefore(o,a):ht.insertAfter(o,r)}else{o=ht.splitTree(i,n.getStartPoint());var s=ht.listDescendant(i,ht.isEmptyAnchor);s=s.concat(ht.listDescendant(o,ht.isEmptyAnchor)),e().each(s,(function(t,e){ht.remove(e)})),(ht.isHeading(o)||ht.isPre(o)||ht.isCustomStyleTag(o))&&ht.isEmpty(o)&&(o=ht.replace(o,"p"))}}else{var l=n.sc.childNodes[n.so];o=e()(ht.emptyPara)[0],l?n.sc.insertBefore(o,l):n.sc.appendChild(o)}yt.create(o,0).normalize().select().scrollIntoView(t)}}],o&&$t(n.prototype,o),i&&$t(n,i),t}();function Pt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var Rt=function t(e,n,o,i){var r={colPos:0,rowPos:0},a=[],s=[];function l(t,e,n,o,i,r,s){var l={baseRow:n,baseCell:o,isRowSpan:i,isColSpan:r,isVirtual:s};a[t]||(a[t]=[]),a[t][e]=l}function c(t,e,n,o){return{baseCell:t.baseCell,action:e,virtualTable:{rowIndex:n,cellIndex:o}}}function u(t,e){if(!a[t])return e;if(!a[t][e])return e;for(var n=e;a[t][n];)if(n++,!a[t][n])return n}function d(t,e){var n=u(t.rowIndex,e.cellIndex),o=e.colSpan>1,i=e.rowSpan>1,a=t.rowIndex===r.rowPos&&e.cellIndex===r.colPos;l(t.rowIndex,n,t,e,i,o,!1);var s=e.attributes.rowSpan?parseInt(e.attributes.rowSpan.value,10):0;if(s>1)for(var c=1;c<s;c++){var d=t.rowIndex+c;h(d,n,e,a),l(d,n,t,e,!0,o,!0)}var f=e.attributes.colSpan?parseInt(e.attributes.colSpan.value,10):0;if(f>1)for(var p=1;p<f;p++){var m=u(t.rowIndex,n+p);h(t.rowIndex,m,e,a),l(t.rowIndex,m,t,e,i,!0,!0)}}function h(t,e,n,o){t===r.rowPos&&r.colPos>=n.cellIndex&&n.cellIndex<=e&&!o&&r.colPos++}function f(e){switch(n){case t.where.Column:if(e.isColSpan)return t.resultAction.SubtractSpanCount;break;case t.where.Row:if(!e.isVirtual&&e.isRowSpan)return t.resultAction.AddCell;if(e.isRowSpan)return t.resultAction.SubtractSpanCount}return t.resultAction.RemoveCell}function p(e){switch(n){case t.where.Column:if(e.isColSpan)return t.resultAction.SumSpanCount;if(e.isRowSpan&&e.isVirtual)return t.resultAction.Ignore;break;case t.where.Row:if(e.isRowSpan)return t.resultAction.SumSpanCount;if(e.isColSpan&&e.isVirtual)return t.resultAction.Ignore}return t.resultAction.AddCell}this.getActionList=function(){for(var e=n===t.where.Row?r.rowPos:-1,i=n===t.where.Column?r.colPos:-1,l=0,u=!0;u;){var d=e>=0?e:l,h=i>=0?i:l,m=a[d];if(!m)return u=!1,s;var v=m[h];if(!v)return u=!1,s;var g=t.resultAction.Ignore;switch(o){case t.requestAction.Add:g=p(v);break;case t.requestAction.Delete:g=f(v)}s.push(c(v,g,d,h)),l++}return s},e&&e.tagName&&("td"===e.tagName.toLowerCase()||"th"===e.tagName.toLowerCase())&&(r.colPos=e.cellIndex,e.parentElement&&e.parentElement.tagName&&"tr"===e.parentElement.tagName.toLowerCase()&&(r.rowPos=e.parentElement.rowIndex)),function(){for(var t=i.rows,e=0;e<t.length;e++)for(var n=t[e].cells,o=0;o<n.length;o++)d(t[e],n[o])}()};Rt.where={Row:0,Column:1},Rt.requestAction={Add:0,Delete:1},Rt.resultAction={Ignore:0,SubtractSpanCount:1,RemoveCell:2,AddCell:3,SumSpanCount:4};var Lt=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,o,i;return n=t,o=[{key:"tab",value:function(t,e){var n=ht.ancestor(t.commonAncestor(),ht.isCell),o=ht.ancestor(n,ht.isTable),i=ht.listDescendant(o,ht.isCell),r=k[e?"prev":"next"](i,n);r&&yt.create(r,0).select()}},{key:"addRow",value:function(t,n){for(var o=ht.ancestor(t.commonAncestor(),ht.isCell),i=e()(o).closest("tr"),r=this.recoverAttributes(i),a=e()("<tr"+r+"></tr>"),s=new Rt(o,Rt.where.Row,Rt.requestAction.Add,e()(i).closest("table")[0]).getActionList(),l=0;l<s.length;l++){var c=s[l],u=this.recoverAttributes(c.baseCell);switch(c.action){case Rt.resultAction.AddCell:a.append("<td"+u+">"+ht.blank+"</td>");break;case Rt.resultAction.SumSpanCount:if("top"===n&&(c.baseCell.parent?c.baseCell.closest("tr").rowIndex:0)<=i[0].rowIndex){var d=e()("<div></div>").append(e()("<td"+u+">"+ht.blank+"</td>").removeAttr("rowspan")).html();a.append(d);break}var h=parseInt(c.baseCell.rowSpan,10);h++,c.baseCell.setAttribute("rowSpan",h)}}if("top"===n)i.before(a);else{if(o.rowSpan>1){var f=i[0].rowIndex+(o.rowSpan-2);return void e()(e()(i).parent().find("tr")[f]).after(e()(a))}i.after(a)}}},{key:"addCol",value:function(t,n){var o=ht.ancestor(t.commonAncestor(),ht.isCell),i=e()(o).closest("tr");e()(i).siblings().push(i);for(var r=new Rt(o,Rt.where.Column,Rt.requestAction.Add,e()(i).closest("table")[0]).getActionList(),a=0;a<r.length;a++){var s=r[a],l=this.recoverAttributes(s.baseCell);switch(s.action){case Rt.resultAction.AddCell:"right"===n?e()(s.baseCell).after("<td"+l+">"+ht.blank+"</td>"):e()(s.baseCell).before("<td"+l+">"+ht.blank+"</td>");break;case Rt.resultAction.SumSpanCount:if("right"===n){var c=parseInt(s.baseCell.colSpan,10);c++,s.baseCell.setAttribute("colSpan",c)}else e()(s.baseCell).before("<td"+l+">"+ht.blank+"</td>")}}}},{key:"recoverAttributes",value:function(t){var e="";if(!t)return e;for(var n=t.attributes||[],o=0;o<n.length;o++)"id"!==n[o].name.toLowerCase()&&n[o].specified&&(e+=" "+n[o].name+"='"+n[o].value+"'");return e}},{key:"deleteRow",value:function(t){for(var n=ht.ancestor(t.commonAncestor(),ht.isCell),o=e()(n).closest("tr"),i=o.children("td, th").index(e()(n)),r=o[0].rowIndex,a=new Rt(n,Rt.where.Row,Rt.requestAction.Delete,e()(o).closest("table")[0]).getActionList(),s=0;s<a.length;s++)if(a[s]){var l=a[s].baseCell,c=a[s].virtualTable,u=l.rowSpan&&l.rowSpan>1,d=u?parseInt(l.rowSpan,10):0;switch(a[s].action){case Rt.resultAction.Ignore:continue;case Rt.resultAction.AddCell:var h=o.next("tr")[0];if(!h)continue;var f=o[0].cells[i];u&&(d>2?(d--,h.insertBefore(f,h.cells[i]),h.cells[i].setAttribute("rowSpan",d),h.cells[i].innerHTML=""):2===d&&(h.insertBefore(f,h.cells[i]),h.cells[i].removeAttribute("rowSpan"),h.cells[i].innerHTML=""));continue;case Rt.resultAction.SubtractSpanCount:u&&(d>2?(d--,l.setAttribute("rowSpan",d),c.rowIndex!==r&&l.cellIndex===i&&(l.innerHTML="")):2===d&&(l.removeAttribute("rowSpan"),c.rowIndex!==r&&l.cellIndex===i&&(l.innerHTML="")));continue;case Rt.resultAction.RemoveCell:continue}}o.remove()}},{key:"deleteCol",value:function(t){for(var n=ht.ancestor(t.commonAncestor(),ht.isCell),o=e()(n).closest("tr"),i=o.children("td, th").index(e()(n)),r=new Rt(n,Rt.where.Column,Rt.requestAction.Delete,e()(o).closest("table")[0]).getActionList(),a=0;a<r.length;a++)if(r[a])switch(r[a].action){case Rt.resultAction.Ignore:continue;case Rt.resultAction.SubtractSpanCount:var s=r[a].baseCell;if(s.colSpan&&s.colSpan>1){var l=s.colSpan?parseInt(s.colSpan,10):0;l>2?(l--,s.setAttribute("colSpan",l),s.cellIndex===i&&(s.innerHTML="")):2===l&&(s.removeAttribute("colSpan"),s.cellIndex===i&&(s.innerHTML=""))}continue;case Rt.resultAction.RemoveCell:ht.remove(r[a].baseCell,!0);continue}}},{key:"createTable",value:function(t,n,o){for(var i,r=[],a=0;a<t;a++)r.push("<td>"+ht.blank+"</td>");i=r.join("");for(var s,l=[],c=0;c<n;c++)l.push("<tr>"+i+"</tr>");s=l.join("");var u=e()("<table>"+s+"</table>");return o&&o.tableClassName&&u.addClass(o.tableClassName),u[0]}},{key:"deleteTable",value:function(t){var n=ht.ancestor(t.commonAncestor(),ht.isCell);e()(n).closest("table").remove()}}],o&&Pt(n.prototype,o),i&&Pt(n,i),t}();function At(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var Ft=function(){function t(n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=n,this.$note=n.layoutInfo.note,this.$editor=n.layoutInfo.editor,this.$editable=n.layoutInfo.editable,this.options=n.options,this.lang=this.options.langInfo,this.editable=this.$editable[0],this.lastRange=null,this.snapshot=null,this.style=new Tt,this.table=new Lt,this.typing=new Nt(n),this.bullet=new It,this.history=new xt(n),this.context.memo("help.escape",this.lang.help.escape),this.context.memo("help.undo",this.lang.help.undo),this.context.memo("help.redo",this.lang.help.redo),this.context.memo("help.tab",this.lang.help.tab),this.context.memo("help.untab",this.lang.help.untab),this.context.memo("help.insertParagraph",this.lang.help.insertParagraph),this.context.memo("help.insertOrderedList",this.lang.help.insertOrderedList),this.context.memo("help.insertUnorderedList",this.lang.help.insertUnorderedList),this.context.memo("help.indent",this.lang.help.indent),this.context.memo("help.outdent",this.lang.help.outdent),this.context.memo("help.formatPara",this.lang.help.formatPara),this.context.memo("help.insertHorizontalRule",this.lang.help.insertHorizontalRule),this.context.memo("help.fontName",this.lang.help.fontName);for(var i=["bold","italic","underline","strikethrough","superscript","subscript","justifyLeft","justifyCenter","justifyRight","justifyFull","formatBlock","removeFormat","backColor"],r=0,a=i.length;r<a;r++)this[i[r]]=function(t){return function(e){o.beforeCommand(),document.execCommand(t,!1,e),o.afterCommand(!0)}}(i[r]),this.context.memo("help."+i[r],this.lang.help[i[r]]);this.fontName=this.wrapCommand((function(t){return o.fontStyling("font-family",f.validFontName(t))})),this.fontSize=this.wrapCommand((function(t){var e=o.currentStyle()["font-size-unit"];return o.fontStyling("font-size",t+e)})),this.fontSizeUnit=this.wrapCommand((function(t){var e=o.currentStyle()["font-size"];return o.fontStyling("font-size",e+t)}));for(var s=1;s<=6;s++)this["formatH"+s]=function(t){return function(){o.formatBlock("H"+t)}}(s),this.context.memo("help.formatH"+s,this.lang.help["formatH"+s]);this.insertParagraph=this.wrapCommand((function(){o.typing.insertParagraph(o.editable)})),this.insertOrderedList=this.wrapCommand((function(){o.bullet.insertOrderedList(o.editable)})),this.insertUnorderedList=this.wrapCommand((function(){o.bullet.insertUnorderedList(o.editable)})),this.indent=this.wrapCommand((function(){o.bullet.indent(o.editable)})),this.outdent=this.wrapCommand((function(){o.bullet.outdent(o.editable)})),this.insertNode=this.wrapCommand((function(t){o.isLimited(e()(t).text().length)||(o.getLastRange().insertNode(t),o.setLastRange(yt.createFromNodeAfter(t).select()))})),this.insertText=this.wrapCommand((function(t){if(!o.isLimited(t.length)){var e=o.getLastRange().insertNode(ht.createText(t));o.setLastRange(yt.create(e,ht.nodeLength(e)).select())}})),this.pasteHTML=this.wrapCommand((function(t){if(!o.isLimited(t.length)){t=o.context.invoke("codeview.purify",t);var e=o.getLastRange().pasteHTML(t);o.setLastRange(yt.createFromNodeAfter(k.last(e)).select())}})),this.formatBlock=this.wrapCommand((function(t,e){var n=o.options.callbacks.onApplyCustomStyle;n?n.call(o,e,o.context,o.onFormatBlock):o.onFormatBlock(t,e)})),this.insertHorizontalRule=this.wrapCommand((function(){var t=o.getLastRange().insertNode(ht.create("HR"));t.nextSibling&&o.setLastRange(yt.create(t.nextSibling,0).normalize().select())})),this.lineHeight=this.wrapCommand((function(t){o.style.stylePara(o.getLastRange(),{lineHeight:t})})),this.createLink=this.wrapCommand((function(t){var n=t.url,i=t.text,r=t.isNewWindow,a=t.checkProtocol,s=t.range||o.getLastRange(),l=i.length-s.toString().length;if(!(l>0&&o.isLimited(l))){var c=s.toString()!==i;"string"==typeof n&&(n=n.trim()),o.options.onCreateLink?n=o.options.onCreateLink(n):a&&(n=/^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/.test(n)?n:o.options.defaultProtocol+n);var u=[];if(c){var d=(s=s.deleteContents()).insertNode(e()("<A>"+i+"</A>")[0]);u.push(d)}else u=o.style.styleNodes(s,{nodeName:"A",expandClosestSibling:!0,onlyPartialContains:!0});e().each(u,(function(t,o){e()(o).attr("href",n),r?e()(o).attr("target","_blank"):e()(o).removeAttr("target")})),o.setLastRange(o.createRangeFromList(u).select())}})),this.color=this.wrapCommand((function(t){var e=t.foreColor,n=t.backColor;e&&document.execCommand("foreColor",!1,e),n&&document.execCommand("backColor",!1,n)})),this.foreColor=this.wrapCommand((function(t){document.execCommand("foreColor",!1,t)})),this.insertTable=this.wrapCommand((function(t){var e=t.split("x");o.getLastRange().deleteContents().insertNode(o.table.createTable(e[0],e[1],o.options))})),this.removeMedia=this.wrapCommand((function(){var t=e()(o.restoreTarget()).parent();t.closest("figure").length?t.closest("figure").remove():t=e()(o.restoreTarget()).detach(),o.context.triggerEvent("media.delete",t,o.$editable)})),this.floatMe=this.wrapCommand((function(t){var n=e()(o.restoreTarget());n.toggleClass("note-float-left","left"===t),n.toggleClass("note-float-right","right"===t),n.css("float","none"===t?"":t)})),this.resize=this.wrapCommand((function(t){var n=e()(o.restoreTarget());0===(t=parseFloat(t))?n.css("width",""):n.css({width:100*t+"%",height:""})}))}var n,o,i;return n=t,o=[{key:"initialize",value:function(){var t=this;this.$editable.on("keydown",(function(e){if(e.keyCode===wt.code.ENTER&&t.context.triggerEvent("enter",e),t.context.triggerEvent("keydown",e),t.snapshot=t.history.makeSnapshot(),t.hasKeyShortCut=!1,e.isDefaultPrevented()||(t.options.shortcuts?t.hasKeyShortCut=t.handleKeyMap(e):t.preventDefaultEditableShortCuts(e)),t.isLimited(1,e)){var n=t.getLastRange();if(n.eo-n.so==0)return!1}t.setLastRange(),t.options.recordEveryKeystroke&&!1===t.hasKeyShortCut&&t.history.recordUndo()})).on("keyup",(function(e){t.setLastRange(),t.context.triggerEvent("keyup",e)})).on("focus",(function(e){t.setLastRange(),t.context.triggerEvent("focus",e)})).on("blur",(function(e){t.context.triggerEvent("blur",e)})).on("mousedown",(function(e){t.context.triggerEvent("mousedown",e)})).on("mouseup",(function(e){t.setLastRange(),t.history.recordUndo(),t.context.triggerEvent("mouseup",e)})).on("scroll",(function(e){t.context.triggerEvent("scroll",e)})).on("paste",(function(e){t.setLastRange(),t.context.triggerEvent("paste",e)})).on("input",(function(){t.isLimited(0)&&t.snapshot&&t.history.applySnapshot(t.snapshot)})),this.$editable.attr("spellcheck",this.options.spellCheck),this.$editable.attr("autocorrect",this.options.spellCheck),this.options.disableGrammar&&this.$editable.attr("data-gramm",!1),this.$editable.html(ht.html(this.$note)||ht.emptyPara),this.$editable.on(f.inputEventName,m.debounce((function(){t.context.triggerEvent("change",t.$editable.html(),t.$editable)}),10)),this.$editable.on("focusin",(function(e){t.context.triggerEvent("focusin",e)})).on("focusout",(function(e){t.context.triggerEvent("focusout",e)})),this.options.airMode?this.options.overrideContextMenu&&this.$editor.on("contextmenu",(function(e){return t.context.triggerEvent("contextmenu",e),!1})):(this.options.width&&this.$editor.outerWidth(this.options.width),this.options.height&&this.$editable.outerHeight(this.options.height),this.options.maxHeight&&this.$editable.css("max-height",this.options.maxHeight),this.options.minHeight&&this.$editable.css("min-height",this.options.minHeight)),this.history.recordUndo(),this.setLastRange()}},{key:"destroy",value:function(){this.$editable.off()}},{key:"handleKeyMap",value:function(t){var e=this.options.keyMap[f.isMac?"mac":"pc"],n=[];t.metaKey&&n.push("CMD"),t.ctrlKey&&!t.altKey&&n.push("CTRL"),t.shiftKey&&n.push("SHIFT");var o=wt.nameFromCode[t.keyCode];o&&n.push(o);var i=e[n.join("+")];if("TAB"!==o||this.options.tabDisable)if(i){if(!1!==this.context.invoke(i))return t.preventDefault(),!0}else wt.isEdit(t.keyCode)&&this.afterCommand();else this.afterCommand();return!1}},{key:"preventDefaultEditableShortCuts",value:function(t){(t.ctrlKey||t.metaKey)&&k.contains([66,73,85],t.keyCode)&&t.preventDefault()}},{key:"isLimited",value:function(t,e){return t=t||0,(void 0===e||!(wt.isMove(e.keyCode)||wt.isNavigation(e.keyCode)||e.ctrlKey||e.metaKey||k.contains([wt.code.BACKSPACE,wt.code.DELETE],e.keyCode)))&&this.options.maxTextLength>0&&this.$editable.text().length+t>this.options.maxTextLength}},{key:"createRange",value:function(){return this.focus(),this.setLastRange(),this.getLastRange()}},{key:"createRangeFromList",value:function(t){var e=yt.createFromNodeBefore(k.head(t)).getStartPoint(),n=yt.createFromNodeAfter(k.last(t)).getEndPoint();return yt.create(e.node,e.offset,n.node,n.offset)}},{key:"setLastRange",value:function(t){t?this.lastRange=t:(this.lastRange=yt.create(this.editable),0===e()(this.lastRange.sc).closest(".note-editable").length&&(this.lastRange=yt.createFromBodyElement(this.editable)))}},{key:"getLastRange",value:function(){return this.lastRange||this.setLastRange(),this.lastRange}},{key:"saveRange",value:function(t){t&&this.getLastRange().collapse().select()}},{key:"restoreRange",value:function(){this.lastRange&&(this.lastRange.select(),this.focus())}},{key:"saveTarget",value:function(t){this.$editable.data("target",t)}},{key:"clearTarget",value:function(){this.$editable.removeData("target")}},{key:"restoreTarget",value:function(){return this.$editable.data("target")}},{key:"currentStyle",value:function(){var t=yt.create();return t&&(t=t.normalize()),t?this.style.current(t):this.style.fromNode(this.$editable)}},{key:"styleFromNode",value:function(t){return this.style.fromNode(t)}},{key:"undo",value:function(){this.context.triggerEvent("before.command",this.$editable.html()),this.history.undo(),this.context.triggerEvent("change",this.$editable.html(),this.$editable)}},{key:"commit",value:function(){this.context.triggerEvent("before.command",this.$editable.html()),this.history.commit(),this.context.triggerEvent("change",this.$editable.html(),this.$editable)}},{key:"redo",value:function(){this.context.triggerEvent("before.command",this.$editable.html()),this.history.redo(),this.context.triggerEvent("change",this.$editable.html(),this.$editable)}},{key:"beforeCommand",value:function(){this.context.triggerEvent("before.command",this.$editable.html()),document.execCommand("styleWithCSS",!1,this.options.styleWithCSS),this.focus()}},{key:"afterCommand",value:function(t){this.normalizeContent(),this.history.recordUndo(),t||this.context.triggerEvent("change",this.$editable.html(),this.$editable)}},{key:"tab",value:function(){var t=this.getLastRange();if(t.isCollapsed()&&t.isOnCell())this.table.tab(t);else{if(0===this.options.tabSize)return!1;this.isLimited(this.options.tabSize)||(this.beforeCommand(),this.typing.insertTab(t,this.options.tabSize),this.afterCommand())}}},{key:"untab",value:function(){var t=this.getLastRange();if(t.isCollapsed()&&t.isOnCell())this.table.tab(t,!0);else if(0===this.options.tabSize)return!1}},{key:"wrapCommand",value:function(t){return function(){this.beforeCommand(),t.apply(this,arguments),this.afterCommand()}}},{key:"insertImage",value:function(t,n){var o,i=this;return(o=t,e().Deferred((function(t){var n=e()("<img>");n.one("load",(function(){n.off("error abort"),t.resolve(n)})).one("error abort",(function(){n.off("load").detach(),t.reject(n)})).css({display:"none"}).appendTo(document.body).attr("src",o)})).promise()).then((function(t){i.beforeCommand(),"function"==typeof n?n(t):("string"==typeof n&&t.attr("data-filename",n),t.css("width",Math.min(i.$editable.width(),t.width()))),t.show(),i.getLastRange().insertNode(t[0]),i.setLastRange(yt.createFromNodeAfter(t[0]).select()),i.afterCommand()})).fail((function(t){i.context.triggerEvent("image.upload.error",t)}))}},{key:"insertImagesAsDataURL",value:function(t){var n=this;e().each(t,(function(t,o){var i=o.name;n.options.maximumImageFileSize&&n.options.maximumImageFileSize<o.size?n.context.triggerEvent("image.upload.error",n.lang.image.maximumFileSizeError):function(t){return e().Deferred((function(n){e().extend(new FileReader,{onload:function(t){var e=t.target.result;n.resolve(e)},onerror:function(t){n.reject(t)}}).readAsDataURL(t)})).promise()}(o).then((function(t){return n.insertImage(t,i)})).fail((function(){n.context.triggerEvent("image.upload.error")}))}))}},{key:"insertImagesOrCallback",value:function(t){this.options.callbacks.onImageUpload?this.context.triggerEvent("image.upload",t):this.insertImagesAsDataURL(t)}},{key:"getSelectedText",value:function(){var t=this.getLastRange();return t.isOnAnchor()&&(t=yt.createFromNode(ht.ancestor(t.sc,ht.isAnchor))),t.toString()}},{key:"onFormatBlock",value:function(t,n){if(document.execCommand("FormatBlock",!1,f.isMSIE?"<"+t+">":t),n&&n.length&&(n[0].tagName.toUpperCase()!==t.toUpperCase()&&(n=n.find(t)),n&&n.length)){var o=this.createRange(),i=e()([o.sc,o.ec]).closest(t);i.removeClass();var r=n[0].className||"";r&&i.addClass(r)}}},{key:"formatPara",value:function(){this.formatBlock("P")}},{key:"fontStyling",value:function(t,n){var o=this.getLastRange();if(""!==o){var i=this.style.styleNodes(o);if(this.$editor.find(".note-status-output").html(""),e()(i).css(t,n),o.isCollapsed()){var r=k.head(i);r&&!ht.nodeLength(r)&&(r.innerHTML=ht.ZERO_WIDTH_NBSP_CHAR,yt.createFromNode(r.firstChild).select(),this.setLastRange(),this.$editable.data("bogus",r))}else this.setLastRange(this.createRangeFromList(i).select())}else{var a=e().now();this.$editor.find(".note-status-output").html('<div id="note-status-output-'+a+'" class="alert alert-info">'+this.lang.output.noSelection+"</div>"),setTimeout((function(){e()("#note-status-output-"+a).remove()}),5e3)}}},{key:"unlink",value:function(){var t=this.getLastRange();if(t.isOnAnchor()){var e=ht.ancestor(t.sc,ht.isAnchor);(t=yt.createFromNode(e)).select(),this.setLastRange(),this.beforeCommand(),document.execCommand("unlink"),this.afterCommand()}}},{key:"getLinkInfo",value:function(){var t=this.getLastRange().expand(ht.isAnchor),n=e()(k.head(t.nodes(ht.isAnchor))),o={range:t,text:t.toString(),url:n.length?n.attr("href"):""};return n.length&&(o.isNewWindow="_blank"===n.attr("target")),o}},{key:"addRow",value:function(t){var e=this.getLastRange(this.$editable);e.isCollapsed()&&e.isOnCell()&&(this.beforeCommand(),this.table.addRow(e,t),this.afterCommand())}},{key:"addCol",value:function(t){var e=this.getLastRange(this.$editable);e.isCollapsed()&&e.isOnCell()&&(this.beforeCommand(),this.table.addCol(e,t),this.afterCommand())}},{key:"deleteRow",value:function(){var t=this.getLastRange(this.$editable);t.isCollapsed()&&t.isOnCell()&&(this.beforeCommand(),this.table.deleteRow(t),this.afterCommand())}},{key:"deleteCol",value:function(){var t=this.getLastRange(this.$editable);t.isCollapsed()&&t.isOnCell()&&(this.beforeCommand(),this.table.deleteCol(t),this.afterCommand())}},{key:"deleteTable",value:function(){var t=this.getLastRange(this.$editable);t.isCollapsed()&&t.isOnCell()&&(this.beforeCommand(),this.table.deleteTable(t),this.afterCommand())}},{key:"resizeTo",value:function(t,e,n){var o;if(n){var i=t.y/t.x,r=e.data("ratio");o={width:r>i?t.x:t.y/r,height:r>i?t.x*r:t.y}}else o={width:t.x,height:t.y};e.css(o)}},{key:"hasFocus",value:function(){return this.$editable.is(":focus")}},{key:"focus",value:function(){this.hasFocus()||this.$editable.focus()}},{key:"isEmpty",value:function(){return ht.isEmpty(this.$editable[0])||ht.emptyPara===this.$editable.html()}},{key:"empty",value:function(){this.context.invoke("code",ht.emptyPara)}},{key:"normalizeContent",value:function(){this.$editable[0].normalize()}}],o&&At(n.prototype,o),i&&At(n,i),t}();function Dt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var Ht=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=e,this.$editable=e.layoutInfo.editable}var e,n,o;return e=t,(n=[{key:"initialize",value:function(){this.$editable.on("paste",this.pasteByEvent.bind(this))}},{key:"pasteByEvent",value:function(t){var e=this,n=t.originalEvent.clipboardData;if(n&&n.items&&n.items.length){var o=n.items.length>1?n.items[1]:k.head(n.items);"file"===o.kind&&-1!==o.type.indexOf("image/")?(this.context.invoke("editor.insertImagesOrCallback",[o.getAsFile()]),t.preventDefault()):"string"===o.kind&&this.context.invoke("editor.isLimited",n.getData("Text").length)&&t.preventDefault()}else if(window.clipboardData){var i=window.clipboardData.getData("text");this.context.invoke("editor.isLimited",i.length)&&t.preventDefault()}setTimeout((function(){e.context.invoke("editor.afterCommand")}),10)}}])&&Dt(e.prototype,n),o&&Dt(e,o),t}();function zt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var Bt=function(){function t(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=n,this.$eventListener=e()(document),this.$editor=n.layoutInfo.editor,this.$editable=n.layoutInfo.editable,this.options=n.options,this.lang=this.options.langInfo,this.documentEventHandlers={},this.$dropzone=e()(['<div class="note-dropzone">','<div class="note-dropzone-message"></div>',"</div>"].join("")).prependTo(this.$editor)}var n,o,i;return n=t,o=[{key:"initialize",value:function(){this.options.disableDragAndDrop?(this.documentEventHandlers.onDrop=function(t){t.preventDefault()},this.$eventListener=this.$dropzone,this.$eventListener.on("drop",this.documentEventHandlers.onDrop)):this.attachDragAndDropEvent()}},{key:"attachDragAndDropEvent",value:function(){var t=this,n=e()(),o=this.$dropzone.find(".note-dropzone-message");this.documentEventHandlers.onDragenter=function(e){var i=t.context.invoke("codeview.isActivated"),r=t.$editor.width()>0&&t.$editor.height()>0;i||n.length||!r||(t.$editor.addClass("dragover"),t.$dropzone.width(t.$editor.width()),t.$dropzone.height(t.$editor.height()),o.text(t.lang.image.dragImageHere)),n=n.add(e.target)},this.documentEventHandlers.onDragleave=function(o){(n=n.not(o.target)).length&&"BODY"!==o.target.nodeName||(n=e()(),t.$editor.removeClass("dragover"))},this.documentEventHandlers.onDrop=function(){n=e()(),t.$editor.removeClass("dragover")},this.$eventListener.on("dragenter",this.documentEventHandlers.onDragenter).on("dragleave",this.documentEventHandlers.onDragleave).on("drop",this.documentEventHandlers.onDrop),this.$dropzone.on("dragenter",(function(){t.$dropzone.addClass("hover"),o.text(t.lang.image.dropImage)})).on("dragleave",(function(){t.$dropzone.removeClass("hover"),o.text(t.lang.image.dragImageHere)})),this.$dropzone.on("drop",(function(n){var o=n.originalEvent.dataTransfer;n.preventDefault(),o&&o.files&&o.files.length?(t.$editable.focus(),t.context.invoke("editor.insertImagesOrCallback",o.files)):e().each(o.types,(function(n,i){if(!(i.toLowerCase().indexOf("_moz_")>-1)){var r=o.getData(i);i.toLowerCase().indexOf("text")>-1?t.context.invoke("editor.pasteHTML",r):e()(r).each((function(e,n){t.context.invoke("editor.insertNode",n)}))}}))})).on("dragover",!1)}},{key:"destroy",value:function(){var t=this;Object.keys(this.documentEventHandlers).forEach((function(e){t.$eventListener.off(e.substr(2).toLowerCase(),t.documentEventHandlers[e])})),this.documentEventHandlers={}}}],o&&zt(n.prototype,o),i&&zt(n,i),t}();function Mt(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return Ot(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ot(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,r=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw r}}}}function Ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function Ut(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var jt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=e,this.$editor=e.layoutInfo.editor,this.$editable=e.layoutInfo.editable,this.$codable=e.layoutInfo.codable,this.options=e.options,this.CodeMirrorConstructor=window.CodeMirror,this.options.codemirror.CodeMirrorConstructor&&(this.CodeMirrorConstructor=this.options.codemirror.CodeMirrorConstructor)}var e,n,o;return e=t,n=[{key:"sync",value:function(t){var e=this.isActivated(),n=this.CodeMirrorConstructor;e&&(t?n?this.$codable.data("cmEditor").getDoc().setValue(t):this.$codable.val(t):n&&this.$codable.data("cmEditor").save())}},{key:"initialize",value:function(){var t=this;this.$codable.on("keyup",(function(e){e.keyCode===wt.code.ESCAPE&&t.deactivate()}))}},{key:"isActivated",value:function(){return this.$editor.hasClass("codeview")}},{key:"toggle",value:function(){this.isActivated()?this.deactivate():this.activate(),this.context.triggerEvent("codeview.toggled")}},{key:"purify",value:function(t){if(this.options.codeviewFilter&&(t=t.replace(this.options.codeviewFilterRegex,""),this.options.codeviewIframeFilter)){var e=this.options.codeviewIframeWhitelistSrc.concat(this.options.codeviewIframeWhitelistSrcBase);t=t.replace(/(<iframe.*?>.*?(?:<\/iframe>)?)/gi,(function(t){if(/<.+src(?==?('|"|\s)?)[\s\S]+src(?=('|"|\s)?)[^>]*?>/i.test(t))return"";var n,o=Mt(e);try{for(o.s();!(n=o.n()).done;){var i=n.value;if(new RegExp('src="(https?:)?//'+i.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")+'/(.+)"').test(t))return t}}catch(t){o.e(t)}finally{o.f()}return""}))}return t}},{key:"activate",value:function(){var t=this,e=this.CodeMirrorConstructor;if(this.$codable.val(ht.html(this.$editable,this.options.prettifyHtml)),this.$codable.height(this.$editable.height()),this.context.invoke("toolbar.updateCodeview",!0),this.context.invoke("airPopover.updateCodeview",!0),this.$editor.addClass("codeview"),this.$codable.focus(),e){var n=e.fromTextArea(this.$codable[0],this.options.codemirror);if(this.options.codemirror.tern){var o=new e.TernServer(this.options.codemirror.tern);n.ternServer=o,n.on("cursorActivity",(function(t){o.updateArgHints(t)}))}n.on("blur",(function(e){t.context.triggerEvent("blur.codeview",n.getValue(),e)})),n.on("change",(function(){t.context.triggerEvent("change.codeview",n.getValue(),n)})),n.setSize(null,this.$editable.outerHeight()),this.$codable.data("cmEditor",n)}else this.$codable.on("blur",(function(e){t.context.triggerEvent("blur.codeview",t.$codable.val(),e)})),this.$codable.on("input",(function(){t.context.triggerEvent("change.codeview",t.$codable.val(),t.$codable)}))}},{key:"deactivate",value:function(){if(this.CodeMirrorConstructor){var t=this.$codable.data("cmEditor");this.$codable.val(t.getValue()),t.toTextArea()}var e=this.purify(ht.value(this.$codable,this.options.prettifyHtml)||ht.emptyPara),n=this.$editable.html()!==e;this.$editable.html(e),this.$editable.height(this.options.height?this.$codable.height():"auto"),this.$editor.removeClass("codeview"),n&&this.context.triggerEvent("change",this.$editable.html(),this.$editable),this.$editable.focus(),this.context.invoke("toolbar.updateCodeview",!1),this.context.invoke("airPopover.updateCodeview",!1)}},{key:"destroy",value:function(){this.isActivated()&&this.deactivate()}}],n&&Ut(e.prototype,n),o&&Ut(e,o),t}();function Wt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var Kt=function(){function t(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$document=e()(document),this.$statusbar=n.layoutInfo.statusbar,this.$editable=n.layoutInfo.editable,this.$codable=n.layoutInfo.codable,this.options=n.options}var n,o,i;return n=t,(o=[{key:"initialize",value:function(){var t=this;this.options.airMode||this.options.disableResizeEditor?this.destroy():this.$statusbar.on("mousedown",(function(e){e.preventDefault(),e.stopPropagation();var n=t.$editable.offset().top-t.$document.scrollTop(),o=t.$codable.offset().top-t.$document.scrollTop(),i=function(e){var i=e.clientY-(n+24),r=e.clientY-(o+24);i=t.options.minheight>0?Math.max(i,t.options.minheight):i,i=t.options.maxHeight>0?Math.min(i,t.options.maxHeight):i,r=t.options.minheight>0?Math.max(r,t.options.minheight):r,r=t.options.maxHeight>0?Math.min(r,t.options.maxHeight):r,t.$editable.height(i),t.$codable.height(r)};t.$document.on("mousemove",i).one("mouseup",(function(){t.$document.off("mousemove",i)}))}))}},{key:"destroy",value:function(){this.$statusbar.off(),this.$statusbar.addClass("locked")}}])&&Wt(n.prototype,o),i&&Wt(n,i),t}();function Vt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var qt=function(){function t(n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=n,this.$editor=n.layoutInfo.editor,this.$toolbar=n.layoutInfo.toolbar,this.$editable=n.layoutInfo.editable,this.$codable=n.layoutInfo.codable,this.$window=e()(window),this.$scrollbar=e()("html, body"),this.scrollbarClassName="note-fullscreen-body",this.onResize=function(){o.resizeTo({h:o.$window.height()-o.$toolbar.outerHeight()})}}var n,o,i;return n=t,(o=[{key:"resizeTo",value:function(t){this.$editable.css("height",t.h),this.$codable.css("height",t.h),this.$codable.data("cmeditor")&&this.$codable.data("cmeditor").setsize(null,t.h)}},{key:"toggle",value:function(){this.$editor.toggleClass("fullscreen");var t=this.isFullscreen();this.$scrollbar.toggleClass(this.scrollbarClassName,t),t?(this.$editable.data("orgHeight",this.$editable.css("height")),this.$editable.data("orgMaxHeight",this.$editable.css("maxHeight")),this.$editable.css("maxHeight",""),this.$window.on("resize",this.onResize).trigger("resize")):(this.$window.off("resize",this.onResize),this.resizeTo({h:this.$editable.data("orgHeight")}),this.$editable.css("maxHeight",this.$editable.css("orgMaxHeight"))),this.context.invoke("toolbar.updateFullscreen",t)}},{key:"isFullscreen",value:function(){return this.$editor.hasClass("fullscreen")}},{key:"destroy",value:function(){this.$scrollbar.removeClass(this.scrollbarClassName)}}])&&Vt(n.prototype,o),i&&Vt(n,i),t}();function _t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var Gt=function(){function t(n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=n,this.$document=e()(document),this.$editingArea=n.layoutInfo.editingArea,this.options=n.options,this.lang=this.options.langInfo,this.events={"summernote.mousedown":function(t,e){o.update(e.target,e)&&e.preventDefault()},"summernote.keyup summernote.scroll summernote.change summernote.dialog.shown":function(){o.update()},"summernote.disable summernote.blur":function(){o.hide()},"summernote.codeview.toggled":function(){o.update()}}}var n,o,i;return n=t,o=[{key:"initialize",value:function(){var t=this;this.$handle=e()(['<div class="note-handle">','<div class="note-control-selection">','<div class="note-control-selection-bg"></div>','<div class="note-control-holder note-control-nw"></div>','<div class="note-control-holder note-control-ne"></div>','<div class="note-control-holder note-control-sw"></div>','<div class="',this.options.disableResizeImage?"note-control-holder":"note-control-sizing",' note-control-se"></div>',this.options.disableResizeImage?"":'<div class="note-control-selection-info"></div>',"</div>","</div>"].join("")).prependTo(this.$editingArea),this.$handle.on("mousedown",(function(e){if(ht.isControlSizing(e.target)){e.preventDefault(),e.stopPropagation();var n=t.$handle.find(".note-control-selection").data("target"),o=n.offset(),i=t.$document.scrollTop(),r=function(e){t.context.invoke("editor.resizeTo",{x:e.clientX-o.left,y:e.clientY-(o.top-i)},n,!e.shiftKey),t.update(n[0],e)};t.$document.on("mousemove",r).one("mouseup",(function(e){e.preventDefault(),t.$document.off("mousemove",r),t.context.invoke("editor.afterCommand")})),n.data("ratio")||n.data("ratio",n.height()/n.width())}})),this.$handle.on("wheel",(function(e){e.preventDefault(),t.update()}))}},{key:"destroy",value:function(){this.$handle.remove()}},{key:"update",value:function(t,n){if(this.context.isDisabled())return!1;var o=ht.isImg(t),i=this.$handle.find(".note-control-selection");if(this.context.invoke("imagePopover.update",t,n),o){var r=e()(t),a=r.position(),s={left:a.left+parseInt(r.css("marginLeft"),10),top:a.top+parseInt(r.css("marginTop"),10)},l={w:r.outerWidth(!1),h:r.outerHeight(!1)};i.css({display:"block",left:s.left,top:s.top,width:l.w,height:l.h}).data("target",r);var c=new Image;c.src=r.attr("src");var u=l.w+"x"+l.h+" ("+this.lang.image.original+": "+c.width+"x"+c.height+")";i.find(".note-control-selection-info").text(u),this.context.invoke("editor.saveTarget",t)}else this.hide();return o}},{key:"hide",value:function(){this.context.invoke("editor.clearTarget"),this.$handle.children().hide()}}],o&&_t(n.prototype,o),i&&_t(n,i),t}();function Yt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var Zt=/^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|tel:|mailto:[A-Z0-9._%+-]+@|xmpp:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i,Qt=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=e,this.options=e.options,this.events={"summernote.keyup":function(t,e){e.isDefaultPrevented()||n.handleKeyup(e)},"summernote.keydown":function(t,e){n.handleKeydown(e)}}}var n,o,i;return n=t,(o=[{key:"initialize",value:function(){this.lastWordRange=null}},{key:"destroy",value:function(){this.lastWordRange=null}},{key:"replace",value:function(){if(this.lastWordRange){var t=this.lastWordRange.toString(),n=t.match(Zt);if(n&&(n[1]||n[2])){var o=n[1]?t:"http://"+t,i=this.options.showDomainOnlyForAutolink?t.replace(/^(?:https?:\/\/)?(?:tel?:?)?(?:mailto?:?)?(?:xmpp?:?)?(?:www\.)?/i,"").split("/")[0]:t,r=e()("<a></a>").html(i).attr("href",o)[0];this.context.options.linkTargetBlank&&e()(r).attr("target","_blank"),this.lastWordRange.insertNode(r),this.lastWordRange=null,this.context.invoke("editor.focus")}}}},{key:"handleKeydown",value:function(t){if(k.contains([wt.code.ENTER,wt.code.SPACE],t.keyCode)){var e=this.context.invoke("editor.createRange").getWordRange();this.lastWordRange=e}}},{key:"handleKeyup",value:function(t){k.contains([wt.code.ENTER,wt.code.SPACE],t.keyCode)&&this.replace()}}])&&Yt(n.prototype,o),i&&Yt(n,i),t}();function Xt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var Jt=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$note=e.layoutInfo.note,this.events={"summernote.change":function(){n.$note.val(e.invoke("code"))}}}var e,n,o;return e=t,(n=[{key:"shouldInitialize",value:function(){return ht.isTextarea(this.$note[0])}}])&&Xt(e.prototype,n),o&&Xt(e,o),t}();function te(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var ee=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=e,this.options=e.options.replace||{},this.keys=[wt.code.ENTER,wt.code.SPACE,wt.code.PERIOD,wt.code.COMMA,wt.code.SEMICOLON,wt.code.SLASH],this.previousKeydownCode=null,this.events={"summernote.keyup":function(t,e){e.isDefaultPrevented()||n.handleKeyup(e)},"summernote.keydown":function(t,e){n.handleKeydown(e)}}}var e,n,o;return e=t,(n=[{key:"shouldInitialize",value:function(){return!!this.options.match}},{key:"initialize",value:function(){this.lastWord=null}},{key:"destroy",value:function(){this.lastWord=null}},{key:"replace",value:function(){if(this.lastWord){var t=this,e=this.lastWord.toString();this.options.match(e,(function(e){if(e){var n="";if("string"==typeof e?n=ht.createText(e):e instanceof jQuery?n=e[0]:e instanceof Node&&(n=e),!n)return;t.lastWord.insertNode(n),t.lastWord=null,t.context.invoke("editor.focus")}}))}}},{key:"handleKeydown",value:function(t){if(this.previousKeydownCode&&k.contains(this.keys,this.previousKeydownCode))this.previousKeydownCode=t.keyCode;else{if(k.contains(this.keys,t.keyCode)){var e=this.context.invoke("editor.createRange").getWordRange();this.lastWord=e}this.previousKeydownCode=t.keyCode}}},{key:"handleKeyup",value:function(t){k.contains(this.keys,t.keyCode)&&this.replace()}}])&&te(e.prototype,n),o&&te(e,o),t}();function ne(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var oe=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=e,this.$editingArea=e.layoutInfo.editingArea,this.options=e.options,!0===this.options.inheritPlaceholder&&(this.options.placeholder=this.context.$note.attr("placeholder")||this.options.placeholder),this.events={"summernote.init summernote.change":function(){n.update()},"summernote.codeview.toggled":function(){n.update()}}}var n,o,i;return n=t,(o=[{key:"shouldInitialize",value:function(){return!!this.options.placeholder}},{key:"initialize",value:function(){var t=this;this.$placeholder=e()('<div class="note-placeholder"></div>'),this.$placeholder.on("click",(function(){t.context.invoke("focus")})).html(this.options.placeholder).prependTo(this.$editingArea),this.update()}},{key:"destroy",value:function(){this.$placeholder.remove()}},{key:"update",value:function(){var t=!this.context.invoke("codeview.isActivated")&&this.context.invoke("editor.isEmpty");this.$placeholder.toggle(t)}}])&&ne(n.prototype,o),i&&ne(n,i),t}();function ie(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var re=function(){function t(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ui=e().summernote.ui,this.context=n,this.$toolbar=n.layoutInfo.toolbar,this.options=n.options,this.lang=this.options.langInfo,this.invertedKeyMap=m.invertObject(this.options.keyMap[f.isMac?"mac":"pc"])}var n,o,i;return n=t,o=[{key:"representShortcut",value:function(t){var e=this.invertedKeyMap[t];return this.options.shortcuts&&e?(f.isMac&&(e=e.replace("CMD","⌘").replace("SHIFT","⇧"))," ("+(e=e.replace("BACKSLASH","\\").replace("SLASH","/").replace("LEFTBRACKET","[").replace("RIGHTBRACKET","]"))+")"):""}},{key:"button",value:function(t){return!this.options.tooltip&&t.tooltip&&delete t.tooltip,t.container=this.options.container,this.ui.button(t)}},{key:"initialize",value:function(){this.addToolbarButtons(),this.addImagePopoverButtons(),this.addLinkPopoverButtons(),this.addTablePopoverButtons(),this.fontInstalledMap={}}},{key:"destroy",value:function(){delete this.fontInstalledMap}},{key:"isFontInstalled",value:function(t){return Object.prototype.hasOwnProperty.call(this.fontInstalledMap,t)||(this.fontInstalledMap[t]=f.isFontInstalled(t)||k.contains(this.options.fontNamesIgnoreCheck,t)),this.fontInstalledMap[t]}},{key:"isFontDeservedToAdd",value:function(t){return""!==(t=t.toLowerCase())&&this.isFontInstalled(t)&&-1===f.genericFontFamilies.indexOf(t)}},{key:"colorPalette",value:function(t,n,o,i){var r=this;return this.ui.buttonGroup({className:"note-color "+t,children:[this.button({className:"note-current-color-button",contents:this.ui.icon(this.options.icons.font+" note-recent-color"),tooltip:n,click:function(t){var n=e()(t.currentTarget);o&&i?r.context.invoke("editor.color",{backColor:n.attr("data-backColor"),foreColor:n.attr("data-foreColor")}):o?r.context.invoke("editor.color",{backColor:n.attr("data-backColor")}):i&&r.context.invoke("editor.color",{foreColor:n.attr("data-foreColor")})},callback:function(t){var e=t.find(".note-recent-color");o&&(e.css("background-color",r.options.colorButton.backColor),t.attr("data-backColor",r.options.colorButton.backColor)),i?(e.css("color",r.options.colorButton.foreColor),t.attr("data-foreColor",r.options.colorButton.foreColor)):e.css("color","transparent")}}),this.button({className:"dropdown-toggle",contents:this.ui.dropdownButtonContents("",this.options),tooltip:this.lang.color.more,data:{toggle:"dropdown"}}),this.ui.dropdown({items:(o?['<div class="note-palette">','<div class="note-palette-title">'+this.lang.color.background+"</div>","<div>",'<button type="button" class="note-color-reset btn btn-light btn-default" data-event="backColor" data-value="transparent">',this.lang.color.transparent,"</button>","</div>",'<div class="note-holder" data-event="backColor">\x3c!-- back colors --\x3e</div>',"<div>",'<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="backColorPicker-'+this.options.id+'">',this.lang.color.cpSelect,"</button>",'<input type="color" id="backColorPicker-'+this.options.id+'" class="note-btn note-color-select-btn" value="'+this.options.colorButton.backColor+'" data-event="backColorPalette-'+this.options.id+'">',"</div>",'<div class="note-holder-custom" id="backColorPalette-'+this.options.id+'" data-event="backColor"></div>',"</div>"].join(""):"")+(i?['<div class="note-palette">','<div class="note-palette-title">'+this.lang.color.foreground+"</div>","<div>",'<button type="button" class="note-color-reset btn btn-light btn-default" data-event="removeFormat" data-value="foreColor">',this.lang.color.resetToDefault,"</button>","</div>",'<div class="note-holder" data-event="foreColor">\x3c!-- fore colors --\x3e</div>',"<div>",'<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="foreColorPicker-'+this.options.id+'">',this.lang.color.cpSelect,"</button>",'<input type="color" id="foreColorPicker-'+this.options.id+'" class="note-btn note-color-select-btn" value="'+this.options.colorButton.foreColor+'" data-event="foreColorPalette-'+this.options.id+'">',"</div>",'<div class="note-holder-custom" id="foreColorPalette-'+this.options.id+'" data-event="foreColor"></div>',"</div>"].join(""):""),callback:function(t){t.find(".note-holder").each((function(t,n){var o=e()(n);o.append(r.ui.palette({colors:r.options.colors,colorsName:r.options.colorsName,eventName:o.data("event"),container:r.options.container,tooltip:r.options.tooltip}).render())}));var n=[["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"]];t.find(".note-holder-custom").each((function(t,o){var i=e()(o);i.append(r.ui.palette({colors:n,colorsName:n,eventName:i.data("event"),container:r.options.container,tooltip:r.options.tooltip}).render())})),t.find("input[type=color]").each((function(n,o){e()(o).change((function(){var n=t.find("#"+e()(this).data("event")).find(".note-color-btn").first(),o=this.value.toUpperCase();n.css("background-color",o).attr("aria-label",o).attr("data-value",o).attr("data-original-title",o),n.click()}))}))},click:function(n){n.stopPropagation();var o=e()("."+t).find(".note-dropdown-menu"),i=e()(n.target),a=i.data("event"),s=i.attr("data-value");if("openPalette"===a){var l=o.find("#"+s),c=e()(o.find("#"+l.data("event")).find(".note-color-row")[0]),u=c.find(".note-color-btn").last().detach(),d=l.val();u.css("background-color",d).attr("aria-label",d).attr("data-value",d).attr("data-original-title",d),c.prepend(u),l.click()}else{if(k.contains(["backColor","foreColor"],a)){var h="backColor"===a?"background-color":"color",f=i.closest(".note-color").find(".note-recent-color"),p=i.closest(".note-color").find(".note-current-color-button");f.css(h,s),p.attr("data-"+a,s)}r.context.invoke("editor."+a,s)}}})]}).render()}},{key:"addToolbarButtons",value:function(){var t=this;this.context.memo("button.style",(function(){return t.ui.buttonGroup([t.button({className:"dropdown-toggle",contents:t.ui.dropdownButtonContents(t.ui.icon(t.options.icons.magic),t.options),tooltip:t.lang.style.style,data:{toggle:"dropdown"}}),t.ui.dropdown({className:"dropdown-style",items:t.options.styleTags,title:t.lang.style.style,template:function(e){"string"==typeof e&&(e={tag:e,title:Object.prototype.hasOwnProperty.call(t.lang.style,e)?t.lang.style[e]:e});var n=e.tag,o=e.title;return"<"+n+(e.style?' style="'+e.style+'" ':"")+(e.className?' class="'+e.className+'"':"")+">"+o+"</"+n+">"},click:t.context.createInvokeHandler("editor.formatBlock")})]).render()}));for(var n=function(e,n){var o=t.options.styleTags[e];t.context.memo("button.style."+o,(function(){return t.button({className:"note-btn-style-"+o,contents:'<div data-value="'+o+'">'+o.toUpperCase()+"</div>",tooltip:t.lang.style[o],click:t.context.createInvokeHandler("editor.formatBlock")}).render()}))},o=0,i=this.options.styleTags.length;o<i;o++)n(o);this.context.memo("button.bold",(function(){return t.button({className:"note-btn-bold",contents:t.ui.icon(t.options.icons.bold),tooltip:t.lang.font.bold+t.representShortcut("bold"),click:t.context.createInvokeHandlerAndUpdateState("editor.bold")}).render()})),this.context.memo("button.italic",(function(){return t.button({className:"note-btn-italic",contents:t.ui.icon(t.options.icons.italic),tooltip:t.lang.font.italic+t.representShortcut("italic"),click:t.context.createInvokeHandlerAndUpdateState("editor.italic")}).render()})),this.context.memo("button.underline",(function(){return t.button({className:"note-btn-underline",contents:t.ui.icon(t.options.icons.underline),tooltip:t.lang.font.underline+t.representShortcut("underline"),click:t.context.createInvokeHandlerAndUpdateState("editor.underline")}).render()})),this.context.memo("button.clear",(function(){return t.button({contents:t.ui.icon(t.options.icons.eraser),tooltip:t.lang.font.clear+t.representShortcut("removeFormat"),click:t.context.createInvokeHandler("editor.removeFormat")}).render()})),this.context.memo("button.strikethrough",(function(){return t.button({className:"note-btn-strikethrough",contents:t.ui.icon(t.options.icons.strikethrough),tooltip:t.lang.font.strikethrough+t.representShortcut("strikethrough"),click:t.context.createInvokeHandlerAndUpdateState("editor.strikethrough")}).render()})),this.context.memo("button.superscript",(function(){return t.button({className:"note-btn-superscript",contents:t.ui.icon(t.options.icons.superscript),tooltip:t.lang.font.superscript,click:t.context.createInvokeHandlerAndUpdateState("editor.superscript")}).render()})),this.context.memo("button.subscript",(function(){return t.button({className:"note-btn-subscript",contents:t.ui.icon(t.options.icons.subscript),tooltip:t.lang.font.subscript,click:t.context.createInvokeHandlerAndUpdateState("editor.subscript")}).render()})),this.context.memo("button.fontname",(function(){var n=t.context.invoke("editor.currentStyle");return t.options.addDefaultFonts&&e().each(n["font-family"].split(","),(function(e,n){n=n.trim().replace(/['"]+/g,""),t.isFontDeservedToAdd(n)&&-1===t.options.fontNames.indexOf(n)&&t.options.fontNames.push(n)})),t.ui.buttonGroup([t.button({className:"dropdown-toggle",contents:t.ui.dropdownButtonContents('<span class="note-current-fontname"></span>',t.options),tooltip:t.lang.font.name,data:{toggle:"dropdown"}}),t.ui.dropdownCheck({className:"dropdown-fontname",checkClassName:t.options.icons.menuCheck,items:t.options.fontNames.filter(t.isFontInstalled.bind(t)),title:t.lang.font.name,template:function(t){return'<span style="font-family: '+f.validFontName(t)+'">'+t+"</span>"},click:t.context.createInvokeHandlerAndUpdateState("editor.fontName")})]).render()})),this.context.memo("button.fontsize",(function(){return t.ui.buttonGroup([t.button({className:"dropdown-toggle",contents:t.ui.dropdownButtonContents('<span class="note-current-fontsize"></span>',t.options),tooltip:t.lang.font.size,data:{toggle:"dropdown"}}),t.ui.dropdownCheck({className:"dropdown-fontsize",checkClassName:t.options.icons.menuCheck,items:t.options.fontSizes,title:t.lang.font.size,click:t.context.createInvokeHandlerAndUpdateState("editor.fontSize")})]).render()})),this.context.memo("button.fontsizeunit",(function(){return t.ui.buttonGroup([t.button({className:"dropdown-toggle",contents:t.ui.dropdownButtonContents('<span class="note-current-fontsizeunit"></span>',t.options),tooltip:t.lang.font.sizeunit,data:{toggle:"dropdown"}}),t.ui.dropdownCheck({className:"dropdown-fontsizeunit",checkClassName:t.options.icons.menuCheck,items:t.options.fontSizeUnits,title:t.lang.font.sizeunit,click:t.context.createInvokeHandlerAndUpdateState("editor.fontSizeUnit")})]).render()})),this.context.memo("button.color",(function(){return t.colorPalette("note-color-all",t.lang.color.recent,!0,!0)})),this.context.memo("button.forecolor",(function(){return t.colorPalette("note-color-fore",t.lang.color.foreground,!1,!0)})),this.context.memo("button.backcolor",(function(){return t.colorPalette("note-color-back",t.lang.color.background,!0,!1)})),this.context.memo("button.ul",(function(){return t.button({contents:t.ui.icon(t.options.icons.unorderedlist),tooltip:t.lang.lists.unordered+t.representShortcut("insertUnorderedList"),click:t.context.createInvokeHandler("editor.insertUnorderedList")}).render()})),this.context.memo("button.ol",(function(){return t.button({contents:t.ui.icon(t.options.icons.orderedlist),tooltip:t.lang.lists.ordered+t.representShortcut("insertOrderedList"),click:t.context.createInvokeHandler("editor.insertOrderedList")}).render()}));var r=this.button({contents:this.ui.icon(this.options.icons.alignLeft),tooltip:this.lang.paragraph.left+this.representShortcut("justifyLeft"),click:this.context.createInvokeHandler("editor.justifyLeft")}),a=this.button({contents:this.ui.icon(this.options.icons.alignCenter),tooltip:this.lang.paragraph.center+this.representShortcut("justifyCenter"),click:this.context.createInvokeHandler("editor.justifyCenter")}),s=this.button({contents:this.ui.icon(this.options.icons.alignRight),tooltip:this.lang.paragraph.right+this.representShortcut("justifyRight"),click:this.context.createInvokeHandler("editor.justifyRight")}),l=this.button({contents:this.ui.icon(this.options.icons.alignJustify),tooltip:this.lang.paragraph.justify+this.representShortcut("justifyFull"),click:this.context.createInvokeHandler("editor.justifyFull")}),c=this.button({contents:this.ui.icon(this.options.icons.outdent),tooltip:this.lang.paragraph.outdent+this.representShortcut("outdent"),click:this.context.createInvokeHandler("editor.outdent")}),u=this.button({contents:this.ui.icon(this.options.icons.indent),tooltip:this.lang.paragraph.indent+this.representShortcut("indent"),click:this.context.createInvokeHandler("editor.indent")});this.context.memo("button.justifyLeft",m.invoke(r,"render")),this.context.memo("button.justifyCenter",m.invoke(a,"render")),this.context.memo("button.justifyRight",m.invoke(s,"render")),this.context.memo("button.justifyFull",m.invoke(l,"render")),this.context.memo("button.outdent",m.invoke(c,"render")),this.context.memo("button.indent",m.invoke(u,"render")),this.context.memo("button.paragraph",(function(){return t.ui.buttonGroup([t.button({className:"dropdown-toggle",contents:t.ui.dropdownButtonContents(t.ui.icon(t.options.icons.alignLeft),t.options),tooltip:t.lang.paragraph.paragraph,data:{toggle:"dropdown"}}),t.ui.dropdown([t.ui.buttonGroup({className:"note-align",children:[r,a,s,l]}),t.ui.buttonGroup({className:"note-list",children:[c,u]})])]).render()})),this.context.memo("button.height",(function(){return t.ui.buttonGroup([t.button({className:"dropdown-toggle",contents:t.ui.dropdownButtonContents(t.ui.icon(t.options.icons.textHeight),t.options),tooltip:t.lang.font.height,data:{toggle:"dropdown"}}),t.ui.dropdownCheck({items:t.options.lineHeights,checkClassName:t.options.icons.menuCheck,className:"dropdown-line-height",title:t.lang.font.height,click:t.context.createInvokeHandler("editor.lineHeight")})]).render()})),this.context.memo("button.table",(function(){return t.ui.buttonGroup([t.button({className:"dropdown-toggle",contents:t.ui.dropdownButtonContents(t.ui.icon(t.options.icons.table),t.options),tooltip:t.lang.table.table,data:{toggle:"dropdown"}}),t.ui.dropdown({title:t.lang.table.table,className:"note-table",items:['<div class="note-dimension-picker">','<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>','<div class="note-dimension-picker-highlighted"></div>','<div class="note-dimension-picker-unhighlighted"></div>',"</div>",'<div class="note-dimension-display">1 x 1</div>'].join("")})],{callback:function(e){e.find(".note-dimension-picker-mousecatcher").css({width:t.options.insertTableMaxSize.col+"em",height:t.options.insertTableMaxSize.row+"em"}).mouseup(t.context.createInvokeHandler("editor.insertTable")).on("mousemove",t.tableMoveHandler.bind(t))}}).render()})),this.context.memo("button.link",(function(){return t.button({contents:t.ui.icon(t.options.icons.link),tooltip:t.lang.link.link+t.representShortcut("linkDialog.show"),click:t.context.createInvokeHandler("linkDialog.show")}).render()})),this.context.memo("button.picture",(function(){return t.button({contents:t.ui.icon(t.options.icons.picture),tooltip:t.lang.image.image,click:t.context.createInvokeHandler("imageDialog.show")}).render()})),this.context.memo("button.video",(function(){return t.button({contents:t.ui.icon(t.options.icons.video),tooltip:t.lang.video.video,click:t.context.createInvokeHandler("videoDialog.show")}).render()})),this.context.memo("button.hr",(function(){return t.button({contents:t.ui.icon(t.options.icons.minus),tooltip:t.lang.hr.insert+t.representShortcut("insertHorizontalRule"),click:t.context.createInvokeHandler("editor.insertHorizontalRule")}).render()})),this.context.memo("button.fullscreen",(function(){return t.button({className:"btn-fullscreen note-codeview-keep",contents:t.ui.icon(t.options.icons.arrowsAlt),tooltip:t.lang.options.fullscreen,click:t.context.createInvokeHandler("fullscreen.toggle")}).render()})),this.context.memo("button.codeview",(function(){return t.button({className:"btn-codeview note-codeview-keep",contents:t.ui.icon(t.options.icons.code),tooltip:t.lang.options.codeview,click:t.context.createInvokeHandler("codeview.toggle")}).render()})),this.context.memo("button.redo",(function(){return t.button({contents:t.ui.icon(t.options.icons.redo),tooltip:t.lang.history.redo+t.representShortcut("redo"),click:t.context.createInvokeHandler("editor.redo")}).render()})),this.context.memo("button.undo",(function(){return t.button({contents:t.ui.icon(t.options.icons.undo),tooltip:t.lang.history.undo+t.representShortcut("undo"),click:t.context.createInvokeHandler("editor.undo")}).render()})),this.context.memo("button.help",(function(){return t.button({contents:t.ui.icon(t.options.icons.question),tooltip:t.lang.options.help,click:t.context.createInvokeHandler("helpDialog.show")}).render()}))}},{key:"addImagePopoverButtons",value:function(){var t=this;this.context.memo("button.resizeFull",(function(){return t.button({contents:'<span class="note-fontsize-10">100%</span>',tooltip:t.lang.image.resizeFull,click:t.context.createInvokeHandler("editor.resize","1")}).render()})),this.context.memo("button.resizeHalf",(function(){return t.button({contents:'<span class="note-fontsize-10">50%</span>',tooltip:t.lang.image.resizeHalf,click:t.context.createInvokeHandler("editor.resize","0.5")}).render()})),this.context.memo("button.resizeQuarter",(function(){return t.button({contents:'<span class="note-fontsize-10">25%</span>',tooltip:t.lang.image.resizeQuarter,click:t.context.createInvokeHandler("editor.resize","0.25")}).render()})),this.context.memo("button.resizeNone",(function(){return t.button({contents:t.ui.icon(t.options.icons.rollback),tooltip:t.lang.image.resizeNone,click:t.context.createInvokeHandler("editor.resize","0")}).render()})),this.context.memo("button.floatLeft",(function(){return t.button({contents:t.ui.icon(t.options.icons.floatLeft),tooltip:t.lang.image.floatLeft,click:t.context.createInvokeHandler("editor.floatMe","left")}).render()})),this.context.memo("button.floatRight",(function(){return t.button({contents:t.ui.icon(t.options.icons.floatRight),tooltip:t.lang.image.floatRight,click:t.context.createInvokeHandler("editor.floatMe","right")}).render()})),this.context.memo("button.floatNone",(function(){return t.button({contents:t.ui.icon(t.options.icons.rollback),tooltip:t.lang.image.floatNone,click:t.context.createInvokeHandler("editor.floatMe","none")}).render()})),this.context.memo("button.removeMedia",(function(){return t.button({contents:t.ui.icon(t.options.icons.trash),tooltip:t.lang.image.remove,click:t.context.createInvokeHandler("editor.removeMedia")}).render()}))}},{key:"addLinkPopoverButtons",value:function(){var t=this;this.context.memo("button.linkDialogShow",(function(){return t.button({contents:t.ui.icon(t.options.icons.link),tooltip:t.lang.link.edit,click:t.context.createInvokeHandler("linkDialog.show")}).render()})),this.context.memo("button.unlink",(function(){return t.button({contents:t.ui.icon(t.options.icons.unlink),tooltip:t.lang.link.unlink,click:t.context.createInvokeHandler("editor.unlink")}).render()}))}},{key:"addTablePopoverButtons",value:function(){var t=this;this.context.memo("button.addRowUp",(function(){return t.button({className:"btn-md",contents:t.ui.icon(t.options.icons.rowAbove),tooltip:t.lang.table.addRowAbove,click:t.context.createInvokeHandler("editor.addRow","top")}).render()})),this.context.memo("button.addRowDown",(function(){return t.button({className:"btn-md",contents:t.ui.icon(t.options.icons.rowBelow),tooltip:t.lang.table.addRowBelow,click:t.context.createInvokeHandler("editor.addRow","bottom")}).render()})),this.context.memo("button.addColLeft",(function(){return t.button({className:"btn-md",contents:t.ui.icon(t.options.icons.colBefore),tooltip:t.lang.table.addColLeft,click:t.context.createInvokeHandler("editor.addCol","left")}).render()})),this.context.memo("button.addColRight",(function(){return t.button({className:"btn-md",contents:t.ui.icon(t.options.icons.colAfter),tooltip:t.lang.table.addColRight,click:t.context.createInvokeHandler("editor.addCol","right")}).render()})),this.context.memo("button.deleteRow",(function(){return t.button({className:"btn-md",contents:t.ui.icon(t.options.icons.rowRemove),tooltip:t.lang.table.delRow,click:t.context.createInvokeHandler("editor.deleteRow")}).render()})),this.context.memo("button.deleteCol",(function(){return t.button({className:"btn-md",contents:t.ui.icon(t.options.icons.colRemove),tooltip:t.lang.table.delCol,click:t.context.createInvokeHandler("editor.deleteCol")}).render()})),this.context.memo("button.deleteTable",(function(){return t.button({className:"btn-md",contents:t.ui.icon(t.options.icons.trash),tooltip:t.lang.table.delTable,click:t.context.createInvokeHandler("editor.deleteTable")}).render()}))}},{key:"build",value:function(t,e){for(var n=0,o=e.length;n<o;n++){for(var i=e[n],r=Array.isArray(i)?i[0]:i,a=Array.isArray(i)?1===i.length?[i[0]]:i[1]:[i],s=this.ui.buttonGroup({className:"note-"+r}).render(),l=0,c=a.length;l<c;l++){var u=this.context.memo("button."+a[l]);u&&s.append("function"==typeof u?u(this.context):u)}s.appendTo(t)}}},{key:"updateCurrentStyle",value:function(t){var n=t||this.$toolbar,o=this.context.invoke("editor.currentStyle");if(this.updateBtnStates(n,{".note-btn-bold":function(){return"bold"===o["font-bold"]},".note-btn-italic":function(){return"italic"===o["font-italic"]},".note-btn-underline":function(){return"underline"===o["font-underline"]},".note-btn-subscript":function(){return"subscript"===o["font-subscript"]},".note-btn-superscript":function(){return"superscript"===o["font-superscript"]},".note-btn-strikethrough":function(){return"strikethrough"===o["font-strikethrough"]}}),o["font-family"]){var i=o["font-family"].split(",").map((function(t){return t.replace(/[\'\"]/g,"").replace(/\s+$/,"").replace(/^\s+/,"")})),r=k.find(i,this.isFontInstalled.bind(this));n.find(".dropdown-fontname a").each((function(t,n){var o=e()(n),i=o.data("value")+""==r+"";o.toggleClass("checked",i)})),n.find(".note-current-fontname").text(r).css("font-family",r)}if(o["font-size"]){var a=o["font-size"];n.find(".dropdown-fontsize a").each((function(t,n){var o=e()(n),i=o.data("value")+""==a+"";o.toggleClass("checked",i)})),n.find(".note-current-fontsize").text(a);var s=o["font-size-unit"];n.find(".dropdown-fontsizeunit a").each((function(t,n){var o=e()(n),i=o.data("value")+""==s+"";o.toggleClass("checked",i)})),n.find(".note-current-fontsizeunit").text(s)}if(o["line-height"]){var l=o["line-height"];n.find(".dropdown-line-height a").each((function(t,n){var o=e()(n),i=e()(n).data("value")+""==l+"";o.toggleClass("checked",i)})),n.find(".note-current-line-height").text(l)}}},{key:"updateBtnStates",value:function(t,n){var o=this;e().each(n,(function(e,n){o.ui.toggleBtnActive(t.find(e),n())}))}},{key:"tableMoveHandler",value:function(t){var n,o=e()(t.target.parentNode),i=o.next(),r=o.find(".note-dimension-picker-mousecatcher"),a=o.find(".note-dimension-picker-highlighted"),s=o.find(".note-dimension-picker-unhighlighted");if(void 0===t.offsetX){var l=e()(t.target).offset();n={x:t.pageX-l.left,y:t.pageY-l.top}}else n={x:t.offsetX,y:t.offsetY};var c=Math.ceil(n.x/18)||1,u=Math.ceil(n.y/18)||1;a.css({width:c+"em",height:u+"em"}),r.data("value",c+"x"+u),c>3&&c<this.options.insertTableMaxSize.col&&s.css({width:c+1+"em"}),u>3&&u<this.options.insertTableMaxSize.row&&s.css({height:u+1+"em"}),i.html(c+" x "+u)}}],o&&ie(n.prototype,o),i&&ie(n,i),t}();function ae(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var se=function(){function t(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=n,this.$window=e()(window),this.$document=e()(document),this.ui=e().summernote.ui,this.$note=n.layoutInfo.note,this.$editor=n.layoutInfo.editor,this.$toolbar=n.layoutInfo.toolbar,this.$editable=n.layoutInfo.editable,this.$statusbar=n.layoutInfo.statusbar,this.options=n.options,this.isFollowing=!1,this.followScroll=this.followScroll.bind(this)}var n,o,i;return n=t,(o=[{key:"shouldInitialize",value:function(){return!this.options.airMode}},{key:"initialize",value:function(){var t=this;this.options.toolbar=this.options.toolbar||[],this.options.toolbar.length?this.context.invoke("buttons.build",this.$toolbar,this.options.toolbar):this.$toolbar.hide(),this.options.toolbarContainer&&this.$toolbar.appendTo(this.options.toolbarContainer),this.changeContainer(!1),this.$note.on("summernote.keyup summernote.mouseup summernote.change",(function(){t.context.invoke("buttons.updateCurrentStyle")})),this.context.invoke("buttons.updateCurrentStyle"),this.options.followingToolbar&&this.$window.on("scroll resize",this.followScroll)}},{key:"destroy",value:function(){this.$toolbar.children().remove(),this.options.followingToolbar&&this.$window.off("scroll resize",this.followScroll)}},{key:"followScroll",value:function(){if(this.$editor.hasClass("fullscreen"))return!1;var t=this.$editor.outerHeight(),n=this.$editor.width(),o=this.$toolbar.height(),i=this.$statusbar.height(),r=0;this.options.otherStaticBar&&(r=e()(this.options.otherStaticBar).outerHeight());var a=this.$document.scrollTop(),s=this.$editor.offset().top,l=s-r,c=s+t-r-o-i;!this.isFollowing&&a>l&&a<c-o?(this.isFollowing=!0,this.$editable.css({marginTop:this.$toolbar.outerHeight()}),this.$toolbar.css({position:"fixed",top:r,width:n,zIndex:1e3})):this.isFollowing&&(a<l||a>c)&&(this.isFollowing=!1,this.$toolbar.css({position:"relative",top:0,width:"100%",zIndex:"auto"}),this.$editable.css({marginTop:""}))}},{key:"changeContainer",value:function(t){t?this.$toolbar.prependTo(this.$editor):this.options.toolbarContainer&&this.$toolbar.appendTo(this.options.toolbarContainer),this.options.followingToolbar&&this.followScroll()}},{key:"updateFullscreen",value:function(t){this.ui.toggleBtnActive(this.$toolbar.find(".btn-fullscreen"),t),this.changeContainer(t)}},{key:"updateCodeview",value:function(t){this.ui.toggleBtnActive(this.$toolbar.find(".btn-codeview"),t),t?this.deactivate():this.activate()}},{key:"activate",value:function(t){var e=this.$toolbar.find("button");t||(e=e.not(".note-codeview-keep")),this.ui.toggleBtn(e,!0)}},{key:"deactivate",value:function(t){var e=this.$toolbar.find("button");t||(e=e.not(".note-codeview-keep")),this.ui.toggleBtn(e,!1)}}])&&ae(n.prototype,o),i&&ae(n,i),t}();function le(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var ce=function(){function t(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=n,this.ui=e().summernote.ui,this.$body=e()(document.body),this.$editor=n.layoutInfo.editor,this.options=n.options,this.lang=this.options.langInfo,n.memo("help.linkDialog.show",this.options.langInfo.help["linkDialog.show"])}var n,o,i;return n=t,(o=[{key:"initialize",value:function(){var t=this.options.dialogsInBody?this.$body:this.options.container,n=['<div class="form-group note-form-group">','<label for="note-dialog-link-txt-'.concat(this.options.id,'" class="note-form-label">').concat(this.lang.link.textToDisplay,"</label>"),'<input id="note-dialog-link-txt-'.concat(this.options.id,'" class="note-link-text form-control note-form-control note-input" type="text"/>'),"</div>",'<div class="form-group note-form-group">','<label for="note-dialog-link-url-'.concat(this.options.id,'" class="note-form-label">').concat(this.lang.link.url,"</label>"),'<input id="note-dialog-link-url-'.concat(this.options.id,'" class="note-link-url form-control note-form-control note-input" type="text" value="http://"/>'),"</div>",this.options.disableLinkTarget?"":e()("<div></div>").append(this.ui.checkbox({className:"sn-checkbox-open-in-new-window",text:this.lang.link.openInNewWindow,checked:!0}).render()).html(),e()("<div></div>").append(this.ui.checkbox({className:"sn-checkbox-use-protocol",text:this.lang.link.useProtocol,checked:!0}).render()).html()].join(""),o='<input type="button" href="#" class="'.concat("btn btn-primary note-btn note-btn-primary note-link-btn",'" value="').concat(this.lang.link.insert,'" disabled>');this.$dialog=this.ui.dialog({className:"link-dialog",title:this.lang.link.insert,fade:this.options.dialogsFade,body:n,footer:o}).render().appendTo(t)}},{key:"destroy",value:function(){this.ui.hideDialog(this.$dialog),this.$dialog.remove()}},{key:"bindEnterKey",value:function(t,e){t.on("keypress",(function(t){t.keyCode===wt.code.ENTER&&(t.preventDefault(),e.trigger("click"))}))}},{key:"toggleLinkBtn",value:function(t,e,n){this.ui.toggleBtn(t,e.val()&&n.val())}},{key:"showLinkDialog",value:function(t){var n=this;return e().Deferred((function(e){var o=n.$dialog.find(".note-link-text"),i=n.$dialog.find(".note-link-url"),r=n.$dialog.find(".note-link-btn"),a=n.$dialog.find(".sn-checkbox-open-in-new-window input[type=checkbox]"),s=n.$dialog.find(".sn-checkbox-use-protocol input[type=checkbox]");n.ui.onDialogShown(n.$dialog,(function(){n.context.triggerEvent("dialog.shown"),!t.url&&m.isValidUrl(t.text)&&(t.url=t.text),o.on("input paste propertychange",(function(){t.text=o.val(),n.toggleLinkBtn(r,o,i)})).val(t.text),i.on("input paste propertychange",(function(){t.text||o.val(i.val()),n.toggleLinkBtn(r,o,i)})).val(t.url),f.isSupportTouch||i.trigger("focus"),n.toggleLinkBtn(r,o,i),n.bindEnterKey(i,r),n.bindEnterKey(o,r);var l=void 0!==t.isNewWindow?t.isNewWindow:n.context.options.linkTargetBlank;a.prop("checked",l);var c=!t.url&&n.context.options.useProtocol;s.prop("checked",c),r.one("click",(function(r){r.preventDefault(),e.resolve({range:t.range,url:i.val(),text:o.val(),isNewWindow:a.is(":checked"),checkProtocol:s.is(":checked")}),n.ui.hideDialog(n.$dialog)}))})),n.ui.onDialogHidden(n.$dialog,(function(){o.off(),i.off(),r.off(),"pending"===e.state()&&e.reject()})),n.ui.showDialog(n.$dialog)})).promise()}},{key:"show",value:function(){var t=this,e=this.context.invoke("editor.getLinkInfo");this.context.invoke("editor.saveRange"),this.showLinkDialog(e).then((function(e){t.context.invoke("editor.restoreRange"),t.context.invoke("editor.createLink",e)})).fail((function(){t.context.invoke("editor.restoreRange")}))}}])&&le(n.prototype,o),i&&le(n,i),t}();function ue(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var de=function(){function t(n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=n,this.ui=e().summernote.ui,this.options=n.options,this.events={"summernote.keyup summernote.mouseup summernote.change summernote.scroll":function(){o.update()},"summernote.disable summernote.dialog.shown":function(){o.hide()},"summernote.blur":function(t,e){e.originalEvent&&e.originalEvent.relatedTarget&&o.$popover[0].contains(e.originalEvent.relatedTarget)||o.hide()}}}var n,o,i;return n=t,(o=[{key:"shouldInitialize",value:function(){return!k.isEmpty(this.options.popover.link)}},{key:"initialize",value:function(){this.$popover=this.ui.popover({className:"note-link-popover",callback:function(t){t.find(".popover-content,.note-popover-content").prepend('<span><a target="_blank"></a>&nbsp;</span>')}}).render().appendTo(this.options.container);var t=this.$popover.find(".popover-content,.note-popover-content");this.context.invoke("buttons.build",t,this.options.popover.link),this.$popover.on("mousedown",(function(t){t.preventDefault()}))}},{key:"destroy",value:function(){this.$popover.remove()}},{key:"update",value:function(){if(this.context.invoke("editor.hasFocus")){var t=this.context.invoke("editor.getLastRange");if(t.isCollapsed()&&t.isOnAnchor()){var n=ht.ancestor(t.sc,ht.isAnchor),o=e()(n).attr("href");this.$popover.find("a").attr("href",o).text(o);var i=ht.posFromPlaceholder(n),r=e()(this.options.container).offset();i.top-=r.top,i.left-=r.left,this.$popover.css({display:"block",left:i.left,top:i.top})}else this.hide()}else this.hide()}},{key:"hide",value:function(){this.$popover.hide()}}])&&ue(n.prototype,o),i&&ue(n,i),t}();function he(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var fe=function(){function t(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=n,this.ui=e().summernote.ui,this.$body=e()(document.body),this.$editor=n.layoutInfo.editor,this.options=n.options,this.lang=this.options.langInfo}var n,o,i;return n=t,(o=[{key:"initialize",value:function(){var t="";if(this.options.maximumImageFileSize){var e=Math.floor(Math.log(this.options.maximumImageFileSize)/Math.log(1024)),n=1*(this.options.maximumImageFileSize/Math.pow(1024,e)).toFixed(2)+" "+" KMGTP"[e]+"B";t="<small>".concat(this.lang.image.maximumFileSize+" : "+n,"</small>")}var o=this.options.dialogsInBody?this.$body:this.options.container,i=['<div class="form-group note-form-group note-group-select-from-files">','<label for="note-dialog-image-file-'+this.options.id+'" class="note-form-label">'+this.lang.image.selectFromFiles+"</label>",'<input id="note-dialog-image-file-'+this.options.id+'" class="note-image-input form-control-file note-form-control note-input" ',' type="file" name="files" accept="'+this.options.acceptImageFileTypes+'" multiple="multiple"/>',t,"</div>",'<div class="form-group note-group-image-url">','<label for="note-dialog-image-url-'+this.options.id+'" class="note-form-label">'+this.lang.image.url+"</label>",'<input id="note-dialog-image-url-'+this.options.id+'" class="note-image-url form-control note-form-control note-input" type="text"/>',"</div>"].join(""),r='<input type="button" href="#" class="'.concat("btn btn-primary note-btn note-btn-primary note-image-btn",'" value="').concat(this.lang.image.insert,'" disabled>');this.$dialog=this.ui.dialog({title:this.lang.image.insert,fade:this.options.dialogsFade,body:i,footer:r}).render().appendTo(o)}},{key:"destroy",value:function(){this.ui.hideDialog(this.$dialog),this.$dialog.remove()}},{key:"bindEnterKey",value:function(t,e){t.on("keypress",(function(t){t.keyCode===wt.code.ENTER&&(t.preventDefault(),e.trigger("click"))}))}},{key:"show",value:function(){var t=this;this.context.invoke("editor.saveRange"),this.showImageDialog().then((function(e){t.ui.hideDialog(t.$dialog),t.context.invoke("editor.restoreRange"),"string"==typeof e?t.options.callbacks.onImageLinkInsert?t.context.triggerEvent("image.link.insert",e):t.context.invoke("editor.insertImage",e):t.context.invoke("editor.insertImagesOrCallback",e)})).fail((function(){t.context.invoke("editor.restoreRange")}))}},{key:"showImageDialog",value:function(){var t=this;return e().Deferred((function(e){var n=t.$dialog.find(".note-image-input"),o=t.$dialog.find(".note-image-url"),i=t.$dialog.find(".note-image-btn");t.ui.onDialogShown(t.$dialog,(function(){t.context.triggerEvent("dialog.shown"),n.replaceWith(n.clone().on("change",(function(t){e.resolve(t.target.files||t.target.value)})).val("")),o.on("input paste propertychange",(function(){t.ui.toggleBtn(i,o.val())})).val(""),f.isSupportTouch||o.trigger("focus"),i.click((function(t){t.preventDefault(),e.resolve(o.val())})),t.bindEnterKey(o,i)})),t.ui.onDialogHidden(t.$dialog,(function(){n.off(),o.off(),i.off(),"pending"===e.state()&&e.reject()})),t.ui.showDialog(t.$dialog)}))}}])&&he(n.prototype,o),i&&he(n,i),t}();function pe(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var me=function(){function t(n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=n,this.ui=e().summernote.ui,this.editable=n.layoutInfo.editable[0],this.options=n.options,this.events={"summernote.disable summernote.dialog.shown":function(){o.hide()},"summernote.blur":function(t,e){e.originalEvent&&e.originalEvent.relatedTarget&&o.$popover[0].contains(e.originalEvent.relatedTarget)||o.hide()}}}var n,o,i;return n=t,o=[{key:"shouldInitialize",value:function(){return!k.isEmpty(this.options.popover.image)}},{key:"initialize",value:function(){this.$popover=this.ui.popover({className:"note-image-popover"}).render().appendTo(this.options.container);var t=this.$popover.find(".popover-content,.note-popover-content");this.context.invoke("buttons.build",t,this.options.popover.image),this.$popover.on("mousedown",(function(t){t.preventDefault()}))}},{key:"destroy",value:function(){this.$popover.remove()}},{key:"update",value:function(t,n){if(ht.isImg(t)){var o=e()(t).offset(),i=e()(this.options.container).offset(),r={};this.options.popatmouse?(r.left=n.pageX-20,r.top=n.pageY):r=o,r.top-=i.top,r.left-=i.left,this.$popover.css({display:"block",left:r.left,top:r.top})}else this.hide()}},{key:"hide",value:function(){this.$popover.hide()}}],o&&pe(n.prototype,o),i&&pe(n,i),t}();function ve(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var ge=function(){function t(n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=n,this.ui=e().summernote.ui,this.options=n.options,this.events={"summernote.mousedown":function(t,e){o.update(e.target)},"summernote.keyup summernote.scroll summernote.change":function(){o.update()},"summernote.disable summernote.dialog.shown":function(){o.hide()},"summernote.blur":function(t,e){e.originalEvent&&e.originalEvent.relatedTarget&&o.$popover[0].contains(e.originalEvent.relatedTarget)||o.hide()}}}var n,o,i;return n=t,o=[{key:"shouldInitialize",value:function(){return!k.isEmpty(this.options.popover.table)}},{key:"initialize",value:function(){this.$popover=this.ui.popover({className:"note-table-popover"}).render().appendTo(this.options.container);var t=this.$popover.find(".popover-content,.note-popover-content");this.context.invoke("buttons.build",t,this.options.popover.table),f.isFF&&document.execCommand("enableInlineTableEditing",!1,!1),this.$popover.on("mousedown",(function(t){t.preventDefault()}))}},{key:"destroy",value:function(){this.$popover.remove()}},{key:"update",value:function(t){if(this.context.isDisabled())return!1;var n=ht.isCell(t)||ht.isCell(null==t?void 0:t.parentElement);if(n){var o=ht.posFromPlaceholder(t),i=e()(this.options.container).offset();o.top-=i.top,o.left-=i.left,this.$popover.css({display:"block",left:o.left,top:o.top})}else this.hide();return n}},{key:"hide",value:function(){this.$popover.hide()}}],o&&ve(n.prototype,o),i&&ve(n,i),t}();function be(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var ye=function(){function t(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=n,this.ui=e().summernote.ui,this.$body=e()(document.body),this.$editor=n.layoutInfo.editor,this.options=n.options,this.lang=this.options.langInfo}var n,o,i;return n=t,(o=[{key:"initialize",value:function(){var t=this.options.dialogsInBody?this.$body:this.options.container,e=['<div class="form-group note-form-group row-fluid">','<label for="note-dialog-video-url-'.concat(this.options.id,'" class="note-form-label">').concat(this.lang.video.url,' <small class="text-muted">').concat(this.lang.video.providers,"</small></label>"),'<input id="note-dialog-video-url-'.concat(this.options.id,'" class="note-video-url form-control note-form-control note-input" type="text"/>'),"</div>"].join(""),n='<input type="button" href="#" class="'.concat("btn btn-primary note-btn note-btn-primary note-video-btn",'" value="').concat(this.lang.video.insert,'" disabled>');this.$dialog=this.ui.dialog({title:this.lang.video.insert,fade:this.options.dialogsFade,body:e,footer:n}).render().appendTo(t)}},{key:"destroy",value:function(){this.ui.hideDialog(this.$dialog),this.$dialog.remove()}},{key:"bindEnterKey",value:function(t,e){t.on("keypress",(function(t){t.keyCode===wt.code.ENTER&&(t.preventDefault(),e.trigger("click"))}))}},{key:"createVideoNode",value:function(t){var n,o=t.match(/\/\/(?:(?:www|m)\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?$/),i=t.match(/(?:\.|\/\/)drive\.google\.com\/file\/d\/(.[a-zA-Z0-9_-]*)\/view/),r=t.match(/(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/),a=t.match(/\/\/vine\.co\/v\/([a-zA-Z0-9]+)/),s=t.match(/\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/),l=t.match(/.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/),c=t.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/),u=t.match(/\/\/(.*)\/videos\/watch\/([^?]*)(?:\?(?:start=(\w*))?(?:&stop=(\w*))?(?:&loop=([10]))?(?:&autoplay=([10]))?(?:&muted=([10]))?)?/),d=t.match(/\/\/v\.qq\.com.*?vid=(.+)/),h=t.match(/\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/),f=t.match(/^.+.(mp4|m4v)$/),p=t.match(/^.+.(ogg|ogv)$/),m=t.match(/^.+.(webm)$/),v=t.match(/(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/);if(o&&11===o[1].length){var g=o[1],b=0;if(void 0!==o[2]){var y=o[2].match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);if(y)for(var k=[3600,60,1],w=0,C=k.length;w<C;w++)b+=void 0!==y[w+1]?k[w]*parseInt(y[w+1],10):0}n=e()("<iframe>").attr("frameborder",0).attr("src","//www.youtube.com/embed/"+g+(b>0?"?start="+b:"")).attr("width","640").attr("height","360")}else if(i&&i[0].length)n=e()("<iframe>").attr("frameborder",0).attr("src","https://drive.google.com/file/d/"+i[1]+"/preview").attr("width","640").attr("height","480");else if(r&&r[0].length)n=e()("<iframe>").attr("frameborder",0).attr("src","https://instagram.com/p/"+r[1]+"/embed/").attr("width","612").attr("height","710").attr("scrolling","no").attr("allowtransparency","true");else if(a&&a[0].length)n=e()("<iframe>").attr("frameborder",0).attr("src",a[0]+"/embed/simple").attr("width","600").attr("height","600").attr("class","vine-embed");else if(s&&s[3].length)n=e()("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder",0).attr("src","//player.vimeo.com/video/"+s[3]).attr("width","640").attr("height","360");else if(l&&l[2].length)n=e()("<iframe>").attr("frameborder",0).attr("src","//www.dailymotion.com/embed/video/"+l[2]).attr("width","640").attr("height","360");else if(c&&c[1].length)n=e()("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder",0).attr("height","498").attr("width","510").attr("src","//player.youku.com/embed/"+c[1]);else if(u&&u[0].length){var x=0;"undefined"!==u[2]&&(x=u[2]);var S=0;"undefined"!==u[3]&&(S=u[3]);var T=0;"undefined"!==u[4]&&(T=u[4]);var E=0;"undefined"!==u[5]&&(E=u[5]);var I=0;"undefined"!==u[6]&&(I=u[6]),n=e()('<iframe allowfullscreen sandbox="allow-same-origin allow-scripts allow-popups">').attr("frameborder",0).attr("src","//"+u[1]+"/videos/embed/"+u[2]+"?loop="+T+"&autoplay="+E+"&muted="+I+(x>0?"&start="+x:"")+(S>0?"&end="+b:"")).attr("width","560").attr("height","315")}else if(d&&d[1].length||h&&h[2].length){var $=d&&d[1].length?d[1]:h[2];n=e()("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder",0).attr("height","310").attr("width","500").attr("src","https://v.qq.com/txp/iframe/player.html?vid="+$+"&amp;auto=0")}else if(f||p||m)n=e()("<video controls>").attr("src",t).attr("width","640").attr("height","360");else{if(!v||!v[0].length)return!1;n=e()("<iframe>").attr("frameborder",0).attr("src","https://www.facebook.com/plugins/video.php?href="+encodeURIComponent(v[0])+"&show_text=0&width=560").attr("width","560").attr("height","301").attr("scrolling","no").attr("allowtransparency","true")}return n.addClass("note-video-clip"),n[0]}},{key:"show",value:function(){var t=this,e=this.context.invoke("editor.getSelectedText");this.context.invoke("editor.saveRange"),this.showVideoDialog(e).then((function(e){t.ui.hideDialog(t.$dialog),t.context.invoke("editor.restoreRange");var n=t.createVideoNode(e);n&&t.context.invoke("editor.insertNode",n)})).fail((function(){t.context.invoke("editor.restoreRange")}))}},{key:"showVideoDialog",value:function(){var t=this;return e().Deferred((function(e){var n=t.$dialog.find(".note-video-url"),o=t.$dialog.find(".note-video-btn");t.ui.onDialogShown(t.$dialog,(function(){t.context.triggerEvent("dialog.shown"),n.on("input paste propertychange",(function(){t.ui.toggleBtn(o,n.val())})),f.isSupportTouch||n.trigger("focus"),o.click((function(t){t.preventDefault(),e.resolve(n.val())})),t.bindEnterKey(n,o)})),t.ui.onDialogHidden(t.$dialog,(function(){n.off(),o.off(),"pending"===e.state()&&e.reject()})),t.ui.showDialog(t.$dialog)}))}}])&&be(n.prototype,o),i&&be(n,i),t}();function ke(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var we=function(){function t(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=n,this.ui=e().summernote.ui,this.$body=e()(document.body),this.$editor=n.layoutInfo.editor,this.options=n.options,this.lang=this.options.langInfo}var n,o,i;return n=t,o=[{key:"initialize",value:function(){var t=this.options.dialogsInBody?this.$body:this.options.container,e=['<p class="text-center">','<a href="http://summernote.org/" target="_blank" rel="noopener noreferrer">Summernote 0.8.20</a> · ','<a href="https://github.com/summernote/summernote" target="_blank" rel="noopener noreferrer">Project</a> · ','<a href="https://github.com/summernote/summernote/issues" target="_blank" rel="noopener noreferrer">Issues</a>',"</p>"].join("");this.$dialog=this.ui.dialog({title:this.lang.options.help,fade:this.options.dialogsFade,body:this.createShortcutList(),footer:e,callback:function(t){t.find(".modal-body,.note-modal-body").css({"max-height":300,overflow:"scroll"})}}).render().appendTo(t)}},{key:"destroy",value:function(){this.ui.hideDialog(this.$dialog),this.$dialog.remove()}},{key:"createShortcutList",value:function(){var t=this,n=this.options.keyMap[f.isMac?"mac":"pc"];return Object.keys(n).map((function(o){var i=n[o],r=e()('<div><div class="help-list-item"></div></div>');return r.append(e()("<label><kbd>"+o+"</kdb></label>").css({width:180,"margin-right":10})).append(e()("<span></span>").html(t.context.memo("help."+i)||i)),r.html()})).join("")}},{key:"showHelpDialog",value:function(){var t=this;return e().Deferred((function(e){t.ui.onDialogShown(t.$dialog,(function(){t.context.triggerEvent("dialog.shown"),e.resolve()})),t.ui.showDialog(t.$dialog)})).promise()}},{key:"show",value:function(){var t=this;this.context.invoke("editor.saveRange"),this.showHelpDialog().then((function(){t.context.invoke("editor.restoreRange")}))}}],o&&ke(n.prototype,o),i&&ke(n,i),t}();function Ce(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var xe=function(){function t(n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=n,this.ui=e().summernote.ui,this.options=n.options,this.hidable=!0,this.onContextmenu=!1,this.pageX=null,this.pageY=null,this.events={"summernote.contextmenu":function(t){o.options.editing&&(t.preventDefault(),t.stopPropagation(),o.onContextmenu=!0,o.update(!0))},"summernote.mousedown":function(t,e){o.pageX=e.pageX,o.pageY=e.pageY},"summernote.keyup summernote.mouseup summernote.scroll":function(t,e){o.options.editing&&!o.onContextmenu&&(o.pageX=e.pageX,o.pageY=e.pageY,o.update()),o.onContextmenu=!1},"summernote.disable summernote.change summernote.dialog.shown summernote.blur":function(){o.hide()},"summernote.focusout":function(){o.$popover.is(":active,:focus")||o.hide()}}}var n,o,i;return n=t,(o=[{key:"shouldInitialize",value:function(){return this.options.airMode&&!k.isEmpty(this.options.popover.air)}},{key:"initialize",value:function(){var t=this;this.$popover=this.ui.popover({className:"note-air-popover"}).render().appendTo(this.options.container);var e=this.$popover.find(".popover-content");this.context.invoke("buttons.build",e,this.options.popover.air),this.$popover.on("mousedown",(function(){t.hidable=!1})),this.$popover.on("mouseup",(function(){t.hidable=!0}))}},{key:"destroy",value:function(){this.$popover.remove()}},{key:"update",value:function(t){var n=this.context.invoke("editor.currentStyle");if(!n.range||n.range.isCollapsed()&&!t)this.hide();else{var o={left:this.pageX,top:this.pageY},i=e()(this.options.container).offset();o.top-=i.top,o.left-=i.left,this.$popover.css({display:"block",left:Math.max(o.left,0)+-5,top:o.top+5}),this.context.invoke("buttons.updateCurrentStyle",this.$popover)}}},{key:"updateCodeview",value:function(t){this.ui.toggleBtnActive(this.$popover.find(".btn-codeview"),t),t&&this.hide()}},{key:"hide",value:function(){this.hidable&&this.$popover.hide()}}])&&Ce(n.prototype,o),i&&Ce(n,i),t}();function Se(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var Te=function(){function t(n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=n,this.ui=e().summernote.ui,this.$editable=n.layoutInfo.editable,this.options=n.options,this.hint=this.options.hint||[],this.direction=this.options.hintDirection||"bottom",this.hints=Array.isArray(this.hint)?this.hint:[this.hint],this.events={"summernote.keyup":function(t,e){e.isDefaultPrevented()||o.handleKeyup(e)},"summernote.keydown":function(t,e){o.handleKeydown(e)},"summernote.disable summernote.dialog.shown summernote.blur":function(){o.hide()}}}var n,o,i;return n=t,o=[{key:"shouldInitialize",value:function(){return this.hints.length>0}},{key:"initialize",value:function(){var t=this;this.lastWordRange=null,this.matchingWord=null,this.$popover=this.ui.popover({className:"note-hint-popover",hideArrow:!0,direction:""}).render().appendTo(this.options.container),this.$popover.hide(),this.$content=this.$popover.find(".popover-content,.note-popover-content"),this.$content.on("click",".note-hint-item",(function(n){t.$content.find(".active").removeClass("active"),e()(n.currentTarget).addClass("active"),t.replace()})),this.$popover.on("mousedown",(function(t){t.preventDefault()}))}},{key:"destroy",value:function(){this.$popover.remove()}},{key:"selectItem",value:function(t){this.$content.find(".active").removeClass("active"),t.addClass("active"),this.$content[0].scrollTop=t[0].offsetTop-this.$content.innerHeight()/2}},{key:"moveDown",value:function(){var t=this.$content.find(".note-hint-item.active"),e=t.next();if(e.length)this.selectItem(e);else{var n=t.parent().next();n.length||(n=this.$content.find(".note-hint-group").first()),this.selectItem(n.find(".note-hint-item").first())}}},{key:"moveUp",value:function(){var t=this.$content.find(".note-hint-item.active"),e=t.prev();if(e.length)this.selectItem(e);else{var n=t.parent().prev();n.length||(n=this.$content.find(".note-hint-group").last()),this.selectItem(n.find(".note-hint-item").last())}}},{key:"replace",value:function(){var t=this.$content.find(".note-hint-item.active");if(t.length){var n=this.nodeFromItem(t);if(null!==this.matchingWord&&0===this.matchingWord.length)this.lastWordRange.so=this.lastWordRange.eo;else if(null!==this.matchingWord&&this.matchingWord.length>0&&!this.lastWordRange.isCollapsed()){var o=this.lastWordRange.eo-this.lastWordRange.so-this.matchingWord.length;o>0&&(this.lastWordRange.so+=o)}if(this.lastWordRange.insertNode(n),"next"===this.options.hintSelect){var i=document.createTextNode("");e()(n).after(i),yt.createFromNodeBefore(i).select()}else yt.createFromNodeAfter(n).select();this.lastWordRange=null,this.hide(),this.context.invoke("editor.focus"),this.context.triggerEvent("change",this.$editable.html(),this.$editable)}}},{key:"nodeFromItem",value:function(t){var e=this.hints[t.data("index")],n=t.data("item"),o=e.content?e.content(n):n;return"string"==typeof o&&(o=ht.createText(o)),o}},{key:"createItemTemplates",value:function(t,n){var o=this.hints[t];return n.map((function(n){var i=e()('<div class="note-hint-item"></div>');return i.append(o.template?o.template(n):n+""),i.data({index:t,item:n}),i}))}},{key:"handleKeydown",value:function(t){this.$popover.is(":visible")&&(t.keyCode===wt.code.ENTER?(t.preventDefault(),this.replace()):t.keyCode===wt.code.UP?(t.preventDefault(),this.moveUp()):t.keyCode===wt.code.DOWN&&(t.preventDefault(),this.moveDown()))}},{key:"searchKeyword",value:function(t,e,n){var o=this.hints[t];if(o&&o.match.test(e)&&o.search){var i=o.match.exec(e);this.matchingWord=i[0],o.search(i[1],n)}else n()}},{key:"createGroup",value:function(t,n){var o=this,i=e()('<div class="note-hint-group note-hint-group-'+t+'"></div>');return this.searchKeyword(t,n,(function(e){(e=e||[]).length&&(i.html(o.createItemTemplates(t,e)),o.show())})),i}},{key:"handleKeyup",value:function(t){var n=this;if(!k.contains([wt.code.ENTER,wt.code.UP,wt.code.DOWN],t.keyCode)){var o,i,r=this.context.invoke("editor.getLastRange");if("words"===this.options.hintMode){if(o=r.getWordsRange(r),i=o.toString(),this.hints.forEach((function(t){if(t.match.test(i))return o=r.getWordsMatchRange(t.match),!1})),!o)return void this.hide();i=o.toString()}else o=r.getWordRange(),i=o.toString();if(this.hints.length&&i){this.$content.empty();var a=m.rect2bnd(k.last(o.getClientRects())),s=e()(this.options.container).offset();a&&(a.top-=s.top,a.left-=s.left,this.$popover.hide(),this.lastWordRange=o,this.hints.forEach((function(t,e){t.match.test(i)&&n.createGroup(e,i).appendTo(n.$content)})),this.$content.find(".note-hint-item:first").addClass("active"),"top"===this.direction?this.$popover.css({left:a.left,top:a.top-this.$popover.outerHeight()-5}):this.$popover.css({left:a.left,top:a.top+a.height+5}))}else this.hide()}}},{key:"show",value:function(){this.$popover.show()}},{key:"hide",value:function(){this.$popover.hide()}}],o&&Se(n.prototype,o),i&&Se(n,i),t}();function Ee(t){return Ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ee(t)}function Ie(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}e().summernote=e().extend(e().summernote,{version:"0.8.20",plugins:{},dom:ht,range:yt,lists:k,options:{langInfo:e().summernote.lang["en-US"],editing:!0,modules:{editor:Ft,clipboard:Ht,dropzone:Bt,codeview:jt,statusbar:Kt,fullscreen:qt,handle:Gt,hintPopover:Te,autoLink:Qt,autoSync:Jt,autoReplace:ee,placeholder:oe,buttons:re,toolbar:se,linkDialog:ce,linkPopover:de,imageDialog:fe,imagePopover:me,tablePopover:ge,videoDialog:ye,helpDialog:we,airPopover:xe},buttons:{},lang:"en-US",followingToolbar:!1,toolbarPosition:"top",otherStaticBar:"",codeviewKeepButton:!1,toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["fontname",["fontname"]],["color",["color"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video"]],["view",["fullscreen","codeview","help"]]],popatmouse:!0,popover:{image:[["resize",["resizeFull","resizeHalf","resizeQuarter","resizeNone"]],["float",["floatLeft","floatRight","floatNone"]],["remove",["removeMedia"]]],link:[["link",["linkDialogShow","unlink"]]],table:[["add",["addRowDown","addRowUp","addColLeft","addColRight"]],["delete",["deleteRow","deleteCol","deleteTable"]]],air:[["color",["color"]],["font",["bold","underline","clear"]],["para",["ul","paragraph"]],["table",["table"]],["insert",["link","picture"]],["view",["fullscreen","codeview"]]]},airMode:!1,overrideContextMenu:!1,width:null,height:null,linkTargetBlank:!0,useProtocol:!0,defaultProtocol:"http://",focus:!1,tabDisabled:!1,tabSize:4,styleWithCSS:!1,shortcuts:!0,textareaAutoSync:!0,tooltip:"auto",container:null,maxTextLength:0,blockquoteBreakingLevel:2,spellCheck:!0,disableGrammar:!1,placeholder:null,inheritPlaceholder:!1,recordEveryKeystroke:!1,historyLimit:200,showDomainOnlyForAutolink:!1,hintMode:"word",hintSelect:"after",hintDirection:"bottom",styleTags:["p","blockquote","pre","h1","h2","h3","h4","h5","h6"],fontNames:["Arial","Arial Black","Comic Sans MS","Courier New","Helvetica Neue","Helvetica","Impact","Lucida Grande","Tahoma","Times New Roman","Verdana"],fontNamesIgnoreCheck:[],addDefaultFonts:!0,fontSizes:["8","9","10","11","12","14","18","24","36"],fontSizeUnits:["px","pt"],colors:[["#000000","#424242","#636363","#9C9C94","#CEC6CE","#EFEFEF","#F7F7F7","#FFFFFF"],["#FF0000","#FF9C00","#FFFF00","#00FF00","#00FFFF","#0000FF","#9C00FF","#FF00FF"],["#F7C6CE","#FFE7CE","#FFEFC6","#D6EFD6","#CEDEE7","#CEE7F7","#D6D6E7","#E7D6DE"],["#E79C9C","#FFC69C","#FFE79C","#B5D6A5","#A5C6CE","#9CC6EF","#B5A5D6","#D6A5BD"],["#E76363","#F7AD6B","#FFD663","#94BD7B","#73A5AD","#6BADDE","#8C7BC6","#C67BA5"],["#CE0000","#E79439","#EFC631","#6BA54A","#4A7B8C","#3984C6","#634AA5","#A54A7B"],["#9C0000","#B56308","#BD9400","#397B21","#104A5A","#085294","#311873","#731842"],["#630000","#7B3900","#846300","#295218","#083139","#003163","#21104A","#4A1031"]],colorsName:[["Black","Tundora","Dove Gray","Star Dust","Pale Slate","Gallery","Alabaster","White"],["Red","Orange Peel","Yellow","Green","Cyan","Blue","Electric Violet","Magenta"],["Azalea","Karry","Egg White","Zanah","Botticelli","Tropical Blue","Mischka","Twilight"],["Tonys Pink","Peach Orange","Cream Brulee","Sprout","Casper","Perano","Cold Purple","Careys Pink"],["Mandy","Rajah","Dandelion","Olivine","Gulf Stream","Viking","Blue Marguerite","Puce"],["Guardsman Red","Fire Bush","Golden Dream","Chelsea Cucumber","Smalt Blue","Boston Blue","Butterfly Bush","Cadillac"],["Sangria","Mai Tai","Buddha Gold","Forest Green","Eden","Venice Blue","Meteorite","Claret"],["Rosewood","Cinnamon","Olive","Parsley","Tiber","Midnight Blue","Valentino","Loulou"]],colorButton:{foreColor:"#000000",backColor:"#FFFF00"},lineHeights:["1.0","1.2","1.4","1.5","1.6","1.8","2.0","3.0"],tableClassName:"table table-bordered",insertTableMaxSize:{col:10,row:10},dialogsInBody:!1,dialogsFade:!1,maximumImageFileSize:null,acceptImageFileTypes:"image/*",callbacks:{onBeforeCommand:null,onBlur:null,onBlurCodeview:null,onChange:null,onChangeCodeview:null,onDialogShown:null,onEnter:null,onFocus:null,onImageLinkInsert:null,onImageUpload:null,onImageUploadError:null,onInit:null,onKeydown:null,onKeyup:null,onMousedown:null,onMouseup:null,onPaste:null,onScroll:null},codemirror:{mode:"text/html",htmlMode:!0,lineNumbers:!0},codeviewFilter:!0,codeviewFilterRegex:/<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml)[^>]*?>/gi,codeviewIframeFilter:!0,codeviewIframeWhitelistSrc:[],codeviewIframeWhitelistSrcBase:["www.youtube.com","www.youtube-nocookie.com","www.facebook.com","vine.co","instagram.com","player.vimeo.com","www.dailymotion.com","player.youku.com","jumpingbean.tv","v.qq.com"],keyMap:{pc:{ESC:"escape",ENTER:"insertParagraph","CTRL+Z":"undo","CTRL+Y":"redo",TAB:"tab","SHIFT+TAB":"untab","CTRL+B":"bold","CTRL+I":"italic","CTRL+U":"underline","CTRL+SHIFT+S":"strikethrough","CTRL+BACKSLASH":"removeFormat","CTRL+SHIFT+L":"justifyLeft","CTRL+SHIFT+E":"justifyCenter","CTRL+SHIFT+R":"justifyRight","CTRL+SHIFT+J":"justifyFull","CTRL+SHIFT+NUM7":"insertUnorderedList","CTRL+SHIFT+NUM8":"insertOrderedList","CTRL+LEFTBRACKET":"outdent","CTRL+RIGHTBRACKET":"indent","CTRL+NUM0":"formatPara","CTRL+NUM1":"formatH1","CTRL+NUM2":"formatH2","CTRL+NUM3":"formatH3","CTRL+NUM4":"formatH4","CTRL+NUM5":"formatH5","CTRL+NUM6":"formatH6","CTRL+ENTER":"insertHorizontalRule","CTRL+K":"linkDialog.show"},mac:{ESC:"escape",ENTER:"insertParagraph","CMD+Z":"undo","CMD+SHIFT+Z":"redo",TAB:"tab","SHIFT+TAB":"untab","CMD+B":"bold","CMD+I":"italic","CMD+U":"underline","CMD+SHIFT+S":"strikethrough","CMD+BACKSLASH":"removeFormat","CMD+SHIFT+L":"justifyLeft","CMD+SHIFT+E":"justifyCenter","CMD+SHIFT+R":"justifyRight","CMD+SHIFT+J":"justifyFull","CMD+SHIFT+NUM7":"insertUnorderedList","CMD+SHIFT+NUM8":"insertOrderedList","CMD+LEFTBRACKET":"outdent","CMD+RIGHTBRACKET":"indent","CMD+NUM0":"formatPara","CMD+NUM1":"formatH1","CMD+NUM2":"formatH2","CMD+NUM3":"formatH3","CMD+NUM4":"formatH4","CMD+NUM5":"formatH5","CMD+NUM6":"formatH6","CMD+ENTER":"insertHorizontalRule","CMD+K":"linkDialog.show"}},icons:{align:"note-icon-align",alignCenter:"note-icon-align-center",alignJustify:"note-icon-align-justify",alignLeft:"note-icon-align-left",alignRight:"note-icon-align-right",rowBelow:"note-icon-row-below",colBefore:"note-icon-col-before",colAfter:"note-icon-col-after",rowAbove:"note-icon-row-above",rowRemove:"note-icon-row-remove",colRemove:"note-icon-col-remove",indent:"note-icon-align-indent",outdent:"note-icon-align-outdent",arrowsAlt:"note-icon-arrows-alt",bold:"note-icon-bold",caret:"note-icon-caret",circle:"note-icon-circle",close:"note-icon-close",code:"note-icon-code",eraser:"note-icon-eraser",floatLeft:"note-icon-float-left",floatRight:"note-icon-float-right",font:"note-icon-font",frame:"note-icon-frame",italic:"note-icon-italic",link:"note-icon-link",unlink:"note-icon-chain-broken",magic:"note-icon-magic",menuCheck:"note-icon-menu-check",minus:"note-icon-minus",orderedlist:"note-icon-orderedlist",pencil:"note-icon-pencil",picture:"note-icon-picture",question:"note-icon-question",redo:"note-icon-redo",rollback:"note-icon-rollback",square:"note-icon-square",strikethrough:"note-icon-strikethrough",subscript:"note-icon-subscript",superscript:"note-icon-superscript",table:"note-icon-table",textHeight:"note-icon-text-height",trash:"note-icon-trash",underline:"note-icon-underline",undo:"note-icon-undo",unorderedlist:"note-icon-unorderedlist",video:"note-icon-video"}}});var $e=function(){function t(e,n,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.markup=e,this.children=n,this.options=o,this.callback=i}var n,o,i;return n=t,(o=[{key:"render",value:function(t){var n=e()(this.markup);if(this.options&&this.options.contents&&n.html(this.options.contents),this.options&&this.options.className&&n.addClass(this.options.className),this.options&&this.options.data&&e().each(this.options.data,(function(t,e){n.attr("data-"+t,e)})),this.options&&this.options.click&&n.on("click",this.options.click),this.children){var o=n.find(".note-children-container");this.children.forEach((function(t){t.render(o.length?o:n)}))}return this.callback&&this.callback(n,this.options),this.options&&this.options.callback&&this.options.callback(n),t&&t.append(n),n}}])&&Ie(n.prototype,o),i&&Ie(n,i),t}();const Ne=function(t,e){return function(){var n="object"===Ee(arguments[1])?arguments[1]:arguments[0],o=Array.isArray(arguments[0])?arguments[0]:[];return n&&n.children&&(o=n.children),new $e(t,o,n,e)}};function Pe(t){return Pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pe(t)}var Re=Ne('<div class="note-editor note-frame card"></div>'),Le=Ne('<div class="note-toolbar card-header" role="toolbar"></div>'),Ae=Ne('<div class="note-editing-area"></div>'),Fe=Ne('<textarea class="note-codable" aria-multiline="true"></textarea>'),De=Ne('<div class="note-editable card-block" contentEditable="true" role="textbox" aria-multiline="true"></div>'),He=Ne(['<output class="note-status-output" role="status" aria-live="polite"></output>','<div class="note-statusbar" role="status">','<div class="note-resizebar" aria-label="Resize">','<div class="note-icon-bar"></div>','<div class="note-icon-bar"></div>','<div class="note-icon-bar"></div>',"</div>","</div>"].join("")),ze=Ne('<div class="note-editor note-airframe"></div>'),Be=Ne(['<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"></div>','<output class="note-status-output" role="status" aria-live="polite"></output>'].join("")),Me=Ne('<div class="note-btn-group btn-group"></div>'),Oe=Ne('<div class="note-dropdown-menu dropdown-menu" role="list"></div>',(function(t,e){var n=Array.isArray(e.items)?e.items.map((function(t){var n="string"==typeof t?t:t.value||"",o=e.template?e.template(t):t,i="object"===Pe(t)?t.option:void 0;return'<a class="dropdown-item" href="#" '+('data-value="'+n+'"'+(void 0!==i?' data-option="'+i+'"':""))+' role="listitem" aria-label="'+n+'">'+o+"</a>"})).join(""):e.items;t.html(n).attr({"aria-label":e.title}),e&&e.codeviewKeepButton&&t.addClass("note-codeview-keep")})),Ue=function(t){return t},je=Ne('<div class="note-dropdown-menu dropdown-menu note-check" role="list"></div>',(function(t,e){var n=Array.isArray(e.items)?e.items.map((function(t){var n="string"==typeof t?t:t.value||"",o=e.template?e.template(t):t;return'<a class="dropdown-item" href="#" data-value="'+n+'" role="listitem" aria-label="'+t+'">'+qe(e.checkClassName)+" "+o+"</a>"})).join(""):e.items;t.html(n).attr({"aria-label":e.title}),e&&e.codeviewKeepButton&&t.addClass("note-codeview-keep")})),We=Ne('<div class="modal note-modal" aria-hidden="false" tabindex="-1" role="dialog"></div>',(function(t,e){e.fade&&t.addClass("fade"),t.attr({"aria-label":e.title}),t.html(['<div class="modal-dialog">','<div class="modal-content">',e.title?'<div class="modal-header"><h4 class="modal-title">'+e.title+'</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button></div>':"",'<div class="modal-body">'+e.body+"</div>",e.footer?'<div class="modal-footer">'+e.footer+"</div>":"","</div>","</div>"].join(""))})),Ke=Ne(['<div class="note-popover popover in">','<div class="arrow"></div>','<div class="popover-content note-children-container"></div>',"</div>"].join(""),(function(t,e){var n=void 0!==e.direction?e.direction:"bottom";t.addClass(n),e.hideArrow&&t.find(".arrow").hide()})),Ve=Ne('<div class="form-check"></div>',(function(t,e){t.html(['<label class="form-check-label"'+(e.id?' for="note-'+e.id+'"':"")+">",'<input type="checkbox" class="form-check-input"'+(e.id?' id="note-'+e.id+'"':""),e.checked?" checked":"",' aria-label="'+(e.text?e.text:"")+'"',' aria-checked="'+(e.checked?"true":"false")+'"/>'," "+(e.text?e.text:"")+"</label>"].join(""))})),qe=function(t,e){return t.match(/^</)?t:"<"+(e=e||"i")+' class="'+t+'"></'+e+">"};e().summernote=e().extend(e().summernote,{ui_template:function(t){return{editor:Re,toolbar:Le,editingArea:Ae,codable:Fe,editable:De,statusbar:He,airEditor:ze,airEditable:Be,buttonGroup:Me,dropdown:Oe,dropdownButtonContents:Ue,dropdownCheck:je,dialog:We,popover:Ke,icon:qe,checkbox:Ve,options:t,palette:function(e,n){return Ne('<div class="note-color-palette"></div>',(function(e,n){for(var o=[],i=0,r=n.colors.length;i<r;i++){for(var a=n.eventName,s=n.colors[i],l=n.colorsName[i],c=[],u=0,d=s.length;u<d;u++){var h=s[u],f=l[u];c.push(['<button type="button" class="note-color-btn"','style="background-color:',h,'" ','data-event="',a,'" ','data-value="',h,'" ','title="',f,'" ','aria-label="',f,'" ','data-toggle="button" tabindex="-1"></button>'].join(""))}o.push('<div class="note-color-row">'+c.join("")+"</div>")}e.html(o.join("")),n.tooltip&&e.find(".note-color-btn").tooltip({container:n.container||t.container,trigger:"hover",placement:"bottom"})}))(e,n)},button:function(n,o){return Ne('<button type="button" class="note-btn btn btn-light btn-sm" tabindex="-1"></button>',(function(n,o){o&&o.tooltip&&n.attr({title:o.tooltip,"aria-label":o.tooltip}).tooltip({container:o.container||t.container,trigger:"hover",placement:"bottom"}).on("click",(function(t){e()(t.currentTarget).tooltip("hide")})),o&&o.codeviewButton&&n.addClass("note-codeview-keep")}))(n,o)},toggleBtn:function(t,e){t.toggleClass("disabled",!e),t.attr("disabled",!e)},toggleBtnActive:function(t,e){t.toggleClass("active",e)},onDialogShown:function(t,e){t.one("shown.bs.modal",e)},onDialogHidden:function(t,e){t.one("hidden.bs.modal",e)},showDialog:function(t){t.modal("show")},hideDialog:function(t){t.modal("hide")},createLayout:function(e){var n=(t.airMode?ze([Ae([Fe(),Be()])]):"bottom"===t.toolbarPosition?Re([Ae([Fe(),De()]),Le(),He()]):Re([Le(),Ae([Fe(),De()]),He()])).render();return n.insertAfter(e),{note:e,editor:n,toolbar:n.find(".note-toolbar"),editingArea:n.find(".note-editing-area"),editable:n.find(".note-editable"),codable:n.find(".note-codable"),statusbar:n.find(".note-statusbar")}},removeLayout:function(t,e){t.html(e.editable.html()),e.editor.remove(),t.show()}}},interface:"bs4"}),e().summernote.options.styleTags=["p",{title:"Blockquote",tag:"blockquote",className:"blockquote",value:"blockquote"},"pre","h1","h2","h3","h4","h5","h6"]})(),i})()}));
/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.13.0
 *
 * Copyright KingSora | Rene Haas.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 02.08.2020
 */
!function(t,r){"function"==typeof define&&define.amd?define(["jquery"],function(n){return r(t,t.document,undefined,n)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=r(t,t.document,undefined,require("jquery")):r(t,t.document,undefined,t.jQuery)}("undefined"!=typeof window?window:this,function(vi,di,hi,n){"use strict";var o,l,f,a,pi="object",bi="function",yi="array",mi="string",gi="boolean",wi="number",t="null",xi={c:"class",s:"style",i:"id",l:"length",p:"prototype",ti:"tabindex",oH:"offsetHeight",cH:"clientHeight",sH:"scrollHeight",oW:"offsetWidth",cW:"clientWidth",sW:"scrollWidth",hOP:"hasOwnProperty",bCR:"getBoundingClientRect"},_i=(o={},l={},{e:f=["-webkit-","-moz-","-o-","-ms-"],o:a=["WebKit","Moz","O","MS"],u:function(n){var t=l[n];if(l[xi.hOP](n))return t;for(var r,e,i,o=c(n),a=di.createElement("div")[xi.s],u=0;u<f.length;u++)for(i=f[u].replace(/-/g,""),r=[n,f[u]+n,i+o,c(i)+o],e=0;e<r[xi.l];e++)if(a[r[e]]!==hi){t=r[e];break}return l[n]=t},v:function(n,t,r){var e=n+" "+t,i=l[e];if(l[xi.hOP](e))return i;for(var o,a=di.createElement("div")[xi.s],u=t.split(" "),f=r||"",c=0,s=-1;c<u[xi.l];c++)for(;s<_i.e[xi.l];s++)if(o=s<0?u[c]:_i.e[s]+u[c],a.cssText=n+":"+o+f,a[xi.l]){i=o;break}return l[e]=i},d:function(n,t,r){var e=0,i=o[n];if(!o[xi.hOP](n)){for(i=vi[n];e<a[xi.l];e++)i=i||vi[(t?a[e]:a[e].toLowerCase())+c(n)];o[n]=i}return i||r}});function c(n){return n.charAt(0).toUpperCase()+n.slice(1)}var Si={wW:e(r,0,!0),wH:e(r,0),mO:e(_i.d,0,"MutationObserver",!0),rO:e(_i.d,0,"ResizeObserver",!0),rAF:e(_i.d,0,"requestAnimationFrame",!1,function(n){return vi.setTimeout(n,1e3/60)}),cAF:e(_i.d,0,"cancelAnimationFrame",!1,function(n){return vi.clearTimeout(n)}),now:function(){return Date.now&&Date.now()||(new Date).getTime()},stpP:function(n){n.stopPropagation?n.stopPropagation():n.cancelBubble=!0},prvD:function(n){n.preventDefault&&n.cancelable?n.preventDefault():n.returnValue=!1},page:function(n){var t=((n=n.originalEvent||n).target||n.srcElement||di).ownerDocument||di,r=t.documentElement,e=t.body;if(n.touches===hi)return!n.pageX&&n.clientX&&null!=n.clientX?{x:n.clientX+(r&&r.scrollLeft||e&&e.scrollLeft||0)-(r&&r.clientLeft||e&&e.clientLeft||0),y:n.clientY+(r&&r.scrollTop||e&&e.scrollTop||0)-(r&&r.clientTop||e&&e.clientTop||0)}:{x:n.pageX,y:n.pageY};var i=n.touches[0];return{x:i.pageX,y:i.pageY}},mBtn:function(n){var t=n.button;return n.which||t===hi?n.which:1&t?1:2&t?3:4&t?2:0},inA:function(n,t){for(var r=0;r<t[xi.l];r++)try{if(t[r]===n)return r}catch(e){}return-1},isA:function(n){var t=Array.isArray;return t?t(n):this.type(n)==yi},type:function(n){return n===hi||null===n?n+"":Object[xi.p].toString.call(n).replace(/^\[object (.+)\]$/,"$1").toLowerCase()},bind:e};function r(n){return n?vi.innerWidth||di.documentElement[xi.cW]||di.body[xi.cW]:vi.innerHeight||di.documentElement[xi.cH]||di.body[xi.cH]}function e(n,t){if(typeof n!=bi)throw"Can't bind function!";var r=xi.p,e=Array[r].slice.call(arguments,2),i=function(){},o=function(){return n.apply(this instanceof i?this:t,e.concat(Array[r].slice.call(arguments)))};return n[r]&&(i[r]=n[r]),o[r]=new i,o}var i,u,zi,s,v,L,N,d,h,p,b,y,m,g,Ti,Oi=Math,ki=n,Ci=(n.easing,n),Ai=(i=[],u="__overlayScrollbars__",function(n,t){var r=arguments[xi.l];if(r<1)return i;if(t)n[u]=t,i.push(n);else{var e=Si.inA(n,i);if(-1<e){if(!(1<r))return i[e][u];delete n[u],i.splice(e,1)}}}),w=(g=[],L=Si.type,y={className:["os-theme-dark",[t,mi]],resize:["none","n:none b:both h:horizontal v:vertical"],sizeAutoCapable:d=[!0,gi],clipAlways:d,normalizeRTL:d,paddingAbsolute:h=[!(N=[gi,wi,mi,yi,pi,bi,t]),gi],autoUpdate:[null,[t,gi]],autoUpdateInterval:[33,wi],updateOnLoad:[["img"],[mi,yi,t]],nativeScrollbarsOverlaid:{showNativeScrollbars:h,initialize:d},overflowBehavior:{x:["scroll",b="v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden"],y:["scroll",b]},scrollbars:{visibility:["auto","v:visible h:hidden a:auto"],autoHide:["never","n:never s:scroll l:leave m:move"],autoHideDelay:[800,wi],dragScrolling:d,clickScrolling:h,touchSupport:d,snapHandle:h},textarea:{dynWidth:h,dynHeight:h,inheritedAttrs:[["style","class"],[mi,yi,t]]},callbacks:{onInitialized:p=[null,[t,bi]],onInitializationWithdrawn:p,onDestroyed:p,onScrollStart:p,onScroll:p,onScrollStop:p,onOverflowChanged:p,onOverflowAmountChanged:p,onDirectionChanged:p,onContentSizeChanged:p,onHostSizeChanged:p,onUpdated:p}},Ti={m:(m=function(i){var o=function(n){var t,r,e;for(t in n)n[xi.hOP](t)&&(r=n[t],(e=L(r))==yi?n[t]=r[i?1:0]:e==pi&&(n[t]=o(r)));return n};return o(Ci.extend(!0,{},y))})(),g:m(!0),_:function(n,t,C,r){var e={},i={},o=Ci.extend(!0,{},n),A=Ci.inArray,H=Ci.isEmptyObject,R=function(n,t,r,e,i,o){for(var a in t)if(t[xi.hOP](a)&&n[xi.hOP](a)){var u,f,c,s,l,v,d,h,p=!1,b=!1,y=t[a],m=L(y),g=m==pi,w=Si.isA(y)?y:[y],x=r[a],_=n[a],S=L(_),z=o?o+".":"",T='The option "'+z+a+"\" wasn't set, because",O=[],k=[];if(x=x===hi?{}:x,g&&S==pi)e[a]={},i[a]={},R(_,y,x,e[a],i[a],z+a),Ci.each([n,e,i],function(n,t){H(t[a])&&delete t[a]});else if(!g){for(v=0;v<w[xi.l];v++)if(l=w[v],c=(m=L(l))==mi&&-1===A(l,N))for(O.push(mi),u=l.split(" "),k=k.concat(u),d=0;d<u[xi.l];d++){for(s=(f=u[d].split(":"))[0],h=0;h<f[xi.l];h++)if(_===f[h]){p=!0;break}if(p)break}else if(O.push(l),S===l){p=!0;break}p?((b=_!==x)&&(e[a]=_),(c?A(x,f)<0:b)&&(i[a]=c?s:_)):C&&console.warn(T+" it doesn't accept the type [ "+S.toUpperCase()+' ] with the value of "'+_+'".\r\nAccepted types are: [ '+O.join(", ").toUpperCase()+" ]."+(0<k[length]?"\r\nValid strings are: [ "+k.join(", ").split(":").join(", ")+" ].":"")),delete n[a]}}};return R(o,t,r||{},e,i),!H(o)&&C&&console.warn("The following options are discarded due to invalidity:\r\n"+vi.JSON.stringify(o,null,2)),{S:e,z:i}}},(zi=vi.OverlayScrollbars=function(n,r,e){if(0===arguments[xi.l])return this;var i,t,o=[],a=Ci.isPlainObject(r);return n?(n=n[xi.l]!=hi?n:[n[0]||n],x(),0<n[xi.l]&&(a?Ci.each(n,function(n,t){(i=t)!==hi&&o.push(z(i,r,e,s,v))}):Ci.each(n,function(n,t){i=Ai(t),("!"===r&&zi.valid(i)||Si.type(r)==bi&&r(t,i)||r===hi)&&o.push(i)}),t=1===o[xi.l]?o[0]:o),t):a||!r?t:o}).globals=function(){x();var n=Ci.extend(!0,{},s);return delete n.msie,n},zi.defaultOptions=function(n){x();var t=s.defaultOptions;if(n===hi)return Ci.extend(!0,{},t);s.defaultOptions=Ci.extend(!0,{},t,Ti._(n,Ti.g,!0,t).S)},zi.valid=function(n){return n instanceof zi&&!n.getState().destroyed},zi.extension=function(n,t,r){var e=Si.type(n)==mi,i=arguments[xi.l],o=0;if(i<1||!e)return Ci.extend(!0,{length:g[xi.l]},g);if(e)if(Si.type(t)==bi)g.push({name:n,extensionFactory:t,defaultOptions:r});else for(;o<g[xi.l];o++)if(g[o].name===n){if(!(1<i))return Ci.extend(!0,{},g[o]);g.splice(o,1)}},zi);function x(){s=s||new _(Ti.m),v=v||new S(s)}function _(n){var _=this,i="overflow",S=Ci("body"),z=Ci('<div id="os-dummy-scrollbar-size"><div></div></div>'),o=z[0],e=Ci(z.children("div").eq(0));S.append(z),z.hide().show();var t,r,a,u,f,c,s,l,v,d=T(o),h={x:0===d.x,y:0===d.y},p=(r=vi.navigator.userAgent,u="substring",f=r[a="indexOf"]("MSIE "),c=r[a]("Trident/"),s=r[a]("Edge/"),l=r[a]("rv:"),v=parseInt,0<f?t=v(r[u](f+5,r[a](".",f)),10):0<c?t=v(r[u](l+3,r[a](".",l)),10):0<s&&(t=v(r[u](s+5,r[a](".",s)),10)),t);function T(n){return{x:n[xi.oH]-n[xi.cH],y:n[xi.oW]-n[xi.cW]}}Ci.extend(_,{defaultOptions:n,msie:p,autoUpdateLoop:!1,autoUpdateRecommended:!Si.mO(),nativeScrollbarSize:d,nativeScrollbarIsOverlaid:h,nativeScrollbarStyling:function(){var n=!1;z.addClass("os-viewport-native-scrollbars-invisible");try{n="none"===z.css("scrollbar-width")&&(9<p||!p)||"none"===vi.getComputedStyle(o,"::-webkit-scrollbar").getPropertyValue("display")}catch(t){}return n}(),overlayScrollbarDummySize:{x:30,y:30},cssCalc:_i.v("width","calc","(1px)")||null,restrictedMeasuring:function(){z.css(i,"hidden");var n=o[xi.sW],t=o[xi.sH];z.css(i,"visible");var r=o[xi.sW],e=o[xi.sH];return n-r!=0||t-e!=0}(),rtlScrollBehavior:function(){z.css({"overflow-y":"hidden","overflow-x":"scroll",direction:"rtl"}).scrollLeft(0);var n=z.offset(),t=e.offset();z.scrollLeft(-999);var r=e.offset();return{i:n.left===t.left,n:t.left!==r.left}}(),supportTransform:!!_i.u("transform"),supportTransition:!!_i.u("transition"),supportPassiveEvents:function(){var n=!1;try{vi.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){n=!0}}))}catch(t){}return n}(),supportResizeObserver:!!Si.rO(),supportMutationObserver:!!Si.mO()}),z.removeAttr(xi.s).remove(),function(){if(!h.x||!h.y){var y=Oi.abs,m=Si.wW(),g=Si.wH(),w=x();Ci(vi).on("resize",function(){if(0<Ai().length){var n=Si.wW(),t=Si.wH(),r=n-m,e=t-g;if(0==r&&0==e)return;var i,o=Oi.round(n/(m/100)),a=Oi.round(t/(g/100)),u=y(r),f=y(e),c=y(o),s=y(a),l=x(),v=2<u&&2<f,d=!function b(n,t){var r=y(n),e=y(t);return r!==e&&r+1!==e&&r-1!==e}(c,s),h=v&&d&&(l!==w&&0<w),p=_.nativeScrollbarSize;h&&(S.append(z),i=_.nativeScrollbarSize=T(z[0]),z.remove(),p.x===i.x&&p.y===i.y||Ci.each(Ai(),function(){Ai(this)&&Ai(this).update("zoom")})),m=n,g=t,w=l}})}function x(){var n=vi.screen.deviceXDPI||0,t=vi.screen.logicalXDPI||1;return vi.devicePixelRatio||n/t}}()}function S(r){var c,e=Ci.inArray,s=Si.now,l="autoUpdate",v=xi.l,d=[],h=[],p=!1,b=33,y=s(),m=function(){if(0<d[v]&&p){c=Si.rAF()(function(){m()});var n,t,r,e,i,o,a=s(),u=a-y;if(b<u){y=a-u%b,n=33;for(var f=0;f<d[v];f++)(t=d[f])!==hi&&(e=(r=t.options())[l],i=Oi.max(1,r.autoUpdateInterval),o=s(),(!0===e||null===e)&&o-h[f]>i&&(t.update("auto"),h[f]=new Date(o+=i)),n=Oi.max(1,Oi.min(n,i)));b=n}}else b=33};this.add=function(n){-1===e(n,d)&&(d.push(n),h.push(s()),0<d[v]&&!p&&(p=!0,r.autoUpdateLoop=p,m()))},this.remove=function(n){var t=e(n,d);-1<t&&(h.splice(t,1),d.splice(t,1),0===d[v]&&p&&(p=!1,r.autoUpdateLoop=p,c!==hi&&(Si.cAF()(c),c=-1)))}}function z(r,n,t,xt,_t){var cn=Si.type,sn=Ci.inArray,d=Ci.each,St=new zi,e=Ci[xi.p];if(dt(r)){if(Ai(r)){var i=Ai(r);return i.options(n),i}var zt,Tt,Ot,kt,I,Ct,At,Ht,j,ln,g,A,h,Rt,Lt,Nt,Wt,w,p,Dt,Mt,Et,It,jt,Ft,Pt,Ut,Vt,$t,o,a,qt,Bt,Xt,u,F,c,P,Yt,Kt,Gt,Jt,Qt,Zt,nr,tr,rr,er,ir,f,s,l,v,b,y,x,H,or,ar,ur,R,fr,cr,sr,lr,vr,dr,hr,pr,br,yr,mr,gr,wr,xr,_r,L,Sr,zr,Tr,Or,kr,Cr,Ar,Hr,m,_,Rr,Lr,Nr,Wr,Dr,Mr,Er,Ir,jr,Fr,Pr,Ur,Vr,$r,S,z,T,O,qr,Br,k,C,Xr,Yr,Kr,Gr,Jr,U,V,Qr,Zr,ne,te,re={},vn={},dn={},ee={},ie={},N="-hidden",oe="margin-",ae="padding-",ue="border-",fe="top",ce="right",se="bottom",le="left",ve="min-",de="max-",he="width",pe="height",be="float",ye="",me="auto",hn="sync",ge="scroll",we="100%",pn="x",bn="y",W=".",xe=" ",D="scrollbar",M="-horizontal",E="-vertical",_e=ge+"Left",Se=ge+"Top",$="mousedown touchstart",q="mouseup touchend touchcancel",B="mousemove touchmove",X="mouseenter",Y="mouseleave",K="keydown",G="keyup",J="selectstart",Q="transitionend webkitTransitionEnd oTransitionEnd",Z="__overlayScrollbarsRO__",nn="os-",tn="os-html",rn="os-host",en=rn+"-foreign",on=rn+"-textarea",an=rn+"-"+D+M+N,un=rn+"-"+D+E+N,fn=rn+"-transition",ze=rn+"-rtl",Te=rn+"-resize-disabled",Oe=rn+"-scrolling",ke=rn+"-overflow",Ce=(ke=rn+"-overflow")+"-x",Ae=ke+"-y",yn="os-textarea",mn=yn+"-cover",gn="os-padding",wn="os-viewport",He=wn+"-native-scrollbars-invisible",xn=wn+"-native-scrollbars-overlaid",_n="os-content",Re="os-content-arrange",Le="os-content-glue",Ne="os-size-auto-observer",Sn="os-resize-observer",zn="os-resize-observer-item",Tn=zn+"-final",On="os-text-inherit",kn=nn+D,Cn=kn+"-track",An=Cn+"-off",Hn=kn+"-handle",Rn=Hn+"-off",Ln=kn+"-unusable",Nn=kn+"-"+me+N,Wn=kn+"-corner",We=Wn+"-resize",De=We+"-both",Me=We+M,Ee=We+E,Dn=kn+M,Mn=kn+E,En="os-dragging",Ie="os-theme-none",In=[He,xn,An,Rn,Ln,Nn,We,De,Me,Ee,En].join(xe),jn=[],Fn=[xi.ti],Pn={},je={},Fe=42,Un="load",Vn=[],$n={},qn=["wrap","cols","rows"],Bn=[xi.i,xi.c,xi.s,"open"].concat(Fn),Xn=[];return St.sleep=function(){$t=!0},St.update=function(n){var t,r,e,i,o;if(!Lt)return cn(n)==mi?n===me?(t=function a(){if(!$t&&!qr){var r,e,i,o=[],n=[{T:Kt,O:Bn.concat(":visible")},{T:Nt?Yt:hi,O:qn}];return d(n,function(n,t){(r=t.T)&&d(t.O,function(n,t){e=":"===t.charAt(0)?r.is(t):r.attr(t),i=$n[t],ui(e,i)&&o.push(t),$n[t]=e})}),it(o),0<o[xi.l]}}(),r=function f(){if($t)return!1;var n,t,r,e,i=oi(),o=Nt&&br&&!jr?Yt.val().length:0,a=!qr&&br&&!Nt,u={};return a&&(n=nr.css(be),u[be]=Vt?ce:le,u[he]=me,nr.css(u)),e={w:i[xi.sW]+o,h:i[xi.sH]+o},a&&(u[be]=n,u[he]=we,nr.css(u)),t=qe(),r=ui(e,m),m=e,r||t}(),(e=t||r)&&Xe({k:r,C:Rt?hi:qt})):n===hn?qr?(i=T(S.takeRecords()),o=O(z.takeRecords())):i=St.update(me):"zoom"===n&&Xe({A:!0,k:!0}):(n=$t||n,$t=!1,St.update(hn)&&!n||Xe({H:n})),Ye(),e||i||o},St.options=function(n,t){var r,e={};if(Ci.isEmptyObject(n)||!Ci.isPlainObject(n)){if(cn(n)!=mi)return a;if(!(1<arguments.length))return bt(a,n);!function f(n,t,r){for(var e=t.split(W),i=e.length,o=0,a={},u=a;o<i;o++)a=a[e[o]]=o+1<i?{}:r;Ci.extend(n,u,!0)}(e,n,t),r=ot(e)}else r=ot(n);Ci.isEmptyObject(r)||Xe({C:r})},St.destroy=function(){if(!Lt){for(var n in _t.remove(St),Ve(),Pe(Jt),Pe(Gt),Pn)St.removeExt(n);for(;0<Xn[xi.l];)Xn.pop()();$e(!0),rr&&mt(rr),tr&&mt(tr),Mt&&mt(Gt),ft(!0),st(!0),at(!0);for(var t=0;t<Vn[xi.l];t++)Ci(Vn[t]).off(Un,rt);Vn=hi,$t=Lt=!0,Ai(r,0),ti("onDestroyed")}},St.scroll=function(n,t,r,e){if(0===arguments.length||n===hi){var i=Mr&&Vt&&Ot.i,o=Mr&&Vt&&Ot.n,a=vn.R,u=vn.L,f=vn.N;return u=i?1-u:u,a=i?f-a:a,f*=o?-1:1,{position:{x:a*=o?-1:1,y:dn.R},ratio:{x:u,y:dn.L},max:{x:f,y:dn.N},handleOffset:{x:vn.W,y:dn.W},handleLength:{x:vn.D,y:dn.D},handleLengthRatio:{x:vn.M,y:dn.M},trackLength:{x:vn.I,y:dn.I},snappedHandleOffset:{x:vn.j,y:dn.j},isRTL:Vt,isRTLNormalized:Mr}}St.update(hn);var c,s,l,v,d,m,g,h,p,w=Mr,b=[pn,le,"l"],y=[bn,fe,"t"],x=["+=","-=","*=","/="],_=cn(t)==pi,S=_?t.complete:e,z={},T={},O="begin",k="nearest",C="never",A="ifneeded",H=xi.l,R=[pn,bn,"xy","yx"],L=[O,"end","center",k],N=["always",C,A],W=n[xi.hOP]("el"),D=W?n.el:n,M=!!(D instanceof Ci||ki)&&D instanceof ki,E=!M&&dt(D),I=function(){s&&Qe(!0),l&&Qe(!1)},j=cn(S)!=bi?hi:function(){I(),S()};function F(n,t){for(c=0;c<t[H];c++)if(n===t[c])return 1}function P(n,t){var r=n?b:y;if(t=cn(t)==mi||cn(t)==wi?[t,t]:t,Si.isA(t))return n?t[0]:t[1];if(cn(t)==pi)for(c=0;c<r[H];c++)if(r[c]in t)return t[r[c]]}function U(n,t){var r,e,i,o,a=cn(t)==mi,u=n?vn:dn,f=u.R,c=u.N,s=Vt&&n,l=s&&Ot.n&&!w,v="replace",d=eval;if((e=a?(2<t[H]&&(o=t.substr(0,2),-1<sn(o,x)&&(r=o)),t=(t=r?t.substr(2):t)[v](/min/g,0)[v](/</g,0)[v](/max/g,(l?"-":ye)+we)[v](/>/g,(l?"-":ye)+we)[v](/px/g,ye)[v](/%/g," * "+c*(s&&Ot.n?-1:1)/100)[v](/vw/g," * "+ee.w)[v](/vh/g," * "+ee.h),ii(isNaN(t)?ii(d(t),!0).toFixed():t)):t)!==hi&&!isNaN(e)&&cn(e)==wi){var h=w&&s,p=f*(h&&Ot.n?-1:1),b=h&&Ot.i,y=h&&Ot.n;switch(p=b?c-p:p,r){case"+=":i=p+e;break;case"-=":i=p-e;break;case"*=":i=p*e;break;case"/=":i=p/e;break;default:i=e}i=b?c-i:i,i*=y?-1:1,i=s&&Ot.n?Oi.min(0,Oi.max(c,i)):Oi.max(0,Oi.min(c,i))}return i===f?hi:i}function V(n,t,r,e){var i,o,a=[r,r],u=cn(n);if(u==t)n=[n,n];else if(u==yi){if(2<(i=n[H])||i<1)n=a;else for(1===i&&(n[1]=r),c=0;c<i;c++)if(o=n[c],cn(o)!=t||!F(o,e)){n=a;break}}else n=u==pi?[n[pn]||r,n[bn]||r]:a;return{x:n[0],y:n[1]}}function $(n){var t,r,e=[],i=[fe,ce,se,le];for(c=0;c<n[H]&&c!==i[H];c++)t=n[c],(r=cn(t))==gi?e.push(t?ii(p.css(oe+i[c])):0):e.push(r==wi?t:0);return e}if(M||E){var q,B=W?n.margin:0,X=W?n.axis:0,Y=W?n.scroll:0,K=W?n.block:0,G=[0,0,0,0],J=cn(B);if(0<(p=M?D:Ci(D))[H]){B=J==wi||J==gi?$([B,B,B,B]):J==yi?2===(q=B[H])?$([B[0],B[1],B[0],B[1]]):4<=q?$(B):G:J==pi?$([B[fe],B[ce],B[se],B[le]]):G,d=F(X,R)?X:"xy",m=V(Y,mi,"always",N),g=V(K,mi,O,L),h=B;var Q=vn.R,Z=dn.R,nn=Qt.offset(),tn=p.offset(),rn={x:m.x==C||d==bn,y:m.y==C||d==pn};tn[fe]-=h[0],tn[le]-=h[3];var en={x:Oi.round(tn[le]-nn[le]+Q),y:Oi.round(tn[fe]-nn[fe]+Z)};if(Vt&&(Ot.n||Ot.i||(en.x=Oi.round(nn[le]-tn[le]+Q)),Ot.n&&w&&(en.x*=-1),Ot.i&&w&&(en.x=Oi.round(nn[le]-tn[le]+(vn.N-Q)))),g.x!=O||g.y!=O||m.x==A||m.y==A||Vt){var on=p[0],an=ln?on[xi.bCR]():{width:on[xi.oW],height:on[xi.oH]},un={w:an[he]+h[3]+h[1],h:an[pe]+h[0]+h[2]},fn=function(n){var t=ni(n),r=t.F,e=t.P,i=t.U,o=g[i]==(n&&Vt?O:"end"),a="center"==g[i],u=g[i]==k,f=m[i]==C,c=m[i]==A,s=ee[r],l=nn[e],v=un[r],d=tn[e],h=a?2:1,p=d+v/2,b=l+s/2,y=v<=s&&l<=d&&d+v<=l+s;f?rn[i]=!0:rn[i]||((u||c)&&(rn[i]=c&&y,o=v<s?b<p:p<b),en[i]-=o||a?(s/h-v/h)*(n&&Vt&&w?-1:1):0)};fn(!0),fn(!1)}rn.y&&delete en.y,rn.x&&delete en.x,n=en}}z[_e]=U(!0,P(!0,n)),z[Se]=U(!1,P(!1,n)),s=z[_e]!==hi,l=z[Se]!==hi,(s||l)&&(0<t||_)?_?(t.complete=j,Zt.animate(z,t)):(v={duration:t,complete:j},Si.isA(r)||Ci.isPlainObject(r)?(T[_e]=r[0]||r.x,T[Se]=r[1]||r.y,v.specialEasing=T):v.easing=r,Zt.animate(z,v)):(s&&Zt[_e](z[_e]),l&&Zt[Se](z[Se]),I())},St.scrollStop=function(n,t,r){return Zt.stop(n,t,r),St},St.getElements=function(n){var t={target:or,host:ar,padding:fr,viewport:cr,content:sr,scrollbarHorizontal:{scrollbar:f[0],track:s[0],handle:l[0]},scrollbarVertical:{scrollbar:v[0],track:b[0],handle:y[0]},scrollbarCorner:ir[0]};return cn(n)==mi?bt(t,n):t},St.getState=function(n){function t(n){if(!Ci.isPlainObject(n))return n;var r=fi({},n),t=function(n,t){r[xi.hOP](n)&&(r[t]=r[n],delete r[n])};return t("w",he),t("h",pe),delete r.c,r}var r={destroyed:!!t(Lt),sleeping:!!t($t),autoUpdate:t(!qr),widthAuto:t(br),heightAuto:t(yr),padding:t(gr),overflowAmount:t(kr),hideOverflow:t(pr),hasOverflow:t(hr),contentScrollSize:t(vr),viewportSize:t(ee),hostSize:t(lr),documentMixed:t(w)};return cn(n)==mi?bt(r,n):r},St.ext=function(n){var t,r="added removed on contract".split(" "),e=0;if(cn(n)==mi){if(Pn[xi.hOP](n))for(t=fi({},Pn[n]);e<r.length;e++)delete t[r[e]]}else for(e in t={},Pn)t[e]=fi({},St.ext(e));return t},St.addExt=function(n,t){var r,e,i,o,a=zi.extension(n),u=!0;if(a){if(Pn[xi.hOP](n))return St.ext(n);if((r=a.extensionFactory.call(St,fi({},a.defaultOptions),Ci,Si))&&(i=r.contract,cn(i)==bi&&(o=i(vi),u=cn(o)==gi?o:u),u))return e=(Pn[n]=r).added,cn(e)==bi&&e(t),St.ext(n)}else console.warn('A extension with the name "'+n+"\" isn't registered.")},St.removeExt=function(n){var t,r=Pn[n];return!!r&&(delete Pn[n],t=r.removed,cn(t)==bi&&t(),!0)},zi.valid(function wt(n,t,r){var e,i;return o=xt.defaultOptions,Ct=xt.nativeScrollbarStyling,Ht=fi({},xt.nativeScrollbarSize),zt=fi({},xt.nativeScrollbarIsOverlaid),Tt=fi({},xt.overlayScrollbarDummySize),Ot=fi({},xt.rtlScrollBehavior),ot(fi({},o,t)),At=xt.cssCalc,I=xt.msie,kt=xt.autoUpdateRecommended,j=xt.supportTransition,ln=xt.supportTransform,g=xt.supportPassiveEvents,A=xt.supportResizeObserver,h=xt.supportMutationObserver,xt.restrictedMeasuring,F=Ci(n.ownerDocument),H=F[0],u=Ci(H.defaultView||H.parentWindow),x=u[0],c=gt(F,"html"),P=gt(c,"body"),Yt=Ci(n),or=Yt[0],Nt=Yt.is("textarea"),Wt=Yt.is("body"),w=H!==di,p=Nt?Yt.hasClass(yn)&&Yt.parent().hasClass(_n):Yt.hasClass(rn)&&Yt.children(W+gn)[xi.l],zt.x&&zt.y&&!qt.nativeScrollbarsOverlaid.initialize?(ti("onInitializationWithdrawn"),p&&(at(!0),ft(!0),st(!0)),$t=Lt=!0):(Wt&&((e={}).l=Oi.max(Yt[_e](),c[_e](),u[_e]()),e.t=Oi.max(Yt[Se](),c[Se](),u[Se]()),i=function(){Zt.removeAttr(xi.ti),Yn(Zt,$,i,!0,!0)}),at(),ft(),st(),ut(),ct(!0),ct(!1),function s(){var r,t=x.top!==x,e={},i={},o={};function a(n){if(f(n)){var t=c(n),r={};(ne||Zr)&&(r[he]=i.w+(t.x-e.x)*o.x),(te||Zr)&&(r[pe]=i.h+(t.y-e.y)*o.y),Kt.css(r),Si.stpP(n)}else u(n)}function u(n){var t=n!==hi;Yn(F,[J,B,q],[tt,a,u],!0),si(P,En),ir.releaseCapture&&ir.releaseCapture(),t&&(r&&Ue(),St.update(me)),r=!1}function f(n){var t=(n.originalEvent||n).touches!==hi;return!$t&&!Lt&&(1===Si.mBtn(n)||t)}function c(n){return I&&t?{x:n.screenX,y:n.screenY}:Si.page(n)}Kn(ir,$,function(n){f(n)&&!Qr&&(qr&&(r=!0,Ve()),e=c(n),i.w=ar[xi.oW]-(Dt?0:Et),i.h=ar[xi.oH]-(Dt?0:It),o=vt(),Yn(F,[J,B,q],[tt,a,u]),ci(P,En),ir.setCapture&&ir.setCapture(),Si.prvD(n),Si.stpP(n))})}(),Gn(),Pe(Jt,Jn),Wt&&(Zt[_e](e.l)[Se](e.t),di.activeElement==n&&cr.focus&&(Zt.attr(xi.ti,"-1"),cr.focus(),Yn(Zt,$,i,!1,!0))),St.update(me),Rt=!0,ti("onInitialized"),d(jn,function(n,t){ti(t.n,t.a)}),jn=[],cn(r)==mi&&(r=[r]),Si.isA(r)?d(r,function(n,t){St.addExt(t)}):Ci.isPlainObject(r)&&d(r,function(n,t){St.addExt(n,t)}),setTimeout(function(){j&&!Lt&&ci(Kt,fn)},333)),St}(r,n,t))&&Ai(r,St),St}function Yn(n,t,r,e,i){var o=Si.isA(t)&&Si.isA(r),a=e?"removeEventListener":"addEventListener",u=e?"off":"on",f=!o&&t.split(xe),c=0,s=Ci.isPlainObject(i),l=g&&(s?i.V:i)||!1,v=s&&(i.$||!1),d=g?{passive:l,capture:v}:v;if(o)for(;c<t[xi.l];c++)Yn(n,t[c],r[c],e,i);else for(;c<f[xi.l];c++)g?n[0][a](f[c],r,d):n[u](f[c],r)}function Kn(n,t,r,e){Yn(n,t,r,!1,e),Xn.push(Si.bind(Yn,0,n,t,r,!0,e))}function Pe(n,t){if(n){var r=Si.rO(),e="animationstart mozAnimationStart webkitAnimationStart MSAnimationStart",i="childNodes",o=3333333,a=function(){n[Se](o)[_e](Vt?Ot.n?-o:Ot.i?0:o:o),t()};if(t){if(A)((k=n.addClass("observed").append(ai(Sn)).contents()[0])[Z]=new r(a)).observe(k);else if(9<I||!kt){n.prepend(ai(Sn,ai({c:zn,dir:"ltr"},ai(zn,ai(Tn))+ai(zn,ai({c:Tn,style:"width: 200%; height: 200%"})))));var u,f,c,s,l=n[0][i][0][i][0],v=Ci(l[i][1]),d=Ci(l[i][0]),h=Ci(d[0][i][0]),p=l[xi.oW],b=l[xi.oH],y=xt.nativeScrollbarSize,m=function(){d[_e](o)[Se](o),v[_e](o)[Se](o)},g=function(){f=0,u&&(p=c,b=s,a())},w=function(n){return c=l[xi.oW],s=l[xi.oH],u=c!=p||s!=b,n&&u&&!f?(Si.cAF()(f),f=Si.rAF()(g)):n||g(),m(),n&&(Si.prvD(n),Si.stpP(n)),!1},x={},_={};ri(_,ye,[-2*(y.y+1),-2*y.x,-2*y.y,-2*(y.x+1)]),Ci(l).css(_),d.on(ge,w),v.on(ge,w),n.on(e,function(){w(!1)}),x[he]=o,x[pe]=o,h.css(x),m()}else{var S=H.attachEvent,z=I!==hi;if(S)n.prepend(ai(Sn)),gt(n,W+Sn)[0].attachEvent("onresize",a);else{var T=H.createElement(pi);T.setAttribute(xi.ti,"-1"),T.setAttribute(xi.c,Sn),T.onload=function(){var n=this.contentDocument.defaultView;n.addEventListener("resize",a),n.document.documentElement.style.display="none"},T.type="text/html",z&&n.prepend(T),T.data="about:blank",z||n.prepend(T),n.on(e,a)}}if(n[0]===R){var O=function(){var n=Kt.css("direction"),t={},r=0,e=!1;return n!==L&&(r="ltr"===n?(t[le]=0,t[ce]=me,o):(t[le]=me,t[ce]=0,Ot.n?-o:Ot.i?0:o),Jt.children().eq(0).css(t),Jt[_e](r)[Se](o),L=n,e=!0),e};O(),Kn(n,ge,function(n){return O()&&Xe(),Si.prvD(n),Si.stpP(n),!1})}}else if(A){var k,C=(k=n.contents()[0])[Z];C&&(C.disconnect(),delete k[Z])}else mt(n.children(W+Sn).eq(0))}}function Gn(){if(h){var o,a,u,f,c,s,r,e,i,l,n=Si.mO(),v=Si.now();O=function(n){var t=!1;return Rt&&!$t&&(d(n,function(){return!(t=function o(n){var t=n.attributeName,r=n.target,e=n.type,i="closest";if(r===sr)return null===t;if("attributes"===e&&(t===xi.c||t===xi.s)&&!Nt){if(t===xi.c&&Ci(r).hasClass(rn))return et(n.oldValue,r.className);if(typeof r[i]!=bi)return!0;if(null!==r[i](W+Sn)||null!==r[i](W+kn)||null!==r[i](W+Wn))return!1}return!0}(this))}),t&&(e=Si.now(),i=yr||br,l=function(){Lt||(v=e,Nt&&Be(),i?Xe():St.update(me))},clearTimeout(r),11<e-v||!i?l():r=setTimeout(l,11))),t},S=new n(T=function(n){var t,r=!1,e=!1,i=[];return Rt&&!$t&&(d(n,function(){o=(t=this).target,a=t.attributeName,u=a===xi.c,f=t.oldValue,c=o.className,p&&u&&!e&&-1<f.indexOf(en)&&c.indexOf(en)<0&&(s=lt(!0),ar.className=c.split(xe).concat(f.split(xe).filter(function(n){return n.match(s)})).join(xe),r=e=!0),r=r||(u?et(f,c):a!==xi.s||f!==o[xi.s].cssText),i.push(a)}),it(i),r&&St.update(e||me)),r}),z=new n(O)}}function Ue(){h&&!qr&&(S.observe(ar,{attributes:!0,attributeOldValue:!0,attributeFilter:Bn}),z.observe(Nt?or:sr,{attributes:!0,attributeOldValue:!0,subtree:!Nt,childList:!Nt,characterData:!Nt,attributeFilter:Nt?qn:Bn}),qr=!0)}function Ve(){h&&qr&&(S.disconnect(),z.disconnect(),qr=!1)}function Jn(){if(!$t){var n,t={w:R[xi.sW],h:R[xi.sH]};n=ui(t,_),_=t,n&&Xe({A:!0})}}function Qn(){Jr&&Ge(!0)}function Zn(){Jr&&!P.hasClass(En)&&Ge(!1)}function nt(){Gr&&(Ge(!0),clearTimeout(C),C=setTimeout(function(){Gr&&!Lt&&Ge(!1)},100))}function tt(n){return Si.prvD(n),!1}function rt(n){var r=Ci(n.target);yt(function(n,t){r.is(t)&&Xe({k:!0})})}function $e(n){n||$e(!0),Yn(Kt,B.split(xe)[0],nt,!Gr||n,!0),Yn(Kt,[X,Y],[Qn,Zn],!Jr||n,!0),Rt||n||Kt.one("mouseover",Qn)}function qe(){var n={};return Wt&&tr&&(n.w=ii(tr.css(ve+he)),n.h=ii(tr.css(ve+pe)),n.c=ui(n,$r),n.f=!0),!!($r=n).c}function et(n,t){var r,e,i=typeof t==mi?t.split(xe):[],o=function u(n,t){var r,e,i=[],o=[];for(r=0;r<n.length;r++)i[n[r]]=!0;for(r=0;r<t.length;r++)i[t[r]]?delete i[t[r]]:i[t[r]]=!0;for(e in i)o.push(e);return o}(typeof n==mi?n.split(xe):[],i),a=sn(Ie,o);if(-1<a&&o.splice(a,1),0<o[xi.l])for(e=lt(!0,!0),r=0;r<o.length;r++)if(!o[r].match(e))return!0;return!1}function it(n){d(n=n||Fn,function(n,t){if(-1<Si.inA(t,Fn)){var r=Yt.attr(t);cn(r)==mi?Zt.attr(t,r):Zt.removeAttr(t)}})}function Be(){if(!$t){var n,t,r,e,i=!jr,o=ee.w,a=ee.h,u={},f=br||i;return u[ve+he]=ye,u[ve+pe]=ye,u[he]=me,Yt.css(u),n=or[xi.oW],t=f?Oi.max(n,or[xi.sW]-1):1,u[he]=br?me:we,u[ve+he]=we,u[pe]=me,Yt.css(u),r=or[xi.oH],e=Oi.max(r,or[xi.sH]-1),u[he]=t,u[pe]=e,er.css(u),u[ve+he]=o,u[ve+pe]=a,Yt.css(u),{q:n,B:r,X:t,Y:e}}}function Xe(n){clearTimeout(Xt),n=n||{},je.A|=n.A,je.k|=n.k,je.H|=n.H;var t,r=Si.now(),e=!!je.A,i=!!je.k,o=!!je.H,a=n.C,u=0<Fe&&Rt&&!Lt&&!o&&!a&&r-Bt<Fe&&!yr&&!br;if(u&&(Xt=setTimeout(Xe,Fe)),!(Lt||u||$t&&!a||Rt&&!o&&(t=Kt.is(":hidden"))||"inline"===Kt.css("display"))){Bt=r,je={},!Ct||zt.x&&zt.y?Ht=fi({},xt.nativeScrollbarSize):(Ht.x=0,Ht.y=0),ie={x:3*(Ht.x+(zt.x?0:3)),y:3*(Ht.y+(zt.y?0:3))},a=a||{};var f=function(){return ui.apply(this,[].slice.call(arguments).concat([o]))},c={x:Zt[_e](),y:Zt[Se]()},s=qt.scrollbars,l=qt.textarea,v=s.visibility,d=f(v,Rr),h=s.autoHide,p=f(h,Lr),b=s.clickScrolling,y=f(b,Nr),m=s.dragScrolling,g=f(m,Wr),w=qt.className,x=f(w,Er),_=qt.resize,S=f(_,Dr)&&!Wt,z=qt.paddingAbsolute,T=f(z,Sr),O=qt.clipAlways,k=f(O,zr),C=qt.sizeAutoCapable&&!Wt,A=f(C,Hr),H=qt.nativeScrollbarsOverlaid.showNativeScrollbars,R=f(H,Cr),L=qt.autoUpdate,N=f(L,Ar),W=qt.overflowBehavior,D=f(W,Or,o),M=l.dynWidth,E=f(Vr,M),I=l.dynHeight,j=f(Ur,I);if(Yr="n"===h,Kr="s"===h,Gr="m"===h,Jr="l"===h,Xr=s.autoHideDelay,Ir=Er,Qr="n"===_,Zr="b"===_,ne="h"===_,te="v"===_,Mr=qt.normalizeRTL,H=H&&zt.x&&zt.y,Rr=v,Lr=h,Nr=b,Wr=m,Er=w,Dr=_,Sr=z,zr=O,Hr=C,Cr=H,Ar=L,Or=fi({},W),Vr=M,Ur=I,hr=hr||{x:!1,y:!1},x&&(si(Kt,Ir+xe+Ie),ci(Kt,w!==hi&&null!==w&&0<w.length?w:Ie)),N&&(!0===L||null===L&&kt?(Ve(),_t.add(St)):(_t.remove(St),Ue())),A)if(C)if(rr?rr.show():(rr=Ci(ai(Le)),Qt.before(rr)),Mt)Gt.show();else{Gt=Ci(ai(Ne)),ur=Gt[0],rr.before(Gt);var F={w:-1,h:-1};Pe(Gt,function(){var n={w:ur[xi.oW],h:ur[xi.oH]};ui(n,F)&&(Rt&&yr&&0<n.h||br&&0<n.w||Rt&&!yr&&0===n.h||!br&&0===n.w)&&Xe(),F=n}),Mt=!0,null!==At&&Gt.css(pe,At+"(100% + 1px)")}else Mt&&Gt.hide(),rr&&rr.hide();o&&(Jt.find("*").trigger(ge),Mt&&Gt.find("*").trigger(ge)),t=t===hi?Kt.is(":hidden"):t;var P,U=!!Nt&&"off"!==Yt.attr("wrap"),V=f(U,jr),$=Kt.css("direction"),q=f($,_r),B=Kt.css("box-sizing"),X=f(B,mr),Y=ei(ae);try{P=Mt?ur[xi.bCR]():null}catch(gt){return}Dt="border-box"===B;var K=(Vt="rtl"===$)?le:ce,G=Vt?ce:le,J=!1,Q=!(!Mt||"none"===Kt.css(be))&&(0===Oi.round(P.right-P.left)&&(!!z||0<ar[xi.cW]-Et));if(C&&!Q){var Z=ar[xi.oW],nn=rr.css(he);rr.css(he,me);var tn=ar[xi.oW];rr.css(he,nn),(J=Z!==tn)||(rr.css(he,Z+1),tn=ar[xi.oW],rr.css(he,nn),J=Z!==tn)}var rn=(Q||J)&&C&&!t,en=f(rn,br),on=!rn&&br,an=!(!Mt||!C||t)&&0===Oi.round(P.bottom-P.top),un=f(an,yr),fn=!an&&yr,cn=ei(ue,"-"+he,!(rn&&Dt||!Dt),!(an&&Dt||!Dt)),sn=ei(oe),ln={},vn={},dn=function(){return{w:ar[xi.cW],h:ar[xi.cH]}},hn=function(){return{w:fr[xi.oW]+Oi.max(0,sr[xi.cW]-sr[xi.sW]),h:fr[xi.oH]+Oi.max(0,sr[xi.cH]-sr[xi.sH])}},pn=Et=Y.l+Y.r,bn=It=Y.t+Y.b;if(pn*=z?1:0,bn*=z?1:0,Y.c=f(Y,gr),jt=cn.l+cn.r,Ft=cn.t+cn.b,cn.c=f(cn,wr),Pt=sn.l+sn.r,Ut=sn.t+sn.b,sn.c=f(sn,xr),jr=U,_r=$,mr=B,br=rn,yr=an,gr=Y,wr=cn,xr=sn,q&&Mt&&Gt.css(be,G),Y.c||q||T||en||un||X||A){var yn={},mn={},gn=[Y.t,Y.r,Y.b,Y.l];ri(vn,oe,[-Y.t,-Y.r,-Y.b,-Y.l]),z?(ri(yn,ye,gn),ri(Nt?mn:ln,ae)):(ri(yn,ye),ri(Nt?mn:ln,ae,gn)),Qt.css(yn),Yt.css(mn)}ee=hn();var wn=!!Nt&&Be(),xn=Nt&&f(wn,Pr),_n=Nt&&wn?{w:M?wn.X:wn.q,h:I?wn.Y:wn.B}:{};if(Pr=wn,an&&(un||T||X||Y.c||cn.c)?ln[pe]=me:(un||T)&&(ln[pe]=we),rn&&(en||T||X||Y.c||cn.c||q)?(ln[he]=me,vn[de+he]=we):(en||T)&&(ln[he]=we,ln[be]=ye,vn[de+he]=ye),rn?(vn[he]=me,ln[he]=_i.v(he,"max-content intrinsic")||me,ln[be]=G):vn[he]=ye,vn[pe]=an?_n.h||sr[xi.cH]:ye,C&&rr.css(vn),nr.css(ln),ln={},vn={},e||i||xn||q||X||T||en||rn||un||an||R||D||k||S||d||p||g||y||E||j||V){var Sn="overflow",zn=Sn+"-x",Tn=Sn+"-y";if(!Ct){var On={},kn=hr.y&&pr.ys&&!H?zt.y?Zt.css(K):-Ht.y:0,Cn=hr.x&&pr.xs&&!H?zt.x?Zt.css(se):-Ht.x:0;ri(On,ye),Zt.css(On)}var An=oi(),Hn={w:_n.w||An[xi.cW],h:_n.h||An[xi.cH]},Rn=An[xi.sW],Ln=An[xi.sH];Ct||(On[se]=fn?ye:Cn,On[K]=on?ye:kn,Zt.css(On)),ee=hn();var Nn=dn(),Wn={w:Nn.w-Pt-jt-(Dt?0:Et),h:Nn.h-Ut-Ft-(Dt?0:It)},Dn={w:Oi.max((rn?Hn.w:Rn)+pn,Wn.w),h:Oi.max((an?Hn.h:Ln)+bn,Wn.h)};if(Dn.c=f(Dn,Tr),Tr=Dn,C){(Dn.c||an||rn)&&(vn[he]=Dn.w,vn[pe]=Dn.h,Nt||(Hn={w:An[xi.cW],h:An[xi.cH]}));var Mn={},En=function(n){var t=ni(n),r=t.F,e=t.K,i=n?rn:an,o=n?jt:Ft,a=n?Et:It,u=n?Pt:Ut,f=ee[r]-o-u-(Dt?0:a);i&&(i||!cn.c)||(vn[e]=Wn[r]-1),!(i&&Hn[r]<f)||n&&Nt&&U||(Nt&&(Mn[e]=ii(er.css(e))-1),--vn[e]),0<Hn[r]&&(vn[e]=Oi.max(1,vn[e]))};En(!0),En(!1),Nt&&er.css(Mn),rr.css(vn)}rn&&(ln[he]=we),!rn||Dt||qr||(ln[be]="none"),nr.css(ln),ln={};var In={w:An[xi.sW],h:An[xi.sH]};In.c=i=f(In,vr),vr=In,ee=hn(),e=f(Nn=dn(),lr),lr=Nn;var jn=Nt&&(0===ee.w||0===ee.h),Fn=kr,Pn={},Un={},Vn={},$n={},qn={},Bn={},Xn={},Yn=fr[xi.bCR](),Kn=function(n){var t=ni(n),r=ni(!n).U,e=t.U,i=t.F,o=t.K,a=ge+t.G+"Max",u=Yn[o]?Oi.abs(Yn[o]-ee[i]):0,f=Fn&&0<Fn[e]&&0===cr[a];Pn[e]="v-s"===W[e],Un[e]="v-h"===W[e],Vn[e]="s"===W[e],$n[e]=Oi.max(0,Oi.round(100*(In[i]-ee[i]))/100),$n[e]*=jn||f&&0<u&&u<1?0:1,qn[e]=0<$n[e],Bn[e]=Pn[e]||Un[e]?qn[r]&&!Pn[r]&&!Un[r]:qn[e],Bn[e+"s"]=!!Bn[e]&&(Vn[e]||Pn[e]),Xn[e]=qn[e]&&Bn[e+"s"]};if(Kn(!0),Kn(!1),$n.c=f($n,kr),kr=$n,qn.c=f(qn,hr),hr=qn,Bn.c=f(Bn,pr),pr=Bn,zt.x||zt.y){var Gn,Jn={},Qn={},Zn=o;(qn.x||qn.y)&&(Qn.w=zt.y&&qn.y?In.w+Tt.y:ye,Qn.h=zt.x&&qn.x?In.h+Tt.x:ye,Zn=f(Qn,dr),dr=Qn),(qn.c||Bn.c||In.c||q||en||un||rn||an||R)&&(ln[oe+G]=ln[ue+G]=ye,Gn=function(n){var t=ni(n),r=ni(!n),e=t.U,i=n?se:K,o=n?an:rn;zt[e]&&qn[e]&&Bn[e+"s"]?(ln[oe+i]=!o||H?ye:Tt[e],ln[ue+i]=n&&o||H?ye:Tt[e]+"px solid transparent"):(Qn[r.F]=ln[oe+i]=ln[ue+i]=ye,Zn=!0)},Ct?li(Zt,He,!H):(Gn(!0),Gn(!1))),H&&(Qn.w=Qn.h=ye,Zn=!0),Zn&&!Ct&&(Jn[he]=Bn.y?Qn.w:ye,Jn[pe]=Bn.x?Qn.h:ye,tr||(tr=Ci(ai(Re)),Zt.prepend(tr)),tr.css(Jn)),nr.css(ln)}var nt,tt={};yn={};if((e||qn.c||Bn.c||In.c||D||X||R||q||k||un)&&(tt[G]=ye,(nt=function(n){var t=ni(n),r=ni(!n),e=t.U,i=t.J,o=n?se:K,a=function(){tt[o]=ye,re[r.F]=0};qn[e]&&Bn[e+"s"]?(tt[Sn+i]=ge,H||Ct?a():(tt[o]=-(zt[e]?Tt[e]:Ht[e]),re[r.F]=zt[e]?Tt[r.U]:0)):(tt[Sn+i]=ye,a())})(!0),nt(!1),!Ct&&(ee.h<ie.x||ee.w<ie.y)&&(qn.x&&Bn.x&&!zt.x||qn.y&&Bn.y&&!zt.y)?(tt[ae+fe]=ie.x,tt[oe+fe]=-ie.x,tt[ae+G]=ie.y,tt[oe+G]=-ie.y):tt[ae+fe]=tt[oe+fe]=tt[ae+G]=tt[oe+G]=ye,tt[ae+K]=tt[oe+K]=ye,qn.x&&Bn.x||qn.y&&Bn.y||jn?Nt&&jn&&(yn[zn]=yn[Tn]="hidden"):(!O||Un.x||Pn.x||Un.y||Pn.y)&&(Nt&&(yn[zn]=yn[Tn]=ye),tt[zn]=tt[Tn]="visible"),Qt.css(yn),Zt.css(tt),tt={},(qn.c||X||en||un)&&(!zt.x||!zt.y))){var rt=sr[xi.s];rt.webkitTransform="scale(1)",rt.display="run-in",sr[xi.oH],rt.display=ye,rt.webkitTransform=ye}if(ln={},q||en||un)if(Vt&&rn){var et=nr.css(be),it=Oi.round(nr.css(be,ye).css(le,ye).position().left);nr.css(be,et),it!==Oi.round(nr.position().left)&&(ln[le]=it)}else ln[le]=ye;if(nr.css(ln),Nt&&i){var ot=function wt(){var n=or.selectionStart;if(n===hi)return;var t,r,e=Yt.val(),i=e[xi.l],o=e.split("\n"),a=o[xi.l],u=e.substr(0,n).split("\n"),f=0,c=0,s=u[xi.l],l=u[u[xi.l]-1][xi.l];for(r=0;r<o[xi.l];r++)t=o[r][xi.l],c<t&&(f=r+1,c=t);return{Q:s,Z:l,nn:a,tn:c,rn:f,en:n,"in":i}}();if(ot){var at=Fr===hi||ot.nn!==Fr.nn,ut=ot.Q,ft=ot.Z,ct=ot.rn,st=ot.nn,lt=ot.tn,vt=ot.en,dt=ot["in"]<=vt&&Br,ht={x:U||ft!==lt||ut!==ct?-1:kr.x,y:(U?dt||at&&Fn&&c.y===Fn.y:(dt||at)&&ut===st)?kr.y:-1};c.x=-1<ht.x?Vt&&Mr&&Ot.i?0:ht.x:c.x,c.y=-1<ht.y?ht.y:c.y}Fr=ot}Vt&&Ot.i&&zt.y&&qn.x&&Mr&&(c.x+=re.w||0),rn&&Kt[_e](0),an&&Kt[Se](0),Zt[_e](c.x)[Se](c.y);var pt="v"===v,bt="h"===v,yt="a"===v,mt=function(n,t){t=t===hi?n:t,Ke(!0,n,Xn.x),Ke(!1,t,Xn.y)};li(Kt,ke,Bn.x||Bn.y),li(Kt,Ce,Bn.x),li(Kt,Ae,Bn.y),q&&!Wt&&li(Kt,ze,Vt),Wt&&ci(Kt,Te),S&&(li(Kt,Te,Qr),li(ir,We,!Qr),li(ir,De,Zr),li(ir,Me,ne),li(ir,Ee,te)),(d||D||Bn.c||qn.c||R)&&(H?R&&(si(Kt,Oe),H&&mt(!1)):yt?mt(Xn.x,Xn.y):pt?mt(!0):bt&&mt(!1)),(p||R)&&($e(!Jr&&!Gr),Ge(Yr,!Yr)),(e||$n.c||un||en||S||X||T||R||q)&&(Je(!0),Qe(!0),Je(!1),Qe(!1)),y&&Ze(!0,b),g&&Ze(!1,m),ti("onDirectionChanged",{isRTL:Vt,dir:$},q),ti("onHostSizeChanged",{width:lr.w,height:lr.h},e),ti("onContentSizeChanged",{width:vr.w,height:vr.h},i),ti("onOverflowChanged",{x:qn.x,y:qn.y,xScrollable:Bn.xs,yScrollable:Bn.ys,clipped:Bn.x||Bn.y},qn.c||Bn.c),ti("onOverflowAmountChanged",{x:$n.x,y:$n.y},$n.c)}Wt&&$r&&(hr.c||$r.c)&&($r.f||qe(),zt.y&&hr.x&&nr.css(ve+he,$r.w+Tt.y),zt.x&&hr.y&&nr.css(ve+pe,$r.h+Tt.x),$r.c=!1),Rt&&a.updateOnLoad&&Ye(),ti("onUpdated",{forced:o})}}function Ye(){Nt||yt(function(n,t){nr.find(t).each(function(n,t){Si.inA(t,Vn)<0&&(Vn.push(t),Ci(t).off(Un,rt).on(Un,rt))})})}function ot(n){var t=Ti._(n,Ti.g,!0,a);return a=fi({},a,t.S),qt=fi({},qt,t.z),t.z}function at(e){var n="parent",t=yn+xe+On,r=Nt?xe+On:ye,i=qt.textarea.inheritedAttrs,o={},a=function(){var r=e?Yt:Kt;d(o,function(n,t){cn(t)==mi&&(n==xi.c?r.addClass(t):r.attr(n,t))})},u=[rn,en,on,Te,ze,an,un,fn,Oe,ke,Ce,Ae,Ie,yn,On,Er].join(xe),f={};Kt=Kt||(Nt?p?Yt[n]()[n]()[n]()[n]():Ci(ai(on)):Yt),nr=nr||pt(_n+r),Zt=Zt||pt(wn+r),Qt=Qt||pt(gn+r),Jt=Jt||pt("os-resize-observer-host"),er=er||(Nt?pt(mn):hi),p&&ci(Kt,en),e&&si(Kt,u),i=cn(i)==mi?i.split(xe):i,Si.isA(i)&&Nt&&d(i,function(n,t){cn(t)==mi&&(o[t]=e?Kt.attr(t):Yt.attr(t))}),e?(p&&Rt?(Jt.children().remove(),d([Qt,Zt,nr,er],function(n,t){t&&si(t.removeAttr(xi.s),In)}),ci(Kt,Nt?on:rn)):(mt(Jt),nr.contents().unwrap().unwrap().unwrap(),Nt&&(Yt.unwrap(),mt(Kt),mt(er),a())),Nt&&Yt.removeAttr(xi.s),Wt&&si(c,tn)):(Nt&&(qt.sizeAutoCapable||(f[he]=Yt.css(he),f[pe]=Yt.css(pe)),p||Yt.addClass(On).wrap(Kt),Kt=Yt[n]().css(f)),p||(ci(Yt,Nt?t:rn),Kt.wrapInner(nr).wrapInner(Zt).wrapInner(Qt).prepend(Jt),nr=gt(Kt,W+_n),Zt=gt(Kt,W+wn),Qt=gt(Kt,W+gn),Nt&&(nr.prepend(er),a())),Ct&&ci(Zt,He),zt.x&&zt.y&&ci(Zt,xn),Wt&&ci(c,tn),R=Jt[0],ar=Kt[0],fr=Qt[0],cr=Zt[0],sr=nr[0],it())}function ut(){var r,t,e=[112,113,114,115,116,117,118,119,120,121,123,33,34,37,38,39,40,16,17,18,19,20,144],i=[],n="focus";function o(n){Be(),St.update(me),n&&kt&&clearInterval(r)}Nt?(9<I||!kt?Kn(Yt,"input",o):Kn(Yt,[K,G],[function a(n){var t=n.keyCode;sn(t,e)<0&&(i[xi.l]||(o(),r=setInterval(o,1e3/60)),sn(t,i)<0&&i.push(t))},function u(n){var t=n.keyCode,r=sn(t,i);sn(t,e)<0&&(-1<r&&i.splice(r,1),i[xi.l]||o(!0))}]),Kn(Yt,[ge,"drop",n,n+"out"],[function f(n){return Yt[_e](Ot.i&&Mr?9999999:0),Yt[Se](0),Si.prvD(n),Si.stpP(n),!1},function c(n){setTimeout(function(){Lt||o()},50)},function s(){Br=!0,ci(Kt,n)},function l(){Br=!1,i=[],si(Kt,n),o(!0)}])):Kn(nr,Q,function v(n){!0!==Ar&&function l(n){if(!Rt)return 1;var t="flex-grow",r="flex-shrink",e="flex-basis",i=[he,ve+he,de+he,oe+le,oe+ce,le,ce,"font-weight","word-spacing",t,r,e],o=[ae+le,ae+ce,ue+le+he,ue+ce+he],a=[pe,ve+pe,de+pe,oe+fe,oe+se,fe,se,"line-height",t,r,e],u=[ae+fe,ae+se,ue+fe+he,ue+se+he],f="s"===Or.x||"v-s"===Or.x,c=!1,s=function(n,t){for(var r=0;r<n[xi.l];r++)if(n[r]===t)return!0;return!1};return("s"===Or.y||"v-s"===Or.y)&&((c=s(a,n))||Dt||(c=s(u,n))),f&&!c&&((c=s(i,n))||Dt||(c=s(o,n))),c}((n=n.originalEvent||n).propertyName)&&St.update(me)}),Kn(Zt,ge,function d(n){$t||(t!==hi?clearTimeout(t):((Kr||Gr)&&Ge(!0),ht()||ci(Kt,Oe),ti("onScrollStart",n)),V||(Qe(!0),Qe(!1)),ti("onScroll",n),t=setTimeout(function(){Lt||(clearTimeout(t),t=hi,(Kr||Gr)&&Ge(!1),ht()||si(Kt,Oe),ti("onScrollStop",n))},175))},!0)}function ft(i){var n,t,o=function(n){var t=pt(kn+xe+(n?Dn:Mn),!0),r=pt(Cn,t),e=pt(Hn,t);return p||i||(t.append(r),r.append(e)),{an:t,un:r,cn:e}};function r(n){var t=ni(n),r=t.an,e=t.un,i=t.cn;p&&Rt?d([r,e,i],function(n,t){si(t.removeAttr(xi.s),In)}):mt(r||o(n).an)}i?(r(!0),r()):(n=o(!0),t=o(),f=n.an,s=n.un,l=n.cn,v=t.an,b=t.un,y=t.cn,p||(Qt.after(v),Qt.after(f)))}function ct(z){var T,i,O,k,e=ni(z),C=e.sn,t=x.top!==x,A=e.U,r=e.J,H=ge+e.G,o="active",a="snapHandle",u="click",R=1,f=[16,17];function c(n){return I&&t?n["screen"+r]:Si.page(n)[A]}function s(n){return qt.scrollbars[n]}function l(){R=.5}function v(){R=1}function d(n){Si.stpP(n)}function L(n){-1<sn(n.keyCode,f)&&l()}function N(n){-1<sn(n.keyCode,f)&&v()}function W(n){var t=(n.originalEvent||n).touches!==hi;return!($t||Lt||ht()||!Wr||t&&!s("touchSupport"))&&(1===Si.mBtn(n)||t)}function h(n){if(W(n)){var t=C.I,r=C.D,e=C.N*((c(n)-O)*k/(t-r));e=isFinite(e)?e:0,Vt&&z&&!Ot.i&&(e*=-1),Zt[H](Oi.round(i+e)),V&&Qe(z,i+e),g||Si.prvD(n)}else D(n)}function D(n){if(n=n||n.originalEvent,Yn(F,[B,q,K,G,J],[h,D,L,N,tt],!0),Si.rAF()(function(){Yn(F,u,d,!0,{$:!0})}),V&&Qe(z,!0),V=!1,si(P,En),si(e.cn,o),si(e.un,o),si(e.an,o),k=1,v(),T!==(O=i=hi)&&(St.scrollStop(),clearTimeout(T),T=hi),n){var t=ar[xi.bCR]();n.clientX>=t.left&&n.clientX<=t.right&&n.clientY>=t.top&&n.clientY<=t.bottom||Zn(),(Kr||Gr)&&Ge(!1)}}function M(n){i=Zt[H](),i=isNaN(i)?0:i,(Vt&&z&&!Ot.n||!Vt)&&(i=i<0?0:i),k=vt()[A],O=c(n),V=!s(a),ci(P,En),ci(e.cn,o),ci(e.an,o),Yn(F,[B,q,J],[h,D,tt]),Si.rAF()(function(){Yn(F,u,d,!1,{$:!0})}),!I&&w||Si.prvD(n),Si.stpP(n)}Kn(e.cn,$,function p(n){W(n)&&M(n)}),Kn(e.un,[$,X,Y],[function E(n){if(W(n)){var d,t=e.sn.D/Math.round(Oi.min(1,ee[e.F]/vr[e.F])*e.sn.I),h=Oi.round(ee[e.F]*t),p=270*t,b=400*t,y=e.un.offset()[e.P],r=n.ctrlKey,m=n.shiftKey,g=m&&r,w=!0,x=function(n){V&&Qe(z,n)},_=function(){x(),M(n)},S=function(){if(!Lt){var n=(O-y)*k,t=C.W,r=C.I,e=C.D,i=C.N,o=C.R,a=p*R,u=w?Oi.max(b,a):a,f=i*((n-e/2)/(r-e)),c=Vt&&z&&(!Ot.i&&!Ot.n||Mr),s=c?t<n:n<t,l={},v={easing:"linear",step:function(n){V&&(Zt[H](n),Qe(z,n))}};f=isFinite(f)?f:0,f=Vt&&z&&!Ot.i?i-f:f,m?(Zt[H](f),g?(f=Zt[H](),Zt[H](o),f=c&&Ot.i?i-f:f,f=c&&Ot.n?-f:f,l[A]=f,St.scroll(l,fi(v,{duration:130,complete:_}))):_()):(d=w?s:d,(c?d?n<=t+e:t<=n:d?t<=n:n<=t+e)?(clearTimeout(T),St.scrollStop(),T=hi,x(!0)):(T=setTimeout(S,u),l[A]=(d?"-=":"+=")+h,St.scroll(l,fi(v,{duration:a}))),w=!1)}};r&&l(),k=vt()[A],O=Si.page(n)[A],V=!s(a),ci(P,En),ci(e.un,o),ci(e.an,o),Yn(F,[q,K,G,J],[D,L,N,tt]),S(),Si.prvD(n),Si.stpP(n)}},function b(n){U=!0,(Kr||Gr)&&Ge(!0)},function y(n){U=!1,(Kr||Gr)&&Ge(!1)}]),Kn(e.an,$,function m(n){Si.stpP(n)}),j&&Kn(e.an,Q,function(n){n.target===e.an[0]&&(Je(z),Qe(z))})}function Ke(n,t,r){var e=n?f:v;li(Kt,n?an:un,!t),li(e,Ln,!r)}function Ge(n,t){if(clearTimeout(k),n)si(f,Nn),si(v,Nn);else{var r,e=function(){U||Lt||(!(r=l.hasClass("active")||y.hasClass("active"))&&(Kr||Gr||Jr)&&ci(f,Nn),!r&&(Kr||Gr||Jr)&&ci(v,Nn))};0<Xr&&!0!==t?k=setTimeout(e,Xr):e()}}function Je(n){var t={},r=ni(n),e=r.sn,i=Oi.min(1,ee[r.F]/vr[r.F]);t[r.K]=Oi.floor(100*i*1e6)/1e6+"%",ht()||r.cn.css(t),e.D=r.cn[0]["offset"+r.ln],e.M=i}function Qe(n,t){var r,e,i=cn(t)==gi,o=Vt&&n,a=ni(n),u=a.sn,f="translate(",c=_i.u("transform"),s=_i.u("transition"),l=n?Zt[_e]():Zt[Se](),v=t===hi||i?l:t,d=u.D,h=a.un[0]["offset"+a.ln],p=h-d,b={},y=(cr[ge+a.ln]-cr["client"+a.ln])*(Ot.n&&o?-1:1),m=function(n){return isNaN(n/y)?0:Oi.max(0,Oi.min(1,n/y))},g=function(n){var t=p*n;return t=isNaN(t)?0:t,t=o&&!Ot.i?h-d-t:t,t=Oi.max(0,t)},w=m(l),x=g(m(v)),_=g(w);u.N=y,u.R=l,u.L=w,ln?(r=o?-(h-d-x):x,e=n?f+r+"px, 0)":f+"0, "+r+"px)",b[c]=e,j&&(b[s]=i&&1<Oi.abs(x-u.W)?function S(n){var t=_i.u("transition"),r=n.css(t);if(r)return r;for(var e,i,o,a="\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*",u=new RegExp(a),f=new RegExp("^("+a+")+$"),c="property duration timing-function delay".split(" "),s=[],l=0,v=function(n){if(e=[],!n.match(f))return n;for(;n.match(u);)e.push(RegExp.$1),n=n.replace(u,ye);return e};l<c[xi.l];l++)for(i=v(n.css(t+"-"+c[l])),o=0;o<i[xi.l];o++)s[o]=(s[o]?s[o]+xe:ye)+i[o];return s.join(", ")}(a.cn)+", "+(c+xe+250)+"ms":ye)):b[a.P]=x,ht()||(a.cn.css(b),ln&&j&&i&&a.cn.one(Q,function(){Lt||a.cn.css(s,ye)})),u.W=x,u.j=_,u.I=h}function Ze(n,t){var r=t?"removeClass":"addClass",e=n?b:y,i=n?An:Rn;(n?s:l)[r](i),e[r](i)}function ni(n){return{K:n?he:pe,ln:n?"Width":"Height",P:n?le:fe,G:n?"Left":"Top",U:n?pn:bn,J:n?"X":"Y",F:n?"w":"h",vn:n?"l":"t",un:n?s:b,cn:n?l:y,an:n?f:v,sn:n?vn:dn}}function st(n){ir=ir||pt(Wn,!0),n?p&&Rt?si(ir.removeAttr(xi.s),In):mt(ir):p||Kt.append(ir)}function ti(n,t,r){if(!1!==r)if(Rt){var e,i=qt.callbacks[n],o=n;"on"===o.substr(0,2)&&(o=o.substr(2,1).toLowerCase()+o.substr(3)),cn(i)==bi&&i.call(St,t),d(Pn,function(){cn((e=this).on)==bi&&e.on(o,t)})}else Lt||jn.push({n:n,a:t})}function ri(n,t,r){r=r||[ye,ye,ye,ye],n[(t=t||ye)+fe]=r[0],n[t+ce]=r[1],n[t+se]=r[2],n[t+le]=r[3]}function ei(n,t,r,e){return t=t||ye,n=n||ye,{t:e?0:ii(Kt.css(n+fe+t)),r:r?0:ii(Kt.css(n+ce+t)),b:e?0:ii(Kt.css(n+se+t)),l:r?0:ii(Kt.css(n+le+t))}}function lt(n,t){var r,e,i,o=function(n,t){if(i="",t&&typeof n==mi)for(e=n.split(xe),r=0;r<e[xi.l];r++)i+="|"+e[r]+"$";return i};return new RegExp("(^"+rn+"([-_].+|)$)"+o(Er,n)+o(Ir,t),"g")}function vt(){var n=fr[xi.bCR]();return{x:ln&&1/(Oi.round(n.width)/fr[xi.oW])||1,y:ln&&1/(Oi.round(n.height)/fr[xi.oH])||1}}function dt(n){var t="ownerDocument",r="HTMLElement",e=n&&n[t]&&n[t].parentWindow||vi;return typeof e[r]==pi?n instanceof e[r]:n&&typeof n==pi&&null!==n&&1===n.nodeType&&typeof n.nodeName==mi}function ii(n,t){var r=t?parseFloat(n):parseInt(n,10);return isNaN(r)?0:r}function ht(){return Cr&&zt.x&&zt.y}function oi(){return Nt?er[0]:sr}function ai(r,n){return"<div "+(r?cn(r)==mi?'class="'+r+'"':function(){var n,t=ye;if(Ci.isPlainObject(r))for(n in r)t+=("c"===n?"class":n)+'="'+r[n]+'" ';return t}():ye)+">"+(n||ye)+"</div>"}function pt(n,t){var r=cn(t)==gi,e=!r&&t||Kt;return p&&!e[xi.l]?null:p?e[r?"children":"find"](W+n.replace(/\s/g,W)).eq(0):Ci(ai(n))}function bt(n,t){for(var r,e=t.split(W),i=0;i<e.length;i++){if(!n[xi.hOP](e[i]))return;r=n[e[i]],i<e.length&&cn(r)==pi&&(n=r)}return r}function yt(n){var t=qt.updateOnLoad;t=cn(t)==mi?t.split(xe):t,Si.isA(t)&&!Lt&&d(t,n)}function ui(n,t,r){if(r)return r;if(cn(n)!=pi||cn(t)!=pi)return n!==t;for(var e in n)if("c"!==e){if(!n[xi.hOP](e)||!t[xi.hOP](e))return!0;if(ui(n[e],t[e]))return!0}return!1}function fi(){return Ci.extend.apply(this,[!0].concat([].slice.call(arguments)))}function ci(n,t){return e.addClass.call(n,t)}function si(n,t){return e.removeClass.call(n,t)}function li(n,t,r){return(r?ci:si)(n,t)}function mt(n){return e.remove.call(n)}function gt(n,t){return e.find.call(n,t).eq(0)}}return ki&&ki.fn&&(ki.fn.overlayScrollbars=function(n,t){return ki.isPlainObject(n)?(ki.each(this,function(){w(this,n,t)}),this):w(this,n)}),w});
/*!
 * AdminLTE v3.2.0 (https://adminlte.io)
 * Copyright 2014-2022 Colorlib <https://colorlib.com>
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.adminlte = {}, global.jQuery));
})(this, (function (exports, $) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  /**
   * --------------------------------------------
   * AdminLTE CardRefresh.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$e = 'CardRefresh';
  var DATA_KEY$e = 'lte.cardrefresh';
  var EVENT_KEY$7 = "." + DATA_KEY$e;
  var JQUERY_NO_CONFLICT$e = $__default["default"].fn[NAME$e];
  var EVENT_LOADED = "loaded" + EVENT_KEY$7;
  var EVENT_OVERLAY_ADDED = "overlay.added" + EVENT_KEY$7;
  var EVENT_OVERLAY_REMOVED = "overlay.removed" + EVENT_KEY$7;
  var CLASS_NAME_CARD$1 = 'card';
  var SELECTOR_CARD$1 = "." + CLASS_NAME_CARD$1;
  var SELECTOR_DATA_REFRESH = '[data-card-widget="card-refresh"]';
  var Default$c = {
    source: '',
    sourceSelector: '',
    params: {},
    trigger: SELECTOR_DATA_REFRESH,
    content: '.card-body',
    loadInContent: true,
    loadOnInit: true,
    loadErrorTemplate: true,
    responseType: '',
    overlayTemplate: '<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',
    errorTemplate: '<span class="text-danger"></span>',
    onLoadStart: function onLoadStart() {},
    onLoadDone: function onLoadDone(response) {
      return response;
    },
    onLoadFail: function onLoadFail(_jqXHR, _textStatus, _errorThrown) {}
  };

  var CardRefresh = /*#__PURE__*/function () {
    function CardRefresh(element, settings) {
      this._element = element;
      this._parent = element.parents(SELECTOR_CARD$1).first();
      this._settings = $__default["default"].extend({}, Default$c, settings);
      this._overlay = $__default["default"](this._settings.overlayTemplate);

      if (element.hasClass(CLASS_NAME_CARD$1)) {
        this._parent = element;
      }

      if (this._settings.source === '') {
        throw new Error('Source url was not defined. Please specify a url in your CardRefresh source option.');
      }
    }

    var _proto = CardRefresh.prototype;

    _proto.load = function load() {
      var _this = this;

      this._addOverlay();

      this._settings.onLoadStart.call($__default["default"](this));

      $__default["default"].get(this._settings.source, this._settings.params, function (response) {
        if (_this._settings.loadInContent) {
          if (_this._settings.sourceSelector !== '') {
            response = $__default["default"](response).find(_this._settings.sourceSelector).html();
          }

          _this._parent.find(_this._settings.content).html(response);
        }

        _this._settings.onLoadDone.call($__default["default"](_this), response);

        _this._removeOverlay();
      }, this._settings.responseType !== '' && this._settings.responseType).fail(function (jqXHR, textStatus, errorThrown) {
        _this._removeOverlay();

        if (_this._settings.loadErrorTemplate) {
          var msg = $__default["default"](_this._settings.errorTemplate).text(errorThrown);

          _this._parent.find(_this._settings.content).empty().append(msg);
        }

        _this._settings.onLoadFail.call($__default["default"](_this), jqXHR, textStatus, errorThrown);
      });
      $__default["default"](this._element).trigger($__default["default"].Event(EVENT_LOADED));
    };

    _proto._addOverlay = function _addOverlay() {
      this._parent.append(this._overlay);

      $__default["default"](this._element).trigger($__default["default"].Event(EVENT_OVERLAY_ADDED));
    };

    _proto._removeOverlay = function _removeOverlay() {
      this._parent.find(this._overlay).remove();

      $__default["default"](this._element).trigger($__default["default"].Event(EVENT_OVERLAY_REMOVED));
    } // Private
    ;

    _proto._init = function _init() {
      var _this2 = this;

      $__default["default"](this).find(this._settings.trigger).on('click', function () {
        _this2.load();
      });

      if (this._settings.loadOnInit) {
        this.load();
      }
    } // Static
    ;

    CardRefresh._jQueryInterface = function _jQueryInterface(config) {
      var data = $__default["default"](this).data(DATA_KEY$e);

      var _options = $__default["default"].extend({}, Default$c, $__default["default"](this).data());

      if (!data) {
        data = new CardRefresh($__default["default"](this), _options);
        $__default["default"](this).data(DATA_KEY$e, typeof config === 'string' ? data : config);
      }

      if (typeof config === 'string' && /load/.test(config)) {
        data[config]();
      } else {
        data._init($__default["default"](this));
      }
    };

    return CardRefresh;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default["default"](document).on('click', SELECTOR_DATA_REFRESH, function (event) {
    if (event) {
      event.preventDefault();
    }

    CardRefresh._jQueryInterface.call($__default["default"](this), 'load');
  });
  $__default["default"](function () {
    $__default["default"](SELECTOR_DATA_REFRESH).each(function () {
      CardRefresh._jQueryInterface.call($__default["default"](this));
    });
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default["default"].fn[NAME$e] = CardRefresh._jQueryInterface;
  $__default["default"].fn[NAME$e].Constructor = CardRefresh;

  $__default["default"].fn[NAME$e].noConflict = function () {
    $__default["default"].fn[NAME$e] = JQUERY_NO_CONFLICT$e;
    return CardRefresh._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE CardWidget.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$d = 'CardWidget';
  var DATA_KEY$d = 'lte.cardwidget';
  var EVENT_KEY$6 = "." + DATA_KEY$d;
  var JQUERY_NO_CONFLICT$d = $__default["default"].fn[NAME$d];
  var EVENT_EXPANDED$3 = "expanded" + EVENT_KEY$6;
  var EVENT_COLLAPSED$4 = "collapsed" + EVENT_KEY$6;
  var EVENT_MAXIMIZED = "maximized" + EVENT_KEY$6;
  var EVENT_MINIMIZED = "minimized" + EVENT_KEY$6;
  var EVENT_REMOVED$1 = "removed" + EVENT_KEY$6;
  var CLASS_NAME_CARD = 'card';
  var CLASS_NAME_COLLAPSED$1 = 'collapsed-card';
  var CLASS_NAME_COLLAPSING = 'collapsing-card';
  var CLASS_NAME_EXPANDING = 'expanding-card';
  var CLASS_NAME_WAS_COLLAPSED = 'was-collapsed';
  var CLASS_NAME_MAXIMIZED = 'maximized-card';
  var SELECTOR_DATA_REMOVE = '[data-card-widget="remove"]';
  var SELECTOR_DATA_COLLAPSE = '[data-card-widget="collapse"]';
  var SELECTOR_DATA_MAXIMIZE = '[data-card-widget="maximize"]';
  var SELECTOR_CARD = "." + CLASS_NAME_CARD;
  var SELECTOR_CARD_HEADER = '.card-header';
  var SELECTOR_CARD_BODY = '.card-body';
  var SELECTOR_CARD_FOOTER = '.card-footer';
  var Default$b = {
    animationSpeed: 'normal',
    collapseTrigger: SELECTOR_DATA_COLLAPSE,
    removeTrigger: SELECTOR_DATA_REMOVE,
    maximizeTrigger: SELECTOR_DATA_MAXIMIZE,
    collapseIcon: 'fa-minus',
    expandIcon: 'fa-plus',
    maximizeIcon: 'fa-expand',
    minimizeIcon: 'fa-compress'
  };

  var CardWidget = /*#__PURE__*/function () {
    function CardWidget(element, settings) {
      this._element = element;
      this._parent = element.parents(SELECTOR_CARD).first();

      if (element.hasClass(CLASS_NAME_CARD)) {
        this._parent = element;
      }

      this._settings = $__default["default"].extend({}, Default$b, settings);
    }

    var _proto = CardWidget.prototype;

    _proto.collapse = function collapse() {
      var _this = this;

      this._parent.addClass(CLASS_NAME_COLLAPSING).children(SELECTOR_CARD_BODY + ", " + SELECTOR_CARD_FOOTER).slideUp(this._settings.animationSpeed, function () {
        _this._parent.addClass(CLASS_NAME_COLLAPSED$1).removeClass(CLASS_NAME_COLLAPSING);
      });

      this._parent.find("> " + SELECTOR_CARD_HEADER + " " + this._settings.collapseTrigger + " ." + this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);

      this._element.trigger($__default["default"].Event(EVENT_COLLAPSED$4), this._parent);
    };

    _proto.expand = function expand() {
      var _this2 = this;

      this._parent.addClass(CLASS_NAME_EXPANDING).children(SELECTOR_CARD_BODY + ", " + SELECTOR_CARD_FOOTER).slideDown(this._settings.animationSpeed, function () {
        _this2._parent.removeClass(CLASS_NAME_COLLAPSED$1).removeClass(CLASS_NAME_EXPANDING);
      });

      this._parent.find("> " + SELECTOR_CARD_HEADER + " " + this._settings.collapseTrigger + " ." + this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);

      this._element.trigger($__default["default"].Event(EVENT_EXPANDED$3), this._parent);
    };

    _proto.remove = function remove() {
      this._parent.slideUp();

      this._element.trigger($__default["default"].Event(EVENT_REMOVED$1), this._parent);
    };

    _proto.toggle = function toggle() {
      if (this._parent.hasClass(CLASS_NAME_COLLAPSED$1)) {
        this.expand();
        return;
      }

      this.collapse();
    };

    _proto.maximize = function maximize() {
      this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon);

      this._parent.css({
        height: this._parent.height(),
        width: this._parent.width(),
        transition: 'all .15s'
      }).delay(150).queue(function () {
        var $element = $__default["default"](this);
        $element.addClass(CLASS_NAME_MAXIMIZED);
        $__default["default"]('html').addClass(CLASS_NAME_MAXIMIZED);

        if ($element.hasClass(CLASS_NAME_COLLAPSED$1)) {
          $element.addClass(CLASS_NAME_WAS_COLLAPSED);
        }

        $element.dequeue();
      });

      this._element.trigger($__default["default"].Event(EVENT_MAXIMIZED), this._parent);
    };

    _proto.minimize = function minimize() {
      this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon);

      this._parent.css('cssText', "height: " + this._parent[0].style.height + " !important; width: " + this._parent[0].style.width + " !important; transition: all .15s;").delay(10).queue(function () {
        var $element = $__default["default"](this);
        $element.removeClass(CLASS_NAME_MAXIMIZED);
        $__default["default"]('html').removeClass(CLASS_NAME_MAXIMIZED);
        $element.css({
          height: 'inherit',
          width: 'inherit'
        });

        if ($element.hasClass(CLASS_NAME_WAS_COLLAPSED)) {
          $element.removeClass(CLASS_NAME_WAS_COLLAPSED);
        }

        $element.dequeue();
      });

      this._element.trigger($__default["default"].Event(EVENT_MINIMIZED), this._parent);
    };

    _proto.toggleMaximize = function toggleMaximize() {
      if (this._parent.hasClass(CLASS_NAME_MAXIMIZED)) {
        this.minimize();
        return;
      }

      this.maximize();
    } // Private
    ;

    _proto._init = function _init(card) {
      var _this3 = this;

      this._parent = card;
      $__default["default"](this).find(this._settings.collapseTrigger).click(function () {
        _this3.toggle();
      });
      $__default["default"](this).find(this._settings.maximizeTrigger).click(function () {
        _this3.toggleMaximize();
      });
      $__default["default"](this).find(this._settings.removeTrigger).click(function () {
        _this3.remove();
      });
    } // Static
    ;

    CardWidget._jQueryInterface = function _jQueryInterface(config) {
      var data = $__default["default"](this).data(DATA_KEY$d);

      var _options = $__default["default"].extend({}, Default$b, $__default["default"](this).data());

      if (!data) {
        data = new CardWidget($__default["default"](this), _options);
        $__default["default"](this).data(DATA_KEY$d, typeof config === 'string' ? data : config);
      }

      if (typeof config === 'string' && /collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/.test(config)) {
        data[config]();
      } else if (typeof config === 'object') {
        data._init($__default["default"](this));
      }
    };

    return CardWidget;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default["default"](document).on('click', SELECTOR_DATA_COLLAPSE, function (event) {
    if (event) {
      event.preventDefault();
    }

    CardWidget._jQueryInterface.call($__default["default"](this), 'toggle');
  });
  $__default["default"](document).on('click', SELECTOR_DATA_REMOVE, function (event) {
    if (event) {
      event.preventDefault();
    }

    CardWidget._jQueryInterface.call($__default["default"](this), 'remove');
  });
  $__default["default"](document).on('click', SELECTOR_DATA_MAXIMIZE, function (event) {
    if (event) {
      event.preventDefault();
    }

    CardWidget._jQueryInterface.call($__default["default"](this), 'toggleMaximize');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default["default"].fn[NAME$d] = CardWidget._jQueryInterface;
  $__default["default"].fn[NAME$d].Constructor = CardWidget;

  $__default["default"].fn[NAME$d].noConflict = function () {
    $__default["default"].fn[NAME$d] = JQUERY_NO_CONFLICT$d;
    return CardWidget._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE ControlSidebar.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$c = 'ControlSidebar';
  var DATA_KEY$c = 'lte.controlsidebar';
  var EVENT_KEY$5 = "." + DATA_KEY$c;
  var JQUERY_NO_CONFLICT$c = $__default["default"].fn[NAME$c];
  var EVENT_COLLAPSED$3 = "collapsed" + EVENT_KEY$5;
  var EVENT_COLLAPSED_DONE$1 = "collapsed-done" + EVENT_KEY$5;
  var EVENT_EXPANDED$2 = "expanded" + EVENT_KEY$5;
  var SELECTOR_CONTROL_SIDEBAR = '.control-sidebar';
  var SELECTOR_CONTROL_SIDEBAR_CONTENT$1 = '.control-sidebar-content';
  var SELECTOR_DATA_TOGGLE$4 = '[data-widget="control-sidebar"]';
  var SELECTOR_HEADER$1 = '.main-header';
  var SELECTOR_FOOTER$1 = '.main-footer';
  var CLASS_NAME_CONTROL_SIDEBAR_ANIMATE = 'control-sidebar-animate';
  var CLASS_NAME_CONTROL_SIDEBAR_OPEN$1 = 'control-sidebar-open';
  var CLASS_NAME_CONTROL_SIDEBAR_SLIDE = 'control-sidebar-slide-open';
  var CLASS_NAME_LAYOUT_FIXED$1 = 'layout-fixed';
  var CLASS_NAME_NAVBAR_FIXED = 'layout-navbar-fixed';
  var CLASS_NAME_NAVBAR_SM_FIXED = 'layout-sm-navbar-fixed';
  var CLASS_NAME_NAVBAR_MD_FIXED = 'layout-md-navbar-fixed';
  var CLASS_NAME_NAVBAR_LG_FIXED = 'layout-lg-navbar-fixed';
  var CLASS_NAME_NAVBAR_XL_FIXED = 'layout-xl-navbar-fixed';
  var CLASS_NAME_FOOTER_FIXED = 'layout-footer-fixed';
  var CLASS_NAME_FOOTER_SM_FIXED = 'layout-sm-footer-fixed';
  var CLASS_NAME_FOOTER_MD_FIXED = 'layout-md-footer-fixed';
  var CLASS_NAME_FOOTER_LG_FIXED = 'layout-lg-footer-fixed';
  var CLASS_NAME_FOOTER_XL_FIXED = 'layout-xl-footer-fixed';
  var Default$a = {
    controlsidebarSlide: true,
    scrollbarTheme: 'os-theme-light',
    scrollbarAutoHide: 'l',
    target: SELECTOR_CONTROL_SIDEBAR,
    animationSpeed: 300
  };
  /**
   * Class Definition
   * ====================================================
   */

  var ControlSidebar = /*#__PURE__*/function () {
    function ControlSidebar(element, config) {
      this._element = element;
      this._config = config;
    } // Public


    var _proto = ControlSidebar.prototype;

    _proto.collapse = function collapse() {
      var _this = this;

      var $body = $__default["default"]('body');
      var $html = $__default["default"]('html'); // Show the control sidebar

      if (this._config.controlsidebarSlide) {
        $html.addClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
        $body.removeClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE).delay(300).queue(function () {
          $__default["default"](SELECTOR_CONTROL_SIDEBAR).hide();
          $html.removeClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
          $__default["default"](this).dequeue();
        });
      } else {
        $body.removeClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1);
      }

      $__default["default"](this._element).trigger($__default["default"].Event(EVENT_COLLAPSED$3));
      setTimeout(function () {
        $__default["default"](_this._element).trigger($__default["default"].Event(EVENT_COLLAPSED_DONE$1));
      }, this._config.animationSpeed);
    };

    _proto.show = function show(toggle) {
      if (toggle === void 0) {
        toggle = false;
      }

      var $body = $__default["default"]('body');
      var $html = $__default["default"]('html');

      if (toggle) {
        $__default["default"](SELECTOR_CONTROL_SIDEBAR).hide();
      } // Collapse the control sidebar


      if (this._config.controlsidebarSlide) {
        $html.addClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
        $__default["default"](this._config.target).show().delay(10).queue(function () {
          $body.addClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE).delay(300).queue(function () {
            $html.removeClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
            $__default["default"](this).dequeue();
          });
          $__default["default"](this).dequeue();
        });
      } else {
        $body.addClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1);
      }

      this._fixHeight();

      this._fixScrollHeight();

      $__default["default"](this._element).trigger($__default["default"].Event(EVENT_EXPANDED$2));
    };

    _proto.toggle = function toggle() {
      var $body = $__default["default"]('body');
      var target = this._config.target;
      var notVisible = !$__default["default"](target).is(':visible');
      var shouldClose = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE);
      var shouldToggle = notVisible && ($body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE));

      if (notVisible || shouldToggle) {
        // Open the control sidebar
        this.show(notVisible);
      } else if (shouldClose) {
        // Close the control sidebar
        this.collapse();
      }
    } // Private
    ;

    _proto._init = function _init() {
      var _this2 = this;

      var $body = $__default["default"]('body');
      var shouldNotHideAll = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE);

      if (shouldNotHideAll) {
        $__default["default"](SELECTOR_CONTROL_SIDEBAR).not(this._config.target).hide();
        $__default["default"](this._config.target).css('display', 'block');
      } else {
        $__default["default"](SELECTOR_CONTROL_SIDEBAR).hide();
      }

      this._fixHeight();

      this._fixScrollHeight();

      $__default["default"](window).resize(function () {
        _this2._fixHeight();

        _this2._fixScrollHeight();
      });
      $__default["default"](window).scroll(function () {
        var $body = $__default["default"]('body');
        var shouldFixHeight = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE);

        if (shouldFixHeight) {
          _this2._fixScrollHeight();
        }
      });
    };

    _proto._isNavbarFixed = function _isNavbarFixed() {
      var $body = $__default["default"]('body');
      return $body.hasClass(CLASS_NAME_NAVBAR_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_SM_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_MD_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_LG_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_XL_FIXED);
    };

    _proto._isFooterFixed = function _isFooterFixed() {
      var $body = $__default["default"]('body');
      return $body.hasClass(CLASS_NAME_FOOTER_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_SM_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_MD_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_LG_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_XL_FIXED);
    };

    _proto._fixScrollHeight = function _fixScrollHeight() {
      var $body = $__default["default"]('body');
      var $controlSidebar = $__default["default"](this._config.target);

      if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED$1)) {
        return;
      }

      var heights = {
        scroll: $__default["default"](document).height(),
        window: $__default["default"](window).height(),
        header: $__default["default"](SELECTOR_HEADER$1).outerHeight(),
        footer: $__default["default"](SELECTOR_FOOTER$1).outerHeight()
      };
      var positions = {
        bottom: Math.abs(heights.window + $__default["default"](window).scrollTop() - heights.scroll),
        top: $__default["default"](window).scrollTop()
      };
      var navbarFixed = this._isNavbarFixed() && $__default["default"](SELECTOR_HEADER$1).css('position') === 'fixed';
      var footerFixed = this._isFooterFixed() && $__default["default"](SELECTOR_FOOTER$1).css('position') === 'fixed';
      var $controlsidebarContent = $__default["default"](this._config.target + ", " + this._config.target + " " + SELECTOR_CONTROL_SIDEBAR_CONTENT$1);

      if (positions.top === 0 && positions.bottom === 0) {
        $controlSidebar.css({
          bottom: heights.footer,
          top: heights.header
        });
        $controlsidebarContent.css('height', heights.window - (heights.header + heights.footer));
      } else if (positions.bottom <= heights.footer) {
        if (footerFixed === false) {
          var top = heights.header - positions.top;
          $controlSidebar.css('bottom', heights.footer - positions.bottom).css('top', top >= 0 ? top : 0);
          $controlsidebarContent.css('height', heights.window - (heights.footer - positions.bottom));
        } else {
          $controlSidebar.css('bottom', heights.footer);
        }
      } else if (positions.top <= heights.header) {
        if (navbarFixed === false) {
          $controlSidebar.css('top', heights.header - positions.top);
          $controlsidebarContent.css('height', heights.window - (heights.header - positions.top));
        } else {
          $controlSidebar.css('top', heights.header);
        }
      } else if (navbarFixed === false) {
        $controlSidebar.css('top', 0);
        $controlsidebarContent.css('height', heights.window);
      } else {
        $controlSidebar.css('top', heights.header);
      }

      if (footerFixed && navbarFixed) {
        $controlsidebarContent.css('height', '100%');
        $controlSidebar.css('height', '');
      } else if (footerFixed || navbarFixed) {
        $controlsidebarContent.css('height', '100%');
        $controlsidebarContent.css('height', '');
      }
    };

    _proto._fixHeight = function _fixHeight() {
      var $body = $__default["default"]('body');
      var $controlSidebar = $__default["default"](this._config.target + " " + SELECTOR_CONTROL_SIDEBAR_CONTENT$1);

      if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED$1)) {
        $controlSidebar.attr('style', '');
        return;
      }

      var heights = {
        window: $__default["default"](window).height(),
        header: $__default["default"](SELECTOR_HEADER$1).outerHeight(),
        footer: $__default["default"](SELECTOR_FOOTER$1).outerHeight()
      };
      var sidebarHeight = heights.window - heights.header;

      if (this._isFooterFixed() && $__default["default"](SELECTOR_FOOTER$1).css('position') === 'fixed') {
        sidebarHeight = heights.window - heights.header - heights.footer;
      }

      $controlSidebar.css('height', sidebarHeight);

      if (typeof $__default["default"].fn.overlayScrollbars !== 'undefined') {
        $controlSidebar.overlayScrollbars({
          className: this._config.scrollbarTheme,
          sizeAutoCapable: true,
          scrollbars: {
            autoHide: this._config.scrollbarAutoHide,
            clickScrolling: true
          }
        });
      }
    } // Static
    ;

    ControlSidebar._jQueryInterface = function _jQueryInterface(operation) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$c);

        var _options = $__default["default"].extend({}, Default$a, $__default["default"](this).data());

        if (!data) {
          data = new ControlSidebar(this, _options);
          $__default["default"](this).data(DATA_KEY$c, data);
        }

        if (data[operation] === 'undefined') {
          throw new Error(operation + " is not a function");
        }

        data[operation]();
      });
    };

    return ControlSidebar;
  }();
  /**
   *
   * Data Api implementation
   * ====================================================
   */


  $__default["default"](document).on('click', SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();

    ControlSidebar._jQueryInterface.call($__default["default"](this), 'toggle');
  });
  $__default["default"](document).ready(function () {
    ControlSidebar._jQueryInterface.call($__default["default"](SELECTOR_DATA_TOGGLE$4), '_init');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default["default"].fn[NAME$c] = ControlSidebar._jQueryInterface;
  $__default["default"].fn[NAME$c].Constructor = ControlSidebar;

  $__default["default"].fn[NAME$c].noConflict = function () {
    $__default["default"].fn[NAME$c] = JQUERY_NO_CONFLICT$c;
    return ControlSidebar._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE DirectChat.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$b = 'DirectChat';
  var DATA_KEY$b = 'lte.directchat';
  var EVENT_KEY$4 = "." + DATA_KEY$b;
  var JQUERY_NO_CONFLICT$b = $__default["default"].fn[NAME$b];
  var EVENT_TOGGLED = "toggled" + EVENT_KEY$4;
  var SELECTOR_DATA_TOGGLE$3 = '[data-widget="chat-pane-toggle"]';
  var SELECTOR_DIRECT_CHAT = '.direct-chat';
  var CLASS_NAME_DIRECT_CHAT_OPEN = 'direct-chat-contacts-open';
  /**
   * Class Definition
   * ====================================================
   */

  var DirectChat = /*#__PURE__*/function () {
    function DirectChat(element) {
      this._element = element;
    }

    var _proto = DirectChat.prototype;

    _proto.toggle = function toggle() {
      $__default["default"](this._element).parents(SELECTOR_DIRECT_CHAT).first().toggleClass(CLASS_NAME_DIRECT_CHAT_OPEN);
      $__default["default"](this._element).trigger($__default["default"].Event(EVENT_TOGGLED));
    } // Static
    ;

    DirectChat._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$b);

        if (!data) {
          data = new DirectChat($__default["default"](this));
          $__default["default"](this).data(DATA_KEY$b, data);
        }

        data[config]();
      });
    };

    return DirectChat;
  }();
  /**
   *
   * Data Api implementation
   * ====================================================
   */


  $__default["default"](document).on('click', SELECTOR_DATA_TOGGLE$3, function (event) {
    if (event) {
      event.preventDefault();
    }

    DirectChat._jQueryInterface.call($__default["default"](this), 'toggle');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default["default"].fn[NAME$b] = DirectChat._jQueryInterface;
  $__default["default"].fn[NAME$b].Constructor = DirectChat;

  $__default["default"].fn[NAME$b].noConflict = function () {
    $__default["default"].fn[NAME$b] = JQUERY_NO_CONFLICT$b;
    return DirectChat._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE Dropdown.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$a = 'Dropdown';
  var DATA_KEY$a = 'lte.dropdown';
  var JQUERY_NO_CONFLICT$a = $__default["default"].fn[NAME$a];
  var SELECTOR_NAVBAR = '.navbar';
  var SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
  var SELECTOR_DROPDOWN_MENU_ACTIVE = '.dropdown-menu.show';
  var SELECTOR_DROPDOWN_TOGGLE = '[data-toggle="dropdown"]';
  var CLASS_NAME_DROPDOWN_RIGHT = 'dropdown-menu-right';
  var CLASS_NAME_DROPDOWN_SUBMENU = 'dropdown-submenu'; // TODO: this is unused; should be removed along with the extend?

  var Default$9 = {};
  /**
   * Class Definition
   * ====================================================
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._config = config;
      this._element = element;
    } // Public


    var _proto = Dropdown.prototype;

    _proto.toggleSubmenu = function toggleSubmenu() {
      this._element.siblings().show().toggleClass('show');

      if (!this._element.next().hasClass('show')) {
        this._element.parents(SELECTOR_DROPDOWN_MENU).first().find('.show').removeClass('show').hide();
      }

      this._element.parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function () {
        $__default["default"]('.dropdown-submenu .show').removeClass('show').hide();
      });
    };

    _proto.fixPosition = function fixPosition() {
      var $element = $__default["default"](SELECTOR_DROPDOWN_MENU_ACTIVE);

      if ($element.length === 0) {
        return;
      }

      if ($element.hasClass(CLASS_NAME_DROPDOWN_RIGHT)) {
        $element.css({
          left: 'inherit',
          right: 0
        });
      } else {
        $element.css({
          left: 0,
          right: 'inherit'
        });
      }

      var offset = $element.offset();
      var width = $element.width();
      var visiblePart = $__default["default"](window).width() - offset.left;

      if (offset.left < 0) {
        $element.css({
          left: 'inherit',
          right: offset.left - 5
        });
      } else if (visiblePart < width) {
        $element.css({
          left: 'inherit',
          right: 0
        });
      }
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$a);

        var _config = $__default["default"].extend({}, Default$9, $__default["default"](this).data());

        if (!data) {
          data = new Dropdown($__default["default"](this), _config);
          $__default["default"](this).data(DATA_KEY$a, data);
        }

        if (config === 'toggleSubmenu' || config === 'fixPosition') {
          data[config]();
        }
      });
    };

    return Dropdown;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default["default"](SELECTOR_DROPDOWN_MENU + " " + SELECTOR_DROPDOWN_TOGGLE).on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($__default["default"](this), 'toggleSubmenu');
  });
  $__default["default"](SELECTOR_NAVBAR + " " + SELECTOR_DROPDOWN_TOGGLE).on('click', function (event) {
    event.preventDefault();

    if ($__default["default"](event.target).parent().hasClass(CLASS_NAME_DROPDOWN_SUBMENU)) {
      return;
    }

    setTimeout(function () {
      Dropdown._jQueryInterface.call($__default["default"](this), 'fixPosition');
    }, 1);
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default["default"].fn[NAME$a] = Dropdown._jQueryInterface;
  $__default["default"].fn[NAME$a].Constructor = Dropdown;

  $__default["default"].fn[NAME$a].noConflict = function () {
    $__default["default"].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Dropdown._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE ExpandableTable.js
   * License MIT
   * --------------------------------------------
   */
  /**
    * Constants
    * ====================================================
    */

  var NAME$9 = 'ExpandableTable';
  var DATA_KEY$9 = 'lte.expandableTable';
  var EVENT_KEY$3 = "." + DATA_KEY$9;
  var JQUERY_NO_CONFLICT$9 = $__default["default"].fn[NAME$9];
  var EVENT_EXPANDED$1 = "expanded" + EVENT_KEY$3;
  var EVENT_COLLAPSED$2 = "collapsed" + EVENT_KEY$3;
  var SELECTOR_TABLE = '.expandable-table';
  var SELECTOR_EXPANDABLE_BODY = '.expandable-body';
  var SELECTOR_DATA_TOGGLE$2 = '[data-widget="expandable-table"]';
  var SELECTOR_ARIA_ATTR = 'aria-expanded';
  /**
    * Class Definition
    * ====================================================
    */

  var ExpandableTable = /*#__PURE__*/function () {
    function ExpandableTable(element, options) {
      this._options = options;
      this._element = element;
    } // Public


    var _proto = ExpandableTable.prototype;

    _proto.init = function init() {
      $__default["default"](SELECTOR_DATA_TOGGLE$2).each(function (_, $header) {
        var $type = $__default["default"]($header).attr(SELECTOR_ARIA_ATTR);
        var $body = $__default["default"]($header).next(SELECTOR_EXPANDABLE_BODY).children().first().children();

        if ($type === 'true') {
          $body.show();
        } else if ($type === 'false') {
          $body.hide();
          $body.parent().parent().addClass('d-none');
        }
      });
    };

    _proto.toggleRow = function toggleRow() {
      var $element = this._element;

      if ($element[0].nodeName !== 'TR') {
        $element = $element.parent();

        if ($element[0].nodeName !== 'TR') {
          $element = $element.parent();
        }
      }

      var time = 500;
      var $type = $element.attr(SELECTOR_ARIA_ATTR);
      var $body = $element.next(SELECTOR_EXPANDABLE_BODY).children().first().children();
      $body.stop();

      if ($type === 'true') {
        $body.slideUp(time, function () {
          $element.next(SELECTOR_EXPANDABLE_BODY).addClass('d-none');
        });
        $element.attr(SELECTOR_ARIA_ATTR, 'false');
        $element.trigger($__default["default"].Event(EVENT_COLLAPSED$2));
      } else if ($type === 'false') {
        $element.next(SELECTOR_EXPANDABLE_BODY).removeClass('d-none');
        $body.slideDown(time);
        $element.attr(SELECTOR_ARIA_ATTR, 'true');
        $element.trigger($__default["default"].Event(EVENT_EXPANDED$1));
      }
    } // Static
    ;

    ExpandableTable._jQueryInterface = function _jQueryInterface(operation) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$9);

        if (!data) {
          data = new ExpandableTable($__default["default"](this));
          $__default["default"](this).data(DATA_KEY$9, data);
        }

        if (typeof operation === 'string' && /init|toggleRow/.test(operation)) {
          data[operation]();
        }
      });
    };

    return ExpandableTable;
  }();
  /**
    * Data API
    * ====================================================
    */


  $__default["default"](SELECTOR_TABLE).ready(function () {
    ExpandableTable._jQueryInterface.call($__default["default"](this), 'init');
  });
  $__default["default"](document).on('click', SELECTOR_DATA_TOGGLE$2, function () {
    ExpandableTable._jQueryInterface.call($__default["default"](this), 'toggleRow');
  });
  /**
    * jQuery API
    * ====================================================
    */

  $__default["default"].fn[NAME$9] = ExpandableTable._jQueryInterface;
  $__default["default"].fn[NAME$9].Constructor = ExpandableTable;

  $__default["default"].fn[NAME$9].noConflict = function () {
    $__default["default"].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return ExpandableTable._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE Fullscreen.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$8 = 'Fullscreen';
  var DATA_KEY$8 = 'lte.fullscreen';
  var JQUERY_NO_CONFLICT$8 = $__default["default"].fn[NAME$8];
  var SELECTOR_DATA_WIDGET$2 = '[data-widget="fullscreen"]';
  var SELECTOR_ICON = SELECTOR_DATA_WIDGET$2 + " i";
  var EVENT_FULLSCREEN_CHANGE = 'webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange';
  var Default$8 = {
    minimizeIcon: 'fa-compress-arrows-alt',
    maximizeIcon: 'fa-expand-arrows-alt'
  };
  /**
   * Class Definition
   * ====================================================
   */

  var Fullscreen = /*#__PURE__*/function () {
    function Fullscreen(_element, _options) {
      this.element = _element;
      this.options = $__default["default"].extend({}, Default$8, _options);
    } // Public


    var _proto = Fullscreen.prototype;

    _proto.toggle = function toggle() {
      if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        this.windowed();
      } else {
        this.fullscreen();
      }
    };

    _proto.toggleIcon = function toggleIcon() {
      if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        $__default["default"](SELECTOR_ICON).removeClass(this.options.maximizeIcon).addClass(this.options.minimizeIcon);
      } else {
        $__default["default"](SELECTOR_ICON).removeClass(this.options.minimizeIcon).addClass(this.options.maximizeIcon);
      }
    };

    _proto.fullscreen = function fullscreen() {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    };

    _proto.windowed = function windowed() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } // Static
    ;

    Fullscreen._jQueryInterface = function _jQueryInterface(config) {
      var data = $__default["default"](this).data(DATA_KEY$8);

      if (!data) {
        data = $__default["default"](this).data();
      }

      var _options = $__default["default"].extend({}, Default$8, typeof config === 'object' ? config : data);

      var plugin = new Fullscreen($__default["default"](this), _options);
      $__default["default"](this).data(DATA_KEY$8, typeof config === 'object' ? config : data);

      if (typeof config === 'string' && /toggle|toggleIcon|fullscreen|windowed/.test(config)) {
        plugin[config]();
      } else {
        plugin.init();
      }
    };

    return Fullscreen;
  }();
  /**
    * Data API
    * ====================================================
    */


  $__default["default"](document).on('click', SELECTOR_DATA_WIDGET$2, function () {
    Fullscreen._jQueryInterface.call($__default["default"](this), 'toggle');
  });
  $__default["default"](document).on(EVENT_FULLSCREEN_CHANGE, function () {
    Fullscreen._jQueryInterface.call($__default["default"](SELECTOR_DATA_WIDGET$2), 'toggleIcon');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default["default"].fn[NAME$8] = Fullscreen._jQueryInterface;
  $__default["default"].fn[NAME$8].Constructor = Fullscreen;

  $__default["default"].fn[NAME$8].noConflict = function () {
    $__default["default"].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return Fullscreen._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE IFrame.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$7 = 'IFrame';
  var DATA_KEY$7 = 'lte.iframe';
  var JQUERY_NO_CONFLICT$7 = $__default["default"].fn[NAME$7];
  var SELECTOR_DATA_TOGGLE$1 = '[data-widget="iframe"]';
  var SELECTOR_DATA_TOGGLE_CLOSE = '[data-widget="iframe-close"]';
  var SELECTOR_DATA_TOGGLE_SCROLL_LEFT = '[data-widget="iframe-scrollleft"]';
  var SELECTOR_DATA_TOGGLE_SCROLL_RIGHT = '[data-widget="iframe-scrollright"]';
  var SELECTOR_DATA_TOGGLE_FULLSCREEN = '[data-widget="iframe-fullscreen"]';
  var SELECTOR_CONTENT_WRAPPER = '.content-wrapper';
  var SELECTOR_CONTENT_IFRAME = SELECTOR_CONTENT_WRAPPER + " iframe";
  var SELECTOR_TAB_NAV = SELECTOR_CONTENT_WRAPPER + ".iframe-mode .nav";
  var SELECTOR_TAB_NAVBAR_NAV = SELECTOR_CONTENT_WRAPPER + ".iframe-mode .navbar-nav";
  var SELECTOR_TAB_NAVBAR_NAV_ITEM = SELECTOR_TAB_NAVBAR_NAV + " .nav-item";
  var SELECTOR_TAB_NAVBAR_NAV_LINK = SELECTOR_TAB_NAVBAR_NAV + " .nav-link";
  var SELECTOR_TAB_CONTENT = SELECTOR_CONTENT_WRAPPER + ".iframe-mode .tab-content";
  var SELECTOR_TAB_EMPTY = SELECTOR_TAB_CONTENT + " .tab-empty";
  var SELECTOR_TAB_LOADING = SELECTOR_TAB_CONTENT + " .tab-loading";
  var SELECTOR_TAB_PANE = SELECTOR_TAB_CONTENT + " .tab-pane";
  var SELECTOR_SIDEBAR_MENU_ITEM = '.main-sidebar .nav-item > a.nav-link';
  var SELECTOR_SIDEBAR_SEARCH_ITEM = '.sidebar-search-results .list-group-item';
  var SELECTOR_HEADER_MENU_ITEM = '.main-header .nav-item a.nav-link';
  var SELECTOR_HEADER_DROPDOWN_ITEM = '.main-header a.dropdown-item';
  var CLASS_NAME_IFRAME_MODE$1 = 'iframe-mode';
  var CLASS_NAME_FULLSCREEN_MODE = 'iframe-mode-fullscreen';
  var Default$7 = {
    onTabClick: function onTabClick(item) {
      return item;
    },
    onTabChanged: function onTabChanged(item) {
      return item;
    },
    onTabCreated: function onTabCreated(item) {
      return item;
    },
    autoIframeMode: true,
    autoItemActive: true,
    autoShowNewTab: true,
    autoDarkMode: false,
    allowDuplicates: false,
    allowReload: true,
    loadingScreen: true,
    useNavbarItems: true,
    scrollOffset: 40,
    scrollBehaviorSwap: false,
    iconMaximize: 'fa-expand',
    iconMinimize: 'fa-compress'
  };
  /**
   * Class Definition
   * ====================================================
   */

  var IFrame = /*#__PURE__*/function () {
    function IFrame(element, config) {
      this._config = config;
      this._element = element;

      this._init();
    } // Public


    var _proto = IFrame.prototype;

    _proto.onTabClick = function onTabClick(item) {
      this._config.onTabClick(item);
    };

    _proto.onTabChanged = function onTabChanged(item) {
      this._config.onTabChanged(item);
    };

    _proto.onTabCreated = function onTabCreated(item) {
      this._config.onTabCreated(item);
    };

    _proto.createTab = function createTab(title, link, uniqueName, autoOpen) {
      var _this = this;

      var tabId = "panel-" + uniqueName;
      var navId = "tab-" + uniqueName;

      if (this._config.allowDuplicates) {
        tabId += "-" + Math.floor(Math.random() * 1000);
        navId += "-" + Math.floor(Math.random() * 1000);
      }

      var newNavItem = "<li class=\"nav-item\" role=\"presentation\"><a href=\"#\" class=\"btn-iframe-close\" data-widget=\"iframe-close\" data-type=\"only-this\"><i class=\"fas fa-times\"></i></a><a class=\"nav-link\" data-toggle=\"row\" id=\"" + navId + "\" href=\"#" + tabId + "\" role=\"tab\" aria-controls=\"" + tabId + "\" aria-selected=\"false\">" + title + "</a></li>";
      $__default["default"](SELECTOR_TAB_NAVBAR_NAV).append(unescape(escape(newNavItem)));
      var newTabItem = "<div class=\"tab-pane fade\" id=\"" + tabId + "\" role=\"tabpanel\" aria-labelledby=\"" + navId + "\"><iframe src=\"" + link + "\"></iframe></div>";
      $__default["default"](SELECTOR_TAB_CONTENT).append(unescape(escape(newTabItem)));

      if (autoOpen) {
        if (this._config.loadingScreen) {
          var $loadingScreen = $__default["default"](SELECTOR_TAB_LOADING);
          $loadingScreen.fadeIn();
          $__default["default"](tabId + " iframe").ready(function () {
            if (typeof _this._config.loadingScreen === 'number') {
              _this.switchTab("#" + navId);

              setTimeout(function () {
                $loadingScreen.fadeOut();
              }, _this._config.loadingScreen);
            } else {
              _this.switchTab("#" + navId);

              $loadingScreen.fadeOut();
            }
          });
        } else {
          this.switchTab("#" + navId);
        }
      }

      this.onTabCreated($__default["default"]("#" + navId));
    };

    _proto.openTabSidebar = function openTabSidebar(item, autoOpen) {
      if (autoOpen === void 0) {
        autoOpen = this._config.autoShowNewTab;
      }

      var $item = $__default["default"](item).clone();

      if ($item.attr('href') === undefined) {
        $item = $__default["default"](item).parent('a').clone();
      }

      $item.find('.right, .search-path').remove();
      var title = $item.find('p').text();

      if (title === '') {
        title = $item.text();
      }

      var link = $item.attr('href');

      if (link === '#' || link === '' || link === undefined) {
        return;
      }

      var uniqueName = unescape(link).replace('./', '').replace(/["#&'./:=?[\]]/gi, '-').replace(/(--)/gi, '');
      var navId = "tab-" + uniqueName;

      if (!this._config.allowDuplicates && $__default["default"]("#" + navId).length > 0) {
        return this.switchTab("#" + navId, this._config.allowReload);
      }

      if (!this._config.allowDuplicates && $__default["default"]("#" + navId).length === 0 || this._config.allowDuplicates) {
        this.createTab(title, link, uniqueName, autoOpen);
      }
    };

    _proto.switchTab = function switchTab(item, reload) {
      var _this2 = this;

      if (reload === void 0) {
        reload = false;
      }

      var $item = $__default["default"](item);
      var tabId = $item.attr('href');
      $__default["default"](SELECTOR_TAB_EMPTY).hide();

      if (reload) {
        var $loadingScreen = $__default["default"](SELECTOR_TAB_LOADING);

        if (this._config.loadingScreen) {
          $loadingScreen.show(0, function () {
            $__default["default"](tabId + " iframe").attr('src', $__default["default"](tabId + " iframe").attr('src')).ready(function () {
              if (_this2._config.loadingScreen) {
                if (typeof _this2._config.loadingScreen === 'number') {
                  setTimeout(function () {
                    $loadingScreen.fadeOut();
                  }, _this2._config.loadingScreen);
                } else {
                  $loadingScreen.fadeOut();
                }
              }
            });
          });
        } else {
          $__default["default"](tabId + " iframe").attr('src', $__default["default"](tabId + " iframe").attr('src'));
        }
      }

      $__default["default"](SELECTOR_TAB_NAVBAR_NAV + " .active").tab('dispose').removeClass('active');

      this._fixHeight();

      $item.tab('show');
      $item.parents('li').addClass('active');
      this.onTabChanged($item);

      if (this._config.autoItemActive) {
        this._setItemActive($__default["default"](tabId + " iframe").attr('src'));
      }
    };

    _proto.removeActiveTab = function removeActiveTab(type, element) {
      if (type == 'all') {
        $__default["default"](SELECTOR_TAB_NAVBAR_NAV_ITEM).remove();
        $__default["default"](SELECTOR_TAB_PANE).remove();
        $__default["default"](SELECTOR_TAB_EMPTY).show();
      } else if (type == 'all-other') {
        $__default["default"](SELECTOR_TAB_NAVBAR_NAV_ITEM + ":not(.active)").remove();
        $__default["default"](SELECTOR_TAB_PANE + ":not(.active)").remove();
      } else if (type == 'only-this') {
        var $navClose = $__default["default"](element);
        var $navItem = $navClose.parent('.nav-item');
        var $navItemParent = $navItem.parent();
        var navItemIndex = $navItem.index();
        var tabId = $navClose.siblings('.nav-link').attr('aria-controls');
        $navItem.remove();
        $__default["default"]("#" + tabId).remove();

        if ($__default["default"](SELECTOR_TAB_CONTENT).children().length == $__default["default"](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).length) {
          $__default["default"](SELECTOR_TAB_EMPTY).show();
        } else {
          var prevNavItemIndex = navItemIndex - 1;
          this.switchTab($navItemParent.children().eq(prevNavItemIndex).find('a.nav-link'));
        }
      } else {
        var _$navItem = $__default["default"](SELECTOR_TAB_NAVBAR_NAV_ITEM + ".active");

        var _$navItemParent = _$navItem.parent();

        var _navItemIndex = _$navItem.index();

        _$navItem.remove();

        $__default["default"](SELECTOR_TAB_PANE + ".active").remove();

        if ($__default["default"](SELECTOR_TAB_CONTENT).children().length == $__default["default"](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).length) {
          $__default["default"](SELECTOR_TAB_EMPTY).show();
        } else {
          var _prevNavItemIndex = _navItemIndex - 1;

          this.switchTab(_$navItemParent.children().eq(_prevNavItemIndex).find('a.nav-link'));
        }
      }
    };

    _proto.toggleFullscreen = function toggleFullscreen() {
      if ($__default["default"]('body').hasClass(CLASS_NAME_FULLSCREEN_MODE)) {
        $__default["default"](SELECTOR_DATA_TOGGLE_FULLSCREEN + " i").removeClass(this._config.iconMinimize).addClass(this._config.iconMaximize);
        $__default["default"]('body').removeClass(CLASS_NAME_FULLSCREEN_MODE);
        $__default["default"](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).height('100%');
        $__default["default"](SELECTOR_CONTENT_WRAPPER).height('100%');
        $__default["default"](SELECTOR_CONTENT_IFRAME).height('100%');
      } else {
        $__default["default"](SELECTOR_DATA_TOGGLE_FULLSCREEN + " i").removeClass(this._config.iconMaximize).addClass(this._config.iconMinimize);
        $__default["default"]('body').addClass(CLASS_NAME_FULLSCREEN_MODE);
      }

      $__default["default"](window).trigger('resize');

      this._fixHeight(true);
    } // Private
    ;

    _proto._init = function _init() {
      var usingDefTab = $__default["default"](SELECTOR_TAB_CONTENT).children().length > 2;

      this._setupListeners();

      this._fixHeight(true);

      if (usingDefTab) {
        var $el = $__default["default"]("" + SELECTOR_TAB_PANE).first(); // eslint-disable-next-line no-console

        console.log($el);
        var uniqueName = $el.attr('id').replace('panel-', '');
        var navId = "#tab-" + uniqueName;
        this.switchTab(navId, true);
      }
    };

    _proto._initFrameElement = function _initFrameElement() {
      if (window.frameElement && this._config.autoIframeMode) {
        var $body = $__default["default"]('body');
        $body.addClass(CLASS_NAME_IFRAME_MODE$1);

        if (this._config.autoDarkMode) {
          $body.addClass('dark-mode');
        }
      }
    };

    _proto._navScroll = function _navScroll(offset) {
      var leftPos = $__default["default"](SELECTOR_TAB_NAVBAR_NAV).scrollLeft();
      $__default["default"](SELECTOR_TAB_NAVBAR_NAV).animate({
        scrollLeft: leftPos + offset
      }, 250, 'linear');
    };

    _proto._setupListeners = function _setupListeners() {
      var _this3 = this;

      $__default["default"](window).on('resize', function () {
        setTimeout(function () {
          _this3._fixHeight();
        }, 1);
      });

      if ($__default["default"](SELECTOR_CONTENT_WRAPPER).hasClass(CLASS_NAME_IFRAME_MODE$1)) {
        $__default["default"](document).on('click', SELECTOR_SIDEBAR_MENU_ITEM + ", " + SELECTOR_SIDEBAR_SEARCH_ITEM, function (e) {
          e.preventDefault();

          _this3.openTabSidebar(e.target);
        });

        if (this._config.useNavbarItems) {
          $__default["default"](document).on('click', SELECTOR_HEADER_MENU_ITEM + ", " + SELECTOR_HEADER_DROPDOWN_ITEM, function (e) {
            e.preventDefault();

            _this3.openTabSidebar(e.target);
          });
        }
      }

      $__default["default"](document).on('click', SELECTOR_TAB_NAVBAR_NAV_LINK, function (e) {
        e.preventDefault();

        _this3.onTabClick(e.target);

        _this3.switchTab(e.target);
      });
      $__default["default"](document).on('click', SELECTOR_TAB_NAVBAR_NAV_LINK, function (e) {
        e.preventDefault();

        _this3.onTabClick(e.target);

        _this3.switchTab(e.target);
      });
      $__default["default"](document).on('click', SELECTOR_DATA_TOGGLE_CLOSE, function (e) {
        e.preventDefault();
        var target = e.target;

        if (target.nodeName == 'I') {
          target = e.target.offsetParent;
        }

        _this3.removeActiveTab(target.attributes['data-type'] ? target.attributes['data-type'].nodeValue : null, target);
      });
      $__default["default"](document).on('click', SELECTOR_DATA_TOGGLE_FULLSCREEN, function (e) {
        e.preventDefault();

        _this3.toggleFullscreen();
      });
      var mousedown = false;
      var mousedownInterval = null;
      $__default["default"](document).on('mousedown', SELECTOR_DATA_TOGGLE_SCROLL_LEFT, function (e) {
        e.preventDefault();
        clearInterval(mousedownInterval);
        var scrollOffset = _this3._config.scrollOffset;

        if (!_this3._config.scrollBehaviorSwap) {
          scrollOffset = -scrollOffset;
        }

        mousedown = true;

        _this3._navScroll(scrollOffset);

        mousedownInterval = setInterval(function () {
          _this3._navScroll(scrollOffset);
        }, 250);
      });
      $__default["default"](document).on('mousedown', SELECTOR_DATA_TOGGLE_SCROLL_RIGHT, function (e) {
        e.preventDefault();
        clearInterval(mousedownInterval);
        var scrollOffset = _this3._config.scrollOffset;

        if (_this3._config.scrollBehaviorSwap) {
          scrollOffset = -scrollOffset;
        }

        mousedown = true;

        _this3._navScroll(scrollOffset);

        mousedownInterval = setInterval(function () {
          _this3._navScroll(scrollOffset);
        }, 250);
      });
      $__default["default"](document).on('mouseup', function () {
        if (mousedown) {
          mousedown = false;
          clearInterval(mousedownInterval);
          mousedownInterval = null;
        }
      });
    };

    _proto._setItemActive = function _setItemActive(href) {
      $__default["default"](SELECTOR_SIDEBAR_MENU_ITEM + ", " + SELECTOR_HEADER_DROPDOWN_ITEM).removeClass('active');
      $__default["default"](SELECTOR_HEADER_MENU_ITEM).parent().removeClass('active');
      var $headerMenuItem = $__default["default"](SELECTOR_HEADER_MENU_ITEM + "[href$=\"" + href + "\"]");
      var $headerDropdownItem = $__default["default"](SELECTOR_HEADER_DROPDOWN_ITEM + "[href$=\"" + href + "\"]");
      var $sidebarMenuItem = $__default["default"](SELECTOR_SIDEBAR_MENU_ITEM + "[href$=\"" + href + "\"]");
      $headerMenuItem.each(function (i, e) {
        $__default["default"](e).parent().addClass('active');
      });
      $headerDropdownItem.each(function (i, e) {
        $__default["default"](e).addClass('active');
      });
      $sidebarMenuItem.each(function (i, e) {
        $__default["default"](e).addClass('active');
        $__default["default"](e).parents('.nav-treeview').prevAll('.nav-link').addClass('active');
      });
    };

    _proto._fixHeight = function _fixHeight(tabEmpty) {
      if (tabEmpty === void 0) {
        tabEmpty = false;
      }

      if ($__default["default"]('body').hasClass(CLASS_NAME_FULLSCREEN_MODE)) {
        var windowHeight = $__default["default"](window).height();
        var navbarHeight = $__default["default"](SELECTOR_TAB_NAV).outerHeight();
        $__default["default"](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING + ", " + SELECTOR_CONTENT_IFRAME).height(windowHeight - navbarHeight);
        $__default["default"](SELECTOR_CONTENT_WRAPPER).height(windowHeight);
      } else {
        var contentWrapperHeight = parseFloat($__default["default"](SELECTOR_CONTENT_WRAPPER).css('height'));

        var _navbarHeight = $__default["default"](SELECTOR_TAB_NAV).outerHeight();

        if (tabEmpty == true) {
          setTimeout(function () {
            $__default["default"](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).height(contentWrapperHeight - _navbarHeight);
          }, 50);
        } else {
          $__default["default"](SELECTOR_CONTENT_IFRAME).height(contentWrapperHeight - _navbarHeight);
        }
      }
    } // Static
    ;

    IFrame._jQueryInterface = function _jQueryInterface(config) {
      if ($__default["default"](SELECTOR_DATA_TOGGLE$1).length > 0) {
        var data = $__default["default"](this).data(DATA_KEY$7);

        if (!data) {
          data = $__default["default"](this).data();
        }

        var _options = $__default["default"].extend({}, Default$7, typeof config === 'object' ? config : data);

        localStorage.setItem('AdminLTE:IFrame:Options', JSON.stringify(_options));
        var plugin = new IFrame($__default["default"](this), _options);
        $__default["default"](this).data(DATA_KEY$7, typeof config === 'object' ? config : data);

        if (typeof config === 'string' && /createTab|openTabSidebar|switchTab|removeActiveTab/.test(config)) {
          plugin[config]();
        }
      } else {
        new IFrame($__default["default"](this), JSON.parse(localStorage.getItem('AdminLTE:IFrame:Options')))._initFrameElement();
      }
    };

    return IFrame;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default["default"](window).on('load', function () {
    IFrame._jQueryInterface.call($__default["default"](SELECTOR_DATA_TOGGLE$1));
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default["default"].fn[NAME$7] = IFrame._jQueryInterface;
  $__default["default"].fn[NAME$7].Constructor = IFrame;

  $__default["default"].fn[NAME$7].noConflict = function () {
    $__default["default"].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return IFrame._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE Layout.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$6 = 'Layout';
  var DATA_KEY$6 = 'lte.layout';
  var JQUERY_NO_CONFLICT$6 = $__default["default"].fn[NAME$6];
  var SELECTOR_HEADER = '.main-header';
  var SELECTOR_MAIN_SIDEBAR = '.main-sidebar';
  var SELECTOR_SIDEBAR$1 = '.main-sidebar .sidebar';
  var SELECTOR_CONTENT = '.content-wrapper';
  var SELECTOR_CONTROL_SIDEBAR_CONTENT = '.control-sidebar-content';
  var SELECTOR_CONTROL_SIDEBAR_BTN = '[data-widget="control-sidebar"]';
  var SELECTOR_FOOTER = '.main-footer';
  var SELECTOR_PUSHMENU_BTN = '[data-widget="pushmenu"]';
  var SELECTOR_LOGIN_BOX = '.login-box';
  var SELECTOR_REGISTER_BOX = '.register-box';
  var SELECTOR_PRELOADER = '.preloader';
  var CLASS_NAME_SIDEBAR_COLLAPSED$1 = 'sidebar-collapse';
  var CLASS_NAME_SIDEBAR_FOCUSED = 'sidebar-focused';
  var CLASS_NAME_LAYOUT_FIXED = 'layout-fixed';
  var CLASS_NAME_CONTROL_SIDEBAR_SLIDE_OPEN = 'control-sidebar-slide-open';
  var CLASS_NAME_CONTROL_SIDEBAR_OPEN = 'control-sidebar-open';
  var CLASS_NAME_IFRAME_MODE = 'iframe-mode';
  var Default$6 = {
    scrollbarTheme: 'os-theme-light',
    scrollbarAutoHide: 'l',
    panelAutoHeight: true,
    panelAutoHeightMode: 'min-height',
    preloadDuration: 200,
    loginRegisterAutoHeight: true
  };
  /**
   * Class Definition
   * ====================================================
   */

  var Layout = /*#__PURE__*/function () {
    function Layout(element, config) {
      this._config = config;
      this._element = element;
    } // Public


    var _proto = Layout.prototype;

    _proto.fixLayoutHeight = function fixLayoutHeight(extra) {
      if (extra === void 0) {
        extra = null;
      }

      var $body = $__default["default"]('body');
      var controlSidebar = 0;

      if ($body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE_OPEN) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN) || extra === 'control_sidebar') {
        controlSidebar = $__default["default"](SELECTOR_CONTROL_SIDEBAR_CONTENT).outerHeight();
      }

      var heights = {
        window: $__default["default"](window).height(),
        header: $__default["default"](SELECTOR_HEADER).length > 0 ? $__default["default"](SELECTOR_HEADER).outerHeight() : 0,
        footer: $__default["default"](SELECTOR_FOOTER).length > 0 ? $__default["default"](SELECTOR_FOOTER).outerHeight() : 0,
        sidebar: $__default["default"](SELECTOR_SIDEBAR$1).length > 0 ? $__default["default"](SELECTOR_SIDEBAR$1).height() : 0,
        controlSidebar: controlSidebar
      };

      var max = this._max(heights);

      var offset = this._config.panelAutoHeight;

      if (offset === true) {
        offset = 0;
      }

      var $contentSelector = $__default["default"](SELECTOR_CONTENT);

      if (offset !== false) {
        if (max === heights.controlSidebar) {
          $contentSelector.css(this._config.panelAutoHeightMode, max + offset);
        } else if (max === heights.window) {
          $contentSelector.css(this._config.panelAutoHeightMode, max + offset - heights.header - heights.footer);
        } else {
          $contentSelector.css(this._config.panelAutoHeightMode, max + offset - heights.header);
        }

        if (this._isFooterFixed()) {
          $contentSelector.css(this._config.panelAutoHeightMode, parseFloat($contentSelector.css(this._config.panelAutoHeightMode)) + heights.footer);
        }
      }

      if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED)) {
        return;
      }

      if (typeof $__default["default"].fn.overlayScrollbars !== 'undefined') {
        $__default["default"](SELECTOR_SIDEBAR$1).overlayScrollbars({
          className: this._config.scrollbarTheme,
          sizeAutoCapable: true,
          scrollbars: {
            autoHide: this._config.scrollbarAutoHide,
            clickScrolling: true
          }
        });
      } else {
        $__default["default"](SELECTOR_SIDEBAR$1).css('overflow-y', 'auto');
      }
    };

    _proto.fixLoginRegisterHeight = function fixLoginRegisterHeight() {
      var $body = $__default["default"]('body');
      var $selector = $__default["default"](SELECTOR_LOGIN_BOX + ", " + SELECTOR_REGISTER_BOX);

      if ($body.hasClass(CLASS_NAME_IFRAME_MODE)) {
        $body.css('height', '100%');
        $__default["default"]('.wrapper').css('height', '100%');
        $__default["default"]('html').css('height', '100%');
      } else if ($selector.length === 0) {
        $body.css('height', 'auto');
        $__default["default"]('html').css('height', 'auto');
      } else {
        var boxHeight = $selector.height();

        if ($body.css(this._config.panelAutoHeightMode) !== boxHeight) {
          $body.css(this._config.panelAutoHeightMode, boxHeight);
        }
      }
    } // Private
    ;

    _proto._init = function _init() {
      var _this = this;

      // Activate layout height watcher
      this.fixLayoutHeight();

      if (this._config.loginRegisterAutoHeight === true) {
        this.fixLoginRegisterHeight();
      } else if (this._config.loginRegisterAutoHeight === parseInt(this._config.loginRegisterAutoHeight, 10)) {
        setInterval(this.fixLoginRegisterHeight, this._config.loginRegisterAutoHeight);
      }

      $__default["default"](SELECTOR_SIDEBAR$1).on('collapsed.lte.treeview expanded.lte.treeview', function () {
        _this.fixLayoutHeight();
      });
      $__default["default"](SELECTOR_MAIN_SIDEBAR).on('mouseenter mouseleave', function () {
        if ($__default["default"]('body').hasClass(CLASS_NAME_SIDEBAR_COLLAPSED$1)) {
          _this.fixLayoutHeight();
        }
      });
      $__default["default"](SELECTOR_PUSHMENU_BTN).on('collapsed.lte.pushmenu shown.lte.pushmenu', function () {
        setTimeout(function () {
          _this.fixLayoutHeight();
        }, 300);
      });
      $__default["default"](SELECTOR_CONTROL_SIDEBAR_BTN).on('collapsed.lte.controlsidebar', function () {
        _this.fixLayoutHeight();
      }).on('expanded.lte.controlsidebar', function () {
        _this.fixLayoutHeight('control_sidebar');
      });
      $__default["default"](window).resize(function () {
        _this.fixLayoutHeight();
      });
      setTimeout(function () {
        $__default["default"]('body.hold-transition').removeClass('hold-transition');
      }, 50);
      setTimeout(function () {
        var $preloader = $__default["default"](SELECTOR_PRELOADER);

        if ($preloader) {
          $preloader.css('height', 0);
          setTimeout(function () {
            $preloader.children().hide();
          }, 200);
        }
      }, this._config.preloadDuration);
    };

    _proto._max = function _max(numbers) {
      // Calculate the maximum number in a list
      var max = 0;
      Object.keys(numbers).forEach(function (key) {
        if (numbers[key] > max) {
          max = numbers[key];
        }
      });
      return max;
    };

    _proto._isFooterFixed = function _isFooterFixed() {
      return $__default["default"](SELECTOR_FOOTER).css('position') === 'fixed';
    } // Static
    ;

    Layout._jQueryInterface = function _jQueryInterface(config) {
      if (config === void 0) {
        config = '';
      }

      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$6);

        var _options = $__default["default"].extend({}, Default$6, $__default["default"](this).data());

        if (!data) {
          data = new Layout($__default["default"](this), _options);
          $__default["default"](this).data(DATA_KEY$6, data);
        }

        if (config === 'init' || config === '') {
          data._init();
        } else if (config === 'fixLayoutHeight' || config === 'fixLoginRegisterHeight') {
          data[config]();
        }
      });
    };

    return Layout;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default["default"](window).on('load', function () {
    Layout._jQueryInterface.call($__default["default"]('body'));
  });
  $__default["default"](SELECTOR_SIDEBAR$1 + " a").on('focusin', function () {
    $__default["default"](SELECTOR_MAIN_SIDEBAR).addClass(CLASS_NAME_SIDEBAR_FOCUSED);
  }).on('focusout', function () {
    $__default["default"](SELECTOR_MAIN_SIDEBAR).removeClass(CLASS_NAME_SIDEBAR_FOCUSED);
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default["default"].fn[NAME$6] = Layout._jQueryInterface;
  $__default["default"].fn[NAME$6].Constructor = Layout;

  $__default["default"].fn[NAME$6].noConflict = function () {
    $__default["default"].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Layout._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE PushMenu.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$5 = 'PushMenu';
  var DATA_KEY$5 = 'lte.pushmenu';
  var EVENT_KEY$2 = "." + DATA_KEY$5;
  var JQUERY_NO_CONFLICT$5 = $__default["default"].fn[NAME$5];
  var EVENT_COLLAPSED$1 = "collapsed" + EVENT_KEY$2;
  var EVENT_COLLAPSED_DONE = "collapsed-done" + EVENT_KEY$2;
  var EVENT_SHOWN = "shown" + EVENT_KEY$2;
  var SELECTOR_TOGGLE_BUTTON$1 = '[data-widget="pushmenu"]';
  var SELECTOR_BODY = 'body';
  var SELECTOR_OVERLAY = '#sidebar-overlay';
  var SELECTOR_WRAPPER = '.wrapper';
  var CLASS_NAME_COLLAPSED = 'sidebar-collapse';
  var CLASS_NAME_OPEN$3 = 'sidebar-open';
  var CLASS_NAME_IS_OPENING$1 = 'sidebar-is-opening';
  var CLASS_NAME_CLOSED = 'sidebar-closed';
  var Default$5 = {
    autoCollapseSize: 992,
    enableRemember: false,
    noTransitionAfterReload: true,
    animationSpeed: 300
  };
  /**
   * Class Definition
   * ====================================================
   */

  var PushMenu = /*#__PURE__*/function () {
    function PushMenu(element, options) {
      this._element = element;
      this._options = $__default["default"].extend({}, Default$5, options);

      if ($__default["default"](SELECTOR_OVERLAY).length === 0) {
        this._addOverlay();
      }

      this._init();
    } // Public


    var _proto = PushMenu.prototype;

    _proto.expand = function expand() {
      var $bodySelector = $__default["default"](SELECTOR_BODY);

      if (this._options.autoCollapseSize && $__default["default"](window).width() <= this._options.autoCollapseSize) {
        $bodySelector.addClass(CLASS_NAME_OPEN$3);
      }

      $bodySelector.addClass(CLASS_NAME_IS_OPENING$1).removeClass(CLASS_NAME_COLLAPSED + " " + CLASS_NAME_CLOSED).delay(50).queue(function () {
        $bodySelector.removeClass(CLASS_NAME_IS_OPENING$1);
        $__default["default"](this).dequeue();
      });

      if (this._options.enableRemember) {
        localStorage.setItem("remember" + EVENT_KEY$2, CLASS_NAME_OPEN$3);
      }

      $__default["default"](this._element).trigger($__default["default"].Event(EVENT_SHOWN));
    };

    _proto.collapse = function collapse() {
      var _this = this;

      var $bodySelector = $__default["default"](SELECTOR_BODY);

      if (this._options.autoCollapseSize && $__default["default"](window).width() <= this._options.autoCollapseSize) {
        $bodySelector.removeClass(CLASS_NAME_OPEN$3).addClass(CLASS_NAME_CLOSED);
      }

      $bodySelector.addClass(CLASS_NAME_COLLAPSED);

      if (this._options.enableRemember) {
        localStorage.setItem("remember" + EVENT_KEY$2, CLASS_NAME_COLLAPSED);
      }

      $__default["default"](this._element).trigger($__default["default"].Event(EVENT_COLLAPSED$1));
      setTimeout(function () {
        $__default["default"](_this._element).trigger($__default["default"].Event(EVENT_COLLAPSED_DONE));
      }, this._options.animationSpeed);
    };

    _proto.toggle = function toggle() {
      if ($__default["default"](SELECTOR_BODY).hasClass(CLASS_NAME_COLLAPSED)) {
        this.expand();
      } else {
        this.collapse();
      }
    };

    _proto.autoCollapse = function autoCollapse(resize) {
      if (resize === void 0) {
        resize = false;
      }

      if (!this._options.autoCollapseSize) {
        return;
      }

      var $bodySelector = $__default["default"](SELECTOR_BODY);

      if ($__default["default"](window).width() <= this._options.autoCollapseSize) {
        if (!$bodySelector.hasClass(CLASS_NAME_OPEN$3)) {
          this.collapse();
        }
      } else if (resize === true) {
        if ($bodySelector.hasClass(CLASS_NAME_OPEN$3)) {
          $bodySelector.removeClass(CLASS_NAME_OPEN$3);
        } else if ($bodySelector.hasClass(CLASS_NAME_CLOSED)) {
          this.expand();
        }
      }
    };

    _proto.remember = function remember() {
      if (!this._options.enableRemember) {
        return;
      }

      var $body = $__default["default"]('body');
      var toggleState = localStorage.getItem("remember" + EVENT_KEY$2);

      if (toggleState === CLASS_NAME_COLLAPSED) {
        if (this._options.noTransitionAfterReload) {
          $body.addClass('hold-transition').addClass(CLASS_NAME_COLLAPSED).delay(50).queue(function () {
            $__default["default"](this).removeClass('hold-transition');
            $__default["default"](this).dequeue();
          });
        } else {
          $body.addClass(CLASS_NAME_COLLAPSED);
        }
      } else if (this._options.noTransitionAfterReload) {
        $body.addClass('hold-transition').removeClass(CLASS_NAME_COLLAPSED).delay(50).queue(function () {
          $__default["default"](this).removeClass('hold-transition');
          $__default["default"](this).dequeue();
        });
      } else {
        $body.removeClass(CLASS_NAME_COLLAPSED);
      }
    } // Private
    ;

    _proto._init = function _init() {
      var _this2 = this;

      this.remember();
      this.autoCollapse();
      $__default["default"](window).resize(function () {
        _this2.autoCollapse(true);
      });
    };

    _proto._addOverlay = function _addOverlay() {
      var _this3 = this;

      var overlay = $__default["default"]('<div />', {
        id: 'sidebar-overlay'
      });
      overlay.on('click', function () {
        _this3.collapse();
      });
      $__default["default"](SELECTOR_WRAPPER).append(overlay);
    } // Static
    ;

    PushMenu._jQueryInterface = function _jQueryInterface(operation) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$5);

        var _options = $__default["default"].extend({}, Default$5, $__default["default"](this).data());

        if (!data) {
          data = new PushMenu(this, _options);
          $__default["default"](this).data(DATA_KEY$5, data);
        }

        if (typeof operation === 'string' && /collapse|expand|toggle/.test(operation)) {
          data[operation]();
        }
      });
    };

    return PushMenu;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default["default"](document).on('click', SELECTOR_TOGGLE_BUTTON$1, function (event) {
    event.preventDefault();
    var button = event.currentTarget;

    if ($__default["default"](button).data('widget') !== 'pushmenu') {
      button = $__default["default"](button).closest(SELECTOR_TOGGLE_BUTTON$1);
    }

    PushMenu._jQueryInterface.call($__default["default"](button), 'toggle');
  });
  $__default["default"](window).on('load', function () {
    PushMenu._jQueryInterface.call($__default["default"](SELECTOR_TOGGLE_BUTTON$1));
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default["default"].fn[NAME$5] = PushMenu._jQueryInterface;
  $__default["default"].fn[NAME$5].Constructor = PushMenu;

  $__default["default"].fn[NAME$5].noConflict = function () {
    $__default["default"].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return PushMenu._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE SidebarSearch.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$4 = 'SidebarSearch';
  var DATA_KEY$4 = 'lte.sidebar-search';
  var JQUERY_NO_CONFLICT$4 = $__default["default"].fn[NAME$4];
  var CLASS_NAME_OPEN$2 = 'sidebar-search-open';
  var CLASS_NAME_ICON_SEARCH = 'fa-search';
  var CLASS_NAME_ICON_CLOSE = 'fa-times';
  var CLASS_NAME_HEADER = 'nav-header';
  var CLASS_NAME_SEARCH_RESULTS = 'sidebar-search-results';
  var CLASS_NAME_LIST_GROUP = 'list-group';
  var SELECTOR_DATA_WIDGET$1 = '[data-widget="sidebar-search"]';
  var SELECTOR_SIDEBAR = '.main-sidebar .nav-sidebar';
  var SELECTOR_NAV_LINK = '.nav-link';
  var SELECTOR_NAV_TREEVIEW = '.nav-treeview';
  var SELECTOR_SEARCH_INPUT$1 = SELECTOR_DATA_WIDGET$1 + " .form-control";
  var SELECTOR_SEARCH_BUTTON = SELECTOR_DATA_WIDGET$1 + " .btn";
  var SELECTOR_SEARCH_ICON = SELECTOR_SEARCH_BUTTON + " i";
  var SELECTOR_SEARCH_LIST_GROUP = "." + CLASS_NAME_LIST_GROUP;
  var SELECTOR_SEARCH_RESULTS = "." + CLASS_NAME_SEARCH_RESULTS;
  var SELECTOR_SEARCH_RESULTS_GROUP = SELECTOR_SEARCH_RESULTS + " ." + CLASS_NAME_LIST_GROUP;
  var Default$4 = {
    arrowSign: '->',
    minLength: 3,
    maxResults: 7,
    highlightName: true,
    highlightPath: false,
    highlightClass: 'text-light',
    notFoundText: 'No element found!'
  };
  var SearchItems = [];
  /**
   * Class Definition
   * ====================================================
   */

  var SidebarSearch = /*#__PURE__*/function () {
    function SidebarSearch(_element, _options) {
      this.element = _element;
      this.options = $__default["default"].extend({}, Default$4, _options);
      this.items = [];
    } // Public


    var _proto = SidebarSearch.prototype;

    _proto.init = function init() {
      var _this = this;

      if ($__default["default"](SELECTOR_DATA_WIDGET$1).length === 0) {
        return;
      }

      if ($__default["default"](SELECTOR_DATA_WIDGET$1).next(SELECTOR_SEARCH_RESULTS).length === 0) {
        $__default["default"](SELECTOR_DATA_WIDGET$1).after($__default["default"]('<div />', {
          class: CLASS_NAME_SEARCH_RESULTS
        }));
      }

      if ($__default["default"](SELECTOR_SEARCH_RESULTS).children(SELECTOR_SEARCH_LIST_GROUP).length === 0) {
        $__default["default"](SELECTOR_SEARCH_RESULTS).append($__default["default"]('<div />', {
          class: CLASS_NAME_LIST_GROUP
        }));
      }

      this._addNotFound();

      $__default["default"](SELECTOR_SIDEBAR).children().each(function (i, child) {
        _this._parseItem(child);
      });
    };

    _proto.search = function search() {
      var _this2 = this;

      var searchValue = $__default["default"](SELECTOR_SEARCH_INPUT$1).val().toLowerCase();

      if (searchValue.length < this.options.minLength) {
        $__default["default"](SELECTOR_SEARCH_RESULTS_GROUP).empty();

        this._addNotFound();

        this.close();
        return;
      }

      var searchResults = SearchItems.filter(function (item) {
        return item.name.toLowerCase().includes(searchValue);
      });
      var endResults = $__default["default"](searchResults.slice(0, this.options.maxResults));
      $__default["default"](SELECTOR_SEARCH_RESULTS_GROUP).empty();

      if (endResults.length === 0) {
        this._addNotFound();
      } else {
        endResults.each(function (i, result) {
          $__default["default"](SELECTOR_SEARCH_RESULTS_GROUP).append(_this2._renderItem(escape(result.name), encodeURI(result.link), result.path));
        });
      }

      this.open();
    };

    _proto.open = function open() {
      $__default["default"](SELECTOR_DATA_WIDGET$1).parent().addClass(CLASS_NAME_OPEN$2);
      $__default["default"](SELECTOR_SEARCH_ICON).removeClass(CLASS_NAME_ICON_SEARCH).addClass(CLASS_NAME_ICON_CLOSE);
    };

    _proto.close = function close() {
      $__default["default"](SELECTOR_DATA_WIDGET$1).parent().removeClass(CLASS_NAME_OPEN$2);
      $__default["default"](SELECTOR_SEARCH_ICON).removeClass(CLASS_NAME_ICON_CLOSE).addClass(CLASS_NAME_ICON_SEARCH);
    };

    _proto.toggle = function toggle() {
      if ($__default["default"](SELECTOR_DATA_WIDGET$1).parent().hasClass(CLASS_NAME_OPEN$2)) {
        this.close();
      } else {
        this.open();
      }
    } // Private
    ;

    _proto._parseItem = function _parseItem(item, path) {
      var _this3 = this;

      if (path === void 0) {
        path = [];
      }

      if ($__default["default"](item).hasClass(CLASS_NAME_HEADER)) {
        return;
      }

      var itemObject = {};
      var navLink = $__default["default"](item).clone().find("> " + SELECTOR_NAV_LINK);
      var navTreeview = $__default["default"](item).clone().find("> " + SELECTOR_NAV_TREEVIEW);
      var link = navLink.attr('href');
      var name = navLink.find('p').children().remove().end().text();
      itemObject.name = this._trimText(name);
      itemObject.link = link;
      itemObject.path = path;

      if (navTreeview.length === 0) {
        SearchItems.push(itemObject);
      } else {
        var newPath = itemObject.path.concat([itemObject.name]);
        navTreeview.children().each(function (i, child) {
          _this3._parseItem(child, newPath);
        });
      }
    };

    _proto._trimText = function _trimText(text) {
      return $.trim(text.replace(/(\r\n|\n|\r)/gm, ' '));
    };

    _proto._renderItem = function _renderItem(name, link, path) {
      var _this4 = this;

      path = path.join(" " + this.options.arrowSign + " ");
      name = unescape(name);
      link = decodeURI(link);

      if (this.options.highlightName || this.options.highlightPath) {
        var searchValue = $__default["default"](SELECTOR_SEARCH_INPUT$1).val().toLowerCase();
        var regExp = new RegExp(searchValue, 'gi');

        if (this.options.highlightName) {
          name = name.replace(regExp, function (str) {
            return "<strong class=\"" + _this4.options.highlightClass + "\">" + str + "</strong>";
          });
        }

        if (this.options.highlightPath) {
          path = path.replace(regExp, function (str) {
            return "<strong class=\"" + _this4.options.highlightClass + "\">" + str + "</strong>";
          });
        }
      }

      var groupItemElement = $__default["default"]('<a/>', {
        href: decodeURIComponent(link),
        class: 'list-group-item'
      });
      var searchTitleElement = $__default["default"]('<div/>', {
        class: 'search-title'
      }).html(name);
      var searchPathElement = $__default["default"]('<div/>', {
        class: 'search-path'
      }).html(path);
      groupItemElement.append(searchTitleElement).append(searchPathElement);
      return groupItemElement;
    };

    _proto._addNotFound = function _addNotFound() {
      $__default["default"](SELECTOR_SEARCH_RESULTS_GROUP).append(this._renderItem(this.options.notFoundText, '#', []));
    } // Static
    ;

    SidebarSearch._jQueryInterface = function _jQueryInterface(config) {
      var data = $__default["default"](this).data(DATA_KEY$4);

      if (!data) {
        data = $__default["default"](this).data();
      }

      var _options = $__default["default"].extend({}, Default$4, typeof config === 'object' ? config : data);

      var plugin = new SidebarSearch($__default["default"](this), _options);
      $__default["default"](this).data(DATA_KEY$4, typeof config === 'object' ? config : data);

      if (typeof config === 'string' && /init|toggle|close|open|search/.test(config)) {
        plugin[config]();
      } else {
        plugin.init();
      }
    };

    return SidebarSearch;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default["default"](document).on('click', SELECTOR_SEARCH_BUTTON, function (event) {
    event.preventDefault();

    SidebarSearch._jQueryInterface.call($__default["default"](SELECTOR_DATA_WIDGET$1), 'toggle');
  });
  $__default["default"](document).on('keyup', SELECTOR_SEARCH_INPUT$1, function (event) {
    if (event.keyCode == 38) {
      event.preventDefault();
      $__default["default"](SELECTOR_SEARCH_RESULTS_GROUP).children().last().focus();
      return;
    }

    if (event.keyCode == 40) {
      event.preventDefault();
      $__default["default"](SELECTOR_SEARCH_RESULTS_GROUP).children().first().focus();
      return;
    }

    setTimeout(function () {
      SidebarSearch._jQueryInterface.call($__default["default"](SELECTOR_DATA_WIDGET$1), 'search');
    }, 100);
  });
  $__default["default"](document).on('keydown', SELECTOR_SEARCH_RESULTS_GROUP, function (event) {
    var $focused = $__default["default"](':focus');

    if (event.keyCode == 38) {
      event.preventDefault();

      if ($focused.is(':first-child')) {
        $focused.siblings().last().focus();
      } else {
        $focused.prev().focus();
      }
    }

    if (event.keyCode == 40) {
      event.preventDefault();

      if ($focused.is(':last-child')) {
        $focused.siblings().first().focus();
      } else {
        $focused.next().focus();
      }
    }
  });
  $__default["default"](window).on('load', function () {
    SidebarSearch._jQueryInterface.call($__default["default"](SELECTOR_DATA_WIDGET$1), 'init');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default["default"].fn[NAME$4] = SidebarSearch._jQueryInterface;
  $__default["default"].fn[NAME$4].Constructor = SidebarSearch;

  $__default["default"].fn[NAME$4].noConflict = function () {
    $__default["default"].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return SidebarSearch._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE NavbarSearch.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$3 = 'NavbarSearch';
  var DATA_KEY$3 = 'lte.navbar-search';
  var JQUERY_NO_CONFLICT$3 = $__default["default"].fn[NAME$3];
  var SELECTOR_TOGGLE_BUTTON = '[data-widget="navbar-search"]';
  var SELECTOR_SEARCH_BLOCK = '.navbar-search-block';
  var SELECTOR_SEARCH_INPUT = '.form-control';
  var CLASS_NAME_OPEN$1 = 'navbar-search-open';
  var Default$3 = {
    resetOnClose: true,
    target: SELECTOR_SEARCH_BLOCK
  };
  /**
   * Class Definition
   * ====================================================
   */

  var NavbarSearch = /*#__PURE__*/function () {
    function NavbarSearch(_element, _options) {
      this._element = _element;
      this._config = $__default["default"].extend({}, Default$3, _options);
    } // Public


    var _proto = NavbarSearch.prototype;

    _proto.open = function open() {
      $__default["default"](this._config.target).css('display', 'flex').hide().fadeIn().addClass(CLASS_NAME_OPEN$1);
      $__default["default"](this._config.target + " " + SELECTOR_SEARCH_INPUT).focus();
    };

    _proto.close = function close() {
      $__default["default"](this._config.target).fadeOut().removeClass(CLASS_NAME_OPEN$1);

      if (this._config.resetOnClose) {
        $__default["default"](this._config.target + " " + SELECTOR_SEARCH_INPUT).val('');
      }
    };

    _proto.toggle = function toggle() {
      if ($__default["default"](this._config.target).hasClass(CLASS_NAME_OPEN$1)) {
        this.close();
      } else {
        this.open();
      }
    } // Static
    ;

    NavbarSearch._jQueryInterface = function _jQueryInterface(options) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$3);

        var _options = $__default["default"].extend({}, Default$3, $__default["default"](this).data());

        if (!data) {
          data = new NavbarSearch(this, _options);
          $__default["default"](this).data(DATA_KEY$3, data);
        }

        if (!/toggle|close|open/.test(options)) {
          throw new Error("Undefined method " + options);
        }

        data[options]();
      });
    };

    return NavbarSearch;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default["default"](document).on('click', SELECTOR_TOGGLE_BUTTON, function (event) {
    event.preventDefault();
    var button = $__default["default"](event.currentTarget);

    if (button.data('widget') !== 'navbar-search') {
      button = button.closest(SELECTOR_TOGGLE_BUTTON);
    }

    NavbarSearch._jQueryInterface.call(button, 'toggle');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default["default"].fn[NAME$3] = NavbarSearch._jQueryInterface;
  $__default["default"].fn[NAME$3].Constructor = NavbarSearch;

  $__default["default"].fn[NAME$3].noConflict = function () {
    $__default["default"].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return NavbarSearch._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE Toasts.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$2 = 'Toasts';
  var DATA_KEY$2 = 'lte.toasts';
  var EVENT_KEY$1 = "." + DATA_KEY$2;
  var JQUERY_NO_CONFLICT$2 = $__default["default"].fn[NAME$2];
  var EVENT_INIT = "init" + EVENT_KEY$1;
  var EVENT_CREATED = "created" + EVENT_KEY$1;
  var EVENT_REMOVED = "removed" + EVENT_KEY$1;
  var SELECTOR_CONTAINER_TOP_RIGHT = '#toastsContainerTopRight';
  var SELECTOR_CONTAINER_TOP_LEFT = '#toastsContainerTopLeft';
  var SELECTOR_CONTAINER_BOTTOM_RIGHT = '#toastsContainerBottomRight';
  var SELECTOR_CONTAINER_BOTTOM_LEFT = '#toastsContainerBottomLeft';
  var CLASS_NAME_TOP_RIGHT = 'toasts-top-right';
  var CLASS_NAME_TOP_LEFT = 'toasts-top-left';
  var CLASS_NAME_BOTTOM_RIGHT = 'toasts-bottom-right';
  var CLASS_NAME_BOTTOM_LEFT = 'toasts-bottom-left';
  var POSITION_TOP_RIGHT = 'topRight';
  var POSITION_TOP_LEFT = 'topLeft';
  var POSITION_BOTTOM_RIGHT = 'bottomRight';
  var POSITION_BOTTOM_LEFT = 'bottomLeft';
  var Default$2 = {
    position: POSITION_TOP_RIGHT,
    fixed: true,
    autohide: false,
    autoremove: true,
    delay: 1000,
    fade: true,
    icon: null,
    image: null,
    imageAlt: null,
    imageHeight: '25px',
    title: null,
    subtitle: null,
    close: true,
    body: null,
    class: null
  };
  /**
   * Class Definition
   * ====================================================
   */

  var Toasts = /*#__PURE__*/function () {
    function Toasts(element, config) {
      this._config = config;

      this._prepareContainer();

      $__default["default"]('body').trigger($__default["default"].Event(EVENT_INIT));
    } // Public


    var _proto = Toasts.prototype;

    _proto.create = function create() {
      var toast = $__default["default"]('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');
      toast.data('autohide', this._config.autohide);
      toast.data('animation', this._config.fade);

      if (this._config.class) {
        toast.addClass(this._config.class);
      }

      if (this._config.delay && this._config.delay != 500) {
        toast.data('delay', this._config.delay);
      }

      var toastHeader = $__default["default"]('<div class="toast-header">');

      if (this._config.image != null) {
        var toastImage = $__default["default"]('<img />').addClass('rounded mr-2').attr('src', this._config.image).attr('alt', this._config.imageAlt);

        if (this._config.imageHeight != null) {
          toastImage.height(this._config.imageHeight).width('auto');
        }

        toastHeader.append(toastImage);
      }

      if (this._config.icon != null) {
        toastHeader.append($__default["default"]('<i />').addClass('mr-2').addClass(this._config.icon));
      }

      if (this._config.title != null) {
        toastHeader.append($__default["default"]('<strong />').addClass('mr-auto').html(this._config.title));
      }

      if (this._config.subtitle != null) {
        toastHeader.append($__default["default"]('<small />').html(this._config.subtitle));
      }

      if (this._config.close == true) {
        var toastClose = $__default["default"]('<button data-dismiss="toast" />').attr('type', 'button').addClass('ml-2 mb-1 close').attr('aria-label', 'Close').append('<span aria-hidden="true">&times;</span>');

        if (this._config.title == null) {
          toastClose.toggleClass('ml-2 ml-auto');
        }

        toastHeader.append(toastClose);
      }

      toast.append(toastHeader);

      if (this._config.body != null) {
        toast.append($__default["default"]('<div class="toast-body" />').html(this._config.body));
      }

      $__default["default"](this._getContainerId()).prepend(toast);
      var $body = $__default["default"]('body');
      $body.trigger($__default["default"].Event(EVENT_CREATED));
      toast.toast('show');

      if (this._config.autoremove) {
        toast.on('hidden.bs.toast', function () {
          $__default["default"](this).delay(200).remove();
          $body.trigger($__default["default"].Event(EVENT_REMOVED));
        });
      }
    } // Static
    ;

    _proto._getContainerId = function _getContainerId() {
      if (this._config.position == POSITION_TOP_RIGHT) {
        return SELECTOR_CONTAINER_TOP_RIGHT;
      }

      if (this._config.position == POSITION_TOP_LEFT) {
        return SELECTOR_CONTAINER_TOP_LEFT;
      }

      if (this._config.position == POSITION_BOTTOM_RIGHT) {
        return SELECTOR_CONTAINER_BOTTOM_RIGHT;
      }

      if (this._config.position == POSITION_BOTTOM_LEFT) {
        return SELECTOR_CONTAINER_BOTTOM_LEFT;
      }
    };

    _proto._prepareContainer = function _prepareContainer() {
      if ($__default["default"](this._getContainerId()).length === 0) {
        var container = $__default["default"]('<div />').attr('id', this._getContainerId().replace('#', ''));

        if (this._config.position == POSITION_TOP_RIGHT) {
          container.addClass(CLASS_NAME_TOP_RIGHT);
        } else if (this._config.position == POSITION_TOP_LEFT) {
          container.addClass(CLASS_NAME_TOP_LEFT);
        } else if (this._config.position == POSITION_BOTTOM_RIGHT) {
          container.addClass(CLASS_NAME_BOTTOM_RIGHT);
        } else if (this._config.position == POSITION_BOTTOM_LEFT) {
          container.addClass(CLASS_NAME_BOTTOM_LEFT);
        }

        $__default["default"]('body').append(container);
      }

      if (this._config.fixed) {
        $__default["default"](this._getContainerId()).addClass('fixed');
      } else {
        $__default["default"](this._getContainerId()).removeClass('fixed');
      }
    } // Static
    ;

    Toasts._jQueryInterface = function _jQueryInterface(option, config) {
      return this.each(function () {
        var _options = $__default["default"].extend({}, Default$2, config);

        var toast = new Toasts($__default["default"](this), _options);

        if (option === 'create') {
          toast[option]();
        }
      });
    };

    return Toasts;
  }();
  /**
   * jQuery API
   * ====================================================
   */


  $__default["default"].fn[NAME$2] = Toasts._jQueryInterface;
  $__default["default"].fn[NAME$2].Constructor = Toasts;

  $__default["default"].fn[NAME$2].noConflict = function () {
    $__default["default"].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Toasts._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE TodoList.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME$1 = 'TodoList';
  var DATA_KEY$1 = 'lte.todolist';
  var JQUERY_NO_CONFLICT$1 = $__default["default"].fn[NAME$1];
  var SELECTOR_DATA_TOGGLE = '[data-widget="todo-list"]';
  var CLASS_NAME_TODO_LIST_DONE = 'done';
  var Default$1 = {
    onCheck: function onCheck(item) {
      return item;
    },
    onUnCheck: function onUnCheck(item) {
      return item;
    }
  };
  /**
   * Class Definition
   * ====================================================
   */

  var TodoList = /*#__PURE__*/function () {
    function TodoList(element, config) {
      this._config = config;
      this._element = element;

      this._init();
    } // Public


    var _proto = TodoList.prototype;

    _proto.toggle = function toggle(item) {
      item.parents('li').toggleClass(CLASS_NAME_TODO_LIST_DONE);

      if (!$__default["default"](item).prop('checked')) {
        this.unCheck($__default["default"](item));
        return;
      }

      this.check(item);
    };

    _proto.check = function check(item) {
      this._config.onCheck.call(item);
    };

    _proto.unCheck = function unCheck(item) {
      this._config.onUnCheck.call(item);
    } // Private
    ;

    _proto._init = function _init() {
      var _this = this;

      var $toggleSelector = this._element;
      $toggleSelector.find('input:checkbox:checked').parents('li').toggleClass(CLASS_NAME_TODO_LIST_DONE);
      $toggleSelector.on('change', 'input:checkbox', function (event) {
        _this.toggle($__default["default"](event.target));
      });
    } // Static
    ;

    TodoList._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$1);

        if (!data) {
          data = $__default["default"](this).data();
        }

        var _options = $__default["default"].extend({}, Default$1, typeof config === 'object' ? config : data);

        var plugin = new TodoList($__default["default"](this), _options);
        $__default["default"](this).data(DATA_KEY$1, typeof config === 'object' ? config : data);

        if (config === 'init') {
          plugin[config]();
        }
      });
    };

    return TodoList;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default["default"](window).on('load', function () {
    TodoList._jQueryInterface.call($__default["default"](SELECTOR_DATA_TOGGLE));
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default["default"].fn[NAME$1] = TodoList._jQueryInterface;
  $__default["default"].fn[NAME$1].Constructor = TodoList;

  $__default["default"].fn[NAME$1].noConflict = function () {
    $__default["default"].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return TodoList._jQueryInterface;
  };

  /**
   * --------------------------------------------
   * AdminLTE Treeview.js
   * License MIT
   * --------------------------------------------
   */
  /**
   * Constants
   * ====================================================
   */

  var NAME = 'Treeview';
  var DATA_KEY = 'lte.treeview';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $__default["default"].fn[NAME];
  var EVENT_EXPANDED = "expanded" + EVENT_KEY;
  var EVENT_COLLAPSED = "collapsed" + EVENT_KEY;
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY;
  var SELECTOR_LI = '.nav-item';
  var SELECTOR_LINK = '.nav-link';
  var SELECTOR_TREEVIEW_MENU = '.nav-treeview';
  var SELECTOR_OPEN = '.menu-open';
  var SELECTOR_DATA_WIDGET = '[data-widget="treeview"]';
  var CLASS_NAME_OPEN = 'menu-open';
  var CLASS_NAME_IS_OPENING = 'menu-is-opening';
  var CLASS_NAME_SIDEBAR_COLLAPSED = 'sidebar-collapse';
  var Default = {
    trigger: SELECTOR_DATA_WIDGET + " " + SELECTOR_LINK,
    animationSpeed: 300,
    accordion: true,
    expandSidebar: false,
    sidebarButtonSelector: '[data-widget="pushmenu"]'
  };
  /**
   * Class Definition
   * ====================================================
   */

  var Treeview = /*#__PURE__*/function () {
    function Treeview(element, config) {
      this._config = config;
      this._element = element;
    } // Public


    var _proto = Treeview.prototype;

    _proto.init = function init() {
      $__default["default"]("" + SELECTOR_LI + SELECTOR_OPEN + " " + SELECTOR_TREEVIEW_MENU + SELECTOR_OPEN).css('display', 'block');

      this._setupListeners();
    };

    _proto.expand = function expand(treeviewMenu, parentLi) {
      var _this = this;

      var expandedEvent = $__default["default"].Event(EVENT_EXPANDED);

      if (this._config.accordion) {
        var openMenuLi = parentLi.siblings(SELECTOR_OPEN).first();
        var openTreeview = openMenuLi.find(SELECTOR_TREEVIEW_MENU).first();
        this.collapse(openTreeview, openMenuLi);
      }

      parentLi.addClass(CLASS_NAME_IS_OPENING);
      treeviewMenu.stop().slideDown(this._config.animationSpeed, function () {
        parentLi.addClass(CLASS_NAME_OPEN);
        $__default["default"](_this._element).trigger(expandedEvent);
      });

      if (this._config.expandSidebar) {
        this._expandSidebar();
      }
    };

    _proto.collapse = function collapse(treeviewMenu, parentLi) {
      var _this2 = this;

      var collapsedEvent = $__default["default"].Event(EVENT_COLLAPSED);
      parentLi.removeClass(CLASS_NAME_IS_OPENING + " " + CLASS_NAME_OPEN);
      treeviewMenu.stop().slideUp(this._config.animationSpeed, function () {
        $__default["default"](_this2._element).trigger(collapsedEvent);
        treeviewMenu.find(SELECTOR_OPEN + " > " + SELECTOR_TREEVIEW_MENU).slideUp();
        treeviewMenu.find(SELECTOR_OPEN).removeClass(CLASS_NAME_IS_OPENING + " " + CLASS_NAME_OPEN);
      });
    };

    _proto.toggle = function toggle(event) {
      var $relativeTarget = $__default["default"](event.currentTarget);
      var $parent = $relativeTarget.parent();
      var treeviewMenu = $parent.find("> " + SELECTOR_TREEVIEW_MENU);

      if (!treeviewMenu.is(SELECTOR_TREEVIEW_MENU)) {
        if (!$parent.is(SELECTOR_LI)) {
          treeviewMenu = $parent.parent().find("> " + SELECTOR_TREEVIEW_MENU);
        }

        if (!treeviewMenu.is(SELECTOR_TREEVIEW_MENU)) {
          return;
        }
      }

      event.preventDefault();
      var parentLi = $relativeTarget.parents(SELECTOR_LI).first();
      var isOpen = parentLi.hasClass(CLASS_NAME_OPEN);

      if (isOpen) {
        this.collapse($__default["default"](treeviewMenu), parentLi);
      } else {
        this.expand($__default["default"](treeviewMenu), parentLi);
      }
    } // Private
    ;

    _proto._setupListeners = function _setupListeners() {
      var _this3 = this;

      var elementId = this._element.attr('id') !== undefined ? "#" + this._element.attr('id') : '';
      $__default["default"](document).on('click', "" + elementId + this._config.trigger, function (event) {
        _this3.toggle(event);
      });
    };

    _proto._expandSidebar = function _expandSidebar() {
      if ($__default["default"]('body').hasClass(CLASS_NAME_SIDEBAR_COLLAPSED)) {
        $__default["default"](this._config.sidebarButtonSelector).PushMenu('expand');
      }
    } // Static
    ;

    Treeview._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY);

        var _options = $__default["default"].extend({}, Default, $__default["default"](this).data());

        if (!data) {
          data = new Treeview($__default["default"](this), _options);
          $__default["default"](this).data(DATA_KEY, data);
        }

        if (config === 'init') {
          data[config]();
        }
      });
    };

    return Treeview;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default["default"](window).on(EVENT_LOAD_DATA_API, function () {
    $__default["default"](SELECTOR_DATA_WIDGET).each(function () {
      Treeview._jQueryInterface.call($__default["default"](this), 'init');
    });
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default["default"].fn[NAME] = Treeview._jQueryInterface;
  $__default["default"].fn[NAME].Constructor = Treeview;

  $__default["default"].fn[NAME].noConflict = function () {
    $__default["default"].fn[NAME] = JQUERY_NO_CONFLICT;
    return Treeview._jQueryInterface;
  };

  exports.CardRefresh = CardRefresh;
  exports.CardWidget = CardWidget;
  exports.ControlSidebar = ControlSidebar;
  exports.DirectChat = DirectChat;
  exports.Dropdown = Dropdown;
  exports.ExpandableTable = ExpandableTable;
  exports.Fullscreen = Fullscreen;
  exports.IFrame = IFrame;
  exports.Layout = Layout;
  exports.NavbarSearch = NavbarSearch;
  exports.PushMenu = PushMenu;
  exports.SidebarSearch = SidebarSearch;
  exports.Toasts = Toasts;
  exports.TodoList = TodoList;
  exports.Treeview = Treeview;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=adminlte.js.map
