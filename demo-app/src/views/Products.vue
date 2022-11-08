<template>
  <div style="padding: 20px">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <ProductPage :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductPage from "../components/ProductPage";

export default {
  computed: {
    ...mapGetters("product", ["products"]),
  },
  components: { ProductPage },
  methods: {
    ...mapActions("product", ["getProducts", "addCart", "removeCart"]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>
