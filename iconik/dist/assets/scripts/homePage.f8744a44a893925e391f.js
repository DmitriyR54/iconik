!function(){var e,t,r,n={337:function(e,t,r){"use strict";const n=()=>{const e=document.querySelectorAll(".lazy-image"),t=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const n=e.target,o=n.querySelector("img"),i=o.getAttribute("data-src");r(886)("./".concat(i)).then((e=>{o.setAttribute("src",e.default),o.addEventListener("load",(()=>{n.classList.add("image-loaded")}))})),t.unobserve(o)}}))}),{threshold:.2});e.forEach((e=>t.observe(e)))},o=document.querySelector(".header__nav"),i=document.querySelector(".header__nav-btn");let s=!1;i.addEventListener("click",(()=>{s?(s=!1,i.classList.remove("header__nav-btn--active"),o.classList.remove("header__nav--active"),document.body.style.overflow="visible",i.setAttribute("aria-expanded",!1)):(s=!0,i.classList.add("header__nav-btn--active"),o.classList.add("header__nav--active"),document.body.style.overflow="hidden",i.setAttribute("aria-expanded",!0))}));var c=r(595);let a;var u;u="services__carousel",a=new c.ZP("#".concat(u),{perPage:3,gap:"20px",pagination:!1,flickPower:200,breakpoints:{768:{perPage:2},576:{perPage:1}}}),a.mount();const l=document.querySelectorAll("#services__carousel .splide__slide");let d=[];l.forEach((e=>{d.push(e)})),a.remove(".splide__slide"),setTimeout((()=>{d.forEach((e=>{a.add(e),console.log(e),n()}))}),3e3),window.addEventListener("DOMContentLoaded",(()=>{(()=>{document.body.style.overflow="auto";const e=document.querySelector(".loadingPlaceholder");e.classList.add("loadingPlaceholder-hidden"),setTimeout((()=>{e.remove(),document.querySelector("#loadingPlaceholderStyles").remove()}),350)})(),n()}))},886:function(e,t,r){var n={"./services-1.webp":761,"./services-2.webp":133,"./services-3.webp":352,"./services-4.webp":670,"./services-5.webp":305};function o(e){return i(e).then((function(e){return r.t(e,1)}))}function i(e){return Promise.resolve().then((function(){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}))}o.keys=function(){return Object.keys(n)},o.resolve=i,o.id=886,e.exports=o},761:function(e,t,r){"use strict";e.exports=r.p+"assets/images/services-1.webp"},133:function(e,t,r){"use strict";e.exports=r.p+"assets/images/services-2.webp"},352:function(e,t,r){"use strict";e.exports=r.p+"assets/images/services-3.webp"},670:function(e,t,r){"use strict";e.exports=r.p+"assets/images/services-4.webp"},305:function(e,t,r){"use strict";e.exports=r.p+"assets/images/services-5.webp"}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.m=n,e=[],i.O=function(t,r,n,o){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],o=e[l][2];for(var c=!0,a=0;a<r.length;a++)(!1&o||s>=o)&&Object.keys(i.O).every((function(e){return i.O[e](r[a])}))?r.splice(a--,1):(c=!1,o<s&&(s=o));if(c){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o]},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var s={};t=t||[null,r({}),r([]),r(r)];for(var c=2&n&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((function(t){s[t]=function(){return e[t]}}));return s.default=function(){return e},i.d(o,s),o},i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../"}(),function(){var e={424:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,s=r[0],c=r[1],a=r[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(n in c)i.o(c,n)&&(i.m[n]=c[n]);if(a)var l=a(i)}for(t&&t(r);u<s.length;u++)o=s[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(l)},r=self.webpackChunkiconik=self.webpackChunkiconik||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var s=i.O(void 0,[712],(function(){return i(337)}));s=i.O(s)}();
//# sourceMappingURL=homePage.f8744a44a893925e391f.js.map