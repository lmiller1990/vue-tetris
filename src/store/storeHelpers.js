function atEdge (direction, boardWidth, currentBlock) {
  if (direction === 'right') {
    for (let c in currentBlock) {
      if (currentBlock[c][1] + 1 === boardWidth) {
        return true
      }
    }
  } else {
    for (let c in currentBlock) {
      if (currentBlock[c][1] - 1 < 0) {
        return true
      }
    }
  }
  return false
}

function atBottom (board, currentBlock) {
  if (currentBlock[0][0] < board.length - 1) {
    return false
  }
  return true
}

function onAnotherBlock (board, currentBlock) {
  let curr = currentBlock
  for (let c in curr) {
    if (board[curr[c][0] + 1][curr[c][1]] === 1) {
      return true
    }
  }
  return false
}

export { atEdge, atBottom, onAnotherBlock }
