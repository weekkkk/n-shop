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
    name: 'authorization',
    path: '/',
    component: () => import('layout/components/form-layout'),
    children: [
      {
        name: 'login',
        path: '/login',
        component: () => import('layout/components/form-layout'),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export { routes };
export default router;
