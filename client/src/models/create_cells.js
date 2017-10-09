export const createCells = (rowLen) => {

  let cells = []
  for (let i = 0; i < rowLen; i++){
    for (let j = 0; j < rowLen; j++){
      let index = (i * rowLen) + j 
      // cells.push('this.renderCell(' + index + ')')
      cells.push(indez);
    }
  }
  //console.log(cells)
  return cells
}

// <div className='grid-row'>{cells.splice(0,9)}</div>

// createCells().forEach( (index) => {
//   this.renderCell(index);
// })