import React, {Component} from 'react'

import Cell from '../components/cell'
import Control from '../components/control'
import Grid from '../components/grid'
import Selector from '../components/selector'

import {
  gridSizes,
  borderTypes,
  dynamicPatterns
} from '../models/select_options.js'
import {
  selectedGridIndex,
  selectedBorderIndex,
  selectedPatternIndex
} from '../models/select.js'

import {
  compareArrays,
  run
} from '../models/play.js'

class Game extends Component{

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
      period: 400,
      rowLen: 10,
      selectedBorder: {"name": "Closed", "state": true},
      selectDisabled: false,
      selectedGrid: '',
      selectedPattern: ''
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

    let label = null
    let period = null
    if (this.state.btnFastSlowLabel === 'Fast'){
      label = 'Slow'
      period = 200
    } else {
      label = 'Fast'
      period = 400
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
    const newGrid = run(grid, rowLen, bordersClosed)
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
        const newGrid = run(grid, rowLen, bordersClosed)
        let counter = this.state.counter

        this.setState({
          btnDisabled: true,
          cells: newGrid,
          counter: counter + 1,
          history: history.concat([{steps: grid}]),
          selectDisabled: true
        })
        if (compareArrays(grid, newGrid)){
          clearInterval(playGame)
          this.setState({
            btnDisabled: false,
            btnStartStopLabel: 'Start',
            selectDisabled: false
          })
        }
      } else { // Button displays 'Stop'
        clearInterval(playGame)
        this.setState({
          btnDisabled: false,
          selectDisabled: false
        })
      }
    },this.state.period)

    let label = this.state.btnStartStopLabel === 'Start' ? 'Stop' : 'Start'
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
    return (
      <div>
        <h1>Conway's Game of Life</h1>
        <h5>Select a grid size and boundary condition.</h5>
        <div>
          <Selector
            disabled={this.state.selectDisabled}
            onSelect={(grid) => this.handleSelectGrid(grid)}
            options={gridSizes()}
            selectedIndex={selectedGridIndex(this.state.selectedGrid.name)}>
          </Selector>
          <Selector
            disabled={this.state.selectDisabled}
            onSelect={(border) => this.handleSelectBorder(border)}
            options={borderTypes()}
            selectedIndex={selectedBorderIndex(this.state.selectedBorder.name)}>
          </Selector>
        </div>
        <h5>Select a pattern and/ or click on the cells to create your own pattern.<br></br>Then click 'Start' (to play) or '+' (to step through).</h5>
        <div>
          <Selector
            disabled={this.state.selectDisabled}
            onSelect={(pattern) => this.handleSelectPattern(pattern)}
            options={dynamicPatterns(this.state.rowLen)}
            selectedIndex={selectedPatternIndex(this.state.rowLen, this.state.selectedPattern.name)}>
          </Selector>
        </div>
        <div className='game'>
          <div className='grid'>
            <p className='counter'>Counter: {this.state.counter}</p>
            <Grid
              cells={this.state.cells}
              disabled = {this.state.btnDisabled}
              onClick={(i) => this.handleClickCell(i)}
              rowLen = {this.state.rowLen}
            />
          </div>
          <div>
            <Control
              disabled = {this.state.btnDisabled}
              labelFastSlow = {this.state.btnFastSlowLabel}
              labelStartStop = {this.state.btnStartStopLabel}
              onClickBack = {() => this.handleClickBackBtn()}
              onClickForward = {() => this.handleClickForwardBtn()}
              onClickReset = {() => this.handleClickResetBtn()}
              onClickSlowFast = {() => this.handleClickFastSlowBtn()}
              onClickStartStop = {() => this.handleClickStartStopBtn()}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Game