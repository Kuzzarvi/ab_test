(this.webpackJsonpab_test=this.webpackJsonpab_test||[]).push([[0],{53:function(e,n,t){},54:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"fetchCards",(function(){return h})),t.d(r,"likeCard",(function(){return p})),t.d(r,"delCard",(function(){return _})),t.d(r,"showLikedCards",(function(){return R}));var c,a=t(0),i=t(8),s=t.n(i),d=t(5),o=d.c,u=t(4),l=t(12),j=t.n(l),O=t(24);!function(e){e.FETCH_CARD="FETCH_CARD",e.FETCH_CARD_SUCCES="FETCH_CARD_SUCCES",e.FETCH_CARD_ERROR="FETCH_CARD_ERROR",e.CARD_LIKE="CARD_LIKE",e.CARD_DEL="CARD_DEL",e.SHOW_LIKED_CARDS="SHOW_LIKED_CARDS"}(c||(c={}));var b=t(25),C=t.n(b).a.create({baseURL:"https://randomfox.ca"});C.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var f=C,h=function(){return function(){var e=Object(O.a)(j.a.mark((function e(n){var t,r,a,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[],e.prev=1,n({type:c.FETCH_CARD}),r=[],a=0;a<6;a++)r.push(f.get("/floof/"));return e.next=7,Promise.all(r);case 7:t=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n({type:c.FETCH_CARD_ERROR,payload:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a"});case 13:i=[],t=t.map((function(e,n){var t=e.link.match(/\d+/);return t?i.includes(+t[0])?e.id=+t[0]*++n*1001:(e.id=+t[0],i.push(+t[0])):e.id=1e3*++n,e.isLiked=!1,e})),n({type:c.FETCH_CARD_SUCCES,payload:t});case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}()},p=function(e){return function(n){n({type:c.CARD_LIKE,payload:e})}},_=function(e){return function(n){n({type:c.CARD_DEL,payload:e})}},R=function(e){return function(n){n({type:c.SHOW_LIKED_CARDS,payload:e})}},E=r,x=function(){var e=Object(d.b)();return Object(u.b)(E,e)},D=(t(53),t(54),t(13)),k=t.n(D),L=t(14),y=t(1),m=function(e){var n=e.imageUrl,t=e.isLiked,r=e.showOnlyLiked,c=e.id,a=x(),i=a.likeCard,s=a.delCard;return Object(y.jsxs)("div",{className:r&&!t?"noDisplay":"foxCard",children:[Object(y.jsx)("img",{src:n,alt:"IseeWinner"}),Object(y.jsxs)("div",{className:"description",children:[Object(y.jsxs)("span",{className:"foxCardText",children:["id:",c]}),Object(y.jsx)("div",{onClick:function(){return i(c)},children:Object(y.jsx)(k.a,{className:"icon",path:L.a,size:1,color:t?"red":"gray"})}),Object(y.jsx)("div",{onClick:function(){return s(c)},children:Object(y.jsx)(k.a,{className:"icon",path:L.b,size:1,color:"black"})})]})]})};function v(e,n){var t=e.isLiked,r=e.showOnlyLiked,c=n.isLiked;return r===n.showOnlyLiked?t===c:c}var A=Object(a.memo)(m,v),g=function(){var e=o((function(e){return e.card})),n=e.cards,t=e.showOnlyLiked,r=e.error,c=e.loading,i=x(),s=i.fetchCards,d=i.showLikedCards;return Object(a.useEffect)((function(){s()}),[]),c?Object(y.jsx)("h1",{children:"Loading..."}):r?Object(y.jsxs)("h1",{children:["Error:",r]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"header",children:[Object(y.jsxs)("label",{className:"switch",children:[Object(y.jsx)("input",{type:"checkbox",checked:t,onChange:function(){return d(!t)}}),Object(y.jsx)("span",{className:"slider"})]}),Object(y.jsx)("span",{className:"checkboxText",children:"liked"})]}),Object(y.jsx)("div",{className:"foxTable",children:n.length?n.map((function(e){return Object(y.jsx)(A,{imageUrl:e.image,isLiked:e.isLiked,showOnlyLiked:t,id:e.id},e.id)})):Object(y.jsx)("div",{children:"IseeWinner"})})]})},H=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(g,{})})},S=t(3),w={cards:[],showOnlyLiked:!1,loading:!1,error:null},T=Object(u.c)({card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case c.FETCH_CARD:return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case c.FETCH_CARD_SUCCES:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,cards:n.payload});case c.FETCH_CARD_ERROR:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:n.payload});case c.CARD_LIKE:return Object(S.a)(Object(S.a)({},e),{},{cards:e.cards.map((function(e){return e.id===n.payload&&(e.isLiked=!e.isLiked),e}))});case c.CARD_DEL:return Object(S.a)(Object(S.a)({},e),{},{cards:e.cards.filter((function(e){return e.id!==n.payload}))});case c.SHOW_LIKED_CARDS:return Object(S.a)(Object(S.a)({},e),{},{showOnlyLiked:n.payload});default:return e}}}),F=t(26),I=Object(u.d)(T,Object(u.a)(F.a));s.a.render(Object(y.jsx)(d.a,{store:I,children:Object(y.jsx)(H,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.e98c745a.chunk.js.map