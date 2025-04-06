<template>
  <header class="page-header">
    <nav class="nav-bar">
      <a href="/" class="logo">Tu Logo</a>
      <ul class="nav-bar__list">
        <li class="nav-bar__list-element"><router-link to="/" class="nav-bar__list-element-link">Inicio</router-link></li>
        <li class="nav-bar__list-element"><router-link  to="/catalog" class="nav-bar__list-element-link">Catalogo</router-link></li>
      </ul>
    </nav>
  </header>
  <div class="page-container">
    <router-view />
  </div>
</template>

<script setup>
import { provideDeviceType } from './composables/deviceType';

provideDeviceType()

</script>

<style scoped>
  .page-header, .page-container {
    max-width: 1240px;
  }
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    z-index: 100;
    background-color: var(--color-accent-blue);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .nav-bar__list {
    display: flex;
  }

  .nav-bar__list-element-link {
    color: var(--color-primary);
    text-decoration: none;
    margin-right: 20px;
    transition: color 0.3s ease;
  }

  .nav-bar__list-element-link:hover, .logo:hover {
    cursor: pointer;
    color: var(--color-accent-yellow);
    background-color:transparent;
  }

  .logo {
    font-weight: bold;
    font-size: 1.2em;
    color: var(--color-accent-yellow);
  }
  .page-container {
    padding-top: 20px;
  }

</style>
