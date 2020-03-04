import React from 'react';
import getLine from './getLineUtility.manageLine'
import getLineDetail from './getLineDetail.manageLine'
import {LINE_NEW,LINE_SELECTED_BOX,LINE_END} from '../../constants'



export default function lineDraw (state,action,lineOperation) {

  

  if(state.latestElementId === 0 | typeof(action.e) === undefined ){

    return state;
  }



  if(lineOperation === LINE_NEW){

    if(state.isLineDraw){

      return state;
    }

    

    var latestLineId = state.latestLineId+1;
    var line = getLine(
                      latestLineId, 
                      state.elementDetails, 
                      action.id, 
                      null, 
                      action.e.clientX, 
                      action.e.clientY, 
                      "red",
                      action.elementType,
                      action.pointerPosition,
                      null,
                      null);
    var lineDetail = getLineDetail(                      
                                  latestLineId, 
                                  state.elementDetails, 
                                  action.id, 
                                  null, 
                                  action.e.clientX, 
                                  action.e.clientY, 
                                  "red",
                                  action.elementType,
                                  action.pointerPosition,
                                  null,
                                  null);
    
    return {
      ...state,
      isLineDraw:true,
      latestLineId: latestLineId,
      lines: [...state.lines,line],
      lineDetails: [...state.lineDetails,lineDetail],
    }


  }

  else{


    if(lineOperation === LINE_END){

      if(!state.isLineDraw){

        return state;
      }


      var latestLineId = state.latestLineId;
              var startElementId = state.lineDetails[latestLineId-1].startElementId;
              var startElementType = state.lineDetails[latestLineId-1].startElementType;
              var startPointerPosition = state.lineDetails[latestLineId-1].startPointerPosition;

              var lineDrawn = getLine(latestLineId, 
                                      state.elementDetails,
                                      startElementId , 
                                      action.id, 
                                      null,
                                      null,
                                      "blue",
                                      startElementType,
                                      startPointerPosition,
                                      action.elementType,
                                      action.pointerPosition);

              var lineDetailDrawn = getLineDetail(
                                                  latestLineId, 
                                                  state.elementDetails,
                                                  startElementId, 
                                                  action.id, 
                                                  null, 
                                                  null, 
                                                  "blue",
                                                  startElementType,
                                                  startPointerPosition,
                                                  action.elementType,
                                                  action.pointerPosition);

              return {
              ...state,
              isLineDraw:false,
              lines:state.lines.map((line,index) => (index === state.latestLineId-1? lineDrawn:line)),
              lineDetails:state.lineDetails.map((lineDetail,index) => (index === state.latestLineId-1?lineDetailDrawn:lineDetail)),
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
                                                      lineOperation === LINE_SELECTED_BOX?"green":"red",
                                                      state.lineDetails[index].startElementType,
                                                      state.lineDetails[index].startPointerPosition,
                                                      state.lineDetails[index].endElementType,
                                                      state.lineDetails[index].endPointerPosition
                                                      ):line)),

            lineDetails:state.lineDetails.map((lineDetail,index) => (index === state.latestLineId-1?
                                                                      getLineDetail(
                                                                        state.lineDetails[index].id,
                                                                        state.elementDetails,
                                                                        state.lineDetails[index].startElementId,
                                                                        state.lineDetails[index].endElementId,
                                                                        action.e.clientX,
                                                                        action.e.clientY,
                                                                        lineOperation === LINE_SELECTED_BOX?"green":"red",
                                                                        state.lineDetails[index].startElementType,
                                                                        state.lineDetails[index].startPointerPosition,
                                                                        state.lineDetails[index].endElementType,
                                                                        state.lineDetails[index].endPointerPosition
                                                                        )
                                                                        :lineDetail))
                                                                        };

                                                                    };

                                                                  }

                                                                }

                                                              