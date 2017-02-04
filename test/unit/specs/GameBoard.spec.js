import GameBoard from 'src/components/GameBoard'

describe('GameBoard.vue', () => {
  it('should create a 15x10 array of 0s', () => {
    const board = GameBoard.methods.createArray(15, 10)
    expect(board.length).to.equal(15)
    expect(board[0].every(x => x === 0)).to.be.true
  })
})
