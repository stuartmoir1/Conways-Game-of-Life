import {borderTypes} from './select_options'
import {dynamicPatterns} from './select_options'
import {gridSizes} from './select_options'

const selectedBorderIndex = (name) => {
  return borderTypes().findIndex((element) => {
    return element.name === name
  })
}

const selectedGridIndex = (name) => {
  return gridSizes().findIndex((element) => {
    return element.name === name    
  })
}

const selectedPatternIndex = (rowLen, name) => {
  return dynamicPatterns(rowLen).findIndex((element) => {
    return element.name === name
  })
}

export {selectedBorderIndex, selectedGridIndex, selectedPatternIndex}