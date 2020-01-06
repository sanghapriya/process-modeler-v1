import React from 'react';
import GenericLine from '../../components/genericLine.component';




export default function getLine (lineId,elementDetails,startElementId,endElementId,clientX,clientY,color) {
    console.log(elementDetails[startElementId-1])
    console.log(startElementId)

            return  <GenericLine key={lineId}
                        x1={elementDetails[startElementId-1].left} 
                        x2 = {(endElementId === null?clientX:elementDetails[endElementId-1].left)} 
                        y1 = {elementDetails[startElementId-1].top} 
                        y2={(endElementId === null?clientY:elementDetails[endElementId-1].top)} />

};



