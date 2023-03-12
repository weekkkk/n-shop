import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

/**
 * * Роуты
 */
const routes: Array<RouteRecordRaw> = [
  {
    name: 'def',
    path: '/',
    component: () => import('@/App.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export { routes };
export default router;
