import React, {Component} from 'react'

class PatternSelector extends Component{

  handleChange(event){
    //console.log('PatternSelector, handleChange...')
    this.props.onSelectPattern(this.props.patterns[event.target.value])
  }

  render(){
    //console.log('PatternSelector, render...')
    const patterns = this.props.patterns.map((pattern, index) => {
      return(
        <option className='option' value={index} key={index}>
          {pattern.name}
        </option>
      )
    })
    return (
      <select id='patterns' className='select' value={this.props.selectedPatternIndex} onChange={(event) => this.handleChange(event)}>
        {patterns}
      </select>
    )
  }
}

export default PatternSelector