<template>
    <div id="about">
        <AboutHeader />
        <AboutUs />
        <TeamComponent />
    </div>
</template>

<script>
import AboutHeader from '../components/about/AboutHeader.vue';
import AboutUs from '../components/about/AboutUs.vue';
import TeamComponent from '../components/about/TeamComponent.vue';
export default {
    components: { AboutHeader, AboutUs, TeamComponent}
}
</script>

<style>

</style>