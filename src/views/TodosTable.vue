<template>
    <div>
        <v-container>
            <h1>To Do List</h1>
            <div v-if="allTodos.length == 0">
                <p align="center">
                    Fetching JSON data
                    <v-progress-circular indeterminate color="primary">
                    </v-progress-circular>
                </p>
                <v-skeleton-loader
                ref="skeleton"
                type="table"
                class="mx-auto"
                ></v-skeleton-loader>
            </div>
            <v-data-table v-else
                :headers="todoHeaders"
                :items="allTodos"
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
        ),
        ...mapGetters(
            [
                'isLoading',
            ]
        )
            /* loadData(){
            this.fetchTodos();    
        } */
    },
    computed: {
        ...mapGetters(
            [
                'allTodos',
                'todoHeaders',
            ]
        ),
    },
    created(){
        this.fetchTodos();
    }
}
</script>

<style lang="scss" scoped>

</style>