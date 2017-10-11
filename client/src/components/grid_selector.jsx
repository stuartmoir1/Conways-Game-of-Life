import React, {Component} from 'react'

class GridSelector extends Component{

  handleChange(event){
    //console.log('GridSelector, handleChange...')
    this.props.onSelectGrid(this.props.grids[event.target.value])
  }

  render(){
    //console.log('GridSelector, render...')
    const grids = this.props.grids.map((grid, index) => {
      return(
        <option className='option' value={index} key={index}>
          {grid.name}
        </option>
      )
    })
    return (
      <select id='grids' className='select' value={this.props.selectedGridIndex} onChange={(event) => this.handleChange(event)}>
        {grids}
      </select>
    )
  }
}

export default GridSelector