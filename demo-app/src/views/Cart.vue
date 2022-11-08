<template>
  <div class="container" style="padding: 30px">
    <div class="row d-flex justify-content-center">
      <div class="list-group col-8">
        <a
          v-for="item in cart"
          :key="item.id"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <img :src="item.imageURL" alt height="75" width="100" />
          <p class="h4">{{ item.title }}</p>
          <div class="row">
            <div class="mr-2">
              <p><b>Price</b></p>
              <p>${{ item.price }}</p>
            </div>
            <div class="mr-2" style="border-left: 5px solid">
              <p><b>Total Price</b></p>
              <p>{{ item.price * item.quantity }}</p>
            </div>
            <div style="border-left: 5px solid">
              <p><b>Quantity</b></p>
              <button @click="decrease()">-</button>
              <p>{{ item.quantity }}</p>
              <button @click="increase()">+</button>
            </div>
            <button
              @click="removeProduct(item)"
              class="btn"
            >
              remove product
            </button>
          </div>
        </a>
        <div
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <p class="h4"><b>Total:</b></p>
          <div>
            <p><b>Total Price</b></p>
            <p>${{ totalPrice }}</p>
          </div>
        </div>
        <button
          @click="checkout()"
          type="button"
          class="btn btn-primary btn-lg btn-block mt-4"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      totalPrice: 0,
      quantity: 1,
    };
  },
  computed: {
    ...mapGetters("product", ["cart"]),
  },
  methods: {
    ...mapActions("product", ["removeCart"]),
    calcPrice() {
      this.cart.forEach((element) => {
        this.totalPrice += element.price * element.quantity;
      });
    },
    calcPriceTo(){
      this.cart.forEach((element) => {
        this.totalPrice += element.price / element.quantity;
      });
    },
    checkout() {
      const purchase = this;
      setTimeout(() => {
        purchase.removeCart();
        alert("Purchase successful!");
        purchase.$router.push("/app");
      }, 2000);
    },
    // decrease() {
    //   this.item.quantity--;
    // },
    // increase() {
    //   this.item.quantity++;
    // },
    removeProduct(){
      this.item.id.delete();
    },
  },
  mounted() {
    this.calcPrice();
  },
};
</script>
