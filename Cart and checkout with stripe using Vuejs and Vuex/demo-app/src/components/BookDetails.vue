<template>
  <div class="d-flex book-details-outer">
    <Header />
    <div class="book-details">
      <div class="container mb-5">
        <br />
        <h4 class="fw-600" style="color: blue">Add Book to Cart</h4>
        <div class="row">
          <div class="col-md-4" style="cursor: pointer">
            <img
              :src="details.imageURL"
              width="300px"
              height="300px"
              style="border-radius: 150px"
            />
          </div>
          <div class="col-md-4" style="cursor: pointer">
            <h5 class="my-4"><b>Name: </b>{{ details.name }}</h5>
            <h5 class="my-4"><b>Price: </b>{{ details.price }}</h5>
            <h5 class="my-4"><b>Author: </b>{{ details.author }}</h5>
            <h5 class="my-4"><b>Published: </b>{{ details.published }}</h5>
            <div>
              <button @click="goToCart" class="btn btn-outline-primary">
                Go to Cart
              </button>
              <button
                @click="addToCart"
                style="margin-right: 5px; margin-left: 5px"
                class="btn btn-outline-success"
              >
                Add Item
              </button>
              <button @click="removeItem" class="btn btn-outline-danger">
                Remove Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/common/Header.vue";

export default {
  name: "BookDetails",
  components: {
    Header,
  },
  data() {
    return {
      details: this.$route.params,
    };
  },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
    addToCart() {
      this.$store.dispatch("addToCart", this.details);
    },
    removeItem() {
      this.$store.dispatch("removeItem", this.details);
    },
  },
  created() {
    if (this.$route.params.id !== undefined) {
      localStorage.setItem("details", JSON.stringify(this.$route.params));
    }
  },
  mounted() {
    this.details = JSON.parse(localStorage.getItem("details"));
  },
};
</script>

<style scoped>
.book-details-outer {
  flex-direction: column;
  height: 100vh;
}
.book-details {
  flex: 1;
  background: #efe9e2;
  overflow-y: auto;
}
.fw-600 {
  font-weight: 600;
}
.my-4 {
  text-align: left;
  margin-left: 1rem;
}
</style>
