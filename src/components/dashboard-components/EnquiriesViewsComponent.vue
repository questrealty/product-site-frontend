<template>
  <div class="comp-container">
    <h4>{{componentHeading}}</h4>
    <span>{{count}}</span>
  </div>
</template>

<script>
export default {
    props:{
        componentHeading:{
            type:String
        },
        count:{
            type:Number
        }
    }
}
</script>

<style scoped>
.comp-container{
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.14);
    background: #fff;
    padding:15px 45px;
    color:#6D553E;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    border-radius: 5px;
}
</style>