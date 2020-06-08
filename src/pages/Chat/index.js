import React, { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import ItemUserList from '../../components/ItemUserList';
import generalIcon from '../../assets/general.png';
import { Container, ContainerChat, ContainerUsers, TitleApp, ContainerTitleUsers, LineDecoration, TitleUsers, ListUsers } from './styles';

const Chat = () => {

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3001', { transport: ['websocket'] });
  }, []);

  return (
    <Container>
      <ContainerUsers>
        <TitleApp>Threechat</TitleApp>
        <ItemUserList user={{ name: 'Geral', photo: generalIcon }} />
        <ContainerTitleUsers>
          <TitleUsers>Usuários</TitleUsers>
          <LineDecoration />
        </ContainerTitleUsers>
        <ListUsers>
          <ItemUserList user={{ name: 'Geral' }} />
          <ItemUserList user={{ name: 'Geral' }} />
          <ItemUserList user={{ name: 'Geral' }} />
          <ItemUserList user={{ name: 'Geral' }} />
          <ItemUserList user={{ name: 'Geral' }} />
          <ItemUserList user={{ name: 'Geral' }} />
        </ListUsers>
      </ContainerUsers>
      <ContainerChat>

      </ContainerChat>
    </Container>
  )
}

export default Chat