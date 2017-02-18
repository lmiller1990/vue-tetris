import { mutations } from 'src/store/store'

const { DELETE_LINE_IF_COMPLETE } = mutations

describe('DELETE_LINE_IF_COMPLETED', () => {
  it('delets a line when it is completed', () => {
    let state = {
      board: [
        [ 0, 0, 0, 0 ],
        [ 0, 1, 1, 1 ],
        [ 1, 1, 1, 1 ]
      ]
    }
    for (let l in state.board) {
      DELETE_LINE_IF_COMPLETE(state, l)
    }

    expect(state.board).to.eql([
      [ 0, 0, 0, 0 ],
      [ 0, 0, 0, 0 ],
      [ 0, 1, 1, 1 ]
    ])
  })
})
