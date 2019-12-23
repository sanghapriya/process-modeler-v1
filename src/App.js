import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {createElement,toogleLineSelected} from './actions';
import {ACTIVITY,EVENT,GATEWAY} from './constants';


export default function App () {

  const dispatch = useDispatch();
  const elements = useSelector(state => state.manageElement.elements);



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
                      <Dropdown.Item onClick={(e)=>dispatch(toogleLineSelected())}>Line</Dropdown.Item>
                    </Dropdown.Menu>
                   </Dropdown>
                   {elements.map(obj => (obj))}

                 </div>
              );;
}
