<template>
  <div class="row" style="width: 50%">
    <div class="col-md-4">
      <h6><b>Total:-</b></h6>
      <h6><b>Promo Code:-</b></h6>
      <h6><b>Shipping:-</b></h6>
      <div class="my-3 line w-120"></div>
      <h6><b>Subtotal:-</b></h6>
    </div>
    <div class="col-md-4">
      <h6>Rs.{{ totalPrice }}</h6>
      <h6>PRODUCT</h6>
      <h6>Rs. 50</h6>
      <div class="my-3 line w-60"></div>
      <h6><b>Rs. {{ totalPrice + 50 }}</b></h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  props: ["totalPrice"],
};
</script>

<style scoped>
.line {
  height: 1px;
  border-bottom: 3px solid black;
}
.w-120 {
  width: 210%;
}
.w-60 {
  width: 60px;
}
</style>
