(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},21:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),u=n.n(o),l=(n(21),n(2)),c=n.n(l),s=n(4),i=n(3),g=n(15),p=n.n(g),f={login:function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},d=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],o=t[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),g=l[0],p=l[1],d=Object(a.useState)(""),v=Object(i.a)(d,2),w=v[0],b=v[1],j=Object(a.useState)(null),E=Object(i.a)(j,2),O=E[0],h=E[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);o(t)}}),[]);var S=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("logging in with",g,w),e.prev=2,e.next=5,f.login({username:g,password:w});case 5:n=e.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),o(n),console.log("logged in user",n),p(""),b(""),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),h("wrong credz"),setTimeout((function(){h(null)}),5e3);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return null===n?r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement(m,{message:O}),r.a.createElement("form",{onSubmit:S},r.a.createElement("input",{type:"text",value:g,placeholder:"K\xe4ytt\xe4j\xe4tunnus",onChange:function(e){var t=e.target;return p(t.value)}}),r.a.createElement("input",{type:"password",value:w,placeholder:"Salasana",onChange:function(e){var t=e.target;return b(t.value)}}),r.a.createElement("button",{type:"submit"},"Kirjaudu"))," "):r.a.createElement("div",null,"Logged in as ",n.username,r.a.createElement("button",{onClick:function(){window.localStorage.removeItem("loggedUser"),o(null)}},"logout"))};u.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6a725ca7.chunk.js.map