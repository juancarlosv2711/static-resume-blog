<template>
  <div class="app-container">
    <Sidebar />
    <div class="content">
      <header>
        <!-- Removed the old nav -->
      </header>
      <main>
        <router-view></router-view>
        <!-- 👈 Renders the current route -->
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/navigation/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>

<style>
.app-container {
  display: flex;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 1rem;
  transition: margin-left 0.3s ease;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

/* Desktop styles - sidebar visible */
@media (min-width: 769px) {
  .content {
    margin-left: 250px; /* Matches the sidebar width */
    padding: 2rem;
  }
}

/* Mobile styles - sidebar hidden by default */
@media (max-width: 768px) {
  .content {
    margin-left: 0;
    padding-top: 60px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>
