import Vue from 'vue'

import router from './router/router'
// buefy（类似elementUI）  基于bulma（类似bootstrap）的vue组件库
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// buefy不含图标只负责对接，index.html中外部引入图标库cdn，开发中本地路径需要配置webpack静态文件路由，麻烦，直接main.js引用
// material design icons v4.9.5
import '@/assets/css/materialdesignicons.min.css'
import './plugins/axios'

import App from './App.vue'


Vue.use(Buefy, {
  defaultIconPack: 'mdi',
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
