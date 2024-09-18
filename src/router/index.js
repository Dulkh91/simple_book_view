import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BookView from '@/views/BookView.vue'
const routes = [
 {path: '/',component: HomeView,name: 'home'},
 {path: '/read/:id',component: BookView,name: 'read'}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
