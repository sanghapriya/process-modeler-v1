import React from 'react';
import genericLine from '../components/genericLine.component';
import {LINE_DRAG_START,LINE_BEING_DRAGGED,LINE_DRAG_END} from '../actions';


const initialState = {latestLineId:0,lines:[],lineDetails:[],isLineDrawOn:false};

function toogleLineSelectedReducer(state = initialState,action) {

    switch(action.type){

        case LINE_DRAG_START:
            var latestLineId = state.latestLineId;
            var lines = <genericLine          key = { latestLineId+1}
                                                x1 = {action.e.clientX}
                                                y1 = {action.e.clientY}
                                                x2 = {action.e.clientX+1}
                                                y2 = {action.e.clientY+1}

            />;

            return {
                ...state,
                latestLineId:state.latestLineId+1,
                lines:[...state.lines,lines],
            };

        case LINE_BEING_DRAGGED:

        case LINE_DRAG_END:

        default:
            return state;
}

}


export default manageElementReducer;