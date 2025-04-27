<template>
  <aside class="sidebar">
    <ImageView :src="retrato" alt="Your Name" />
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/resume">Resume</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import ImageView from "../../components/widgets/ImageView.vue";
import retrato from '@/assets/retrato.jpg';

export default {
  name: "Sidebar",
  data() {
    return {
      retrato, // <- making retrato available for template
    };
  },
  components: {
    ImageView,
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f4f4f4;
  padding: 1rem;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin: 1rem 0;
}

.sidebar a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.sidebar a:hover {
  color: #007bff;
}
</style>