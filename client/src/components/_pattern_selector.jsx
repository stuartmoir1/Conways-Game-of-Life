import React from 'react'

class PatternSelector extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      selectedPattern: undefined
    }
  }

  handleChange(event){
    //console.log('PatternSelector, handleChange...')
    this.setState({selectedPattern: event.target.value})
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
      <select id='patterns' className='select' value={this.state.selectedPattern} onChange={(event) => this.handleChange(event)}>
        {patterns}
      </select>
    )
  }
}

export default PatternSelector