<template>
    <div class="flex w-full">
        <div class="w-full max-w-[250px] z-[1000] bg-[#000] xl:block hidden fixed">
            <DashboardSidebar />
        </div>
        <div class="xl:ml-[250px] w-full relative">
            <div class="xl:block hidden ">
                <DashboardTopbar class="" />
            </div>
            <router-view class="pt-[58px]" v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <Component :is="Component" />
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script setup>
import DashboardSidebar from './DashboardSidebar.vue';
import DashboardTopbar from './DashboardTopbar.vue';

</script>
<style scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}


.fade-enter-active,
.fade-leave-active {
    transition: 0.25s ease-in-out;
}
</style>
