<script setup>
import DashboardCard from '../components/dashboard/DashboardCard.vue';
import Setting from '../components/icons/Setting.vue';
import {ref} from 'vue'
const post = ref(8)

</script>
<template>
    <div class="py-[20px]">
        <div class="flex justify-between items-end  pb-[50px]">
            <div class="flex gap-[40px] items-center">
                <div>
                    <h1 class="text-[#6D553E] h2-bold">My Properties</h1>
                    <p class="text-[#6D553E]">List of properties posted</p>
                </div>
                <div>
                    <button
                        class="bg-[#6D553E] text-[#F6F6F6] rounded-[10px] h5-bold px-[20px] py-[10px] shadow-lg shadow-[rgba(0,0,0,0.27)]">Post
                        new property</button>
                </div>
            </div>
            <div class="flex items-center gap-[10px]">
                <button
                    class="bg-[#6D553E] text-[#F6F6F6] rounded-[10px] h5-bold px-[20px] py-[10px] shadow-lg shadow-[rgba(0,0,0,0.27)]">Refresh</button>
                <button
                    class="bg-[#F6F6F6] text-[#F6F6F6] rounded-[10px] h5-bold px-[20px] py-[5px]  shadow-lg shadow-[rgba(0,0,0,0.27)]">
                    <Setting class="fill-[#6D553E] py-[5px]" />
                </button>
            </div>
        </div>

        <div class="flex flex-wrap justify-center gap-y-[30px] gap-[30px]">
            <div v-for="(index) in post" :key="index">
                <DashboardCard />
            </div>
        </div>
        <div class="grid place-items-center mt-[50px]">
            <button @click="post += 8"
                class="bg-[#6D553E] text-[#F6F6F6] rounded-[10px] h5-bold px-[20px] py-[10px] shadow-2xl shadow-slate-600">View
                more properties</button>
        </div>
    </div>
</template>
