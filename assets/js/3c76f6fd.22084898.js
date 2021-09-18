"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21146],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=p,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26938:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=r(87462),p=r(63366),a=(r(67294),r(3905)),o=["components"],i={},u=void 0,s={unversionedId:"puppeteer.httprequest.continue",id:"version-10.1.0/puppeteer.httprequest.continue",isDocsHomePage:!1,title:"puppeteer.httprequest.continue",description:"Home &gt; puppeteer &gt; HTTPRequest &gt; continue",source:"@site/versioned_docs/version-10.1.0/puppeteer.httprequest.continue.md",sourceDirName:".",slug:"/puppeteer.httprequest.continue",permalink:"/puppeteer/docs/puppeteer.httprequest.continue",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.httprequest.continue.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.httprequest.abort",permalink:"/puppeteer/docs/puppeteer.httprequest.abort"},next:{title:"puppeteer.httprequest.failure",permalink:"/puppeteer/docs/puppeteer.httprequest.failure"}},l=[{value:"HTTPRequest.continue() method",id:"httprequestcontinue-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],c={toc:l};function d(e){var t=e.components,r=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.httprequest"},"HTTPRequest")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.httprequest.continue"},"continue")),(0,a.kt)("h2",{id:"httprequestcontinue-method"},"HTTPRequest.continue() method"),(0,a.kt)("p",null,"Continues request with optional request overrides."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"continue(overrides?: ContinueRequestOverrides, priority?: number): Promise<void>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"overrides"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.continuerequestoverrides"},"ContinueRequestOverrides")),(0,a.kt)("td",{parentName:"tr",align:null},"optional overrides to apply to the request.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"priority"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"If provided, intercept is resolved using cooperative handling rules. Otherwise, intercept is resolved immediately.")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"To use this, request interception should be enabled with ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page.setrequestinterception"},"Page.setRequestInterception()"),"."),(0,a.kt)("p",null,"Exception is immediately thrown if the request interception is not enabled."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await page.setRequestInterception(true);\npage.on('request', request => {\n  // Override headers\n  const headers = Object.assign({}, request.headers(), {\n    foo: 'bar', // set \"foo\" header\n    origin: undefined, // remove \"origin\" header\n  });\n  request.continue({headers});\n});\n\n")))}d.isMDXComponent=!0}}]);