import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 'admin',
        pw: '1234',
        isAdmin: true, 
      },
      {
        id: 'test',
        pw: 'test',
        isAdmin: false
      }
    ],
    loginUser: {}
  },
  getters: {
    isLoggedIn(state) {

      return Object.keys(state.loginUser).length === 0 ? false : true
    }


  },
  mutations: {
    LOGIN(state, user) {
      state.loginUser = user
    }
  },
  actions: {
    login(context, form) {
      const user = context.state.users.find((user) => user.id === form.id)
      if(!user) {
        // alert('그런 사용자는 없습니다!')
        return Promise.reject('누구세요')
      }

      if(user.pw !== form.pw) {
        // alert('비밀번호가 틀렸습니다!')
        return Promise.reject('비번 틀렸다잉')
      
      }
      context.commit('LOGIN', user)
    }
  },
  modules: {
  }
})
