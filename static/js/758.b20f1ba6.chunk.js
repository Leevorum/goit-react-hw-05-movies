"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[758],{7758:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(5861),a=r(8152),c=r(7757),s=r.n(c),i=r(2791),o=r(3504),u=r(6871),p=r(4554),l=r(3770),v="movieCard_movieWrapper__kAmJ1",h="movieCard_movieDescription__t0Svq",d="movieCard_genresList__+GtPw",f="movieCard_listItem__8rPah",m="movieCard_movieImage__RkXYY",x=r(184);function g(e){var t=e.movie,r=t.poster_path,n=t.title,a=t.overview,c=t.genres,s=t.vote_average,i="".concat("https://image.tmdb.org/t/p/w400").concat(r),o=10*s;return(0,x.jsxs)("div",{className:v,children:[(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w400null"!==i?i:l,alt:"",className:m}),(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)("h2",{children:n}),(0,x.jsxs)("p",{children:["User Score ",o,"%"]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:a}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("ul",{className:d,children:c.map((function(e){return(0,x.jsx)("li",{className:f,children:e.name},e.id)}))})]})]})}function _(){var e,t,r,c=(0,i.useState)(null),l=(0,a.Z)(c,2),v=l[0],h=l[1],d=(0,i.useState)(!1),f=(0,a.Z)(d,2),m=f[0],_=f[1],j=(0,i.useState)(!1),w=(0,a.Z)(j,2),b=w[0],y=w[1],k=(0,u.UO)().movieId,S=(0,u.TH)(),U=null!==(e=null===(t=S.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,i.useEffect)((function(){_(!0);var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Y5)(k);case 3:t=e.sent,h(t.data),_(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),_(!1),y(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[k]),(0,x.jsxs)("div",{children:[(0,x.jsx)("button",{type:"button",children:(0,x.jsx)(o.rU,{to:U,state:{searchQuery:null===(r=S.state)||void 0===r?void 0:r.searchQuery},children:"Go back"})}),m&&(0,x.jsx)("p",{children:"Data is loading..."}),v&&(0,x.jsx)(g,{movie:v}),b&&(0,x.jsx)("p",{children:"The movie is not avaible"}),v&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("p",{children:"Addition Information"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,x.jsx)(i.Suspense,{children:(0,x.jsx)(u.j3,{})})]})}},4554:function(e,t,r){r.d(t,{Y5:function(){return h},e6:function(){return f},i2:function(){return x},sI:function(){return u},wr:function(){return l}});var n=r(5861),a=r(7757),c=r.n(a),s=r(4569),i=r.n(s),o="4cfbca3d61713e2ef2c4275dd6982dc3";function u(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},3770:function(e,t,r){e.exports=r.p+"static/media/dummy_image.308ebaab056d71be7034.png"}}]);
//# sourceMappingURL=758.b20f1ba6.chunk.js.map