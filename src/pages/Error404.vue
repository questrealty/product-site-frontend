<template>
  <div>
    <ErrorScaffold
      header="Oops!"
      text="This Page doesn’t exist or has been removed! We suggest you back to
          home"
    >
      <template #image>
        <!-- <Background404 /> -->
        <Background404 class="w-full h-full" />
      </template>
    </ErrorScaffold>
  </div>
</template>

<script setup>
import Background404 from "../components/icons/Background404.vue";
import ErrorScaffold from "../components/errors/ErrorScaffold.vue";
</script>

<style scoped>
.header {
  display: none !important;
}
</style>