<template>
    <header class=" header">
        <div class="flex justify-between w-full">
            <div class="w-full max-w-[800px]">
                <SearchBar :color="'bg-[#C2AA93]'" :showText=false />
            </div>
            <div class="">
                <div class="flex gap-[50px]  items-center">
                    <Bell />
                    <Message />
                    <Notification />
                    <div class="flex items-center gap-[20px]">
                        <div class="">
                            <h1 class="h4-semi w-max">John Doe</h1>
                            <p class="text-right">Agent</p>
                        </div>
                        <div class="w-[55px] h-[55px]">
                            <img src="../../assets/executive-2.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import SearchBar from '../SearchBar.vue';
import Bell from '../icons/Bell.vue';
import Message from '../icons/Message.vue';
import Notification from '../icons/Notification.vue';
</script>

<style scoped>

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    background-color: #C2AA93;
    margin-left: 250px;
    padding-right: 50px;
}
</style>
