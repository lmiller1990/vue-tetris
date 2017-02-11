import Vue from 'vue'
import Vuex from 'vuex'
import { atEdge, atBottom, onAnotherBlock } from './storeHelpers'

Vue.use(Vuex)

const state = {
  board: [],
  currentBlock: [],
  shouldCreateNextBlock: true
}

export const mutations = {
  SETUP_BOARD (state, gameBoard) {
    state.board = gameBoard
  },
  CREATE_BLOCK (state, tiles) {
    for (let t in tiles) {
      state.board[tiles[t][0]][tiles[t][1]] = 1
      state.shouldCreateNextBlock = false
    }
  },
  SET_CURRENT_BLOCK (state, block) {
    state.currentBlock = block
  },
  MOVE_CURRENT_BLOCK (state, direction) {
    if (atEdge(direction, state.board[0].length, state.currentBlock)) {
      return
    }
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
    if (!atBottom(state.board, state.currentBlock) &&
      !onAnotherBlock(state.board, state.currentBlock)) {
      for (let t in state.currentBlock) {
        let oldY = state.currentBlock[t][0]
        let newY = state.currentBlock[t][0] + 1
        let oldX = state.currentBlock[t][1]

        state.board[oldY].splice(oldX, 1, 0)
        state.board[newY].splice(oldX, 1, 1)

        updatedCurrentBlock.push([newY, oldX])
      }
      state.currentBlock = updatedCurrentBlock
    } else {
      state.shouldCreateNextBlock = true
      // create a new block
      /* let tiles = [ [1, 0], [1, 1], [1, 2] ]

      for (let t in tiles) {
        state.board[tiles[t][0]][tiles[t][1]] = 1
      }
      state.currentBlock = tiles */
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
