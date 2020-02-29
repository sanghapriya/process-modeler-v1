import styled from 'styled-components';

const PointerStyle = styled.div`

position: absolute;
border-style: solid;
left: ${props => props.cx}px;
top:  ${props => props.cy}px;
background-color: ${props => props.color};
width: ${props => props.r}px;
height:${props => props.r}px;
border-radius: 50%;
display: inline-block;


&:hover{
    width: ${props => props.r*2}px;
height:${props => props.r*2}px;
background-color: yellow;

    
}
`;

export default PointerStyle;