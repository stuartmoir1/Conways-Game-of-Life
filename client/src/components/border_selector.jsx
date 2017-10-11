import React, {Component} from 'react'

class BorderSelector extends Component{

  handleChange(event){
    //console.log('GridSelector, handleChange...')
    this.props.onSelectBorder(this.props.borders[event.target.value])
  }

  render(){
    //console.log('GridSelector, render...')
    const borders = this.props.borders.map((border, index) => {
      return(
        <option className='option' value={index} key={index}>
          {border.name}
        </option>
      )
    })
    return (
      <select id='borders' className='select' value={this.props.selectedGridIndex} onChange={(event) => this.handleChange(event)}>
        {borders}
      </select>
    )
  }
}

export default BorderSelector