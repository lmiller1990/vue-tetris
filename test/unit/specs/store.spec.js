import { mutations } from 'src/store/store'

const state = {
  board: [
    [ 0, 0, 0 ],
    [ 0, 0, 0 ],
    [ 0, 0, 0 ]
  ]
}

describe('CREATE_BLOCK', () => {
  it('should draw a straight line block', () => {
    const { CREATE_BLOCK } = mutations

    CREATE_BLOCK(state, [
      [0, 0],
      [0, 1],
      [0, 2]
    ])

    expect(state.board).to.eql(
      [
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]
      ]
    )
  })
})
