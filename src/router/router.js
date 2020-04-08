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
  // 每个作品详情页设计可能不一样，公共部分很少只有头部，暂时不做成组件、路由嵌套，那样反而麻烦。所以写成固定路由。
  // --------------------------------
  {
    path: '/works_detail/my_nginx',
    name: 'WorksDetailMyNginx',
    component: () => import('../views/works_detail/MyNginx.vue')
  },
  {
    path: '/works_detail/my_goaccess',
    name: 'WorksDetailMyGoaccess',
    component: () => import('../views/works_detail/MyGoaccess.vue')
  },
  // {
  //   path: '/test',
  //   name: 'Test',
  //   component: () => import('../views/Test.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',  // 需要web服务器如nginx配置支持
  routes
})

export default router
