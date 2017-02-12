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

describe('canMove', () => {
  it('allows a Z block to right', () => {
    let board = [
      [ 0, 0, 0, 0 ],
      [ 0, 0, 0, 0 ],
      [ 0, 0, 0, 1 ]
    ]
    let block = [
      [ 0, 0 ],
      [ 1, 0 ],
      [ 1, 1 ],
      [ 2, 1 ]
    ]

    expect(helpers.canMove('right', board, block)).to.equal(true)
  })

  it('allows a flat block to move right', () => {
    let board = [ [ 0, 0, 0 ] ]
    let block = [ [0, 0], [0, 1] ]

    expect(helpers.canMove('right', board, block)).to.equal(true)
  })
  it('disallows a Z block to right', () => {
    let board = [
      [ 0, 0, 0, 0 ],
      [ 0, 0, 0, 0 ],
      [ 0, 0, 0, 1 ]
    ]
    let block = [
      [ 0, 1 ],
      [ 1, 1 ],
      [ 1, 2 ],
      [ 2, 2 ]
    ]

    expect(helpers.canMove('right', board, block)).to.equal(false)
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
