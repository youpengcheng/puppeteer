"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20507],{3905:function(e,r,t){t.d(r,{Zo:function(){return a},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},a=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),l=u(t),f=o,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||p;return t?n.createElement(m,c(c({ref:r},a),{},{components:t})):n.createElement(m,c({ref:r},a))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,c=new Array(p);c[0]=l;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<p;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},34424:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return a},default:function(){return l}});var n=t(87462),o=t(63366),p=(t(67294),t(3905)),c=["components"],i={},s=void 0,u={unversionedId:"puppeteer.browser.disconnect",id:"version-10.0.0/puppeteer.browser.disconnect",isDocsHomePage:!1,title:"puppeteer.browser.disconnect",description:"Home &gt; puppeteer &gt; Browser &gt; disconnect",source:"@site/versioned_docs/version-10.0.0/puppeteer.browser.disconnect.md",sourceDirName:".",slug:"/puppeteer.browser.disconnect",permalink:"/puppeteer/docs/10.0.0/puppeteer.browser.disconnect",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.0.0/puppeteer.browser.disconnect.md",version:"10.0.0",frontMatter:{},sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.browser.defaultbrowsercontext",permalink:"/puppeteer/docs/10.0.0/puppeteer.browser.defaultbrowsercontext"},next:{title:"puppeteer.browser.isconnected",permalink:"/puppeteer/docs/10.0.0/puppeteer.browser.isconnected"}},a=[{value:"Browser.disconnect() method",id:"browserdisconnect-method",children:[]}],d={toc:a};function l(e){var r=e.components,t=(0,o.Z)(e,c);return(0,p.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.browser"},"Browser")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.browser.disconnect"},"disconnect")),(0,p.kt)("h2",{id:"browserdisconnect-method"},"Browser.disconnect() method"),(0,p.kt)("p",null,"Disconnects Puppeteer from the browser, but leaves the Chromium process running. After calling ",(0,p.kt)("inlineCode",{parentName:"p"},"disconnect"),", the ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.browser"},"Browser")," object is considered disposed and cannot be used anymore."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"disconnect(): void;\n")),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"void"))}l.isMDXComponent=!0}}]);