const run = (grid, rowLen, bordersClosed) => {
  //console.log('play...')

  let newGrid = Array(grid.length).fill(false)

  for (let i = 0; i < grid.length; i++){

    let firstRowLastCell = rowLen - 1
    let cells

    // Relative cells to check.

    if (rowLen === 10 && bordersClosed === true){
      if (i === 0){ // Top-left corner cell.
        cells = [1, 10, 11]
      } else if (i === firstRowLastCell){ // Top-right corner cell.
        cells = [-1, 9, 10]      
      } else if (i === (grid.length - rowLen)){ // Botton-left corner cell.
        cells = [-10, -9, 1]
      } else if (i === (grid.length - 1)){ // Bottom-right corner cell.
        cells = [-11, -10, -1]
      // Top row cells/ not corners.  
      } else if (i > 0 && i < firstRowLastCell){
        cells = [-1, 1, 9, 10, 11]
      } else if (i % rowLen === 0){ // Far-left column cells/ not corners
        cells = [-10, -9, 1, 10, 11]
      // Far-right column cells/ not corners.
      } else if (i % rowLen === firstRowLastCell){
        cells = [-11, -10, -1, 9, 10]
      // Bottom row cells/ not corners.
      } else if (i > (grid.length - rowLen) && i < (grid.length - 1)){
        cells = [-11, -10, -9, -1, 1]
      } else { // All non-boundary cells.
        cells = [-11, -10, -9, -1, 1, 9, 10, 11]
      }
    }

    if (rowLen === 10 && bordersClosed === false){
      if (i === 0){ // Top-left corner cell.
        cells = [1, 9, 10, 11, 19, 90, 91, 99]
      } else if (i === firstRowLastCell){ // Top-right corner cell.
        cells = [-9, -1, 1, 9, 10, 81, 89, 90]      
      } else if (i === (grid.length - rowLen)){ // Botton-left corner cell.
        cells = [-90, -89, -81, -10, -9, -1, 1, 9]
      } else if (i === (grid.length - 1)){ // Bottom-right corner cell.
        cells = [-99, -91, -90, -11, -10, -9, -1]
      // Top row cells/ not corners.  
      } else if (i > 0 && i < firstRowLastCell){
        cells = [-1, 1, 9, 10, 11, 89, 90, 91]
      } else if (i % rowLen === 0){ // Far-left column cells/ not corners
        cells = [-10, -9, -1, 1, 9, 10, 11, 19]
      // Far-right column cells/ not corners.
      } else if (i % rowLen === firstRowLastCell){
        cells = [-19, -11, -10, -9, -1, 1, 9, 10]
      // Bottom row cells/ not corners.
      } else if (i > (grid.length - rowLen) && i < (grid.length - 1)){
        cells = [-91, -90, -89, -11, -10, -9, -1, 1]
      } else { // All non-boundary cells.
        cells = [-11, -10, -9, -1, 1, 9, 10, 11]
      }
    }    
    
    // Relative cells to check.
    if (rowLen === 20 && bordersClosed === true){
      if (i === 0){ // Top-left corner cell.
        cells = [1, 20, 21]
      } else if (i === firstRowLastCell){ // Top-right corner cell.
        cells = [-1, 19, 20]      
      } else if (i === (grid.length - rowLen)){ // Botton-left corner cell.
        cells = [-20, -19, 1]
      } else if (i === (grid.length - 1)){ // Bottom-right corner cell.
        cells = [-21, -20, -1]
      // Top row cells/ not corners.
      } else if (i > 0 && i < firstRowLastCell){
        cells = [-1, 1, 19, 20, 21]
      } else if (i % rowLen === 0){ // Far-left column cells/ not corners
        cells = [-20, -19, 1, 20, 21]
      // Far-right column cells/ not corners.
      } else if (i % rowLen === firstRowLastCell){
        cells = [-21, -20, -1, 19, 20]
      // Bottom row cells/ not corners.
      } else if (i > (grid.length - rowLen) && i < (grid.length - 1)){
        cells = [-21, -20, -19, -1, 1]
      } else { // All non-boundary cells.
        cells = [-21, -20, -19, -1, 1, 19, 20, 21]
      }
    }

    if (rowLen === 20 && bordersClosed === false){
      if (i === 0){ // Top-left corner cell.
        cells = [1, 19, 20, 21, 39, 380, 381, 399]
      } else if (i === firstRowLastCell){ // Top-right corner cell.
        cells = [-19, -1, 1, 19, 20, 361, 379, 380]      
      } else if (i === (grid.length - rowLen)){ // Botton-left corner cell.
        cells = [-380, -379, -361, -20, -19, -1, 1, 19]
      } else if (i === (grid.length - 1)){ // Bottom-right corner cell.
        cells = [-399, -381, -380, -39, -21, -20, -19, -1]
      // Top row cells/ not corners.
      } else if (i > 0 && i < firstRowLastCell){
        cells = [-1, 1, 19, 20, 21, 379, 380, 381]
      } else if (i % rowLen === 0){ // Far-left column cells/ not corners
        cells = [-20, -19, -1, 1, 19, 20, 21, 39]
      // Far-right column cells/ not corners.
      } else if (i % rowLen === firstRowLastCell){
        cells = [-39, -21, -20, -19, -1, 1, 19, 20]
      // Bottom row cells/ not corners.
      } else if (i > (grid.length - rowLen) && i < (grid.length - 1)){
        cells = [-381, -380, -379, -21, -20, -19, -1, 1]
      } else { // All non-boundary cells.
        cells = [-21, -20, -19, -1, 1, 19, 20, 21]
        //console.log('All non-boundary cells...')
      }
    }

    // Relative cells to check.
    if (rowLen === 40 && bordersClosed === true){
      if (i === 0){ // Top-left corner cell.
        cells = [1, 40, 41]
      } else if (i === firstRowLastCell){ // Top-right corner cell.
        cells = [-1, 39, 40]      
      } else if (i === (grid.length - rowLen)){ // Botton-left corner cell.
        cells = [-40, -39, 1]
      } else if (i === (grid.length - 1)){ // Bottom-right corner cell.
        cells = [-41, -40, -1]
      // Top row cells/ not corners.
      } else if (i > 0 && i < firstRowLastCell){
        cells = [-1, 1, 39, 40, 41]
      } else if (i % rowLen === 0){ // Far-left column cells/ not corners
        cells = [-40, -39, 1, 40, 41]
      // Far-right column cells/ not corners.
      } else if (i % rowLen === firstRowLastCell){
        cells = [-41, -40, -1, 39, 40]
      // Bottom row cells/ not corners.
      } else if (i > (grid.length - rowLen) && i < (grid.length - 1)){
        cells = [-41, -40, -39, -1, 1]
      } else { // All non-boundary cells.
        cells = [-41, -40, -39, -1, 1, 39, 40, 41]
      }
    }

    // Relative cells to check.
    if (rowLen === 40 && bordersClosed === false){
      if (i === 0){ // Top-left corner cell.
        cells = [1, 39, 40, 41, 79, 760, 761, 799]
      } else if (i === firstRowLastCell){ // Top-right corner cell.
        cells = [-39, -1, 1, 39, 40, 721, 759, 760]      
      } else if (i === (grid.length - rowLen)){ // Botton-left corner cell.
        cells = [-760, -759, -721, -40, -39, -21, 1, 39]
      } else if (i === (grid.length - 1)){ // Bottom-right corner cell.
        cells = [-799, -761, -760, -41, -40, -39, -1, 1]
      // Top row cells/ not corners.
      } else if (i > 0 && i < firstRowLastCell){
        cells = [-1, 1, 39, 40, 41, 759, 760, 761]
      } else if (i % rowLen === 0){ // Far-left column cells/ not corners
        cells = [-40, -39, -1, 1, 39, 40, 41, 79]
      // Far-right column cells/ not corners.
      } else if (i % rowLen === firstRowLastCell){
        cells = [-79, -41, -40, -39, -1, 1, 39, 40]
      // Bottom row cells/ not corners.
      } else if (i > (grid.length - rowLen) && i < (grid.length - 1)){
        cells = [-761, -760, -759, -41, -40, -39, -1, 1]
      } else { // All non-boundary cells.
        cells = [-41, -40, -39, -1, 1, 39, 40, 41]
      }
    }

    let count = 0
    for (let j = 0; j < cells.length; j++){
      if (grid[i + cells[j]]) { count++ }
    }

    if (grid[i] && (count < 2 || count > 3)){
      newGrid[i] = false // Live cell dies.
    } else if (!grid[i] && count === 3){
      newGrid[i] = true // Dead cell lives.
    } else if (grid[i]){
      newGrid[i] = true // Live cell remains alive.
    } else {
      newGrid[i] = false // Dead cell remains dead.
    }
  }

  return newGrid
}

const compareArrays = (arr1, arr2) => {
  //console.log('compareArrays...')
  
  for (let i = 0; i < arr1.length - 1; i++){
    if (arr1[i] !== arr2[i]){
      return false
    }
  }
  return true
}

export {run, compareArrays}