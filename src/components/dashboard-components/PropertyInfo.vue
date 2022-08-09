<template>
  <div id="property-info">
    <div class="info">
        <div class="count">
            <span>0</span>
        </div>
        <div>
            <h4>Properties for Sale</h4>
            <p>You don't have any properties for sale</p>
        </div>
        <button>Post a property</button>
    </div>
    <div class="progress-circle">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#property-info{
    background: #F6F6F6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.14);
    border-radius: 5px;
    display:flex;
    color:#6D553E;
    padding:15px 17px;
    font-weight: 500;
}

#property-info h4{
    margin-bottom: 0.5rem;
}

#property-info p{
    font-size: 0.8rem;
}

.info>div{
    margin-bottom:0.9rem;
}

.count{
    background: #6D553E;
    color:#fff;
    font-weight: 700;
    width:40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

button{
    color:#fff;
    background: #6D553E;
    border-radius: 6.35559px;
    border: none;
    padding:0.6rem
}
</style>