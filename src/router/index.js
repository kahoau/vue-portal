import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import CalculatorView from '../views/CalculatorView.vue'
import CountDownView from '../views/CountDownView.vue'
import QuoteView from '../views/QuoteView.vue'
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
    component: CalculatorView
  },
  {
    path: '/calculator',
    name: 'CalculatorView',
    component: CalculatorView
  },
  {
    path: '/countdown',
    name: 'CountDownView',
    component: CountDownView
  },
  {
    path: '/quotes',
    name: 'QuoteView',
    component: QuoteView
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
  routes
})

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
    next()
})

export default router
