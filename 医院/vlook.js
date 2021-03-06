<!--========================================================================-->
<!--                                                                        -->
<!--                       VLOOK V9.19 - Typora Plugin                      -->
<!--                                                                        -->
<!--                               2020-06-14                               -->
<!--                          powered by MAX丨孟兆                           -->
<!--                                                                        -->
<!--                          QQ Group: 805502564                           -->
<!--                         email: maxchow@qq.com                          -->
<!--                                                                        -->
<!--                  https://github.com/MadMaxChow/VLOOK                   -->
<!--                                                                        -->
<!--========================================================================-->
<!--

MIT License

Copyright (c) 2018-2020 MAX°DESIGN | Max Chow
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

MIT许可证（MIT）

版权所有 (c) 2018-2020 MAX°DESIGN | Max Chow
在此授予任何获得此软件和相关文档文件（“软件”）副本的人免费许可，以无限制地处理本软件，包括但不限于使用，复制，修改，合并，发布，分发，再授权和/或出售本软件的副本，并允许本软件的授予人员遵从以下情况：
上述版权声明和本许可声明应包含在本软件的所有副本或重要部分中。
本软件按“原样”提供，不提供任何以表达或暗示，包括但不限于销售，适用于特定用途和不侵权的保证。在任何情况下，作者或版权所有人不对因软件或软件的使用或其他事宜产生的任何索赔，损害或其他责任（无论是在合同，侵权或其他方面的诉讼中）负责。

-->
<!--      !!!NOTE!!! NEED NETWORKING      -->
<!--<script src="https://code.jquery.com/jquery-3.4.1.js"></script>-->
<!--<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>-->
<!--   !!!NOTE!!! DON'T NEED NETWORKING   -->
<script type="text/javascript">
    /*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
    !function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--spotlightR;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--spotlightR||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
</script>
<script type="text/javascript">
    /*! VelocityJS.org (1.5.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
    /*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
    !function(a){"use strict";function b(a){var b=a.length,d=c.type(a);return"function"!==d&&!c.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a))}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return a&&a===a.window},c.type=function(a){return a?"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a:a+""},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return b===undefined||f.call(a,b)},c.each=function(a,c,d){var e=0,f=a.length,g=b(a);if(d){if(g)for(;e<f&&!1!==c.apply(a[e],d);e++);else for(e in a)if(a.hasOwnProperty(e)&&!1===c.apply(a[e],d))break}else if(g)for(;e<f&&!1!==c.call(a[e],e,a[e]);e++);else for(e in a)if(a.hasOwnProperty(e)&&!1===c.call(a[e],e,a[e]))break;return a},c.data=function(a,b,e){if(e===undefined){var f=a[c.expando],g=f&&d[f];if(b===undefined)return g;if(g&&b in g)return g[b]}else if(b!==undefined){var h=a[c.expando]||(a[c.expando]=++c.uuid);return d[h]=d[h]||{},d[h][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&(b?c.each(b,function(a,b){delete f[b]}):delete d[e])},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);i<j;i++)if(f=arguments[i])for(e in f)f.hasOwnProperty(e)&&(a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):d!==undefined&&(h[e]=d)));return h},c.queue=function(a,d,e){if(a){d=(d||"fx")+"queue";var f=c.data(a,d);return e?(!f||c.isArray(e)?f=c.data(a,d,function(a,c){var d=c||[];return a&&(b(Object(a))?function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;)a[e++]=b[d++];if(c!==c)for(;b[d]!==undefined;)a[e++]=b[d++];a.length=e}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}(e)):f.push(e),f):f||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){var a=this[0],b=function(a){for(var b=a.offsetParent;b&&"html"!==b.nodeName.toLowerCase()&&b.style&&"static"===b.style.position.toLowerCase();)b=b.offsetParent;return b||document}(a),d=this.offset(),e=/^(?:body|html)$/i.test(b.nodeName)?{top:0,left:0}:c(b).offset();return d.top-=parseFloat(a.style.marginTop)||0,d.left-=parseFloat(a.style.marginLeft)||0,b.style&&(e.top+=parseFloat(b.style.borderTopWidth)||0,e.left+=parseFloat(b.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){"use strict";return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return u.isWrapped(a)?a=s.call(a):u.isNode(a)&&(a=[a]),a}function g(a){var b=o.data(a,"velocity");return null===b?d:b}function h(a,b){var c=g(a);c&&c.delayTimer&&!c.delayPaused&&(c.delayRemaining=c.delay-b+c.delayBegin,c.delayPaused=!0,clearTimeout(c.delayTimer.setTimeout))}function i(a,b){var c=g(a);c&&c.delayTimer&&c.delayPaused&&(c.delayPaused=!1,c.delayTimer.setTimeout=setTimeout(c.delayTimer.next,c.delayRemaining))}function j(a){return function(b){return Math.round(b*a)*(1/a)}}function k(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;e<p;++e){var f=j(c,a,d);if(0===f)return c;c-=(i(c,a,d)-b)/f}return c}function l(){for(var b=0;b<t;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do{g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g}while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!==f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0===i?h:m(b,c,c+u)}function o(){y=!0,a===c&&d===e||l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;w<4;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function l(a,b){var c=a;return u.isString(a)?y.Easings[a]||(c=!1):c=u.isArray(a)&&1===a.length?j.apply(null,a):u.isArray(a)&&2===a.length?z.apply(null,a.concat([b])):!(!u.isArray(a)||4!==a.length)&&k.apply(null,a),!1===c&&(c=y.Easings[y.defaults.easing]?y.defaults.easing:x),c}function m(a){if(a){var b=y.timestamp&&!0!==a?a:r.now(),c=y.State.calls.length;c>1e4&&(y.State.calls=e(y.State.calls),c=y.State.calls.length);for(var f=0;f<c;f++)if(y.State.calls[f]){var h=y.State.calls[f],i=h[0],j=h[2],k=h[3],l=!k,q=null,s=h[5],t=h[6];if(k||(k=y.State.calls[f][3]=b-16),s){if(!0!==s.resume)continue;k=h[3]=Math.round(b-t-16),h[5]=null}t=h[6]=b-k;for(var v=Math.min(t/j.duration,1),w=0,x=i.length;w<x;w++){var z=i[w],B=z.element;if(g(B)){var D=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var E=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];o.each(E,function(a,b){A.setPropertyValue(B,"display",b)})}A.setPropertyValue(B,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&A.setPropertyValue(B,"visibility",j.visibility);for(var F in z)if(z.hasOwnProperty(F)&&"element"!==F){var G,H=z[F],I=u.isString(H.easing)?y.Easings[H.easing]:H.easing;if(u.isString(H.pattern)){var J=1===v?function(a,b,c){var d=H.endValue[b];return c?Math.round(d):d}:function(a,b,c){var d=H.startValue[b],e=H.endValue[b]-d,f=d+e*I(v,j,e);return c?Math.round(f):f};G=H.pattern.replace(/{(\d+)(!)?}/g,J)}else if(1===v)G=H.endValue;else{var K=H.endValue-H.startValue;G=H.startValue+K*I(v,j,K)}if(!l&&G===H.currentValue)continue;if(H.currentValue=G,"tween"===F)q=G;else{var L;if(A.Hooks.registered[F]){L=A.Hooks.getRoot(F);var M=g(B).rootPropertyValueCache[L];M&&(H.rootPropertyValue=M)}var N=A.setPropertyValue(B,F,H.currentValue+(p<9&&0===parseFloat(G)?"":H.unitType),H.rootPropertyValue,H.scrollData);A.Hooks.registered[F]&&(A.Normalizations.registered[L]?g(B).rootPropertyValueCache[L]=A.Normalizations.registered[L]("extract",null,N[1]):g(B).rootPropertyValueCache[L]=N[1]),"transform"===N[0]&&(D=!0)}}j.mobileHA&&g(B).transformCache.translate3d===d&&(g(B).transformCache.translate3d="(0px, 0px, 0px)",D=!0),D&&A.flushTransformCache(B)}}j.display!==d&&"none"!==j.display&&(y.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(y.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],v,Math.max(0,k+j.duration-b),k,q),1===v&&n(f)}}y.State.isTicking&&C(m)}function n(a,b){if(!y.State.calls[a])return!1;for(var c=y.State.calls[a][0],e=y.State.calls[a][1],f=y.State.calls[a][2],h=y.State.calls[a][4],i=!1,j=0,k=c.length;j<k;j++){var l=c[j].element;b||f.loop||("none"===f.display&&A.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&A.setPropertyValue(l,"visibility",f.visibility));var m=g(l);if(!0!==f.loop&&(o.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(o.queue(l)[1]))&&m){m.isAnimating=!1,m.rootPropertyValueCache={};var n=!1;o.each(A.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=m.transformCache[b];m.transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete m.transformCache[b])}),f.mobileHA&&(n=!0,delete m.transformCache.translate3d),n&&A.flushTransformCache(l),A.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(r){setTimeout(function(){throw r},1)}h&&!0!==f.loop&&h(e),m&&!0===f.loop&&!b&&(o.each(m.tweensContainer,function(a,b){if(/^rotate/.test(a)&&(parseFloat(b.startValue)-parseFloat(b.endValue))%360==0){var c=b.startValue;b.startValue=b.endValue,b.endValue=c}/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),y(l,"reverse",{loop:!0,delay:f.delay})),!1!==f.queue&&o.dequeue(l,f.queue)}y.State.calls[a]=!1;for(var p=0,q=y.State.calls.length;p<q;p++)if(!1!==y.State.calls[p]){i=!0;break}!1===i&&(y.State.isTicking=!1,delete y.State.calls,y.State.calls=[])}var o,p=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="\x3c!--[if IE "+a+"]><span></span><![endif]--\x3e",b.getElementsByTagName("span").length)return b=null,a}return d}(),q=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),r=function(){var a=b.performance||{};if("function"!=typeof a.now){var c=a.timing&&a.timing.navigationStart?a.timing.navigationStart:(new Date).getTime();a.now=function(){return(new Date).getTime()-c}}return a}(),s=function(){var a=Array.prototype.slice;try{return a.call(c.documentElement),a}catch(b){return function(b,c){var d=this.length;if("number"!=typeof b&&(b=0),"number"!=typeof c&&(c=d),this.slice)return a.call(this,b,c);var e,f=[],g=b>=0?b:Math.max(0,d+b),h=c<0?d+c:Math.min(c,d),i=h-g;if(i>0)if(f=new Array(i),this.charAt)for(e=0;e<i;e++)f[e]=this.charAt(g+e);else for(e=0;e<i;e++)f[e]=this[g+e];return f}}}(),t=function(){return Array.prototype.includes?function(a,b){return a.includes(b)}:Array.prototype.indexOf?function(a,b){return a.indexOf(b)>=0}:function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1}},u={isNumber:function(a){return"number"==typeof a},isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isWrapped:function(a){return a&&a!==b&&u.isNumber(a.length)&&!u.isString(a)&&!u.isFunction(a)&&!u.isNode(a)&&(0===a.length||u.isNode(a[0]))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}},v=!1;if(a.fn&&a.fn.jquery?(o=a,v=!0):o=b.Velocity.Utilities,p<=8&&!v)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(p<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var w=400,x="swing",y={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(b.navigator.userAgent),isAndroid:/Android/i.test(b.navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(b.navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(b.navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:o,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:w,easing:x,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(a){o.data(a,"velocity",{isSVG:u.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:2},debug:!1,timestamp:!0,pauseAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||!1===c[2].queue))return!0;c[5]={resume:!1}}}),o.each(y.State.delayedElements,function(a,c){c&&h(c,b)})},resumeAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||!1===c[2].queue))return!0;c[5]&&(c[5].resume=!0)}}),o.each(y.State.delayedElements,function(a,c){c&&i(c,b)})}};b.pageYOffset!==d?(y.State.scrollAnchor=b,y.State.scrollPropertyLeft="pageXOffset",y.State.scrollPropertyTop="pageYOffset"):(y.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,y.State.scrollPropertyLeft="scrollLeft",y.State.scrollPropertyTop="scrollTop");var z=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*.016):g=.016;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>1e-4&&Math.abs(h.v)>1e-4))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();y.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},o.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){y.Easings[b[0]]=k.apply(null,b[1])});var A=y.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<A.Lists.colors.length;a++){var b="color"===A.Lists.colors[a]?"0 0 0 1":"255 255 255 1";A.Hooks.templates[A.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(p)for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(A.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),A.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(" ");for(var g in e)if(e.hasOwnProperty(g)){var h=c+e[g],i=g;A.Hooks.registered[h]=[c,i]}}},getRoot:function(a){var b=A.Hooks.registered[a];return b?b[0]:a},getUnit:function(a,b){var c=(a.substr(b||0,5).match(/^[a-z%]+/)||[])[0]||"";return c&&t(A.Lists.units,c)?c:""},fixColors:function(a){return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(a,b,c){return A.Lists.colorNames.hasOwnProperty(c)?(b||"rgba(")+A.Lists.colorNames[c]+(b?"":",1)"):b+c})},cleanRootPropertyValue:function(a,b){return A.RegEx.valueUnwrap.test(b)&&(b=b.match(A.RegEx.valueUnwrap)[1]),A.Values.isCSSNullValue(b)&&(b=A.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=A.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=A.Hooks.cleanRootPropertyValue(d,b),b.toString().match(A.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=A.Hooks.registered[a];if(d){var e,f=d[0],g=d[1];return c=A.Hooks.cleanRootPropertyValue(f,c),e=c.toString().match(A.RegEx.valueSplit),e[g]=b,e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return A.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(A.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return y.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(p<=8)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":case"inject":return c}}},register:function(){function a(a,b,c){if("border-box"===A.getPropertyValue(b,"boxSizing").toString().toLowerCase()===(c||!1)){var d,e,f=0,g="width"===a?["Left","Right"]:["Top","Bottom"],h=["padding"+g[0],"padding"+g[1],"border"+g[0]+"Width","border"+g[1]+"Width"];for(d=0;d<h.length;d++)e=parseFloat(A.getPropertyValue(b,h[d])),isNaN(e)||(f+=e);return c?-f:f}return 0}function b(b,c){return function(d,e,f){switch(d){case"name":return b;case"extract":return parseFloat(f)+a(b,e,c);case"inject":return parseFloat(f)-a(b,e,c)+"px"}}}p&&!(p>9)||y.State.isGingerbread||(A.Lists.transformsBase=A.Lists.transformsBase.concat(A.Lists.transforms3D));for(var c=0;c<A.Lists.transformsBase.length;c++)!function(){var a=A.Lists.transformsBase[c];A.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[a]===d?/^scale/i.test(a)?1:0:g(c).transformCache[a].replace(/[()]/g,"");case"inject":var f=!1;switch(a.substr(0,a.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":y.State.isAndroid&&g(c).transformCache[a]===d&&e<1&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[a]="("+e+")"),g(c).transformCache[a]}}}();for(var e=0;e<A.Lists.colors.length;e++)!function(){var a=A.Lists.colors[e];A.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return a;case"extract":var f;if(A.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:A.RegEx.isHex.test(e)?g="rgb("+A.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(A.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!p||p>8)&&3===f.split(" ").length&&(f+=" 1"),f;case"inject":return/^rgb/.test(e)?e:(p<=8?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(p<=8?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();A.Normalizations.registered.innerWidth=b("width",!0),A.Normalizations.registered.innerHeight=b("height",!0),A.Normalizations.registered.outerWidth=b("width"),A.Normalizations.registered.outerHeight=b("height")}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(p||y.State.isAndroid&&!y.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(y.State.prefixMatches[a])return[y.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;c<d;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),u.isString(y.State.prefixElement.style[e]))return y.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return!a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){if(a)if(a.classList)a.classList.add(b);else if(u.isString(a.className))a.className+=(a.className.length?" ":"")+b;else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c+(c?" ":"")+b)}},removeClass:function(a,b){if(a)if(a.classList)a.classList.remove(b);else if(u.isString(a.className))a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ");else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c.replace(new RegExp("(^|s)"+b.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(a,c,e,f){function h(a,c){var e=0;if(p<=8)e=o.css(a,c);else{var i=!1;/^(width|height)$/.test(c)&&0===A.getPropertyValue(a,"display")&&(i=!0,A.setPropertyValue(a,"display",A.Values.getDisplayType(a)));var j=function(){i&&A.setPropertyValue(a,"display","none")};if(!f){if("height"===c&&"border-box"!==A.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(A.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(A.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(A.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(A.getPropertyValue(a,"paddingBottom"))||0);return j(),k}if("width"===c&&"border-box"!==A.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(A.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(A.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(A.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(A.getPropertyValue(a,"paddingRight"))||0);return j(),l}}var m;m=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),e=9===p&&"filter"===c?m.getPropertyValue(c):m[c],""!==e&&null!==e||(e=a.style[c]),j()}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var n=h(a,"position");("fixed"===n||"absolute"===n&&/top|left/i.test(c))&&(e=o(a).position()[c]+"px")}return e}var i;if(A.Hooks.registered[c]){var j=c,k=A.Hooks.getRoot(j);e===d&&(e=A.getPropertyValue(a,A.Names.prefixCheck(k)[0])),A.Normalizations.registered[k]&&(e=A.Normalizations.registered[k]("extract",a,e)),i=A.Hooks.extractValue(j,e)}else if(A.Normalizations.registered[c]){var l,m;l=A.Normalizations.registered[c]("name",a),"transform"!==l&&(m=h(a,A.Names.prefixCheck(l)[0]),A.Values.isCSSNullValue(m)&&A.Hooks.templates[c]&&(m=A.Hooks.templates[c][1])),i=A.Normalizations.registered[c]("extract",a,m)}if(!/^[\d-]/.test(i)){var n=g(a);if(n&&n.isSVG&&A.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(q){i=0}else i=a.getAttribute(c);else i=h(a,A.Names.prefixCheck(c)[0])}return A.Values.isCSSNullValue(i)&&(i=0),y.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(A.Normalizations.registered[c]&&"transform"===A.Normalizations.registered[c]("name",a))A.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(A.Hooks.registered[c]){var i=c,j=A.Hooks.getRoot(c);e=e||A.getPropertyValue(a,j),d=A.Hooks.injectValue(i,d,e),c=j}if(A.Normalizations.registered[c]&&(d=A.Normalizations.registered[c]("inject",a,d),c=A.Normalizations.registered[c]("name",a)),h=A.Names.prefixCheck(c)[0],p<=8)try{a.style[h]=d}catch(l){y.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else{var k=g(a);k&&k.isSVG&&A.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d}y.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){var b="",c=g(a);if((p||y.State.isAndroid&&!y.State.isChrome)&&c&&c.isSVG){var d=function(b){return parseFloat(A.getPropertyValue(a,b))},e={translate:[d("translateX"),d("translateY")],skewX:[d("skewX")],skewY:[d("skewY")],scale:1!==d("scale")?[d("scale"),d("scale")]:[d("scaleX"),d("scaleY")],rotate:[d("rotateZ"),0,0]};o.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),e[a]&&(b+=a+"("+e[a].join(" ")+") ",delete e[a])})}else{var f,h;o.each(g(a).transformCache,function(c){if(f=g(a).transformCache[c],"transformPerspective"===c)return h=f,!0;9===p&&"rotateZ"===c&&(c="rotate"),b+=c+f+" "}),h&&(b="perspective"+h+" "+b)}A.setPropertyValue(a,"transform",b)}};A.Hooks.register(),A.Normalizations.register(),y.hook=function(a,b,c){var e;return a=f(a),o.each(a,function(a,f){if(g(f)===d&&y.init(f),c===d)e===d&&(e=A.getPropertyValue(f,b));else{var h=A.setPropertyValue(f,b,c);"transform"===h[0]&&y.CSS.flushTransformCache(f),e=h}}),e};var B=function(){function a(){return k?z.promise||null:p}function e(a,e){function f(f){var k,n;if(i.begin&&0===D)try{i.begin.call(r,r)}catch(V){setTimeout(function(){throw V},1)}if("scroll"===G){var p,q,w,x=/^x$/i.test(i.axis)?"Left":"Top",B=parseFloat(i.offset)||0;i.container?u.isWrapped(i.container)||u.isNode(i.container)?(i.container=i.container[0]||i.container,p=i.container["scroll"+x],w=p+o(a).position()[x.toLowerCase()]+B):i.container=null:(p=y.State.scrollAnchor[y.State["scrollProperty"+x]],q=y.State.scrollAnchor[y.State["scrollProperty"+("Left"===x?"Top":"Left")]],w=o(a).offset()[x.toLowerCase()]+B),j={scroll:{rootPropertyValue:!1,startValue:p,currentValue:p,endValue:w,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:x,alternateValue:q}},element:a},y.debug&&console.log("tweensContainer (scroll): ",j.scroll,a)}else if("reverse"===G){if(!(k=g(a)))return;if(!k.tweensContainer)return void o.dequeue(a,i.queue);"none"===k.opts.display&&(k.opts.display="auto"),"hidden"===k.opts.visibility&&(k.opts.visibility="visible"),k.opts.loop=!1,k.opts.begin=null,k.opts.complete=null,v.easing||delete i.easing,v.duration||delete i.duration,i=o.extend({},k.opts,i),n=o.extend(!0,{},k?k.tweensContainer:null);for(var E in n)if(n.hasOwnProperty(E)&&"element"!==E){var F=n[E].startValue;n[E].startValue=n[E].currentValue=n[E].endValue,n[E].endValue=F,u.isEmptyObject(v)||(n[E].easing=i.easing),y.debug&&console.log("reverse tweensContainer ("+E+"): "+JSON.stringify(n[E]),a)}j=n}else if("start"===G){k=g(a),k&&k.tweensContainer&&!0===k.isAnimating&&(n=k.tweensContainer);var H=function(e,f){var g,l=A.Hooks.getRoot(e),m=!1,p=f[0],q=f[1],r=f[2]
        ;if(!(k&&k.isSVG||"tween"===l||!1!==A.Names.prefixCheck(l)[1]||A.Normalizations.registered[l]!==d))return void(y.debug&&console.log("Skipping ["+l+"] due to a lack of browser support."));(i.display!==d&&null!==i.display&&"none"!==i.display||i.visibility!==d&&"hidden"!==i.visibility)&&/opacity|filter/.test(e)&&!r&&0!==p&&(r=0),i._cacheValues&&n&&n[e]?(r===d&&(r=n[e].endValue+n[e].unitType),m=k.rootPropertyValueCache[l]):A.Hooks.registered[e]?r===d?(m=A.getPropertyValue(a,l),r=A.getPropertyValue(a,e,m)):m=A.Hooks.templates[l][1]:r===d&&(r=A.getPropertyValue(a,e));var s,t,v,w=!1,x=function(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=A.Values.getUnitType(a)),[d,c]};if(r!==p&&u.isString(r)&&u.isString(p)){g="";var z=0,B=0,C=[],D=[],E=0,F=0,G=0;for(r=A.Hooks.fixColors(r),p=A.Hooks.fixColors(p);z<r.length&&B<p.length;){var H=r[z],I=p[B];if(/[\d\.-]/.test(H)&&/[\d\.-]/.test(I)){for(var J=H,K=I,L=".",N=".";++z<r.length;){if((H=r[z])===L)L="..";else if(!/\d/.test(H))break;J+=H}for(;++B<p.length;){if((I=p[B])===N)N="..";else if(!/\d/.test(I))break;K+=I}var O=A.Hooks.getUnit(r,z),P=A.Hooks.getUnit(p,B);if(z+=O.length,B+=P.length,O===P)J===K?g+=J+O:(g+="{"+C.length+(F?"!":"")+"}"+O,C.push(parseFloat(J)),D.push(parseFloat(K)));else{var Q=parseFloat(J),R=parseFloat(K);g+=(E<5?"calc":"")+"("+(Q?"{"+C.length+(F?"!":"")+"}":"0")+O+" + "+(R?"{"+(C.length+(Q?1:0))+(F?"!":"")+"}":"0")+P+")",Q&&(C.push(Q),D.push(0)),R&&(C.push(0),D.push(R))}}else{if(H!==I){E=0;break}g+=H,z++,B++,0===E&&"c"===H||1===E&&"a"===H||2===E&&"l"===H||3===E&&"c"===H||E>=4&&"("===H?E++:(E&&E<5||E>=4&&")"===H&&--E<5)&&(E=0),0===F&&"r"===H||1===F&&"g"===H||2===F&&"b"===H||3===F&&"a"===H||F>=3&&"("===H?(3===F&&"a"===H&&(G=1),F++):G&&","===H?++G>3&&(F=G=0):(G&&F<(G?5:4)||F>=(G?4:3)&&")"===H&&--F<(G?5:4))&&(F=G=0)}}z===r.length&&B===p.length||(y.debug&&console.error('Trying to pattern match mis-matched strings ["'+p+'", "'+r+'"]'),g=d),g&&(C.length?(y.debug&&console.log('Pattern found "'+g+'" -> ',C,D,"["+r+","+p+"]"),r=C,p=D,t=v=""):g=d)}g||(s=x(e,r),r=s[0],v=s[1],s=x(e,p),p=s[0].replace(/^([+-\/*])=/,function(a,b){return w=b,""}),t=s[1],r=parseFloat(r)||0,p=parseFloat(p)||0,"%"===t&&(/^(fontSize|lineHeight)$/.test(e)?(p/=100,t="em"):/^scale/.test(e)?(p/=100,t=""):/(Red|Green|Blue)$/i.test(e)&&(p=p/100*255,t="")));if(/[\/*]/.test(w))t=v;else if(v!==t&&0!==r)if(0===p)t=v;else{h=h||function(){var d={myParent:a.parentNode||c.body,position:A.getPropertyValue(a,"position"),fontSize:A.getPropertyValue(a,"fontSize")},e=d.position===M.lastPosition&&d.myParent===M.lastParent,f=d.fontSize===M.lastFontSize;M.lastParent=d.myParent,M.lastPosition=d.position,M.lastFontSize=d.fontSize;var g={};if(f&&e)g.emToPx=M.lastEmToPx,g.percentToPxWidth=M.lastPercentToPxWidth,g.percentToPxHeight=M.lastPercentToPxHeight;else{var h=k&&k.isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");y.init(h),d.myParent.appendChild(h),o.each(["overflow","overflowX","overflowY"],function(a,b){y.CSS.setPropertyValue(h,b,"hidden")}),y.CSS.setPropertyValue(h,"position",d.position),y.CSS.setPropertyValue(h,"fontSize",d.fontSize),y.CSS.setPropertyValue(h,"boxSizing","content-box"),o.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){y.CSS.setPropertyValue(h,b,"100%")}),y.CSS.setPropertyValue(h,"paddingLeft","100em"),g.percentToPxWidth=M.lastPercentToPxWidth=(parseFloat(A.getPropertyValue(h,"width",null,!0))||1)/100,g.percentToPxHeight=M.lastPercentToPxHeight=(parseFloat(A.getPropertyValue(h,"height",null,!0))||1)/100,g.emToPx=M.lastEmToPx=(parseFloat(A.getPropertyValue(h,"paddingLeft"))||1)/100,d.myParent.removeChild(h)}return null===M.remToPx&&(M.remToPx=parseFloat(A.getPropertyValue(c.body,"fontSize"))||16),null===M.vwToPx&&(M.vwToPx=parseFloat(b.innerWidth)/100,M.vhToPx=parseFloat(b.innerHeight)/100),g.remToPx=M.remToPx,g.vwToPx=M.vwToPx,g.vhToPx=M.vhToPx,y.debug>=1&&console.log("Unit ratios: "+JSON.stringify(g),a),g}();var S=/margin|padding|left|right|width|text|word|letter/i.test(e)||/X$/.test(e)||"x"===e?"x":"y";switch(v){case"%":r*="x"===S?h.percentToPxWidth:h.percentToPxHeight;break;case"px":break;default:r*=h[v+"ToPx"]}switch(t){case"%":r*=1/("x"===S?h.percentToPxWidth:h.percentToPxHeight);break;case"px":break;default:r*=1/h[t+"ToPx"]}}switch(w){case"+":p=r+p;break;case"-":p=r-p;break;case"*":p*=r;break;case"/":p=r/p}j[e]={rootPropertyValue:m,startValue:r,currentValue:r,endValue:p,unitType:t,easing:q},g&&(j[e].pattern=g),y.debug&&console.log("tweensContainer ("+e+"): "+JSON.stringify(j[e]),a)};for(var I in s)if(s.hasOwnProperty(I)){var J=A.Names.camelCase(I),K=function(b,c){var d,f,g;return u.isFunction(b)&&(b=b.call(a,e,C)),u.isArray(b)?(d=b[0],!u.isArray(b[1])&&/^[\d-]/.test(b[1])||u.isFunction(b[1])||A.RegEx.isHex.test(b[1])?g=b[1]:u.isString(b[1])&&!A.RegEx.isHex.test(b[1])&&y.Easings[b[1]]||u.isArray(b[1])?(f=c?b[1]:l(b[1],i.duration),g=b[2]):g=b[1]||b[2]):d=b,c||(f=f||i.easing),u.isFunction(d)&&(d=d.call(a,e,C)),u.isFunction(g)&&(g=g.call(a,e,C)),[d||0,f,g]}(s[I]);if(t(A.Lists.colors,J)){var L=K[0],O=K[1],P=K[2];if(A.RegEx.isHex.test(L)){for(var Q=["Red","Green","Blue"],R=A.Values.hexToRgb(L),S=P?A.Values.hexToRgb(P):d,T=0;T<Q.length;T++){var U=[R[T]];O&&U.push(O),S!==d&&U.push(S[T]),H(J+Q[T],U)}continue}}H(J,K)}j.element=a}j.element&&(A.Values.addClass(a,"velocity-animating"),N.push(j),k=g(a),k&&(""===i.queue&&(k.tweensContainer=j,k.opts=i),k.isAnimating=!0),D===C-1?(y.State.calls.push([N,r,i,null,z.resolver,null,0]),!1===y.State.isTicking&&(y.State.isTicking=!0,m())):D++)}var h,i=o.extend({},y.defaults,v),j={};switch(g(a)===d&&y.init(a),parseFloat(i.delay)&&!1!==i.queue&&o.queue(a,i.queue,function(b,c){if(!0===c)return!0;y.velocityQueueEntryFlag=!0;var d=y.State.delayedElements.count++;y.State.delayedElements[d]=a;var e=function(a){return function(){y.State.delayedElements[a]=!1,b()}}(d);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(b,parseFloat(i.delay)),next:e}}),i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":i.duration=w;break;case"slow":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}if(!1!==y.mock&&(!0===y.mock?i.duration=i.delay=1:(i.duration*=parseFloat(y.mock)||1,i.delay*=parseFloat(y.mock)||1)),i.easing=l(i.easing,i.duration),i.begin&&!u.isFunction(i.begin)&&(i.begin=null),i.progress&&!u.isFunction(i.progress)&&(i.progress=null),i.complete&&!u.isFunction(i.complete)&&(i.complete=null),i.display!==d&&null!==i.display&&(i.display=i.display.toString().toLowerCase(),"auto"===i.display&&(i.display=y.CSS.Values.getDisplayType(a))),i.visibility!==d&&null!==i.visibility&&(i.visibility=i.visibility.toString().toLowerCase()),i.mobileHA=i.mobileHA&&y.State.isMobile&&!y.State.isGingerbread,!1===i.queue)if(i.delay){var k=y.State.delayedElements.count++;y.State.delayedElements[k]=a;var n=function(a){return function(){y.State.delayedElements[a]=!1,f()}}(k);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(f,parseFloat(i.delay)),next:n}}else f();else o.queue(a,i.queue,function(a,b){if(!0===b)return z.promise&&z.resolver(r),!0;y.velocityQueueEntryFlag=!0,f(a)});""!==i.queue&&"fx"!==i.queue||"inprogress"===o.queue(a)[0]||o.dequeue(a)}var j,k,p,q,r,s,v,x=arguments[0]&&(arguments[0].p||o.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||u.isString(arguments[0].properties));u.isWrapped(this)?(k=!1,q=0,r=this,p=this):(k=!0,q=1,r=x?arguments[0].elements||arguments[0].e:arguments[0]);var z={promise:null,resolver:null,rejecter:null};if(k&&y.Promise&&(z.promise=new y.Promise(function(a,b){z.resolver=a,z.rejecter=b})),x?(s=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(s=arguments[q],v=arguments[q+1]),!(r=f(r)))return void(z.promise&&(s&&v&&!1===v.promiseRejectEmpty?z.resolver():z.rejecter()));var C=r.length,D=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(s)&&!o.isPlainObject(v)){var E=q+1;v={};for(var F=E;F<arguments.length;F++)u.isArray(arguments[F])||!/^(fast|normal|slow)$/i.test(arguments[F])&&!/^\d/.test(arguments[F])?u.isString(arguments[F])||u.isArray(arguments[F])?v.easing=arguments[F]:u.isFunction(arguments[F])&&(v.complete=arguments[F]):v.duration=arguments[F]}var G;switch(s){case"scroll":G="scroll";break;case"reverse":G="reverse";break;case"pause":var H=(new Date).getTime();return o.each(r,function(a,b){h(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?"":v;return!0!==f&&b[2].queue!==f&&(v!==d||!1!==b[2].queue)||(o.each(r,function(a,d){if(d===e)return b[5]={resume:!1},c=!0,!1}),!c&&void 0)})}),a();case"resume":return o.each(r,function(a,b){i(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?"":v;return!0!==f&&b[2].queue!==f&&(v!==d||!1!==b[2].queue)||(!b[5]||(o.each(r,function(a,d){if(d===e)return b[5].resume=!0,c=!0,!1}),!c&&void 0))})}),a();case"finish":case"finishAll":case"stop":o.each(r,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==s||!0!==v&&!u.isString(v)||(o.each(o.queue(b,u.isString(v)?v:""),function(a,b){u.isFunction(b)&&b()}),o.queue(b,u.isString(v)?v:"",[]))});var I=[];return o.each(y.State.calls,function(a,b){b&&o.each(b[1],function(c,e){var f=v===d?"":v;if(!0!==f&&b[2].queue!==f&&(v!==d||!1!==b[2].queue))return!0;o.each(r,function(c,d){if(d===e)if((!0===v||u.isString(v))&&(o.each(o.queue(d,u.isString(v)?v:""),function(a,b){u.isFunction(b)&&b(null,!0)}),o.queue(d,u.isString(v)?v:"",[])),"stop"===s){var h=g(d);h&&h.tweensContainer&&(!0===f||""===f)&&o.each(h.tweensContainer,function(a,b){b.endValue=b.currentValue}),I.push(a)}else"finish"!==s&&"finishAll"!==s||(b[2].duration=1)})})}),"stop"===s&&(o.each(I,function(a,b){n(b,!0)}),z.promise&&z.resolver(r)),a();default:if(!o.isPlainObject(s)||u.isEmptyObject(s)){if(u.isString(s)&&y.Redirects[s]){j=o.extend({},v);var J=j.duration,K=j.delay||0;return!0===j.backwards&&(r=o.extend(!0,[],r).reverse()),o.each(r,function(a,b){parseFloat(j.stagger)?j.delay=K+parseFloat(j.stagger)*a:u.isFunction(j.stagger)&&(j.delay=K+j.stagger.call(b,a,C)),j.drag&&(j.duration=parseFloat(J)||(/^(callout|transition)/.test(s)?1e3:w),j.duration=Math.max(j.duration*(j.backwards?1-a/C:(a+1)/C),.75*j.duration,200)),y.Redirects[s].call(b,b,j||{},a,C,r,z.promise?z:d)}),a()}var L="Velocity: First argument ("+s+") was not a property map, a known action, or a registered redirect. Aborting.";return z.promise?z.rejecter(new Error(L)):b.console&&console.log(L),a()}G="start"}var M={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},N=[];o.each(r,function(a,b){u.isNode(b)&&e(b,a)}),j=o.extend({},y.defaults,v),j.loop=parseInt(j.loop,10);var O=2*j.loop-1;if(j.loop)for(var P=0;P<O;P++){var Q={delay:j.delay,progress:j.progress};P===O-1&&(Q.display=j.display,Q.visibility=j.visibility,Q.complete=j.complete),B(r,"reverse",Q)}return a()};y=o.extend(B,y),y.animate=B;var C=b.requestAnimationFrame||q;if(!y.State.isMobile&&c.hidden!==d){var D=function(){c.hidden?(C=function(a){return setTimeout(function(){a(!0)},16)},m()):C=b.requestAnimationFrame||q};D(),c.addEventListener("visibilitychange",D)}return a.Velocity=y,a!==b&&(a.fn.velocity=B,a.fn.velocity.defaults=y.defaults),o.each(["Down","Up"],function(a,b){y.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.begin,k=i.complete,l={},m={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};i.display===d&&(i.display="Down"===b?"inline"===y.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){0===e&&j&&j.call(g,g);for(var c in m)if(m.hasOwnProperty(c)){l[c]=a.style[c];var d=A.getPropertyValue(a,c);m[c]="Down"===b?[d,0]:[0,d]}l.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in l)l.hasOwnProperty(b)&&(a.style[b]=l[b]);e===f-1&&(k&&k.call(g,g),h&&h.resolver(g))},y(a,m,i)}}),o.each(["In","Out"],function(a,b){y.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.complete,k={opacity:"In"===b?1:0};0!==e&&(i.begin=null),i.complete=e!==f-1?null:function(){j&&j.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),y(this,k,i)}}),y}(window.jQuery||window.Zepto||window,window,window?window.document:undefined)});
</script>
<script type="text/javascript">
    /*! clipboard.js v2.0.6 https://clipboardjs.com/ Licensed MIT © Zeno Rocha */
    !function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return o={},r.m=n=[function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var d=n(3),h=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return s=e,f=n,(u=t).addEventListener(s,f),{destroy:function(){u.removeEventListener(s,f)}};if(d.nodeList(t))return a=t,c=e,l=n,Array.prototype.forEach.call(a,function(t){t.addEventListener(c,l)}),{destroy:function(){Array.prototype.forEach.call(a,function(t){t.removeEventListener(c,l)})}};if(d.string(t))return o=t,r=e,i=n,h(document.body,o,r,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,a,c,l,u,s,f}},function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(5);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),this.resolveOptions(t),this.initSelection()}var l=(function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(c,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(t){var e=0<arguments.length&&void 0!==t?t:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),c),u=n(1),s=n.n(u),f=n(2),d=n.n(f),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t};function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var m=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(v,s.a),p(v,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=d()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return b("action",t)}},{key:"defaultTarget",value:function(t){var e=b("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return b("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(t){var e=0<arguments.length&&void 0!==t?t:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),v);function v(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(v.__proto__||Object.getPrototypeOf(v)).call(this));return n.resolveOptions(e),n.listenClick(t),n}function b(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=m}],r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6).default;function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,o});
</script>

<!-- ==================== VLOOK UI ==================== -->

<!-- 欢迎屏 -->
<div class="mdx-load-screen mdx-backdrop-blurs">
    <!-- 文档专属图标 -->
    <div class="mdx-doc-logo"></div>
    <!-- 欢迎信息 -->
    <div class="mdx-load-screen-tips">
        <div>南京河西美容医院专属系统，</div>
        <div>实现了从预约、承接、到店、咨询、门诊、医疗、</div>
        <div>售后、报表统计、仓库管理等全方位一体化服务，</div>
        <div>真正实现了数字化办公理念。</div>
        <div>걱정하지 마십시오. 최고는 항상 가장 우연한 시간에 나타납니다.</div>
        <div>Не волнуйтесь, лучшее всегда будет появляться в самое случайное время.<br><br>:</div>
    </div>
    <!-- 文档加载进度及进入按钮 -->
    <div class="mdx-btn-load-screen">
        Loading...
    </div>
</div>
<!-- SVG图标集 -->
<svg style="display: none;">
    <!-- 图标|VLOOK LOGO for Light Mode -->
    <symbol id="icoVLOOK-light">
        <g id="VLOOK-light">
            <path d="M6.89838077,-8.30290747e-16 L17.1976192,-2.76763582e-16 C19.5796459,-7.14334776e-16 20.4434263,0.24801843 21.3142596,0.713745193 C22.1850929,1.17947196 22.868528,1.86290705 23.3342548,2.73374039 C23.7999816,3.60457372 24.048,4.46835414 24.048,6.85038077 L24.048,17.1496192 C24.048,19.5316459 23.7999816,20.3954263 23.3342548,21.2662596 C22.868528,22.1370929 22.1850929,22.820528 21.3142596,23.2862548 C20.4434263,23.7519816 19.5796459,24 17.1976192,24 L6.89838077,24 C4.51635414,24 3.65257372,23.7519816 2.78174039,23.2862548 C1.91090705,22.820528 1.22747196,22.1370929 0.761745193,21.2662596 C0.29601843,20.3954263 0.048,19.5316459 0.048,17.1496192 L0.048,6.85038077 C0.048,4.46835414 0.29601843,3.60457372 0.761745193,2.73374039 C1.22747196,1.86290705 1.91090705,1.17947196 2.78174039,0.713745193 C3.65257372,0.24801843 4.51635414,-3.92719553e-16 6.89838077,-8.30290747e-16 Z" id="Path" fill="#000000"></path>
            <g id="Combined-Shape" transform="translate(1.968000, 3.791553)" fill="#FFFFFF">
                <path d="M10.2643731,13.8820909 L11.3211911,14.7627725 C11.4342593,14.856996 11.4580902,15.0213112 11.3764485,15.1437739 L10.3196305,16.7290009 C10.231401,16.8613451 10.0525906,16.8971072 9.92024634,16.8088777 C9.88860888,16.7877861 9.86146115,16.7606383 9.84036952,16.7290009 L8.78355153,15.1437739 C8.70190976,15.0213112 8.72574073,14.856996 8.83880891,14.7627725 L9.89562689,13.8820909 C10.0024305,13.7930878 10.1575695,13.7930878 10.2643731,13.8820909 Z M4.8,5.0884466 C7.4509668,5.0884466 9.6,7.2374798 9.6,9.8884466 C9.6,12.5394134 7.4509668,14.6884466 4.8,14.6884466 C2.1490332,14.6884466 0,12.5394134 0,9.8884466 C0,7.2374798 2.1490332,5.0884466 4.8,5.0884466 Z M15.36,5.0884466 C18.0109668,5.0884466 20.16,7.2374798 20.16,9.8884466 C20.16,12.5394134 18.0109668,14.6884466 15.36,14.6884466 C12.7090332,14.6884466 10.56,12.5394134 10.56,9.8884466 C10.56,7.2374798 12.7090332,5.0884466 15.36,5.0884466 Z M4.8,6.5284466 C2.94432324,6.5284466 1.44,8.03276984 1.44,9.8884466 C1.44,11.7441234 2.94432324,13.2484466 4.8,13.2484466 C6.65567676,13.2484466 8.16,11.7441234 8.16,9.8884466 C8.16,8.03276984 6.65567676,6.5284466 4.8,6.5284466 Z M15.36,6.5284466 C13.5043232,6.5284466 12,8.03276984 12,9.8884466 C12,11.7441234 13.5043232,13.2484466 15.36,13.2484466 C17.2156768,13.2484466 18.72,11.7441234 18.72,9.8884466 C18.72,8.03276984 17.2156768,6.5284466 15.36,6.5284466 Z M10.0456314,4.68597195 L10.0345413,4.68601414 C9.94014911,4.68504496 9.84450891,4.66539949 9.75292849,4.62514585 L9.73808055,4.61842168 L2.77763675,1.37271343 C2.41724797,1.20466138 2.26132824,0.77627545 2.42938029,0.415886672 C2.59513025,0.0604347271 3.01413052,-0.0961116904 3.37135911,0.0609060409 L3.38620704,0.0676302143 L10.049,3.174 L16.7120241,0.0676302143 L16.7268721,0.0609060409 C17.0841006,-0.0961116904 17.5031009,0.0604347271 17.6688509,0.415886672 C17.8369029,0.77627545 17.6809832,1.20466138 17.3205944,1.37271343 L17.3205944,1.37271343 L10.3601506,4.61842168 L10.3453027,4.62514585 C10.2536644,4.66542493 10.1579612,4.68506979 10.0635109,4.68601595 C10.0600214,4.68583226 10.0563118,4.68591651 10.0525998,4.68597195 L10.0456314,4.68597195 Z"></path>
            </g>
        </g>
    </symbol>
    <!-- 图标|VLOOK LOGO for Dark Mode -->
    <symbol id="icoVLOOK-dark">
        <g id="VLOOK-dark">
            <path d="M6.89838077,-1.66058149e-15 L17.1976192,-1.10705433e-15 C19.5796459,-1.54462552e-15 20.4434263,0.24801843 21.3142596,0.713745193 C22.1850929,1.17947196 22.868528,1.86290705 23.3342548,2.73374039 C23.7999816,3.60457372 24.048,4.46835414 24.048,6.85038077 L24.048,17.1496192 C24.048,19.5316459 23.7999816,20.3954263 23.3342548,21.2662596 C22.868528,22.1370929 22.1850929,22.820528 21.3142596,23.2862548 C20.4434263,23.7519816 19.5796459,24 17.1976192,24 L6.89838077,24 C4.51635414,24 3.65257372,23.7519816 2.78174039,23.2862548 C1.91090705,22.820528 1.22747196,22.1370929 0.761745193,21.2662596 C0.29601843,20.3954263 0.048,19.5316459 0.048,17.1496192 L0.048,6.85038077 C0.048,4.46835414 0.29601843,3.60457372 0.761745193,2.73374039 C1.22747196,1.86290705 1.91090705,1.17947196 2.78174039,0.713745193 C3.65257372,0.24801843 4.51635414,-1.2230103e-15 6.89838077,-1.66058149e-15 Z" id="Path" fill="#FFFFFF"></path>
            <g id="Combined-Shape" transform="translate(1.968000, 3.791553)" fill="#121418">
                <path d="M10.2643731,13.8820909 L11.3211911,14.7627725 C11.4342593,14.856996 11.4580902,15.0213112 11.3764485,15.1437739 L10.3196305,16.7290009 C10.231401,16.8613451 10.0525906,16.8971072 9.92024634,16.8088777 C9.88860888,16.7877861 9.86146115,16.7606383 9.84036952,16.7290009 L8.78355153,15.1437739 C8.70190976,15.0213112 8.72574073,14.856996 8.83880891,14.7627725 L9.89562689,13.8820909 C10.0024305,13.7930878 10.1575695,13.7930878 10.2643731,13.8820909 Z M4.8,5.0884466 C7.4509668,5.0884466 9.6,7.2374798 9.6,9.8884466 C9.6,12.5394134 7.4509668,14.6884466 4.8,14.6884466 C2.1490332,14.6884466 0,12.5394134 0,9.8884466 C0,7.2374798 2.1490332,5.0884466 4.8,5.0884466 Z M15.36,5.0884466 C18.0109668,5.0884466 20.16,7.2374798 20.16,9.8884466 C20.16,12.5394134 18.0109668,14.6884466 15.36,14.6884466 C12.7090332,14.6884466 10.56,12.5394134 10.56,9.8884466 C10.56,7.2374798 12.7090332,5.0884466 15.36,5.0884466 Z M4.8,6.5284466 C2.94432324,6.5284466 1.44,8.03276984 1.44,9.8884466 C1.44,11.7441234 2.94432324,13.2484466 4.8,13.2484466 C6.65567676,13.2484466 8.16,11.7441234 8.16,9.8884466 C8.16,8.03276984 6.65567676,6.5284466 4.8,6.5284466 Z M15.36,6.5284466 C13.5043232,6.5284466 12,8.03276984 12,9.8884466 C12,11.7441234 13.5043232,13.2484466 15.36,13.2484466 C17.2156768,13.2484466 18.72,11.7441234 18.72,9.8884466 C18.72,8.03276984 17.2156768,6.5284466 15.36,6.5284466 Z M10.0456314,4.68597195 L10.0345413,4.68601414 C9.94014911,4.68504496 9.84450891,4.66539949 9.75292849,4.62514585 L9.73808055,4.61842168 L2.77763675,1.37271343 C2.41724797,1.20466138 2.26132824,0.77627545 2.42938029,0.415886672 C2.59513025,0.0604347271 3.01413052,-0.0961116904 3.37135911,0.0609060409 L3.38620704,0.0676302143 L10.049,3.174 L16.7120241,0.0676302143 L16.7268721,0.0609060409 C17.0841006,-0.0961116904 17.5031009,0.0604347271 17.6688509,0.415886672 C17.8369029,0.77627545 17.6809832,1.20466138 17.3205944,1.37271343 L17.3205944,1.37271343 L10.3601506,4.61842168 L10.3453027,4.62514585 C10.2536644,4.66542493 10.1579612,4.68506979 10.0635109,4.68601595 C10.0600214,4.68583226 10.0563118,4.68591651 10.0525998,4.68597195 L10.0456314,4.68597195 Z"></path>
            </g>
        </g>
    </symbol>
    <!-- 图标|大纲 -->
    <symbol id="icoOutline">
        <path d="M6,0 L19,0 C19.5522847,0 20,0.44771525 20,1 C20,1.55228475 19.5522847,2 19,2 L6,2 C5.44771525,2 5,1.55228475 5,1 C5,0.44771525 5.44771525,0 6,0 Z M1,0 L2,0 C2.55228475,0 3,0.44771525 3,1 C3,1.55228475 2.55228475,2 2,2 L1,2 C0.44771525,2 0,1.55228475 0,1 C0,0.44771525 0.44771525,0 1,0 Z M1,6 L2,6 C2.55228475,6 3,6.44771525 3,7 C3,7.55228475 2.55228475,8 2,8 L1,8 C0.44771525,8 0,7.55228475 0,7 C0,6.44771525 0.44771525,6 1,6 Z M1,12 L2,12 C2.55228475,12 3,12.4477153 3,13 C3,13.5522847 2.55228475,14 2,14 L1,14 C0.44771525,14 0,13.5522847 0,13 C0,12.4477153 0.44771525,12 1,12 Z M6,6 L19,6 C19.5522847,6 20,6.44771525 20,7 C20,7.55228475 19.5522847,8 19,8 L6,8 C5.44771525,8 5,7.55228475 5,7 C5,6.44771525 5.44771525,6 6,6 Z M6,12 L19,12 C19.5522847,12 20,12.4477153 20,13 C20,13.5522847 19.5522847,14 19,14 L6,14 C5.44771525,14 5,13.5522847 5,13 C5,12.4477153 5.44771525,12 6,12 Z">
        </path>
    </symbol>
    <!-- 图标|插图导航的上一张 -->
    <symbol id="icoPrevFig">
        <path d="M11.0303682,0.091084328 C11.7948436,0.375093579 12.1890102,1.237894 11.9107639,2.018203 L3.00130389,26.9997408 L11.9107639,51.981797 C12.1726428,52.7162055 11.8388895,53.5236859 11.1613701,53.8529228 L11.0303682,53.9089157 C10.310862,54.1762185 9.51976648,53.8355526 9.19721032,53.1440006 L9.14235361,53.0102855 C5.13199059,41.7636939 2.12421833,33.3287502 0.11903682,27.7054544 C0.11186687,27.6853471 0,27.43485 0,26.9997408 C0,26.5646315 0.111310594,26.3162129 0.119265149,26.2939053 C2.12439592,20.6707518 5.13209207,12.2360215 9.14235361,0.989714523 C9.4205999,0.20940552 10.2658928,-0.192924923 11.0303682,0.091084328 Z">
        </path>
    </symbol>
    <!-- 图标|插图导航的下一张 -->
    <symbol id="icoNextFig">
        <path d="M11.0303682,0.091084328 C11.7948436,0.375093579 12.1890102,1.237894 11.9107639,2.018203 L3.00130389,26.9997408 L11.9107639,51.981797 C12.1726428,52.7162055 11.8388895,53.5236859 11.1613701,53.8529228 L11.0303682,53.9089157 C10.310862,54.1762185 9.51976648,53.8355526 9.19721032,53.1440006 L9.14235361,53.0102855 C5.13199059,41.7636939 2.12421833,33.3287502 0.11903682,27.7054544 C0.11186687,27.6853471 0,27.43485 0,26.9997408 C0,26.5646315 0.111310594,26.3162129 0.119265149,26.2939053 C2.12439592,20.6707518 5.13209207,12.2360215 9.14235361,0.989714523 C9.4205999,0.20940552 10.2658928,-0.192924923 11.0303682,0.091084328 Z" transform="translate(6.000000, 27.000000) scale(-1, 1) translate(-6.000000, -27.000000) ">
        </path>
    </symbol>
    <!-- 图标|逐章导航的上一章 -->
    <symbol id="icoPrevChapter">
        <path d="M2.56507664,7.09086552 L7.5381691,12.063958 C7.92869339,12.4544823 7.92869339,13.0876472 7.5381691,13.4781715 C7.14764481,13.8686958 6.51447983,13.8686958 6.12395554,13.4781715 L0.467101288,7.82131729 C0.287321184,7.64153719 0.190303885,7.41033487 0.176049391,7.17505536 C0.145971879,6.88568746 0.241806749,6.58570828 0.463554001,6.36396103 L6.12040825,0.707106781 C6.51093254,0.316582489 7.14409752,0.316582489 7.53462181,0.707106781 C7.9251461,1.09763107 7.9251461,1.73079605 7.53462181,2.12132034 L2.56507664,7.09086552 Z">
        </path>
    </symbol>
    <!-- 图标|逐章导航的下一章 -->
    <symbol id="icoNextChapter">
        <path d="M2.73310223,7.09086552 L7.70619469,12.063958 C8.09671898,12.4544823 8.09671898,13.0876472 7.70619469,13.4781715 C7.3156704,13.8686958 6.68250542,13.8686958 6.29198113,13.4781715 L0.635126876,7.82131729 C0.455346772,7.64153719 0.358329473,7.41033487 0.344074979,7.17505536 C0.313997467,6.88568746 0.409832337,6.58570828 0.631579589,6.36396103 L6.28843384,0.707106781 C6.67895813,0.316582489 7.31212311,0.316582489 7.7026474,0.707106781 C8.09317169,1.09763107 8.09317169,1.73079605 7.7026474,2.12132034 L2.73310223,7.09086552 Z"transform="translate(4.168887, 7.092639) scale(-1, 1) translate(-4.168887, -7.092639) ">
        </path>
    </symbol>
    <!-- 图标|已收起的大纲节点 -->
    <symbol id="icoFolded">
        <path d="M10,2 C14.418278,2 18,5.581722 18,10 C18,14.418278 14.418278,18 10,18 C5.581722,18 2,14.418278 2,10 C2,5.581722 5.581722,2 10,2 Z M9.36396103,5.05025253 C8.97343674,4.65972824 8.34027176,4.65972824 7.94974747,5.05025253 C7.55922318,5.44077682 7.55922318,6.0739418 7.94974747,6.46446609 L7.94974747,6.46446609 L11.4852814,10 L7.94974747,13.5355339 C7.55922318,13.9260582 7.55922318,14.5592232 7.94974747,14.9497475 C8.34027176,15.3402718 8.97343674,15.3402718 9.36396103,14.9497475 L9.36396103,14.9497475 L13.6066017,10.7071068 C13.997126,10.3165825 13.997126,9.68341751 13.6066017,9.29289322 L13.6066017,9.29289322 Z">
        </path>
    </symbol>
    <!-- 图标|已展开的大纲节点 -->
    <symbol id="icoUnfold">
        <path d="M13,4.65685425 C13.5522847,4.65685425 14,5.1045695 14,5.65685425 C14,6.209139 13.5522847,6.65685425 13,6.65685425 L8,6.65685425 L8,11.6568542 C8,12.209139 7.55228475,12.6568542 7,12.6568542 C6.44771525,12.6568542 6,12.209139 6,11.6568542 L6,5.65685425 C6,5.1045695 6.44771525,4.65685425 7,4.65685425 L13,4.65685425 Z" transform="translate(10.000000, 8.656854) rotate(-135.000000) translate(-10.000000, -8.656854) ">
        </path>
    </symbol>
    <!-- 图标|展开长内容 -->
    <symbol id="icoExtend">
        <path d="M13,1.65685425 C13.5522847,1.65685425 14,2.1045695 14,2.65685425 C14,3.209139 13.5522847,3.65685425 13,3.65685425 L8,3.65685425 L8,8.65685425 C8,9.209139 7.55228475,9.65685425 7,9.65685425 C6.44771525,9.65685425 6,9.209139 6,8.65685425 L6,2.65685425 C6,2.1045695 6.44771525,1.65685425 7,1.65685425 L13,1.65685425 Z" transform="translate(10.000000, 5.656854) rotate(-135.000000) translate(-10.000000, -5.656854) "></path>
        <path d="M13,7.65685425 C13.5522847,7.65685425 14,8.1045695 14,8.65685425 C14,9.209139 13.5522847,9.65685425 13,9.65685425 L8,9.65685425 L8,14.6568542 C8,15.209139 7.55228475,15.6568542 7,15.6568542 C6.44771525,15.6568542 6,15.209139 6,14.6568542 L6,8.65685425 C6,8.1045695 6.44771525,7.65685425 7,7.65685425 L13,7.65685425 Z" transform="translate(10.000000, 11.656854) rotate(-135.000000) translate(-10.000000, -11.656854) "></path>
    </symbol>
    <!-- 图标|关闭 -->
    <symbol id="icoClose">
        <path d="M7,7 L7,-1 C7,-1.55228475 7.44771525,-2 8,-2 C8.55228475,-2 9,-1.55228475 9,-1 L9,7 L17,7 C17.5522847,7 18,7.44771525 18,8 C18,8.55228475 17.5522847,9 17,9 L9,9 L9,17 C9,17.5522847 8.55228475,18 8,18 C7.44771525,18 7,17.5522847 7,17 L7,9 L-1,9 C-1.55228475,9 -2,8.55228475 -2,8 C-2,7.44771525 -1.55228475,7 -1,7 L7,7 Z" transform="translate(8.000000, 8.000000) rotate(45.000000) translate(-8.000000, -8.000000) ">
        </path>
    </symbol>
    <!-- 图标|插图导航 -->
    <symbol id="icoFigure">
        <path d="M2,0 L15,0 C16.1045695,-2.02906125e-16 17,0.8954305 17,2 L17,12 C17,13.1045695 16.1045695,14 15,14 L2,14 C0.8954305,14 -1.13551567e-13,13.1045695 -1.13686838e-13,12 L-1.13686838e-13,2 C-1.13822108e-13,0.8954305 0.8954305,2.02906125e-16 2,0 Z M11,6 C12.1045695,6 13,5.1045695 13,4 C13,2.8954305 12.1045695,2 11,2 C9.8954305,2 9,2.8954305 9,4 C9,5.1045695 9.8954305,6 11,6 Z M2.03225639,10.5528128 C1.96084272,10.6932426 1.92361915,10.8485585 1.92361915,11.0061035 C1.92361915,11.5583883 2.3713344,12.0061035 2.92361915,12.0061035 L14.2120421,12.0061035 C14.4392714,12.0061035 14.6597254,11.9287155 14.8370963,11.7866848 C15.2681995,11.4414769 15.3378313,10.8121525 14.9926234,10.3810493 L12.9645536,7.84835144 C12.6449335,7.44920285 12.075683,7.35548344 11.6449719,7.63110012 L9.29545309,9.13458249 C9.28589453,9.14069912 9.27623255,9.14665259 9.26647134,9.15244033 C8.79141623,9.43411583 8.17796486,9.27735069 7.89628936,8.80229559 L6.14615975,5.85064382 C6.04943866,5.68752049 5.90832711,5.55526275 5.73928706,5.46929968 C5.247001,5.21895416 4.64497916,5.41508571 4.39463363,5.90737177 L2.03225639,10.5528128 Z M18,12.5 L18,2 C19.1045695,2 20,2.8954305 20,4 L20,15 C20,16.1045695 19.1045695,17 18,17 L4,17 C2.8954305,17 2,16.1045695 2,15 L15.5,15 C16.8807119,15 18,13.8807119 18,12.5 Z">
        </path>
    </symbol>
    <!-- 图标|图片墙 -->
    <symbol id="icoFigureGrid">
        <rect height="6" id="Rectangle-5" rx="1" width="6" x="0" y="0"></rect>
        <rect height="6" id="Rectangle-5-Copy" rx="1" width="6" x="8" y="0"></rect>
        <rect height="6" id="Rectangle-5-Copy-2" rx="1" width="6" x="16" y="0"></rect>
        <rect height="6" id="Rectangle-5-Copy-5" rx="1" width="6" x="0" y="8"></rect>
        <rect height="6" id="Rectangle-5-Copy-4" rx="1" width="6" x="8" y="8"></rect>
        <rect height="6" id="Rectangle-5-Copy-3" rx="1" width="6" x="16" y="8"></rect>
    </symbol>
    <!-- 图标|亮色模式 -->
    <symbol id="icoLightMode">
        <path d="M10.8333333,0.83333334 L10.8333333,2.5 C10.8333333,2.9602373 10.4602373,3.33333334 10,3.33333334 C9.5397627,3.33333334 9.16666666,2.9602373 9.16666666,2.5 L9.16666666,0.83333334 C9.16666666,0.373096045 9.5397627,8.45442195e-17 10,0 C10.4602373,-8.45442195e-17 10.8333333,0.373096045 10.8333333,0.83333334 Z M10,16.6666667 C9.5397627,16.6666667 9.16666666,17.0397627 9.16666666,17.5 L9.16666666,19.1666667 C9.16666666,19.626904 9.5397627,20 10,20 C10.4602373,20 10.8333333,19.626904 10.8333333,19.1666667 L10.8333333,17.5 C10.8333333,17.0397627 10.4602373,16.6666667 10,16.6666667 Z M2.92895834,2.92895834 C2.77266874,3.08523989 2.68486548,3.29720799 2.68486548,3.51822917 C2.68486548,3.73925035 2.77266874,3.95121845 2.92895834,4.1075 L4.1075,5.28604166 C4.43294529,5.61148694 4.96059636,5.61148694 5.28604165,5.28604165 C5.61148694,4.96059636 5.61148694,4.43294529 5.28604166,4.1075 L4.1075,2.92895834 C3.95121845,2.77266874 3.73925035,2.68486548 3.51822917,2.68486548 C3.29720799,2.68486548 3.08523989,2.77266874 2.92895834,2.92895834 Z M14.7139583,14.7139583 C14.3886401,15.0393749 14.3886401,15.5668751 14.7139583,15.8922917 L14.7139583,15.8925 L15.8925,17.0710417 C16.1030262,17.2815679 16.4098748,17.3637877 16.6974589,17.2867298 C16.985043,17.2096718 17.2096718,16.985043 17.2867298,16.6974589 C17.3637877,16.4098748 17.2815679,16.1030262 17.0710417,15.8925 L15.8925,14.7139583 C15.7362456,14.5576177 15.5242673,14.4697791 15.3032292,14.4697791 C15.082191,14.4697791 14.8702128,14.5576177 14.7139583,14.7139583 Z M0,10 C5.6362813e-17,10.4602373 0.373096045,10.8333333 0.83333334,10.8333333 L2.5,10.8333333 C2.9602373,10.8333333 3.33333334,10.4602373 3.33333334,10 C3.33333334,9.5397627 2.9602373,9.16666666 2.5,9.16666666 L0.83333334,9.16666666 C0.373096045,9.16666666 5.6362813e-17,9.5397627 0,10 Z M16.6666667,10 C16.6666667,10.4602373 17.0397627,10.8333333 17.5,10.8333333 L19.1666667,10.8333333 C19.626904,10.8333333 20,10.4602373 20,10 C20,9.5397627 19.626904,9.16666666 19.1666667,9.16666666 L17.5,9.16666666 C17.0397627,9.16666666 16.6666667,9.5397627 16.6666667,10 Z M2.92895834,17.0710417 C3.08523989,17.2273313 3.29720799,17.3151345 3.51822917,17.3151345 C3.73925035,17.3151345 3.95121845,17.2273313 4.1075,17.0710417 L5.28583334,15.8925 C5.60509309,15.5660706 5.60221508,15.0435127 5.27937916,14.7206197 C4.95654324,14.3977267 4.43398579,14.3947563 4.1075,14.7139583 L2.92895834,15.8925 C2.77266874,16.0487816 2.68486548,16.2607497 2.68486548,16.4817708 C2.68486548,16.702792 2.77266874,16.9147601 2.92895834,17.0710417 Z M14.7139583,5.28604166 C15.0393749,5.61135993 15.5668751,5.61135993 15.8922917,5.28604166 L15.8925,5.28604166 L17.0710417,4.1075 C17.396487,3.78205471 17.396487,3.25440363 17.0710417,2.92895834 C16.7455964,2.60351305 16.2179453,2.60351305 15.8925,2.92895834 L14.7139583,4.1075 C14.5576177,4.26375444 14.4697791,4.4757327 14.4697791,4.69677083 C14.4697791,4.91780896 14.5576177,5.12978722 14.7139583,5.28604166 Z M15,10 C15,12.7614583 12.7614583,15 10,15 C7.23854166,15 5,12.7614583 5,10 C5,7.23854166 7.23854166,5 10,5 C12.7614583,5 15,7.23854166 15,10 Z">
        </path>
    </symbol>
    <!-- 图标|深色模式 -->
    <symbol id="icoDarkMode">
        <path d="M4.1439375,12.4783274 C8.7496875,12.4783274 12.4801875,8.74489828 12.4801875,4.14181693 C12.4801875,2.62583206 12.045375,1.22347573 11.33775,0 C15.17625,1.10703459 18,4.60533142 18,8.800025 C18,13.8801213 13.8825,18 8.802,18 C4.6074375,18 1.107,15.1744742 0,11.3375418 C1.22625,12.0429388 2.628,12.4783274 4.1439375,12.4783274 Z M4.44974747,8.44974747 L3.74264069,10.2426407 L3.03553391,8.44974747 L1.24264069,7.74264069 L3.03553391,7.03553391 L3.74264069,5.24264069 L4.44974747,7.03553391 L6.24264069,7.74264069 L4.44974747,8.44974747 Z M8.39411255,4.39411255 L7.82842712,5.82842712 L7.2627417,4.39411255 L5.82842712,3.82842712 L7.2627417,3.2627417 L7.82842712,1.82842712 L8.39411255,3.2627417 L9.82842712,3.82842712 L8.39411255,4.39411255 Z M3.75269119,2.75269119 L3.32842712,3.82842712 L2.90416306,2.75269119 L1.82842712,2.32842712 L2.90416306,1.90416306 L3.32842712,0.828427125 L3.75269119,1.90416306 L4.82842712,2.32842712 L3.75269119,2.75269119 Z">
        </path>
    </symbol>
    <!-- 图标|聚光灯 -->
    <symbol id="icoSpotlight">
        <path d="M11.1949511,14.3025696 L9.89553711,18.0009016 C9.79558219,18.5006762 9.19585266,19.0004508 8.3962133,19.4002705 C7.49661902,19.8000902 6.29715998,20 4.99774602,20 C3.69833205,20 2.49887301,19.8000902 1.59927873,19.4002705 C0.599729531,18.9004959 0,18.2008114 0,17.501127 C0,17.1013073 0.199909844,16.7014876 0.399819687,16.4016229 L8.59612314,7.40568004 L10.8950863,4.90680703 L15.093193,0.208925781 C15.2931028,0.0090159375 15.5929676,0.00901595703 15.7928774,0.108970859 C15.9927872,0.208925762 16.0927422,0.508790527 15.9927872,0.708700371 L13.4939142,7.90545465 L11.1949511,14.3025696 Z M11.7640774,15.7965261 L14.2708176,8.82245531 L19.5911644,15.1022089 C19.8910291,15.4020737 19.9909841,15.8018933 19.9909841,16.0018032 C19.9909841,16.4016229 19.7910742,17.0013524 18.6915701,17.501127 C17.8919307,17.8009918 16.9923364,18.0009016 15.9927872,18.0009016 C14.993238,18.0009016 13.9936888,17.8009918 13.2940044,17.6010819 C12.3944101,17.2012622 12.0945454,16.8014426 11.9945904,16.4016229 L11.7640774,15.7965261 Z M8.17832315,6.3290416 L5.99729521,0.708700371 C5.89734029,0.508790547 5.89734029,0.308880703 6.19720506,0.108970859 C6.49706982,-0.0909389844 6.69697967,0.0090159375 6.89688951,0.208925781 L10.218134,4.11138806 L8.17832315,6.3290416 Z M7.99639363,18.5006762 C8.59612314,18.2008114 8.99594283,17.9009467 8.99594283,17.501127 C8.99594283,17.1013073 8.59612316,16.8014426 7.99639363,16.5015778 C7.19675426,16.201713 6.09725016,16.0018032 4.99774602,16.0018032 C3.89824188,16.0018032 2.79873775,16.201713 1.9990984,16.5015778 C1.39936889,16.8014426 0.999549199,17.1013073 0.999549199,17.501127 C0.999549199,17.9009467 1.39936887,18.2008114 1.9990984,18.5006762 C2.79873777,18.800541 3.89824188,19.0004508 4.99774602,19.0004508 C6.09725016,19.0004508 7.19675428,18.800541 7.99639363,18.5006762 Z M12.9941396,16.0018032 C12.9940532,16.3589269 13.5655733,16.6889352 14.4933936,16.8675054 C15.4212139,17.0460756 16.5643606,17.0460756 17.4921809,16.8675054 C18.4200012,16.6889352 18.9915213,16.3589269 18.9914349,16.0018032 C18.9915213,15.6446794 18.4200012,15.3146712 17.4921809,15.136101 C16.5643606,14.9575308 15.4212139,14.9575308 14.4933936,15.136101 C13.5655733,15.3146712 12.9940532,15.6446794 12.9941396,16.0018032 Z">
        </path>
    </symbol>
    <!-- 图标|非衬线字体风格 -->
    <symbol id="icoFont-sans">
        <path d="M18,16 L14.0598232,16 L12.4935418,12.2464833 L5.32290959,12.2464833 L3.84228416,16 L0,16 L6.98708362,0 L10.8171312,0 L18,16 Z M11.3310673,9.55987559 L8.8592794,3.62602064 L6.4364378,9.55987559 L11.3310673,9.55987559 Z">
        </path>
    </symbol>
    <!-- 图标|衬线字体风格 -->
    <symbol id="icoFont-serif">
        <path d="M10.45,11.2169143 L4.4625,11.2169143 L3.75,12.8525809 C3.5166655,13.3978058 3.4,13.8480227 3.4,14.203245 C3.4,14.6741211 3.59166475,15.0210772 3.975,15.2441238 C4.20000112,15.3762995 4.75416225,15.4754298 5.6375,15.5415177 L5.6375,16 L0,16 L0,15.5415177 C0.608336375,15.4506469 1.10833138,15.2007559 1.5,14.7918372 C1.89166862,14.3829185 2.37499713,13.5382455 2.95,12.257793 L9.0125,0 L9.25,0 L15.3625,12.6295355 C15.9458363,13.9347709 16.4249981,14.7567265 16.8,15.0954268 C17.0833347,15.3515173 17.4833307,15.5002128 18,15.5415177 L18,16 L9.8,16 L9.8,15.5415177 L10.1375,15.5415177 C10.7958366,15.5415177 11.258332,15.4506482 11.525,15.2689066 C11.7083342,15.1367308 11.8,14.9467311 11.8,14.6989016 C11.8,14.5502038 11.7750002,14.3973779 11.725,14.2404192 C11.7083332,14.1660704 11.5833345,13.8562881 11.35,13.3110632 L10.45,11.2169143 Z M10.025,10.2619342 L7.5,4.49650206 L4.9,10.2619342 L10.025,10.2619342 Z">
        </path>
    </symbol>
    <!-- 图标|打印 -->
    <symbol id="icoPrint">
        <path d="M15,7.38964445e-12 C16.1045695,7.38944155e-12 17,0.8954305 17,2 L17,6 L18,6 C19.1045695,6 20,6.8954305 20,8 L20,14 C20,15.1045695 19.1045695,16 18,16 L17,16 L17,17 C17,18.1045695 16.1045695,19 15,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,16 L2,16 C0.8954305,16 1.3527075e-16,15.1045695 0,14 L0,8 C-1.3527075e-16,6.8954305 0.8954305,6 2,6 L3,6 L3,2 C3,0.8954305 3.8954305,7.38984736e-12 5,7.38964445e-12 L15,7.38964445e-12 Z M16,13 L4,13 L4,17 C4,17.5522847 4.44771525,18 5,18 L5,18 L15,18 C15.5522847,18 16,17.5522847 16,17 L16,17 L16,13 Z M14,15 L14,16 L6,16 L6,15 L14,15 Z M17.5,8 L16.5,8 C16.2238576,8 16,8.22385763 16,8.5 C16,8.77614237 16.2238576,9 16.5,9 L16.5,9 L17.5,9 C17.7761424,9 18,8.77614237 18,8.5 C18,8.22385763 17.7761424,8 17.5,8 L17.5,8 Z M14.1275656,8 C13.8514233,8 13.6275656,8.22385763 13.6275656,8.5 C13.6275656,8.77614237 13.8514233,9 14.1275656,9 C14.403708,9 14.6275656,8.77614237 14.6275656,8.5 C14.6275656,8.22385763 14.403708,8 14.1275656,8 Z M15,1 L5,1 C4.44771525,1 4,1.44771525 4,2 L4,2 L4,6 L16,6 L16,2 C16,1.48716416 15.6139598,1.06449284 15.1166211,1.00672773 L15,1 Z">
        </path>
    </symbol>
    <!-- 图标|新标签打开 -->
    <symbol id="icoNewTab">
        <path d="M17.9987947,9 C18.5510794,9 18.9987924,9.44771525 18.9987924,10 L18.9987924,16 C18.9987924,16.5522847 18.5510794,17 17.9987947,17 C17.4465099,17 16.9987947,16.5522847 16.9987947,16 L16.9982218,12.47 L11.7071091,17.7054567 C11.3165848,18.095981 10.6834198,18.095981 10.2928955,17.7054567 C9.90237124,17.3149324 9.90237124,16.6817674 10.2928955,16.2912431 L15.6402218,11 L11.9987947,11 C11.4465099,11 10.9987947,10.5522847 10.9987947,10 C10.9987947,9.44771525 11.4465099,9 11.9987947,9 L17.9987947,9 Z">
        </path>
        <path d="M1,5 L1,13.499817 C1,14.2795131 1.59488808,14.9202656 2.35553999,14.9929504 L2.5,14.999817 L8.51827299,14.999817 C8.79441537,14.999817 9.01827299,15.2236746 9.01827299,15.499817 C9.01827299,15.7452769 8.84139783,15.9494253 8.60814863,15.9917613 L8.51827299,15.999817 L2.5,15.999817 C1.1745166,15.999817 0.089961328,14.968281 0.00531767968,13.6641926 L0,13.499817 L0,2.5 C0,1.1745166 1.03153594,0.089961328 2.33562431,0.00531767968 L2.5,-1.95399252e-14 L16.5,-1.95399252e-14 C17.8254834,-1.95399252e-14 18.9100387,1.03153594 18.9946823,2.33562431 L19,2.5 L19,6.49976186 C19,6.77590424 18.7761424,6.99976186 18.5,6.99976186 C18.2545401,6.99976186 18.0503916,6.8228867 18.0080557,6.58963749 L18,6.49976186 L18,5 L1,5 Z M1,4 L18,4 L18,2.5 C18,1.72030388 17.4051119,1.07955132 16.64446,1.00686658 L16.5,1 L2.5,1 C1.72030388,1 1.07955132,1.59488808 1.00686658,2.35553999 L1,2.5 L1,4 Z">
        </path>
    </symbol>
    <!-- 图标|复制代码块 -->
    <symbol id="icoCopyCodeBlock">
        <path d="M15.91965,0 C17.0679061,0.0012395937 17.998512,0.931644206 18,2.07989999 L18,13.6701 C17.998512,14.8183558 17.0679061,15.7487604 15.91965,15.75 L13.05,15.75 L13.05,15.9201 C13.0487599,17.068283 12.118283,17.9987599 10.9701,18 L2.07989999,18 C0.931716995,17.9987599 0.00124007732,17.068283 0,15.9201 L0,4.32989999 C0.00124007732,3.18171699 0.931716995,2.25124007 2.07989999,2.25 L4.95,2.25 L4.95,2.07989999 C4.95148801,0.931644206 5.88209392,0.0012395937 7.03035,0 L15.91965,0 Z M2.08035,16.65 L10.96965,16.65 C11.3725278,16.6492579 11.6990096,16.3229773 11.7,15.9201 L11.7,4.32989999 C11.7,3.92759999 11.3724,3.6 10.9701,3.6 L2.08035,3.6 C1.67805,3.6 1.34999999,3.92759999 1.34999999,4.32989999 L1.34999999,15.9201 C1.34999999,16.32285 1.67805,16.65 2.08035,16.65 Z M9.22500001,6.29999999 C9.5977922,6.29999999 9.89999998,6.6022078 9.89999998,6.97499999 C9.89999998,7.34779219 9.5977922,7.65 9.22500001,7.65 L3.82499999,7.65 C3.45220779,7.65 3.15000001,7.34779219 3.15000001,6.97499999 C3.15000001,6.6022078 3.45220779,6.29999999 3.82499999,6.29999999 L9.22500001,6.29999999 L9.22500001,6.29999999 Z M9.22500001,9.45 C9.5977922,9.45 9.89999998,9.7522078 9.89999998,10.125 C9.89999998,10.4977922 9.5977922,10.8 9.22500001,10.8 L3.82499999,10.8 C3.45220779,10.8 3.15000001,10.4977922 3.15000001,10.125 C3.15000001,9.7522078 3.45220779,9.45 3.82499999,9.45 L9.22500001,9.45 L9.22500001,9.45 Z M7.42500001,12.6 C7.79779221,12.6 8.10000001,12.9022078 8.10000001,13.275 C8.10000001,13.6477922 7.79779221,13.95 7.42500001,13.95 L3.82499999,13.95 C3.45220778,13.95 3.14999999,13.6477922 3.14999999,13.275 C3.14999999,12.9022078 3.45220778,12.6 3.82499999,12.6 L7.42500001,12.6 Z" transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000) ">
        </path>
    </symbol>
    <!-- 图标|加载中 -->
    <symbol id="icoLoading">
        <g id="loading">
            <rect fill-opacity="0" x="0" y="0" width="16" height="16"></rect>
            <path d="M6.72865086,1.26496983 C6.71911605,1.71977213 6.95629588,2.14416725 7.34865392,2.37436546 C7.74101196,2.60456367 8.2271863,2.60456367 8.61954434,2.37436546 C9.01190238,2.14416725 9.24908222,1.71977213 9.23954741,1.26496983 C9.23959745,0.816309443 9.00026873,0.401708736 8.61172578,0.177364095 C8.22318283,-0.0469805467 7.74446372,-0.0469805467 7.35592077,0.177364095 C6.96737782,0.401708736 6.72804909,0.816309443 6.72809913,1.26496983 L6.72865086,1.26496983 L6.72865086,1.26496983 Z M1.85885777,3.33890086 C1.85885777,4.01230737 2.4047616,4.5582112 3.07816811,4.5582112 C3.75157462,4.5582112 4.29747845,4.01230737 4.29747845,3.33890086 C4.29747845,2.66549435 3.75157462,2.11959052 3.07816811,2.11959052 C2.4047616,2.11959052 1.85885777,2.66549435 1.85885777,3.33890086 L1.85885777,3.33890086 Z M0.00285776562,7.92428017 C0.00293049529,8.5373029 0.499903995,9.03421744 1.11292673,9.03421744 C1.72594946,9.03421744 2.22292296,8.5373029 2.22299569,7.92428017 C2.22292296,7.31125744 1.72594946,6.8143429 1.11292673,6.8143429 C0.499903995,6.8143429 0.00293049529,7.31125744 0.00285776562,7.92428017 Z M1.96809914,12.9275905 C1.96816693,13.4601736 2.39992984,13.8918816 2.93251293,13.8918816 C3.46509602,13.8918816 3.89685893,13.4601736 3.89692672,12.9275905 C3.89685893,12.3950074 3.46509602,11.9632995 2.93251293,11.9632995 C2.39992984,11.9632995 1.96816693,12.3950074 1.96809914,12.9275905 L1.96809914,12.9275905 Z M7.18382328,15.0175215 C7.18382328,15.4809837 7.55953357,15.856694 8.0229957,15.856694 C8.48645782,15.856694 8.86216811,15.4809837 8.86216811,15.0175215 C8.86216811,14.5540594 8.48645782,14.1783491 8.0229957,14.1783491 C7.55953357,14.1783491 7.18382328,14.5540594 7.18382328,15.0175215 Z M12.5874095,13.0920043 C12.5874095,13.4241369 12.8566562,13.6933836 13.1887888,13.6933836 C13.5209214,13.6933836 13.7901681,13.4241369 13.7901681,13.0920043 C13.7901681,12.7598717 13.5209214,12.490625 13.1887888,12.490625 C12.8566562,12.490625 12.5874095,12.7598717 12.5874095,13.0920043 Z M15.0892026,7.90138363 C15.0892026,8.13677119 15.2800219,8.32759052 15.5154095,8.32759052 C15.7507971,8.32759052 15.9416164,8.13677119 15.9416164,7.90138363 C15.9416164,7.66599606 15.7507971,7.47517673 15.5154095,7.47517673 C15.2800219,7.47517673 15.0892026,7.66599606 15.0892026,7.90138363 Z M13.8089267,3.4310388 C13.8089267,3.59916189 13.9452174,3.73545259 14.1133405,3.73545259 C14.2814636,3.73545259 14.4177543,3.59916189 14.4177543,3.4310388 C14.4177543,3.2629157 14.2814636,3.126625 14.1133405,3.126625 C13.9452174,3.126625 13.8089267,3.2629157 13.8089267,3.4310388 Z"></path>
        </g>
    </symbol>
    <!-- 图标|播放 -->
    <symbol id="icoPlay">
        <g id="play">
            <path d="M14.1329221,9.60458431 L6.2734657,15.6325342 C5.34309563,16.2655554 4.05015741,16.0602894 3.38560736,15.1740596 C3.13481735,14.8396114 3,14.4388779 3,14.0278733 L3,1.97197357 C3,0.882882638 3.92685626,-1.95399252e-14 5.07019139,-1.95399252e-14 C5.50166685,-1.95399252e-14 5.92235968,0.128421099 6.2734657,0.367312671 L14.1329221,6.39526252 C15.0632922,7.02828376 15.2787819,8.25988003 14.6142318,9.14610977 C14.4814505,9.32318416 14.318816,9.4781026 14.1329221,9.60458431 Z"></path>
            <rect id="Rectangle" fill-opacity="0" x="0" y="0" width="16" height="16"></rect>
        </g>
    </symbol>
    <!-- 图标|暂停 -->
    <symbol id="icoPause">
        <g id="pause">
            <path d="M4,2 C5.1045695,2 6,2.8954305 6,4 L6,12 C6,13.1045695 5.1045695,14 4,14 L3,14 C1.8954305,14 1,13.1045695 1,12 L1,4 C1,2.8954305 1.8954305,2 3,2 L4,2 Z M13,2 C14.1045695,2 15,2.8954305 15,4 L15,12 C15,13.1045695 14.1045695,14 13,14 L12,14 C10.8954305,14 10,13.1045695 10,12 L10,4 C10,2.8954305 10.8954305,2 12,2 L13,2 Z"></path>
            <rect  fill-opacity="0" x="0" y="0" width="16" height="16"></rect>
        </g>
    </symbol>
    <!-- 图标|停止 -->
    <symbol id="icoStop">
        <g id="stop">
            <rect x="2" y="2" width="12" height="12" rx="2"></rect>
            <rect fill-opacity="0" x="0" y="0" width="16" height="16"></rect>
        </g>
    </symbol>
    <!-- 图标|无法播放 -->
    <symbol id="icoForbidden">
        <g id="forbidden">
            <path d="M3.11014702,4.52295457 C1.18968426,7.22400289 1.82212581,10.9699964 4.52157146,12.8902277 C6.60400096,14.3708881 9.39599904,14.3708881 11.4784285,12.8902277 L3.11014702,4.52295457 Z M4.52157146,3.10977226 L12.889853,11.4770454 C14.8103157,8.77599711 14.1798024,5.03000361 11.4784285,3.10977226 C9.39599904,1.62911194 6.60400096,1.62911194 4.52157146,3.10977226 L4.52157146,3.10977226 Z M8,16 C3.58062184,16 0,12.4178817 0,8.00096397 C0,3.58404627 3.58062184,0 8,0 C12.4193782,0 16,3.58211833 16,8.00096397 C16,12.4198096 12.4193782,16 8,16 Z"></path>
            <rect fill-opacity="0" x="0" y="0" width="16" height="16"></rect>
        </g>
    </symbol>
</svg>

<!-- 遮罩 -->
<div class="mdx-mask mdx-backdrop-blurs">
    <div class="mdx-copyright">
        <svg height="24px" width="24px" style="display: inline-block; vertical-align: middle;">
            <use xlink:href="#icoVLOOK-dark"></use>
        </svg>&nbsp;&nbsp;
        <a href="https://github.com/MadMaxChow/VLOOK" target="_blank"><strong>VLOOK™</strong></a> (V9.19) for
        <a href="https://www.typora.io" target="_blank">Typora</a>. Powered by <strong><a
                href="mailto:67870144@qq.com">MAX丨孟兆</a></strong>
    </div>
</div>

<!-- 大纲面板 -->
<div class="mdx-toc-panel mdx-float-card">
    <div class="mdx-toc-panel-header">
        <div class="mdx-toc-panel-title">大纲</div>
    </div>
    <div class="mdx-toc-panel-body-scroll">
        <div class="mdx-toc-panel-body"></div>
    </div>
    <div class="mdx-toc-panel-footer">
    </div>
</div>

<!-- 逐章导航栏 -->
<div class="mdx-chapter-nav mdx-backdrop-blurs">
    <!-- 上一章 -->
    <div class="mdx-chapter-nav-prev">
        <svg height="15px" style="position: absolute; top: 18px; left: 10px; cursor: pointer;" width="10px">
            <use class="mdx-button-ico-light" xlink:href="#icoPrevChapter"></use>
            prev
        </svg>
        <div class="mdx-chapter-nav-prev-text"></div>
    </div>
    <!-- 当前章节 -->
    <div class="mdx-chapter-nav-current"></div>
    <!-- 下一章 -->
    <div class="mdx-chapter-nav-next">
        <div class="mdx-chapter-nav-next-text">next</div>
        <svg height="15px" style="position: absolute; top: 18px; right: 10px; cursor: pointer;" width="10px">
            <use class="mdx-button-ico-light" xlink:href="#icoNextChapter"></use>
            next
        </svg>
    </div>
</div>

<!-- 插图导航 -->
<div class="mdx-figure-nav mdx-backdrop-blurs">
    <div class="mdx-figure-content"></div>
    <div class="mdx-figure-page-num"></div>
    <div class="mdx-btn-figure-nav mdx-btn-figure-prev">
        <svg width="12px" height="54px">
            <use class="mdx-button-ico-dark" xlink:href="#icoPrevFig"></use>
        </svg>
    </div>
    <div class="mdx-btn-figure-nav mdx-btn-figure-next">
        <svg width="12px" height="54px">
            <use class="mdx-button-ico-dark" xlink:href="#icoNextFig"></use>
        </svg>
    </div>
    <div class="mdx-btn-close-figure-viewer">
        <svg width="16px" height="16px">
            <use class="mdx-button-ico-light" xlink:href="#icoClose"></use>
        </svg>
    </div>
    <div class="mdx-copyright">
        <svg width="24px" height="24px" style="display: inline-block; vertical-align: middle;">
            <use xlink:href="#icoVLOOK-dark"></use>
        </svg>&nbsp;&nbsp;
        <a href="https://github.com/MadMaxChow/VLOOK" target="_blank"><strong>VLOOK™</strong></a> (V9.19) for
        <a href="https://www.typora.io" target="_blank">Typora</a>. Powered by <strong><a
                href="mailto:67870144@qq.com">MAX丨孟兆</a></strong>
    </div>
</div>

<!-- 页面工具栏 -->
<div class="mdx-toolbar mdx-backdrop-blurs">
    <!-- 大纲按钮 -->
    <div class="mdx-btn mdx-btn-outline">
        <svg width="20px" height="14px">
            <use class="mdx-button-ico-light" xlink:href="#icoOutline"></use>
        </svg>
    </div>
    <!-- 启动插图导航 -->
    <div class="mdx-btn mdx-btn-figure-viewer">
        <svg width="20px" height="18px">
            <use class="mdx-button-ico-light" xlink:href="#icoFigure"></use>
        </svg>
    </div>
    <!-- 打印 -->
    <div class="mdx-btn mdx-btn-print">
        <svg width="20px" height="19px">
            <use class="mdx-button-ico-light" xlink:href="#icoPrint"></use>
        </svg>
    </div>
    <!-- 开关聚光灯 -->
    <div class="mdx-btn mdx-btn-spotlight">
        <svg width="20px" height="20px">
            <use class="mdx-button-ico-light" xlink:href="#icoSpotlight"></use>
        </svg>
    </div>
    <!-- 字体风格 -->
    <div class="mdx-btn mdx-btn-font-style">
        <svg width="16px" height="18px">
            <use class="mdx-button-ico-light" xlink:href="#icoSerifFont"></use>
        </svg>
    </div>
    <!-- Light/Dark模式切换 -->
    <div class="mdx-btn mdx-btn-color-scheme">
        <svg width="20px" height="20px">
            <use class="mdx-button-ico-light" xlink:href="#icoLightMode"></use>
        </svg>
    </div>
</div>

<!-- 脚注弹层 -->
<div class="mdx-footer-note-panel">
    <div class="mdx-footer-note-panel-content"></div>
    <div class="mdx-footer-note-panel-header"></div>
    <div class="mdx-footer-note-panel-all">
        <a>查看所有脚注 ▶</a></div>
    <a name="xFooterArea"></a>
</div>

<!-- 在新标签打开的按钮 -->
<div class="mdx-btn mdx-btn-open-in-new-tab">
    <svg width="20px" height="18px">
        <use class="mdx-button-ico-light" xlink:href="#icoNewTab"></use>
    </svg>
</div>

<!-- 复制代码块内容的按钮 -->
<div class="mdx-btn mdx-btn-copy-code-block">
    <svg width="18px" height="18px">
        <use class="mdx-button-ico-light" xlink:href="#icoCopyCodeBlock"></use>
    </svg>
</div>

<!-- 聚光灯 -->
<div class="mdx-spotlight"></div>

<!-- 提示信息 -->
<div class="mdx-tool-tips mdx-backdrop-blurs"></div>
<div class="mdx-info-tips mdx-float-card mdx-backdrop-blurs"></div>

<!-- 表格十字光柱 -->
<div data-vk-direction="left" class="mdx-table-cross mdx-table-cross-left">&nbsp;</div>
<div data-vk-direction="right" class="mdx-table-cross mdx-table-cross-right">&nbsp;</div>
<div data-vk-direction="up" class="mdx-table-cross mdx-table-cross-up">&nbsp;</div>
<div data-vk-direction="down" class="mdx-table-cross mdx-table-cross-down">&nbsp;</div>

<!-- 内容展开操作区 -->
<div class="mdx-content-expander">
    <div class="mdx-btn">
        <span></span>
        <svg width="20px" height="20px">
            <use class="mdx-button-ico-light" xlink:href="#icoExtend"></use>
        </svg>
    </div>
</div>

<!-- 统计数据上报中转页面 -->
<iframe name="vlook-stat-gitee" style="display: block;" marginwidth="0" marginheight="0" frameBorder="0" scrolling="no" width="100%" height="0">
</iframe>

<!-- ==================== VLOOK Module ==================== -->
<script type="text/javascript">
    // 初始化计时器
    let iStopwatch = new Stopwatch(),
    // UI 元素
        iToolbar = undefined,
        iOutlineNav = undefined,
        iChapterNav = undefined,
        iParagraphNav = undefined,
        iSpotlight = undefined,
        iFontStyler = undefined,
        iFigureViewer = undefined,
        iWelcomeScreen = undefined,
        iToolTips = undefined,
        iInfoTips = undefined,
        iMask = undefined,
        iFootNote = undefined,
        iContentFolding = undefined;


    // ==================== 文档关键对象 ==================== //

    function Dom() {}

    Dom._body = undefined;
    Dom._write = undefined;

    Dom.body = function () {
        if (Dom._body === undefined) {
            Dom._body = $("body");
            if (Dom._body.length === 0)
                alert("Instantiation failed [ Dom.body ]");
        }
        return Dom._body;
    }

    Dom.write = function () {
        if (Dom._write === undefined) {
            Dom._write = $("#write");
            if (Dom._write.length === 0)
                alert("Instantiation failed [ Dom.write ]");
        }
        return Dom._write;
    }

    // ==================== 通用方法 ==================== //

    /**
     * 检查是否为空对象
     */
    $.prototype.isEmpty = function () {
        return (typeof (this) == "undefined");
    }

    /**
     * 判断对象是否为可视
     */
    $.prototype.isVisible = function () {
        return this !== undefined && this.css("visibility") === "visible";
    }

    /**
     * 判断对象是否已显示
     */
    $.prototype.isHidden = function () {
        return this !== undefined && this.css("display") === "none";
    }

    /**
     * 替换所有内容
     */
    String.prototype.replaceAll = function (f, e) {
        const reg = new RegExp(f, "g");
        return this.replace(reg, e);
    };

    /**
     * 以指定字符开始
     */
    String.prototype.startWith = function (s) {
        if (s == null || s === "" || this.length === 0 || s.length > this.length)
            return false;
        return this.substr(0, s.length) === s;
    };

    /**
     * 以指定字符结束
     */
    String.prototype.endWith = function (s) {
        if (s == null || s === "" || this.length === 0 || s.length > this.length)
            return false;
        return this.substring(this.length - s.length) === s;
    };

    /**
     * 环境信息类
     */
    const env = {
        /*
        Windows 平台样例：
            - (Chrome) Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36
            - (Firefox) Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:69.0) Gecko/20100101 Firefox/69.0
            - (Edge) Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18362

        macOS 平台样例：
            - (Chrome) Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36
            - (Firefox) Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:69.0) Gecko/20100101 Firefox/69.0
            - (Safari) Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.2 Safari/605.1.15
        */

        // 浏览器内核信息
        core: function () {
            const u = navigator.userAgent;
            return {
                trident: u.indexOf("Trident") > -1, //IE内核
                presto: u.indexOf("Presto") > -1, //opera内核
                webkit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
                gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") === -1 //火狐内核
            };
        }(),
        // 设备信息
        device: function () {
            const u = navigator.userAgent;
            return {
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
                iOS: !!u.match(/iphone os/i), // iOS 类终端
                android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, // android 终端或者 UC 浏览器
                iPhone: u.indexOf("iPhone") > -1, // 是否为 iPhone 或者 QQHD 浏览器
                iPad: u.indexOf("iPad") > -1 // 是否 iPad
            };
        }(),
        // 浏览器类型
        browser: function () {
            const u = navigator.userAgent;
            return {
                Chrome: u.indexOf("Chrome") > -1, // Chrome 浏览器
                Firefox: u.indexOf("Firefox") > -1, // Firefox 浏览器
                Safari: u.indexOf("Safari") > -1 && u.indexOf("Version") > -1, // Safari 浏览器
                Edge: u.indexOf(" Edg/") > -1 // Edge 浏览器
            };
        }(),
        // 浏览器版本信息
        browserVersion: function () {
            const u = navigator.userAgent;
            return {
                Chrome: u.match(/Chrome\/[\d.]+/gi) ? u.match(/Chrome\/[\d.]+/gi)[0].match(/[\d]+/)[0] : "0", // chrome浏览器版本
                Firefox: u.match(/Firefox\/[\d.]+/gi) ? u.match(/Firefox\/[\d.]+/gi)[0].match(/[\d]+/)[0] : "0", // firefox浏览器版本
                Safari: u.match(/Version\/[\d.]+.+Safari\/[\d.]+/gi) ? u.match(/Version\/[\d.]+.+Safari\/[\d.]+/gi)[0].match(/[\d]+/)[0] : "0", // safari浏览器版本
                Edge: u.match(/Edg\/[\d.]+/gi) ? u.match(/Edg\/[\d.]+/gi)[0].match(/[\d]+/)[0] : "0" // chrome浏览器版本
            };
        }(),
        // 操作系统信息
        os: function () {
            const u = navigator.userAgent;
            return {
                Windows: /windows|win32|win64/i.test(u), // 是否为 Windows 平台
                macOS: /macintosh/i.test(u), // 是否为 macOS 平台
                iOS: /iphone os/i.test(u),  // 是否为 iOS 平台
                Linux: /linux/i.test(u)  // 是否为 iOS 平台
            };
        }(),
        // 语言信息
        language: function () {
            const lang = navigator.language;
            return {
                full: lang.toLowerCase(),
                base: lang.substring(0, 2),
                subset: lang.substring(3, lang.length)
            };
        }(),
        // 显示信息
        display: function () {
            return {
                DPR: window.devicePixelRatio
            };
        }(),
        // 打开环境信息
        print: function () {
            console.info("=== Environmental Information ===");
            console.info("User-Agent:\n" + navigator.userAgent);

            console.info("- Language\t\t" +
                "[ " + env.language.base + (env.language.subset.length > 0 ? "_" + env.language.subset : "") + " ]");

            console.info("- Device\t\t" +
                "[ " +
                (env.device.mobile ? "Mobile" : "") +
                (env.device.iOS ? "/iOS" : "") +
                (env.device.android ? "/Android" : "") +
                (env.device.iPhone ? "/iPhone" : "") +
                (env.device.iPad ? "/iPad" : "") +
                "]");

            console.info("- OS\t\t\t" +
                (env.os.macOS ? "[ macOS ]"
                    : (env.os.Windows ? "[ Windows ]"
                        : (env.os.iOS ? "[ iOS ]"
                            : (env.os.Linux ? "[Linux]" : "[Others]")))));

            console.info("- Browser\t\t" +
                "[ " +
                (env.browser.Chrome ? "Chrome / " + env.browserVersion.Chrome : "") +
                (env.browser.Firefox ? "Firefox / " + env.browserVersion.Firefox : "") +
                (env.browser.Safari ? "Safari / " + env.browserVersion.Safari : "") +
                (env.browser.Edge ? "Edge / " + env.browserVersion.Edge : "") +
                " ]");

            console.info("- Core\t\t\t" +
                "[ " +
                (env.core.gecko ? "Gecko" : "") +
                (env.core.presto ? "Presto" : "") +
                (env.core.trident ? "Trident" : "") +
                (env.core.webkit ? "WebKit" : "") +
                " ]");

            console.info("- DPR\t\t\t" +
                "[ " +
                env.display.DPR +
                " ]");
            console.info("  (Device Pixel Ratio)")
        }
    };

    // ==================== VLOOK 关键信息类 ==================== //

    function VLOOK() {}

    // 版本信息
    VLOOK.version = 'V9.19';

    // 是否为开发调试模式
    VLOOK.debugMode = false;

    /**
     * 在 debug 模式下输出调试信息
     */
    VLOOK.debug = function (...info) {
        if (VLOOK.debugMode === true)
            console.warn(...info);
    }

    /**
     * 检查文档结构是否符合 VLOOK 规范程度
     */
    VLOOK.checkSpecification = function () {
        let passed = true,
            missContent = [
                "因以下原因无法激活 VLOOK 插件：\n\n",
                "因以下原因無法激活 VLOOK 插件：\n\n",
                "The VLOOK plugin cannot be activated for the following reasons:\n\n",
                "Le plugin VLOOK ne peut pas être activé pour les raisons suivantes:\n\n",
                "Плагин VLOOK не может быть активирован по следующим причинам:\n\n",
                "次の理由により、VLOOKプラグインをアクティブ化できません：\n\n",
                "다음과 같은 이유로 VLOOK 플러그인을 활성화 할 수 없습니다:\n\n"
                ][VLOOK.lang.id];

        // 只支持由 Typora 导出的 HTML 文件
        if (Dom.body().attr("class").indexOf("typora-export") === -1) {
            missContent += [
                "• 只支持由 Typora 导出的 HTML 文件\n",
                "• 只支持由 Typora 導出的 HTML 文件\n",
                "• Only HTML files exported by Typora are supported\n",
                "• Seuls les fichiers HTML exportés par Typora sont pris en charge\n",
                "• Поддерживаются только файлы HTML, экспортированные Typora\n",
                "• Typora によってエクスポートされたHTMLファイルのみがサポートされています\n",
                "• Typora 에서 내 보낸 HTML 파일 만 지원됩니다\n"
                ][VLOOK.lang.id];
            passed = false;
        }

        // 缺少封面
        if ($("#write > h6:first-child").length === 0) {
            missContent += [
                "• 缺少符合 VLOOK 规范的「封面」内容\n",
                "• 缺少符合 VLOOK 規範的「封面」內容\n",
                "• Missing \"Cover\" content that meets VLOOK specifications\n",
                "• Contenu de \"Couverture\" manquant conforme aux spécifications VLOOK\n",
                "• Отсутствует содержание \"обложки\", соответствующее спецификациям VLOOK\n",
                "• VLOOK 仕様を満たす「カバー」コンテンツがありません\n",
                "• VVLOOK 사양을 충족하는 \"커버\" 컨텐츠가 없습니다\n"
                ][VLOOK.lang.id];
            passed = false;
        }

        // 缺少目录
        if ($(".md-toc").length === 0) {
            missContent += [
                "• 缺少 GFM 标准的「目录」\n",
                "• 缺少 GFM 標準的「目錄」\n",
                "• Missing GFM standard \"Table of Content\"\n",
                "• Norme GFM manquante \"Table des matières\"\n",
                "• Отсутствует стандарт GFM \"Оглавление\"\n",
                "• GFM 標準「カタログ」がありません\n",
                "• 누락 된 GFM 표준 \"카탈로그\"\n"
                ][VLOOK.lang.id];
        }

        // 缺少封底
        if ($(".footnotes-area").length === 0) {
            if ($("#write > h6:last-child").length === 0) {
                missContent += [
                    "• 缺少符合 VLOOK 规范的「封底」内容\n",
                    "• 缺少符合 VLOOK 規範的「封底」內容\n",
                    "• Missing \"Back cover\" content that meets VLOOK specifications\n",
                    "• Contenu manquant \"Couverture arrière\" conforme aux spécifications VLOOK\n",
                    "• Отсутствует содержимое \"задней обложки\", которое соответствует спецификациям VLOOK\n",
                    "• VLOOK 仕様を満たす「裏表紙」のコンテンツがありません\n",
                    "• VLOOK 사양을 충족하는 \"뒷 표지\" 내용이 없습니다\n"
                    ][VLOOK.lang.id];
                passed = false;
            }
        }
        else {
            if ($("#write > h6:nth-last-child(2)").length === 0) {
                missContent += [
                    "• 缺少符合 VLOOK 规范的「封底」内容\n",
                    "• 缺少符合 VLOOK 規範的「封底」內容\n",
                    "• Missing \"Back cover\" content that meets VLOOK specifications\n",
                    "• Contenu manquant \"Couverture arrière\" conforme aux spécifications VLOOK\n",
                    "• Отсутствует содержимое \"задней обложки\", которое соответствует спецификациям VLOOK\n",
                    "• VLOOK仕様を満たす「裏表紙」のコンテンツがありません\n",
                    "• VLOOK 사양을 충족하는 \"뒷 표지\" 내용이 없습니다\n"
                    ][VLOOK.lang.id];
                passed = false;
            }
        }
        
        // 存在不符合规范的情况
        if (passed === false) {
            alert(missContent);
            return false;
        }

        return true;
    }

    /**
     * 初始化关键组件实例
     */
    VLOOK.initIntance = function (newTab) {
        VLOOK.doc.newTab = newTab;

        // ==================== UI --------------------

        // 欢迎屏
        iWelcomeScreen = new WelcomeScreen();
        if (iWelcomeScreen === false)
            alert("Instantiation failed [ iWelcomeScreen ]");

        // 聚光灯
        iSpotlight = new Spotlight(180);
        if (iSpotlight === false)
            alert("Instantiation failed [ iSpotlight ]");

        iContentFolding = new ContentFolding();
        if (iContentFolding.length === 0)
            alert("Instantiation failed [ iContentFolding ]");

        // 大纲导航
        iOutlineNav = new OutlineNav(new BackgroundMask());
        if (iOutlineNav === false)
            alert("Instantiation failed [ iOutlineNav ]");

        // 逐章导航
        iChapterNav = new ChapterNav(iOutlineNav);
        if (iChapterNav === false)
            alert("Instantiation failed [ iChapterNav ]");
        else {
            // 上一章：绑定鼠标事件
            iChapterNav.prev.ui.unbind("click").click(function () {
                iOutlineNav.gotoHeader(iChapterNav.prev.text);
            });
            // hover 事件处理
            iChapterNav.prev.ui.hover(function () {
                iToolTips.show($(this), "auto");
            }, function () {
                iToolTips.hide();
            });

            // 当前章节：绑定鼠标事件
            iChapterNav.current.ui.unbind("click").click(function () {
                iOutlineNav.gotoHeader(iChapterNav.current.ui);
            });
            // hover 事件处理
            iChapterNav.current.ui.hover(function () {
                iToolTips.show($(this), "center");
            }, function () {
                iToolTips.hide();
            });

            // 下一章：绑定鼠标事件
            iChapterNav.next.ui.unbind("click").click(function () {
                iOutlineNav.gotoHeader(iChapterNav.next.text);
            });
            // hover 事件处理
            iChapterNav.next.ui.hover(function () {
                iToolTips.show($(this), "right");
            }, function () {
                iToolTips.hide();
            });

            // 添加关联组件
            iOutlineNav.chapterNav = iChapterNav;
        }

        // 工具栏
        iToolbar = new Toolbar(iOutlineNav, iChapterNav);
        if (iToolbar === false)
            alert("Instantiation failed [ iToolbar ]");
        else {
            // 大纲按钮
            iToolbar.add("outline", $(".mdx-btn-outline"));
            iToolbar.buttons["outline"].unbind("click").click(function () {
                iToolTips.hide();
                iOutlineNav.toggle();
            });
            // hover 事件处理
            iToolbar.buttons["outline"].hover(function () {
                iToolTips.show($(this), "auto");
            }, function () {
                iToolTips.hide();
            });

            // 插图导航按钮
            iToolbar.add("figure-viewer", $(".mdx-btn-figure-viewer"));
            iToolbar.buttons["figure-viewer"].unbind("click").click(function () {
                iToolTips.hide();
                iFigureViewer.show(null);
            });
            // hover 事件处理
            iToolbar.buttons["figure-viewer"].hover(function () {
                iToolTips.show($(this), "auto");
            }, function () {
                iToolTips.hide();
            });

            // 颜色方案（Light/Dark）
            iToolbar.add("color-scheme", $(".mdx-btn-color-scheme"));
            iToolbar.buttons["color-scheme"].unbind("click").click(function () {
                iToolTips.hide();
                ColorScheme.toggle();
                // ColorScheme.afterToggle();
            });
            iToolbar.buttons["color-scheme"].hover(function () {
                iToolTips.show($(this), "auto");
            }, function () {
                iToolTips.hide();
            });

            // 字体风格
            iToolbar.add("font-style", $(".mdx-btn-font-style"));
            iToolbar.buttons["font-style"].unbind("click").click(function () {
                iToolTips.hide();
                iFontStyler.toggle();
            });
            // hover 事件处理
            iToolbar.buttons["font-style"].hover(function () {
                iToolTips.show($(this), "auto");
            }, function () {
                iToolTips.hide();
            });

            // 聚光灯
            iToolbar.add("spotlight", $(".mdx-btn-spotlight"));
            iToolbar.buttons["spotlight"].unbind("click").click(function () {
                iToolTips.hide();
                iSpotlight.toggle();
            });
            iToolbar.buttons["spotlight"].hover(function () {
                iToolTips.show($(this), "auto");
            }, function () {
                iToolTips.hide();
            });

            // 打印按钮
            iToolbar.add("print", $(".mdx-btn-print"));
            iToolbar.buttons["print"].unbind("click").click(function () {
                iToolTips.hide();
                VLOOK.print.preprocess();
            });
            // hover 事件处理
            iToolbar.buttons["print"].hover(function () {
                iToolTips.show($(this), "auto");
            }, function () {
                iToolTips.hide();
            });

            // 添加关联组件
            iOutlineNav.toolbar = iToolbar;
        }

        iFontStyler = new FontStyler(iToolbar.buttons["font-style"], new BackgroundMask());
        if (iFontStyler === false)
            alert("Instantiation failed [ iFontStyler ]");

        iFigureViewer = new FigureNav();
        if (iFigureViewer === false)
            alert("Instantiation failed [ iFigureViewer ]");

        iToolTips = new ToolTips();
        if (iToolTips.length === 0)
            alert("Instantiation failed [ iToolTips ]");

        iInfoTips = new InfoTips(new BackgroundMask());
        if (iInfoTips.length === 0)
            alert("Instantiation failed [ iInfoTips ]");

        iMask = $(".mdx-mask");
        if (iMask.length === 0)
            alert("Instantiation failed [ iMask ]");

        // 脚注
        iFootNote = new FootNote(new BackgroundMask());
        if (iFootNote === false)
            alert("Instantiation failed [ iFootNote ]");
    }

    /**
     * 初始化 VLOOK
     *
     * @param colorScheme 指定默认的颜色方案 light/dark
     */
    VLOOK.initKernel = function (colorScheme) {
        // 锁定滚动
        VLOOK.doc.scroll.freeze();

        // ----------------------------------------
        // 加载本文档专属图标
        iStopwatch.lapStart();
        console.info("- Document Logo");
        let docIcon = $(".mdx-doc-logo").css("background-image");
        if (docIcon !== undefined)
            $($("head")[0]).append("<link rel='icon' href='" + docIcon.substring(5, docIcon.length - 2) +
                "' type='image/x-icon'/>");
        iStopwatch.lapStop();

        // ----------------------------------------
        // 初始化字体风格
        iStopwatch.lapStart();
        console.info("- Font Style");
        // 清空历史存储
        if (VLOOK.util.parseQueryString(window.location.href)["reset"] === "ls") {
            console.warn("!!! Reset Local Storage !!!");
            localStorage.removeItem("VLOOK-" + VLOOK.version + "-hint-for-green-hand-step-bf");
            localStorage.removeItem("VLOOK-" + VLOOK.version + "-font-style");
        }
        // 若手动切换过字体风格，则恢复为上次设置字体风格
        const style = localStorage["VLOOK-" + VLOOK.version + "-font-style"];
        iFontStyler.style = getComputedStyle(document.documentElement).getPropertyValue(
            "--vlook-default-font-style").trim();
        if (window.localStorage && style !== undefined) {
            console.warn("    Last Setting: " + style);
            iFontStyler.apply(style);
        }else {
            console.info("    Default: " + iFontStyler.style);
            iFontStyler.apply();
        }
        iStopwatch.lapStop();

        // ----------------------------------------
        // 初始化国际化 UI
        iStopwatch.lapStart();
        console.info("- UI i18n");
        VLOOK.ui.initI18n();
        iStopwatch.lapStop();

        // ----------------------------------------
        // 在新标签中初始化时不处理
        console.info("- Check Inner Bad Link");
        iStopwatch.lapStart();
        if (VLOOK.doc.newTab === false) {
            // 检查页内链接坏链
            VLOOK.doc.link.checkInner();
        }
        iStopwatch.lapStop();

        // ----------------------------------------
        // 检查重复的Header
        iStopwatch.lapStart();
        console.info("- Check Duplicate Header");
        VLOOK.doc.checkDuplicateHeader();
        iStopwatch.lapStop();

        // ----------------------------------------
        // 初始化音频数据
        iStopwatch.lapStart();
        console.info("- Audio ");
        ExtAudio.init();
        iStopwatch.lapStop();

        // ----------------------------------------
        // 初始化视频数据
        iStopwatch.lapStart();
        console.info("- Video ");
        ExtVideo.init();
        iStopwatch.lapStop();

        // ----------------------------------------
        // 初始化插图数据
        iStopwatch.lapStart();
        console.info("- Figure ");
        ExtFigure.init();
        iStopwatch.lapStop();

        // ----------------------------------------
        // 初始化表格
        iStopwatch.lapStart();
        console.info("- Table");
        ExtTable.init();
        iStopwatch.lapStop();

        // ----------------------------------------
        // 初始化引用块
        iStopwatch.lapStart();
        console.info("- Quote");
        ExtQuote.init();
        iStopwatch.lapStop();

        // ----------------------------------------
        // 初始化代码块
        iStopwatch.lapStart();
        console.info("- Code Block");
        ExtCodeBlock.init();
        iStopwatch.lapStop();

        // ----------------------------------------
        iStopwatch.lapStart();
        console.info("- Restyle Code / Fences");
        // 重置行内代码code样式
        ColorTag.init();
        // 重置多行代码块code block样式
        // ColorTag.initForCodeBlock();
        iStopwatch.lapStop();

        // ----------------------------------------
        // 重置任务列表样式
        iStopwatch.lapStart();
        console.info("- Task List Checkbox");
        Restyler.forTaskListCheckbox();
        iStopwatch.lapStop();

        // ----------------------------------------
        // 初始化逐段导航
        iStopwatch.lapStart();
        console.info("- Paragraph Nav");
        ParagraphNav.init();
        iStopwatch.lapStop();

        // ----------------------------------------
        // 增强脚注
        iStopwatch.lapStart();
        console.info("- Footer Note");
        // initFootNote();
        FootNote.init();
        iStopwatch.lapStop();

        // ----------------------------------------
        // 初始化外部链接
        iStopwatch.lapStart();
        console.info("- External Link");
        VLOOK.doc.link.adjustExternal();
        iStopwatch.lapStop();

        // ----------------------------------------
        // 初始化Outline数据
        console.info("- Outline & Chapter Nav");
        iStopwatch.lapStart();
        if (OutlineNav.init()) {
            // 更新工具栏标题
            iOutlineNav.title.text($(document).attr("title"));

            // 自适应页面内容显示
            iOutlineNav.focusHeader();

            iOutlineNav.adjust();
            // iContentFolding.adjust();
            iChapterNav.adjust();
            iToolbar.adjust();
        }
        iStopwatch.lapStop();

        // ----------------------------------------
        // 初始化全局热键
        iStopwatch.lapStart();
        console.info("- Hotkey");
        VLOOK.ui.initHotkey();
        iStopwatch.lapStop();

        // ----------------------------------------
        // 根据设备类型自适应hover样式
        iStopwatch.lapStart();
        console.info("- Adjust for Mobile");
        VLOOK.ui.adjustHoverStyle();
        // 隐藏插图动作按钮
        ContentAssist.hideButtons();
        iStopwatch.lapStop();

        // ----------------------------------------
        console.info("- Binding Event");
        iStopwatch.lapStart();
        // 绑定文档鼠标移动事件，聚光灯跟随鼠标移动
        document.addEventListener("mousemove", function () {
            iSpotlight.repaint(event || window.event);
        });

        // 绑定文档的单击事件
        $(document).unbind("click").click(function () {
            if (ExtTable.lastCrossTable !== undefined)
                ExtTable.hideCellCross(true);
        });

        // 绑定文档的滚动事件
        $(document).scroll(function () {
            let currentTime = new Date().getTime(),
                scrollTop = $(document).scrollTop();
            // ----------------------------------------
            // 控制执行频率，避免处理过快影响性能
            if (scrollTop < 100
                || currentTime - VLOOK.doc.scroll.lastUpdateTime > 2000
                || (Math.abs(scrollTop - VLOOK.doc.scroll.lastTop) > 100 && (currentTime - VLOOK.doc.scroll.lastUpdateTime) > 1000)) {
                VLOOK.doc.scroll.lastUpdateTime = currentTime;
                VLOOK.doc.scroll.lastTop = $(document).scrollTop();

                VLOOK.ui.adjustAll();
            }

            // 由于涉及到章节导航栏数据更新等不同逻辑处理，执行频率由 focusHeader 内进行控制
            iOutlineNav.focusHeader();
        });

        // 绑定窗口大小缩放事件
        $(window).resize(function () {
            iOutlineNav.focusHeader();

            iOutlineNav.adjust();
            iContentFolding.adjust();
            iChapterNav.adjust();
            iToolbar.adjust();
        });

        // 绑定打印前的触发事件
        window.onbeforeprint = function () {};
        // 绑定打印后的触发事件
        window.onafterprint = function () {
            VLOOK.print.postProcess();
        };

        iStopwatch.lapStop();

        // 应用于在新标签中打开内容时初始化颜色模式
        if (colorScheme != null)
            ColorScheme.scheme = colorScheme;
    }

    // VLOOK UI
    VLOOK.ui = {
        effect : 0, // 0/1/2/3 启用的特效特级，0: 无特效

        /**
         * 判断是否为小屏
         */
        isSmallScreen : function () {
            // alert($(window).width());
            return $(window).width() <= 1024;
        },

        /**
         * 初始 UI 国际化
         */
        initI18n : function () {
            VLOOK.lang.init();

            iOutlineNav.title.attr("title", [
                "回到封面",
                "回到封面",
                "Back to cover",
                "Retour à la couverture",
                "Вернуться к обложке",
                "カバーに戻る",
                "커버로 돌아 가기"
            ][VLOOK.lang.id]);

            iContentFolding.ui.find("div > span").attr("title", [
                "查看更多",
                "查看更多",
                "View More",
                "Voir Plus",
                "Посмотреть ещё",
                "もっと見る",
                "더보기"
            ][VLOOK.lang.id]);

            iToolbar.buttons["outline"].attr("data-vk-tips", [
                "<kbd>O</kbd> <strong>隐藏</strong> / <strong>显示</strong> 大纲面板",
                "<kbd>O</kbd> <strong>隱藏</strong> / <strong>顯示</strong> 大綱面板",
                "<kbd>O</kbd> <strong>Hide</strong> / <strong>Show</strong> Outline Panel",
                "<kbd>O</kbd> <strong>Cacher</strong> / <strong>Afficher</strong> le panneau de contour",
                "<kbd>O</kbd> <strong>Скрыть</strong> / <strong>показать</strong> панель",
                "<kbd>O</kbd> アウトラインパネルの <strong>非表示</strong> / <strong>表示</strong>",
                "<kbd>O</kbd> 개요 패널 <strong>숨기기</strong> / <strong>표시</strong>"
            ][VLOOK.lang.id]);

            iToolbar.buttons["figure-viewer"].attr("data-vk-tips", [
                "<kbd>I</kbd> 浏览插图",
                "<kbd>I</kbd> 查看文檔插圖",
                "<kbd>I</kbd> Browse figures",
                "<kbd>I</kbd> Parcourir la figures",
                "<kbd>I</kbd> Просмотрите цифры",
                "<kbd>I</kbd> 図を参照する",
                "<kbd>I</kbd> 그림 찾아보기"
            ][VLOOK.lang.id]);

            iToolbar.buttons["color-scheme"].attr("data-vk-tips", [
                "<kbd>D</kbd> 切换 [ <strong>黑暗</strong> / <strong>明亮</strong> ] 模式",
                "<kbd>D</kbd> 切換 [ <strong>黑暗</strong> / <strong>明亮</strong> ] 模式",
                "<kbd>D</kbd> Switch <strong>Dark</strong> / <strong>Light</strong> Mode",
                "<kbd>D</kbd> Basculer en mode <strong>sombre</strong> / <strong>clair</strong>",
                "<kbd>D</kbd> Переключить <strong>темный</strong> / <strong>светлый</strong> режим",
                "<kbd>D</kbd> <strong>ダーク</strong> / <strong>ライト</strong> モードの切り替え",
                "<kbd>D</kbd> <strong>다크</strong> / <strong>라이트</strong> 모드 전환"
            ][VLOOK.lang.id]);

            iToolbar.buttons["font-style"].attr("data-vk-tips", [
                "<kbd>A</kbd> 切换 字体风格",
                "<kbd>A</kbd> 切換 字體風格",
                "<kbd>A</kbd> Switch Font Style",
                "<kbd>A</kbd> Changer de style de police",
                "<kbd>A</kbd> Переключить стиль шрифта",
                "<kbd>A</kbd> フォントスタイルの切り替え",
                "<kbd>A</kbd> 글꼴 스타일 전환"
            ][VLOOK.lang.id]);

            iToolbar.buttons["spotlight"].attr("data-vk-tips", [
                "<kbd>S</kbd> <strong>打开</strong> / <strong>关闭</strong> 聚光灯<br><kbd>⇧ Shift</kbd> 打开聚光灯后调整大小",
                "<kbd>S</kbd> <strong>打開</strong> / <strong>關閉</strong> 聚光燈<br><kbd>⇧ Shift</kbd> 打開聚光燈後調整大小",
                "<kbd>S</kbd> Turn the spotlight <strong>ON</strong> / <strong>OFF</strong><br><kbd>⇧ Shift</kbd> Resize after turning on the spotlight",
                "<kbd>S</kbd> <strong>Allumer</strong> / <strong>éteindre</strong> le projecteur<br><kbd>⇧ Shift</kbd> Redimensionner après avoir allumé le projecteur",
                "<kbd>S</kbd> <strong>Включите</strong> / <strong>выключите</strong> прожектор<br><kbd>⇧ Shift</kbd> Изменить размер после включения прожектора",
                "<kbd>S</kbd> スポットライトをオンにする <strong>ON</strong> / <strong>OFF</strong><br><kbd>⇧ Shift</kbd> スポットライトをオンにした後のサイズ変更",
                "<kbd>S</kbd> 스포트라이트 <strong>켜기</strong> / <strong>끄기</strong><br><kbd>⇧ Shift</kbd> 스포트라이트를 켠 후 크기 조정"
            ][VLOOK.lang.id]);

            iToolbar.buttons["print"].attr("data-vk-tips", [
                "<kbd>P</kbd> 打印...",
                "<kbd>P</kbd> 打印...",
                "<kbd>P</kbd> Print...",
                "<kbd>P</kbd> Imprimer...",
                "<kbd>P</kbd> Печать...",
                "<kbd>P</kbd> 印刷する...",
                "<kbd>P</kbd> 인쇄..."
            ][VLOOK.lang.id]);

            iChapterNav.prev.ui.attr("data-vk-tips", [
                "<kbd>◀</kbd> / <kbd>&lt;</kbd> 前一章",
                "<kbd>◀</kbd> / <kbd>&lt;</kbd> 前一章",
                "<kbd>◀</kbd> / <kbd>&lt;</kbd> Previous Chapter",
                "<kbd>◀</kbd> / <kbd>&lt;</kbd> Chapitre Précédent",
                "<kbd>◀</kbd> / <kbd>&lt;</kbd> Предыдущая глава",
                "<kbd>◀</kbd> / <kbd>&lt;</kbd> 前の章",
                "<kbd>◀</kbd> / <kbd>&lt;</kbd> 이전 장"
            ][VLOOK.lang.id]);

            iChapterNav.next.ui.attr("data-vk-tips", [
                "<kbd>▶</kbd> / <kbd>&gt;</kbd> 后一章",
                "<kbd>▶</kbd> / <kbd>&gt;</kbd> 後一章",
                "<kbd>▶</kbd> / <kbd>&gt;</kbd> Next Chapter",
                "<kbd>▶</kbd> / <kbd>&gt;</kbd> Chapitre Suivant",
                "<kbd>▶</kbd> / <kbd>&gt;</kbd> Следующая глава",
                "<kbd>▶</kbd> / <kbd>&gt;</kbd> 次の章",
                "<kbd>▶</kbd> / <kbd>&gt;</kbd> 다음 장"
            ][VLOOK.lang.id]);

            iChapterNav.current.ui.attr("data-vk-tips", [
                "回到本章的开始",
                "回到本章的開始",
                "Go back to the beginning of this chapter",
                "Retourner au début de ce chapitre",
                "Вернитесь к началу этой главы",
                "この章の始めに戻る",
                "이 장의 시작 부분으로 돌아 가기"
            ][VLOOK.lang.id]);

            iFigureViewer.button.prev.attr("title", [
                "[ ← ] 前一张",
                "[ ← ] 前一張",
                "[ ← ] Previous",
                "[ ← ] Précédent",
                "[ ← ] Предыдущая фотографияs",
                "[ ← ] 前へ",
                "[ ← ] 이전"
            ][VLOOK.lang.id]);

            iFigureViewer.button.next.attr("title", [
                "[ → ] 后一张",
                "[ → ] 後一張",
                "[ → ] Next",
                "[ → ] Le suivant",
                "[ → ] Следующий",
                "[ → ] 次の",
                "[ → ] 다음"
            ][VLOOK.lang.id]);

            iFigureViewer.button.close.attr("title", [
                "[ ESC ] 关闭",
                "[ ESC ] 關閉",
                "[ ESC ] Close",
                "[ ESC ] Fermer",
                "[ ESC ] близко",
                "[ ESC ] 閉じる",
                "[ ESC ] 닫기"
            ][VLOOK.lang.id]);

            iFootNote.buttonSeeAll.children("a").text([
                "查看所有脚注 ▶",
                "查看所有腳註 ▶",
                "View all footnotes ▶",
                "Afficher toutes les notes de bas de page ▶",
                "Просмотреть все сноски ▶",
                "すべての脚注を見る ▶",
                "모든 각주보기 ▶"
            ][VLOOK.lang.id]);

            ContentAssist.button.openInNewTab.attr("title", [
                "在新标签页中打开",
                "在新標籤頁中打開",
                "Open in new tab",
                "Ouvrir dans un nouvel onglet",
                "Открыть в новой вкладке",
                "新しいタブで開く",
                "새 탭에서 열기"
            ][VLOOK.lang.id]);

            ContentAssist.button.copyCodeBlock.attr("title", [
                "复制全部代码",
                "複製全部代碼",
                "Copy all code",
                "Copiez tout le code",
                "Скопируйте весь код",
                "すべてのコードをコピー",
                "모든 코드 복사"
            ][VLOOK.lang.id]);
        },

        /**
         * 进行文档导航相关的 UI 元素的适配处理
         */
        adjustAll : function () {
            if (iOutlineNav.adjust() === true)
                iContentFolding.adjust();
            iToolbar.adjust();
            iChapterNav.adjust();
        },

        /**
         * 对象根据特效级别进行适配
         *
         * @param target 目标对象
         */
            adjustEffect : function (target) {
            if (VLOOK.ui.effect >= 1) {
                target.css({
                    "transition": "all " + VLOOK.animate.speed * 0.5 + "ms ease-in"
                });
            }
        },

        /**
         * 根据设备类型自适应hover样式
         */
        adjustHoverStyle : function () {
            // 移动设备时解绑样式事件
            if (env.device.mobile) {
                $(".mdx-btn").unbind("hover");
                // iChapterNav.prev.ui.unbind("hover");
                // iChapterNav.next.ui.unbind("hover");
                iChapterNav.adjustHoverStyle("mobile");
                iFigureViewer.adjustHoverStyle("mobile");
            }
            // 非移动设备时绑定样式事件
            else {
                // 所有常规按钮 hover 事件处理
                $(".mdx-btn").hover(function () {
                    $(this).addClass("mdx-btn-hover");
                }, function () {
                    $(this).removeClass("mdx-btn-hover");
                });

                iChapterNav.adjustHoverStyle("desktop");
                iFigureViewer.adjustHoverStyle("desktop");
            }
        },

        /**
         * 初始化特效处理
         */
        initEffect : function () {
            let transitionTarget = "a, a:active, .CodeMirror-line, .mdx-figure, .mdx-folder-ico, .MathJax_SVG, .MathJax_SVG_Display, .md-toc-item, .mdx-btn-load-screen-done, .mdx-blockquote-folder, .mdx-toc-panel-title, .mdx-btn, .mdx-chapter-nav-prev, .mdx-chapter-nav-current, .mdx-chapter-nav-next, .mdx-btn-figure-prev, .mdx-btn-figure-next, .mdx-btn-close-figure-viewer, .mdx-clickable-hover, .mdx-OINTable-hover";
            // 启用 normal 级特效
            // VLOOK.ui.enableAnimation = true;
            if (VLOOK.ui.effect === 1) {
                VLOOK.ui.adjustEffect($(transitionTarget));
                VLOOK.ui.adjustEffect($("#write, .mdx-toolbar, .mdx-chapter-nav, .mdx-toc-panel"));
                // $(transitionTarget).css({
                //     "transition": "all " + VLOOK.animate.speed + "ms ease-in"
                // });
                // $("#write, .mdx-toolbar, .mdx-chapter-nav, .mdx-toc-panel").css({
                //     "transition": "all " + VLOOK.animate.speed + "ms ease-in"
                // });
            }

            // 因 CSS 的 transition 不变动渐变背景过渡效果，须通过增/减不同的预置样式实现过渡效果
            if (VLOOK.ui.effect >= 1) {
                iChapterNav.prev.ui.addClass("mdx-chapter-nav-prev-effect");
                iChapterNav.current.ui.addClass("mdx-chapter-nav-current-effect");
                iChapterNav.next.ui.addClass("mdx-chapter-nav-next-effect");
            }
            else {
                iChapterNav.prev.ui.addClass("mdx-chapter-nav-prev-noeffect");
                iChapterNav.current.ui.addClass("mdx-chapter-nav-current-noeffect");
                iChapterNav.next.ui.addClass("mdx-chapter-nav-next-noeffect");
            }

            // 启用 good 级特效
            // VLOOK.ui.effect = "good";
            if (VLOOK.ui.effect === 2) {
                VLOOK.ui.adjustEffect($(transitionTarget));
                // $(transitionTarget).css({
                //     "transition": "all " + VLOOK.animate.speed + "ms ease-in"
                // });
            }

            // 启用 best 级特效
            // VLOOK.ui.effect = "best";
            if (VLOOK.ui.effect === 3) {
                // $(".mdx-mask").css({
                //     "background-color": "rgba(255, 255, 255, 0.9)"
                // });

                // $(".mdx-backdrop-blurs").css({
                //     "backdrop-filter": "blur(15px)",
                //     "-webkit-backdrop-filter": "blur(15px)"
                // });

                // $(".mdx-load-screen");
            }
        },

        /**
         * 初始化热键
         */
        initHotkey : function () {
            // 键盘按下事件
            $(document).keydown(function (event) {
                const code = event.keyCode || event.which || event.charCode;
                let combKeys = (event.ctrlKey ? "Ctrl _ " : "")
                    + (event.shiftKey ? "Shift _ " : "")
                    + (event.altKey ? "Alt _ " : "")
                    + (event.metaKey ? "Win/Cmd _ " : "");
                VLOOK.debug("Keydown: "
                    + combKeys
                    + String.fromCharCode(code)
                    + " [" + code + "]");
                // 按了组合键时忽略（除 Shift）
                if (event.ctrlKey || event.altKey || event.metaKey)
                    return;

                switch (code) {
                    case 74: // J
                        VLOOK.report.push(['Hotkey', combKeys, String.fromCharCode(code), 0]);
                        ExtTable.hideCellCross(true);
                        if (iParagraphNav.next(1)) // 步长1
                            ExtQuote.autoUnfold(); // 自动展开引用
                        break;
                    case 75: // K
                        VLOOK.report.push(['Hotkey', combKeys, String.fromCharCode(code), 0]);
                        ExtTable.hideCellCross(true);
                        if (iParagraphNav.prev(1)) // 步长1
                            ExtQuote.autoUnfold(); // 自动展开引用
                        break;
                    case 72: // H
                        VLOOK.report.push(['Hotkey', combKeys, String.fromCharCode(code), 0]);
                        ExtTable.hideCellCross(true);
                        if (iParagraphNav.prev(10)) // 步长10，快速移动
                            ExtQuote.autoUnfold(); // 自动展开引用
                        break;
                    case 76: // L
                        VLOOK.report.push(['Hotkey', combKeys, String.fromCharCode(code), 0]);
                        ExtTable.hideCellCross(true);
                        if (iParagraphNav.next(10)) // 步长10，快速移动
                            ExtQuote.autoUnfold(); // 自动展开引用
                        break;
                    case 188: // <
                    case 37: // ←
                        VLOOK.report.push(['Hotkey', combKeys, '<←', 0]);
                        if (iFigureViewer.ui.isHidden() === false)
                            iFigureViewer.prev();
                        else
                            iChapterNav.prev.ui.trigger("click");
                        break;
                    case 190: // >
                    case 39: // →
                        VLOOK.report.push(['Hotkey', combKeys, '>→', 0]);
                        if (iFigureViewer.ui.isHidden() === false)
                            iFigureViewer.next();
                        else
                            iChapterNav.next.ui.trigger("click");
                        break;
                    case 79: // O
                        VLOOK.report.push(['Hotkey', combKeys, String.fromCharCode(code), 0]);
                        if (iFigureViewer.ui.isHidden() === false)
                            return;
                        // toggleOutline();
                        iToolbar.buttons["outline"].trigger("click");
                        // iOutlineNav.toggle(afterToggleOutline);
                        break;
                    case 73: // I
                        VLOOK.report.push(['Hotkey', combKeys, String.fromCharCode(code), 0]);
                        // 文档无插图时不处理
                        if (iToolbar.buttons["figure-viewer"].isVisible() === false ||
                            iMask.isHidden() === false)
                            return;
                        // 以浮动样式显示时，先关闭大纲
                        if (iFigureViewer.ui.isHidden() === true)
                            iToolbar.buttons["figure-viewer"].trigger("click");
                        else
                            iFigureViewer.hide();
                        break;
                    case 68: // D
                        VLOOK.report.push(['Hotkey', combKeys, String.fromCharCode(code), 0]);
                        iToolbar.buttons["color-scheme"].trigger("click");
                        break;
                    case 65: // A
                        VLOOK.report.push(['Hotkey', combKeys, String.fromCharCode(code), 0]);
                        iToolbar.buttons["font-style"].trigger("click");
                        break;
                    case 80: // P
                        VLOOK.report.push(['Hotkey', combKeys, String.fromCharCode(code), 0]);
                        iFigureViewer.hide();
                        iFootNote.hide();
                        iToolbar.buttons["print"].trigger("click");
                        break;
                    case 83: // S
                        VLOOK.report.push(['Hotkey', combKeys, String.fromCharCode(code), 0]);
                        // iToolbar.buttons["spotlight"].trigger("click");
                        iToolTips.hide();
                        iSpotlight.toggle();
                        break;
                    case 16: // Shift
                        VLOOK.report.push(['Hotkey', combKeys, '', 0]);
                        iSpotlight.toggleZoom();
                        break;
                    case 13: // ENTER
                        VLOOK.report.push(['Hotkey', combKeys, 'ENTER', 0]);
                        // 关闭欢迎屏
                        if (iWelcomeScreen.finished === true)
                            iWelcomeScreen.close();
                        break;
                    case 27: // ESC
                        VLOOK.report.push(['Hotkey', combKeys, 'ESC', 0]);
                        iToolTips.hide();
                        iInfoTips.hide();

                        if (iOutlineNav.displayMode === "float")
                            iOutlineNav.hide();

                        iSpotlight.hide();
                        iFootNote.hide();
                        iFigureViewer.hide();

                        ExtTable.hideCellCross(true);
                        iParagraphNav.hide();
                        break;
                }
            });
        }

    } // VLOOK.ui

    // 语言类
    VLOOK.lang = {
        id : 2, // 0: 中（简），1: 中（繁），2: 英，3: 法，4: 俄，5: 日，6: 韩

        /**
         * 初始化语言
         */
        init : function () {
            switch (env.language.base) {
                case "zh":
                    VLOOK.lang.id = 1; // 中（繁）
                    if (env.language.subset.toLowerCase() === "cn" || env.language.subset.toLowerCase() === "chs")
                        VLOOK.lang.id = 0; // 中（简）
                    break;
                case "en":
                    VLOOK.lang.id = 2; // 英
                    break;
                case "fr":
                    VLOOK.lang.id = 3; // 法
                    break;
                case "ru":
                    VLOOK.lang.id = 4; // 俄
                    break;
                case "ja":
                    VLOOK.lang.id = 5; // 日
                    break;
                case "ko":
                    VLOOK.lang.id = 6; // 韩
                    break;
                default:
                    VLOOK.lang.id = 2; // 英
            }
        },
    } // VLOOK.lang

    // 动画类
    VLOOK.animate = {
        speed : 500, // 动画速度，值越小越快
        tension : 200, // 动画张力参数
        friction : 20, // 动画摩擦力参数
        tipsTimer : null, // 用于自动控制提示动画
    }

    // 文档类
    VLOOK.doc = {
        newTab : false, // 当前页面是通过 VLOOK 的在新标签打开功能生成的

        // 滚动信息
        scroll : {
            lastUpdateTime : 0, // 最后一次根据滚动变动更新 UI 的时间
            lastTop : 0, // 最后一次记录的滚动位置

            /**
             * 冻结文档滚动
             */
            freeze : function () {
                Dom.body().css({
                    // "user-select": "none", // 禁用网页选择
                    "overflow": "hidden" // 禁用网页滚动
                });
            },

            /**
             * 解冻文档滚动
             */
            unfreeze: function () {
                Dom.body().css({
                    // "user-select": "text", // 恢复网页选择
                    "overflow": "auto" // 恢复网页滚动
                });
            },
        },

        // 内容信息
        counter : {
            figure: 0, // 插图总数
            table: 0, // 表格总数
            codeBlock: 0, // 代码块总数
            audio: 0, // 音频总数
            video: 0, // 视频总数
        },

        // 图片加载失败后的默认填充图片（BASE64编码）
        defaultImage : "data:image/png;base64,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",

        /**
         * 检查重名的Header
         */
        checkDuplicateHeader : function () {
            let h = [];
            $(":header").each(function (i, n) {
                h.push($(this).text());
            });
            let dupHeaders = [];
            const ignoreHeaders = "业务规则,画图脚本,说明,通用的业务规则,用户界面与交互,通用的用户界面与交互,页面流程,业务主流程,流程图,状态图,数据接入";
            for (let i = 0, len = h.length; i < len; i++) {
                if (h.hasOwnProperty(i)) {
                    for (let k = 0, len = h.length; k < len; k++) {
                        if (h.hasOwnProperty(k)) {
                            if (i !== k && h[i] === h[k]
                                && ignoreHeaders.indexOf(h[k]) < 0)
                                dupHeaders.push(h[i]);
                        }
                    }
                }
            }
            // 输出警告信息
            for (let i = 0, len = dupHeaders.length; i < len; i++)
                console.warn([
                    "重名的标题 [",
                    "重複的標題 [",
                    "Duplicate Header [",
                    "Titre en double [",
                    "Дублирующее название [",
                    "重複するタイトル [",
                    "중복 제목 ["
                ][VLOOK.lang.id] + i + "]：" + dupHeaders[i]);
        },

        /**
         * 检查页内链接坏链
         */
        link : {
            checkInner: function () {
                let count = 0,
                    badLink = "";

                // 修复 Typora 内链 BUG
                RepairTool.fixTyporaInnerLink();

                // 检查所有页内链接对应的锚点是否都存在
                $("a[href^='#']").each(function () {
                    var href = $(this).attr("href");
                    // 忽略空链接，如 href="#"
                    if (href.length > 1) {
                        // 检索是否存在与该内链对应的锚点
                        let found = false,
                            aName = href.substring(1, href.length);
                        $("a[name='" + aName + "']").each(function () {
                            found = true;
                        });
                        // 没有检索到对应的锚点
                        if (found === false) {
                            count++;

                            badLink += [
                                "无效页内链接 [",
                                "無效頁內鏈接 [",
                                "Invalid Inner Link [",
                                "Lien de page non valide [",
                                "Недопустимая ссылка на страницу [",
                                "ページリンクが無効です[",
                                "잘못된 페이지 링크["
                            ][VLOOK.lang.id] + count + "]：" + $(this).text() + "[" + aName + "]\n" + $(this).parent().text() + "\n\n";

                            console.error([
                                "无效页内链接 [",
                                "無效頁內鏈接 [",
                                "Invalid Inner Link [",
                                "Lien de page non valide [",
                                "Недопустимая ссылка на страницу [",
                                "ページリンクが無効です [",
                                "잘못된 페이지 링크 ["
                            ][VLOOK.lang.id] + count + "]：" + $(this).text() + "[" + aName + "]\n" + $(this).parent().text() + "\n");
                        }
                    }
                });
                // 显示无效链接信息
                if (badLink.length > 0)
                    alert(badLink);
            },

            /**
             * 初始化外部链接（http://、https://、ftp://等），为其添加target参数
             */
            adjustExternal: function () {
                $("a[href^='http']").each(function () {
                    if (!$(this).attr("target"))
                        $(this).attr("target", "_blank");
                });
                $("a[href^='ftp']").each(function () {
                    if (!$(this).attr("target"))
                        $(this).attr("target", "_blank");
                });
            },
        },
    } // VLOOK.doc

    // 打印类
    VLOOK.print = {
        /**
         * 打印文档前处理
         */
        preprocess : function () {
            VLOOK.report.push(['Style', 'Print', '', 0]);

            // 若当前为 Dark 模式则强制临时切换为 Light 模式
            if (ColorScheme.scheme === "dark") {
                ColorScheme.schemeBeforePrint = ColorScheme.scheme;
                ColorScheme.scheme = "light";
                ColorScheme.apply();
            }

            // 将 mermaid 图表题注 width 等属性临时禁用，并调整为 100%，以适应打印纸张宽度
            $(".mdx-figure-caption-mermaid").each(function () {
                $(this).attr("before-print-width", $(this).css("width"));
                $(this).css("width", "100%");
            });
            
            // 将 mermaid 图表的 width, max-width 等属性临时禁用，并调整为 100%，以适应打印纸张宽度
            $(".mdx-figure-caption-mermaid svg").each(function () {
                if ($(this).attr("width") === "100%") {
                    // 针对流程图
                    if ($(this).attr("style").indexOf("max-width:") > -1) {
                        $(this).attr("before-print-max-width", $(this).css("max-width"));
                        $(this).css("max-width", "");
                    }
                    // 针对状态图
                    else if ($(this).attr("style").indexOf("width:") > -1) {
                        $(this).attr("before-print-width", $(this).css("width"));
                        $(this).css("width", "100%");
                    }
                } else { // 针对顺序图
                    $(this).attr("before-print-width", $(this).attr("width"));
                    $(this).css("width", "100%");
                }
            });

            // 移除引用块的展开提示
            $(".mdx-blockquote-folder[data-vk-folded=true]").each(function () {
                $(this).mouseup();
            });

            // 展开所有折叠的内容
            $("[data-vk-folded=true]").each(function () {
                $(this).attr("data-vk-before-print-folded", $(this).attr("data-vk-folded"));
                $(this).next().children(".mdx-btn").trigger("click");
            });

            window.print();
        },

        /**
         * 打印文档后处理
         */
        postProcess : function () {
            // 若打印前为 Dark 模式则先恢复为 Dark 模式
            if (ColorScheme.schemeBeforePrint === "dark") {
                ColorScheme.toggle();
            }

            // 恢复打印前的配置，详见 VLOOK.print.preprocess()
            $(".mdx-figure-caption-mermaid").each(function () {
                $(this).css("width", $(this).attr("before-print-width"));
                $(this).removeAttr("before-print-width");
            });
            //恢复打印前的配置，详见 VLOOK.print.preprocess()
            $(".mdx-figure-caption-mermaid svg").each(function () {
                if ($(this).attr("width") === "100%") {
                    // 针对流程图
                    if ($(this).attr("style").indexOf("max-width:") > -1) {
                        $(this).css("max-width", $(this).attr("before-print-max-width"));
                        $(this).removeAttr("before-print-max-width");
                    }
                    // 针对状态图
                    else if ($(this).attr("style").indexOf("width:") > -1) {
                        $(this).css("width", $(this).attr("before-print-width"));
                        $(this).removeAttr("before-print-width");
                    }
                } else { // 针对顺序图
                    $(this).css("width", $(this).attr("before-print-width"));
                    $(this).removeAttr("before-print-width");
                }
            });

            // 恢复打印前的配置，详见 VLOOK.print.preprocess()
            $("[data-vk-before-print-folded=true]").each(function () {
                let container = $(this);
                container.find("table, .mdx-figure, .md-fences").each(function () {
                    // if (container.attr("data-vk-before-print-folded") === "true")
                    iContentFolding.checkAndProcess($(this), false);
                    // foldingLongContent($(this), true);
                });
                container.removeAttr("data-vk-before-print-folded");
            });
        },
    } // VLOOK.print

    // 数据统计报告类
    VLOOK.report = {
        /**
         * 提交统计数据
         */
        submit : function (loadTimeCost) {
            // VLOOK 基本信息
            let statData = "?p=vlook"
                + "&ver=" + VLOOK.version
                + "&thm=" + getComputedStyle(document.documentElement)
                    .getPropertyValue("--vlook-theme-name").replaceAll("\"", "").trim();

            statData += "&d=" + (env.device.mobile ? "mob" : ""); // 设备类型
            statData += "&dpr=" + env.display.DPR; // DPR

            // OS 信息
            statData += "&os=";
            if (env.os.macOS)
                statData += "macOS";
            else if (env.os.Windows)
                statData += "Windows";
            else if (env.os.iOS)
                statData += "iPhone";
            else if (env.os.Linux)
                statData += "iPhone";
            else
                statData += "others";

            // 浏览器及版本
            statData += "&b=";
            if (env.browser.Edge)
                statData += "edge&bv=" + env.browserVersion.Edge;
            else if (env.browser.Chrome)
                statData += "chrome&bv=" + env.browserVersion.Chrome;
            else if (env.browser.Firefox)
                statData += "firefox&bv=" + env.browserVersion.Firefox;
            else if (env.browser.Safari)
                statData += "safari&bv=" + env.browserVersion.Safari;
            else
                statData += "others&bv=";

            // 浏览器的颜色方案
            statData += "&cs=" + getComputedStyle(document.documentElement)
                .getPropertyValue("--vlook-color-scheme").replaceAll("\"", "").trim();

            statData += "&lang=" + VLOOK.lang.id; // 浏览器语言
            statData += "&size=" + Dom.write().text().length; // 文档大小
            statData += "&time=" + loadTimeCost; // 加载文档时间

            // 图片插图数据
            statData += "&img=" + $("img").length;
            statData += "&img-fold=" + $("p[data-vk-container=img][data-vk-folded=true]").length;
            statData += "&img-iid=" + $("img[data-vk-invert=in-dark]").length;
            statData += "&img-cap1=" + $("div[id^=fig-num][fig-type=img] .mdx-figure-caption-1 span").length;
            statData += "&img-cap2=" + $("div[id^=fig-num][fig-type=img] .mdx-figure-caption-2").length;

            // mermaid 插图数据
            statData += "&mm=" + $(".md-diagram-panel").length;
            statData += "&mm-fold=" + $("div[data-vk-container=svg][data-vk-folded=true]").length;
            statData += "&mm-cap1=" + $("div[id^=fig-num][fig-type=svg] .mdx-figure-caption-1 span").length;
            statData += "&mm-cap2=" + $("div[id^=fig-num][fig-type=svg] .mdx-figure-caption-2").length;

            // mermaid 图的细类
            let pie = 0,
                flow = 0,
                flowSTART = 0,
                flowINIT = 0,
                state = 0,
                seq = 0,
                classD = 0,
                gantt = 0;
            $(".md-diagram-panel").each(function () {
                if ($(this).find("g.legend").length > 0)
                    pie++; // 饼图
                else if ($(this).find("g.output g.nodes").length > 0) {
                    flow++; // 流程图
                    if ($(this).find("g.output g.nodes g#START.node").length > 0)
                        flowSTART++; // VLOOK 标准的流程图
                    else if ($(this).find("g.output g.nodes g#INIT.node").length > 0)
                        flowINIT++; // VLOOK 标准的状态图
                }
                else if ($(this).find("g.stateGroup").length > 0)
                    state++; // 状态图（原生）
                else if ($(this).find("g rect.actor").length > 0)
                    seq++; // 顺序图
                else if ($(this).find("g.classGroup").length > 0)
                    classD++; // 类图
                else if ($(this).find("g rect.section").length > 0)
                    gantt++; // 甘特图
            });
            statData += "&mm-pie=" + pie;
            statData += "&mm-flow=" + flow;
            statData += "&mm-flow-S=" + flowSTART
            statData += "&mm-flow-I=" + flowINIT
            statData += "&mm-state=" + state;
            statData += "&mm-seq=" + seq;
            statData += "&mm-class=" + classD;
            statData += "&mm-gantt=" + gantt;

            // 表格数据
            statData += "&tbl=" + $("table").length;
            statData += "&tbl-fold=" + $("figure[data-vk-container=table][data-vk-folded=true]").length;
            statData += "&tbl-cap1=" + $("div[id^=tbl-num] .mdx-figure-caption-1 span").length;
            statData += "&tbl-cap2=" + $("div[id^=tbl-num] .mdx-figure-caption-2").length;

            // 表格列格式数据
            let fmBold = 0,
                fmEm = 0,
                fmUnderline = 0,
                fmMark = 0,
                fmDel = 0;
            $("table").each(function () {
                if ($(this).find("th.mdx-table-column-format-bold").length > 0)
                    fmBold++;
                if ($(this).find("th.mdx-table-column-format-em").length > 0)
                    fmEm++;
                if ($(this).find("th.mdx-table-column-format-underline").length > 0)
                    fmUnderline++;
                if ($(this).find("th mark").length > 0)
                    fmMark++;
                if ($(this).find("th del").length > 0)
                    fmDel++;
            });
            statData += "&tbl-fm-b=" + fmBold;
            statData += "&tbl-fm-em=" + fmEm;
            statData += "&tbl-fm-u=" + fmUnderline;
            statData += "&tbl-fm-m=" + fmMark;
            statData += "&tbl-fm-d=" + fmDel;

            // 代码块数据
            statData += "&cb=" + $(".md-fences").length;
            statData += "&cb-fold=" + $("p[data-vk-container=pre][data-vk-folded=true]").length;
            statData += "&cb-cap1=" + $("div[id^=code-block-num] .mdx-figure-caption-1 span").length;
            statData += "&cb-cap2=" + $("div[id^=code-block-num] .mdx-figure-caption-2").length;

            // 标签数据
            statData += "&tag=" + $("code[class^=mdx-tag-c]").length;
            statData += "&tag2=" + $("code[class^=mdx-tag-name]").length;

            // 引用数据
            statData += "&bq=" + $("blockquote").length;
            statData += "&bq-fold=" + $("blockquote p.mdx-blockquote-folder").length;

            // 脚注数据
            statData += "&fn=" + $(".md-footnote").length;

            // 当前文档的 URL
            statData += "&url=" + window.location.href;

            // 对数据进行编码
            statData = encodeURI(statData);

            // 提交统计数据
            $("iframe[name=vlook-stat-gitee]").attr("src",
                "https://madmaxchow.gitee.io/vlook/act/" + (VLOOK.debugMode ? "dev-" : "") + "stat-gitee.html"
                + statData);
            VLOOK.debug("Stat. in Gitee:\n" + $("iframe[name=vlook-stat-gitee]").attr("src"));
        },

        /**
         * 上报事件统计数据（基于百度统计）
         * 为兼容在本地打开的 HTML 文件，所以通过 iframe 的方式进行数据上报
         *
         * @param data 数据数组，与百度统计的 _hmt.push(["_trackEvent", data[0], data[1], data[2], data[3]) 的参数保持一致
         */
        push : function (data) {
            $("body").append('<iframe name="v-event-' + VLOOK.report.eventCount + '" style="display: block;" marginwidth="0" marginheight="0" frameBorder="0" scrolling="no" width="100%" height="0"'
                + ' src="https://madmaxchow.gitee.io/vlook/act/'
                + (VLOOK.debugMode ? "dev-" : "")
                + 'event-gitee.html'
                + "?category=" + (VLOOK.debugMode ? "dev-" : "") + data[0]
                + "&action=" + data[1]
                + "&label=" + data[2]
                + "&value=" + data[3]
                + "&debug=" + VLOOK.debugMode
                + '"></iframe>');

            setTimeout(VLOOK.report.recycleResources, 5000);

            VLOOK.report.eventCount++;
        },

        /**
         * 转换标签名为 VLOOK 中的特定内容类型名称
         */
        transTagName : function (tagName) {
            if (tagName === "img" || tagName === "svg")
                return "Figure";
            else if (tagName === "table")
                return "Table";
            else if (tagName === "pre")
                return "CodeBlock";
            return "Unknown";
        },

        /**
         * 移除上报事件的资源
         */
        recycleResources : function () {
            $("iframe[name^=v-event-]").each(function () {
                $(this).remove();
                return false; // 执行一次即跳出，即每次只删除当前最早创建的
            });
        },

        // 上报事件的累计次数，用于标识不同的上报事件 iframe 的 id
        eventCount: 0,
    } // VLOOK.report

    // 工具
    VLOOK.util = {
        /**
         * 获取 URL 中的参数数组
         */
        parseQueryString : function (url) {
            let hash = url.indexOf("#");
            url = hash > -1 ? url.substring(0, hash) : url; // 只截取 URL 中 # 前的内容

            let start = url.indexOf("?"),
                queryStr = url.substring(start > -1 ? start + 1 : url.length, url.length), // 获取url中"?"符后的字串
                args = {}, // 保存参数数据的对象
                items = (queryStr.length > 0) ? queryStr.split("&") : [], // 取得每一个参数项,
                item = null,
                len = items.length;

            // 将所有参数拆解至数组中
            for (let i = 0; i < len; i++) {
                item = items[i].split("=");
                let name = decodeURIComponent(item[0]),
                    value = decodeURIComponent(item[1]);
                if (name) {
                    args[name] = value;
                }
            }
            return args;
        },
    }

    // ==================== 处理耗时计时器类 ==================== //

    /**
     * 构造函数
     */
    function Stopwatch() {
        this.startTime = null; // 重置后的初始时间
        this.lapTime = null; // 每次中间计时的初始时间

        /**
         * 重置计时器
         */
        this.reset = function () {
            this.startTime = new Date().getTime();
        }

        /**
         * 一次中间计时开始
         */
        this.lapStart = function () {
            this.lapTime = new Date().getTime();
        }

        /**
         * 一次中间计时结束
         */
        this.lapStop = function () {
            let timeCost = new Date().getTime() - this.lapTime;
            console.info("    " + timeCost + " ms");
            return timeCost;
        }

        /**
         * 计时器结束
         */
        this.stop = function () {
            return new Date().getTime() - this.startTime;
        }

        // 初始化计时器
        this.reset();
    }

    // ==================== 欢迎屏 ==================== //

    /**
     * 构造函数
     */
    function WelcomeScreen() {
        this.ui = $(".mdx-load-screen"); // 欢迎屏主界面
        this.buttonEnter = $(".mdx-btn-load-screen"); // 关闭欢迎屏按钮
        this.tips = $(".mdx-load-screen-tips"); // 欢迎信息
        this.finished = false; // 是否已加载

        /**
         * 完成所有内容加载后调用
         */
        this.done = function () {
            this.ui.css("cursor", "default");
            this.stopAnimation();

            this.buttonEnter.text([
                "轻一点，轻轻一点",
                "輕一點，輕輕一點",
                "Click to Start",
                "Cliquez pour commencer",
                "Нажмите, чтобы начать",
                "クリックして開始",
                "클릭하여 시작"
            ][VLOOK.lang.id]);

            this.tips.css("animation", "none");
            this.buttonEnter.addClass("mdx-btn-load-screen-done");

            // 关闭欢迎屏事件
            let that = this;
            this.buttonEnter.unbind("click").click(function () {
                that.close();
            });

            this.finished = true;
        }

        /**
         * 停止加载时的呼吸动画
         */
        this.stopAnimation = function () {
            this.tips.css("animation", "none");
        }

        /**
         * 关闭欢迎屏
         */
        this.close = function () {
            VLOOK.doc.scroll.unfreeze();

            // 动画式显示
            if (VLOOK.ui.effect >= 2) {
                let that = this;
                this.ui.velocity({
                    top: -this.ui.height()
                }, {
                    duration: VLOOK.animate.speed,
                    complete: function () {
                        that.ui.hide();
                    }
                });
            }
            else {
                this.ui.css({
                    top: -this.ui.height()
                });
                this.ui.hide();
            }
        }
    }

    // =====c=============== 内容辅助工具类 ==================== //

    function ContentAssist() {}

    ContentAssist.button = {
        openInNewTab : $(".mdx-btn-open-in-new-tab"), // 在新标签中打开按钮
        copyCodeBlock : $(".mdx-btn-copy-code-block"), // 复制代码块按钮
    }

    // 绑定在新标签中打开按钮事件
    ContentAssist.button.openInNewTab.unbind("click").click(function () {
        ContentAssist.openInNewTab();
    });
    ContentAssist.button.openInNewTab.mouseout(function () {
        ContentAssist.mouseout();
    });

    // 复制代码块按钮事件
    ContentAssist.button.copyCodeBlock.unbind("click").click(function () {
        ExtCodeBlock.copyPlus();
    });
    ContentAssist.button.copyCodeBlock.mouseout(function () {
        ContentAssist.mouseout();
    });

    // 最后显示新标签打开按钮的内容（插图/表格等）
    ContentAssist.lastHoverContent = undefined;

    /**
     * 显示文档内容动作按钮
     */
    ContentAssist.showOpenInNewTabButton = function () {
        // 移动端不显示该动作按钮
        if (env.device.mobile)
            return;

        // 显示在新标签打开的按钮
        ContentAssist.button.openInNewTab.hide();
        ContentAssist.button.openInNewTab.css({
            "left": ContentAssist.lastHoverContent.offset().left,
            "top": ContentAssist.lastHoverContent.offset().top
        });

        // 动画式显示
        if (VLOOK.ui.effect >= 2)
            ContentAssist.button.openInNewTab.velocity("fadeIn", {
                duration: VLOOK.animate.speed
            });
        else
            ContentAssist.button.openInNewTab.show();
    }

    /**
     * 显示文档内容动作按钮
     */
    ContentAssist.showCopyCodeBlockButton = function () {
        // 移动端不显示该动作按钮
        if (env.device.mobile)
            return;

        ContentAssist.button.copyCodeBlock.hide();
        ContentAssist.button.copyCodeBlock.css({
            "left": ContentAssist.lastHoverContent.offset().left
                + ContentAssist.lastHoverContent.width()
                - ContentAssist.button.copyCodeBlock.width() + 4,
            "top": ContentAssist.lastHoverContent.offset().top
        });

        // 动画式显示
        if (VLOOK.ui.effect >= 2)
            ContentAssist.button.copyCodeBlock.velocity("fadeIn", {
                duration: VLOOK.animate.speed
            });
        else
            ContentAssist.button.copyCodeBlock.show();
    }

    /**
     * 隐藏内容辅助动作按钮
     */
    ContentAssist.hideButtons = function () {
        if (ContentAssist.lastHoverContent == undefined || ContentAssist.mouseDropIn() === false) {
            // 动画式显示
            if (VLOOK.ui.effect >= 2) {
                ContentAssist.button.openInNewTab.velocity("fadeOut", {
                    duration: VLOOK.animate.speed
                });
                ContentAssist.button.copyCodeBlock.velocity("fadeOut", {
                    duration: VLOOK.animate.speed
                });
            }
            else {
                ContentAssist.button.openInNewTab.hide();
                ContentAssist.button.copyCodeBlock.hide();
            }
        }
    }

    /**
     * 鼠标移出内容动作按钮后
     */
    ContentAssist.mouseout = function () {
        if (ContentAssist.mouseDropIn() === false) {
            ContentAssist.hideButtons();
        }
    }

    /**
     * 鼠标光标落入最后 Hover 的内容上
     */
    ContentAssist.mouseDropIn = function () {
        let e = (event || window.event),
            target = ContentAssist.lastHoverContent;
        const mx = e.pageX || e.clientX + document.body.scrollLeft;
        const my = e.pageY || e.clientY + document.body.scrollTop;
        return !(mx < target.offset().left || mx > (target.offset().left + target.width()) ||
            my < target.offset().top || my > (target.offset().top + target.height()));
    }

    /**
     * 在新标签页中打开插图/表格等内容
     */
    ContentAssist.openInNewTab = function () {
        ContentAssist.button.openInNewTab.hide();

        if (ContentAssist.lastHoverContent == undefined)
            return;

        let newTab = window.open("", "_blank"),
            content = ContentAssist.lastHoverContent.clone(), // 复制要在新标签中打开的内容
            tagName = ContentAssist.lastHoverContent.prop("tagName").toLowerCase();

        VLOOK.report.push(['Interactive', VLOOK.report.transTagName(tagName), 'OpenInNewTab', 0]);

        // 动态生成新标签的页面
        newTab.document.write("<!doctype html>");
        newTab.document.write($("html").html());
        // 取内容对应的题注为新标签页的标题
        newTab.document.title = ContentAssist.lastHoverContent.prev().text();

        // 初始化在新标签打开的页面的关键组件实例
        newTab.VLOOK.initIntance(true);
        newTab.OINT.init();

        // 内容为表格时
        if (tagName === "table") {
            // 恢复表格行号
            let rowNumFilter = "table tr > th:first-child, table tr > td:first-child, table tbody tr > td:first-child",
                container = content.wrap("<figure></figure>").parent();
            container.find(rowNumFilter).removeClass("mdx-table-row-num-hidden");

            // 添加 <h1> 是为能激活表格显示等号的样式
            newTab.OINT.append("<h1 style='display:none'></h1>");
            newTab.OINT.append(container);
        }
        // 内容为mermaid 图表时
        else if (tagName === "svg")
            newTab.OINT.append(content.wrap("<div class='md-diagram-panel'></div>").parent());
        // 内容为：图片、代码块
        else
            newTab.OINT.append(content);

        // 初始化在新标签打开的页面的 VLOOK
        newTab.VLOOK.initKernel(ColorScheme.scheme);

        // 将主文档中对应内容的题注数据更新到新标签中
        let caption1 = ContentAssist.lastHoverContent.prev().text(),
            caption2 = ContentAssist.lastHoverContent.next().attr("class") === "mdx-figure-caption-2" ? ContentAssist.lastHoverContent.next()
            .text() : null;
        newTab.OINT.updateFigureCaption(tagName, caption1, caption2);

        newTab.OINT.done();
    }

    // ==================== 聚光灯类 ==================== //

    /**
     * 构造函数
     * @param radius 半径大小
     */
    function Spotlight(radius) {
        this.ui = $(".mdx-spotlight"); // 聚光灯主界面
        this.event = undefined; // 鼠标事件对象
        this.radius = radius; // 聚光灯半径
        this.zoom = {
            normal: radius, // 标准大半径
            bigger: radius * 1.4, // 放大的半径
        };

        /**
         * 切换聚光灯的不同大小
         */
        this.toggleZoom = function () {
            if (this.ui.isHidden() === true)
                return;

            VLOOK.report.push(['Presentation', 'Spotlight', 'Zoom', 0]);

            this.radius = this.radius < this.zoom.bigger
                ? this.zoom.bigger
                : this.zoom.normal;

            this.repaint();
        }

        /**
         * 刷新聚光灯的显示
         *
         * @param event window.event 鼠标事件对象
         */
        this.repaint = function (event) {
            // 若有指定鼠标事件对象，则更新聚光灯关联的鼠标事件对象
            if (event !== undefined)
                this.event = event;

            if (this.ui.isHidden() === true)
                return;

            this.ui.css("background", "radial-gradient(circle at "
                + this.event.clientX + "px " + this.event.clientY + "px, "
                + "rgba(0, 0, 0, 0) " + this.radius + "px, "
                + "rgba(0, 0, 0, 0.7)" + (this.radius + 1) + "px)");
        }

        /**
         * 切换聚光灯的开关
         */
        this.toggle = function () {
            VLOOK.report.push(['Presentation', 'Spotlight', 'Show/Hide', 0]);

            // 未打开，则打开
            if (this.ui.isHidden() === true) {
                this.ui.show();
                this.repaint();
            }
            // 已打开，则关闭
            else {
                this.ui.hide();
            }
        }

        /**
         * 隐藏聚光灯
         */
        this.hide = function () {
            this.ui.hide();
        }
    }

    // ==================== 大纲导航类 ==================== //

    /**
     * 构造函数
     *
     * @param mask 遮罩对象
     */
    function OutlineNav(mask) {
        this.ui = $(".mdx-toc-panel"); // 大纲面板主界面

        this.title = $(".mdx-toc-panel-title"); // 大纲面板标题
        let that = this;
        this.title.unbind("click").click(function () {
            that.gotoCover();
        });

        this.body = $(".mdx-toc-panel-body"); // 大纲内容

        this.headers = []; // 大纲目录集
        this.currentHeaderIndex = -1; // 当前章节在目录集中的索引
        this.currentItem = undefined; // 当前章节对象

        this.closeMode = "auto"; // 关闭大纲的方式
        this.displayMode = "float"; // 最后一次的显示方式（float/block）
        this.showed = false; // 是否已显示

        // 大纲面板宽度
        this.width = parseInt(getComputedStyle(document.documentElement)
            .getPropertyValue("--vlook-toc-box-width"));

        this.foldItems = []; // 非叶子章节集
        this.lastHeaderFolder = undefined; // 上一个非叶子章节
        this.lastHeaderLevel = 0; // 上一个章节的层级
        // 大纲章节图标：已收起
        this.iconFold = '<svg width="20px" height="20px" style="display: inline-block; vertical-align: middle; margin-top: -4px;"><use xlink:href="#icoFolded" class="mdx-folder-ico"/></svg>';
        // 大纲章节图标：已展开
        this.iconUnfold = '<svg width="20px" height="20px" style="display: inline-block; vertical-align: middle; margin-top: -4px;"><use xlink:href="#icoUnfold" class="mdx-folder-ico"/></svg>';

        this.lastDocScrollTop = 0; // 记录最后一次文档滚动位置

        this.chapterNav = undefined; // 联动的章节导航栏
        this.toolbar = undefined; // 联动的工具栏

        this.mask = mask; // 遮罩
        this.mask.bindPartner(this);


        /**
         * 添加大纲节点
         *
         * @param item 由 Typora 生成的 [TOC] 大纲节点
         */
        this.add = function (item) {
            let a = item.children("a");

            // 将章节记录到目录集中
            let href = a.attr("href");
            this.headers.push(href.substring(1, href.length));

            // 自定义大纲节点元数据
            item.css("cursor", "pointer"); // 添加鼠标形状
            item.attr({
                "id": "v-header-" + item.attr("data-ref"), // 添加id属性
                "data-vk-node": "0", // 添加节点类型：0:叶子节点, 1:目录节点
                "data-vk-folded": "false", // 添加节点状态：true:收起, false:展开
                "title": a.text().trim()
            });
            // 使用完 <a> 的内容后，将章节中的链接文字提到链接外，用于实现长章节内容截断的 CSS 新式
            a.after(a.text());
            a.text("");

            // 点击大纲节点事件
            let that = this;
            item.unbind("click").click(function () {
                VLOOK.report.push(['Outline', 'Goto', 'TOC', 0]);
                // 跳转至对应的页内锚点
                location.href = $("#" + item.attr("id")).children("a").attr("href");
                if (that.displayMode === "float") {
                    that.hide("auto");
                    // 模拟等待页面完成跳转后，再进行大纲面板布局自适应处理
                    setTimeout(function () {
                        VLOOK.ui.adjustAll();
                    }, 500);
                }
            });

            // -----------------------------------
            // 大纲非叶子章节的折叠功能实现
            // 所有大纲节点都添加 folding 空白控件备用
            $("<div id='fd-v-header-" + item.attr("data-ref")
                + "' class='mdx-folder'>&nbsp;</div>")
                    .insertBefore(item.find("a"));

            // 记录所有非叶子节点的folder控件
            if (this.lastHeaderFolder !== undefined) {
                // 当前节点比上一个节点层级低，则上一节点为可折叠的节点
                if (this.parseHeaderLevel(item) > this.lastHeaderLevel) {
                    this.foldItems.push(this.lastHeaderFolder);

                    // 为非叶子的章节添加折叠图标
                    let folder = this.lastHeaderFolder.html(this.iconUnfold);
                    folder.parent().attr({
                        "data-vk-node": "1", // 0:叶子, 1:目录
                        "data-vk-folded": "false" // true:收起， false:展开
                    });

                    // 折叠控件事件
                    let that = this;
                    folder.unbind("click").click(function () {
                        VLOOK.report.push(['Outline', 'Assist', 'Fold/Unfold', 0]);
                        that.foldChapterItem($(this).parent().attr("id"));
                        event.cancelBubble = true;
                    });
                    // hover 事件处理
                    folder.hover(function () {
                        $(this).find("svg use").addClass("mdx-folder-ico-hover");
                    }, function () {
                        $(this).find("svg use").removeClass("mdx-folder-ico-hover");
                    });
                }
            }

            // 更新最后处理的folder控件
            this.lastHeaderFolder = $("#fd-v-header-" + item.attr("data-ref"));
            this.lastHeaderLevel = this.parseHeaderLevel(item);
        }

        /**
         * 页面滚动时根据页面当前的蘵，高亮对应大纲中的章节
         */
        this.focusHeader = function () {
            // ----------------------------------------
            // 控制执行频率，避免处理过快影响性能
            let scrollTop = $(document).scrollTop();
            if (Math.abs(scrollTop - this.lastDocScrollTop) < 50)
                return;
            this.lastDocScrollTop = scrollTop;

            // ----------------------------------------
            // 寻找文档当前显示的章节
            // 默认为最后一章
            let currentIndex = this.headers.length - 1;
            for (let i = 0, len = this.headers.length; i < len; i++) {
                let target = env.browser.Firefox === false
                    ? $("a[name='" + this.headers[i] + "']") // 非 Firefox 浏览器
                    : $("a[name='" + decodeURI(this.headers[i]) + "']"); // Firefox 浏览器
                let headerHeight = target.height();
                // 将最近一个章节从文档可视空间上方滚出的章节定义为「当前章节」
                if ((target.offset().top - $(document).scrollTop()) > (headerHeight / 2)) {
                    currentIndex = i - 1;
                    break;
                }
            }

            // 章节没有变化则直接退出
            if (this.currentHeaderIndex === currentIndex)
                return;
            // 章节有变化，并记录
            this.currentHeaderIndex = currentIndex;

            // 当前文档位置不在封面时
            if (this.withinHeader() === true) {
                // ----------------------------------------
                // 更新大纲内当前节点的样式
                // 先清除大纲中上一次的「当前章节」的样式
                if (this.currentItem !== undefined)
                    this.currentItem.removeClass("mdx-header-current");
                // 更新「当前章节」的样式
                this.currentItem = $("#vlook-toc a[href='#" + this.headers[currentIndex] + "']").parent();
                this.currentItem.addClass("mdx-header-current");

                // ----------------------------------------
                // 根据当前节点情况，大纲内的可视空间自动滚动该节点所在位置
                const preDis = this.currentItem.height() * 3, // 用于大纲节点触动滚动的大小
                    sTop = this.body.scrollTop(), // 大纲内当前滚动位置
                    sBottom = sTop + this.body.height(); // 当前可视空间中位于大纲底部的位置

                // 若当前节点在可视区域的上方，则滚动到该节点的位置
                if (this.currentItem.position().top < sTop)
                    this.body.scrollTop(this.currentItem.position().top);
                // 若当前节点在可视区域的上方，则滚动到该节点的位置
                else if (this.currentItem.position().top > (sBottom - preDis))
                    this.body.scrollTop(this.currentItem.position().top - this.body.height() + preDis);
            }

            this.chapterNav.update();
        }

        /**
         * 文档当前位置是否在章节内
         */
        this.withinHeader = function () {
            return this.currentHeaderIndex > -1;
        }

        /**
         * 显示/隐藏大纲面板
         *
         * @param callback 显示/隐藏大纲后执行回调函数
         */
        this.toggle = function (callback) {
            VLOOK.report.push(['Outline', 'Assist', 'Show/Hide', 0]);

            // 大纲面板已显示
            if (this.showed === true) {
                this.hide("manual");
            }
            // 大纲面板未显示
            else {
                this.closeMode = "auto";
                // 在封面，或小屏
                if (this.withinHeader() === false || VLOOK.ui.isSmallScreen() === true) {
                    this.show("float");
                }
                // 在章节内，非小屏
                else {
                    // 没有手动关闭大纲面板时，自动显示大纲面板
                    if (this.closeMode === "auto")
                        this.show("block");
                }
            }

            // typeof(callback) === "function" && callback();
            this.afterToggle();
        }

        /**
         * 显示大纲面板
         *
         * @param displayMode float: 以浮动形式显示，block: 以占位形式显示
         * @return true: 需要处理显示，false: 已显示，无须重复处理
         */
        this.show = function (displayMode, callback) {
            if (this.showed === true // 已显示
                || this.ui.offset().left > -this.width) // 在以动画显示过程中
                return false;

            // 以「占位方式」显示大纲面板
            this.displayMode = displayMode;
            if (this.displayMode === "block") {
                // 占位方式的样式设置
                this.ui.removeClass("mdx-toc-panel-float");
                this.ui.addClass("mdx-toc-panel-block");

                // 撑开文档正文区域
                if (VLOOK.ui.effect >= 2)
                    Dom.write().velocity({
                        marginLeft: this.width + 20
                    }, {
                        // easing: 500, VLOOK.animate.friction],
                        duration: VLOOK.animate.speed / 2
                    });
                else
                    Dom.write().css({
                        marginLeft: this.width + 20
                    });
            }
            // 以「浮动方式」显示大纲面板
            else if (this.displayMode === "float") {
                // 显示联动的遮罩
                this.mask.show();
                // 浮动方式的样式设置
                this.ui.removeClass("mdx-toc-panel-block");
                this.ui.addClass("mdx-toc-panel-float");

                // 若文档可视空间比大纲宽度要小，则进行微调
                if ($(window).width() < this.width + 40)
                    this.ui.css("width", $(window).width() - 20);
                // 若文档空间比大纲宽度大，则直接显示原始大小
                else
                    this.ui.css("width", this.width);
            }

            // 动画式显示
            if (VLOOK.ui.effect >= 2)
                this.ui.velocity({
                    left: 10
                }, {
                    easing: [VLOOK.animate.tension, VLOOK.animate.friction],
                    duration: VLOOK.animate.speed
                });
            else
                this.ui.css({
                    left: 10
                });

            // 以「占位方式」显示大纲面板时，须执行回调函数
            if (this.displayMode === "block")
                typeof(callback) === "function" && callback();

            this.showed = true;

            return true;
        }

        /**
         * 隐藏大纲
         *
         * @param closeMode 关闭大纲的的方式（auto/manual）
         * @return true: 需要处理隐藏，false: 已显示，无须重复处理
         */
        this.hide = function (closeMode) {
            if (this.showed === false // 已隐藏
                || this.ui.offset().left < 10) // 在以动画隐藏过程中
                return false;

            this.showed= false;

            // 若最后一次显示以是「占位方式」显示
            if (this.displayMode === "block") {
                // 记录是否手动关闭
                this.closeMode = closeMode;

                // 则取消对正文区的占位空间
                if (VLOOK.ui.effect >= 2)
                    Dom.write().velocity({
                        marginLeft: 0
                    }, {
                        duration: VLOOK.animate.speed
                    });
                else
                    Dom.write().css({
                        marginLeft: 0
                    });
            }

            // 动画式收起
            if (VLOOK.ui.effect >= 2) {
                this.ui.velocity({
                    left: -this.width
                }, {
                    duration: VLOOK.animate.speed
                });
            }
            else {
                this.ui.css({
                    left: -this.width
                });
            }

            // 恢复不挤压文档正文区
            Dom.write().css({
                marginLeft: 0
            });

            this.mask.hide();

            return true;
        }

        /**
         * 大纲面板根据规则进行布局的自适应处理
         *
         * @return true: 需要处理显示/隐藏，false: 已显示/隐藏，无须重复处理
         */
        this.adjust = function (callback) {
            let result = false;
            // 在封面，或为小屏
            if (this.withinHeader() === false || VLOOK.ui.isSmallScreen() === true) {
                // 自动隐藏大纲面板
                result = this.hide("auto");
            }
            // 不在封面
            else {
                // 没有手动关闭大纲面板时，自动显示大纲面板
                if (this.closeMode === "auto") {
                    // 以占位方式显示大纲面板
                    result = this.show("block");
                }
            }

            // 执行回调函数（等待文档完成重绘后再执行）
            setTimeout(function () {
                typeof(callback) === "function" && callback();
            }, 500);

            return result;
        }

        /**
         * 跳转回文档封面
         */
        this.gotoCover = function () {
            VLOOK.report.push(['Outline', 'Goto', 'Cover', 0]);

            location.href = "#";
            if (this.currentItem !== undefined) {
                this.currentItem.removeClass("mdx-header-current");
                this.currentHeaderIndex = -1;
            }

            iOutlineNav.adjust();
            iToolbar.adjust();
            iChapterNav.adjust();
        }

        /**
         * 跳转至指定章节
         */
        this.gotoHeader = function (target) {
            let dataAnchor = target.attr("data-vk-anchor");
            if (dataAnchor === "cover") {
                VLOOK.report.push(['ChapterNav', 'Nav', 'Cover', 0]);
                this.gotoCover();
            }
            else {
                VLOOK.report.push(['ChapterNav', 'Nav', 'Chapter', 0]);
                window.location.href = "#" + target.attr("data-vk-anchor");
            }
        }

        /**
         * 收起/展开章节目录
         *
         * @param id 对象的id值
         */
        this.foldChapterItem = function (id) {
            let tocItem = $("#" + id),
                folderIco = $("#fd-" + id + " > svg");

            // 若对应的章节已收起
            if (tocItem.attr("data-vk-folded") === "true") {
                tocItem.attr("data-vk-folded", "false");
                folderIco.prop("outerHTML", this.iconUnfold);

                this.disposeFold(id, "expand", true);
            }
            // 若对应的章节已展开
            else {
                tocItem.attr("data-vk-folded", "true");
                folderIco.prop("outerHTML", this.iconFold);

                this.disposeFold(id, "collect", true);
            }
        }

        /**
         * 处理展开或收起指定章节下的子章节
         *
         * @param id 对象的id值
         * @param action 执行动作（collect/expand）
         * @param child 是否遍历子元素
         */
        this.disposeFold = function (id, action, child) {
            let lastItem = null,
                itemSet = $("#" + id).nextAll();
            for (let i = 0, len = itemSet.length; i < len; i++) {
                let item = $(itemSet[i]);
                if (lastItem != null) {
                    const hd1 = this.parseHeaderLevel(item);
                    const hd2 = this.parseHeaderLevel(lastItem);
                    if (hd1 > hd2)
                        continue;
                    else if (hd1 < hd2)
                        break;
                }

                // 如果是目录节点，同时是已展开的，才进行递归调用展开子节点
                if (child === true && item.attr("data-vk-node") === "1" && item.attr("data-vk-folded") === "false")
                    this.disposeFold(item.attr("id"), action, child);

                if (action === "collect") // 收起
                    item.css("display", "none");
                else if (action === "expand") // 展开
                    item.css("display", "block");

                lastItem = item;
            }
        }

        /**
         * 返回指定对象的CSS的header的样式层级
         */
        this.parseHeaderLevel = function (target) {
            let cname = target.attr("class");
            return cname.substr(cname.indexOf("md-toc-h") + "md-toc-h".length, 1)
        }

        /**
         * 显示/隐藏大纲，并进行关联处理
         */
        this.afterToggle = function () {
            ContentAssist.button.openInNewTab.hide();
            if (iOutlineNav.displayMode === "block")
                iContentFolding.adjust();
        }
    }

    /**
     * 为Outline中子元素添加附加属性和事件
     */
    OutlineNav.init = function () {
        // 提取文档中由[toc]标签生成的文档目录作为浮动outline中的内容
        let toc = $(".md-toc");
        // 没有生成目录
        if (toc.isEmpty()) {
            OutlineNav.hideOnError();
            return false;
        }

        // 有生成目录，则复制 toc 内容
        let vlookToc = toc.clone();
        // 隐藏原目录
        toc.hide();
        // 将复制的目录进行唯一性标识
        vlookToc.find(".md-toc-content").attr("id", "vlook-toc")
        iOutlineNav.body.append(vlookToc);

        // 没有目录内容
        let tocContent = $("#vlook-toc");
        if (tocContent.isEmpty()) {
            OutlineNav.hideOnError();
            return false;
        }

        // 有目录内容
        tocContent.children(".md-toc-h1, .md-toc-h2, .md-toc-h3, .md-toc-h4, .md-toc-h5, .md-toc-h6").each(function () {
            // 只处理 h1-h5，添加为实际的大纲节点
            if ($(this).attr("class").indexOf("md-toc-h6") === -1)
                iOutlineNav.add($(this));
            // 移除 h6
            else
                $(this).remove();
        });

        return true;
    }

    /**
     * 隐藏大纲（异常情况使用）
     */
    OutlineNav.hideOnError = function () {
        iOutlineNav.hide();

        console.error([
            "文档中没有找到目录信息，请用Typora最新版本导出，并应用最新VLOOK插件",
            "文檔中沒有找到目錄信息，請用Typora最新版本導出，並應用最新VLOOK插件",
            "No [TOC] information was found in the document, export it with the latest version of Typora and apply the latest VLOOK plug-in.",
            "Les informations du répertoire ne figurent pas dans la documentation, veuillez les exporter avec la dernière version de Typora et appliquer le dernier plug-in VLOOK.",
            "Информация в каталоге не найдена в документации, пожалуйста, экспортируйте ее с последней версией Typora и примените последний плагин VLOOK",
            "ドキュメントにディレクトリ情報が見つからない場合は、Typoraの最新バージョンでエクスポートし、最新のVLOOKプラグインを適用してください",
            "설명서에 디렉토리 정보가 없으므로 Typora 최신 버전으로 내보내고 최신 VLOOK 플러그인을 적용하십시오."
        ][VLOOK.lang.id]);
    }

    // ==================== 逐章导航类 ==================== //

    /**
     * 构造函数
     *
     * @param outline 关联的大纲对象
     */
    function ChapterNav(outlineNav) {
        this.ui = $(".mdx-chapter-nav"); // 逐章导航面板主界面
        this.prev = {
            ui : $(".mdx-chapter-nav-prev"), // 前一章界面
            text: $(".mdx-chapter-nav-prev-text"), // 前一章文本界面
        };
        this.current = {
            ui : $(".mdx-chapter-nav-current"), // 当前章节界面
        };
        this.next = {
            ui : $(".mdx-chapter-nav-next"), // 后一章界面
            text : $(".mdx-chapter-nav-next-text"), // 后一章文本界面
        };
        this.outlineNav = outlineNav; // 关联的大纲对象

        /**
         * 更新逐章导航栏 UI 及数据
         */
        this.update = function () {
            let currentIndex = this.outlineNav.currentHeaderIndex;

            // ----------------------------------------
            // 更新「上一章」导航内容
            if (currentIndex > 0) {
                this.prev.ui.css("display", "block");
                this.prev.text.text($("a[href='#" + this.outlineNav.headers[currentIndex - 1] + "']").parent().attr("title"));
                this.prev.text.attr({
                    "title": this.prev.text.text(),
                    "data-vk-anchor": this.outlineNav.headers[currentIndex - 1]
                });
            }
            // 当前章节为第1章时特殊处理，设置为「封面」
            else if (currentIndex === 0) {
                this.prev.text.text([
                    "封面",
                    "封面",
                    "Cover",
                    "Couverture",
                    "передняя крышка",
                    "カバー",
                    "표지"
                ][VLOOK.lang.id]);
                this.prev.text.attr({
                    "title": this.prev.text.text(),
                    "data-vk-anchor": "cover"
                });
            }

            // ----------------------------------------
            // 更新「当前章节」导航内容
            if (this.outlineNav.currentItem !== undefined) {
                this.current.ui.text(this.outlineNav.currentItem.attr("title"));
                this.current.ui.attr("data-vk-anchor", this.outlineNav.headers[currentIndex]);
            }

            // ----------------------------------------
            // 更新「下一章」导航内容
            if (currentIndex < this.outlineNav.headers.length - 1) {
                this.next.ui.css("display", "block");
                this.next.text.text($("a[href='#" + this.outlineNav.headers[currentIndex + 1] + "']").parent().attr("title"));
                this.next.text.attr({
                    "title": this.next.text.text(),
                    "data-vk-anchor": this.outlineNav.headers[currentIndex + 1]
                });
            }
            else
                this.next.ui.css("display", "none");
        }

        /**
         * 显示逐章导航栏
         */
        this.show = function () {
            // 若已显示则直接退出
            if (parseInt(this.ui.css("top")) >= 0)
                return;

            this.ui.addClass("mdx-float-card");
            this.ui.css({
                top: 0
            });
        }

        /**
         * 隐藏逐章导航栏
         */
        this.hide = function () {
            // 若已隐藏则直接退出
            if (parseInt(this.ui.css("top")) < 0)
                return;

            this.ui.removeClass("mdx-float-card");
            this.ui.css({
                top: -50
            });
        }

        /**
         * 逐章导航栏自适应显示
         */
        this.adjust = function () {
            // 在封面时，隐藏逐章导航栏
            if (this.outlineNav.withinHeader() === false)
                this.hide();
            // 不在封面时，显示逐章导航栏
            else
                this.show();
        }

        /**
         * 逐章导航导航按钮在不同终端的适配处理
         * 
         * @param flag "mobile": 移动端，"desktop"：桌面端
         */
        this.adjustHoverStyle = function (flag) {
            // 移动设备时解绑样式事件
            if (flag === "mobile") {
                this.prev.ui.unbind("hover");
                this.current.ui.unbind("hover");
                this.next.ui.unbind("hover");
            }
            // 非移动设备时绑定样式事件
            else {
                // 上一章
                this.prev.ui.hover(function () {
                    if (VLOOK.ui.effect >= 1)
                        $(this).addClass("mdx-chapter-nav-prev-effect-hover");
                    else
                        $(this).addClass("mdx-chapter-nav-prev-noeffect-hover");
                }, function () {
                    if (VLOOK.ui.effect >= 1)
                        $(this).removeClass("mdx-chapter-nav-prev-effect-hover");
                    else
                        $(this).removeClass("mdx-chapter-nav-prev-noeffect-hover");
                });
                // 当前章节
                this.current.ui.hover(function () {
                    if (VLOOK.ui.effect >= 1)
                        $(this).addClass("mdx-chapter-nav-current-effect-hover");
                    else
                        $(this).addClass("mdx-chapter-nav-current-noeffect-hover");
                }, function () {
                    if (VLOOK.ui.effect >= 1)
                        $(this).removeClass("mdx-chapter-nav-current-effect-hover");
                    else
                        $(this).removeClass("mdx-chapter-nav-current-noeffect-hover");
                });
                // 下一单
                this.next.ui.hover(function () {
                    if (VLOOK.ui.effect >= 1)
                        $(this).addClass("mdx-chapter-nav-next-effect-hover");
                    else
                        $(this).addClass("mdx-chapter-nav-next-noeffect-hover");
                }, function () {
                    if (VLOOK.ui.effect >= 1)
                        $(this).removeClass("mdx-chapter-nav-next-effect-hover");
                    else
                        $(this).removeClass("mdx-chapter-nav-next-noeffect-hover");
                });
            }
        }
    }

    // ==================== 逐段导航类 ==================== //

    /**
     * 构造函数
     */
    function ParagraphNav() {
        this.count = 0; // 段的总数量
        this.currentIndex = -1; // 当前段索引号
        this.enabled = false; // 是否逐段导航激活

        /**
         * 返回当前段落
         */
        this.current = function () {
            if (this.currentIndex === -1)
                return undefined;
            return $("#v-blockfocus-" + this.currentIndex);
        }

        /**
         * 切换逐段导航开关
         */
        this.toggle = function (target) {
            this.enabled = !this.enabled;
            console.log("enabled", this.enabled);
            if (this.enabled === true) {
                VLOOK.report.push(['ParagraphNav', 'Action', 'Enabled', 0]);
                this.goto(target);
            }
            else
                this.hide();
        }

        /**
         * 添加段落
         */
        this.add = function (item) {
            item.attr("id", "v-blockfocus-" + this.count);
            item.attr("data-vk-blockfocus-idx", this.count);
            this.count++;
        }

        /**
         * 上一个段
         *
         * @param step 跳转的步长
         * @param return 跳转结果，true=成功，false=失败
         */
        this.prev = function (step) {
            if (this.enabled === false)
                return;

            VLOOK.report.push(['ParagraphNav', 'Action', 'Keyboard',0]);

            this.blurFocus();

            // 未到首段
            if (this.currentIndex > 0) {
                this.currentIndex = this.currentIndex - step;

                if (this.currentIndex < 0)
                    this.currentIndex = 0;

                // 如果目标内容块item跳转失败，则再尝试上一个
                if (this.goto() === false)
                    this.prev(1);

                return true;
            }
            return false
        }

        /**
         * 下一个段
         *
         * @param step 跳转的步长
         * @param return 跳转结果，true=成功，false=失败
         */
        this.next = function (step) {
            if (this.enabled === false)
                return;

            VLOOK.report.push(['ParagraphNav', 'Action', 'Keyboard', 0]);

            this.blurFocus();

            // 未到末段
            if (this.currentIndex < this.count - 1) {
                this.currentIndex = this.currentIndex + step;

                if (this.currentIndex > this.count - 1)
                    this.currentIndex = this.currentIndex - 1;

                // 如果目标内容块item跳转失败，则再尝试下一个
                if (this.goto() === false)
                    this.next(1);

                return true;
            }
            return false;
        }

        /**
         * 跳到指定的内容块，或最新的_blockFocusItemIndex指定的内容块
         *
         * @param target 跳转的目标。null: 指定跳到上/下一个位置，非null: 指定的目标位置
         */
        this.goto = function (target) {
            this.blurFocus();

            // 初始化目标段
            let item = (target !== undefined)
                ? target
                : this.current();

            // 若目标聚焦块不可视，则返回跳转失败
            if (item.isHidden())
                return false;

            // 添加高亮样式
            item.addClass("mdx-current-blockfocus-item");
            this.currentIndex = parseInt(item.attr("data-vk-blockfocus-idx"));

            // 显示工具栏新手提示：逐段导航模式
            if (window.localStorage && localStorage["VLOOK-" + VLOOK.version + "-hint-for-green-hand-step-bf"] ===
                undefined) {
                iInfoTips.show([
                        "<strong>已激活逐段导航模式</strong><br>鼠标直接点击内容，或键盘操作：<div style='text-align:left'><kbd>J</kbd> - 下一个<br><kbd>K</kbd> - 上一个<br><kbd>H</kbd> - 往回跳十个<br><kbd>L</kbd> - 往后跳十个<br><kbd>ESC</kbd> - 隐藏聚焦</div>",
                        "<strong>已激活逐段瀏覽模式</strong><br>鼠標點擊內容或鍵盤操作：<div style='text-align:left'><kbd>J</kbd>下一個<br><kbd>K</kbd>上一個<br><kbd>H</kbd>往前跳十個<br><kbd>L</kbd>往後跳十個<br><kbd>ESC</kbd> - 隱藏聚焦</div>",
                        "<strong>Segmented browsing mode activated</strong><br>Mouse click on the content, or keyboard operation:<div style='text-align:left'><kbd>J</kbd> - Next<br><kbd>K</kbd> - Previous<br><kbd>H</kbd> - Jump up ten<br><kbd>L</kbd> - Jump ten<br><kbd>ESC</kbd> - Hide focus</div>",
                        "<strong>Mode de navigation segmenté activé</strong><br>Cliquez sur le contenu ou sur le clavier:<div style='text-align:left'><kbd>J</kbd> - Suivant<br><kbd>K</kbd> - Précédent<br><kbd>H</kbd> - Saut dix en avant<br><kbd>L</kbd> - Saut dix en arrière<br><kbd>ESC</kbd> - Masquer le focus</div>",
                        "<strong>Сегментированный режим просмотра активирован</strong><br>Щелчок мышью по содержимому или операции с клавиатурой:<div style='text-align:left'><kbd>J</kbd> - Далее<br><kbd>K</kbd> - Предыдущий<br><kbd>H</kbd> - Прыгай десять вперед<br><kbd>L</kbd> - прыгай десять назад<br><kbd>ESC</kbd> - Скрыть фокус</div>",
                        "<strong>セグメント化されたブラウジングモードが有効</strong><br>コンテンツをマウスでクリックするかキーボード操作をします。<div style='text-align:left'><kbd>J</kbd> - 次へ<br><kbd>K</kbd> - 前へ<br><kbd>H</kbd> - 10ジャンプします<br><kbd>L</kbd> - 10ジャンプ<br><kbd>ESC</kbd> - フォーカスを隠す</div>",
                        "<strong>분류 된 브라우징 모드 활성화:<div style='text-align:left'><kbd>J</kbd> - 다음<br><kbd>K</kbd> - 이전<br><kbd>H</kbd> - 앞으로 10 칸 이동하십시오<br><kbd>L</kbd> - 점프 10 뒤로<br><kbd>ESC</kbd> - 포커스 숨기기</div>"
                    ][VLOOK.lang.id],
                    20000, false, true);
                localStorage["VLOOK-" + VLOOK.version + "-hint-for-green-hand-step-bf"] = true;
            }

            // 或目标段不在当前窗口显示区域内，则跳转到对应位置
            if (item.offset().top !== 0
                && ((item.offset().top - 50) < $(document).scrollTop()
                || (item.offset().top + 50) > ($(document).scrollTop() + $(window).height()))) {
                // $("html").animate({
                //     scrollTop: item.offset().top - c
                // }, VLOOK.animate.speed);
                $("html").velocity("scroll", {
                    offset: item.offset().top - $(window).height() / 2,
                    duration: VLOOK.animate.speed
                });
            }

            return true; // 返回跳转成功
        }

        /**
         * 让当前聚焦段其失去聚焦效果
         */
        this.blurFocus = function () {
            if (this.current() !== undefined)
                this.current().removeClass("mdx-current-blockfocus-item");
        }

        /**
         * 隐藏当前段落的高亮样式
         */
        this.hide = function () {
            this.enabled = false;
            this.blurFocus();
        }
    }

    /**
     * 初始化逐段导航模式
     */
    ParagraphNav.init = function() {
        iParagraphNav = new ParagraphNav();

        // 先清理多余的段落标签
        $("li > p:only-child").contents().unwrap();

        // 初始化
        $("h1, h2, h3, h4, h5, h6, ul > li, ol > li, p[class!=md-toc-content][class!=mdx-figure-caption-1][class!=mdx-figure-caption-2], figure, .md-diagram-panel, .MathJax_SVG_Display").each(function () {
            let item = $(this);
            // 跳过子元素有嵌套p的情况，如li > p
            if (item.children("p").length === 0) {
                iParagraphNav.add(item);

                // 双击内容块激活/关闭逐段导航模式模式
                item.dblclick(function () {
                    iParagraphNav.toggle(item);
                });

                // 单击内容块处理
                item.unbind("click").click(function () {
                    // 未激活逐段导航模式模式
                    if (iParagraphNav.enabled === false)
                        return;

                    VLOOK.report.push(['ParagraphNav', 'Action', 'Mouse', 0]);

                    // 当前内容块内表格已显示十字光柱
                    if (ExtTable.withCross($(this)) === false) {
                        ExtTable.hideCellCross(false);
                        iParagraphNav.goto(item);
                        event.stopPropagation(); // 停止事件冒泡
                    }
                });
            } // if
        });
    }

    // ==================== 工具栏类 ==================== //

    /**
     * 构造函数
     *
     * @param outlineNav 大纲导航对象
     * @param chapterNav 章节导航对象
     */
    function Toolbar(outlineNav, chapterNav) {
        this.ui = $(".mdx-toolbar"); // 工具栏主界面
        this.buttons = {}; // 工具栏按钮集
        this.outlineNav = outlineNav;
        this.chapterNav = chapterNav;

        /**
         * 添加按钮
         *
         * @param name 按钮标识
         * @param button 按钮对象
         */
        this.add = function (name, button) {
            this.buttons[name] = button;
        }

        /**
         * 自适应显示工具栏
         */
        this.adjust = function () {
            // 移动端下隐藏不必要的功能入口
            if (env.device.mobile === true) {
                this.buttons["spotlight"].hide();
                this.buttons["print"].hide();
            }

            // 如果是小屏，或在封面
            if (VLOOK.ui.isSmallScreen() || this.outlineNav.withinHeader() === false) {
                this.ui.children("div").addClass("mdx-float-card");

                // 小屏
                if (VLOOK.ui.isSmallScreen()) {
                    this.ui.css({
                        top: 50
                    });
                }

                // 调整工具栏样式
                this.ui.removeClass("mdx-backdrop-blurs");
                this.ui.removeClass("mdx-float-card");
                this.ui.css({
                    width: $(window).width() - 20,
                    background: "none"
                });

                // 为去掉工具栏背景的按钮添加浮动样式
                this.ui.children(".mdx-btn").addClass("mdx-btn-float");

                // 大屏，回到封面及最开始位置后进行二次调整
                if (VLOOK.ui.isSmallScreen() === false
                    && this.outlineNav.withinHeader() === false
                    && $(document).scrollTop() === 0) {
                        this.ui.css({
                        top: 10
                    });
                }else {
                    // 小屏，在非封面位置进行二次调整
                    if (VLOOK.ui.isSmallScreen() && this.outlineNav.withinHeader())
                        this.ui.css({
                            top: 50
                        });
                    else {
                        // 小屏，在封面及最开始后位置进行二次调整
                        if ($(document).scrollTop() === 0)
                            this.ui.css({
                                top: 10
                            });
                        // 小屏，在封面位置进行二次调整
                        else
                            this.ui.css({
                                top: 0
                            });
                    }
                }
            }
            // 宽屏，且不在封面
            else {
                if (this.ui.offset().top !== 0) {
                    this.ui.css({
                        width: "var(--vlook-toc-box-width)",
                        backgroundColor: this.chapterNav.ui.css("background-color")
                    });
                    this.ui.children("div").removeClass("mdx-float-card");
                    this.ui.addClass("mdx-backdrop-blurs");
                    this.ui.addClass("mdx-float-card");
                    this.ui.css({
                        top: 0
                    });

                    // 为增加了工具栏按钮的背景去掉浮动样式
                    this.ui.children(".mdx-btn").removeClass("mdx-btn-float");
                }
            }
        }
    }

    // ==================== 颜色方案类 ==================== //

    /**
     * 构造函数
     */
    function ColorScheme(button) {}

    ColorScheme.scheme = "light"; // 当前颜色以方案，light/dark
    ColorScheme.schemeBeforePrint = "light"; // 打印前的颜色方案

    /**
     * 切换颜色方案
     *
     * @param callback 切换颜色方案后回调该函数
     */
    ColorScheme.toggle = function () {
        VLOOK.report.push(['Style', 'ColorScheme', '', 0]);

        ColorScheme.scheme = (ColorScheme.scheme === "light") ? "dark" : "light";
        console.info("... Switching to [ " + ColorScheme.scheme + " ]");

        let preHtml = "<div style='display: table-cell; vertical-align: middle;'>",
            subHtml = "</div>";
        if (ColorScheme.scheme === "dark") {
            iInfoTips.show(preHtml + [
                "正在切换为：<br><span style='font-weight: bold; font-size: 1.5em;'>黑暗模式</span>",
                "正在切換為：<br/><span style='font-weight: bold; font-size: 1.5em;'>黑暗模式</span>",
                "Switching to: <br/><span style='font-weight: bold; font-size: 1.5em;'>Dark Mode</span>",
                "Passer à:<br/><span style='font-weight: bold; font-size: 1.5em;'>Mode Sombre</span>",
                "Переключение на:<br/><span style='font-weight: bold; font-size: 1.5em;'>Темный режим</span>",
                "切り替え先：<br/><span style='font-weight: bold; font-size: 1.5em;'>ダークモード</span>",
                "로 전환 :<br/><span style='font-weight: bold; font-size: 1.5em;'>다크 모드</span>"
            ][VLOOK.lang.id] + subHtml, 800, true, false);
        }else {
            iInfoTips.show(preHtml + [
                "正在切换为：<br/><span style='font-weight: bold; font-size: 1.5em;'>明亮模式</span>",
                "正在切換為：<br/><span style='font-weight: bold; font-size: 1.5em;'>明亮模式</span>",
                "Switching to: <br/><span style='font-weight: bold; font-size: 1.5em;'>Light Mode</span>",
                "Passer à: <br/><span style='font-weight: bold; font-size: 1.5em;'>Mode lumière</span>",
                "Переключение на: <br/><span style='font-weight: bold; font-size: 1.5em;'>Легкий режим</span>",
                "切り替え先：<br/><span style='font-weight: bold; font-size: 1.5em;'>ライトモード</span>",
                "로 전환 : <br/><span style='font-weight: bold; font-size: 1.5em;'>라이트 모드</span>"
            ][VLOOK.lang.id] + subHtml, 800, true, false);
        }

        // 延时再开始，以便让UI先完成更新
        setTimeout(function () {
            ColorScheme.apply();
        }, 500);

        // ColorScheme.afterToggle();
    }

    /**
     * 根据浏览器当前的颜色方案调整文档配色
     */
    ColorScheme.apply = function () {
        _lastTimer = new Date().getTime();

        // 对 mermaid 进行颜色方案适配
        ColorScheme.updateFigure();

        const varList = [
            "--vlook-invert-in-dark",
            "--doc-bg-color",
            "--doc-bg-color-alt",
            "--doc-bg-color-transparent",
            "--doc-bg-color-alt-transparent",
            "--fore-color",
            "--shadow-color",
            "--a-color",
            "--footer-note-bg-color",
            "--table-border-color",
            "--table-th-bg-color",
            "--table-th-border-color",
            // "--img-dark-filter",
            "--del-color",
            "--toc-header-num-color",
            "--header-color",
            "--header-box-shadow",
            "--header-bg-start-color",
            "--header-bg-end-color",
            "--code-bg-color",
            // "--code-bg-color-transparent",
            "--code-name-bg-color",
            "--code-name-shadow-color",
            "--tips-bg-color-inset",
            "--tips-bg-color",
            "--accent-color1",
            "--accent-color2",
            "--accent-color3",
            "--accent-color4",
            "--accent-color5",
            "--accent-color6",
            "--mermaid-accent-color1",
            "--mermaid-accent-color1-alt",
            "--mermaid-accent-color2",
            "--mermaid-accent-color2-alt",
            "--mermaid-accent-color3",
            "--mermaid-accent-color3-alt",
            "--mermaid-accent-color4",
            "--mermaid-accent-color4-alt",
            "--mermaid-accent-color5",
            "--mermaid-accent-color5-alt",
            "--mermaid-accent-color6",
            "--mermaid-accent-color6-alt",
            "--cm-keyword",
            "--cm-variable",
            "--cm-variable-2",
            "--cm-variable-3",
            "--cm-tag",
            "--cm-attribute",
            "--cm-CodeMirror-cursor",
            "--cm-string",
            "--cm-string-2",
            "--cm-comment",
            "--cm-header",
            "--cm-quote",
            "--cm-hr",
            "--cm-link",
            "--cm-negative",
            "--cm-positive",
            "--cm-meta",
            "--cm-bulidin",
            "--cm-bracket",
            "--cm-atom",
            "--cm-number"
        ];

        ColorScheme.updateUI();

        // 针对 Dark 模式进行图片反色适配处理
        ExtFigure.adjustImageInverInDarkMode();

        // 遍历所有变量实现ColorScheme切换
        for (let i = 0, len = varList.length; i < len; i++) {
            document.documentElement.style.setProperty(varList[i],
                getComputedStyle(document.documentElement).getPropertyValue(
                    varList[i] + "-" + ColorScheme.scheme));
        }

        iInfoTips.hide();

        console.info("    [ " + ((new Date().getTime() - _lastTimer) / 1000) + "s ]");
    }

    /**
     * 针对插图进行处理
     */
        ColorScheme.updateFigure = function () {
        let target = $(".mdx-figure, .mdx-figure-content svg");
        if (ColorScheme.scheme === "dark") {
            target.removeClass("mdx-figure-bg-light");
            target.addClass("mdx-figure-bg-dark");
        }
        else {
            target.removeClass("mdx-figure-bg-dark");
            target.addClass("mdx-figure-bg-light");
        }
    }

    /**
     * 更新颜色方案UI
     */
    ColorScheme.updateUI = function () {
        if (ColorScheme.scheme === "dark") {
            // 调整模式切换按钮图标
            iToolbar.buttons["color-scheme"].html(
                "<svg width='18px' height='18px'><use xlink:href='#icoDarkMode' class='mdx-button-ico-light'/></svg>"
            );
        }else {
            // 调整模式切换按钮图标
            iToolbar.buttons["color-scheme"].html(
                "<svg width='20px' height='20px'><use xlink:href='#icoLightMode' class='mdx-button-ico-light'/></svg>"
            );
        }
    }

    /**
     * 根据颜色方案对浏览器兼容性处理
     */
    ColorScheme.afterToggle = function () {
        $(".mdx-copyright").children("svg").html("<use xlink:href='#icoVLOOK-" + ColorScheme.scheme + "'></use>");

        if (ColorScheme.scheme === "dark") {
            // 因需针对不同颜色方案在不同浏览器的处理，所以不能直接通过 CSS 的 @supports ((backdrop-filter: blur(15px)) 来实现
            // 支持毛玻璃 backdrop-filter: blur() 的浏览器
            // if (env.browser.Chrome || env.browser.Safari) {
            // iMask.css({
            //     "background-color": "rgba(0, 0, 0, 0.3)"
            // });
            // iFigureViewer.css({
            //     "background-color": "rgba(0, 0, 0, 0.3)"
            // });
            // }
            // else { // 不支持
            // ColorScheme.mask.ui.css("background-color", "rgba(0, 0, 0, 0.9)");
            iOutlineNav.mask.ui.css("background-color", "rgba(0, 0, 0, 0.9)");
            iFigureViewer.ui.css("background-color", "rgba(0, 0, 0, 0.9)");
            // }
        }
        else {
            // 支持毛玻璃 backdrop-filter: blur() 的浏览器
            // if (env.browser.Chrome || env.browser.Safari) {
            // iMask.css({
            //     "background-color": "rgba(255, 255, 255, 0.3)"
            // });
            // iFigureViewer.css({
            //     "background-color": "rgba(255, 255, 255, 0.3)"
            // });
            // }
            // else { // 不支持
            // ColorScheme.mask.ui.css("background-color", "rgba(255, 255, 255, 0.9)");
            iOutlineNav.mask.ui.css("background-color", "rgba(0, 0, 0, 0.8)");
            iFigureViewer.ui.css("background-color", "rgba(0, 0, 0, 0.8)");
            // }
        }

        // 对 mermaid 进行颜色方案适配
        // adjustColorSchemeForMermaid();
    }

    // ==================== 字体风格类 ==================== //

    /**
     * 构造函数
     *
     * @param button 绑定的工具栏按钮
     * @param mask 遮罩对象
     */
    function FontStyler(button, mask) {
        this.button = button; // 绑定的工具栏按钮
        this.style = undefined; // 当前字体风格，sans：非衬线，serif：衬线
        this.mask = mask; // 遮罩
        this.mask.bindPartner(this);

        /**
         * 切换字体风格
         */
        this.toggle = function () {
            const fontInfo = "<br/>──<br/><span style='font-size: 0.8em'>" + [
                    "VLOOK 优先显示开源的思源黑体和思源宋体<br/>建议下载安装获得更好的视觉体验",
                    "VLOOK 優先顯示開源的思源黑體和思源宋體<br/>建議用戶下載安裝獲得更好的視覺體驗",
                    "VLOOK gives priority to the Noto Sans and Noto Serif<br/>suggesting to download and install for a better visual experience",
                    "VLOOK donne la priorité à Noto Sans et Noto Serif,<br/>suggérant de télécharger et d'installer pour une meilleure expérience visuelle",
                    "VLOOKUP отдает приоритет Noto Sans и Noto Serif,<br/>предлагая загрузить и установить для лучшего визуального восприятия",
                    "VLOOK は、Noto SansとNoto Serifを優先し<br/>より良い視覚的経験のためにダウンロードしてインストールすることを提案します",
                    "VLOOK 은 노토 산 (Noto Sans)과 노토 세리프 (Noto Serif)를<br/>우선시하여 더 나은 시각적 경험을 위해 다운로드하여 설치하도록 제안합니다"
                ][VLOOK.lang.id] +
                "</span><br/><a href='https://github.com/MadMaxChow/VLOOK/blob/master/FONT.md' target='_blank'>" + [
                    "下载",
                    "下載",
                    "Download",
                    "Télécharger",
                    "скачать",
                    "ダウンロード",
                    "다운로드"
                ][VLOOK.lang.id] + "</a>";

            if (this.style === "serif") {
                iInfoTips.show([
                    "切换至「<strong>非衬线 Sans-serif</strong>」字体",
                    "切換至「<strong>非襯線 Sans-serif</strong>」字體",
                    "Switch to \"<strong>Sans-serif</strong>\" Font",
                    "Basculer vers \"<strong>Sans-serif</strong>\" Fuente",
                    "Переключиться на шрифт \"<strong>Sans-serif</strong>\"",
                    "に切り替える「<strong>Sans-serif</strong>」フォント",
                    "전환「<strong>Sans-serif</strong>」글꼴"
                ][VLOOK.lang.id] + fontInfo, 10000, false, true);
                this.apply("sans");
            }else {
                iInfoTips.show([
                    "切换至 「<strong>衬线 Serif</strong>」字体",
                    "切換至「<strong>襯線 Serif</strong>」字體",
                    "Switch to \"<strong>Serif</strong>\" Font",
                    "Basculer vers \"<strong>Serif</strong> Police\"",
                    "Переключиться на шрифт \"<strong>Serif</strong>\"",
                    "に切り替える「<strong>Serif</strong>」フォント",
                    "전환「<strong>Serif</strong>」폰트"
                ][VLOOK.lang.id] + fontInfo, 10000, false, true);
                this.apply("serif");
            }
        }

        /**
         * 应用指定字体风格
         *
         * @param style 指定应用的字体风格（sans/serif），不指定则以为当前字体风格
         */
        this.apply = function (style) {
            // 修正无指定样式的情况
            if (style === undefined)
                style = this.style;

            VLOOK.report.push(['Style', 'FontStyle', style, 0]);

            // 需要进行字体风格应用的分类与范围
            const text = "body, .mdx-load-screen-tips, .noteText tspan",
            // const text = "body, .mdx-load-screen-tips, text[text-anchor=\"start\"] > tspan, .edgeLabel .label span, .messageText, .noteText tspan, .MathJax_SVG g text",
                title = "#write > h6:first-of-type, #write > h6:last-of-type",
                tag = ".mdx-tag-c1, .mdx-tag-c2, .mdx-tag-c3, .mdx-tag-c4, .mdx-tag-c5, .mdx-tag-c6, .mdx-tag-name1, .mdx-tag-name2, .mdx-tag-name3, .mdx-tag-name4, .mdx-tag-name5, .mdx-tag-name6, .mdx-tag-value1-alt, .mdx-tag-value2-alt, .mdx-tag-value3-alt, .mdx-tag-value4-alt, .mdx-tag-value5-alt, .mdx-tag-value6-alt, .mdx-tag-value1, .mdx-tag-value2, .mdx-tag-value3, .mdx-tag-value4, .mdx-tag-value5, .mdx-tag-value6",
                header = "h1, h2, h3, h4, h5, h6",
                bold = "strong, #write > h6:first-of-type strong, #write > h6:first-of-type em, table tr th, .mdx-table-column-format-bold, .mdx-toc-panel-title, .mdx-toc-panel-header, .mdx-btn-load-screen, .mdx-tool-tips, .mdx-info-tips, .mdx-toc-panel-header, .mdx-chapter-nav-current, .mdx-chapter-nav-prev-text, .mdx-chapter-nav-next-text, .mdx-toc-panel-title, .mdx-figure-caption > p, rect + text[text-anchor=\"middle\"] > tspan, rect + rect + text[text-anchor=\"middle\"] > tspan, .outline-item, a[name^=\"ref-footnote-\"], .md-toc-item, .md-fn-count, .mdx-toc-panel-footer, mdx-copyright, .label div, .cluster text, text.actor, .labelText tspan, .loopText tspan, g.state-note text > tspan, g.stateGroup .state-title, g.stateGroup text",
                code = "code, tt, .md-fences, kbd";

            // 移除当前的字体风格
            $(code).removeClass("mdx-font-code-" + this.style);
            $(tag).removeClass("mdx-font-code-" + this.style);
            $(tag).removeClass("mdx-font-bold-" + this.style);
            $(text).removeClass("mdx-font-text-" + this.style);
            $(header).removeClass("mdx-font-header-" + this.style);
            $(title).removeClass("mdx-font-title-" + this.style);
            $(bold).removeClass("mdx-font-bold-" + this.style);

            // 更新当前字体风格
            this.style = style;
            $(code).addClass("mdx-font-code-" + style);
            $(tag).removeClass("mdx-font-code-" + style); // 针对 code.addClass 后的调整
            $(tag).addClass("mdx-font-bold-" + style);
            $(text).addClass("mdx-font-text-" + style);
            $(header).addClass("mdx-font-header-" + style);
            $(title).addClass("mdx-font-title-" + style);
            $(bold).addClass("mdx-font-bold-" + style);

            // 更新绑定的按钮图标
            this.button.html("<svg width='18px' height='16px'><use xlink:href='#icoFont-"
                + this.style
                + "' class='mdx-button-ico-light'/></svg>");

            // 保存最后一次应用的字体风格
            localStorage["VLOOK-" + VLOOK.version + "-font-style"] = iFontStyler.style;
        }
    }

    // ==================== 脚注类 ==================== //

    /**
     * 构造函数
     *
     * @param mask 遮罩对象
     */
    function FootNote(mask) {
        this.ui = $(".mdx-footer-note-panel"); // 脚注主界面
        this.content = $(".mdx-footer-note-panel-content"); // 脚注内容区

        this.buttonSeeAll = $(".mdx-footer-note-panel-all"); // 查看所有脚注按钮
        let that = this;
        this.buttonSeeAll.unbind("click").click(function () {
            that.hide();
            // 跳转至所有脚注区域
            window.location.href = "#xFooterArea";
        });

        this.mask = mask; // 遮罩
        this.mask.bindPartner(this);

        /**
         * 显示脚注弹层
         */
        this.show = function () {
            // 显示关联的遮罩
            this.mask.show();
            // showMask(iFootNote, hideFootNote);

            if (VLOOK.ui.isSmallScreen())
                this.ui.css({
                    left: 20,
                    right: 20
                });
            else
                this.ui.css({
                    left: "15%",
                    right: "15%"
                });

            // 动画式显示
            if (VLOOK.ui.effect >= 2) {
                this.ui.show();
                this.ui.velocity({
                    bottom: 80 //+ VLOOK.animate.friction
                }, {
                    easing: [VLOOK.animate.tension, VLOOK.animate.friction],
                    duration: VLOOK.animate.speed
                });
            }
            else {
                this.ui.show();
                this.ui.css({
                    bottom: 90
                });
            }
        }

        /**
         * 隐藏脚注弹层
         */
        this.hide = function () {
            // 动画式显示
            if (VLOOK.ui.effect >= 2) {
                let that = this;
                this.ui.velocity({
                    bottom: -this.ui.height()
                }, {
                    // easing: [VLOOK.animate.tension, VLOOK.animate.friction],
                    duration: VLOOK.animate.speed
                }, function () {
                    that.ui.hide();
                });
            }
            else {
                this.ui.css({
                    bottom: -this.ui.height()
                });
                this.ui.hide();
            }

            this.mask.hide();
        }
    }

    /**
     * 初始化脚注
     */
    FootNote.init = function () {
        // 将脚注调整到封底前，VLOOK 规范的文档中最后一个 <h6> 是封底
        let footnotesArea = $(".footnotes-area");
        footnotesArea.insertBefore($("#write").children("h6:last"));

        // 移除默认的跳转属性
        let a = $("a[name^='ref-footnote-']");
        a.removeAttr("href");

        // 将脚注角标的事件替换为指定的处理事件
        a.unbind("click").click(function () {
            let target = $("a[name='df" + $(this).attr("name") + "']").parent().clone();

            // 更新脚注弹层内容区
            iFootNote.content.html(target);
            // 移除默认的返回链接
            target.find("a[name^='dfref-footnote']")[0].remove();

            // 显示脚注弹层
            iFootNote.show();
        });

        // 将脚注区锚点调整到生成HTML后的实际位置
        $("a[name='xFooterArea']").insertBefore(footnotesArea);
    }

    // ==================== 背景遮罩类 ==================== //

    /**
     * 构造函数
     */
    function BackgroundMask() {
        this.ui = $(".mdx-mask");
        this.partner = undefined;

        /**
         * 绑定联动对象
         *
         * @param partner 联动对象
         */
        this.bindPartner = function (partner) {
            this.partner = partner;
        }

        /**
         * 显示遮罩
         */
        this.show = function (callback) {
            // 冻结滚动
            VLOOK.doc.scroll.freeze();

            // 总是在 target 下显示
            this.ui.css("z-index", this.partner.ui.css("z-index") - 1);
            // 点击遮罩隐藏联动对象
            let that = this;
            this.ui.unbind("click").click(function () {
                // 取消冻结滚动
                VLOOK.doc.scroll.unfreeze();
                // 隐藏联动对应
                that.partner.hide();

                // 动画式显示
                if (VLOOK.ui.effect >= 2)
                    $(this).velocity("fadeOut", {
                        duration: VLOOK.animate.speed
                    });
                else
                    $(this).hide();
            });

            // 动画式显示
            if (VLOOK.ui.effect >= 2)
                this.ui.velocity("fadeIn", {
                    duration: VLOOK.animate.speed
                });
            else
                this.ui.show();
        }

        /**
         * 隐藏遮罩
         */
        this.hide = function () {
            // 取消冻结滚动
            VLOOK.doc.scroll.unfreeze();

            // 动画式显示
            if (VLOOK.ui.effect >= 2)
                this.ui.velocity("fadeOut", {
                    duration: VLOOK.animate.speed
                });
            else
                this.ui.hide();
        }
    }

    // ==================== 长内容折叠类 ==================== //

    function ContentFolding() {
        this.ui = $(".mdx-content-expander"); // 展开操作区的 UI 模板
        this.limit = VLOOK.debugMode ? 300 : 800; // 内容须折叠的高度限值
        this.contents = []; // 须进行折叠判断和处理的内容集
        this.buildTimers = [];

        /**
         * 添加内容
         */
        this.add = function (content) {
            this.contents.push(content);
        }

        /**
         * 适配内容展开操作区
         */
            this.adjust = function () {
            // 提前中断未完成的处理
            if (this.buildTimers.length > 0) {
                for (let i = 0, len = this.buildTimers.length; i < len; i++)
                    clearTimeout(this.buildTimers.shift());
            }
            // 重新开始构建内容展开操作区
            this.rebuild();
        }

        /**
         * 重建部分内容展开操作区，主要是 img, table, .md-fences 等会因大纲面板的显示/关闭
         * 导致文档宽度变化而引起的内容高度也跟随变化的情况
         * 如在不显示大纲时因宽度较变，高度等比变高，或高度反而变短
         * 会导致应该显示展开操作区即不显示，或不应显示却显示的情况
         */
        this.rebuild = function () {
            // 重建需要重建的部分
            let that = this;
            for (let i = 0, len = this.contents.length; i < len; i++) {
                // img 类长内容
                if (this.contents[i].prop("tagName").toLowerCase() === "img") {
                    // 创建一个Image对象，实现图片的预下载
                    var img = new Image();
                    img.src = this.contents[i].attr("src");
                    // 如果图片已经存在于浏览器缓存，直接处理
                    if (img.complete)
                        this.buildTimers.push(
                            setTimeout(function () {
                                that.checkAndProcess(that.contents[i], true);
                            }, i * 100)
                        );
                    // 等待图片下载完成后再处理
                    else
                        img.onload = function () {
                            VLOOK.debug("img [" + img.src + "] loaded");
                            that.checkAndProcess(that.contents[i], true);
                        }
                }
                // 非 img 类长内容
                else {
                    // 设置按不同时间间隔执行，减少在处理数量过多时，会阻塞 UI
                    this.buildTimers.push(
                        setTimeout(function () {
                            that.checkAndProcess(that.contents[i], true);
                        }, i * 100)
                    );
                }
            }
        }

        /**
         * 检测内容是否过长，过长则进行处理。适用于「插图、表格、代码块」等
         *
         * @param target 折叠的目标对象
         * @param rebuild 本次折叠是否属于重建的（如在页面加载后，由于页面正文区宽度变化后调用时属于重建）
         */
        this.checkAndProcess = function (target, rebuild) {
            // 若为在新标签打开的，则忽略
            if (VLOOK.doc.newTab === true) {
                this.buildTimers.shift();
                console.log(this.buildTimers.length);
                return;
            }

            let container = target.parent(),
                tagName = target.prop("tagName").toLowerCase();

            // 重建时已生成题注，所以实际容器对象与初始化时第一次构建会不同
            if (rebuild === true)
                container = container.parent();

            // 获得上一轮构建时生成的展开操作区，没有则初始为 undefined
            let oldExpander = container.next(),
                className = oldExpander.attr("class");
            if (oldExpander !== undefined) {
                if (className === undefined
                    || className.indexOf("mdx-content-expander") === -1)
                    oldExpander = undefined;
            }

            // 已被点击展开过了，在重建时则跳过
            if (container.attr("data-vk-expanded") === "true"
                && container.attr("data-vk-before-print-folded") !== "true") {
                this.buildTimers.shift();
                console.log(this.buildTimers.length);
                return;
            }

            // 针对 img 内容，进行父容器的正确性处理
            if (tagName === "img") {
                // 图像若加载晚于 img 的题注生成，其父容器则题注而不是 VLOOK 标记的 img 父容器
                if (container.attr("data-vk-container") === undefined)
                    container = container.parent();
            }

            // 初始化折叠配置
            container.attr("data-vk-folded", "false"); // 未折叠
            container.attr("data-vk-expanded", "false"); // 已被点击扩展了
            container.css("height", "auto");

            let tHeight = parseInt(target.css("height"));
            // 高度超出折叠要求高度时进行折叠
            if (tHeight > this.limit) {
                // 构建内容展开操作区
                this.buildContentExpander(target, container, tagName, tHeight, oldExpander);
            }
            // 高度没有超出折叠要求
            else {
                // 若之前须折叠，目前不需要折叠，则清除对应的展开操作区
                if (oldExpander !== undefined && className !== undefined
                    && className.indexOf("mdx-content-expander") > -1)
                        oldExpander.remove();
            }

            this.buildTimers.shift();
        }

        /**
         * 构建内容展开操作区
         *
         * @param target 为目标对象创建展开操作区（如 table）
         * @param container 指定对象所属的容器（如 table 的容器为父元素 figure）
         * @param tagName target 的 HTML 标签名
         * @param tHeight target 的高度
         * @param oldExpander 上一轮重建前的展开操作区（没有则为 undefined）
         */
        this.buildContentExpander = function (target, container, tagName, tHeight, oldExpander) {
            // 设置为已折叠
            container.attr("data-vk-folded", "true");

            // 表格或 mermaid 图表的特性处理
            if (tagName === "table" || tagName === "svg") {
                container.css({
                    "height": this.limit,
                    "overflow-x": "auto", // 可横向滚动
                    "overflow-y": "hidden"
                });
            }
            // 非表格，非mermaid 图表的处理
            else {
                container.css({
                    "height": this.limit,
                    "overflow": "hidden"
                });
            }

            let expander = undefined,
                rowNumFilter = "table tr > th:first-child, table tr > td:first-child, table tbody tr > td:first-child",
                w = parseInt(container.css("width"));

            // 上一轮构建时没有生成展开操作区，则生成一个新的
            if (oldExpander === undefined) {
                expander = iContentFolding.ui.clone();
                container.after(expander);
            }
            // 直接复用上一轮构建时生成的展开操作区
            else
                expander = oldExpander;

            // 如果处理对象为表格，先隐藏表格行号，find 过滤器的内容与对应的 css 要同步更新
            if (container.find("table").length > 0)
                container.find(rowNumFilter).addClass("mdx-table-row-num-hidden");

            // 动态生成按钮文本内容
            let btn = expander.find("div > span");
            btn.html(btn.attr("title") + " <span style='font-weight: normal;'>"
                + parseInt((1 - this.limit / tHeight) * 100) + "%</span>");

            // 重新适配展开操作区尺寸
            if (w > parseInt(target.css("width"))) {
                w = target.css("width");
                // 表格、mermarid 插图与比容器宽度小时，右下角不是圆角，须进行适配调整
                expander.css({
                    "border-bottom-right-radius": 0
                });
            }
            expander.attr("data-vk-content-type", tagName);
            expander.css({
                "margin-left": container.css("margin-left"),
                "width": w
            });
            // 设置为可视
            expander.css("visibility", "visible");

            // 展开按钮 click 事件处理
            expander.children(".mdx-btn").unbind("click").click(function () {
                VLOOK.report.push(['Interactive', VLOOK.report.transTagName(tagName), 'ExpandLongContent', 0]);

                let expander = $(this).parent(),
                    container = expander.prev();

                // 移除内容展开操作区
                expander.remove();

                // 展开对应的内容
                container.attr("data-vk-folded", "false");
                container.attr("data-vk-expanded", "true");
                container.css({
                    "height": "auto"
                });
                // 针对表格、mermaid 图表增加滚动属性
                if (tagName === "svg" || tagName === "table")
                    container.css({
                        "overflow": "auto"
                    });

                // 如果处理对象为表格，恢复显示表格行号，find 过滤器的的内容与对应的 css 要同步更新
                if (container.find("table").length > 0)
                    container.find(rowNumFilter).removeClass("mdx-table-row-num-hidden");
            });
            // 展开按钮 hover 事件处理
            expander.children(".mdx-btn").hover(function () {
                $(this).addClass("mdx-btn-hover");
            }, function () {
                $(this).removeClass("mdx-btn-hover");
            });
        }
    }

    // ==================== 工具提示信息类 ==================== //

    /**
     * 构造函数
     */
    function ToolTips() {
        this.ui = $(".mdx-tool-tips");

        /**
        * 显示工具提示信息
        *
        * @param follow 提示的目标元素
        * @param align 强制指定工具提示的水平对齐方式（auto/left/center/right）
        */
        this.show = function (follow, align) {
            if (env.device.mobile === true)
                return;

            clearTimeout(VLOOK.animate.tipsTimer);

            this.hide();
            // hideToolTips();
            this.ui.html(follow.attr("data-vk-tips"));

            const fp = follow.parent();
            const ow = this.ui.width();
            const ww = $(window).width();
            const gap = 30;
            let left = follow.offset().left;
            this.ui.css({
                "border-top-left-radius": "0",
                "border-top-right-radius": "15px"
            });

            // 指定对齐方式或提示超出屏幕
            if (align != "auto" || (left + ow + gap) > ww) {
                // align: right
                this.ui.css({
                    "border-top-left-radius": "15px",
                    "border-top-right-radius": "0"
                });
                left = follow.offset().left - ow + follow.width() - gap;

                // align: center
                if (align === "center") {
                    left = follow.offset().left + (follow.width() - ow) / 2 - gap / 2;
                    this.ui.css({
                        "border-top-left-radius": "15px",
                        "border-top-right-radius": "15px"
                    });
                }
            }

            this.ui.css({
                "left": left,
                "top": fp.offset().top - $(document).scrollTop() + fp.height() +
                    (fp.css("background-color") === "rgba(0, 0, 0, 0)" ? 0 : 10)
            });

            let that = this;
            VLOOK.animate.tipsTimer = setTimeout(function () {
                // alert(VLOOK.ui.effect);
                if (VLOOK.ui.effect >= 2)
                    that.ui.velocity("fadeIn", {
                        duration: VLOOK.animate.speed
                    });
                else
                    that.ui.show();
            }, 1000);
        }

        /**
         * 隐藏工具提示
         */
        this.hide = function () {
            VLOOK.doc.scroll.unfreeze();
            clearTimeout(VLOOK.animate.tipsTimer);
            this.ui.hide();
        }
    }

    // ==================== 弹层提示信息类 ==================== //

    /**
     * 构造函数
     *
     * @param mask 遮罩对象
     */
    function InfoTips(mask) {
        this.ui = $(".mdx-info-tips");
        let that = this;
        this.ui.unbind("click").click = function () {
            that.hide();
        }

        this.mask = mask; // 遮罩
        this.mask.bindPartner(this);

        /**
        * 显示通知提示信息
        *
        * @param message 提示内容
        * @param delay 延时指定 ms 时间后自动关闭提示
        * @param fullscreen 是否为全屏显示
        * @param mask 是否显示遮罩
        */
        this.show = function (message, delay, fullscreen, mask) {
            clearTimeout(VLOOK.animate.tipsTimer);

            this.ui.html(message);
            // 先重置为默认值
            this.ui.css({
                width: "",
                height: "",
                right: "auto",
                bottom: "auto",
                borderRadius: 15
            });

            // 全屏显示
            if (fullscreen === true) {
                this.ui.css({
                    display: "table", // 配合子元素的 display: table-cell 实现内容的垂直居中
                    width: "100%",
                    height: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 0
                });
            }
            // 非全屏显示
            else {
                if (env.device.mobile) {
                    this.ui.css({
                        left: 10,
                        right: 10,
                        top: ($(window).height() - this.ui.height()) / 2
                    });
                }else {
                    this.ui.css({
                        left: ($(window).width() - this.ui.width()) / 2,
                        right: "auto",
                        top: ($(window).height() - this.ui.height()) / 2
                    });
                }
            }

            // 动画式显示
            let that = this;
            if (VLOOK.ui.effect >= 2) {
                this.ui.velocity("fadeIn", {
                    duration: VLOOK.animate.speed
                    }, function () {
                        if (delay != null) // 延时后自动关闭
                            VLOOK.animate.tipsTimer = setTimeout(function () {
                                that.hide();
                            }, delay);
                });
            }
            else {
                this.ui.show();
                if (delay != null) // 延时后自动关闭
                    VLOOK.animate.tipsTimer = setTimeout(function () {
                        that.hide();
                    }, delay);
            }

            // 冻结滚动
            VLOOK.doc.scroll.freeze();

            // 显示遮罩
            if (mask === true)
                this.mask.show();
        }

        /**
         * 隐藏弹窗信息
         */
        this.hide = function () {
            // 动画式显示
            if (VLOOK.ui.effect >= 2)
                this.ui.velocity("fadeOut", {
                    duration: VLOOK.animate.speed
                });
            else
                this.ui.hide();

            this.mask.hide();
        }
    }

    // ==================== 题注生成器类 ==================== //

    function CaptionGenerator() {}

    /**
     * 生成题注
     *
     * @param target 需要添加题注的对象
     */
    CaptionGenerator.action = function (target) {
            let tagName = target.prop("tagName").toLowerCase(),
                caption = "";
            // 代码块
            if (tagName === "pre")
                caption = [
                    "代码块 ",
                    "代碼塊 ",
                    "Code Block ",
                    "Bloc de Code ",
                    "Блок Кода ",
                    "コードブロック ",
                    "코드 블록 "
                ][VLOOK.lang.id] + (VLOOK.doc.counter.codeBlock + 1);
            // 表格
            else if (tagName === "table")
                caption = [
                    "表 ",
                    "表 ",
                    "Table ",
                    "Table ",
                    "Таблица ",
                    "テーブル ",
                    "표 "
                ][VLOOK.lang.id] + (VLOOK.doc.counter.table + 1);
            else {
                CaptionGenerator.actionForFigureLike(target, tagName);
                return;
            }

            // 有指定的题注文本
            let fc = null,
                fc2 = null,
                fcSet = CaptionGenerator.getCaptions(target.parent().prev());
            fc = fcSet[0]; // 第 1 题注
            fc2 = fcSet[1]; // 第 2 题注

            if (fc != null && fc.trim().length > 0) {
                // 添加 <span> 用主要用于区分题注是默认无内容的，还是指定内容的
                caption = caption + ": <span>" + fc + "</span>";
            }

            // 代码块
            if (tagName === "pre") {
                target.wrap("<div id='code-block-num" + VLOOK.doc.counter.codeBlock
                    + "' class='mdx-figure-caption' style='width: 100%'></div>");
            }
            // 表格
            else if (tagName === "table") {
                target.wrap("<div id='tbl-num" + VLOOK.doc.counter.table
                    + "' class='mdx-figure-caption'></div>");
            }

            // 添加第 1 题注
            target.before("<p class='mdx-figure-caption-1'>" + caption + "</p>");

            // 添加第 2 题注
            if (fc2 != null && fc2.length > 0) {
                target.after("<p class='mdx-figure-caption-2'>" + fc2 + "</p>");
            }
    }

    /**
     * 针对插图（img、mermaid）生成题注
     *
     * @param target 需要添加题注的对象
     * @param tagName HTML 标签名
     */
    CaptionGenerator.actionForFigureLike = function (target, tagName) {
        let fc = target.attr("alt"), // 获取图片的 alt 内容作为题注内容
        fc2 = target.attr("title"); // 获得图片的 title 作为第二题注内容
        // tagName = target.prop("tagName").toLowerCase();

        // 尝试获取最近的段落（如<p>、<h6>）作为题注内容
        let fcSet = CaptionGenerator.getCaptions(target.parent().prev().prev());
        if (fcSet[0] != null) {
            if (fcSet[0] != null)
                fc = fcSet[0];
            if (fcSet[1] != null)
                fc2 = fcSet[1];
        }

        // 插图（img、mermaid）题注前缀
        let caption = [
                "图 ",
                "圖 ",
                "Figure ",
                "La figure ",
                "карта ",
                "図 ",
                "그림 "
            ][VLOOK.lang.id] + (VLOOK.doc.counter.figure + 1);
        // 音频题注
        if (tagName === "audio")
            caption = [
                "音频 ",
                "音頻 ",
                "Audio ",
                "l'audio ",
                "аудио ",
                "オーディオ ",
                "오디오 "
            ][VLOOK.lang.id] + (VLOOK.doc.counter.audio + 1);
        // 视频频题注
        else if (tagName === "video")
            caption = [
                "视频 ",
                "視頻 ",
                "Video ",
                "Vidéo ",
                "видео ",
                "ビデオ ",
                "비디오 "
            ][VLOOK.lang.id] + (VLOOK.doc.counter.video + 1);

        // 有指定的题注文本
        if (fc != null && fc.trim().length > 0)
            caption = caption + ": <strong>" + fc + "</strong>";

        // 为插图（mermaid）增加题注
        if (tagName === "svg")
            // 针对 mermaid 插图，添加额外的类，用于打印前后处理时直接定位 mermaid 插图的题注
            target.wrap("<div id='fig-num" + VLOOK.doc.counter.figure + "' fig-type='" + tagName
                + "' class='mdx-figure-caption mdx-figure-caption-mermaid'></div>");
        // 为插图（img）增加题注
        else if (tagName === "img")
            target.wrap("<div id='fig-num" + VLOOK.doc.counter.figure + "' fig-type='" + tagName
                + "' class='mdx-figure-caption'></div>");
        // 为音频增加题注
        else if (tagName === "audio")
            target.wrap("<div id='fig-num" + VLOOK.doc.counter.audio + "' fig-type='" + tagName
                + "' class='mdx-figure-caption'></div>");
        // 为视频增加题注
        else if (tagName === "video")
            target.wrap("<div id='fig-num" + VLOOK.doc.counter.video + "' fig-type='" + tagName
                + "' class='mdx-figure-caption'></div>");

        target.before("<p class='mdx-figure-caption-1'>" + caption + "</p>");
        if (fc2 != null && fc2.length > 0) {
            target.after("<p class='mdx-figure-caption-2'>" + fc2 + "</p>");
        }

        // 修正在 SVG 插图套上题注后的自适应尺寸
        if (tagName === "svg") {
            if (target.attr("height") !== "none" || target.css("height") !== "none") { // 有指定高度的
                target.removeAttr("height");
                target.css("height", "");
            }

            // 调整SVG插图，尽量按其真实插图的大小显示，超出浏览器宽度的，则左右滚动浏览
            if (target.css("max-width") !== "none") // CSS 中指定了最大宽度
                target.parent().css("width", target.css("max-width"));
            else if (target.attr("style").indexOf("width") > -1) // 通过 style 指定了宽度
                target.parent().css("width", target.css("width"));
            else if (target.attr("width") !== "100%") // 指定了 width 属性，且不为 100%
                target.parent().css("width", parseInt(target.attr("width")) + 4); // 4 为两边 border 的宽度
            else if (target.attr("viewBox") !== "none") // 指定 width 为 100% 的情况
                target.parent().css("width", target.attr("viewBox").split(" ")[2] + "px");
            else
                target.parent().css("width", "100%");
        }
    }

    /**
     * 返回插图、表格、代码块上方的题注
     */
    CaptionGenerator.getCaptions = function (target) {
        let fcSet = [], // 题注集
            tagName = target.prop("tagName"),
            hideCaptionSrc = true; // 是否隐藏题注源

        // 双题注的标准语法
        if (CaptionGenerator.getCaptionCount(target) === 2) {
            fcSet[0] = CaptionGenerator.getCaptionSet(target, 2)[0];
            fcSet[1] = CaptionGenerator.getCaptionSet(target, 2)[1];
        }
        // 单题注的标准语法
        else if (CaptionGenerator.getCaptionCount(target) === 1) {
            fcSet[0] = CaptionGenerator.getCaptionSet(target, 1)[0];
            fcSet[1] = null;
        }
        // 无题注语法，但由 h6 引导
        else if (tagName !== undefined && tagName.toLowerCase() === "h6") {
            fcSet[0] = target.text().trim();
            fcSet[1] = null;
            hideCaptionSrc = false; // 不隐藏题注源
        }
        // console.log(target.prop("tagName"));
            
        // 若成功匹配出题注，则隐藏原始内容
        if (hideCaptionSrc === true
            && fcSet[0] != null
            && target != null
            && target.prop("tagName") !== undefined) {
            target.hide();
        }
        return fcSet;
    }

    /**
     * 返回匹配的题注数量
     *
     * @return 0/1/2
     */
    CaptionGenerator.getCaptionCount = function (target) {
        let reg2 = /^!\[.+\]\".+\"$/; // 有2个题注
        let reg1 = /^!\[.+\]$/; // 只有1个题注
        if (reg2.test(target.text().trim()) === true)
            return 2;
        else if (reg1.test(target.text().trim()) === true)
            return 1;
        return 0; // 无题注
    }

    /**
     * 返回题注数据数组
     *
     * @return [0] 为第 1 个题注，[1] 为第 2 个题注
     */
    CaptionGenerator.getCaptionSet = function(target, count) {
        let fcSet = [],
            text = target.text().trim();
        fcSet[0] = text.substring(2, text.indexOf("]"));
        if (count === 2)
            fcSet[1] = text.substring(text.indexOf("]\"") + 2, text.length - 1);
        return fcSet;
    }

    // ==================== 代码块增强类 ==================== //

    function ExtCodeBlock() {}

    /**
     * 初始化代码块
     */
    ExtCodeBlock.init = function () {
        $(".md-fences").each(function () {
            let codeBlock = $(this);

            // 外套一个 <p> 标签，用于内容折叠时与插图、表格的 DOM 结构一致
            codeBlock.wrap("<p data-vk-container='pre' style='" +
                "border-radius: 0 0 16px 16px;" +
                "margin-bottom: 20px;" +
                "'></p>");

            // 添加鼠标移入/移出事件
            codeBlock.hover(function () {
                ContentAssist.lastHoverContent = $(this);
                ContentAssist.showCopyCodeBlockButton();
                if (VLOOK.doc.newTab === false)
                    ContentAssist.showOpenInNewTabButton();
            }, function () {
                ContentAssist.hideButtons();
            });

            // 折叠长代码块
            iContentFolding.add(codeBlock);

            // 生成代码块插图题注
            CaptionGenerator.action(codeBlock);

            VLOOK.doc.counter.codeBlock++;
        });
    }

    /**
     * 复制代码块内容（不兼容 Safari）
     */
    ExtCodeBlock.copy = function () {
        VLOOK.report.push(['Interactive', 'CodeBlock', 'Copy', 0]);
        if (ContentAssist.lastHoverContent == undefined)
            return;

        // 逐行读取代码
        let code = "";
        ContentAssist.lastHoverContent.children().find(".CodeMirror-code .CodeMirror-line").each(function () {
            code += $(this).text() + "\n";
        });

        // 创建多行文本输入组件，设置内容为以上代码，并自动复制至粘贴板
        if (document.execCommand("copy")) {
            let text = document.createElement("textarea");
            text.value = code;
            document.body.appendChild(text);
            text.select();
            document.execCommand("copy", true);
            document.body.removeChild(text);

            ExtCodeBlock.showSuccess();
        }
        // 复制失败
        else {
            ExtCodeBlock.showFail();
        }
    }

    /**
     * 复制代码块内容增强版（兼容所有浏览器）
     */
    ExtCodeBlock.copyPlus = function () {
        VLOOK.report.push(['Interactive', 'CodeBlock', 'Copy', 0]);
        if (ContentAssist.lastHoverContent == undefined)
            return;

        // 逐行读取代码
        let code = "";
        ContentAssist.lastHoverContent.children().find(".CodeMirror-code .CodeMirror-line").each(function () {
            code += $(this).text() + "\n";
        });
        // 将要复制的内容赋予给 clipboard.js 指定的对象属性 data-clipboard-text
        let btnCopyClassName = ".mdx-btn-copy-code-block";
        $(btnCopyClassName).attr("data-clipboard-text", code);

        // 创建 clipboard.js 对象用于实现复制
        let clipboard = new ClipboardJS(btnCopyClassName);
        // 复制成功事件
        clipboard.on('success', function(e) {
            ExtCodeBlock.showSuccess();
            e.clearSelection();
        });
        // 复制失败事件
        clipboard.on('error', function(e) {
            ExtCodeBlock.showFail();
        });
    }

    /**
     * 显示复制成功提示
     */
    ExtCodeBlock.showSuccess = function () {
        iInfoTips.show([
            "已复制",
            "已復制",
            "Copied",
            "Copié",
            "скопированный",
            "コピー済み",
            "복사"
        ][VLOOK.lang.id], 1500, false, true);
    }

    /**
     * 显示复制失败提示
     */
    ExtCodeBlock.showFail = function () {
        iInfoTips.show([
            "非常抱歉～暂不支持在该浏览器中复制",
            "非常抱歉～暫不支持在該瀏覽器中復制",
            "I'm very sorry~ I don't support copying in this browser",
            "Je suis vraiment désolé ~ Je ne supporte pas la copie dans ce navigateur",
            "Я очень сожалею ~ Я не поддерживаю копирование в этом браузере",
            "すみません〜このブラウザでのコピーはサポートしていません",
            "죄송합니다 ~이 브라우저에서 복사를 지원하지 않습니다"
        ][VLOOK.lang.id], 3000, false, true);
    }

    // ==================== 引用块增强类 ==================== //

    function ExtQuote() {}

    /**
     * 初始化引用块以实现折叠支持
     */
    ExtQuote.init = function () {
        $("blockquote > p").each(function () {
            let target = $(this),
                next = target.next("blockquote");
            // 默认收起
            if (target.text().startWith("[+] ")
                && next.length > 0
                && next.prop("tagName").toLowerCase() === "blockquote") {
                target.next("blockquote").css("display", "none");
                target.html(target.html().replace("[+] ", "⊕ ")); // ▶
                target.attr("title", [
                    "点击展开",
                    "點擊展開",
                    "Click to expand",
                    "Cliquez pour agrandir",
                    "Нажмите, чтобы развернуть",
                    "クリックして展開",
                    "클릭하여 확장"
                ][VLOOK.lang.id]);

                target.attr("data-vk-folded", "true");
                target.addClass("mdx-blockquote-folder");
                target.css("cursor", "pointer");

                // 添加展开操作提示
                ExtQuote.appendExpandTips(target);

                // 因此处的 click 会与 $(document).unbind("click").click() 冲突
                // 所以改为 mouseup
                target.unbind("mouseup").mouseup(function () {
                    ExtQuote.toggleQuoteFolding(target);
                });
            }
            // 默认展开
            else if (target.text().startWith("[-] ")) {
                target.html(target.html().replace("[-] ", "⊖ ")); // ⊖▽
                target.attr("title", [
                    "点击收起",
                    "點擊收起",
                    "Click to fold",
                    "Cliquez pour fermer",
                    "Нажмите, чтобы закрыть",
                    "閉じる",
                    "닫기를 클릭하십시오"
                ][VLOOK.lang.id]);

                target.attr("data-vk-folded", "false");
                target.addClass("mdx-blockquote-folder");
                target.css("cursor", "pointer");

                // 因此处的 click 会与 $(document).unbind("click").click() 冲突
                // 所以改为 mouseup
                target.unbind("mouseup").mouseup(function () {
                    VLOOK.report.push(['Interactive', 'Quote', 'Fold/Unfold', 0]);
                    ExtQuote.toggleQuoteFolding(target);
                });
            }
        });
    }

    /**
     * 添加展开操作提示
     */
    ExtQuote.appendExpandTips = function (target) {
        target.append("<small>" + target.attr("title") + "</small>");
    }

    /**
     * 展开/收起引用块
     */
    ExtQuote.toggleQuoteFolding = function (target) {
        let nextQuote = target.next("blockquote");
        if (nextQuote.isHidden() === false) {
            ExtQuote.fold(target, nextQuote);
            // 添加展开提示
            ExtQuote.appendExpandTips(target);
        }
        else {
            ExtQuote.unfold(target, nextQuote);
            // 移除展开提示
            target.children("small").remove();
        }
    }

    /**
     * 收起引用块
     */
    ExtQuote.fold = function (target, nextQuote) {
        nextQuote.css("display", "none");
        target.attr("title", [
            "点击展开",
            "點擊展開",
            "Click to unfold",
            "Cliquez pour agrandir",
            "Нажмите, чтобы развернуть",
            "クリックして拡大",
            "확대하려면 클릭하십시오."
        ][VLOOK.lang.id]);
        target.attr("data-vk-folded", "true");
        target.html(target.html().replace("⊖ ", "⊕ ")); // ▽▶
    }

    /**
     * 展开引用块
     */
    ExtQuote.unfold = function (target, nextQuote) {
        nextQuote.css("display", "block");
        target.attr("title", [
            "点击收起",
            "點擊收起",
            "Click to fold",
            "Cliquez pour fermer",
            "Нажмите, чтобы закрыть",
            "閉じる",
            "닫기를 클릭하십시오"
        ][VLOOK.lang.id]);
        target.attr("data-vk-folded", "false");
        target.html(target.html().replace("⊕ ", "⊖ "));
    }

    /**
     * 自动展开引用块
     */
    ExtQuote.autoUnfold = function () {
        if (iParagraphNav.current() === undefined)
            return;

        let target = iParagraphNav.current();
        // 或目标段是引用块折叠操作区，且为未展开状态
        if (target.attr("class") !== undefined
            && target.attr("class").indexOf("mdx-blockquote-folder") !== -1
            && target.attr("data-vk-folded") === "true")
            // 模拟操作
            target.mouseup();
    }



    // ==================== 表格增强类 ==================== //

    function ExtTable() {}

    // 最后/当前显示十字光柱的表格
    ExtTable.lastCrossTable = undefined;

    // 最后/当前显示十字光柱的表格单元格
    ExtTable.lastCrossCell = undefined;

    // 表格十字光柱四条边的位置
    ExtTable.lastCrossCellPos = {};

    /**
     * 初始化表格数据
     */
    ExtTable.init = function () {
        // let VLOOK.doc.counter.table = 0;
        $("table").each(function () {
            let table = $(this);

            // 表格索引号
            table.attr("id", "data-vk-tbl-" + VLOOK.doc.counter.table);
            table.parent().attr("data-vk-container", "table");

            // 将表格的宽度比父元素要小，则调整父元素的宽度，以便在逐段导航浏览模式时的高亮效果与内容贴合
            // VLOOK.debug(table.css("width"), table.parent().css("width"));
            // if (parseInt(table.css("width")) < parseInt(table.parent().css("width")))
            //     table.parent().css("width", "fit-content");

            // 添加鼠标移入/移出事件
            table.hover(function () {
                ContentAssist.lastHoverContent = $(this);
                // 表格没有被折叠时
                if ($(this).parent().parent().attr("data-vk-folded") === "false") {
                    $(this).addClass("mdx-clickable-hover");
                    VLOOK.ui.adjustEffect($(this));
                }
                if (VLOOK.doc.newTab === false)
                    ContentAssist.showOpenInNewTabButton();
            }, function () {
                $(this).removeClass("mdx-clickable-hover");
                ContentAssist.hideButtons();
            });

            // 表格滚动事件
            table.parent().scroll(function () {
                let scrollLeft = $(this).scrollLeft();
                // 根据显示时其对应表格的水平滚动的偏移量，调整十字光柱的位置
                $("div.mdx-table-cross").each(function () {
                    $(this).css({
                        "left": ExtTable.lastCrossCellPos[$(this).attr("data-vk-direction")] - scrollLeft
                    });
                });
            });

            // 表格单元格合并
            ExtTable.cellMerge(table);

            // 表格整列格式化
            ExtTable.columnFormatting(table);

            // 折叠长表格
            iContentFolding.add(table);

            // 生成表格题注
            CaptionGenerator.action(table);

            VLOOK.doc.counter.table++;
        }); // table
    }

    /**
     * 表格单元格合并
     */
    ExtTable.cellMerge = function (table) {
        let colSpanCount = 0,
            colSpanCell,
            lastCell = null,
            tblData = [],
            tblSpan = [],
            tblTd2ThData = [],
            rowIndex = 0,
            colIndex = 0,
            needRowSpan = false;

        table.find("tr").each(function () {
            tblData[rowIndex] = [];
            tblSpan[rowIndex] = [];
            $(this).find("td, th").each(function () {
                let cell = $(this);

                // 表格单元格十字光柱处理
                ExtTable.cellCrossable(table, cell, colIndex);

                // --- 行合并预处理 ---
                // 克隆表格数据
                tblData[rowIndex][colIndex] = cell;
                tblSpan[rowIndex][colIndex] = 0;
                // 行合并标记
                if (cell.text() === "..") {
                    tblSpan[rowIndex][colIndex] = 1;
                    needRowSpan = true;
                }
                colIndex++;

                // --- 列合并 ---
                // 列合并标记
                if (cell.text() === "==") {
                    colSpanCount++;
                    cell.remove();
                    if (colSpanCount === 1)
                        colSpanCell = lastCell;
                }else { // 列合并
                    if (colSpanCount > 0) {
                        colSpanCell.attr("colspan", colSpanCount + 1);
                        colSpanCell.css("text-align", "center");
                    }
                    colSpanCount = 0;
                }
                lastCell = cell;
            }); // find(td, th)

            // 列合并（对于最后一列的补充处理）
            if (colSpanCount > 0) {
                colSpanCell.attr("colspan", colSpanCount + 1);
                colSpanCell.css("text-align", "center");
            }
            colSpanCount = 0;

            rowIndex++;
            colIndex = 0;
        }); // tr

        rowIndex = 0;

        // 行合并
        if (needRowSpan === true) {
            tblTd2ThData = [];
            // 列式遍历（从左到右）
            for (let c = 0, len = tblSpan[0].length; c < len; c++) {
                let rowSpanCount = 0,
                    rowSpanCell = null;
                let r = 0,
                    thSpanFlag = false;

                // 列式遍历（从上到下）
                while (r < tblSpan.length) {
                    if (tblSpan[r][c] === 1) { // 要合并
                        rowSpanCount++;
                        if (rowSpanCell == null) {
                            rowSpanCell = tblData[r - 1][c];
                        }
                        // 记录最大列头行合并深度
                        if (r === 1)
                            thSpanFlag = true;
                        if (thSpanFlag === true)
                            tblTd2ThData[tblTd2ThData.length] = tblData[r][c].parent();
                        tblData[r][c].remove(); // 移除要被合并的单元格
                    }else {
                        thSpanFlag = false;
                        // 单元格行合并
                        if (rowSpanCell != null) {
                            rowSpanCell.attr("rowspan", rowSpanCount + 1);
                            rowSpanCount = 0;
                            rowSpanCell = null;
                        }
                    }
                    r++;
                } // while
                // 单元格行合并（对于最后一行的补充处理）
                if (rowSpanCell != null) {
                    rowSpanCell.attr("rowspan", rowSpanCount + 1);
                    rowSpanCell.css("text-align", "center");
                }
            } // for

            for (let i = 0, len = tblTd2ThData.length; i < len; i++) {
                tblData[0][0].parent().parent().append(tblTd2ThData[i]);
            }
        } // if

        needRowSpan = false;
    }

    /**
     * 表格单元格十字光柱
     *
     * @param table 目标表格
     * @param cell 目标单元格
     * @param colIndex 列索引号
     */
    ExtTable.cellCrossable = function (table, cell, colIndex) {
        // 单元格行列索引号
        cell.attr("data-vk-tbl-col", "data-vk-tbl-" + VLOOK.doc.counter.table + "-" + colIndex);

        // 鼠标点击单元格时显示十字光柱
        cell.unbind("click").click(function () {
            VLOOK.report.push(['Interactive', 'Table', 'CellCross', 0]);

            if (table.parent().parent().attr("data-vk-folded") === "true")
                return;

            ExtTable.hideCellCross(false);
            iParagraphNav.hide();

            ExtTable.lastCrossCell = cell;
            ExtTable.lastCrossTable = table;

            let tdH = parseInt(ExtTable.lastCrossCell.css("height")),
                tdW = parseInt(ExtTable.lastCrossCell.css("width")),
                tbW = parseInt(ExtTable.lastCrossTable.css("width")),
                scrollLeft = table.parent().parent().scrollLeft();

            // 横向左边
            let crossLeft = $(".mdx-table-cross-left"),
                w = ExtTable.lastCrossCell.offset().left - ExtTable.lastCrossTable.offset().left;
                crossLeft.css({
                "top": ExtTable.lastCrossCell.offset().top,
                "left": ExtTable.lastCrossTable.offset().left,
                "height": tdH,
                "width": w,
                "z-index": 9
            });
            ExtTable.adjustCellCross(crossLeft, w, scrollLeft);

            // 横向右边
            let crossRight = $(".mdx-table-cross-right");
            w = ExtTable.lastCrossTable.offset().left + tbW - ExtTable.lastCrossCell.offset().left - tdW;
            crossRight.css({
                "top": ExtTable.lastCrossCell.offset().top,
                "left": ExtTable.lastCrossCell.offset().left + tdW,
                "height": tdH,
                "width": w,
                "z-index": 9
            });
            ExtTable.adjustCellCross(crossRight, w, scrollLeft);

            // 竖向上边
            let crossUp = $(".mdx-table-cross-up"),
                h = ExtTable.lastCrossCell.offset().top - ExtTable.lastCrossTable.offset().top;
                crossUp.css({
                "top": ExtTable.lastCrossTable.offset().top,
                "left": ExtTable.lastCrossCell.offset().left,
                "height": h,
                "width": tdW,
                "z-index": 9
            });
            ExtTable.adjustCellCross(crossUp, h, scrollLeft);

            // 竖向下边
            let crossDown = $(".mdx-table-cross-down");
            h = ExtTable.lastCrossTable.offset().top + parseInt(ExtTable.lastCrossTable.css("height")) -
                ExtTable.lastCrossCell.offset().top - tdH;
            crossDown.css({
                "top": ExtTable.lastCrossCell.offset().top + tdH,
                "left": ExtTable.lastCrossCell.offset().left,
                "height": h,
                "width": tdW,
                "z-index": 9
            });
            ExtTable.adjustCellCross(crossDown, h, scrollLeft);

            event.stopPropagation(); // 停止事件冒泡
        });
    }

    /**
     * 适配调整表格十字光柱位置、显示
     *
     * @param target 十字光柱任意边的对象实例（左/右/上/下）
     * @param limit 指定要进行隐藏判断的尺寸（宽度或高度），小于该值则不显示对应的 target
     * @param scrollLeft 表格水平滚动的偏移量
     */
    ExtTable.adjustCellCross = function (target, limit, scrollLeft) {
        if (limit < 5) // 任意边的尺寸（宽度或高度）小于最小值时隐藏
            target.hide();
        else {
            // 动画式显示
            if (VLOOK.ui.effect >= 2)
                target.velocity("fadeIn", {
                    duration: VLOOK.animate.speed
                });
            else
                target.show();
        }
        // 保存最后显示的十字光柱任意边的 left 值及水平方向上的滚动偏移量
        ExtTable.lastCrossCellPos[target.attr("data-vk-direction")] =  parseInt(target.css("left")) + scrollLeft;
    }

    /**
     * 隐藏表格十字光柱
     *
     * @param animate 隐藏的过程是否启用动画
     */
    ExtTable.hideCellCross = function (animate) {
        if (ExtTable.lastCrossCell === undefined)
            return;

        if (animate === true) {
            // 动画式显示
            if (VLOOK.ui.effect >= 2)
                $(".mdx-table-cross").velocity("fadeOut", {
                    duration: VLOOK.animate.speed
                });
            else
                $(".mdx-table-cross").hide();
        }
        else
            $(".mdx-table-cross").hide();
        ExtTable.lastCrossCell = undefined;
        ExtTable.lastCrossTable = undefined;
    }

    /**
     * 表格整列格式化
     */
    ExtTable.columnFormatting = function (table) {
        table.find("tr th").each(function () {
            // 粗体
            if ($(this).find("strong").length > 0)
                $("[data-vk-tbl-col=" + $(this).attr("data-vk-tbl-col") + "]").addClass("mdx-table-column-format-bold");
            // 斜体
            if ($(this).find("em").length > 0)
                $("[data-vk-tbl-col=" + $(this).attr("data-vk-tbl-col") + "]").addClass("mdx-table-column-format-em");
            // 下划线
            if ($(this).find("u").length > 0)
                $("[data-vk-tbl-col=" + $(this).attr("data-vk-tbl-col") + "]").addClass("mdx-table-column-format-underline");
            // 高亮
            if ($(this).find("mark").length > 0)
                $("[data-vk-tbl-col=" + $(this).attr("data-vk-tbl-col") + "]").contents().wrap("<mark></mark>");
            // 删除线
            if ($(this).find("del").length > 0)
                $("[data-vk-tbl-col=" + $(this).attr("data-vk-tbl-col") + "]").contents().wrap("<del></del>");
            // 勾选
            let text = $(this).text();
            if (/^\[.\].+/.test(text) === true) {
                $(this).prepend("<input type='checkbox' style='pointer-events: none;'/>");
                
                if (text.substr(1, 1) === "x")
                    $(this).children().attr("checked", "checked");
                
                $(this).prop("innerHTML", $(this).prop("innerHTML").replace(/\[.\]./, ""));
            }
        });
    }

    /**
     * 判断当前内容块是否与已显示了十字光柱的表格重叠
     */
    ExtTable.withCross = function (target) {
        return (ExtTable.lastCrossTable !== undefined
            && target.children().attr("id") === ExtTable.lastCrossTable.attr("id"));
    }

    // ==================== 音频增强类 ==================== //
    
    function ExtAudio() {}

    ExtAudio.icon = {
        loading : '<svg width="16px" height="16px"><use class="mdx-button-ico-light" xlink:href="#icoLoading"></use></svg>',
        play : '<svg width="16px" height="16px"><use class="mdx-button-ico-light" xlink:href="#icoPlay"></use></svg>',
        pause : '<svg width="16px" height="16px"><use class="mdx-button-ico-light" xlink:href="#icoPause"></use></svg>',
        stop : '<svg width="16px" height="16px"><use class="mdx-button-ico-light" xlink:href="#icoStop"></use></svg>',
        forbidden : '<svg width="16px" height="16px"><use class="mdx-button-ico-light" xlink:href="#icoForbidden"></use></svg>',
    }

    /**
     * 初始化音频数据
     */
    ExtAudio.init = function () {
        // 支持指定类型的音频，以及支持带参数的 URL
        $("img[src$='.mp3'],[src$='.m4a'],[src$='.ogg'],[src$='.wav'],[src*='.mp3?'],[src*='.m4a?'],[src*='.ogg?'],[src*='.wav?']").each(function () {
            let audioLike = $(this),
                audio = undefined,
                src = audioLike.attr("src");

            // 指定为 mini 模式（扩展的自定义控件）
            if (VLOOK.util.parseQueryString(src)["controls"] === "mini") {
                // 将 URL 为音频资源的 img 标签转换为 audio
                audio = ExtAudio.transToAudio(audioLike, src);
                // 设置 audio id 用于自定义 mini 控件
                audio.attr("id", "v-audio-" + VLOOK.doc.counter.audio);

                // 添加音频播放 mini 控件
                audio.after("<div id='v-audio-" + VLOOK.doc.counter.audio + "-control"
                    + "' class='mdx-audio-mini-control'></div>");

                // 开始加载音频
                audio.bind("loadstart", function () {
                    let controls = $("#" + $(this).attr("id") + "-control");
                    controls.addClass("mdx-audio-mini-control-loading");
                    controls.html(ExtAudio.icon.loading);
                });

                // 音频就绪可以开始播放
                audio.bind("canplay", function () {
                    let controls = $("#" + $(this).attr("id") + "-control"),
                        src = $(this).attr("src");

                    controls.removeClass("mdx-audio-mini-control-loading");

                    // 绑定点击事件
                    controls.unbind("click").click(function () {
                        ExtAudio.play(this, audio[0]);
                    });
                    controls.html(ExtAudio.icon.play);
                    controls.attr("v-data-pause", VLOOK.util.parseQueryString(src)["pause"]);
                    
                    // 须显示持续时长
                    if (VLOOK.util.parseQueryString(src)["duration"] === "true"
                        && audio.attr("v-display-duration") !== "true") {
                        // 计算音频时长
                        let duration = audio[0].duration,
                            min = Math.floor(duration / 60),
                            sec = Math.floor(duration -  min * 60);
                        let minStr = min > 0 ? "<strong>" + min + "</strong>′" : "";
                        audio.next().after(" <sup class='mdx-duration-info' style='color: var(--header-color)'>" + minStr + "<strong>" + sec + "</strong>″</sup>");
                        audio.attr("v-display-duration", "true");
                    }
                });

                // 正在播放
                audio.bind("playing", function () {
                    let controls = $("#" + $(this).attr("id") + "-control"),
                        pause = controls.attr("v-data-pause");

                    controls.addClass("mdx-audio-mini-control-playing");

                    // 支持暂停播放
                    if (pause !== undefined && pause === "true") {
                        controls.html(ExtAudio.icon.pause);
                    }
                    // 不支持暂停播放，暂时即结束
                    else {
                        controls.html(ExtAudio.icon.stop);
                        audio.currentTime = 0; // 播放都是从头开始
                    }
                });

                // 播放结束后恢复按钮状态
                audio.bind("ended", function () {	
                    let controls = $("#" + $(this).attr("id") + "-control");
                    controls.html(ExtAudio.icon.play);
                    controls.removeClass("mdx-audio-mini-control-playing");
                });

                // 故障或不可用
                audio.bind("emptied", function () {
                    let controls = $("#" + $(this).attr("id") + "-control");
                    // controls.text("▲");
                    controls.removeClass("mdx-audio-mini-control-loading");
                    controls.html(ExtAudio.icon.forbidden);
                    controls.removeClass("mdx-audio-mini-control");
                    controls.addClass("mdx-audio-mini-control-disabled");
                });

                // 加载错误
                audio.bind("error", function () {
                    audio.trigger("emptied");
                });
            }
            // 标准控件模式
            else {
                // 先根据插图的语法生成题注
                CaptionGenerator.actionForFigureLike(audioLike, "audio");
                
                // 将 URL 为音频资源的 img 标签转换为 audio
                audio = ExtAudio.transToAudio(audioLike, src);
                // 设置 audio 为标准控件
                audio.attr("controls", "controls");

                // 若有第 2 题注，则微调样式
                if (audio.next(".mdx-figure-caption-2").length > 0)
                    audio.css("margin-bottom", "-10px");
            }

            VLOOK.doc.counter.audio++;
        });
    }

    /**
     * 播放音频
     *
     * @param self 自定义的播放控件对象
     * @param audio 音频的 JavaScript 对象
     * @param pause 是否支持暂停播放模式，值来自于 URL 参数
     */
    ExtAudio.play = function (self, audio) {
        let controls = $(self);

        // 已暂停、未播放
        if (audio.paused === true) {
            audio.play();
        }
        // 播放中
        else {
            controls.html(ExtAudio.icon.play);
            controls.removeClass("mdx-audio-mini-control-playing");
            audio.pause();

            // 不支持暂时播放时，暂时即结束
            if (controls.attr("v-data-pause") === undefined)
                audio.currentTime = 0; // 播放都是从头开始
        }
    }

    /**
     * 转换为 audio 标签
     *
     * @param audioLike 类 audio 标签（即 src 为音频的 img 标签)
     * @param src 音频 URL
     */
    ExtAudio.transToAudio = function (audioLike, src) {
        let audio = undefined,
            tips = ["您的浏览器不支持音频标签。",
                        "您的瀏覽器不支持音頻標籤。",
                        "Your browser does not support the audio tag.",
                        "Votre navigateur ne prend pas en charge la balise audio.",
                        "Ваш браузер не поддерживает аудио тег.",
                        "お使いのブラウザは音声タグをサポートしていません。",
                        "브라우저가 오디오 태그를 지원하지 않습니다."
                    ][VLOOK.lang.id];

        // 对 audio 标签的属性进行支持
        let autoplay = VLOOK.util.parseQueryString(src)["autoplay"],
            loop = VLOOK.util.parseQueryString(src)["loop"],
            preload = VLOOK.util.parseQueryString(src)["preload"];
        
        // 将 URL 为音频资源的 img 标签转换为 audio
        audioLike.wrap("<audio src='" + src + "'>" + tips + "</audio>");
        audio = audioLike.parent();
        // 移除图片 img 标签
        audioLike.remove();

        // 设置 audio 属性
        if (autoplay !== undefined) audio.attr("autoplay", "autoplay");
        if (loop !== undefined) audio.attr("loop", "loop");
        if (preload !== undefined) audio.attr("preload", "auto");

        return audio;
    }

    // ==================== 音频增强类 ==================== //
    
    function ExtVideo() {}

    /**
     * 初始化音频数据
     */
    ExtVideo.init = function () {
        // 支持指定类型的音频，以及支持带参数的 URL
        $("img[src$='.ogv'],[src$='.mp4'],[src$='.webm'],[src*='.ogv?'],[src*='.mp4?'],[src*='.webm?']").each(function () {
            let videoLike = $(this),
                src = videoLike.attr("src");
            
            // 先根据插图的语法生成题注
            CaptionGenerator.actionForFigureLike(videoLike, "video");
                
            // 将 URL 为音频资源的 img 标签转换为 video
            ExtVideo.transToVideo(videoLike, src);

            VLOOK.doc.counter.video++;
        });
    }

    /**
     * 转换为 video 标签
     *
     * @param videoLike 类 video 标签（即 src 为视频的 img 标签)
     * @param src 视频 URL
     */
        ExtVideo.transToVideo = function (videoLike, src) {
        let video = undefined,
            tips = ["您的浏览器不支持视频标签。",
                    "您的瀏覽器不支持視頻標籤。",
                    "Your browser does not support the video tag.",
                    "Votre navigateur ne prend pas en charge le tag vidéo.",
                    "Ваш браузер не поддерживает видео тег.",
                    "お使いのブラウザは動画タグをサポートしていません。",
                    "브라우저가 비디오 태그를 지원하지 않습니다."
                ][VLOOK.lang.id];

        // 对 video 标签的属性进行支持
        let autoplay = VLOOK.util.parseQueryString(src)["autoplay"],
            loop = VLOOK.util.parseQueryString(src)["loop"],
            preload = VLOOK.util.parseQueryString(src)["preload"],
            width = VLOOK.util.parseQueryString(src)["width"],
            height = VLOOK.util.parseQueryString(src)["height"];

        // 将 URL 为音频资源的 img 标签转换为 video
        videoLike.wrap("<video src='" + src + "'>" + tips + "</video>");
        video = videoLike.parent();
        // 移除图片 img 标签
        videoLike.remove();

        // 设置 video 为标准控件
        video.attr("controls", "controls");

        // 设置 video 属性
        if (autoplay !== undefined) video.attr("autoplay", "autoplay");
        if (loop !== undefined) video.attr("loop", "loop");
        if (preload !== undefined) video.attr("preload", "auto");
        if (width !== undefined) video.attr("width", width);
        if (height !== undefined) video.attr("height", height);

        return video;
        }

    // ==================== 插图增强类 ==================== //

    function ExtFigure() {}

    /**
     * 初始化插图数据
     */
    ExtFigure.init = function () {
        let ignoreImgLost = false;
        // 针对 mermaid 饼图为双 SVG 结构（标准的 mermaid 是单 SVG 结构），进行规范化调整
        $(".md-diagram-panel > svg > svg > g").each(function () {
            $(this).unwrap();
        });

        // 对所有插图（图片、mermaid 图、插图导航的插图）进行初始化处理
        $("img, .md-diagram-panel svg, .mdx-figure-content svg").each(function () {
            let fig = $(this),
                tagName = fig.prop("tagName").toLowerCase();

            // 添加插图标识数据
            fig.attr({
                "fig-id": "mdx-figure-" + VLOOK.doc.counter.figure,
                "fig-idx": VLOOK.doc.counter.figure
            });

            // 添加插图样式
            fig.css("cursor", "pointer");
            fig.addClass("mdx-figure");

            // 添加锚点，便于在插图导航直接跳转至对应插图位置（在新标签打开时不添加））
            if (VLOOK.doc.newTab === false)
                $("<a name='" + "fig-idx" + VLOOK.doc.counter.figure + "'>").insertBefore(fig.parent());

            // 添加鼠标单击事件
            fig.unbind("click").click(function () {
                if (VLOOK.doc.newTab === false)
                    iFigureViewer.show(fig);
            });
            // 添加鼠标移入/移出事件
            fig.hover(function () {
                ContentAssist.lastHoverContent = $(this);

                if (VLOOK.doc.newTab === false) {
                    $(this).addClass("mdx-OINTable-hover");
                    ContentAssist.showOpenInNewTabButton();
                }
            }, function () {
                $(this).removeClass("mdx-OINTable-hover");
                ContentAssist.hideButtons();
            });

            // img 插图的处理
            if (tagName === "img") {
                let src = fig.attr("src"),
                    container = fig.parent();

                // 确保 img 有独立的父容器，一般情况下 Typora 导出的为 <p>
                if (container.prop("tagName").toLowerCase() !== "p") {
                    fig.wrap("<p></p>");
                    container = fig.parent();
                }
                // 为父容器增加 img 容器标识，用于折叠内容时使用
                container.attr("data-vk-container", "img");
                container.css({
                    "border-radius": "16px",
                    "margin-bottom": "20px"
                });

                // 图片无法加载时加载默认图片
                fig.bind("error", function () {
                    if (fig.attr("src").indexOf("vlook-lost-image.jpg") === -1)
                        if (ignoreImgLost === false)
                            ignoreImgLost = !confirm([
                                "图片缺失：",
                                "圖片缺失：",
                                "Lost Image: ",
                                "Image perdue: ",
                                "Потерянное изображение: ",
                                "失われた画像：",
                                "잃어버린 이미지 : "
                            ][VLOOK.lang.id] + fig.parent().text() + "\"" + fig.attr("src") + "\"" + [
                                "\n\n继续检查吗？",
                                "\n\n繼續檢查嗎？",
                                "\n\nContinue to check?",
                                "\n\nContinuer à vérifier?",
                                "\n\nПродолжить проверку?",
                                "\n\nチェックを続けますか？",
                                "\n\n계속 확인 하시겠습니까?"
                            ][VLOOK.lang.id]);

                    ExtFigure.loadDefaultOnError($(this));
                });

                // 强制重新加载一次以触发error事件
                fig.attr("src", src);

                // 处理在 Dark Mode 指定反转的图片
                if (VLOOK.util.parseQueryString(src)["invert"] === "in-dark") {
                    fig.attr("data-vk-invert", "in-dark");
                }

                // ---------- img 类长图的折叠处理 ----------
                // 创建一个Image对象，实现图片的预下载
                // var img = new Image();
                // img.src = src;

                // // 如果图片已经存在于浏览器缓存，直接处理
                // if (img.complete)
                //     iContentFolding.checkAndProcess(fig, false);
                //     // foldingLongContent(fig, false);
                // // 等待图片下载完成后再处理
                // else
                //     img.onload = function () {
                //         iContentFolding.checkAndProcess(fig, false);
                //         // foldingLongContent(fig, false);
                //     }
            } // if img
            // svg (mermaid) 插图的处理
            else if (tagName === "svg") {
                fig.parent().attr("data-vk-container", "svg");
                // iContentFolding.checkAndProcess(fig, false);
                // foldingLongContent(fig, false);
            }

            // 折叠长插图
            iContentFolding.add(fig);

            // 生成插图题注
            // generateFigureCaption(fig);
            CaptionGenerator.action(fig);

            VLOOK.doc.counter.figure++;
        });
        if (VLOOK.doc.counter.figure > 0)
            iToolbar.buttons["figure-viewer"].css("visibility", "visible");
    }

    /**
     * 加载默认图片
     *
     * @param target 目标 img 对象
     */
    ExtFigure.loadDefaultOnError = function (target) {
        target.attr({
            "src-org": target.attr("src"),
            "src": VLOOK.doc.defaultImage
        });
    }

    /**
     * 适配指定图片在 Dark Mode 的反转处理
     */
    ExtFigure.adjustImageInverInDarkMode = function () {
        let target = $("img[data-vk-invert=in-dark]");
        // 应用 Dark 模式的插图背景
        if (ColorScheme.scheme === "dark") {
            target.removeClass("mdx-figure-bg-dark");
            // Dark 模式下用 Light 背景进行反色
            target.addClass("mdx-figure-bg-light"); 
            target.addClass("mdx-img-invert-in-dark");
        }
        // 恢复Light模式插图背景
        else {
            target.removeClass("mdx-img-invert-in-dark");
        }
    }

    // ==================== Markdown 化注音语法转换为 rudy 标签 ==================== //

    function RubyTag() {}

    RubyTag.init = function () {
        console.log(document.getElementById("write").outerHTML);
        console.error("-----");
        document.getElementById("write").outerHTML = document.getElementById("write").outerHTML;
        console.log(document.getElementById("write").outerHTML);

        // $("#write").prop("outerHTML", $("#write").prop("outerHTML"));

        // $("#write").prop("outerHTML",
        //     RubyTag.buildRubyTag($("#write").prop("outerHTML")));
        // cocnsole.log(RubyTag.buildRubyTag("<div>hello<code>code</code>{注音}(zhù yīn)hello{注音}(zhù yīn)<code>code</code></div>"));
    }

    RubyTag.buildRuby = function (str) {
        return str.replace(/\{([^{}()]+)\}\(([^{}()]+)\)/g,
            function(match, $1, $2) {
                return '<ruby>' + $1 + '<rp> (</rp><rt>' + $2 + '</rt><rp>) </rp></ruby>'
        });
    }

    // ==================== 插图导航模块 ==================== //

    function FigureNav() {
        this.ui = $(".mdx-figure-nav"); // 插图导航主界面
        this.button = {
            ui : $(".mdx-btn-figure-nav"), // 所有导航按钮
            prev : $(".mdx-btn-figure-prev"), // 上一张插图按钮
            next : $(".mdx-btn-figure-next"), // 下一张插图按钮
            close : $(".mdx-btn-close-figure-viewer"), // 关闭按钮
        };
        this.content = $(".mdx-figure-content"); // 显示插图内容的控件
        this.figIndex = -1; // 当前插图索引序号，对应 fig-idx 中的值

        // 绑定各按钮事件
        let that = this;
        this.button.prev.unbind("click").click(function () {
            that.prev();
        });
        this.button.next.unbind("click").click(function () {
            that.next();
        });
        this.button.close.unbind("click").click(function () {
            that.hide();
        });

        /**
         * 插图导航导航按钮在不同终端的适配处理
         * 
         * @param flag "mobile": 移动端，"desktop"：桌面端
         */
        this.adjustHoverStyle = function (flag) {
            // 移动设备时解绑样式事件
            if (flag === "mobile") {
                this.button.prev.unbind("hover");
                this.button.next.unbind("hover");
            }
            // 非移动设备时绑定样式事件
            else {
                this.button.ui.hover(function () {
                    $(this).css({
                        "transform": "translateY(-2px)"
                    });
                    $(this).find("svg > use").addClass("mdx-btn-figure-hover");
                }, function () {
                    $(this).css({
                        "transform": "none"
                    });
                    $(this).find("svg > use").removeClass("mdx-btn-figure-hover");
                });
                // 鼠标键按下事件，模拟 :active
                this.button.ui.mousedown(function () {
                    $(this).css({
                        "transform": "none"
                    });
                    $(this).find("svg > use").addClass("mdx-btn-figure-active");
                });
                // 鼠标键释放事件，模拟恢复正常
                this.button.ui.mouseup(function () {
                    $(this).css({
                        "transform": "translateY(-2px)"
                    });
                    $(this).find("svg > use").removeClass("mdx-btn-figure-active");
                });
            }
        }

        /**
         * 显示插图导航
         */
        this.show = function (fig) {
            VLOOK.report.push(['Interactive', 'Figure Viewer', 'Show/Hide', 0]);

            VLOOK.doc.scroll.freeze();

            if (VLOOK.doc.counter.figure === 0)
                return;
            if (this.figIndex === -1)
                this.figIndex = 0;
            if (fig == null)
                fig = $("[fig-id='mdx-figure-" + this.figIndex + "']");

            this.ui.css({
                "top": this.ui.css("height")
                // "opacity": 0
            });

            ContentAssist.hideButtons();

            // 在插图导航中显示对应插图
            this.figIndex = fig.attr("fig-idx");

            this.ui.show();
            this.display();
            this.updateUI();

            // 动画式显示
            if (VLOOK.ui.effect >= 2) {
                this.ui.velocity({
                    top: 0
                }, {
                    easing: [VLOOK.animate.tension, VLOOK.animate.friction],
                    duration: VLOOK.animate.speed
                });
            } else {
                this.ui.css({
                    top: 0
                });
            }
        }

        /**
         * 关闭插图导航
         */
        this.hide = function () {
            // 动画式显示
            if (VLOOK.ui.effect >= 2) {
                this.ui.velocity({
                    top: this.ui.css("height")
                }, {
                    duration: VLOOK.animate.speed,
                    complete: function () {
                        this.content.empty();
                        this.ui.hide();
                    }
                });
            } else {
                this.ui.css({
                    top: this.ui.css("height")
                });
                this.content.empty();
                this.ui.hide();
            }

            // 调整插图动作按钮层级
            let actIdx = parseInt(ContentAssist.button.openInNewTab.css("z-index")),
                viewerIdx = parseInt(this.ui.css("z-index"));
            if (actIdx > viewerIdx)
                ContentAssist.button.openInNewTab.css("z-index", actIdx - viewerIdx);

            ContentAssist.hideButtons();
            VLOOK.doc.scroll.unfreeze();
        }

        /**
         * 显示插图内容
         */
        this.display = function () {
            let fig = $("[fig-id=mdx-figure-" + this.figIndex + "]");
            this.content.empty();
            this.content.show();
            this.content.css({
                "width": $(window).width(),
                "height": $(window).height()
            });

            let newFig = fig.clone();
            newFig.css({
                "max-width": $(window).width() - 90,
                "max-height": $(window).height() - 90,
                "display": "inline-block",
                "cursor": "pointer",
                "border-radius": "15px",
            });

            // 添加鼠标移入/移出事件
            newFig.hover(function () {
                if (VLOOK.doc.newTab === false)
                    $(this).addClass("mdx-OINTable-hover");
            }, function () {
                if (VLOOK.doc.newTab === false)
                    $(this).removeClass("mdx-OINTable-hover");
            });
            // 添加鼠标点击事件
            let that = this;
            newFig.unbind("click").click(function () {
                that.jumpTo();
                // this.hide();
            });

            this.content.append(newFig);
        }

        /**
         * 查看上一个插图
         */
        this.prev = function () {
            VLOOK.report.push(['Interactive', 'FigureNav', 'Prev', 0]);
            if (this.figIndex > 0) {
                this.figIndex--;
                ContentAssist.hideButtons();
                this.display();
                this.updateUI();
            }
        }

        /**
         * 查看下一个插图
         */
        this.next = function () {
            VLOOK.report.push(['Interactive', 'FigureNav', 'Next', 0]);
            if (this.figIndex < VLOOK.doc.counter.figure - 1) {
                this.figIndex++;
                ContentAssist.hideButtons();
                this.display();
                this.updateUI();
            }
        }

        /**
         * 更新插图导航界面
         */
        this.updateUI = function () {
            let pageNum = $(".mdx-figure-page-num");

            // 更新插图页码
            var title = [
                "(共",
                "(共",
                "(Total ",
                "(Totale ",
                "(Всего ",
                "(合計",
                "(합계"
            ][VLOOK.lang.id] + VLOOK.doc.counter.figure + [
                "张) ",
                "張) ",
                ") ",
                ") ",
                ") ",
                "張) ",
                "장) "
            ][VLOOK.lang.id];
            title += "<strong>" + $("#fig-num" + this.figIndex + " > .mdx-figure-caption-1").text() + "</strong>";
            pageNum.css("width", (this.ui.width()) - 60);
            pageNum.html(title);

            // 更新导航按钮位置
            this.button.prev.css("top", (this.ui.height() - this.button.prev.height()) / 2);
            this.button.next.css({
                "top": this.button.prev.css("top"),
                "right": "10px"
            });

            // 根据当前插图索引更新浏览按钮有效状态
            this.button.prev.css("opacity", "0");
            this.button.next.css("opacity", "0");
            if (this.figIndex > 0) {
                this.button.prev.css("opacity", "1");
            }
            if (this.figIndex < VLOOK.doc.counter.figure - 1) {
                this.button.next.css("opacity", "1");
            }
        }

        /**
         * 通过插图导航中转到文档插图位置
         */
        this.jumpTo = function () {
            let that = this;
            this.content.unbind("click").click(function () {
                // 跳转到对应位置
                window.location.href = "#fig-idx" + that.figIndex;
                // 微调位置
                let offset = (VLOOK.ui.isSmallScreen() === true) ? 100 : 60;
                $("html").scrollTop($("a[name=fig-idx" + that.figIndex + "]").offset().top - offset);
                
                that.hide();
            });
        }
    }

    // ==================== 样式重制类 ==================== //

    function Restyler() {}

    /**
     * 更新任务列表的勾选框样式
     */
    Restyler.forTaskListCheckbox = function () {
        let target = $(".md-task-list-item > input:disabled");
        target.removeAttr("disabled");
        target.css("pointer-events", "none");
    }

    /**
     * 调整默认的 mermaid 样式
     */
    Restyler.forMermaidStyle = function () {
        // 更新顺序图中的角色样式
        $(".md-diagram-panel svg[id^='mermaidChart'] > g > rect[class='actor']").each(function () {
            let target = $(this).next("text").children(), // actor rect object
                text = target.text(),
                prefix = "";
            const person = /\@.+/g, // 人物角色
                keySys = /^\*{2}.+\*{2}$/g, // 重要系统角色
                extSys = /^-{2}.+-{2}$/g; // 外部系统角色

            // 更新<人物角色>样式
            if (person.test(text) === true) {
                const h = $(this).height();
                $(this).css({
                    "rx": h / 2,
                    "ry": h / 2
                });
                $(this).addClass("actor-person");
                prefix = "☺ ";
                target.text(prefix + text.substring(1, text.length));
            }
            // 更新<重要系统角色>样式
            else if (keySys.test(text) === true) {
                // $(this).css("stroke-width", "3");
                // target.css("font-weight", "bold");
                // prefix = "⚠ ";
                target.text(prefix + text.substring(2, text.length - 2));
            }
            // 更新<外部系统角色>样式
            else if (extSys.test(text) === true) {
                $(this).css("stroke-dasharray", "5 2");
                // prefix = "◌ ";
                target.text(prefix + text.substring(2, text.length - 2));
            }
            else {
                // prefix = "△ ";
                target.text(prefix + text);
            }
        });

        // 更新顺序图中的 loop/opt 标签样式和位置，alt 为默认的样式
        $(".md-diagram-panel .labelText tspan").each(function () {
            let text = $(this),
                g = text.parent().parent();
            // 为 opt 设置的样式
            let bgColor = "var(--mermaid-accent-color5-alt)";
            let borderColor = "var(--mermaid-accent-color5)";
            let textColor = "var(--mermaid-accent-color5)";

            // 为 alt 设置样式
            if (text.text() === "alt") {
                bgColor = "var(--mermaid-accent-color4-alt)";
                borderColor = "var(--mermaid-accent-color4)";
                textColor = "var(--mermaid-accent-color4)";
            }

            // 调整 alt、opt 的样式
            if (text.text() === "alt" || text.text() === "opt") {
                // 背景色
                g.children("polygon.labelBox").css("fill", bgColor);
                // 边框色
                g.children("line.loopLine").css("stroke", borderColor);
                // 文本颜色
                g.children("text.labelText").css("fill", textColor);
                g.find("text.labelText > tspan").css("fill", textColor);
                g.find("text.loopText > tspan").css("fill", textColor);
            }

            // 将 alt(alternative)、opt(optional)、loop(loops) 翻译为其他语言
            if (text.text() === "alt")
                text.text([
                    "选择",
                    "選擇",
                    "Alt.",
                    "Alt.",
                    "Alt.",
                    "代替",
                    "대안"
                ][VLOOK.lang.id]);
            else if (text.text() === "opt")
                text.text([
                    "可选",
                    "可選",
                    "Opt.",
                    "Opt.",
                    "Opt.",
                    "ション",
                    "매칭"
                ][VLOOK.lang.id]);
            else if (text.text() === "loop")
                text.text([
                    "循环",
                    "循環",
                    "Loop.",
                    "Loop.",
                    "Loop.",
                    "ループ",
                    "루프"
                ][VLOOK.lang.id]);
        });

        // 调整 loop/opt 的标题文本
        $(".md-diagram-panel .loopText tspan").each(function () {
            // 去掉文本内容前后的中括号
            let text = $(this);
            text.text(text.text().substr(2, text.text().length - 3));

            // 调整文本的位置
            let label = text.parent().parent().find(".labelBox"),
                rect = label[0].getBBox(),
                y = parseInt(text.parent().attr("y"));
                text.parent().attr("style", "text-anchor: left");
                text.attr("x", rect.x + rect.width + 5);
            if (isNaN(y) !== true)
            text.attr("y", y + 3);
        });

        // 为兼容Firefox不支持在style中设置rx, ry，通过设置rect的rx, ry属性
        // 针对mermaid的状态图节点、子图
        $("#START rect, #END rect, #INIT ~ g > rect, .cluster rect").each(function () {
            $(this).attr({
                "rx": 15,
                "ry": 15
            });
        });

        // 修正 mermaid 的渲染 BUG
        RepairTool.fixMermaidRender();
    }

    // ==================== 第三方库修复工具类 ==================== //
    
    function RepairTool() {}

    /**
     * 【补丁】修复 Typora (0.9.9.31.5及更早的版本) 文档内链带标点符号时，导出的 HTML 后不能跳转的 BUG
     */
    RepairTool.fixTyporaInnerLink = function () {
        // 清理内链 href 中「无效」的符号，这个是目前 Typora 导出 HTML 的 BUG 引起的
        let invalidHrefSymbol = " `~!@#$%^&*()_+=[]{}\\|;:'\",.<>?/！…（【】「」、：“”，。《》？〈〉『』";
        $("a[href^='#']").each(function () {
            $(this).attr("href", $(this).attr("href").toLowerCase());
            for (let i = 0, len = invalidHrefSymbol.length; i < len; i++) {
                let href = $(this).attr("href"),
                    ch = invalidHrefSymbol.substr(i, 1);
                if ($(this).attr("href").indexOf(ch) > -1) {
                    let newStr = (i === 0) ? "-" : "";
                    $(this).attr("href", "#" + href.substring(1, href.length).replaceAll(ch, newStr));
                }
            }
        });
    }

    /**
     * 【补丁】修正 mermaid 8.4 在导出 HTML 的渲染 BUG
     */
    RepairTool.fixMermaidRender = function () {
        // 判断生成 mermaid 时 Windows 的 DPR
        let mermaidDPR = 1;
        $(".md-diagram-panel .label > g > foreignObject > div").each(function () {
            // 通过形状的标签文本的行高来判断，正常 DPR=1 下生成的一般为 16
            if (parseInt($(this).css("line-height")) > 20)
                mermaidDPR = 2;
            return false;
        });

        // 修正在 SVG 顺序图的下边界与 actor 无间隔问题（暂时已通过主题样式 .md-diagram-panel svg[viewBox^="-8 -8"] 实现）
        // $(".md-diagram-panel svg, .mdx-figure-content svg").each(function () {
            // if ($(this).find(".actor").length > 0)
            //     $(this).css("padding-bottom", "8px");
        // });

        // 修正线条粗细的样式 BUG
        $(".md-diagram-panel .edgePath > path").each(function () {
            if ($(this).attr("style").startWith("troke-width"))
                $(this).attr("style", "s" + $(this).attr("style"));
        });

        // 当前系统为 macOS，或其 DPR = 1 （默认为 Windows，其他平台未测试）
        if (env.os.macOS || env.display.DPR === 1) {
            // 调整标签文本的容器高度
            $(".md-diagram-panel .edgeLabel foreignObject").each(function () {
                let text = $(this).find("div > span");
                $(this).attr("width", parseInt(text.css("width")));
                $(this).attr("height", parseInt(text.css("height")));
            });
        }
        // 当前系统为 Windows，且其 DPR = 2
        else if (env.os.Windows && env.display.DPR === 2) {
            // 生成 mermaid 时的系统的 DPR = 1
            if (mermaidDPR === 1) {
                // 线条文本
                $(".md-diagram-panel .edgeLabel foreignObject").each(function () {
                    let text = $(this).find("div > span");
                    $(this).attr("width", parseInt(text.css("width")));
                    $(this).attr("height", parseInt(text.css("height")) * 2);
                });

                // 针对 chrome 浏览器
                if (env.browser.Chrome) {
                    // 形状文本
                    $(".md-diagram-panel .label foreignObject").each(function () {
                        let text = $(this).find("div"),
                            transform = $(this).parent();
                        // container.attr("width", parseInt(text.css("width")) * 2);
                        $(this).attr("height", parseInt(text.css("height")) * 2);
                        transform.attr("transform", RepairTool.scaleTuple(transform.attr("transform"), 1, 2));
                    });
                }
            }
            // 生成 mermaid 时的系统的 DPR = 2
            else if (mermaidDPR === 2) {
                // 线条文本
                $(".md-diagram-panel .edgeLabel .label").each(function () {
                    $(this).attr("transform", RepairTool.scaleTuple($(this).attr("transform"), 1, 0.5));
                });
            }
        }
    }

    /**
     * 按倍数调整函数元组数据，目前只支持单个函数，且只能有两个参数
     *
     * @param funcString 函数字符串，如：translate(-12,-18)
     * @param rate1 对第1个参数的调整倍数
     * @param rate2 对第2个参数的调整倍数
     */
    RepairTool.scaleTuple = function (funcString, rate1, rate2) {
        let lbIndex = funcString.indexOf("("),
            dotIndex = funcString.indexOf(","),
            rbIndex = funcString.indexOf(")");

        // 提取两个参数值
        let r1 = funcString.substring(lbIndex + 1, dotIndex),
            r2 = funcString.substring(dotIndex + 1, rbIndex);

        if (rate1 !== 1) r1 = r1 * rate1;
        if (rate2 !== 1) r2 = r2 * rate2;

        return funcString.substring(0, lbIndex + 1) +
            r1 + "," + r2 + ")";
    }

    // ==================== 多彩标签模块 ==================== //

    function ColorTag() {}

    ColorTag.styles = ["msg", "tips", "notice", "caution", "spare", "idle"];
    
    /**
     * 更新指定内容的 code 标记样式
     */
    ColorTag.init = function () {
        // 更新指定内容的<code>标签样式
        $("code").each(function () {
            let codeText = $(this).text(),
                codeTags = null,
                flag = false;

            if (codeText.length < 4)
                return true;

            // 双标签格式
            if (/^#.+\|.+#(msg|tips|notice|caution|spare|idle)?$/i.test(codeText) === true) {
                flag = true;
                ColorTag.restyleDouble($(this), codeText, ColorTag.getStyle(codeText));
            }
            // 单标签格式
            else if (/^#.+#(msg|tips|notice|caution|spare|idle)?$/i.test(codeText) === true) {
                flag = true;
                ColorTag.restyleSingle($(this), codeText, ColorTag.getStyle(codeText));
            }

            // 普通标签增加样式标识，以用于深色模式时的识别
            if (flag === false)
                $(this).addClass("mdx-std-code");
        });
    }

    /**
     * 获得代码块内容中指定类型编号
     *
     * @param codeText 目标 code 的内容
     * @param return 类型编号：1-6
     */
    ColorTag.getStyle = function (codeText) {
        if (codeText.endWith("#"))
            return 4;
        for (let i = 0, len = ColorTag.styles.length; i < len; i++) {
            if (codeText.endWith(ColorTag.styles[i]))
                return i + 1;
        }
        return 0;
    }

    /**
     * 以标签样式重新设置行内代码 code 的渲染样式（新语法）
     *
     * @param target 目标 code 对象
     * @param codeText 目标 code 的内容
     * @param type 标签样式分类编码：1-6
     */
    ColorTag.restyleSingle = function (target, codeText, type) {
            // 获得标签分类代码
        const styleCode = codeText.endWith("#") ? "" : ColorTag.styles[type - 1];
        // 过滤语法内容
        target.text(codeText.substring(1, codeText.length - styleCode.length - 1));
        target.attr("class", "mdx-tag-c" + type);
    }

    /**
     * 以双标签样式重建行内代码 code 标签结构与内容（新语法）
     *
     * @param target 目标 code 对象
     * @param codeText 目标 code 的内容
     * @param type 标签样式分类编码：1-6
     */
    ColorTag.restyleDouble = function (target, codeText, type) {
        const splitIndex = codeText.indexOf("|"),
            styleCode = codeText.endWith("#") ? "" : ColorTag.styles[type - 1];

        // 增加外容器
        target.wrap("<div style='display: inline; white-space: pre;'></div>");
        // 左标签
        target.before("<code class='mdx-tag-name" + type + "'>"
            + codeText.substring(1, splitIndex) + "</code>");
        // 右标签
        target.text(codeText.substring(splitIndex + 1, codeText.length - styleCode.length - 1));
        target.attr("class", "mdx-tag-value" + type);
    }

    /**
     * 更新多行代码块 code block/fences 样式
     *
     * 主要处理三类情况：
     * 1. span包裹标准格式全部内容。如：`= sourcecode =`
     * 2. span分别包裹标准格式的不同部分。如：(`)(=) (sourcecode) (=)(`)
     * 3. span包裹标准格式及其他所有内容。如：sourcecode`= sourcecode =`sourcecode
     */
    // ColorTag.initForCodeBlock = function () {
    //     $("span[class^='cm-']").each(function () {
    //         const reg = /`[=|\+|\*|\-|\!|#](([^`])+[a-z]|[A-Z]|[\S])+[=|\+|\*|\-|\!|#]`/g;
    //         let codeTags = ["=", "+", "*", "-", "!", "#"];
    //         let result = $(this).text().match(reg);
    //         if (result != null) {
    //             const codeText = $(this).text().substring(1, $(this).text().length - 1);
    //             for (var i = 0, len = codeTags.length; i < len; i++) {
    //                 if (codeText.length > 4 && codeText.startWith(codeTags[i] + " ") && codeText.endWith(
    //                         " " +
    //                         codeTags[i])) {
    //                     ColorTag.rebuildForCodeBlock($(this), codeTags[i] + " ", i + 1);
    //                     break;
    //                 }
    //             }
    //         }
    //     });
    // }

    /**
     * 以标签样式重新设置代码块 code block 中指定内容的渲染样式（新语法）
     *
     * @param target 目标 code block 对象
     * @param prefix 标签的标识前缀
     * @param type 标签样式分类编号：1-6
     */
    // ColorTag.rebuildForCodeBlock = function (target, prefix, type) {
    //     const codeText = target.text().substring(1, target.text().length - 1);
    //     const si = codeText.indexOf(prefix);
    //     target.text(codeText.substring(si + prefix.length, codeText.length - prefix.length));
    //     target.attr("class", "mdx-tag-c" + type);
    // }

    // ==================== 新标签打开类 ==================== //

    // ↓ ↓ ↓ ↓ ↓ 以下是属新标签中打开的页面使用  ↓ ↓ ↓ ↓ ↓

    /**
     * 针对在新标签中打开的页面进行二次初始化
     */
    function OINT() {}

    OINT.init = function () {
        $("#write").remove();
        Dom.body().append("<div id='write'></div>");
        iToolbar.ui.remove();
        iOutlineNav.ui.remove();
        iChapterNav.ui.remove();
        ContentAssist.button.openInNewTab.remove();
    }

    /**
     * 在新标签页中打开的页面中添加元素
     */
    OINT.append = function (content) {
        // Dom.body().append(content);
        $("#write").append(content);
    }

    /**
     * 更新插图的题注（用于在新标签打开插图、表格后的强制更新对应内容）
     */
    OINT.updateFigureCaption = function (type, caption1, caption2) {
        let splitIdx = caption1.indexOf(" - "),
            prefix = null,
            cap = null;

        // 存在自定义题注内容
        if (splitIdx > -1) {
            prefix = caption1.substring(0, caption1.indexOf(" - ") + 3);
            cap = caption1.substring(caption1.indexOf(" - ") + 3, caption1.length);
            $(".mdx-figure-caption > .mdx-figure-caption-1").html(prefix + "<strong>" + cap + "</strong>");
        } else
            $(".mdx-figure-caption > .mdx-figure-caption-1").html(caption1);

        if (type !== "img" && caption2 != null) {
            $(".mdx-figure-caption").append("<p class='mdx-figure-caption-2'>");
            $(".mdx-figure-caption > .mdx-figure-caption-2").text(caption2);
        }
    }

    /**
     * 完成在新标签打开页面后进行收尾处理
     */
    OINT.done = function() {
        // 设置为可滚动
        Dom.body().css({
            "overflow": "scroll"
        });
    }

    // ↑ ↑ ↑ ↑ ↑ 以上是属新标签中打开的页面使用 ↑ ↑ ↑ ↑ ↑

    // ==================== VLOOK 加载入口 ==================== // 

    /**
     * HTML文档加载完成后执行主流程
     */
    $(document).ready(function () {
        // 文档不符合 VLOOK 规范则不加载 VLOOK 插件
        if (VLOOK.checkSpecification() === false) {
            $(".mdx-load-screen").hide();
            $(".mdx-toolbar").hide();
            $(".mdx-btn").hide();
            return;
        }

        // 先隐藏，减少页面重绘
        Dom.write().css("display", "none");
        // alert(buildRuby("<div>hello<code>code</code>{注音}(zhù yīn)hello{注音}(zhù yīn)<code>code</code></div>"));

        // ----------------------------------------
        // 打蔫环境信息
        env.print();

        console.info("=== Loading VLOOK ===");

        // ----------------------------------------
        // 初始化关键组件实例
        iStopwatch.lapStart();
        console.info("- Intance");
        VLOOK.initIntance(false);
        iStopwatch.lapStop();

        // // 只支持由 Typora 导出的 HTML 文件
        // if (Dom.body().attr("class").indexOf("typora-export") === -1) {
        //     iWelcomeScreen.ui.hide();
        //     iToolbar.ui.hide();
        //     iChapterNav.ui.hide();
        //     ContentAssist.button.openInNewTab.hide();
        //     ContentAssist.button.copyCodeBlock.hide();

        //     VLOOK.report.push(['Error', 'Format', 'Not Typora Exported', ]);

        //     alert([
        //         "无法激活 VLOOK！\n目前只支持由 Typora 导出的 HTML 文件，谢谢支持！",
        //         "無法激活 VLOOK！\n目前只支持由 Typora 導出的 HTML 文件，謝謝關注！",
        //         "Unable to activate VLOOK!\nCurrently only HTML files exported by Typora are supported. Thank you for your attention!",
        //         "Impossible d'activer VLOOK!\nActuellement, seuls les fichiers HTML exportés par Typora sont pris en charge. Merci de votre attention!",
        //         "Невозможно активировать VLOOK!\nВ настоящее время поддерживаются только HTML-файлы, экспортируемые Typora. Спасибо за внимание!",
        //         "VLOOKをアクティブにできません！\n現在、TyporaによってエクスポートされたHTMLファイルのみがサポートされています。",
        //         "VLOOK를 활성화 할 수 없습니다!\n현재 Typora에서 내 보낸 HTML 파일 만 지원됩니다. 관심을 가져 주셔서 감사합니다!"
        //     ][VLOOK.lang.id]);
        //     return;
        // }

        // 推荐的浏览器类型检测
        if (env.browser.Chrome === false &&
            env.browser.Firefox === false &&
            env.browser.Safari === false) {

            VLOOK.report.push(['Error', 'Browser', navigator.userAgent, ]);

            alert([
                "为获得最佳兼容性，建议使用 Chrome / Edge / Firefox / Safari 浏览器",
                "為獲得最佳兼容性，建議使用 Chrome / Edge / Firefox / Safari / Safari 瀏覽器",
                "For best compatibility, we recommend using Chrome / Edge / Firefox / Safari",
                "Pour une meilleure compatibilité, nous vous recommandons d’utiliser Chrome / Edge / Firefox / Safari",
                "Для лучшей совместимости мы рекомендуем использовать Chrome / Edge / Firefox / Safari",
                "最高の互換性を得るために、 Chrome / Edge / Firefox / Safari の使用をお勧めします",
                "최상의 호환성을 위해 Chrome / Edge / Firefox / Safari 사용을 권장합니다."
            ][VLOOK.lang.id]);
        }

        // ----------------------------------------
        // 初始化 VLOOK Kernel
        // iStopwatch.lapStart();
        console.info("=== Init VLOOK Kernel ===");
        VLOOK.initKernel(null);

        console.info("=== Init VLOOK Misc ===");
        // ----------------------------------------
        // 因默认配色为 Light 模式
        // 若浏览器当前配色为 Dark 模式，除 CSS 的 @media (prefers-color-scheme: dark) 设置外
        // 须进行一些额外的适配
        iStopwatch.lapStart();
        console.info("- Adjust Color Scheme");
        ColorScheme.scheme = getComputedStyle(document.documentElement).getPropertyValue("--vlook-color-scheme")
            .replaceAll("\"", "").trim();
        console.info("    Color Scheme [ " + ColorScheme.scheme + " ]");
        if (ColorScheme.scheme === "dark") {
            console.warn("    Adjusting ...");
            ColorScheme.updateUI();
        }
        // 根据颜色方案对浏览器兼容性处理
        // ColorScheme.afterToggle();
        // 针对 Dark 模式进行图片反色适配处理
        ExtFigure.adjustImageInverInDarkMode();
        iStopwatch.lapStop();

        // ----------------------------------------
        // 更新欢迎屏
        iWelcomeScreen.done();

        // ----------------------------------------
        // 特效初始化
        let effect = VLOOK.util.parseQueryString(window.location.href)["effect"];
        if (effect === undefined)
            effect = "0";
        VLOOK.debug("Effect [ " + effect + " ]");
        if ("0,1,2,3".indexOf(effect) > -1) {
            VLOOK.ui.effect = parseInt(effect);
            VLOOK.ui.initEffect();
        }

        // 完成初始化后显示
        Dom.write().css("display", "block");

        // ----------------------------------------
        // 重置脚本化图表样式
        iStopwatch.lapStart();
        console.info("- Mermaid Style");
        Restyler.forMermaidStyle();
        iStopwatch.lapStop();

        // ----------------------------------------
        // Markdown 化注音语法转换为 rudy 标签 
        // iStopwatch.lapStart();
        // console.info("- Zhuyin to <ruby>");
        // RubyTag.init();
        // iStopwatch.lapStop();

        // ----------------------------------------
        // VLOOK 加载完成
        let loadTimeCost = iStopwatch.stop();
        console.info("[ DONE ]\nTOTAL TIME COST " + loadTimeCost + " ms");
        // 提交统计数据
        VLOOK.report.submit(loadTimeCost);
        VLOOK.report.push(['LoadTime', 'All', 'Times', loadTimeCost]);
    });
</script>
<!--========================================================================-->
<!--                                                                        -->
<!--                                                                        -->
<!--                              END OF VLOOK                              -->
<!--                                                                        -->
<!--                                                                        -->
<!--========================================================================-->
