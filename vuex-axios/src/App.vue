<template>
    <div id="app">
        <!-- <p>
            {{ $store.state.users }}
        </p> -->
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">City</th>
                    <th scope="col">Zipcode</th>
                    <th scope="col">Website</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Geo</th>
                </tr>
            </thead>
            <tbody v-for="(user, index) in users" :key="index" :style="{ color: $store.state.userColor }">
                <tr>
                    <th scope="row">{{ user.id }}</th>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.address.street }} {{ user.address.suite }}</td>
                    <td>{{ user.address.city }}</td>
                    <td>{{ user.address.zipcode }}</td>
                    <td>{{ user.website }}</td>
                    <td>{{ user.company.name }}</td>
                    <td>{{ user.address.geo.lat }} AND {{ user.address.geo.lng }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from "vuex";
// import { mapGetters } from "vuex";
// import { mapActions } from "vuex";

export default {
    name: "app",
    mounted() {
        this.$store.dispatch("loadUsers");
    },
    computed: {
        ...mapState(["users"]),

        // OR STATE

        // getUsers(){
        //   console.log("STATE", this.$store.state.users)
        //   return this.$store.state.users
        // }

        // ...mapGetters(['allUsers'])

        // OR GETTERS

        // allUsers() {
        //   console.log("GETTERS", this.$store.getters.allUsers)
        //   return this.$store.getters.allUsers
        // }
    },

    // ACTIONS

    // methods: {
    //     ...mapActions(["loadUsers"]),
    // },
};
</script>
