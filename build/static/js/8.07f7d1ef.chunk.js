(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{126:function(e,a,t){},128:function(e,a,t){e.exports=t.p+"static/media/plinth.11d70338.png"},186:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return v});var s=t(10),n=t(2),l=t.n(n),c=(t(126),t(5)),m=t(32),r=t(8),i=t(23),o=t(100),h=t(106),E=t(129),u=t(131),f=t(130),d=t(190),N=t(128);function v(e){var a=e.auth,t=e.setAuth,v=e.serverSystemUrl,p=Object(c.j)(),x=Object(c.l)();m.a.registerPlugin(i.a);var b=Object(n.useRef)(null),g=Object(n.useState)(new r.d({paused:!1})),C=Object(s.a)(g,1)[0];Object(n.useEffect)(function(){"/"===p.pathname?C.fromTo(b,2,{x:"-200px",ease:r.b.easeOut},{x:"0",opacity:1,ease:r.b.easeOut}).delay(3):C.fromTo(b,2,{x:"-200px",ease:r.b.easeOut},{x:"0",opacity:1,ease:r.b.easeOut})},[]);return l.a.createElement("div",null,l.a.createElement("div",{className:"area"}),l.a.createElement("nav",{className:"main-menu",ref:function(e){b=e}},l.a.createElement("div",{className:"top-header"},l.a.createElement("a",{href:"/"},l.a.createElement("img",{src:N,className:"image-plinth fa",alt:"img"}),l.a.createElement("span",{className:"nav-text plinth-text",style:{fontWeight:"bolder",marginRight:"3",left:"10%"}},"Plinth'23"))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"anchor",href:"/"},l.a.createElement("div",{className:"fa fa-2x"},l.a.createElement(o.a,{size:25})),l.a.createElement("span",{className:"nav-text"},"Home"))),l.a.createElement("li",{className:"has-subnav"},l.a.createElement("a",{className:"anchor",href:"/aboutus"},l.a.createElement("div",{className:"fa fa-2x"},l.a.createElement(E.a,{size:25})),l.a.createElement("span",{className:"nav-text"},"About Us"))),l.a.createElement("li",{className:"has-subnav"},l.a.createElement("a",{className:"anchor",href:"/competitions"},l.a.createElement("div",{className:"fa fa-2x"},l.a.createElement(h.a,{size:25})),l.a.createElement("span",{className:"nav-text"},"Competitions"))),l.a.createElement("li",{className:"has-subnav"},l.a.createElement("a",{className:"anchor",href:"/lnm_hacks"},l.a.createElement("div",{className:"fa fa-2x"},l.a.createElement("svg",{className:"lnmhackslogo",width:"65",height:"65",viewBox:"0 0 65 65",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("rect",{x:"8",y:"8",width:"16",height:"16",rx:"3",stroke:"white",strokeWidth:"4"}),l.a.createElement("path",{d:"M27 8H37C38.6569 8 40 9.34315 40 11V21C40 22.6569 38.6569 24 37 24H27C25.3431 24 24 22.6569 24 21V11C24 9.34315 25.3431 8 27 8Z",stroke:"white",strokeWidth:"4"}),l.a.createElement("path",{d:"M43 8H53C54.6569 8 56 9.34315 56 11V21C56 22.6569 54.6569 24 53 24H43C41.3431 24 40 22.6569 40 21V11C40 9.34315 41.3431 8 43 8Z",stroke:"white",strokeWidth:"4"}),l.a.createElement("path",{d:"M27 24H37C38.6569 24 40 25.3431 40 27V37C40 38.6569 38.6569 40 37 40H27C25.3431 40 24 38.6569 24 37V27C24 25.3431 25.3431 24 27 24Z",stroke:"white",strokeWidth:"4"}),l.a.createElement("path",{d:"M43 24H53C54.6569 24 56 25.3431 56 27V37C56 38.6569 54.6569 40 53 40H43C41.3431 40 40 38.6569 40 37V27C40 25.3431 41.3431 24 43 24Z",stroke:"white",strokeWidth:"4"}),l.a.createElement("path",{d:"M43 40H53C54.6569 40 56 41.3431 56 43V53C56 54.6569 54.6569 56 53 56H43C41.3431 56 40 54.6569 40 53V43C40 41.3431 41.3431 40 43 40Z",stroke:"white",strokeWidth:"4"}))),l.a.createElement("span",{className:"nav-text"},"LNM Hacks"))),l.a.createElement("li",{className:"has-subnav"},l.a.createElement("a",{className:"anchor",href:"/campus_ambassador"},l.a.createElement("div",{className:"fa fa-2x"},l.a.createElement(h.c,{size:25})),l.a.createElement("span",{className:"nav-text"},"Ambassador"))),l.a.createElement("li",{className:"has-subnav"},l.a.createElement("a",{className:"anchor",href:"/accomodation"},l.a.createElement("div",{className:"fa fa-2x"},l.a.createElement(f.a,{size:25})),l.a.createElement("span",{className:"nav-text"},"Accomodation"))),l.a.createElement("li",{className:"has-subnav"},l.a.createElement("a",{className:"anchor",href:"/ourteam"},l.a.createElement("div",{className:"fa fa-2x"},l.a.createElement(u.a,{size:25})),l.a.createElement("span",{className:"nav-text"},"Our Team"))),"admin"===a&&l.a.createElement("li",{className:"has-subnav"},l.a.createElement("a",{className:"anchor",href:"/admin"},l.a.createElement("div",{className:"fa fa-2x"},l.a.createElement(f.a,{size:25})),l.a.createElement("span",{className:"nav-text"},"Admin")))),l.a.createElement("ul",{className:"logout"},l.a.createElement("li",null,l.a.createElement("button",{className:"anchor",href:"/login",onClick:function(){"false"===a?x("/login"):d.a.get("".concat(v,"/auth/logout"),{validateStatus:!1,withCredentials:!0}).then(function(e){200===e.status&&(t("false"),x("/"),console.log(e.data.msg))})}},l.a.createElement("div",{className:"fa fa-2x"},l.a.createElement(h.b,{size:25})),l.a.createElement("span",{className:"nav-text"},"false"===a?"Login":"Logout"))))))}}}]);
//# sourceMappingURL=8.07f7d1ef.chunk.js.map