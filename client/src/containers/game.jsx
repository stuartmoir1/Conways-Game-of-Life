import React from 'react'
import Grid from '../components/grid'
import Cell from '../components/cell'
import Control from '../components/control'

class Game extends React.Component{

  constructor(){
    super()
    this.state = {
      squares: Array(99).fill(false)
    }  
  }

  handleClickCell(i){
    //console.log('Game, handleClickCell; Cell selected...', i, this.state.squares[i])
    const squares = this.state.squares
    squares[i] ? squares[i] = false : squares[i] = true
    this.setState({squares: squares})
  }

  handleClickStartStopBtn(){
   console.log('Game, handleClickStartStopBtn')
  }

  handleClickResetBtn(){
    console.log('Game, handleClickResetBtn')
  }

  render() { 
    return (
      <div>
        <h1>Conway's Game of Life</h1>
        <div className='game'>
          <div className='grid'>
            <Grid
              squares={this.state.squares}
              onClick={(i) => this.handleClickCell(i)}
            />
          </div>
          <div>
            <Control
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