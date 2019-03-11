import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'

import './assets/common.css'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$store = store

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.requireAuth === true) {
    const token = store.state.token
    if (to.path === '/login') next()
    if (token === '10000') {
      next()
    } else {
      next({ name: 'login'})
    }
  }
  next()
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
