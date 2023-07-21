
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.css'
const app = createApp(App)

app.use(router)

// //get from ant design 
import antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css";
app.use(antd).mount('#app') // for this is use both in "antd"

// // flugin bootstrep
//import Vue from "vue";
//import store from "./store";
//import App from "./App.vue";
//import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import Bootstrap and BootstrapVue CSS files (order is important)


//createApp(App).mount('#app')


