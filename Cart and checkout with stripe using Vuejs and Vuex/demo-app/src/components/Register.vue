<template>
  <div>
    <Header />
    <div class="signup">
      <form @submit.prevent="signup">
        <br />
        <h2><b>Sign Up</b></h2>
        <br />
        <div class="form-group col-sm-4">
          <input
            type="text"
            placeholder="First Name"
            class="form-control"
            v-model="firstname"
            required
          />
        </div>
        <br />
        <div class="form-group col-sm-4">
          <input
            type="text"
            placeholder="Last Name"
            class="form-control"
            v-model="lastname"
            required
          />
        </div>
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
          <button type="submit" class="btn btn-outline-success">
            Register
          </button>
        </div>
        <br />
        <h6>
          Already registered?<button class="btn btn-link" @click="login">
            Login
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
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  },
  components: {
    Header,
  },
  methods: {
    signup() {
      let user = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Signup Successfully");
      this.$router.push("/login");
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.signup {
  background: rgba(255, 255, 128, 0.5);
}
.form-control {
  border-radius: 10px;
  margin-left: 27rem;
}
</style>
