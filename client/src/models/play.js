
export const play = (grid) => {
  //console.log('Play...')
  //console.log(grid)

  let newGrid = Array(100).fill(false)

  for (let i = 0; i < 20; i++){

    console.log('CELL', i)
    
    let rowLen = Math.sqrt(grid.length)
    let firstRowLastCell = rowLen - 1
    let cells

    // Relative cells to check.
    if (i === 0){ // Top-left corner cell.
      cells = [1, 10, 11]
      console.log('Top-left corner cell...')
    } else if (i > 0 && i < firstRowLastCell){ // Top row cells/ not corners.
      cells = [-1, 1, 9, 10, 11]
      console.log('Top row cells/ not corners...')
    } else if (i === firstRowLastCell){ // Top-right corner cell.
      cells = [-11, -10, -1, 9, 10]      
      console.log('Top-right corner cell...')
    } else if (i % rowLen === 0){ // Far-left column cells/ not corners
      cells = [-10, -9, 1, 10, 11]
      console.log('Far-left column cells/ not corners...')
    // Far-right column cells/ not corners.
    } else if (i % rowLen === firstRowLastCell){
      cells = [-11, -10, -1, 9, 10]
      console.log('Far-right column cells/ not corners...')
    } else if (i === (grid.length - rowLen)){ // Botton-left corner cell.
      cells = [-10, -9, 1]
      console.log('Botton-left corner cell...')
      // Bottom row cells/ not corners.
    } else if (i > (grid.length - rowLen) && i < (grid.length - 1)){
      cells = [-11, -10, -9, -1, 1]
      console.log('Bottom row cells...')
    } else if (i === (grid.length - 1)){ // Bottom-right corner cell.
      cells = [-11, -10, -1]
      console.log('Bottom-right corner cell...')
    } else { // All non-boundary cells.
      cells = [-11, -10, -9, -1, 1, 9, 10, 11]
      console.log('All non-boundary cells...')
    }

    console.log(cells)
    
    let count = 0
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
      newGrid[i] = true // Live cell remains alive.
      console.log('Live cell remains alive...', newGrid[i])
    } else {
      newGrid[i] = false // Dead cell remains dead.
      console.log('Dead cell remains dead...', newGrid[i])
    }
    console.log(newGrid[i])
  }

}
