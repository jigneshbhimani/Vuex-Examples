<template>
  <div class="container my-5" style="text-align: center">
    <img src="../assets/products/shoppingcart.jpg" width="200px" />
    <div class="mt-4">
      <h4 class="orange-red fw-600">Your cart is empty</h4>
      <h5 class="darkblue fw-600">
        You can go to home page to view more products.
      </h5>
      <div>
        <router-link to="/products">Electronics</router-link>
      </div>
      <div>
        <router-link to="/clothes">Cloth</router-link>
      </div>
      <div>
        <router-link to="/books">Book</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyCart",
};
</script>

<style scoped>
.orange-red {
  color: orangered;
}
.darkblue {
  color: darkblue;
}
.fw-600 {
  font-weight: 600;
}
</style>
