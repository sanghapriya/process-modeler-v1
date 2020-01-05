import React from 'react';
import {START_SELECT_BOX,DRAG_SELECT_BOX,END_SELECT_BOX} from '../../constants'
import SelectBox from '../../components/selectBox.component'


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
                return {
                            ...state,
                            selectBox:[],
                            selectBoxDetail:[],
                            isDraw:false
                        };

            default:
                return state;


    }

}