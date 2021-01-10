import Vue from 'vue'
import store from './store';
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8081';




new Vue({
  store,
  router,
  render: h => h(App)
  
}).$mount('#app')
