import { mutations } from 'src/store/store'
import blocks from 'src/blocks'

const { ROTATE_CURRENT_BLOCK,
  SET_CURRENT_BLOCK,
  CREATE_BLOCK
} = mutations

describe('ROTATE_CURRENT_BLOCK', () => {
  it('rotates an L block', () => {
    let block = blocks[1]
    let state = {
      board: [
        [ 0, 0, 0 ],
        [ 0, 0, 0 ],
        [ 0, 0, 0 ]
      ]
    }
    CREATE_BLOCK(state, block)
    SET_CURRENT_BLOCK(state, block)
    ROTATE_CURRENT_BLOCK(state)

    console.log(state.board)
    expect(state.board).to.eql([
      [ 0, 0, 0 ],
      [ 1, 1, 1 ],
      [ 1, 0, 0 ]
    ])
  })
  it('does not allow a L block to rotate if it would go out of bounds', () => {
    let block = blocks[1]
    block.rotIndex = 0
    let state = {
      board: [
        [ 0, 0 ],
        [ 0, 0 ],
        [ 0, 0 ]
      ]
    }
    CREATE_BLOCK(state, block)
    SET_CURRENT_BLOCK(state, block)
    ROTATE_CURRENT_BLOCK(state)

    expect(state.board).to.eql([
      [ 1, 0 ],
      [ 1, 0 ],
      [ 1, 1 ]
    ])
  })
  it('does not allow a L block to rotate through the fllor', () => {
    let block = blocks[1]
    block.rotIndex = 3
    let state = {
      board: [
        [ 0, 0, 0 ],
        [ 0, 0, 0 ]
      ]
    }
    CREATE_BLOCK(state, block)
    SET_CURRENT_BLOCK(state, block)
    ROTATE_CURRENT_BLOCK(state)

    expect(state.board).to.eql([
        [ 0, 0, 1 ],
        [ 1, 1, 1 ]
    ])
  })
})
