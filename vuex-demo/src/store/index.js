import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        post: {},
    },
    mutations: {
        setPost(state, data) {
            state.post = data;
        },
    },
    actions: {
        async getPost(context, { id }) {
            // https://jsonplaceholder.typicode.com/posts/1/comments
            // https://jsonplaceholder.typicode.com/albums/1/photos
            // https://jsonplaceholder.typicode.com/users/1/albums
            // https://jsonplaceholder.typicode.com/users/1/todos
            // https://jsonplaceholder.typicode.com/users/1/posts
            // https://mockend.com/mockend/demo/posts?tag_eq=one
            // https://mockend.com/mockend/demo/posts?createdAt_order=desc
            // https://mockend.com/mockend/demo/posts/1
            // https://mockend.com/mockend/demo/posts
            // you can use posts/comments/albums/photos/todos/users
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            context.commit("setPost", data);
        },
    },
});
