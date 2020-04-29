import axios from "axios";

const state = {
    isLoading: false,

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
/*         {
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
        }, */
    ],
}

const getters = {
    allTodos: state => state.todos,
    todoHeaders: state => state.todoHeaders,
    isloading: state => state.isLoading,
}

const actions = {
    async fetchTodos({ commit }){
        state.isLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {headers: {'Access-Control-Allow-Origin': '*'}});
        state.isLoading = false;
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