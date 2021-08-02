(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),b=(a(0),a(161)),l={id:"kotlinx_datetime",title:"Kotlinx Datetime Matchers",slug:"kotlinx-datetime-matchers.html",sidebar_label:"Kotlinx Datetime"},i={unversionedId:"assertions/kotlinx_datetime",id:"assertions/kotlinx_datetime",isDocsHomePage:!1,title:"Kotlinx Datetime Matchers",description:"Matchers for the Kotlinx Datetime library are provided by the kotest-assertions-kotlinx-time module.",source:"@site/docs/assertions/kotlinx-datetime.md",slug:"/assertions/kotlinx-datetime-matchers.html",permalink:"/docs/assertions/kotlinx-datetime-matchers.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/kotlinx-datetime.md",version:"current",sidebar_label:"Kotlinx Datetime",sidebar:"assertions",previous:{title:"Android Matchers",permalink:"/docs/assertions/android-matchers.html"},next:{title:"Arrow",permalink:"/docs/assertions/arrow.html"}},c=[],o={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Matchers for the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Kotlin/kotlinx-datetime"}),"Kotlinx Datetime")," library are provided by the ",Object(b.b)("inlineCode",{parentName:"p"},"kotest-assertions-kotlinx-time")," module."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"LocalDate"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveSameYearAs(otherDate)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date has the same year as the given date.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveSameMonthAs(otherDate)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date has the same month as the given date.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveSameDayAs(otherDate)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date has the same day of the month as the given date.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldBeBefore(otherDate)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date is before the given date.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldBeAfter(otherDate)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date is after the given date.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldBeWithin(period, otherDate)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date is within the period of the given date.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldBeWithin(duration, otherDate)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date is within the duration of the given date.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldBeBetween(firstDate, secondDate)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date is between firstdate and seconddate.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveYear(year)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date have correct year.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveMonth(month)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date have correct month.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveDayOfYear(day)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date have correct day of year.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveDayOfMonth(day)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date have correct day of month.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveDayOfWeek(day)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date have correct day of week.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveHour(hour)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date have correct hour.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveMinute(Minute)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date have correct minute.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveSecond(second)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date have correct second.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date.shouldHaveNano(nano)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the date have correct nano second.")))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"LocalDateTime"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldHaveSameHoursAs(otherTime)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time has the same hours as the given time.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldHaveSameMinutesAs(otherTime)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time has the same minutes as the given time.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldHaveSameSecondsAs(otherTime)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time has the same seconds as the given time.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldHaveSameNanosAs(otherTime)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time has the same nanos as the given time.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldBeBefore(otherTime)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time is before the given time.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldBeAfter(otherTime)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time is after the given time.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"time.shouldBeBetween(firstTime, secondTime)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the time is between firstTime and secondTime.")))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Instant"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"instant.shouldBeAfter(anotherInstant)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the instant is after anotherInstant")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"instant.shouldBeBefore(anotherInstant)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the instant is before anotherInstant")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"instant.shouldBeBetween(fromInstant, toInstant)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asserts that the instant is between fromInstant and toInstant")))))}d.isMDXComponent=!0},161:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=d(a),O=n,j=s["".concat(l,".").concat(O)]||s[O]||m[O]||b;return a?r.a.createElement(j,i(i({ref:t},o),{},{components:a})):r.a.createElement(j,i({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);