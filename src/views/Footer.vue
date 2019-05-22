<template lang='pug'>
footer.text-center.fz14
  a(href='', @click.prevent='scrollToTop(1000)').page
  .cond
    img(src='../assets/Images/d.png')
  .tw
    a Official Twitter
      i.fab.fa-twitter.fz16
  p web Design @2019
</template>

<script>
export default {
  data () {
    return {
      scrollTop: null, // 定義按鈕狀態
      isScrollTop: false // 定義按鈕默認狀態
    }
  },
  methods: {
    scrollToTop (scrollDuration) {
      // 速度控制, 以傳來的參數控制速度
      let scrollStep = -window.scrollY / (scrollDuration / 10)
      let scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
          // scrollBy用來捲動網頁卷軸(x, y)
          window.scrollBy(0, scrollStep)
        } else {
          // 一旦到達位置就停止scrollInterval
          clearInterval(scrollInterval)
        }
      }, 1)
    }
  }
}
</script>

<style lang='sass'>
</style>
