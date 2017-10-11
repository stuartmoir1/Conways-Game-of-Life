import {gridSizes} from './select_options'
import {borderTypes} from './select_options'
import {dynamicPatterns} from './select_options'

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