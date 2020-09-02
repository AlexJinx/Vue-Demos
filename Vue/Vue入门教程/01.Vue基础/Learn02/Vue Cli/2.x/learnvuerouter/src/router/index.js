import Vue from 'vue'
import Router from 'vue-router'
// import route from '../router'

//原生写法
// import Home from '../components/Home'

//路由懒加载写法
// const Home = () => import('@/components/Home')
// const HomeNews = () => import('@/components/HomeNews')
// const HomeMsg = () => import('@/components/HomeMsg')
// const About = () => import('@/components/About')
// const Profile = () => import('@/components/Profile')

//默认路由 使用懒加载，在app.vue里面无法获取到真实的路由，而是获取的根路由(/)
import Home from '@/components/Home'
import HomeNews from '@/components/HomeNews'
const HomeMsg = () => import('@/components/HomeMsg')
const About = () => import('@/components/About')
const Profile = () => import('@/components/Profile')



Vue.use(Router)

const routes = [
  {
    path: '',
    name: 'Root',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: Home,
    name: 'Home',
    meta: {
      title: '主页',
      keepAlive: true
    },
    children: [
      {
        path: '',
        name: 'HomeRoot',
        redirect: 'News'
      },
      {
        path: 'News',
        name: 'HomeNews',
        component: HomeNews,
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'Msg',
        name: 'HomeMsg',
        component: HomeMsg,
        meta: {
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/About',
    name: 'About',
    component: About,
    meta: {
      title: '关于',
      keepAlive: false
    }
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '我的',
      keepAlive: false
    }
  }
]


const router = new Router({
  routes,
  // mode: 'history',
  // linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
