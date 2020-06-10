import React, { useState, useEffect, Fragment, useContext } from 'react';
import socketIOClient from 'socket.io-client';
import TextareaAutosize from 'react-textarea-autosize';
import { AppContext } from '../../App';
import { LoadingPage } from '../../components/Loading';
import ItemUserList from '../../components/ItemUserList';
import generalIcon from '../../assets/general.png';
import buttonIcon from '../../assets/button.png';
import {
  Container, ContainerChat, ContainerUsers, TitleApp, ContainerTitleUsers, LineDecoration, TitleUsers, ListUsers, HeaderChat, LineHeader, NameHeader,
  ListMessages, FooterChat, TextAreaStyles, ButtonSend, Message, ContainerFooter, ContainerInfo
} from './styles';

const Chat = () => {

  const appData = useContext(AppContext);
  const [socket, setSocket] = useState(null);
  const [textMessage, setTextMessage] = useState('');
  const [privateChatId, setPrivateChatId] = useState({});
  const [messages, setMessages] = useState([]);
  const [listUsers, setListUsers] = useState([]);


  useEffect(() => {
    (async () => {
      const socketConnection = socketIOClient(`http://localhost:3001?id_user=${appData.authUser.id}`, { transport: ['websocket'], });
      socketConnection.on('listUsers', data => setListUsers(data));
      socketConnection.on('newMessage', data => { alert('new Message reapaz'); console.log(data) });
      setSocket(socketConnection);
    })()
  }, []);

  const sendMessage = () => {
    if (textMessage) {
      socket.emit('sendMessage', { id_receiver: privateChatId.id, text: textMessage, id_sender: appData.authUser.id });
      setTextMessage('');
    }
  };

  return (
    <Container>
      <ContainerUsers>
        <TitleApp>Threechat</TitleApp>
        <ItemUserList
          user={{ id: 0, name: 'Geral', photo: generalIcon }}
          active={privateChatId.id === 0}
          onClick={() => setPrivateChatId({ id: 0, name: 'Geral', photo: generalIcon })}
        />
        <ContainerTitleUsers>
          <TitleUsers>Usuários</TitleUsers>
          <LineDecoration />
        </ContainerTitleUsers>
        <ListUsers className='list-users-custom'>
          {
            listUsers.map((user, index) => (
              <ItemUserList
                key={index}
                user={user}
                active={privateChatId.id === user.id}
                onClick={() => setPrivateChatId(user)}
              />
            ))
          }
        </ListUsers>
      </ContainerUsers>
      {
        (privateChatId.id === undefined) && <ContainerInfo />
      }
      {
        (privateChatId.id !== undefined) &&
        <ContainerChat>
          <HeaderChat>
            <LineHeader />
            <NameHeader>{privateChatId.name}</NameHeader>
          </HeaderChat>
          <ListMessages>
            <Message isMy={true}>it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more </Message>
            <Message>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Message>
            <Message>Letraset sheets containing Lorem Ipsum passages, and more</Message>
            <Message isMy={true}>it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more </Message>
            <Message>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Message>
            <Message>Letraset sheets containing Lorem Ipsum passages, and more</Message>
            <Message isMy={true}>it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more </Message>
          </ListMessages>
          <ContainerFooter>
            <FooterChat>
              <TextareaAutosize
                value={textMessage}
                onChange={e => setTextMessage(e.currentTarget.value)}
                maxRows={6}
                style={TextAreaStyles}
                className='textarea-placeholder-custom'
                placeholder='Digite a sua mensagem...'
              />
              <ButtonSend src={buttonIcon} onClick={sendMessage} />
            </FooterChat>
          </ContainerFooter>
        </ContainerChat>
      }
    </Container>
  )
}

export default Chat;
