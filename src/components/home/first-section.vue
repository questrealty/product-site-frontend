<template>
  <div>
    <div class="container">
      <div class="inner-container">
        <div class="image">
          <img class="Frame29" src="../../assets/Frame 29.png" alt="perfect-house" />
        </div>
        <div class="text">
          <div class="inner-text-container">
            <h1 class="Find">Find Your Next <br class="break">Perfect Place To <br class="break">Live.</h1>
            <p class="paragraph-lp">
              There is no better feeling than walking through <br  class="break"> the door to your
              new house and knowing you <br  class="break">are fully home. At Quest Realty we make
              this<br class="break"> dream a happy reality.
            </p>
            <button class="Learn-More">Learn More</button>
          </div>
        </div>
      </div>
    </div>

    <div class="banner-container">
      <div class="banner">
        <div class="banner-item location">
          <div class="title">
            <img src="../../assets/location.png" alt="Location icon" />
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;Location</h3>
          </div>
          <div class="details">
            <p>Choose State</p>
            <img src="../../assets/down-arrow.png" alt="Down Arrow" />
          </div>
        </div>
        <div class="banner-item property-type">
          <div class="title">
            <img src="../../assets/property.png" alt="Location icon" />
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;Property type</h3>
          </div>
          <div class="details">
            <p>Choose Type</p>
            <img src="../../assets/down-arrow.png" alt="Down Arrow" />
          </div>
        </div>
        <div class="banner-item price-range">
          <div class="title">
            <img src="../../assets/moneys.png" alt="Location icon" />
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;Price range</h3>
          </div>
          <div class="details">
            <p>Choose price</p>
            <img src="../../assets/down-arrow.png" alt="Down Arrow" />
          </div>
        </div>
        <div class="banner-item search">
          <button class="search" type="search">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
  margin: 120px auto 0;
}
.Find{
  margin-top: 38px;
}
img {
  max-width: 100%;
}
.Learn-More{
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
.search{
  font-weight: bold;
}
.Frame29{
  width: 800px;
  height: 600px;
}
.text {
  display: flex;
  justify-content: center;
}
.inner-text-container {
  width: 80%;
}

h1 {
  font-weight: bold;
  color:#6D553E;
  line-height: 48px;
}
.paragraph-lp{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1A1B1D;
  margin-top: 30px;
}

button {
  padding: 10px 20px;
  color: white;
  background-color: var(--barley-40);
  border-radius: 4px;
  outline: none;
  border: none;
  margin-top: 20px;
}
button:hover{
  cursor: pointer;
}

.banner-container {
  display: flex;
  justify-content: center;

    max-width: 1490px;
  margin: 10px auto 0;
  align-items: center;

  color: #352A1F;

}

.banner {
  width: 80%;
  background: #fff;
  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.582);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 4px 12px;
}

.banner-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 12px;
  margin: 4px 4px 28px;
  flex: 1 1 100%;
}
h3 {
  margin-left: 2px;
}

.details > img {
  width: 10px;
  height: 10px;
  margin-left: 2px;
}
.title,
.details {
  display: flex;
  align-items: center;
}
@media (min-width: 320px){
   .Frame29{
  width: 450px;
  height: 284px;
  margin-top: 40px;
} 
.break{
  display: none;
}
}
@media (min-width: 520px) {
  .banner-item {
    flex: 1 1 33%;
  }
  .break{
  display: none;
}
  .Frame29{
  width: 450px;
  height: 284px;
  margin-top: 40px;
}
}
@media (min-width: 700px) {
  .container {
    padding: 40px 32px;
  }
  .inner-container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }

  .image,
  .text {
    width: 100%;
  }

  img {
    height: 100%;
  }
}
@media (min-width: 1024px) {
  .banner-item {
    flex: 1 1 20%;
  }
  h1 {
    font-size: 50px;
  }
}
</style>
