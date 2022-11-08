import Vue from "vue";
import Vuex from "vuex";
import city from "./modules/city";
import state from "./modules/state";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        city,
        state
    },
});
