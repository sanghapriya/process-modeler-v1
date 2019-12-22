export const CREATE = 'CREATE'
export const TEST = 'TEST'
export const MOVE = 'MOVE'


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
