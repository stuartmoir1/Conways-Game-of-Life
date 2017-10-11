import React, {Component} from 'react'

class Selector extends Component{

  handleChange(event){
    //console.log('Selector, handleChange...')
    this.props.onSelect(this.props.options[event.target.value])
  }

  render(){
    //console.log('Selector, render...')
    const options = this.props.options.map((option, index) => {
      return(
        <option className='option' value={index} key={index}>
          {option.name}
        </option>
      )
    })
    return (
      <select className='select' value={this.props.selectedIndex} onChange={(event) => this.handleChange(event)}>
        {options}
      </select>
    )
  }
}

export default Selector