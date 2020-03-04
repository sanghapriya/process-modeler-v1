import React from 'react';
import {useDispatch} from 'react-redux';
import {onGrabElement,onDropElement,onStartLineDraw,onEndLineDraw} from '../actions';
import {ACTIVITY,EVENT,GATEWAY,POINTER_BOTTOM,POINTER_LEFT,POINTER_RIGHT,POINTER_TOP} from '../constants';
import ActivityStyle from './styles/activity.style';
import EventStyle from './styles/event.style';
import GatewayStyle from './styles/gateway.style';
import PointerStyle from './styles/pointer.style';


  const pointer_radius = 10;  


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

                                  <PointerStyle cx={left-pointer_radius/2+(width/2)}   cy={top-pointer_radius/2} r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_TOP))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_TOP))} />

                                  <PointerStyle cx={left-2}   cy={top+height/2-pointer_radius/2} r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_LEFT))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_LEFT))} />  

                                  <PointerStyle cx={left+width-2}   cy={top+height/2-pointer_radius/2} r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_RIGHT))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_RIGHT))} />

                                  <PointerStyle cx={left-pointer_radius/2+(width/2)}   cy={top+height-pointer_radius/2} r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_BOTTOM))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_BOTTOM))} />   
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

                                  <PointerStyle cx={left-pointer_radius/2+(radius/2)}   cy={top-pointer_radius/2} r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_TOP))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_TOP))} />

                                  <PointerStyle cx={left-2}   cy={top+radius/2-pointer_radius/2} r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_LEFT))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_LEFT))} />

                                  <PointerStyle cx={left+radius-2}   cy={top+radius/2-pointer_radius/2} r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_RIGHT))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_RIGHT))} />

                                  <PointerStyle cx={left-pointer_radius/2+(radius/2)}   cy={top+radius-pointer_radius/2} r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_BOTTOM))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_BOTTOM))} />

                                 
                                  </div>;
                      
                      case GATEWAY:
                        var width=50;
                        var height = 50;
                        
                        return <div><GatewayStyle 
                                          x = {left}
                                          y = {top} 
                                          width={width} 
                                          height={height}
                                          color={color===null?"blue":color}
                                          onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}
                                          onMouseUp={(e)=>dispatch(onDropElement(id,elementType,e))} />

                                  <PointerStyle cx={left+(width/2)-pointer_radius/2}   cy={top-pointer_radius} r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_TOP))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_TOP))} />
                                  
                                  <PointerStyle cx={left-7}   cy={top+height/2} r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_LEFT))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_LEFT))} />
                                  
                                  <PointerStyle cx={left+width+5}   cy={top+height/2-5} r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_RIGHT))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_RIGHT))} />
                                  
                                  <PointerStyle cx={left+(width/2)}   cy={top+height} r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_BOTTOM))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_BOTTOM))} />
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
