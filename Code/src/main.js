// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueReasource from 'vue-resource'
import VueCarousel  from 'vue-carousel'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './config/api'

Vue.use(VueReasource)
Vue.use(VueCarousel)
Vue.use(Element)
Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$api', {
  value: api
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
