"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[349],{3349:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(5861),a=r(8152),c=r(7757),u=r.n(c),s=r(2791),o=r(6871),i=r(3504),p=r(4554),l=r(184);function h(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),r=t[0],c=t[1],h=(0,s.useState)(""),f=(0,a.Z)(h,2),v=f[0],d=f[1],m=(0,s.useState)([]),g=(0,a.Z)(m,2),x=g[0],b=g[1],y=(0,s.useState)(!1),w=(0,a.Z)(y,2),k=w[0],S=w[1],_=(0,o.TH)();(0,s.useEffect)((function(){_.state&&d(_.state.searchQuery)}),[_.state]),(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==v){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,p.sI)(v);case 5:if(0!==(t=e.sent).data.results.length){e.next=10;break}return alert("There is no movie with this name"),b([]),e.abrupt("return");case 10:b(t.data.results),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),S(!0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==r&&(d(r),c(""))},children:[(0,l.jsx)("button",{type:"submit",className:"SearchForm-button",children:(0,l.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),(0,l.jsx)("input",{className:"SearchForm-input",name:"input",value:r,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){c(e.target.value)}})]}),(0,l.jsx)("ul",{children:x&&x.map((function(e){var t;return(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/movies/".concat(e.id),state:{from:_,searchQuery:v},children:null!==(t=null===e||void 0===e?void 0:e.title)&&void 0!==t?t:null===e||void 0===e?void 0:e.name})},e.id)}))}),k&&(0,l.jsx)("p",{children:"Somthing goes wrong! Let's try again later..."})]})}},4554:function(e,t,r){r.d(t,{Y5:function(){return f},e6:function(){return d},i2:function(){return g},sI:function(){return i},wr:function(){return l}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),s=r.n(u),o="4cfbca3d61713e2ef2c4275dd6982dc3";function i(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=349.f35491d9.chunk.js.map