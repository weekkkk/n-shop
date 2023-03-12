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
    name: 'authorazation',
    path: '/',
    component: () => import('@/layouts/form-layout.vue'),
    redirect: { name: 'login' },
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('@/forms/authorazation-form.vue'),
        meta: {
          title: 'Вход',
        },
      },
      {
        name: 'registration',
        path: 'registration',
        component: () => import('@/forms/authorazation-form.vue'),
        meta: {
          title: 'Регистрация',
        },
      },
      {
        name: 'activation',
        path: 'activation',
        component: () => import('@/forms/activation-form.vue'),
        meta: {
          title: 'Активация',
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
