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

export { atEdge }
