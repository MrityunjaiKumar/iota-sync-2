"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9619],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),f=i,g=u["".concat(o,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(g,c(c({ref:t},l),{},{components:r})):n.createElement(g,c({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,c[1]=s;for(var d=2;d<a;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},589:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:11},c="KEYPAD",s={unversionedId:"Arduino_AVR/Keybpad_Interfacing",id:"Arduino_AVR/Keybpad_Interfacing",title:"KEYPAD",description:"There many kind of keypads in Arduino. So you can use any kind of Arduino keypads.",source:"@site/docs/02_Arduino_AVR/10_Keybpad_Interfacing.md",sourceDirName:"02_Arduino_AVR",slug:"/Arduino_AVR/Keybpad_Interfacing",permalink:"/docs/Arduino_AVR/Keybpad_Interfacing",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"BUZZER INTRODUCTION",permalink:"/docs/Arduino_AVR/Buzzer"},next:{title:"LCD INTERFACING",permalink:"/docs/Arduino_AVR/lcd_interfface"}},o={},d=[{value:"KEYPAD INTERFACING",id:"keypad-interfacing",level:2},{value:"HIGH SIDE SWITCHING",id:"high-side-switching",level:3},{value:"LOW SIDE SWITCHING",id:"low-side-switching",level:3},{value:"KEYPAD CONNECTIONS",id:"keypad-connections",level:3},{value:"EXERCISE",id:"exercise",level:3},{value:"HARDWARE",id:"hardware",level:2},{value:"SOFTWARE",id:"software",level:2},{value:"Practise Exercise",id:"practise-exercise",level:2}],l={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"keypad"},"KEYPAD"),(0,i.kt)("p",null,"There many kind of keypads in Arduino. So you can use any kind of Arduino keypads.\nThere are some images of keypad."),(0,i.kt)("h2",{id:"keypad-interfacing"},"KEYPAD INTERFACING"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(6977).Z,width:"1053",height:"405"})),(0,i.kt)("h3",{id:"high-side-switching"},"HIGH SIDE SWITCHING"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(7545).Z,width:"360",height:"488"})),(0,i.kt)("h3",{id:"low-side-switching"},"LOW SIDE SWITCHING"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(9705).Z,width:"328",height:"494"})),(0,i.kt)("h3",{id:"keypad-connections"},"KEYPAD CONNECTIONS"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(9167).Z,width:"692",height:"480"})),(0,i.kt)("h3",{id:"exercise"},"EXERCISE"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Based on switch array input change the frequency of sound at which the buzzer beeps")),(0,i.kt)("h2",{id:"hardware"},"HARDWARE"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(2183).Z,width:"1072",height:"464"})),(0,i.kt)("h2",{id:"software"},"SOFTWARE"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(5373).Z,width:"412",height:"555"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(6160).Z,width:"431",height:"391"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(1432).Z,width:"505",height:"595"})),(0,i.kt)("h2",{id:"practise-exercise"},"Practise Exercise"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Based on switch array set some tone")))}p.isMDXComponent=!0},1432:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/lecture11_pg10-82d4abe16640468c2d8dac64aec55158.JPG"},6977:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/lecture11_pg2-7b58d823a461298124c2a2226201f94f.JPG"},7545:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/lecture11_pg3-4c283dca94222edb96acd8ea7a15ea5c.JPG"},9705:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/lecture11_pg4-b180c3522444d524c524b0fb691b90b2.JPG"},9167:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/lecture11_pg5-44b00cc8df525e7fb5f9688caafd5253.JPG"},2183:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/lecture11_pg7-16612eb493d965dae8e09f27a9e2def0.JPG"},5373:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/lecture11_pg8-c063f3df68fa155835b5c713d94062fa.JPG"},6160:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/lecture11_pg9-7735342c993a866525e64a79a5b09986.JPG"}}]);