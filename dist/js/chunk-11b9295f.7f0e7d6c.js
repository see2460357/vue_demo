(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11b9295f"],{"0f18":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view"},[s("form",{staticClass:"form-signin rounded",on:{submit:function(t){return t.preventDefault(),e.signin(t)}}},[e._m(0),s("div",{staticClass:"form-label-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{id:"inputEmail",type:"email",placeholder:"Email address",required:"",autofocus:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),s("label",{attrs:{for:"inputEmail"}},[e._v("請輸入帳號")])]),s("div",{staticClass:"form-label-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{id:"inputPassword",type:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),s("label",{attrs:{for:"inputPassword"}},[e._v("請輸入密碼")])]),e._m(1),s("button",{staticClass:"btn btn-lg btn-block usertype fw900",attrs:{type:"submit"}},[e._v("登入")])])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-center mb-4"},[s("h1",{staticClass:"h3 fw900"},[e._v("管理者介面")]),s("p",{staticClass:"fw900"},[e._v("管理者後台系統")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"checkbox mb-3"},[s("label",[s("input",{attrs:{type:"checkbox",value:"remember-me"}}),e._v(" Remember me")])])}],n={data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var e="".concat("https://vue-course-api.hexschool.io","/admin/signin"),t=this;this.$http.post(e,t.user).then(function(e){e.data.success?t.$router.push("/admin"):alert("登入失敗 請重新登入")})}}},i=n,o=(s("8fc2"),s("2877")),u=Object(o["a"])(i,a,r,!1,null,"506b49f5",null);t["default"]=u.exports},"7c26":function(e,t,s){},"8fc2":function(e,t,s){"use strict";var a=s("7c26"),r=s.n(a);r.a}}]);
//# sourceMappingURL=chunk-11b9295f.7f0e7d6c.js.map