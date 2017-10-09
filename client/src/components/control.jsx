import React from 'react'

class Control extends React.Component{

  render(){
    //console.log('Control, render...')
    return (
      <div> 
        <button id='btn-start-stop' className='btn' onClick={this.props.onClickStartStop}>
          {this.props.label}
        </button>
        <button id='btn-back' className='btn-small' disabled={this.props.disabled} onClick={this.props.onClickBack}>
          -
        </button>
        <button id='btn-forward' className='btn-small' disabled={this.props.disabled} onClick={this.props.onClickForward}>
          +
        </button>
        <button id='btn-reset' className='btn' disabled={this.props.disabled} onClick={this.props.onClickReset}>
          Reset
        </button>
      </div>
    )
  }
}

export default Control