<template>
  <Header />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <Component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  color: #2c3e50;
}
.overall-container {
  position: relative;
}

.fade-enter-from {
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.4s ease-in-out;
}
</style>
