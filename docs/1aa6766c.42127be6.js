(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{161:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=i.a.createContext({}),u=function(e){var t=i.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,b=p["".concat(o,".").concat(f)]||p[f]||d[f]||l;return r?i.a.createElement(b,s(s({ref:t},a),{},{components:r})):i.a.createElement(b,s({ref:t},a))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var a=2;a<l;a++)o[a]=r[a];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},201:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/test_explorer_tests-1da24265be478f4b9ca821cbf6157d17.png"},202:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/test_explorer_callbacks-9f19730cddc497d27cf6fa3373e44026.png"},203:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/test_window_disabled_tests-36e1d3f4e019ea85eff144ec3a2c5aa6.png"},204:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/test_explorer_run-efe7f78a8d22d570bf3bcb0fcb92133b.png"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),l=(r(0),r(161)),o={id:"test_explorer",title:"Test Explorer",slug:"intellij-test-explorer.html"},s={unversionedId:"intellij/test_explorer",id:"intellij/test_explorer",isDocsHomePage:!1,title:"Test Explorer",description:"The plugin provides a tool window view which displays the structure of your tests.",source:"@site/docs/intellij/text_explorer.md",slug:"/intellij/intellij-test-explorer.html",permalink:"/docs/intellij/intellij-test-explorer.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/intellij/text_explorer.md",version:"current",sidebar:"intellij",previous:{title:"IntelliJ Plugin",permalink:"/docs/intellij/intellij-plugin.html"},next:{title:"Properties",permalink:"/docs/intellij/intellij-properties.html"}},c=[],a={rightToc:c};function u(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},a,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The plugin provides a tool window view which displays the structure of your tests.\nThe window describes the currently selected test file, which includes any specs defined in that file and tests\ncontained inside those specs. The tree layout will mirror the structure of your tests for easy navigation."),Object(l.b)("p",null,Object(l.b)("img",{alt:"test_explorer_tests",src:r(201).default})),Object(l.b)("p",null,"The tool window will include lifecycle callback methods (such as before / after test) if defined,\nas well as included test factories."),Object(l.b)("p",null,Object(l.b)("img",{alt:"test_explorer_callbacks_picture",src:r(202).default})),Object(l.b)("p",null,"Clicking on a spec, test, include or callback will navigate directly to that element in the source editor."),Object(l.b)("p",null,"Any tests that have been disabled using the bang prefix will have a different icon."),Object(l.b)("p",null,Object(l.b)("img",{alt:"test_window_disabled_tests",src:r(203).default})),Object(l.b)("p",null,"You can execute (run/debug/run with coverage) a test or spec directly from this window. In addition, the window shows all test modules and allows you to run all tests in that module."),Object(l.b)("p",null,Object(l.b)("img",{alt:"gutter_icon_picture",src:r(204).default})),Object(l.b)("p",null,"Modules, callbacks, and includes can be filtered out if you don't wish to see them. They are included by default."))}u.isMDXComponent=!0}}]);