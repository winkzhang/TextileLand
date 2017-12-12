import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/components/IndexView'

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
    }
  ]
})
