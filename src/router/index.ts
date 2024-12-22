import { createRouter, createWebHistory } from 'vue-router'
import FormDesign from '@/views/example/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FormDesign',
      component: FormDesign
    }
  ]
})

export default router
