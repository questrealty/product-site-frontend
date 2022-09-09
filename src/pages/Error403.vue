<template>
  <div>
    <ErrorScaffold
      header="Forbidden"
      text="Access to this resources on the sever is denied"
    >
      <template #image>
        <Background403 class="w-full" />
      </template>
    </ErrorScaffold>
  </div>
</template>
<script setup>
import Background403 from "../components/icons/Background403.vue";
import ErrorScaffold from "../components/errors/ErrorScaffold.vue";
</script>