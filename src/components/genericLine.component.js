import React from 'react';



export default function GenericLine (props)  {
    
      return(
        <svg>
            <circle cx={props.x1}  cy={props.y1}  
                                        r="5" 
                                        style={{"fill":"black",
                                        "stroke":"black",
                                        "cursor": "move",
                                        "strokeWidth":"5",
                                        "fillOpacity":"0.1"}}
                                        draggable
                                        />
            <line 
            x1={props.x1} 
            y1={props.y1} 
            x2={props.x2} 
            y2={props.y2} 
            style={{   
        
                stroke: props.color === undefined?"pink":props.color,
                strokeWidth: "4",
                pointerEvents:"visiblePoint"
            }}
            />
            <circle cx={props.x2}  cy={props.y2}  
                            r="5" 
                            style={{"fill":"black",
                            "stroke":"black",
                            "cursor": "move",
                            "strokeWidth":"5",
                            "fillOpacity":"0.1"}}
                            draggable
                            />
            </svg>
            
       
      )
  }
