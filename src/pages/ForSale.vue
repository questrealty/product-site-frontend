<template>
  <div class="container">
    <FilterBar />
    <SearchHeader />
    <div class="content">
      <PropertyList />
      <SideBar />
    </div>
  </div>
</template>

<script setup>
import FilterBar from "../components/forSale/FilterBar.vue";
import PropertyList from "../components/forSale/PropertyList.vue";
import SideBar from "../components/forSale/SideBar.vue";
import SearchHeader from "../components/forSale/SearchHeader.vue";
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}
</style>
