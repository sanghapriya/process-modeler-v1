import React from 'react';
import {useDispatch} from 'react-redux';
import {onGrabElement,onDropElement} from '../actions';
import {ACTIVITY,EVENT,GATEWAY} from '../constants';


  const getElement = (elementType,top,left,color,id,dispatch) => {

                    switch(elementType) {

                      case ACTIVITY:
                        
                        return <svg>
                                 <rect x={left-50} y={top} 
                                    width="100" 
                                    height="100"
                                    style={{"fill":color===null?"blue":color,
                                          "stroke":"pink",
                                          "cursor": "move",
                                          "strokeWidth":"5",
                                          "fillOpacity":"0.1"}}
                                    draggable
                                    onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}
                                    onMouseUp={(e)=>dispatch(onDropElement(id,elementType))}
                                     />
                                </svg>;

                      case EVENT:
                              
                        return <circle cx={left}  cy={top}  
                                        r="40" 
                                        style={{"fill":color===null?"blue":color,
                                        "stroke":"pink",
                                        "cursor": "move",
                                        "strokeWidth":"5",
                                        "fillOpacity":"0.1"}}
                                        draggable
                                        onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}
                                        onMouseUp={(e)=>dispatch(onDropElement(id,elementType))}
                                        />;
                      
                      case GATEWAY:
                        var width=100
                        var height = 100
                        var points = (left-width/2)+","+top+" "+left+","+(top+height/2)+" "+(left+width/2)+","+top+" "+left+","+(top-height/2);
                        return <polygon points={points} 
                                    width={width} 
                                    height={height}
                                    style={{"fill":color===null?"blue":color,
                                          "stroke":"pink",
                                          "cursor": "move",
                                          "strokeWidth":"5",
                                          "fillOpacity":"0.1"}}
                                    draggable
                                    onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}
                                    onMouseUp={(e)=>dispatch(onDropElement(id,elementType))} />;
                      default:

                              return <circle cx={top}  cy={left}  
                                                        r="40" 
                                                        style={{"fill":color===null?"blue":color,
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

    
      return getElement(elementType,props.top,props.left,props.color,id,dispatch)
      
  }
