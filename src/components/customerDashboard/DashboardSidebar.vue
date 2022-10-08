<template>
  <div class="container flex">
    <SidebarIcon
      iconText="Dashboard"
      iconSource="/src/assets/customerDashboard/dashboardIcon.png" />
    <SidebarIcon
      iconText="View Properties"
      iconSource="/src/assets/customerDashboard/houseIcon.png" />
    <SidebarIcon
      iconText=" Property Types"
      iconSource="/src/assets/customerDashboard/propertyTypesIcon.png" />
    <SidebarIcon
      iconText="Agents"
      iconSource="/src/assets/customerDashboard/agentIcon.png" />
    <SidebarIcon
      iconText="Profile"
      iconSource="/src/assets/customerDashboard/profileIcon.png" />
    <SidebarIcon
      iconText="Settings"
      iconSource="/src/assets/customerDashboard/settingsIcon.png" />
  </div>
</template>

<script>
import SidebarIcon from "./SidebarIcon.vue";
export default {
  components: { SidebarIcon },
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 300px;
  flex-direction: column;
}
</style>
