<template>
  <div id="property-info">
    <div class="info">
        <div class="count">
            <span>{{propertyCount}}</span>
        </div>
        <div>
            <h4>Properties for {{propertyType}}</h4>
            <div v-if="type=='agent'">
              <p v-if="propertyCount == 0">You don't have any properties for {{propertyType}}</p>
              <p v-else>This is the list of properties for {{propertyType}}</p>
            </div>
            <p v-if="type=='customer'">This is the list of properties available for {{propertyType}}</p>
            
        </div>
        <button>Post a property</button>
    </div>
    <div class="progress-circle">
        <CircleProgress
    :percent="70"
    :viewport="true"
    :show-percent="true"
    empty-color="#F6F6F6"
      :border-width="8"
      :border-bg-width="30"
      fill-color="#6D553E"
      background="#EDE5DF"
    class="circle"
    :class="[propertyType == 'rent'? 'rent': '']" 
  />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress"
export default {
  name: "App",
  components: {
    CircleProgress: CircleProgress,
  },
  props:{
    type:{
      type:String
    },
    propertyCount:{
      type:Number
    },
    propertyType:{
      type:String
    }
  },
  setup(props) {
    const percent = ref(75);
    onMounted(() => {
      setInterval(() => {
        if (percent.value === 25) {
          percent.value = 75;
        } else {
          percent.value = 25;
        }
      }, 1000);
    });

    return {
      percent,
    };
  },
};
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
    justify-content: space-between;
    align-items: center;
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
.circle{ 
    color:#6D553E;
    font-weight: 700;
}

.circle::after{
  position:absolute;
  content: "sold";
  top:55%;
  left:50%;
  transform:translateX(-50%);
  font-size: 0.8rem;
}
.circle.rent::after{
  position:absolute;
  content: "rented";
  top:55%;
  left:50%;
  transform:translateX(-50%);
  font-size: 0.8rem;
}

.circle >>> .current-counter::after{
    position: relative;
    content: "%";
}

</style>