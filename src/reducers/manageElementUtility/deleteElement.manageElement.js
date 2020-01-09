


export default function deleteElement (state)  {

                console.log(state.elementDetails)

                return {
                    ...state,
                    lineDetails:state.lineDetails.filter((lineDetail,index) => 
                                                    !state.selectedLineIds.includes(lineDetail.id)),

                    lines:state.lines.filter((line,index) => 
                                                    !state.selectedLineIds.includes(state.lineDetails[index].id)),

                    elementDetails:state.elementDetails.filter((elementDetail,index) => 
                                                    !state.selectedElementIds.includes(elementDetail.id)),

                    elements:state.elements.filter((element,index) => 
                                                 !state.selectedElementIds.includes(state.elementDetails[index].id)),
                    

                    selectedElementIds:[],
                    selectedLineIds:[]
                }

            }
                    