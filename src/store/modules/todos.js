import axios from "axios";

const state = {



    todoHeaders: [
        {
            text: 'UserId',
            align: 'start',
            sortable: false,
            value: 'userId',
        },
        { text: 'ID', value: 'id' },
        { text: 'Title', value: 'title' },
        { text: 'Completed', value: 'completed' },
    ],

    todos: [
        {
            "userId": 1,
            "id": 1,
            "title": "sweep the floor",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "clean the windows",
            "completed": false
          },
    ],


    headers: [
    {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name',
    },
    { text: 'Calories', value: 'calories' },
    { text: 'Fat (g)', value: 'fat' },
    { text: 'Carbs (g)', value: 'carbs' },
    { text: 'Protein (g)', value: 'protein' },
    { text: 'Iron (%)', value: 'iron' },
    ],
    desserts: [
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
        },
        {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
        },
        {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
        },
        {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
        },
        {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
        },
        {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
        },
        {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
        },
        {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
        },
        {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
        },
        {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
        },
    ],
}

const getters = {
    allDesserts: state => state.desserts,
    headers: state => state.headers,
    allTodos: state => state.todos,
    todoHeaders: state => state.todoHeaders
}

const actions = {
    async fetchTodos({ commit }){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {headers: {'Access-Control-Allow-Origin': '*'}});
        commit('SET_TODOS', response.data);
    }
}

const mutations = {
    SET_TODOS: (state, todos) => (state.todos = todos),
}

export default {
    state,
    getters,
    actions,
    mutations
}