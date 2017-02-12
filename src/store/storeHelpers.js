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
  let curr = getBlockLowestPoints(currentBlock)
  for (let c in curr) {
    if (curr[c][0] < board.length - 1) {
      // do nothing
    } else {
      return true // it is on the bottom
    }
  }
  return false
}

function onAnotherBlock (board, currentBlock) {
  let curr = getBlockLowestPoints(currentBlock)
  for (let c in curr) {
    if (board[curr[c][0] + 1][curr[c][1]] === 1) {
      return true
    }
  }
  return false
}

function occupiedByCurrentBlock (point, currBlock) {
  for (let i in currBlock) {
    if (point[0] === currBlock[i][0] && point[1] === currBlock[i][1]) {
      return true
    }
  }
  return false
}

function indOf (o, arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(`Comparing ${o[0]} and ${arr[i][0]}, and ${o[1]} and ${arr[i][1]}`)
    if (arr[i][0] === o[0] && arr[i][1] === o[1]) {
      return i
    }
  }
  return -1
}

function getBlockLowestPoints (block) {
  let cols = []
  let low = []
  for (let b in block) {
    if (!cols.includes(block[b][1])) {
      cols.push(block[b][1])
      low.push(block[b])
    } else {
      for (let i in cols) {
        if (low[i][1] === block[b][1]) {
          if (low[i][0] < block[b][0]) {
            low.splice(i, 1, block[b])
          }
        }
      }
    }
  }
  return low
}

export { atEdge,
  atBottom,
  onAnotherBlock,
  getBlockLowestPoints,
  occupiedByCurrentBlock,
  indOf
}
