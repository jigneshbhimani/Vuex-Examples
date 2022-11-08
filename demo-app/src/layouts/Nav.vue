<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <h3 class="navbar-brand" to="/">Vue.js</h3>
        <router-link class="btn btn-primary" to="/addProduct"
          >Add Product</router-link
        >
        <button class="btn btn-primary ml-4" @click="logout">Logout</button>
        <div class="ml-auto">
          <router-link class="btn btn-primary my-2 my-sm-0" to="/cart">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.JdVRyB8TXAiZaRlAoyJSfAHaHi&pid=Api&P=0&w=154&h=157"
              width="50"
              alt
            />
            <span class="badge badge-danger badge-pill">{{ cart.length }}</span>
          </router-link>
        </div>
      </nav>
    </div>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Nav",
  computed: {
    ...mapGetters("product", ["cart"]),
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
nav {
  background-color: #32f1f1;
}
.navbar-brand {
  font-weight: bold;
  font-size: 25px;
  color: black !important;
}
.page-container {
  padding-top: 81px;
}
.btn {
  border-radius: 0%;
  font-weight: bold;
  background: #3268a3;
  border: #3268a3;
}
</style>
