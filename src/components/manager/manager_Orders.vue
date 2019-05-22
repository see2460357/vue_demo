<template lang='pug'>
div
  table.table.mt-4
    thead
      tr
        th 購買時間
        th Email
        th 購買款項
        th 應付金額
        th 是否付款
    tbody
      tr(v-for='(item, key) in sortOrder', :key='key', v-if='orders.length', :class="{'text-secondary': !item.is_paid}")
        td {{ item.create_at | date }}
        td
          span(v-text='item.user.email', v-if='item.user')
        td
          ul.list-unstyled
            li(v-for='(product, i) in item.products', :key='i')
              | {{ product.product.title }} 數量：{{ product.qty }}
              | {{ product.product.unit }}
        td.text-right {{ item.total | currency }}
        td
          strong.text-success(v-if='item.is_paid') 已付款
          span.text-muted(v-else='') 尚未起用
  Pagination(:page-data="pagination" @changepage="getOrders" class="d-flex justify-content-center")
</template>

<script>
import Pagination from '../Pagination'
export default {
  data () {
    return {
      orders: {},
      isNew: false,
      pagination: {}
    }
  },
  components: {
    Pagination
  },
  methods: {
    getOrders (currentPage = 1) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${currentPage}`
      vm.$store.dispatch('updateLoading', true)
      this.$http.get(url, vm.tempProduct).then((response) => {
        vm.orders = response.data.orders
        vm.pagination = response.data.pagination
        vm.$store.dispatch('updateLoading', false)
        console.log(response)
      })
    }
  },
  computed: {
    sortOrder () {
      const vm = this
      let newOrder = []
      if (vm.orders.length) {
        newOrder = vm.orders.sort((a, b) => {
          const aIsPaid = a.is_paid ? 1 : 0
          const bIsPaid = b.is_paid ? 1 : 0
          return bIsPaid - aIsPaid
        })
      }
      return newOrder
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
<style lang='sass'>
</style>
