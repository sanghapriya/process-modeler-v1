import React from 'react';
import getLine from './getLineUtility.manageLine'
import getLineDetail from './getLineDetail.manageLine'
import {LINE_NEW,LINE_SELECTED_BOX,LINE_REFRESH} from '../../constants'



export default function lineDraw (state,action,lineOperation) {

  // console.log(state);

  if(state.latestElementId === 0 | typeof(action.e) === undefined ){

    return state;
  }



  if(lineOperation === LINE_NEW){

    

    var latestLineId = state.latestLineId+1;
    var line = getLine(latestLineId, state.elementDetails, action.id, null, action.e.clientX, action.e.clientY, "red");
    var lineDetail = getLineDetail(latestLineId, state.elementDetails, action.id, null, action.e.clientX, action.e.clientY, "red");
    
    return {
      ...state,
      isDraw:true,
      latestLineId: latestLineId,
      lines: [...state.lines,line],
      lineDetails: [...state.lineDetails,lineDetail],
    }


  }

  else{

        return {
            ...state,
            latestLineId:state.latestLineId,
            lines:state.lines.map((line,index) => (index === state.latestLineId-1? 
                                                    getLine(
                                                      state.lineDetails[index].id,
                                                      state.elementDetails,
                                                      state.lineDetails[index].startElementId,
                                                      state.lineDetails[index].endElementId,
                                                      action.e.clientX,
                                                      action.e.clientY,
                                                      lineOperation === LINE_SELECTED_BOX?"green":"red"
                                                      ):line)),

            lineDetails:state.lineDetails.map((lineDetail,index) => (index === state.latestLineId-1?
                                                                      getLineDetail(
                                                                        state.lineDetails[index].id,
                                                                        state.elementDetails,
                                                                        state.lineDetails[index].startElementId,
                                                                        state.lineDetails[index].endElementId,
                                                                        action.e.clientX,
                                                                        action.e.clientY,
                                                                        lineOperation === LINE_SELECTED_BOX?"green":"red" )
                                                                        :lineDetail))
                                                                        };

                                                                    };

                                                                  }

                                                              