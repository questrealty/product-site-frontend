<script setup>
import { reactive } from "vue";
import { ref } from "vue";

const isOpen = ref(false);
const isShow = ref(false);
const state = reactive({
  menuIsVisible: false,
});
</script>
<template>
  <header class="header">
    <div class="mobile-view">
      <div class="logo">
        <img src="../assets/logo.png" alt="quest-realty-logo" />
      </div>
      <button @click="state.menuIsVisible = !state.menuIsVisible" class="menu">
        <img src="../assets/hamburger.png" alt="" />
      </button>
      <div class="dropdown" v-if="state.menuIsVisible">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/for-sale">For Sale</router-link>
        <router-link to="for-rent">For rent</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </div>
    </div>
    <div class="larger-view">
      <div class="logo">
        <img src="../assets/logo.png" alt="quest-realty-logo" />
      </div>
      <div class="nav">
        <router-link to="/" class="large-screen-nav">Home</router-link>
        <router-link to="/about" class="large-screen-nav">About</router-link>
        <router-link to="/for-sale" class="large-screen-nav"
          >For Sale</router-link
        >
        <router-link to="for-rent" class="large-screen-nav"
          >For rent</router-link
        >
      </div>
      <div class="auth">
        <button
          @click="isShow = !isShow && isOpen == false"
          class="large-screen-nav login"
        >
          Login
        </button>
        <button
          @click="isOpen = !isOpen && isShow == false"
          class="large-screen-nav register"
        >
          Register
        </button>

        <teleport :disabled="true" to="#modals">
          <div class="modal" v-if="isShow">
            <div class="modal-container-login">
              <div>
                <div class="modal-header">
                  <h3>Sign in</h3>
                  <button @click="isShow = false" class="times">x</button>
                </div>
                <form action="">
                  <div class="form-wrap">
                
                    <div class="input-wrap">
                           <label for="email">Enter email address </label>
                      <input type="email" />
                    </div>
                    <div class="input-wrap">
                      <label>Enter password </label>
                      <input type="password" />
                    </div>
  
                    <p class="forgot">
                      Forgot password. <router-link to="/forgot-password">Click here</router-link>

                    </p>
                    <button class="register-btn" type="submit">LOGIN</button>
                    <p class="not-register">
                      Not register yet? <router-link to="/register">Create account</router-link>

                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal" v-else-if="isOpen">
            <div class="modal-container-register">
              <div>
                <div class="modal-header">
                  <h3>Create Account</h3>
                  <button @click="isOpen = false" class="times">x</button>
                </div>
                <form action="">
                  <div class="form-wrap">
                    <div class="input-group">
                      <div class="input-wrap-one">
                        <label class="label" for="fname">First Name </label>
                        <input type="text" />
                      </div>
                      <div class="input-wrap-one">
                        <label class="label" for="lname">Last Name </label>
                        <input type="text" />
                      </div>
                    </div>

                    <div class="input-wrap">
                      <label for="email">Enter email address </label>
                      <input type="email" />
                    </div>
                    <div class="input-wrap">
                      <label>Enter password </label>
                      <input type="password" />
                    </div>
                    <div class="input-wrap">
                      <label>Confirm password </label>
                      <input type="password" />
                    </div>
                    <div class="input-group-one">
                      <div class="input-wrap-two">
                        <label for="country">Country code </label>
                        <input type="number" class="country" />
                      </div>
                      <div class="input-wrap-two">
                        <label for="phone"> Format(Digit only) </label>
                        <input type="number" class="phone" />
                      </div>
                    </div>
                    <div class="input-group-button">
                      <button type="submit" class="customer">AGENT</button>
                      <button type="submit" class="agent">CUSTOMER</button>
                    </div>
                    <button class="register-btn" type="submit">Register</button>
                    <p class="terms">
                      By registering, I accept all terms and conditions.
                    </p>
                  </div>

                  

                </form>
              </div>
            </div>
          </div>
          <div class="modal">
<div class="modal-container-login">
      <div>
        <div class="modal-header">
          <h3>Forgot password</h3>
          <button @click="isOpen = false" class="times">x</button>
        </div>
        <form action="">
          <div class="form-wrap">
        
            <div class="input-wrap">
                   <label for="email">Enter email address </label>
              <input type="email" />
            </div>
            <div class="input-wrap">
              <label>Enter password </label>
              <input type="password" />
            </div>

            
            <button class="register-btn" type="submit">SEND ME A LINK</button>
           
          </div>
        </form>
      </div>
    </div>
          </div>
        </teleport>

      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  z-index: 10000;
  background-color: #fff;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000da;
}

.modal-container-register {
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.61);
  width: 550px;
  height: 650px;
}
.modal-container-login {
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.61);
  width: 550px;
  height: 425px;
}
.modal-header {
  display: flex;
  padding: 2rem 1rem;
}
.modal-header > h3 {
  color: #6d553e;
  text-align: center;
  font-weight: 700;
  font-family: inherit;
  flex: 1;
  font-size: 1.5rem;
}
.times {
  border: 1px solid white;
  border-radius: 50%;
  font-size: 1rem;
  padding: .25rem .5rem;
}

.form-wrap {
  padding: 1rem;
}
.form-wrap .input-group:last-child {
  margin-bottom: 0;
}

label {
  margin:  0;
  display: block;
  color: #6d553e;
  font-size: .8rem;
  font-weight: 700;
}
.form-wrap > .input-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.form-wrap .input-wrap-one input {
  width: 200px;
}
.input-wrap-one, .input-wrap{
  margin-bottom: 1rem;
}
.input-wrap-one .label{
  font-size: .8rem;
}
.input-group-one {
  display: flex;
}
.input-group-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}


.form-wrap input {
  width: 100%;
  padding: 0.25rem;
  outline: none;
  border-radius: 3px;
  border: 1px solid #6d553e;
}
.agent {
  padding: 5px 8px;
  color: white;
  background-color: var(--barley-40);
  border-radius: 4px;
  outline: none;
  border: 2px solid var(--barley-40);
  margin-left: 2rem;
}

.customer {
  padding: 5px 8px;
  color: var(--barley-40);
  font-weight: 700;
  background-color: white;
  border-radius: 4px;
  outline: none;
  font-weight: 500px;
  margin-right: 2rem;
  border: 2px solid var(--barley-40);
}
.register-btn {
  padding: 5px 5px;
  color: var(--barley-40);
  font-weight: 700;
  background-color: #c2aa93;
  border-radius: 4px;
  outline: none;
  font-weight: 500;
  margin: 1rem 0 0 0;
  width: 100%;
  border: 2px solid #c2aa93;
}
.terms {
  color: #6d553e;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: .5rem;
}
.input-wrap-two {
  padding-right: 1rem;
}
.input-wrap-one > label {
  font-size: 1rem;
}
.input-wrap-two > .country {
  width: 70px;
}
.input-wrap-two > .phone {
  width: 330px;
}
.logo {
  padding: 1rem 0;
}
.logo img {
  width: 76px;
  height: 56px;
}
.mobile-view {
  position: relative;
  width: 100%;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: start;
}

.menu {
  width: fit-content;
  margin-left: auto;
  padding: 4px 6px;
  outline: none;
  border-radius: 4px;
  border: 1px solid rgba(212, 212, 212, 0.842);
}
.dropdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 250px;
  bottom: -175px;
  right: -10px;
  animation-name: menu;
  animation-duration: 0.5s;
  background-color: #fff;
}
.not-register{

  color: #6d553e;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 2rem;
}
.not-register>a{
  text-decoration: underline;

}
.forgot{

  color: #6d553e;
  text-align: center;
  font-size: .8rem;
  font-weight: 700;
  margin-top: 2rem;
}


@keyframes menu {
  from {
    opacity: 0;
    bottom: -150px;
  }
  to {
    opacity: 1;
    bottom: -190px;
  }
}

a {
  text-decoration: none;
  color: var(--barley-40);
}

.dropdown > a {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgba(212, 212, 212, 0.842);
  padding: 5px 0;
}
.dropdown > a:hover {
  background-color: var(--barley-40);
  color: white;
}

.dropdown .router-link-exact-active {
  background-color: var(--barley-40);
  color: white;
}
.larger-view {
  display: none;
}
.auth .login {
  background-color: var(--barley-40);
  color: white;
  border-radius: 4px;
}

.auth .register {
  border-radius: 4px;
  border: 1px solid #6d553e;
}

@media (min-width: 786px) {
  .mobile-view {
    display: none;
  }

  .larger-view {
    display: flex;
    justify-content: space-between;

    align-items: center;
    width: 100%;
  }

  .large-screen-nav {
    padding: 10px 20px;
    margin: 0 4px;
  }

  .large-screen-nav.router-link-exact-active {
    border-bottom: 2px solid #6d553e;
  }
}
</style>