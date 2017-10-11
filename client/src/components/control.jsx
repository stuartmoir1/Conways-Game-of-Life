import React, {Component} from 'react'

class Control extends Component{

  render(){
    //console.log('Control, render...')
    return (
      <div> 
        <button id='btn-start-stop' className='btn' onClick={this.props.onClickStartStop}>
          {this.props.labelStartStop}
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
        <button id='btn-fast-slow' className='btn' disabled={this.props.disabled} onClick={this.props.onClickSlowFast}>
          {this.props.labelFastSlow}
        </button>
      </div>
    )
  }
}

export default Control