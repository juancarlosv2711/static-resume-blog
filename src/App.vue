<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>
  </header>
  <main>
    <router-view></router-view>  <!-- 👈 Renders the current route -->
  </main>
</template>

<style>
/* Add your global styles here */
</style>