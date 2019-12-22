import React from 'react';
import {useDispatch} from 'react-redux';
import {moveElement} from '../actions';
import {ACTIVITY,EVENT,GATEWAY} from '../constants';


  const getStyle = (elementType,top,left) => {

                    switch(elementType) {

                      case ACTIVITY:

                              return {

                                "height": "100px",
                                "width": "100px",
                                "position": "absolute",
                                "zIndex": 9,
                                "backgroundColor": "#f1f1f1",
                                "textAlign": "center",
                                "border": "1px solid #d3d3d3",
                                "top": top+"px",
                                "left": left+"px",
                                "cursor": "move",
                                "display": "inline-block",
                                              
                              };

                      case EVENT:
                              
                        return {

                          "height": "100px",
                          "width": "100px",
                          "position": "absolute",
                          "backgroundColor": "#f1f1f1",
                          "borderRadius": "50%",
                          "textAlign": "center",
                          "top": top+"px",
                          "left": left+"px",
                          "cursor": "move",
                          "display": "inline-block",
                          
                          };
                      
                      case GATEWAY:

                        return {

                          "height": "100px",
                          "width": "100px",
                          "position": "absolute",
                          "backgroundColor": "#f1f1f1",
                          "top": top+"px",
                          "left": left+"px",
                          "cursor": "move",
                          "transform": "rotate(45deg)"
                          
                          };
                      default:

                              return {

                                "height": "100px",
                                "width": "100px",
                                "position": "absolute",
                                "zIndex": 9,
                                "backgroundColor": "#f1f1f1",
                                "textAlign": "center",
                                "border": "1px solid #d3d3d3",
                                "top": top+"px",
                                "left": left+"px",
                                "cursor": "move",
                                
                                };



                      }
                }





  export default function GenericElement (props)  {
    const id = props.id;
    const dispatch = useDispatch();
    const elementType = props.elementType;

    
      return(
        <div style = {getStyle(elementType,props.top,props.left)}
            draggable
            onDragEnd={(e)=>dispatch(moveElement(e,id,elementType))}>


          <p> {elementType}: {id} </p>
        </div>
      )
  }
