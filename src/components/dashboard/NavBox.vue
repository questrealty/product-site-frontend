<template>
    <RouterLink :to="{name: props.link}">
        <div
            class=" bg-[#6D553E] h-[133px] grid content-center text-[#FFFFFF4D] hover:text-white justify-items-center  hover:opacity-100 duration-[400ms] opacity-[0.7]">
            <slot name="icon" />

            <p class=" h4-bold ">
                {{props.location}}
            </p>
        </div>
    </RouterLink>
</template>
<script setup>
const props = defineProps({
    location: String,
    link: String,
})
</script>

<style scoped>


.router-link-exact-active p {
    color: white;
}
.router-link-exact-active div{
    ##background-color: #6D553E;
    opacity: 1;

}
</style>
<style >

.router-link-exact-active svg {
    fill: white;
    opacity: 1;
}
a:hover svg {
    fill: white;
    opacity: 1;
}
a svg {
    fill: white;
    opacity: .3;
    transition-duration: 400ms;
}
</style>
