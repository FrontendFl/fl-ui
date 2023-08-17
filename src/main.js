import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import baseComponents from '@/commons/baseComponents'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale }).use(baseComponents)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
