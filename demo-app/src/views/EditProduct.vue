<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <h3 class="navbar-brand">Vue.js</h3>
      </nav>
    </div>
    <br />
    <br />
    <h3 style="color: red; font-weight: 900">UPDATE PRODUCT</h3>
    <br />
    <form>
      <div class="form-group row">
        <label class="col-sm col-form-label"><b>Title</b></label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="product.title" />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm col-form-label"><b>Price</b></label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="product.price" />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm col-form-label"><b>Description</b></label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="product.description"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm col-form-label"><b>Color</b></label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="product.color" />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm col-form-label"><b>Size</b></label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="product.size" />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm col-form-label"><b>Company</b></label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control input-sm"
            v-model="product.company"
          />
        </div>
      </div>
    </form>
    <button class="btn btn-primary" @click="changeProduct">
      UPDATE
    </button>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {
  name: "EditProduct",
  data() {
    return {
      product: {},
    };
  },
  mounted() {
    this.getProductById(this.$route.params.id);
  },
  methods: {
    getProductById(id) {
      axios
        .get(`http://localhost:3000/products/${id}`)
        .then((response) => {
          this.product = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeProduct() {
      this.$route.params.id, this.product;
      axios
        .put(
          `http://localhost:3000/products/${this.$route.params.id}`,
          this.product
        )
        .then((response) => {
          console.log(response);
          router.push("/details/" + this.$route.params.id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.form-control {
  width: 60%;
  background-color: lightskyblue;
}
</style>
