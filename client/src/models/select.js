import {borderTypes} from './select_options'
import {dynamicPatterns} from './select_options'
import {gridSizes} from './select_options'

const selectedBorderIndex = (name) => {
  //console.log('selectedBorderIndex...')
  return borderTypes().findIndex((element) => {
    return element.name === name
  })
}

const selectedGridIndex = (name) => {
  //console.log('selectedGridIndex...')
  return gridSizes().findIndex((element) => {
    return element.name === name    
  })
}

const selectedPatternIndex = (rowLen, name) => {
  //console.log('selectedPatternIndex...')
  return dynamicPatterns(rowLen).findIndex((element) => {
    return element.name === name
  })
}

export {selectedBorderIndex, selectedGridIndex, selectedPatternIndex}