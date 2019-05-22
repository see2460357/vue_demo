<template lang='pug'>
.IndexView
  IndexSlider
  .bannerArea
    .bannerAbout
      .wrap
        h3.mack.wow.fadeInDown ABOUT
        div.textType.wow.fadeInUp Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla voluptatibus qui ipsum ullam modi autem nostrum quod, sequi voluptates maiores cupiditate, illum fuga expedita veritatis nesciunt quas non aut.
        div.flexbox
          .post.wow.fadeInLeft
            i.fas.fa-headset
            .proType HEADSET
            div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sit.
          .post.wow.fadeInLeft(data-wow-delay="0.4s")
            i.fa.fa-keyboard
            .proType KEYBOARD
            div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sit.
          .post.wow.fadeInLeft(data-wow-delay="0.7s")
            i.fas.fa-tv
            .proType TV
            div Lorem ipsum dolor sit amet consectetur adipisicing elit.
          .post.wow.fadeInLeft(data-wow-delay="1s")
            i.fas.fa-gamepad
            .proType MOUSE
            div Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sit.
    .bannerNews
      .newsBG
      .wrap
        h3.mack.wow.fadeInDown NEWS
        .newsBox.wow.fadeIn.clearfix
          .newsMenu
            router-link(to='newsheadet') Headset
              i.fas.fa-headset
            router-link(to='newskeyboard') Keyboard
              i.fa.fa-keyboard
            router-link(to='newsmouse') Mouse
              i.fas.fa-gamepad
            router-link(to='newsmousepad') Mousepad
              i.fas.fa-gamepad
            router-link(to='newstv') TV
              i.fas.fa-tv
            router-link(to='news') NEWS
              i.fas.fa-tv
          .newsContent
            router-view
  //- .IndexContent
  //-   .products#Products
  //-     .wrap
  //-       .title.clearfix
  //-         h3 銷售商品
  //-         .productMenu
  //-           form
  //-             input(type='text', v-model='searchText', placeholder='搜尋', aria-label='Search')
  //-             i.fa.fa-times(@click="searchText = ''").cursor
  //-           a(href='#', @click.prevent='searchText = item', :class="{ 'active': item === searchText}", v-for='item in categories', :key='item') {{ item }}
  //-           a(href='#', @click.prevent="searchText = ''", :class="{ 'active': searchText === ''}") 全部顯示
  //-       .content.clearfix
  //-         .post(v-for='(item, id) in filterData', :key='item.id')
  //-           .img
  //-             img(:src='item.imageUrl')
  //-           .text
  //-             .proType {{item.title}}
  //-             p {{item.content}}
  //-           .payBtn
  //-             button(@click="getProduct(item.id)").clickBtn 詳細資料
  //-             button(@click='addToCart(item.id)').clickBtn 購買商品
</template>

<script>
import WOW from 'wowjs'
import { mapGetters, mapActions } from 'vuex'
import IndexSlider from './IndexSlider.vue'
export default {
  data () {
    return {
      show: true,
      user: {
        username: '',
        password: ''
      },
      searchText: ''
    }
  },
  methods: {
    getProduct (id) {
      this.$router.push({ path: `productdetail/${id}` })
    },
    addToCart (id, qty = 1) {
      // 無法使用 mapAction帶入
      this.$store.dispatch('addToCart', { id, qty })
    },
    ...mapActions('productsModules', ['getProducts'])
  },
  computed: {
    filterData () {
      const vm = this
      if (vm.searchText) {
        return vm.products.filter((item) => {
          const data = item.title.toLowerCase().includes(vm.searchText.toLowerCase())
          return data
        })
      }
      return this.products
    },
    ...mapGetters('productsModules', ['categories', 'products'])
  },
  components: {
    IndexSlider
  },
  mounted () {
    new WOW.WOW({ live: false }).init()
  },
  created () {
    this.getProducts()
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
.bannerAbout
  background: #000
  text-align: center
  padding: 50px 0
  .flexbox
    display: flex
    justify-content: center
    margin: 80px 0
    .post
      box-sizing: border-box
      cursor: pointer
      padding: 30px 50px
      transition: .3s all ease
      width: 25%
      &:hover
        background: #2e2d32
    .post i
      color: #c5333f
      font-size: 40px
    .post div
      font-size: 13px
      color: #eee
.bannerNews
  +size(100%, auto)
  background: url('../assets/Images/BG.jpg')
  background-position: center center
  background-repeat: no-repeat
  background-size: cover
  position: relative
  padding: 50px 0
  .newsBG
    +poa(50%)
    width: 100%
    height: 100%
    background: rgba(#000, .8)
    display: block
    // z-index: 1
  .newsBox
    margin: 50px 0
    background: #c5333f
    .newsMenu
      background: #2e2d32
      float: left
      width: 20%
      a
        box-sizing: border-box
        color: #eee
        display: block
        font-size: 14px
        font-weight: 900
        padding: 25px 50px
        position: relative
        i
          +poa(50%, 30px)
      .router-link-active
        background: #c5333f
    .newsContent
      +size(80%, 425px)
      float: left
      padding: 20px 30px
@keyframes fadeInDown
  0%
    top: -50px
    opacity: 0.4
  100%
    top: 0
    opacity: 1
</style>
