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

    expect(state.board).to.eql([
      [ 1, 0, 0 ],
      [ 1, 0, 0 ],
      [ 1, 1, 0 ]
    ])

    ROTATE_CURRENT_BLOCK(state)

    /* expect(state.board).to.eql([
      [ 0, 0, 0 ],
      [ 0, 0, 0 ],
      [ 0, 0, 0 ]
    ]) */
    expect(state.board).to.eql([
      [ 0, 0, 0 ],
      [ 1, 1, 1 ],
      [ 1, 0, 0 ]
    ])
  })
})
