"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40148],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),f=p,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},22006:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var n=r(87462),p=r(63366),a=(r(67294),r(3905)),o=["components"],i={},l=void 0,u={unversionedId:"puppeteer.frame.hover",id:"puppeteer.frame.hover",isDocsHomePage:!1,title:"puppeteer.frame.hover",description:"Home &gt; puppeteer &gt; Frame &gt; hover",source:"@site/docs/puppeteer.frame.hover.md",sourceDirName:".",slug:"/puppeteer.frame.hover",permalink:"/puppeteer/docs/next/puppeteer.frame.hover",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.frame.hover.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"puppeteer.frame.goto",permalink:"/puppeteer/docs/next/puppeteer.frame.goto"},next:{title:"puppeteer.frame.isdetached",permalink:"/puppeteer/docs/next/puppeteer.frame.isdetached"}},c=[{value:"Frame.hover() method",id:"framehover-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],m={toc:c};function s(e){var t=e.components,r=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.frame"},"Frame")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.frame.hover"},"hover")),(0,a.kt)("h2",{id:"framehover-method"},"Frame.hover() method"),(0,a.kt)("p",null,"This method fetches an element with ",(0,a.kt)("inlineCode",{parentName:"p"},"selector"),", scrolls it into view if needed, and then uses ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.mouse"},"Page.mouse")," to hover over the center of the element."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"hover(selector: string): Promise<void>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selector"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"the selector for the element to hover. If there are multiple elements, the first will be hovered.")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If there's no element matching ",(0,a.kt)("inlineCode",{parentName:"p"},"selector"),", the method throws an"))}s.isMDXComponent=!0}}]);