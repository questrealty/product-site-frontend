<template>
    <div class="sub-header">
        <DashboardSubHeader :type="type" />
    </div>
</template>

<script>
    import DashboardSubHeader from '../dashboard-components/DashboardSubHeader.vue';

export default {
    data() {
        return {
            type: "customer"
        }
    },
    components: { DashboardSubHeader },
}
    
</script>

<style scoped>
.sub-header :deep(.dashboard-header){
    position: relative;
    font-size: 1.7rem;
}
.sub-header :deep(h2){
    font-size: 1.5rem;
}
.sub-header :deep(.welcome-greet){
    font-size: 1.7rem;
}
.sub-header :deep(.inbox-field){
    display: none;
}
.sub-header :deep(.button-group){
    position: absolute;
    top: 4%;
    right: 6%;
}

@media (min-width: 425px){
   .sub-header :deep(.button-group){
    top: 4%;
    } 
}
@media (min-width: 600px){
    .sub-header :deep(h2){
        font-size: 1.7rem;
    }
    .sub-header :deep(.welcome-greet){
        width: 100%;
        margin-bottom: 10px;
        font-size: 1.7rem;
    }
    .sub-header :deep(.dashboard-notification){
        width: 100%;
        align-items: flex-end;
    }
    .sub-header :deep(.inbox-field){
        display: flex;
        min-width: 200px;
        margin:  0;
    }
    .sub-header :deep(.inbox-field p){
        font-size: .85rem;
        min-width: 200px;

    }
    .sub-header :deep(.button-group){
        top: 5.7%;
    }
}
@media (min-width: 768px){
  .sub-header :deep(.button-group){
        top: 5%;
    }
}
@media (min-width: 800px){
  .sub-header :deep(.inbox-field p){
    font-size: 1rem;
    }
}
@media (min-width: 1024px){
    .sub-header :deep(.welcome-greet){
        width: 35%;
        margin-bottom: 0;
    }
    .sub-header :deep(.welcome-greet p){
       font-size: .8rem;
    }
    .sub-header :deep(.inbox-field p){
        font-size: .7rem;
    }
    .sub-header :deep(.dashboard-notification){
        width: 65%;
    }
    .sub-header :deep(.button-group){
        position: static;
    }
}
@media (min-width: 1100px){
    .sub-header :deep(.welcome-greet p){
       font-size: .9rem;
    }
    .sub-header :deep(.inbox-field p){
        font-size: .8rem;
    }
}
</style>