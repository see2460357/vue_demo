<template lang='pug'>
#app
  loading(:active.sync='isLoading')
  alertMessage
  //- transition(name="page" mode="out-in")
  //-   router-view(:key="$route.path")
  router-view
</template>

<script>
import 'reset-css'
import alertMessage from '@/components/AlertMessage'
export default {
  name: 'App',
  components: {
    alertMessage
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style lang='sass'>
@import '~bootstrap/scss/bootstrap'
.page-enter-active, .page-leave-active
  transition: .3s
.page-enter, .page-leave-to
  opacity: 0
</style>
