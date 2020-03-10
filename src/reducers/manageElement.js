import {CREATE,ON_GRAB_ELEMENT,ON_MOVE_ELEMENT,
  ON_DROP_ELEMENT,LINE_SELECTED,DRAG_SELECTED,SELECT_ELEMENT,DELETE_ELEMENTS,
  START_LINE_DRAW,END_LINE_DRAW,OPEN_ELEMENT_PROPERTY} from '../actions';
import elementDragged from './manageElementUtility/elementDragged.manageLine';
import lineDraw from './manageElementUtility/lineDraw.manageLine';
import createElement from './manageElementUtility/createElement.manageElement';
import selectElement from './manageElementUtility/selectElement.manageElement';
import deleteElement from './manageElementUtility/deleteElement.manageElement';
import propertyBox from './manageElementUtility/propertyBox';

import {START_SELECT_BOX,DRAG_SELECT_BOX,END_SELECT_BOX,LINE_NEW,LINE_REFRESH,LINE_END} from '../constants';

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

              return lineDraw(state,action,LINE_END);
              
          

              
                              
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
                    latestLineId: state.latestLineId-1         
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
          case OPEN_ELEMENT_PROPERTY:

                  return propertyBox(state,action,LINE_END);
          default:
                    return state;
      }

}


export default manageElementReducer;