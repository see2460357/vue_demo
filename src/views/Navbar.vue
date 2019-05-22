<template lang='pug'>
.menuContent.clearfix
  .menu(@click='Show(true)') Menu
  .menuBox(v-show='isShow')
    .close(@click='Show(false)') Close
    ul
      li: router-link(to='/') Home
      li: router-link(to='/products') Products
      li: router-link(to='/cart') Cart
      li: router-link(to='/about') About
      li: router-link(to='/') Admin
    ul.linkCon
      li: i.fab.fa-facebook-f
      li: i.fab.fa-instagram
      li: i.fab.fa-twitter
      li: i.fab.fa-youtube
      li: i.fab.fa-google
  .loginBox
    div.loginTitle Login
    .loginWrap
      form(@submit.prevent='signin')
        div
          label Email address
          input(type='text', placeholder='', v-model='user.username')
        div
          label Password
          input(type='password', placeholder='', v-model='user.password')
        a.forgotText Password forgot
        button(type='submit') login
  .mailBox
    div.loginTitle New at Shop?
    p You can track your orders, edit billing/shopping info,<br>receive exclusive offers and lotsmore!
    form
      .post
        input(type='checkbox')
        label View your orders and returns easily
      .post
        input(type='checkbox')
        label Speed up orders with saved contact info
      .post
        input(type='checkbox')
        label Be psrt of the beneficia Shop family
      .mail
        label Email address
        input(type='email', placeholder='')
      button go as new customer
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    Show (view) {
      this.isShow = view
    },
    signin () {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`
      const vm = this
      this.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          vm.$router.push('/')
          console.log('登入成功')
        } else {
          alert('登入失敗 請重新登入')
          this.logout = false
        }
      })
    },
    signout () {
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      const vm = this
      this.$http.post(api).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          vm.$router.push('/')
        }
      })
    }
  }
}
</script>

<style lang='sass' scoped>
@mixin size($w,$h:$w)
  width: $w
  height: $h
@mixin poa($t,$l:$t)
  top: $t
  left: $l
  position: absolute
  transform: translate(-50%,-50%)
.menu, .close
  color: #202023
  cursor: pointer
  font-size: 16px
  font-weight: 900
  left: 30px
  position: absolute
  top: 30px
  transition: .3s all
  a
    color: #000
.menuBox
  +size(400px, 100vh)
  background: #fff
  box-shadow: 1px 1px 3px 1px #888
  position: absolute
  top: 0
  left: 0
  padding: 30px
  z-index: 9999
  ul
    margin-top: 100px
    border-bottom: 5px solid #F85563
    padding: 50px 0
    li
      margin-bottom: 10px
    li a
      color: #202023
      font-size: 30px
      font-weight: 900
      transition: .3s
    li a:hover
      color: #F85563
  ul.linkCon
    padding: 0
    margin: 0
    border: none
    li
      padding-right: 40px
      display: inline-block
      font-size: 24px
      cursor: pointer
    li:last-child
      padding: 0
.loginTitle
  color: #202023
  font-size: 40px
  font-weight: 900
  position: relative
  &:before
    +size(100px, 10px)
    background: #F85563
    content: ''
    position: absolute
    top: calc(100% + 15px)
    left: 0
button
  border: solid 2px #35586D
  background: #fff
  color: #202023
  font-weight: 900
  padding: 7px 70px
  transition: .5s
  outline: none
  position: relative
  &:hover
    background: #35586D
    color: #fff
    &:before
      top: 50%
      left: 50%
      opacity: 0
  &:before
    +poa(calc(60% + 3px), calc(50% + 7px))
    +size(100%)
    background: #fff
    border: solid 2px #35586D
    content: ''
    transition: .5s
    z-index: -1
.menuContent
  .loginBox
    +size(50%, 100vh)
    float: left
    padding: 100px 70px 50px 220px
    .loginWrap
      margin-top: 100px
      div
        position: relative
        margin-bottom: 50px
        label
          color: #35586d
          font-size: 12px
          font-weight: 900
          position: absolute
          top: -22px
          left: 0
        input
          +size(100%, 50px)
          color: #202023
          border: solid 2px #CFDCE8
          font-size: 20px
          padding: 5px 15px
      a.forgotText
        color: #F85563
        cursor: pointer
        display: block
        font-size: 13px
        font-weight: 900
        margin-bottom: 50px
  .mailBox
    +size(50%, 100vh)
    background: #CFDCE8
    float: left
    padding: 100px 70px 50px 70px
    position: relative
    z-index: 1
    p
      color: #202023
      font-weight: 900
      font-size: 14px
      line-height: 2
      margin: 70px 0 40px 0
    form
      .post
        margin-bottom: 10px
        position: relative
        input
          position: absolute
          top: 45%
          left: 0
          transform: translateY(-50%)
          +size(18px)
          border: solid 1px #35586d
        label
          color: #202023
          font-size: 14px
          font-weight: 900
          padding-left: 25px
          line-height: 1.8
    .mail
      margin: 50px 0 30px 0
      position: relative
      label
        color: #35586d
        font-size: 12px
        font-weight: 900
        position: absolute
        top: -22px
        left: 0px
      input
        +size(300px, 50px)
        box-sizing: border-box
        color: #202023
        border: solid 2px #CFDCE8
        font-size: 20px
        padding: 5px 15px
</style>
