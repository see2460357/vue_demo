import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import alertModules from '../alert'
import productsModules from './products'
import ordersModules from './orders'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    cart: {
      carts: []
    }
  },
  actions: {
    // 操作行為, 不能直接操作
    updateLoading (context, status) {
      // context為固定
      context.commit('LOADING', status)
    },
    getCart (context) {
      context.commit('LOADING', true)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      axios.get(api).then((response) => {
        if (response.data.data.carts) {
          context.commit('CART', response.data.data)
        }
        context.commit('LOADING', false)
        console.log('取得購物車')
      })
    },
    removeCart (context, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      context.commit('LOADING', true)
      axios.delete(api).then((response) => {
        context.dispatch('getCart')
        context.commit('LOADING', false)
        console.log('刪除購物車內容')
      })
    },
    addToCart (context, { id, qty }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('LOADING', true)
      const cart = {
        product_id: id,
        qty
      }
      axios.post(api, { data: cart }).then((response) => {
        context.commit('LOADING', false)
        context.dispatch('getCart')
        console.log(response.data)
      })
    },
    addCouponCode (context, couponCode) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const coupon = {
        code: couponCode
      }
      context.commit('LOADING', true)
      axios.post(url, { data: coupon }).then((response) => {
        if (response.data.success) {
          context.dispatch('getCart')
          context.commit('LOADING', false)
        } else {
          context.dispatch('getCart')
          context.commit('LOADING', false)
        }
      })
    }
  },
  mutations: {
    // 操作狀態 只做同步行為
    LOADING (state, status) {
      state.isLoading = status
    },
    CART (state, payload) {
      state.cart = payload
    }
  },
  getters: {
    isLoading: state => state.isLoading,
    cart: state => state.cart
  },
  modules: {
    productsModules,
    ordersModules,
    alertModules
  }
})
