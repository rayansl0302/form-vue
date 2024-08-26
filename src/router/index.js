import { createRouter, createWebHistory } from 'vue-router';
import CriarParceiro from '@/components/CriarParceiro.vue';

const routes = [
  {
    path: '/criar-parceiro',
    name: 'CriarParceiro',
    component: CriarParceiro,
  },
  // Outras rotas
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
