<template>
  <div id="properties-component">
    <div class="main-contents">
        <img src="../../assets/agent-dashboard-assets/building.svg" alt="">
        <div>
            <h3>Total Properties</h3>
            <div v-if="type=='agent'">
                <p v-if="numberOfProperties == 0">You don't have any property listed yet</p>
                <p v-else>This is the list of properties posted by you</p>
            </div>
            <p v-if="type=='customer'">This is the list of properties available for sale</p>
            
        </div>
        <div class="counter">
            <span>{{numberOfProperties}}</span>
        </div>
    </div>
    <button v-if="type=='agent'" class="post-property-btn">Post a property</button>
    <button v-if="type=='customer'" class="view-property-btn">View Properties</button>
  </div>
</template>

<script>
export default {
    props:{
        type:{
            type:String,
        }
    },
    data(){
        return{
            numberOfProperties:0
        }
    }

}
</script>

<style scoped>
#properties-component{
    background: #6D553E;
    color:#fff;
    padding:1.2rem 0.8rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap:1rem;
}
.main-contents{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.main-contents>img{
    width:100%;
    height: auto;
    object-fit:cover;
    max-width: 80px;
}

.counter{
    width:50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    color:#6D553E;
    display:flex;
    justify-content: center;
    align-items: center;
}
.counter > span{
    font-weight: 700;
    font-size:1rem;
}

h3{
    margin-bottom: 10px;
}

p{
    font-weight: 500;
    line-height: 24px;
}

button{
    border:none;
    align-self: flex-end;
}
.post-property-btn{
    padding: 10px;
    background: #fff;
    border-radius: 12px;
}

.post-property-btn:hover{
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
}
.view-property-btn{
    background-color:transparent;
    color:#fff;
}
.view-property-btn:hover{
    text-decoration: underline;
}

@media (min-width:1024px) {
    #properties-component{
        padding:1.5rem 1.1rem;
    }
    .main-contents>img{
        max-width: 120px;
    }
    .counter{
        width:70px;
        height: 70px ;
        border-radius: 50%;
        background: #fff;
        color:#6D553E;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .counter > span{
        font-size:2rem;
    }
}
</style>