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
    redirect: { name: 'login' },
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('authorization/components/authorazation-form'),
        meta: {
          title: 'Вход',
        },
      },
      {
        name: 'registration',
        path: 'registration',
        component: () => import('authorization/components/authorazation-form'),
        meta: {
          title: 'Регистрация',
        },
      },
      {
        name: 'activation',
        path: 'activation',
        component: () => import('authorization/components/activation-form'),
        meta: {
          title: 'Активация',
        },
      },
    ],
  },
  {
    name: 'default',
    path: '/',
    component: () => import('layout/components/header-layout'),
    redirect: { name: 'routes-with-aside' },
    children: [
      {
        name: 'routes-with-aside',
        path: '',
        component: () => import('layout/components/aside-layout'),
        redirect: { name: 'products' },
        children: [
          {
            name: 'products',
            path: '/products/:brandId?/:typeId?',
            components: {
              aside: () => import('product/components/product-filter'),
              main: () => import('product/pages/product-list-page'),
            },
            props: { aside: true, main: true },
          },
        ],
      },
      {
        name: 'routes',
        path: '',
        component: () => import('layout/components/base-layout'),
        redirect: { name: 'product' },
        children: [
          {
            name: 'product',
            path: '/product/:id',
            component: () => import('product/pages/product-page'),
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

import { useUserStore } from 'authorization/stores';
import { IUser } from 'authorization/interfaces';
/**
 * * Обработка переходов по роутам
 */
router.beforeEach(async (to, from, next) => {
  const { title } = to.meta;
  const brand = '';
  if (title) document.title = `${brand}${title as string}`;

  const userStore = useUserStore();

  if (!userStore.isAuthChecked) {
    await userStore.checkAuth();
  }

  const user: IUser | undefined = userStore.user;
  const toName = to.name?.toString() || '';

  const noAuthorazationRouteNames = ['login', 'registation', 'activation'];

  console.log({ toName, user });

  if (user && user.isActivated && noAuthorazationRouteNames.includes(toName)) {
    next({ name: 'default' });
  } else if (!user && toName != 'login' && toName != 'registration') {
    next({ name: 'login' });
  } else if (user && !user.isActivated && toName != 'activation') {
    next({ name: 'activation' });
  } else {
    next();
  }
});
