"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35215],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(a,".").concat(f)]||m[f]||l[f]||p;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,i=new Array(p);i[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<p;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92173:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(87462),o=r(63366),p=(r(67294),r(3905)),i=["components"],c={},a=void 0,s={unversionedId:"puppeteer.permission",id:"puppeteer.permission",isDocsHomePage:!1,title:"puppeteer.permission",description:"Home &gt; puppeteer &gt; Permission",source:"@site/docs/puppeteer.permission.md",sourceDirName:".",slug:"/puppeteer.permission",permalink:"/puppeteer/docs/next/puppeteer.permission",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.permission.md",version:"current",frontMatter:{}},u=[{value:"Permission type",id:"permission-type",children:[]}],l={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.permission"},"Permission")),(0,p.kt)("h2",{id:"permission-type"},"Permission type"),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type Permission = 'geolocation' | 'midi' | 'notifications' | 'camera' | 'microphone' | 'background-sync' | 'ambient-light-sensor' | 'accelerometer' | 'gyroscope' | 'magnetometer' | 'accessibility-events' | 'clipboard-read' | 'clipboard-write' | 'payment-handler' | 'persistent-storage' | 'idle-detection' | 'midi-sysex';\n")))}m.isMDXComponent=!0}}]);