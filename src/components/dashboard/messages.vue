<template>
    <div class="bg-[#EDE5DF] h-[calc(100vh-58px)] overflow-y-scroll">
        <header class="flex sticky bg-[#EDE5DF] z-\0 top-0 justify-between items-center px-[30px] py-[35px] border-b-2 border-[#C2AA93]">
            <div class="flex gap-[12px] items-center">
                <img class="w-[60px] h-[60px] rounded-full object-cover"
                    src="https://s3-alpha-sig.figma.com/img/9a42/d92f/21efe2bb4c709c7fd2f642a699637d7d?Expires=1665964800&Signature=EP072kVh4jD6VFLs-DvGf59ZhetjyHM0aN09IhCUmX14PvfDfRcwfuuQf7fn5K34zNsRx7vaJnF9e8hLUBg7lBLES~S3dY16kWkYfn9TANz6x~M3KaTRk~pcBXZD5pXwIgUJsOtGVu1ZDIkAB2s7UmzIO2e5zQVikyxJH8-f1O7-UyNhhGED3WNh1d34iAmOeWRsNjxWvbozcB2a9M145ftN73sdKPIV9iS82K0HXLDxONjNbN895BkOpo3he6ULYXpdkrQMe8rB1u-MuumIFw10-vcBjVVnHipj2Ez7-4AVQga5iJGq7SfsbMou9S2l1pXpwWQb2uBrTwmR57Dm4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="user">
                <div>
                    <h1 class="text-[#52402F] h5-med mb-[4px]">James Okon</h1>
                    <small class="text-[#886A4E] h6-med">Typing</small>
                </div>

            </div>
            <MoreMenu />
        </header>

        <main class="px-[20px] py-[20px] relative">
            <div v-for="(index) in 12" :key="index" :class="index % 2 == 0 ? 'right-0': 'left-0'" class="absolute ">
                <RecievedMessage/>
            </div>
        </main>
    </div>
</template>

<script setup>
import MoreMenu from '../icons/MoreMenu.vue';
import RecievedMessage from './RecievedMessage.vue';

</script>

<style>

</style>
