(function(t){function e(e){for(var a,o,s=e[0],i=e[1],u=e[2],l=0,d=[];l<s.length;l++)o=s[l],c[o]&&d.push(c[o][0]),c[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},c={app:0},r=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-01f281e6":"c1f35e16","chunk-0de28dd8":"6852f1b3","chunk-11b9295f":"7f0e7d6c","chunk-2d0bd18a":"726934fc","chunk-2d0c0dac":"ee083f8e","chunk-2d0e2114":"7e5b6134","chunk-2d225103":"a5b26f83","chunk-2d225df2":"4ac5dc16","chunk-2d230897":"5c859b80","chunk-2d2378f2":"2eb3eec4","chunk-34fdcd42":"159d66a8","chunk-37b462cb":"807d7208","chunk-4cab3232":"30248fe6","chunk-4decfa5f":"0b7bed9c","chunk-5e91cb84":"fb47f2df","chunk-bf6adfbc":"f59659e7"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-01f281e6":1,"chunk-0de28dd8":1,"chunk-11b9295f":1,"chunk-4cab3232":1,"chunk-4decfa5f":1,"chunk-bf6adfbc":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-01f281e6":"faf11138","chunk-0de28dd8":"a4ac0277","chunk-11b9295f":"eca5f1ce","chunk-2d0bd18a":"31d6cfe0","chunk-2d0c0dac":"31d6cfe0","chunk-2d0e2114":"31d6cfe0","chunk-2d225103":"31d6cfe0","chunk-2d225df2":"31d6cfe0","chunk-2d230897":"31d6cfe0","chunk-2d2378f2":"31d6cfe0","chunk-34fdcd42":"31d6cfe0","chunk-37b462cb":"31d6cfe0","chunk-4cab3232":"9842b1c3","chunk-4decfa5f":"651e3b58","chunk-5e91cb84":"31d6cfe0","chunk-bf6adfbc":"f546af7b"}[t]+".css",c=i.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var u=r[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||c,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[t],f.parentNode.removeChild(f),n(r)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[t]=0}));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,n){a=c[t]=[e,n]});e.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");r.type=a,r.request=o,n[1](r)}c[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue_demo/dist/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0039":function(t,e,n){},"0cfb":function(t,e,n){},1799:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",[n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item",class:{disabled:!1===t.pageData.has_pre}},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.changePage(t.pageData.current_page-1)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),n("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.pageData.total_pages,function(e){return n("li",{key:e,staticClass:"page-item",class:{active:t.pageData.current_page===e}},[n("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.changePage(e)}}},[t._v(t._s(e))])])}),n("li",{staticClass:"page-item",class:{disabled:!1===t.pageData.has_next}},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.changePage(t.pageData.current_page+1)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),n("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])])},o=[],c={name:"pagination",props:{pageData:{type:Object,default:function(){return{}}}},methods:{changePage:function(t){window.scrollTo({top:0}),this.$emit("changepage",t)}}},r=c,s=n("2877"),i=Object(s["a"])(r,a,o,!1,null,null,null);e["a"]=i.exports},3654:function(t,e,n){"use strict";var a=n("e9c7"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),n("alertMessage"),n("router-view")],1)},r=[],s=(n("fa6d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message-alert",class:{active:0!==t.messages.length}},t._l(t.messages,function(e,a){return n("div",{key:a,staticClass:"alert alert-dismissible mb-0 rounded-0",class:"alert-"+e.status},[t._v(t._s(e.message)),n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(a)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)}),i=[],u=n("cebc"),l={name:"alertMessage",methods:Object(u["a"])({},Object(o["d"])("alertModules",["removeMessage"])),computed:Object(u["a"])({},Object(o["c"])("alertModules",["messages"]))},d=l,f=(n("637d"),n("2877")),p=Object(f["a"])(d,s,i,!1,null,null,null),h=p.exports,m={name:"App",components:{alertMessage:h},computed:{isLoading:function(){return this.$store.state.isLoading}}},v=m,g=(n("cf25"),Object(f["a"])(v,c,r,!1,null,null,null)),b=g.exports,k=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Home",attrs:{id:"Home"}},[n("router-view"),n("Footer",{staticClass:"wow fadeInDown"})],1)},w=[],C=n("cea4"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"text-center fz14"},[n("a",{staticClass:"page",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.scrollToTop(1e3)}}}),t._m(0),t._m(1),n("p",[t._v("web Design @2019")])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cond"},[a("img",{attrs:{src:n("e846")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw"},[n("a",[t._v("Official Twitter"),n("i",{staticClass:"fab fa-twitter fz16"})])])}],D={data:function(){return{scrollTop:null,isScrollTop:!1}},methods:{scrollToTop:function(t){var e=-window.scrollY/(t/10),n=setInterval(function(){0!==window.scrollY?window.scrollBy(0,e):clearInterval(n)},1)}}},L=D,x=Object(f["a"])(L,O,y,!1,null,null,null),A=x.exports,E={components:{Navbar:C["default"],Footer:A}},N=E,S=(n("3654"),Object(f["a"])(N,_,w,!1,null,null,null)),T=S.exports;a["a"].use(k["a"]);var I=new k["a"]({routes:[{path:"*",redirect:"/"},{path:"/manager_login",component:function(){return n.e("chunk-11b9295f").then(n.bind(null,"0f18"))}},{path:"/admin",component:function(){return n.e("chunk-bf6adfbc").then(n.bind(null,"69e0"))},children:[{path:"/",component:function(){return n.e("chunk-5e91cb84").then(n.bind(null,"fa04"))}},{path:"manager_orders",component:function(){return n.e("chunk-37b462cb").then(n.bind(null,"c1e9"))}},{path:"manager_coupons",component:function(){return n.e("chunk-34fdcd42").then(n.bind(null,"158a"))}}]},{path:"/navbar",name:"navbar",component:function(){return Promise.resolve().then(n.bind(null,"cea4"))}},{path:"/",name:"home",component:T,children:[{path:"/",component:function(){return n.e("chunk-01f281e6").then(n.bind(null,"ff2d"))},children:[{path:"/",component:function(){return n.e("chunk-2d0c0dac").then(n.bind(null,"440f"))}},{path:"newsheadet",component:function(){return n.e("chunk-2d230897").then(n.bind(null,"ed68"))}},{path:"newstv",component:function(){return n.e("chunk-2d225103").then(n.bind(null,"e398"))}},{path:"newsmousepad",component:function(){return n.e("chunk-2d225df2").then(n.bind(null,"e5f2"))}},{path:"newsmouse",component:function(){return n.e("chunk-2d2378f2").then(n.bind(null,"fc43"))}},{path:"newskeyboard",component:function(){return n.e("chunk-2d0bd18a").then(n.bind(null,"2b15"))}}]},{path:"productdetail/:id",name:"productdetail",component:function(){return n.e("chunk-0de28dd8").then(n.bind(null,"5f47"))}},{path:"/cart",name:"cart",component:function(){return n.e("chunk-4cab3232").then(n.bind(null,"b789"))}},{path:"/order",name:"Order",component:function(){return n.e("chunk-4decfa5f").then(n.bind(null,"cf2a"))}},{path:"checkout/:orderId",name:"checkout",component:function(){return n.e("chunk-2d0e2114").then(n.bind(null,"7cb4"))}}]}]});n("77ed");a["a"].prototype.$bus=new a["a"];n("756d"),n("6c0b");var G=n("bc3a"),P=n.n(G),M=(n("ac6a"),{namespaced:!0,strict:!0,state:{messages:[]},actions:{updateMessage:function(t,e){var n=e.message,a=e.status,o=void 0===a?"danger":a,c=Math.floor(new Date/1e3);t.commit("PUSHMESSAGE",{message:n,status:o,timestamp:c}),t.dispatch("removeMessageWithTiming",c)},removeMessageWithTiming:function(t,e){setTimeout(function(){t.state.messages.forEach(function(n,a){n.timestamp===e&&t.commit("REMOVEMESSAGE",a)})},3e3)}},mutations:{PUSHMESSAGE:function(t,e){t.messages.push(e)},REMOVEMESSAGE:function(t,e){t.messages.splice(e,1)}},getters:{messages:function(t){return t.messages}}}),j=n("774e"),$=n.n(j),R=n("b6d0"),B=n.n(R),U={namespaced:!0,state:{products:[],categories:[],product:{}},actions:{getProducts:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("s425231","/products/all");t.commit("LOADING",!0,{root:!0}),P.a.get(e).then(function(e){t.commit("PRODUCTS",e.data.products),t.commit("CATEGORIES",e.data.products),t.commit("LOADING",!1,{root:!0})})},getProduct:function(t,e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("s425231","/product/").concat(e);t.commit("LOADING",!0,{root:!0}),P.a.get(n).then(function(e){console.log(e.data),t.commit("PRODUCT",e.data.product),t.commit("LOADING",!1,{root:!0})})}},mutations:{PRODUCTS:function(t,e){t.products=e},PRODUCT:function(t,e){t.product=e},CATEGORIES:function(t,e){var n=new B.a;e.forEach(function(t){n.add(t.category)}),t.categories=$()(n)}},getters:{categories:function(t){return t.categories},products:function(t){return t.products},product:function(t){return t.product}}},H={namespaced:!0,strict:!0,state:{order:{user:{}},isLoading:!1},actions:{createdOrder:function(t,e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("s425231","/order");t.commit("LOADING",!0,{root:!0}),P.a.post(n,{data:e}).then(function(e){e.data.success?(t.commit("LOADING",!1,{root:!0}),I.push("/checkout/".concat(e.data.orderId))):(t.commit("LOADING",!1,{root:!0}),console.log("購物車錯誤"))})},getOrder:function(t,e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("s425231","/order/").concat(e);t.commit("LOADING",!0,{root:!0}),P.a.get(n).then(function(e){e.data.success&&e.data.order?(t.commit("ORDER",e.data.order),t.commit("LOADING",!1,{root:!0})):t.commit("LOADING",!1,{root:!0})})},payOrder:function(t,e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("s425231","/pay/").concat(e);t.commit("LOADING",!0),P.a.post(n).then(function(n){n.data.success?(t.commit("LOADING",!1),t.dispatch("getOrder",e)):t.commit("LOADING",!1)})}},mutations:{LOADING:function(t,e){t.isLoading=e},ORDER:function(t,e){t.order=e}},getters:{order:function(t){return t.order},isLoading:function(t){return t.isLoading}}};a["a"].use(o["a"]);var q=new o["a"].Store({strict:!0,state:{isLoading:!1,cart:{carts:[]}},actions:{updateLoading:function(t,e){t.commit("LOADING",e)},getCart:function(t){t.commit("LOADING",!0);var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("s425231","/cart");P.a.get(e).then(function(e){e.data.data.carts&&t.commit("CART",e.data.data),t.commit("LOADING",!1),console.log("取得購物車")})},removeCart:function(t,e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("s425231","/cart/").concat(e);t.commit("LOADING",!0),P.a.delete(n).then(function(e){t.dispatch("getCart"),t.commit("LOADING",!1),console.log("刪除購物車內容")})},addToCart:function(t,e){var n=e.id,a=e.qty,o="".concat("https://vue-course-api.hexschool.io","/api/").concat("s425231","/cart");t.commit("LOADING",!0);var c={product_id:n,qty:a};P.a.post(o,{data:c}).then(function(e){t.commit("LOADING",!1),t.dispatch("getCart"),console.log(e.data)})},addCouponCode:function(t,e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("s425231","/coupon"),a={code:e};t.commit("LOADING",!0),P.a.post(n,{data:a}).then(function(e){e.data.success,t.dispatch("getCart"),t.commit("LOADING",!1)})}},mutations:{LOADING:function(t,e){t.isLoading=e},CART:function(t,e){t.cart=e}},getters:{isLoading:function(t){return t.isLoading},cart:function(t){return t.cart}},modules:{productsModules:U,ordersModules:H,alertModules:M}}),z=n("1799"),F=(n("a481"),n("c5f6"),function(t){var e=Number(t);return"$".concat(e.toFixed(0).replace(/./g,function(t,e,n){var a=e&&"."!==t&&(n.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t;return a}))}),V=function(t){var e=new Date(1e3*t);return e.toLocaleDateString()},W=(n("4989"),n("a7fe")),Y=n.n(W),J=(n("e40d"),n("9062")),K=n.n(J),Q=n("7bb1"),X=n("427f"),Z=n.n(X);a["a"].config.productionTip=!1,P.a.defaults.withCredentials=!0,a["a"].use(o["a"]),a["a"].use(Y.a,P.a),a["a"].config.productionTip=!1,a["a"].component("Loading",K.a),a["a"].component("pagination",z["a"]),a["a"].filter("currency",F),a["a"].filter("date",V),a["a"].use(Q["a"],{events:"change"}),Q["a"].Validator.localize("zh_TW",Z.a),new a["a"]({router:I,store:q,render:function(t){return t(b)}}).$mount("#app")},"637d":function(t,e,n){"use strict";var a=n("abdb"),o=n.n(a);o.a},"6c0b":function(t,e,n){},"756d":function(t,e,n){},abdb:function(t,e,n){},cea4:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menuContent clearfix"},[n("div",{staticClass:"menu",on:{click:function(e){return t.Show(!0)}}},[t._v("Menu")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"menuBox"},[n("div",{staticClass:"close",on:{click:function(e){return t.Show(!1)}}},[t._v("Close")]),n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/products"}},[t._v("Products")])],1),n("li",[n("router-link",{attrs:{to:"/cart"}},[t._v("Cart")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Admin")])],1)]),t._m(0)]),n("div",{staticClass:"loginBox"},[n("div",{staticClass:"loginTitle"},[t._v("Login")]),n("div",{staticClass:"loginWrap"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[n("div",[n("label",[t._v("Email address")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],attrs:{type:"text",placeholder:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})]),n("div",[n("label",[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),n("a",{staticClass:"forgotText"},[t._v("Password forgot")]),n("button",{attrs:{type:"submit"}},[t._v("login")])])])]),t._m(1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"linkCon"},[n("li",[n("i",{staticClass:"fab fa-facebook-f"})]),n("li",[n("i",{staticClass:"fab fa-instagram"})]),n("li",[n("i",{staticClass:"fab fa-twitter"})]),n("li",[n("i",{staticClass:"fab fa-youtube"})]),n("li",[n("i",{staticClass:"fab fa-google"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mailBox"},[n("div",{staticClass:"loginTitle"},[t._v("New at Shop?")]),n("p",[t._v("You can track your orders, edit billing/shopping info,"),n("br"),t._v("receive exclusive offers and lotsmore!")]),n("form",[n("div",{staticClass:"post"},[n("input",{attrs:{type:"checkbox"}}),n("label",[t._v("View your orders and returns easily")])]),n("div",{staticClass:"post"},[n("input",{attrs:{type:"checkbox"}}),n("label",[t._v("Speed up orders with saved contact info")])]),n("div",{staticClass:"post"},[n("input",{attrs:{type:"checkbox"}}),n("label",[t._v("Be psrt of the beneficia Shop family")])]),n("div",{staticClass:"mail"},[n("label",[t._v("Email address")]),n("input",{attrs:{type:"email",placeholder:""}})]),n("button",[t._v("go as new customer")])])])}],c={data:function(){return{isShow:!1,user:{username:"",password:""}}},methods:{Show:function(t){this.isShow=t},signin:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/admin/signin"),n=this;this.$http.post(e,n.user).then(function(e){e.data.success?(n.$router.push("/"),console.log("登入成功")):(alert("登入失敗 請重新登入"),t.logout=!1)})},signout:function(){var t="".concat("https://vue-course-api.hexschool.io","/logout"),e=this;this.$http.post(t).then(function(t){console.log(t.data),t.data.success&&e.$router.push("/")})}}},r=c,s=(n("e34a"),n("2877")),i=Object(s["a"])(r,a,o,!1,null,"852796c4",null);e["default"]=i.exports},cf25:function(t,e,n){"use strict";var a=n("0cfb"),o=n.n(a);o.a},e34a:function(t,e,n){"use strict";var a=n("0039"),o=n.n(a);o.a},e846:function(t,e,n){t.exports=n.p+"img/d.8466e5d5.png"},e9c7:function(t,e,n){}});
//# sourceMappingURL=app.791a46b0.js.map