(this.webpackJsonpsyndicate20=this.webpackJsonpsyndicate20||[]).push([[0],{80:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),c=n(46),a=n.n(c),o=(":".concat("hashedData"),{MAIN:"/",USER_CHOOSE_RESULTS:"/results",STUDIO:"/studio",PROJECTS:"/projects"});var s,l=n(15),u=Object(l.a)({});!function(e){e.REJECT="reject",e.SELECT="select"}(s||(s={}));var h=n(6),d=n(7),j=n(50),b=new(function(){function e(){Object(h.a)(this,e),this.fingerprintJS=Object(j.a)(),this.userFingerprint=""}return Object(d.a)(e,[{key:"getFingerPrint",value:function(){var e=this;return this.userFingerprint?Promise.resolve(this.userFingerprint):this.fingerprintJS.then((function(t){return t.get().then((function(t){return e.userFingerprint=t.visitorId,e.userFingerprint}))}))}}]),e}()),f=n(82),O=function(){function e(t,n){Object(h.a)(this,e),this.storageKey=t,this.storage=window.localStorage,this.state=void 0;var r=this.getFromStorage();this.state=r||n}return Object(d.a)(e,[{key:"getState",value:function(){return this.state}},{key:"setState",value:function(e){this.setToStorage(e),this.state=e}},{key:"getFromStorage",value:function(){var e=this.storage.getItem(this.storageKey);return e?JSON.parse(e):null}},{key:"setToStorage",value:function(e){try{var t=JSON.stringify(e);this.storage.setItem(this.storageKey,t)}catch(n){throw new Error("The store state is not serializable")}}}],[{key:"makeInstance",value:function(t,n){return new e(t,n)}}]),e}(),x=new(function(){function e(){Object(h.a)(this,e),this.storage=O.makeInstance("userdecision",[])}return Object(d.a)(e,[{key:"setItem",value:function(e,t){var n=this.storage.getState(),r={project:e.project,photo:e.photo.id,decision:t};n.push(r),this.storage.setState(n)}},{key:"getItems",value:function(){return this.storage.getState()}}]),e}()),p=n(21),v=n(47),m=n.n(v),g=new(function(){function e(){Object(h.a)(this,e),this.instance=m.a.create()}return Object(d.a)(e,[{key:"post",value:function(e){var t=e.url,n=e.method,r=e.params,i=void 0===r?{}:r,c=e.config,a=void 0===c?{}:c,o={method:n,params:i};return this.instance.post(t,o,Object(p.a)({headers:{"Content-Type":"text/plain;charset=utf-8"}},a)).then((function(e){var t=e.data;return"ok"===t.status?t.response:Promise.reject(t.response||"Network Error")}))}}]),e}()),y=function(){function e(){Object(h.a)(this,e)}return Object(d.a)(e,[{key:"getProjectsForSelection",value:function(){return g.post({url:e.ENDPOINT,method:"get_projects_for_selection"})}},{key:"getAllProjects",value:function(){return g.post({url:e.ENDPOINT,method:"get_all_projects"})}},{key:"setUserSelection",value:function(t){return g.post({url:e.ENDPOINT,method:"set_user_selection",params:t})}}]),e}();y.ENDPOINT="https://script.google.com/macros/s/AKfycbzCpLgoi87Kwc32fu0qf_R8lvHc5jz_sR-pKz5k71PFUQZf16grQRB_r8sPKaEdXz3_/exec";var w=new y,k=function(){function e(){Object(h.a)(this,e),this.data$=new f.a(e.initialData)}return Object(d.a)(e,[{key:"getItems",value:function(){var e=this;w.getProjectsForSelection().then((function(t){var n=e.filterAlreadyChoosedItems(t.items);e.data$.next({data:n,error:void 0})})).catch((function(t){return e.data$.next({data:void 0,error:t})}))}},{key:"setItem",value:function(e,t){x.setItem(e,t);var n=this.data$.getValue().data;if(n){var r=n.filter((function(t){return t!==e}));this.data$.next({data:r,error:void 0})}}},{key:"filterAlreadyChoosedItems",value:function(e){var t=x.getItems();return t.length?e.filter((function(e){return t.every((function(t){return t.photo!==e.photo.id&&t.project!==e.project}))})):e}}]),e}();k.initialData={data:void 0,error:void 0};var S=new k,C=O.makeInstance("intro",!1),E=n(13),N=n(81),I=function(){function e(t,n){var r=this;Object(h.a)(this,e),this.initialValue=t,this.subscribtion=void 0,this.value$=void 0,this.error$=new f.a(""),this.touched$=new f.a(!1),this.update=function(e){return r.value$.next(e)},this.touch=function(){return r.touched$.next(!0)},this.value$=new f.a(this.initialValue),this.subscribtion=this.value$.subscribe((function(e){var t=n(e);r.updateError(t)}))}return Object(d.a)(e,[{key:"value",get:function(){return this.value$.getValue()}},{key:"destroy",value:function(){this.subscribtion.unsubscribe()}},{key:"clear",value:function(){this.touched$.next(!1),this.value$.next(this.initialValue)}},{key:"updateError",value:function(e){this.error$.next(e)}}]),e}(),P=/^[\w.\-_\u0430-\u044f\u0410-\u042f]+@[\w.\-_\u0430-\u044f\u0410-\u042f]+\.[\w\u0430-\u044f\u0410-\u042f]+$/,T=/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,$=function(){function e(){var t=this;Object(h.a)(this,e),this.subscribtion=void 0,this.isFormValid$=new f.a(!1),this.fields={name:new I("",(function(e){return t.validateName(e)})),contact:new I("",(function(e){return t.validateContact(e)}))},this.subscribtion=this.validateForm()}return Object(d.a)(e,[{key:"destroy",value:function(){var e;this.getFields().forEach((function(e){return e.destroy()})),null===(e=this.subscribtion)||void 0===e||e.unsubscribe()}},{key:"validateName",value:function(e){return 0===e.length?"Enter your name":""}},{key:"validateContact",value:function(e){return 0===e.length?"Enter your email or phone":e.includes("@")?P.test(e)?"":"Check your email is correct":T.test(e)?"":"Check your phone number"}},{key:"validateForm",value:function(){var e=this,t=this.getFields();return Object(N.a)(t[0].error$,t[1].error$).subscribe((function(t){var n=Object(E.a)(t,2),r=n[0],i=n[1];e.isFormValid$.next(!r&&!i)}))}},{key:"getFields",value:function(){return Object.values(this.fields)}}]),e}(),z=new(function(){function e(){var t=this;Object(h.a)(this,e),this.form=new $,this.isRequestProcessing$=new f.a(!1),this.sendUserForm=function(){t.isRequestProcessing$.next(!0),t.form.isFormValid$.getValue()&&b.getFingerPrint().then((function(e){var n=x.getItems(),r=t.form.fields.name.value,i=t.form.fields.contact.value;w.setUserSelection({name:r,contact:i,result:n,fingerPrint:e}).finally((function(){return t.isRequestProcessing$.next(!1)}))}))}}return Object(d.a)(e,[{key:"destroy",value:function(){this.form.destroy()}}]),e}()),R=function(){function e(){var t=this;Object(h.a)(this,e),this.cache=[],this.data$=new f.a(e.initialData),this.hashtags$=new f.a([]),this.filterProjectsByHashtag=function(e){var n=t.cache.filter((function(t){return t.hashtags.includes(e)}));t.data$.next({data:n,error:void 0})},this.resetFilter=function(){t.data$.next({data:t.cache,error:void 0})}}return Object(d.a)(e,[{key:"getProjects",value:function(){var e=this;w.getAllProjects().then((function(t){var n=Array.from(new Set(t.items.map((function(e){return e.hashtags})).flat()));e.cache=t.items,e.hashtags$.next(n),e.data$.next({data:t.items,error:void 0})})).catch((function(t){return e.data$.next({data:void 0,error:t})}))}}]),e}();R.initialData={data:void 0,error:void 0};var _=new R,D=new(function(){function e(){var t=this;Object(h.a)(this,e),this.state$=new f.a({isShow:!1,component:null}),this.close=function(){t.state$.next({isShow:!1,component:t.state$.getValue().component})}}return Object(d.a)(e,[{key:"open",value:function(e){this.state$.next({isShow:!0,component:e})}}]),e}());function F(e){var t=Object(r.useState)((function(){return e.getValue()})),n=Object(E.a)(t,2),i=n[0],c=n[1];return Object(r.useEffect)((function(){var t=e.subscribe((function(e){return c(e)}));return function(){return t.unsubscribe()}}),[e]),i}var L,A=n(2),B="@media (max-width: 500px)",H=Object(A.a)({backgroundColor:"#fff",width:"".concat(223,"px"),height:"118px",boxSizing:"border-box",paddingTop:"20px"}),K=function(e,t){return Object(A.a)({width:t,height:e})},U=n(0);function V(e){var t=e.height,n=void 0===t?"0px":t,r=e.width,i=void 0===r?"0px":r;return Object(U.jsx)("div",{className:K(n,i)})}!function(e){e.BLACK="#000",e.WHITE="#FFF",e.RED="#FF5C00"}(L||(L={}));var J={l:"30px",m:"12px"},M={black:L.BLACK,white:L.WHITE,red:L.RED},W=function(e,t,n,r,i){return Object(A.a)({fontSize:J[e],color:M[t],cursor:n?"pointer":"auto",textAlign:r,lineHeight:i||J[e]})};function G(e){var t=e.size,n=void 0===t?"m":t,r=e.color,c=void 0===r?"white":r,a=e.type,o=void 0===a?"p":a,s=e.align,l=void 0===s?"left":s,u=e.height,h=e.children,d=e.onClick;return i.a.createElement(o,{className:W(n,c,!!d,l,u),onClick:d},h)}var q,Q=function(){return console.log(["faffaf"])};function Z(e){var t=e.withMenu,n=void 0===t||t;return Object(U.jsxs)("div",{className:H,children:[Object(U.jsx)(G,{color:"black",size:"l",align:"center",children:"Syndicate Architects"}),n&&Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(V,{height:"14px"}),Object(U.jsx)(G,{onClick:Q,color:"black",align:"center",children:"Menu"})]})]})}var X=["title","titleId"];function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function te(e,t){var n=e.title,i=e.titleId,c=ee(e,X);return r.createElement("svg",Y({width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},c),n?r.createElement("title",{id:i},n):null,q||(q=r.createElement("path",{d:"M17.8891 14.0005L27.6118 4.27776L23.7227 0.388672L14 10.1114L4.27727 0.388672L0.388185 4.27776L10.1109 14.0005L0.388184 23.7232L4.27727 27.6123L14 17.8896L23.7227 27.6123L27.6118 23.7232L17.8891 14.0005Z",fill:"black"})))}var ne,re=r.forwardRef(te),ie=(n.p,["title","titleId"]);function ce(){return ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ce.apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function oe(e,t){var n=e.title,i=e.titleId,c=ae(e,ie);return r.createElement("svg",ce({width:34,height:29,viewBox:"0 0 34 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},c),n?r.createElement("title",{id:i},n):null,ne||(ne=r.createElement("path",{d:"M24.8757 0.0510254C21.3913 0.0510254 18.3582 2.14966 17.0015 5.18771C15.6448 2.15267 12.6117 0.0510254 9.12728 0.0510254C4.36987 0.0510254 0.5 3.95322 0.5 8.74665C0.5 19.556 15.9765 28.4563 16.6369 28.8297C16.7505 28.8929 16.873 28.926 16.9985 28.926C17.124 28.926 17.2495 28.8929 17.3601 28.8297C18.0175 28.4563 33.5 19.556 33.5 8.74665C33.503 3.95322 29.6331 0.0510254 24.8757 0.0510254Z",fill:"black"})))}var se=r.forwardRef(oe),le=(n.p,Object(A.a)({width:"66px",height:"66px",backgroundColor:"#fff",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}));function ue(e){var t=e.onClick,n=e.type;return Object(U.jsxs)("button",{onClick:t,className:le,children:["cross"===n&&Object(U.jsx)(re,{}),"heart"===n&&Object(U.jsx)(se,{})]})}function he(){return Object(U.jsx)(G,{color:"red",size:"l",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."})}var de,je=n(5),be=n(30),fe=Object(A.b)(de||(de=Object(be.a)(["\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0;\n  }\n"]))),Oe=Object(A.a)(Object(je.a)({display:"inline-block",position:"relative",width:"80px",height:"80px"},"div",Object(je.a)({position:"absolute",border:"4px solid #fff",opacity:1,borderRadius:"50%",animation:"".concat(fe," 1s cubic-bezier(0, 0.2, 0.8, 1) infinite")},":nth-child(2)",{animationDelay:"-0.5s"})));function xe(){return Object(U.jsxs)("div",{className:Oe,children:[Object(U.jsx)("div",{}),Object(U.jsx)("div",{})]})}var pe,ve,me,ge=Object(A.a)({width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"});function ye(){return Object(U.jsx)("div",{className:ge,children:Object(U.jsx)(xe,{})})}function we(e){return e.data||e.error?!e.data&&e.error?Object(U.jsx)(he,{}):e.children(e.data):Object(U.jsx)(ye,{})}var ke=["title","titleId"];function Se(){return Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Se.apply(this,arguments)}function Ce(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Ee(e,t){var n=e.title,i=e.titleId,c=Ce(e,ke);return r.createElement("svg",Se({width:9,height:9,viewBox:"0 0 9 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},c),n?r.createElement("title",{id:i},n):null,pe||(pe=r.createElement("rect",{width:9,height:9,fill:"black"})),ve||(ve=r.createElement("rect",{x:4,y:2,width:1,height:5,fill:"white"})),me||(me=r.createElement("rect",{x:7,y:4,width:1,height:5,transform:"rotate(90 7 4)",fill:"white"})))}var Ne=r.forwardRef(Ee),Ie=(n.p,Object(A.a)({width:"223px",height:"70px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:"#fff"}));function Pe(e){var t=e.onOpenDetailedInfo,n=e.projectName;return Object(U.jsx)("div",{className:Ie,children:Object(U.jsxs)(G,{color:"black",align:"center",onClick:t,children:[n,Object(U.jsx)("br",{}),"more info ",Object(U.jsx)(Ne,{})]})})}var Te,$e=Object(A.a)({display:"flex",width:"".concat(223,"px"),justifyContent:"space-between",boxSizing:"border-box",padding:"0 30px 30px"});function ze(e){var t=e.children;return Object(U.jsx)("div",{className:$e,children:t})}var Re,_e,De,Fe,Le,Ae,Be,He,Ke,Ue,Ve=Object(A.a)((Te={fontSize:"30px",color:L.WHITE,background:"none",boxSizing:"border-box"},Object(je.a)(Te,":focus",{outline:"none",borderBottom:"2px solid #fff"}),Object(je.a)(Te,"::placeholder",{color:"rgba(255, 255, 255, 0.3)",fontSize:"30px"}),Te));function Je(e){var t=e.onChange,n=e.value,r=e.placeholder,c=e.onLeave,a=i.a.useCallback((function(e){return t&&t(e.target.value)}),[t]);return Object(U.jsx)("input",{className:Ve,onChange:a,placeholder:r,value:n,onBlur:c})}function Me(e){var t=e.control,n=e.children,r=F(t.value$),c=F(t.error$),a=F(t.touched$);return Object(U.jsxs)("div",{children:[i.a.cloneElement(n,Object(p.a)(Object(p.a)({},n.props),{},{value:r,onLeave:t.touch,onChange:t.update})),Boolean(c)&&a&&Object(U.jsx)(G,{color:"red",children:c})]})}var We=["title","titleId"];function Ge(){return Ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ge.apply(this,arguments)}function qe(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Qe(e,t){var n=e.title,i=e.titleId,c=qe(e,We);return r.createElement("svg",Ge({width:10,height:9,viewBox:"0 0 10 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},c),n?r.createElement("title",{id:i},n):null,Re||(Re=r.createElement("rect",{x:.5,width:9,height:9,fill:"white"})),_e||(_e=r.createElement("rect",{x:7.5,y:1,width:1,height:3,fill:"black"})),De||(De=r.createElement("rect",{x:6.5,y:1,width:1,height:3,fill:"black"})),Fe||(Fe=r.createElement("rect",{x:2.5,y:4,width:1,height:2,fill:"black"})),Le||(Le=r.createElement("rect",{x:3.5,y:4,width:1,height:2,fill:"black"})),Ae||(Ae=r.createElement("rect",{x:8.5,y:4,width:1,height:6,transform:"rotate(90 8.5 4)",fill:"black"})),Be||(Be=r.createElement("rect",{x:3.5,y:7,width:1,height:1,transform:"rotate(90 3.5 7)",fill:"black"})),He||(He=r.createElement("rect",{x:4.5,y:7,width:1,height:1,transform:"rotate(90 4.5 7)",fill:"black"})),Ke||(Ke=r.createElement("rect",{x:6.5,y:1,width:1,height:5,transform:"rotate(90 6.5 1)",fill:"black"})),Ue||(Ue=r.createElement("rect",{x:6.5,y:2,width:1,height:5,transform:"rotate(90 6.5 2)",fill:"black"})))}var Ze=r.forwardRef(Qe),Xe=(n.p,Object(A.a)({display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",width:"".concat(223,"px"),backgroundColor:L.BLACK,height:"68px"}));function Ye(e){var t,n=e.onClick;return Object(U.jsxs)("div",{className:(t=Boolean(n),Object(A.a)({boxSizing:"border-box",cursor:t?"pointer":"auto",height:130,overflow:"hidden"})),onClick:n,children:[Object(U.jsxs)("div",{className:Xe,children:[Object(U.jsx)(G,{color:"white",size:"m",align:"center",height:"14px",children:"\xa9 syndicate 2021"}),Object(U.jsxs)(G,{color:"white",size:"m",align:"center",height:"14px",children:["site by artem tarasov",Object(U.jsx)(Ze,{})]})]}),Object(U.jsx)(Z,{})]})}var et=Object(A.a)({position:"fixed",width:"100%",top:0,left:0,display:"flex",justifyContent:"center",zIndex:10});function tt(e){var t=e.children;return Object(U.jsx)("header",{className:et,children:t})}var nt=Object(A.a)({position:"fixed",width:"100%",bottom:0,left:0,display:"flex",justifyContent:"center"});function rt(e){var t=e.children;return Object(U.jsx)("footer",{className:nt,children:t})}var it=function(e,t){return Object(A.a)(Object(je.a)({width:"100%",height:"100%",boxSizing:"border-box",padding:e?"0":"0 40px",overflow:"scroll",backgroundColor:t},B,{padding:e?"0":"0 20px"}))},ct=function(e,t){return Object(A.a)({position:"fixed",top:e?0:void 0,bottom:t?0:void 0,height:0,width:"100%",display:"flex",justifyContent:"center"})};function at(e){var t=e.bottom,n=e.top,r=e.children;return Object(U.jsx)("div",{className:ct(n,t),children:r})}var ot="509px",st="calc(100vh - ".concat(120,"px)");function lt(){var e,t=F(D.state$);return Object(U.jsx)(at,{bottom:!0,children:Object(U.jsxs)("div",{className:(e=t.isShow,Object(A.a)(Object(je.a)({backgroundColor:L.BLACK,display:"flex",flexDirection:"column",justifyContent:"space-between",boxSizing:"border-box",width:"490px",height:ot,padding:"30px",transition:"transform 200ms ease-in, opacity 200ms ease-in",transform:e?"translate3d(0, -".concat(ot,", 0)"):"translate3d(0, 0, 0)",opacity:e?1:0},B,{height:st,width:"100%",transform:e?"translate3d(0, calc(-100vh + ".concat(120,"px), 0)"):"translate3d(0, 0, 0)"}))),children:[t.component,Object(U.jsx)(G,{align:"center",color:"white",onClick:D.close,children:"close"})]})})}function ut(e){var t=e.disablePaddings,n=void 0!==t&&t,r=e.headerContent,i=e.footerContent,c=e.children,a=e.bgrColor;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(tt,{children:r}),Object(U.jsx)("main",{className:it(n,a),children:c}),Object(U.jsx)(rt,{children:i}),Object(U.jsx)(lt,{})]})}var ht={l:"30px",m:"12px"},dt={black:L.BLACK,white:L.WHITE,red:L.RED},jt=function(e,t){return Object(A.a)({textDecoration:"none",color:dt[t],fontSize:ht[e],cursor:"pointer"})};function bt(e){var t=e.href,n=e.size,r=void 0===n?"l":n,i=e.color,c=void 0===i?"black":i,a=e.rel,o=e.target,s=e.children;return Object(U.jsx)("a",{className:jt(r,c),href:t,rel:a,target:o,children:s})}var ft=Object(A.a)({position:"absolute",opacity:0,transition:"opacity .3s ease-in"}),Ot=Object(A.a)(Object(je.a)({display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},":hover > .".concat(ft),{opacity:1})),xt=Object(A.a)({width:"100%"});function pt(e){var t=e.onOpenDetailedInfo,n=e.imageUrl,r=e.projectName,c=e.id,a=i.a.useCallback((function(){t(c)}),[c,t]);return Object(U.jsxs)("div",{className:Ot,children:[Object(U.jsx)("img",{className:xt,src:n,alt:r}),Object(U.jsx)("div",{className:ft,children:Object(U.jsx)(Pe,{onOpenDetailedInfo:a,projectName:r})})]})}var vt=n(32),mt=Object(A.a)({width:"100%"}),gt="#ALLPROJECTS";function yt(e){var t=e.hashtag,n=e.isActive,r=e.onClick,c=i.a.useCallback((function(){return r(t)}),[r,t]);return Object(U.jsx)(G,{align:"center",onClick:c,size:"l",color:n?"red":"white",children:t})}function wt(e){var t=e.hasthags,n=e.onClickHashtag,r=e.onReset,c=i.a.useState(gt),a=Object(E.a)(c,2),o=a[0],s=a[1],l=i.a.useCallback((function(e){s(e),e!==gt?n(e):r()}),[s,n,r]);return Object(U.jsx)("div",{className:mt,children:[gt].concat(Object(vt.a)(t)).map((function(e){return Object(U.jsx)(yt,{hashtag:e,isActive:e===o,onClick:l},e)}))})}var kt,St=Object(A.a)({width:"100%",height:"100%",display:"flex",alignItems:"center",boxSizing:"border-box"}),Ct=Object(A.a)({maxWidth:"670px",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"350px"});function Et(){var e=z.form.fields,t=e.name,n=e.contact,r=i.a.useCallback((function(){t.touch(),n.touch(),z.sendUserForm()}),[t,n]);return Object(U.jsxs)("div",{children:[Object(U.jsx)(Me,{control:t,children:Object(U.jsx)(Je,{placeholder:"your name"})}),Object(U.jsx)(Me,{control:n,children:Object(U.jsx)(Je,{placeholder:"your email or phone"})}),Object(U.jsx)(G,{size:"l",color:"red",onClick:r,children:"send"})]})}function Nt(){return Object(U.jsx)(ut,{headerContent:Object(U.jsx)(Z,{}),footerContent:Object(U.jsx)(Ye,{}),children:Object(U.jsx)("div",{className:St,children:Object(U.jsxs)("div",{className:Ct,children:[Object(U.jsx)(G,{size:"l",children:"wow! you\u2019ve checked all the images we\xa0have to\xa0offer yet. let\u2019s get in\xa0touch!"}),Object(U.jsx)(G,{size:"l",children:"send\xa0us your details and we\u2019ll get back to\xa0you shortly (like, really shortly)"}),Object(U.jsx)(Et,{})]})})})}function It(e){var t,n=e.itemsQueue,r=e.onSelectItem,c=n[0],a=i.a.useCallback((function(){return r(c,s.SELECT)}),[c,r]),o=i.a.useCallback((function(){return r(c,s.REJECT)}),[c,r]),l=i.a.useCallback((function(){return console.log(c)}),[c]);return c?Object(U.jsx)(ut,{disablePaddings:!0,headerContent:Object(U.jsx)(Z,{}),footerContent:Object(U.jsxs)(ze,{children:[Object(U.jsx)(ue,{type:"cross",onClick:o}),Object(U.jsx)(ue,{type:"heart",onClick:a})]}),children:Object(U.jsx)("div",{className:(t=c.photo.url,Object(A.a)(Object(je.a)({width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundImage:"url('".concat(t,"')"),backgroundPosition:"center center",backgroundRepeat:"repeat",backgroundSize:"auto 100%"},B,{backgroundSize:"100% auto"}))),children:Object(U.jsx)("div",{children:Object(U.jsx)(Pe,{onOpenDetailedInfo:l,projectName:c.projectName})})})}):Object(U.jsx)(Nt,{})}function Pt(){var e=F(S.data$),t=e.error,n=e.data;i.a.useEffect((function(){return S.getItems()}),[]);var r=i.a.useCallback((function(e,t){S.setItem(e,t)}),[]);return Object(U.jsx)(we,{error:t,data:n,children:function(e){return Object(U.jsx)(It,{onSelectItem:r,itemsQueue:e})}})}var Tt,$t=Object(A.a)({width:"100%",height:"100%",display:"flex",alignItems:"flex-start",justifyContent:"center",flexDirection:"column"}),zt=Object(A.a)({display:"flex",flexDirection:"column"}),Rt=Object(A.a)({display:"flex",flexWrap:"wrap"}),_t=function(e){return Object(A.a)({animation:e?"".concat(Dt," 700ms forwards"):"",opacity:0})},Dt=Object(A.b)(kt||(kt=Object(be.a)(["\n  0% { opacity: 0 },\n  100% { opacity: 1 }\n"])));!function(e){e[e.LOGO_STEP=0]="LOGO_STEP",e[e.CROSS_STEP=1]="CROSS_STEP",e[e.HEART_STEP=2]="HEART_STEP",e[e.COOKIES_STEP=3]="COOKIES_STEP"}(Tt||(Tt={}));var Ft,Lt=[Tt.LOGO_STEP,Tt.CROSS_STEP,Tt.HEART_STEP,Tt.COOKIES_STEP];function At(e){var t,n=e.onSetIntroViewed,r=i.a.useState([]),c=Object(E.a)(r,2),a=c[0],o=c[1];return i.a.useEffect((function(){var e,t=Lt[a.length];return void 0!==t?e=window.setTimeout((function(){return o((function(e){return[].concat(Object(vt.a)(e),[t])}))}),1e3):e&&window.clearTimeout(e),function(){e&&window.clearTimeout(e)}}),[a]),Object(U.jsx)(ut,{headerContent:Object(U.jsx)("div",{className:(t=a.includes(Tt.LOGO_STEP),Object(A.a)({transform:t?"translate3d(0, 0, 0)":"translate3d(0, 45vh, 0)",transition:"transform 600ms ease-out",animation:"".concat(Dt," 700ms forwards")})),children:Object(U.jsx)(Z,{withMenu:!1})}),footerContent:Object(U.jsxs)(ze,{children:[Object(U.jsx)("div",{className:_t(a.includes(Tt.CROSS_STEP)),children:Object(U.jsx)(ue,{type:"cross"})}),Object(U.jsx)("div",{className:_t(a.includes(Tt.HEART_STEP)),children:Object(U.jsx)(ue,{type:"heart"})})]}),children:Object(U.jsx)("div",{className:$t,children:Object(U.jsxs)("div",{className:zt,children:[Object(U.jsxs)("div",{className:Rt,children:[Object(U.jsxs)("div",{className:_t(a.includes(Tt.CROSS_STEP)),children:[Object(U.jsx)(G,{size:"l",type:"span",children:"cross = like"}),Object(U.jsx)("span",{className:_t(a.includes(Tt.HEART_STEP)),children:Object(U.jsx)(G,{size:"l",type:"span",children:",\xa0"})})]}),Object(U.jsx)("div",{className:_t(a.includes(Tt.HEART_STEP)),children:Object(U.jsx)(G,{size:"l",type:"span",children:"heart = dislike"})})]}),Object(U.jsx)("div",{className:_t(a.includes(Tt.COOKIES_STEP)),children:Object(U.jsx)(G,{size:"l",color:"red",onClick:n,children:"accept cookies to proceed"})})]})})})}function Bt(){var e=i.a.useState((function(){return C.getState()})),t=Object(E.a)(e,2),n=t[0],r=t[1],c=i.a.useCallback((function(){C.setState(!0),r(!0)}),[]);return n?Object(U.jsx)(Pt,{}):Object(U.jsx)(At,{onSetIntroViewed:c})}function Ht(){return Object(U.jsx)("div",{children:"\u041b\u043e\u043b \u043a\u0435\u043a \u0447\u0435\u0431\u0443\u043a\u0440?"})}var Kt=Object(A.a)(Object(je.a)({width:"100%",height:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column"},B,{height:"auto"})),Ut=Object(A.a)(Object(je.a)({marginTop:"80px",display:"flex",justifyContent:"space-between"},B,{flexDirection:"column"})),Vt=Object(A.a)({display:"flex",flexDirection:"column",maxWidth:"845px"}),Jt=Object(A.a)({display:"flex",flexDirection:"column"}),Mt=Object(A.a)((Ft={display:"flex"},Object(je.a)(Ft,"& > div",Object(je.a)({flexBasis:"50%"},B,{marginBottom:"40px",flexBasis:0})),Object(je.a)(Ft,B,{flexDirection:"column"}),Ft)),Wt=Object(A.a)({maxWidth:"220px"});function Gt(){return Object(U.jsx)(ut,{headerContent:Object(U.jsx)(Z,{}),footerContent:Object(U.jsx)(Ye,{}),bgrColor:L.RED,children:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(V,{height:120}),Object(U.jsx)("div",{className:Kt,children:Object(U.jsxs)("div",{className:Ut,children:[Object(U.jsxs)("div",{className:Vt,children:[Object(U.jsx)(G,{size:"l",color:"black",children:"Studio"}),Object(U.jsx)(V,{height:"40px"}),Object(U.jsx)(G,{size:"l",color:"black",children:"Syndicate is\xa0an\xa0architectural practice which has a\xa0self-commissioned base."}),Object(U.jsx)(V,{height:"30px"}),Object(U.jsx)(G,{size:"l",color:"black",children:"We\xa0wouldn\u2019t call it\xa0paper architecture, because\xa0\u2014 on\xa0the contrary\xa0\u2014each project is\xa0meant to\xa0be\xa0built. Being self-commissioned doesn\u2019t mean not taking it\xa0seriously,it\xa0just allows for a\xa0certain playfulness."}),Object(U.jsx)(V,{height:"30px"}),Object(U.jsx)(G,{size:"l",color:"black",children:"Each project has its own idea behind but there is\xa0no\xa0description\xa0\u2014 thus we\xa0insists that each project is\xa0to\xa0be\xa0read as\xa0a\xa0text, while sometimes you need to\xa0read between lines. We\xa0do\xa0not ask you to\xa0understand what you see because what is\xa0done is\xa0not always under control, even for\xa0us."}),Object(U.jsx)(V,{height:"30px"}),Object(U.jsxs)("div",{className:Mt,children:[Object(U.jsx)("div",{children:Object(U.jsx)("div",{className:Wt,children:Object(U.jsx)(G,{color:"black",children:"Office was founded in\xa02017 and is\xa0lead by\xa0Victor Stolbovoy."})})}),Object(U.jsxs)("div",{children:[Object(U.jsx)(G,{color:"black",children:"COLLABORATORS"}),Object(U.jsx)(G,{color:"black",children:"Anastasiya Afanaseva"}),Object(U.jsx)(G,{color:"black",children:"Adelsha Pateev"}),Object(U.jsx)(G,{color:"black",children:"Alexandra Perevalova"}),Object(U.jsx)(G,{color:"black",children:"Nadezda Zlobina"}),Object(U.jsx)(G,{color:"black",children:"Karina Nadeeva"}),Object(U.jsx)(G,{color:"black",children:"Olga Polishuk"}),Object(U.jsx)(G,{color:"black",children:"Petr Mironenko"}),Object(U.jsx)(G,{color:"black",children:"Artur Makarov"}),Object(U.jsx)(G,{color:"black",children:"Yun Khan"})]})]})]}),Object(U.jsxs)("div",{className:Jt,children:[Object(U.jsx)(G,{size:"l",color:"black",children:"Contact us"}),Object(U.jsx)(bt,{href:"https://www.instagram.com/",target:"_blank",rel:"noopener norefer",children:"Instagram"}),Object(U.jsx)(bt,{href:"https://ru-ru.facebook.com/",target:"_blank",rel:"noopener norefer",children:"Facebook"})]})]})}),Object(U.jsx)(V,{height:130})]})})}var qt=Object(A.a)(Object(je.a)({columns:2,columnGap:0,fontSize:0},B,{columns:1})),Qt=Object(A.a)({display:"inline-block",width:"100%"});function Zt(){var e=F(_.hashtags$);return Object(U.jsx)(wt,{hasthags:e,onClickHashtag:_.filterProjectsByHashtag,onReset:_.resetFilter})}function Xt(e){var t=e.projects,n=i.a.useCallback((function(){return D.open(Object(U.jsx)(Zt,{}))}),[]);return Object(U.jsx)(ut,{headerContent:Object(U.jsx)(Z,{}),footerContent:Object(U.jsx)(Ye,{onClick:n}),disablePaddings:!0,children:Object(U.jsx)("div",{className:qt,children:t.map((function(e){return Object(U.jsx)("div",{className:Qt,children:Object(U.jsx)(pt,{id:e.project,projectName:e.projectName,imageUrl:e.photoUrl,onOpenDetailedInfo:function(){}})},e.projectName)}))})})}function Yt(){var e=F(_.data$),t=e.data,n=e.error;return i.a.useEffect((function(){return _.getProjects()}),[]),Object(U.jsx)(we,{error:n,data:t,children:function(e){return Object(U.jsx)(Xt,{projects:e})}})}var en=n(19);function tn(){return Object(U.jsx)(en.b,{history:u,children:Object(U.jsxs)(en.c,{children:[Object(U.jsx)(en.a,{path:o.MAIN,exact:!0,component:Bt}),Object(U.jsx)(en.a,{path:o.USER_CHOOSE_RESULTS,exact:!0,component:Ht}),Object(U.jsx)(en.a,{path:o.STUDIO,exact:!0,component:Gt}),Object(U.jsx)(en.a,{path:o.PROJECTS,exact:!0,component:Yt})]})})}a.a.render(Object(U.jsx)(i.a.StrictMode,{children:Object(U.jsx)(tn,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.8d394906.chunk.js.map