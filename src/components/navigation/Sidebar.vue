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
      <ImageView :src="retrato" alt="Your Name" />
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
        </ul>
      </nav>
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
  width: 250px;
  background-color: #f4f4f4;
  padding: 1rem;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease;
  z-index: 100;
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
  display: block;
  padding: 0.5rem 0;
}

.sidebar a:hover {
  color: #007bff;
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
