!function(r){var n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,n){if(1&n&&(r=e(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var o in r)e.d(t,o,function(n){return r[n]}.bind(null,o));return t},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="",e(e.s=0)}([function(r,n,e){"use strict";e.r(n);e(1);window.onload=function(){let r=document.getElementsByClassName("menu-toggler")[0],n=document.getElementsByClassName("top-nav")[0];r.addEventListener("click",e=>{r.classList.toggle("open"),n.classList.toggle("open")}),document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",e=>{r.classList.toggle("open"),n.classList.toggle("open")})})}},function(r,n,e){var t=e(2);"string"==typeof t&&(t=[[r.i,t,""]]);var o={insert:"head",singleton:!1};e(6)(t,o);t.locals&&(r.exports=t.locals)},function(r,n,e){n=r.exports=e(3)(!1);var t=e(4)(e(5));n.push([r.i,'@font-face {\r\n  font-family: "Quicksand";\r\n  src: url('+t+');\r\n}\r\n\r\n/* Scrollbar */\r\n::-webkit-scrollbar {\r\n  width: 1rem;\r\n}\r\n\r\n/* Track */\r\n/* ::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px grey;\r\n  border-radius: 10px;\r\n} */\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: linear-gradient(30deg, #ff3ea5ff, #fddb27ff);\r\n  border-radius: 10px;\r\n}\r\n\r\n/*  */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-size: 10px;\r\n  font-family: "Roboto", sans-serif;\r\n  color: #fff;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #1a1a1d;\r\n  background-size: cover;\r\n}\r\n\r\nsection {\r\n  padding: 6rem 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #eee;\r\n}\r\n\r\np {\r\n  font-size: 1.8rem;\r\n  font-weight: 300;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n/* Reusables */\r\n.container {\r\n  width: 90%;\r\n  height: 100%;\r\n  max-width: 120rem;\r\n  margin: 0 auto;\r\n  position: relative;\r\n}\r\n\r\n.section-heading {\r\n  text-align: center;\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n.section-heading h1 {\r\n  font-size: 3.5rem;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  font-weight: 300;\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.section-heading h1::before,\r\n.section-heading h1::after {\r\n  content: "";\r\n  position: absolute;\r\n  bottom: -0.5rem;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  opacity: 0.9;\r\n  background: linear-gradient(30deg, #ff3ea5ff, #fddb27ff);\r\n}\r\n\r\n.section-heading h1::before {\r\n  width: 10rem;\r\n  height: 3px;\r\n  border-radius: 0.8rem;\r\n}\r\n\r\n.section-heading h1::after {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  border-radius: 100%;\r\n  bottom: -1rem;\r\n}\r\n\r\n.section-heading h6 {\r\n  font-size: 1.5rem;\r\n  opacity: 0.3;\r\n}\r\n\r\n.has-margin-right {\r\n  margin-right: 5rem;\r\n}\r\n\r\n/* Background fill TESTING!!! */\r\n.background-fill {\r\n}\r\n/*  */\r\n\r\n/* Header */\r\nheader {\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n/*  */\r\n\r\n/* Top-nav */\r\n.top-nav {\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: -100vh;\r\n  z-index: 50;\r\n  background-color: #000;\r\n  border-bottom-right-radius: 100%;\r\n  border-bottom-left-radius: 100%;\r\n  transition: all 650ms cubic-bezier(1, 0, 0, 1);\r\n}\r\n/*  */\r\n\r\n/* Nav-list */\r\n.nav-list {\r\n  list-style: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n/*  */\r\n\r\nli {\r\n  margin: 0 2rem;\r\n}\r\n\r\n.nav-link {\r\n  font-family: "Quicksand", sans-serif;\r\n  font-size: 5rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.nav-link:hover,\r\n.nav-link:focus {\r\n  background: linear-gradient(30deg, #ff3ea5ff, #fddb27ff);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.top-nav.open {\r\n  top: 0;\r\n  border-radius: initial;\r\n}\r\n\r\n/* Burger */\r\n.menu-toggler {\r\n  position: absolute;\r\n  top: 5rem;\r\n  right: 5rem;\r\n  width: 5rem;\r\n  height: 4rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n  z-index: 1500;\r\n  transition: transform 650ms ease-out;\r\n}\r\n\r\n.menu-toggler.open {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.bar {\r\n  background: linear-gradient(30deg, #ff3ea5ff, #fddb27ff);\r\n  width: 100%;\r\n  height: 4px;\r\n  border-radius: 0.8rem;\r\n}\r\n\r\n.bar.half {\r\n  width: 50%;\r\n}\r\n\r\n.bar.start {\r\n  transform-origin: right;\r\n  transition: transform 650ms cubic-bezier(0.54, -0.81, 0.57, 0.57);\r\n  -webkit-transition: transform 650ms cubic-bezier(0.54, -0.81, 0.57, 0.57);\r\n  -moz-transition: transform 650ms cubic-bezier(0.54, -0.81, 0.57, 0.57);\r\n}\r\n\r\n.open .bar.start {\r\n  transform: rotate(-450deg) translateX(0.8rem);\r\n}\r\n\r\n.bar.end {\r\n  transform-origin: left;\r\n  align-self: flex-end;\r\n  transition: transform 650ms cubic-bezier(0.54, -0.81, 0.57, 0.57);\r\n  -webkit-transition: transform 650ms cubic-bezier(0.54, -0.81, 0.57, 0.57);\r\n  -moz-transition: transform 650ms cubic-bezier(0.54, -0.81, 0.57, 0.57);\r\n}\r\n\r\n.open .bar.end {\r\n  transform: rotate(-450deg) translateX(-0.8rem);\r\n}\r\n/*  */\r\n\r\n/* Landing text */\r\n.landing-text {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 100%;\r\n  text-align: center;\r\n  z-index: 1;\r\n}\r\n\r\n.landing-text h1 {\r\n  font-size: 10rem;\r\n  font-family: "Quicksand", sans-serif;\r\n  font-weight: 300;\r\n  background: linear-gradient(30deg, #ff3ea5ff, #fddb27ff);\r\n  background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  -webkit-background-clip: text;\r\n  user-select: none;\r\n  padding: 1rem;\r\n}\r\n\r\n.landing-text h6 {\r\n  font-size: 2rem;\r\n  font-weight: 300;\r\n  font-family: "Quicksand", sans-serif;\r\n  color: #fff;\r\n}\r\n/*  */\r\n\r\n/* Âbout */\r\n.about .container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.about-heading {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  line-height: 0;\r\n  margin-bottom: 6rem;\r\n}\r\n\r\n.about-heading h1 {\r\n  font-size: 10rem;\r\n  opacity: 0.3;\r\n}\r\n\r\n.about-heading h6 {\r\n  font-size: 2rem;\r\n  font-weight: 300;\r\n}\r\n\r\n.about p {\r\n  text-justify: inter-word;\r\n  text-align: center;\r\n}\r\n\r\n.about-img {\r\n  flex: 1;\r\n  margin-right: 5rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.img {\r\n  width: 50rem;\r\n}\r\n\r\n.about-text {\r\n  flex: 1;\r\n}\r\n\r\n.social-media {\r\n  margin-top: 5rem;\r\n}\r\n\r\n.social-media i {\r\n  font-size: 5rem;\r\n  transition: color 650ms;\r\n}\r\n\r\n.fa-facebook-square:hover {\r\n  color: #4267b2;\r\n}\r\n\r\n.fa-linkedin:hover {\r\n  color: #2867b2;\r\n}\r\n\r\n.fa-github-square:hover {\r\n  color: #6e5494;\r\n}\r\n\r\n.social-media-list {\r\n  list-style: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n/*  */\r\n\r\n/* Skills */\r\n.my-skills-1 {\r\n  margin-top: 10rem;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));\r\n  grid-gap: 2.5rem;\r\n  text-align: center;\r\n}\r\n\r\n.my-skills-2 {\r\n  margin-top: 2rem;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\r\n  grid-gap: 2.5rem;\r\n  text-align: center;\r\n  padding-bottom: 5rem;\r\n}\r\n\r\n.skill {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 2rem;\r\n}\r\n\r\n.skills-list {\r\n  list-style: none;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.skill h1 {\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  margin: 2rem -2px 2rem 0;\r\n}\r\n\r\n/* .skills {\r\n  background-color: whitesmoke;\r\n} */\r\n\r\n.icon-container {\r\n  border-radius: 75%;\r\n  width: 15rem;\r\n  height: 15rem;\r\n  border: 3px solid #fddb27ff;\r\n  background-color: #ff3ea5ff;\r\n  margin-bottom: 2rem;\r\n  display: flex;\r\n}\r\n\r\n.icon-container i {\r\n  color: #fddb27ff;\r\n  font-size: 7rem;\r\n  margin: auto;\r\n}\r\n/*  */\r\n\r\n.portfolio-item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 5rem;\r\n}\r\n\r\n.portfolio-item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.portfolio-img-item {\r\n  flex: 1;\r\n}\r\n\r\n.portfolio-description {\r\n  flex: 1;\r\n}\r\n\r\n.stack-ul {\r\n  list-style: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: left;\r\n  align-items: flex-start;\r\n}\r\n\r\n.portfolio-description h6 {\r\n  font-size: 1.5rem;\r\n  text-transform: uppercase;\r\n  font-weight: 300;\r\n  opacity: 0.5;\r\n}\r\n\r\n.portfolio-description p {\r\n  text-justify: inter-word;\r\n  text-align: justify;\r\n}\r\n\r\n.portfolio-description h5 {\r\n  font-size: 1.5rem;\r\n  text-transform: uppercase;\r\n  font-weight: 200;\r\n  margin-top: 2rem;\r\n  padding: 1rem 0;\r\n}\r\n\r\n.portfolio-description h1 {\r\n  font-size: 2.5rem;\r\n  font-weight: 300;\r\n  color: #fddb27ff;\r\n}\r\n\r\n.code-source-code {\r\n}\r\n\r\n.code-ul {\r\n  list-style: none;\r\n  font-size: 1.5rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.code-ul li {\r\n  margin: 1rem;\r\n}\r\n\r\n.code-ul a {\r\n  color: #fddb27ff;\r\n  border-radius: 0.4rem;\r\n  padding: 0.4rem;\r\n  background-color: #ff3ea5ff;\r\n}\r\n\r\n.code-ul span {\r\n  color: #fddb27ff;\r\n  border-radius: 0.4rem;\r\n  padding: 0.4rem;\r\n  background-color: #ff3ea5ff;\r\n  opacity: 0.3;\r\n}\r\n\r\n.private,\r\n.private:hover,\r\n.private:focus {\r\n  color: #fddb27ff;\r\n}\r\n\r\n.code-ul span:hover {\r\n  cursor: default;\r\n}\r\n\r\n.code-ul a:focus,\r\n.code-ul a:hover {\r\n  color: #ff3ea5ff;\r\n  background-color: #fddb27ff;\r\n}\r\n\r\n/* Contact */\r\n.contact {\r\n  /* background-color: whitesmoke; */\r\n  padding-bottom: 10rem;\r\n}\r\n\r\nform {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n}\r\n\r\nform label {\r\n  font-size: 1.5rem;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  margin-bottom: 10px;\r\n  border: none;\r\n  border-radius: 0.4rem;\r\n  outline-color: #ff3ea5ff;\r\n}\r\n\r\ninput[type="submit"] {\r\n  width: initial;\r\n  background-color: #ff3ea5ff;\r\n  color: #fddb27ff;\r\n  border-radius: 0.4rem;\r\n  padding: 1rem 2rem;\r\n  cursor: pointer;\r\n  transition: background-color 650ms;\r\n}\r\n\r\ninput[type="submit"]:hover {\r\n  color: #ff3ea5ff;\r\n  background-color: #fddb27ff;\r\n}\r\n/*  */\r\n\r\n/* Footer */\r\n.footer {\r\n  width: 100%;\r\n  text-align: center;\r\n  background-color: #000;\r\n  padding: 2rem 0;\r\n  position: relative;\r\n}\r\n\r\n.up {\r\n  position: absolute;\r\n  width: 5rem;\r\n  height: 5rem;\r\n  background-color: #ff3ea5ff;\r\n  top: -2.5rem;\r\n  right: 5rem;\r\n  border-radius: 100%;\r\n  display: flex;\r\n  animation: pulse 2s infinite;\r\n  -webkit-animation: pulse 2s infinite;\r\n}\r\n\r\n.up i {\r\n  color: #fddb27ff;\r\n  font-size: 2rem;\r\n  margin: auto;\r\n}\r\n\r\n.footer p {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n@keyframes pulse {\r\n  0% {\r\n    box-shadow: 0 0 0 0 rgba(255, 62, 165, 0.99);\r\n  }\r\n  70% {\r\n    box-shadow: 0 0 0 2rem rgba(255, 62, 165, 0);\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 0 0 rgba(255, 62, 165, 0);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes pulse {\r\n  0% {\r\n    box-shadow: 0 0 0 0 rgba(255, 62, 165, 0.99);\r\n  }\r\n  70% {\r\n    box-shadow: 0 0 0 2rem rgba(255, 62, 165, 0);\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 0 0 rgba(255, 62, 165, 0);\r\n  }\r\n}\r\n\r\n@-moz-keyframes pulse {\r\n  0% {\r\n    box-shadow: 0 0 0 0 rgba(255, 62, 165, 0.99);\r\n  }\r\n  70% {\r\n    box-shadow: 0 0 0 2rem rgba(255, 62, 165, 0);\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 0 0 rgba(255, 62, 165, 0);\r\n  }\r\n}\r\n\r\n/*  */\r\n\r\n/* Screen sizes */\r\n\r\n@media screen and (max-width: 768px) {\r\n  .landing-text h1 {\r\n    font-size: 15rem;\r\n  }\r\n\r\n  .landing-text h6 {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .nav-list {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .my-skills-1 {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .nav-list li {\r\n    margin: 2rem 0;\r\n  }\r\n\r\n  .nav-links {\r\n    font-size: 4.5rem;\r\n  }\r\n\r\n  .about-heading h1 {\r\n    font-size: 8rem;\r\n  }\r\n\r\n  .section-heading h1 {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .about-details .nav-list {\r\n    flex-direction: initial;\r\n  }\r\n\r\n  .about-details li {\r\n    margin: 0 2rem;\r\n  }\r\n\r\n  .icon-container {\r\n    width: 9rem;\r\n    height: 9rem;\r\n  }\r\n\r\n  .icon-container i {\r\n    font-size: 4rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .menu-toggler {\r\n    top: 2rem;\r\n    right: 2rem;\r\n  }\r\n\r\n  .landing-text h1 {\r\n    font-size: 8rem;\r\n  }\r\n\r\n  .landing-text h6 {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .nav-link {\r\n    font-size: 3.5rem;\r\n  }\r\n\r\n  .about .container {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .portfolio-item {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .portfolio-img-item {\r\n    margin: 0 0 2rem 0;\r\n    order: 1;\r\n  }\r\n\r\n  .portfolio-description {\r\n    margin: 0;\r\n    order: 2;\r\n  }\r\n\r\n  .stack-ul {\r\n    display: grid;\r\n  }\r\n\r\n  form {\r\n    width: 100%;\r\n  }\r\n\r\n  .up {\r\n    right: 2rem;\r\n  }\r\n}\r\n\r\n/*  */\r\n\r\n/* Icons */\r\n.svg-icon {\r\n  height: 16px;\r\n  width: 16px;\r\n}\r\n\r\n.fa-node-js {\r\n  color: green;\r\n}\r\n\r\n.fa-vuejs {\r\n  color: #42b883;\r\n}\r\n\r\n.fa-react {\r\n  color: #61dbfb;\r\n}\r\n\r\n.fa-html5 {\r\n  color: #e34f26;\r\n}\r\n\r\n.fa-bootstrap {\r\n  color: #602c50;\r\n}\r\n\r\n.fa-js-square {\r\n  color: #f0db4f;\r\n}\r\n\r\n.fa-css3-alt {\r\n  color: #264de4;\r\n}\r\n/*  */\r\n',""])},function(r,n,e){"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=function(r,n){var e=r[1]||"",t=r[3];if(!t)return e;if(n&&"function"==typeof btoa){var o=(a=t,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),f="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(f," */")),i=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot).concat(r," */")}));return[e].concat(i).concat([o]).join("\n")}var a,s,f;return[e].join("\n")}(n,r);return n[2]?"@media ".concat(n[2],"{").concat(e,"}"):e})).join("")},n.i=function(r,e){"string"==typeof r&&(r=[[null,r,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(t[i]=!0)}for(var a=0;a<r.length;a++){var s=r[a];null!=s[0]&&t[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),n.push(s))}},n}},function(r,n,e){"use strict";r.exports=function(r,n){return"string"!=typeof(r=r.__esModule?r.default:r)?r:(/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),/["'() \t\n]/.test(r)||n?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r)}},function(r,n,e){r.exports=e.p+"3ce1580b66db6742cecd4b41519fb5f1.otf"},function(r,n,e){"use strict";var t,o={},i=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}();function s(r,n){for(var e=[],t={},o=0;o<r.length;o++){var i=r[o],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};t[a]?t[a].parts.push(s):e.push(t[a]={id:a,parts:[s]})}return e}function f(r,n){for(var e=0;e<r.length;e++){var t=r[e],i=o[t.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](t.parts[a]);for(;a<t.parts.length;a++)i.parts.push(b(t.parts[a],n))}else{for(var s=[];a<t.parts.length;a++)s.push(b(t.parts[a],n));o[t.id]={id:t.id,refs:1,parts:s}}}}function l(r){var n=document.createElement("style");if(void 0===r.attributes.nonce){var t=e.nc;t&&(r.attributes.nonce=t)}if(Object.keys(r.attributes).forEach((function(e){n.setAttribute(e,r.attributes[e])})),"function"==typeof r.insert)r.insert(n);else{var o=a(r.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var c,d=(c=[],function(r,n){return c[r]=n,c.filter(Boolean).join("\n")});function u(r,n,e,t){var o=e?"":t.css;if(r.styleSheet)r.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=r.childNodes;a[n]&&r.removeChild(a[n]),a.length?r.insertBefore(i,a[n]):r.appendChild(i)}}function m(r,n,e){var t=e.css,o=e.media,i=e.sourceMap;if(o&&r.setAttribute("media",o),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var g=null,p=0;function b(r,n){var e,t,o;if(n.singleton){var i=p++;e=g||(g=l(n)),t=u.bind(null,e,i,!1),o=u.bind(null,e,i,!0)}else e=l(n),t=m.bind(null,e,n),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else o()}}r.exports=function(r,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=s(r,n);return f(e,n),function(r){for(var t=[],i=0;i<e.length;i++){var a=e[i],l=o[a.id];l&&(l.refs--,t.push(l))}r&&f(s(r,n),n);for(var c=0;c<t.length;c++){var d=t[c];if(0===d.refs){for(var u=0;u<d.parts.length;u++)d.parts[u]();delete o[d.id]}}}}}]);