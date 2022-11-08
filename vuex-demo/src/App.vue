<template>
    <div id="app">
        <button @click="getPost">Get Post</button>
        <p>{{ post }}</p>
    </div>
</template>

<script>
export default {
    name: "App",
    computed: {
        post() {
            return this.$store.state.post;
        },
    },
    methods: {
        getPost() {
            return this.$store.dispatch("getPost", { id: 1 });
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
