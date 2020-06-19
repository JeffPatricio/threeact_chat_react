import React, { useState, useEffect, useContext, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import { Icon } from '@iconify/react';
import outlineChat from '@iconify/icons-ic/outline-chat';
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
  ListMessages, FooterChat, TextAreaStyles, ButtonSend, Message, ContainerFooter, ContainerInfo, MyName, MyProfile, NameMessage, TimeMessage, ContainerLoading
} from './styles';

const Chat = () => {

  const textInput = useRef(null);
  const listMessages = useRef(null);
  const appData = useContext(AppContext);
  const [loading, setLoading] = useState('general');
  const [socket, setSocket] = useState(null);
  const [textMessage, setTextMessage] = useState('');
  const [nameChat, setNameChat] = useState('Geral');
  const [idChat, setIdChat] = useState(0);
  const [messages, setMessages] = useState([]);
  const [listUsers, setListUsers] = useState([]);
  const sessionActive = idChat === 0 ? 0 : appData.authUser.id < idChat ? `${appData.authUser.id}${idChat}` : `${idChat}${appData.authUser.id}`;

  if (Notification.permission !== 'granted') Notification.requestPermission();

  useEffect(() => {
    (async () => {
      const socketConnection = socketIOClient(`http://localhost:3001?id_user=${appData.authUser.id}`, { transport: ['websocket'] });
      socketConnection.on('listUsers', data => setListUsers(data));
      setSocket(socketConnection);
    })()
  }, [appData.authUser.id]);

  useEffect(() => {
    (async () => {
      if (socket) {
        socket.off('logonUser');
        socket.on('logonUser', async (idUser) => {
          const indexUserOnline = listUsers.findIndex(userList => `${userList.id}` === `${idUser}`);
          const usersModified = listUsers;
          if (indexUserOnline === -1) {
            const { user } = await getApi(`/users/${idUser}`);
            await usersModified.push({ ...user, notReadCount: 0 });
            const sort = usersModified.sort((a, b) => {
              const antName = a.name.toUpperCase();
              const proxName = b.name.toUpperCase();
              return antName > proxName ? 1 : antName < proxName ? -1 : 0
            })
            return setListUsers([...sort]);
          }
          usersModified[indexUserOnline].online = 1;
          setListUsers([...usersModified]);
        });
        socket.off('logoffUser');
        socket.on('logoffUser', (idUser) => {
          const indexUserOffline = listUsers.findIndex(userList => `${userList.id}` === `${idUser}`);
          const usersModified = listUsers;
          usersModified[indexUserOffline].online = 0;
          setListUsers([...usersModified]);
        });
      }
    })()
  }, [listUsers, socket]);

  useEffect(() => {
    (async () => {
      if (listMessages.current) listMessages.current.scrollTop = listMessages.current.scrollHeight;
      if (socket) {
        socket.off('newMessage');
        socket.on('newMessage', (message) => {
          const { id_receiver, id_sender } = message;
          const sessionMessage = id_receiver === 0 ? 0 : id_receiver < id_sender ? `${id_receiver}${id_sender}` : `${id_sender}${id_receiver}`;
          if (sessionMessage === sessionActive) {
            socket.emit('readMessages', { id_sender: idChat });
            return setMessages([...messages, message]);
          }
          if ((sessionMessage !== 0) && (`${id_sender}` !== `${appData.authUser.id}`)) {
            const indexSender = listUsers.findIndex(userList => `${userList.id}` === `${id_sender}`);
            const usersModified = listUsers;
            usersModified[indexSender].notReadCount = usersModified[indexSender].notReadCount + 1;
            setListUsers([...usersModified]);
            new Notification(usersModified[indexSender].name, { body: message.text, icon: usersModified[indexSender].photo || 'https://imgbbb.com/images/2020/06/19/user.png' });
          }
        });
      }
    })()
  }, [messages, listUsers, appData.authUser.id, idChat, socket, sessionActive]);

  useEffect(() => {
    (async () => {
      setLoading('messages');
      if (textInput.current) textInput.current.focus();
      const userId = appData.authUser.id;
      const session = idChat === 0 ? 0 : userId < idChat ? `${userId}${idChat}` : `${idChat}${userId}`;
      const { messages } = await getApi(`/messages/${session}`);
      setLoading('');
      setMessages(messages);
      if (socket && idChat !== 0) {
        socket.emit('readMessages', { id_sender: idChat });
        const userActiveIndex = listUsers.findIndex(userList => `${userList.id}` === `${idChat}`);
        const usersModified = listUsers;
        usersModified[userActiveIndex].notReadCount = 0;
        setListUsers(usersModified);
      }
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
        <TitleApp>
          <Icon icon={outlineChat} color='#FFF' size={30} style={{ marginRight: 5, marginTop: 5 }} />
          Threechat
        </TitleApp>
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
          {
            (loading === 'messages') &&
            <ContainerLoading>
              <Loading fill='#7E57C2' width='35px' />
            </ContainerLoading>
          }
          {
            (loading !== 'messages' && messages.length > 0) &&
            <ListMessages ref={listMessages}>
              {
                messages.map((message, index) => {
                  const isMy = `${message.id_sender}` === `${appData.authUser.id}`;
                  const date = new Date(message.send_date).toLocaleDateString('pt-BR') + ' ' + new Date(message.send_date).toLocaleTimeString('pt-BR');
                  return (
                    <Message key={index} isMy={isMy}>
                      {
                        (!isMy && sessionActive === 0) &&
                        <NameMessage>{message.name}</NameMessage>
                      }
                      {message.text}
                      <TimeMessage isMy={isMy}>{date}</TimeMessage>
                    </Message>
                  )
                })
              }
            </ListMessages>
          }
          {
            (loading !== 'messages' && messages.length === 0) &&
            <ContainerLoading>
              <NameHeader style={{ fontWeight: 'normal' }}>Não ha mensagens a serem exibidas</NameHeader>
            </ContainerLoading>
          }
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
