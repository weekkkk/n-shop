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
    name: 'default',
    path: '/',
    component: () => import('layout/components/header-layout'),
    redirect: { name: 'test' },
    children: [
      {
        path: '',
        name: 'test',
        component: () => import('layout/components/base-layout'),
        redirect: { name: 'basket' },
        children: [
          {
            path: 'basket',
            name: 'basket',
            component: () => import('@/pages/basket-page'),
          },
        ],
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
