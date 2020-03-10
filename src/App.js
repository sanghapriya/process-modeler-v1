import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown,ButtonToolbar,Button,DropdownButton} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {LINE_SELECTED,DRAG_SELECTED,SELECT_ELEMENT, onGrabElement} from './actions';
import {createElement,lineSelected,dragSelected,selectElement,onDropElement,onMoveElement,onDelete} from './actions';
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
  const propertyBox = useSelector(state => state.manageElement.propertyBox);



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
                   <Button variant="danger" onClick={(e)=>dispatch(onDelete())}>Delete</Button>
                   </ButtonToolbar>
                   <div  
                   style={{"background":"#B3D9FF",
                            "opacity": "0.5"
                           }}
                  
                   onMouseDown={(e)=>dispatch(onGrabElement(e,null,null))}
                   onMouseUp={(e)=>dispatch(onDropElement(null,null,e))}
                   onMouseMove = {(e)=>dispatch(onMoveElement(e))}>
                     
                     {propertyBox}
                      {elements.map(obj => (obj))}
                        <svg width= {window.innerWidth} height= {window.innerHeight}>
                          {lines.map(obj => (obj))}
                        </svg>
                      {selectBox}
                      
                   
                   </div>

                 </div>
              );;
}
