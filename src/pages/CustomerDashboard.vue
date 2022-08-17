<template>
  <div class="dashboard-container">
    <aside class="sidebar-wrapper">
      <div class="section">
        <img class="logo" src="../assets/logo.png" alt="quest-realty-logo" />
      </div>
      <div class="side-menu"><DashboardSidebar /></div>
    </aside>
    <main>
      <DashboardHeader profileName="Jane Doe" profileTitle="User" profileImage="/src/assets/customerDashboard/userImage.png" />
      <DashboardContent />
    </main>
    

  </div>
</template>

<script>
  import DashboardSidebar from '../components/customerDashboard/DashboardSidebar.vue';
  import DashboardHeader from '../components/customerDashboard/DashboardHeader.vue';
  import DashboardContent from '../components/customerDashboard/DashboardContent.vue';

  export default {
    components: { DashboardSidebar, DashboardHeader, DashboardContent }
  }
</script>

<style scoped>
.dashboard-container{
  display: flex;
  margin-top: 100px;
}
.sidebar-wrapper{
  flex-direction: column;
  width: 20%;
}
.side-menu{
  display: none;
}
.section {
    background-color: var(--barley-120);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 9vh;
    width: 100%;
  }
  
.logo {
    width: 56px;
    height: 36px;
  }
main{
  width: 80%;
}
@media (min-width: 600px){
  .side-menu{
    display: flex;
  }
  .sidebar-wrapper{
    width: 30%;
  }
  .section{
    height: 15vh;
    border-bottom: 1px solid #211913;
  }
}
@media (min-width: 768px){
  .logo {
    width: 76px;
    height: 56px;
  }
}
@media (min-width: 786px){
  .sidebar-wrapper{
    width: 20%;
  }
  main{
    width: 80%;
  }
}
</style>