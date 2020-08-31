import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

const routers = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

export default new Router({
  routers,
  // mode: 'history',
  linkActiveClass: 'active'
})
