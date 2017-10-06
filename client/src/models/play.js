
export const play = (grid) => {
  //console.log('Play...')
  //console.log(grid)

  let newGrid = Array(100).fill(false)

  for (let i = 11; i < 13; i++){

    let count = 0
    let rowLen = grid.length % 10
    let firstRowLastCell = rowLen - 1

    // Relative cells.
    if (i === 0){ // Top-left corner cell.
      const cells = [1, 10, 11]
      console.log('Top-left corner cell...')
    } else if (i > 0 && < firstRowLastCell){ // Top row cells.
      const cells = [-1, 1, 9, 10, 11]
      console.log('Top row cells...')
    } else if (i === rowLen){ // Top-right corner cell.
      const cells = [-11, -10, -1, 9, 10]      
      console.log('Top-right corner cell...')
    } else if (i % rowLen === 0){ // Far-left column cells.
      const cells = [-10, -9, 1, 10, 11]
      console.log('Far-left column cells...')
    } else if (i % rowLen === firstRowLastCell){ // Far-right column cells.
      const cells = [-11, -10, -1, 9, 10]
      console.log('Far-right column cells...')
    } else if (i === (gird.length - rowLen){ // Botton-left corner cell.
      const cells = [-10, -9, 1]
      console.log('Botton-left corner cell...')
    // Bottom row cells.
    } else if (i > (grid.length - rowLen) && < (grid.length - 1)){
      const cells = [-11, -10, -9, -1, 1]
      console.log('Bottom row cells...')
    } else if (i === (grid.length - 1)){ // Bottom-right corner cell.
      const cells = [-11, -10, -1]
      console.log('Bottom-right corner cell...')
    } else { // All non-boundary cells.
      const cells = [-11, -10, -9, -1, 1, 9, 10, 11]
      console.log('All non-boundary cells...')
    }
    

    for (let j = 0; j < cells.length; j++){
      if (grid[i + cells[j]]) { count++ }
    }

    if (grid[i] && (count < 2 || count > 3)){
      newGrid[i] = false // Live cell dies.
      //console.log ('Live cell dies...', newGrid[i])
    } else if (!grid[i] && count === 3){
      newGrid[i] = true // Dead cell lives.
      //console.log('Dead cell lives...', newGrid[i])
    } else if (grid[i]){
      newGrid[i] = true // Live cell lives.
      //console.log('Live cell lives...', newGrid[i])
    } else {
      newGrid[i] = false // Dead cell remains dead.
      //console.log('Dead cell remains dead...', newGrid[i])
    }
    console.log(newGrid[i])
  }

}
