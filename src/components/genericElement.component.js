import React from 'react';
import {useDispatch} from 'react-redux';
import {moveElement} from '../actions';

// export default class Square extends Component {

  export default function GenericElement (props)  {
    var id = props.id;

    const dispatch = useDispatch();
      return(
        <div style = {{

                          position: "absolute",
                          zIndex: 9,
                          backgroundColor: "#f1f1f1",
                          textAlign: "center",
                          border: "1px solid #d3d3d3",
                          top: props.top+"px",
                          left: props.left+"px"
                        }}
            draggable
            onDragEnd={(e)=>dispatch(moveElement(e,id))}>


        <div style = {{
                       padding: "10px",
                       cursor: "move",
                       zIndex: 10,
                       backgroundColor: "#2196F3",
                       color: "#fff"}}>


              Hello There!!! {id}
          </div>
          <p> Lets see if you can move me!</p>
        </div>
      )
  }
