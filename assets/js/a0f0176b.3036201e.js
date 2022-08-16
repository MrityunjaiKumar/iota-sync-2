"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),b=i,m=u["".concat(l,".").concat(b)]||u[b]||d[b]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4},a="MQTT",c={unversionedId:"Arduino_ESP8266/Mqtt",id:"Arduino_ESP8266/Mqtt",title:"MQTT",description:"MQTT is a lightweight, publish-subscribe, machine to machine network protocol. It is designed for connections with remote locations that have devices with resource constraints or limited network bandwidth.",source:"@site/docs/03_Arduino_ESP8266/03_Mqtt.md",sourceDirName:"03_Arduino_ESP8266",slug:"/Arduino_ESP8266/Mqtt",permalink:"/docs/Arduino_ESP8266/Mqtt",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"WiFi Station Mode",permalink:"/docs/Arduino_ESP8266/Exp1_WiFI_STA"},next:{title:"AVR Embedded C Tutorials",permalink:"/docs/category/avr-embedded-c-tutorials"}},l={},s=[{value:"Library used",id:"library-used",level:2},{value:"Software",id:"software",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mqtt"},"MQTT"),(0,i.kt)("p",null,"MQTT is a lightweight, publish-subscribe, machine to machine network protocol. It is designed for connections with remote locations that have devices with resource constraints or limited network bandwidth. "),(0,i.kt)("p",null,"To perform this experiment a broker is needed. "),(0,i.kt)("h2",{id:"library-used"},"Library used"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/knolleary/pubsubclient"},"https://github.com/knolleary/pubsubclient")),(0,i.kt)("h2",{id:"software"},"Software"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="Mqtt Example "',title:'"Mqtt',Example:!0,'"':!0},'\n#include <ESP8266WiFi.h>\n#include <PubSubClient.h>\n\n// GPIO 5 D1\n#define LED 5\n\n// WiFi\nconst char *ssid = "sincgrid"; // Enter your WiFi name\nconst char *password = "sincgrid.com";  // Enter WiFi password\n\n// MQTT Broker\nconst char *mqtt_broker = "broker.sincgrid.com";\nconst char *topic = "esp8266/led";\nconst char *mqtt_username = "sincgrid";\nconst char *mqtt_password = "public";\nconst int mqtt_port = 1883;\n\nWiFiClient espClient;\nPubSubClient client(espClient);\n\nvoid setup() {\n    // Set software serial baud to 115200;\n    Serial.begin(115200);\n    // connecting to a WiFi network\n    WiFi.begin(ssid, password);\n    while (WiFi.status() != WL_CONNECTED) {\n        delay(500);\n        Serial.println("Connecting to WiFi..");\n    }\n    Serial.println("Connected to the WiFi network");\n    //connecting to a mqtt broker\n    client.setServer(mqtt_broker, mqtt_port);\n    client.setCallback(callback);\n    while (!client.connected()) {\n        String client_id = "esp8266-client-";\n        client_id += String(WiFi.macAddress());\n        Serial.println("Connecting to public sincgrid mqtt broker.....");\n        if (client.connect(client_id, mqtt_username, mqtt_password)) {\n            Serial.println("Public sincgrid mqtt broker connected");\n        } else {\n            Serial.print("failed with state ");\n            Serial.print(client.state());\n            delay(2000);\n        }\n    }\n    // publish and subscribe\n    client.publish(topic, "hello sincgrid");\n    client.subscribe(topic);\n}\n\nvoid callback(char *topic, byte *payload, unsigned int length) {\n    Serial.print("Message arrived in topic: ");\n    Serial.println(topic);\n    Serial.print("Message:");\n    String message;\n    for (int i = 0; i < length; i++) {\n        message = message + (char) payload[i];  // convert *byte to string\n    }\n    Serial.print(message);\n    if (message == "on") { digitalWrite(LED, LOW); }   // LED on\n    if (message == "off") { digitalWrite(LED, HIGH); } // LED off\n    Serial.println();\n    Serial.println("-----------------------");\n}\n\nvoid loop() {\n    client.loop();\n}\n\n')))}d.isMDXComponent=!0}}]);