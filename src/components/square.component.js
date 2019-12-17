import React, { Component } from 'react';

// const squareDiv = {
//                   position: "absolute",
//                   zIndex: 9,
//                   backgroundColor: "#f1f1f1",
//                   textAlign: "center",
//                   border: "1px solid #d3d3d3",
//                   top:
//                 };

export default class Square extends Component {



  constructor(props) {
  super(props);
  this.state=
              {
                clickMe: props.clickMe,
                onObjectDragged: props.onObjectDragged,
                pos1:0,
                pos2:0,
                pos3:0,
                pos4:0,
                top:0,
                left:0

              };

  this.onObjectDragEnd = this.onObjectDragEnd.bind(this);


}


componentDidMount() {}


onObjectDragEnd(e){

  console.log(e.offsetTop);

this.setState({
          pos1 :this.state.pos3 - e.clientX,
          pos2 :this.state.pos4 - e.clientY,
          pos3 :e.clientX,
          pos4 :e.clientY,
          top: ( this.state.top -this.state.pos4 + e.clientY),
          left:(this.state.left + e.clientY) });



console.log(this.state)

        }






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
                    }} onClick = {this.state.clickMe}
    onDrag = {this.state.onObjectDragged} onDragEnd = {this.onObjectDragEnd}>


    <div

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
