
import styled from 'styled-components';

export const GatewayStyle = styled.div`
        width: 0;
        height: 0;
        border: 50px solid transparent;
        border-bottom-color: red;
        position: relative;
        top: ${props => -props.y}px;
      
      &:after {
        content: '';
        position: absolute;
        left: ${props => -props.x}px;
        top: ${props => props.y}px;
        width: 0;
        height: 0;
        border: 50px solid transparent;
        border-top-color: red;
    }
      `;