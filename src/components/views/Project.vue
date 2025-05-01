<template>
  <div class="projects">
    <div class="construction-banner">
      <div class="construction-content">
        <span class="construction-icon">🚧</span>
        <h2>Projects Under Construction</h2>
        <p>
          Exciting projects coming soon! I'm currently working on some amazing
          projects that I can't wait to share with you.
        </p>
      </div>
    </div>

    <h1>My Projects</h1>

    <!-- Project list will go here -->
    <div class="coming-soon">
      <p>Stay tuned for my upcoming projects!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectView",
  data() {
    return {
      projects: [], // Will be populated with projects in the future
    };
  },
};
</script>

<style scoped>
.projects {
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

.coming-soon {
  text-align: center;
  color: #7f8c8d;
  font-style: italic;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .projects {
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
