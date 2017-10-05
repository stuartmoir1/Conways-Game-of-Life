import React from 'react'
import Grid from '../components/grid'
import Cell from '../components/cell'
import Control from '../components/control'
import Play from '../models/play'

class Game extends React.Component{

  constructor(){
    super()
    this.state = {
      squares: Array(99).fill(false),
      btnLabel: 'Start'
    }  
  }

  handleClickCell(i){
    //console.log('Game, handleClickCell; Cell selected...', i, this.state.squares[i])
    const squares = this.state.squares
    squares[i] ? squares[i] = false : squares[i] = true
    this.setState({squares: squares})
  }

  handleClickStartStopBtn(){
   //console.log('Game, handleClickStartStopBtn...')
   let label = this.state.btnLabel
   label === 'Start' ? label = 'Stop' : label = 'Start'
   this.setState({btnLabel: label})
   return <Play />
  }

  handleClickResetBtn(){
    //console.log('Game, handleClickResetBtn')
    const squares = this.state.squares
    squares.fill(false)
    this.setState({squares: squares})
  }

  render() { 
    //console.log('Game, render...')
    return (
      <div>
        <h1>Conway's Game of Life</h1>
        <h4>Click on the cells to create your pattern then click 'Start'</h4>
        <div className='game'>
          <div className='grid'>
            <Grid
              squares={this.state.squares}
              onClick={(i) => this.handleClickCell(i)}
            />
          </div>
          <div>
            <Control
              label={this.state.btnLabel}
              onClickStartStop = {() => this.handleClickStartStopBtn()}
              onClickReset = {() => this.handleClickResetBtn()}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Game