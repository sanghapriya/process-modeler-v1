import React from 'react';
import GenericLine from '../../components/genericLine.component';

import {ACTIVITY,EVENT,GATEWAY,POINTER_BOTTOM,POINTER_LEFT,POINTER_RIGHT,POINTER_TOP} from '../../constants';

import {getActivityPointerTopX,getActivityPointerTopY,
    getActivityPointerLeftX,getActivityPointerLeftY,
    getActivityPointerRightX,getActivityPointerRightY,
    getActivityPointerBottomX,getActivityPointerBottomY
  } from '../../utility';

import {getEventPointerTopX,getEventPointerTopY,
    getEventPointerLeftX,getEventPointerLeftY,
    getEventPointerRightX,getEventPointerRightY,
    getEventPointerBottomX,getEventPointerBottomY
  } from '../../utility';

import {getGatewayPointerTopX,getGatewayPointerTopY,
    getGatewayPointerLeftX,getGatewayPointerLeftY,
    getGatewayPointerRightX,getGatewayPointerRightY,
    getGatewayPointerBottomX,getGatewayPointerBottomY
  } from '../../utility';



const getActivityPointerCoordinates = (left,top,pointerPosition) => {

    if (pointerPosition === POINTER_TOP){

        return {cx:getActivityPointerTopX(left),
                cy:getActivityPointerTopY(top)-25}

    }
    if (pointerPosition === POINTER_LEFT){

        return {cx:getActivityPointerLeftX(left),
            cy:getActivityPointerLeftY(top)-25}

    }
    if (pointerPosition === POINTER_RIGHT){

        return {cx:getActivityPointerRightX(left),
            cy:getActivityPointerRightY(top)-25}

    }
    else{

        return {cx:getActivityPointerBottomX(left),
            cy:getActivityPointerBottomY(top)-25}
    }
}


const getEventPointerCoordinates = (left,top,pointerPosition) => {
    if (pointerPosition === POINTER_TOP){

        return {cx:getEventPointerTopX(left),
                cy:getEventPointerTopY(top)-25}

    }
    if (pointerPosition === POINTER_LEFT){

        return {cx:getEventPointerLeftX(left),
            cy:getEventPointerLeftY(top)-25}

    }
    if (pointerPosition === POINTER_RIGHT){

        return {cx:getEventPointerRightX(left),
            cy:getEventPointerRightY(top)-25}

    }
    else{

        return {cx:getEventPointerBottomX(left),
            cy:getEventPointerBottomY(top)-25}
    }
}


const getGatewayPointerCoordinates = (left,top,pointerPosition) => {
    if (pointerPosition ===POINTER_TOP){
        console.log(getGatewayPointerTopX(left)+" "+getGatewayPointerTopY(top))
        return {cx:getGatewayPointerTopX(left),
                cy:getGatewayPointerTopY(top)-25}

            

    }
    if (pointerPosition === POINTER_LEFT){

        return {cx:getGatewayPointerLeftX(left),
            cy:getGatewayPointerLeftY(top)-25}

    }
    if (pointerPosition === POINTER_RIGHT){

        return {cx:getGatewayPointerRightX(left),
            cy:getGatewayPointerRightY(top)-25}

    }
    else{

        return {cx:getGatewayPointerBottomX(left),
            cy:getGatewayPointerBottomY(top)-25}
    }
}


const getElementPointerCoordinates = (elementType,left,top,pointerPosition) => {

    console.log(elementType)


    if (elementType === ACTIVITY) {

        return getActivityPointerCoordinates(left,top,pointerPosition)
    }
    if (elementType === EVENT) {

        return getEventPointerCoordinates(left,top,pointerPosition)
    }
    else {
        
        return getGatewayPointerCoordinates(left,top,pointerPosition)
    }
    

}

export default function getLine (lineId,elementDetails,startElementId,endElementId,clientX,clientY,color,
                                    startElementType,startPointerPosition,endElementType,endPointerPosition) {

                                        


            var startElementCoordinate = getElementPointerCoordinates(
                                                    startElementType,
                                                    elementDetails[startElementId-1].left,
                                                    elementDetails[startElementId-1].top,
                                                    startPointerPosition
                                                    );
            var endElementCoordinate = (endElementId === null?null:getElementPointerCoordinates(
                                                                                    endElementType,
                                                                                    elementDetails[endElementId-1].left,
                                                                                    elementDetails[endElementId-1].top,
                                                                                    endPointerPosition
                                                                                    ));
                                                

            return  <GenericLine key={lineId}
                        color= {color}
                        x1={startElementCoordinate.cx} 
                        x2 = {(endElementId === null?clientX:endElementCoordinate.cx)} 
                        y1 = {startElementCoordinate.cy} 
                        y2={(endElementId === null?clientY:endElementCoordinate.cy)} />

};



