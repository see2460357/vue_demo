<template lang='pug'>
.Order
  .container
    .row
      h3 聯絡資訊
      .col-md-12.row.justify-content-center(@submit.prevent='createdOrder')
        .col-md-6
          .form-group
            label(for='useremail') Email
            input#useremail.form-control(type='email', name='email', v-validate="'required|email'", :class="{'is-invalid': errors.has('email')}", v-model='form.user.email', placeholder='請輸入 Email')
            span.text-danger(v-if="errors.has('email')")
              | {{ errors.first('email') }}
          .form-group
            label(for='username') 收件人姓名
            input#username.form-control(type='text', name='name', :class="{'is-invalid': errors.has('name')}", v-model='form.user.name', v-validate="'required'", placeholder='輸入姓名')
            span.text-danger(v-if="errors.has('name')") 姓名必須輸入
          .form-group
            label(for='usertel') 收件人電話
            input#usertel.form-control(type='tel', v-model='form.user.tel', placeholder='請輸入電話')
          .form-group
            label(for='useraddress') 收件人地址
            input#useraddress.form-control(type='address', name='address', :class="{'is-invalid': errors.has('address')}", v-model='form.user.address', v-validate="'required'", placeholder='請輸入地址')
            span.text-danger(v-if="errors.has('address')") 地址欄位不得留空
        .col-md-6
          .form-group
            label(for='useraddress') 留言
            textarea.form-control(name='', id='', cols='30', rows='10', v-model='form.message')
          .text-right
            button(@click='createdOrder()').clickBtn 送出訂單
</template>

<script>
export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    createdOrder () {
      const vm = this
      const order = vm.form
      this.$validator.validate().then((result) => {
        if (result) {
          vm.$store.dispatch('ordersModules/createdOrder', order)
        } else {
          console.log('error')
        }
      })
    }
  }
}
</script>

<style lang='sass'>
.Order
  padding: 50px 0
  h3
    padding-left: 15px
    margin-bottom: 40px
</style>
