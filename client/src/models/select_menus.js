import {gridSizes} from './grid_sizes'
import {borderTypes} from './border_types'
import {dynamicPatterns} from './dynamic_patterns'

const selectedGridIndex = (name) => {
  return gridSizes().findIndex((element) => {
    return element.name === name    
  })
}

const selectedBorderIndex = (name) => {
  return borderTypes().findIndex((element) => {
    return element.name === name
  })
}

const selectedPatternIndex = (rowLen, name) => {
  return dynamicPatterns(rowLen).findIndex((element) => {
    return element.name === name
  })
}

export {selectedGridIndex, selectedBorderIndex, selectedPatternIndex}