import Vue from 'vue'
import Vuex from 'vuex'
import { atEdge,
  atBottom,
  onAnotherBlock,
  indOf,
  canMove,
  canRotate
} from './storeHelpers'

Vue.use(Vuex)

const state = {
  board: [],
  currentBlock: { },
  shouldCreateNextBlock: true
}

export const mutations = {
  SETUP_BOARD (state, gameBoard) {
    state.board = gameBoard
  },
  CREATE_BLOCK (state, block) {
    let rot = block.rotations[block.rotIndex]
    for (let t in rot) {
      state.board[rot[t][0]][rot[t][1]] = 1
      state.shouldCreateNextBlock = false
    }
  },
  SET_CURRENT_BLOCK (state, block) {
    state.currentBlock = block
  },
  ROTATE_CURRENT_BLOCK (state) {
    if (canRotate(state.currentBlock, state.board)) {
      let curr = state.currentBlock.rotations[state.currentBlock.rotIndex]
      let next = 0
      if (state.currentBlock.rotIndex < 3) {
        next = state.currentBlock.rotations[state.currentBlock.rotIndex + 1]
      } else {
        next = state.currentBlock.rotations[0]
      }

      for (let c in curr) {
        // splice all current
        state.board[curr[c][0]].splice(curr[c][1], 1, 0)
      }
      for (let n in next) {
        // add all new rotation
        state.board[next[n][0]].splice(next[n][1], 1, 1)
      }

      if (state.currentBlock.rotIndex < 3) {
        state.currentBlock.rotIndex += 1
      } else {
        state.currentBlock.rotIndex = 0
      }
      console.log(`Current rotation index is ${state.currentBlock.rotIndex}`)
    }
  },
  MOVE_CURRENT_BLOCK (state, direction) {
    let curr = state.currentBlock.rotations[state.currentBlock.rotIndex]
    if (atEdge(direction, state.board[0].length, curr)) {
      return
    }
    if (canMove(direction, state.board, curr)) {
      let updatedCurrentBlock = []
      let movedTo = []

      for (let t in curr) {
        let oldY = curr[t][0]
        let oldX = curr[t][1]
        let newX = 0
        if (direction === 'right') {
          newX = curr[t][1] + 1
        } else {
          newX = curr[t][1] - 1
        }

        if (indOf([oldY, oldX], movedTo) === -1) {
          state.board[oldY].splice(oldX, 1, 0)
        }
        state.board[oldY].splice(newX, 1, 1)

        movedTo.push([oldY, newX])
        updatedCurrentBlock.push([oldY, newX])
      }
      state.currentBlock.rotations[state.currentBlock.rotIndex] = updatedCurrentBlock

      let rot = state.currentBlock.rotIndex
      for (let r in state.currentBlock.rotations) {
        if (parseInt(r) !== parseInt(rot)) {
          for (let b in state.currentBlock.rotations[r]) {
            if (direction === 'right') {
              state.currentBlock.rotations[r][b][1] += 1
            } else {
              state.currentBlock.rotations[r][b][1] -= 1
            }
          }
        }
      }
    }
  },
  LOWER_CURRENT_BLOCK (state) {
    let movedTo = []
    let updatedCurrentBlock = []
    let curr = state.currentBlock.rotations[state.currentBlock.rotIndex]

    if (!atBottom(state.board, state.currentBlock) &&
      !onAnotherBlock(state.board, state.currentBlock)) {
      for (let t in curr) {
        let oldY = curr[t][0]
        let newY = curr[t][0] + 1
        let oldX = curr[t][1]

        if (indOf([oldY, oldX], movedTo) === -1) {
          state.board[oldY].splice(oldX, 1, 0)
        }

        state.board[newY].splice(oldX, 1, 1)
        movedTo.push([newY, oldX])
        updatedCurrentBlock.push([newY, oldX])
      }
      state.currentBlock.rotations[state.currentBlock.rotIndex] = updatedCurrentBlock
      let rot = state.currentBlock.rotIndex
      for (let r in state.currentBlock.rotations) {
        if (parseInt(r) !== parseInt(rot)) {
          for (let b in state.currentBlock.rotations[r]) {
            state.currentBlock.rotations[r][b][0] += 1
          }
        }
      }
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
