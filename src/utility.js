
import {POINTER_RADIUS,ACTIVITY_WIDTH,ACTIVITY_HEIGHT,EVENT_RADIUS,GATEWAY_WIDTH,GATEWAY_HEIGHT} from './constants'

export const getActivityPointerTopX = (left) => left-POINTER_RADIUS/2+(ACTIVITY_WIDTH/2);
export const getActivityPointerTopY = (top) => top-POINTER_RADIUS/2;

export const getActivityPointerLeftX = (left) => left-2;
export const getActivityPointerLeftY = (top) => top+ACTIVITY_HEIGHT/2-POINTER_RADIUS/2;

export const getActivityPointerRightX = (left) => left+ACTIVITY_WIDTH-2;
export const getActivityPointerRightY = (top) => top+ACTIVITY_HEIGHT/2-POINTER_RADIUS/2;

export const getActivityPointerBottomX = (left) => left-POINTER_RADIUS/2+(ACTIVITY_WIDTH/2);
export const getActivityPointerBottomY = (top) => top+ACTIVITY_HEIGHT-POINTER_RADIUS/2;




export const getEventPointerTopX = (left) => left-POINTER_RADIUS/2+(EVENT_RADIUS/2);
export const getEventPointerTopY = (top) => top-POINTER_RADIUS/2;

export const getEventPointerLeftX = (left) => left-2;
export const getEventPointerLeftY = (top) => top+EVENT_RADIUS/2-POINTER_RADIUS/2;

export const getEventPointerRightX = (left) => left+EVENT_RADIUS-2;
export const getEventPointerRightY = (top) => top+EVENT_RADIUS/2-POINTER_RADIUS/2;

export const getEventPointerBottomX = (left) => left-POINTER_RADIUS/2+(EVENT_RADIUS/2);
export const getEventPointerBottomY = (top) => top+EVENT_RADIUS-POINTER_RADIUS/2;



export const getGatewayPointerTopX = (left) => left+(GATEWAY_WIDTH/2)-POINTER_RADIUS/2;
export const getGatewayPointerTopY = (top) => top-POINTER_RADIUS;

export const getGatewayPointerLeftX = (left) => left-7;
export const getGatewayPointerLeftY = (top) => top+GATEWAY_HEIGHT/2;

export const getGatewayPointerRightX = (left) => left+GATEWAY_WIDTH+5;
export const getGatewayPointerRightY = (top) => top+GATEWAY_HEIGHT/2-5;

export const getGatewayPointerBottomX = (left) => left+(GATEWAY_WIDTH/2);
export const getGatewayPointerBottomY = (top) => top+GATEWAY_HEIGHT;
