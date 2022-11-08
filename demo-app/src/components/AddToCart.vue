<template>
  <div class="row">
    <div class="col-3">
      <label><b>Quantity</b></label>
      <input
        type="number"
        v-model="quantity"
        class="form-control"
        value="1"
        step="1"
        min="1"
        required
      />
    </div>
    <button
      v-if="!inCardProp"
      @click.stop="addCart({ product, quantity })"
      class="btn btn-lg col-5"
    >
      ADD TO CART
    </button>
    <button
      v-else
      @click.stop="removeCart(product.id)"
      class="btn btn-lg col-5"
    >
      REMOVE FROM CART
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: ["product"],
  data() {
    return {
      inCardProp: false,
      quantity: 1,
    };
  },
  computed: {
    ...mapState("product", ["cart"]),
  },
  methods: {
    ...mapActions("product", ["addCart", "removeCart"]),

    inCart(id) {
      for (let index = 0; index < this.cart.length; index++) {
        const element = this.cart[index];
        if (element.id === id) {
          return true;
        }
      }
      return false;
    },
  },
  watch: {
    product(val) {
      this.inCardProp = this.inCart(val.id);
    },
    cart() {
      this.inCardProp = this.inCart(this.product.id);
    },
  },
};
</script>
