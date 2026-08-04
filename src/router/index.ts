import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/pages/index.vue'
import Login from '@/pages/login.vue'
import Dashboard from '@/pages/dashboard.vue'


const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [

    {
      path: '/',
      component: Index,
    },

    {
      path: '/login',
      component: Login,
    },

    {
      path: '/dashboard',
      component: Dashboard,
    },

  ],

})


export default router