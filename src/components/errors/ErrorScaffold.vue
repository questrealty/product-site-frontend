<template>
  <div>
    <div
      class="
        flex flex-col
        justify-center
        items-center
        min-h-screen
        landscape:h-full
        landscape:gap-[20px]
        landscape:lg:gap-0
        landscape:lg:flex-col
        landscape:flex-row
        px-[15px]
      "
    >
      <div class="h-fit">
        <slot class="bg-[#fcfcfc]" name="image"></slot>
      </div>
      <div class="flex flex-col items-center">
        <h1
          class="
            sm:text-[60px] sm:leading-[60px]
            text-center text-[32px]
            leading-[52px]
            mb-[12px]
            font-[700]
          "
        >
          {{ header }}
        </h1>
        <p
          class="
            text-center text-[25px]
            landscape:mb-[20px]
            sm:mb-[63px]
            mb-[10px]
          "
        >
          {{ text }}
        </p>
        <router-link to="/">
          <p
            class="
              p-[10px]
              bg-[#6D553E]
              sm:h1-reg
              text-[30px] text-white
              w-max
              rounded-[8px]
            "
          >
            Back To Home
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  header: String,
  text: String,
  //   link: String,
  //   linkTitle: String,
});
</script>