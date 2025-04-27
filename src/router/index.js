// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/views/Home.vue';
import Resume from '../components/views/Resume.vue';
import Blog from '../components/views/Blog.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/resume', component: Resume },
  { path: '/blog', component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;