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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/Works.vue')
  },
  // ======== works_detail ==========
  // 动态路由 https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html   嵌套路由适用组件嵌套情况
  {
    // 作品详情，需要markdown文件的
    // eg.  /works_detail/my_nginx
    path: '/works_detail/:work_name',
    name: 'WorksDetail',
    component: () => import('../views/WorksDetail.vue')
  },
  {
    // 作品详情，需要视频教程类的
    // eg.  /works_video/my_python_video_base
    path: '/works_video/:work_name',
    name: 'WorksVideo',
    component: () => import('../views/WorksVideo.vue')
  },
  {
    path: '/donate',
    name: 'Donate',
    component: () => import('../views/Donate.vue')
  },
  // test
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',  // 需要web服务器如nginx配置支持
  routes
})

export default router
