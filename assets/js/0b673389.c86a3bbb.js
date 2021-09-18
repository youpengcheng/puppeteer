"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58514],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=i(r),d=a,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||p;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,u=new Array(p);u[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var i=2;i<p;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},48475:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return s}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),u=["components"],o={},l=void 0,i={unversionedId:"puppeteer.customqueryhandler",id:"puppeteer.customqueryhandler",isDocsHomePage:!1,title:"puppeteer.customqueryhandler",description:"Home &gt; puppeteer &gt; CustomQueryHandler",source:"@site/docs/puppeteer.customqueryhandler.md",sourceDirName:".",slug:"/puppeteer.customqueryhandler",permalink:"/puppeteer/docs/next/puppeteer.customqueryhandler",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.customqueryhandler.md",version:"current",frontMatter:{}},c=[{value:"CustomQueryHandler interface",id:"customqueryhandler-interface",children:[]},{value:"Properties",id:"properties",children:[]}],m={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,u);return(0,p.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.customqueryhandler"},"CustomQueryHandler")),(0,p.kt)("h2",{id:"customqueryhandler-interface"},"CustomQueryHandler interface"),(0,p.kt)("p",null,"Contains two functions ",(0,p.kt)("inlineCode",{parentName:"p"},"queryOne")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"queryAll")," that can be ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.puppeteer.registercustomqueryhandler"},"registered")," as alternative querying strategies. The functions ",(0,p.kt)("inlineCode",{parentName:"p"},"queryOne")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"queryAll")," are executed in the page context. ",(0,p.kt)("inlineCode",{parentName:"p"},"queryOne")," should take an ",(0,p.kt)("inlineCode",{parentName:"p"},"Element")," and a selector string as argument and return a single ",(0,p.kt)("inlineCode",{parentName:"p"},"Element")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," if no element is found. ",(0,p.kt)("inlineCode",{parentName:"p"},"queryAll")," takes the same arguments but should instead return a ",(0,p.kt)("inlineCode",{parentName:"p"},"NodeListOf<Element>")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"Array<Element>")," with all the elements that match the given query selector."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface CustomQueryHandler \n")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Property"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.customqueryhandler.queryall"},"queryAll?")),(0,p.kt)("td",{parentName:"tr",align:null},"(element: Element ","|"," Document, selector: string) =",">"," Element","[","]"," ","|"," NodeListOf","<","Element",">"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("i",null,"(Optional)"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.customqueryhandler.queryone"},"queryOne?")),(0,p.kt)("td",{parentName:"tr",align:null},"(element: Element ","|"," Document, selector: string) =",">"," Element ","|"," null"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("i",null,"(Optional)"))))))}s.isMDXComponent=!0}}]);