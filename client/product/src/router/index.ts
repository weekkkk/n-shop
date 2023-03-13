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
        redirect: {
          name: 'product-list',
        },
        children: [
          {
            name: 'product-list',
            path: '/product-list/:brandId?/:typeId?',
            components: {
              aside: () =>
                import('@/components/product-filter/product-filter.vue'),
              main: () =>
                import('@/pages/product-list-page/product-list-page.vue'),
            },
            props: { aside: true, main: true },
          },
        ],
      },
      {
        name: 'test2',
        path: '',
        component: () => import('layout/components/base-layout'),
        children: [
          {
            name: 'product',
            path: 'product/:id',
            component: () => import('@/pages/product-page/product-page.vue'),
            props: true,
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
