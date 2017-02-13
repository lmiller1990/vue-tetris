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

function getNextRotation (curr) {
  let next
  if (curr.rotIndex < 3) {
    next = curr.rotations[curr.rotIndex + 1]
  } else {
    next = curr.rotations[0]
  }
  return next
}

function canRotate (curr, board) {
  let next = getNextRotation(curr)
  for (let n in next) {
    // check not out of the bottom
    if (next[n][0] < board.length) {
      // nothing
    } else {
      return false
    }

    // check LHS and RHS bounds
    if (next[n][1] < board[0].length && next[n][1] >= 0) {
      // nothing
    } else {
      return false
    }
  }
  return true
}

function canMove (direction, board, currentBlock) {
  if (direction === 'right') {
    let curr = getRightmostPoints(currentBlock)
    for (let c in curr) {
      if (board[curr[c][0]][curr[c][1] + 1] === 0) {
        // can move - do nothing
      } else {
        return false
      }
    }
  } else if (direction === 'left') {
    let curr = getLeftmostPoints(currentBlock)
    for (let c in curr) {
      if (board[curr[c][0]][curr[c][1] - 1] === 0) {
        // nothing
      } else {
        return false
      }
    }
  }
  return true
}

function atBottom (board, currentBlock) {
  let curr = getBlockLowestPoints(currentBlock.rotations[currentBlock.rotIndex])
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
  let curr = getBlockLowestPoints(currentBlock.rotations[currentBlock.rotIndex])
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

function getLeftmostPoints (block) {
  let cols = []
  let left = []
  for (let b in block) {
    if (!cols.includes(block[b][0])) {
      cols.push(block[b][0])
      left.push(block[b])
    } else {
      for (let i in cols) {
        if (left[i][0] === block[b][0]) {
          if (left[i][1] > block[b][1]) {
            left.splice(i, 1, block[b])
          }
        }
      }
    }
  }
  return left
}

function getRightmostPoints (block) {
  let cols = []
  let right = []
  for (let b in block) {
    if (!cols.includes(block[b][0])) {
      cols.push(block[b][0])
      right.push(block[b])
    } else {
      for (let i in cols) {
        if (right[i][0] === block[b][0]) {
          if (right[i][1] < block[b][1]) {
            right.splice(i, 1, block[b])
          }
        }
      }
    }
  }
  return right
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
  indOf,
  canMove,
  canRotate,
  getNextRotation
}
