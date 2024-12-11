import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../view/App.vue';
import CategoryPage from '../view/CategoryPage.vue';
import ProductDetailPage from '../view/ProductDetailPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/categories/:categoryId', name: 'CategoryPage', component: CategoryPage },
  { path: '/products/:productId', name: 'ProductDetailPage', component: ProductDetailPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
