import type { RouterHistory, RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';

const history: RouterHistory = createWebHistory(import.meta.env.BASE_URL);

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '',
    component: () => null,
    beforeEnter: (_: RouteLocationNormalized, __: RouteLocationNormalized, next: NavigationGuardNext) => {
      next('/home');
    },
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;
