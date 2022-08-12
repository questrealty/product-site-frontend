<template>
    <div id="about">
        <SaleHeader />
        <AboutUs />
        <TeamComponent />
    </div>
</template>

<script>
import SaleHeader from '../components/sales/SaleHeader.vue';
import AboutUs from '../components/about/AboutUs.vue';
import TeamComponent from '../components/about/TeamComponent.vue';
export default {
    components: { AboutHeader, AboutUs, TeamComponent}
}
</script>

<style>

</style>