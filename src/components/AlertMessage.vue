<template lang='pug'>
.message-alert(:class="{'active' : messages.length !== 0}")
  .alert.alert-dismissible.mb-0.rounded-0(:class="'alert-' + item.status", v-for='(item, i) in messages', :key='i')
    | {{ item.message }}
    button.close(type='button', @click='removeMessage(i)', aria-label='Close')
      span(aria-hidden='true') ×
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'alertMessage',
  methods: {
    ...mapMutations('alertModules', ['removeMessage'])
  },
  computed: {
    ...mapGetters('alertModules', ['messages'])
  }
}
</script>
<style lang='sass'>
.message-alert
  position: fixed
  max-width: 50%
  top: 56px
  right: 20px
  z-index: 1100
</style>
