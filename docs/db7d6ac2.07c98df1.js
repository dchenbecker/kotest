(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),s=(n(0),n(161)),a={id:"soft_assertions",title:"Soft Assertions",slug:"soft-assertions.html"},i={unversionedId:"assertions/soft_assertions",id:"assertions/soft_assertions",isDocsHomePage:!1,title:"Soft Assertions",description:"Normally, assertions like shouldBe throw an exception when they fail.",source:"@site/docs/assertions/soft_assertions.md",slug:"/assertions/soft-assertions.html",permalink:"/docs/assertions/soft-assertions.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/soft_assertions.md",version:"current",sidebar:"assertions",previous:{title:"Clues",permalink:"/docs/assertions/clues.html"},next:{title:"Eventually",permalink:"/docs/assertions/eventually.html"}},l=[],c={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Normally, assertions like ",Object(s.b)("inlineCode",{parentName:"p"},"shouldBe")," throw an exception when they fail.\nBut sometimes you want to perform multiple assertions in a test, and\nwould like to see all of the assertions that failed. Kotest provides\nthe ",Object(s.b)("inlineCode",{parentName:"p"},"assertSoftly")," function for this purpose."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"assertSoftly {\n  foo shouldBe bar\n  foo should contain(baz)\n}\n")),Object(s.b)("p",null,"If any assertions inside the block failed, the test will continue to\nrun. All failures will be reported in a single exception at the end of\nthe block."),Object(s.b)("p",null,"Another version of ",Object(s.b)("inlineCode",{parentName:"p"},"assertSoftly")," takes a test target and lambda with test target as its receiver."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'assertSoftly(foo) {\n    shouldNotEndWith("b")\n    length shouldBe 3\n}\n')),Object(s.b)("p",null,"We can configure assert softly to be implicitly added to every test via ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/framework/project-config.html"}),"project config"),"."))}u.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(a,".").concat(b)]||p[b]||f[b]||s;return n?o.a.createElement(d,i(i({ref:t},c),{},{components:n})):o.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);