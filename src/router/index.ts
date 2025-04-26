import { createRouter, createWebHistory } from 'vue-router'
// 使用动态导入替代静态导入以解决模块未找到的问题
const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 路由懒加载
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router