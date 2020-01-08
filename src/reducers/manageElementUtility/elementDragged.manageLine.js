import React from 'react';
import GenericElement from '../../components/genericElement.component';
import getLine from './getLineUtility.manageLine'
import getLineDetail from './getLineDetail.manageLine'




export default function elementDragged (state,action)  {


    if(!state.isElementGrabbed){
        return state
      }

      let id = state.grabbedElementId;
      let top = (state.elementDetails[id-1].top -(state.elementDetails[id-1].pos4 - action.e.clientY));
      let left = (state.elementDetails[id-1].left -(state.elementDetails[id-1].pos3 -action.e.clientX));


       return {
              ...state,
              

               latestElementId:state.latestElementId,
               lines:state.lines.map((line,index) => 
                                                    getLine(
                                                      state.lineDetails[index].id,
                                                      state.elementDetails,
                                                      state.lineDetails[index].startElementId,
                                                      state.lineDetails[index].endElementId,
                                                      state.lineDetails[index].x,
                                                      state.lineDetails[index].y
                                                      )),

              lineDetails:state.lineDetails.map((lineDetail,index) => 
                                                                                getLineDetail(
                                                                                  state.lineDetails[index].id,
                                                                                  state.elementDetails,
                                                                                  state.lineDetails[index].startElementId,
                                                                                  state.lineDetails[index].endElementId,
                                                                                  state.lineDetails[index].x,
                                                                                  state.lineDetails[index].y )),
               elements:state.elements
                              .map((element,index) => (index === id-1?
                                                      <GenericElement key = {id}
                                                       id ={id}
                                                       top={top}
                                                       left={left}
                                                       color={"pink"}
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
                                                                    color:"pink",
                                                                    top:top,
                                                                    left:left,
                                                                  }:elementDetail))
             };



}