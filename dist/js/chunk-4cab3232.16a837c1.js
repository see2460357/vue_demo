(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cab3232"],{1734:function(t,a,s){"use strict";var c=s("eaf0"),e=s.n(c);e.a},b789:function(t,a,s){"use strict";s.r(a);var c=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"CartShop"},[s("div",{staticClass:"wrap"},[s("div",{staticClass:"em"},[t._v("已購商品")]),s("div",{staticClass:"content"},[t._m(0),s("div",{staticClass:"cartBody"},[t.cart.carts.length?t._e():s("ul",{attrs:{id:"productCart_num"}},[s("li",{staticClass:"color8d fz13"},[t._v("No items in cart.")])]),t._l(t.cart.carts,function(a){return t.cart.carts?s("ul",{key:a.id},[s("li",{staticClass:"img"},[s("img",{attrs:{src:a.product.imageUrl,alt:""}})]),s("li",{staticClass:"protitle"},[s("div",[t._v(t._s(a.product.title)),a.coupon?s("span",[t._v("已套用優惠卷")]):t._e()]),s("em",[t._v(t._s(a.product.content))])]),s("li",{staticClass:"delete",on:{click:function(s){return s.preventDefault(),t.removeCart(a.id)}}},[s("i",{staticClass:"fas fa-times cursor"})]),s("li",{staticClass:"priceS"},[t._v(t._s(t._f("currency")(a.product.price)))]),s("li",{staticClass:"quantity"},[t._v(t._s(a.qty))]),s("li",{staticClass:"price"},[t._v(t._s(t._f("currency")(a.product.price*a.qty)))])]):t._e()})],2)]),t.cart.carts.length?s("div",{staticClass:"cartContent"},[s("div",{staticClass:"input-group mb-3 input-group-sm"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼 1234"},domProps:{value:t.couponCode},on:{input:function(a){a.target.composing||(t.couponCode=a.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.addCouponCode(t.couponCode)}}},[t._v("套用優惠碼")])])]),s("div",{staticClass:"infoWrap clearfix"},[s("div",{staticClass:"cartMes"},[s("ul",[t._l(t.msg,function(a,c){return s("li",{staticClass:"clearfix"},[s("div",{staticClass:"id"},[t._v("["+t._s(c+1)+"]")]),s("span",[t._v(t._s(a.content))])])}),s("div",[t._v("(取自Y拍某家購物平台的相關介紹)")])],2)]),s("div",{staticClass:"cartItem"},[s("div",{staticClass:"text"},[s("div",[t._v("總計")]),s("div",[t._v("折扣後")]),s("router-link",{attrs:{to:"/order"}},[t._v("確認付款")])],1),s("div",{staticClass:"content"},[s("div",[t._v(t._s(t._f("currency")(t.cart.total)))]),t.cart.final_total!==t.cart.total?s("div",{staticClass:"final"},[t._v(t._s(t._f("currency")(t.cart.final_total)))]):t._e()])])])]):t._e()])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cartHead"},[s("ul",[s("li",{staticClass:"protitle"},[t._v("商品名稱")]),s("li",{staticClass:"delete"},[t._v("刪除商品")]),s("li",{staticClass:"priceS"},[t._v("單價")]),s("li",{staticClass:"quantity"},[t._v("商品數量")]),s("li",{staticClass:"price"},[t._v("小計")])])])}],i=s("cebc"),n=s("2f62"),r={data:function(){return{msg:[{content:"現貨商品會在標題標註【現貨】其餘屬於預購商品。"},{content:"現貨商品２４小時內出貨，如遇缺貨會告知預計到貨日期，並詢問您是否繼續購買。"},{content:"預購商品，出貨時間7~10個工作日。"},{content:"台灣氣候潮濕，為避免傢俱庫存久放造成發霉、長白蟻、螺絲生鏽，傢俱類商品多為現點現做，且需簡易自行組裝，出貨時間8-30個工作日。"},{content:"為了保衛地球和平，我們提供【隔日送達服務】請告知客服您需要的商品，客服會盡力幫您確認能不能幫您趕出來，並幫您報價運費。"}],couponCode:""}},methods:Object(i["a"])({removeCart:function(t){this.$store.dispatch("removeCart",t)}},Object(n["b"])(["getCart","addCouponCode"])),computed:Object(i["a"])({},Object(n["c"])(["cart"])),created:function(){this.getCart()}},o=r,l=(s("1734"),s("2877")),u=Object(l["a"])(o,c,e,!1,null,null,null);a["default"]=u.exports},eaf0:function(t,a,s){}}]);
//# sourceMappingURL=chunk-4cab3232.16a837c1.js.map