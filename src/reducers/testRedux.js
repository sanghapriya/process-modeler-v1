import {TEST} from '../actions';


const initialState = 0;

function testReduxReducer(state = initialState,action) {

  switch(action.type){

    case TEST:

            return state+1;

    default:
            return state;

          }}


export default testReduxReducer;
