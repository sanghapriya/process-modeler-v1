export const CREATE = 'CREATE'
export const TEST = 'TEST'
export const MOVE = 'MOVE'
export const ON_GRAB_ELEMENT = 'ON_GRAB_ELEMENT'
export const ON_MOVE_ELEMENT = 'ON_MOVE_ELEMENT'
export const ON_DROP_ELEMENT = 'ON_DROP_ELEMENT'
export const TOGGLE_LINE_SELECTED = 'TOGGLE_LINE_SELECTED'
export const LINE_DRAG_START = 'LINE_DRAG_START'
export const LINE_DRAG_END = 'LINE_DRAG_END'
export const LINE_BEING_DRAGGED = 'LINE_BEING_DRAGGED'


export function createElement(e,elementType) {
  return { type: CREATE, e ,elementType}
}


export function moveElement(e,id,elementType) {
  return { type: MOVE,
            e,id,elementType
          }
}


export function testRedux(testVar) {

  return {type: TEST,testVar}
}


export function toogleLineSelected() {

  return {type: TOGGLE_LINE_SELECTED}
}


export function lineDragStart(e,lineType) {

  return {type: LINE_DRAG_START,lineType}
}


export function lineDragEnd(e,lineType) {

  return {type: LINE_DRAG_END,lineType}
}


export function lineBeingDragged(e,lineType) {

  return {type: LINE_BEING_DRAGGED,lineType}
}


export function onGrabElement(e,id,elementType) {

  return {type: ON_GRAB_ELEMENT,id,elementType}
}

export function onMoveElement(e) {

  return {type: ON_MOVE_ELEMENT,e}
}

export function onDropElement(e) {

  return {type: ON_DROP_ELEMENT}
}