import * as helpers from 'src/store/storeHelpers'

describe('onAnotherBlock', () => {
  it('returns true if current block is on top of another block', () => {
    let board = [
      [0, 0, 0],
      [1, 1, 0]
    ]
    let currentBlock = [
      [ 0, 1 ],
      [ 0, 2 ]
    ]

    expect(helpers.onAnotherBlock(board, currentBlock)).to.equal(true)
  })
})
