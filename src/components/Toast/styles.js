import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  from {top: 0; opacity: 0;}
  to {top: 30px; opacity: 1;}
`;

const fadeout = keyframes`
  from {top: 30px; opacity: 1;}
  to {top: 0; opacity: 0;}
`;

export const Container = styled.div`
  min-width: 20%;
  background-color: ${props => props.color};
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 16px;
  position: fixed;
  max-width: 80%;
  z-index: 1;
  top: 30px;
  animation: ${fadein} 0.5s, ${fadeout} 0.5s 2.5s;
`;