import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './components/square.component';

import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from 'react-bootstrap/Dropdown';

export default class App extends Component{

constructor() {
        super();
        this.state = { elements:[],
                       elementId:0,
                       elementDetails:[]
                      };
        this.clickMe = this.clickMe.bind(this);
        this.onObjectDragged = this.onObjectDragged.bind(this);
        this.onObjectDragEnd = this.onObjectDragEnd.bind(this);
        this.onMenuObjectDragEnd = this.onMenuObjectDragEnd.bind(this);
}

clickMe() {

  this.setState(state => ({
    testVar: "Dude where is my car"
  }));

  console.log("Clicked");

}


onObjectDragged(e,id){

  console.log("Object Dragged"+id);
  this.setState({})

}


onMenuObjectDragEnd(e){

      var elements = this.state.elements;
      var elementDetails = this.state.elementDetails;
      // var elementId = this.state.elementId;
      elements.push(
                    <div draggable onDragEnd={(e) => this.onObjectDragged(e,this.state.elementId)} key = {this.state.elementId+1}>
                            <Square
                                id = {this.state.elementId+1}
                                pos1={-1*e.clientX}
                                pos2= {-1*e.clientY}
                                pos3={e.clientX}
                                pos4={e.clientY}
                                top={e.clientY}
                                left={e.clientX}
                                />
                      </div>
                  );

       elementDetails.push({
                              pos1:-1*e.clientX,
                              pos2: -1*e.clientY,
                              pos3:e.clientX,
                              pos4:e.clientY,
                              top:e.clientY,
                              left:e.clientX,
                            });


        this.setState({
                        elementId:this.state.elementId+1,
                        elements:elements,
                        elementDetails: elementDetails
                        });


        console.log(this.state)


        }

onObjectDragEnd(e,id){

        console.log(id);

        //
        // this.setState({
        //           pos1 :this.state.pos3 - e.clientX,
        //           pos2 :this.state.pos4 - e.clientY,
        //           pos3 :e.clientX,
        //           pos4 :e.clientY,
        //           top: ( this.state.top -(this.state.pos4 - e.clientY)),
        //           left:(this.state.left -(this.state.pos3 - e.clientX)) });
        //
        // console.log(this.state)

        }


render() {
  return (
    <div>
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
    Menu
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item draggable onDragEnd = {this.onMenuObjectDragEnd}>Square</Dropdown.Item>
      <Dropdown.Item draggable>Circle</Dropdown.Item>
      <Dropdown.Item draggable>Diamond</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
      {this.state.elements.map((element) => element)}
      </div>
  );
}

}
