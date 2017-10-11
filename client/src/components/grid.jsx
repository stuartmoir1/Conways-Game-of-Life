import React, {Component} from 'react'
import Cell from './cell'

class Grid extends Component{

  renderCell(i){
    //console.log('Grid, renderCell...')
    let bgColor = undefined
    this.props.cells[i] ? bgColor = '#000' : bgColor = '#fff'
    return <Cell
      disabled = {this.props.disabled}
      bgColor={{background:bgColor}}
      onClick={() => this.props.onClick(i)}
    />
  }

  render(){
    //console.log('Grid, render...')
    let rows = []

    if (this.props.rowLen === 10){
      for (let i = 0; i < 100; i + this.props.rowLen){
        rows.push(
          <div className='grid-row'>
            {this.renderCell(i)}
            {this.renderCell(i + 1)}
            {this.renderCell(i + 2)}
            {this.renderCell(i + 3)}
            {this.renderCell(i + 4)}
            {this.renderCell(i + 5)}
            {this.renderCell(i + 6)}
            {this.renderCell(i + 7)}
            {this.renderCell(i + 8)}
            {this.renderCell(i + 9)}
          </div>
        )
        i += (this.props.rowLen)
      }
      return (
        <div>
          {rows}
        </div>
      )
    }

    if (this.props.rowLen === 20){
      for (let i = 0; i < 400; i + this.props.rowLen){
        rows.push(
          <div className='grid-row'>
            {this.renderCell(i)}
            {this.renderCell(i + 1)}
            {this.renderCell(i + 2)}
            {this.renderCell(i + 3)}
            {this.renderCell(i + 4)}
            {this.renderCell(i + 5)}
            {this.renderCell(i + 6)}
            {this.renderCell(i + 7)}
            {this.renderCell(i + 8)}
            {this.renderCell(i + 9)}
            {this.renderCell(i + 10)}
            {this.renderCell(i + 11)}
            {this.renderCell(i + 12)}
            {this.renderCell(i + 13)}
            {this.renderCell(i + 14)}
            {this.renderCell(i + 15)}
            {this.renderCell(i + 16)}
            {this.renderCell(i + 17)}
            {this.renderCell(i + 18)}
            {this.renderCell(i + 19)}
          </div>
        )
        i += (this.props.rowLen)
      }
      return (
        <div>
          {rows}
        </div>
      )
    }

    if (this.props.rowLen === 40){
      for (let i = 0; i < 800; i + this.props.rowLen){
        rows.push(
          <div className='grid-row'>
            {this.renderCell(i)}
            {this.renderCell(i + 1)}
            {this.renderCell(i + 2)}
            {this.renderCell(i + 3)}
            {this.renderCell(i + 4)}
            {this.renderCell(i + 5)}
            {this.renderCell(i + 6)}
            {this.renderCell(i + 7)}
            {this.renderCell(i + 8)}
            {this.renderCell(i + 9)}
            {this.renderCell(i + 10)}
            {this.renderCell(i + 11)}
            {this.renderCell(i + 12)}
            {this.renderCell(i + 13)}
            {this.renderCell(i + 14)}
            {this.renderCell(i + 15)}
            {this.renderCell(i + 16)}
            {this.renderCell(i + 17)}
            {this.renderCell(i + 18)}
            {this.renderCell(i + 19)}
            {this.renderCell(i + 20)}
            {this.renderCell(i + 21)}
            {this.renderCell(i + 22)}
            {this.renderCell(i + 23)}
            {this.renderCell(i + 24)}
            {this.renderCell(i + 25)}
            {this.renderCell(i + 26)}
            {this.renderCell(i + 27)}
            {this.renderCell(i + 28)}
            {this.renderCell(i + 29)}
            {this.renderCell(i + 30)}
            {this.renderCell(i + 31)}
            {this.renderCell(i + 32)}
            {this.renderCell(i + 33)}
            {this.renderCell(i + 34)}
            {this.renderCell(i + 35)}
            {this.renderCell(i + 36)}
            {this.renderCell(i + 37)}
            {this.renderCell(i + 38)}
            {this.renderCell(i + 39)}
          </div>
        )
        i += (this.props.rowLen)
      }
      return (
        <div>
          {rows}
        </div>
      )
    }
  }
}

export default Grid