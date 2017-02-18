import { mutations } from 'src/store/store'

const { RESTART_GAME } = mutations

describe('RESTART_GAME', () => {
  it('restarts the game to the orignal state', () => {
    let state = {
      board: [
        [ 0, 1 ],
        [ 1, 1 ]
      ],
      currentBlock: { rotIndex: 1 },
      gameOver: true,
      shouldCreateNextBlock: false,
      score: 21
    }
    RESTART_GAME(state)

    expect(state.board).to.eql([
      [ 0, 0 ],
      [ 0, 0 ]
    ])
    expect(state.gameOver).to.equal(false)
    expect(state.shouldCreateNextBlock).to.equal(true)
    expect(state.score).to.equal(0)
  })
})
