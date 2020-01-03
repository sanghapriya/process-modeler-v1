import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {createElement,lineSelected,onDropElement,onMoveElement} from './actions';
import {ACTIVITY,EVENT,GATEWAY} from './constants';


export default function App () {

  const dispatch = useDispatch();
  const elements = useSelector(state => state.manageElement.elements);
  const lines = useSelector(state => state.manageElement.lines);



  return (
                  <div>
                   
                    
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Menu
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item draggable onDragEnd={(e)=>dispatch(createElement(e,ACTIVITY))}>ACTIVITY</Dropdown.Item>
                      <Dropdown.Item draggable onDragEnd={(e)=>dispatch(createElement(e,GATEWAY))}>GATEWAY</Dropdown.Item>
                      <Dropdown.Item draggable onDragEnd={(e)=>dispatch(createElement(e,EVENT))}>EVENT</Dropdown.Item>
                      <Dropdown.Item onClick={(e)=>dispatch(lineSelected())}>Line</Dropdown.Item>
                    </Dropdown.Menu>
                   </Dropdown>
                   <svg width={window.innerWidth} height={window.innerHeight} onMouseUp={(e)=>dispatch(onDropElement(null,null))}
                   onMouseMove = {(e)=>dispatch(onMoveElement(e))}>
                   {elements.map(obj => (obj))}
                   {lines.map(obj => (obj))}
                   </svg>

                 </div>
              );;
}
