import React from 'react'
import Grid from '../components/grid'
import Cell from '../components/cell'

class Game extends React.Component{

  constructor(){
    super()
    this.state = {
      squares: Array(99).fill(false)
    }  
  }

  handleClick(i){
    console.log('Game, handleClick; Cell selected...', i, this.state.squares[i])
    const squares = this.state.squares
    squares[i] ? squares[i] = false : squares[i] = true
    this.setState({squares: squares})
  }

  render() { 
    return (
      <div>
        <h1>Conway's Game of Life</h1>
        <div className='game'>
          <div className='game-grid'>
            <Grid
              squares={this.state.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Game