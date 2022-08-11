<template>
  <div class="container">
    <div class="text">
      <h2>Meet the Team!</h2>
      <h3>Team & Executive Members</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum ac non Lorem Lorem ipsum dolor sit amet consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci erat vestibulum ac non. Lorem
      </p>
    </div>
    <div class="team-profiles">
      <div>
        <img src="../../assets/about-assets/Frame-333.svg" alt="team member" />
      </div>
      <div>
        <img src="../../assets/about-assets/Frame-334.svg" alt="team member" />
      </div>
      <div>
        <img src="../../assets/about-assets/Frame-335.svg" alt="team member" />
      </div>
      <div>
        <img src="../../assets/about-assets/Frame-336.svg" alt="team member" />
      </div>
      <div>
        <img
          src="../../assets/about-assets/Frame-333-1.svg"
          alt="team member"
        />
      </div>
      <div>
        <img
          src="../../assets/about-assets/Frame-334-1.svg"
          alt="team member"
        />
      </div>
      <div>
        <img
          src="../../assets/about-assets/Frame-335-1.svg"
          alt="team member"
        />
      </div>
      <div>
        <img
          src="../../assets/about-assets/Frame-336-1.svg"
          alt="team member"
        />
      </div>
    </div>
    <button>View other members</button>
  </div>
</template>

<style scoped>
.container {
  margin-top: 100px;
  padding: 0 40px;
  text-align: center;
  font-size: 0.8rem;
  margin-bottom:60px;
}

.text{
    margin:0 auto;
}

.team-profiles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top:20px;
}

.team-profiles > div >img{
    width:125px;
    height: 125px;
}

h2 {
  text-align: center;
}

h3 {
  text-align: center;
}

p {
  margin: 32px 0;
  line-height: 24px;
}

button{
    background-color:#6D553E;
    color:#fff;
    padding:16px 32px;
    border:none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    margin-top:40px;
    border-radius: 5px;
    font-weight: 700;
    font-size:1rem
}

@media (min-width: 640px){

    .text{
        font-size: 1rem;
        width:80%;
    }
    .team-profiles > div >img{
    width:180px;
    height: 180px;
}
}

@media (min-width: 1024px) {
  .container {
    margin-top: 200px;
    margin-bottom:80px;
    padding: 0 100px;
  }

  .text {
    min-width: 815px;
    min-height: 228px;
    max-width:815px;
  }

  .team-profiles {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 40px;
    margin-top:80px;
  }

  .team-profiles > div >img{
    width:100%;
    height: 100%;
}
}
</style>
