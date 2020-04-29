<template>
    <div>
        <v-container>
            <v-row>
            <v-col>
                <h1>Add a dessert</h1>

                <v-form @submit.prevent="addDessert1()">
                    <!-- <v-text-field label="Name" type="text"/> -->
                    <v-autocomplete v-model="dessertName" label="Dessert Name" :items="dessertNames" />
                    <!-- <v-text-field v-model="dessertName" label="Name" type="text"/> -->
                    <v-text-field v-model="dessertCalories" label="Calories" type="text"/>
                    <v-text-field v-model="dessertFat" label="Fat" type="text"/>
                    <v-text-field v-model="dessertCarbs" label="Carbs" type="text"/>
                    <v-text-field v-model="dessertProtein" label="Protein" type="text"/>
                    <v-text-field v-model="dessertIron" label="Iron" type="text"/>
                    <!-- <v-autocomplete label="Calories" :items="browsers" /> -->
                    <v-btn  type="submit" color="primary">Add Dessert</v-btn>
                </v-form>

            </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

    export default {
        data: () => ({
            dessertNames: ['Creme Brule', 'Melk Tert', 'Pudding'],
            dessertName: "",
            dessertCalories: "",
            dessertFat: "",
            dessertCarbs: "",
            dessertProtein: "",
            dessertIron: "",
        }),
        methods: {
            ...mapActions(
                [
                    'addDessert',
                ]
            ),
            addDessert1(){
                this.addDessert({
                    name: this.dessertName,
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    
</style>