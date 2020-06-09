
import React, { useState, useEffect, Fragment } from 'react';
import socketIOClient from "socket.io-client";
import { LoadingPage } from '../../components/Loading';
import ItemUserList from '../../components/ItemUserList';
import generalIcon from '../../assets/general.png';
import { Container, ContainerChat, ContainerUsers, TitleApp, ContainerTitleUsers, LineDecoration, TitleUsers, ListUsers } from './styles';

const socket = socketIOClient("http://localhost:3001", {
  transport: ["websocket"],
});

const Chat = () => {
  
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    socket.on('listUsers', data => setListUsers(data));
    socket.on("sendMessage", (message) => {
      setMessages([...message, message]);
    });
    setLoading(false);
  }, []);

  const sendMessage = () => {
    socket.emit("sendMessage", {
      to: "general",
      message,
    });
  };

  return (
    <Fragment>
      {
        (loading) && <LoadingPage />
      }
      {
        (!loading) &&
        <Container>
          <ContainerUsers>
            <TitleApp>Threechat</TitleApp>
            <ItemUserList user={{ name: 'Geral', photo: generalIcon }} />
            <ContainerTitleUsers>
              <TitleUsers>Usuários</TitleUsers>
              <LineDecoration />
            </ContainerTitleUsers>
            <ListUsers>
              {
                listUsers.map((user, index) => (
                  <ItemUserList key={index} user={user} />
                ))
              }
            </ListUsers>
          </ContainerUsers>
          <ContainerChat>
              <textarea
          rows="50"
          cols="50"
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
          style={{ resize: "none" }}
        ></textarea>
        <br />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <br />
        <button type="button" onClick={() => sendMessage()}>
          Enviar
        </button>
          </ContainerChat>
        </Container>
      }
    </Fragment>
  )
}

export default Chat;
