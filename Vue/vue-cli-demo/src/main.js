import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config'
const router = new VueRouter(routerConfig);
Vue.use(VueRouter);
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
