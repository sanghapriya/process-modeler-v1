import React from 'react';
import {useDispatch} from 'react-redux';
import {onGrabElement,onDropElement} from '../actions';
import {ACTIVITY,EVENT,GATEWAY} from '../constants';


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
                        return <svg>
                                
                                  <rect x={left} y={top} 
                                    width={width} 
                                    height={height}
                                    style={{"fill":color===null?"blue":color,
                                          "stroke":"blue",
                                          "cursor": "move",
                                          "strokeWidth":"5",
                                          "fillOpacity":"0.1"}}
                                    draggable
                                    onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}
                                    onMouseUp={(e)=>dispatch(onDropElement(id,elementType,e))}
                                     />
                                {getConnectionPoint(left+width/2,top)}
                                {getConnectionPoint(left,top+height/2)}
                                {getConnectionPoint(left+width/2,top+height)}
                                {getConnectionPoint(left+width,top+height/2)}
                                </svg>;

                      case EVENT:
                        var radius = 50;
                        return  <svg><circle cx={left}  cy={top}  
                                        r={radius} 
                                        style={{"fill":color===null?"blue":color,
                                        "stroke":"blue",
                                        "cursor": "move",
                                        "strokeWidth":"5",
                                        "fillOpacity":"0.1"}}
                                        draggable
                                        onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}
                                        onMouseUp={(e)=>dispatch(onDropElement(id,elementType,e))}
                                        />
                                        {getConnectionPoint(left-radius,top)}
                                        {getConnectionPoint(left,top-radius)}
                                        {getConnectionPoint(left+radius,top)}
                                        {getConnectionPoint(left,top+radius)}
                                        
                                        
                                        </svg>;
                      
                      case GATEWAY:
                        var width=100
                        var height = 100
                        var points = (left-width/2)+","+top+" "+left+","+(top+height/2)+" "+(left+width/2)+","+top+" "+left+","+(top-height/2);
                        return <svg>
                                <polygon points={points} 
                                          width={width} 
                                          height={height}
                                          style={{"fill":color===null?"blue":color,
                                                "stroke":"blue",
                                                "cursor": "move",
                                                "strokeWidth":"5",
                                                "fillOpacity":"0.1"}}
                                          draggable
                                          onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType))}
                                          onMouseUp={(e)=>dispatch(onDropElement(id,elementType,e))} />
                                          {getConnectionPoint(left-width/2,top)}
                                        {getConnectionPoint(left,top-width/2)}
                                        {getConnectionPoint(left+width/2,top)}
                                        {getConnectionPoint(left,top+width/2)}
                                          
                                          </svg>;
                      default:

                              return <circle cx={top}  cy={left}  
                                                        r="40" 
                                                        style={{"fill":color===null?"blue":color,
                                                        "stroke":"pink",
                                                        "cursor": "move",
                                                        "strokeWidth":"5",
                                                        "fillOpacity":"0.1"}}
                                                        draggable
                                                        onMouseDown={(e)=>dispatch(onGrabElement(e,id,elementType,e))}/>;



                      }
                }





  export default function GenericElement (props)  {
    const id = props.id;
    const dispatch = useDispatch();
    const elementType = props.elementType;

    
      return getElement(elementType,props.top,props.left,props.color,id,dispatch)
      
  }
