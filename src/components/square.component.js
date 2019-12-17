import React, { Component } from 'react';

export default class Square extends Component {

  constructor(props) {
  super(props);
  this.state=
              {
                clickMe: props.clickMe,
                onObjectDragged: props.onObjectDragged,
                onObjectDragEnd: props.onObjectDragEnd,
                pos1:props.pos1,
                pos2:props.pos2,
                pos3:props.pos3,
                pos4:props.pos4,
                top:props.top,
                left:props.left

              };



}


componentDidMount() {}





render() {
  return (

    <div style = {{

                      position: "absolute",
                      zIndex: 9,
                      backgroundColor: "#f1f1f1",
                      textAlign: "center",
                      border: "1px solid #d3d3d3",
                      top: this.state.top+"px",
                      left: this.state.left+"px"
                    }}
        draggable
        onClick = {this.state.clickMe}
        onDrag = {this.state.onObjectDragged}
        onDragEnd = {this.state.onObjectDragEnd}>


    <div style = {{
                   padding: "10px",
                   cursor: "move",
                   zIndex: 10,
                   backgroundColor: "#2196F3",
                   color: "#fff"}}>


          Hello There!!!
      </div>
      <p> Lets see if you can move me!</p>
    </div>
)}

  }
