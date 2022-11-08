<template>
  <div>
    <h1 class="success">Payment is successful</h1>
    <a href="/products">Buy Again</a>
  </div>
</template>

<script>
export default {
  name: "Success",
};
</script>

<style scoped>
.success {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #ff0000;
    margin-top: 15rem;
}
</style>