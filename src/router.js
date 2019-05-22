import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/manager_login',
      component: () => import('@/components/manager/manager_Login')
    },
    {
      path: '/admin',
      component: () => import('@/components/manager/manager_Dashboard'),
      children: [
        {
          path: '/',
          component: () => import('@/components/manager/manager_Products')
        },
        {
          path: 'manager_orders',
          component: () => import('@/components/manager/manager_Orders')
        },
        {
          path: 'manager_coupons',
          component: () => import('@/components/manager/manager_Coupons')
        }
      ]
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: () => import('./views/Navbar')
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          component: () => import('./views/IndexView'),
          children: [
            {
              path: '/',
              component: () => import('./views/News/News')
            },
            {
              path: 'newsheadet',
              component: () => import('./views/News/NewsHeadset')
            },
            {
              path: 'newstv',
              component: () => import('./views/News/NewsTv')
            },
            {
              path: 'newsmousepad',
              component: () => import('./views/News/NewsMousepad')
            },
            {
              path: 'newsmouse',
              component: () => import('./views/News/NewsMouse')
            },
            {
              path: 'newskeyboard',
              component: () => import('./views/News/NewsKeyboard')
            }
          ]
        },
        {
          path: 'productdetail/:id',
          name: 'productdetail',
          component: () => import('./views/ProductDetail')
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('./views/Cart')
        },
        {
          path: '/order',
          name: 'Order',
          component: () => import('./views/Order')
        },
        {
          path: 'checkout/:orderId',
          name: 'checkout',
          component: () => import('./views/Checkout')
        }
      ]
    }
  ]
})
