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



function getLine(lineId,elementDetails,startElementId,endElementId,clientX,clientY,color) {

        var x1 = elementDetails[startElementId-1].left;
        var y1 = elementDetails[startElementId-1].top;
        var x2 = (endElementId === null?clientX:elementDetails[endElementId-1].left);
        var y2 = (endElementId === null?clientY:elementDetails[endElementId-1].top);

        return <GenericLine key={lineId} x1={x1} x2 = {x2} y1 = {y1} y2={y2} />

}



function getLineDetail(lineId,elementDetails,startElementId,endElementId,clientX,clientY,color) {

  return  { 
          id:lineId, 
          startElementId:startElementId,
          endElementId:endElementId,
          x:clientX,
          y:clientY,
          color:color
          }

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
                                                                    getLine(
                                                                      state.lineDetails[index].id,
                                                                      state.elementDetails,
                                                                      state.lineDetails[index].startElementId,
                                                                      state.lineDetails[index].endElementId,
                                                                      action.e.clientX,
                                                                      action.e.clientY
                                                                      ):line)),

                            lineDetails:state.lineDetails.map((lineDetail,index) => (index === state.latestLineId-1?
                                                                                      getLineDetail(
                                                                                        state.lineDetails[index].id,
                                                                                        state.elementDetails,
                                                                                        state.lineDetails[index].startElementId,
                                                                                        state.lineDetails[index].endElementId,
                                                                                        action.e.clientX,
                                                                                        action.e.clientY ):lineDetail))
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
                             lines:state.lines.map((line,index) => 
                                                                  getLine(
                                                                    state.lineDetails[index].id,
                                                                    state.elementDetails,
                                                                    state.lineDetails[index].startElementId,
                                                                    state.lineDetails[index].endElementId,
                                                                    state.lineDetails[index].x,
                                                                    state.lineDetails[index].y
                                                                    )),

                            lineDetails:state.lineDetails.map((lineDetail,index) => 
                                                                                              getLineDetail(
                                                                                                state.lineDetails[index].id,
                                                                                                state.elementDetails,
                                                                                                state.lineDetails[index].startElementId,
                                                                                                state.lineDetails[index].endElementId,
                                                                                                state.lineDetails[index].x,
                                                                                                state.lineDetails[index].y )),
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


                action.e.persist();

                if(state.menuOptionChosen === "Line")
                {
                  
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
                    
                    grabbedElementId:action.id,
                    isElementGrabbed:true,
                    grabbedElementType:action.elementType
                  }
            }



            


            
            case ON_DROP_ELEMENT:
              
              
              if(state.menuOptionChosen === "Line"  & state.isDraw)
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