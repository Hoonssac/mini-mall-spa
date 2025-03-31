import { createRouter, createWebHistory } from 'vue-router';

// 기본 페이지들
import Home from '@/pages/Home.vue';
import Cart from '@/pages/Cart.vue';

// /products 화면 분할용
import Products from '@/pages/Products.vue';
import CategoryFilter from '@/pages/CategoryFilter.vue';

// /products/:id 상세 및 탭
import ProductDetail from '@/pages/ProductDetail.vue';
import ProductDescription from '@/pages/ProductDescription.vue';
import ProductReview from '@/pages/ProductReview.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/products',
    name: 'products',
    components: {
      default: Products,
      left: CategoryFilter,
    },
  },
  {
    path: '/products/:id',
    name: 'productDetail',
    component: ProductDetail,
    children: [
      {
        path: '',
        name: 'productDescription', // ✅ 탭 라우트도 name 설정
        component: ProductDescription,
      },
      {
        path: 'review',
        name: 'productReview', // ✅ 탭 라우트도 name 설정
        component: ProductReview,
      },
    ],
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
