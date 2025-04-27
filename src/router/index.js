// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/views/Home.vue';
import Resume from '../components/views/Resume.vue';
import Blog from '../components/views/Blog.vue';
import MyFirstPost from '../components/views/MyFirstPost.vue'; // Import the new component

const routes = [
  { path: '/', component: Home },
  { path: '/resume', component: Resume },
  { path: '/blog', component: Blog },
  { path: '/blog/getting-started-with-aws', component: MyFirstPost }, // Add the new route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;