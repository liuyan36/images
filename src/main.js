import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './mock/mockServer'  //记载mockServer即可

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 使用vuex
  render: h => h(App)
})
