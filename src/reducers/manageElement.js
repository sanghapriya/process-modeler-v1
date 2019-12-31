import React from 'react';
import GenericElement from '../components/genericElement.component';
import {CREATE,MOVE,ON_GRAB_ELEMENT,ON_MOVE_ELEMENT,ON_DROP_ELEMENT} from '../actions';


const initialState = {latestElementId:0,elements:[],elementDetails:[],isElementGrabbed:false,grabbedElementId:0,grabbedElementType:""};

function manageElementReducer(state = initialState,action) {

          

          switch(action.type){

            

            case CREATE:
                    var latestElementId = state.latestElementId;
                    var elements = <GenericElement          key = { latestElementId+1}
                                                    id ={ latestElementId+1}
                                                    pos1={-1*action.e.clientX}
                                                    pos2= {-1*action.e.clientY}
                                                    pos3={action.e.clientX}
                                                    pos4={action.e.clientY}
                                                    top={action.e.clientY}
                                                    left={action.e.clientX}
                                                    elementType={action.elementType}
                                                    />;

                    var elementDetails = {
                                                     pos1:-1*action.e.clientX,
                                                     pos2: -1*action.e.clientY,
                                                     pos3:action.e.clientX,
                                                     pos4:action.e.clientY,
                                                     top:action.e.clientY,
                                                     left:action.e.clientX,};




                    return {
                            ...state,
                            latestElementId:state.latestElementId+1,
                            elements:[...state.elements,elements],
                            elementDetails:[...state.elementDetails,elementDetails]
                         };

             case ON_MOVE_ELEMENT:
                    action.e.persist()
                    console.log(action.e)
                    
                    if(!state.isElementGrabbed){
                      return state
                    }

                    let id = state.grabbedElementId;
                    let top = (state.elementDetails[id-1].top -(state.elementDetails[id-1].pos4 - action.e.clientY));
                    let left = (state.elementDetails[id-1].left -(state.elementDetails[id-1].pos3 -action.e.clientX));


                     return {
                            ...state,

                             latestElementId:state.latestElementId,
                             elements:state.elements
                                            .map((element,index) => (index === id-1?
                                                                    <GenericElement key = {id}
                                                                     id ={id}
                                                                     top={top}
                                                                     left={left}
                                                                     elementType={state.grabbedElementType}

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
            case ON_GRAB_ELEMENT:
              return {
                ...state,
                grabbedElementId:action.id,
                isElementGrabbed:true,
                grabbedElementType:action.elementType
              }
            


            
            case ON_DROP_ELEMENT:
              return {
                ...state,
                grabbedElementId:[],
                isElementGrabbed:false
              }







          default:
                    return state;
      }

}


export default manageElementReducer;
