<template>
  <div class="icon-container flex">
    <div class="brown-section flex">
      <div class="section-content flex">
        <img class="icon" :src="iconSource" alt="dashboard-icon" />
        <div class="text-wrapper">
          <p class="icon-text">{{ iconText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['iconText', 'iconSource'],
  // data() {
  //     return {
  // },
  // methods: {
  //     debug() {
  //         console.log(this.property[0])
  //     }
};
</script>

<style scoped>
.icon-container {
  background-color: var(--barley-40);
  height: 15vh;
  width: 100%;
  border-bottom: 1px solid #211913;
}
.section-content {
  flex-direction: column;
}

.icon {
  width: 30%;
  height: auto;
  opacity: 0.3;
  transition: opacity 0.5s linear;
}

.text-wrapper {
  margin-top: 10px;
}

.icon-text {
    text-align: center;
  color: white;
  opacity: 0.3;
  font-size: .6rem;
  font-weight: 600;
  line-height: 30px;
  transition: opacity 0.5s linear;
}

.icon-container:hover .icon-text {
  filter: opacity(1);
  opacity: 1;
}

.icon-container:hover .icon {
  filter: opacity(1);
  opacity: 1
}
@media (min-width: 600px) {
.icon-text{
    font-size: .8rem;
    }
}
@media (min-width: 768px) {
  .icon-container {
    height: 20vh;
  }
  .icon {
    width: 35%;
  }
  .text-wrapper {
  margin-top: 5px;
}
  .icon-text {
  font-size: 1rem;
  font-weight: 700;
}
}
</style>
