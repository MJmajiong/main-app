import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
  {
    name: 'sub-app', // app name registered
    entry: '//localhost:8099',
    container: '#vue-app',
    activeRule: '/active',
  },
  // {
  //   name: 'vue app',
  //   entry: { scripts: ['//localhost:7100/main.js'] },
  //   container: '#yourContainer2',
  //   activeRule: '/yourActiveRule2',
  // },
]);
start();
