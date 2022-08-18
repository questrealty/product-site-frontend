<template>
  <div class="grid place-items-center h-screen">
    <div>
      <!-- <div class="">
        <h1 class="h1-med !text-[64px] !leading-[76.8px] mb-[21px]">Oops!</h1>
        <p
          class="h1-reg !text-[18px] max-w-[420px] !leading-[21.6px] mb-[30px]"
        >
          This Page doesn’t exist or has been removed! We suggest you back to
          home
        </p>
        <router-link to="/"
          ><p
            class=" w-max
              p-[10px]
              bg-[#6D553E]
              rounded-[8px]
              text-[48px]
              leading-[57.8px]
              font-[400]
              text-[white]
            "
          >
            Back To Home
          </p></router-link
        >
      </div> -->
      <div class="w-[900px] p-[10px]">
        <NotFoundBackground class="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import NotFoundBackground from "../components/icons/NotFoundBackground.vue";
</script>

<style></style>