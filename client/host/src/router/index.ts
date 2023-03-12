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
    ],
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export { routes };
export default router;
