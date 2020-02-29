import React from 'react';
import {useDispatch} from 'react-redux';
import {onGrabElement,onDropElement} from '../actions';
import {ACTIVITY,EVENT,GATEWAY} from '../constants';
import ActivityStyle from './styles/activity.style';
import EventStyle from './styles/event.style';
import GatewayStyle from './styles/gateway.style'
import PointerStyle from './styles/pointer.style'


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
                        return  <div>
                                  <ActivityStyle
                                            x={left} 
                                            y={top} 
                                            width={width} 
                                            height={height}
                                            color={color===null?"blue":color}
                                            onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}
                                            onMouseUp={(e)=>dispatch(onDropElement(id,elementType,e))}/>

                                  <PointerStyle cx={left-5+(width/2)}   cy={top-2}            r={10} color ={"black"}/>
                                  <PointerStyle cx={left-2}             cy={top+height/2-5}   r={10} color ={"black"} />
                                  <PointerStyle cx={left+width-2}       cy={top+height/2-5}   r={10} color ={"black"}/>
                                  <PointerStyle cx={left-5+(width/2)}   cy={top+height-3}     r={10} color ={"black"}/>
                                </div>;

                      case EVENT:
                        var radius = 50;
                        return  <div>
                                <EventStyle 
                                    cx={left}  
                                    cy={top}  
                                    r={radius} 
                                    color={color===null?"blue":color}
                                    onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}
                                    onMouseUp={(e)=>dispatch(onDropElement(id,elementType,e))}
                                    />
                                    <PointerStyle cx={left-5+(radius/2)}   cy={top-2}            r={10} color ={"black"}/>
                                    <PointerStyle cx={left-2}             cy={top+radius/2-5}   r={10} color ={"black"} />
                                    <PointerStyle cx={left+radius-2}       cy={top+radius/2-5}   r={10} color ={"black"}/>
                                    <PointerStyle cx={left-5+(radius/2)}   cy={top+radius-3}     r={10} color ={"black"}/>

                                    </div>;
                      
                      case GATEWAY:
                        var width=50;
                        var height = 50;
                        var pointer_radius=10;
                        return <div><GatewayStyle 
                                          x = {left}
                                          y = {top} 
                                          width={width} 
                                          height={height}
                                          color={color===null?"blue":color}
                                          onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}
                                          onMouseUp={(e)=>dispatch(onDropElement(id,elementType,e))} />
                                  <PointerStyle cx={left+(width/2)-pointer_radius+2}   cy={top-pointer_radius}            r={pointer_radius} color ={"black"}/>
                                  <PointerStyle cx={left-pointer_radius-2}             cy={top+height/2}   r={10} color ={"black"} />
                                  <PointerStyle cx={left+width+pointer_radius-5}       cy={top+height/2-3}   r={10} color ={"black"}/>
                                  <PointerStyle cx={left+(width/2)}   cy={top+height}     r={10} color ={"black"}/>
                                  </div>;
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
