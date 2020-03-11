export const CREATE = 'CREATE'
export const TEST = 'TEST'
export const MOVE = 'MOVE'
export const ON_GRAB_ELEMENT = 'ON_GRAB_ELEMENT'
export const ON_MOVE_ELEMENT = 'ON_MOVE_ELEMENT'
export const ON_DROP_ELEMENT = 'ON_DROP_ELEMENT'
export const LINE_SELECTED = 'LINE_SELECTED'
export const DRAG_SELECTED = 'DRAG_SELECTED'
export const SELECT_ELEMENT = 'SELECT_ELEMENT'
export const DELETE_ELEMENTS = 'DELETE_ELEMENTS'
export const LINE_DRAG_START = 'LINE_DRAG_START'
export const LINE_DRAG_END = 'LINE_DRAG_END'
export const LINE_BEING_DRAGGED = 'LINE_BEING_DRAGGED'
export const START_LINE_DRAW = 'START_LINE_DRAW';
export const END_LINE_DRAW = 'END_LINE_DRAW';
export const OPEN_ELEMENT_PROPERTY = 'OPEN_ELEMENT_PROPERTY';

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


export function lineSelected() {

  return {type: LINE_SELECTED}
}

export function dragSelected() {

  return {type: DRAG_SELECTED}
}

export function selectElement() {

  return {type: SELECT_ELEMENT}
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

  return {type: ON_GRAB_ELEMENT,e,id,elementType}
}

export function onMoveElement(e) {

  return {type: ON_MOVE_ELEMENT,e}
}

export function onDropElement(id,elementType,e) {

  return {type: ON_DROP_ELEMENT,id,elementType,e}
}


export function onDelete() {

  return {type: DELETE_ELEMENTS}
}


export function onStartLineDraw(e,id,elementType,pointerPosition) {

  return {type: START_LINE_DRAW,e,id,elementType,pointerPosition}
}


export function onEndLineDraw(e,id,elementType,pointerPosition) {

  return {type: END_LINE_DRAW,e,id,elementType,pointerPosition}
}



export function getPropertyBox(id,elementType) {

  return {type: OPEN_ELEMENT_PROPERTY,id,elementType}
}