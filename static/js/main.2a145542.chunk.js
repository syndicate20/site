(this.webpackJsonpsyndicate20=this.webpackJsonpsyndicate20||[]).push([[0],{61:function(e){e.exports=JSON.parse('[{"id":"1","img":"1"},{"id":"2","img":"2"},{"id":"3","img":"3"},{"id":"4","img":"4"},{"id":"4","img":"5"}]')},68:function(e,t,n){"use strict";n.r(t);var r,i=n(0),c=n.n(i),s=n(29),a=n.n(s),o="hashedData",u=":".concat(o),h={MAIN:"/",USER_CHOOSE_RESULTS:"/results/:".concat(o)};!function(e){e.REJECT="reject",e.SELECT="select"}(r||(r={}));var f=n(34),l=n(7),j=n(8),d=function(){function e(){Object(l.a)(this,e),this.cache=null,this.storage=window.localStorage}return Object(j.a)(e,[{key:"setUserChoise",value:function(e){var t=this;return this.getUserChoiseData().then((function(n){return t.setData(n||[],e)}))}},{key:"getUserChoiseData",value:function(){var t=this.getFromCache();if(t)return Promise.resolve(t);var n=this.storage.getItem(e.KEY);if(n)try{var r=JSON.parse(n);return Promise.resolve(r)}catch(i){return Promise.resolve(null)}return Promise.resolve(null)}},{key:"setData",value:function(t,n){var r=[].concat(Object(f.a)(t),[n]);try{var i=JSON.stringify(r);try{return this.storage.setItem(e.KEY,i),this.setToCache(r),Promise.resolve(!0)}catch(c){return Promise.resolve(!1)}}catch(c){return Promise.resolve(!1)}}},{key:"getFromCache",value:function(){return this.cache}},{key:"setToCache",value:function(e){this.cache=e}}]),e}();d.KEY="data";var m=new d,b=n(37),v=new(function(){function e(){Object(l.a)(this,e),this.fingerprintJS=Object(b.a)(),this.userFingerprint=""}return Object(j.a)(e,[{key:"getFingerPrint",value:function(){var e=this;return this.userFingerprint?Promise.resolve(this.userFingerprint):this.fingerprintJS.then((function(t){return t.get().then((function(t){return e.userFingerprint=t.visitorId,e.userFingerprint}))}))}}]),e}()),O=n(30),g=n.n(O),p=new(function(){function e(){Object(l.a)(this,e),this.instance=g.a.create()}return Object(j.a)(e,[{key:"get",value:function(e,t){return this.instance.get(e,t).then((function(e){return e.data}))}},{key:"post",value:function(e,t,n){return this.instance.post(e,t,n).then((function(e){return e.data}))}}]),e}()),C=n(61),x=new(function(){function e(){Object(l.a)(this,e)}return Object(j.a)(e,[{key:"sendUserForm",value:function(e,t){var n={fingerPrint:e,userChoiceData:t};return p.post("",n)}},{key:"getItems",value:function(){return Promise.resolve(C)}}]),e}());function E(e){var t=function(e){var t=JSON.stringify(e);return window.btoa(t)}(e);return"".concat(window.location.hostname,"/#").concat(function(e){return h.USER_CHOOSE_RESULTS.replace(u,e)}(t))}var S=n(35);var w=n(33),y=Object(w.a)({display:"flex"}),k=n(1);function I(e){var t=e.item,n=e.onChoose,i=c.a.useCallback((function(){return n(t,r.SELECT)}),[t,n]),s=c.a.useCallback((function(){return n(t,r.REJECT)}),[t,n]);return Object(k.jsxs)("div",{className:y,children:[Object(k.jsx)("div",{children:"id: ".concat(t.id," - img: ").concat(t.img)}),!t.swipe&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("button",{onClick:i,children:"\u0412\u042b\u0411\u0420\u0410\u0422\u042c"}),Object(k.jsx)("button",{onClick:s,children:"\u041e\u0422\u0412\u0415\u0420\u0413\u041d\u0423\u0422\u042c"})]})]})}var F=n(10),U=n(70),J=new(function(){function e(){var t=this;Object(l.a)(this,e),this.items$=new U.a([]),this.handleChooseItem=function(e,n){var r=Object(F.a)(Object(F.a)({},e),{},{swipe:n});m.setUserChoise(r).then((function(n){if(n){var i=t.items$.getValue().map((function(t){return t===e?r:t}));t.items$.next(i)}}))},this.sendItems=function(){m.getUserChoiseData().then((function(e){e&&v.getFingerPrint().then((function(t){var n=E(e);x.sendUserForm(t,n)}))}))}}return Object(j.a)(e,[{key:"getItems",value:function(){var e=this;x.getItems().then((function(t){m.getUserChoiseData().then((function(n){if(n){var r=t.map((function(e){var t=n.find((function(t){return t.id===e.id&&t.img===e.img}));return t||Object(F.a)(Object(F.a)({},e),{},{swipe:null})}));e.items$.next(r)}else{var i=t.map((function(e){return Object(F.a)(Object(F.a)({},e),{},{swipe:null})}));e.items$.next(i)}}))}))}}]),e}());function T(){var e=function(e){var t=Object(i.useState)((function(){return e.getValue()})),n=Object(S.a)(t,2),r=n[0],c=n[1];return Object(i.useEffect)((function(){var t=e.subscribe((function(e){return c(e)}));return function(){return t.unsubscribe()}}),[e]),r}(J.items$);c.a.useEffect((function(){J.getItems()}),[]);var t={selected:[],rejected:[],other:[]};return e.forEach((function(e){e.swipe||t.other.push(e),e.swipe===r.SELECT&&t.selected.push(e),e.swipe===r.REJECT&&t.rejected.push(e)})),e.length?Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{children:"\u041d\u0435\u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435"}),t.other.map((function(e){return Object(k.jsx)(I,{item:e,onChoose:J.handleChooseItem},"".concat(e.id,"-").concat(e.img))})),Object(k.jsx)("p",{children:"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435"}),t.selected.map((function(e){return Object(k.jsx)(I,{item:e,onChoose:J.handleChooseItem},"".concat(e.id,"-").concat(e.img))})),Object(k.jsx)("p",{children:"\u041e\u0442\u0432\u0435\u0440\u0433\u043d\u0443\u0442\u044b\u0435"}),t.rejected.map((function(e){return Object(k.jsx)(I,{item:e,onChoose:J.handleChooseItem},"".concat(e.id,"-").concat(e.img))})),Object(k.jsx)("div",{children:Object(k.jsx)("button",{onClick:J.sendItems,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443"})})]}):Object(k.jsx)(k.Fragment,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u0430"})}var P=n(3);function R(){var e=Object(P.f)().hashedData;if(!e)return Object(k.jsx)(k.Fragment,{children:"\u041f\u0443\u0441\u0442\u043e\u043e"});var t=function(e){var t=window.atob(e);return JSON.parse(t)}(e);return Object(k.jsxs)("div",{children:[Object(k.jsx)("p",{children:"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435"}),t.filter((function(e){return e.swipe===r.SELECT})).map((function(e){return Object(k.jsx)("div",{children:"id: ".concat(e.id," - img: ").concat(e.img)},e.id+e.img)})),Object(k.jsx)("p",{children:"\u041e\u0442\u0432\u0435\u0440\u0433\u043d\u0443\u0442\u044b\u0435"}),t.filter((function(e){return e.swipe===r.REJECT})).map((function(e){return Object(k.jsx)("div",{children:"id: ".concat(e.id," - img: ").concat(e.img)},e.id+e.img)}))]})}var D=n(36);function N(){return Object(k.jsx)(D.a,{basename:"/syndicate20-public",children:Object(k.jsxs)(P.c,{children:[Object(k.jsx)(P.a,{path:h.MAIN,exact:!0,component:T}),Object(k.jsx)(P.a,{path:h.USER_CHOOSE_RESULTS,component:R})]})})}a.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(N,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.2a145542.chunk.js.map