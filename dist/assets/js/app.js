!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=3)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,u=0,l=[],f=n(6);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return g(e,t.attrs),h(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=u++;n=c||(c=v(e)),r=C.bind(null,n,a,!1),o=C.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&p(d(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,A=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function C(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=A(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e,n){(function(n){var r,o;o=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var t={};return Array.prototype.forEach.call(arguments,function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}}),t},r=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),r=n.length,o=-1,i="",a=n.charCodeAt(0);++o<r;){if(0===(e=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=e&&e<=31||127==e||0===o&&48<=e&&e<=57||1===o&&48<=e&&e<=57&&45===a?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(o):"\\"+n.charAt(o)}return"#"+i},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(e,n,r,o){if(n.emitEvents&&"function"==typeof t.CustomEvent){var i=new CustomEvent(e,{bubbles:!0,detail:{anchor:r,toggle:o}});document.dispatchEvent(i)}};return function(a,s){var c,u,l,f,p={cancelScroll:function(t){cancelAnimationFrame(f),f=null,t||i("scrollCancel",c)},animateScroll:function(r,a,s){p.cancelScroll();var u=n(c||e,s||{}),d="[object Number]"===Object.prototype.toString.call(r),h=d||!r.tagName?null:r;if(d||h){var m=t.pageYOffset;u.header&&!l&&(l=document.querySelector(u.header));var v,g,b,y,A,C,x,w,S=function(e){return e?(n=e,parseInt(t.getComputedStyle(n).height,10)+e.offsetTop):0;var n}(l),I=d?r:function(e,n,r,i){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-n-r,0),i&&(a=Math.min(a,o()-t.innerHeight)),a}(h,S,parseInt("function"==typeof u.offset?u.offset(r,a):u.offset,10),u.clip),O=I-m,E=o(),M=0,B=(v=O,b=(g=u).speedAsDuration?g.speed:Math.abs(v/1e3*g.speed),g.durationMax&&b>g.durationMax?g.durationMax:g.durationMin&&b<g.durationMin?g.durationMin:parseInt(b,10));0===t.pageYOffset&&t.scrollTo(0,0),x=r,w=u,d||history.pushState&&w.updateURL&&history.pushState({smoothScroll:JSON.stringify(w),anchor:x.id},document.title,x===document.documentElement?"#top":"#"+x.id),i("scrollStart",u,r,a),p.cancelScroll(!0),t.requestAnimationFrame(function e(n){var o,s,c;y||(y=n),M+=n-y,C=m+O*(s=A=1<(A=0===B?0:M/B)?1:A,"easeInQuad"===(o=u).easing&&(c=s*s),"easeOutQuad"===o.easing&&(c=s*(2-s)),"easeInOutQuad"===o.easing&&(c=s<.5?2*s*s:(4-2*s)*s-1),"easeInCubic"===o.easing&&(c=s*s*s),"easeOutCubic"===o.easing&&(c=--s*s*s+1),"easeInOutCubic"===o.easing&&(c=s<.5?4*s*s*s:(s-1)*(2*s-2)*(2*s-2)+1),"easeInQuart"===o.easing&&(c=s*s*s*s),"easeOutQuart"===o.easing&&(c=1- --s*s*s*s),"easeInOutQuart"===o.easing&&(c=s<.5?8*s*s*s*s:1-8*--s*s*s*s),"easeInQuint"===o.easing&&(c=s*s*s*s*s),"easeOutQuint"===o.easing&&(c=1+--s*s*s*s*s),"easeInOutQuint"===o.easing&&(c=s<.5?16*s*s*s*s*s:1+16*--s*s*s*s*s),o.customEasing&&(c=o.customEasing(s)),c||s),t.scrollTo(0,Math.floor(C)),function(e,n){var o,s,c,l=t.pageYOffset;if(e==n||l==n||(m<n&&t.innerHeight+l)>=E)return p.cancelScroll(!0),s=n,c=d,0===(o=r)&&document.body.focus(),c||(o.focus(),document.activeElement!==o&&(o.setAttribute("tabindex","-1"),o.focus(),o.style.outline="none"),t.scrollTo(0,s)),i("scrollStop",u,r,a),!(f=y=null)}(C,I)||(f=t.requestAnimationFrame(e),y=n)})}}},d=function(e){if(!("matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches)&&0===e.button&&!e.metaKey&&!e.ctrlKey&&"closest"in e.target&&(u=e.target.closest(a))&&"a"===u.tagName.toLowerCase()&&!e.target.closest(c.ignore)&&u.hostname===t.location.hostname&&u.pathname===t.location.pathname&&/#/.test(u.href)){var n=r(u.hash),o=c.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);(o=o||"#top"!==n?o:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var n=t.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:n||t.pageYOffset},document.title,n||t.location.href)}}(c),p.animateScroll(o,u))}},h=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(r(history.state.anchor)))||p.animateScroll(e,null,{updateURL:!1})}};return p.destroy=function(){c&&(document.removeEventListener("click",d,!1),t.removeEventListener("popstate",h,!1),p.cancelScroll(),f=l=u=c=null)},function(){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";p.destroy(),c=n(e,s||{}),l=c.header?document.querySelector(c.header):null,document.addEventListener("click",d,!1),c.updateURL&&c.popstate&&t.addEventListener("popstate",h,!1)}(),p}}(o)}.apply(e,[]))||(t.exports=r)}).call(this,n(11))},function(t,e,n){"use strict";n.r(e);n(4),n(7),n(8),n(10);var r=n(2);new(n.n(r).a)('a[href*="#"]')},function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(0)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"main.css"}])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){},function(t,e,n){var r=n(9);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(0)(!0)).push([t.i,'.hvr-overline-from-center {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.hvr-overline-from-center:before {\r\n    content: "";\r\n    position: absolute;\r\n    z-index: -1;\r\n    left: 51%;\r\n    right: 51%;\r\n    top: 0;\r\n    background: #f9d10d;\r\n    height: 2px;\r\n    -webkit-transition-property: left, right;\r\n    transition-property: left, right;\r\n    -webkit-transition-duration: 0.3s;\r\n    transition-duration: 0.3s;\r\n    -webkit-transition-timing-function: ease-out;\r\n    transition-timing-function: ease-out;\r\n}\r\n.hvr-overline-from-center:hover:before, .hvr-overline-from-center:focus:before, .hvr-overline-from-center:active:before {\r\n    left: 0;\r\n    right: 0;\r\n}\r\n',"",{version:3,sources:["overline-from-center.css"],names:[],mappings:"AAAA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,iDAAiD;IACjD,yCAAyC;IACzC,oCAAoC;IACpC,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,UAAU;IACV,MAAM;IACN,mBAAmB;IACnB,WAAW;IACX,wCAAwC;IACxC,gCAAgC;IAChC,iCAAiC;IACjC,yBAAyB;IACzB,4CAA4C;IAC5C,oCAAoC;AACxC;AACA;IACI,OAAO;IACP,QAAQ;AACZ",file:"overline-from-center.css",sourcesContent:['.hvr-overline-from-center {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.hvr-overline-from-center:before {\r\n    content: "";\r\n    position: absolute;\r\n    z-index: -1;\r\n    left: 51%;\r\n    right: 51%;\r\n    top: 0;\r\n    background: #f9d10d;\r\n    height: 2px;\r\n    -webkit-transition-property: left, right;\r\n    transition-property: left, right;\r\n    -webkit-transition-duration: 0.3s;\r\n    transition-duration: 0.3s;\r\n    -webkit-transition-timing-function: ease-out;\r\n    transition-timing-function: ease-out;\r\n}\r\n.hvr-overline-from-center:hover:before, .hvr-overline-from-center:focus:before, .hvr-overline-from-center:active:before {\r\n    left: 0;\r\n    right: 0;\r\n}\r\n']}])},function(t,e){var n;(n=jQuery)(document).on("click",".item-close",function(t){n(t.target).closest(".grid-item").css("display","none")}),n(document).on("click",".item-edit",function(t){t.preventDefault(),n(t.target).next().attr("contenteditable")?(n(t.target).next().removeAttr("contenteditable").css("box-shadow","none"),n(t.target).next().next().removeAttr("contenteditable").css("box-shadow","none")):(n(t.target).next().attr("contenteditable",!0).css("box-shadow","inset 0px 0px 5px 0px #60e3a1"),n(t.target).next().next().attr("contenteditable",!0).css("box-shadow","inset 0px 0px 5px 0px #60e3a1"))}),n(document).on("click",".item-link",function(t){"undefined"!=typeof Storage?(sessionStorage.title=n(t.target).prev().prev().text(),sessionStorage.comment=n(t.target).prev().text()):n(".comment-title").append("Your browser does not support storage")})},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":n(window))&&(r=window)}t.exports=r}]);