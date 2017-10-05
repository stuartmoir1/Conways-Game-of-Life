import React from 'react'

class Control extends React.Component{

  render(){
    return (
      <div> 
        <button id='btn-start-stop' className='btn' onClick={this.props.onClickStartStop}>
          Start
        </button>
        <button id='btn-reset' className='btn' onClick={this.props.onClickReset}>
          Reset
        </button>
      </div>
    )
  }
}

export default Control