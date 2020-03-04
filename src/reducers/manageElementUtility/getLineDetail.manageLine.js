
export default  function getLineDetail (lineId,elementDetails,startElementId,endElementId,clientX,clientY,
                                        color,startElementType,startPointerPosition,endElementType,endPointerPosition)  {    
                                                                                        
    return  { 
        id:lineId, 
        startElementId:startElementId,
        startElementType:startElementType,
        startPointerPosition:startPointerPosition,
        endElementId:endElementId,
        endElementType:endElementType,
        endPointerPosition:endPointerPosition,
        x:clientX,
        y:clientY,
        color:color
        
        
        }
    }