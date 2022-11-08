<template>
  <div>
    <Header />
    <div class="login">
      <form @submit.prevent="login">
        <br />
        <h2><b>Login</b></h2>
        <br />
        <div class="form-group col-sm-4">
          <input
            type="email"
            placeholder="Email"
            class="form-control"
            v-model="email"
            required
          />
        </div>
        <br />
        <div class="form-group col-sm-4">
          <input
            type="password"
            placeholder="Password"
            class="form-control"
            v-model="password"
            required
          />
        </div>
        <br />
        <div>
          <button type="submit" class="btn btn-outline-success">Login</button>
        </div>
        <br />
        <h6>
          Don't have an account?<button class="btn btn-link" @click="signup">
            Sign Up
          </button>
        </h6>
      </form>
      <br />
    </div>
  </div>
</template>

<script>
import Header from "../components/common/Header.vue";

export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    Header,
  },
  methods: {
    login() {
      var data = JSON.parse(localStorage.getItem("user"));
      if (data.email == this.email && data.password == this.password) {
        // alert("Login Successfully");
        this.$router.push("/products");
      } else {
        alert("Invalid Credentials");
      }
    },
    signup() {
      localStorage.clear();
      this.$router.push("/");
    },   
  },
};
</script>

<style>
.login {
  background: rgba(255, 255, 128, 0.5);
}
.form-control {
  border-radius: 10px;
  margin-left: 27rem;
}
</style>
