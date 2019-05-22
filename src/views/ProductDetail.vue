<template lang='pug'>
.productdetail
  .img
    img(:src='product.imageUrl', alt='')
  .text
    .proType {{product.title}}
    p {{product.content}}
    div.price {{ product.price | currency}}
  .addButton.clearfix
    div
      select(v-model='qty')
        option(v-for='num in 10', :value='num', :key='num')
          | 選購 {{ num }} {{product.unit}}
    div
      button(@click='addToCart(product.id, qty)') 加入購物車
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      qty: 1
    }
  },
  methods: {
    getProduct (id) {
      this.$store.dispatch('productsModules/getProduct', id)
    },
    addToCart (id, qty = 1) {
      this.$store.dispatch('addToCart', { id, qty })
    }
  },
  computed: {
    ...mapGetters('productsModules', ['product'])
  },
  created () {
    this.getProduct(this.$route.params.id)
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
.productdetail
  margin: 50px auto
  width: 400px
  .img
    width: 250px
    margin: 0 auto
    img
      width: 100%
  .text
    p
      color: #555
    .price
      color: #c31919
      font-weight: 900
      margin-bottom: 10px
      font-size: 18px
  .addButton
    div
      float: left
      width: 50%
      box-sizing: border-box
      select
        border-radius: 5px
        width: 100%
        padding: 5px 0
        outline: none
      button
        width: 100%
        padding: 5px 0
        border-radius: 5px
        border: none
</style>
