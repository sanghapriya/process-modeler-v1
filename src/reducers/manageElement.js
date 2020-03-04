import {CREATE,ON_GRAB_ELEMENT,ON_MOVE_ELEMENT,
  ON_DROP_ELEMENT,LINE_SELECTED,DRAG_SELECTED,SELECT_ELEMENT,DELETE_ELEMENTS,START_LINE_DRAW,END_LINE_DRAW} from '../actions';
import elementDragged from './manageElementUtility/elementDragged.manageLine';
import lineDraw from './manageElementUtility/lineDraw.manageLine';
import getLine from './manageElementUtility/getLineUtility.manageLine';
import getLineDetail from './manageElementUtility/getLineDetail.manageLine';
import createElement from './manageElementUtility/createElement.manageElement';
import selectElement from './manageElementUtility/selectElement.manageElement';
import deleteElement from './manageElementUtility/deleteElement.manageElement';

import {START_SELECT_BOX,DRAG_SELECT_BOX,END_SELECT_BOX,LINE_NEW,LINE_REFRESH} from '../constants';

const initialState = {
                      menuOptionChosen:DRAG_SELECTED,
                      isDraw:false,
                      isLineDraw:false,
                      latestElementId:0,
                      latestLineId:0,
                      lines:[],
                      lineDetails:[],
                      elements:[],
                      elementDetails:[],
                      selectBox:[],
                      selectBoxDetails:[],
                      isElementGrabbed:false,
                      grabbedElementId:0,
                      grabbedElementType:"",
                      selectedElementIds:[],
                      selectedLineIds:[]};



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

            case DELETE_ELEMENTS:
              console.log("DElete")
              return deleteElement(state)

            case CREATE:
              return createElement(state,action)


             case ON_MOVE_ELEMENT:
                    action.e.persist()

                    if(state.isLineDraw) {
                      
                         return lineDraw(state,action,LINE_REFRESH);
                    }
                    else{

                      if(state.menuOptionChosen === SELECT_ELEMENT & state.isDraw){

                        return selectElement(state,action,DRAG_SELECT_BOX);
    
    
                      }

                      else{

                         return elementDragged(state,action);

                      }
                    }
            case START_LINE_DRAW:

              return lineDraw(state,action,LINE_NEW);


            case END_LINE_DRAW:

              
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
          

              
                              
            case ON_GRAB_ELEMENT:

              if(state.menuOptionChosen === SELECT_ELEMENT){
                    return selectElement(state,action,START_SELECT_BOX);
                  }

                else{

                    if(action.id === null){

                      return state;

                    }
                    else{                        

                      return {
                            ...state,
                            grabbedElementId:action.id,
                            isElementGrabbed:true,
                            grabbedElementType:action.elementType
                          }
                    }
            }
 
            case ON_DROP_ELEMENT:            
              
              if(state.isLineDraw)
              {
                  return {
                    ...state,
                    isLineDraw:false,
                    lineDetails:state.lineDetails.filter((lineDetail,index) => !(state.latestLineId === lineDetail.id)),

                    lines:state.lines.filter((line,index) => !(state.latestLineId === state.lineDetails[index].id)),             
                }

                  }
              else{

                if(state.menuOptionChosen === SELECT_ELEMENT & state.isDraw ){

                  return selectElement(state,action,END_SELECT_BOX);

                }

                else{


                      return {
                        ...state,
                        grabbedElementId:[],
                        grabbedElementType:"",
                        isElementGrabbed:false
                      }

                    }

                }
          default:
                    return state;
      }

}


export default manageElementReducer;