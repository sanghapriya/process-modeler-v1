import React from 'react';
import {START_SELECT_BOX,DRAG_SELECT_BOX,END_SELECT_BOX} from '../../constants'
import SelectBox from '../../components/selectBox.component'
import getLine from './getLineUtility.manageLine';
import GenericElement from '../../components/genericElement.component';
import getLineDetail from './getLineDetail.manageLine';



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
                                        color,
                                        state.lineDetails[index].startElementType,
                                        state.lineDetails[index].startPointerPosition,
                                        state.lineDetails[index].endElementType,
                                        state.lineDetails[index].endPointerPosition
                                        )};

const getColoredLineDetail =(lineDetail,elementDetails,color) => {
    return getLineDetail(
                lineDetail.id,
                elementDetails,
                lineDetail.startElementId,
                lineDetail.endElementId,
                lineDetail.x,
                lineDetail.y,
                color,
                lineDetail.startElementType,
                lineDetail.startPointerPosition,
                lineDetail.endElementType,
                lineDetail.endPointerPosition
)};




const getColoredElement = (state,index,color) => {

                            return <GenericElement 
                            key = {state.elementDetails[index].id}
                            id ={state.elementDetails[index].id}
                            top={state.elementDetails[index].top}
                            left={state.elementDetails[index].left}
                            color={color}
                            elementType={state.elementDetails[index].elementType}/>
    
                            };

const getColoredElementDetail = (elementDetail,color) => {

                                return {
                                    id:elementDetail.id,
                                    pos1:elementDetail.pos1,
                                    pos2: elementDetail.pos2,
                                    pos3:elementDetail.pos3,
                                    pos4:elementDetail.pos4,
                                    color:color,
                                    top:elementDetail.top,
                                    left:elementDetail.left,
                                    elementType:elementDetail.elementType,
                                  }

                                };


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
                            selectedLineIds:state.lineDetails.filter((lineDetail,index) => 
                                                            checkIfLineFallsInSelectBox(state,action,index))
                                                            .map((lineDetail) =>(lineDetail.id)),

                            lines:state.lines.map((line,index) => checkIfLineFallsInSelectBox(state,action,index)?
                                                    getColoredLine(state,action,index,"green"):
                                                    getColoredLine(state,action,index,"blue")                                                      
                                                ),

                            lineDetails:state.lineDetails.map((lineDetail,index) => checkIfLineFallsInSelectBox(state,action,index)?
                                                        getColoredLineDetail(lineDetail,state.elementDetails,"green"):
                                                        getColoredLineDetail(lineDetail,state.elementDetails,"blue")                                                     
                                                    ),

                            elements:state.elements.map((element,index) => checkIfElementFallsInSelectBox(state,index)?
                                                                                    getColoredElement(state,index,"green"):
                                                                                    getColoredElement(state,index,"red")),
                                 elementDetails:state.elementDetails
                                                     .map((elementDetail,index) => checkIfElementFallsInSelectBox(state,index)?
                                                                                        getColoredElementDetail(elementDetail,"green"):
                                                                                        getColoredElementDetail(elementDetail,"red")),
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