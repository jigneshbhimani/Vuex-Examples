import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        products: [
            { name: "Laptop", price: 600 },
            { name: "Mobile", price: 400 },
            { name: "TV", price: 700 },
            { name: "Fridge", price: 500 },
        ],
    },
    getters: {
        saleProducts: (state) => {
            var saleProducts = state.products.map((product) => {
                return {
                    name: "**" + product.name + "**",
                    price: product.price / 2,
                };
            });
            return saleProducts;
        },
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach((product) => {
                product.price -= payload;
            });
        },
    },
    actions: {
      reducePrice: (context, payload) => {
        setTimeout(function(){
          context.commit('reducePrice',payload)
        },3000)
      }
    },
    modules: {},
});
