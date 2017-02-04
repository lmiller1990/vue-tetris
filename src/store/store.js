import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  board: [],
  msg: 'Tetris'
}

const mutations = {
  SETUP_BOARD (state, gameBoard) {
    state.board = gameBoard
  }
}

const actions = {

}

const getters = {

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
