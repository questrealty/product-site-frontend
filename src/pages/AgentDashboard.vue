<template>
    <div id="agent-dashboard">
        <div class="sidebar">
            <div class="sidebar-logo">
                <img class="logo" src="../assets/logo.png" alt="quest-realty-logo" />
            </div>
            <DashboardSidebar />
        </div>
        <main>
            <header>
                <div class="header-logo">
                    <img class="logo" src="../assets/logo.png" alt="quest-realty-logo" />
                </div>
                <div class="header-nav">
                    <DashboardHeader profileName="Jane Doe" profileTitle="User" profileImage="/src/assets/customerDashboard/userImage.png" />
                </div>
            </header>
            <div class="dashboard-content">
                <AgentDashboardContent />
            </div>
        </main>   
    </div>
</template>

<script setup>
import DashboardHeader from '../components/customerDashboard/DashboardHeader.vue';
import DashboardSidebar from '../components/customerDashboard/DashboardSidebar.vue';
import AgentDashboardContent from '../components/agent-dashboard-components/agentDashboardContent.vue';

</script>

<style scoped>
#agent-dashboard{
    display: flex;
}

main{
    flex-grow: 1;
}

.dashboard-content{
    height: calc(100vh - 9vh );
    overflow: scroll;
}

header{
    display: flex;
}

.header-logo{  
    max-width:80px;
    width:20%;
    height: 9vh;
}
.header-nav{
    flex-grow: 1;
}
.sidebar{
    display:none;
    height: 100vh;
    overflow: scroll;
}

.sidebar-logo{
    display: none;
}
.logo{
    width:100%;
    height: 100%;
    object-fit: cover;
}
@media (min-width: 786px){
    .header-logo{
        display:none;
    }

    .sidebar-logo{
        display: block;
    }
    .sidebar{
        display:flex;
        flex-direction: column;
        width:15%;
    }
    .logo{
        width:100%;
        height: auto;
        object-fit: cover;
    }
}
</style>