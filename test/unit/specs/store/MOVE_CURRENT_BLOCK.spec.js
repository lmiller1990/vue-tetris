import { mutations } from 'src/store/store'

const { MOVE_CURRENT_BLOCK,
  SET_CURRENT_BLOCK,
  LOWER_CURRENT_BLOCK,
  CREATE_BLOCK
} = mutations

describe('MOVE_CURRENT_BLOCK', () => {
  it('moves a Z shape block right if there is nothing obstructing it', () => {
    let state = {
      board: [
        [ 0, 0, 0, 0 ],
        [ 0, 0, 0, 0 ],
        [ 0, 0, 0, 1 ]
      ]
    }
    let block = [
      [ 0, 0 ],
      [ 1, 0 ],
      [ 1, 1 ],
      [ 2, 1 ]
    ]
    CREATE_BLOCK(state, block)
    SET_CURRENT_BLOCK(state, block)
    MOVE_CURRENT_BLOCK(state, 'right')

    expect(state.board).to.eql([
      [ 0, 1, 0, 0 ],
      [ 0, 1, 1, 0 ],
      [ 0, 0, 1, 1 ]
    ])

    MOVE_CURRENT_BLOCK(state, 'right')

    expect(state.board).to.eql([
      [ 0, 1, 0, 0 ],
      [ 0, 1, 1, 0 ],
      [ 0, 0, 1, 1 ]
    ])
  })

  it('does not move a Z block to the right if a block obstructs it', () => {
    let state = {
      board: [
        [ 0, 0, 0 ],
        [ 0, 0, 0 ],
        [ 0, 0, 1 ]
      ]
    }
    let block = [
      [ 0, 0 ],
      [ 1, 0 ],
      [ 1, 1 ],
      [ 2, 1 ]
    ]
    CREATE_BLOCK(state, block)
    SET_CURRENT_BLOCK(state, block)
    MOVE_CURRENT_BLOCK(state, 'right')

    expect(state.board).to.eql([
      [ 1, 0, 0 ],
      [ 1, 1, 0 ],
      [ 0, 1, 1 ]
    ])
  })

  it('moves the block one space to the right', () => {
    let state = {
      board: [
        [ 0, 0, 0 ]
      ]
    }
    let block = [ [0, 0], [0, 1] ]

    CREATE_BLOCK(state, block)
    SET_CURRENT_BLOCK(state, block)
    MOVE_CURRENT_BLOCK(state, 'right')

    expect(state.board).to.eql([
      [0, 1, 1]
    ])

    MOVE_CURRENT_BLOCK(state, 'right')

    expect(state.board).to.eql([
      [0, 1, 1]
    ])
  })

  it('moves the block one space to the left', () => {
    let state = {
      board: [
        [ 0, 0, 0 ]
      ]
    }
    let block = [ [0, 1], [0, 2] ]

    CREATE_BLOCK(state, block)
    SET_CURRENT_BLOCK(state, block)
    MOVE_CURRENT_BLOCK(state, 'left')

    expect(state.board).to.eql([
      [1, 1, 0]
    ])

    MOVE_CURRENT_BLOCK(state, 'left')

    expect(state.board).to.eql([
      [1, 1, 0]
    ])
  })
})
