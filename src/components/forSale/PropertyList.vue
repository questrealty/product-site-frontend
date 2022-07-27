<template>
  <div class="propertylist-container">
    <ul>
      <li v-for="(property, index) in properties" :key="index" class="item">
        <p class="item-heading">{{ property.title }}</p>
        <div class="description-wrapper">
          <div>
            <p class="description">{{ property.name }}</p>
            <img class="image" :src="property.image" :alt="property.name" />
          </div>
          <div class="info">
            <p>{{ property.details }}</p>
            <p>{{ property.type }}</p>
            <p>{{ property.location }}</p>
            <p>{{ property.price }}</p>
          </div>
        </div>
        <p class="contact">Agents <br /> Contact <br /> Number
        </p>
        <div></div>
      </li>
    </ul>
    <PageControl />
    <QuickSales :property="properties" />
  </div>
</template>

<script>
import PageControl from "./PageControl.vue";
import QuickSales from "./QuickSales.vue";

export default {
  data() {
    return {
      properties: [
        {
          name: "Property Type",
          image: "/src/assets/forSale/Frame-314.png",
          title: "Details of Property",
          details: "Property Details",
          type: "Type",
          location: "Location",
          price: "Price",
          contact: "Agents incharge contact",
        },
        {
          name: "Property Type",
          image: "/src/assets/forSale/Frame-315.png",
          title: "Details of Property",
          details: "Property Details",
          type: "Type",
          location: "Location",
          price: "Price",
          contact: "Agents incharge contact",
        },
        {
          name: "Property Type",
          image: "/src/assets/forSale/Frame-316.png",
          title: "Details of Property",
          details: "Property Details",
          type: "Type",
          location: "Location",
          price: "Price",
          contact: "Agents incharge contact",
        },
        {
          name: "Property Type",
          image: "/src/assets/forSale/Frame-317.png",
          title: "Details of Property",
          details: "Property Details",
          type: "Type",
          location: "Location",
          price: "Price",
          contact: "Agents incharge contact",
        },
      ],
    };
  },
  components: { PageControl, QuickSales },
};
</script>

<style scoped>

.propertylist-container {
  width: 100%;
}
.item {
  background-color: var(--barley-120);
  padding: 30px;
  margin: 0 0 30px;
  color: var(--barley-40);
  display: flex;
  flex: 1;
  flex-direction: column;
}
.description-wrapper {
  display: flex;
  align-items: center;
}
.description {
  color: var(--barley-40);
text-align: center;
  margin: 10px auto;
}
.image {
  width: 250px;
  height: 250px;
}


@media (min-width: 320px) {
    .description-wrapper {
        flex-direction: column;
        align-items: center;
    }
    .item-heading {
        margin: 10px auto;
    }
    .info {
        margin: 20px 0;
        align-self: center;
    } 
    .item {
        font-size: .7rem;
    }
    .contact {
        align-self: flex-end;
        margin: 0;
        font-size: .5rem;
    }
}

/* @media (min-width: 768px) {
    .image {
        width: 300px;
        height: 300px
    }
} */

@media (min-width: 1024px){
    .propertylist-container{
        width: 70%;
    }

    .item {
        font-size: 1rem;
    }
    .description-wrapper {
        flex-direction: row;
    }
    .item-heading {
        margin: 15px 0px;
    }
    
    .info {
        margin: 0 40px;
        align-self: center;
    }
    
    .contact{
        font-size: .8rem;
        margin: -80px 50px 20px 0;
    }  
}

/*  */




</style>
