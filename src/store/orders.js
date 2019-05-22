import axios from 'axios'
import router from '../router'

export default {
  namespaced: true,
  strict: true,
  state: {
    order: {
      user: {}
    },
    isLoading: false
  },
  actions: {
    createdOrder (context, order) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      context.commit('LOADING', true, { root: true })
      axios.post(api, { data: order }).then(response => {
        if (response.data.success) {
          context.commit('LOADING', false, { root: true })
          router.push(`/checkout/${response.data.orderId}`)
        } else {
          context.commit('LOADING', false, { root: true })
          console.log('購物車錯誤')
        }
      })
    },
    getOrder (context, orderID) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${orderID}`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then(response => {
        if (response.data.success && response.data.order) {
          context.commit('ORDER', response.data.order)
          context.commit('LOADING', false, { root: true })
        } else {
          context.commit('LOADING', false, { root: true })
        }
      })
    },
    payOrder (context, orderID) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${orderID}`
      context.commit('LOADING', true)
      axios.post(api).then((response) => {
        if (response.data.success) {
          context.commit('LOADING', false)
          context.dispatch('getOrder', orderID)
        } else {
          context.commit('LOADING', false)
        }
      })
    }
  },
  mutations: {
    LOADING (state, payload) {
      state.isLoading = payload
    },
    ORDER (state, payload) {
      state.order = payload
    }
  },
  getters: {
    order: state => state.order,
    isLoading: state => state.isLoading
  }
}
