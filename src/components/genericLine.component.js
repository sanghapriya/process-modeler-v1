import React from 'react';


const getConnectionPoint = (x,y) => {             
    return <circle cx={x}  cy={y}  
            r="5" 
            style={{"fill":"black",
            "stroke":"black",
            "cursor": "move",
            "strokeWidth":"1",
            "fillOpacity":"0.1"}}
            draggable
            />}

export default function GenericLine (props)  {
    
    
      return(
        
           
            <line 
            onClick = {()=>{alert("Yo!")}}
            x1={props.x1} 
            y1={props.y1} 
            x2={props.x2} 
            y2={props.y2} 
            strokeWidth = {4}
            stroke={props.color === undefined?"pink":props.color}
            />
            
       
      )
  }
