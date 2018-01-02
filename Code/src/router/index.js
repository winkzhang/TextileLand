import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/pages/IndexView'
import ProductDetail from '@/pages/ProductDetail'
import VendorDetail from '@/pages/VendorDetail'
import FirmOrder from '@/pages/FirmOrder'
import GoPay from '@/pages/GoPay'
import MyOrder from '@/pages/MyOrder'

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
    },
    {
      path: '/pay',
      name: 'GoPay',
      component: GoPay
    },
    {
      path: '/myorder',
      name: 'MyOrder',
      component: MyOrder
    }

  ]
})
