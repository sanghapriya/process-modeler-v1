import React from 'react';
import Square from '../components/square.component';
import {CREATE,MOVE} from '../actions';


const initialState = {latestElementId:0,elements:[],elementDetails:[]};

function createElementReducer(state = initialState,action) {

          switch(action.type){

            case CREATE:
                    var latestElementId = state.latestElementId;
                    // var elements = state.elements===undefined?[]:state.elements;
                    // var elementDetails = state.elementDetails===undefined?[]:state.elementDetails;
                    var elements = <Square          key = { latestElementId+1}
                                                    id ={ latestElementId+1}
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
                         };

             case MOVE:
                    let id = action.id;
                    let top = (state.elementDetails[id-1].top -(state.elementDetails[id-1].pos4 - action.e.clientY));
                    let left = (state.elementDetails[id-1].left -(state.elementDetails[id-1].pos3 -action.e.clientX));


                     return {

                             latestElementId:state.latestElementId,
                             elements:state.elements
                                            .map((element,index) => (index === id-1?
                                                                    <Square key = {id}
                                                                     id ={id}
                                                                     top={top}
                                                                     left={left}
                                                                     />
                                                                     :element)),
                             elementDetails:state.elementDetails
                                                 .map((elementDetail,index) => (index===id-1?
                                                                                {
                                                                                  pos1:state.elementDetails[id-1].pos3 -action.e.clientX,
                                                                                  pos2: state.elementDetails[id-1].pos4 -action.e.clientY,
                                                                                  pos3:action.e.clientX,
                                                                                  pos4:action.e.clientY,
                                                                                  top:top,
                                                                                  left:left,
                                                                                }:elementDetail))
                           };




          default:
                    return state;
      }

}


export default createElementReducer;
