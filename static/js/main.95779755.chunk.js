(this["webpackJsonpabc-cams"]=this["webpackJsonpabc-cams"]||[]).push([[0],{31:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),c=a(32),r=a.n(c),i=a(12);a(42);var o=function(){return Object(n.jsxs)("footer",{className:"footer",children:[Object(n.jsx)("div",{className:"footer__line"}),Object(n.jsx)("p",{className:"footer__text",children:"Powered by ABC"})]})};a(43);var l=function(){return Object(n.jsx)("nav",{className:"navigation",children:Object(n.jsxs)("ul",{className:"navigation__list",children:[Object(n.jsx)("li",{className:"navigation__link",children:Object(n.jsx)(i.b,{className:"navigation__link-text",to:"/",exact:!0,children:"ABOUT US"})}),Object(n.jsx)("li",{className:"navigation__link",children:Object(n.jsx)(i.b,{className:"navigation__link-text",to:"/cams",children:"CAMS"})}),Object(n.jsx)("li",{className:"navigation__link",children:Object(n.jsx)(i.b,{className:"navigation__link-text",to:"/contact",children:"CONTACT"})})]})})};a(49);var u=function(){return Object(n.jsxs)("div",{className:"logo",children:[Object(n.jsxs)("div",{className:"logo__abc-row",children:[Object(n.jsx)("p",{className:"logo__abc-text",children:"ABC"}),Object(n.jsx)("div",{className:"logo__icon"})]}),Object(n.jsxs)("div",{className:"logo__cams-row",children:[Object(n.jsx)("span",{children:"C"}),Object(n.jsx)("span",{children:"A"}),Object(n.jsx)("span",{children:"M"}),Object(n.jsx)("span",{children:"S"})]})]})};a(50);var j=function(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(u,{}),Object(n.jsx)(l,{})]})},m=a(3),d=a(34),b=a.n(d);a(51);var p=function(e){var t=e.children,a=e.cardClass,s=b()({card:!0,about__card:a});return Object(n.jsx)("div",{className:s,children:t})},h=(a(52),[{img:"images/gadgets.jpg",title:"Lorem ipsum",text:"Etiam unllamcorper. Suspendisse a pellentesque dui, non felis maecenas."},{img:"images/typewriter.jpg",title:"Lorem ipsum",text:"Etiam unllamcorper. Suspendisse a pellentesque dui, non felis maecenas."},{img:"images/ingredients.jpg",title:"Lorem ipsum",text:"Etiam unllamcorper. Suspendisse a pellentesque dui, non felis maecenas."}]);var x=function(){return Object(n.jsx)("div",{className:"about",children:h.map((function(e){var t=e.img,a=e.title,s=e.text;return Object(n.jsxs)(p,{cardClass:!0,children:[Object(n.jsx)("div",{className:"about__image-container",children:Object(n.jsx)("img",{className:"about__image",alt:"gadgets",src:t})}),Object(n.jsxs)("div",{className:"about__text-container",children:[Object(n.jsx)("h3",{className:"about__title",children:a}),Object(n.jsx)("p",{className:"about__text",children:s})]})]},t)}))})},O=a(2),f=a.n(O),v=a(5),g=a(6),_=a(35),N=a.n(_).a.create({baseURL:"https://api.windy.com/api/webcams/v2/"});N.interceptors.request.use((function(e){return e.headers["x-windy-key"]="kfAgnyEXUFixcGSQOVOro4fe4QP7XIO6",e}));var y=N;function w(e,t){return e.sort((function(e,a){var n=e[t],s=a[t];return n<s?-1:n>s?1:0}))}function C(){return k.apply(this,arguments)}function k(){return(k=Object(v.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("list?show=countries");case 2:return t=e.sent,a=t.data.result.countries,n=w(a,"name"),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return E.apply(this,arguments)}function E(){return(E=Object(v.a)(f.a.mark((function e(t){var a,n,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("list/country=".concat(t,"/limit=20?show=webcams:location,image"));case 2:return a=e.sent,n=a.data.result.webcams,s=w(n,"title"),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(72);var A=function(e){var t=e.name,a=e.options,s=e.value,c=e.onChange,r=e.placeholder;return Object(n.jsxs)("select",{className:"select",name:t,value:s,onChange:c,children:[Object(n.jsx)("option",{className:"select__option",hidden:!0,disabled:!0,value:"",children:r}),a.map((function(e){var t=e.value,a=e.label;return Object(n.jsx)("option",{className:"select__option",value:t,children:a},t)}))]})};A.defaultProps={placeholder:"",value:""};var q=A;a(73);var M=function(){return Object(n.jsx)("div",{className:"spinner",children:Object(n.jsx)("div",{className:"spinner__container"})})};a(74);var T=function(){var e=Object(s.useState)([]),t=Object(g.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)([]),i=Object(g.a)(r,2),o=i[0],l=i[1],u=Object(s.useState)(""),j=Object(g.a)(u,2),m=j[0],d=j[1],b=Object(s.useState)(""),p=Object(g.a)(b,2),h=p[0],x=p[1],O=Object(s.useState)(""),_=Object(g.a)(O,2),N=_[0],y=_[1],w=Object(s.useState)(!1),k=Object(g.a)(w,2),E=k[0],A=k[1];return Object(s.useEffect)((function(){function e(){return(e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),e.next=3,C();case 3:t=e.sent,c(t),A(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),x("")}),[m]),Object(s.useEffect)((function(){function e(){return(e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),e.next=3,S(m);case 3:t=e.sent,l(t),A(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m&&function(){e.apply(this,arguments)}()}),[m]),Object(n.jsxs)("div",{className:"cams",children:[Object(n.jsxs)("div",{className:"cams__select",children:[Object(n.jsx)(q,{placeholder:"Choose country",value:m,name:"country",options:a.map((function(e){var t=e.id;return{label:e.name,value:t}})),onChange:function(e){return d(e.target.value)}}),m&&Object(n.jsx)(q,{placeholder:"Choose city",value:h,name:"city",options:o.map((function(e){var t=e.id;return{label:e.title,value:t}})),onChange:function(e){var t=e.target.value;x(t);var a=o.find((function(e){return e.id===t}));y(a.image.current.preview)}})]}),E&&Object(n.jsx)(M,{}),Object(n.jsx)("div",{className:"cams__image",children:h&&Object(n.jsx)("img",{className:"cams__img",src:N,alt:"picture"})})]})},L=a(10),P=a(21),B=a(36);a(31);function U(e){var t=e.type,a=void 0===t?"submit":t,s=e.onClick,c=e.text;return Object(n.jsx)("button",{className:"button",type:"button"===a?"button":"submit",onClick:s,children:c})}U.defaultProps={type:"",text:"",onClick:function(){}};var I=U,Z=(a(75),function(e){var t=e.className,a=e.register,s=e.placeholder,c=e.type,r=e.name,i=e.onChange,o=e.isMandatory,l=e.value,u=e.errors;return Object(n.jsxs)("div",{className:"input__container",children:[Object(n.jsx)("input",{name:r,className:t,ref:a,onChange:i,type:c}),!l&&Object(n.jsxs)("p",{className:"input__placeholder",children:[s,o&&Object(n.jsx)("span",{className:"input__mandatory-mark",children:" *"})]}),!u.value&&Object(n.jsx)("p",{className:"input__errors",children:u.message})]})});Z.defaultProps={register:function(){},placeholder:"",name:"",className:"",isMandatory:!1,value:"",errors:{}};var J=Z,Q=(a(76),{personName:"",personEmail:"",message:""});var V=function(){var e=Object(B.a)({defaultValues:Q}),t=e.register,a=e.handleSubmit,c=e.reset,r=e.errors,i=Object(s.useState)(Q),o=Object(g.a)(i,2),l=o[0],u=o[1];function j(e){var t=e.target,a=t.name,n=t.value;u((function(e){return Object(P.a)(Object(P.a)({},e),{},Object(L.a)({},a,n))}))}return Object(n.jsx)(p,{children:Object(n.jsxs)("form",{onSubmit:a((function(){console.log("wys\u0142ane"),c(),u(Q)})),className:"form",children:[Object(n.jsx)(J,{name:"personName",className:"card__input",type:"text",onChange:j,register:t({required:"This field is required",minLength:{value:2,message:"The minimum field length is 2 letters"}}),placeholder:"Name",isMandatory:!0,value:l.personName,errors:r.personName}),Object(n.jsx)(J,{name:"personEmail",value:l.personEmail,className:"card__input",type:"text",onChange:j,register:t({required:"This field is required",minLength:{value:2,message:"The minimum field length is 2 letters"},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}}),errors:r.personEmail,placeholder:"Email",isMandatory:!0}),Object(n.jsx)("textarea",{name:"message",placeholder:"Message",rows:"4",cols:"50",className:"form__textarea",type:"text",onChange:j,value:l.message}),Object(n.jsx)(I,{type:"submit",text:"SEND"})]})})};a(77);var X=function(){return Object(n.jsx)("div",{className:"main",children:Object(n.jsxs)(m.c,{children:[Object(n.jsx)(m.a,{path:"/",exact:!0,component:x}),Object(n.jsx)(m.a,{path:"/cams",component:T}),Object(n.jsx)(m.a,{path:"/contact",component:V}),Object(n.jsx)(m.a,{component:function(){return Object(n.jsx)("h3",{children:"Strona nie istnieje"})}})]})})};a(78);var D=function(){return Object(n.jsxs)(i.a,{children:[Object(n.jsx)(j,{}),Object(n.jsx)(X,{}),Object(n.jsx)(o,{})]})};a(79);r.a.render(Object(n.jsx)(D,{}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.95779755.chunk.js.map