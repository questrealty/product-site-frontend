<template>
  <div class="mx-auto max-w-[1440px]">
    <div class="mb-[30px]">
      <p class="text-center text-[#6D553E] h1-semi">Get in touch with us</p>
    </div>
    <div class="text-[#6D553E] mx-[20px] md:mx-[16px]">
      <div class="flex md:gap-[73px] md:justify-center md:flex-row flex-col">
        <!-- form -->
        <div class="max-w-[670px] w-full">
          <div class="mb-[32px]">
            <label for="fullname" class="h4-med mb-[8px]">Full Name</label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter Full Name"
              v-model="form.fullname"
              class="
                bg-[#C2AA93]
                outline-none
                border-none
                rounded-[5px]
                p-[12px]
                w-full
                placeholder:text-[#A37F5D]
                h6-reg
              "
            />
          </div>
          <div class="mb-[32px]">
            <label for="email" class="h4-med mb-[8px]">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              v-model="form.email"
              class="
                bg-[#C2AA93]
                outline-none
                border-none
                rounded-[5px]
                p-[12px]
                placeholder:text-[#A37F5D]
                h6-reg
                w-full
              "
            />
          </div>
          <div class="mb-[32px]">
            <label for="phone_no" class="h4-med mb-[8px]">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              v-model="form.phone_no"
              name="phone_no"
              class="
                bg-[#C2AA93]
                outline-none
                border-none
                rounded-[5px]
                p-[12px]
                w-full
                placeholder:text-[#A37F5D]
                h6-reg
              "
            />
          </div>
          <div class="">
            <label for="message" class="h4-med mb-[8px]">Message</label>
            <textarea
              name="message"
              placeholder="Type Message"
              v-model="form.message"
              id=""
              class="
                bg-[#C2AA93]
                outline-none
                border-none
                rounded-[5px]
                p-[12px]
                w-full
                min-h-[232px]
                placeholder:text-[#A37F5D]
                h6-reg
              "
            ></textarea>
          </div>
          <div class="block md:hidden mt-[32px]">
            <button
              @click="submit"
              class="
                border-2
                bg-[#6D553E]
                h6-bold
                !rounded-[8px]
                px-[27.5px]
                py-[12px]
                text-white
              "
            >
              SUBMIT
            </button>
          </div>
        </div>
        <!-- more information -->
        <div class="flex !items-start flex-col self-start md:self-end">
          <p class="h5-med !text-[20px] mt-[32px]">Our Address</p>
          <p class="h5-med mt-[8px] max-w-[361px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci erat
            vestibulum ac non. Lorem
          </p>
          <p class="h5-med mt-[32px] !text-[20px]">Connect With Us</p>
          <div class="flex mt-[24px] md:gap-[32px] gap-[16px] flex-wrap">
            <div
              class="
                bg-[#A37F5D]
                rounded-full
                flex
                justify-center
                items-center
                p-[18px]
              "
            >
              <Twitter class="fill-[white]" />
            </div>
            <div
              class="
                bg-[#A37F5D]
                rounded-full
                flex
                justify-center
                items-center
                p-[18px]
              "
            >
              <Instagram class="stroke-red-300" />
            </div>
            <div
              class="
                bg-[#A37F5D]
                rounded-full
                flex
                justify-center
                items-center
                p-[18px]
              "
            >
              <Linkedin class="stroke-red-300" />
            </div>
            <div
              class="
                bg-[#A37F5D]
                rounded-full
                flex
                justify-center
                items-center
                py-[16px]
                px-[22px]
              "
            >
              <Facebook class="stroke-red-300" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-around">
        <div class="mb-[0] md:block items-baseline hidden mt-[32px]">
          <button
            @click="submit"
            class="
              border-2
              bg-[#6D553E]
              h6-bold
              !rounded-[8px]
              px-[27.5px]
              py-[12px]
              text-white
            "
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import "../../assets/contact/contact.css";
import Twitter from "./icons/Twitter.vue";
import Instagram from "./icons/Instagram.vue";
import Linkedin from "./icons/Linkedin.vue";
import Facebook from "./icons/Facebook.vue";
import { ref } from "@vue/reactivity";
const form = ref({
  fullname: "",
  email: "",
  phone_no: "",
  message: "",
});

const submit = () => {
  alert(JSON.stringify(form.value));
};
</script>