<template>
  <div>
    <h1 class="cancel">Payment Failed!</h1>
    <a href="/products">Buy Again</a>
  </div>
</template>

<script>
export default {
  name: "Cancel",
};
</script>

<style scoped>
.cancel {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #ff0000;
    margin-top: 15rem;
}
</style>