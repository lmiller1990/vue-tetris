import { mutations } from 'src/store/store'

const {
  CREATE_BLOCK
} = mutations

describe('CREATE_BLOCK', () => {
  it('should draw a straight line block', () => {
    let state = {
      board: [
        [ 0, 0, 0 ]
      ]
    }
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
