import { createRouter, createWebHistory } from 'vue-router';
import Pokemon from '../components/Pokemon.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Pokemon // Usar o componente Pokemon para a rota home
    },
    {
      path: '/about',
      name: 'about',
      component: Pokemon // Usar o componente Pokemon para a rota about
    }
  ]
});

export default router;
