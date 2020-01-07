import React from 'react';
import GenericLine from '../../components/genericLine.component';




export default function getLine (lineId,elementDetails,startElementId,endElementId,clientX,clientY,color) {


            return  <GenericLine key={lineId}
                        color= {color}
                        x1={elementDetails[startElementId-1].left} 
                        x2 = {(endElementId === null?clientX:elementDetails[endElementId-1].left)} 
                        y1 = {elementDetails[startElementId-1].top} 
                        y2={(endElementId === null?clientY:elementDetails[endElementId-1].top)} />

};



