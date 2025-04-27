<template>
  <div class="post">
    <h1>Getting Started with AWS</h1>
    <p class="post-date">Published on: 2023-10-15</p>
    <div class="post-content">
      <p>
        In this post, I will share my experience deploying my first static site
        to AWS S3 and CloudFront. It was an exciting journey that taught me a
        lot about cloud infrastructure and deployment best practices.
      </p>
      <!-- Add more content here -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFirstPost",
};
</script>

<style scoped>
.post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.post-date {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.post-content {
  line-height: 1.6;
  color: #555;
}
</style>
