import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './components/square.component';



export default class App extends Component{

constructor() {
  super();
  this.state = { testVar:""};
  this.clickMe = this.clickMe.bind(this);
  this.onObjectDragged = this.onObjectDragged.bind(this);


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


render() {
  return (
    <div className="App">
      <Square clickMe={this.clickMe} onObjectDragged = {this.onObjectDragged}/>
      <h2>{this.state.testVar}</h2>
    </div>
  );
}

}
