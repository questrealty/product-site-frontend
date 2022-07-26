<template>
  <div class="container">
    <img
      src="../../assets/about-assets/Frame 353.svg"
      alt=""
      class="img-fluid"
    />
    <h1>Your Quest Made Easy</h1>
  </div>
</template>

<style scoped>
.container {
  margin-top: 90px;
  position: relative;
  height: 500px;
}

.img-fluid {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
}

@media (min-width: 1024px) {
  .container {
    height: 480px;
  }
  h1 {
    font-size: 70px;
    width: 833px;
  }
}
</style>
