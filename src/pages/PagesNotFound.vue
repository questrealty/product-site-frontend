<template>
  <div
    class="
      mx-auto
      flex flex-col
      justify-center
      items-center
      h-screen
      landscape:min-h-fit
      max-w-[1440px]
      relative
    "
  >
    <div
      class="
        self-end
        absolute
        md:top-[100px]
        top-[40px]
        landscape:top-[20px] landscape:lg:right-[64px] landscape:lg:top-[104px]
      "
    >
      <div class="items-left bg--500 px-[20px] flex flex-col items-end">
        <h1
          class="
            text-[64px]
            leading-[76.8px]
            landscape:lg:text-[64px]
            font-[500]
            landscape:mb-[10px] landscape:text-[50px] landscape:leading-[30px]
          "
        >
          Oops!
        </h1>
        <p
          class="
            max-w-[400px]
            text-right text-[18px]
            landscape:text-right
            leading-[21.6px]
            md:my-[21px]
            mb-[5px]
            mt-[10px]
          "
        >
          This Page doesn’t exist or has been removed! We suggest you back to
          home
        </p>
        <div
          class="
            p-[10px]
            bg-[#6D553E]
            text-white
            rounded-[8px]
            sm:text-[40px]
            text-[30px]
            font-[400]
            text-center
            w-full
            max-w-max
            leading-[57px]
          "
        >
          <router-link to="/"> Back To Home </router-link>
        </div>
      </div>
    </div>
    <div class="h-fit">
      <NotFoundBackground class="max-w-full landscape:h-fit" />
    </div>
  </div>
</template>

<script setup>
import NotFoundBackground from "../components/icons/NotFoundBackground.vue";
</script>