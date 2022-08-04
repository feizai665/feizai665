import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/vant'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
