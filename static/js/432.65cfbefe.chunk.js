"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[432],{3020:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(3770),a="MoviesSmallCard_image__iSmNo",c="MoviesSmallCard_textWrapper__zUZrl",s="MoviesSmallCard_title__WprdU",i="MoviesSmallCard_score__WnGhu",o=r(184);function u(e){var t,r,u=e.movie,p="".concat("https://image.tmdb.org/t/p/w400").concat(u.poster_path),l=Math.round(10*u.vote_average);return(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w400null"!==p?p:n,alt:null!==(t=null===u||void 0===u?void 0:u.title)&&void 0!==t?t:null===u||void 0===u?void 0:u.namevie,className:a}),(0,o.jsxs)("div",{className:c,children:[(0,o.jsx)("p",{className:s,children:null!==(r=null===u||void 0===u?void 0:u.title)&&void 0!==r?r:null===u||void 0===u?void 0:u.name}),(0,o.jsxs)("p",{className:i,children:["UserScore ",l,"%"]})]})]})}},4432:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(5861),a=r(8152),c=r(7757),s=r.n(c),i=r(2791),o=r(3504),u=r(6871),p=r(4554),l=r(3020),v="homePage_moviesWrapper__Z0tYg",d="homePage_pageTitle__0nMIF",h="homePage_moviesList__hjVNU",f="homePage_listItem__9Sx-Y",m=r(184);function g(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],g=(0,i.useState)(!1),_=(0,a.Z)(g,2),x=_[0],b=_[1],w=(0,u.TH)();return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.wr)();case 3:if(0!==(t=e.sent).data.results.length){e.next=6;break}return e.abrupt("return");case 6:c(t.data.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),b(!0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,m.jsxs)("div",{className:v,children:[r&&(0,m.jsx)("h1",{className:d,children:"Trending Today"}),(0,m.jsx)("ul",{className:h,children:r&&r.map((function(e){return(0,m.jsx)("li",{className:f,children:(0,m.jsx)(o.rU,{to:"/movies/".concat(e.id),state:{from:w},children:(0,m.jsx)(l.Z,{movie:e})})},e.id)}))}),x&&(0,m.jsx)("p",{children:"There are no trending movies today"})]})}},4554:function(e,t,r){r.d(t,{Y5:function(){return d},e6:function(){return f},i2:function(){return g},sI:function(){return u},wr:function(){return l}});var n=r(5861),a=r(7757),c=r.n(a),s=r(4569),i=r.n(s),o="4cfbca3d61713e2ef2c4275dd6982dc3";function u(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function g(e){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},3770:function(e,t,r){e.exports=r.p+"static/media/dummy_image.308ebaab056d71be7034.png"}}]);
//# sourceMappingURL=432.65cfbefe.chunk.js.map