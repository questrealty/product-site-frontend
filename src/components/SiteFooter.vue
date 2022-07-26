<template>
  <div>
    <div class="footer-nav">
      <div class="display-border">
        <div class="group1">
          <img
            src="../assets/logo.png"
            alt="quest realty logo"
            width="100"
            height="70"
          />
          <div class="footer-nav-links">
            <router-link to="/">Support</router-link>
            <router-link to="/">Services</router-link>
            <router-link to="/">About Us</router-link>
          </div>
        </div>
        <div class="btn">
          <button>Post your properties</button>
        </div>
      </div>
    </div>
    <div class="footer-links-container">
      <div class="footer-link">
        <div class="section1">
          <p>Patnerships</p>
          <div class="">
            <img src="../assets/theta.png" alt="" />
            <img src="../assets/iost.png" alt="" />
            <img src="../assets/vibe.png" alt="" />
            <img src="../assets/dropbox.png" alt="" />
          </div>
        </div>
        <div class="section2 flex-col">
          <router-link to="/">Help videos</router-link>
          <router-link to="/">Features</router-link>
          <router-link to="/">Support</router-link>
        </div>
      </div>
      <div class="footer-link">
        <div class="section3 flex-col">
          <router-link to="/">Payment & Tax</router-link>
          <router-link to="/">Privacy Policies</router-link>
          <router-link to="/">Terms of Use</router-link>
          <router-link to="/">Disclaimer</router-link>
        </div>
        <div class="section4 flex-col">
          <router-link to="/">Contact Us</router-link>
          <router-link to="/">Privacy Policies</router-link>
          <router-link to="/">Terms of Use</router-link>
          <router-link to="/">Disclaimer</router-link>
        </div>
      </div>
      <div class="subscribe">
        <h4>Subscribe to our Newsletter</h4>
        <div class="data-collection">
          <input type="text" placeholder="Enter your email address" />
          <button>SUBSCRIBE</button>
        </div>
        <h3>Our Address</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere
          magnam architecto natus officiis sapiente?
        </p>
        <p>Connect With us</p>
        <div class="social-media">
          <img src="../assets/twitter-icon.png" alt="twitter" title="Twitter" />
          <img
            src="../assets/instagram-icon.png"
            alt="instagram"
            title="Instagram"
          />
          <img src="../assets/linkedin-icon.png" alt="linkedin" title="" />
          <img src="../assets/facebook-icon.png" alt="facebook" title="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}

.footer-nav {
  padding-top: 120px;
}

.display-border {
  border-top: 1px solid var(--barley-40);
  padding: 0 16px;
  width: 100%;
  display: flex;
  align-items: center;
}
.group1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
}
.footer-nav-links {
  display: none;
  font-size: 18px;
  width: 70%;
  margin-left: 24px;
}

.footer-nav-links > a {
  margin-right: 44px;
  flex: 1 1 30%;
  color: var(--barley-40);
}

a {
  text-decoration: none;
}

.btn {
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
}

button {
  background-color: #6d553e;
  color: white;
  padding: 12px 32px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
}

button:hover {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
}

.footer-links-container {
  padding: 54px 0px 54px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  background-color: var(--barley-40);
  width: 100%;
}

.footer-links-container,
.footer-links-container a {
  color: white;
}

.footer-link {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
}

.section1,
.section2,
.section3,
.section4 {
  width: 50%;
}

.section1 > a,
.section2 > a,
.section3 > a,
.section4 > a {
  margin-bottom: 12px;
}
.flex-col {
  display: flex;
  flex-direction: column;
}

.subscribe {
  width: 60%;
}

.data-collection {
}

@media (min-width: 940px) {
  .group1 {
    width: 70%;
  }

  .footer-nav-links {
    display: flex;
    margin-left: 40px;
  }

  .footer-nav-links > a {
    margin-right: 4px;
  }

  button {
    padding: 16px 32px;
    font-size: 16px;
  }

  .footer-links-container {
    flex-direction: row;
  }

  .footer-link {
    width: 30%;
  }

  .subscribe {
    width: 40%;
  }
}
</style>
