import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'uno.css'
import '@/styles/index.scss'

import { createApp } from 'vue'
import router from '@/router'
import pinia from '@/stores'
import { Icon } from '@iconify/vue'
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(Icons)) {
  app.component(key, component)
}
app.use(pinia).use(router).component('Iconify', Icon).mount('#app')
