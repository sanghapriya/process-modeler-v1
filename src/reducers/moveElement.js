import React from 'react';
import Square from '../components/square.component';
import {MOVE} from '../actions';


const initialState = {latestElementId:0,elements:[],elementDetails:[]};

function moveElementReducer(state = initialState,action) {

          switch(action.type){

            case MOVE:
                    var latestElementId = state.latestElementId;
                    // var elements = state.elements===undefined?[]:state.elements;
                    // var elementDetails = state.elementDetails===undefined?[]:state.elementDetails;
                    console.log("moved")
                    var elements = <Square          key = { latestElementId}
                                                    id ={ latestElementId}
                                                    pos1={-1*action.e.clientX}
                                                    pos2= {-1*action.e.clientY}
                                                    pos3={action.e.clientX}
                                                    pos4={action.e.clientY}
                                                    top={action.e.clientY}
                                                    left={action.e.clientX}
                                                    />;

                    var elementDetails = {
                                                           pos1:-1*action.e.clientX,
                                                           pos2: -1*action.e.clientY,
                                                           pos3:action.e.clientX,
                                                           pos4:action.e.clientY,
                                                           top:action.e.clientY,
                                                           left:action.e.clientX,};

                    return {

                            latestElementId:state.latestElementId+1,
                            elements:[...state.elements,elements],
                            elementDetails:[...state.elementDetails,elementDetails]
                         }




          default:
                    return state;
      }

}


export default moveElementReducer;
