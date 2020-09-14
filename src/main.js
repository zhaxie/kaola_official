import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {CommonBus, UniqueBus} from '@/assets/js/bus.js';


import selfGlobalComponents from '@/assets/js/selfGlobalComponents.js';
// import globalMethods from '@/assets/js/globalMethods.js';

import '@/assets/css/xx-base.css';
import '@/assets/css/animate.css';


Vue.prototype.$bus = new CommonBus();         //bus工具
Vue.prototype.$bus_unique = new UniqueBus();  //单一bus（仅供订阅一次）


Vue.use(selfGlobalComponents);
// Vue.use(globalMethods);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
