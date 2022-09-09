<template>
    <div class="">
        <FilterBar :showBar="false" />
        <div class="mt-[34px] max-w-[1440px] mx-auto px-[40px]">
            <div>
                <SearchBar />
                <div class="flex md:items-end gap-[63px] justify-between md:flex-row flex-col">
                    <div class="mt-[63px] w-full">
                        <h1 class=" text-[#6D553E] h3-semi mb-[19px]">BELOW ARE THE INFORMATION OF THE PROPERTY SELECTED
                        </h1>

                        <div
                            class="bg-[#EDE5DF] rounded-[5px] py-[12px] pl-[31px] pr-[41px] max-w-[920px] w-d min-h-[242px] h-full flex flex-col justify-between">
                            <div>
                                <h2 class="text-[#6D553E] h4-semi max-w-[432px]">Five Bedroom Semi Detached Duplex
                                    World Oil Filing Station, Ilasan Lekki Lagos.</h2>
                                <p class="mt-[7px] mb-[55px] h5-med text-[#6D553E] max-w-[381px]">Lorem ipsum dolor sit
                                    amet,
                                    consectetur
                                    adipiscing elit. Orci erat
                                    vestibulum ac non. Lorem </p>
                            </div>
                            <div class="flex justify-between ">
                                <small class="underline text-[#6D553E] h5-reg">View similar appartment</small>
                                <p class=" text-[#6D553E] h4-reg">Price</p>
                            </div>
                        </div>
                    </div>

                    <div class="text-center md:max-w-[377px] w-full bg-[#6D553E] py-[48px]  rounded-[5px] text-white">
                        <h1 class="h1-bold max-w-[239px] mx-auto !leading-[75px] !font-[50px]">Partners
                            incharge</h1>
                        <p class="h4-bold">Phone Contacts</p>
                        <p class="h4-bold">Message </p>
                    </div>


                </div>

            </div>
            <div class="mt-[20px] mb-[53px] relative bg-[#EDE5DF] px-[59px] pb-[40px]">
                <div class="absolute right-[57px] top-[25px]">
                    <h2 class="h4-bold">Favorite</h2>
                </div>
                <div class="flex justify-between gap-[64px]">
                    <div class="pt-[80px] !max-w-[600px] !max-h-[600px] w-full">
                        <img class="h-full object-cover  w-full" src="../assets/Frame-291-3.png" alt="">
                    </div>
                    <div class="w-full max-w-[416px] flex flex-col gap-[48px]">
                        <div class="pt-[80px] !max-w-[416px]">
                            <img class=" object-cover w-full !max-h-[220px]" src="../assets/Frame-291-3.png" alt="">
                        </div>
                        <div class=" max-w-[416px] ">
                            <img class="object-cover w-full !max-h-[220px]" src="../assets/Frame-291-3.png" alt="">
                        </div>
                    </div>
                </div>

            </div>
            <div class="mb-[28px]">
                <ul class="md:flex grid sm:grid-cols-2 grid-cols-1 justify-center gap-[48px]">
                    <li v-for="(index) in 4" :key="index">
                        <img class="sm:max-w-[250px] object-cover w-full h-full max-h-[220px]" src="../assets/Frame-291.png" alt="">
                    </li>
                </ul>
            </div>
            <div class="flex justify-between items-center max-w-[1200px] mx-auto lg:flex-row flex-col">
                <div class="sm:flex gap-[38px] grid grid-cols-2   h4-bold text-[#6D553E]">
                    <h1>256sq ft</h1>
                    <h1>5 Bedrooms</h1>
                    <h1>6 Bathrooms</h1>
                    <h1>6 Toilets</h1>
                </div>
                <div class="flex gap-[32px] items-center lg:mt-0 mt-[20px]">
                    <button class="
                py-[10px]
               px-[16px]
                rounded-[5px]
                bg-[#6D553E] text-white
                outline-none h5-bold
                border-none
              ">Share</button>
                    <button class="
                py-[10px]
                px-[16px] h5-bold
                rounded-[5px]
                bg-[#6D553E] text-white
                outline-none
                border-none
              ">Save</button>
                </div>
            </div>
            <div class=" max-w-[920px] mx-auto">
                <div class="bg-[#EDE5DF]  text-[#6D553E] mt-[38px] py-[34px] px-[44px]">
                    <h1 class="h4-bold">Safety/more tips on apartment</h1>
                    <p class="h5-med mt-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci erat
                        vestibulum ac non. Lorem Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem
                        Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem </p>
                </div>
                <div class="flex justify-center gap-[84px] my-[48px]">
                    <button class="
                py-[24px]
                md:px-[32px]
                px-[5px]
                rounded-[5px]
                bg-[#6D553E] text-white
                outline-none h5-bold
                border-none
              ">Call Agent</button>
                    <button class="
                py-[24px]
                md:px-[32px]
                px-[5px]
                rounded-[5px]
                bg-[#6D553E] text-white
                outline-none h5-bold
                border-none
              ">Message Agent</button>
                </div>

                <div class="bg-[#EDE5DF]  text-[#6D553E]  py-[19px] px-[44px]">
                    <h1 class="h4-bold">Appartment Key features</h1>
                    <p class="h5-med mt-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci erat
                        vestibulum ac non. Lorem Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem
                        Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem </p>
                    <h1 class="h4-bold mt-[53px]">Description</h1>
                    <p class="h5-med mt-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci erat
                        vestibulum ac non. Lorem Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem
                        Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem </p>

                </div>
                <div class="bg-[#211913]  text-[#ffffff] mt-[18px] py-[34px] px-[44px]">
                    <h1 class="h4-bold">Disclaimer</h1>
                    <p class="h5-med mt-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci erat
                        vestibulum ac non. Lorem Lorem ipsum dolor sit amet, consectetur adipiscing eli </p>
                </div>

                <h1 class="text-center mt-[84px]  text-[#6D553E] h1-bold">Similar Properties</h1>

                <div class="mb-[50px] ">
                    <ul v-for="(index) in 3" :key="index">
                        <li>
                            <div class="bg-[#EDE5DF] flex items-center flex-col sm:flex-row  text-[#6D553E] mt-[38px] py-[34px] px-[44px]">
                                <div class="text-center">
                                    <p>Details of property</p>
                                    <p>Property Type</p>
                                    <img class="!max-w-[227px] !max-h-[227px] h-full" src="../assets/Frame-299.png"
                                        alt="">
                                </div>
                                <div>
                                    Property Details
                                    Type
                                    Location
                                    Price
                                </div>
                                <div class="sm:self-end">
                                    <p>Agents
                                        incharge
                                        contact</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        <SiteFooter />
    </div>
</template>

<script setup>
import FilterBar from '../components/forSale/FilterBar.vue';
import SearchBar from '../components/SearchBar.vue';
import SiteFooter from '../components/SiteFooter.vue';

</script>
