import React from 'react'

function Cell(props){
  //console.log('Cell...')
  return (
    <button className='cell' onClick={props.onClick} style={props.bgColor} disabled={props.disabled}>
    </button>
  )
}

export default Cell