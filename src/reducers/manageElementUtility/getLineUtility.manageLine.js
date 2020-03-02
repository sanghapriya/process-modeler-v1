import React from 'react';
import GenericLine from '../../components/genericLine.component';

const pointer_radius= 10;

const getActivityPointerCoordinates = (left,top,pointerPosition) => {

    var width = 100;
    var height = 100;
    if (pointerPosition === "POINTER_TOP"){

        return {cx:left-pointer_radius/2+(width/2),
                cy:top-pointer_radius/2}

    }
    if (pointerPosition === "POINTER_LEFT"){

        return {cx:left-pointer_radius/2+(width/2),
                cy:top-pointer_radius/2}

    }
    if (pointerPosition === "POINTER_RIGHT"){

        return {cx:left+width-2,
                cy:top+height/2-pointer_radius/2}

    }
    else{

        return {cx:left-pointer_radius/2+(width/2),
            cy:top+height-pointer_radius/2}
    }
}


const getEventPointerCoordinates = (left,top,pointerPosition) => {
    var radius = 50;

    if (pointerPosition === "POINTER_TOP"){
        return {cx:left-pointer_radius/2+(radius/2), cy:top-pointer_radius/2}
    }
    if (pointerPosition === "POINTER_LEFT"){
        return {cx:left-2, cy:top+radius/2-pointer_radius/2}
    }
    if (pointerPosition === "POINTER_RIGHT"){
        return {cx:left+radius-2, cy:top+radius/2-pointer_radius/2}
    }
    else{
        return {cx:left-pointer_radius/2+(radius/2), cy:top+radius-pointer_radius/2}
    }
}


const getGatewayPointerCoordinates = (left,top,pointerPosition) => {

    var width=50;
    var height = 50;

    if (pointerPosition === "POINTER_TOP"){
        return {cx:left+(width/2)-pointer_radius/2, cy:top-pointer_radius}
    }
    if (pointerPosition === "POINTER_LEFT"){
        return {cx:left-7, cy:top+height/2}
    }
    if (pointerPosition === "POINTER_RIGHT"){
        return {cx:left+width+5, cy:top+height/2-5}
    }
    else{
        return {cx:left+(width/2), cy:top+height}
    }
}


const getElementPointerCoordinates = (elementType,left,top,pointerPosition) => {


    if (elementType === "ACTIVITY") {

        return getActivityPointerCoordinates(left,top,pointerPosition)
    }
    if (elementType === "EVENT") {

        return getEventPointerCoordinates(left,top,pointerPosition)
    }
    else {
        
        return getGatewayPointerCoordinates(left,top,pointerPosition)
    }
    

}

export default function getLine (lineId,elementDetails,startElementId,endElementId,clientX,clientY,color,elementType,pointerPosition) {

            var coordinate = getElementPointerCoordinates(
                                                    elementType,
                                                    elementDetails[startElementId-1].left,
                                                    elementDetails[startElementId-1].top,
                                                    pointerPosition
                                                    )

            return  <GenericLine key={lineId}
                        color= {color}
                        x1={coordinate.cx} 
                        x2 = {(endElementId === null?clientX:elementDetails[endElementId-1].left)} 
                        y1 = {coordinate.cy} 
                        y2={(endElementId === null?clientY:elementDetails[endElementId-1].top)} />

};



