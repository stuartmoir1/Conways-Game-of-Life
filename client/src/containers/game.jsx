import React from 'react'
import Board from '../components/board'
import Square from '../components/square'

class Game extends React.Component{

  constructor(){
    super()
    this.state = {
      history: [{squares: Array(99).fill(null)}],
      stepNumber: 0
    }
  }

  handleClick(i){
    //console.log('Board, handleClick...', i)
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()

    console.log('Cell selected...')
    squares[i] = true
    console.log('Array index: ', i, squares[i])

    //if (squares[i]) { return }
    //squares[i] = (this.state.oIsNext = 'X')
    //this.setState({
    //  history: history.concat([{squares: squares}]),
    //  stepNumber: history.length,
    //})
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      oIsNext: (step % 2) === 0
    })
  }

  render() {
    //console.log('Game, render...')
    const history = this.state.history
    const current = history[this.state.stepNumber]

    //const moves = history.map((step, move) =>{
    //  const desc = move ? 'Move #' + move : 'Game start'
    //  return (
    //    <li key={move}>
    //      <a href='#' onClick={() => this.jumpTo(move)}>{desc}</a>
    //    </li>
    //  )
    //})
    
    return (
      <div>
        <h1>Conway's Game of Life</h1>
        <div className='game'>
          <div className='game-board'>
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className='game-info'>
            {/*<ol>{moves}</ol>*/}
          </div>
        </div>
      </div>
    )
  }
}

export default Game