<template>
  <div class="comp-container" :class="[type=='messages'? 'messages' : '']">
    <div class="icon">
        <div v-if="type=='requests'">
            <img src="../../assets/agent-dashboard-assets/requests.svg" alt="" />
            <span>Requests</span>
        </div>
        <div v-if="type=='messages'">
            <img src="../../assets/agent-dashboard-assets/messages.svg" alt="" />
            <span>Messages</span>
        </div>
    </div>
    <div class="info" v-if="type=='requests'">
        <p>Request for: <span>June</span></p>
        <p>Call back leads: <span>0</span></p>
        <p>Client leads: <span>0</span></p>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        type:{
            type:String
        }
    }
}
</script>

<style scoped>
.comp-container{
    background: #6D553E;
    color:#fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.14);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding:15px 35px;
    align-items: center;
}
.comp-container.messages{
    justify-content: center;
    width:fit-content;
}
.icon>div{
    display:flex;
    flex-direction: column;
    gap:1rem;
    font-weight: 700;
    align-items: center;
}
.icon span{
    font-size: 14px;
}

.icon> img{
    max-width:40px;
    width:100%;
    height: auto;
    object-fit: cover;
}

.info{
    display: none;
    line-height: 24px;
    font-weight: 500;
    margin-left: 30px;
}
.info span{
    font-weight: 700;
}

@media (min-width:500px) {
    .info{
        display: block;
    }
}

@media (min-width:786px) {
    .info{
        display: none;
    }
}
@media (min-width:1025px) {
    .info{
        display: block;
    }
}
</style>