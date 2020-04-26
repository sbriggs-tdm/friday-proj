<template>
    <div>
        <v-data-table
            :headers="todoHeaders"
            :items="allTodos"
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
                'allTodos',
                'todoHeaders',
            ]
        )
    },
    created(){
        this.fetchTodos();
    }
}
</script>

<style lang="scss" scoped>

</style>