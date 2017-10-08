import React from 'react'
import Grid from '../components/grid'
import Cell from '../components/cell'
import Control from '../components/control'
import PatternSelector from '../components/pattern_selector'

import {play} from '../models/play.js'
import {compareArrays} from '../models/compare_arrays.js'
import {dynamicPatterns} from '../models/dynamic_patterns.js'

class Game extends React.Component{

  constructor(){
    super()
    this.state = {
      history: [{steps: Array(100)}].slice(0, 0), // Array of empty arrays.
      squares: Array(100).fill(false),
      btnLabel: 'Start',
      counter: 0,
      period: 500
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

    let playGame = setInterval(() => {
      const label = this.state.btnLabel
      // console.log(label)
      
      if (label === 'Stop'){ // Button displays 'Start.'
        const history = this.state.history
        const grid = this.state.squares
        const newGrid = play(grid)
        let counter = this.state.counter
        this.setState({
          history: history.concat([{steps: grid}]),
          squares: newGrid,
          counter: counter + 1
        })
        if (compareArrays(grid, newGrid)) {
          clearInterval(playGame)
          this.setState({btnLabel: 'Start'})
        }
      } else { // Button displays 'Stop'
        clearInterval(playGame)
      }
    },this.state.period)

    let label = this.state.btnLabel
    label === 'Start' ? label = 'Stop' : label = 'Start'
    this.setState({btnLabel: label})
  }

  handleClickBackBtn(){
    //console.log('Game, handleClickBackBtn...')
    const history = this.state.history
    const counter = this.state.counter

    if (counter > 0){
      const oldGrid = history[history.length - 1].steps
      this.setState({
        history: history.slice(0, history.length - 1),
        squares: oldGrid,
        counter: counter - 1
      })
    }
  }

  handleClickForwardBtn(){
    //console.log('Game, handleClickForwardBtn...')
    const history = this.state.history
    const grid = this.state.squares
    const newGrid = play(grid)
    let counter = this.state.counter

    this.setState({
      history: history.concat([{steps: grid}]),
      squares: newGrid,
      counter: counter + 1
    })
  }

  handleClickResetBtn(){
    //console.log('Game, handleClickResetBtn...')
    const squares = this.state.squares
    squares.fill(false)
    this.setState({
      squares: squares,
      counter: 0
    })
  }

  handlePatternSelect(){
    console.log('Game, handlePatternSelect...')
  }

  render(){ 
    //console.log('Game, render...')
    let patterns = dynamicPatterns()
    return (
      <div>
        <h1>Conway's Game of Life</h1>
        <h5>Select a pattern and/ or click on the cells to create your own pattern. Then click 'Start' or '+'.</h5>
        <div>
          <PatternSelector patterns={patterns} onSelectPattern= {() => this.handlePatterSelect()}>
          </PatternSelector>
        </div>
        <div className='game'>
          <div className='grid'>
            <p className='counter'>Counter: {this.state.counter}</p>
            <Grid
              squares={this.state.squares}
              onClick={(i) => this.handleClickCell(i)}
            />
          </div>
          <div>
            <Control
              label={this.state.btnLabel}
              onClickStartStop = {() => this.handleClickStartStopBtn()}
              onClickBack = {() => this.handleClickBackBtn()}
              onClickForward = {() => this.handleClickForwardBtn()}
              onClickReset = {() => this.handleClickResetBtn()}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Game