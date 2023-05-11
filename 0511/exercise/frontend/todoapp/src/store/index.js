import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const BASE_URL = 'http://localhost:8000/'
const TODO_LIST_URL = BASE_URL + 'todos/'

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos
    }
  },
  actions: {
    getTodos(context) {
      axios.get(TODO_LIST_URL)
      .then((res) => {
        context.commit('SET_TODOS', res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
