<template>
  <div class="content">
    <DashboardSubHeader :type="'agent'" />
    <div class="dashboard-stats">
        <div class="left">
            <PropertiesComponent :type="'agent'" />
            <div class="properties-info">
                <PropertyInfo :type="'agent'" :propertyType="'sale'" />
                <PropertyInfo :type="'agent'" :propertyType="'rent'" />
            </div>
            <EnquiriesViewsComponent :componentHeading="'Enquiries'" :count="0" />
            <EnquiriesViewsComponent :componentHeading="'Views'" :count="0" />
            <div class="msg_req">
                <RequestOrMessages :type="'requests'" />
                <RequestOrMessages :type="'messages'" />
            </div>
        </div>
        <div class="right">

        </div>
    </div>
  </div>
</template>

<script setup>
import DashboardSubHeader from '../dashboard-components/DashboardSubHeader.vue';
import PropertiesComponent from '../dashboard-components/PropertiesComponent.vue';
import PropertyInfo from '../dashboard-components/PropertyInfo.vue';
import EnquiriesViewsComponent from '../dashboard-components/EnquiriesViewsComponent.vue';
import RequestOrMessages from '../dashboard-components/RequestOrMessages.vue';
</script>

<style scoped>
.content{
    padding: 30px 15px;
}
.dashboard-stats{
    margin:15px 0;
}
.dashboard-stats > div > *{
    margin-bottom: 20px;
}
.properties-info{
    display: flex;
    flex-direction: column;
    gap:20px;
}
.msg_req{
        display: flex;
        justify-content: space-between;
    }
@media (min-width: 786px){
    .content{
        padding:50px 45px;
    }
    .left{
        width:55%;
    }
    .dashboard-stats{
        margin:25px 0;
        display:flex;
    }
    .msg_req{
        display: flex;
        justify-content: space-between;
    }
    
}

@media (min-width:1300px) {
    .properties-info{
        flex-direction: row;
    }
}

</style>