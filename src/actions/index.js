export const CREATE = 'CREATE'
export const TEST = 'TEST'
export const MOVE = 'MOVE'


export function createElement(e) {
  return { type: CREATE, e }
}


export function moveElement(e,id) {
  return { type: MOVE,
            e,id
          }
}


export function testRedux(testVar) {

  return {type: TEST,testVar}
}
