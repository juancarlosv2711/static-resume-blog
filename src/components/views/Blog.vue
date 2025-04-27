<template>
    <div class="blog">
      <h1>My Developer Blog</h1>
      
      <!-- Blog post list -->
      <div v-for="post in posts" :key="post.slug" class="post-card">
        <h2>
          <router-link :to="`/blog/${post.slug}`">{{ post.title }}</router-link>
        </h2>
        <p>{{ post.date }}</p>
        <p>{{ post.excerpt }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogView',
    data() {
      return {
        posts: [
          {
            slug: 'my-first-post',
            title: 'Getting Started with AWS',
            date: '2023-10-15',
            excerpt: 'How I deployed my first static site to S3 and CloudFront'
          },
          {
            slug: 'vue-tips',
            title: 'Vue.js Best Practices',
            date: '2023-11-02',
            excerpt: 'Lessons learned from building production Vue apps'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .blog {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .post-card {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;
  }
  </style>