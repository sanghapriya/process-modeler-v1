
import styled from 'styled-components';

const GatewayStyle = styled.div`
        width: ${props => props.width}px;
        height: ${props => props.height}px;
        position: absolute;
        border-style: solid;
        left: ${props => props.x}px;
        top:  ${props => props.y}px;
        background: ${props => props.color};
        transform: rotate(40deg);
      `;

export default GatewayStyle;