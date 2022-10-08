<template>
    <div class="flex">
        <div class="bg-[black] max-w-[250px] w-full fixed h-screen">
            <div class="">
                <div class=" bg-[#EDE5DF] h-[133px] grid place-items-center">
                    <div class="max-w-[150px] mx-auto">
                        <RouterLink to="/"><img src="../../assets/logo.png" alt=""></RouterLink>
                        
                    </div>
                </div>
                <NavBox location="Dashboard" link="DashBoard Content">
                    <template #icon>
                        <DashboardIcon />
                    </template>
                </NavBox>
                <div class="w-full h-[1.5px] bg-black"></div>
                <NavBox location="Post a Property" link="Post Property">
                    <template #icon>
                        <House />
                    </template>
                </NavBox>
                <div class="w-full h-[1.5px] bg-black"></div>
                <NavBox location="Property Types" link="Property Types">
                    <template #icon>
                        <Shape />
                    </template>
                </NavBox>
                <div class="w-full h-[1.5px] bg-black"></div>
                <NavBox location="Inbox" link="Inbox">
                    <template #icon>
                        <Inbox />
                    </template>
                </NavBox>
                <div class="w-full h-[1.5px] bg-black"></div>
                <NavBox location="Profile" link="Profile">
                    <template #icon>
                        <Profile />
                    </template>
                </NavBox>
                <div class="w-full h-[1.5px] bg-black"></div>
                <NavBox location="Settings" link="Settings">
                    <template #icon>
                        <Setting />
                    </template>
                </NavBox>
            </div>
        </div>
        
    </div>

</template>

<script setup>
import NavBox from './NavBox.vue';
import DashboardIcon from '../icons/DashboardIcon.vue';
import House from '../icons/House.vue';
import Shape from '../icons/Shape.vue';
import Inbox from '../icons/Inbox.vue';
import Profile from '../icons/Profile.vue';
import Setting from '../icons/Setting.vue';
</script>
