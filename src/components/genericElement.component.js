import React from 'react';
import {useDispatch} from 'react-redux';
import {onGrabElement} from '../actions';
import {ACTIVITY,EVENT,GATEWAY} from '../constants';


  const getElement = (elementType,top,left,id,dispatch) => {

                    switch(elementType) {

                      case ACTIVITY:
                        
                        return <svg>
                                 <rect x={left-50} y={top} 
                                    width="100" 
                                    height="100"
                                    style={{"fill":"blue",
                                          "stroke":"pink",
                                          "cursor": "move",
                                          "strokeWidth":"5",
                                          "fillOpacity":"0.1"}}
                                    draggable
                                    onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}
                                     />
                                </svg>;

                      case EVENT:
                              
                        return <circle cx={left}  cy={top}  
                                        r="40" 
                                        style={{"fill":"blue",
                                        "stroke":"pink",
                                        "cursor": "move",
                                        "strokeWidth":"5",
                                        "fillOpacity":"0.1"}}
                                        draggable
                                        onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}/>;
                      
                      case GATEWAY:
                        var width=100
                        var height = 100
                        var points = (left-width/2)+","+top+" "+left+","+(top+height/2)+" "+(left+width/2)+","+top+" "+left+","+(top-height/2);
                        return <polygon points={points} 
                                    width={width} 
                                    height={height}
                                    style={{"fill":"red",
                                          "stroke":"pink",
                                          "cursor": "move",
                                          "strokeWidth":"5",
                                          "fillOpacity":"0.1"}}
                                    draggable
                                    onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))} />;
                      default:

                              return <circle cx={top}  cy={left}  
                                                        r="40" 
                                                        style={{"fill":"blue",
                                                        "stroke":"pink",
                                                        "cursor": "move",
                                                        "strokeWidth":"5",
                                                        "fillOpacity":"0.1"}}
                                                        draggable
                                                        onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}/>;



                      }
                }





  export default function GenericElement (props)  {
    const id = props.id;
    const dispatch = useDispatch();
    const elementType = props.elementType;

    
      return getElement(elementType,props.top,props.left,id,dispatch)
      
  }
