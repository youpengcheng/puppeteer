"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65890],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=p,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:p,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26029:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var r=n(87462),p=n(63366),a=(n(67294),n(3905)),o=["components"],l={},i=void 0,s={unversionedId:"puppeteer.elementhandle.press",id:"puppeteer.elementhandle.press",isDocsHomePage:!1,title:"puppeteer.elementhandle.press",description:"Home &gt; puppeteer &gt; ElementHandle &gt; press",source:"@site/docs/puppeteer.elementhandle.press.md",sourceDirName:".",slug:"/puppeteer.elementhandle.press",permalink:"/puppeteer/docs/next/puppeteer.elementhandle.press",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.elementhandle.press.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"puppeteer.elementhandle.isintersectingviewport",permalink:"/puppeteer/docs/next/puppeteer.elementhandle.isintersectingviewport"},next:{title:"puppeteer.elementhandle.screenshot",permalink:"/puppeteer/docs/next/puppeteer.elementhandle.screenshot"}},u=[{value:"ElementHandle.press() method",id:"elementhandlepress-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],d={toc:u};function c(e){var t=e.components,n=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.elementhandle.press"},"press")),(0,a.kt)("h2",{id:"elementhandlepress-method"},"ElementHandle.press() method"),(0,a.kt)("p",null,"Focuses the element, and then uses ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.keyboard.down"},"Keyboard.down()")," and ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.keyboard.up"},"Keyboard.up()"),"."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"press(key: KeyInput, options?: PressOptions): Promise<void>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"key"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.keyinput"},"KeyInput")),(0,a.kt)("td",{parentName:"tr",align:null},"Name of key to press, such as ",(0,a.kt)("code",null,"ArrowLeft"),". See ",(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.keyinput"},"KeyInput")," for a list of all key names.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.pressoptions"},"PressOptions")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," is a single character and no modifier keys besides ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift")," are being held down, a ",(0,a.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"input")," event will also be generated. The ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," option can be specified to force an input event to be generated."),(0,a.kt)("p",null,"*","*","NOTE","*","*"," Modifier keys DO affect ",(0,a.kt)("inlineCode",{parentName:"p"},"elementHandle.press"),". Holding down ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))}c.isMDXComponent=!0}}]);