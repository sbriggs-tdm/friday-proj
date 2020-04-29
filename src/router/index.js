import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/desserts-form',
    name: 'DessertsForm',
    component: () => import('@/views/DessertsForm.vue')
  },
  {
    path: '/desserts-table',
    name: 'DessertsTable',
    component: () => import('@/views/DessertsTable.vue')
  },
  {
    path: '/todos-table',
    name: 'TodosTable',
    component: () => import('@/views/TodosTable.vue')
  },
  {
    path: '/responsiveness',
    name: 'ResponsiveNess',
    component: () => import('@/views/Responsiveness.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
