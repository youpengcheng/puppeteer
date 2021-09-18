"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50143],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),m=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=m(r),s=a,d=f["".concat(u,".").concat(s)]||f[s]||c[s]||o;return r?n.createElement(d,p(p({ref:t},l),{},{components:r})):n.createElement(d,p({ref:t},l))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var m=2;m<o;m++)p[m]=r[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6962:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return l},default:function(){return f}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),p=["components"],i={},u=void 0,m={unversionedId:"puppeteer.frame.waitfortimeout",id:"version-9.1.1/puppeteer.frame.waitfortimeout",isDocsHomePage:!1,title:"puppeteer.frame.waitfortimeout",description:"Home &gt; puppeteer &gt; Frame &gt; waitForTimeout",source:"@site/versioned_docs/version-9.1.1/puppeteer.frame.waitfortimeout.md",sourceDirName:".",slug:"/puppeteer.frame.waitfortimeout",permalink:"/puppeteer/docs/9.1.1/puppeteer.frame.waitfortimeout",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.frame.waitfortimeout.md",version:"9.1.1",frontMatter:{},sidebar:"version-9.1.1/docs",previous:{title:"puppeteer.frame.waitforselector",permalink:"/puppeteer/docs/9.1.1/puppeteer.frame.waitforselector"},next:{title:"puppeteer.frame.waitforxpath",permalink:"/puppeteer/docs/9.1.1/puppeteer.frame.waitforxpath"}},l=[{value:"Frame.waitForTimeout() method",id:"framewaitfortimeout-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],c={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.frame"},"Frame")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.frame.waitfortimeout"},"waitForTimeout")),(0,o.kt)("h2",{id:"framewaitfortimeout-method"},"Frame.waitForTimeout() method"),(0,o.kt)("p",null,"Causes your script to wait for the given number of milliseconds."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"waitForTimeout(milliseconds: number): Promise<void>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"milliseconds"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"the number of milliseconds to wait.")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<","void",">"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"It's generally recommended to not wait for a number of seconds, but instead use ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.frame.waitforselector"},"Frame.waitForSelector()"),", ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.frame.waitforxpath"},"Frame.waitForXPath()")," or ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.frame.waitforfunction"},"Frame.waitForFunction()")," to wait for exactly the conditions you want."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Wait for 1 second:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"await frame.waitForTimeout(1000);\n\n")))}f.isMDXComponent=!0}}]);