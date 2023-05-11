import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const BASE_URL = 'http://localhost:8000/'
const TODO_LIST_URL =  BASE_URL + 'todos/'

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
    // 재사용 가능성이 높으므로 action에 작성
    getTodos(context) {
      axios.get(TODO_LIST_URL)
      .then((response) => {
        context.commit('SET_TODOS', response.data)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  modules: {
  }
})
