import styled from 'styled-components';
import backgroundRegister from '../../assets/backgroundRegister.png';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const ContainerUsers = styled.div`
  display: flex;
  height: 100%;
  width: 360px;
  max-width: 360px;
  min-width: 360px;
  background: #7E57C2;
  flex-direction: column;
  padding: 20px 0px 0px 10px;
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
  padding: 40px 0px 30px 0px;
`;

export const TitleApp = styled.p`
  display: flex;
  align-self: center;
  font-size: 24px;
  color: #FFF;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const ContainerTitleUsers = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-right: 10px;
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
  width: 80%;
`;

export const HeaderChat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0px 30px;
`;

export const ListMessages = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  flex: 1;
  margin-top: 20px;
  margin-bottom: 10px;
  overflow: auto;
`;

export const Message = styled.p`
  display: flex;
  max-width: 70%;
  padding: 15px;
  border-radius: 30px;
  margin: 10px 0px;
  background: ${props => props.isMy ? '#7E57C2' : '#FFF'};
  color: ${props => props.isMy ? '#FFF' : '#333'};
  align-self: ${props => props.isMy ? 'flex-end' : 'flex-start'};
  font-size: 16px;
`;

export const ContainerFooter = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 30px;
`;

export const FooterChat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #FFF;
  border-radius: 30px;
  width: 100%;
  padding: 5px 20px;
`;

export const ButtonSend = styled.div`
  width: 50px;
  min-width: 50px;
  height: 50px;
  min-height: 50px;
  border-radius: 25px;
  background: #7E57C2;
  background-image: url(${props => props.src});
  background-size: cover;
  cursor: pointer;
  margin-left: 10px;
`;

export const LineHeader = styled.hr`
  border-top: 1px solid #888;
  width: 100%;
  margin-top: 5px;
`;

export const NameHeader = styled.p`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  color: #888888;
  background: #DDD;
  padding: 0px 20px;
  position: absolute;
  align-self: center;
`;

export const TextAreaStyles = {
  display: 'flex',
  width: '100%',
  background: '#FFF',
  border: 0,
  borderRadius: '30px',
  resize: 'none',
  padding: '0px 10px',
  fontSize: '16px'
}