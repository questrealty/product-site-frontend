<template>
  <footer class="">
    <div class="pry-main">
      <div
        class="pry-main flex justify-between h4-med border-t-2 border-[#6D553E]"
      >
        <div class="w-11/12">
          <div class="bg-white pl-[68px] pt-[1.5px]">
            <Logo />
          </div>
          <div class="ml-[68px] mt-[68px] w-max">
            <p>Partnerships</p>
            <div class="grid grid-cols-2 mt-[32px] gap-[30px]">
              <Theta />
              <Iost />
              <Vibe />
              <Dropbox />
            </div>
          </div>
        </div>
        <div class="w-4/5">
          <div class="bg-white py-[24px]">
            <p class="h4-med !text-[24px] text-[#6D553E]">Support</p>
          </div>

          <div class="flex flex-col mt-[46px]">
            <a href="#" class="mb-[12px]">Help Videos</a>
            <a href="#" class="my-[12px]">Features</a>
            <a href="#" class="my-[12px]">Support</a>
          </div>
        </div>
        <div class="w-4/5">
          <div class="bg-white py-[24px]">
            <p class="h4-med !text-[24px] text-[#6D553E]">Services</p>
          </div>
          <div class="flex flex-col mt-[46px]">
            <a href="#" class="mb-[12px]">Payment & Tax</a>
            <a href="#" class="py-[12px]">Privacy Policies</a>
            <a href="#" class="py-[12px]">Terms of use</a>
            <a href="#" class="py-[12px]">Disclaimer</a>
          </div>
        </div>
        <div class="w-4/5">
          <div class="bg-white py-[24px]">
            <p class="h4-med !text-[24px] text-[#6D553E]">About Us</p>
          </div>
          <div class="flex flex-col mt-[46px]">
            <a href="#" class="mb-[12px]">About us</a>
            <router-link to="/contact-us" class="my-[12px]">Contact</router-link>
            <a href="#" class="my-[12px]">FAQs</a>
          </div>
        </div>
        <div class="w-full">
          <div class="bg-white py-[17px] place-items-end grid pr-[68px]">
            <button class="pry-main pry-btn h5-bold py-[10px] px-[37px]">
              Post your properties
            </button>
          </div>

          <div class="flex pr-[68px] mt-[28px] flex-col">
            <p>Subscribe to our Newsletter</p>
            <div
              class="
                bg-white
                flex
                pr-[6px]
                py-[4px]
                pl-[12px]
                rounded-[5px]
                mt-[16px]
              "
            >
              <input
                class="
                  w-[100%]
                  outline-none
                  border-0
                  text-[#6D553E]
                  placeholder:text-[#6D553E]
                  h6-bold
                  mr-[4px]
                "
                type="email"
                placeholder="Enter  your email address"
              />
              <button
                type="submit"
                class="pry-main pry-btn py-[8px] h6-bold px-[18px]"
              >
                SUBSCRIBE
              </button>
            </div>

            <p class="h5-med !text-[20px] mt-[32px]">Our Address</p>
            <p class="h5-med my-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci erat
              vestibulum ac non. Lorem
            </p>
            <p class="h5-med !text-[20px]">Connect With Us</p>
            <div class="flex mt-[24px] gap-[32px]">
              <div
                class="
                  bg-[white]
                  rounded-full
                  flex
                  justify-center
                  items-center
                  p-[18px]
                "
              >
                <Twitter  stroke="#A37F5D" />
              </div>
              <div
                class="
                  bg-[white]
                  rounded-full
                  flex
                  justify-center
                  items-center
                  p-[18px]
                "
              >
                <Instagram stroke="#A37F5D" />
              </div>
              <div
                class="
                  bg-[white]
                  rounded-full
                  flex
                  justify-center
                  items-center
                  p-[18px]
                "
              >
                <Linkedin stroke="#A37F5D"/>
              </div>
              <div
                class="
                  bg-[white]
                  rounded-full
                  flex
                  justify-center
                  items-center
                  py-[16px]
                  px-[22px]
                "
              >
                <Facebook stroke="#A37F5D" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <p class="ml-[52px] pb-[40px] mt-[18px] h4-med">
          All rights reserved @Quest Realty 2022
        </p>
      </div>
    </div>
  </footer>
</template>


<script setup>
import Theta from "./icons/Theta.vue";
import Iost from "./icons/Iost.vue";
import Vibe from "./icons/Vibe.vue";
import Dropbox from "./icons/Dropbox.vue";
import Twitter from "./icons/Twitter.vue";
import Instagram from "./icons/Instagram.vue";
import Linkedin from "./icons/Linkedin.vue";
import Facebook from "./icons/Facebook.vue";
import Logo from "./icons/Logo.vue";
</script>

<style></style>
