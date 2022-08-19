<script>
import Header from '../components/Header.vue';
import AboutHeader from '../components/about/AboutHeader.vue';
import AboutUs from '../components/about/AboutUs.vue';
import TeamComponent from '../components/about/TeamComponent.vue';
import Agents from '../components/home/Agents.vue';
import OtherInfo from '../components/about/OtherInfo.vue';
import SiteFooter from '../components/SiteFooter.vue';
export default {
    components: { AboutHeader, AboutUs, TeamComponent, Agents, OtherInfo, SiteFooter, Header }
}
</script>
<template>
<Header/>
    <div id="about">
        
        <AboutHeader />
        <AboutUs />
        <TeamComponent />
        <Agents />
        <OtherInfo />
        
    </div>
    <SiteFooter/>
</template>



<style scoped>
#about{
    color:#6d553e;
}

h2 {
  font-size: 32px;
}

h3{
    font-size: 24px;
}

p{
    font-size: 0.8rem;
}

@media (min-width:640px){
    p{
        font-size: 1rem;
    }
}

@media (min-width:1024px){
    h2{
        font-size: 44px;
    }
}

</style>