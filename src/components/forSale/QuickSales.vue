<script>
export default {
    props: {
        property: {
            type: Array
        },
    },
    // methods: {
    //     debug() {
    //         console.log(this.property[0])
    //     }
    // } 
}
</script>

<template >
  <div class="quick-sales-wrapper">
        <div class="quick-sales" @click="debug">
            <div class="sale-description">
                <h2 class="heading">Quick Sales</h2>
                <p>{{ property[0].type }}</p>
                <p>{{ property[0].name }}</p>
                <p>{{ property[0].location }}</p>
                <p>{{ property[0].price }}</p>
            </div>
            <img :src="property[0].image" :alt="property[0].name" class="quickSale-image" />
        </div>
        <div class="interested">
            <div class="sale-description">
                <h2 class="heading2">You might also be interested in???</h2>
            </div>
            <img :src="property[0].image" :alt="property[0].name" class="quickSale-image2" />
        </div>
        <div class="interested">
            <div class="sale-description">
                <h2 class="heading2">You might also be interested in???</h2>
            </div>
            <img :src="property[0].image" :alt="property[0].name" class="quickSale-image2" />
        </div>
  </div>
</template>



<style scoped>





    .quick-sales-wrapper{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 50px 0 ;
        color: var(--white);
    }
    .quick-sales{
        background-color: var(--barley-40);
        margin: 50px 0;
        padding: 30px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .sale-description{
        margin-left: 20px;
    }
    .quickSale-image{
        width: 35%;
        height: 20%;
    }
    .quickSale-image2{
        width: 30%;
        height: 20%;
    }
    .heading{
        margin-bottom: 20px;
        font-size: 1.6rem;
    }
    .heading2{
        margin: 30px 0;
        font-size: 1rem;
    }
    .interested{
        display: flex;
        justify-content: space-between;
        padding: 20px 40px;
        background-color: var(--barley-40);
        margin-bottom: 50px;
    }
</style>