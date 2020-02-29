import React from 'react';
import {useDispatch} from 'react-redux';
import {onGrabElement,onDropElement} from '../actions';
import {ACTIVITY,EVENT,GATEWAY,POINTER_BOTTOM,POINTER_LEFT,POINTER_RIGHT,POINTER_TOP} from '../constants';
import ActivityStyle from './styles/activity.style';
import EventStyle from './styles/event.style';
import GatewayStyle from './styles/gateway.style'
import PointerStyle from './styles/pointer.style'


  const getPointerStyle = (cx,cy,elementId,position) => {

        return <PointerStyle cx={cx}   cy={cy} r={10} color ={"green"}/>

  }

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
                                  {getPointerStyle(left-5+(width/2),top-2,id,POINTER_TOP)}
                                  {getPointerStyle(left-2,top+height/2-5,id,POINTER_LEFT)}
                                  {getPointerStyle(left+width-2,top+height/2-5,id,POINTER_RIGHT)}
                                  {getPointerStyle(left-5+(width/2),top+height-3,id,POINTER_BOTTOM)}
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
                                  {getPointerStyle(left-5+(radius/2),top-2,id,POINTER_TOP)}
                                  {getPointerStyle(left-2,top+radius/2-5,id,POINTER_LEFT)}
                                  {getPointerStyle(left+radius-2,top+radius/2-5,id,POINTER_RIGHT)}
                                  {getPointerStyle(left-5+(radius/2),top+radius-3,id,POINTER_BOTTOM)}
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
                                  {getPointerStyle(left+(width/2)-3,top-10,id,POINTER_TOP)}
                                  {getPointerStyle(left-7,top+height/2,id,POINTER_LEFT)}
                                  {getPointerStyle(left+width+5,top+height/2-5,id,POINTER_RIGHT)}
                                  {getPointerStyle(left+(width/2),top+height,id,POINTER_BOTTOM)}
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
