import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductListView from '../views/ProductListView.vue'
import ProductDetailsView from '../views/ProductDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    { path: "/", component: ProductListView },
    { path: "/product/:id", component: ProductDetailsView },
  ]
})

export default router
