// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCarousel  from 'vue-carousel'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/*import Button from 'element-ui/packages/button'
import Dialog from 'element-ui/packages/dialog'*/

Vue.use(VueCarousel)
Vue.use(Element)
/*Vue.component(Button.name, Button)
Vue.component(Dialog.name, Dialog)*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
