(this.webpackJsonpab_test=this.webpackJsonpab_test||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"fetchCards",(function(){return p})),n.d(r,"likeCard",(function(){return h})),n.d(r,"delCard",(function(){return _})),n.d(r,"showLikedCards",(function(){return R}));var c,a=n(0),i=n(8),s=n.n(i),d=n(5),o=d.c,u=n(4),l=n(12),j=n.n(l),b=n(24);!function(e){e.FETCH_CARD="FETCH_CARD",e.FETCH_CARD_SUCCES="FETCH_CARD_SUCCES",e.FETCH_CARD_ERROR="FETCH_CARD_ERROR",e.CARD_LIKE="CARD_LIKE",e.CARD_DEL="CARD_DEL",e.SHOW_LIKED_CARDS="SHOW_LIKED_CARDS"}(c||(c={}));var C=n(25),f=n.n(C).a.create({baseURL:"https://randomfox.ca"});f.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var O=f,p=function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var n,r,a,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,t({type:c.FETCH_CARD}),n=[],r=0;r<6;r++)n.push(O.get("/floof/"));return e.next=6,Promise.all(n);case 6:a=e.sent,i=[],a=a.map((function(e,t){var n=e.link.match(/\d+/);return n?i.includes(+n[0])?e.id=+n[0]*++t*1001:(e.id=+n[0],i.push(+n[0])):e.id=1e3*++t,e.liked=!1,e})),t({type:c.FETCH_CARD_SUCCES,payload:a}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:c.FETCH_CARD_ERROR,payload:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a"});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},h=function(e){return function(t){t({type:c.CARD_LIKE,payload:e})}},_=function(e){return function(t){t({type:c.CARD_DEL,payload:e})}},R=function(e){return function(t){t({type:c.SHOW_LIKED_CARDS,payload:e})}},E=r,x=function(){var e=Object(d.b)();return Object(u.b)(E,e)},D=(n(53),n(54),n(13)),k=n.n(D),m=n(14),v=n(1),A=function(e){var t=e.card,n=e.liked,r=x(),c=r.likeCard,a=r.delCard;return Object(v.jsxs)("div",{className:n&&!t.liked?"noDisplay":"foxCard",children:[Object(v.jsx)("img",{src:t.image,alt:"IseeWinner"}),Object(v.jsxs)("div",{className:"description",children:[Object(v.jsxs)("span",{className:"foxCardText",children:["id:",t.id]}),Object(v.jsx)("div",{onClick:function(){return c(t.id)},children:Object(v.jsx)(k.a,{className:"icon",path:m.a,size:1,color:t.liked?"red":"gray"})}),Object(v.jsx)("div",{onClick:function(){return a(t.id)},children:Object(v.jsx)(k.a,{className:"icon",path:m.b,size:1,color:"black"})})]})]})},y=function(){var e=o((function(e){return e.card})),t=e.cards,n=e.liked,r=e.error,c=e.loading,i=x(),s=i.fetchCards,d=i.showLikedCards;Object(a.useEffect)((function(){s()}),[]);var u=Object(a.useMemo)((function(){return!!t.length&&(!n||!!t.filter((function(e){return e.liked===n})).length)}),[t,n]);return c?Object(v.jsx)("h1",{children:"Loading..."}):r?Object(v.jsxs)("h1",{children:["Error:",r]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"header",children:[Object(v.jsxs)("label",{className:"switch",children:[Object(v.jsx)("input",{type:"checkbox",checked:n,onChange:function(){return d(!n)}}),Object(v.jsx)("span",{className:"slider"})]}),Object(v.jsx)("span",{className:"checkboxText",children:"liked"})]}),Object(v.jsx)("div",{className:"foxTable",children:u?t.map((function(e){return Object(v.jsx)(A,{card:e,liked:n},e.id)})):Object(v.jsx)("div",{children:"IseeWinner"})})]})},g=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(y,{})})},H=n(3),L={cards:[],liked:!1,loading:!1,error:null},S=Object(u.c)({card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.FETCH_CARD:return Object(H.a)(Object(H.a)({},e),{},{loading:!0});case c.FETCH_CARD_SUCCES:return Object(H.a)(Object(H.a)({},e),{},{loading:!1,cards:t.payload});case c.FETCH_CARD_ERROR:return Object(H.a)(Object(H.a)({},e),{},{error:t.payload});case c.CARD_LIKE:return Object(H.a)(Object(H.a)({},e),{},{cards:e.cards.map((function(e){return e.id===t.payload&&(e.liked=!e.liked),e}))});case c.CARD_DEL:return Object(H.a)(Object(H.a)({},e),{},{cards:e.cards.filter((function(e){return e.id!==t.payload}))});case c.SHOW_LIKED_CARDS:return Object(H.a)(Object(H.a)({},e),{},{liked:t.payload});default:return e}}}),T=n(26),F=Object(u.d)(S,Object(u.a)(T.a));s.a.render(Object(v.jsx)(d.a,{store:F,children:Object(v.jsx)(g,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.86443b0b.chunk.js.map