import React, { Component } from 'react';

export default class Square extends Component {


constructor(props){
  super(props)
  this.state ={
                id: props.id,
                top : props.top,
                left: props.left};

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
                    }}
        draggable>


    <div style = {{
                   padding: "10px",
                   cursor: "move",
                   zIndex: 10,
                   backgroundColor: "#2196F3",
                   color: "#fff"}}>


          Hello There!!! {this.state.id}
      </div>
      <p> Lets see if you can move me!</p>
    </div>
)}

  }
