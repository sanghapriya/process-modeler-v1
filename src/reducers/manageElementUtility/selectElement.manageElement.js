import React from 'react';
import {START_SELECT_BOX,DRAG_SELECT_BOX,END_SELECT_BOX} from '../../constants'
import SelectBox from '../../components/selectBox.component'
import getLine from './getLineUtility.manageLine';


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
                            selected:state.lineDetails.filter((lineDetail,index) => 
                                        ((state.elementDetails[state.lineDetails[index].startElementId-1].left >= state.selectBoxDetail.x1 &
                                            state.elementDetails[state.lineDetails[index].startElementId-1].top >= state.selectBoxDetail.y1)&
                                            (action.e.clientX >= state.elementDetails[state.lineDetails[index].endElementId-1].left &
                                            action.e.clientY >= state.elementDetails[state.lineDetails[index].endElementId-1].top  )))
                                    .map((lineDetail) =>(lineDetail.id)),

                            lines:state.lines.map((line,index) => ((state.elementDetails[state.lineDetails[index].startElementId-1].left >= state.selectBoxDetail.x1 &
                                                state.elementDetails[state.lineDetails[index].startElementId-1].top >= state.selectBoxDetail.y1)&
                                                (action.e.clientX >= state.elementDetails[state.lineDetails[index].endElementId-1].left &
                                                action.e.clientY >= state.elementDetails[state.lineDetails[index].endElementId-1].top  ))?
                                                getLine(
                                                    state.lineDetails[index].id,
                                                    state.elementDetails,
                                                    state.lineDetails[index].startElementId,
                                                    state.lineDetails[index].endElementId,
                                                    action.e.clientX,
                                                    action.e.clientY,
                                                    "green"
                                                    ):
                                                    getLine(
                                                        state.lineDetails[index].id,
                                                        state.elementDetails,
                                                        state.lineDetails[index].startElementId,
                                                        state.lineDetails[index].endElementId,
                                                        action.e.clientX,
                                                        action.e.clientY,
                                                        "blue"
                                                        )
                                                ),
                            selectBox:[],
                            selectBoxDetail:[],
                            isDraw:false
                        };

            default:
                return state;


    }

}