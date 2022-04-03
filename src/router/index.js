import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue'),
  },
  // {
  //   path: '/products/:category', // :category 動態參數手法(要加 : )，篩選商品類別
  //   name: 'productsCategory',
  //   component: () => import('../views/ProductsView.vue'),
  // },
  {
    path: '/product/:id', // :id 動態參數手法(要加 : )，單一產品頁
    name: 'product',
    component: () => import('../views/ProductView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
