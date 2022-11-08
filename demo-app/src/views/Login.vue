<template>
  <div>
    <nav
      class="navbar navbar-light justify-content-between"
      style="background-color: #e3f2fd"
    >
      <a class="navbar-brand">VueJs</a>
      <form class="form-inline">
        <button class="btn btn-dark my-2 my-sm-0" type="submit" @click="signup">
          Signup
        </button>
      </form>
    </nav>
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
          <button type="submit" class="btn btn-success">Login</button>
        </div>
        <br />
      </form>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      var data = JSON.parse(localStorage.getItem("user"));
      if (data.email == this.email && data.password == this.password) {
        console.log("Login Successfully");
        this.$router.push("/app");
      } else {
        alert("Invalid Credentials");
      }
    },
    signup() {
      if (localStorage.removeItem("user")) {
        this.$router.push("/");
      } else {
        console.log("error");
      }
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
