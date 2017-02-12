import Vue from 'vue'
import Vuex from 'vuex'
import { atEdge,
  atBottom,
  onAnotherBlock,
  occupiedByCurrentBlock,
  indOf
} from './storeHelpers'

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
    let updatedCurrentBlock = []
    let movedTo = []

    for (let t in state.currentBlock) {
      let oldY = state.currentBlock[t][0]
      let oldX = state.currentBlock[t][1]
      let newX = 0
      if (direction === 'right') {
        newX = state.currentBlock[t][1] + 1
      } else {
        newX = state.currentBlock[t][1] - 1
      }

      if (indOf([oldY, oldX], movedTo) === -1) {
        state.board[oldY].splice(oldX, 1, 0)
      }
      state.board[oldY].splice(newX, 1, 1)

      movedTo.push([oldY, newX])
      updatedCurrentBlock.push([oldY, newX])
    }
    state.currentBlock = updatedCurrentBlock
  },
  LOWER_CURRENT_BLOCK (state) {
    let movedTo = []
    let updatedCurrentBlock = []
    if (!atBottom(state.board, state.currentBlock) &&
      !onAnotherBlock(state.board, state.currentBlock)) {
      for (let t in state.currentBlock) {
        let oldY = state.currentBlock[t][0]
        let newY = state.currentBlock[t][0] + 1
        let oldX = state.currentBlock[t][1]

        if (!occupiedByCurrentBlock([newY, oldX], state.currentBlock)) {
        }

        if (indOf([oldY, oldX], movedTo) === -1) {
          state.board[oldY].splice(oldX, 1, 0)
        }

        state.board[newY].splice(oldX, 1, 1)
        movedTo.push([newY, oldX])
        updatedCurrentBlock.push([newY, oldX])
      }
      state.currentBlock = updatedCurrentBlock
    } else {
      state.shouldCreateNextBlock = true
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
