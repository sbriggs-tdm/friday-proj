<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="allDesserts"
            :items-per-page="5"
            class="elevation-1">
        </v-data-table>
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
                'headers',
                'allTodos',
                'todoHeaders',
            ]
        )
    },
}
</script>

<style lang="scss" scoped>

</style>
