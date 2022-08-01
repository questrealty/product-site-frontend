<script>
export default {
  props: {
    property: {
      type: Array,
    },
  },
  // methods: {
  //     debug() {
  //         console.log(this.property[0])
  //     }
  // }
};
</script>

<template>
  <div class="quick-sales-wrapper">
    <div class="quick-sales" @click="debug">
      <h2 class="heading">Quick Sales</h2>
      <div class="sale-description">
        <div>
          <p>{{ property[0].type }}</p>
          <p>{{ property[0].name }}</p>
          <p>{{ property[0].location }}</p>
          <p>{{ property[0].price }}</p>
        </div>
        <img
          :src="property[0].image"
          :alt="property[0].name"
          class="quickSale-image"
        />
      </div>
    </div>
    <div class="interested">
      <div class="sale-description">
        <h2 class="heading2">You might also be interested in???</h2>
      </div>
      <img
        :src="property[0].image"
        :alt="property[0].name"
        class="quickSale-image2"
      />
    </div>
    <div class="interested">
      <div class="sale-description">
        <h2 class="heading2">You might also be interested in???</h2>
      </div>
      <img
        :src="property[0].image"
        :alt="property[0].name"
        class="quickSale-image2"
      />
    </div>
  </div>
</template>

<style scoped>
.quick-sales-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  color: var(--white);
}
.quick-sales {
  background-color: var(--barley-40);
  margin: 50px 0;
  padding: 30px 40px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sale-description {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.quickSale-image {
  width: 35%;
  height: 20%;
}

.heading {
  margin-bottom: 20px;
  font-size: 1.6rem;
}

.interested {
  display: flex;
  justify-content: space-between;
  padding: 20px 60px 20px 40px;
  border-radius: 3px;
  background-color: var(--barley-40);
  margin-bottom: 50px;
}

@media (min-width: 280px) {
  .quick-sales {
    align-items: center;
  }
  .sale-description {
    flex-direction: column-reverse;
    align-items: center;
    font-size: 0.8rem;
  }
  .sale-description div {
    margin-top: 20px;
  }
  .quickSale-image,
  .quickSale-image2 {
    width: 100%;
    height: 100%;
    margin-top: 0;
  }
  .interested {
    flex-direction: column;
  }
  .heading2 {
    margin: 20px 0;
    font-size: 0.8rem;
    text-align: center;
  }
}

@media (min-width: 600px) {
  .quick-sales {
    align-items: flex-start;
  }
  .sale-description {
    flex-direction: row;
    align-items: flex-start;
  }
  .sale-description div {
    margin-top: 0;
  }
  .quickSale-image {
    margin-top: -50px;
    width: 35%;
    height: 20%;
  }
  .interested {
    flex-direction: row;
  }
  .heading2 {
    font-size: 1rem;
  }
  .quickSale-image2 {
    width: 30%;
    height: 20%;
  }
}
@media (min-width: 1024px) {
  .sale-description {
    font-size: 1rem;
  }
}
</style>
