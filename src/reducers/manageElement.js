import React from 'react';
import GenericElement from '../components/genericElement.component';
import GenericLine from '../components/genericLine.component';
import {CREATE,ON_GRAB_ELEMENT,ON_MOVE_ELEMENT,ON_DROP_ELEMENT,LINE_SELECTED} from '../actions';


const initialState = {
                      menuOptionChosen:"",
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



function getLine(latestLineId,startElementX, startElementY,clientX,clientY,endElementX,endElementY,color) {

        var x1 = startElementX;
        var y1 = startElementY;
        var x2 = (clientX === null?endElementX:clientX);
        var y2 = (clientY === null?endElementY:clientY);

        return <GenericLine key={latestLineId} x1={x1} x2 = {x2} y1 = {y1} y2={y2} />

}



function getLineDetail(latestLineId,startElementX, startElementY,clientX,clientY,endElementX,endElementY,color) {

  var x1 = startElementX;
  var y1 = startElementY;
  var x2 = (clientX === null?endElementX:clientX);
  var y2 = (clientY === null?endElementY:clientY);

  return  { id:latestLineId, x1:x1, x2:x2, y1:y1, y2:y2, color:color }

}

function manageElementReducer(state = initialState,action) {

          

          switch(action.type){

            case LINE_SELECTED:
              var menuOptionChosen = state.menuOptionChosen === "Line"?"":"Line"

              return {
                ...state,
                menuOptionChosen:menuOptionChosen

              };
            

            case CREATE:
                    var latestElementId = state.latestElementId;
                    var elements = <GenericElement          key = { latestElementId+1}
                                                    id ={ latestElementId+1}
                                                    pos1={-1*action.e.clientX}
                                                    pos2= {-1*action.e.clientY}
                                                    pos3={action.e.clientX}
                                                    pos4={action.e.clientY}
                                                    top={action.e.clientY}
                                                    left={action.e.clientX}
                                                    elementType={action.elementType}
                                                    />;

                    var elementDetails = {
                                                     pos1:-1*action.e.clientX,
                                                     pos2: -1*action.e.clientY,
                                                     pos3:action.e.clientX,
                                                     pos4:action.e.clientY,
                                                     top:action.e.clientY,
                                                     left:action.e.clientX,};




                    return {
                            ...state,
                            latestElementId:state.latestElementId+1,
                            elements:[...state.elements,elements],
                            elementDetails:[...state.elementDetails,elementDetails]
                         };

             case ON_MOVE_ELEMENT:
                    action.e.persist()


                    if(state.menuOptionChosen === "Line" & state.isDraw)
                    {
                      
                        console.log(state.lineDetails)

                          return {
                            ...state,
                            latestLineId:state.latestLineId,
                            lines:state.lines.map((line,index) => (index === state.latestLineId-1?                       
                                                                    <GenericLine          key = { state.latestLineId}
                                                                    id = { latestLineId}
                                                                   
                                                                    x1 = {state.lineDetails[index].x1}
                                                                    y1 = {state.lineDetails[index].y1}
                                                                    x2 = {action.e.clientX}
                                                                    y2 = {action.e.clientY}
                                                                    />:line)),

                            lineDetails:state.lineDetails.map((lineDetail,index) => (index === state.latestLineId-1?
                                                                                        {id:state.latestLineId,
                                                                                       
                                                                                        x1: state.lineDetails[index].x1,
                                                                                        y1: state.lineDetails[index].y1,
                                                                                        x2:action.e.clientX,
                                                                                        y2:action.e.clientY}:lineDetail))
                                                                                        };
                                                                                      }


                        
                    else{
                    
                    
                    if(!state.isElementGrabbed){
                      return state
                    }

                    let id = state.grabbedElementId;
                    let top = (state.elementDetails[id-1].top -(state.elementDetails[id-1].pos4 - action.e.clientY));
                    let left = (state.elementDetails[id-1].left -(state.elementDetails[id-1].pos3 -action.e.clientX));


                     return {
                            ...state,

                             latestElementId:state.latestElementId,
                             elements:state.elements
                                            .map((element,index) => (index === id-1?
                                                                    <GenericElement key = {id}
                                                                     id ={id}
                                                                     top={top}
                                                                     left={left}
                                                                     elementType={state.grabbedElementType}

                                                                     />
                                                                     :element)),
                             elementDetails:state.elementDetails
                                                 .map((elementDetail,index) => (index===id-1?
                                                                                {
                                                                                  pos1:state.elementDetails[id-1].pos3 -action.e.clientX,
                                                                                  pos2: state.elementDetails[id-1].pos4 -action.e.clientY,
                                                                                  pos3:action.e.clientX,
                                                                                  pos4:action.e.clientY,
                                                                                  top:top,
                                                                                  left:left,
                                                                                }:elementDetail))
                           };

                          }
                              
            case ON_GRAB_ELEMENT:




                if(state.menuOptionChosen === "Line")
                {
                  
                  var latestLineId = state.latestLineId+1;
                  var x = state.elementDetails[action.id-1].left;
                  var y = state.elementDetails[action.id-1].top;
        
                  var line = getLine(latestLineId,x,y,x,y,null,null,"red");
                  var lineDetail = getLineDetail(latestLineId,x,y,x,y,null,null,"red");
                  
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
                    latestLineId: latestLineId,
                    grabbedElementId:action.id,
                    isElementGrabbed:true,
                    grabbedElementType:action.elementType
                  }
            }



            


            
            case ON_DROP_ELEMENT:

              if(state.menuOptionChosen === "Line")
              {

                return {
                  ...state,
                  isDraw:false,
                 

                }


                    }
              else{


                      return {
                        ...state,
                        grabbedElementId:[],
                        isElementGrabbed:false
                      }
            }






          default:
                    return state;
      }

}


export default manageElementReducer;
