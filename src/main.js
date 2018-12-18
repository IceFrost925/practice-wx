import Vue from 'vue'
import App from './App'
import store from './Vuex/store'
import fly from './http/config'
import MpvueRouterPatch from 'mpvue-router-patch'


Vue.prototype.$http=fly //将fly实例挂在vue原型上
Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

Vue.prototype.$store=store;