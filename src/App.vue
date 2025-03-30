<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <header>
    <nav class="nav-bar">
      <ul class="nav-bar__list">
        <li class="nav-bar__list-element">Inicio</li>
        <li class="nav-bar__list-element">Catalogo</li>
      </ul>
    </nav>
  </header>
  <div class="page-container">
    <HomeView />
    <CatalogView />
  </div>
</template>

<style scoped>

</style>
