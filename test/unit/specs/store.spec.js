import { mutations } from 'src/store/store'

describe('CREATE_BLOCK', () => {
  it('should draw a straight line block', () => {
    let state = {
      board: [
        [ 0, 0, 0 ]
      ]
    }
    const { CREATE_BLOCK } = mutations

    CREATE_BLOCK(state, [
      [0, 0],
      [0, 1],
      [0, 2]
    ])

    expect(state.board).to.eql(
      [
        [1, 1, 1]
      ]
    )
  })
})

describe('LOWER_CURRENT_BLOCK', () => {
  it('should lower the block by one row', () => {
    let state = {
      board: [
        [ 0, 0, 0 ],
        [ 0, 0, 0 ]
      ]
    }
    let block = [ [0, 0], [0, 1], [0, 2] ]
    const { LOWER_CURRENT_BLOCK } = mutations
    const { SET_CURRENT_BLOCK } = mutations
    const { CREATE_BLOCK } = mutations
    CREATE_BLOCK(state, block)
    SET_CURRENT_BLOCK(state, block)

    LOWER_CURRENT_BLOCK(state)

    expect(state.board).to.eql([
      [0, 0, 0],
      [1, 1, 1]
    ])

    LOWER_CURRENT_BLOCK(state)

    expect(state.board).to.eql([
      [0, 0, 0],
      [1, 1, 1]
    ])
  })
})

describe('MOVE_CURRENT_BLOCK', () => {
  it('should move the block left or right', () => {
    let state = {  }
  })
})
