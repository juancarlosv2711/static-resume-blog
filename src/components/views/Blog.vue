<template>
  <div class="blog">
    <div class="construction-banner">
      <div class="construction-content">
        <span class="construction-icon">🚧</span>
        <h2>Blog Under Construction</h2>
        <p>
          Exciting content coming soon! I'm currently building out this section
          with my latest articles and tutorials.
        </p>
      </div>
    </div>

    <h1>My Developer Blog</h1>

    <!-- Blog post list -->
    <div v-for="post in posts" :key="post.slug" class="post-card">
      <h2>
        <router-link :to="`/blog/${post.slug}`">{{ post.title }}</router-link>
      </h2>
      <p class="post-date">{{ post.date }}</p>
      <p class="post-excerpt">{{ post.excerpt }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogView",
  data() {
    return {
      posts: [
        {
          slug: "static-website-hosting",
          title: "Hosting Static Website in S3 AWS Bucket and CloudFront",
          date: "2023-10-15",
          excerpt: "How I deployed my first static site to S3 and CloudFront",
        },
      ],
    };
  },
};
</script>

<style scoped>
.blog {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
}

.construction-banner {
  background-color: #fff9e6;
  border-left: 4px solid #ffd700;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.construction-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
}

.construction-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.construction-banner h2 {
  color: #d4a017;
  margin: 0;
}

.construction-banner p {
  color: #666;
  margin: 0;
  max-width: 600px;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.post-card {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
  transition: transform 0.2s ease;
}

.post-card:hover {
  transform: translateX(5px);
}

.post-card h2 {
  margin-bottom: 0.5rem;
}

.post-card h2 a {
  color: #2c3e50;
  text-decoration: none;
}

.post-card h2 a:hover {
  color: #42b983;
  text-decoration: underline;
}

.post-date {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.post-excerpt {
  color: #555;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .blog {
    padding: 1.5rem;
  }

  .construction-banner {
    padding: 1rem;
  }

  .construction-icon {
    font-size: 2rem;
  }
}
</style>
