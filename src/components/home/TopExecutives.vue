<template>
  <div class="container flex">
    <h1>Meet our Top Executives</h1>
    <div class="inner-container flex">
      <div class="executive-container">
        <img src="../../assets/executive-1.png" alt="First" />
        <h4>Etieno Bassey Ekpo</h4>
        <p>Team Lead</p>
      </div>
      <div class="executive-container">
        <img
          src="../../assets/executive-2.png"
          alt="Second"
          class="executive two"
        />
        <h4>Opeyemi Olatunde</h4>
        <p>Asst. Team Lead</p>
      </div>
      <div class="executive-container">
        <img
          src="../../assets/executive-3.png"
          alt="Third"
          class="executive three"
        />
        <h4>Jane Bedford</h4>
        <p>Product Manager</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  flex-direction: column;
  max-width: 100%;
  background-color: var(--barley-120);
  padding: 80px 0;
}

h1 {
  text-align: center;
  color: var(--barley-40);
}
.inner-container {
  flex-wrap: wrap;
  max-width: 1440px;
  margin: 10px auto 0;
  gap: 30px;
  justify-content: space-around;
}
h4{
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #6D553E;
}
img {
  width: 200px;
  height: 200px;
  margin-bottom: 12px;
}

.executive-container {
  margin-bottom: 40px;
}

.executive-container > p,
h4 {
  text-align: center;
}

@media (min-width: 570px) {
  .inner-container {
    margin-top: 80px;
    justify-content: space-between;
  }
}
</style>
