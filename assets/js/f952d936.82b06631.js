"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12386],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=i(r),m=a,k=s["".concat(u,".").concat(m)]||s[m]||c[m]||p;return r?n.createElement(k,o(o({ref:t},d),{},{components:r})):n.createElement(k,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<p;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},43047:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return d},default:function(){return s}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],l={},u=void 0,i={unversionedId:"puppeteer.webworker.evaluatehandle",id:"version-10.1.0/puppeteer.webworker.evaluatehandle",isDocsHomePage:!1,title:"puppeteer.webworker.evaluatehandle",description:"Home &gt; puppeteer &gt; WebWorker &gt; evaluateHandle",source:"@site/versioned_docs/version-10.1.0/puppeteer.webworker.evaluatehandle.md",sourceDirName:".",slug:"/puppeteer.webworker.evaluatehandle",permalink:"/puppeteer/docs/puppeteer.webworker.evaluatehandle",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.webworker.evaluatehandle.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.webworker.evaluate",permalink:"/puppeteer/docs/puppeteer.webworker.evaluate"},next:{title:"puppeteer.webworker.executioncontext",permalink:"/puppeteer/docs/puppeteer.webworker.executioncontext"}},d=[{value:"WebWorker.evaluateHandle() method",id:"webworkerevaluatehandle-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],c={toc:d};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.webworker"},"WebWorker")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.webworker.evaluatehandle"},"evaluateHandle")),(0,p.kt)("h2",{id:"webworkerevaluatehandle-method"},"WebWorker.evaluateHandle() method"),(0,p.kt)("p",null,"The only difference between ",(0,p.kt)("inlineCode",{parentName:"p"},"worker.evaluate")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," is that ",(0,p.kt)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," returns in-page object (JSHandle). If the function passed to the ",(0,p.kt)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," returns a ",(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),", then ",(0,p.kt)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," would wait for the promise to resolve and return its value. Shortcut for ",(0,p.kt)("inlineCode",{parentName:"p"},"await worker.executionContext()).evaluateHandle(pageFunction, ...args)")),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"evaluateHandle<HandlerType extends JSHandle = JSHandle>(pageFunction: EvaluateHandleFn, ...args: SerializableOrJSHandle[]): Promise<JSHandle>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.evaluatehandlefn"},"EvaluateHandleFn")),(0,p.kt)("td",{parentName:"tr",align:null},"Function to be evaluated in the page context.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"args"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),(0,p.kt)("td",{parentName:"tr",align:null},"Arguments to pass to ",(0,p.kt)("code",null,"pageFunction"),".")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.jshandle"},"JSHandle"),">"),(0,p.kt)("p",null,"Promise which resolves to the return value of ",(0,p.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."))}s.isMDXComponent=!0}}]);