(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(193)),l={id:"overlay-options",title:"Overlay",sidebar_label:"Overlay"},c={id:"overlay-options",title:"Overlay",description:"Controls overlay options",source:"@site/docs/overlay-options.mdx",permalink:"/docs/overlay-options",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/overlay-options.mdx",sidebar_label:"Overlay",sidebar:"API",previous:{title:"Layout Options",permalink:"/docs/layout-options"},next:{title:"Side Menu Options",permalink:"/docs/sideMenu-options"}},b=[{value:"<code>interceptTouchOutside</code>",id:"intercepttouchoutside",children:[]},{value:"<code>handleKeyboardEvents</code>",id:"handlekeyboardevents",children:[]}],i={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Controls overlay options"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const options = {\n  overlay: {\n\n  }\n}\n")),Object(o.b)("h3",{id:"intercepttouchoutside"},Object(o.b)("inlineCode",{parentName:"h3"},"interceptTouchOutside")),Object(o.b)("p",null,"This option controls wether touch events outside the bounds of the overlay, will be handles by the content behind the overlay. When set to true, touch events will ",Object(o.b)("strong",{parentName:"p"},"not")," pass through to the underlying content."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Both")))),Object(o.b)("h3",{id:"handlekeyboardevents"},Object(o.b)("inlineCode",{parentName:"h3"},"handleKeyboardEvents")),Object(o.b)("p",null,"Overlays on iOS don't handle keyboard events by default. If your Overlay contains a TextInput component, you'll want to enable this option so the TextInput responds to keyboard events."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"iOS")))))}p.isMDXComponent=!0},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,O=u["".concat(l,".").concat(d)]||u[d]||s[d]||o;return n?a.a.createElement(O,c({ref:t},i,{components:n})):a.a.createElement(O,c({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);