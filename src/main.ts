import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@varlet/touch-emulator'
import { Locale } from '@varlet/ui'
import Graphql from '@/graphql'

Locale.add('en-US', Locale.enUS)
Locale.use('en-US')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/Auth.vue'),
      alias: '/auth',
    },
    {
      path: '/login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/profile',
      component: () => import('./views/Profile.vue'),
    },
  ],
})

createApp(App).use(router).use(Graphql).mount('#app')
