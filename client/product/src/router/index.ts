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
    redirect: {
      name: 'product-list',
    },
    children: [
      {
        name: 'test',
        path: '',
        component: () => import('layout/components/aside-layout'),
        children: [
          {
            name: 'product-list',
            path: '/product-list/:brandId?/:typeId?',
            components: {
              main: () =>
                import('@/pages/product-list-page/product-list-page.vue'),
            },
            props: { main: true },
          },
        ],
      },
      {
        name: 'product',
        path: '/product/:id',
        component: () => import('@/pages/product-page/product-page.vue'),
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
