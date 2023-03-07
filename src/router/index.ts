import { createRouter, createWebHistory } from 'vue-router'
import {
  HomeView,
  AboutView,
  AdmissionView,
  CommunityView,
  CurriculumView
} from '../views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/admission',
      name: 'admission',
      component: AdmissionView
    },
    {
      path: '/community',
      name: 'community',
      component: CommunityView
    },
    {
      path: '/curriculum',
      name: 'curriculum',
      component: CurriculumView
    }
  ]
})

export default router
