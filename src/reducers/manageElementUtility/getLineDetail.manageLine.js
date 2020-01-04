export default  function getLineDetail (lineId,elementDetails,startElementId,endElementId,clientX,clientY,color)  {     
                                                                                        
    return  { 
        id:lineId, 
        startElementId:startElementId,
        endElementId:endElementId,
        x:clientX,
        y:clientY,
        color:color
        }
    }