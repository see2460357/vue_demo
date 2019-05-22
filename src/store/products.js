import axios from 'axios'

export default {
  // state 區域變數
  // actions, muattions, getters 全域變數
  namespaced: true, // actions, muattions, getters 變為區域變數
  state: {
    products: [],
    categories: [],
    product: {}
  },
  actions: {
    getProducts (context) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then((response) => {
        context.commit('PRODUCTS', response.data.products)
        context.commit('CATEGORIES', response.data.products)
        context.commit('LOADING', false, { root: true })
      })
    },
    getProduct (context, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      context.commit('LOADING', true, { root: true })
      axios.get(api).then((response) => {
        console.log(response.data)
        context.commit('PRODUCT', response.data.product)
        context.commit('LOADING', false, { root: true })
      })
    }
  },
  mutations: {
    // 操作狀態 只做同步行為
    PRODUCTS (state, payload) {
      state.products = payload
    },
    PRODUCT (state, payload) {
      state.product = payload
    },
    CATEGORIES (state, payload) {
      const categories = new Set()
      payload.forEach((item) => {
        categories.add(item.category)
      })
      state.categories = Array.from(categories)
    }
  },
  getters: {
    categories (state) {
      return state.categories
    },
    products (state) {
      return state.products
    },
    product: state => state.product
  }
}
