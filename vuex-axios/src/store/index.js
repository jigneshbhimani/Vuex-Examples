import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex, axios);

export default new Vuex.Store({
    state: {
        users: [],
        userColor: "green",
    },

    actions: {
        loadUsers({ commit }) {
            axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then((data) => {
                    console.log(data.data);
                    let users = data.data;
                    commit("SET_POSTS", users);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },

    // getters: {
    //     allUsers: (state) => {
    //         return state.users;
    //     },
    // },

    mutations: {
        SET_POSTS(state, users) {
            state.users = users;
        },
    },
});
