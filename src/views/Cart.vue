<template lang='pug'>
.CartShop
  .wrap
    .proType 已購商品
    .content
      .cartHead
        ul
          li.protitle 商品名稱
          li.delete 刪除商品
          li.priceS 單價
          li.quantity 商品數量
          li.price 小計
      .cartBody
        ul(v-if='!cart.carts.length')#productCart_num
          li.color8d.fz13 No items in cart.
        ul(v-for='item in cart.carts', :key='item.id', v-if='cart.carts')
          li.img
            img(:src="item.product.imageUrl", alt="")
          li.protitle
            div {{item.product.title}}
              span(v-if='item.coupon') 已套用優惠卷
            em {{item.product.content}}
          li.delete(@click.prevent="removeCart(item.id)")
            i.fas.fa-times.cursor
          li.priceS {{item.product.price | currency}}
          li.quantity {{ item.qty }}
          li.price {{item.product.price * item.qty| currency}}
    .cartContent(v-if='cart.carts.length')
      .input-group.mb-3.input-group-sm
        input.form-control(type='text', v-model='couponCode', placeholder='請輸入優惠碼 1234')
        .input-group-append
          button.btn.btn-outline-secondary(type='button', @click.prevent='addCouponCode(couponCode)')
            | 套用優惠碼
      .infoWrap.clearfix
        .cartMes
          ul
            li(v-for='(item, index) in msg').clearfix
              .id [{{index+ 1}}]
              span {{item.content}}
            div (取自Y拍某家購物平台的相關介紹)
        .cartItem
          .text
            div 總計
            div 折扣後
            router-link(to='/order') 確認付款
          .content
            div {{cart.total | currency}}
            div(v-if="cart.final_total !== cart.total").final {{cart.final_total | currency}}
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      msg: [
        {
          content: '現貨商品會在標題標註【現貨】其餘屬於預購商品。'
        },
        {
          content: '現貨商品２４小時內出貨，如遇缺貨會告知預計到貨日期，並詢問您是否繼續購買。'
        },
        {
          content: '預購商品，出貨時間7~10個工作日。'
        },
        {
          content: '台灣氣候潮濕，為避免傢俱庫存久放造成發霉、長白蟻、螺絲生鏽，傢俱類商品多為現點現做，且需簡易自行組裝，出貨時間8-30個工作日。'
        },
        {
          content: '為了保衛地球和平，我們提供【隔日送達服務】請告知客服您需要的商品，客服會盡力幫您確認能不能幫您趕出來，並幫您報價運費。'
        }
      ],
      couponCode: ''
    }
  },
  methods: {
    removeCart (id) {
      this.$store.dispatch('removeCart', id)
    },
    ...mapActions(['getCart', 'addCouponCode'])
  },
  computed: {
    ...mapGetters(['cart'])
  },
  created () {
    this.getCart()
  }
}
</script>

<style lang='sass'>
@mixin size($w,$h:$w)
  width: $w
  height: $h

@mixin poa($t,$l:$t)
  top: $t
  left: $l
  position: absolute
  transform: translate(-50%,-50%)
.CartShop
  min-height: 55vh
  padding: 50px 0
.content
  .cartHead
    font-weight: 900
    ul
      border-bottom: 1px solid rgba(#000, .1)
      padding: 15px 0
      margin: 0
      li
        display: inline-block
      .protitle
        width: 50%
      .delete
        width: 10%
        text-align: center
      .priceS
        width: 15%
        text-align: right
      .quantity
        width: 15%
        text-align: center
      .price
        width: 10%
        text-align: right
  .cartBody
    padding: 10px 0
    ul
      border-bottom: 1px solid rgba(#000, .1)
      padding: 15px 0
      margin: 0
      li
        display: inline-block
      .img
        width: 5%
        img
          min-width: 60px
          width: 100%
          transform: translateY(-5px)
      .protitle
        width: 45%
        padding-left: 20px
        box-sizing: border-box
        div
          font-weight: 900
          span
            display: inline-block
            font-size: 13px
            padding-left: 10px
            color: #c31919
        em
          font-size: 13px
          color: #555
      .delete
        width: 10%
        text-align: center
        color: #c31919
        cursor: pointer
      .priceS
        width: 15%
        text-align: right
      .quantity
        width: 15%
        text-align: center
      .price
        width: 10%
        text-align: right
.cartContent
  .infoWrap
    .cartMes
      float: left
      width: 80%
      ul
        font-size: 13px
        color: #555
        li
          margin-bottom: 5px
          .id
            float: left
          span
            padding-left: 5px
            float: left
    .cartItem
      float: left
      width: 20%
      .text
        float: left
        width: 50%
        div
          margin-bottom: 20px
      .content
        float: left
        width: 50%
        div
          margin-bottom: 20px
        .final
          color: #c31919

</style>
