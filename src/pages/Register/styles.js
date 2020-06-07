import styled from 'styled-components';
import backgroundRegister from '../../assets/backgroundRegister.png';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const ContainerForm = styled.div`
  display: flex;
  height: 100%;
  width: 550px;
  background: #7E57C2;
  flex-direction: column;
  justify-content: center;
  padding: 30px 45px 30px 30px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-image: url(${backgroundRegister});
  background-size: cover;
  padding: 10%;
`;

export const ContainerTitleForm = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  margin-bottom: 50px;
`;

export const TitleForm = styled.p`
  font-size: 23px;
  color: #FFF;
  width: 42%;
`;

export const LineDecoration = styled.hr`
  display: block;
  margin-top: 5px;
  color: #FFF;
  width: 58%;
`;

export const Input = styled.input`
  display: flex;
  background: transparent;
  height: 43px;
  align-self: stretch;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255,255,255,0.6);
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  color: #FFF;
  font-size: 16px;
  margin-bottom: 25px;
`;

export const Button = styled.button`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background: #44375A;
  height: 45px;
  padding: 10px 30px;
  border: 0;
  color: #FFF;
  font-size: 16px;
  margin-top: 25px;
  cursor: pointer;
  &:hover{
    background: #523f72;
  }
`;

export const TitleInfo = styled.p`
  font-size: 23px;
  color: #7E57C2;
`;

export const TextInfo = styled.p`
  font-size: 17px;
  color: #6A5987;
  text-align: justify;
  width: 600px;
  margin-top: 10px;
`;





