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

describe('getBlockLowestPoints', () => {
  it('gets the lowest points of a block', () => {
    let block = [
      [ 0, 0 ],
      [ 1, 0 ],
      [ 2, 0 ],
      [ 2, 1 ]
    ]

    expect(helpers.getBlockLowestPoints(block)).to.eql([
      [ 2, 0 ],
      [ 2, 1 ]
    ])
  })
})

describe('occupiedByCurrentBlock', () => {
  it('checks if a point is occupied by the current block', () => {
    let block = [
      [ 0, 0 ],
      [ 1, 0 ],
      [ 2, 0 ],
      [ 2, 1 ]
    ]

    expect(helpers.occupiedByCurrentBlock([2, 0], block)).to.equal(true)
    expect(helpers.occupiedByCurrentBlock([3, 0], block)).to.equal(false)
  })
})
