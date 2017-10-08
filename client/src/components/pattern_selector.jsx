import React from 'react'

class PatternSelector extends React.Component{

  render(){
    console.log('PatternSelector, render...')
    
    const patterns = this.props.patterns.map((pattern, index) => {
      return(
        <option className='option' value={index} key={index}>
          {pattern.name}
        </option>
      )
    })
    return (
      <select className='select' value='' onChange=''>
        {patterns}
      </select>
    )
  }
}

export default PatternSelector