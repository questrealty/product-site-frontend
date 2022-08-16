<template>
    <div class=content-wrapper>
        <DashboardHeader2 />
        <div class="content-main">
            <div class="property-info">
                <PropertiesComponent :type="type" />

                <div class="property-stat">
                    <PropertyInfo :type="type" :propertyCount="propertyCount" :propertyType="propertyType"/>
                    <PropertyInfo :type="type" :propertyCount="propertyCount" propertyType="rent" />
                </div>

                <div class="interests-views">
                    <EnquiriesViewsComponent componentHeading="Interests" count="0" />
                    <EnquiriesViewsComponent :componentHeading="componentHeading" :count="count" />
                </div>

                <div class="requests">
                    <InterestsOrMessages />
                </div>   
            </div>
            <div class="contact-agent">
                <ContactAgents />
            </div>
        </div>
        <div class="faq">
            <div>
            <p>FAQ</p></div>
        </div>
    </div>
</template>

<script>
    import DashboardHeader2 from '../customerDashboard/DashboardHeader2.vue';
    import PropertiesComponent from '../dashboard-components/PropertiesComponent.vue';
    import PropertyInfo from '../dashboard-components/PropertyInfo.vue';
    import EnquiriesViewsComponent from '../dashboard-components/EnquiriesViewsComponent.vue';
    import InterestsOrMessages from '../customerDashboard/InterestsOrMessages.vue';
    
    import ContactAgents from '../customerDashboard/ContactAgents.vue';


export default {
    data(){
        return{
            type: 'customer',
            propertyCount: 40,
            propertyType: "sale",
            componentHeading: "Views",
            count: 0,
        }
    },
        components: { DashboardHeader2, PropertiesComponent, ContactAgents, PropertyInfo, EnquiriesViewsComponent, InterestsOrMessages }
    }

</script>

<style scoped>
.content-wrapper{
    margin: 30px 20px 30px -50px;
    border: 1px solid red;
}
.content-main{
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    margin-top: 50px;
}
/* Property Info Styles */
.property-info:deep(img){
    max-width: 20%;
}
.property-info:deep(#properties-component){
    margin-bottom: 30px;
}
.property-info:deep(.property-count){
    justify-content: space-between;
    width: 60%;
}
.property-info:deep(h3){
    font-size: 1.35rem;
    margin-bottom: 13px;
}
.property-info:deep(p){
    font-size: 1rem;
    opacity: 0.6;
}
.property-info:deep(.counter){
    align-self: flex-start;
    height: 45px;
    width: 50px;
}
/* Property Statistics Styles */
.property-stat{
    display: flex;
    flex-wrap: wrap;
}
.property-stat:deep(#property-info){
    margin-bottom: 30px;
}
.property-stat:deep(.circle){
    max-width: 90px;
    max-height: 90px;
}
.property-stat:deep(.circle::after, .circle.rent::after){
    font-size: 0.6rem;
}
.interests-views:deep(.comp-container){
    margin-bottom: 30px;
    background: #F6F6F6
}
.faq{
    display: flex;
    justify-content: flex-end;
    margin-top: 100px;
    padding: 3px;
    border-radius: 5px;
    align-self: flex-end;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.14);
}
.faq p{
    font-size: 1rem;
    color: var(--barley-40);
    font-weight: 700;
}
@media (min-width: 425px){
 
}
@media (min-width: 600px){
    .content-wrapper{
        margin: 30px;
    }
}
@media (min-width: 768px){
  
}
@media (min-width: 800px){
  
}
@media (min-width: 1024px){
    .content-wrapper{
    margin: 30px;
    border: 1px solid red;
}
.content-main{
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}
.property-info{
    width: 55%;
}
.property-info:deep(img){
    max-width: 20%;
}
.property-info:deep(.property-count){
    justify-content: space-between;
    width: 60%;

}
.property-info:deep(h3){
    font-size: 1.35rem;
    margin-bottom: 13px;
}
.property-info:deep(p){
    font-size: 1rem;
    opacity: 0.6;
}
.property-info:deep(.counter){
    align-self: flex-start;
    height: 45px;
    width: 50px;
}
.contact-agent{
    width: 40%;
}
}
@media (min-width: 1100px){
    
}
</style>