<script setup>
import FirstSection from "../components/home/first-section.vue";
import SecondSection from "../components/home/second-section.vue";
import OurServices from "../components/home/OurServices.vue";
import Agents from "../components/home/Agents.vue";
import FeaturedProperties from "../components/home/FeaturedProperties.vue";
import TopExecutives from "../components/home/TopExecutives.vue";
import CustomerReviews from "../components/home/CustomerReviews.vue";
import Header from "../components/Header.vue";
import SideBar from "../components/forSale/SideBar.vue";
import SiteFooter from "../components/SiteFooter.vue";

defineProps({
  msg: String,
});
</script>

<template>
  <div class="home">
    <Header/>
    <FirstSection />
    <SecondSection />
    <OurServices />
    <Agents />
    <FeaturedProperties />
    <TopExecutives />
    <CustomerReviews />
    <SiteFooter/>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}
</style>
