import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  background: #FFF;
  border: 0;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover{
    background: #EEE;
  }
`;

export const Perfil = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #EEE;
  background-image: url(${props => props.src});
  background-size: cover;
`;

export const Name = styled.p`
  font-size: 18px;
  color: #333;
  margin-left: 15px;
`;
