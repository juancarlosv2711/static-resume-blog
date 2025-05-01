<template>
  <div>
    <!-- Hamburger menu button for mobile -->
    <button
      class="hamburger"
      @click="toggleMenu"
      :class="{ 'is-active': isMenuOpen }"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <!-- Sidebar with mobile-friendly classes -->
    <aside class="sidebar" :class="{ 'mobile-open': isMenuOpen }">
      <div class="profile-section">
        <ImageView :src="retrato" alt="Your Name" />
        <h1 class="name">Juan Velasquez</h1>
        <p class="title">Full Stack Developer</p>
      </div>

      <nav>
        <ul>
          <li>
            <router-link to="/" @click="closeMenuOnMobile">Home</router-link>
          </li>
          <li>
            <router-link to="/resume" @click="closeMenuOnMobile"
              >Resume</router-link
            >
          </li>
          <li>
            <router-link to="/blog" @click="closeMenuOnMobile"
              >Blog</router-link
            >
          </li>
          <li>
            <router-link to="/projects" @click="closeMenuOnMobile"
              >Projects</router-link
            >
          </li>
        </ul>
      </nav>

      <div class="contact-section">
        <h2>Contact</h2>
        <div class="contact-info">
          <a href="mailto:your.email@example.com" class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>juancarlosv2711@gmail.com</span>
          </a>
          <a href="tel:+1234567890" class="contact-item">
            <i class="fas fa-phone"></i>
            <span>+506 8842-9615</span>
          </a>
          <a
            href="https://maps.google.com"
            target="_blank"
            class="contact-item"
          >
            <i class="fas fa-map-marker-alt"></i>
            <span>Heredia, Costa Rica</span>
          </a>
        </div>
      </div>

      <div class="skills-section">
        <h2>Skills</h2>
        <div class="skills-list">
          <span class="skill-tag">Golang</span>
          <span class="skill-tag">JavaScript</span>
          <span class="skill-tag">Vue.js</span>
          <span class="skill-tag">PHP</span>
          <span class="skill-tag">SQL</span>
          <span class="skill-tag">AWS</span>
          <span class="skill-tag">Docker</span>
          <span class="skill-tag">Git</span>
          <span class="skill-tag">CI/CD</span>
          <span class="skill-tag">Github Actions</span>
        </div>
      </div>

      <div class="social-section">
        <h2>Connect</h2>
        <div class="social-links">
          <a
            href="https://github.com/juancarlosv2711"
            target="_blank"
            class="social-link"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/juan-velasquez-51762814a/"
            target="_blank"
            class="social-link"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://x.com/Juanvelasqzdev"
            target="_blank"
            class="social-link"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </aside>

    <!-- Overlay for mobile when menu is open -->
    <div
      class="overlay"
      :class="{ active: isMenuOpen }"
      @click="toggleMenu"
    ></div>
  </div>
</template>

<script>
import ImageView from "../../components/widgets/ImageView.vue";
import retrato from "@/assets/retrato.jpg";

export default {
  name: "Sidebar",
  data() {
    return {
      retrato,
      isMenuOpen: false,
      isMobile: false,
    };
  },
  components: {
    ImageView,
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenuOnMobile() {
      if (this.isMobile) {
        this.isMenuOpen = false;
      }
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768;
      if (!this.isMobile) {
        this.isMenuOpen = false;
      }
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>

<style scoped>
.sidebar {
  width: 280px;
  background-color: #ffffff;
  padding: 2rem;
  height: 100vh;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.profile-section {
  text-align: center;
  margin-bottom: 2rem;
}

.name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 1rem 0 0.5rem;
}

.title {
  font-size: 1rem;
  color: #666;
  margin: 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  width: 100%;
}

.sidebar li {
  margin: 1rem 0;
}

.sidebar a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  display: block;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.sidebar a:hover {
  color: #3498db;
  background-color: #f8f9fa;
}

.sidebar a.router-link-active {
  color: #3498db;
  background-color: #f8f9fa;
  font-weight: 600;
}

.contact-section,
.skills-section,
.social-section {
  width: 100%;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
  word-break: break-word;
}

.contact-item:hover {
  color: #3498db;
}

.contact-item i {
  width: 20px;
  text-align: center;
  margin-top: 3px;
}

.contact-item span {
  flex: 1;
  line-height: 1.4;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background-color: #f8f9fa;
  color: #2c3e50;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background-color: #3498db;
  color: white;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-link {
  color: #666;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #3498db;
}

/* Hamburger menu styles */
.hamburger {
  display: none;
  padding: 15px;
  cursor: pointer;
  background: transparent;
  border: none;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 101;
}

.hamburger-box {
  width: 30px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  width: 100%;
  height: 3px;
  background-color: #333;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.15s ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  width: 100%;
  height: 3px;
  background-color: #333;
  position: absolute;
  left: 0;
  transition: transform 0.15s ease;
}

.hamburger-inner::before {
  top: -10px;
}

.hamburger-inner::after {
  top: 10px;
}

.hamburger.is-active .hamburger-inner {
  transform: rotate(45deg);
}

.hamburger.is-active .hamburger-inner::before {
  transform: translateY(10px) rotate(90deg);
}

.hamburger.is-active .hamburger-inner::after {
  transform: translateY(-10px) rotate(90deg);
}

/* Overlay for mobile */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Mobile styles */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar.mobile-open {
    transform: translateX(0);
  }
}
</style>
