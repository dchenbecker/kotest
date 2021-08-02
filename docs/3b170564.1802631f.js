(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},y=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),y=o,m=u["".concat(s,".").concat(y)]||u[y]||b[y]||a;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(161)),s={id:"mocks",title:"Mocking and Kotest",sidebar_label:"Mocking",slug:"mocking.html"},i={unversionedId:"framework/integrations/mocks",id:"framework/integrations/mocks",isDocsHomePage:!1,title:"Mocking and Kotest",description:"Kotest itself has no mock features. However, you can plug-in your favourite mocking library with ease!",source:"@site/docs/framework/integrations/mocks.md",slug:"/framework/integrations/mocking.html",permalink:"/docs/framework/integrations/mocking.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/integrations/mocks.md",version:"current",sidebar_label:"Mocking",sidebar:"framework",previous:{title:"Listeners",permalink:"/docs/framework/listeners.html"},next:{title:"Jacoco",permalink:"/docs/framework/integrations/jacoco.html"}},c=[{value:"Option 1 - setup mocks before tests",id:"option-1---setup-mocks-before-tests",children:[]},{value:"Option 2 - reset mocks after tests",id:"option-2---reset-mocks-after-tests",children:[]},{value:"Positioning the listeners",id:"positioning-the-listeners",children:[]},{value:"Option 3 - Tweak the IsolationMode",id:"option-3---tweak-the-isolationmode",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Kotest itself has no mock features. However, you can plug-in your favourite mocking library with ease!"),Object(a.b)("p",null,"Let's take for example ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://mockk.io"}),"mockk"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'class MyTest : FunSpec({\n\n    val repository = mockk<MyRepository>()\n    val target = MyService(repository)\n\n    test("Saves to repository") {\n        every { repository.save(any()) } just Runs\n        target.save(MyDataClass("a"))\n        verify(exactly = 1) { repository.save(MyDataClass("a")) }\n    }\n\n})\n')),Object(a.b)("p",null,"This example works as expected, but what if we add more tests that use that ",Object(a.b)("em",{parentName:"p"},"mockk"),"?"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'class MyTest : FunSpec({\n\n    val repository = mockk<MyRepository>()\n    val target = MyService(repository)\n\n    test("Saves to repository") {\n        every { repository.save(any()) } just Runs\n        target.save(MyDataClass("a"))\n        verify(exactly = 1) { repository.save(MyDataClass("a")) }\n    }\n\n    test("Saves to repository as well") {\n        every { repository.save(any()) } just Runs\n        target.save(MyDataClass("a"))\n        verify(exactly = 1) { repository.save(MyDataClass("a")) }\n    }\n\n})\n')),Object(a.b)("p",null,"The above snippet will cause an exception!"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"2 matching calls found, but needs at least 1 and at most 1 calls")),Object(a.b)("p",null,"This will happen because the mocks are not restarted between invocations. By default, Kotest isolates tests by creating\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/framework/isolation-mode.html"}),"a single instance of the spec")," for all the tests to run."),Object(a.b)("p",null,"This leads to mocks being reused. But how can we fix this?"),Object(a.b)("h3",{id:"option-1---setup-mocks-before-tests"},"Option 1 - setup mocks before tests"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'class MyTest : FunSpec({\n\n    lateinit var repository: MyRepository\n    lateinit var target: MyService\n\n    beforeTest {\n        repository = mockk()\n        target = MyService(repository)\n    }\n\n    test("Saves to repository") {\n        // ...\n    }\n\n    test("Saves to repository as well") {\n        // ...\n    }\n\n})\n')),Object(a.b)("h3",{id:"option-2---reset-mocks-after-tests"},"Option 2 - reset mocks after tests"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'class MyTest : FunSpec({\n\n    val repository = mockk<MyRepository>()\n    val target = MyService(repository)\n\n    afterTest {\n        clearMocks(repository)\n    }\n\n    test("Saves to repository") {\n        // ...\n    }\n\n    test("Saves to repository as well") {\n        // ...\n    }\n\n})\n')),Object(a.b)("h3",{id:"positioning-the-listeners"},"Positioning the listeners"),Object(a.b)("p",null,"As for any function that is executed inside the Spec definition, you can place listeners at the end"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'class MyTest : FunSpec({\n\n    val repository = mockk<MyRepository>()\n    val target = MyService(repository)\n\n\n    test("Saves to repository") {\n        // ...\n    }\n\n    test("Saves to repository as well") {\n        // ...\n    }\n\n    afterTest {\n        clearMocks(repository)  // <---- End of file, better readability\n    }\n\n})\n')),Object(a.b)("h3",{id:"option-3---tweak-the-isolationmode"},"Option 3 - Tweak the IsolationMode"),Object(a.b)("p",null,"Depending on the usage, playing with the IsolationMode for a given Spec might be a good option as well.\nHead over to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/framework/isolation-mode.html"}),"isolation mode documentation")," if you want to understand it better."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'class MyTest : FunSpec({\n\n    val repository = mockk<MyRepository>()\n    val target = MyService(repository)\n\n\n    test("Saves to repository") {\n        // ...\n    }\n\n    test("Saves to repository as well") {\n        // ...\n    }\n\n    isolation = IsolationMode.InstancePerTest\n\n})\n')))}p.isMDXComponent=!0}}]);