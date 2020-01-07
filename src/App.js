import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown,ButtonToolbar,Button,DropdownButton} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {LINE_SELECTED,DRAG_SELECTED,SELECT_ELEMENT, onGrabElement} from './actions';
import {createElement,lineSelected,dragSelected,selectElement,onDropElement,onMoveElement} from './actions';
import {ACTIVITY,EVENT,GATEWAY} from './constants';




const getMenuSelectedName = (menuOptionChosen) => {

  switch(menuOptionChosen){

    case LINE_SELECTED:
      return "Line";

    case SELECT_ELEMENT:
      return "Select";


    case DRAG_SELECTED:
      return "Drag";

    default:
      return "Drag"

  }

}


export default function App () {

  const dispatch = useDispatch();
  const elements = useSelector(state => state.manageElement.elements);
  const lines = useSelector(state => state.manageElement.lines);
  const menuOptionChosen = useSelector(state => state.manageElement.menuOptionChosen);
  const selectBox = useSelector(state => state.manageElement.selectBox);



  return (
                  <div>
                   <ButtonToolbar>
                   <DropdownButton id="dropdown-basic-button" title={getMenuSelectedName(menuOptionChosen)}>
                        <Dropdown.Item href="#/action-1" onClick={(e)=>dispatch(lineSelected())}>Line</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={(e)=>dispatch(dragSelected())}>Drag</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={(e)=>dispatch(selectElement())}>Select</Dropdown.Item>
                      </DropdownButton>
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Activity Menu
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item draggable onDragEnd={(e)=>dispatch(createElement(e,ACTIVITY))}>ACTIVITY</Dropdown.Item>
                      <Dropdown.Item draggable onDragEnd={(e)=>dispatch(createElement(e,GATEWAY))}>GATEWAY</Dropdown.Item>
                      <Dropdown.Item draggable onDragEnd={(e)=>dispatch(createElement(e,EVENT))}>EVENT</Dropdown.Item>
                      
                    </Dropdown.Menu>
                   </Dropdown>
                   </ButtonToolbar>
                   <svg width={window.innerWidth} height={window.innerHeight} 
                   onMouseDown={(e)=>dispatch(onGrabElement(e,null,null))}
                   onMouseUp={(e)=>dispatch(onDropElement(null,null,e))}
                   onMouseMove = {(e)=>dispatch(onMoveElement(e))}>
                   {elements.map(obj => (obj))}
                   {lines.map(obj => (obj))}
                   {selectBox}
                   </svg>

                 </div>
              );;
}
