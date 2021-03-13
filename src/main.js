import Vue from 'vue'
import App from './App.vue'
import router from '@/routers'
import store from "@/store";
// import {request} from "@/network";
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
var axios = require('axios')
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:8443/api'
Vue.config.productionTip = false
// Vue.prototype.$axios = request()
Vue.use(ElementUI)
//使用前置守卫 判断访问的路径是否需要登录，如果需要，判断 store 里有没有存储 user 的信息，如果存在，则放行，否则跳转到登录页面，
router.beforeEach((to, from, next) => {
      if (to.meta.requireAuth) {
        if (store.state.user.username) {
          // console.log(store.state.user);
          next()
        } else {
            console.log(store.state.user.username);
          next({
            path: 'login',
            query: {redirect: to.fullPath}
          })
        }
      } else {
        next()
      }
    }
)



new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
