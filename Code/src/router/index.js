import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/pages/IndexView'
import ProductDetail from '@/pages/ProductDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '#',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'IndexView',
      component: IndexView
    },
    {
      path: '/product',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
