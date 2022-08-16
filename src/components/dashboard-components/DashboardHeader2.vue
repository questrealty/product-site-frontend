<template>
  <div id="dashboard-header">
    <div class="welcome-greet">
        <h2>Dashboard</h2>
        <p>Welcome to Quest Realty Agent Page</p>
    </div>
    <div class="dashboard-notification">
        <div class="inbox-field">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button class="cancel-btn"><img src="../../assets/agent-dashboard-assets/cancel.svg" alt=""></button>
        </div>
        <div class="button-group">
            <button class="refresh-btn">Refresh</button>
            <button class="settings-btn"><img src="../../assets/agent-dashboard-assets/settings-vector.svg" alt=""></button>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#dashboard-header{
    color:#6D553E;
}

button{
    border:none;
    background: transparent;
}

button:hover:not(.cancel-btn){
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.14);
}

h2{
    font-size:32px;
    margin-bottom:0.7rem;
}

.inbox-field{
    position: relative;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.14);
    padding:0.6rem 1rem;
    display:flex;
    justify-content: space-between;
    margin:15px 0;
    width:100%;
    border-radius: 9px;
}

.inbox-field::before{
    width:9px;
    content: "";
    background:#6D553E;
    left: 0;
    top:0;
    bottom:0;
    position: absolute;
    border-radius: 9px;
}

.inbox-field > button{

}

.refresh-btn{
    border-radius: 10px;
    background:#6D553E;
    color:#fff;
    padding:10px;
    margin-right: 10px;
}
.settings-btn{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.14);
    width:40px;
    height: 40px;
    border-radius: 10px;
}

.settings-btn > img{
    width:100%;
    max-width:20px;
    height: auto;
    object-fit: cover;
}

@media (min-width:1024px) {
    #dashboard-header{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    .dashboard-notification{
        display: flex;
        gap:20px;
    }

    .inbox-field{
        min-width:600px;
    }

    .button-group{
        display: flex;
        align-items: center;
    }
}
</style>