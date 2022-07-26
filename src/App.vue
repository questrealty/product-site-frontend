<template>
  <div class="overall-container">
    <Header />

    <!-- <div class="fullscreen"> -->
    <router-view />
    <!-- </div> -->
    <SiteFooter />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  color: #2c3e50;
}
.overall-container {
  position: relative;
}
</style>
