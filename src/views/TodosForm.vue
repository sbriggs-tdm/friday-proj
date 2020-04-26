<template>
    <div>
        <v-container>
            <v-row>
            <v-col>
                <h1>Example Form</h1>

                <v-form>
                    <!-- <v-text-field label="Name" type="text"/> -->
                    <v-autocomplete label="Dessert Name" :items="browsers" />
                    <v-text-field label="Name" type="text"/>
                    <!-- <v-autocomplete label="Calories" :items="browsers" /> -->
                    <v-btn type="submit" color="primary">Submit</v-btn>
                </v-form>

            </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        data: () => ({
            browsers: ['Chrome', 'Firefox', 'Safari', 'Edge', 'Brave'],
            /* DessertNames:  */
        })
    }
</script>

<style lang="scss" scoped>
    
</style>