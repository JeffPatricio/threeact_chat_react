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

export const Profile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #7E57C2;
  background-image: url(${props => props.src});
  background-size: cover;
`;

export const Name = styled.p`
  display: flex;
  font-size: 18px;
  color: #333;
  margin-left: 15px;
  flex: 1;
`;

export const NotReadCount = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #8effc3;
  font-size: 14px;
  color: #333;
  align-self: flex-end;
`;
