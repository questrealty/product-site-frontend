<template>
  <div>
    <ErrorScaffold
      header="No Authorization Found"
      text="This page is not Publicly accessible, To access it please log in first"
    >
      <template #image >
        <Background401 class="bg-[#fafafa] w-full h-full  z-0  mb-[10px]" />
      </template>
    </ErrorScaffold>
  </div>
</template>

<script setup>
import Background401 from "../components/icons/Background401.vue";
import ErrorScaffold from "../components/errors/ErrorScaffold.vue";
</script>