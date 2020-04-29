import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos.js'
import desserts from './modules/desserts.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todos,
    desserts
  }
})
