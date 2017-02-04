import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  board: [],
  currentBlock: []
}

export const mutations = {
  SETUP_BOARD (state, gameBoard) {
    state.board = gameBoard
  },
  CREATE_BLOCK (state, tiles) {
    for (let t in tiles) {
      state.board[tiles[t][0]][tiles[t][1]] = 1
    }
  },
  SET_CURRENT_BLOCK (state, block) {
    state,currentBlock = block
  },
  LOWER_CURRENT_BLOCK (state) {
    for (let t in state.currentBock)
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
