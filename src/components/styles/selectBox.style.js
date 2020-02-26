import styled from 'styled-components';

const SelectBoxStyle = styled.div`

width: ${props => props.width}px;
height: ${props => props.height}px;
position: absolute;
border-style: solid;
left: ${props => props.x}px;
top:  ${props => props.y}px;
background: "#044B94";
fillOpacity:"0.2";
`
export default SelectBoxStyle;