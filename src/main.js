import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import store from '@/store/index'
import dataV from '@jiaminghi/data-view'
import VueRouter from 'vue-router'
import router from './router/index'
import './assets/style/font1.less'

window._AMapSecurityConfig = {
  securityJsCode: 'b387338487cee9e1a35360c3210cca25'
}

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(dataV)
Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
