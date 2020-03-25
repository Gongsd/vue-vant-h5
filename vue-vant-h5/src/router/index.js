import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const router = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/home/index'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/news/news'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/addNews/:id',
    name: 'addNews',
    component: () => import('@/views/news/addNews'),
    
    // meta: {
    //   keepAlive: false
    // }
  },
  {
    path: '/login/',
    name: 'login',
    component: () => import('@/views/user/login'),
    
    // meta: {
    //   keepAlive: false
    // }
  }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
    // base: '/app/',
    scrollBehavior: () => ({y: 0}),
    routes: router
  })

export default createRouter()
