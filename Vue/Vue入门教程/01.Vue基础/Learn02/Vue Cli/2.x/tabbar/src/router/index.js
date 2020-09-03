import Vue from 'vue'
import Router from 'vue-router'

// import Home =()=>
const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Category")
const Car = () => import("../views/car/Car")
const Profile = () => import("../views/profile/Profile")

Vue.use(Router)

//解决 在vue项目中两次点击相同路由报错问题
//push 
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/category'
  },
  {
    path: '/home',
    component: Home,
    name: 'Home',
    meta: {
      title: '主页'
    }
  },
  {
    path: '/category',
    component: Category,
    name: 'Category',
    meta: {
      title: '分类'
    }
  },
  {
    path: '/car',
    component: Car,
    name: 'Car',
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
    name: 'Profile',
    meta: {
      title: '我的'
    }
  }
]

const router = new Router({
  routes
})

export default router
