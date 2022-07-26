<template>
  <div class="container">
    <div>
      <div class="headings">
        <h2>About Us</h2>
        <h3>Who are we</h3>
      </div>
      <p>
        About Us Who we are Quest Realty is a real estate digital marketing
        agency that is focused on increasing sales and generating leads for real
        estate agencies through the digital space. We serve both real estate
        agents, investors, house seekers etc.. We help brands build authority
        across all social media platforms, generate leads and increase sales by
        running adverts across all social media platforms and also by making use
        of Search Engine Optimization.Video Intro explaining what we do
      </p>
    </div>
    <div class="video-content">
      <img
        src="../../assets/about-assets/Frame-355.svg"
        alt=""
        class="img-fluid"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #ede5df;
  padding: 60px 40px 100px;
  color: #6d553e;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
}

h2 {
  font-size: 32px;
}

.img-fluid {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p {
  padding-top: 20px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
}
.video-content {
  max-height: 300px;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 20px;
}

@media (min-width: 640px) {
  .headings > h2 {
    font-size: 44px;
  }
  .container {
    padding: 100px 70px;
  }
}

@media (min-width: 1024px) {
  .container {
    display: flex;
    gap: 197px;
    text-align: left;
    padding-top: 200px;
  }
  .container > div {
    width: 50%;
  }
  .headings > h3 {
    font-size: 24px;
  }

  p {
    font-size: 1rem;
    margin-top: 30px;
  }

  .video-content {
    margin-top: 0;
    max-height: none;
    max-width: none;
  }
}
</style>
