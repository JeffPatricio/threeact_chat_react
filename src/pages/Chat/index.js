import React, { useState, useEffect, Fragment } from 'react';
import socketIOClient from "socket.io-client";
import { LoadingPage } from '../../components/Loading';
import ItemUserList from '../../components/ItemUserList';
import generalIcon from '../../assets/general.png';
import { Container, ContainerChat, ContainerUsers, TitleApp, ContainerTitleUsers, LineDecoration, TitleUsers, ListUsers } from './styles';

const Chat = () => {

  const [loading, setLoading] = useState(true);
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const socket = await socketIOClient('http://localhost:3001', { transport: ['websocket'] });
      socket.on('listUsers', data => setListUsers(data));
      setLoading(false);
    })()
  }, []);

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
          </ContainerChat>
        </Container>
      }
    </Fragment>
  )
}

export default Chat