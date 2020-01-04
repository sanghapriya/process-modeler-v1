import React from 'react';

export default function SelectBox (props)  {
    console.log(props);
  
      return(
          
        <rect x={props.x1<props.x2?props.x1:props.x2} y={props.y1<props.y2?props.y1:props.y2}  
              width={Math.abs(props.x2-props.x1)} height={Math.abs(props.y2-props.y1)}
                    style={{  
                        stroke: "black",
                        strokeWidth: "4",
                        fill:"#044B94",
                         fillOpacity:"0.2"

                    }} 
                   
                    
                   />

          

      )
  }