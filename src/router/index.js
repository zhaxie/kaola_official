import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/news/newsDetails',
    name: 'newsDetails',
    component: () => import('@/views/news/newsDetails.vue'),
  },
  {
    path: '/news/newsList',
    name: 'newsList',
    component: () => import('@/views/news/newsList.vue'),
  },
  {
    path: '/case/caseList',
    name: 'caseList',
    component: () => import('@/views/case/caseList.vue'),
  },

]

const router = new VueRouter({
  routes
})

export default router
