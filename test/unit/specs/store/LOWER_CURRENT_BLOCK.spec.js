import { mutations } from 'src/store/store'

const {
  SET_CURRENT_BLOCK,
  LOWER_CURRENT_BLOCK,
  CREATE_BLOCK
} = mutations

describe('LOWER_CURRENT_BLOCK', () => {
  it('should lower the block by one row', () => {
    let state = {
      board: [
        [ 0, 0 ],
        [ 0, 0 ],
        [ 0, 0 ]
      ]
    }
    let block = {
      rotIndex: 0,
      rotations: [
        [
          [0, 0],
          [0, 1],
          [1, 0],
          [1, 1]
        ]
      ]
    }
    CREATE_BLOCK(state, block)
    SET_CURRENT_BLOCK(state, block)
    LOWER_CURRENT_BLOCK(state)

    expect(state.board).to.eql([
      [ 0, 0 ],
      [ 1, 1 ],
      [ 1, 1 ]
    ])

    LOWER_CURRENT_BLOCK(state)

    expect(state.board).to.eql([
      [ 0, 0 ],
      [ 1, 1 ],
      [ 1, 1 ]
    ])
  })

  it('should not lower a Z shaped block already on the ground', () => {
    let state = {
      board: [
        [ 0, 0 ],
        [ 0, 0 ],
        [ 0, 0 ]
      ]
    }
    let block = {
      rotIndex: 0,
      rotations: [
        [
          [ 0, 1 ],
          [ 1, 0 ],
          [ 1, 1 ],
          [ 2, 0 ]
        ]
      ]
    }
    CREATE_BLOCK(state, block)
    SET_CURRENT_BLOCK(state, block)
    LOWER_CURRENT_BLOCK(state)

    expect(state.board).to.eql([
      [ 0, 1 ],
      [ 1, 1 ],
      [ 1, 0 ]
    ])
  })

  it('should not be lowered if sitting on another block', () => {
    let block = {
      rotIndex: 0,
      rotations: [
        [
          [0, 0]
        ]
      ]
    }
    let state = {
      board: [
        [ 0 ],
        [ 1 ]
      ],
      currentBlock: null
    }
    CREATE_BLOCK(state, block)
    SET_CURRENT_BLOCK(state, block)
    LOWER_CURRENT_BLOCK(state)

    expect(state.board).to.eql([
      [ 1 ],
      [ 1 ]
    ])
  })
})
