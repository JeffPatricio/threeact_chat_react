import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import TextareaAutosize from 'react-textarea-autosize';
import { getApi } from '../../services';
import { AppContext } from '../../App';
import Loading from '../../components/Loading';
import ItemUserList from '../../components/ItemUserList';
import generalIcon from '../../assets/general.png';
import buttonIcon from '../../assets/button.png';
import userIcon from '../../assets/user.png';
import {
  Container, ContainerChat, ContainerUsers, TitleApp, ContainerTitleUsers, LineDecoration, TitleUsers, ListUsers, HeaderChat, LineHeader, NameHeader,
  ListMessages, FooterChat, TextAreaStyles, ButtonSend, Message, ContainerFooter, ContainerInfo, MyName, MyProfile, NameMessage, TimeMessage
} from './styles';

const Chat = () => {

  const textInput = useRef(null);
  const listMessages = useRef(null);
  const appData = useContext(AppContext);
  const [socket, setSocket] = useState(null);
  const [textMessage, setTextMessage] = useState('');
  const [nameChat, setNameChat] = useState('Geral');
  const [idChat, setIdChat] = useState(0);
  const [messages, setMessages] = useState([]);
  const [listUsers, setListUsers] = useState([]);
  const [countNotRead, setCountNotRead] = useState({});
  const sessionActive = idChat === 0 ? 0 : appData.authUser.id < idChat ? `${appData.authUser.id}${idChat})` : `${idChat}${appData.authUser.id}`;

  useEffect(() => {
    (async () => {
      const socketConnection = socketIOClient(`http://localhost:3001?id_user=${appData.authUser.id}`, { transport: ['websocket'], });
      socketConnection.on('listUsers', data => setListUsers(data));
      setSocket(socketConnection);
    })()
  }, []);

  useEffect(() => {
    (async () => {
      if (socket) {
        socket.off('logonUser');
        socket.off('logoffUser');
        socket.on('logonUser', (user) => {
          const usersOn = listUsers.filter(userList => `${userList.id}` !== `${user.id}`);
          setListUsers([...usersOn, user]);
        });
        socket.on('logoffUser', (user) => {
          const usersOn = listUsers.filter(userList => `${userList.id}` !== `${user.id}`);
          setListUsers([...usersOn, user]);
        });
      }
    })()
  }, [listUsers]);

  useEffect(() => {
    (async () => {
      if (listMessages.current) listMessages.current.scrollTop = listMessages.current.scrollHeight;
      if (socket) {
        socket.off('newMessage');
        socket.on('newMessage', (message) => {
          console.log('new Messgae')
          const { id_receiver, id_sender } = message;
          const sessionMessage = id_receiver === 0 ? 0 : id_receiver < id_sender ? parseInt(`${id_receiver}${id_sender}`) : parseInt(`${id_sender}${id_receiver}`);
          if (sessionMessage === sessionActive) return setMessages([...messages, message]);
        });
      }
    })()
  }, [messages]);

  useEffect(() => {
    (async () => {
      const userId = appData.authUser.id;
      const session = idChat === 0 ? 0 : userId < idChat ? `${userId}${idChat}` : `${idChat}${userId}`;
      const { messages } = await getApi(`/messages/${session}`);
      setMessages(messages);
    })()
  }, [idChat]);

  const sendMessage = () => {
    if (textMessage.trim().length > 0) {
      socket.emit('sendMessage', { id_receiver: idChat, text: textMessage, id_sender: appData.authUser.id });
      setTextMessage('');
    }
  };

  return (
    <Container>
      <ContainerUsers>
        <MyProfile src={appData.authUser.photo || userIcon} />
        <MyName>{appData.authUser.name}</MyName>
        <ItemUserList
          user={{ id: 0, name: 'Geral', photo: generalIcon }}
          active={idChat === 0}
          onClick={() => {
            setIdChat(0);
            setNameChat('Geral');
          }}
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
                active={idChat === user.id}
                onClick={() => {
                  setIdChat(user.id)
                  setNameChat(user.name)
                }}
              />
            ))
          }
        </ListUsers>
        <TitleApp>Threechat</TitleApp>
      </ContainerUsers>
      {
        (idChat === undefined) && <ContainerInfo />
      }
      {
        (idChat !== undefined) &&
        <ContainerChat>
          <HeaderChat>
            <LineHeader />
            <NameHeader>{nameChat}</NameHeader>
          </HeaderChat>
          <ListMessages ref={listMessages}>
            {
              messages.map((message, index) => {
                const isMy = `${message.id_sender}` === `${appData.authUser.id}`;
                const date = new Date(message.send_date).toLocaleDateString('pt-BR') + ' ' + new Date(message.send_date).toLocaleTimeString('pt-BR');
                return (
                  <Message key={index} isMy={isMy}>
                    {
                      (!isMy) &&
                      <NameMessage>{message.name}</NameMessage>
                    }
                    {message.text}
                    <TimeMessage isMy={isMy}>{date}</TimeMessage>
                  </Message>
                )
              })
            }
          </ListMessages>
          <ContainerFooter>
            <FooterChat>
              <TextareaAutosize
                ref={textInput}
                autoFocus={true}
                value={textMessage}
                onChange={e => setTextMessage(e.currentTarget.value)}
                maxRows={6}
                style={TextAreaStyles}
                className='textarea-placeholder-custom'
                placeholder='Digite a sua mensagem...'
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                    return textInput.current.focus();
                  }
                }}
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
