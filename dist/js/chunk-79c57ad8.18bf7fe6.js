(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79c57ad8"],{"2fdb":function(t,e,c){"use strict";var a=c("5ca1"),r=c("d2c8"),s="includes";a(a.P+a.F*c("5147")(s),"String",{includes:function(t){return!!~r(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,c){var a=c("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(c){try{return e[a]=!1,!"/./"[t](e)}catch(r){}}return!0}},6762:function(t,e,c){"use strict";var a=c("5ca1"),r=c("c366")(!0);a(a.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c("9c6c")("includes")},aae3:function(t,e,c){var a=c("d3f4"),r=c("2d95"),s=c("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==r(t))}},d2c8:function(t,e,c){var a=c("aae3"),r=c("be13");t.exports=function(t,e,c){if(a(e))throw TypeError("String#"+c+" doesn't accept regex!");return String(r(t))}},e6dc:function(t,e,c){"use strict";c.r(e);var a=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"products",attrs:{id:"Products"}},[c("div",{staticClass:"menu"},[c("router-link",{attrs:{to:"/navbar"}},[c("i",{staticClass:"fas fa-bars"})])],1),c("div",{staticClass:"wrap"},[c("div",{staticClass:"title clearfix"},[c("h3",[t._v("銷售商品")]),c("div",{staticClass:"productMenu"},[c("form",[c("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"text",placeholder:"搜尋","aria-label":"Search"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),c("i",{staticClass:"fa fa-times cursor",on:{click:function(e){t.searchText=""}}})]),t._l(t.categories,function(e){return c("a",{key:e,class:{active:e===t.searchText},attrs:{href:"#"},on:{click:function(c){c.preventDefault(),t.searchText=e}}},[t._v(t._s(e))])}),c("a",{class:{active:""===t.searchText},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.searchText=""}}},[t._v("全部顯示")])],2)]),c("div",{staticClass:"content clearfix"},t._l(t.filterData,function(e,a){return c("div",{key:e.id,staticClass:"post"},[c("div",{staticClass:"img"},[c("img",{attrs:{src:e.imageUrl}})]),c("div",{staticClass:"text"},[c("div",{staticClass:"em"},[t._v(t._s(e.title))]),c("p",[t._v(t._s(e.content))])]),c("div",{staticClass:"payBtn"},[c("button",{staticClass:"clickBtn",on:{click:function(c){return t.getProduct(e.id)}}},[t._v("詳細資料")]),c("button",{staticClass:"clickBtn",on:{click:function(c){return t.addToCart(e.id)}}},[t._v("購買商品")])])])}),0)])])},r=[],s=(c("6762"),c("2fdb"),c("cebc")),i=c("2f62"),n={data:function(){return{searchText:""}},methods:Object(s["a"])({getProduct:function(t){this.$router.push({path:"productdetail/".concat(t)})},addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("addToCart",{id:t,qty:e})}},Object(i["b"])("productsModules",["getProducts"])),computed:Object(s["a"])({filterData:function(){var t=this;return t.searchText?t.products.filter(function(e){var c=e.title.toLowerCase().includes(t.searchText.toLowerCase());return c}):this.products}},Object(i["c"])("productsModules",["categories","products"])),created:function(){this.getProducts()}},o=n,u=c("2877"),d=Object(u["a"])(o,a,r,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-79c57ad8.18bf7fe6.js.map