
export const play = (grid) => {
  //console.log('Play...')
  //console.log(grid)

  let newGrid = Array(100).fill(false)

  let i = 11

  let count = 0
  const cells = [-11, -10, -9, -1, 1, 9, 10, 11] // Relative cells.
  for (let j = 0; j < cells.length; j++){
    if (grid[i + cells[j]]) { count++ }
  }

  console.log(count)

  if (grid[i] && (count < 2 || count > 3)){
    newGrid[i] = false // Live cell dies.
    console.log ('Live cell dies...', newGrid[i])
  } else if (!grid[i] && count === 3){
    newGrid[i] = true // Dead cell lives.
    console.log('Dead cell lives...', newGrid[i])
  } else if (grid[i]){
    newGrid[i] = true // Live cell lives.
    console.log('Live cell lives...', newGrid[i])
  } else {
    newGrid[i] = false // Dead cell remains dead.
    console.log('Dead cell remains dead...', newGrid[i])
  }

  console.log(newGrid[i])
}
