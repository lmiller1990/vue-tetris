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
    state.currentBlock = block
  },
  MOVE_CURRENT_BLOCK (state, direction) {
    let toFill = []
    let updatedCurrentBlock = []
    for (let t in state.currentBlock) {
      let oldY = state.currentBlock[t][0]
      let oldX = state.currentBlock[t][1]
      let newX = 0
      if (direction === 'right') {
        newX = state.currentBlock[t][1] + 1
      } else {
        newX = state.currentBlock[t][1] - 1
      }
      toFill.push(newX)

      if (!toFill.includes(oldX)) {
        state.board[oldY].splice(oldX, 1, 0)
      }

      state.board[oldY].splice(newX, 1, 1)

      updatedCurrentBlock.push([oldY, newX])
    }
    state.currentBlock = updatedCurrentBlock
  },
  LOWER_CURRENT_BLOCK (state) {
    let updatedCurrentBlock = []
    if (state.currentBlock[0][0] < state.board.length - 1) {
      for (let t in state.currentBlock) {
        let oldY = state.currentBlock[t][0]
        let newY = state.currentBlock[t][0] + 1
        let oldX = state.currentBlock[t][1]

        state.board[oldY].splice(oldX, 1, 0)
        state.board[newY].splice(oldX, 1, 1)

        updatedCurrentBlock.push([newY, oldX])
      }
      state.currentBlock = updatedCurrentBlock
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
