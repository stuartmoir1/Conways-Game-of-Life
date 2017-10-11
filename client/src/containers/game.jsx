import React from 'react'

import BorderSelector from '../components/border_selector'
import Cell from '../components/cell'
import Control from '../components/control'
import Grid from '../components/grid'
import GridSelector from '../components/grid_selector'
import PatternSelector from '../components/pattern_selector'

import {borderTypes} from '../models/borderTypes.js'
import {compareArrays} from '../models/compare_arrays.js'
import {dynamicPatterns} from '../models/dynamic_patterns.js'
import {gridSizes} from '../models/grid_sizes.js'
import {play} from '../models/play.js'

class Game extends React.Component{

  constructor(){
    super()
    this.state = {
      bordersClosed: true,
      btnDisabled: false,
      btnFastSlowLabel: 'Fast',
      btnStartStopLabel: 'Start',
      cells: Array(400).fill(false),
      counter: 0,
      history: [{steps: Array(100)}].slice(0, 0),
      period: 500,
      rowLen: 10,
      selectedBorder: {"name": "Closed", "state": true},
      selectedGrid: '',
      selectedPattern: '',
    }  
  }

  handleClickBackBtn(){
    //console.log('Game, handleClickBackBtn...')
    const history = this.state.history
    const counter = this.state.counter

    if (counter > 0){
      const oldGrid = history[history.length - 1].steps
      this.setState({
        cells: oldGrid,
        counter: counter - 1,
        history: history.slice(0, history.length - 1),
      })
    }
  }

  handleClickCell(i){
    //console.log('Game, handleClickCell; Cell selected...', i, this.state.cells[i])
    const cells = this.state.cells
    cells[i] ? cells[i] = false : cells[i] = true
    this.setState({cells: cells})
  }

  handleClickFastSlowBtn(){
    //console.log('Game, handleClickFastSlowBtn...')

    let label = undefined
    let period = undefined
    if (this.state.btnFastSlowLabel === 'Fast'){
      label = 'Slow'
      period = 250
    } else {
      label = 'Fast'
      period = 500
    }

    this.setState({
      btnFastSlowLabel: label,
      period: period
    })
  }

  handleClickForwardBtn(){
    //console.log('Game, handleClickForwardBtn...')
    const bordersClosed = this.state.bordersClosed
    const history = this.state.history
    const grid = this.state.cells
    const rowLen = this.state.rowLen
    const newGrid = play(grid, rowLen, bordersClosed)
    let counter = this.state.counter

    this.setState({
      cells: newGrid,
      counter: counter + 1,
      history: history.concat([{steps: grid}]),
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

  handleClickStartStopBtn(){
    //console.log('Game, handleClickStartStopBtn...')

    let playGame = setInterval(() => {
      const label = this.state.btnStartStopLabel
      // console.log(label)
      
      if (label === 'Stop'){ // Button displays 'Start.'
        const bordersClosed = this.state.bordersClosed
        const history = this.state.history
        const grid = this.state.cells
        const rowLen = this.state.rowLen
        const newGrid = play(grid, rowLen, bordersClosed)
        let counter = this.state.counter

        this.setState({
          btnDisabled: true,
          cells: newGrid,
          counter: counter + 1,
          history: history.concat([{steps: grid}])
        })
        if (compareArrays(grid, newGrid)){
          clearInterval(playGame)
          this.setState({
            btnStartStopLabel: 'Start',
            btnDisabled: false
          })
        }
      } else { // Button displays 'Stop'
        clearInterval(playGame)
        this.setState({
          btnDisabled: false
        })
      }
    },this.state.period)

    let label = this.state.btnStartStopLabel
    label === 'Start' ? label = 'Stop' : label = 'Start'
    this.setState({btnStartStopLabel: label})
  }

  handleSelectBorder(border){
    //console.log('Game, handleSelectBorder...')
    const state = border.state
    this.setState({
      bordersClosed: state,
      selectedBorder: border
    })
  }

  handleSelectGrid(grid){
    //console.log('Game, handleSelectGrid...')
    const rowLen = grid.rowLen
    const cells = this.state.cells
    cells.fill(false)

    this.setState({
      cells: cells,
      counter: 0,
      rowLen: rowLen,
      selectedGrid: grid,
      selectedPattern: ''
    })
  }

  handleSelectPattern(pattern){
    //console.log('Game, handleSelectPattern...')
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

  render(){

    console.log(this.state.bordersClosed, this.state.selectedBorder)

    let grids = gridSizes()
    let selectedGridIndex = grids.findIndex((element) => {
        return element.name === this.state.selectedGrid.name
      })
    let borders = borderTypes()
    let selectedBorderIndex = borders.findIndex((element) => {
        return element.name === this.state.selectedBorder.name
      })
    let patterns = dynamicPatterns(this.state.rowLen)
    let selectedPatternIndex = patterns.findIndex((element) => {
        return element.name === this.state.selectedPattern.name
      })

    return (
      <div>
        <h1>Conway's Game of Life</h1>
        <h5>Select a grid size and boundary condition.</h5>
        <div>
          <GridSelector grids={grids} selectedGridIndex={selectedGridIndex} onSelectGrid={(grid) => this.handleSelectGrid(grid)}>
          </GridSelector>
          <BorderSelector borders={borders} selectedBorderIndex={selectedBorderIndex} onSelectBorder={(border) => this.handleSelectBorder(border)}>>
          </BorderSelector>
        </div>
        <h5>Select a pattern and/ or click on the cells to create your own pattern.<br></br>Then click 'Start' (to play) or '+' (to step through).</h5>
        <div>
          <PatternSelector patterns={patterns} selectedPatternIndex={selectedPatternIndex} onSelectPattern={(pattern) => this.handleSelectPattern(pattern)}>
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
              labelStartStop = {this.state.btnStartStopLabel}
              disabled = {this.state.btnDisabled}
              onClickStartStop = {() => this.handleClickStartStopBtn()}
              onClickBack = {() => this.handleClickBackBtn()}
              onClickForward = {() => this.handleClickForwardBtn()}
              onClickReset = {() => this.handleClickResetBtn()}
              onClickSlowFast = {() => this.handleClickFastSlowBtn()}
              labelFastSlow = {this.state.btnFastSlowLabel}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Game