export const play = (grid, rowLen, bordersClosed) => {
  //console.log('play...')

  let newGrid = Array(grid.length).fill(false)

  for (let i = 0; i < grid.length; i++){

    //console.log('CELL', i)
    let firstRowLastCell = rowLen - 1
    let cells

    // Relative cells to check.
    if (rowLen === 10 && bordersClosed === true){
      if (i === 0){ // Top-left corner cell.
        cells = [1, 10, 11]
        //console.log('Top-left corner cell...')
      } else if (i === firstRowLastCell){ // Top-right corner cell.
        cells = [-1, 9, 10]      
        //console.log('Top-right corner cell...')
      } else if (i === (grid.length - rowLen)){ // Botton-left corner cell.
        cells = [-10, -9, 1]
        //console.log('Botton-left corner cell...')
      } else if (i === (grid.length - 1)){ // Bottom-right corner cell.
        cells = [-11, -10, -1]
        //console.log('Bottom-right corner cell...')
      } else if (i > 0 && i < firstRowLastCell){ // Top row cells/ not corners.
        cells = [-1, 1, 9, 10, 11]
        //console.log('Top row cells/ not corners...')
      } else if (i % rowLen === 0){ // Far-left column cells/ not corners
        cells = [-10, -9, 1, 10, 11]
        //console.log('Far-left column cells/ not corners...')
      // Far-right column cells/ not corners.
      } else if (i % rowLen === firstRowLastCell){
        cells = [-11, -10, -1, 9, 10]
        //console.log('Far-right column cells/ not corners...')
      // Bottom row cells/ not corners.
      } else if (i > (grid.length - rowLen) && i < (grid.length - 1)){
        cells = [-11, -10, -9, -1, 1]
        //console.log('Bottom row cells/ not corners...')
      } else { // All non-boundary cells.
        cells = [-11, -10, -9, -1, 1, 9, 10, 11]
        //console.log('All non-boundary cells...')
      }
    }

    if (rowLen === 10 && bordersClosed === false){
      if (i === 0){ // Top-left corner cell.
        cells = [1, 9, 10, 11, 19, 90, 91, 99]
        //console.log('Top-left corner cell...')
      } else if (i === firstRowLastCell){ // Top-right corner cell.
        cells = [-9, -1, 1, 9, 10, 81, 89, 90]      
        //console.log('Top-right corner cell...')
      } else if (i === (grid.length - rowLen)){ // Botton-left corner cell.
        cells = [-90, -89, -81, -10, -9, -1, 1, 9]
        //console.log('Botton-left corner cell...')
      } else if (i === (grid.length - 1)){ // Bottom-right corner cell.
        cells = [-99, -91, -90, -11, -10, -9, -1]
        //console.log('Bottom-right corner cell...')
      } else if (i > 0 && i < firstRowLastCell){ // Top row cells/ not corners.
        cells = [-1, 1, 9, 10, 11, 89, 90, 91]
        //console.log('Top row cells/ not corners...')
      } else if (i % rowLen === 0){ // Far-left column cells/ not corners
        cells = [-10, -9, -1, 1, 9, 10, 11, 19]
        //console.log('Far-left column cells/ not corners...')
      // Far-right column cells/ not corners.
      } else if (i % rowLen === firstRowLastCell){
        cells = [-19, -11, -10, -9, -1, 1, 9, 10]
        //console.log('Far-right column cells/ not corners...')
      // Bottom row cells/ not corners.
      } else if (i > (grid.length - rowLen) && i < (grid.length - 1)){
        cells = [-91, -90, -89, -11, -10, -9, -1, 1]
        //console.log('Bottom row cells/ not corners...')
      } else { // All non-boundary cells.
        cells = [-11, -10, -9, -1, 1, 9, 10, 11]
        //console.log('All non-boundary cells...')
      }
    }    
    
    // Relative cells to check.
    if (rowLen === 20){
      if (i === 0){ // Top-left corner cell.
        cells = [1, 20, 21]
        //console.log('Top-left corner cell...')
      } else if (i === firstRowLastCell){ // Top-right corner cell.
        cells = [-1, 19, 20]      
        //console.log('Top-right corner cell...')
      } else if (i === (grid.length - rowLen)){ // Botton-left corner cell.
        cells = [-20, -19, 1]
        //console.log('Botton-left corner cell...')
      } else if (i === (grid.length - 1)){ // Bottom-right corner cell.
        cells = [-21, -20, -1]
        //console.log('Bottom-right corner cell...')
      } else if (i > 0 && i < firstRowLastCell){ // Top row cells/ not corners.
        cells = [-1, 1, 19, 20, 21]
        //console.log('Top row cells/ not corners...')
      } else if (i % rowLen === 0){ // Far-left column cells/ not corners
        cells = [-20, -19, 1, 20, 21]
        //console.log('Far-left column cells/ not corners...')
      // Far-right column cells/ not corners.
      } else if (i % rowLen === firstRowLastCell){
        cells = [-21, -20, -1, 19, 20]
        //console.log('Far-right column cells/ not corners...')
      // Bottom row cells/ not corners.
      } else if (i > (grid.length - rowLen) && i < (grid.length - 1)){
        cells = [-21, -20, -19, -1, 1]
        //console.log('Bottom row cells/ not corners...')
      } else { // All non-boundary cells.
        cells = [-21, -20, -19, -1, 1, 19, 20, 21]
        //console.log('All non-boundary cells...')
      }
    }

    // Relative cells to check.
    if (rowLen === 40){
      if (i === 0){ // Top-left corner cell.
        cells = [1, 40, 41]
        //console.log('Top-left corner cell...')
      } else if (i === firstRowLastCell){ // Top-right corner cell.
        cells = [-1, 39, 40]      
        //console.log('Top-right corner cell...')
      } else if (i === (grid.length - rowLen)){ // Botton-left corner cell.
        cells = [-40, -39, 1]
        //console.log('Botton-left corner cell...')
      } else if (i === (grid.length - 1)){ // Bottom-right corner cell.
        cells = [-41, -40, -1]
        //console.log('Bottom-right corner cell...')
      } else if (i > 0 && i < firstRowLastCell){ // Top row cells/ not corners.
        cells = [-1, 1, 39, 40, 41]
        //console.log('Top row cells/ not corners...')
      } else if (i % rowLen === 0){ // Far-left column cells/ not corners
        cells = [-40, -39, 1, 40, 41]
        //console.log('Far-left column cells/ not corners...')
      // Far-right column cells/ not corners.
      } else if (i % rowLen === firstRowLastCell){
        cells = [-41, -40, -1, 39, 40]
        //console.log('Far-right column cells/ not corners...')
      // Bottom row cells/ not corners.
      } else if (i > (grid.length - rowLen) && i < (grid.length - 1)){
        cells = [-41, -40, -39, -1, 1]
        //console.log('Bottom row cells/ not corners...')
      } else { // All non-boundary cells.
        cells = [-41, -40, -39, -1, 1, 39, 40, 41]
        //console.log('All non-boundary cells...')
      }
    }

    let count = 0
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
      newGrid[i] = true // Live cell remains alive.
      //console.log('Live cell remains alive...', newGrid[i])
    } else {
      newGrid[i] = false // Dead cell remains dead.
      //console.log('Dead cell remains dead...', newGrid[i])
    }
    //console.log(newGrid[i])
  }

  return newGrid
}