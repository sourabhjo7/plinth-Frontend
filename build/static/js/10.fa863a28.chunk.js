(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{141:function(e,t,n){e.exports={explore_body:"Accomodation_explore_body__3gUaV",explore:"Accomodation_explore__10I-z",imgdiv:"Accomodation_imgdiv__38UxR",imgCon:"Accomodation_imgCon__3b8Ny",floating:"Accomodation_floating__1LRYS",explore_image:"Accomodation_explore_image__4v7xK",explore_content:"Accomodation_explore_content__37yff",explore_heading:"Accomodation_explore_heading__2oNgP",explore_details:"Accomodation_explore_details__2qc8q",explore_navbar:"Accomodation_explore_navbar__1IViO",explore_navoptions:"Accomodation_explore_navoptions__2C_w8",event_register_button:"Accomodation_event_register_button__qhkul",event_register_button1:"Accomodation_event_register_button1__FGPpW",explore_description:"Accomodation_explore_description__HPpWt",explore_details1:"Accomodation_explore_details1__1rahJ",explore_description1:"Accomodation_explore_description1__2IZNd",explore_contact:"Accomodation_explore_contact__neYrh",active:"Accomodation_active__3BlPx",dot:"Accomodation_dot__3MxMy",none:"Accomodation_none__2XOZp",notnone:"Accomodation_notnone__1dG3-",checkboxWrapper:"Accomodation_checkboxWrapper__33ShL",gradient:"Accomodation_gradient__2_WTU"}},142:function(e,t,n){e.exports={contact:"Contact_contact__2pcUO",name:"Contact_name__2E2wF",number:"Contact_number__RWt6g",outer:"Contact_outer__2Apne"}},157:function(e,t,n){"use strict";n.r(t);var a=n(4),o=n(8),r=n(1),i=n.n(r),c=n(11),l=n(141),s=n.n(l),u=n(39),d=n(38),m=(n(100),n(101),n(41)),h=n(23),f=n(37),p=n(142),v=n.n(p),y=n(99);var g=function(){return i.a.createElement("div",{className:v.a.outer},[{name:"Prateek Sharma ",phone:"+91 91192 42875",email:"20ucs146@lnmiit.ac.in"},{name:"Muskan Singla ",phone:"+91 83770 89610",email:"20ucc068@lnmiit.ac.in"}].map(function(e){return i.a.createElement("div",{className:v.a.contact},i.a.createElement("div",{className:v.a.nameNumber},i.a.createElement("div",{className:v.a.name},e.name),i.a.createElement("div",{className:v.a.number},e.phone)),i.a.createElement("div",{className:v.a.mail},i.a.createElement("a",{styles:{color:"white"},href:"https://mail.google.com/mail/?view=cm&fs=1&to= ".concat(e.email),target:"_blank"},i.a.createElement(y.b,{size:25}))))}))},b=n(96);function _(){_=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(L){l=function(e,t,n){return e[t]=n}}function s(e,t,n,o){var r=t&&t.prototype instanceof m?t:m,i=Object.create(r.prototype),c=new j(o||[]);return a(i,"_invoke",{value:x(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=s;var d={};function m(){}function h(){}function f(){}var p={};l(p,r,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&n.call(y,r)&&(p=y);var g=f.prototype=m.prototype=Object.create(p);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var o;a(this,"_invoke",{value:function(a,r){function i(){return new t(function(o,i){!function a(o,r,i,c){var l=u(e[o],e,r);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then(function(e){a("next",e,i,c)},function(e){a("throw",e,i,c)}):t.resolve(d).then(function(e){s.value=e,i(s)},function(e){return a("throw",e,i,c)})}c(l.arg)}(a,r,o,i)})}return o=o?o.then(i,i):i()}})}function x(e,t,n){var a="suspendedStart";return function(o,r){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===o)throw r;return O()}for(n.method=o,n.arg=r;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function E(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=u(a,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var r=o.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function N(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=f,a(g,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:h,configurable:!0}),h.displayName=l(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,a,o,r){void 0===r&&(r=Promise);var i=new w(s(t,n,a,o),r);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(g),l(g,c,"Generator"),l(g,r,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=N,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],i=r.completion;if("root"===r.tryLoc)return a("end");if(r.tryLoc<=this.prev){var c=n.call(r,"catchLoc"),l=n.call(r,"finallyLoc");if(c&&l){if(this.prev<r.catchLoc)return a(r.catchLoc,!0);if(this.prev<r.finallyLoc)return a(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return a(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return a(r.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=e,i.arg=t,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var o=a.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}t.default=function(e){var t=e.auth,n=e.userid,l=e.serverSystemUrl,p=Object(r.useState)("about"),v=Object(o.a)(p,2),y=v[0],w=v[1],x=Object(c.l)(),E=Object(r.useState)(!0),k=Object(o.a)(E,2),A=k[0],j=k[1],N=Object(r.useState)(!1),O=Object(o.a)(N,2),L=O[0],P=O[1],M=Object(r.useState)(""),C=Object(o.a)(M,2),S=(C[0],C[1],Object(r.useState)(!1)),I=Object(o.a)(S,2),T=I[0],W=I[1],G=Object(r.useState)(""),z=Object(o.a)(G,2),F=(z[0],z[1]),q=Object(r.useState)(i.a.createElement(r.Fragment,null,i.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},i.a.createElement("div",{style:{alignSelf:"center",justifySelf:"center",margin:"auto auto",fontWeight:"bold"}},"Accomodation Passes also includes ProNite Passes."),"Plinth has grown in stature in terms of its content, infrastructure, and logistics. Thanks to an overwhelming throng of such scale and a world-class technological show, mixed correctly with a tinge of enjoyment, our goal is a technical extravaganza. With such diversity, the hospitality of the guests is critical and makes up a top priority for organizers.",i.a.createElement("br",null),i.a.createElement("br",null),"At Plinth, we are continually striving for everyone's satisfaction. We will leave no stone unturned in meeting the demands of secure housing away from home. Along with lodging for our participants, we have set up a cafeteria serving a range of cuisines to suit every appetite. We make every effort to make your stay pleasant and memorable."))),J=Object(o.a)(q,2),R=J[0],Y=J[1],B=function(e){var t=e.target.id;"contact"===t?(Y(i.a.createElement(g,null)),w("contact")):"about"===t?(Y(i.a.createElement(r.Fragment,null,i.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},i.a.createElement("div",{style:{alignSelf:"center",justifySelf:"center",margin:"auto auto",fontWeight:"bold"}},"Accomodation Passes also includes ProNite Passes."),"Plinth has grown in stature in terms of its content, infrastructure, and logistics. Thanks to an overwhelming throng of such scale and a world-class technological show, mixed correctly with a tinge of enjoyment, our goal is a technical extravaganza. With such diversity, the hospitality of the guests is critical and makes up a top priority for organizers.",i.a.createElement("br",null),i.a.createElement("br",null),"At Plinth, we are continually striving for everyone's satisfaction. We will leave no stone unturned in meeting the demands of secure housing away from home. Along with lodging for our participants, we have set up a cafeteria serving a range of cuisines to suit every appetite. We make every effort to make your stay pleasant and memorable."))),w("about")):"policies"===t?(Y(i.a.createElement(r.Fragment,null,i.a.createElement("b",null,"Cancellation Policy"),i.a.createElement("br",null),"There shall be no refunds for cancellation once the registration process has been done.",i.a.createElement("br",null),"We thus request all attendees to carefully review their schedules before registration.")),w("policies")):"info"===t?(Y(i.a.createElement(r.Fragment,null,i.a.createElement("b",null,"Accomodation Charges"),i.a.createElement("br",null),"Accommodation Charges Accommodation charges are INR 999 per candidate for 3 days. Maximum of 3 nights stay allowed (27th Jan 7 AM - 30th Jan 10 AM). It does not include a food facility. Guest can purchase their meals from the food court, cafeteria, or hostel messes at subsidized rates.",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("b",null,"Timing"),i.a.createElement("br",null),"Check-in: 7:00 AM to 10:00 PM on your check-in date",i.a.createElement("br",null),"Check-out: Anytime on or before your check-out date")),w("info")):"instructions"===t&&(Y(i.a.createElement(r.Fragment,null,i.a.createElement("b",null,"Instructions"),i.a.createElement("br",null),":- All guests carrying electronic items of any kind will have to declare them at the LNMIIT Jaipur main gate through a \u2018Gate Pass\u2019. The belongings will also be checked on the way out of LNMIIT Jaipur along with the \u2018Gate Pass\u2019, failing to do so will result in the belongings being impounded.",i.a.createElement("br",null),i.a.createElement("br",null),":- All guests will be provided with mattresses and a blanket. Plinth will not provide a mattress cover or pillows. The guests are encouraged to arrange them independently (if required).",i.a.createElement("br",null),i.a.createElement("br",null),":- Any commodities issued to the guests would have to be returned in sound condition to the organizers during check-out.",i.a.createElement("br",null),i.a.createElement("br",null),":- Random checks would be made to avoid any illegal stay at the campus. Any team failing to produce their electronic/physical receipts of accommodation would be heavily fined and disqualified.",i.a.createElement("br",null),i.a.createElement("br",null),":- Entry will be only through the 'Main Gate' of LNMIIT Jaipur. All other gates will be closed for entry.",i.a.createElement("br",null),i.a.createElement("br",null),":- All guests are required to carry their valid government photo id proofs at all times. In addition, the student participants are also required to carry their valid College photo id card. Any guest failing to produce their id card will not be permitted inside the campus during Plinth 2022.",i.a.createElement("br",null),i.a.createElement("br",null),":- Alcohol, drugs, sharp objects, and explosives of any kind are strictly prohibited inside the campus. Any other item if deemed unsafe will be prohibited. The decision of the Security and Plinth team will be final in case of any disputes.",i.a.createElement("br",null),i.a.createElement("br",null),':- No outside vehicles will be allowed into the campus during the Plinth 2022."',i.a.createElement("br",null),i.a.createElement("br",null),":- All guests are required to maintain the decorum and cleanliness of the campus and follow the rules of the campus at all times.",i.a.createElement("br",null),i.a.createElement("br",null),":- Plinth 2023 and LNMIIT will not be responsible for any mishaps that occur throughout the duration of stay for Plinth 2023")),w("instructions"))};Object(r.useEffect)(function(){b.a.get("".concat(l,"/checkevents/accomodation/").concat(n),{validateStatus:!1,withCredentials:!0}).then(function(e){200===e.status&&(j(e.data.pay),console.log("===pay==",e.data.pay))})},[n]);var U=function(){var e=Object(a.a)(_().mark(function e(){var t;return _().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!L){e.next=11;break}if(!A){e.next=5;break}x("/payments/accomodation"),e.next=9;break;case 5:return e.next=7,b.a.get("".concat(l,"/addevent/accomodation/").concat(n),{validateStatus:!1,withCredentials:!0});case 7:200===(t=e.sent).status&&(console.log("--\x3eadded"),F(t.data.msg),W(!0),setTimeout(function(){W(!1)},2800));case 9:e.next=12;break;case 11:W(!T);case 12:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),X=Object(r.useCallback)(function(){var e=Object(a.a)(_().mark(function e(t){return _().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]),D=Object(r.useCallback)(function(){var e=Object(a.a)(_().mark(function e(t){return _().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]),V=Object(r.useState)({x:0,y:0}),Z=Object(o.a)(V,2),H=Z[0],K=Z[1],Q={default:{x:H.x-10,y:H.y-12},imgInitial:{opacity:0},imgAnimate:{opacity:1},contentInitial:{opacity:0,y:"-100%"},contentAnimate:{opacity:1,y:0},text:{height:80,width:80,x:H.x-38,y:H.y-40,backgroundColor:"white",mixBlendMode:"difference"},card:{height:90,width:90,x:H.x-43,y:H.y-45,backgroundColor:"white",mixBlendMode:"difference"},card2:{height:46,width:46,x:H.x-21,y:H.y-23,backgroundColor:"white",mixBlendMode:"difference"},btn:{height:40,width:40,x:H.x-18,y:H.y-20,backgroundColor:"white",mixBlendMode:"difference"},handlebefore:{opacity:0},handleafter:{opacity:1}},$=Object(r.useState)("default"),ee=Object(o.a)($,2),te=ee[0],ne=ee[1],ae=function(){return ne("text")},oe=function(){return ne("btn")},re=function(){return ne("default")};Object(r.useEffect)(function(){var e=function(e){K({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}},[]);var ie=window.screen.width>600;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.motion.div,{className:"cursor",variants:Q,animate:te,transition:{x:{delay:0},y:{delay:0},type:"tween",stiffness:1e4,bounce:0}}),i.a.createElement("div",{className:s.a.explore_body},i.a.createElement("div",{className:s.a.explore},i.a.createElement("div",{onMouseEnter:ae,onMouseLeave:re,className:"".concat(s.a.explore_heading," ").concat(s.a.none)},"Accomodation"),i.a.createElement(h.motion.div,{variants:Q,initial:"contentInitial",animate:"contentAnimate",transition:{duration:1,delay:0},className:s.a.explore_content},i.a.createElement("div",{onMouseEnter:ae,onMouseLeave:re,className:"".concat(s.a.explore_heading," ").concat(s.a.notnone)},"Accomodation"),i.a.createElement("div",{className:s.a.explore_details},i.a.createElement("div",{onMouseEnter:oe,onMouseLeave:re,className:s.a.explore_navbar},i.a.createElement("div",{className:"about"===y?"".concat(s.a.explore_navoptions," ").concat(s.a.active):"".concat(s.a.explore_navoptions),style:{border:0},onClick:function(e){return B(e)},id:"about"},"About"),i.a.createElement("div",{className:"policies"===y?"".concat(s.a.explore_navoptions," ").concat(s.a.active):"".concat(s.a.explore_navoptions),onClick:function(e){return B(e)},id:"policies"},"Policies"),i.a.createElement("div",{className:"instructions"===y?"".concat(s.a.explore_navoptions," ").concat(s.a.active):"".concat(s.a.explore_navoptions),onClick:function(e){return B(e)},id:"instructions"},"Instructions"),i.a.createElement("div",{className:"info"===y?"".concat(s.a.explore_navoptions," ").concat(s.a.active):"".concat(s.a.explore_navoptions),onClick:function(e){return B(e)},id:"info"},"Info"),i.a.createElement("div",{className:"contact"===y?"".concat(s.a.explore_navoptions," ").concat(s.a.active):"".concat(s.a.explore_navoptions),onClick:function(e){return B(e)},id:"contact"},"Contacts")),i.a.createElement("div",{className:s.a.explore_description},i.a.createElement("div",{onMouseEnter:oe,onMouseLeave:re},R))),i.a.createElement("div",{className:s.a.checkboxWrapper,onclick:function(){P(!L)}},i.a.createElement("label",null,i.a.createElement("input",{type:"checkbox",onChange:function(){return P(function(e){return!e})}}),i.a.createElement("span",null,"I hereby agree to abide by the terms and conditions as provided."))),T?i.a.createElement(m.a,{message:"Please check the Checkbox to continue"}):null,"false"===t&&i.a.createElement("button",{className:s.a.event_register_button,onMouseEnter:oe,onMouseLeave:re,onClick:function(){L?x("/login"):W(!T)}},"Register Now!"),"false"!==t&&i.a.createElement("a",{href:""},i.a.createElement("button",{className:s.a.event_register_button,onMouseEnter:oe,onMouseLeave:re,onClick:function(){return U()}},"Make Payment")))),i.a.createElement(h.motion.div,{onMouseEnter:oe,onMouseLeave:re,variants:Q,initial:"handlebefore",animate:"handleafter",transition:{duration:"1",delay:"0.5"}},i.a.createElement(f.a,null)),ie&&i.a.createElement(u.a,{id:"tsparticles",init:X,loaded:D,options:{particles:{number:{value:40,density:{enable:!0,value_area:500}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:3},image:{src:"",width:100,height:100}},opacity:{value:.7,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!0,distance:64.09640098708464,color:"#ffffff",opacity:.5,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"bubble"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:85.20998174071826,size:0,duration:2,opacity:0,speed:3},repulse:{distance:170,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,fullScreen:{enable:!0,zIndex:0}}})))}}}]);
//# sourceMappingURL=10.fa863a28.chunk.js.map