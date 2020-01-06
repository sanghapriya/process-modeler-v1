import React from 'react';
import GenericElement from '../../components/genericElement.component';



export default function createElement (state,action ) {

                            var latestElementId = state.latestElementId;
                            var elements = <GenericElement          key = { latestElementId+1}
                                                            id ={ latestElementId+1}
                                                            pos1={-1*action.e.clientX}
                                                            pos2= {-1*action.e.clientY}
                                                            pos3={action.e.clientX}
                                                            pos4={action.e.clientY}
                                                            top={action.e.clientY}
                                                            color= {"red"}
                                                            left={action.e.clientX}
                                                            elementType={action.elementType}
                                                            />;

                            var elementDetails = {
                                                            pos1:-1*action.e.clientX,
                                                            pos2: -1*action.e.clientY,
                                                            pos3:action.e.clientX,
                                                            pos4:action.e.clientY,
                                                            color: "red",
                                                            top:action.e.clientY,
                                                            left:action.e.clientX,};




                            return {
                                    ...state,
                                    latestElementId:state.latestElementId+1,
                                    elements:[...state.elements,elements],
                                    elementDetails:[...state.elementDetails,elementDetails]
                                };

    }