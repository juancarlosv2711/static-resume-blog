<template>
  <div class="app-container">
    <Sidebar />
    <div class="content">
      <header>
        <!-- Removed the old nav -->
      </header>
      <main>
        <router-view></router-view> <!-- 👈 Renders the current route -->
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
}

.content {
  margin-left: 250px; /* Matches the sidebar width */
  padding: 1rem;
  flex: 1;
}
</style>