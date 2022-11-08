<template>
    <div id="product-list-two">
        <h2>Product List Two</h2>
        <ul>
            <li v-for="product in saleProducts" :key="product.price">
                <span class="name">{{ product.name }}</span>
                <span class="price"> = ${{ product.price }}</span>
            </li>
        </ul>
        <button v-on:click="reducePrice(10)">Reduce Price</button>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"

export default {
    computed: {
        products() {
            return this.$store.state.products;
        },
        // saleProducts() {
        //     return this.$store.getters.saleProducts;
        // },
        ...mapGetters([
            'saleProducts'
        ])
    },
    methods: {
        // reducePrice: function (amount) {
        //     this.$store.dispatch("reducePrice", amount);
        // },
        ...mapActions([
            'reducePrice'
        ])
    },
};
</script>

<style scoped>
#product-list-two {
    background: #d1e4ff;
    box-shadow: 1px, 2px, 3px, rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul {
    padding: 0;
    list-style-type: none;
}
#product-list-two li {
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
}
.price {
    display: block;
    font-weight: bold;
    color: #860ce8;
}
</style>
