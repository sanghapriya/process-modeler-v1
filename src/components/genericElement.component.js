import React from 'react';
import {useDispatch} from 'react-redux';
import {moveElement} from '../actions';
import {ACTIVITY,EVENT,GATEWAY} from '../constants';


  const getElement = (elementType,top,left,id,dispatch) => {

                    switch(elementType) {

                      case ACTIVITY:
                        
                        return <rect x={left} y={top} 
                                    width="100" 
                                    height="100"
                                    style={{"fill":"blue",
                                          "stroke":"pink",
                                          "cursor": "move",
                                          "strokeWidth":"5",
                                          "fillOpacity":"0.1"}}
                                    draggable
                                    onMouseMove={(e)=>dispatch(moveElement(e,id,elementType))} />;

                      case EVENT:
                              
                        return <circle cx={left}  cy={top}  
                                        r="40" 
                                        style={{"fill":"blue",
                                        "stroke":"pink",
                                        "cursor": "move",
                                        "strokeWidth":"5",
                                        "fillOpacity":"0.1"}}
                                        draggable
                                        onDragEnd={(e)=>dispatch(moveElement(e,id,elementType))}/>;
                      
                      case GATEWAY:

                        return <rect x={left} y={top} 
                                    width="150" 
                                    height="150"
                                    style={{"fill":"red",
                                          "stroke":"pink",
                                          "cursor": "move",
                                          "strokeWidth":"5",
                                          "fillOpacity":"0.1"}}
                                    draggable
                                    onDragEnd={(e)=>dispatch(moveElement(e,id,elementType))} />;
                      default:

                              return <circle cx={top}  cy={left}  
                                                        r="40" 
                                                        style={{"fill":"blue",
                                                        "stroke":"pink",
                                                        "cursor": "move",
                                                        "strokeWidth":"5",
                                                        "fillOpacity":"0.1"}}
                                                        draggable
                                                        onDragEnd={(e)=>dispatch(moveElement(e,id,elementType))}/>;



                      }
                }





  export default function GenericElement (props)  {
    const id = props.id;
    const dispatch = useDispatch();
    const elementType = props.elementType;

    
      return getElement(elementType,props.top,props.left,id,dispatch)
      
  }
