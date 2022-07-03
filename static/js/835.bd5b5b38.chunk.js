"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[835],{3020:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(1688),a="MoviesSmallCard_image__iSmNo",s="MoviesSmallCard_textWrapper__zUZrl",c="MoviesSmallCard_title__WprdU",i="MoviesSmallCard_score__WnGhu",u=r(184);function o(e){var t,r,o=e.movie,l="".concat("https://image.tmdb.org/t/p/w400").concat(o.poster_path),p=Math.round(10*o.vote_average);return(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w400null"!==l?l:n,alt:null!==(t=null===o||void 0===o?void 0:o.title)&&void 0!==t?t:null===o||void 0===o?void 0:o.namevie,className:a}),(0,u.jsxs)("div",{className:s,children:[(0,u.jsx)("p",{className:c,children:null!==(r=null===o||void 0===o?void 0:o.title)&&void 0!==r?r:null===o||void 0===o?void 0:o.name}),(0,u.jsxs)("p",{className:i,children:["UserScore ",p,"%"]})]})]})}},9835:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(5861),a=r(885),s=r(7757),c=r.n(s),i=r(2791),u=r(501),o=r(6871),l=r(4554),p=r(3020),h="searchMovies_searchWrapper__9ua9U",d="searchMovies_moviesWrapper__Bc8Fw",v="searchMovies_moviesList__GcQAV",m="searchMovies_listItem__XClsq",f="searchMovies_SearchForm__x17HE",_="searchMovies_SearchFormButton__xrYAS",g="searchMovies_SearchFormButtonLabel__XAV5K",x="searchMovies_SearchFormInput__vmI1O",b=r(184);function y(){var e,t=(0,i.useState)(""),r=(0,a.Z)(t,2),s=r[0],y=r[1],w=(0,i.useState)(""),S=(0,a.Z)(w,2),k=S[0],j=S[1],Z=(0,i.useState)([]),M=(0,a.Z)(Z,2),N=M[0],U=M[1],C=(0,i.useState)(!1),F=(0,a.Z)(C,2),q=F[0],I=F[1],W=(0,o.TH)(),L=(0,u.lr)(),A=(0,a.Z)(L,2),B=A[0],E=A[1],G=null!==(e=B.get("searchquery"))&&void 0!==e?e:"",H=new URLSearchParams(W.search).get("searchquery");(0,i.useEffect)((function(){null!==H&&(E(H),j(G))}),[H,G,E]),(0,i.useEffect)((function(){var e,t=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==k){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,l.sI)(k);case 5:if(0!==(t=e.sent).data.results.length){e.next=10;break}return alert("There is no movie with this name"),U([]),e.abrupt("return");case 10:U(t.data.results),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),I(!0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();t(),E(""!==(e=k)?{searchquery:e}:{})}),[G,k,E]);return(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:h,children:(0,b.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault(),""!==s&&(j(s),y(""))},children:[(0,b.jsx)("button",{type:"submit",className:_,children:(0,b.jsx)("span",{className:g,children:"Search"})}),(0,b.jsx)("input",{className:x,name:"input",value:s,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){y(e.target.value)}})]})}),(0,b.jsx)("div",{className:d,children:(0,b.jsx)("ul",{className:v,children:N&&N.map((function(e){return(0,b.jsx)("li",{className:m,children:(0,b.jsx)(u.rU,{to:"/movies/".concat(e.id),state:{from:W},children:(0,b.jsx)(p.Z,{movie:e})})},e.id)}))})}),q&&(0,b.jsx)("p",{children:"Somthing goes wrong! Let's try again later..."})]})}},4554:function(e,t,r){r.d(t,{Y5:function(){return d},e6:function(){return m},i2:function(){return _},sI:function(){return o},wr:function(){return p}});var n=r(5861),a=r(7757),s=r.n(a),c=r(4569),i=r.n(c),u="4cfbca3d61713e2ef2c4275dd6982dc3";function o(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(u));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1688:function(e,t,r){e.exports=r.p+"static/media/dummy_image.308ebaab056d71be7034.png"}}]);
//# sourceMappingURL=835.bd5b5b38.chunk.js.map