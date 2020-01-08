import React from 'react';
import {START_SELECT_BOX,DRAG_SELECT_BOX,END_SELECT_BOX} from '../../constants'
import SelectBox from '../../components/selectBox.component'
import getLine from './getLineUtility.manageLine';
import GenericElement from '../../components/genericElement.component';



const checkIfLineFallsInSelectBox = (state,action,index) => {

    let startElementIndex = state.lineDetails[index].startElementId-1;
    let endElementIndex = state.lineDetails[index].endElementId


    return (state.elementDetails[startElementIndex].left >= state.selectBoxDetail.x1 &
            state.elementDetails[startElementIndex].top >= state.selectBoxDetail.y1&
            action.e.clientX >= (endElementIndex===null?
                                    state.lineDetails[index].x:
                                    state.elementDetails[endElementIndex-1].left) &
            action.e.clientY >= (endElementIndex===null?
                                    state.lineDetails[index].y:
                                    state.elementDetails[endElementIndex-1].top))
};




const checkIfElementFallsInSelectBox = (state,index) => {



    return (state.elementDetails[index].left >= state.selectBoxDetail.x1 &
            state.elementDetails[index].left <= state.selectBoxDetail.x2 &
            state.elementDetails[index].top >= state.selectBoxDetail.y1 &
            state.elementDetails[index].top <= state.selectBoxDetail.y2)
};

const getColoredLine =(state,action,index,color) => {
                            return getLine(
                                        state.lineDetails[index].id,
                                        state.elementDetails,
                                        state.lineDetails[index].startElementId,
                                        state.lineDetails[index].endElementId,
                                        state.lineDetails[index].x,
                                        state.lineDetails[index].y,
                                        color
                                        )};




export default function selectElement(state,action,selectPhase){

    switch(selectPhase){

        case START_SELECT_BOX:
            
            return {
                ...state,
                isDraw:true,
                selectBox:<SelectBox          
                x1 = {action.e.clientX}
                y1 = {action.e.clientY}
                x2 = {action.e.clientX}
                y2 = {action.e.clientY} />,
                selectBoxDetail:
            {
                x1 : action.e.clientX,
                y1 : action.e.clientY,
                x2 : action.e.clientX,
                y2 : action.e.clientY

            }
            };


            case DRAG_SELECT_BOX:


                return {
                    ...state,

                    selectBox:<SelectBox          
                                    x1 = {state.selectBoxDetail.x1}
                                    y1 = {state.selectBoxDetail.y1}
                                    x2 = {action.e.clientX}
                                    y2 = {action.e.clientY} />,
                    selectBoxDetail:
                                    {
                                        x1 : state.selectBoxDetail.x1,
                                        y1 : state.selectBoxDetail.y1,
                                        x2 : action.e.clientX,
                                        y2 : action.e.clientY
                        
                                    }
                };


            case END_SELECT_BOX:
                console.log(action)
                
                return {
                            ...state,
                            selecteLineIds:state.lineDetails.filter((lineDetail,index) => 
                                                            checkIfLineFallsInSelectBox(state,action,index))
                                                            .map((lineDetail) =>(lineDetail.id)),

                            lines:state.lines.map((line,index) => checkIfLineFallsInSelectBox(state,action,index)?
                                                    getColoredLine(state,action,index,"green"):
                                                    getColoredLine(state,action,index,"blue")                                                      
                                                ),

                            elements:state.elements.map((element,index) => checkIfElementFallsInSelectBox(state,index)?
                                                                        <GenericElement key = {state.elementDetails[index].id}
                                                                         id ={state.elementDetails[index].id}
                                                                         top={state.elementDetails[index].top}
                                                                         left={state.elementDetails[index].left}
                                                                         color={"green"}
                                                                         elementType={state.elementDetails[index].grabbedElementType}/>
                                                                         : <GenericElement key = {state.elementDetails[index].id}
                                                                         id ={state.elementDetails[index].id}
                                                                         top={state.elementDetails[index].top}
                                                                         left={state.elementDetails[index].left}
                                                                         color={state.elementDetails[index].color}
                                                                         elementType={state.elementDetails[index].grabbedElementType}/>),
                                 elementDetails:state.elementDetails
                                                     .map((elementDetail,index) => checkIfElementFallsInSelectBox(state,index)?
                                                                                    {
                                                                                      pos1:elementDetail.pos1,
                                                                                      pos2: elementDetail.pos2,
                                                                                      pos3:elementDetail.pos3,
                                                                                      pos4:elementDetail.pos4,
                                                                                      color:"green",
                                                                                      top:elementDetail.top,
                                                                                      left:elementDetail.left,
                                                                                    }:{
                                                                                        pos1:elementDetail.pos1,
                                                                                        pos2: elementDetail.pos2,
                                                                                        pos3:elementDetail.pos3,
                                                                                        pos4:elementDetail.pos4,
                                                                                        color:"red",
                                                                                        top:elementDetail.top,
                                                                                        left:elementDetail.left,
                                                                                      }),
                            selectedElementIds:state.elementDetails.filter((elementDetail,index) => 
                                                        checkIfElementFallsInSelectBox(state,index))
                                                        .map((elementDetail) =>(elementDetail.id)),
                            selectBox:[],
                            selectBoxDetail:[],
                            isDraw:false
                        };

            default:
                return state;


    }

}