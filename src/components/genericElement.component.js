import React from 'react';
import {useDispatch} from 'react-redux';
import {onGrabElement,onDropElement,onStartLineDraw,onEndLineDraw} from '../actions';
import {ACTIVITY,EVENT,GATEWAY,POINTER_BOTTOM,POINTER_LEFT,POINTER_RIGHT,POINTER_TOP} from '../constants';
import {getActivityPointerTopX,getActivityPointerTopY,
        getActivityPointerLeftX,getActivityPointerLeftY,
        getActivityPointerRightX,getActivityPointerRightY,
        getActivityPointerBottomX,getActivityPointerBottomY
      } from '../utility';

import {getEventPointerTopX,getEventPointerTopY,
        getEventPointerLeftX,getEventPointerLeftY,
        getEventPointerRightX,getEventPointerRightY,
        getEventPointerBottomX,getEventPointerBottomY
      } from '../utility';

import {getGatewayPointerTopX,getGatewayPointerTopY,
        getGatewayPointerLeftX,getGatewayPointerLeftY,
        getGatewayPointerRightX,getGatewayPointerRightY,
        getGatewayPointerBottomX,getGatewayPointerBottomY
      } from '../utility';

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
                                  
                                  <PointerStyle cx={getActivityPointerTopX(left)}   cy={getActivityPointerTopY(top)} 
                                                r={pointer_radius} color ={"green"}
                                                onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_TOP))}
                                                onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_TOP))} />

                                  <PointerStyle cx={getActivityPointerLeftX(left)}   cy={getActivityPointerLeftY(top)} 
                                                r={pointer_radius} color ={"green"}
                                                onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_LEFT))}
                                                onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_LEFT))} />  

                                  <PointerStyle cx={getActivityPointerRightX(left)}   cy={getActivityPointerRightY(top)} 
                                                r={pointer_radius} color ={"green"}
                                                onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_RIGHT))}
                                                onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_RIGHT))} />

                                  <PointerStyle cx={getActivityPointerBottomX(left)}   cy={getActivityPointerBottomY(top)} 
                                                r={pointer_radius} color ={"green"}
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

                                  <PointerStyle cx={getEventPointerTopX(left)}   cy={getEventPointerTopY(top)} 
                                            r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_TOP))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_TOP))} />

                                  <PointerStyle cx={getEventPointerLeftX(left)}   cy={getEventPointerLeftY(top)}  
                                            r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_LEFT))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_LEFT))} />

                                  <PointerStyle cx={getEventPointerRightX(left)}   cy={getEventPointerRightY(top)}  
                                            r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_RIGHT))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_RIGHT))} />

                                  <PointerStyle cx={getEventPointerBottomX(left)}   cy={getEventPointerBottomY(top)}  
                                            r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_BOTTOM))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_BOTTOM))} />

                                 
                                  </div>;
                      
                      case GATEWAY:
                        var width=50;
                        var height = 50;
                        console.log(getGatewayPointerTopX(left)+" "+getGatewayPointerTopY(top))
                        return <div><GatewayStyle 
                                          x = {left}
                                          y = {top} 
                                          width={width} 
                                          height={height}
                                          color={color===null?"blue":color}
                                          onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}
                                          onMouseUp={(e)=>dispatch(onDropElement(id,elementType,e))} />

                                  <PointerStyle cx={getGatewayPointerTopX(left)}   cy={getGatewayPointerTopY(top)} 
                                            r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_TOP))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_TOP))} />
                                  
                                  <PointerStyle cx={getGatewayPointerLeftX(left)}   cy={getGatewayPointerLeftY(top)} 
                                            r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_LEFT))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_LEFT))} />
                                  
                                  <PointerStyle cx={getGatewayPointerRightX(left)}   cy={getGatewayPointerRightY(top)} 
                                            r={pointer_radius} color ={"green"}
                                            onMouseDown={(e)=>dispatch(onStartLineDraw(e,id,elementType,POINTER_RIGHT))}
                                            onMouseUp={(e)=>dispatch(onEndLineDraw(e,id,elementType,POINTER_RIGHT))} />
                                  
                                  <PointerStyle cx={getGatewayPointerBottomX(left)}   cy={getGatewayPointerBottomY(top)} 
                                            r={pointer_radius} color ={"green"}
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
