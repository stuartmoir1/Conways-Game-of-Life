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
      cells: Array(400).fill(false),
      btnLabel: 'Start',
      counter: 0,
      period: 500,
      selectedPattern: '',
      btnDisabled: false,
      rowLen: 20
    }  
  }

  handleClickCell(i){
    //console.log('Game, handleClickCell; Cell selected...', i, this.state.cells[i])
    const cells = this.state.cells
    cells[i] ? cells[i] = false : cells[i] = true
    this.setState({cells: cells})
  }

  handleClickStartStopBtn(){
    //console.log('Game, handleClickStartStopBtn...')

    let playGame = setInterval(() => {
      const label = this.state.btnLabel
      // console.log(label)
      
      if (label === 'Stop'){ // Button displays 'Start.'
        const history = this.state.history
        const grid = this.state.cells
        const rowLen = this.state.rowLen
        const newGrid = play(grid, rowLen)
        let counter = this.state.counter

        this.setState({
          history: history.concat([{steps: grid}]),
          cells: newGrid,
          counter: counter + 1,
          btnDisabled: true
        })
        if (compareArrays(grid, newGrid)) {
          clearInterval(playGame)
          this.setState({btnLabel: 'Start'})
        }
      } else { // Button displays 'Stop'
        clearInterval(playGame)
        this.setState({
          btnDisabled: false
        })
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
        cells: oldGrid,
        counter: counter - 1
      })
    }
  }

  handleClickForwardBtn(){
    //console.log('Game, handleClickForwardBtn...')
    const history = this.state.history
    const grid = this.state.cells
    const rowLen = this.state.rowLen
    const newGrid = play(grid, rowLen)
    let counter = this.state.counter

    this.setState({
      history: history.concat([{steps: grid}]),
      cells: newGrid,
      counter: counter + 1
    })
  }

  handleClickResetBtn(){
    //console.log('Game, handleClickResetBtn...')
    const cells = this.state.cells
    cells.fill(false)

    this.setState({
      cells: cells,
      counter: 0,
      selectedPattern: ''
    })
  }

  handlePatternSelect(pattern){
    console.log('Game, handlePatternSelect...')
    const selectedCells = pattern.cells  
    let j = 0
    let cells = []

    for (let i = 0; i < (this.state.rowLen * this.state.rowLen); i++){
      if (i === selectedCells[j]){
        cells[i] = true
        j++
      } else {
        cells[i] = false
      }
    }
    
    this.setState({
      cells: cells,
      selectedPattern: pattern
    })
  }

  // handlePatternSelect(pattern){
  //   // console.log('Game, handlePatternSelect...')
  //   const name = pattern.name
  //   if (this.state.rowLen === 10){
  //     const cells = pattern.cells.concat(Array(50).fill(false))
  //   }
  //   else if (this.state.rowLen === 20){
  //     const cells = pattern.cells.concat(Array(200).fill(false))
  //   }
  //   else {
  //     null
  //   }
  //   this.setState({
  //     cells: cells,
  //     selectedPattern: pattern
  //   })
  // }

  render(){ 
    let patterns = dynamicPatterns(this.state.rowLen)
    let selectedPatternIndex = patterns.findIndex((element) => {
        return element.name === this.state.selectedPattern.name
      })
    return (
      <div>
        <h1>Conway's Game of Life</h1>
        <h5>Select a pattern and/ or click on the cells to create your own pattern. Then click 'Start' or '+'.</h5>
        <div>
          <PatternSelector patterns={patterns} selectedPattern={selectedPatternIndex} onSelectPattern={(pattern) => this.handlePatternSelect(pattern)}>
          </PatternSelector>
        </div>
        <div className='game'>
          <div className='grid'>
            <p className='counter'>Counter: {this.state.counter}</p>
            <Grid
              rowLen = {this.state.rowLen}
              disabled = {this.state.btnDisabled}
              cells={this.state.cells}
              onClick={(i) => this.handleClickCell(i)}
            />
          </div>
          <div>
            <Control
              label = {this.state.btnLabel}
              disabled = {this.state.btnDisabled}
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