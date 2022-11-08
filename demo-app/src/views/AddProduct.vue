<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <h3 class="navbar-brand">Vue.js</h3>
      </nav>
    </div>
    <br />
    <br />
    <h3 style="color: red; font-weight: 900">ADD PRODUCT</h3>
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
          <input type="text" class="form-control" v-model="product.company" />
        </div>
      </div>
      <!-- <div class="form-group row">
        <label class="col-sm col-form-label"><b>Image</b></label>
        <div class="col-sm-10">
          <input type="file" accept="image/*" :src="product.imageURL" v-on:change="product.imageURL" @change="uploadImage"/>
        </div>  
      </div> -->
    </form>
    <button class="btn btn-primary" @click="addProduct">ADD</button>
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Edit",
  data() {
    return {
      product: {
        title: "",
        price: "",
        description: "",
        color: "",
        size: "",
        company: "",
        // imageURL: ""
      },
    };
  },
  methods: {
    addProduct() {
      axios.post("http://localhost:3000/products", this.product).then(
        function (response) {
          console.log(response);
        }.bind(this)
      );
      this.$router.push("/app");
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
