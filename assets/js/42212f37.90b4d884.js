"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2624],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(t),m=i,f=s["".concat(l,".").concat(m)]||s[m]||p[m]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2665:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:10},o="09 Experiment",c={unversionedId:"AVR_Embedded_C/Exp9",id:"AVR_Embedded_C/Exp9",title:"09 Experiment",description:"Automatic Porch Light",source:"@site/docs/04_AVR_Embedded_C/09_Exp9.md",sourceDirName:"04_AVR_Embedded_C",slug:"/AVR_Embedded_C/Exp9",permalink:"/docs/AVR_Embedded_C/Exp9",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"07 Experiment",permalink:"/docs/AVR_Embedded_C/Exp8"},next:{title:"10 Experiment",permalink:"/docs/AVR_Embedded_C/Exp10"}},l={},d=[{value:"Source  and description",id:"source--and-description",level:2}],u={toc:d};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"09-experiment"},"09 Experiment"),(0,i.kt)("p",null,"Automatic Porch Light"),(0,i.kt)("h2",{id:"source--and-description"},"Source  and description"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://sincgrid.in/avr-tutorials/avr-tutorial-experiment-9/"},"http://sincgrid.in/avr-tutorials/avr-tutorial-experiment-9/")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="http://sincgrid.in/avr-tutorials/avr-tutorial-experiment-9/"',title:'"http://sincgrid.in/avr-tutorials/avr-tutorial-experiment-9/"'},"/*Connections:\n *D10(PB2)-red led\n *D11(PB3)-green led\n *D12(PB4)-blue led\n *LDR \u2013 A0\n */\n\n#include <avr/io.h>\n\nuint16_t adc_value;            //Variable used to store the value read from the ADC\nuint8_t i=0;                    //Variable for the for() loop\n\nvoid adc_init(void);         //Function to initialize/configure the ADC\nuint16_t read_adc(uint8_t channel);    //Function to read an arbitrary analogic channel/pin\n\nint main(void){\n\nDDRB|= _BV(DDB2);        //D10(PB2) as red led\nDDRB|= _BV(DDB3);        //D11(PB3) as green led\nDDRB|= _BV(DDB4);        //D12(PB4) as blue led\n\nadc_init();        //Setup the ADC\n\nfor(;;){        //Our infinite loop\n for(i=0; i<1; i++){\n\n adc_value = read_adc(i);        //Read one ADC channel\n\nif((adc_value<15)&&(adc_value>0))\n{\nPORTB|= _BV(PORTB2);\nPORTB&= _BV(PORTB3);\nPORTB&= _BV(PORTB4);\n}\nif((adc_value>15)&&(adc_value<75))\n{\nPORTB&= _BV(PORTB4);\nPORTB&= _BV(PORTB2);\nPORTB|= _BV(PORTB3);\n}\n\nif(adc_value>75)\n{\nPORTB|= _BV(PORTB4);\nPORTB&= _BV(PORTB2);\nPORTB&= _BV(PORTB3);\n}\n}\n}\n\nreturn 0;\n}\n\nvoid adc_init(void){\n ADCSRA |= ((1<<ADPS2)|(1<<ADPS1)|(1<<ADPS0));    //16Mhz/128 = 125Khz the ADC reference clock\n ADMUX |= (1<<REFS0);                //Voltage reference from Avcc (5v)\n ADCSRA |= (1<<ADEN);                //Turn on ADC\n ADCSRA |= (1<<ADSC);                //Do an initial conversion because this one is the slowest\n                                              //and to ensure that everything is up and running\n}\n\nuint16_t read_adc(uint8_t channel){\n ADMUX &= 0xF0;                    //Clear the older channel that was read\n ADMUX |= channel;                //Defines the new ADC channel to be read\n ADCSRA |= (1<<ADSC);                //Starts a new conversion\n while(ADCSRA & (1<<ADSC));            //Wait until the conversion is done\n return ADCW;                    //Returns the ADC value of the chosen channel\n}\n")))}p.isMDXComponent=!0}}]);