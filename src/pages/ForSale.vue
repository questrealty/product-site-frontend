<template>
  <div
    class="container">
    <FilterBar />
    <div
      class="content">
      <PropertyList />
      <SideBar />
    </div>
    <!-- <PageControl /> -->
    <!-- <QuickSales /> -->

  </div>
</template>

<script setup>
import FilterBar from "../components/forSale/FilterBar.vue";
import PropertyList from "../components/forSale/PropertyList.vue"
import SideBar from "../components/forSale/SideBar.vue";
import QuickSales from "../components/forSale/QuickSales.vue";
</script>

<style scoped>

  .content{
    display: flex;
    justify-content: space-between;
    margin: 20px;
  }
</style>
