"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[344],{912:function(n,e,t){t.d(e,{Df:function(){return s},TP:function(){return p},XT:function(){return f},tx:function(){return h},zv:function(){return l}});var r=t(861),a=t(757),c=t.n(a),u=t(340),i="https://api.themoviedb.org/3/",o={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2QwMjBlM2RjZjZiOTcyMjUzMjdhZjVlMWUzNzU1NSIsInN1YiI6IjY1OGFlYjhlMDcyMTY2Njg1YWE1Yzc0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tvotZh6KyysO4resszDKkndp4RGhU8nwgSb0qox9yQk"}},s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"trending/movie/day?language=en-US"),n.next=3,u.Z.get(e,o);case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(i,"search/movie?query=").concat(e,"&include_adult=false&language=en-US"),n.next=3,u.Z.get(t,o);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(i,"movie/").concat(e,"?language=en-US"),n.next=3,u.Z.get(t,o);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(i,"movie/").concat(e,"/credits?language=en-US"),n.next=3,u.Z.get(t,o);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(i,"movie/").concat(e,"/reviews?language=en-US&page=1"),n.next=3,u.Z.get(t,o);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},344:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=t(861),a=t(439),c=t(757),u=t.n(c),i=t(912),o=t(791),s=t(87),f="Home_container__j1Eze",p="Home_movieLink__99vmQ",l=t(184),h=function(){var n=(0,o.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1],h=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Df)();case 3:e=n.sent,c(e.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return(0,o.useEffect)((function(){h()}),[]),(0,l.jsx)("main",{children:(0,l.jsxs)("div",{className:f,children:[(0,l.jsx)("h2",{children:"Trending today"}),(0,l.jsx)("ul",{children:t.map((function(n){return(0,l.jsx)("li",{children:(0,l.jsx)(s.rU,{className:p,to:"movies/".concat(n.id),children:n.title})},n.id)}))})]})})}}}]);
//# sourceMappingURL=344.ec3265ed.chunk.js.map