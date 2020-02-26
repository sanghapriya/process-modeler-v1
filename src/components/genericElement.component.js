import React from 'react';
import {useDispatch} from 'react-redux';
import {onGrabElement,onDropElement} from '../actions';
import {ACTIVITY,EVENT,GATEWAY} from '../constants';
import ActivityStyle from './styles/activity.style';
import EventStyle from './styles/event.style';
import GatewayStyle from './styles/gateway.style'


  const getConnectionPoint = (x,y) => {             
                                        return <circle cx={x}  cy={y}  
                                                r="5" 
                                                style={{"fill":"black",
                                                "stroke":"black",
                                                "cursor": "move",
                                                "strokeWidth":"5",
                                                "fillOpacity":"0.1"}}
                                                draggable
                                                />}


  const getElement = (elementType,top,left,color,id,dispatch) => {

                    switch(elementType) {

                      case ACTIVITY:
                        var width = 100
                        var height = 100
                        return  <ActivityStyle
                                    x={left} 
                                    y={top} 
                                    width={width} 
                                    height={height}
                                    color={color===null?"blue":color}
                                    onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}
                                    onMouseUp={(e)=>dispatch(onDropElement(id,elementType,e))}
                                     />
                                ;

                      case EVENT:
                        var radius = 50;
                        return  <EventStyle 
                                    cx={left}  
                                    cy={top}  
                                    r={radius} 
                                    color={color===null?"blue":color}
                                    onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}
                                    onMouseUp={(e)=>dispatch(onDropElement(id,elementType,e))}
                                    />;
                      
                      case GATEWAY:
                        var width=50;
                        var height = 50;
                        return <GatewayStyle 
                                          x = {left}
                                          y = {top} 
                                          width={width} 
                                          height={height}
                                          color={color===null?"blue":color}
                                          onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}
                                          onMouseUp={(e)=>dispatch(onDropElement(id,elementType,e))} />;
                      default:

                        return  <EventStyle 
                        cx={left}  
                        cy={top}  
                        r={radius} 
                        color={color===null?"blue":color}
                        onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}
                        onMouseUp={(e)=>dispatch(onDropElement(id,elementType,e))}
                        />;



                      }
                }





  export default function GenericElement (props)  {
    const id = props.id;
    const dispatch = useDispatch();
    const elementType = props.elementType;

    
      return getElement(elementType,props.top,props.left,props.color,id,dispatch)
      
  }
