import {gridSizes} from './select_menu_options'
import {borderTypes} from './select_menu_options'
import {dynamicPatterns} from './select_menu_options'

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