import React from 'react';



export default function GenericLine (props)  {
    
      return(
        <svg>
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
       </svg>
      )
  }
