(this.webpackJsonpmedstudio_eunacom=this.webpackJsonpmedstudio_eunacom||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(8),c=a.n(n),r=a(35),s=a.n(r),o=(a(44),a(45),a(0)),i=a.n(o),l=a(1),d=a(11),j=a(10),u=a(20),b=a(31),m=(a(47),b.a.initializeApp({apiKey:"AIzaSyA_tkdZnjSO8tV1_o_LtwQUR_26i2vKXG4",authDomain:"eunacom-chile.firebaseapp.com",projectId:"eunacom-chile",storageBucket:"eunacom-chile.appspot.com",messagingSenderId:"109229401681",appId:"1:109229401681:web:907628d4a3ed67eda4fa70"}),b.a.auth()),O=a(6),p=Object(n.createContext)(),h=function(){return Object(n.useContext)(p)},x=function(e){var t=Object(n.useState)({}),a=Object(d.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){r(e)}))}),[]);var s={signup:function(e,t){return m.createUserWhithEmailAndPassword(e,t)},login:function(e,t){return m.signInWhithEmailAndPassword(e,t)},logout:function(){return m.signOut()},currentUser:c};return Object(O.jsx)(p.Provider,{value:s,children:e.children})},f=function(){var e=h().login,t=Object(n.useState)(null),a=Object(d.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),o=Object(d.a)(s,2),b=o[0],m=o[1],p=Object(n.useState)(""),x=Object(d.a)(p,2),f=x[0],g=x[1],v=Object(j.g)(),N=function(){var t=Object(l.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.providerDefault(),t.prev=1,t.next=4,e(b,f);case 4:v.push("/"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),r("Wrong Crendentials"),setTimeout((function(){return r("")}),1500);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"modal fade",id:"registro",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(O.jsxs)("div",{className:"modal-dialog",children:[Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[c&&Object(O.jsxs)("p",{className:"error",children:[c," "]}),Object(O.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Usuarios registrados"})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("form",{onSubmit:N,children:[Object(O.jsxs)("div",{className:"form-floating",children:[Object(O.jsx)("input",{type:"email",className:"form-control",id:"floatingInput",placeholder:"name@example.com",onChange:function(e){return m(e.target.value)}}),Object(O.jsx)("label",{for:"floatingInput",children:"Correo"})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"form-floating",children:[Object(O.jsx)("label",{for:"floatingPassword",children:"Contrase\xf1a"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"floatingPassword",placeholder:"Password",onChange:function(e){return g(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",className:"form-control",value:"Sign Up"})]})]})})]}),Object(O.jsxs)("p",{children:["No estas registrado?? ",Object(O.jsx)(u.b,{to:"/SignUp",children:"Registrarse"})," "]})]})})})},g=function(){var e=h().signup,t=Object(n.useState)(null),a=Object(d.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),o=Object(d.a)(s,2),b=o[0],m=o[1],p=Object(n.useState)(""),x=Object(d.a)(p,2),f=x[0],g=x[1],v=Object(n.useState)(""),N=Object(d.a)(v,2),w=N[0],S=N[1],y=Object(j.g)(),C=function(){var t=Object(l.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),f===w){t.next=6;break}r("La contrase\xf1a no coincide"),setTimeout((function(){return r("")}),1500),t.next=16;break;case 6:return t.prev=6,t.next=9,e(b,f);case 9:y.push("/"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(6),r("Server error"),setTimeout((function(){return r("")}),1500);case 16:case"end":return t.stop()}}),t,null,[[6,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"modal fade",id:"registro",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:[Object(O.jsx)("div",{className:"modal-dialog",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[c&&Object(O.jsxs)("p",{className:"error",children:[c," "]}),Object(O.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Registro de usuarios"}),Object(O.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(O.jsx)("div",{className:"modal-body",children:Object(O.jsxs)("form",{onSubmit:C,children:[Object(O.jsxs)("div",{className:"form-floating",children:[Object(O.jsx)("input",{type:"email",className:"form-control",id:"floatingInput",placeholder:"name@example.com",onChange:function(e){return m(e.target.value)}}),Object(O.jsx)("label",{for:"floatingInput",children:"Correo"})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"form-floating",children:[Object(O.jsx)("label",{for:"floatingPassword",children:"Contrase\xf1a"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"floatingPassword",placeholder:"Password",onchange:function(e){return g(e.target.value)}}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"floatingPassword",placeholder:"Confirm Password",onchange:function(e){return S(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",className:"form-control",value:"Sign Up"})]})]})})]})}),Object(O.jsxs)("p",{children:["\xbfEstas registrado??? ",Object(O.jsx)(u.b,{to:"/Login",children:"Entrar"})]})]})})},v=a(38),N=function(){var e=Object(v.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],c=h(),r=c.currentUser,s=c.logout,o=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),n("Server error");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"modal-dialog",children:[Object(O.jsxs)("div",{className:"modal-header",children:[a&&Object(O.jsxs)("p",{className:"error",children:[a," "]}),Object(O.jsx)("img",{src:"../logo.svg",alt:"user"})]}),Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsx)("h1",{children:"medStudio te da la bienvenida"}),Object(O.jsx)("p",{children:r.email})]}),Object(O.jsx)("button",{className:"logout-button",onClick:o,children:"Cerrar sesion"})]})},w=a(27),S=a(39),y=["components"],C=function(e){var t=e.components,a=Object(S.a)(e,y),n=h().currentUser;return Object(O.jsx)(j.b,Object(w.a)(Object(w.a)({},a),{},{render:function(e){return n?Object(O.jsx)(t,Object(w.a)({},e)):Object(O.jsx)(j.a,{to:"./login"})}}))};var k=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(x,{children:Object(O.jsx)(u.a,{children:Object(O.jsxs)(j.d,{children:[Object(O.jsx)(C,{exact:!0,path:"/",component:N}),Object(O.jsx)(j.b,{path:"/login",component:f}),Object(O.jsx)(j.b,{path:"/signup",component:g})]})})})})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,55)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),P()}},[[54,1,2]]]);
//# sourceMappingURL=main.53788c09.chunk.js.map