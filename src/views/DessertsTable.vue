<template>
    <div>
        <v-container>
        <h1>Desserts</h1>
        <v-data-table
            :headers="dessertHeaders"
            :items="allDesserts"
            :items-per-page="5"
            class="elevation-1">
        </v-data-table>
        </v-container>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    data () {
        return {

        }
    },
    methods: {
        ...mapActions(
            [
                'fetchTodos',
            ]
        )
    },
    computed: {
        ...mapGetters(
            [
                'allDesserts', 
                'dessertHeaders',
            ]
        )
    },
}
</script>

<style lang="scss" scoped>

</style>
