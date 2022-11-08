<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <div class="w-3 display-left">
          <img class="card-img" :src="product.imageURL" alt />
        </div>
      </div>
      <div class="col-6 text-left">
        <div class="display-3 row">
          <div class="col">
            <p>{{ product.title }}</p>
          </div>
          <div class="col">
            <router-link
              class="btn btn-primary"
              :to="{ name: 'edit-product', params: { id: product.id } }"
              :product="product"
              >Edit</router-link
            >
          </div>
        </div>
        <p class="lead">Description: {{ product.description }}</p>
        <p class="lead">Company: {{ product.company }}</p>
        <p class="lead">Color: {{ product.color }}</p>
        <p class="lead">Size: {{ product.size }}</p>
        <div>
          <p class="lead">Price: ${{ product.price }}</p>
        </div>
        <AddToCart :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddToCart from "../components/AddToCart";

export default {
  data() {
    return {
      inCardProp: false,
    };
  },
  computed: {
    ...mapGetters("product", ["product"]),
  },
  components: { AddToCart },
  methods: {
    ...mapActions("product", ["productDetails"]),
  },
  mounted() {
    this.productDetails(this.$route.params.idProduct);
  },
};
</script>

<style>
.container-fluid {
  padding: 30px;
}
.card * {
  max-height: 85vh;
}
.card-img {
  height: 350px !important;
  width: 400px !important;
}
</style>
