<template>
  <main>
    <Header />
    <div class="container">
      <FilterBar />
      <div class="content">
        <PropertyList />
        <SideBar />
      </div>
    </div>
    <SiteFooter />
  </main>
</template>


<script setup>
import FilterBar from "../components/forSale/FilterBar.vue";
import PropertyList from "../components/forSale/PropertyList.vue";
import SideBar from "../components/forSale/SideBar.vue";
import SearchHeader from "../components/forSale/SearchHeader.vue";

import Header from "../components/Header.vue";
import SiteFooter from "../components/SiteFooter.vue";
</script>

<style scoped>
.container {
  max-width: 100%;
}
.content {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}
</style>
