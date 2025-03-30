import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Cart from '@/pages/Cart.vue';
import Products from '@/pages/Products.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/products', name: 'products', component: Products },
  { path: '/cart', name: 'cart', component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
