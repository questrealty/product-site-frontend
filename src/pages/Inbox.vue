<template>
    <div class="w-full">
        <div v-if="false">
            <div class="flex items-end justify-between">
                <div class="text-[#6D553E] ">
                    <h1 class="text-[#6D553E] h2-bold">Inbox</h1>
                    <p class="h4-med">List of Customers Online</p>
                </div>
                <div class="float-right">
                    <div class="bg-[#F6F6F6]  p-2 px-3 rounded-[10px] shadow-lg shadow-[rgba(0,0,0,0.25)]">
                        <Setting class="fill-[#6D553E]" />
                    </div>
                </div>


            </div>
            <div class="text-[#6D553EB2] fixed inset-0 z-[1]  flex justify-center items-center flex-col">
                <h1 class="h1-bold mb-[40px]">
                    Ops!
                    No Messages Currently</h1>

                <button class="bg-[#6D553E] text-[#F6F6F6] px-[10px] py-[5px] rounded-md " @click="openModal">Start
                    Chat</button>
            </div>
        </div>
        <Chats />
    </div>

</template>

<script setup>
import Setting from '../components/icons/Setting.vue';
import { ref } from '@vue/runtime-dom';
import Chats from '../components/dashboard/chats.vue';
const message = ref()
message.value = false

function openModal() {
    message.value = true
    console.log(message.value);
}

</script>
