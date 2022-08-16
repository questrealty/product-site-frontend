<template>
  <div class="comp-container">
    <div class="wrapper wrapper2">
        <div class="icon">
            <img src="../../assets/customerDashboard/messagesIcon.png" alt="" />
            <span>Interests</span>
        </div>
        <div class="info">
            <p>Request for: <span>June</span></p>
            <p>Call back leads: <span>0</span></p>
            <p>Client leads: <span>0</span></p>
        </div>
    </div>
    <div class="wrapper icon">
        <img src="../../assets/customerDashboard/messagesIcon.png" alt="" />
        <span>Messages</span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.comp-container{
    color:#fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--barley-40);
    margin-bottom: 30px;
}
.wrapper{
    display: flex;
    background: #F6F6F6;
    padding: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.14);
}
.wrapper2{
    flex: 2;
}
.info{
    align-self: center;
}
.icon{
    display:flex;
    flex-direction: column;
    gap:1rem;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    margin: 10px;
}
/* img{
    width:  150%;
    height: auto;
} */
.info{
    line-height: 24px;
    font-weight: 500;
}
.info > p{
    font-size: .7rem;
}
</style>