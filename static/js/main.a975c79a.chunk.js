(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{16:function(e,t,c){},20:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),i=c.n(a),r=(c(16),c(11)),o=c(8),l=c(2),j=function(e){switch(e.name){case"circle":return Object(l.jsx)(o.b,{className:"icon"});case"cross":return Object(l.jsx)(o.c,{className:"icon"});default:return Object(l.jsx)(o.a,{className:"icon"})}},b=c(9),m=(c(18),c(25)),u=c(26),d=c(27),p=c(30),x=c(28),O=c(29),h=(c(19),c(20),new Array(9).fill("empty")),y=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(r.a)(a,2),o=i[0],y=i[1],f=function(e){return o?Object(b.b)(o,{type:"dark"}):"empty"!==h[e]?Object(b.b)("It is Already Filled",{type:"error"}):(h[e]=c?"cross":"circle",s(!c),void(h[0]===h[1]&&h[0]===h[2]&&"empty"!==h[0]?y("".concat(h[0]," Wins")):h[3]===h[4]&&h[3]===h[5]&&"empty"!==h[3]?y("".concat(h[3]," Wins")):h[6]===h[7]&&h[6]===h[8]&&"empty"!==h[6]?y("".concat(h[6]," Wins")):h[0]===h[3]&&h[0]===h[6]&&"empty"!==h[0]?y("".concat(h[0]," Wins")):h[1]===h[4]&&h[1]===h[7]&&"empty"!==h[1]?y("".concat(h[1]," wins")):h[2]===h[5]&&h[2]===h[8]&&"empty"!==h[2]?y("".concat(h[2]," Wins")):h[0]===h[4]&&h[0]===h[8]&&"empty"!==h[0]?y("".concat(h[0]," Wins")):h[2]===h[4]&&h[2]===h[6]&&"empty"!==h[2]&&y("".concat(h[2]," Wins"))))};return Object(l.jsxs)(m.a,{className:"p-5",children:[Object(l.jsx)(b.a,{position:"bottom-center"}),Object(l.jsx)(u.a,{children:Object(l.jsxs)(d.a,{md:6,className:"offset-md-3",children:[o?Object(l.jsxs)("div",{className:"mb-2 mt-2",children:[Object(l.jsx)("h1",{className:"text-center text-uppercase text-warning",children:o}),Object(l.jsx)(p.a,{color:"success",block:!0,onClick:function(){s(!1),y(""),h.fill("empty",0,9)},children:"Reload Game"})]}):Object(l.jsxs)("h1",{className:"text-center text-uppercase text-warning",children:[c?"Cross":"Circle"," Turns"]}),Object(l.jsx)("div",{className:"grid",children:h.map((function(e,t){return Object(l.jsx)(x.a,{body:!0,inverse:!0,color:"primary",onClick:function(){return f(t)},children:Object(l.jsx)(O.a,{className:"box",children:Object(l.jsx)(j,{name:e})})})}))})]})})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),f()}},[[23,1,2]]]);
//# sourceMappingURL=main.a975c79a.chunk.js.map