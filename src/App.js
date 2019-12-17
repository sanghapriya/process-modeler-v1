import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './components/square.component';

import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from 'react-bootstrap/Dropdown';

export default class App extends Component{

constructor() {
  super();
  this.state = { elements:[]
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


onObjectDragged(){

  console.log("Object Dragged");

}


onMenuObjectDragEnd(e){

        this.setState({
                        elements:
                          <Square   pos1={-1*e.clientX}
                                    pos2= {-1*e.clientY}
                                    pos3={e.clientX}
                                    pos4={e.clientY}
                                    top={e.clientY}
                                    left={e.clientX }/>

        });


        console.log(this.state)


        }

onObjectDragEnd(e){
        this.setState({
                  pos1 :this.state.pos3 - e.clientX,
                  pos2 :this.state.pos4 - e.clientY,
                  pos3 :e.clientX,
                  pos4 :e.clientY,
                  top: ( this.state.top -(this.state.pos4 - e.clientY)),
                  left:(this.state.left -(this.state.pos3 - e.clientX)) });

        console.log(this.state)

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
      {this.state.elements}
      </div>
  );
}

}
