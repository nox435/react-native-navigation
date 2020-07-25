(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),o=(n(0),n(184)),i=n(189);const r={id:"bottomTabs",title:"Bottom tabs",sidebar_label:"Bottom tabs"},c={id:"bottomTabs",isDocsHomePage:!1,title:"Bottom tabs",description:'Bottom tabs refers to a row of links, displayed at the bottom of the screen, and is referred to as "Tab Bar" in iOS and as "Bottom Navigation Bar" on Android. Usually these are intended to be used to switch between top-level content views with a single tap.',source:"@site/docs/docs-bottomTabs.mdx",permalink:"/react-native-navigation/docs/bottomTabs",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs-bottomTabs.mdx",sidebar_label:"Bottom tabs",sidebar:"docs",previous:{title:"Stack",permalink:"/react-native-navigation/docs/stack"},next:{title:"Side Menu",permalink:"/react-native-navigation/docs/sideMenu"}},l=[{value:"Creating bottom tabs",id:"creating-bottom-tabs",children:[{value:"Example",id:"example",children:[]}]},{value:"Selecting Tabs Programmatically",id:"selecting-tabs-programmatically",children:[{value:"Selecting a tab by index",id:"selecting-a-tab-by-index",children:[]},{value:"Selecting a tab by id",id:"selecting-a-tab-by-id",children:[]}]},{value:"Changing BottomTabs visibility",id:"changing-bottomtabs-visibility",children:[]},{value:"Updating tab options dynamically",id:"updating-tab-options-dynamically",children:[]},{value:"Controlling tab loading",id:"controlling-tab-loading",children:[]}],b={rightToc:l};function s({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Bottom tabs refers to a row of links, displayed at the bottom of the screen, and is referred to as "Tab Bar" in iOS and as "Bottom Navigation Bar" on Android. Usually these are intended to be used to switch between top-level content views with a single tap.'),Object(o.b)("h2",{id:"creating-bottom-tabs"},"Creating bottom tabs"),Object(o.b)("p",null,"BottomTabs provide flat navigation and access to up to five equally important top-level root destinations. While any type of layout can be displayed in a tab, typically, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"stack"}),"Stacks")," are used, since they allow for vertical navigation within a tab."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"Lets see how to create a simple BottomTabs layout. There are a few things to notice here:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Each child represents a tab on the screen."),Object(o.b)("li",{parentName:"ol"},"The root layout for each tab is a stack to allow for vertical navigation within the tab."),Object(o.b)("li",{parentName:"ol"},"Each stack declares ",Object(o.b)("inlineCode",{parentName:"li"},"bottomTab")," options which are used to configure the tab's text, icon, color etc.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"bottomTabs: {\n  id: 'BOTTOM_TABS_LAYOUT',\n  children: [\n    {\n      stack: {\n        id: 'HOME_TAB',\n        children: [\n          {\n            component: {\n              id: 'HOME_SCREEN',\n              name: 'HomeScreen'\n            }\n          }\n        ],\n        options: {\n          bottomTab: {\n            icon: require('./home.png')\n          }\n        }\n      }\n    },\n    {\n      stack: {\n        id: 'PROFILE_TAB',\n        children: [\n          {\n            component: {\n              id: 'PROFILE_SCREEN',\n              name: 'ProfileScreen'\n            }\n          }\n        ],\n        options: {\n          bottomTab: {\n            icon: require('./profile.png')\n          }\n        }\n      }\n    }\n  ]\n}\n")),Object(o.b)("p",null,"Once we run this code, our BottomTabs should look like this:"),Object(o.b)("img",{width:"40%",src:Object(i.a)("img/bottomTabs.png")}),Object(o.b)("h2",{id:"selecting-tabs-programmatically"},"Selecting Tabs Programmatically"),Object(o.b)("p",null,"Tabs can be selected programmatically by updating the ",Object(o.b)("inlineCode",{parentName:"p"},"currentTabIndex")," or ",Object(o.b)("inlineCode",{parentName:"p"},"currentTabId")," options."),Object(o.b)("p",null,"We'll use the BottomTabs layout showcased ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"bottomTabs#example"}),"above")," to demonstrate programmatic tab selection."),Object(o.b)("h3",{id:"selecting-a-tab-by-index"},"Selecting a tab by index"),Object(o.b)("p",null,"The following mergeOptions command will select the second tab. We're passing the id of our BottomTabs layout, but we could also use the id of any of the child components, for example ",Object(o.b)("inlineCode",{parentName:"p"},"PROFILE_TAB")," or ",Object(o.b)("inlineCode",{parentName:"p"},"PROFILE_SCREEN"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {\n  bottomTabs: {\n    currentTabIndex: 1\n  }\n});\n")),Object(o.b)("h3",{id:"selecting-a-tab-by-id"},"Selecting a tab by id"),Object(o.b)("p",null,"Tabs can also be selected by id (",Object(o.b)("inlineCode",{parentName:"p"},"componentId"),"). This is particularly useful in cases where you don't know in which tab a screen is contained.\nFor example, if invoked from one of the child components, ",Object(o.b)("inlineCode",{parentName:"p"},"HOME_SCREEN")," or ",Object(o.b)("inlineCode",{parentName:"p"},"SETTINGS_SCREEN"),", the following merge command will select the tab containing the child."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions(this.props.componentId, {\n  bottomTabs: {\n    currentTabId: this.props.componentId\n  }\n});\n")),Object(o.b)("h2",{id:"changing-bottomtabs-visibility"},"Changing BottomTabs visibility"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"visible")," property is used to control the BottomTab visibility. Visibility can be toggled dynamically using the ",Object(o.b)("inlineCode",{parentName:"p"},"mergeOptions")," command."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions(componentId, {\n  bottomTabs: {\n    visible: false\n  },\n});\n")),Object(o.b)("p",null,"Visibility can also be changed when pushing screens."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.push(componentId, {\n  component: {\n    name: 'pushedScreen',\n    options: {\n      bottomTabs: {\n        visible: false\n      }\n    }\n  }\n});\n")),Object(o.b)("h2",{id:"updating-tab-options-dynamically"},"Updating tab options dynamically"),Object(o.b)("p",null,"To update a tab option, like an icon, text or color, simply call ",Object(o.b)("inlineCode",{parentName:"p"},"mergeOptions")," with new options using the id of a component or layout contained in the tab you wish to update."),Object(o.b)("p",null,"For instance, in the example below we update the color of a specific tab:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions(componentId, {\n  bottomTab: {\n    iconColor: 'red',\n    textColor: 'red'\n  },\n});\n")),Object(o.b)("h2",{id:"controlling-tab-loading"},"Controlling tab loading"),Object(o.b)("p",null,"By default, all tabs are mounted at the same time. This can have a negative impact on performance since screens which are not visible to the user are mounted."),Object(o.b)("p",null,"The order in which tabs are mounted can be configured with the ",Object(o.b)("inlineCode",{parentName:"p"},"tabsAttachMode")," option:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"together")," - all tabs are mounted at the same time, this is the default behavior."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"afterInitialTab")," - after initial tab is mounted, other tabs are mounted."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onSwitchToTab")," - initial tab is mounted, other tabs are mounted when the user navigates to them for the first time.")))}s.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,u=p["".concat(r,".").concat(m)]||p[m]||d[m]||i;return n?o.a.createElement(u,c(c({ref:t},b),{},{components:n})):o.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<i;b++)r[b]=n[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},185:function(e,t,n){"use strict";var a=n(0),o=n(36);t.a=function(){return Object(a.useContext)(o.a)}},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(185),o=n(190);function i(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:i="/",url:r}={}}=Object(a.a)();if(!e)return e;if(t)return i+e;if(!Object(o.a)(e))return e;const c=i+e.replace(/^\//,"");return n?r+c:c}},190:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))}}]);