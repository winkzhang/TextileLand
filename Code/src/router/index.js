import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/pages/IndexView'
import ProductDetail from '@/pages/ProductDetail'
import VendorDetail from '@/pages/VendorDetail'
import FirmOrder from '@/pages/FirmOrder'

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
    },
    {
      path: '/vendor',
      name: 'VendorDetail',
      component: VendorDetail
    },
    {
      path: '/firmorder',
      name: 'FirmOrder',
      component: FirmOrder
    }
  ]
})
