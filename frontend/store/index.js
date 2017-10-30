import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login : null
  },

  mutations: {
    SET_LOGIN (state, { bool }) {
      state.login = bool
    }
  },

  actions: {
    setLogin: ({ commit }, { bool }) => {
      commit('SET_LOGIN', { bool })
    }
  },

  getters: {
    isLogin: state => {
      return state.login
    }
  }
})
