<template lang='pug'>
.Checkout
  .wrap
    .my-5.row.justify-content-center
      form.col-md-6(@submit.prevent='payOrder')
        table.table
          thead
            tr
              th.font-weight-bolder 品名
              th.align-middle.text-right.font-weight-bolder 數量
              th(width='120').align-middle.text-right.font-weight-bolder 單價
          tbody
            tr(v-for='item in order.products', :key='item.id')
              td.align-middle {{ item.product.title }}
              td.align-middle.align-middle.text-right {{ item.qty }}/{{ item.product.unit }}
              td.align-middle.text-right {{ item.final_total | currency}}
          tfoot
            tr
              td.text-right(colspan='2') 總計
              td.text-right {{ order.total | currency}}
        table.table
          tbody
            tr
              th(width='100') Email
              td {{ order.user.email }}
            tr
              th 姓名
              td {{ order.user.name }}
            tr
              th 電話
              td {{ order.user.tel }}
            tr
              th 地址
              td {{ order.user.address }}
            tr
              th 付款狀態
              td
                span(v-if='!order.is_paid') 尚未付款
                span.text-success(v-else='') 付款完成
        .text-right(v-if='order.is_paid === false')
          button.clickBtn 確認付款
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      orderId: ''
    }
  },
  methods: {
    getOrder () {
      this.$store.dispatch('ordersModules/getOrder', this.orderId)
    },
    payOrder () {
      this.$store.dispatch('ordersModules/payOrder', this.orderId)
    }
  },
  computed: {
    ...mapGetters('ordersModules', ['order'])
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
