import Vue from 'vue'
import VueRouter from 'vue-router'
import Calculator from '../views/Calculator.vue'
import Card from '../views/Card.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Calculator',
    component: Calculator,
  },
  {
    path: '/cards',
    name: 'Card',
    component: Card,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
    next()
})

export default router
