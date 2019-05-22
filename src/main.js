import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import 'animate.css'
// 自定義
import './bus'
import './assets/style.sass'
import './assets/media.sass'
import store from './store/index'
import pagination from '@/components/Pagination'
import currencyFilter from './filters/currency'
import dateFilter from './filters/date'
// 第三方套件
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vue-loading-overlay/dist/vue-loading.css'
import Loading from 'vue-loading-overlay'
import VeeValidate from 'vee-validate'
import zhTWValidate from 'vee-validate/dist/locale/zh_TW'
Vue.config.productionTip = false
axios.defaults.withCredentials = true
// 全域使用
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.component('Loading', Loading)
Vue.component('pagination', pagination)
Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)
Vue.use(VeeValidate, { events: 'change' })
VeeValidate.Validator.localize('zh_TW', zhTWValidate)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
