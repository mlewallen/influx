import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Badge from '../views/Badge.vue'
import Email from '../views/Email.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      icon: 'mdi-home-outline',
      title: 'Home'
    }
  },
  {
    path: '/badge',
    name: 'Badge',
    component: Badge,
    meta: {
      icon: 'mdi-shield-check-outline',
      title: 'Badge Creator'
    }
  },
  {
    path: '/email',
    name: 'Email',
    component: Email,
    meta: {
      icon: 'mdi-at',
      title: 'Email Signature'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
