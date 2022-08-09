<template>
  <div class="container">
    <div class="inner-container">
      <div class="text">
        <div class="inner-text-container">
          <h1>Why People Choose <br class="break">Quest Realty</h1>
          <h3>Finding Your Dream Home</h3>
          <p>
            There is no better feeling than walking through the<br class="break"> door to your new
            house and knowing you are fully<br class="break"> home. At Quest realty we make this
            dream a happy<br class="break"> reality.
          </p>

          <h3>Best Home Guarantee</h3>
          <p>
            Coming home is one of the most beautiful things only<br class="break"> the best houses
            with fully working amenities are listed<br class="break"> on our platform.
          </p>

          <h3>100% Secure Transaction</h3>
          <p>
            A thing of beauty is a joy forever - stress-free, secure,<br class="break"> seamless and fast payment service. 
          </p>
        </div>
      </div>
      <div class="image">
        <img class="Frame-290" src="../../assets/Frame-290.png" alt="perfect-house" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  background-color: var(--barley-120);
  width: 100%;
  padding: 84px 0;
  margin: 80px 0 120px;
}
.Frame-290{
  width: 700px;
  height: 520px;
}
h1 {
  color: var(--barley-40);
  margin-top: 16px;
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
}
h3 {
  margin: 24px 0 16px;
  color: #a37f5d;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
}
p{
  font-size: 13px;
}

.text {
  display: flex;
  justify-content: center;
}

.inner-text-container {
  width: 80%;
}

.image {
  padding-top: 60px;
}

img {
  max-width: 100%;
}
@media (min-width: 320px) {
  .break{
  display: none;
}
.Frame-290{
  width: 480px;
  height: 320px;
}
}
@media (min-width: 700px) {
  .container {
    padding: 84px 32px;
  }
  .inner-container {
    display: flex;
    flex-direction: row-reverse;
  }

  .image,
  .text {
    width: 50%;
    padding-top: 0;
  }
}
</style>
