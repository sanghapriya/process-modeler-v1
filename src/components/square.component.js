import React, { Component } from 'react';

const squareDiv = {
                  position: "absolute",
                  zIndex: 9,
                  backgroundColor: "#f1f1f1",
                  textAlign: "center",
                  border: "1px solid #d3d3d3"
                };

export default class Square extends Component {



  constructor(props) {
  super(props);
  this.state=
  {
    clickMe: props.clickMe,
    onObjectDragged: props.onObjectDragged

  };


}


componentDidMount() {}


render() {
  return (

    <div style = {squareDiv}>


    <div
      onClick = {this.state.clickMe}
      onDrag = {this.state.onObjectDragged}
      style = {{
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
