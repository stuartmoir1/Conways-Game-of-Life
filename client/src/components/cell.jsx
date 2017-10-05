import React from 'react'

function Cell(props){
  //console.log('Cell...')
  return (
    <button id={props} className='cell' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Cell