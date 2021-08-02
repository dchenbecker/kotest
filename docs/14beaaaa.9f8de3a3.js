(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(m,a(a({ref:t},l),{},{components:n})):o.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(161)),s={id:"pitest",title:"Pitest",sidebar_label:"Pitest",slug:"pitest.html"},a={unversionedId:"extensions/pitest",id:"extensions/pitest",isDocsHomePage:!1,title:"Pitest",description:"The Mutation Testing tool Pitest is integrated with Kotest via an extension module.",source:"@site/docs/extensions/pitest.md",slug:"/extensions/pitest.html",permalink:"/docs/extensions/pitest.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/extensions/pitest.md",version:"current",sidebar_label:"Pitest",sidebar:"extensions",previous:{title:"Robolectric",permalink:"/docs/extensions/robolectric.html"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Mutation Testing tool ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://pitest.org/"}),"Pitest")," is integrated with Kotest via an extension module."),Object(i.b)("p",null,"After ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://gradle-pitest-plugin.solidsoft.info/"}),"configuring")," Pitest,\nadd the ",Object(i.b)("inlineCode",{parentName:"p"},"io.kotest.extensions:kotest-extensions-pitest")," module to your dependencies as well:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'    testImplementation("io.kotest.extensions:kotest-extensions-pitest:<version>")\n')),Object(i.b)("p",null,"Note: Since pitest is an extension, we use a different maven group name (io.kotest.extensions) from the core modules."),Object(i.b)("p",null,"After doing that, we need to inform Pitest that we're going to use ",Object(i.b)("inlineCode",{parentName:"p"},"Kotest")," as a ",Object(i.b)("inlineCode",{parentName:"p"},"testPlugin"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'// Assuming that you have already configured the Gradle/Maven extension\nconfigure<PitestPluginExtension> {\n    testPlugin.set("Kotest")    // <-- Telling Pitest that we\'re using Kotest\n    targetClasses.set(listOf("my.company.package.*"))\n}\n')),Object(i.b)("p",null,"This should set everything up, and running ",Object(i.b)("inlineCode",{parentName:"p"},"./gradlew pitest")," will generate reports in the way you configured."))}p.isMDXComponent=!0}}]);