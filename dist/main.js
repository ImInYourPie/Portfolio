!function(n){var r={};function e(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var i in n)e.d(t,i,function(r){return n[r]}.bind(null,i));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=0)}([function(n,r,e){e(1),window.onload=function(){let n=document.getElementsByClassName("menu-toggler")[0],r=document.getElementsByClassName("top-nav")[0];console.log(n),n.addEventListener("click",e=>{n.classList.toggle("open"),r.classList.toggle("open")})}},function(n,r,e){var t=e(2);"string"==typeof t&&(t=[[n.i,t,""]]);var i={insert:"head",singleton:!1};e(4)(t,i);t.locals&&(n.exports=t.locals)},function(n,r,e){(n.exports=e(3)(!1)).push([n.i,'@font-face {\r\n  font-family: Quicksand;\r\n  src: url("/dist/assets/fonts/Quicksand-Regular.otf") format("opentype");\r\n}\r\n\r\n/* Scrollbar */\r\n::-webkit-scrollbar {\r\n  width: 1rem;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px grey;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: linear-gradient(30deg, #ff3ea5ff, #fddb27ff);\r\n  border-radius: 10px;\r\n}\r\n\r\n/*  */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 10px;\r\n  font-family: "Roboto", sans-serif;\r\n  color: #000;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #ffffff;\r\n  background-size: cover;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #eee;\r\n}\r\n\r\np {\r\n  font-size: 1.8rem;\r\n  font-weight: 300;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n/* Reusables */\r\n.container {\r\n  width: 90%;\r\n  height: 100%;\r\n  max-width: 120rem;\r\n  margin: 0 auto;\r\n  position: relative;\r\n}\r\n\r\n.section-heading {\r\n  text-align: center;\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n.section-heading h1 {\r\n  font-size: 3.5rem;\r\n  color: #00a4ccff;\r\n  text-transform: uppercase;\r\n  font-weight: 300;\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.section-heading h1::before,\r\n.section-heading h1::after {\r\n  content: "";\r\n  position: absolute;\r\n  bottom: -0.5rem;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  opacity: 0.9;\r\n  background: linear-gradient(30deg, #ff3ea5ff, #fddb27ff);\r\n}\r\n\r\n.section-heading h1::before {\r\n  width: 10rem;\r\n  height: 3px;\r\n  border-radius: 0.8rem;\r\n}\r\n\r\n.section-heading h1::after {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  border-radius: 100%;\r\n  bottom: -1rem;\r\n}\r\n\r\n.section-heading h6 {\r\n  font-size: 1.5rem;\r\n  opacity: 0.3;\r\n}\r\n\r\n/* Background fill TESTING!!! */\r\n.background-fill {\r\n}\r\n/*  */\r\n\r\n/* Header */\r\nheader {\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n/*  */\r\n\r\n/* Top-nav */\r\n.top-nav {\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: -100vh;\r\n  z-index: 50;\r\n  background-color: #00a4ccff;\r\n  border-bottom-right-radius: 100%;\r\n  border-bottom-left-radius: 100%;\r\n  transition: all 650ms cubic-bezier(1, 0, 0, 1);\r\n}\r\n/*  */\r\n\r\n/* Nav-list */\r\n.nav-list {\r\n  list-style: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n/*  */\r\n\r\nli {\r\n  margin: 0 2rem;\r\n}\r\n\r\n.nav-link {\r\n  font-family: "Quicksand", sans-serif;\r\n  font-size: 5rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.nav-link:hover,\r\n.nav-link:focus {\r\n  background: linear-gradient(30deg, #ff3ea5ff, #fddb27ff);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.top-nav.open {\r\n  top: 0;\r\n  border-radius: initial;\r\n}\r\n\r\n/* Burger */\r\n.menu-toggler {\r\n  position: absolute;\r\n  top: 5rem;\r\n  right: 5rem;\r\n  width: 5rem;\r\n  height: 4rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n  z-index: 1500;\r\n  transition: transform 650ms ease-out;\r\n}\r\n\r\n.menu-toggler.open {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.bar {\r\n  background: linear-gradient(30deg, #ff3ea5ff, #fddb27ff);\r\n  width: 100%;\r\n  height: 4px;\r\n  border-radius: 0.8rem;\r\n}\r\n\r\n.bar.half {\r\n  width: 50%;\r\n}\r\n\r\n.bar.start {\r\n  transform-origin: right;\r\n  transition: transform 650ms cubic-bezier(0.54, -0.81, 0.57, 0.57);\r\n  -webkit-transition: transform 650ms cubic-bezier(0.54, -0.81, 0.57, 0.57);\r\n  -moz-transition: transform 650ms cubic-bezier(0.54, -0.81, 0.57, 0.57);\r\n}\r\n\r\n.open .bar.start {\r\n  transform: rotate(-450deg) translateX(0.8rem);\r\n}\r\n\r\n.bar.end {\r\n  transform-origin: left;\r\n  align-self: flex-end;\r\n  transition: transform 650ms cubic-bezier(0.54, -0.81, 0.57, 0.57);\r\n  -webkit-transition: transform 650ms cubic-bezier(0.54, -0.81, 0.57, 0.57);\r\n  -moz-transition: transform 650ms cubic-bezier(0.54, -0.81, 0.57, 0.57);\r\n}\r\n\r\n.open .bar.end {\r\n  transform: rotate(-450deg) translateX(-0.8rem);\r\n}\r\n/*  */\r\n\r\n/* Landing text */\r\n.landing-text {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 100%;\r\n  text-align: center;\r\n  z-index: 1;\r\n}\r\n\r\n.landing-text h1 {\r\n  font-size: 10rem;\r\n  font-family: "Quicksand", sans-serif;\r\n  font-weight: 300;\r\n  background: linear-gradient(30deg, #ff3ea5ff, #fddb27ff);\r\n  background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  -webkit-background-clip: text;\r\n  user-select: none;\r\n  padding: 1rem;\r\n}\r\n\r\n.landing-text h6 {\r\n  font-size: 2rem;\r\n  font-weight: 300;\r\n  font-family: "Quicksand", sans-serif;\r\n  color: #00a4ccff;\r\n}\r\n/*  */\r\n\r\n/* Âbout */\r\n.about .container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.about-heading {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  line-height: 0;\r\n  margin-bottom: 6rem;\r\n}\r\n\r\n.about-heading h1 {\r\n  font-size: 10rem;\r\n  opacity: 0.3;\r\n}\r\n\r\n.about-heading h6 {\r\n  font-size: 2rem;\r\n  font-weight: 300;\r\n}\r\n\r\n.about-img {\r\n  flex: 1;\r\n  margin-right: 5rem;\r\n  justify-content: center;\r\n}\r\n\r\n.img {\r\n  width: 100%;\r\n}\r\n\r\n.about-text {\r\n  flex: 1;\r\n}\r\n\r\n.social-media {\r\n  margin-top: 5rem;\r\n}\r\n\r\n.social-media i {\r\n  font-size: 5rem;\r\n  transition: color 650ms;\r\n}\r\n\r\n.fa-facebook-square:hover {\r\n  color: #4267b2;\r\n}\r\n\r\n.fa-linkedin:hover {\r\n  color: #2867b2;\r\n}\r\n\r\n.fa-github-square:hover {\r\n  color: #6e5494;\r\n}\r\n\r\n.social-media-list {\r\n  list-style: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n/*  */\r\n\r\n/* Skills */\r\n.my-skills-1 {\r\n  margin-top: 5rem;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\r\n  grid-gap: 2.5rem;\r\n  text-align: center;\r\n}\r\n\r\n.my-skills-2 {\r\n  margin-top: 2rem;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\r\n  grid-gap: 2.5rem;\r\n  text-align: center;\r\n  padding-bottom: 5rem;\r\n}\r\n\r\n.skill {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 2rem;\r\n}\r\n\r\n.skills-list {\r\n  list-style: none;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.skill h1 {\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.icon-container {\r\n  border-radius: 75%;\r\n  width: 10rem;\r\n  height: 10rem;\r\n  border: 3px solid #fddb27ff;\r\n  background-color: #ff3ea5ff;\r\n  margin-bottom: 2rem;\r\n  display: flex;\r\n}\r\n\r\n.icon-container i {\r\n  color: #fddb27ff;\r\n  font-size: 5rem;\r\n  margin: auto;\r\n}\r\n/*  */\r\n\r\n.portfolio-item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n.portfolio-item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.portfolio-img {\r\n}\r\n',""])},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var i=(a=t,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot).concat(n," */")}));return[e].concat(o).concat([i]).join("\n")}var a,s,l;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2],"{").concat(e,"}"):e})).join("")},r.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(t[o]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&t[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),r.push(s))}},r}},function(n,r,e){"use strict";var t,i={},o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}();function s(n,r){for(var e=[],t={},i=0;i<n.length;i++){var o=n[i],a=r.base?o[0]+r.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};t[a]?t[a].parts.push(s):e.push(t[a]={id:a,parts:[s]})}return e}function l(n,r){for(var e=0;e<n.length;e++){var t=n[e],o=i[t.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](t.parts[a]);for(;a<t.parts.length;a++)o.parts.push(b(t.parts[a],r))}else{for(var s=[];a<t.parts.length;a++)s.push(b(t.parts[a],r));i[t.id]={id:t.id,refs:1,parts:s}}}}function f(n){var r=document.createElement("style");if(void 0===n.attributes.nonce){var t=e.nc;t&&(n.attributes.nonce=t)}if(Object.keys(n.attributes).forEach((function(e){r.setAttribute(e,n.attributes[e])})),"function"==typeof n.insert)n.insert(r);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var c,d=(c=[],function(n,r){return c[n]=r,c.filter(Boolean).join("\n")});function u(n,r,e,t){var i=e?"":t.css;if(n.styleSheet)n.styleSheet.cssText=d(r,i);else{var o=document.createTextNode(i),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(o,a[r]):n.appendChild(o)}}function m(n,r,e){var t=e.css,i=e.media,o=e.sourceMap;if(i&&n.setAttribute("media",i),o&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var g=null,p=0;function b(n,r){var e,t,i;if(r.singleton){var o=p++;e=g||(g=f(r)),t=u.bind(null,e,o,!1),i=u.bind(null,e,o,!0)}else e=f(r),t=m.bind(null,e,r),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else i()}}n.exports=function(n,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=o());var e=s(n,r);return l(e,r),function(n){for(var t=[],o=0;o<e.length;o++){var a=e[o],f=i[a.id];f&&(f.refs--,t.push(f))}n&&l(s(n,r),r);for(var c=0;c<t.length;c++){var d=t[c];if(0===d.refs){for(var u=0;u<d.parts.length;u++)d.parts[u]();delete i[d.id]}}}}}]);