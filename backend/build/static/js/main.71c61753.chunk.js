(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{259:function(e,t,n){e.exports=n(445)},444:function(e,t,n){},445:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(43),o=n.n(l),c=n(22),u=n(36),i=n(57),s=n(454),p=function(){return r.a.createElement(s.a,null,r.a.createElement("h2",null,"Radio Helsinki teostoraportointi"))},m=n(31),f=n(225),E=n.n(f),d=n(460),g=n(457),O=n(464),b=n(458),v=n(455),y=n(446),h=n(65),j=n(15),k=n.n(j),w=n(19),R=n(55),S=n.n(R),C=null,T={getAll:function(){var e=Object(w.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:C}},e.next=3,S.a.get("/api/users",t);case 3:return n=e.sent,console.log(typeof n.date),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),setToken:function(e){C="bearer ".concat(e)}},_=function(){return{type:"SET_LOADING"}},D={setCurrent:function(e){return{type:"SET_CURRENT",payload:e}}},x=Object(c.b)(null,D)((function(e){var t=Object(a.useState)(""),n=Object(m.a)(t,2),l=n[0],o=n[1],c=Object(a.useState)(""),u=Object(m.a)(c,2),i=u[0],s=u[1],p=Object(a.useState)(e.user.first_name),f=Object(m.a)(p,2),j=f[0],k=f[1],w=Object(a.useState)(e.user.last_name),R=Object(m.a)(w,2),S=R[0],C=R[1],T=Object(a.useState)(e.user.email),_=Object(m.a)(T,2),D=_[0],x=_[1],I=Object(a.useState)(e.user.level),P=Object(m.a)(I,2),L=P[0],N=P[1];return r.a.createElement(d.a.Row,null,r.a.createElement(d.a.Cell,null,r.a.createElement(g.a,{trigger:r.a.createElement("a",{href:"#!",onClick:function(){return e.setCurrent(e.user)}},e.user.username),closeIcon:!0},r.a.createElement(O.a,{content:"Muokkaa k\xe4ytt\xe4j\xe4n tietoja"}),r.a.createElement(g.a.Content,null,r.a.createElement(b.a,{onSubmit:function(t){t.preventDefault(),console.log("updating info",l,i,j,S,D,L),console.log("for user",e.user.id)}},r.a.createElement(b.a.Field,null,r.a.createElement("label",null,"K\xe4ytt\xe4j\xe4tunnus"),r.a.createElement(v.a,{value:e.user.username,type:"text",placeholder:"K\xe4ytt\xe4j\xe4tunnus...",disabled:!0})),r.a.createElement(b.a.Field,null,r.a.createElement("label",null,"Salasana - sy\xf6t\xe4 vaihtaaksesi"),r.a.createElement(v.a,{focus:!0,type:"password",placeholder:"Salasana...",onChange:function(e){return o(e.target.value)}})),r.a.createElement(b.a.Field,null,r.a.createElement("label",null,"Salasana uudelleen"),r.a.createElement(v.a,{focus:!0,type:"password",placeholder:"Vahvista salasana...",onChange:function(e){return s(e.target.value)}})),r.a.createElement(b.a.Field,null,r.a.createElement("label",null,"Etunimi"),r.a.createElement(v.a,{focus:!0,value:j,type:"text",placeholder:"Etunimi...",onChange:function(e){return k(e.target.value)}})),r.a.createElement(b.a.Field,null,r.a.createElement("label",null,"Sukunimi"),r.a.createElement(v.a,{focus:!0,value:S,type:"text",placeholder:"Sukunimi...",onChange:function(e){return C(e.target.value)}})),r.a.createElement(b.a.Field,null,r.a.createElement("label",null,"Email"),r.a.createElement(v.a,{focus:!0,value:D,type:"text",placeholder:"Email...",onChange:function(e){return x(e.target.value)}})),r.a.createElement(b.a.Field,{label:"Taso",control:"select",value:L,onChange:function(e){return N(e.target.value)}},r.a.createElement("option",{value:"1"},"DJ"),r.a.createElement("option",{value:"2"},"Toimitus"),r.a.createElement("option",{value:"3"},"Admin")),r.a.createElement(y.a,{type:"submit"},"Tallenna"))))),r.a.createElement(d.a.Cell,null,e.user.first_name," ",e.user.last_name),r.a.createElement(d.a.Cell,null,r.a.createElement(E.a,{format:"MMMM Do YYYY, h:mm:ss a"},e.user.last_seen)),r.a.createElement(d.a.Cell,null,e.user.level),r.a.createElement(d.a.Cell,null,r.a.createElement(h.a,{user:!0,onClick:function(){console.log("klikd delete on user ".concat(e.user.id))},name:"delete"})))})),I=n(463),P=n(456),L=n(25);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){Object(L.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F={message:null},G=function(e,t){return console.log(t),function(n){n({type:"NOTIFICATION",id:e,message:t})}},U=function(e){return{type:"CLEAR",id:e}},K=0;function B(e,t){return t*=1e3,function(n){var a=K++;n(G(a,e)),setTimeout((function(){n(U(a))}),t)}}var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action",t),t.type){case"NOTIFICATION":return A({},e,{message:t.message});case"CLEAR":return A({},e,{message:null});default:return e}},J={showNotificationWithTimeout:B,initializeUsers:function(){return function(){var e=Object(w.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(),e.next=4,T.getAll();case 4:n=e.sent,t({type:"INIT_USERS_LIST",data:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:"USER_ERROR",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}},M=Object(c.b)((function(e){return{users:e.users,login:e.login}}),J)((function(e){return Object(a.useEffect)((function(){e.initializeUsers()}),[]),null===e.users.users?r.a.createElement(s.a,null,r.a.createElement(I.a,{active:!0,inverted:!0},r.a.createElement(P.a,{size:"medium"},"Haetaan k\xe4ytt\xe4ji\xe4..."))):(console.log("userlist props",e),r.a.createElement(s.a,null,r.a.createElement("h3",null,"K\xe4ytt\xe4j\xe4t"),r.a.createElement(d.a,{striped:!0},r.a.createElement(d.a.Header,null,r.a.createElement(d.a.Row,null,r.a.createElement(d.a.Cell,null,"K\xe4ytt\xe4j\xe4tunnus"),r.a.createElement(d.a.Cell,null,"Nimi"),r.a.createElement(d.a.Cell,null,"Viimeisin kirjautuminen"),r.a.createElement(d.a.Cell,null,"Taso"))),r.a.createElement(d.a.Body,null,e.users.users.map((function(e){return r.a.createElement(x,{user:e,key:e.id})}))))))})),z=null,V=function(){var e=Object(w.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:z}},console.log("getting reports from",t),e.next=4,S.a.get("/api/reportslist/".concat(t),n);case 4:return a=e.sent,console.log("reportservice get one report-track data",a.data),e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y={setToken:function(e){z="bearer ".concat(e)},getOne:function(){var e=Object(w.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:z}},console.log("report req id",t),e.next=4,S.a.get("".concat("/api/reports","/").concat(t),n);case 4:return a=e.sent,console.log("reportservice get one report-track data",a.data),e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAllByDate:V,getReportDetails:function(){var e=Object(w.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:z}},console.log("reportdetails req id ",t),e.next=4,S.a.get("/api/reportdetails/".concat(t),n);case 4:return a=e.sent,console.log("reportservice get report details res data",a.data),e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},W=function(e){return function(){var t=Object(w.a)(k.a.mark((function t(n){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return q(),t.next=3,Y.getOne(e);case 3:a=t.sent,n({type:"GET_ONE_REPORT",data:a,id:e});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},q=function(){return{type:"SET_LOADING"}},Q=n(461),X={getOneReport:W,getAllReportsByDate:function(e){return function(){var t=Object(w.a)(k.a.mark((function t(n){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.getAllByDate(e);case 2:a=t.sent,n({type:"GET_ALL_REPORTS_BY_DATE",data:a,date:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},Z=Object(c.b)((function(e){return console.log("reportfilterform state to props",e),{report:e.report,reportsList:e.reportsList,notification:e.notification,users:e.users,login:e.login}}),X)((function(e){var t=[{key:"Jenny Hess",text:"Jenny Hess",value:"Jenny Hess"},{key:"Elliot Fu",text:"Elliot Fu",value:"Elliot Fu"},{key:"Stevie Feliciano",text:"Stevie Feliciano",value:"Stevie Feliciano"},{key:"Christian",text:"Christian",value:"Christian"},{key:"Matt",text:"Matt",value:"Matt"},{key:"Justen Kitsune",text:"Justen Kitsune",value:"Justen Kitsune"}],n=Object(a.useState)(""),l=Object(m.a)(n,2),o=l[0],c=l[1],u=Object(a.useState)(""),i=Object(m.a)(u,2),s=i[0],p=i[1];console.log(o),console.log(s);return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{onClick:function(){return function(){var t=s+"-"+o;console.log(t),console.log("klik"),e.getAllReportsByDate(t)}()}},"Hae raportit ajalta:"),r.a.createElement(Q.a,{placeholder:"Vuosi",openOnFocus:!0,selection:!0,options:t})," ",r.a.createElement(Q.a,{placeholder:"Kuukausi",openOnFocus:!1,selection:!0,options:t})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s5"},r.a.createElement("select",{name:"month",id:"",onChange:function(e){return c(e.target.value)}},"Valitse kuukausi",r.a.createElement("option",{value:"01"},"Tammikuu"),r.a.createElement("option",{value:"02"},"Helmikuu"),r.a.createElement("option",{value:"03"},"Maaliskuu"))),r.a.createElement("div",{className:"input-field col s5"},r.a.createElement("select",{name:"year",id:"",onChange:function(e){return p(e.target.value)}},"Valitse Vuosi",r.a.createElement("option",{value:"2018"},"2018"),r.a.createElement("option",{value:"2017"},"2017"),r.a.createElement("option",{value:"2016"},"2016"))),r.a.createElement("div",{className:"input-field col s2"})))})),$=Object(c.b)(null,{getOneReport:W})((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a.Row,null,r.a.createElement(d.a.Cell,null,e.report.program_no),r.a.createElement(d.a.Cell,null,r.a.createElement(u.b,{to:"reports/".concat(e.report.id)},e.report.name)),r.a.createElement(d.a.Cell,null,e.report.program_date," ",e.report.program_start_time," -"," ",e.report.program_end_time),r.a.createElement(d.a.Cell,null,e.report.status)))})),ee={showNotificationWithTimeout:B,getOneReport:W},te=Object(c.b)((function(e){return console.log("report list state to props",e),{report:e.report,reportsList:e.reportsList,notification:e.notification,login:e.login}}),ee)((function(e){return console.log("Reportlist props",e),0===e.reportsList.length?r.a.createElement(s.a,null,r.a.createElement("h2",null,"Ei raportteja valittuna ajankohtana. Valitse vuosi ja kuukausi"),r.a.createElement(Z,null)):r.a.createElement(s.a,null,r.a.createElement(Z,null),r.a.createElement(d.a,{striped:!0},r.a.createElement(d.a.Header,null,r.a.createElement(d.a.Row,null,r.a.createElement(d.a.Cell,null,"Ohjelmanro"),r.a.createElement(d.a.Cell,null,"Nimi"),r.a.createElement(d.a.Cell,null,"Aika"),r.a.createElement(d.a.Cell,null,"Tila"))),r.a.createElement(d.a.Body,null,e.reportsList.map((function(e){return r.a.createElement($,{key:e.id,report:e})})))))})),ne={login:function(){var e=Object(w.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ae=function(){return{type:"SET_LOADING"}},re=Object(c.b)(null,{newLogin:function(e,t){return function(){var n=Object(w.a)(k.a.mark((function n(a){var r;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,ae(),n.next=4,ne.login(e);case 4:r=n.sent,window.localStorage.setItem("loggedUser",JSON.stringify(r)),a({type:"LOGIN",data:r}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),t("v\xe4\xe4r\xe4 k\xe4ytt\xe4j\xe4tunnus tai salasana",4);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},showNotificationWithTimeout:B})((function(e){var t=e.newLogin,n=Object(a.useState)(""),l=Object(m.a)(n,2),o=l[0],c=l[1],u=Object(a.useState)(""),i=Object(m.a)(u,2),s=i[0],p=i[1],f=function(){var e=Object(w.a)(k.a.mark((function e(n){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),a={username:o,password:s},console.log(a),t(a,B);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(b.a,{onSubmit:f},r.a.createElement(b.a.Field,null,r.a.createElement("label",null,"K\xe4ytt\xe4j\xe4tunnus"),r.a.createElement("input",{type:"text",placeholder:"K\xe4ytt\xe4j\xe4tunnus...",onChange:function(e){return c(e.target.value)}})),r.a.createElement(b.a.Field,null,r.a.createElement("label",null,"Salasana"),r.a.createElement("input",{type:"password",placeholder:"Salasana...",onChange:function(e){return p(e.target.value)}})),r.a.createElement(y.a,{type:"submit"},"Kirjaudu"))})),le=n(462),oe=function(e){var t=Math.floor(e.track.length/60),n=e.track.length-60*t;return r.a.createElement(d.a.Row,null,r.a.createElement(d.a.Cell,null,e.track.sortable_rank),r.a.createElement(d.a.Cell,null,e.track.artist_name),r.a.createElement(d.a.Cell,null,e.track.track_title),r.a.createElement(d.a.Cell,null,t,":",n),r.a.createElement(d.a.Cell,null,r.a.createElement(h.a,{onClick:function(){console.log("klikd delete")},name:"delete"})),r.a.createElement(d.a.Cell,null,r.a.createElement(h.a,{onClick:function(){console.log("klikd edit")},name:"edit"})))},ce=function(e){return console.log("report detauls props",e),null===e.report?r.a.createElement("div",null,"loading..."):r.a.createElement("div",null,r.a.createElement("h3",null,"Raportin tiedot:"),r.a.createElement("h2",null,e.report[0].program_name))},ue=Object(c.b)((function(e){return console.log("reportwithtracks state",e),{report:e.report,reportsList:e.reportsList}}),{getOneReport:W,getReportDetails:function(e){return function(){var t=Object(w.a)(k.a.mark((function t(n){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return q(),t.next=3,Y.getReportDetails(e);case 3:a=t.sent,n({type:"GET_REPORT_DETAILS",data:a,id:e});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){return Object(a.useEffect)((function(){e.getOneReport(e.id)}),[]),Object(a.useEffect)((function(){console.log("get details of report ",e.id),e.getReportDetails(e.id)}),[]),null===e.report.report?r.a.createElement(s.a,null,"loading"):r.a.createElement(s.a,null,r.a.createElement("h3",null,"Raportti"),r.a.createElement(d.a,{striped:!0},r.a.createElement(d.a.Header,null,r.a.createElement(d.a.Row,null,r.a.createElement(d.a.Cell,null,"#"),r.a.createElement(d.a.Cell,null,"Artisti"),r.a.createElement(d.a.Cell,null,"Biisi"),r.a.createElement(d.a.Cell,null,"Kesto"),r.a.createElement(d.a.Cell,null),r.a.createElement(d.a.Cell,null))),r.a.createElement(d.a.Body,null,e.report.report.map((function(e){return r.a.createElement(oe,{key:e.sortable_rank,track:e})})))),r.a.createElement(ce,{report:e.report.reportDetails}))})),ie={initializeUser:function(){return function(){var e=Object(w.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{ae(),(n=window.localStorage.getItem("loggedUser"))&&(a=JSON.parse(n),T.setToken(a.token),Y.setToken(a.token),t({type:"INIT_USER",data:a}))}catch(r){t({type:"LOGIN_ERROR",payload:r.response.statusText})}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(w.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.removeItem("loggedUser"),t({type:"LOGOUT"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},se=Object(c.b)((function(e){return console.log("app state",e),{reportsList:e.reportsList,login:e.login,users:e.users}}),ie)((function(e){Object(a.useEffect)((function(){e.initializeUser()}),[]);return console.log("app 74",e),null===e.login.user?r.a.createElement(s.a,null,r.a.createElement(re,null)):r.a.createElement(u.a,null,r.a.createElement("div",null,"Logged in as ",e.login.username,r.a.createElement("button",{onClick:function(){e.logout()}},"logout"),r.a.createElement(le.a,{inverted:!0},r.a.createElement(le.a.Item,{link:!0},r.a.createElement(u.b,{to:"/"},"Etusivu")),r.a.createElement(le.a.Item,{link:!0},r.a.createElement(u.b,{to:"/reports"},"Raportit")),r.a.createElement(le.a.Item,{link:!0},r.a.createElement(u.b,{to:"/"},"Top 100")),r.a.createElement(le.a.Item,{link:!0},r.a.createElement(u.b,{to:"/"},"Haku")),r.a.createElement(le.a.Item,{link:!0},r.a.createElement(u.b,{to:"/users"},"K\xe4ytt\xe4j\xe4t")),r.a.createElement(le.a.Item,{link:!0},r.a.createElement(u.b,{to:"/"},"Ohjelmat")),r.a.createElement(le.a.Item,{link:!0},r.a.createElement(u.b,{to:"/"},"Omat tiedot")))),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:p}),r.a.createElement(i.a,{exact:!0,path:"/reports",component:te}),r.a.createElement(i.a,{path:"/reports/:id",render:function(e){var t=e.match;return console.log("*"),r.a.createElement(ue,{id:t.params.id})}}),r.a.createElement(i.a,{exact:!0,path:"/users",component:M})))})),pe=n(64),me=n(247),fe=n(248);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(n,!0).forEach((function(t){Object(L.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge={user:null,loading:!1,error:null},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USER":return t.data;case"LOGOUT":return ge;case"LOGIN":return t.data;case"LOGIN_ERROR":return console.error(t.payload),de({},e,{error:t.payload});case"SET_LOADING":return de({},e,{loading:!0});default:return e}};function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(n,!0).forEach((function(t){Object(L.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ye={report:null,reportDetails:null,loading:!1},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(console.log("reportreducer state now: ",e),console.log("reportreducer action",t),console.log(t.type),t.type){case"GET_ONE_REPORT":return ve({},e,{report:t.data,loading:!1});case"GET_REPORT_DETAILS":return ve({},e,{reportDetails:t.data,loading:!1});case"SET_LOADING":return ve({},e,{loading:!0});default:return e}};function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(n,!0).forEach((function(t){Object(L.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var we={users:null,current:null,loading:!1,error:null},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS_LIST":return ke({},e,{users:t.data});case"SET_LOADING":return ke({},e,{loading:!0});case"SET_CURRENT":return ke({},e,{current:t.payload});case"USER_ERROR":return console.error(t.payload),ke({},e,{error:t.payload});default:return e}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("report list reducer state now: ",e),console.log("report list reducer action",t),console.log(t.type),t.type){case"GET_ALL_REPORTS_BY_DATE":return t.data;default:return e}},Ce=Object(pe.combineReducers)({login:Oe,notification:H,report:he,reportsList:Se,users:Re}),Te=Object(pe.createStore)(Ce,Object(fe.composeWithDevTools)(Object(pe.applyMiddleware)(me.a)));n(444);o.a.render(r.a.createElement(c.a,{store:Te},r.a.createElement(se,null)),document.getElementById("root"))}},[[259,1,2]]]);
//# sourceMappingURL=main.71c61753.chunk.js.map