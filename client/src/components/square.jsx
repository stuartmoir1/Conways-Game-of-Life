import React from 'react'

function Square(props){
  //console.log('Square...')
  return (
    <button id={props} className='square' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Square