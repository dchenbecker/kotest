(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(3),o=t(7),i=(t(0),t(161)),r={title:"Isolation Modes",slug:"isolation-mode.html"},c={unversionedId:"framework/isolation_mode",id:"framework/isolation_mode",isDocsHomePage:!1,title:"Isolation Modes",description:"All specs allow you to control how the test engine creates instances of Specs for test cases. This behavior is called the isolation mode and is controlled",source:"@site/docs/framework/isolation_mode.md",slug:"/framework/isolation-mode.html",permalink:"/docs/framework/isolation-mode.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/isolation_mode.md",version:"current",sidebar:"framework",previous:{title:"Conditional Evaluation",permalink:"/docs/framework/conditional-evaluation.html"},next:{title:"Testing Exceptions",permalink:"/docs/framework/exceptions.html"}},l=[{value:"Single Instance",id:"single-instance",children:[]},{value:"InstancePerTest",id:"instancepertest",children:[]},{value:"InstancePerLeaf",id:"instanceperleaf",children:[]},{value:"Global Isolation Mode",id:"global-isolation-mode",children:[{value:"System Property",id:"system-property",children:[]},{value:"Config",id:"config",children:[]}]}],s={rightToc:l};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"All specs allow you to control how the test engine creates instances of Specs for test cases. This behavior is called the ",Object(i.b)("em",{parentName:"p"},"isolation mode")," and is controlled\nby an enum ",Object(i.b)("inlineCode",{parentName:"p"},"IsolationMode"),". There are three values: ",Object(i.b)("inlineCode",{parentName:"p"},"SingleInstance"),", ",Object(i.b)("inlineCode",{parentName:"p"},"InstancePerLeaf"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"InstancePerTest"),"."),Object(i.b)("p",null,"If you want tests to be executed inside fresh instances of the spec - to allow for state shared between tests to be reset -\nyou can change the isolation mode."),Object(i.b)("p",null,"This can be done by using the DSL such as:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"class MyTestClass : WordSpec({\n isolationMode = IsolationMode.SingleInstance\n // tests here\n})\n")),Object(i.b)("p",null,"Or if you prefer function overrides, you can override ",Object(i.b)("inlineCode",{parentName:"p"},"fun isolationMode(): IsolationMode"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"class MyTestClass : WordSpec() {\n  override fun isolationMode() = IsolationMode.SingleInstance\n  init {\n    // tests here\n  }\n}\n")),Object(i.b)("h2",{id:"single-instance"},"Single Instance"),Object(i.b)("p",null,"The default isolation mode is ",Object(i.b)("inlineCode",{parentName:"p"},"SingleInstance")," whereby one instance of the Spec class is created and then each test case\nis executed in turn until all tests have completed."),Object(i.b)("p",null,"For example, in the following spec, the same id would be printed three times as the same instance is used for all tests."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class SingleInstanceExample : WordSpec({\n   val id = UUID.randomUUID()\n   "a" should {\n      println(id)\n      "b" {\n         println(id)\n      }\n      "c" {\n         println(id)\n      }\n   }\n})\n')),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The default is the same as ScalaTest (the inspiration for this framework), Jest, Jasmine, and other Javascript frameworks, but different to JUnit."))),Object(i.b)("h2",{id:"instancepertest"},"InstancePerTest"),Object(i.b)("p",null,"The next mode is ",Object(i.b)("inlineCode",{parentName:"p"},"IsolationMode.InstancePerTest"),' where a new spec will be created for every test case, including inner contexts.\nIn other words, outer contexts will execute as a "stand alone" test in their own instance of the spec.\nAn example should make this clear.'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class InstancePerTestExample : WordSpec() {\n\n  override fun isolationMode(): IsolationMode = IsolationMode.InstancePerTest\n\n  init {\n    "a" should {\n      println("Hello")\n      "b" {\n        println("From")\n      }\n      "c" {\n        println("Sam")\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"Do you see how we've overridden the ",Object(i.b)("inlineCode",{parentName:"p"},"isolationMode")," function here."),Object(i.b)("p",null,"When this is executed, the following will be printed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Hello\nHello\nFrom\nHello\nSam\n")),Object(i.b)("p",null,'This is because the outer context (test "a") will be executed first. Then it will be executed again for test "b", and then again for test "c".\nEach time in a clean instance of the Spec class. This is very useful when we want to re-use variables.'),Object(i.b)("p",null,"Another example will show how the variables are reset."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class InstancePerTestExample : WordSpec() {\n\n  override fun isolationMode(): IsolationMode = IsolationMode.InstancePerTest\n\n  val counter = AtomicInteger(0)\n\n  init {\n    "a" should {\n      println("a=" + counter.getAndIncrement())\n      "b" {\n        println("b=" + counter.getAndIncrement())\n      }\n      "c" {\n        println("c=" + counter.getAndIncrement())\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"This time, the output will be:"),Object(i.b)("p",null,"a=0\na=0\nb=1\na=0\nc=1"),Object(i.b)("h2",{id:"instanceperleaf"},"InstancePerLeaf"),Object(i.b)("p",null,"The next mode is ",Object(i.b)("inlineCode",{parentName:"p"},"IsolationMode.InstancePerLeaf"),' where a new spec will be created for every leaf test case - so excluding inner contexts.\nIn other words, inner contexts are only executed as part of the "path" to an outer test.\nAn example should make this clear.'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class InstancePerLeafExample : WordSpec() {\n\n  override fun isolationMode(): IsolationMode = IsolationMode.InstancePerLeaf\n\n  init {\n    "a" should {\n      println("Hello")\n      "b" {\n        println("From")\n      }\n      "c" {\n        println("Sam")\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"When this is executed, the following will be printed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Hello\nFrom\nHello\nSam\n")),Object(i.b)("p",null,'This is because the outer context - test "a" - will be executed first, followed by test "b" in the same instance.\nThen a new spec will be created, and test "a" again executed, followed by test "c".'),Object(i.b)("p",null,"Another example will show how the variables are reset."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'class InstancePerLeafExample : WordSpec() {\n\n  override fun isolationMode(): IsolationMode = IsolationMode.InstancePerLeaf\n\n  val counter = AtomicInteger(0)\n\n  init {\n    "a" should {\n      println("a=" + counter.getAndIncrement())\n      "b" {\n        println("b=" + counter.getAndIncrement())\n      }\n      "c" {\n        println("c=" + counter.getAndIncrement())\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"This time, the output will be:"),Object(i.b)("p",null,"a=0\nb=1\na=0\nc=1"),Object(i.b)("h2",{id:"global-isolation-mode"},"Global Isolation Mode"),Object(i.b)("p",null,"Rather than setting the isolation mode in every spec, we can set it globally in project config or via a system property."),Object(i.b)("h3",{id:"system-property"},"System Property"),Object(i.b)("p",null,"To set the global isolation mode at the command line, use the system property ",Object(i.b)("inlineCode",{parentName:"p"},"kotest.framework.isolation.mode")," with one of the values:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"InstancePerTest"),Object(i.b)("li",{parentName:"ul"},"InstancePerLeaf"),Object(i.b)("li",{parentName:"ul"},"SingleInstance")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The values are case sensitive."))),Object(i.b)("h3",{id:"config"},"Config"),Object(i.b)("p",null,"See the docs on setting up ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/framework/project-config.html"}),"project wide config"),", and then add the isolation mode you want to be the default. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"class ProjectConfig: AbstractProjectConfig() {\n   override val isolationMode = IsolationMode.InstancePerLeaf\n}\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Setting an isolation mode in a Spec will always override the project wide setting."))))}b.isMDXComponent=!0},161:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),b=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=b(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(t),m=a,u=d["".concat(r,".").concat(m)]||d[m]||p[m]||i;return t?o.a.createElement(u,c(c({ref:n},s),{},{components:t})):o.a.createElement(u,c({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=t[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);