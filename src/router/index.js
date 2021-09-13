import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Calculator from '../views/Calculator.vue'
import CountDown from '../views/CountDown.vue'
import CardView from '../views/CardView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    component: Calculator
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/countdown',
    name: 'CountDown',
    component: CountDown
  },
  {
    path: '/cards',
    name: 'CardView',
    component: CardView
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
    next()
})

export default router
