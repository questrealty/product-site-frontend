<template>
  <footer class="">
    <div class="pry-main">
      <div
        class="
          pry-main
          xl:flex
          xl:flex-row
          grid lg:grid-cols-4 md:grid-cols-2
          justify-between
          h4-med
          border-t-2 border-[#6D553E]
        "
      >
        <!-- Logo -->
        <div class="xl:w-9/12 xl:mb-0 mb-[30px]">
          <div
            class="
              bg-white
              xl:px-[68px]
              px-[20px]
              pt-[1.5px]
              flex
              justify-between
              items-center
            "
          >
            <Logo />
            <div class="hidden">
              <button
                class="
                  pry-main pry-btn
                  h5-bold
                  py-[10px]
                  lg:px-[36px]
                  px-[27px]
                "
              >
                Post your properties
              </button>
            </div>
          </div>
          <div class="xl:ml-[68px] ml-[20px] xl:mt-[68px] mt-[20px] w-max">
            <p>Partnerships</p>
            <div class="md:grid md:grid-cols-2 mt-[32px] flex flex-wrap md:gap-[30px] gap-[10px]">
              <Theta />
              <Iost />
              <Vibe />
              <Dropbox />
            </div>
          </div>
        </div>
        <!-- Support column -->
        <div class="xl:w-3/5  xl:mb-0 mb-[30px]">
          <div class="bg-white py-[24px] xl:pl-0 pl-[20px]">
            <p class="h4-med !text-[24px] text-[#6D553E]">Support</p>
          </div>

          <div class="flex flex-col mt-[46px] xl:pl-0 pl-[20px]">
            <a href="#" class="mb-[12px]">Help Videos</a>
            <a href="#" class="my-[12px]">Features</a>
            <a href="#" class="my-[12px]">Support</a>

        <div class="btn">
          <button>Post your properties</button>
        </div>
      </div>
    </div>
    <div class="footer-links-container">
      <div class="footer-link">
        <div class="section1">
          <p class="partnership">Patnerships</p>
          <div class="">
            <img src="../assets/theta.png" alt="" />
            <img src="../assets/iost.png" alt="" /><br>
            <img src="../assets/vibe.png" alt="" />
            <img src="../assets/dropbox.png" alt="" />

          </div>
        </div>
        <!-- Services column -->
        <div class="xl:w-3/5  xl:mb-0 mb-[30px]">
          <div class="bg-white py-[24px] xl:pl-0 pl-[20px]">
            <p class="h4-med !text-[24px] text-[#6D553E]">Services</p>
          </div>
          <div class="flex flex-col mt-[46px] xl:pl-0 pl-[20px]">
            <a href="#" class="mb-[12px]">Payment & Tax</a>
            <a href="#" class="py-[12px]">Privacy Policies</a>
            <a href="#" class="py-[12px]">Terms of use</a>
            <a href="#" class="py-[12px]">Disclaimer</a>
          </div>
        </div>
        <!-- About Us column -->
        <div class="xl:w-3/5  xl:mb-0 mb-[30px]">
          <div class="bg-white py-[24px] xl:pl-0 pl-[20px]">
            <p class="h4-med !text-[24px] text-[#6D553E]">About Us</p>
          </div>
          <div class="flex flex-col mt-[46px] xl:px-0 px-[20px]">
            <a href="#" class="mb-[12px]">About us</a>
            <router-link to="/contact-us" class="my-[12px]"
              >Contact</router-link
            >
            <a href="#" class="my-[12px]">FAQs</a>
          </div>
        </div>
        <!-- Post properties -->
        <div class="w-full md:col-span-2 lg:col-span-4">
          <div class="">
            <div
              class="
                bg-white
                py-[17px]
                lg:place-items-end
                justify-end
                grid
                xl:pr-[68px] xl:px-0
                px-[20px]
              "
            >
              <button
                class="
                  pry-main pry-btn
                  h5-bold
                  py-[10px]
                  lg:px-[20px]
                  px-[37px]
                "
              >
                Post your properties
              </button>
            </div>
          </div>

          <div class="flex xl:pr-[68px] mt-[28px] flex-col xl:px-0 float-right xl:max-w-none lg:max-w-[400px] px-[20px]">
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
            <div class="flex mt-[24px] xl:gap-[20px] gap-[16px] lg:flex-row flex-wrap">
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
                <Twitter stroke="#A37F5D" />
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
                <Linkedin stroke="#A37F5D" />
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
        <p
          class="
            lg:ml-[52px] lg:text-left
            text-center
            pb-[40px]
            mt-[18px]
            h4-med
          "
        >
          All rights reserved @Quest Realty 2022
        </p>
<p>Connect With us</p>
        <div class="social-media">
          <img src="../assets/twitter-icon.png" alt="twitter" title="Twitter" />
          <img
            class="media"
            src="../assets/instagram-icon.png"
            alt="instagram"
            title="Instagram"
          />
          <img class="media" src="../assets/linkedin-icon.png" alt="linkedin" title="" />
          <img class="media" src="../assets/facebook-icon.png" alt="facebook" title="" />
        </div>

      </div>
      <div class="reserved">
        <p>All rights reserved @Quest Realty 2022</p>
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
=======
.footer-nav {
  padding-top: 120px;
}

.display-border {
  border-top: 1px solid var(--barley-40);
  padding: 0 16px;
  width: 100%;
  display: flex;
  align-items: center;
}
.group1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
}
.footer-nav-links {
  display: none;
  font-size: 18px;
  width: 70%;
  margin-left: 24px;
}
.partnership{
  margin-bottom: 20px;
}
.footer-nav-links > a {
  margin-right: 44px;
  flex: 1 1 30%;
  color: var(--barley-40);
}

a {
  text-decoration: none;
}

.btn {
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
}

button {
  background-color: #6d553e;
  color: white;
  padding: 12px 32px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
}
.media{
  padding-left: 20px;
}
.social-media{
  margin-top: 20px;
}
button:hover {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
}

.footer-links-container {
  padding: 54px 0px 54px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  background-color: var(--barley-40);
  width: 100%;
}

.footer-links-container,
.footer-links-container a {
  color: white;
}

.footer-link {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
}

.section1,
.section2,
.section3,
.section4 {
  width: 50%;
}

.section1 > a,
.section2 > a,
.section3 > a,
.section4 > a {
  margin-bottom: 12px;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.reserved{
  margin-top: 20px;
}
.subscribe {
  width: 60%;
}

/* .data-collection {
} */

@media (min-width: 940px) {
  .group1 {
    width: 70%;
  }

  .footer-nav-links {
    display: flex;
    margin-left: 40px;
  }

  .footer-nav-links > a {
    margin-right: 4px;
  }

  button {
    padding: 16px 32px;
    font-size: 16px;
  }

  .footer-links-container {
    flex-direction: row;
  }

  .footer-link {
    width: 30%;
  }


<style></style>
