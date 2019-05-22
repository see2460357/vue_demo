<template lang='pug'>
.view
  form(@submit.prevent='signin').form-signin.rounded
    .text-center.mb-4
      h1.h3.fw900 管理者介面
      p.fw900 管理者後台系統
    .form-label-group
      input#inputEmail.form-control(type='email', placeholder='Email address', required='', autofocus='', v-model='user.username')
      label(for='inputEmail') 請輸入帳號
    .form-label-group
      input#inputPassword.form-control(type='password', placeholder='Password', required='', v-model='user.password')
      label(for='inputPassword') 請輸入密碼
    .checkbox.mb-3
      label
        input(type='checkbox', value='remember-me')
        |  Remember me
    button.btn.btn-lg.btn-block.usertype.fw900(type='submit') 登入
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`
      const vm = this
      this.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          vm.$router.push('/admin')
        } else {
          alert('登入失敗 請重新登入')
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
html,
body {
  height: 100%;
}

.view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #F3F7FD;
}

.form-signin {
  width: 100%;
  width: 360px;
  max-width: 360px;
  padding: 30px 20px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 1px 1px 20px rgba(#000, .3);
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
  height: 3.125rem;
  padding: .75rem;
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  pointer-events: none;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}
.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: .25rem;
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-size: 12px;
  color: #777;
}
.usertype {
  padding: 5px 0;
  border: solid 1px#1764E8;
  color: #1764E8;
  &:hover {
    background: #1764E8;
    color: #fff;
  }
}
/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}

</style>
