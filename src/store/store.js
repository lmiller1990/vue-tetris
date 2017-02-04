import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  board: [],
  msg: 'Tetris'
}

export const mutations = {
  SETUP_BOARD (state, gameBoard) {
    state.board = gameBoard
  },
  DRAW_BLOCK (state, tiles) {
    for (let t in tiles) {
      state.board[tiles[t][0]][tiles[t][1]] = 1
    }
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
