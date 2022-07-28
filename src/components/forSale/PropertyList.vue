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
        <p class="contact">Agents Contact Number</p>
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
.item {
  background-color: var(--barley-120);
  padding: 30px;
  margin: 0 0 30px;
  border-radius: 4px;
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

@media (min-width: 280px) {
  .propertylist-container {
    width: 100%;
  }
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
    font-size: 0.7rem;
  }
  .contact {
    width: 100%;
    text-align: right;
    margin: 0;
    font-size: 0.5rem;
  }
}

@media (min-width: 600px) {
  .item {
    font-size: 1rem;
  }
  .image {
    width: 300px;
    height: 300px;
  }
  .contact {
    font-size: 0.7rem;
  }
}

@media (min-width: 786px) {
  .propertylist-container {
    width: 70%;
  }
}

@media (min-width: 1024px) {
  .item {
    font-size: 1rem;
  }
  .description-wrapper {
    flex-direction: row;
  }
  .item-heading {
    margin: 15px 0px;
  }
  .image {
    width: 300px;
    height: 300px;
  }
  .info {
    margin: 0 40px;
    align-self: center;
  }
  .contact {
    align-self: flex-end;
    width: 10%;
    font-size: 0.8rem;
    margin: -80px 50px 20px 0;
  }
}
</style>
