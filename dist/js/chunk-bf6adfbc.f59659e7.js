(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf6adfbc"],{"4abc":function(t,a,s){"use strict";var n=s("e377"),e=s.n(n);e.a},"522b":function(t,a,s){"use strict";var n=s("53e8"),e=s.n(n);e.a},"53e8":function(t,a,s){},"69e0":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Navbar"),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("Sidebar"),s("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[s("router-view")],1)],1)])],1)},e=[],i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[s("div",{staticClass:"sidebar-sticky"},[t._m(0),s("ul",{staticClass:"nav flex-column"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[s("i",{staticClass:"fas fa-box-open"}),t._v(" 產品列表")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/manager_orders"}},[s("i",{staticClass:"far fa-list-alt"}),t._v(" 訂單列表")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/manager_coupons"}},[s("i",{staticClass:"fas fa-ticket-alt"}),t._v(" 優惠券")])],1)]),t._m(1),s("ul",{staticClass:"nav flex-column mb-2"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[s("i",{staticClass:"fas fa-shopping-cart"}),t._v(" 模擬訂單")])],1)])])])},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[s("span",[t._v("管理員")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[s("span",[t._v("模擬功能")]),s("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[s("span",{attrs:{"data-feather":"plus-circle"}})])])}],c={},r=c,o=(s("4abc"),s("2877")),u=Object(o["a"])(r,i,l,!1,null,null,null),m=u.exports,v=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[s("a",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{href:"#"}},[t._v("Company name")]),s("ul",{staticClass:"navbar-nav px-3"},[s("li",{staticClass:"nav-item text-nowrap"},[s("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(a){return t.signout()}}},[t._v("Sign out")])])])])])},d=[],f={methods:{signout:function(){var t="".concat("https://vue-course-api.hexschool.io","/logout"),a=this;this.$http.post(t).then(function(t){console.log(t.data),t.data.success&&a.$router.push("/manager_login")})}}},b=f,p=Object(o["a"])(b,v,d,!1,null,null,null),C=p.exports,h={components:{Sidebar:m,Navbar:C}},_=h,x=(s("522b"),Object(o["a"])(_,n,e,!1,null,null,null));a["default"]=x.exports},e377:function(t,a,s){}}]);
//# sourceMappingURL=chunk-bf6adfbc.f59659e7.js.map