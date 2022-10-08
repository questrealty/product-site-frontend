<template>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <Component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
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
