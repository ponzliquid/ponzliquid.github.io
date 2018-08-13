// const Vuex = require('vuex')
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const {MUTATION} = require('./mutation-types')
const {ACTION} = require('./action-types')
const state = {
  modals: []
}
const getters = {
  modals: (state) => {
    return state.modals
  }
}
const actions = {
  [ACTION.OPEN_MODAL] ({commit}, params) {
    commit(MUTATION.OPEN_MODAL, params)
  },
  [ACTION.CLOSE_MODAL] ({commit}) {
    commit(MUTATION.CLOSE_MODAL)
  }
}
const mutations = {
  [MUTATION.OPEN_MODAL] (state, modal) {
    state.modals.push(modal)
  },
  [MUTATION.CLOSE_MODAL] (state) {
    state.modals.pop()
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
