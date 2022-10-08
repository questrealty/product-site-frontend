<template>
    <div class="bg-[#C2AA93] h-[calc(100vh-58px)] max-w-[430px] w-full relative overflow-y-scroll">
        <div class=" h-[80px] py-[15px] top-0 sticky px-[15px] bg-[#fff]">
            <div class="flex gap-[12px] justify-between items-center">
                <h1 class="h2-bold">Chat</h1>
                <div class="flex">
                    <div class="mr-[34px]">
                        <MagnifyGlass />
                    </div>
                    <div>
                        <MoreMenu />
                    </div>
                </div>

            </div>
        </div>
        <div v-for="(item, index) in 10" :key="index">
            <Contact />
        </div>
    </div>
</template>

<script setup>
import Contact from './contact.vue';
import MagnifyGlass from '../icons/MagnifyGlass.vue';
import MoreMenu from '../icons/MoreMenu.vue';

</script>

<style>

</style>
