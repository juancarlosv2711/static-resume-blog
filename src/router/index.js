// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/views/Home.vue';
import Resume from '../components/views/Resume.vue';
import Blog from '../components/views/Blog.vue';
import StaticWebsiteHosting from '../components/views/posts/StaticWebsiteHosting.vue'; 
import Project from '../components/views/Project.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/resume', component: Resume },
  { path: '/blog', component: Blog },
  { path: '/blog/static-website-hosting', component: StaticWebsiteHosting },
  { path: '/projects', component: Project },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;