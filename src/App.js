import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {useSelector, useDispatch} from 'react-redux';
import {createElement,testRedux} from './actions';


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
                      <Dropdown.Item draggable onDragEnd={(e)=>dispatch(createElement(e))}>Square</Dropdown.Item>
                    </Dropdown.Menu>
                   </Dropdown>
                   {elements.map(obj => (obj))}

                 </div>
              );;
}
