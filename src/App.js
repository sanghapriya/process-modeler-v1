import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {useSelector, useDispatch} from 'react-redux';
import {createElement,testRedux} from './actions';


export default function App () {

// onObjectDragEnd(e,id){
//
//         console.log(id);
//
//         //
//         // this.setState({
//         //           pos1 :this.state.pos3 - e.clientX,
//         //           pos2 :this.state.pos4 - e.clientY,
//         //           pos3 :e.clientX,
//         //           pos4 :e.clientY,
//         //           top: ( this.state.top -(this.state.pos4 - e.clientY)),
//         //           left:(this.state.left -(this.state.pos3 - e.clientX)) });
//         //
//         // console.log(this.state)
//
//         }
// {typeof(objects) ==='undefined'?console.log(objects):objects.map((obj)=><h1>Hello</h1>)}


  const dispatch = useDispatch();
  const elements = useSelector(state => state.createElement.elements);


  console.log(elements)


  return (
                  <div>
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Menu
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item draggable onDragEnd={(e)=>dispatch(createElement(e))}>Square</Dropdown.Item>
                    </Dropdown.Menu>
                   </Dropdown>
                   {elements.map(obj => (obj))}

                 </div>
              );;
}
