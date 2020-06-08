import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const ContainerUsers = styled.div`
  display: flex;
  height: 100%;
  width: 450px;
  background: #7E57C2;
  flex-direction: column;
  padding: 20px 10px;
`;

export const ListUsers = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  overflow: auto;
`;

export const ContainerChat = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: #DDD;
`;

export const TitleApp = styled.p`
  display: flex;
  align-self: center;
  font-size: 24px;
  color: #FFF;
  margin-bottom: 30px;
`;

export const ContainerTitleUsers = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 0px 5px;
`;

export const TitleUsers = styled.p`
  font-size: 16px;
  color: #FFF;
  width: 30%;
`;

export const LineDecoration = styled.hr`
  display: block;
  margin-top: 5px;
  color: #FFF;
  width: 80%;
`;