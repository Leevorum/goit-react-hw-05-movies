"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[482],{8482:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(5861),a=n(885),c=n(7757),u=n.n(c),s=n(6871),i=n(2791),o=n(4554),p=n(1688),f="actorCard_characterText__pcZ2J",h="actorCard_actorImage__BZLOP",l=n(184);function d(t){var e=t.actor,n=e.name,r=e.profile_path,a=e.character,c="".concat("https://image.tmdb.org/t/p/w200").concat(r);return(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w200null"!==c?c:p,alt:n,className:h}),(0,l.jsx)("p",{children:n}),(0,l.jsxs)("p",{className:f,children:["Character: ",a]})]})}var m="cast_actorsWrapper__1MbC3",g="cast_actorsList__qDaUA",v="cast_listItem__Km70l";function _(){var t=(0,i.useState)(null),e=(0,a.Z)(t,2),n=e[0],c=e[1],p=(0,i.useState)(!1),f=(0,a.Z)(p,2),h=f[0],_=f[1],x=(0,s.UO)().movieId;return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.e6)(x);case 3:if(0!==(e=t.sent).data.cast.length){t.next=6;break}return t.abrupt("return");case 6:c(e.data.cast),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),_(!0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[x]),(0,l.jsxs)("div",{className:m,children:[h&&(0,l.jsx)("p",{children:"There is no infromation about actors"}),(0,l.jsx)("ul",{className:g,children:n&&n.map((function(t){return(0,l.jsx)("li",{className:v,children:(0,l.jsx)(d,{actor:t})},t.id)}))})]})}},4554:function(t,e,n){n.d(e,{Y5:function(){return l},e6:function(){return m},i2:function(){return v},sI:function(){return o},wr:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u),i="4cfbca3d61713e2ef2c4275dd6982dc3";function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(i));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},1688:function(t,e,n){t.exports=n.p+"static/media/dummy_image.308ebaab056d71be7034.png"}}]);
//# sourceMappingURL=482.83d8cb08.chunk.js.map