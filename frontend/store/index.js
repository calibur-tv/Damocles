import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breadcrumb: []
  },
  mutations: {
    set_breadcrumb (state, data) {
      state.breadcrumb = data
    }
  },
  actions: {},
  getters: {
    get_breadcrumb: state => {
      return state.breadcrumb
    }
  }
})
