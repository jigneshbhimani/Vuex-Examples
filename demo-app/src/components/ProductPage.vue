<template>
  <div class="card mb-4">
    <img
      :src="product.imageURL"
      class="card-img-top product-image"
    />
    <div class="card-body">
      <h5 class="text-left">{{ product.title }}</h5>
      <h5 class="text-left">${{ product.price }}</h5>
    </div>
    <router-link
      type="button"
      class="btn btn-primary btn-lg"
      :to="'/details/' + product.id"
      >View Product</router-link
    >
  </div>
</template>

<script>
export default {
  name: "ProductPage",
  props: ["product"],
};
</script>

<style>
.product-image{
  height: 250px !important;
  width: 300px !important;
}
</style>