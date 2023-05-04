import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    getPlusCounter(state) {
      // 쓰지마셈
      state.counter += 10
      console.log('getters 호출!')
      return state.counter
    }
  },
  mutations: {
    PLUS_COUNTER(state) {
      state.counter++
    },
    MINUS_COUNTER(state) {
      state.counter--
    }
  },
  actions: {
    plusCounter(context) {
      console.log('context =', context)
      context.commit('PLUS_COUNTER')
    }, 
    minusCounter(context) {
      context.commit('MINUS_COUNTER')
    }
  },
  modules: {
  }
})
