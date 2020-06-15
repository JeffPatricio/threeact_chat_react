import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  background: ${props => props.active ? '#DDD' : '#FFF'};
  border: 0;
  border-radius: 15px;
  border-top-right-radius:  ${props => props.active ? '0px' : '15px'};
  border-bottom-right-radius:  ${props => props.active ? '0px' : '15px'};
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  margin-right: ${props => props.active ? '0px' : '10px'};
  &:hover{
    background: #DDD;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
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
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background: #F3B132;
  font-size: 10px;
  font-weight: bold;
  color: #333;
  align-self: flex-end;
`;

export const Online = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 8px;
  background: #8effc3;
  border: 1px solid #333;
`;
