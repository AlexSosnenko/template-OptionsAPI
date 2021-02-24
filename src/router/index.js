import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'
const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main', auth: true },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty', auth: false },
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'empty', auth: false },
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/help',
    name: 'help',
    meta: { layout: 'main', auth: true },
    component: () => import('@/views/Help.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'main', auth: true },
    component: () => import('@/views/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

// защита роутов...
router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth
  if (requireAuth && store.getters['isAuthenticated']) {
    next()
  } else if (requireAuth && !store.getters['isAuthenticated']) {
    next('/login?message=auth')
  } else {
    next()
  }
})

export default router
