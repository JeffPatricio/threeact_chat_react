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

export const ThreeChat = styled.img`
  font-size: 23px;
  color: #FFF;
  width: 42%;
`;

export const ThreeChatText = styled.p`
  font-size: 40px;
  color: #FFF;
  width: 42%;
`;

export const LineDecoration = styled.hr`
  display: block;
  margin-top: 5px;
  color: #FFF;
  width: 58%;
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

export const BackButton = styled.button`
  background: #7E57C2;
  color: #fff;
  width: 100px;
  height: 50px;
  border: none;
  font-size: 20px;
  border-radius: 5px;
  outline: none;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;





