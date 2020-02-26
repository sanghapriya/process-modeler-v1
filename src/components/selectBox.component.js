import React from 'react';
import SelectBoxStyle from './styles/selectBox.style';

export default function SelectBox (props)  {
    console.log(props);
  
      return(

                
        <SelectBoxStyle 
              x={props.x1<props.x2?props.x1:props.x2} 
              y={props.y1<props.y2?props.y1:props.y2}  
              width={Math.abs(props.x2-props.x1)} 
              height={Math.abs(props.y2-props.y1)}
                                      
                    
                   />

          

      )
  }