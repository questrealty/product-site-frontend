<template>
  <div>
    <div class="container flex">
      <h1>Our Services</h1>

      <div class="services flex">
        <div class="service-items flex">
          <img src="../../assets/Frame-299.png" alt="" />
          <h3>Locate your dream house</h3>
          <p>We are on a quest to help you locate<br class="break"> your dream house.</p>
        </div>
        <div class="service-items flex">
          <img src="../../assets/Frame-300.png" alt="" />
          <h3>Connect with an Agent</h3>
          <p>We are on a quest to help you connect<br  class="break"> with an agent</p>
        </div>
        <div class="service-items flex">
          <img src="../../assets/Frame-301.png" alt="" />
          <h3>We offer the best houses yet</h3>
          <p>We are on a quest to get you the<br  class="break"> best houses available</p>
        </div>
      </div>
      <button class="view" type="button">View More Services</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  flex-direction: column;
}
.view{
  font-weight: bold;
}
h1 {
  color: var(--barley-40);
  font-weight: bold;
  margin-bottom: 64px;
}
p{
  font-size: 14px;
  text-align: center;
}
.services {
  width: 80%;
  display: flex;
  flex-direction: column;
}

.service-items {

  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 8px;
}

.service-items:hover {
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.479);
}

h3 {
  margin: 24px 0 8px;
  color: var(--barley-40);
  font-size: 23px;
}

button {
  padding: 16px 20px;
  color: white;
  background-color: var(--barley-40);
  border-radius: 4px;
  outline: none;
  border: none;
  margin-top: 20px;
  font-weight: 500;
  cursor: pointer;
}
@media (min-width:320) {
  .break{
    display: none;
  }
  h3{
    text-align: center;
  }
}
@media (min-width: 800px) {
  .services {
    width: 90%;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .service-items {
    flex: 1 1 45%;
    margin-left: 12px;
  }
}

@media (min-width: 1200px) {
  .service-items {
    flex: 1 1 30%;
  }
}
</style>
