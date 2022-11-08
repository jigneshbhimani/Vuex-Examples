<template>
    <div id="app">
        <h1>Vuex Modules</h1>
        <img src="./assets/logo.png" alt="Vue Logo" />
        <div class="data">
            <div class="city">
                <button @click="cityData">Get City Data</button>
                <p>{{ city.data }}</p>
            </div>
            <div class="state">
                <button @click="stateData">Get State Data</button>
                <p>{{ state.data }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "app",
    computed: {
        ...mapState(["city", "state"]),
    },
    methods: {
        cityData() {
            this.$store.dispatch("city/getData");
        },
        stateData() {
            this.$store.dispatch("state/getData");
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
.city {
    margin-top: 15px;
}
.state {
    margin-top: 30px;
}
</style>
