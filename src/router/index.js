import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
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
  {
    path: '/case/caseDetails',
    name: 'caseDetails',
    component: () => import('@/views/case/caseDetails.vue'),
  },
  {
    path: '/about/aboutUs',
    name: 'aboutUs',
    component: () => import('@/views/about/aboutUs.vue'),
  },
  {
    path: '/other/contactUs',
    name: 'contactUs',
    component: () => import('@/views/other/contactUs.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
