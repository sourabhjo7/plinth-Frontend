(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{154:function(e,t,n){e.exports={explore_body:"CampusAmb_explore_body__K0SFi",gradient:"CampusAmb_gradient__OKzQX",explore:"CampusAmb_explore__2pgYX",imgdiv:"CampusAmb_imgdiv__PHrH_",imgCon:"CampusAmb_imgCon__2DvEP",floating:"CampusAmb_floating__2Road",explore_image:"CampusAmb_explore_image__1dtlE",explore_content:"CampusAmb_explore_content__2jnVX",explore_heading:"CampusAmb_explore_heading__nlj8w",explore_details:"CampusAmb_explore_details__2bDvt",explore_navbar:"CampusAmb_explore_navbar__1OFnq",explore_navoptions:"CampusAmb_explore_navoptions__1yuXa",event_register_button:"CampusAmb_event_register_button__1jybI",event_register_button1:"CampusAmb_event_register_button1__3ka1t",explore_description:"CampusAmb_explore_description__38NKQ",explore_details1:"CampusAmb_explore_details1__X9dkY",explore_description1:"CampusAmb_explore_description1__2dnfb",explore_contact:"CampusAmb_explore_contact__11ER3",active:"CampusAmb_active__3s00f",none:"CampusAmb_none__171hd",notnone:"CampusAmb_notnone__1Dbsa"}},155:function(e,t,n){e.exports={contact:"Contact_contact__3TtQD",name:"Contact_name__1hz__",number:"Contact_number__14PSx"}},174:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(8),o=n(0),i=n.n(o),c=n(154),s=n.n(c),l=n(34),u=n(33),p=n(45),m=(n(68),n(20)),d=n(32),f=n(155),h=n.n(f),v=n(108);var _=function(){var e=[{name:"Arjun Saxena",phone:"+91 95714 85158",email:"20ucc021@lnmiit.ac.in"},{name:"Muskan Singla",phone:"+91 83770 89610",email:"20ucc068@lnmiit.ac.in"}];return console.log(e),i.a.createElement(i.a.Fragment,null,e.map(function(e){return i.a.createElement("div",{className:h.a.contact},i.a.createElement("div",{className:h.a.nameNumber},i.a.createElement("div",{className:h.a.name},e.name),i.a.createElement("div",{className:h.a.number},e.phone)),i.a.createElement("div",{className:h.a.mail},i.a.createElement("a",{style:{color:"white"},href:"https://mail.google.com/mail/?view=cm&fs=1&to= ".concat(e.email),target:"_blank"},i.a.createElement(v.b,{size:25}))))}))};function g(){g=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(j){s=function(e,t,n){return e[t]=n}}function l(e,t,n,a){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),c=new A(a||[]);return r(i,"_invoke",{value:w(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var p={};function m(){}function d(){}function f(){}var h={};s(h,o,function(){return this});var v=Object.getPrototypeOf,_=v&&v(v(N([])));_&&_!==t&&n.call(_,o)&&(h=_);var b=f.prototype=m.prototype=Object.create(h);function y(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t(function(a,i){!function r(a,o,i,c){var s=u(e[a],e,o);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(p).then(function(e){l.value=e,i(l)},function(e){return r("throw",e,i,c)})}c(s.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function w(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function E(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,p;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=f,r(b,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:d,configurable:!0}),d.displayName=s(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(x.prototype),s(x.prototype,i,function(){return this}),e.AsyncIterator=x,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new x(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(b),s(b,c,"Generator"),s(b,o,function(){return this}),s(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=N,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}t.default=function(e){e.auth,e.setAuth;var t=Object(o.useState)("about"),n=Object(a.a)(t,2),c=n[0],f=n[1],h=Object(o.useState)("A part  time opportunity for the students to cater a large crowd in various fields like programming, gaming, MUN etc.  The program provides occassions for networking and building connections. "),v=Object(a.a)(h,2),b=v[0],y=v[1],x=function(e){var t=e.target.id;"contact"===t?(y(i.a.createElement(_,null)),f("contact"),console.log("contact")):"about"===t?(y("A part  time opportunity for the students to cater a large crowd in various fields like programming, gaming, MUN etc.  The program provides occassions for networking and building connections. "),f("about")):"structure"===t?(y("A volunteer role to spread information and schedule of Plinth and its events to the masses belonging to universities other than the LNMIIT. Required participation for availing benefits must be 12."),f("structure")):"timeline"===t?(y("Registration Deadline: 15th January 2023"),f("timeline")):"prizes"===t&&(y("Free pronite passes, a certificate for adding in the CV, Plinth customised goodies. Note: All concessions and certificates are subject to the participation you bring. Required participation for availing benefits must be 12."),f("prizes"))},w=Object(o.useCallback)(function(){var e=Object(r.a)(g().mark(function e(t){return g().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]),E=Object(o.useCallback)(function(){var e=Object(r.a)(g().mark(function e(t){return g().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]),C=Object(o.useState)({x:0,y:0}),L=Object(a.a)(C,2),A=L[0],N=L[1],k={default:{x:A.x-10,y:A.y-12},imgInitial:{opacity:0},imgAnimate:{opacity:1},contentInitial:{opacity:0,y:"-100%"},contentAnimate:{opacity:1,y:0},text:{height:80,width:80,x:A.x-38,y:A.y-40,backgroundColor:"white",mixBlendMode:"difference"},card:{height:90,width:90,x:A.x-43,y:A.y-45,backgroundColor:"white",mixBlendMode:"difference"},card2:{height:46,width:46,x:A.x-21,y:A.y-23,backgroundColor:"white",mixBlendMode:"difference"},btn:{height:40,width:40,x:A.x-18,y:A.y-20,backgroundColor:"white",mixBlendMode:"difference"},handlebefore:{opacity:0},handleafter:{opacity:1}},j=Object(o.useState)("default"),O=Object(a.a)(j,2),M=O[0],S=O[1],P=function(){return S("text")},I=function(){return S("btn")},z=function(){return S("default")};Object(o.useEffect)(function(){var e=function(e){N({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}},[]);var F=window.screen.width>600,T=window.screen.width<425;return i.a.createElement(i.a.Fragment,null,!T&&i.a.createElement(m.motion.div,{className:"cursor",variants:k,animate:M,transition:{x:{delay:0},y:{delay:0},type:"tween",stiffness:1e4,bounce:0}}),i.a.createElement("div",{className:s.a.explore_body},i.a.createElement("div",{className:s.a.explore},i.a.createElement("div",{onMouseEnter:P,onMouseLeave:z,className:"".concat(s.a.explore_heading," ").concat(s.a.none)},"Campus Ambassador Program"),i.a.createElement(m.motion.div,{variants:k,initial:"imgInitial",animate:"imgAnimate",transition:{duration:1.5,delay:0},className:s.a.imgdiv},i.a.createElement("div",{className:s.a.imgCon},i.a.createElement(p.LazyLoadImage,{className:s.a.explore_image,onMouseEnter:function(){return S("card")},onMouseLeave:z,src:"https://drive.google.com/uc?export=view&id=".concat("https://drive.google.com/file/d/1sUvoVdmNWaRNR-3wEUChQUMWa-FIi8HX/view?usp=share_link".split("/d/").pop().split("/view")[0]),alt:"Campus Ambassador Program Poster",effect:"blur",height:"100%",width:"100%",placeholderSrc:"./Images/dark-bg-preloader2.jpg"}))),i.a.createElement(m.motion.div,{variants:k,initial:"contentInitial",animate:"contentAnimate",transition:{duration:1,delay:0},className:s.a.explore_content},i.a.createElement("div",{onMouseEnter:P,onMouseLeave:z,className:"".concat(s.a.explore_heading," ").concat(s.a.notnone)},"Campus Ambassador Program"),i.a.createElement("div",{className:s.a.explore_details},i.a.createElement("div",{onMouseEnter:I,onMouseLeave:z,className:s.a.explore_navbar},i.a.createElement("div",{className:"about"===c?"".concat(s.a.explore_navoptions," ").concat(s.a.active):"".concat(s.a.explore_navoptions),style:{border:0},onClick:function(e){return x(e)},id:"about"},"About"),i.a.createElement("div",{className:"structure"===c?"".concat(s.a.explore_navoptions," ").concat(s.a.active):"".concat(s.a.explore_navoptions),onClick:function(e){return x(e)},id:"structure"},"Structure"),i.a.createElement("div",{className:"prizes"===c?"".concat(s.a.explore_navoptions," ").concat(s.a.active):"".concat(s.a.explore_navoptions),onClick:function(e){return x(e)},id:"prizes"},"Prizes"),i.a.createElement("div",{className:"timeline"===c?"".concat(s.a.explore_navoptions," ").concat(s.a.active):"".concat(s.a.explore_navoptions),onClick:function(e){return x(e)},id:"timeline"},"Timeline"),i.a.createElement("div",{className:"contact"===c?"".concat(s.a.explore_navoptions," ").concat(s.a.active):"".concat(s.a.explore_navoptions),onClick:function(e){return x(e)},id:"contact"},"Contacts")),i.a.createElement("div",{className:s.a.explore_description},i.a.createElement("div",{onMouseEnter:I,onMouseLeave:z},b))),i.a.createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSf22WYYU0_e9R-GnHkv8XN4FBVdeXinJDSjj-li9Q-wjcAEHA/viewform",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("button",{className:s.a.event_register_button,onMouseEnter:I,onMouseLeave:z},"Register")))),i.a.createElement(m.motion.div,{onMouseEnter:I,onMouseLeave:z,variants:k,initial:"handlebefore",animate:"handleafter",transition:{duration:"1",delay:"0.5"}},i.a.createElement(d.a,null)),F&&i.a.createElement(l.a,{id:"tsparticles",init:w,loaded:E,options:{particles:{number:{value:40,density:{enable:!0,value_area:500}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:3},image:{src:"",width:100,height:100}},opacity:{value:.7,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!0,distance:64.09640098708464,color:"#ffffff",opacity:.5,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"bubble"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:85.20998174071826,size:0,duration:2,opacity:0,speed:3},repulse:{distance:170,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,fullScreen:{enable:!0,zIndex:0}}})))}}}]);
//# sourceMappingURL=13.5956faf8.chunk.js.map