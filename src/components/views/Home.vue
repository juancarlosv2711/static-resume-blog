<!-- Add at least a <template> or <script> -->
<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="glitch" data-text="Hello World">Hello World</h1>
        <p class="typing-text">
          I'm Juan, a Software Developer passionate about building scalable
          solutions.
        </p>
      </div>
    </section>

    <section class="current-focus">
      <h2>What I'm Currently Working On</h2>
      <div class="focus-grid">
        <div class="focus-card">
          <i class="fas fa-code"></i>
          <h3>Learning & Development</h3>
          <p>
            Exploring new technologies and best practices in software
            architecture
          </p>
        </div>
        <div class="focus-card">
          <i class="fas fa-pen"></i>
          <h3>Writing</h3>
          <p>Sharing knowledge through technical blog posts and tutorials</p>
        </div>
        <div class="focus-card">
          <i class="fas fa-project-diagram"></i>
          <h3>Open Source</h3>
          <p>Contributing to open-source projects and building my own</p>
        </div>
      </div>
    </section>

    <section class="latest-activity">
      <h2>Latest Activity</h2>
      <div class="activity-timeline">
        <div class="timeline-item">
          <div class="timeline-content">
            <h3>Published New Blog Post</h3>
            <p>
              Wrote about deploying static websites to AWS S3 and CloudFront
            </p>
            <router-link to="/blog/static-website-hosting" class="read-more"
              >Read Post →</router-link
            >
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <h3>Started New Project</h3>
            <p>
              Working on a new microservices architecture using Go and Vue.js
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="tech-stack">
      <h2>Tech Stack</h2>
      <div class="stack-grid">
        <div class="stack-category">
          <h3>Frontend</h3>
          <div class="stack-items">
            <span class="stack-item">Vue.js</span>
            <span class="stack-item">JavaScript</span>
            <span class="stack-item">TypeScript</span>
          </div>
        </div>
        <div class="stack-category">
          <h3>Backend</h3>
          <div class="stack-items">
            <span class="stack-item">Golang</span>
            <span class="stack-item">PHP</span>
            <span class="stack-item">Node.js</span>
          </div>
        </div>
        <div class="stack-category">
          <h3>Infrastructure</h3>
          <div class="stack-items">
            <span class="stack-item">Docker</span>
            <span class="stack-item">AWS</span>
            <span class="stack-item">MySQL</span>
            <span class="stack-item">PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>

    <section class="connect">
      <h2>Let's Connect</h2>
      <p>
        I'm always open to discussing new projects, ideas, or opportunities.
      </p>
      <div class="social-links">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          class="social-link"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          class="social-link"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:juancarlosv2711@gmail.com" class="social-link">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #2c3e50 0%, #42b983 100%);
  color: white;
  margin: -2rem -2rem 2rem -2rem;
  padding: 2rem;
}

.hero-content {
  max-width: 800px;
}

.glitch {
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
  animation: glitch 725ms infinite;
}

.typing-text {
  font-size: 1.5rem;
  margin-top: 1rem;
  opacity: 0.9;
}

.current-focus,
.latest-activity,
.tech-stack,
.connect {
  padding: 4rem 0;
}

h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.focus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.focus-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.focus-card:hover {
  transform: translateY(-5px);
}

.focus-card i {
  font-size: 2.5rem;
  color: #42b983;
  margin-bottom: 1rem;
}

.activity-timeline {
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  margin-bottom: 2rem;
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(5px);
}

.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.stack-category {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stack-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.stack-item {
  background: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #2c3e50;
}

.connect {
  text-align: center;
  background: #f8f9fa;
  padding: 4rem;
  border-radius: 8px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.social-link {
  color: #2c3e50;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #42b983;
}

.read-more {
  color: #42b983;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: 0.5rem;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
      -0.04em -0.025em 0 #fffc00;
  }
}

@media (max-width: 768px) {
  .hero {
    height: auto;
    padding: 4rem 2rem;
  }

  .glitch {
    font-size: 2.5rem;
  }

  .typing-text {
    font-size: 1.2rem;
  }

  .timeline-content {
    margin: 0;
  }
}
</style>
