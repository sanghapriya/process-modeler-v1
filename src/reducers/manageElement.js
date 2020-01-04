import React from 'react';
import GenericElement from '../components/genericElement.component';
import {CREATE,ON_GRAB_ELEMENT,ON_MOVE_ELEMENT,ON_DROP_ELEMENT,LINE_SELECTED,DRAG_SELECTED,SELECT_ELEMENT} from '../actions';
import elementDragged from './manageElementUtility/elementDragged.manageLine';
import lineDraw from './manageElementUtility/lineDraw.manageLine';
import getLine from './manageElementUtility/getLineUtility.manageLine';
import getLineDetail from './manageElementUtility/getLineDetail.manageLine';
import createElement from './manageElementUtility/createElement.manageElement'

const initialState = {
                      menuOptionChosen:DRAG_SELECTED,
                      isDraw:false,
                      latestElementId:0,
                      latestLineId:0,
                      lines:[],
                      lineDetails:[],
                      elements:[],
                      elementDetails:[],
                      isElementGrabbed:false,
                      grabbedElementId:0,
                      grabbedElementType:""};






function manageElementReducer(state = initialState,action) {

          

          switch(action.type){

            case LINE_SELECTED:
              

              return {
                ...state,
                menuOptionChosen:LINE_SELECTED

              };

            case SELECT_ELEMENT:
              

              return {
                ...state,
                menuOptionChosen:SELECT_ELEMENT

              };
            
            
              case DRAG_SELECTED:
              

                return {
                  ...state,
                  menuOptionChosen:DRAG_SELECTED
  
                };

            case CREATE:
              return createElement(state,action)


             case ON_MOVE_ELEMENT:
                    action.e.persist()

                    if(state.menuOptionChosen === LINE_SELECTED & state.isDraw) {
                      
                         return lineDraw(state,action,false);
                    }
                    else{
                         return elementDragged(state,action);
                    }
                              
            case ON_GRAB_ELEMENT:


                action.e.persist();

                if(state.menuOptionChosen === LINE_SELECTED)
                {
                  
                  return lineDraw(state,action,true)


                }
                else{

                  return {
                    ...state,
                    
                    grabbedElementId:action.id,
                    isElementGrabbed:true,
                    grabbedElementType:action.elementType
                  }
            }



            


            
            case ON_DROP_ELEMENT:
              
              
              if(state.menuOptionChosen === LINE_SELECTED  & state.isDraw)
              {
                if(action.id === null){

                  return {
                    ...state,
                    isDraw:false,
                    } 

                  }
                else {
                      var latestLineId = state.latestLineId;
                      var startElementId = state.lineDetails[latestLineId-1].startElementId
                      var lineDrawn = getLine(latestLineId, state.elementDetails,startElementId , action.id, null, null, "blue");
                      var lineDetailDrawn = getLineDetail(latestLineId, state.elementDetails,startElementId, action.id, null, null, "blue");

                      return {
                      ...state,
                      isDraw:false,
                      lines:state.lines.map((line,index) => (index === state.latestLineId-1? lineDrawn:line)),
                      lineDetails:state.lineDetails.map((lineDetail,index) => (index === state.latestLineId-1?lineDetailDrawn:lineDetail)),
                      }
                

                    }
                  }
              else{


                      return {
                        ...state,
                        grabbedElementId:[],
                        grabbedElementType:"",
                        isElementGrabbed:false
                      }

                }
          default:
                    return state;
      }

}


export default manageElementReducer;