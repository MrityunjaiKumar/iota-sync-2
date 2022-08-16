"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,v=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(v,a(a({ref:t},s),{},{components:n})):r.createElement(v,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="00 Setting up enviroment",u={unversionedId:"Arduino_ESP8266/Environment_setup",id:"Arduino_ESP8266/Environment_setup",title:"00 Setting up enviroment",description:"Install an IDE to compile our source code and burn to device.",source:"@site/docs/03_Arduino_ESP8266/00_Environment_setup.md",sourceDirName:"03_Arduino_ESP8266",slug:"/Arduino_ESP8266/Environment_setup",permalink:"/docs/Arduino_ESP8266/Environment_setup",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ESP8266 (Arduino) Tutorials ",permalink:"/docs/category/esp8266-arduino-tutorials-"},next:{title:"WiFi Access point",permalink:"/docs/Arduino_ESP8266/Exp1_WiFI_AP"}},c={},p=[],s={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"00-setting-up-enviroment"},"00 Setting up enviroment"),(0,o.kt)("p",null,"Install an IDE to compile our source code and burn to device."),(0,o.kt)("p",null,"Source :- ",(0,o.kt)("a",{parentName:"p",href:"http://sincgrid.in/avr-tutorials/avr-tutorial-environment-setup-avr-studio/"},"http://sincgrid.in/avr-tutorials/avr-tutorial-environment-setup-avr-studio/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="avr-tutorial-environment-setup-avr-studio"',title:'"avr-tutorial-environment-setup-avr-studio"'},'#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello World!";\n  return 0;\n}\n')))}l.isMDXComponent=!0}}]);