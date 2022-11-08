<template>
  <!-- <header> -->
  <div class="header">
    <div>
      <v-select
        class="form-control"
        v-model="selected"
        :items="items"
        @input="onInput"
        style="margin-left: 20px; margin-top: 7px"
      />
    </div>

    <div class="d-flex cart">
      <img
        @click="goTo"
        src="../../assets/products/shoppingcart.jpg"
        width="40px"
        height="40px"
        style="margin-top: 6px"
      />
      <span class="cart-count">{{ count }}</span>

      <h5 class="login">
        <button class="btn btn-primary" @click="logout">Logout</button>
      </h5>
    </div>
  </div>
  <!-- </header> -->
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      selected: null,
      items: ["Electronics", "Cloth", "Book"],
    };
  },
  methods: {
    logout() {
      alert("Logout Successfully");
      this.$router.push("/login");
    },
    onInput() {
      console.log(this.selected);
      // this.$router.push(this.selected);
    },
    goTo() {
      this.$router.push("/cart");
    },
  },
  computed: {
    count() {
      return this.$store.state.cartItemCount;
    },
  },
};
</script>

<style scoped>
.header {
  height: 60px;
  background: lightgrey;
  display: flex;
  justify-content: space-between;
}
.category {
  display: flex;
}
.product-header,
.cloth-header,
.book-header {
  padding: 6px;
  cursor: pointer;
}
.product,
.cloth,
.book {
  color: deeppink;
  font-weight: 600;
  font-size: 20px;
  margin-top: 7px;
  text-decoration: underline solid black 2px;
}
.cart-count {
  font-size: 15px;
  color: #d4570cf2;
  padding: 0 5px;
  margin-left: -35px;
  background: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
.cart {
  width: 300px;
  justify-content: space-evenly;
  padding-top: 3px;
}
.cart-icon {
  line-height: 45px;
  font-size: 24px;
  color: #2aa5a0;
  cursor: pointer;
}
.login,
.register {
  font-weight: 600;
  margin-top: 10px;
}
</style>
