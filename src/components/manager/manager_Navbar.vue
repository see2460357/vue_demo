<template lang='pug'>
div
  nav.navbar.navbar-dark.fixed-top.bg-dark.flex-md-nowrap.p-0.shadow
    a.navbar-brand.col-sm-3.col-md-2.mr-0(href='#') Company name
    ul.navbar-nav.px-3
      li.nav-item.text-nowrap
        a.nav-link(href='#', @click='signout()') Sign out
</template>

<script>
export default {
  methods: {
    signout () {
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      const vm = this
      this.$http.post(api).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          vm.$router.push('/manager_login')
        }
      })
    }
  }
}
</script>

<style lang='sass'>
</style>
