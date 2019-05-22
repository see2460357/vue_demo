<template lang='pug'>
.Home#Home
  //- Navbar
  router-view
  Footer.wow.fadeInDown
</template>

<script>
import Navbar from '@/views/Navbar'
import Footer from '@/views/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang='sass'>
@keyframes fadeInDown
  0%
    background: red
  100%
    background: blue
</style>
