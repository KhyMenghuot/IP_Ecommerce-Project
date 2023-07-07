import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.css'

const app = createApp(App)

app.use(router)

//app.mount('#app')// is use simple

//get from ant design 
import antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css";
app.use(antd).mount('#app') // for this is use both in "antd"

// // flugin bootstrep
// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// // Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project


