<template>
  <div class="sidebar-container">
    <div :style="image" class="image">
      <h2 class="text">
        Property Info <br />
        Adverts
      </h2>
    </div>
    <div :style="image" class="image">
      <h2 class="text">
        Search for<br />
        Properties
      </h2>
    </div>
    <div :style="image" class="image">
      <h2 class="text">
        Location <br />
        Type <br />
        Price Budget
      </h2>
    </div>
    <div class="sales-ad">
      <h2 class="text">
        Property <br />
        Sales<br />
        Advert
      </h2>
      <div :style="image2" class="image-2"></div>
    </div>
    <div :style="image3" class="image-3">
      <h2 class="text">
        Available <br />
        Property
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: { backgroundImage: "url(/src/assets/forSale/Rectangle-75.png)" },
      image2: { backgroundImage: "url(/src/assets/forSale/Frame-317.png)" },
      image3: { backgroundImage: "url(/src/assets/forSale/Rectangle-76.png)" },
    };
  },
};
</script>

<style scoped>
.sidebar-container {
  width: 25%;
  display: none;
  flex-direction: column;
}
.image {
  height: 150px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6rem;
  color: var(--white);
  margin-bottom: 20px;
}
.text {
  text-align: center;
}
.sales-ad {
  height: 15%;
  background-color: #a37f5d;
  padding: 20px;
  margin-bottom: 20px;
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
}
.image-2 {
  width: 100%;
  height: 500%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  margin-top: 10px;
}
.image-3 {
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6rem;
  color: var(--white);
  margin-bottom: 20px;
}

@media (min-width: 786px) {
  .sidebar-container {
    display: flex;
  }
}
</style>
