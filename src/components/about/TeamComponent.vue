<template>
  <div class="container">
    <div class="text">
      <h2>Meet the Team</h2>
      <h3>Team & Executive Members</h3>
      <p>
        Meet the Team! Team & Executive Members Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum
        ac non Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Orci erat vestibulum ac non. Lorem Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem
      </p>
    </div>
    <div class="team-profiles">
      <div><img src="../../assets/about-assets/Frame 333.svg" alt="" /></div>
      <div><img src="../../assets/about-assets/Frame 334.svg" alt="" /></div>
      <div><img src="../../assets/about-assets/Frame 335.svg" alt="" /></div>
      <div><img src="../../assets/about-assets/Frame 336.svg" alt="" /></div>
      <div><img src="../../assets/about-assets/Frame 333-1.svg" alt="" /></div>
      <div><img src="../../assets/about-assets/Frame 334-1.svg" alt="" /></div>
      <div><img src="../../assets/about-assets/Frame 335-1.svg" alt="" /></div>
      <div><img src="../../assets/about-assets/Frame 336-1.svg" alt="" /></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 100px;
  padding: 0 40px;
}

.team-profiles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

h2 {
  text-align: center;
  font-size: 32px;
}

h3 {
  text-align: center;
}

p {
  margin: 32px 0;
}
/* .team-profiles {
} */

@media (min-width: 1024px) {
  .container {
    margin-top: 200px;
    color: #6d553e;
    padding: 0 100px;
  }

  .text {
    min-width: 815px;
    min-height: 228px;
  }

  .team-profiles {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 40px;
  }
}
</style>
