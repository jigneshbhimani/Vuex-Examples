<template>
  <div>
    <nav
      class="navbar navbar-light justify-content-between"
      style="background-color: #e3f2fd"
    >
      <a class="navbar-brand">VueJs</a>
    </nav>
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
        <div class="form-group col-sm-4">
          <input
            type="text"
            placeholder="Last Name"
            class="form-control"
            v-model="lastname"
            required
          />
        </div>
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
          <button type="submit" class="btn btn-success">Signup</button>
        </div>
        <br />
      </form>
    </div>
  </div>
</template>

<script>
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
  methods: {
    signup() {
      let user = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      };
      localStorage.setItem("user", JSON.stringify(user));
      console.log("Signup Successfully");
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
