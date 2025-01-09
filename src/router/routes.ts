/**
 * SPA Route List
 *
 */
import type { RouteRecordRaw } from 'vue-router'
import HomePageView from '@/views/HomePageView.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: HomePageView,
  },
]
