"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24480],{3905:function(e,t,r){r.d(t,{Zo:function(){return a},kt:function(){return y}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},a=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,u=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),s=l(r),y=p,d=s["".concat(u,".").concat(y)]||s[y]||f[y]||o;return r?n.createElement(d,c(c({ref:t},a),{},{components:r})):n.createElement(d,c({ref:t},a))}));function y(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:p,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},19759:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return a},default:function(){return s}});var n=r(87462),p=r(63366),o=(r(67294),r(3905)),c=["components"],i={},u=void 0,l={unversionedId:"puppeteer.puppeteerlifecycleevent",id:"version-9.1.1/puppeteer.puppeteerlifecycleevent",isDocsHomePage:!1,title:"puppeteer.puppeteerlifecycleevent",description:"Home &gt; puppeteer &gt; PuppeteerLifeCycleEvent",source:"@site/versioned_docs/version-9.1.1/puppeteer.puppeteerlifecycleevent.md",sourceDirName:".",slug:"/puppeteer.puppeteerlifecycleevent",permalink:"/puppeteer/docs/9.1.1/puppeteer.puppeteerlifecycleevent",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.puppeteerlifecycleevent.md",version:"9.1.1",frontMatter:{}},a=[{value:"PuppeteerLifeCycleEvent type",id:"puppeteerlifecycleevent-type",children:[]}],f={toc:a};function s(e){var t=e.components,r=(0,p.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.puppeteerlifecycleevent"},"PuppeteerLifeCycleEvent")),(0,o.kt)("h2",{id:"puppeteerlifecycleevent-type"},"PuppeteerLifeCycleEvent type"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type PuppeteerLifeCycleEvent = 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2';\n")))}s.isMDXComponent=!0}}]);